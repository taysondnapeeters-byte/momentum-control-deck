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
import type { CharacteristicKey, FlipperBleTransport, RpcPingResult, RpcSnapshot } from "./index";
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

interface Pending {
  commandId: number;
  sentAt: number;
  timer: ReturnType<typeof setTimeout>;
  resolve: (main: PB.Main) => void;
  reject: (error: Error) => void;
}

class MomentumRpc {
  private transport: FlipperBleTransport;
  private buffer = new Uint8Array(0);
  private pending = new Map<number, Pending>();
  private commandId = 0;
  private busy = false;
  private lastPing: RpcPingResult | null = null;
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
    return { ready: this.ready, busy: this.busy, lastPing: this.lastPing };
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
    const waiter = new Promise<PB.Main>((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(commandId);
        reject(new Error("RPC Ping timeout"));
      }, REQUEST_TIMEOUT_MS);
      this.pending.set(commandId, { commandId, sentAt: started, timer, resolve, reject });
    });

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
      response = await waiter;
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

  /**
   * Generic request path. Kept small and reusable so later phases can send
   * other `PB.Main` messages without touching the framing or pending-map logic.
   */
  async sendRequest(main: PB.Main.$Shape, timeoutMs = REQUEST_TIMEOUT_MS): Promise<PB.Main> {
    if (!this.transport.canTransfer()) throw new Error("Not connected to a Flipper.");
    const commandId = ++this.commandId;
    const frame = PB.Main.encodeDelimited({ ...main, commandId }).finish();
    const waiter = new Promise<PB.Main>((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(commandId);
        reject(new Error("RPC request timeout"));
      }, timeoutMs);
      this.pending.set(commandId, {
        commandId,
        sentAt: performance.now(),
        timer,
        resolve,
        reject,
      });
    });
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
      this.buffer = this.buffer.slice(total);
      let message: PB.Main;
      try {
        message = PB.Main.decode(body);
      } catch (error) {
        this.transport.logEvent("error", `RPC decode error: ${describe(error)}`);
        continue;
      }
      this.transport.logEvent("info", "RPC response received");
      this.deliver(message);
    }
  }

  private deliver(message: PB.Main): void {
    const id = Number(message.commandId ?? 0);
    const pending = this.pending.get(id);
    if (!pending) {
      this.transport.logEvent(
        "warn",
        `RPC response ignored — command ID ${id} does not match a pending request.`,
      );
      return;
    }
    clearTimeout(pending.timer);
    this.pending.delete(id);
    pending.resolve(message);
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
      rxHex: partial.rxHex ?? null,
      status: partial.status ?? null,
      error: partial.error ?? null,
    };
    this.lastPing = result;
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
