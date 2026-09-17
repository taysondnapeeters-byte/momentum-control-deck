import { useState } from "react";
import { Loader2, Radio } from "lucide-react";

import { Panel, StatusPill } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { InfoRow } from "@/components/DeviceDiagnostics";
import { useAppState } from "@/state/AppStateProvider";

/**
 * Flipper RPC diagnostics. The only operation in this phase is System Ping,
 * which proves the protobuf round trip over the Bluetooth link.
 */
export function RpcPanel() {
  const { rpc, pingFlipper, settings, ble } = useAppState();
  const [pinging, setPinging] = useState(false);

  const connected = ble.state === "connected";
  const mock = settings.mockMode && !connected;
  const result = rpc.lastPing;
  const canPing = mock || rpc.ready;

  return (
    <Panel className="mt-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold">RPC</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Momentum routes the Bluetooth serial link straight into the Flipper RPC system. A
            ping is a read-only request — nothing on the device is changed.
          </p>
        </div>
        <StatusPill tone={rpc.ready ? "signal" : "muted"}>
          {rpc.ready ? "Ready" : "Not ready"}
        </StatusPill>
      </div>

      <Button
        size="lg"
        variant="outline"
        className="mt-4 h-12 w-full rounded-xl text-base"
        disabled={!canPing || pinging}
        onClick={() => {
          setPinging(true);
          void pingFlipper().finally(() => setPinging(false));
        }}
      >
        {pinging ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
        ) : (
          <Radio className="mr-2 h-5 w-5" aria-hidden="true" />
        )}
        {mock ? "Ping Flipper (mock)" : "Ping Flipper"}
      </Button>

      {!canPing ? (
        <p className="mt-3 text-xs text-muted-foreground">
          Connect a Flipper first, or switch on mock mode for a clearly-labelled simulated
          result.
        </p>
      ) : null}

      {result ? (
        <div className="mt-4 rounded-xl border border-border bg-surface-2 p-3">
          <p
            className={`text-sm font-medium ${
              result.ok ? "text-signal" : "text-destructive"
            }`}
          >
            {result.ok
              ? result.mock
                ? "Mock RPC Ping successful"
                : "RPC Ping successful"
              : result.mock
                ? "Mock RPC Ping failed"
                : "RPC Ping failed"}
          </p>
          {result.mock ? (
            <p className="mt-1 text-xs text-muted-foreground">
              Simulated. No Flipper was contacted and no data was transmitted.
            </p>
          ) : null}
          {result.error ? (
            <p className="mt-1 break-words text-xs text-destructive">{result.error}</p>
          ) : null}
          <div className="mt-2">
            <InfoRow label="Command ID" value={result.commandId?.toString() ?? "—"} />
            <InfoRow
              label="Round trip"
              value={result.roundTripMs === null ? "—" : `${result.roundTripMs} ms`}
            />
            <InfoRow label="Status" value={result.status ?? "—"} />
            <InfoRow label="Returned payload" value={result.payload ?? "—"} />
          </div>
          {result.txHex ? (
            <div className="mt-2">
              <p className="text-xs text-muted-foreground">TX bytes</p>
              <p className="mt-1 break-all font-mono text-[11px]">{result.txHex}</p>
            </div>
          ) : null}
          {result.rxHex ? (
            <div className="mt-2">
              <p className="text-xs text-muted-foreground">RX bytes</p>
              <p className="mt-1 break-all font-mono text-[11px]">{result.rxHex}</p>
            </div>
          ) : null}
        </div>
      ) : null}
    </Panel>
  );
}
