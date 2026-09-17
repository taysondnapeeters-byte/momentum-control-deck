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

/**
 * Canonical Momentum GATT UUIDs, as reported by an independent Android GATT
 * scanner. The firmware source stores these as BLE-stack byte arrays whose
 * textual grouping is NOT the canonical UUID string — do not regroup them.
 * Symbolic labels (FE60 etc.) are kept in comments/logs only.
 */
export const MOMENTUM_SERIAL_SERVICE = "8fe5b3d5-2e7f-4a98-2a48-7acc60fe0000"; // FE60

export const MOMENTUM_CHARACTERISTICS: Array<{
  key: CharacteristicKey;
  label: string;
  symbolic: string;
  uuid: string;
}> = [
  { key: "tx", label: "TX", symbolic: "FE61", uuid: "19ed82ae-ed21-4c9d-4145-228e61fe0000" },
  { key: "rx", label: "RX", symbolic: "FE62", uuid: "19ed82ae-ed21-4c9d-4145-228e62fe0000" },
  { key: "flowControl", label: "Flow Control", symbolic: "FE63", uuid: "19ed82ae-ed21-4c9d-4145-228e63fe0000" },
  { key: "rpcStatus", label: "RPC Status", symbolic: "FE64", uuid: "19ed82ae-ed21-4c9d-4145-228e64fe0000" },
];

/**
 * Momentum advertises a 16-bit service value, not the FE60 GATT UUID.
 * Base value 0x3080, with the hardware colour enum (Unknown 0x00, Black 0x01,
 * White 0x02, Transparent 0x03) OR-ed in.
 */
const SIG_BASE = "-0000-1000-8000-00805f9b34fb";

/** Verified Momentum advertising service values (0x3080–0x3083). */
export const MOMENTUM_ADVERTISING_UUIDS = [0x3080, 0x3081, 0x3082, 0x3083].map(
  (value) => `0000${value.toString(16)}${SIG_BASE}`,
);

/**
 * 0x3084–0x308F: UNVERIFIED, forward-compatible candidates only — not known
 * Momentum values. Kept defensively so future colour/capability bits still match.
 */
export const UNVERIFIED_ADVERTISING_UUIDS = Array.from(
  { length: 0x308f - 0x3084 + 1 },
  (_, i) => `0000${(0x3084 + i).toString(16)}${SIG_BASE}`,
);

const MAX_LOG = 200;
const MAX_RAW = 200;

let counter = 0;
const nextId = () => `${Date.now().toString(36)}-${(counter++).toString(36)}`;

function toHex(view: DataView): string {
  const bytes = new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0").toUpperCase()).join(" ");
}

