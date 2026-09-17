import { Panel } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import type {
  BleLogEntry,
  BleRawEntry,
  CharacteristicInfo,
  DiagnosticReport,
  DiscoveryReport,
} from "@/services";
import { MOMENTUM_SERIAL_SERVICE } from "@/services/flipperBleTransport";

function formatTime(at: number): string {
  const d = new Date(at);
  const pad = (n: number, size = 2) => String(n).padStart(size, "0");
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}.${pad(
    d.getMilliseconds(),
    3,
  )}`;
}

function propertyList(info: CharacteristicInfo): string {
  if (!info.properties) return "—";
  const p = info.properties;
  const flags = [
    p.read && "read",
    p.write && "write",
    p.writeWithoutResponse && "write-no-resp",
    p.notify && "notify",
    p.indicate && "indicate",
  ].filter(Boolean) as string[];
  return flags.length > 0 ? flags.join(", ") : "none reported";
}

export function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-border/60 py-2 last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-right font-mono text-[12px] uppercase tracking-wide">{value}</span>
    </div>
  );
}

export function CharacteristicTable({ discovery }: { discovery: DiscoveryReport }) {
  return (
    <Panel className="mt-4">
      <h3 className="text-sm font-semibold">Characteristics</h3>
      <div className="mt-2 space-y-3">
        {discovery.characteristics.map((info) => (
          <div key={info.key} className="rounded-xl border border-border bg-surface-2 p-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium">{info.label}</span>
              <span
                className={`font-mono text-[11px] uppercase tracking-wider ${
                  info.found ? "text-signal" : "text-muted-foreground"
                }`}
              >
                {info.found ? "Found" : "Not found"}
              </span>
            </div>
            <p className="mt-1 break-all font-mono text-[10px] text-muted-foreground">
              {info.uuid}
            </p>
            <p className="mt-2 font-mono text-[11px]">
              <span className="text-muted-foreground">Properties: </span>
              {propertyList(info)}
            </p>
            {info.found ? (
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                Notifications: {info.notifying ? "enabled" : "not enabled"}
              </p>
            ) : null}
            {info.error ? (
              <p className="mt-1 text-[11px] text-destructive">{info.error}</p>
            ) : null}
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function ConnectionLog({ entries }: { entries: BleLogEntry[] }) {
  return (
    <Panel className="mt-4">
      <h3 className="text-sm font-semibold">Connection log</h3>
      {entries.length === 0 ? (
        <p className="mt-2 text-sm text-muted-foreground">No events recorded yet.</p>
      ) : (
        <ul className="mt-2 max-h-64 space-y-1 overflow-y-auto font-mono text-[11px] leading-relaxed">
          {entries.map((entry) => (
            <li key={entry.id} className="flex gap-2">
              <span className="shrink-0 text-muted-foreground">{formatTime(entry.at)}</span>
              <span
                className={
                  entry.level === "error"
                    ? "text-destructive"
                    : entry.level === "warn"
                      ? "text-signal"
                      : ""
                }
              >
                {entry.message}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Panel>
  );
}

export function RawDataLog({
  entries,
  onClear,
}: {
  entries: BleRawEntry[];
  onClear: () => void;
}) {
  return (
    <Panel className="mt-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold">Raw notifications</h3>
        <Button variant="outline" size="sm" className="h-9 rounded-lg" onClick={onClear}>
          Clear log
        </Button>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        Received bytes shown as hexadecimal. Contents are not interpreted.
      </p>
      {entries.length === 0 ? (
        <p className="mt-2 text-sm text-muted-foreground">No data received.</p>
      ) : (
        <ul className="mt-2 max-h-64 space-y-1 overflow-y-auto font-mono text-[11px] leading-relaxed">
          {entries.map((entry) => (
            <li key={entry.id}>
              <span className="text-muted-foreground">{formatTime(entry.at)} </span>
              <span className="text-signal">{entry.source}</span>
              <span className="text-muted-foreground"> ({entry.byteLength}B) </span>
              <span className="break-all">{entry.hex}</span>
            </li>
          ))}
        </ul>
      )}
    </Panel>
  );
}
