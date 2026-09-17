import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Undo2 } from "lucide-react";
import type { ReactNode } from "react";
import { useRef } from "react";

import type { FlipperInputKey } from "@/services";

/**
 * Touch controls for the six physical keys.
 *
 * Pointer down sends PRESS. Pointer up/cancel/lost-capture synthesizes the
 * SHORT event the Flipper GUI queue expects (menus listen for SHORT, which the
 * physical hardware timer normally produces), then sends RELEASE — exactly
 * once per press. Holding a key never repeats the PRESS request.
 * onPointerLeave is intentionally NOT used: it fires false RELEASEs on touch
 * screens.
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
  onInput: (key: FlipperInputKey, action: "press" | "release" | "short") => void;
  disabled: boolean;
  className?: string;
  children: ReactNode;
}) {
  const held = useRef(false);

  const press = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (disabled || held.current) return;
    held.current = true;
    event.preventDefault();
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Best-effort: an already-released or synthetic pointer cannot be captured.
    }
    console.log(
      `Virtual Flipper input:\nkey=${label.toUpperCase()}\nkeyValue=${FLIPPER_KEYS[flipperKey]}\ntype=PRESS`,
    );
    onInput(flipperKey, "press");
  };

  const release = () => {
    if (!held.current) return;
    held.current = false;
    // SHORT is synthesized here because RPC input bypasses the hardware timer
    // that would normally produce it. RELEASE completes the gesture lifecycle.
    console.log(
      `Virtual Flipper input:\nkey=${label.toUpperCase()}\nkeyValue=${FLIPPER_KEYS[flipperKey]}\ntype=SHORT`,
    );
    onInput(flipperKey, "short");
    console.log(
      `Virtual Flipper input:\nkey=${label.toUpperCase()}\nkeyValue=${FLIPPER_KEYS[flipperKey]}\ntype=RELEASE`,
    );
    onInput(flipperKey, "release");
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
  onInput: (key: FlipperInputKey, action: "press" | "release" | "short") => void;
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
