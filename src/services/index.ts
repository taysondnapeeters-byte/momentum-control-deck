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

/** Result of one `getDevices()` lookup, with the exact outcome visible. */
export interface KnownDevicesLookup {
  /**
   * unavailable — the browser has no getDevices API.
   * empty — the API exists and returned zero devices.
   * found — the API exists and returned one or more devices.
   * error — the API threw an exception.
   */
  status: "unavailable" | "empty" | "found" | "error";
  devices: { id: string; name: string | null }[];
  /** Exception name/message when status is "error". */
  error: string | null;
}

export interface FlipperBleTransport {
  isSupported(): boolean;
  getSnapshot(): BleSnapshot;
  subscribe(listener: (snapshot: BleSnapshot) => void): () => void;
  /** Opens the browser chooser, connects, discovers and subscribes. */
  connect(): Promise<void>;
  /** True only when the browser exposes the previously-permitted device API. */
  supportsReconnect(): boolean;
  /** Devices the user already permitted, with the exact lookup outcome. */
  listKnownDevices(): Promise<KnownDevicesLookup>;
  /** Connects to a previously permitted device without the chooser. */
  reconnect(id: string): Promise<void>;
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

/** One power key/value pair exactly as the Flipper returned it. */
export interface RpcPowerInfoEntry {
  key: string;
  value: string;
}

/** Outcome of a Power Info round trip. `mock` is never hidden. */
export interface RpcPowerInfoResult {
  ok: boolean;
  mock: boolean;
  commandId: number | null;
  roundTripMs: number | null;
  entries: RpcPowerInfoEntry[];
  txHex: string | null;
  rxHex: string | null;
  status: string | null;
  error: string | null;
  at: number;
}

/** Entry type exactly as the protobuf `File.FileType` reports it. */
export type StorageEntryType = "file" | "dir";

/** One filesystem entry as returned by Storage.ListResponse. */
export interface StorageListEntry {
  type: StorageEntryType;
  name: string;
  /** Byte size as reported by the device. Directories report 0. */
  size: number;
  /** Only present when the device supplied one; never computed locally. */
  md5sum: string | null;
}

/** Outcome of a Storage List round trip. `mock` is never hidden. */
export interface StorageListResult {
  ok: boolean;
  mock: boolean;
  commandId: number | null;
  path: string;
  roundTripMs: number | null;
  entries: StorageListEntry[];
  txHex: string | null;
  rxHex: string | null;
  status: string | null;
  error: string | null;
  at: number;
}

/** Outcome of a Storage Stat round trip (single response). */
export interface StorageStatResult {
  ok: boolean;
  mock: boolean;
  commandId: number | null;
  path: string;
  /** Metadata exactly as the device reported it, or null on failure. */
  entry: StorageListEntry | null;
  roundTripMs: number | null;
  txHex: string | null;
  rxHex: string | null;
  status: string | null;
  error: string | null;
  at: number;
}

/** Outcome of a Storage Read round trip. Bytes are never decoded here. */
export interface StorageReadResult {
  ok: boolean;
  mock: boolean;
  commandId: number | null;
  path: string;
  /** Number of bytes actually received. */
  size: number;
  data: Uint8Array;
  roundTripMs: number | null;
  txHex: string | null;
  rxHex: string | null;
  status: string | null;
  error: string | null;
  at: number;
}

/**
 * Outcome of a Storage Write sequence. One command ID covers every chunk and
 * the device answers once, at the end, with a status only.
 */
export interface StorageWriteResult {
  ok: boolean;
  mock: boolean;
  commandId: number | null;
  path: string;
  /** Number of bytes the app sent. */
  size: number;
  /** Number of Storage Write requests the sequence used. */
  chunks: number;
  roundTripMs: number | null;
  txHex: string | null;
  rxHex: string | null;
  status: string | null;
  error: string | null;
  /** True when the sequence may have left a partial file on the device. */
  partial: boolean;
  at: number;
}

export interface RpcSnapshot {
  ready: boolean;
  busy: boolean;
  lastPing: RpcPingResult | null;
  lastDeviceInfo: RpcDeviceInfoResult | null;
  lastPowerInfo: RpcPowerInfoResult | null;
  lastStorageList: StorageListResult | null;
  lastStorageStat: StorageStatResult | null;
  lastStorageRead: StorageReadResult | null;
  lastStorageWrite: StorageWriteResult | null;
}

/** Screen orientation exactly as `PB_Gui.ScreenOrientation` reports it. */
export type ScreenOrientation =
  | "horizontal"
  | "horizontal_flip"
  | "vertical"
  | "vertical_flip";

/**
 * One unsolicited `gui_screen_frame` message. `data` is the raw Flipper
 * framebuffer, untouched; decoding lives in `flipperScreen.ts`.
 */
export interface ScreenFrameEvent {
  data: Uint8Array;
  orientation: ScreenOrientation;
  /** Momentum colour metadata, exactly as received. 0 when absent. */
  bgColor: number;
  fgColor: number;
  at: number;
}

/** The six physical Flipper keys the virtual pad drives. */
export type FlipperInputKey = "up" | "down" | "left" | "right" | "ok" | "back";
/** Only press/release are used; the firmware also knows short/long/repeat. */
export type FlipperInputAction = "press" | "release" | "short" | "long" | "repeat";

/** Generic outcome of a simple one-response RPC request. */
export interface RpcSimpleResult {
  ok: boolean;
  mock: boolean;
  commandId: number | null;
  roundTripMs: number | null;
  status: string | null;
  error: string | null;
  at: number;
}

export interface FlipperRpc {
  isReady(): boolean;
  getSnapshot(): RpcSnapshot;
  subscribe(listener: (snapshot: RpcSnapshot) => void): () => void;
  ping(): Promise<RpcPingResult>;
  getDeviceInfo(): Promise<RpcDeviceInfoResult>;
  getPowerInfo(): Promise<RpcPowerInfoResult>;
  /** Read-only directory listing for a Flipper storage path such as `/ext`. */
  listStorage(path: string): Promise<StorageListResult>;
  /** Read-only metadata for a single file or directory. */
  statStorage(path: string): Promise<StorageStatResult>;
  /** Read-only file contents. Bytes are returned untouched. */
  readStorage(path: string): Promise<StorageReadResult>;
  /** Creates a file. The caller must have confirmed the path does not exist. */
  writeStorage(path: string, bytes: Uint8Array): Promise<StorageWriteResult>;
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
