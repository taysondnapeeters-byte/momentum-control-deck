import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import {
  Copy,
  Loader2,
  PenLine,
  Play,
  Save,
  Sparkles,
  Terminal,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { PageShell, Panel, StatusPill } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { generatePayload } from "@/lib/aiForge.functions";
import { getFlipperRpc } from "@/services/flipperRpc";
import { useAppState } from "@/state/AppStateProvider";

type ScriptType = "duckyscript" | "flipper-js";
type ForgeMode = "ai" | "manual";

const TARGET_DIR: Record<ScriptType, string> = {
  duckyscript: "/ext/badusb",
  "flipper-js": "/ext/apps/Scripts",
};

/** The Flipper app that runs each script type, keyed by script type. */
const RUNNER_APP: Record<ScriptType, string> = {
  duckyscript: "Bad USB",
  "flipper-js": "JS",
};

const FILE_EXT: Record<ScriptType, string> = {
  duckyscript: ".txt",
  "flipper-js": ".js",
};

/** Client-side mirror of the server-side sanitizer: force a safe basename. */
function sanitizeFilename(raw: string, scriptType: ScriptType): string {
  const base = raw
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_]+/g, "_")
    .replace(/_{2,}/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 40)
    .replace(/_+$/g, "");
  return base ? `${base}${FILE_EXT[scriptType]}` : "";
}

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "AI Forge — Momentum Deck" },
      {
        name: "description",
        content:
          "Generate BadUSB DuckyScript and Flipper JS payloads from natural language using Gemini, or write them by hand.",
      },
      { property: "og:title", content: "AI Forge — Momentum Deck" },
      {
        property: "og:description",
        content:
          "Generate BadUSB DuckyScript and Flipper JS payloads from natural language using Gemini, or write them by hand.",
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
  const [mode, setMode] = useState<ForgeMode>("ai");
  const [scriptType, setScriptType] = useState<ScriptType>("duckyscript");
  const [prompt, setPrompt] = useState("");
  const [manualFilename, setManualFilename] = useState("");
  const [manualScript, setManualScript] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [savingAndRunning, setSavingAndRunning] = useState(false);
  const [result, setResult] = useState<{
    script: string;
    filename: string;
    scriptType: ScriptType;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = prompt.trim().length > 0 && !loading;
  const busy = saving || savingAndRunning;

  /**
   * The payload the save buttons act on, derived from the active mode.
   * AI Mode returns the generated result; Manual Mode returns the hand-written
   * fields after client-side filename sanitization. Returns null (with a
   * toast already shown for Manual Mode problems) when nothing is savable.
   */
  function getPendingPayload(): {
    script: string;
    filename: string;
    scriptType: ScriptType;
  } | null {
    if (mode === "ai") return result;
    const script = manualScript;
    if (!script.trim()) {
      toast.error("Write or paste a script first.");
      return null;
    }
    const filename = sanitizeFilename(manualFilename, scriptType);
    if (!filename) {
      toast.error(
        `Enter a filename (letters, numbers, underscores — the ${FILE_EXT[scriptType]} extension is added automatically).`,
      );
      return null;
    }
    return { script, filename, scriptType };
  }

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
   * Returns the saved path on success, null on any failure (a toast was
   * already shown). Shared by "Save to Flipper" and "Save & Run".
   */
  async function saveToFlipper(): Promise<string | null> {
    const payload = getPendingPayload();
    if (!payload) return null;
    const mockActive = settings.mockMode && connection !== "connected";
    if (connection !== "connected" && !mockActive) {
      toast.error("Flipper not connected. Connect on the Device tab first.");
      return null;
    }

    const path = `${TARGET_DIR[payload.scriptType]}/${payload.filename}`;
    const bytes = new TextEncoder().encode(payload.script);
    const rpc = getFlipperRpc();

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
        return null;
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
        return null;
      }

      toast.success(`Saved to ${path}`);
      return path;
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "The write failed.");
      return null;
    }
  }

  async function onSave() {
    if (busy) return;
    setSaving(true);
    try {
      await saveToFlipper();
    } finally {
      setSaving(false);
    }
  }

  /**
   * Same save pipeline, then — only on a fully successful write — launches
   * the matching Flipper app with the saved path as its argument.
   */
  async function onSaveAndRun() {
    if (busy) return;
    const mockActive = settings.mockMode && connection !== "connected";
    setSavingAndRunning(true);
    try {
      const path = await saveToFlipper();
      if (!path) return;

      const payload = getPendingPayload();
      const appName = payload ? RUNNER_APP[payload.scriptType] : RUNNER_APP[scriptType];
      const start = mockActive
        ? getFlipperRpc().mockSimpleResult(`App start ${appName}`)
        : await getFlipperRpc().startApp(appName, path);
      if (start.ok) {
        toast.success("Script started on Flipper!");
      } else {
        toast.error(
          `The file was saved, but the Flipper refused to start ${appName}: ${start.error ?? "unknown error"}.`,
        );
      }
    } finally {
      setSavingAndRunning(false);
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

  const scriptTypeToggle = (
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
  );

  const saveButtons = (
    <div className="mt-4 grid grid-cols-2 gap-2">
      <Button
        size="lg"
        variant="secondary"
        className="h-12 rounded-xl text-base"
        onClick={onSave}
        disabled={busy}
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
      <Button
        size="lg"
        className="h-12 rounded-xl text-base"
        onClick={onSaveAndRun}
        disabled={busy}
      >
        {savingAndRunning ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
            Saving &amp; starting…
          </>
        ) : (
          <>
            <Play className="mr-2 h-5 w-5" aria-hidden="true" />
            Save &amp; Run
          </>
        )}
      </Button>
    </div>
  );

  return (
    <PageShell
      title="AI Forge"
      subtitle="Turn intent into Flipper payloads, or write them by hand. The Gemini key stays on the server."
    >
      <div className="space-y-4">
        <Panel>
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Mode
            </p>
            {mode === "ai" ? (
              <StatusPill tone="signal">Gemini 3.8 Flash</StatusPill>
            ) : (
              <StatusPill tone="idle">No AI call</StatusPill>
            )}
          </div>
          <ToggleGroup
            type="single"
            value={mode}
            onValueChange={(v) => {
              if (v === "ai" || v === "manual") setMode(v);
            }}
            className="mt-3 grid grid-cols-2 gap-2"
          >
            <ToggleGroupItem
              value="ai"
              className="h-12 rounded-xl border border-border data-[state=on]:border-signal data-[state=on]:bg-signal/10 data-[state=on]:text-signal"
            >
              <Sparkles className="mr-2 h-4 w-4" aria-hidden="true" />
              AI Mode
            </ToggleGroupItem>
            <ToggleGroupItem
              value="manual"
              className="h-12 rounded-xl border border-border data-[state=on]:border-signal data-[state=on]:bg-signal/10 data-[state=on]:text-signal"
            >
              <PenLine className="mr-2 h-4 w-4" aria-hidden="true" />
              Manual Mode
            </ToggleGroupItem>
          </ToggleGroup>
        </Panel>

        {mode === "ai" ? (
          <>
            <Panel>
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  Script type
                </p>
              </div>
              {scriptTypeToggle}

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
                      Preview ·{" "}
                      {result.scriptType === "duckyscript" ? "DuckyScript" : "Flipper JS"}
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
                {saveButtons}
              </Panel>
            ) : null}
          </>
        ) : (
          <Panel>
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                Script type
              </p>
            </div>
            {scriptTypeToggle}

            <label
              htmlFor="manual-filename"
              className="mt-5 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
            >
              Filename
            </label>
            <div className="mt-2 flex items-center gap-2">
              <Input
                id="manual-filename"
                value={manualFilename}
                onChange={(e) => setManualFilename(e.target.value)}
                placeholder="my_script"
                className="h-11 rounded-xl bg-surface-2 font-mono text-sm"
                maxLength={60}
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
              />
              <span className="shrink-0 font-mono text-xs text-muted-foreground">
                {FILE_EXT[scriptType]}
              </span>
            </div>
            <p className="mt-1 font-mono text-[11px] text-muted-foreground">
              Saved to {TARGET_DIR[scriptType]}/
              {sanitizeFilename(manualFilename, scriptType) || `…${FILE_EXT[scriptType]}`}
            </p>

            <label
              htmlFor="manual-script"
              className="mt-5 block font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
            >
              Script
            </label>
            <Textarea
              id="manual-script"
              value={manualScript}
              onChange={(e) => setManualScript(e.target.value)}
              placeholder={
                scriptType === "duckyscript"
                  ? "DELAY 1000\nGUI r\nDELAY 500\nSTRING Hello from Flipper"
                  : "let badusb = require('badusb');\n// ...\neventLoop.run();"
              }
              className="mt-2 min-h-[280px] resize-y rounded-xl bg-surface-2 font-mono text-xs leading-relaxed"
              spellCheck={false}
            />

            {saveButtons}
          </Panel>
        )}
      </div>
    </PageShell>
  );
}
