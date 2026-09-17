import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

import { Panel, PageShell, StatusPill } from "@/components/PageShell";

export const Route = createFileRoute("/geo")({
  head: () => ({
    meta: [
      { title: "Geo — Momentum Deck" },
      { name: "description", content: "Geo-Catcher map surface for future signal and GPS work." },
      { property: "og:title", content: "Geo — Momentum Deck" },
      {
        property: "og:description",
        content: "Geo-Catcher map surface for future signal and GPS work.",
      },
    ],
  }),
  component: GeoPage,
});

function GeoPage() {
  return (
    <PageShell title="Geo" subtitle="Location surface.">
      <Panel className="p-0">
        <div className="deck-grid-bg flex h-72 flex-col items-center justify-center gap-3 rounded-2xl bg-surface-2/40 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface">
            <MapPin className="h-7 w-7 text-signal" strokeWidth={1.6} />
          </div>
          <h2 className="text-lg font-semibold">Geo-Catcher</h2>
          <p className="max-w-[22rem] px-6 text-sm text-muted-foreground">
            Signal and GPS functionality will be added later.
          </p>
          <StatusPill>Map placeholder</StatusPill>
        </div>
      </Panel>
    </PageShell>
  );
}
