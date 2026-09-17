/**
 * Flipper RPC over the Momentum BLE Serial Service.
 *
 * Momentum wires the BLE serial service straight into the Flipper RPC
 * subsystem: RX bytes are fed to `rpc_session_feed()` and decoded with
 * PB_DECODE_DELIMITED, responses are encoded with PB_ENCODE_DELIMITED and
 * pushed out over TX. This module therefore speaks length-delimited protobuf
 * `PB.Main` messages — never a text CLI.
 *
 * Layering: FlipperBleTransport -> FlipperRpc -> UI. React never sees
 * protobuf or characteristics.
 *
 * Phase 3 scope: System Ping only. No state-changing commands.
 */

import { PB } from "@/proto/flipper_pb.js";
import type {
  CharacteristicKey,
  FlipperBleTransport,
  FlipperInputAction,
  FlipperInputKey,
  RpcSimpleResult,
  ScreenFrameEvent,
  ScreenOrientation,
  RpcDeviceInfoEntry,
  RpcDeviceInfoResult,
  RpcPingResult,
  RpcPowerInfoEntry,
  RpcPowerInfoResult,
  RpcSnapshot,
  StorageListEntry,
  StorageListResult,
  StorageReadResult,
  StorageStatResult,
  StorageWriteResult,
} from "./index";
import { getFlipperBleTransport } from "./flipperBleTransport";

/** Momentum caps a single characteristic value chunk at 243 bytes. */
const MAX_CHUNK = 243;
/** Momentum caps one serial data frame at 486 bytes. */
export const MAX_SERIAL_DATA = 486;

const REQUEST_TIMEOUT_MS = 5000;
/** A multi-chunk file read needs more head-room than a single-shot request. */
const READ_TIMEOUT_MS = 30000;
/**
 * Conservative browser-memory safety limit for Storage Read. Files larger than
 * this are never fetched; nothing is ever truncated silently. Easy to raise.
 */
export const MAX_READ_BYTES = 64 * 1024;

/**
 * Storage Write, phase 1. The firmware's protobuf contract states
 * `PB_Storage.File.data max_size: 512`, so one write request carries at most
 * 512 bytes of file data. The encoded frame stays well inside the firmware's
 * 1024-byte RPC buffer.
 */
const WRITE_CHUNK_BYTES = 512;
/** Same conservative ceiling as Storage Read. Nothing larger is ever sent. */
export const MAX_WRITE_BYTES = 64 * 1024;
/** Storage write namespace for this phase. Nothing outside it is writable. */
export const WRITE_NAMESPACE = "/ext/";
/** A multi-chunk write is many frames; it needs more head-room than a read. */
const WRITE_TIMEOUT_MS = 60000;
/** Firmware limit from the protobuf options (`PB_Storage.*.path max_length`). */
const MAX_PATH_LENGTH = 255;

/** Mock-mode only. Clearly simulated content — never device data. */
const MOCK_FILE_NAME = "momentum-demo.txt";
const MOCK_FILE_BYTES = new TextEncoder().encode(
  "Mock file — simulated contents.\nNo Flipper was contacted and nothing was transmitted.\n",
);

/** Mock-mode only: a tiny simulated tree so navigation can be exercised. */
const MOCK_TREE: Record<string, StorageListEntry[]> = {
  "/ext": [
    { type: "dir", name: "infrared", size: 0, md5sum: null },
    { type: "dir", name: "subghz", size: 0, md5sum: null },
    { type: "dir", name: "nfc", size: 0, md5sum: null },
    { type: "dir", name: "badusb", size: 0, md5sum: null },
    { type: "file", name: MOCK_FILE_NAME, size: MOCK_FILE_BYTES.length, md5sum: null },
  ],
  "/ext/infrared": [
    { type: "dir", name: "tv", size: 0, md5sum: null },
    { type: "file", name: "demo.ir", size: 512, md5sum: null },
  ],
  "/ext/infrared/tv": [{ type: "file", name: "samsung.ir", size: 256, md5sum: null }],
  "/ext/subghz": [{ type: "file", name: "demo.sub", size: 384, md5sum: null }],
  "/ext/nfc": [{ type: "file", name: "demo.nfc", size: 192, md5sum: null }],
  "/ext/badusb": [],
};

/**
 * Mock-mode only: files "created" during this session, so the simulated flow
 * behaves like the device (refuse when it exists, read back what was written).
 * Nothing here ever reaches hardware.
 */
const MOCK_WRITTEN = new Map<string, Uint8Array>();

/** Mock-mode only: metadata for a simulated file, or null when it is absent. */
function mockEntryFor(path: string): StorageListEntry | null {
  const name = path.split("/").pop() ?? path;
  const parent = path.slice(0, path.lastIndexOf("/")) || "/ext";
  const written = MOCK_WRITTEN.get(path);
  if (written) return { type: "file", name, size: written.length, md5sum: null };
  if (MOCK_TREE[path]) return { type: "dir", name, size: 0, md5sum: null };
  const known = (MOCK_TREE[parent] ?? []).find((entry) => entry.name === name);
  if (known) return { ...known };
  return null;
}

/** Mock-mode only: simulated bytes. Text for the demo file, bytes otherwise. */
function mockBytesFor(path: string): Uint8Array {
  const written = MOCK_WRITTEN.get(path);
  if (written) return written;
  if (path.endsWith(MOCK_FILE_NAME)) return MOCK_FILE_BYTES;
  const entry = mockEntryFor(path);
  const bytes = new Uint8Array(entry?.size ?? 0);
  for (let i = 0; i < bytes.length; i += 1) bytes[i] = (i * 7 + 11) & 0xff;
  return bytes;
}

/** Mock-mode only: entries of a simulated directory, including new files. */
function mockEntriesFor(path: string): StorageListEntry[] {
  const base = MOCK_TREE[path] ? [...(MOCK_TREE[path] as StorageListEntry[])] : [];
  for (const [filePath, bytes] of MOCK_WRITTEN) {
    const parent = filePath.slice(0, filePath.lastIndexOf("/"));
    if (parent !== path) continue;
    const name = filePath.slice(filePath.lastIndexOf("/") + 1);
    if (base.some((entry) => entry.name === name)) continue;
    base.push({ type: "file", name, size: bytes.length, md5sum: null });
  }
  return base;
}
const PING_PAYLOAD = "Momentum Deck Ping";

function toHex(bytes: Uint8Array): string {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0").toUpperCase()).join(" ");
}

