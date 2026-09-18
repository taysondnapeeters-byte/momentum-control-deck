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

/** Momentum firmware app that can run a saved script. */
export type DeckAppType = "Bad USB" | "JS";

export interface DeckButton {
  id: string;
  label: string;
  icon: DeckIconKey;
  accent: DeckAccent;
  /** App launched on the Flipper when the button is tapped. Optional. */
  appType?: DeckAppType;
  /** Exact script path on the Flipper, e.g. /ext/badusb/demo.txt. Optional. */
  targetPath?: string;
}

export interface DeckConfig {
  version: 1;
  buttons: DeckButton[];
}
