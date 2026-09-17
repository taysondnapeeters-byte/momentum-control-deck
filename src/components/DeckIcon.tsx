import {
  KeyRound,
  Lightbulb,
  Power,
  Radio,
  SlidersHorizontal,
  Tv,
  TvMinimal,
  Volume1,
  Volume2,
  Wifi,
  type LucideIcon,
} from "lucide-react";

import type { DeckAccent, DeckIconKey } from "@/types/deck";

export const DECK_ICONS: Record<DeckIconKey, LucideIcon> = {
  tv: Tv,
  "tv-off": TvMinimal,
  lightbulb: Lightbulb,
  "volume-up": Volume2,
  "volume-down": Volume1,
  sliders: SlidersHorizontal,
  radio: Radio,
  wifi: Wifi,
  key: KeyRound,
  power: Power,
};

export const DECK_ICON_KEYS = Object.keys(DECK_ICONS) as DeckIconKey[];

export const ACCENT_CLASSES: Record<DeckAccent, string> = {
  orange: "text-signal",
  cyan: "text-cyan",
  violet: "text-violet",
  lime: "text-lime",
  rose: "text-rose",
  slate: "text-muted-foreground",
};

export const ACCENT_KEYS = Object.keys(ACCENT_CLASSES) as DeckAccent[];

export function DeckIcon({
  icon,
  className = "h-7 w-7",
}: {
  icon: DeckIconKey;
  className?: string;
}) {
  const Icon = DECK_ICONS[icon] ?? SlidersHorizontal;
  return <Icon className={className} strokeWidth={1.6} aria-hidden="true" />;
}
