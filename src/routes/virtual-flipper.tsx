import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Undo2 } from "lucide-react";
import { toast } from "sonner";

import { Panel, PageShell, StatusPill } from "@/components/PageShell";

export const Route = createFileRoute("/virtual-flipper")({
  head: () => ({
    meta: [
      { title: "Virtual Flipper — Momentum Deck" },
      {
        name: "description",
        content: "On-screen Flipper Zero control pad, awaiting hardware integration.",
      },
      { property: "og:title", content: "Virtual Flipper — Momentum Deck" },
      {
        property: "og:description",
        content: "On-screen Flipper Zero control pad, awaiting hardware integration.",
      },
    ],
  }),
  component: VirtualFlipperPage,
});

function pending() {
  toast("Hardware integration pending — controls are not wired up yet.");
}

function PadButton({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={pending}
      className={`tap-scale flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface-2 text-foreground hover:border-signal/40 ${className}`}
    >
      {children}
    </button>
  );
}

function VirtualFlipperPage() {
  return (
    <PageShell title="Virtual Flipper" subtitle="On-screen control pad.">
      <Panel>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-muted-foreground">Device screen</h2>
          <StatusPill tone="danger">Hardware integration pending</StatusPill>
        </div>
        <div className="mt-3 flex h-44 items-center justify-center rounded-xl border border-border bg-background">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            No signal
          </p>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          This panel stays blank on purpose. A live screen will only appear once a real device
          is connected.
        </p>
      </Panel>

      <Panel className="mt-4">
        <div className="flex flex-col items-center gap-3">
          <PadButton label="Up">
            <ArrowUp className="h-6 w-6" strokeWidth={1.7} />
          </PadButton>
          <div className="flex items-center gap-3">
            <PadButton label="Left">
              <ArrowLeft className="h-6 w-6" strokeWidth={1.7} />
            </PadButton>
            <PadButton label="OK" className="border-signal/40 bg-signal/10 text-signal">
              <span className="text-sm font-semibold tracking-wide">OK</span>
            </PadButton>
            <PadButton label="Right">
              <ArrowRight className="h-6 w-6" strokeWidth={1.7} />
            </PadButton>
          </div>
          <PadButton label="Down">
            <ArrowDown className="h-6 w-6" strokeWidth={1.7} />
          </PadButton>
          <PadButton label="Back" className="w-full">
            <Undo2 className="mr-2 h-5 w-5" strokeWidth={1.7} />
            <span className="text-sm font-medium">Back</span>
          </PadButton>
        </div>
      </Panel>
    </PageShell>
  );
}
