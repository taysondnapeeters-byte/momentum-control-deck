import { useEffect, useState } from "react";

import {
  ACCENT_CLASSES,
  ACCENT_KEYS,
  DECK_ICON_KEYS,
  DeckIcon,
} from "@/components/DeckIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { DeckAccent, DeckAppType, DeckButton, DeckIconKey } from "@/types/deck";

const APP_TYPES: DeckAppType[] = ["Bad USB", "JS"];

interface Props {
  open: boolean;
  button: DeckButton | null;
  onOpenChange: (open: boolean) => void;
  onSave: (button: DeckButton) => void;
}

export function DeckButtonEditor({ open, button, onOpenChange, onSave }: Props) {
  const [label, setLabel] = useState("");
  const [icon, setIcon] = useState<DeckIconKey>("sliders");
  const [accent, setAccent] = useState<DeckAccent>("orange");
  const [appType, setAppType] = useState<DeckAppType>("Bad USB");
  const [targetPath, setTargetPath] = useState("");

  useEffect(() => {
    if (!open) return;
    setLabel(button?.label ?? "");
    setIcon(button?.icon ?? "sliders");
    setAccent(button?.accent ?? "orange");
    setAppType(button?.appType ?? "Bad USB");
    setTargetPath(button?.targetPath ?? "");
  }, [open, button]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-2xl">
        <DialogHeader>
          <DialogTitle>{button ? "Edit button" : "New button"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="deck-label">Name</Label>
            <Input
              id="deck-label"
              value={label}
              maxLength={16}
              placeholder="e.g. TV ON"
              onChange={(e) => setLabel(e.target.value)}
              className="h-12 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label>Icon</Label>
            <div className="grid grid-cols-5 gap-2">
              {DECK_ICON_KEYS.map((key) => (
                <button
                  key={key}
                  type="button"
                  aria-label={key}
                  onClick={() => setIcon(key)}
                  className={`tap-scale flex h-12 items-center justify-center rounded-xl border bg-surface-2 ${
                    icon === key ? "border-signal text-signal" : "border-border text-foreground"
                  }`}
                >
                  <DeckIcon icon={key} className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Accent</Label>
            <div className="flex gap-2">
              {ACCENT_KEYS.map((key) => (
                <button
                  key={key}
                  type="button"
                  aria-label={key}
                  onClick={() => setAccent(key)}
                  className={`tap-scale flex h-11 w-11 items-center justify-center rounded-full border ${
                    accent === key ? "border-signal" : "border-border"
                  }`}
                >
                  <span
                    className={`h-5 w-5 rounded-full bg-current ${ACCENT_CLASSES[key]}`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Runs on tap (optional)</Label>
            <div className="grid grid-cols-2 gap-2">
              {APP_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setAppType(type)}
                  className={`tap-scale flex h-11 items-center justify-center rounded-xl border text-sm font-medium ${
                    appType === type
                      ? "border-signal text-signal"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <Input
              id="deck-target-path"
              value={targetPath}
              maxLength={255}
              placeholder="/ext/badusb/demo.txt"
              onChange={(e) => setTargetPath(e.target.value)}
              className="h-12 rounded-xl font-mono text-xs"
            />
            <p className="text-xs text-muted-foreground">
              Exact script path on the Flipper. Leave empty for a display-only button.
            </p>
            {targetPath.trim() && !targetPath.trim().startsWith("/ext/") ? (
              <p className="text-xs text-destructive">
                Scripts live under /ext/ on the Flipper — check the path.
              </p>
            ) : null}
          </div>
        </div>

        <DialogFooter>
          <Button
            className="h-12 w-full rounded-xl"
            disabled={!label.trim()}
            onClick={() =>
              onSave({
                id: button?.id ?? `btn-${Date.now().toString(36)}`,
                label: label.trim(),
                icon,
                accent,
                appType: targetPath.trim() ? appType : undefined,
                targetPath: targetPath.trim() || undefined,
              })
            }
          >
            Save button
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