function describe(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

/** `PB_Storage.File.FileType.DIR` as defined in storage.proto. */
const PB_Storage_DIR = 1;

/** Local sanity check only — the path is otherwise passed through unchanged. */
function validateStoragePath(path: string): string | null {
  if (!path) return "A storage path is required.";
  if (!path.startsWith("/")) return "A Flipper storage path must start with a slash, e.g. /ext.";
  if (path.split("/").includes("..")) return "The path may not contain '..'.";
  return null;
}

/**
 * Stricter rules for the one write-capable operation: the firmware rejects
 * non-ASCII paths outright, caps the path at 255 characters, and this phase
 * only ever writes inside `/ext/`.
 */
function validateWritePath(path: string): string | null {
  const basic = validateStoragePath(path);
  if (basic) return basic;
  if (!path.startsWith(WRITE_NAMESPACE) || path.length <= WRITE_NAMESPACE.length) {
    return `Files can only be created inside ${WRITE_NAMESPACE} in this version.`;
  }
  if (path.endsWith("/")) return "A file name is required.";
  if (path.length > MAX_PATH_LENGTH) {
    return `The path is longer than the ${MAX_PATH_LENGTH} characters the Flipper accepts.`;
  }
  for (const char of path) {
    const code = char.charCodeAt(0);
    if (code < 0x20 || code > 0x7e) {
      return "The Flipper only accepts plain ASCII characters in a path.";
    }
  }
  return null;
}

/** Plain-language text for the storage statuses defined in flipper.proto. */
function storageStatusMessage(status: string): string {
  switch (status) {
    case "ERROR_STORAGE_NOT_READY":
      return "The Flipper's storage is not ready — is an SD card inserted?";
    case "ERROR_STORAGE_NOT_EXIST":
      return "That folder does not exist on the Flipper.";
    case "ERROR_STORAGE_EXIST":
      return "That path already exists on the Flipper.";
    case "ERROR_STORAGE_DENIED":
      return "The Flipper refused access to that folder.";
    case "ERROR_STORAGE_INVALID_NAME":
      return "The Flipper rejected that path as invalid.";
    case "ERROR_STORAGE_INVALID_PARAMETER":
      return "The Flipper rejected the request parameters.";
    case "ERROR_STORAGE_ALREADY_OPEN":
      return "That path is already open on the Flipper.";
    case "ERROR_STORAGE_INTERNAL":
      return "The Flipper reported an internal storage error.";
    case "ERROR_STORAGE_NOT_IMPLEMENTED":
      return "This firmware does not implement that storage operation.";
    default:
      return `The Flipper returned status ${status}.`;
  }
}

function statusName(status: number | null | undefined): string {
  if (status === null || status === undefined) return "OK";
  const name = (PB.CommandStatus as unknown as Record<number, string>)[status];
  return name ?? `UNKNOWN (${status})`;
}

/**
 * A request may be answered by a stream of `PB.Main` messages that share the
 * command ID; every message except the last carries `has_next = true`.
 */
interface Pending {
  commandId: number;
  sentAt: number;
  timer: ReturnType<typeof setTimeout>;
  timeoutMs: number;
  timeoutMessage: string;
  parts: PB.Main[];
  rxHex: string[];
  resolve: (parts: PB.Main[]) => void;
  reject: (error: Error) => void;
}

class MomentumRpc {
  private transport: FlipperBleTransport;
  private buffer = new Uint8Array(0);
  private pending = new Map<number, Pending>();
  private commandId = 0;
  private busy = false;
  private lastPing: RpcPingResult | null = null;
  private lastDeviceInfo: RpcDeviceInfoResult | null = null;
  private lastPowerInfo: RpcPowerInfoResult | null = null;
  private lastStorageList: StorageListResult | null = null;
  private lastStorageStat: StorageStatResult | null = null;
  private lastStorageRead: StorageReadResult | null = null;
  private lastStorageWrite: StorageWriteResult | null = null;
  /** Raw RX hex of the frames that completed a request, by command ID. */
  private completedRxHex = new Map<number, string>();
  /** Hex of the most recently decoded incoming frame, for diagnostics. */
  private lastRxHex: string | null = null;
  private ready = false;
  private listeners = new Set<(snapshot: RpcSnapshot) => void>();

  constructor(transport: FlipperBleTransport) {
    this.transport = transport;
    transport.onData((source, bytes) => this.handleData(source, bytes));
    transport.subscribe((snapshot) => {
      const ready = snapshot.state === "connected" && transport.canTransfer();
      if (ready === this.ready) return;
      this.ready = ready;
      if (ready) {
        transport.logEvent("info", "RPC session ready");
      } else {
        this.buffer = new Uint8Array(0);
        this.failAllPending("The Bluetooth connection was lost during the RPC request.");
      }
      this.emit();
    });
  }

  isReady(): boolean {
    return this.ready;
  }

  getSnapshot(): RpcSnapshot {
    return {
      ready: this.ready,
      busy: this.busy,
      lastPing: this.lastPing,
      lastDeviceInfo: this.lastDeviceInfo,
      lastPowerInfo: this.lastPowerInfo,
      lastStorageList: this.lastStorageList,
      lastStorageStat: this.lastStorageStat,
      lastStorageRead: this.lastStorageRead,
      lastStorageWrite: this.lastStorageWrite,
    };
  }

  subscribe(listener: (snapshot: RpcSnapshot) => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  clearLastPing(): void {
    this.lastPing = null;
    this.emit();
  }

  /** Simulated result. Always labelled as mock; never presented as hardware. */
  mockPing(): RpcPingResult {
    const result: RpcPingResult = {
      ok: true,
      mock: true,
      commandId: ++this.commandId,
      roundTripMs: 12,
      payload: PING_PAYLOAD,
      txHex: "(mock — nothing was transmitted)",
      rxHex: "(mock — nothing was received)",
      status: "OK",
      error: null,
    };
    this.lastPing = result;
    this.transport.logEvent("info", "Mock RPC Ping — simulated, no Flipper involved");
    this.emit();
    return result;
  }

  /** The single functional RPC operation in this phase. */
  async ping(): Promise<RpcPingResult> {
    const log = this.transport.logEvent.bind(this.transport);

    if (!this.transport.canTransfer() || !this.ready) {
      const message = this.transport.getSnapshot().state === "connected"
        ? "RPC is not ready — the TX/RX characteristics are not usable."
        : "Not connected to a Flipper.";
      return this.finishPing({ ok: false, error: message });
    }

    const commandId = ++this.commandId;
    const payload = new TextEncoder().encode(PING_PAYLOAD);
    log("info", "RPC Ping request created");
    log("info", `RPC command ID: ${commandId}`);

    let frame: Uint8Array;
    try {
      frame = PB.Main.encodeDelimited({
        commandId,
        commandStatus: PB.CommandStatus.OK,
        hasNext: false,
        systemPingRequest: { data: payload },
      }).finish();
    } catch (error) {
      const message = `Protobuf encode failed: ${describe(error)}`;
      log("error", message);
      return this.finishPing({ ok: false, commandId, error: message });
    }

    const txHex = toHex(frame);
    log("info", `RPC TX bytes: ${txHex}`);

    const started = performance.now();
    const waiter = this.track(commandId, started, REQUEST_TIMEOUT_MS, "RPC Ping timeout");

    try {
      await this.writeFramed(frame);
    } catch (error) {
      this.clearPending(commandId);
      const message = describe(error);
      log("error", `RPC write failed: ${message}`);
      return this.finishPing({ ok: false, commandId, txHex, error: message });
    }

    let response: PB.Main;
    try {
      response = (await waiter)[0] as PB.Main;
    } catch (error) {
      const message = describe(error);
      log("error", message === "RPC Ping timeout" ? "RPC Ping timeout" : `RPC Ping failed: ${message}`);
      return this.finishPing({ ok: false, commandId, txHex, error: message });
    }

    const roundTripMs = Math.round(performance.now() - started);
    const status = statusName(response.commandStatus);
    log("info", `RPC response command ID: ${response.commandId}`);
    log("info", `RPC response status: ${status}`);

    if (response.commandStatus !== PB.CommandStatus.OK) {
      const message = `The Flipper returned status ${status}.`;
      log("error", message);
      return this.finishPing({ ok: false, commandId, txHex, roundTripMs, status, error: message });
    }

    const pong = response.systemPingResponse;
    if (!pong) {
      const message = "The response did not contain a System Ping response.";
      log("error", `RPC malformed response — ${message}`);
      return this.finishPing({ ok: false, commandId, txHex, roundTripMs, status, error: message });
    }

    const returned = new Uint8Array(pong.data ?? []);
    const returnedText = new TextDecoder().decode(returned);
    const matches =
      returned.length === payload.length && returned.every((b, i) => b === payload[i]);

    if (!matches) {
      const message = "The returned payload did not match the payload that was sent.";
      log("error", `RPC Ping failed — ${message}`);
      return this.finishPing({
        ok: false,
        commandId,
        txHex,
        roundTripMs,
        status,
        payload: returnedText,
        error: message,
      });
    }

    log("info", "RPC Ping successful");
    return this.finishPing({
      ok: true,
      commandId,
      txHex,
      roundTripMs,
      status,
      payload: returnedText,
    });
  }

  /** Simulated device info. Always labelled as mock; never real hardware data. */
  mockDeviceInfo(): RpcDeviceInfoResult {
    const result: RpcDeviceInfoResult = {
      ok: true,
      mock: true,
      commandId: ++this.commandId,
      roundTripMs: 18,
      entries: [
        { key: "hardware_model", value: "(mock)" },
        { key: "firmware_origin", value: "(mock)" },
      ],
      txHex: "(mock — nothing was transmitted)",
      rxHex: "(mock — nothing was received)",
      status: "OK",
      error: null,
      at: Date.now(),
    };
    this.lastDeviceInfo = result;
    this.transport.logEvent("info", "Mock Device Info — simulated, no Flipper involved");
    this.emit();
    return result;
  }

  /**
   * Read-only System Device Info. The Flipper answers with a stream of
   * key/value `PB.Main` messages sharing one command ID.
   */
  async getDeviceInfo(): Promise<RpcDeviceInfoResult> {
    const log = this.transport.logEvent.bind(this.transport);

    if (!this.transport.canTransfer() || !this.ready) {
      const message =
        this.transport.getSnapshot().state === "connected"
          ? "RPC is not ready — the TX/RX characteristics are not usable."
          : "Not connected to a Flipper.";
      log("error", `Device Info failed: ${message}`);
      return this.finishDeviceInfo({ ok: false, error: message });
    }

    const commandId = ++this.commandId;
    log("info", "Device Info request created");
    log("info", `Device Info command ID: ${commandId}`);

    let frame: Uint8Array;
    try {
      frame = PB.Main.encodeDelimited({
        commandId,
        commandStatus: PB.CommandStatus.OK,
        hasNext: false,
        systemDeviceInfoRequest: {},
      }).finish();
    } catch (error) {
      const message = `Protobuf encode failed: ${describe(error)}`;
      log("error", `Device Info failed: ${message}`);
      return this.finishDeviceInfo({ ok: false, commandId, error: message });
    }

    const txHex = toHex(frame);
    log("info", `Device Info TX bytes: ${txHex}`);

    const started = performance.now();
    const waiter = this.track(commandId, started, REQUEST_TIMEOUT_MS, "Device Info timeout");

    try {
      await this.writeFramed(frame);
    } catch (error) {
      this.clearPending(commandId);
      const message = describe(error);
      log("error", `Device Info failed: ${message}`);
      return this.finishDeviceInfo({ ok: false, commandId, txHex, error: message });
    }

    let parts: PB.Main[];
    try {
      parts = await waiter;
    } catch (error) {
      const message = describe(error);
      log("error", `Device Info failed: ${message}`);
      return this.finishDeviceInfo({ ok: false, commandId, txHex, error: message });
    }

    const roundTripMs = Math.round(performance.now() - started);
    const rxHex = this.completedRxHex.get(commandId) ?? null;
    this.completedRxHex.delete(commandId);
    log("info", "Device Info response received");

    const first = parts[0] as PB.Main;
    const status = statusName(first.commandStatus);
    log("info", `Device Info response command ID: ${first.commandId}`);
    log("info", `Device Info response status: ${status}`);

    const mismatched = parts.find((part) => Number(part.commandId ?? 0) !== commandId);
    if (mismatched) {
      const message = "Device Info response command ID mismatch";
      log("error", message);
      return this.finishDeviceInfo({
        ok: false,
        commandId,
        txHex,
        rxHex,
        roundTripMs,
        status,
        error: message,
      });
    }

    const failed = parts.find((part) => (part.commandStatus ?? 0) !== PB.CommandStatus.OK);
    if (failed) {
      const failedStatus = statusName(failed.commandStatus);
      const message = `The Flipper returned status ${failedStatus}.`;
      log("error", `Device Info failed: ${message}`);
      return this.finishDeviceInfo({
        ok: false,
        commandId,
        txHex,
        rxHex,
        roundTripMs,
        status: failedStatus,
        error: message,
      });
    }

    const entries: RpcDeviceInfoEntry[] = [];
    for (const part of parts) {
      const info = part.systemDeviceInfoResponse;
      if (!info) {
        const message = "The response did not contain device information.";
        log("error", `Device Info failed: ${message}`);
        return this.finishDeviceInfo({
          ok: false,
          commandId,
          txHex,
          rxHex,
          roundTripMs,
          status,
          error: message,
        });
      }
      entries.push({ key: info.key ?? "", value: info.value ?? "" });
    }

    log("info", "Device Info decoded successfully");
    return this.finishDeviceInfo({
      ok: true,
      commandId,
      txHex,
      rxHex,
      roundTripMs,
      status,
      entries,
    });
  }

  /** Simulated power info. Always labelled as mock; never real hardware data. */
  mockPowerInfo(): RpcPowerInfoResult {
    const result: RpcPowerInfoResult = {
      ok: true,
      mock: true,
      commandId: ++this.commandId,
      roundTripMs: 16,
      entries: [
        { key: "charge_level", value: "(mock)" },
        { key: "charging", value: "(mock)" },
      ],
      txHex: "(mock — nothing was transmitted)",
      rxHex: "(mock — nothing was received)",
      status: "OK",
      error: null,
      at: Date.now(),
    };
    this.lastPowerInfo = result;
    this.transport.logEvent("info", "Mock Power Info — simulated, no Flipper involved");
    this.emit();
    return result;
  }

  /**
   * Read-only System Power Info. Like Device Info, the Flipper answers with a
   * stream of key/value `PB.Main` messages sharing one command ID.
   */
  async getPowerInfo(): Promise<RpcPowerInfoResult> {
    const log = this.transport.logEvent.bind(this.transport);

    if (!this.transport.canTransfer() || !this.ready) {
      const message =
        this.transport.getSnapshot().state === "connected"
          ? "RPC is not ready — the TX/RX characteristics are not usable."
          : "Not connected to a Flipper.";
      log("error", `Power Info failed: ${message}`);
      return this.finishPowerInfo({ ok: false, error: message });
    }

    const commandId = ++this.commandId;
    log("info", "Power Info request created");
    log("info", `Power Info command ID: ${commandId}`);

    let frame: Uint8Array;
    try {
      frame = PB.Main.encodeDelimited({
        commandId,
        commandStatus: PB.CommandStatus.OK,
        hasNext: false,
        systemPowerInfoRequest: {},
      }).finish();
    } catch (error) {
      const message = `Protobuf encode failed: ${describe(error)}`;
      log("error", `Power Info failed: ${message}`);
      return this.finishPowerInfo({ ok: false, commandId, error: message });
    }

    const txHex = toHex(frame);
    log("info", `Power Info TX bytes: ${txHex}`);

    const started = performance.now();
    const waiter = this.track(commandId, started, REQUEST_TIMEOUT_MS, "Power Info timeout");

    try {
      await this.writeFramed(frame);
    } catch (error) {
      this.clearPending(commandId);
      const message = describe(error);
      log("error", `Power Info failed: ${message}`);
      return this.finishPowerInfo({ ok: false, commandId, txHex, error: message });
    }

    let parts: PB.Main[];
    try {
      parts = await waiter;
    } catch (error) {
      const message = describe(error);
      log("error", `Power Info failed: ${message}`);
      return this.finishPowerInfo({ ok: false, commandId, txHex, error: message });
    }

    const roundTripMs = Math.round(performance.now() - started);
    const rxHex = this.completedRxHex.get(commandId) ?? null;
    this.completedRxHex.delete(commandId);
    log("info", "Power Info response received");

    const first = parts[0] as PB.Main;
    const status = statusName(first.commandStatus);
    log("info", `Power Info response command ID: ${first.commandId}`);
    log("info", `Power Info response status: ${status}`);

    const mismatched = parts.find((part) => Number(part.commandId ?? 0) !== commandId);
    if (mismatched) {
      const message = "Power Info response command ID mismatch";
      log("error", message);
      return this.finishPowerInfo({
        ok: false,
        commandId,
        txHex,
        rxHex,
        roundTripMs,
        status,
        error: message,
      });
    }

    const failed = parts.find((part) => (part.commandStatus ?? 0) !== PB.CommandStatus.OK);
    if (failed) {
      const failedStatus = statusName(failed.commandStatus);
      const message = `The Flipper returned status ${failedStatus}.`;
      log("error", `Power Info failed: ${message}`);
      return this.finishPowerInfo({
        ok: false,
        commandId,
        txHex,
        rxHex,
        roundTripMs,
        status: failedStatus,
        error: message,
      });
    }

    const entries: RpcPowerInfoEntry[] = [];
    for (const part of parts) {
      const info = part.systemPowerInfoResponse;
      if (!info) {
        const message = "The response did not contain power information.";
        log("error", `Power Info failed: ${message}`);
        return this.finishPowerInfo({
          ok: false,
          commandId,
          txHex,
          rxHex,
          roundTripMs,
          status,
          error: message,
        });
      }
      entries.push({ key: info.key ?? "", value: info.value ?? "" });
    }

    log("info", "Power Info decoded successfully");
    return this.finishPowerInfo({
      ok: true,
      commandId,
      txHex,
      rxHex,
      roundTripMs,
      status,
      entries,
    });
  }

  /** Simulated directory listing. Always labelled as mock; never real data. */
  mockStorageList(path: string): StorageListResult {
    const result: StorageListResult = {
      ok: true,
      mock: true,
      commandId: ++this.commandId,
      path,
      roundTripMs: 24,
      entries: mockEntriesFor(path),
      txHex: "(mock — nothing was transmitted)",
      rxHex: "(mock — nothing was received)",
      status: "OK",
      error: null,
      at: Date.now(),
    };
    this.lastStorageList = result;
    this.transport.logEvent("info", "Mock Storage List — simulated, no Flipper involved");
    this.emit();
    return result;
  }

  /**
   * Read-only Storage List. The Flipper answers with a stream of
   * `storage_list_response` messages sharing one command ID; each carries a
   * batch of `File` entries and the last one has `has_next = false`.
   */
  async listStorage(path: string): Promise<StorageListResult> {
    const log = this.transport.logEvent.bind(this.transport);

    if (!this.transport.canTransfer() || !this.ready) {
      const message =
        this.transport.getSnapshot().state === "connected"
          ? "RPC is not ready — the TX/RX characteristics are not usable."
          : "Not connected to a Flipper.";
      log("error", `Storage List failed: ${message}`);
      return this.finishStorageList({ ok: false, path, error: message });
    }

    const invalid = validateStoragePath(path);
    if (invalid) {
      log("error", `Storage List failed: ${invalid}`);
      return this.finishStorageList({ ok: false, path, error: invalid });
    }

    const commandId = ++this.commandId;
    log("info", "Storage List request created");
    log("info", `Storage List path: ${path}`);
    log("info", `Storage List command ID: ${commandId}`);

    let frame: Uint8Array;
    try {
      frame = PB.Main.encodeDelimited({
        commandId,
        commandStatus: PB.CommandStatus.OK,
        hasNext: false,
        storageListRequest: { path },
      }).finish();
    } catch (error) {
      const message = `Protobuf encode failed: ${describe(error)}`;
      log("error", `Storage List failed: ${message}`);
      return this.finishStorageList({ ok: false, commandId, path, error: message });
    }

    const txHex = toHex(frame);
    log("info", `Storage List TX bytes: ${txHex}`);

    const started = performance.now();
    const waiter = this.track(commandId, started, REQUEST_TIMEOUT_MS, "Storage List timeout");

    try {
      await this.writeFramed(frame);
    } catch (error) {
      this.clearPending(commandId);
      const message = describe(error);
      log("error", `Storage List failed: ${message}`);
      return this.finishStorageList({ ok: false, commandId, path, txHex, error: message });
    }

    let parts: PB.Main[];
    try {
      parts = await waiter;
    } catch (error) {
      const message = describe(error);
      log("error", `Storage List failed: ${message}`);
      return this.finishStorageList({ ok: false, commandId, path, txHex, error: message });
    }

    const roundTripMs = Math.round(performance.now() - started);
    const rxHex = this.completedRxHex.get(commandId) ?? null;
    this.completedRxHex.delete(commandId);
    log("info", "Storage List response received");

    const first = parts[0] as PB.Main;
    const status = statusName(first.commandStatus);
    log("info", `Storage List response command ID: ${first.commandId}`);
    log("info", `Storage List response status: ${status}`);

    const mismatched = parts.find((part) => Number(part.commandId ?? 0) !== commandId);
    if (mismatched) {
      const message = "Storage List response command ID mismatch";
      log("error", message);
      return this.finishStorageList({
        ok: false,
        commandId,
        path,
        txHex,
        rxHex,
        roundTripMs,
        status,
        error: message,
      });
    }

    const failed = parts.find((part) => (part.commandStatus ?? 0) !== PB.CommandStatus.OK);
    if (failed) {
      const failedStatus = statusName(failed.commandStatus);
      const message = storageStatusMessage(failedStatus);
      log("error", `Storage List failed: ${message} (${failedStatus})`);
      return this.finishStorageList({
        ok: false,
        commandId,
        path,
        txHex,
        rxHex,
        roundTripMs,
        status: failedStatus,
        error: message,
      });
    }

    const entries: StorageListEntry[] = [];
    for (const part of parts) {
      const listing = part.storageListResponse;
      if (!listing) {
        const message = "Storage List unexpected response type";
        log("error", message);
        return this.finishStorageList({
          ok: false,
          commandId,
          path,
          txHex,
          rxHex,
          roundTripMs,
          status,
          error: "The Flipper answered with something other than a directory listing.",
        });
      }
      log("info", `Storage List decoded response part (has_next: ${part.hasNext ? "true" : "false"})`);
      for (const file of listing.file ?? []) {
        entries.push({
          type: file.type === PB_Storage_DIR ? "dir" : "file",
          name: file.name ?? "",
          size: Number(file.size ?? 0),
          md5sum: file.md5sum ? file.md5sum : null,
        });
      }
    }

    log("info", "Storage List decoded successfully");
    log("info", `Storage List entries: ${entries.length}`);
    return this.finishStorageList({
      ok: true,
      commandId,
      path,
      txHex,
      rxHex,
      roundTripMs,
      status,
      entries,
    });
  }

  /** Simulated file metadata. Always labelled as mock; never real data. */
  mockStorageStat(path: string): StorageStatResult {
    const entry = mockEntryFor(path);
    const result: StorageStatResult = {
      ok: entry !== null,
      mock: true,
      commandId: ++this.commandId,
      path,
      entry,
      roundTripMs: 14,
      txHex: "(mock — nothing was transmitted)",
      rxHex: "(mock — nothing was received)",
      status: entry ? "OK" : "ERROR_STORAGE_NOT_EXIST",
      error: entry ? null : storageStatusMessage("ERROR_STORAGE_NOT_EXIST"),
      at: Date.now(),
    };
    this.lastStorageStat = result;
    this.transport.logEvent("info", "Mock Storage Stat — simulated, no Flipper involved");
    this.emit();
    return result;
  }

  /** Simulated file contents. Always labelled as mock; never real data. */
  mockStorageRead(path: string): StorageReadResult {
    const result: StorageReadResult = {
      ok: true,
      mock: true,
      commandId: ++this.commandId,
      path,
      size: mockBytesFor(path).length,
      data: mockBytesFor(path),
      roundTripMs: 31,
      txHex: "(mock — nothing was transmitted)",
      rxHex: "(mock — nothing was received)",
      status: "OK",
      error: null,
      at: Date.now(),
    };
    this.lastStorageRead = result;
    this.transport.logEvent("info", "Mock Storage Read — simulated, no Flipper involved");
    this.emit();
    return result;
  }

  /**
   * Simulated file creation. Always labelled as mock; the radio is never used
   * and no Flipper is contacted. Refuses an existing simulated path, exactly
   * like the real create-only flow.
   */
  mockStorageWrite(path: string, bytes: Uint8Array): StorageWriteResult {
    const log = this.transport.logEvent.bind(this.transport);
    const commandId = ++this.commandId;
    const chunks = Math.max(1, Math.ceil(bytes.length / WRITE_CHUNK_BYTES));

    const invalid = validateWritePath(path);
    const exists = mockEntryFor(path) !== null;
    const error = invalid
      ? invalid
      : bytes.length > MAX_WRITE_BYTES
        ? `That content is ${bytes.length} bytes, which is larger than the ${MAX_WRITE_BYTES} byte limit.`
        : exists
          ? "That path already exists. This version only creates new files."
          : null;

    if (!error) MOCK_WRITTEN.set(path, new Uint8Array(bytes));
    log("info", "Mock Storage Write — simulated, no Flipper involved");

    const result: StorageWriteResult = {
      ok: !error,
      mock: true,
      commandId,
      path,
      size: bytes.length,
      chunks: error ? 0 : chunks,
      roundTripMs: 42,
      txHex: "(mock — nothing was transmitted)",
      rxHex: "(mock — nothing was received)",
      status: error ? null : "OK",
      error,
      partial: false,
      at: Date.now(),
    };
    this.lastStorageWrite = result;
    this.emit();
    return result;
  }

  /**
   * Storage Write. Every chunk of the sequence shares one command ID; each
   * request carries at most 512 bytes in `file.data` and sets `has_next` true
   * except for the last one. The Flipper answers exactly once, with an empty
   * message carrying the command status.
   *
   * The firmware truncates the target with `FSOM_CREATE_ALWAYS` on the first
   * request, so the caller must have confirmed the path does not exist.
   * File contents are never logged.
   */
  async writeStorage(path: string, bytes: Uint8Array): Promise<StorageWriteResult> {
    const log = this.transport.logEvent.bind(this.transport);

    if (!this.transport.canTransfer() || !this.ready) {
      const message =
        this.transport.getSnapshot().state === "connected"
          ? "RPC is not ready — the TX/RX characteristics are not usable."
          : "Not connected to a Flipper.";
      log("error", `Storage Write failed: ${message}`);
      return this.finishStorageWrite({ ok: false, path, size: bytes.length, error: message });
    }

    const invalid = validateWritePath(path);
    if (invalid) {
      log("error", `Storage Write failed: ${invalid}`);
      return this.finishStorageWrite({ ok: false, path, size: bytes.length, error: invalid });
    }

    if (bytes.length > MAX_WRITE_BYTES) {
      const message = `That content is ${bytes.length} bytes, which is larger than the ${MAX_WRITE_BYTES} byte limit.`;
      log("error", `Storage Write failed: ${message}`);
      return this.finishStorageWrite({ ok: false, path, size: bytes.length, error: message });
    }

    const commandId = ++this.commandId;
    const chunkCount = Math.max(1, Math.ceil(bytes.length / WRITE_CHUNK_BYTES));
    log("info", "Storage Write request created");
    log("info", `Storage Write path: ${path}`);
    log("info", `Storage Write command ID: ${commandId}`);
    log("info", `Storage Write bytes: ${bytes.length} in ${chunkCount} chunk(s)`);

    // Every frame is encoded before anything is sent, so an encoding failure
    // can never leave a half-written file behind.
    const frames: Uint8Array[] = [];
    try {
      for (let index = 0; index < chunkCount; index += 1) {
        const offset = index * WRITE_CHUNK_BYTES;
        const chunk = bytes.subarray(offset, Math.min(offset + WRITE_CHUNK_BYTES, bytes.length));
        frames.push(
          PB.Main.encodeDelimited({
            commandId,
            commandStatus: PB.CommandStatus.OK,
            hasNext: index < chunkCount - 1,
            storageWriteRequest: { path, file: { data: chunk } },
          }).finish(),
        );
      }
    } catch (error) {
      const message = `Protobuf encode failed: ${describe(error)}`;
      log("error", `Storage Write failed: ${message}`);
      return this.finishStorageWrite({
        ok: false,
        commandId,
        path,
        size: bytes.length,
        error: message,
      });
    }

    const txHex = frames.map((frame) => toHex(frame)).join("  ");
    log("info", `Storage Write TX frames: ${frames.length}`);

    const started = performance.now();
    // Registered once: the whole sequence is a single pending request.
    const waiter = this.track(commandId, started, WRITE_TIMEOUT_MS, "Storage Write timeout");

    for (let index = 0; index < frames.length; index += 1) {
      try {
        await this.writeFramed(frames[index] as Uint8Array);
      } catch (error) {
        this.clearPending(commandId);
        const message = describe(error);
        log("error", `Storage Write failed: ${message}`);
        return this.finishStorageWrite({
          ok: false,
          commandId,
          path,
          size: bytes.length,
          chunks: index,
          txHex,
          // The first request already truncated/created the file.
          partial: index > 0,
          error: message,
        });
      }
    }

    let parts: PB.Main[];
    try {
      parts = await waiter;
    } catch (error) {
      const message = describe(error);
      log("error", `Storage Write failed: ${message}`);
      return this.finishStorageWrite({
        ok: false,
        commandId,
        path,
        size: bytes.length,
        chunks: frames.length,
        txHex,
        partial: true,
        error: message,
      });
    }

    const roundTripMs = Math.round(performance.now() - started);
    const rxHex = this.completedRxHex.get(commandId) ?? null;
    this.completedRxHex.delete(commandId);
    const first = parts[0] as PB.Main;
    const status = statusName(first.commandStatus);
    log("info", "Storage Write response received");
    log("info", `Storage Write response command ID: ${first.commandId}`);
    log("info", `Storage Write response status: ${status}`);

    if (parts.some((part) => Number(part.commandId ?? 0) !== commandId)) {
      const message = "Storage Write response command ID mismatch";
      log("error", message);
      return this.finishStorageWrite({
        ok: false,
        commandId,
        path,
        size: bytes.length,
        chunks: frames.length,
        txHex,
        rxHex,
        roundTripMs,
        status,
        partial: true,
        error: message,
      });
    }

    const failed = parts.find((part) => (part.commandStatus ?? 0) !== PB.CommandStatus.OK);
    if (failed) {
      const failedStatus = statusName(failed.commandStatus);
      const message = storageStatusMessage(failedStatus);
      log("error", `Storage Write failed: ${message} (${failedStatus})`);
      return this.finishStorageWrite({
        ok: false,
        commandId,
        path,
        size: bytes.length,
        chunks: frames.length,
        txHex,
        rxHex,
        roundTripMs,
        status: failedStatus,
        partial: true,
        error: message,
      });
    }

    log("info", "Storage Write completed successfully");
    return this.finishStorageWrite({
      ok: true,
      commandId,
      path,
      size: bytes.length,
      chunks: frames.length,
      txHex,
      rxHex,
      roundTripMs,
      status,
    });
  }

  /**
   * Read-only Storage Stat. A single `storage_stat_response` carries one
   * `File` with the entry's type, name and size.
   */
  async statStorage(path: string): Promise<StorageStatResult> {
    const log = this.transport.logEvent.bind(this.transport);

    if (!this.transport.canTransfer() || !this.ready) {
      const message =
        this.transport.getSnapshot().state === "connected"
          ? "RPC is not ready — the TX/RX characteristics are not usable."
          : "Not connected to a Flipper.";
      log("error", `Storage Stat failed: ${message}`);
      return this.finishStorageStat({ ok: false, path, error: message });
    }

    const invalid = validateStoragePath(path);
    if (invalid) {
      log("error", `Storage Stat failed: ${invalid}`);
      return this.finishStorageStat({ ok: false, path, error: invalid });
    }

    const commandId = ++this.commandId;
    log("info", "Storage Stat request created");
    log("info", `Storage Stat path: ${path}`);
    log("info", `Storage Stat command ID: ${commandId}`);

    let frame: Uint8Array;
    try {
      frame = PB.Main.encodeDelimited({
        commandId,
        commandStatus: PB.CommandStatus.OK,
        hasNext: false,
        storageStatRequest: { path },
      }).finish();
    } catch (error) {
      const message = `Protobuf encode failed: ${describe(error)}`;
      log("error", `Storage Stat failed: ${message}`);
      return this.finishStorageStat({ ok: false, commandId, path, error: message });
    }

    const txHex = toHex(frame);
    log("info", `Storage Stat TX bytes: ${txHex}`);

    const started = performance.now();
    const waiter = this.track(commandId, started, REQUEST_TIMEOUT_MS, "Storage Stat timeout");

    try {
      await this.writeFramed(frame);
    } catch (error) {
      this.clearPending(commandId);
      const message = describe(error);
      log("error", `Storage Stat failed: ${message}`);
      return this.finishStorageStat({ ok: false, commandId, path, txHex, error: message });
    }

    let parts: PB.Main[];
    try {
      parts = await waiter;
    } catch (error) {
      const message = describe(error);
      log("error", `Storage Stat failed: ${message}`);
      return this.finishStorageStat({ ok: false, commandId, path, txHex, error: message });
    }

    const roundTripMs = Math.round(performance.now() - started);
    const rxHex = this.completedRxHex.get(commandId) ?? null;
    this.completedRxHex.delete(commandId);
    log("info", "Storage Stat response received");

    const response = parts[0] as PB.Main;
    const status = statusName(response.commandStatus);
    log("info", `Storage Stat response command ID: ${response.commandId}`);
    log("info", `Storage Stat response status: ${status}`);

    if (Number(response.commandId ?? 0) !== commandId) {
      const message = "Storage Stat response command ID mismatch";
      log("error", message);
      return this.finishStorageStat({
        ok: false,
        commandId,
        path,
        txHex,
        rxHex,
        roundTripMs,
        status,
        error: message,
      });
    }

    if ((response.commandStatus ?? 0) !== PB.CommandStatus.OK) {
      const message = storageStatusMessage(status);
      log("error", `Storage Stat failed: ${message} (${status})`);
      return this.finishStorageStat({
        ok: false,
        commandId,
        path,
        txHex,
        rxHex,
        roundTripMs,
        status,
        error: message,
      });
    }

    const stat = response.storageStatResponse;
    if (!stat?.file) {
      log("error", "Storage Stat unexpected response type");
      return this.finishStorageStat({
        ok: false,
        commandId,
        path,
        txHex,
        rxHex,
        roundTripMs,
        status,
        error: "The Flipper answered with something other than file information.",
      });
    }

    const file = stat.file;
    log("info", "Storage Stat decoded successfully");
    return this.finishStorageStat({
      ok: true,
      commandId,
      path,
      txHex,
      rxHex,
      roundTripMs,
      status,
      entry: {
        type: file.type === PB_Storage_DIR ? "dir" : "file",
        name: file.name ? file.name : path.split("/").pop() ?? path,
        size: Number(file.size ?? 0),
        md5sum: file.md5sum ? file.md5sum : null,
      },
    });
  }

  /**
   * Read-only Storage Read. The Flipper answers with a stream of
   * `storage_read_response` messages sharing one command ID; each carries a
   * chunk in `file.data` and the last one has `has_next = false`.
   */
  async readStorage(path: string): Promise<StorageReadResult> {
    const log = this.transport.logEvent.bind(this.transport);

    if (!this.transport.canTransfer() || !this.ready) {
      const message =
        this.transport.getSnapshot().state === "connected"
          ? "RPC is not ready — the TX/RX characteristics are not usable."
          : "Not connected to a Flipper.";
      log("error", `Storage Read failed: ${message}`);
      return this.finishStorageRead({ ok: false, path, error: message });
    }

    const invalid = validateStoragePath(path);
    if (invalid) {
      log("error", `Storage Read failed: ${invalid}`);
      return this.finishStorageRead({ ok: false, path, error: invalid });
    }

    const commandId = ++this.commandId;
    log("info", "Storage Read request created");
    log("info", `Storage Read path: ${path}`);
    log("info", `Storage Read command ID: ${commandId}`);

    let frame: Uint8Array;
    try {
      frame = PB.Main.encodeDelimited({
        commandId,
        commandStatus: PB.CommandStatus.OK,
        hasNext: false,
        storageReadRequest: { path },
      }).finish();
    } catch (error) {
      const message = `Protobuf encode failed: ${describe(error)}`;
      log("error", `Storage Read failed: ${message}`);
      return this.finishStorageRead({ ok: false, commandId, path, error: message });
    }

    const txHex = toHex(frame);
    log("info", `Storage Read TX bytes: ${txHex}`);

    const started = performance.now();
    const waiter = this.track(commandId, started, READ_TIMEOUT_MS, "Storage Read timeout");

    try {
      await this.writeFramed(frame);
    } catch (error) {
      this.clearPending(commandId);
      const message = describe(error);
      log("error", `Storage Read failed: ${message}`);
      return this.finishStorageRead({ ok: false, commandId, path, txHex, error: message });
    }

    let parts: PB.Main[];
    try {
      parts = await waiter;
    } catch (error) {
      const message = describe(error);
      log("error", `Storage Read failed: ${message}`);
      return this.finishStorageRead({ ok: false, commandId, path, txHex, error: message });
    }

    const roundTripMs = Math.round(performance.now() - started);
    const rxHex = this.completedRxHex.get(commandId) ?? null;
    this.completedRxHex.delete(commandId);
    log("info", "Storage Read response received");

    const first = parts[0] as PB.Main;
    const status = statusName(first.commandStatus);
    log("info", `Storage Read response command ID: ${first.commandId}`);
    log("info", `Storage Read response status: ${status}`);

    if (parts.some((part) => Number(part.commandId ?? 0) !== commandId)) {
      const message = "Storage Read response command ID mismatch";
      log("error", message);
      return this.finishStorageRead({
        ok: false,
        commandId,
        path,
        txHex,
        rxHex,
        roundTripMs,
        status,
        error: message,
      });
    }

    const failed = parts.find((part) => (part.commandStatus ?? 0) !== PB.CommandStatus.OK);
    if (failed) {
      const failedStatus = statusName(failed.commandStatus);
      const message = storageStatusMessage(failedStatus);
      log("error", `Storage Read failed: ${message} (${failedStatus})`);
      return this.finishStorageRead({
        ok: false,
        commandId,
        path,
        txHex,
        rxHex,
        roundTripMs,
        status: failedStatus,
        error: message,
      });
    }

    const chunks: Uint8Array[] = [];
    let total = 0;
    for (const part of parts) {
      const read = part.storageReadResponse;
      if (!read) {
        log("error", "Storage Read unexpected response type");
        return this.finishStorageRead({
          ok: false,
          commandId,
          path,
          txHex,
          rxHex,
          roundTripMs,
          status,
          error: "The Flipper answered with something other than file data.",
        });
      }
      log("info", `Storage Read decoded response part (has_next: ${part.hasNext ? "true" : "false"})`);
      const data = read.file?.data;
      if (data && data.length) {
        const chunk = new Uint8Array(data as ArrayLike<number>);
        chunks.push(chunk);
        total += chunk.length;
      }
    }

    // An empty file is a valid result, not an error.
    const combined = new Uint8Array(total);
    let offset = 0;
    for (const chunk of chunks) {
      combined.set(chunk, offset);
      offset += chunk.length;
    }

    log("info", "Storage Read decoded successfully");
    log("info", `Storage Read total bytes: ${combined.length}`);
    return this.finishStorageRead({
      ok: true,
      commandId,
      path,
      txHex,
      rxHex,
      roundTripMs,
      status,
      size: combined.length,
      data: combined,
    });
  }

  /**
   * Generic request path. Kept small and reusable so later phases can send
   * other `PB.Main` messages without touching the framing or pending-map logic.
   */
  async sendRequest(main: PB.Main.$Shape, timeoutMs = REQUEST_TIMEOUT_MS): Promise<PB.Main[]> {
    if (!this.transport.canTransfer()) throw new Error("Not connected to a Flipper.");
    const commandId = ++this.commandId;
    const body = { ...main, commandId } as unknown as PB.Main.$Properties;
    const frame = PB.Main.encodeDelimited(body).finish();
    const waiter = this.track(commandId, performance.now(), timeoutMs, "RPC request timeout");
    try {
      await this.writeFramed(frame);
    } catch (error) {
      this.clearPending(commandId);
      throw error;
    }
    return waiter;
  }

  // — internals —

  /** Splits a frame into characteristic-sized chunks (243 bytes max). */
  private async writeFramed(frame: Uint8Array): Promise<void> {
    for (let offset = 0; offset < frame.length; offset += MAX_CHUNK) {
      await this.transport.write(frame.subarray(offset, offset + MAX_CHUNK));
    }
  }

  private handleData(source: CharacteristicKey, bytes: Uint8Array): void {
    if (source === "flowControl") {
      // Observed only — no flow-control semantics are invented in this phase.
      this.transport.logEvent("info", `Flow control value observed: ${toHex(bytes)}`);
      return;
    }
    if (source !== "tx") return;

    // One BLE indication is NOT one RPC message: buffer and decode every
    // complete length-delimited message that is available.
    const merged = new Uint8Array(this.buffer.length + bytes.length);
    merged.set(this.buffer, 0);
    merged.set(bytes, this.buffer.length);
    this.buffer = merged;
    this.drainBuffer();
  }

  private drainBuffer(): void {
    for (;;) {
      const header = readVarint(this.buffer);
      if (!header) return; // length prefix not fully received yet
      const total = header.bytesRead + header.value;
      if (this.buffer.length < total) return; // message body still incomplete
      const body = this.buffer.subarray(header.bytesRead, total);
      let message: PB.Main;
      try {
        message = PB.Main.decode(body);
      } catch (error) {
        this.buffer = this.buffer.slice(total);
        this.transport.logEvent("error", `RPC decode error: ${describe(error)}`);
        continue;
      }

      // Unsolicited stream events (GUI screen frames) are routed by content
      // type, never by command ID. They skip the pending collector, the hex
      // conversion and the per-frame log line — this path must stay cheap and
      // must never log frame contents.
      if (this.dispatchEvent(message)) {
        this.buffer = this.buffer.slice(total);
        continue;
      }

      this.lastRxHex = toHex(this.buffer.subarray(0, total));
      this.buffer = this.buffer.slice(total);
      this.transport.logEvent("info", "RPC response received");
      this.deliver(message, this.lastRxHex ?? "");
    }
  }

  /**
   * Generic unsolicited-event dispatch. Returns true when the message was an
   * event and must not be treated as a command response. Kept generic so other
   * asynchronous RPC messages can be added later without touching framing.
   */
  private dispatchEvent(message: PB.Main): boolean {
    if (message.content !== "guiScreenFrame") return false;
    for (const listener of this.eventListeners) {
      try {
        listener(message);
      } catch (error) {
        console.error("RPC event listener failed", error);
      }
    }
    const frame = message.guiScreenFrame;
    if (frame && this.frameListeners.size > 0) {
      const data = frame.data instanceof Uint8Array ? frame.data : new Uint8Array(0);
      const event: ScreenFrameEvent = {
        data,
        orientation: ORIENTATIONS[Number(frame.orientation ?? 0)] ?? "horizontal",
        bgColor: Number(frame.bgColor ?? 0),
        fgColor: Number(frame.fgColor ?? 0),
        at: Date.now(),
      };
      for (const listener of this.frameListeners) {
        try {
          listener(event);
        } catch (error) {
          console.error("Screen frame listener failed", error);
        }
      }
    }
    return true;
  }

  /** Registers a pending request and returns the promise for its response(s). */
  private track(
    commandId: number,
    sentAt: number,
    timeoutMs: number,
    timeoutMessage: string,
  ): Promise<PB.Main[]> {
    return new Promise<PB.Main[]>((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(commandId);
        reject(new Error(timeoutMessage));
      }, timeoutMs);
      this.pending.set(commandId, {
        commandId,
        sentAt,
        timer,
        timeoutMs,
        timeoutMessage,
        parts: [],
        rxHex: [],
        resolve,
        reject,
      });
    });
  }

  private deliver(message: PB.Main, frameHex: string): void {
    const id = Number(message.commandId ?? 0);
    const pending = this.pending.get(id);
    if (!pending) {
      this.transport.logEvent(
        "warn",
        `RPC response ignored — command ID ${id} does not match a pending request.`,
      );
      return;
    }
    pending.parts.push(message);
    pending.rxHex.push(frameHex);
    clearTimeout(pending.timer);

    if (message.hasNext) {
      // More parts of the same answer are still on the way.
      pending.timer = setTimeout(() => {
        this.pending.delete(id);
        pending.reject(new Error(pending.timeoutMessage));
      }, pending.timeoutMs);
      return;
    }

    this.pending.delete(id);
    this.completedRxHex.set(id, pending.rxHex.join("  "));
    pending.resolve(pending.parts);
  }

  private clearPending(commandId: number): void {
    const pending = this.pending.get(commandId);
    if (!pending) return;
    clearTimeout(pending.timer);
    this.pending.delete(commandId);
  }

  private failAllPending(reason: string): void {
    for (const pending of this.pending.values()) {
      clearTimeout(pending.timer);
      pending.reject(new Error(reason));
    }
    this.pending.clear();
  }

  private finishPing(partial: Partial<RpcPingResult> & { ok: boolean }): RpcPingResult {
    const result: RpcPingResult = {
      ok: partial.ok,
      mock: false,
      commandId: partial.commandId ?? null,
      roundTripMs: partial.roundTripMs ?? null,
      payload: partial.payload ?? null,
      txHex: partial.txHex ?? null,
      rxHex:
        partial.rxHex ?? (partial.roundTripMs !== undefined ? this.lastRxHex : null),
      status: partial.status ?? null,
      error: partial.error ?? null,
    };
    this.lastPing = result;
    this.emit();
    return result;
  }

  private finishPowerInfo(
    partial: Partial<RpcPowerInfoResult> & { ok: boolean },
  ): RpcPowerInfoResult {
    const result: RpcPowerInfoResult = {
      ok: partial.ok,
      mock: false,
      commandId: partial.commandId ?? null,
      roundTripMs: partial.roundTripMs ?? null,
      entries: partial.entries ?? [],
      txHex: partial.txHex ?? null,
      rxHex: partial.rxHex ?? null,
      status: partial.status ?? null,
      error: partial.error ?? null,
      at: Date.now(),
    };
    this.lastPowerInfo = result;
    this.emit();
    return result;
  }

  private finishStorageList(
    partial: Partial<StorageListResult> & { ok: boolean; path: string },
  ): StorageListResult {
    const result: StorageListResult = {
      ok: partial.ok,
      mock: false,
      commandId: partial.commandId ?? null,
      path: partial.path,
      roundTripMs: partial.roundTripMs ?? null,
      entries: partial.entries ?? [],
      txHex: partial.txHex ?? null,
      rxHex: partial.rxHex ?? null,
      status: partial.status ?? null,
      error: partial.error ?? null,
      at: Date.now(),
    };
    this.lastStorageList = result;
    this.emit();
    return result;
  }

  private finishStorageStat(
    partial: Partial<StorageStatResult> & { ok: boolean; path: string },
  ): StorageStatResult {
    const result: StorageStatResult = {
      ok: partial.ok,
      mock: false,
      commandId: partial.commandId ?? null,
      path: partial.path,
      entry: partial.entry ?? null,
      roundTripMs: partial.roundTripMs ?? null,
      txHex: partial.txHex ?? null,
      rxHex: partial.rxHex ?? null,
      status: partial.status ?? null,
      error: partial.error ?? null,
      at: Date.now(),
    };
    this.lastStorageStat = result;
    this.emit();
    return result;
  }

  private finishStorageWrite(
    partial: Partial<StorageWriteResult> & { ok: boolean; path: string; size: number },
  ): StorageWriteResult {
    const result: StorageWriteResult = {
      ok: partial.ok,
      mock: false,
      commandId: partial.commandId ?? null,
      path: partial.path,
      size: partial.size,
      chunks: partial.chunks ?? 0,
      roundTripMs: partial.roundTripMs ?? null,
      txHex: partial.txHex ?? null,
      rxHex: partial.rxHex ?? null,
      status: partial.status ?? null,
      error: partial.error ?? null,
      partial: partial.partial ?? false,
      at: Date.now(),
    };
    this.lastStorageWrite = result;
    this.emit();
    return result;
  }

  private finishStorageRead(
    partial: Partial<StorageReadResult> & { ok: boolean; path: string },
  ): StorageReadResult {
    const result: StorageReadResult = {
      ok: partial.ok,
      mock: false,
      commandId: partial.commandId ?? null,
      path: partial.path,
      size: partial.size ?? 0,
      data: partial.data ?? new Uint8Array(0),
      roundTripMs: partial.roundTripMs ?? null,
      txHex: partial.txHex ?? null,
      rxHex: partial.rxHex ?? null,
      status: partial.status ?? null,
      error: partial.error ?? null,
      at: Date.now(),
    };
    this.lastStorageRead = result;
    this.emit();
    return result;
  }

  private finishDeviceInfo(
    partial: Partial<RpcDeviceInfoResult> & { ok: boolean },
  ): RpcDeviceInfoResult {
    const result: RpcDeviceInfoResult = {
      ok: partial.ok,
      mock: false,
      commandId: partial.commandId ?? null,
      roundTripMs: partial.roundTripMs ?? null,
      entries: partial.entries ?? [],
      txHex: partial.txHex ?? null,
      rxHex: partial.rxHex ?? null,
      status: partial.status ?? null,
      error: partial.error ?? null,
      at: Date.now(),
    };
    this.lastDeviceInfo = result;
    this.emit();
    return result;
  }

  private emit(): void {
    const snapshot = this.getSnapshot();
    for (const listener of this.listeners) listener(snapshot);
  }
}

/** Reads a protobuf varint length prefix; null when not enough bytes yet. */
function readVarint(bytes: Uint8Array): { value: number; bytesRead: number } | null {
  let value = 0;
  let shift = 0;
  for (let i = 0; i < bytes.length && i < 5; i += 1) {
    const byte = bytes[i] as number;
    value |= (byte & 0x7f) << shift;
    if ((byte & 0x80) === 0) return { value: value >>> 0, bytesRead: i + 1 };
    shift += 7;
  }
  return null;
}

let instance: MomentumRpc | null = null;

export function getFlipperRpc(): MomentumRpc {
  if (!instance) instance = new MomentumRpc(getFlipperBleTransport());
  return instance;
}

export type FlipperRpcService = MomentumRpc;
