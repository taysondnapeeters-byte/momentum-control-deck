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
import type { BleSnapshot, RpcPingResult, RpcSnapshot } from "@/services";
import { getFlipperBleTransport } from "@/services/flipperBleTransport";
import { getFlipperRpc } from "@/services/flipperRpc";

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

const AppStateContext = createContext<AppStateValue | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [deck, setDeck] = useState<DeckConfig>(MOCK_DECK);
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [ble, setBle] = useState<BleSnapshot>(() => transport.getSnapshot());
  const [bluetoothSupported, setBluetoothSupported] = useState(false);
  const [rpcState, setRpcState] = useState<RpcSnapshot>(() => rpc.getSnapshot());

  useEffect(() => {
    setBluetoothSupported(transport.isSupported());
    setBle(transport.getSnapshot());
    return transport.subscribe(setBle);
  }, []);

  useEffect(() => {
    setRpcState(rpc.getSnapshot());
    return rpc.subscribe(setRpcState);
  }, []);

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
        if (storedSettings) setSettings({ ...DEFAULT_SETTINGS, ...storedSettings });
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
    [ready, deck, settings, ble, bluetoothSupported, persistDeck, persistSettings],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState(): AppStateValue {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used inside AppStateProvider");
  return ctx;
}
