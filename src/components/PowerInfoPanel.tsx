import { useState } from "react";
import { BatteryCharging, Loader2 } from "lucide-react";

import { Panel } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { InfoRow } from "@/components/DeviceDiagnostics";
import { useAppState } from "@/state/AppStateProvider";

/** Formats a protobuf key such as `charge_level` for display. */
function humanise(key: string): string {
  if (!key) return "—";
  return key.replace(/_/g, " ").replace(/^./, (c) => c.toUpperCase());
}

/**
 * Read-only System Power Info. One request per button press — no polling, no
 * timers, and no power-control commands of any kind.
 */
export function PowerInfoPanel() {
  const { rpc, refreshPowerInfo, settings, ble } = useAppState();
  const [loading, setLoading] = useState(false);

  const connected = ble.state === "connected";
  const mock = settings.mockMode && !connected;
  const result = rpc.lastPowerInfo;
  const canRequest = mock || rpc.ready;

  return (
    <Panel className="mt-4">
      <h3 className="text-sm font-semibold">Power information</h3>
      <p className="mt-1 text-xs text-muted-foreground">
        Asks the Flipper what it reports about its own power and battery. Read-only — nothing on
        the device is changed.
      </p>

      {!canRequest ? (
        <p className="mt-3 text-xs text-muted-foreground">
          Connect a Flipper to read power information.
        </p>
      ) : null}

      <Button
        size="lg"
        variant="outline"
        className="mt-4 h-12 w-full rounded-xl text-base"
        disabled={!canRequest || loading}
        onClick={() => {
          setLoading(true);
          void refreshPowerInfo().finally(() => setLoading(false));
        }}
      >
        {loading ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
        ) : (
          <BatteryCharging className="mr-2 h-5 w-5" aria-hidden="true" />
        )}
        {loading ? "Reading…" : mock ? "Refresh Power Info (mock)" : "Refresh Power Info"}
      </Button>

      {result ? (
        <div className="mt-4 rounded-xl border border-border bg-surface-2 p-3">
          <p className={`text-sm font-medium ${result.ok ? "text-signal" : "text-destructive"}`}>
            {result.ok
              ? result.mock
                ? "Mock Power Information"
                : "Power information"
              : result.mock
                ? "Mock Power Information failed"
                : "Power Info failed"}
          </p>
          {result.mock ? (
            <p className="mt-1 text-xs text-muted-foreground">
              Simulated. No Flipper was contacted and no data was transmitted.
            </p>
          ) : null}
          {result.error ? (
            <p className="mt-1 break-words text-xs text-destructive">{result.error}</p>
          ) : null}

          {result.entries.length > 0 ? (
            <div className="mt-2">
              {result.entries.map((entry) => (
                <InfoRow key={entry.key} label={humanise(entry.key)} value={entry.value} />
              ))}
            </div>
          ) : null}

          <div className="mt-2">
            <InfoRow label="Command ID" value={result.commandId?.toString() ?? "—"} />
            <InfoRow
              label="Round trip"
              value={result.roundTripMs === null ? "—" : `${result.roundTripMs} ms`}
            />
            <InfoRow label="Status" value={result.status ?? "—"} />
          </div>

          {result.txHex ? (
            <div className="mt-2">
              <p className="text-xs text-muted-foreground">POWER INFO TX</p>
              <p className="mt-1 break-all font-mono text-[11px]">{result.txHex}</p>
            </div>
          ) : null}
          {result.rxHex ? (
            <div className="mt-2">
              <p className="text-xs text-muted-foreground">POWER INFO RX</p>
              <p className="mt-1 break-all font-mono text-[11px]">{result.rxHex}</p>
            </div>
          ) : null}
        </div>
      ) : null}
    </Panel>
  );
}
