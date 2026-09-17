import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Undo2 } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

import type { FlipperInputKey } from "@/services";

/**
 * Touch controls for the six physical keys.
 *
 * RPC input bypasses the Flipper's hardware debounce timer, so the firmware
 * never synthesizes the SHORT/LONG/REPEAT events that views listen for. A quick
 * tap therefore sends exactly one SHORT event and nothing else (the qFlipper /
 * official web app approach). Holding a control beyond HOLD_THRESHOLD_MS sends
 * LONG, then REPEAT every REPEAT_INTERVAL_MS until pointer up, which sends
 * RELEASE. onPointerLeave is intentionally NOT used: it fires false releases on
 * touch screens.
 */

/** `PB_Gui.InputKey` firmware values — mirrors INPUT_KEYS in flipperRpc.ts. */
const FLIPPER_KEYS: Record<FlipperInputKey, number> = {
  up: 0,
  down: 1,
  right: 2,
  left: 3,
  ok: 4,
  back: 5,
};

/** Gestures the pad reports to the stream hook. */
export type PadGesture = "tap" | "holdStart" | "holdRepeat" | "holdRelease";

/** Press longer than this and the gesture becomes a hold (LONG/REPEAT/RELEASE). */
const HOLD_THRESHOLD_MS = 400;

/** Cadence of synthesized REPEAT events while a control stays held. */
const REPEAT_INTERVAL_MS = 150;

function PadButton({
  flipperKey,
  label,
  onInput,
  disabled,
  className = "",
  children,
}: {
  flipperKey: FlipperInputKey;
  label: string;
  onInput: (key: FlipperInputKey, gesture: PadGesture) => void;
  disabled: boolean;
  className?: string;
  children: ReactNode;
}) {
  const held = useRef(false);
  const isHold = useRef(false);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const repeatTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const log = (type: string) =>
    console.log(
      `Virtual Flipper input:\nkey=${label.toUpperCase()}\nkeyValue=${FLIPPER_KEYS[flipperKey]}\ntype=${type}`,
    );

  const clearTimers = () => {
    if (holdTimer.current !== null) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
    if (repeatTimer.current !== null) {
      clearInterval(repeatTimer.current);
      repeatTimer.current = null;
    }
  };

  useEffect(() => clearTimers, []);

  const press = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (disabled || held.current) return;
    held.current = true;
    isHold.current = false;
    event.preventDefault();
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Best-effort: an already-released or synthetic pointer cannot be captured.
    }
    // No RPC on touch-down. If the pointer is still down when the threshold
    // expires, the gesture becomes a hold: LONG, then REPEAT on a cadence.
    holdTimer.current = setTimeout(() => {
      holdTimer.current = null;
      if (!held.current) return;
      isHold.current = true;
      log("LONG");
      onInput(flipperKey, "holdStart");
      repeatTimer.current = setInterval(() => {
        if (!held.current) {
          clearTimers();
          return;
        }
        log("REPEAT");
        onInput(flipperKey, "holdRepeat");
      }, REPEAT_INTERVAL_MS);
    }, HOLD_THRESHOLD_MS);
  };

  const release = () => {
    if (!held.current) return;
    held.current = false;
    clearTimers();
    if (isHold.current) {
      isHold.current = false;
      log("RELEASE");
      onInput(flipperKey, "holdRelease");
    } else {
      // Quick tap: exactly one SHORT event, nothing else.
      log("SHORT");
      onInput(flipperKey, "tap");
    }
  };

  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onPointerDown={press}
      onPointerUp={release}
      onPointerCancel={release}
      onLostPointerCapture={release}
      onContextMenu={(event) => event.preventDefault()}
      style={{ touchAction: "none" }}
      className={`tap-scale flex h-16 w-16 select-none items-center justify-center rounded-2xl border border-border bg-surface-2 text-foreground transition-colors active:border-signal/60 active:bg-signal/15 disabled:opacity-40 ${className}`}
    >
      {children}
    </button>
  );
}

export function FlipperDpad({
  onInput,
  disabled,
}: {
  onInput: (key: FlipperInputKey, gesture: PadGesture) => void;
  disabled: boolean;
}) {
  const shared = { onInput, disabled };
  return (
    <div className="flex flex-col items-center gap-3" style={{ touchAction: "none" }}>
      <PadButton flipperKey="up" label="Up" {...shared}>
        <ArrowUp className="h-6 w-6" strokeWidth={1.7} />
      </PadButton>
      <div className="flex items-center gap-3">
        <PadButton flipperKey="left" label="Left" {...shared}>
          <ArrowLeft className="h-6 w-6" strokeWidth={1.7} />
        </PadButton>
        <PadButton
          flipperKey="ok"
          label="OK"
          className="border-signal/40 bg-signal/10 text-signal"
          {...shared}
        >
          <span className="text-sm font-semibold tracking-wide">OK</span>
        </PadButton>
        <PadButton flipperKey="right" label="Right" {...shared}>
          <ArrowRight className="h-6 w-6" strokeWidth={1.7} />
        </PadButton>
      </div>
      <PadButton flipperKey="down" label="Down" {...shared}>
        <ArrowDown className="h-6 w-6" strokeWidth={1.7} />
      </PadButton>
      <PadButton flipperKey="back" label="Back" className="mt-1 w-32" {...shared}>
        <Undo2 className="mr-2 h-5 w-5" strokeWidth={1.7} />
        <span className="text-sm font-medium">Back</span>
      </PadButton>
    </div>
  );
}
