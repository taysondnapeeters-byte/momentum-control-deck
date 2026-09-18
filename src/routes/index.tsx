import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { ACCENT_CLASSES, DeckIcon } from "@/components/DeckIcon";
import { DeckButtonEditor } from "@/components/DeckButtonEditor";
import { PageShell, Panel, StatusPill } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { getFlipperRpc } from "@/services/flipperRpc";
import { useAppState } from "@/state/AppStateProvider";
import type { DeckButton } from "@/types/deck";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Momentum Deck — Flipper Zero control deck" },
      {
        name: "description",
        content:
          "A mobile-first control deck for a Flipper Zero running Momentum Firmware. Build and organise your button deck.",
      },
      { property: "og:title", content: "Momentum Deck — Flipper Zero control deck" },
      {
        property: "og:description",
        content:
          "A mobile-first control deck for a Flipper Zero running Momentum Firmware. Build and organise your button deck.",
      },
    ],
  }),
  component: DeckPage,
});

function DeckPage() {
  const { deck, upsertButton, removeButton, moveButton, connection, settings } = useAppState();
  const [editMode, setEditMode] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editing, setEditing] = useState<DeckButton | null>(null);
  const [runningId, setRunningId] = useState<string | null>(null);

  const openEditor = (button: DeckButton | null) => {
    setEditing(button);
    setEditorOpen(true);
  };

  const runButton = async (button: DeckButton) => {
    if (!button.targetPath || !button.appType) {
      toast(`"${button.label}" has no script configured — edit it to add one.`);
      return;
    }
    const mockActive = settings.mockMode && connection !== "connected";
    if (!mockActive && connection !== "connected") {
      toast.error("Flipper not connected");
      return;
    }
    setRunningId(button.id);
    toast(`Starting ${button.label}…`);
    try {
      const rpc = getFlipperRpc();
      const result = mockActive
        ? rpc.mockSimpleResult(`App start ${button.appType}`)
        : await rpc.startApp(button.appType, button.targetPath);
      if (result.ok) {
        toast.success(
          mockActive
            ? `Mock run: ${button.label} (no Flipper contacted)`
            : `${button.label} started on Flipper`,
        );
      } else {
        toast.error(`Flipper refused to start ${button.label}: ${result.status ?? "unknown status"}`);
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to start the app.");
    } finally {
      setRunningId(null);
    }
  };

  return (
    <PageShell
      title="Deck"
      subtitle={editMode ? "Reorder, edit or remove your buttons." : "Your control surface."}
      action={
        <Button
          variant={editMode ? "default" : "secondary"}
          className="h-11 shrink-0 rounded-xl"
          onClick={() => setEditMode((v) => !v)}
        >
          {editMode ? (
            <>
              <Check className="mr-1.5 h-4 w-4" /> Done
            </>
          ) : (
            <>
              <Pencil className="mr-1.5 h-4 w-4" /> Edit Deck
            </>
          )}
        </Button>
      }
    >
      <div className="mb-4">
        <StatusPill>
          <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
          Buttons with a script path run it on the Flipper
        </StatusPill>
      </div>

      {deck.buttons.length === 0 ? (
        <Panel className="py-12 text-center text-sm text-muted-foreground">
          Your deck is empty. Add your first button below.
        </Panel>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {deck.buttons.map((button, index) => (
            <div
              key={button.id}
              className="relative flex flex-col rounded-2xl border border-border bg-surface p-3 shadow-sm"
            >
              <button
                type="button"
                disabled={runningId === button.id}
                onClick={() => (editMode ? openEditor(button) : void runButton(button))}
                className="tap-scale flex min-h-[92px] flex-1 flex-col items-center justify-center gap-2 rounded-xl disabled:opacity-60"
              >
                {runningId === button.id ? (
                  <Loader2 className="h-6 w-6 animate-spin text-signal" />
                ) : (
                  <span className={ACCENT_CLASSES[button.accent]}>
                    <DeckIcon icon={button.icon} />
                  </span>
                )}
                <span className="text-center text-sm font-medium tracking-wide">
                  {button.label}
                </span>
              </button>

              {editMode ? (
                <div className="mt-2 flex items-center justify-between gap-1 border-t border-border pt-2">
                  <button
                    type="button"
                    aria-label={`Move ${button.label} earlier`}
                    disabled={index === 0}
                    onClick={() => moveButton(button.id, -1)}
                    className="tap-scale flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground disabled:opacity-30"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label={`Edit ${button.label}`}
                    onClick={() => openEditor(button)}
                    className="tap-scale flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label={`Remove ${button.label}`}
                    onClick={() => removeButton(button.id)}
                    className="tap-scale flex h-9 w-9 items-center justify-center rounded-lg text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label={`Move ${button.label} later`}
                    disabled={index === deck.buttons.length - 1}
                    onClick={() => moveButton(button.id, 1)}
                    className="tap-scale flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground disabled:opacity-30"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      )}

      {editMode ? (
        <Button
          variant="secondary"
          className="mt-4 h-12 w-full rounded-xl"
          onClick={() => openEditor(null)}
        >
          <Plus className="mr-2 h-5 w-5" /> Add button
        </Button>
      ) : null}

      <DeckButtonEditor
        open={editorOpen}
        button={editing}
        onOpenChange={setEditorOpen}
        onSave={async (next) => {
          await upsertButton(next);
          setEditorOpen(false);
          toast.success("Button saved.");
        }}
      />
    </PageShell>
  );
}
