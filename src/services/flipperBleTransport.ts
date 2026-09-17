/**
 * Momentum BLE Serial transport.
 *
 * This is the ONLY module in the application allowed to touch
 * `navigator.bluetooth`. Everything else talks to app state.
 *
 * Phase 2 scope: connect, discover, subscribe, report. Nothing is written to
 * the device.
 */

import type {
  BleLogEntry,
  BleRawEntry,
  BleSnapshot,
  CharacteristicInfo,
  CharacteristicKey,
  ConnectionState,
  DiagnosticReport,
  DiscoveryReport,
  FlipperBleTransport,
} from "./index";

/** UUIDs from the Momentum Firmware source. Do not add others. */
export const MOMENTUM_SERIAL_SERVICE = "0000fe60-cc7a-482a-984a-7f2ed5b3e58f";

export const MOMENTUM_CHARACTERISTICS: Array<{
  key: CharacteristicKey;
  label: string;
  uuid: string;
}> = [
  { key: "tx", label: "TX", uuid: "0000fe61-8e22-4541-9d4c-21edae82ed19" },
  { key: "rx", label: "RX", uuid: "0000fe62-8e22-4541-9d4c-21edae82ed19" },
  { key: "flowControl", label: "Flow Control", uuid: "0000fe63-8e22-4541-9d4c-21edae82ed19" },
  { key: "rpcStatus", label: "RPC Status", uuid: "0000fe64-8e22-4541-9d4c-21edae82ed19" },
];

const MAX_LOG = 200;
const MAX_RAW = 200;

let counter = 0;
const nextId = () => `${Date.now().toString(36)}-${(counter++).toString(36)}`;

function toHex(view: DataView): string {
  const bytes = new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0").toUpperCase()).join(" ");
}

function describeError(error: unknown): string {
  if (error instanceof DOMException) {
    switch (error.name) {
      case "NotFoundError":
        return "No device was selected, or no Flipper advertising the Momentum serial service was found.";
      case "SecurityError":
        return "The browser blocked Bluetooth access for this page. A secure (HTTPS) context is required.";
      case "NetworkError":
        return "The Bluetooth connection failed or was lost.";
      case "NotSupportedError":
        return "This operation is not supported by the browser or the device.";
      default:
        return `${error.name}: ${error.message}`;
    }
  }
  if (error instanceof Error) return error.message;
  return "Unknown Bluetooth error.";
}

function emptyDiscovery(): DiscoveryReport {
  return {
    serviceFound: false,
    characteristics: MOMENTUM_CHARACTERISTICS.map((c) => ({
      key: c.key,
      label: c.label,
      uuid: c.uuid,
      found: false,
      properties: null,
      notifying: false,
      error: null,
    })),
  };
}

class MomentumBleTransport implements FlipperBleTransport {
  private state: ConnectionState = "disconnected";
  private error: string | null = null;
  private device: BluetoothDevice | null = null;
  private discovery: DiscoveryReport | null = null;
  private diagnostic: DiagnosticReport | null = null;
  private log: BleLogEntry[] = [];
  private raw: BleRawEntry[] = [];
  private listeners = new Set<(snapshot: BleSnapshot) => void>();
  private chars = new Map<CharacteristicKey, BluetoothRemoteGATTCharacteristic>();
  private notifyHandlers = new Map<CharacteristicKey, (event: Event) => void>();
  private onGattDisconnected = () => {
    this.addLog("warn", "GATT disconnected (device powered off, out of range or closed).");
    this.resetHardware();
    this.setState("disconnected");
  };

  isSupported(): boolean {
    return typeof navigator !== "undefined" && Boolean(navigator.bluetooth);
  }

  getSnapshot(): BleSnapshot {
    return {
      state: this.state,
      deviceName: this.device?.name ?? null,
      gattConnected: Boolean(this.device?.gatt?.connected),
      error: this.error,
      discovery: this.discovery,
      log: this.log,
      raw: this.raw,
    };
  }

