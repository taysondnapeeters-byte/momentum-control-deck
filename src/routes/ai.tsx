import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Bot, Sparkles } from "lucide-react";

import { Panel, PageShell, StatusPill } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { useAppState } from "@/state/AppStateProvider";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "AI — Momentum Deck" },
      { name: "description", content: "Gemini assistant configuration for Momentum Deck." },
      { property: "og:title", content: "AI — Momentum Deck" },
      {
        property: "og:description",
        content: "Gemini assistant configuration for Momentum Deck.",
      },
    ],
  }),
  component: AiPage,
});

function AiPage() {
  const navigate = useNavigate();
  const { settings } = useAppState();
  const configured = Boolean(settings.geminiApiKey);

  return (
    <PageShell title="AI" subtitle="Assistant layer for your deck.">
      <Panel>
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2">
            <Bot className="h-6 w-6 text-violet" strokeWidth={1.6} aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-semibold">Gemini AI</h2>
            <p className="text-sm text-muted-foreground">Not connected in this build.</p>
            <div className="mt-3">
              <StatusPill tone={configured ? "signal" : "muted"}>
                {configured ? "Key saved" : "Not configured"}
              </StatusPill>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          variant="secondary"
          className="mt-5 h-12 w-full rounded-xl text-base"
          onClick={() => navigate({ to: "/settings" })}
        >
          <Sparkles className="mr-2 h-5 w-5" aria-hidden="true" />
          Configure Gemini
        </Button>
      </Panel>
    </PageShell>
  );
}
