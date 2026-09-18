import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Copy, Loader2, Save, Sparkles, Terminal } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { PageShell, Panel, StatusPill } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { generatePayload } from "@/lib/aiForge.functions";
import { getFlipperRpc } from "@/services/flipperRpc";
import { useAppState } from "@/state/AppStateProvider";

type ScriptType = "duckyscript" | "flipper-js";

const TARGET_DIR: Record<ScriptType, string> = {
  duckyscript: "/ext/badusb",
  "flipper-js": "/ext/apps/Scripts",
};

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "AI Forge — Momentum Deck" },
      {
        name: "description",
        content:
          "Generate BadUSB DuckyScript and Flipper JS payloads from natural language using Gemini.",
      },
      { property: "og:title", content: "AI Forge — Momentum Deck" },
      {
        property: "og:description",
        content:
          "Generate BadUSB DuckyScript and Flipper JS payloads from natural language using Gemini.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AiForgePage,
});

function AiForgePage() {
  const forge = useServerFn(generatePayload);
  const { connection, settings } = useAppState();
  const [scriptType, setScriptType] = useState<ScriptType>("duckyscript");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [result, setResult] = useState<{
    script: string;
    filename: string;
    scriptType: ScriptType;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = prompt.trim().length > 0 && !loading;

  async function onForge() {
    if (!canSubmit) return;
    setLoading(true);
    setError(null);
    try {
      const res = await forge({ data: { prompt: prompt.trim(), scriptType } });
      if (res.script) {
        setResult({
          script: res.script,
          filename: res.filename ?? "ai_payload",
          scriptType: res.scriptType,
        });
        setError(null);
      } else {
        setResult(null);
        setError(res.error ?? "Unknown error.");
      }
    } catch (err) {
      setResult(null);
      setError(err instanceof Error ? err.message : "Request failed.");
      toast.error("Failed to reach the Forge.");
    } finally {
      setLoading(false);
    }
  }

  /**
   * Create-new-file only, same safeguards as the Files page: Stat first and
   * refuse an existing path with zero write packets sent. Never overwrites.
   */
  async function onSave() {
    if (!result || saving) return;
    const mockActive = settings.mockMode && connection !== "connected";
    if (connection !== "connected" && !mockActive) {
      toast.error("Flipper not connected. Connect on the Device tab first.");
      return;
    }

    const path = `${TARGET_DIR[result.scriptType]}/${result.filename}`;
    const bytes = new TextEncoder().encode(result.script);
    const rpc = getFlipperRpc();

    setSaving(true);
    try {
      // 1. Refuse anything that already exists. Nothing is sent yet.
      const before = mockActive
        ? rpc.mockStorageStat(path)
        : await rpc.statStorage(path);
      if (before.ok && before.entry) {
        const kind = before.entry.type === "dir" ? "folder" : "file";
        toast.error(
          `A ${kind} already exists at ${path}. This version only creates new files, so nothing was sent.`,
        );
        return;
      }

      // 2. Write.
      const write = mockActive
        ? rpc.mockStorageWrite(path, bytes)
        : await rpc.writeStorage(path, bytes);
      if (!write.ok) {
        toast.error(
          write.partial
            ? `${write.error ?? "The write failed."} A partial or empty file may have been created on the Flipper.`
            : (write.error ?? "The write failed."),
        );
        return;
      }

      toast.success(`Saved to ${path}`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "The write failed.");
    } finally {
      setSaving(false);
    }
  }

  async function onCopy() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.script);
      toast.success("Copied.");
    } catch {
      toast.error("Copy failed.");
    }
  }

  return (
    <PageShell
      title="AI Forge"
      subtitle="Turn intent into Flipper payloads. The Gemini key stays on the server."
    >
      <div className="space-y-4">
        <Panel>
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Script type
            </p>
            <StatusPill tone="signal">Gemini 3.8 Flash</StatusPill>
          </div>
          <ToggleGroup
            type="single"
            value={scriptType}
            onValueChange={(v) => {
              if (v === "duckyscript" || v === "flipper-js") setScriptType(v);
            }}
            className="mt-3 grid grid-cols-2 gap-2"
          >
            <ToggleGroupItem
              value="duckyscript"
              className="h-12 rounded-xl border border-border data-[state=on]:border-signal data-[state=on]:bg-signal/10 data-[state=on]:text-signal"
            >
              BadUSB
            </ToggleGroupItem>
            <ToggleGroupItem
              value="flipper-js"
              className="h-12 rounded-xl border border-border data-[state=on]:border-signal data-[state=on]:bg-signal/10 data-[state=on]:text-signal"
            >
              Flipper JS
            </ToggleGroupItem>
          </ToggleGroup>

          <label
            htmlFor="forge-prompt"
            className="mt-5 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
          >
            Intent
          </label>
          <Textarea
            id="forge-prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={
              scriptType === "duckyscript"
                ? "e.g. Open Notepad on Windows and type Hello from Flipper"
                : "e.g. Blink the LED red 3 times and probe I2C 0x3C"
            }
            className="mt-2 min-h-[120px] resize-none rounded-xl bg-surface-2 text-sm"
            maxLength={4000}
          />

          <Button
            size="lg"
            className="mt-4 h-12 w-full rounded-xl text-base"
            onClick={onForge}
            disabled={!canSubmit}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                Forging…
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" aria-hidden="true" />
                Forge Script
              </>
            )}
          </Button>

          {error ? (
            <p className="mt-3 rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </p>
          ) : null}
        </Panel>

        {result ? (
          <Panel>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-signal" aria-hidden="true" />
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  Preview · {result.scriptType === "duckyscript" ? "DuckyScript" : "Flipper JS"}
                </p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 rounded-lg px-2"
                onClick={onCopy}
              >
                <Copy className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
                Copy
              </Button>
            </div>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              {TARGET_DIR[result.scriptType]}/{result.filename}
            </p>
            <pre className="mt-3 max-h-[420px] overflow-auto rounded-xl border border-border bg-surface-2 p-3 font-mono text-xs leading-relaxed text-foreground whitespace-pre-wrap break-words">
              {result.script}
            </pre>
            <Button
              size="lg"
              variant="secondary"
              className="mt-4 h-12 w-full rounded-xl text-base"
              onClick={onSave}
              disabled={saving}
            >
              {saving ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                  Transferring…
                </>
              ) : (
                <>
                  <Save className="mr-2 h-5 w-5" aria-hidden="true" />
                  Save to Flipper
                </>
              )}
            </Button>
          </Panel>
        ) : null}
      </div>
    </PageShell>
  );
}