  subscribe(listener: (snapshot: BleSnapshot) => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  clearLogs(): void {
    this.log = [];
    this.raw = [];
    this.emit();
  }

  async connect(): Promise<void> {
    if (!this.isSupported()) {
      this.fail("Web Bluetooth is not available in this browser.");
      return;
    }
    if (this.state !== "disconnected" && this.state !== "error") return;

    this.error = null;
    this.discovery = null;
    this.setState("requesting");
    this.addLog("info", "Bluetooth request started");

    let device: BluetoothDevice;
    try {
      device = await navigator.bluetooth!.requestDevice({
        filters: [{ services: [MOMENTUM_SERIAL_SERVICE] }],
        optionalServices: [MOMENTUM_SERIAL_SERVICE],
      });
    } catch (error) {
      this.fail(describeError(error));
      return;
    }

    this.device = device;
    this.addLog("info", `Device selected${device.name ? `: ${device.name}` : ""}`);
    device.addEventListener("gattserverdisconnected", this.onGattDisconnected);

    try {
      this.setState("connecting");
      const gatt = device.gatt;
      if (!gatt) throw new Error("The selected device does not expose a GATT server.");
      await gatt.connect();
      this.addLog("info", "GATT connected");

      this.setState("discovering");
      const discovery = emptyDiscovery();
      this.discovery = discovery;

      let service;
      try {
        service = await gatt.getPrimaryService(MOMENTUM_SERIAL_SERVICE);
      } catch {
        throw new Error(
          "The Momentum serial service was not found on this device. It may not be a Flipper running Momentum Firmware, or BLE serial is disabled.",
        );
      }
      discovery.serviceFound = true;
      this.addLog("info", "Momentum Serial Service discovered");

      for (const entry of discovery.characteristics) {
        try {
          const characteristic = await service.getCharacteristic(entry.uuid);
          const p = characteristic.properties;
          entry.found = true;
          entry.properties = {
            read: p.read,
            write: p.write,
            writeWithoutResponse: p.writeWithoutResponse,
            notify: p.notify,
            indicate: p.indicate,
          };
          this.chars.set(entry.key, characteristic);
          this.addLog("info", `${entry.label} characteristic discovered`);
        } catch (error) {
          entry.error = describeError(error);
          this.addLog("warn", `${entry.label} characteristic not available`);
        }
      }

      let notifyCount = 0;
      for (const entry of discovery.characteristics) {
        const characteristic = this.chars.get(entry.key);
        if (!characteristic || !entry.properties) continue;
        if (!entry.properties.notify && !entry.properties.indicate) continue;
        try {
          const handler = (event: Event) => {
            const target = event.target as BluetoothRemoteGATTCharacteristic;
            const value = target.value;
            if (!value || value.byteLength === 0) return;
            this.pushRaw(entry.key, value);
          };
          characteristic.addEventListener("characteristicvaluechanged", handler);
          this.notifyHandlers.set(entry.key, handler);
          await characteristic.startNotifications();
          entry.notifying = true;
          notifyCount += 1;
        } catch (error) {
          entry.error = describeError(error);
          this.addLog("warn", `${entry.label} notifications could not be enabled`);
        }
      }
      this.addLog(
        "info",
        notifyCount > 0
          ? `Notifications enabled (${notifyCount})`
          : "No notify/indicate characteristics available",
      );

      this.setState("connected");
    } catch (error) {
      const message = describeError(error);
      this.addLog("error", message);
      await this.hardDisconnect();
      this.fail(message);
    }
  }

  async disconnect(): Promise<void> {
    if (this.state === "disconnected") return;
    this.setState("disconnecting");
    this.addLog("info", "Disconnect requested");
    await this.hardDisconnect();
    this.setState("disconnected");
  }

  async write(_data: Uint8Array): Promise<void> {
    throw new Error("Writing to the Flipper is not enabled in this phase.");
  }

  // — internals —

  private async hardDisconnect(): Promise<void> {
    for (const [key, characteristic] of this.chars) {
      const handler = this.notifyHandlers.get(key);
      if (handler) characteristic.removeEventListener("characteristicvaluechanged", handler);
      try {
        await characteristic.stopNotifications();
      } catch {
        /* device may already be gone */
      }
    }
    const device = this.device;
    if (device) {
      device.removeEventListener("gattserverdisconnected", this.onGattDisconnected);
      try {
        if (device.gatt?.connected) device.gatt.disconnect();
      } catch {
        /* ignore */
      }
    }
    this.resetHardware();
  }

  private resetHardware(): void {
    this.chars.clear();
    this.notifyHandlers.clear();
    this.device = null;
    this.discovery = null;
  }

  private fail(message: string): void {
    this.error = message;
    this.addLog("error", message);
    this.setState("error");
  }

  private setState(state: ConnectionState): void {
    this.state = state;
    if (state === "connected" || state === "disconnected") this.error = null;
    this.emit();
  }

  private addLog(level: BleLogEntry["level"], message: string): void {
    this.log = [{ id: nextId(), at: Date.now(), level, message }, ...this.log].slice(0, MAX_LOG);
    this.emit();
  }

  private pushRaw(source: CharacteristicKey, value: DataView): void {
    this.raw = [
      {
        id: nextId(),
        at: Date.now(),
        source,
        hex: toHex(value),
        byteLength: value.byteLength,
      },
      ...this.raw,
    ].slice(0, MAX_RAW);
    this.emit();
  }

  private emit(): void {
    const snapshot = this.getSnapshot();
    for (const listener of this.listeners) listener(snapshot);
  }
}

let instance: FlipperBleTransport | null = null;

export function getFlipperBleTransport(): FlipperBleTransport {
  if (!instance) instance = new MomentumBleTransport();
  return instance;
}
