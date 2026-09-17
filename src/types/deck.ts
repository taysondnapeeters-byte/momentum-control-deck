export type DeckIconKey =
  | "tv"
  | "tv-off"
  | "lightbulb"
  | "volume-up"
  | "volume-down"
  | "sliders"
  | "radio"
  | "wifi"
  | "key"
  | "power";

export type DeckAccent = "orange" | "cyan" | "violet" | "lime" | "rose" | "slate";

export interface DeckButton {
  id: string;
  label: string;
  icon: DeckIconKey;
  accent: DeckAccent;
  /** Reserved for a future hardware action binding. Unused in this phase. */
  action?: null;
}

export interface DeckConfig {
  version: 1;
  buttons: DeckButton[];
}
