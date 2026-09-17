export type ThemeMode = "dark" | "light";

export interface AppSettings {
  version: 1;
  theme: ThemeMode;
  /** Stored locally only when the user explicitly saves it. Never hard-coded. */
  geminiApiKey: string | null;
}

export const DEFAULT_SETTINGS: AppSettings = {
  version: 1,
  theme: "dark",
  geminiApiKey: null,
};
