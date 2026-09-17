import { createFileRoute } from "@tanstack/react-router";
import { Bluetooth, Cpu, Info } from "lucide-react";
import { toast } from "sonner";

import { Panel, PageShell, StatusPill } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { useAppState } from "@/state/AppStateProvider";

export const Route = createFileRoute("/device")({
  head: () => ({
    meta: [
      { title: "Device — Momentum Deck" },
      {
        name: "description",
        content: "Connection panel for a Flipper Zero running Momentum Firmware.",
      },
      { property: "og:title", content: "Device — Momentum Deck" },
      {
        property: "og:description",
        content: "Connection panel for a Flipper Zero running Momentum Firmware.",
      },
    ],
  }),
  component: DevicePage,
});

function DevicePage() {
  const { connection } = useAppState();

  return (
    <PageShell title="Device" subtitle="Hardware link for your Flipper Zero.">
      <Panel>
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2">
            <Cpu className="h-6 w-6 text-signal" strokeWidth={1.6} aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-semibold">Flipper Zero</h2>
            <p className="text-sm text-muted-foreground">Momentum Firmware</p>
            <div className="mt-3">
              <StatusPill>
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                {connection === "disconnected" ? "Not connected" : connection}
              </StatusPill>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          className="mt-5 h-12 w-full rounded-xl text-base"
          onClick={() =>
            toast("Bluetooth integration will be enabled in the next development phase.")
          }
        >
          <Bluetooth className="mr-2 h-5 w-5" aria-hidden="true" />
          Connect Flipper
        </Button>
      </Panel>

      <Panel className="mt-4">
        <div className="flex gap-3 text-sm text-muted-foreground">
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>
            No device data is shown anywhere in this build. Every reading you see in the app is
            an interface placeholder, never a value read from real hardware.
          </p>
        </div>
      </Panel>
    </PageShell>
  );
}
