import type { DeckConfig } from "@/types/deck";

/**
 * MOCK / EXAMPLE DATA ONLY.
 * These buttons are UI samples used to seed an empty deck.
 * They are never produced by, or sent to, a real Flipper device.
 */
export const MOCK_DECK: DeckConfig = {
  version: 1,
  buttons: [
    { id: "tv-on", label: "TV ON", icon: "tv", accent: "orange" },
    { id: "tv-off", label: "TV OFF", icon: "tv-off", accent: "slate" },
    { id: "lights", label: "LIGHTS", icon: "lightbulb", accent: "lime" },
    { id: "vol-up", label: "VOLUME +", icon: "volume-up", accent: "cyan" },
    { id: "vol-down", label: "VOLUME -", icon: "volume-down", accent: "cyan" },
    { id: "custom", label: "CUSTOM", icon: "sliders", accent: "violet" },
  ],
};
