export type ThemeMode = "dark" | "light";

export interface AppSettings {
  version: 1;
  theme: ThemeMode;
  /** Stored locally only when the user explicitly saves it. Never hard-coded. */
  geminiApiKey: string | null;
  /** When true the app shows interface placeholders only — never real hardware data. */
  mockMode: boolean;
}

export const DEFAULT_SETTINGS: AppSettings = {
  version: 1,
  theme: "dark",
  geminiApiKey: null,
  mockMode: true,
};
