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
  RpcDeviceInfoEntry,
  RpcDeviceInfoResult,
  RpcPingResult,
  RpcSnapshot,
} from "./index";
import { getFlipperBleTransport } from "./flipperBleTransport";

/** Momentum caps a single characteristic value chunk at 243 bytes. */
const MAX_CHUNK = 243;
/** Momentum caps one serial data frame at 486 bytes. */
export const MAX_SERIAL_DATA = 486;

const REQUEST_TIMEOUT_MS = 5000;
const PING_PAYLOAD = "Momentum Deck Ping";

function toHex(bytes: Uint8Array): string {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0").toUpperCase()).join(" ");
}

function describe(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
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
      this.lastRxHex = toHex(this.buffer.subarray(0, total));
      this.buffer = this.buffer.slice(total);
      let message: PB.Main;
      try {
        message = PB.Main.decode(body);
      } catch (error) {
        this.transport.logEvent("error", `RPC decode error: ${describe(error)}`);
        continue;
      }
      this.transport.logEvent("info", "RPC response received");
      this.deliver(message, this.lastRxHex ?? "");
    }
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
