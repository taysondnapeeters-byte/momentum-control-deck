import { createFileRoute } from "@tanstack/react-router";
import { Bluetooth, BluetoothOff, Cpu, Info, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Panel, PageShell, StatusPill } from "@/components/PageShell";
import {
  CharacteristicTable,
  ConnectionLog,
  InfoRow,
  RawDataLog,
} from "@/components/DeviceDiagnostics";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useAppState } from "@/state/AppStateProvider";
import type { ConnectionState } from "@/services";

export const Route = createFileRoute("/device")({
  head: () => ({
    meta: [
      { title: "Device — Momentum Deck" },
      {
        name: "description",
        content:
          "Bluetooth connection and diagnostics for a Flipper Zero running Momentum Firmware.",
      },
      { property: "og:title", content: "Device — Momentum Deck" },
      {
        property: "og:description",
        content:
          "Bluetooth connection and diagnostics for a Flipper Zero running Momentum Firmware.",
      },
    ],
  }),
  component: DevicePage,
});

const STATE_LABEL: Record<ConnectionState, string> = {
  disconnected: "Not connected",
  requesting: "Selecting device…",
  connecting: "Connecting…",
  discovering: "Discovering services…",
  connected: "Connected",
  disconnecting: "Disconnecting…",
  error: "Connection failed",
};

function DevicePage() {
  const {
    ble,
    settings,
    bluetoothSupported,
    connectFlipper,
    disconnectFlipper,
    clearBleLogs,
    setMockMode,
  } = useAppState();

  const state = ble.state;
  const busy =
    state === "requesting" || state === "connecting" || state === "discovering" ||
    state === "disconnecting";
  const connected = state === "connected";

  return (
    <PageShell title="Device" subtitle="Bluetooth link to your Flipper Zero.">
      <div className="mb-4">
        <StatusPill tone={connected ? "signal" : settings.mockMode ? "danger" : "muted"}>
          {connected ? "Real hardware" : settings.mockMode ? "Mock mode" : "Real hardware"}
        </StatusPill>
      </div>

      <Panel>
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2">
            <Cpu className="h-6 w-6 text-signal" strokeWidth={1.6} aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-semibold">Flipper Zero</h2>
            <p className="text-sm text-muted-foreground">Momentum Firmware</p>
            <div className="mt-3">
              <StatusPill tone={connected ? "signal" : state === "error" ? "danger" : "muted"}>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    connected ? "bg-signal" : "bg-muted-foreground"
                  }`}
                />
                {STATE_LABEL[state]}
              </StatusPill>
            </div>
            {ble.deviceName ? (
              <p className="mt-2 break-all font-mono text-xs text-muted-foreground">
                {ble.deviceName}
              </p>
            ) : null}
          </div>
        </div>

        {!bluetoothSupported ? (
          <div className="mt-5 rounded-xl border border-destructive/40 bg-destructive/10 p-3">
            <div className="flex gap-2 text-sm text-destructive">
              <BluetoothOff className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-medium">Web Bluetooth is not available in this browser.</p>
                <p className="mt-1 text-destructive/90">
                  Connecting to a Flipper requires a browser and device with Web Bluetooth
                  support, over a secure (HTTPS) page — for example Chrome or Edge on Android,
                  Windows, macOS or Linux. iOS browsers do not support it.
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {ble.error ? (
          <p className="mt-4 rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
            {ble.error}
          </p>
        ) : null}

        {connected ? (
          <Button
            size="lg"
            variant="outline"
            className="mt-5 h-12 w-full rounded-xl text-base"
            onClick={() => void disconnectFlipper()}
            disabled={busy}
          >
            <BluetoothOff className="mr-2 h-5 w-5" aria-hidden="true" />
            Disconnect
          </Button>
        ) : (
          <Button
            size="lg"
            className="mt-5 h-12 w-full rounded-xl text-base"
            onClick={() => void connectFlipper()}
            disabled={!bluetoothSupported || busy}
          >
            {busy ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
            ) : (
              <Bluetooth className="mr-2 h-5 w-5" aria-hidden="true" />
            )}
            {busy ? STATE_LABEL[state] : "Connect Flipper"}
          </Button>
        )}
      </Panel>

      <Panel className="mt-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-sm font-semibold">Mock mode</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Interface placeholders only. No value shown while mock mode is on comes from a
              real Flipper.
            </p>
          </div>
          <Switch
            checked={settings.mockMode}
            disabled={connected}
            onCheckedChange={(checked) => {
              if (connected) {
                toast("Disconnect the Flipper before switching to mock mode.");
                return;
              }
              void setMockMode(checked);
            }}
            aria-label="Mock mode"
          />
        </div>
        {connected ? (
          <p className="mt-2 text-xs text-muted-foreground">
            A real Flipper is connected — mock mode is locked off.
          </p>
        ) : null}
      </Panel>

      <Panel className="mt-4">
        <h3 className="text-sm font-semibold">Bluetooth</h3>
        <div className="mt-1">
          <InfoRow label="Device name" value={ble.deviceName ?? "—"} />
          <InfoRow label="Connection status" value={STATE_LABEL[state]} />
          <InfoRow label="GATT connected" value={ble.gattConnected ? "Yes" : "No"} />
          <InfoRow
            label="Momentum Serial Service"
            value={ble.discovery ? (ble.discovery.serviceFound ? "Yes" : "No") : "—"}
          />
        </div>
      </Panel>

      {ble.discovery ? <CharacteristicTable discovery={ble.discovery} /> : null}

      <ConnectionLog entries={ble.log} />
      <RawDataLog entries={ble.raw} onClear={clearBleLogs} />

      <Panel className="mt-4">
        <div className="flex gap-3 text-sm text-muted-foreground">
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>
            This phase establishes the Bluetooth link only. Nothing is sent to the Flipper, and
            CLI, file access, infrared, Sub-GHz and screen features are not working yet.
          </p>
        </div>
      </Panel>
    </PageShell>
  );
}