/** Exact runtime shape of a caught error, for diagnostics. */
function describeOriginalError(error: unknown): string {
  if (error && typeof error === "object") {
    const ctor = error.constructor?.name ?? "unknown";
    const name = "name" in error ? String((error as { name: unknown }).name) : "(none)";
    const message = "message" in error ? String((error as { message: unknown }).message) : "(none)";
    return `constructor=${ctor}, name=${name}, message=${message}`;
  }
  return `non-object error: ${String(error)}`;
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
      symbolic: c.symbolic,
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
  private dataListeners = new Set<(source: CharacteristicKey, bytes: Uint8Array) => void>();
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
      diagnostic: this.diagnostic,
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
    this.addLog("info", "Bluetooth chooser opened");
    this.addLog("info", `Momentum Serial Service (FE60): ${MOMENTUM_SERIAL_SERVICE}`);
    this.addLog("info", `optionalServices: [${MOMENTUM_SERIAL_SERVICE}]`);

    let device: BluetoothDevice;
    try {
      device = await navigator.bluetooth!.requestDevice({
        // OR semantics across filter objects: any verified/unverified
        // Momentum advertising service value, or the "Flipper" name prefix.
        filters: [
          ...MOMENTUM_ADVERTISING_UUIDS.map((uuid) => ({ services: [uuid] })),
          ...UNVERIFIED_ADVERTISING_UUIDS.map((uuid) => ({ services: [uuid] })),
          { namePrefix: "Flipper" },
        ],
        optionalServices: [MOMENTUM_SERIAL_SERVICE],
      });
    } catch (error) {
      this.fail(describeError(error));
      return;
    }

    await this.attach(device);
  }

  /**
   * Devices the user already permitted in this browser profile. Chrome-only
   * and can be disabled. Reports the exact outcome (unavailable / empty /
   * found / error) and logs it, so the UI never has to guess.
   */
  async listKnownDevices(): Promise<KnownDevicesLookup> {
    this.addLog("info", "Bluetooth known-device lookup started");
    const bluetooth = typeof navigator !== "undefined" ? navigator.bluetooth : undefined;
    if (!bluetooth?.getDevices) {
      this.addLog("info", "Bluetooth getDevices available: false");
      return { status: "unavailable", devices: [], error: null };
    }
    this.addLog("info", "Bluetooth getDevices available: true");
    try {
      const devices = await bluetooth.getDevices();
      this.addLog("info", `Bluetooth getDevices returned: ${devices.length}`);
      const mapped = devices.map((d) => ({ id: d.id, name: d.name ?? null }));
      for (const d of mapped) {
        this.addLog("info", `Bluetooth known device: ${d.name ?? "(unnamed)"}`);
      }
      return {
        status: mapped.length > 0 ? "found" : "empty",
        devices: mapped,
        error: null,
      };
    } catch (error) {
      const name = error instanceof Error ? error.name : "Error";
      const message = error instanceof Error ? error.message : String(error);
      this.addLog("warn", `Bluetooth getDevices error: ${name}: ${message}`);
      return { status: "error", devices: [], error: `${name}: ${message}` };
    }
  }

  /** True only when the browser actually exposes the known-devices API. */
  supportsReconnect(): boolean {
    return (
      typeof navigator !== "undefined" && Boolean(navigator.bluetooth?.getDevices)
    );
  }

  /**
   * Connects to a previously permitted device without opening the chooser.
   * Reuses the exact same post-selection sequence as `connect()`.
   */
  async reconnect(id: string): Promise<void> {
    if (!this.isSupported()) {
      this.fail("Web Bluetooth is not available in this browser.");
      return;
    }
    if (!this.supportsReconnect()) {
      this.fail("This browser cannot reconnect to a previously permitted device.");
      return;
    }
    if (this.state !== "disconnected" && this.state !== "error") return;

    this.error = null;
    this.discovery = null;
    this.setState("requesting");
    this.addLog("info", "Reconnect requested (previously permitted device)");

    let device: BluetoothDevice | undefined;
    try {
      const devices = await navigator.bluetooth!.getDevices!();
      device = devices.find((d) => d.id === id);
    } catch (error) {
      this.fail(describeError(error));
      return;
    }
    if (!device) {
      this.fail("That Flipper is no longer available to this browser. Use Connect Flipper.");
      return;
    }

    await this.attach(device);
  }

  /** Shared connection sequence: GATT, FE60, FE61–FE64, notifications. */
  private async attach(device: BluetoothDevice): Promise<void> {
    this.device = device;
    this.addLog("info", `Device selected${device.name ? `: ${device.name}` : ""}`);
    device.addEventListener("gattserverdisconnected", this.onGattDisconnected);

    try {
      this.setState("connecting");
      const gatt = device.gatt;
      if (!gatt) throw new Error("The selected device does not expose a GATT server.");
      await gatt.connect();
      this.addLog("info", "GATT connected");

      // Log the advertising profile only when the browser can actually confirm
      // it (via watchAdvertisements). Not all browsers support this; when they
      // do not, the entry is simply not logged.
      const detected = await this.detectAdvertising(device);
      if (detected) this.addLog("info", "Momentum advertising profile detected");

      this.setState("discovering");
      const discovery = emptyDiscovery();
      this.discovery = discovery;
      this.addLog("info", "GATT service discovery started");

      // Diagnostic: enumerate every primary service the browser actually
      // exposes after connect. Read-only; some browsers refuse enumeration.
      try {
        const services = await gatt.getPrimaryServices();
        this.addLog("info", `Services exposed by browser (${services.length}):`);
        for (const s of services) this.addLog("info", `Service: ${s.uuid}`);
      } catch (error) {
        this.addLog("warn", `Service enumeration refused by browser (${describeOriginalError(error)})`);
      }

      let service;
      try {
        service = await gatt.getPrimaryService(MOMENTUM_SERIAL_SERVICE);
      } catch (error) {
        this.addLog(
          "error",
          `getPrimaryService(FE60 = ${MOMENTUM_SERIAL_SERVICE}) original error — ${describeOriginalError(error)}`,
        );
        throw new Error(
          `Momentum Serial Service (FE60 = ${MOMENTUM_SERIAL_SERVICE}) could not be discovered. Original error: ${describeOriginalError(error)}`,
        );
      }
      discovery.serviceFound = true;
      this.addLog("info", `Momentum Serial Service (FE60) found: ${MOMENTUM_SERIAL_SERVICE}`);

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
          this.addLog("info", `${entry.label} (${entry.symbolic}) found`);
        } catch (error) {
          entry.error = describeError(error);
          this.addLog("warn", `${entry.label} (${entry.symbolic}) characteristic not available`);
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
            const bytes = new Uint8Array(
              value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength),
            );
            for (const listener of this.dataListeners) {
              try {
                listener(entry.key, bytes);
              } catch (error) {
                console.error("BLE data listener failed", error);
              }
            }
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

      this.addLog("info", "Connection ready");
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

  onData(listener: (source: CharacteristicKey, bytes: Uint8Array) => void): () => void {
    this.dataListeners.add(listener);
    return () => {
      this.dataListeners.delete(listener);
    };
  }

  logEvent(level: BleLogEntry["level"], message: string): void {
    this.addLog(level, message);
  }

  canTransfer(): boolean {
    if (this.state !== "connected") return false;
    const rx = this.chars.get("rx");
    const tx = this.chars.get("tx");
    const txEntry = this.discovery?.characteristics.find((c) => c.key === "tx");
    return Boolean(rx && tx && txEntry?.notifying);
  }

  /**
   * Writes one chunk to the RX characteristic. Fragmentation of larger RPC
   * messages is handled by the layer above (see `flipperRpc.ts`).
   */
  async write(data: Uint8Array): Promise<void> {
    if (this.state !== "connected") {
      throw new Error("Not connected to a Flipper.");
    }
    const rx = this.chars.get("rx");
    if (!rx) throw new Error("The RX characteristic (FE62) was not discovered.");
    const buffer = new Uint8Array(data);
    try {
      if (rx.properties.writeWithoutResponse) {
        await rx.writeValueWithoutResponse(buffer);
      } else {
        await rx.writeValueWithResponse(buffer);
      }
    } catch (error) {
      throw new Error(`Bluetooth write failed: ${describeError(error)}`);
    }
    this.pushRaw("rx", new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength));
  }

  /**
   * Troubleshooting only. Opens the broadest chooser the API allows
   * (`acceptAllDevices`), connects, inspects the GATT service list and then
   * disconnects again. Nothing is written, nothing is subscribed, and no
   * unknown service is interpreted.
   */
  async runDiagnostic(): Promise<void> {
    if (!this.isSupported()) {
      this.fail("Web Bluetooth is not available in this browser.");
      return;
    }
    if (this.state !== "disconnected" && this.state !== "error") return;

    this.error = null;
    this.diagnostic = null;
    const report: DiagnosticReport = {
      at: Date.now(),
      deviceName: null,
      gattConnected: false,
      momentumServiceFound: false,
      services: [],
      servicesEnumerable: false,
      error: null,
    };

    this.setState("requesting");
    this.addLog("info", "Diagnostic: Bluetooth request started (accept all devices)");

    let device: BluetoothDevice;
    try {
      device = await navigator.bluetooth!.requestDevice({
        acceptAllDevices: true,
        optionalServices: [MOMENTUM_SERIAL_SERVICE],
      });
    } catch (error) {
      report.error = describeError(error);
      this.diagnostic = report;
      this.fail(report.error);
      return;
    }

    report.deviceName = device.name ?? null;
    this.addLog("info", "Diagnostic: device selected");
    this.addLog("info", `Diagnostic: device name — ${device.name ?? "(not reported)"}`);

    try {
      this.setState("connecting");
      const gatt = device.gatt;
      if (!gatt) throw new Error("The selected device does not expose a GATT server.");
      await gatt.connect();
      report.gattConnected = true;
      this.addLog("info", "Diagnostic: GATT connected");

      this.setState("discovering");
      this.addLog("info", "Diagnostic: service discovery started");

      try {
        const services = await gatt.getPrimaryServices();
        report.servicesEnumerable = true;
        report.services = services.map((s) => s.uuid);
        this.addLog("info", `Diagnostic: services discovered (${report.services.length})`);
      } catch (error) {
        report.servicesEnumerable = false;
        this.addLog(
          "warn",
          `Diagnostic: the browser did not enumerate services (${describeError(error)})`,
        );
      }

      try {
        await gatt.getPrimaryService(MOMENTUM_SERIAL_SERVICE);
        report.momentumServiceFound = true;
        this.addLog("info", "Diagnostic: Momentum Serial Service found");
      } catch {
        report.momentumServiceFound = false;
        this.addLog("warn", "Diagnostic: Momentum Serial Service not found");
      }

      try {
        if (device.gatt?.connected) device.gatt.disconnect();
      } catch {
        /* ignore */
      }
      this.addLog("info", "Diagnostic: disconnected after inspection");
      this.diagnostic = report;
      this.setState("disconnected");
    } catch (error) {
      const message = describeError(error);
      report.error = message;
      this.diagnostic = report;
      this.addLog("error", `Diagnostic: ${message}`);
      try {
        if (device.gatt?.connected) device.gatt.disconnect();
      } catch {
        /* ignore */
      }
      this.fail(message);
    }
  }

  // — internals —

  /**
   * "Momentum advertising profile detected" is logged only when the browser
   * can actually confirm the advertised service UUID via
   * `watchAdvertisements()`. Browsers without that API skip the log entry —
   * we never claim detection we did not observe.
   */
  private detectAdvertising(device: BluetoothDevice): Promise<boolean> {
    const watcher = device as BluetoothDevice & {
      watchAdvertisements?: (options?: { signal?: AbortSignal }) => Promise<void>;
    };
    if (typeof watcher.watchAdvertisements !== "function") return Promise.resolve(false);

    return new Promise((resolve) => {
      const controller = new AbortController();
      let settled = false;
      const done = (detected: boolean) => {
        if (settled) return;
        settled = true;
        try {
          controller.abort();
        } catch {
          /* ignore */
        }
        resolve(detected);
      };
      device.addEventListener(
        "advertisementreceived",
        (event: Event) => {
          const uuids = (event as Event & { uuids?: string[] }).uuids ?? [];
          done(uuids.some((uuid) => MOMENTUM_ADVERTISING_UUIDS.includes(uuid)));
        },
        { signal: controller.signal },
      );
      try {
        void watcher.watchAdvertisements!({ signal: controller.signal }).catch(() => done(false));
      } catch {
        done(false);
      }
      setTimeout(() => done(false), 1500);
    });
  }

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
