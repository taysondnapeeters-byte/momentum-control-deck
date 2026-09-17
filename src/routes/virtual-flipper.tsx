import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";

import { Panel, PageShell, StatusPill } from "@/components/PageShell";
import { FlipperDpad } from "@/components/FlipperDpad";
import { FlipperScreen } from "@/components/FlipperScreen";
import { useScreenStream } from "@/hooks/useScreenStream";
import { useAppState } from "@/state/AppStateProvider";

export const Route = createFileRoute("/virtual-flipper")({
  head: () => ({
    meta: [
      { title: "Virtual Flipper — Momentum Deck" },
      {
        name: "description",
        content:
          "Live Flipper Zero screen stream with touch controls for the D-pad, OK and Back.",
      },
      { property: "og:title", content: "Virtual Flipper — Momentum Deck" },
      {
        property: "og:description",
        content:
          "Live Flipper Zero screen stream with touch controls for the D-pad, OK and Back.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: VirtualFlipperPage,
});

const STREAM_LABEL: Record<string, string> = {
  inactive: "Inactive",
  starting: "Starting",
  active: "Active",
  stopping: "Stopping",
  error: "Error",
};

function VirtualFlipperPage() {
  const { connection } = useAppState();
  const { status, error, inputError, stats, latestRef, start, stop, sendKey, mockActive } =
    useScreenStream();
  const [renderError, setRenderError] = useState<string | null>(null);

  const onRenderError = useCallback((message: string) => setRenderError(message), []);

  const active = status === "active";
  const busy = status === "starting" || status === "stopping";
  const connected = connection === "connected";
  const lastAge = stats.lastAt ? Math.max(0, Math.round((Date.now() - stats.lastAt) / 100) / 10) : null;

  return (
    <PageShell title="Virtual Flipper" subtitle="Live screen and touch controls.">
      <Panel>
        <div className="flex flex-wrap items-center gap-2">
          <StatusPill tone={connected ? "signal" : "muted"}>
            {connected ? "Connected" : mockActive ? "Mock mode" : "Disconnected"}
          </StatusPill>
          <StatusPill tone={active ? "signal" : status === "error" ? "danger" : "muted"}>
            Stream: {STREAM_LABEL[status]}
          </StatusPill>
        </div>
        {mockActive ? (
          <p className="mt-3 text-xs text-muted-foreground">
            Simulated screen. No Flipper was contacted and no data was transmitted.
          </p>
        ) : null}
        {error ? <p className="mt-3 text-xs text-destructive">{error}</p> : null}
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => void start()}
            disabled={busy || active || (!connected && !mockActive)}
            className="tap-scale h-11 flex-1 rounded-xl border border-signal/40 bg-signal/10 text-sm font-medium text-signal disabled:opacity-40"
          >
            Start screen stream
          </button>
          <button
            type="button"
            onClick={() => void stop()}
            disabled={busy || !active}
            className="tap-scale h-11 flex-1 rounded-xl border border-border bg-surface-2 text-sm font-medium disabled:opacity-40"
          >
            Stop
          </button>
        </div>
      </Panel>

      <Panel className="mt-4">
        <FlipperScreen latestRef={latestRef} onError={onRenderError} />
        {!active ? (
          <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {status === "starting" ? "Starting stream" : "No signal"}
          </p>
        ) : null}
        {renderError ? (
          <p className="mt-2 text-xs text-destructive">Frame problem: {renderError}</p>
        ) : null}
      </Panel>

      <Panel className="mt-4">
        <FlipperDpad onInput={(key, action) => void sendKey(key, action)} disabled={!active} />
        {inputError ? (
          <p className="mt-3 text-center text-xs text-destructive">{inputError}</p>
        ) : null}
      </Panel>

      <Panel className="mt-4">
        <h2 className="text-sm font-medium text-muted-foreground">Stream diagnostics</h2>
        <dl className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 font-mono text-[11px] text-muted-foreground">
          <dt>Frames</dt>
          <dd className="text-right text-foreground">{stats.frames}</dd>
          <dt>Approx. FPS</dt>
          <dd className="text-right text-foreground">{stats.fps}</dd>
          <dt>Last frame</dt>
          <dd className="text-right text-foreground">
            {stats.lastSize ? `${stats.lastSize} B` : "—"}
          </dd>
          <dt>Last frame age</dt>
          <dd className="text-right text-foreground">{lastAge === null ? "—" : `${lastAge}s`}</dd>
          <dt>Replaced frames</dt>
          <dd className="text-right text-foreground">{stats.dropped}</dd>
        </dl>
      </Panel>
    </PageShell>
  );
}
