import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { idbClear, idbGet, idbSet, KEY_DECK, KEY_SETTINGS } from "@/lib/idb";
import { MOCK_DECK } from "@/data/mockDeck";
import type { DeckButton, DeckConfig } from "@/types/deck";
import { DEFAULT_SETTINGS, type AppSettings, type ThemeMode } from "@/types/settings";
import type {
  BleSnapshot,
  RpcDeviceInfoResult,
  RpcPingResult,
  RpcPowerInfoResult,
  RpcSnapshot,
  StorageListResult,
  StorageReadResult,
  StorageStatResult,
} from "@/services";
import { getFlipperBleTransport } from "@/services/flipperBleTransport";
import { getFlipperRpc, MAX_READ_BYTES } from "@/services/flipperRpc";

const transport = getFlipperBleTransport();
const rpc = getFlipperRpc();

interface AppStateValue {
  ready: boolean;
  deck: DeckConfig;
  settings: AppSettings;
  /** Live BLE transport snapshot. The UI never touches navigator.bluetooth. */
  ble: BleSnapshot;
  /** Convenience alias used across the app. */
  connection: BleSnapshot["state"];
  bluetoothSupported: boolean;
  /** Flipper RPC state. Ping is the only operation in this phase. */
  rpc: RpcSnapshot;
  pingFlipper: () => Promise<RpcPingResult>;
  refreshDeviceInfo: () => Promise<RpcDeviceInfoResult>;
  refreshPowerInfo: () => Promise<RpcPowerInfoResult>;
  refreshStorageStat: (path: string) => Promise<StorageStatResult>;
  readStorageFile: (path: string) => Promise<StorageReadResult>;
  /** Read-only filesystem browser state. The Flipper is the source of truth. */
  storagePath: string;
  storageLoading: boolean;
  storageReadLoading: boolean;
  storageList: StorageListResult | null;
  selectedFile: SelectedFile | null;
  refreshStorageList: (path?: string) => Promise<void>;
  navigateIntoStorageDirectory: (name: string) => Promise<void>;
  navigateBackStorageDirectory: () => Promise<void>;
  openStorageFile: (name: string) => Promise<void>;
  closeStorageFile: () => void;
  /** Explicit reconnect to a previously permitted device, where supported. */
  reconnectSupported: boolean;
  knownDevices: { id: string; name: string | null }[];
  reconnectFlipper: (id: string) => Promise<void>;
  connectFlipper: () => Promise<void>;
  runBleDiagnostic: () => Promise<void>;
  disconnectFlipper: () => Promise<void>;
  clearBleLogs: () => void;
  saveDeck: (next: DeckConfig) => Promise<void>;
  upsertButton: (button: DeckButton) => Promise<void>;
  removeButton: (id: string) => Promise<void>;
  moveButton: (id: string, direction: -1 | 1) => Promise<void>;
  setTheme: (theme: ThemeMode) => Promise<void>;
  setGeminiApiKey: (key: string | null) => Promise<void>;
  setMockMode: (enabled: boolean) => Promise<void>;
  clearAllData: () => Promise<void>;
}

/** The one file the user explicitly opened, with its Stat and Read results. */
export interface SelectedFile {
  path: string;
  name: string;
  stat: StorageStatResult | null;
  read: StorageReadResult | null;
  /** Set when the file was not read because it exceeds the safety limit. */
  tooLarge: string | null;
}

const ROOT_PATH = "/ext";

