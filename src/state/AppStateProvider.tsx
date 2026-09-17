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
import type { ConnectionStatus } from "@/services";

interface AppStateValue {
  ready: boolean;
  deck: DeckConfig;
  settings: AppSettings;
  connection: ConnectionStatus;
  saveDeck: (next: DeckConfig) => Promise<void>;
  upsertButton: (button: DeckButton) => Promise<void>;
  removeButton: (id: string) => Promise<void>;
  moveButton: (id: string, direction: -1 | 1) => Promise<void>;
  setTheme: (theme: ThemeMode) => Promise<void>;
  setGeminiApiKey: (key: string | null) => Promise<void>;
  clearAllData: () => Promise<void>;
}

const AppStateContext = createContext<AppStateValue | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [deck, setDeck] = useState<DeckConfig>(MOCK_DECK);
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  // Hardware is not implemented in this phase; the status stays disconnected.
  const [connection] = useState<ConnectionStatus>("disconnected");

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
      connection,
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
      clearAllData: async () => {
        await idbClear();
        setDeck(MOCK_DECK);
        setSettings(DEFAULT_SETTINGS);
      },
    }),
    [ready, deck, settings, connection, persistDeck, persistSettings],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState(): AppStateValue {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used inside AppStateProvider");
  return ctx;
}
