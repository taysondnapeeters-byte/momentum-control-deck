/**
 * Architecture placeholders for the hardware / AI layer.
 *
 * These are TYPE-ONLY contracts. No implementation exists in this phase and the
 * UI must never import a concrete transport directly — it talks to app state,
 * app state will later talk to these services.
 */

export type ConnectionStatus = "disconnected" | "connecting" | "connected" | "error";

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

export interface FlipperBleTransport {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  send(data: Uint8Array): Promise<void>;
  onData(handler: (data: Uint8Array) => void): () => void;
  readonly isConnected: boolean;
}

export interface FlipperCli {
  exec(command: string): Promise<string>;
}

export interface FlipperRpc {
  request<TRequest, TResponse>(method: string, payload: TRequest): Promise<TResponse>;
}

export interface FlipperDevice {
  readonly status: ConnectionStatus;
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