const AppStateContext = createContext<AppStateValue | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [deck, setDeck] = useState<DeckConfig>(MOCK_DECK);
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [ble, setBle] = useState<BleSnapshot>(() => transport.getSnapshot());
  const [bluetoothSupported, setBluetoothSupported] = useState(false);
  const [rpcState, setRpcState] = useState<RpcSnapshot>(() => rpc.getSnapshot());
  const [storagePath, setStoragePath] = useState<string>(ROOT_PATH);
  const [storageList, setStorageList] = useState<StorageListResult | null>(null);
  const [storageLoading, setStorageLoading] = useState(false);
  const [storageReadLoading, setStorageReadLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<SelectedFile | null>(null);
  const [reconnectSupported, setReconnectSupported] = useState(false);
  const [knownDevices, setKnownDevices] = useState<{ id: string; name: string | null }[]>([]);

  useEffect(() => {
    setBluetoothSupported(transport.isSupported());
    setBle(transport.getSnapshot());
    return transport.subscribe(setBle);
  }, []);

  useEffect(() => {
    setRpcState(rpc.getSnapshot());
    return rpc.subscribe(setRpcState);
  }, []);

  // Previously permitted devices. This never prompts and never connects.
  useEffect(() => {
    let cancelled = false;
    setReconnectSupported(transport.supportsReconnect());
    void transport.listKnownDevices().then((devices) => {
      if (!cancelled) setKnownDevices(devices);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // A lost connection stops the browser cleanly; the path is kept.
  useEffect(() => {
    if (ble.state === "connected") return;
    setStorageLoading(false);
    setStorageReadLoading(false);
  }, [ble.state]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [storedDeck, storedSettings] = await Promise.all([
          idbGet<DeckConfig>(KEY_DECK),
          idbGet<AppSettings>(KEY_SETTINGS),
        ]);
        if (cancelled) return;
        if (storedDeck?.buttons) setDeck(storedDeck);
        if (storedSettings) {
          const merged = { ...DEFAULT_SETTINGS, ...storedSettings };
          setSettings(merged);
          // Display only — no Storage RPC is issued until the user asks.
          setStoragePath(merged.lastStoragePath || ROOT_PATH);
        }
      } catch (error) {
        console.error("Local data could not be loaded", error);
      } finally {
        if (!cancelled) setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", settings.theme === "dark");
  }, [settings.theme]);

  const persistDeck = useCallback(async (next: DeckConfig) => {
    setDeck(next);
    try {
      await idbSet(KEY_DECK, next);
    } catch (error) {
      console.error("Deck could not be saved", error);
    }
  }, []);

  const persistSettings = useCallback(async (next: AppSettings) => {
    setSettings(next);
    try {
      await idbSet(KEY_SETTINGS, next);
    } catch (error) {
      console.error("Settings could not be saved", error);
    }
  }, []);

  // — read-only filesystem browser —

  const mockActive = settings.mockMode && ble.state !== "connected";

  const listAt = useCallback(
    async (path: string): Promise<StorageListResult> => {
      // Mock mode never touches the radio and is always labelled as mock.
      if (mockActive) return rpc.mockStorageList(path);
      try {
        return await rpc.listStorage(path);
      } catch (error) {
        console.error("Storage List failed", error);
        return {
          ok: false,
          mock: false,
          commandId: null,
          path,
          roundTripMs: null,
          entries: [],
          txHex: null,
          rxHex: null,
          status: null,
          error: error instanceof Error ? error.message : "Unknown RPC error.",
          at: Date.now(),
        };
      }
    },
    [mockActive],
  );

  const statAt = useCallback(
    async (path: string): Promise<StorageStatResult> => {
      if (mockActive) return rpc.mockStorageStat(path);
      try {
        return await rpc.statStorage(path);
      } catch (error) {
        console.error("Storage Stat failed", error);
        return {
          ok: false,
          mock: false,
          commandId: null,
          path,
          entry: null,
          roundTripMs: null,
          txHex: null,
          rxHex: null,
          status: null,
          error: error instanceof Error ? error.message : "Unknown RPC error.",
          at: Date.now(),
        };
      }
    },
    [mockActive],
  );

  const readAt = useCallback(
    async (path: string): Promise<StorageReadResult> => {
      if (mockActive) return rpc.mockStorageRead(path);
      try {
        return await rpc.readStorage(path);
      } catch (error) {
        console.error("Storage Read failed", error);
        return {
          ok: false,
          mock: false,
          commandId: null,
          path,
          size: 0,
          data: new Uint8Array(0),
          roundTripMs: null,
          txHex: null,
          rxHex: null,
          status: null,
          error: error instanceof Error ? error.message : "Unknown RPC error.",
          at: Date.now(),
        };
      }
    },
    [mockActive],
  );

  const busyStorage = storageLoading || storageReadLoading;

  /** One listing at a time; the path is remembered for the next session. */
  const loadPath = useCallback(
    async (path?: string) => {
      const target = path ?? storagePath;
      if (busyStorage) return;
      setStorageLoading(true);
      try {
        const result = await listAt(target);
        setStoragePath(target);
        setStorageList(result);
        // Only the path string is persisted; never a Bluetooth object.
        setSettings((current) => {
          if (current.lastStoragePath === target) return current;
          const next = { ...current, lastStoragePath: target };
          void idbSet(KEY_SETTINGS, next);
          return next;
        });
      } finally {
        setStorageLoading(false);
      }
    },
    [busyStorage, listAt, storagePath],
  );

  const navigateInto = useCallback(
    async (name: string) => {
      if (busyStorage) return;
      const next = `${storagePath.replace(/\/$/, "")}/${name}`;
      setSelectedFile(null);
      await loadPath(next);
    },
    [busyStorage, loadPath, storagePath],
  );

  const navigateBack = useCallback(async () => {
    if (busyStorage || storagePath === ROOT_PATH) return;
    const parent = storagePath.slice(0, storagePath.lastIndexOf("/")) || ROOT_PATH;
    setSelectedFile(null);
    await loadPath(parent.length < ROOT_PATH.length ? ROOT_PATH : parent);
  }, [busyStorage, loadPath, storagePath]);

  /** Stat first, then read — and only when the file fits the safety limit. */
  const openFile = useCallback(
    async (name: string) => {
      if (busyStorage) return;
      const path = `${storagePath.replace(/\/$/, "")}/${name}`;
      setStorageReadLoading(true);
      setSelectedFile({ path, name, stat: null, read: null, tooLarge: null });
      try {
        const stat = await statAt(path);
        setSelectedFile({ path, name, stat, read: null, tooLarge: null });
        if (!stat.ok || !stat.entry) return;
        if (stat.entry.size > MAX_READ_BYTES) {
          setSelectedFile({
            path,
            name,
            stat,
            read: null,
            tooLarge: `This file is ${stat.entry.size} bytes, which is larger than the ${MAX_READ_BYTES} byte limit of the current read mode. It was not read.`,
          });
          return;
        }
        const read = await readAt(path);
        setSelectedFile({ path, name, stat, read, tooLarge: null });
      } finally {
        setStorageReadLoading(false);
      }
    },
    [busyStorage, readAt, statAt, storagePath],
  );

  const value = useMemo<AppStateValue>(
    () => ({
      ready,
      deck,
      settings,
      ble,
      connection: ble.state,
      bluetoothSupported,
      rpc: rpcState,
      pingFlipper: async () => {
        // Mock mode never touches the radio and is always labelled as mock.
        if (settings.mockMode && ble.state !== "connected") return rpc.mockPing();
        try {
          return await rpc.ping();
        } catch (error) {
          console.error("RPC ping failed", error);
          return rpc.getSnapshot().lastPing ?? {
            ok: false,
            mock: false,
            commandId: null,
            roundTripMs: null,
            payload: null,
            txHex: null,
            rxHex: null,
            status: null,
            error: error instanceof Error ? error.message : "Unknown RPC error.",
          };
        }
      },
      refreshDeviceInfo: async () => {
        // Mock mode never touches the radio and is always labelled as mock.
        if (settings.mockMode && ble.state !== "connected") return rpc.mockDeviceInfo();
        try {
          return await rpc.getDeviceInfo();
        } catch (error) {
          console.error("Device Info failed", error);
          return rpc.getSnapshot().lastDeviceInfo ?? {
            ok: false,
            mock: false,
            commandId: null,
            roundTripMs: null,
            entries: [],
            txHex: null,
            rxHex: null,
            status: null,
            error: error instanceof Error ? error.message : "Unknown RPC error.",
            at: Date.now(),
          };
        }
      },
      refreshPowerInfo: async () => {
        // Mock mode never touches the radio and is always labelled as mock.
        if (settings.mockMode && ble.state !== "connected") return rpc.mockPowerInfo();
        try {
          return await rpc.getPowerInfo();
        } catch (error) {
          console.error("Power Info failed", error);
          return rpc.getSnapshot().lastPowerInfo ?? {
            ok: false,
            mock: false,
            commandId: null,
            roundTripMs: null,
            entries: [],
            txHex: null,
            rxHex: null,
            status: null,
            error: error instanceof Error ? error.message : "Unknown RPC error.",
            at: Date.now(),
          };
        }
      },
      refreshStorageStat: statAt,
      readStorageFile: readAt,
      storagePath,
      storageLoading,
      storageReadLoading,
      storageList,
      selectedFile,
      refreshStorageList: loadPath,
      navigateIntoStorageDirectory: navigateInto,
      navigateBackStorageDirectory: navigateBack,
      openStorageFile: openFile,
      closeStorageFile: () => setSelectedFile(null),
      reconnectSupported,
      knownDevices,
      reconnectFlipper: async (id) => {
        try {
          await transport.reconnect(id);
        } catch (error) {
          console.error("Bluetooth reconnect failed", error);
        }
      },
      connectFlipper: async () => {
        try {
          await transport.connect();
        } catch (error) {
          console.error("Bluetooth connection failed", error);
        }
      },
      runBleDiagnostic: async () => {
        try {
          await transport.runDiagnostic();
        } catch (error) {
          console.error("Bluetooth diagnostic failed", error);
        }
      },
      disconnectFlipper: async () => {
        try {
          await transport.disconnect();
        } catch (error) {
          console.error("Bluetooth disconnect failed", error);
        }
      },
      clearBleLogs: () => transport.clearLogs(),
      saveDeck: persistDeck,
      upsertButton: async (button) => {
        const exists = deck.buttons.some((b) => b.id === button.id);
        const buttons = exists
          ? deck.buttons.map((b) => (b.id === button.id ? button : b))
          : [...deck.buttons, button];
        await persistDeck({ ...deck, buttons });
      },
      removeButton: async (id) => {
        await persistDeck({ ...deck, buttons: deck.buttons.filter((b) => b.id !== id) });
      },
      moveButton: async (id, direction) => {
        const index = deck.buttons.findIndex((b) => b.id === id);
        const target = index + direction;
        if (index < 0 || target < 0 || target >= deck.buttons.length) return;
        const buttons = [...deck.buttons];
        const moved = buttons[index] as DeckButton;
        const swapped = buttons[target] as DeckButton;
        buttons[index] = swapped;
        buttons[target] = moved;
        await persistDeck({ ...deck, buttons });
      },
      setTheme: async (theme) => persistSettings({ ...settings, theme }),
      setGeminiApiKey: async (geminiApiKey) => persistSettings({ ...settings, geminiApiKey }),
      setMockMode: async (mockMode) => persistSettings({ ...settings, mockMode }),
      clearAllData: async () => {
        await idbClear();
        setDeck(MOCK_DECK);
        setSettings(DEFAULT_SETTINGS);
      },
    }),
    [
      ready,
      deck,
      settings,
      ble,
      rpcState,
      bluetoothSupported,
      persistDeck,
      persistSettings,
      statAt,
      readAt,
      loadPath,
      navigateInto,
      navigateBack,
      openFile,
      storagePath,
      storageList,
      storageLoading,
      storageReadLoading,
      selectedFile,
      reconnectSupported,
      knownDevices,
    ],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState(): AppStateValue {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used inside AppStateProvider");
  return ctx;
}
