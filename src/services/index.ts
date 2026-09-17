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

export interface BleSnapshot {
  state: ConnectionState;
  deviceName: string | null;
  gattConnected: boolean;
  error: string | null;
  discovery: DiscoveryReport | null;
  log: BleLogEntry[];
  raw: BleRawEntry[];
}

export interface FlipperBleTransport {
  isSupported(): boolean;
  getSnapshot(): BleSnapshot;
  subscribe(listener: (snapshot: BleSnapshot) => void): () => void;
  /** Opens the browser chooser, connects, discovers and subscribes. */
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  clearLogs(): void;
  /** Reserved for the next phase; unused while transport is being validated. */
  write(data: Uint8Array): Promise<void>;
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

export interface FlipperRpc {
  request<TRequest, TResponse>(method: string, payload: TRequest): Promise<TResponse>;
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
