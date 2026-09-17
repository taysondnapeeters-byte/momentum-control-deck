import { createFileRoute } from "@tanstack/react-router";
import { FolderClosed } from "lucide-react";

import { Panel, PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/files")({
  head: () => ({
    meta: [
      { title: "Files — Momentum Deck" },
      { name: "description", content: "Browse supported Flipper Zero files from your phone." },
      { property: "og:title", content: "Files — Momentum Deck" },
      {
        property: "og:description",
        content: "Browse supported Flipper Zero files from your phone.",
      },
    ],
  }),
  component: FilesPage,
});

function FilesPage() {
  return (
    <PageShell title="Files" subtitle="Storage browser.">
      <Panel className="flex flex-col items-center gap-3 py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-2">
          <FolderClosed className="h-7 w-7 text-muted-foreground" strokeWidth={1.6} />
        </div>
        <h2 className="text-lg font-semibold">Flipper Files</h2>
        <p className="max-w-[24rem] text-sm text-muted-foreground">
          Connect a Flipper to browse supported files.
        </p>
      </Panel>
    </PageShell>
  );
}
