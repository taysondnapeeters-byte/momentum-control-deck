/**
 * Hardware / AI service contracts.
 *
 * Phase 2 implements only the BLE transport (see `flipperBleTransport.ts`).
 * Everything else below stays a type-only placeholder.
 */

/** Explicit connection lifecycle. Never a boolean. */
export type ConnectionState =
  | "disconnected"
  | "requesting"
  | "connecting"
  | "discovering"
  | "connected"
  | "disconnecting"
  | "error";

/** Kept for existing imports. */
export type ConnectionStatus = ConnectionState;

export type CharacteristicKey = "tx" | "rx" | "flowControl" | "rpcStatus";

export interface CharacteristicProps {
  read: boolean;
  write: boolean;
  writeWithoutResponse: boolean;
  notify: boolean;
  indicate: boolean;
}

export interface CharacteristicInfo {
  key: CharacteristicKey;
  label: string;
  /** Symbolic Momentum label (FE61 etc.), distinct from the canonical UUID. */
  symbolic: string;
  uuid: string;
  found: boolean;
  /** Only present when the characteristic was actually discovered. */
  properties: CharacteristicProps | null;
  notifying: boolean;
  error: string | null;
}

export interface DiscoveryReport {
  serviceFound: boolean;
  characteristics: CharacteristicInfo[];
}

export interface BleLogEntry {
  id: string;
  at: number;
  level: "info" | "warn" | "error";
  message: string;
}

export interface BleRawEntry {
  id: string;
  at: number;
  source: CharacteristicKey;
  hex: string;
  byteLength: number;
}

/** Read-only troubleshooting result. Nothing is written or subscribed. */
export interface DiagnosticReport {
  at: number;
  deviceName: string | null;
  gattConnected: boolean;
  momentumServiceFound: boolean;
  /** UUIDs the browser actually exposed. May be incomplete by design. */
  services: string[];
  /** False when the browser refused to enumerate services. */
  servicesEnumerable: boolean;
  error: string | null;
}

export interface BleSnapshot {
  state: ConnectionState;
  deviceName: string | null;
  gattConnected: boolean;
  error: string | null;
  discovery: DiscoveryReport | null;
  diagnostic: DiagnosticReport | null;
  log: BleLogEntry[];
  raw: BleRawEntry[];
}

export interface FlipperBleTransport {
  isSupported(): boolean;
  getSnapshot(): BleSnapshot;
  subscribe(listener: (snapshot: BleSnapshot) => void): () => void;
  /** Opens the browser chooser, connects, discovers and subscribes. */
  connect(): Promise<void>;
  /** Troubleshooting only: broad chooser, inspect services, disconnect. */
  runDiagnostic(): Promise<void>;
  disconnect(): Promise<void>;
  clearLogs(): void;
  /** Raw bytes received from a notifying characteristic (TX, Flow Control). */
  onData(listener: (source: CharacteristicKey, bytes: Uint8Array) => void): () => void;
  /** Appends an entry to the shared connection log (used by upper layers). */
  logEvent(level: BleLogEntry["level"], message: string): void;
  /** Writes a single chunk to the RX characteristic. Chunking is the caller's job. */
  write(data: Uint8Array): Promise<void>;
  /** True when connected and the RX/TX characteristics are usable. */
  canTransfer(): boolean;
}

export interface FlipperCapabilities {
  subGhz: boolean;
  nfc: boolean;
  rfid: boolean;
  infrared: boolean;
  gpio: boolean;
  badusb: boolean;
  screenStream: boolean;
  storage: boolean;
}

export interface FlipperCli {
  exec(command: string): Promise<string>;
}

/** Outcome of a single System Ping round trip. `mock` is never hidden. */
export interface RpcPingResult {
  ok: boolean;
  mock: boolean;
  commandId: number | null;
  roundTripMs: number | null;
  payload: string | null;
  txHex: string | null;
  rxHex: string | null;
  status: string | null;
  error: string | null;
}

/** One key/value pair exactly as the Flipper returned it. */
export interface RpcDeviceInfoEntry {
  key: string;
  value: string;
}

/** Outcome of a Device Info round trip. `mock` is never hidden. */
export interface RpcDeviceInfoResult {
  ok: boolean;
  mock: boolean;
  commandId: number | null;
  roundTripMs: number | null;
  entries: RpcDeviceInfoEntry[];
  txHex: string | null;
  rxHex: string | null;
  status: string | null;
  error: string | null;
  at: number;
}

export interface RpcSnapshot {
  ready: boolean;
  busy: boolean;
  lastPing: RpcPingResult | null;
  lastDeviceInfo: RpcDeviceInfoResult | null;
}

export interface FlipperRpc {
  isReady(): boolean;
  getSnapshot(): RpcSnapshot;
  subscribe(listener: (snapshot: RpcSnapshot) => void): () => void;
  ping(): Promise<RpcPingResult>;
  getDeviceInfo(): Promise<RpcDeviceInfoResult>;
}

export interface FlipperDevice {
  readonly status: ConnectionState;
  readonly capabilities: FlipperCapabilities | null;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  readonly cli: FlipperCli | null;
  readonly rpc: FlipperRpc | null;
}

export interface GeminiService {
  isConfigured(): boolean;
  testConnection(): Promise<boolean>;
  prompt(input: string): Promise<string>;
}
