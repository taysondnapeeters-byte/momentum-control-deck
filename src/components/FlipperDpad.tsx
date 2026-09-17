import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Undo2 } from "lucide-react";
import type { ReactNode } from "react";
import { useRef } from "react";

import type { FlipperInputKey } from "@/services";

/**
 * Touch controls for the six physical keys.
 *
 * Pointer down sends PRESS, pointer up/cancel/lost-capture sends RELEASE —
 * exactly once per press. Holding a key never repeats the PRESS request.
 */

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
  onInput: (key: FlipperInputKey, action: "press" | "release") => void;
  disabled: boolean;
  className?: string;
  children: ReactNode;
}) {
  const held = useRef(false);

  const press = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (disabled || held.current) return;
    held.current = true;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    onInput(flipperKey, "press");
  };

  const release = () => {
    if (!held.current) return;
    held.current = false;
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
  onInput: (key: FlipperInputKey, action: "press" | "release") => void;
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
