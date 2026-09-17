/**
 * Minimal ambient Web Bluetooth typings.
 *
 * The TypeScript DOM lib does not ship Web Bluetooth. Only the subset the
 * transport layer actually uses is declared here.
 */

export {};

declare global {
  interface BluetoothCharacteristicProperties {
    readonly broadcast: boolean;
    readonly read: boolean;
    readonly writeWithoutResponse: boolean;
    readonly write: boolean;
    readonly notify: boolean;
    readonly indicate: boolean;
    readonly authenticatedSignedWrites: boolean;
    readonly reliableWrite: boolean;
    readonly writableAuxiliaries: boolean;
  }

  interface BluetoothRemoteGATTCharacteristic extends EventTarget {
    readonly uuid: string;
    readonly properties: BluetoothCharacteristicProperties;
    readonly value?: DataView;
    readValue(): Promise<DataView>;
    writeValueWithResponse(value: BufferSource): Promise<void>;
    writeValueWithoutResponse(value: BufferSource): Promise<void>;
    startNotifications(): Promise<BluetoothRemoteGATTCharacteristic>;
    stopNotifications(): Promise<BluetoothRemoteGATTCharacteristic>;
  }

  interface BluetoothRemoteGATTService {
    readonly uuid: string;
    getCharacteristic(uuid: string): Promise<BluetoothRemoteGATTCharacteristic>;
    getCharacteristics(): Promise<BluetoothRemoteGATTCharacteristic[]>;
  }

  interface BluetoothRemoteGATTServer {
    readonly connected: boolean;
    connect(): Promise<BluetoothRemoteGATTServer>;
    disconnect(): void;
    getPrimaryService(uuid: string): Promise<BluetoothRemoteGATTService>;
    getPrimaryServices(uuid?: string): Promise<BluetoothRemoteGATTService[]>;
  }

  interface BluetoothDevice extends EventTarget {
    readonly id: string;
    readonly name?: string;
    readonly gatt?: BluetoothRemoteGATTServer;
  }

  interface RequestDeviceOptions {
    filters?: Array<{ services?: string[]; name?: string; namePrefix?: string }>;
    optionalServices?: string[];
    acceptAllDevices?: boolean;
  }

  interface Bluetooth {
    getAvailability(): Promise<boolean>;
    requestDevice(options?: RequestDeviceOptions): Promise<BluetoothDevice>;
  }

  interface Navigator {
    readonly bluetooth?: Bluetooth;
  }
}
