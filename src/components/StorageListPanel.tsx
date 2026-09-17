import { useState } from "react";
import { File as FileIcon, Folder, HardDrive, Loader2 } from "lucide-react";

import { Panel } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { InfoRow } from "@/components/DeviceDiagnostics";
import { FileViewerPanel } from "@/components/FileViewerPanel";
import { MAX_READ_BYTES } from "@/services/flipperRpc";
import type { StorageReadResult, StorageStatResult } from "@/services";
import { useAppState } from "@/state/AppStateProvider";

/** The first path this phase browses. Navigation is intentionally not enabled. */
const DEFAULT_PATH = "/ext";

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Read-only Storage List plus a read-only single-file viewer. No write,
 * delete, rename or execute actions of any kind.
 */
export function StorageListPanel() {
  const { rpc, refreshStorageList, refreshStorageStat, readStorageFile, settings, ble } =
    useAppState();
  const [loading, setLoading] = useState(false);
  const [readingPath, setReadingPath] = useState<string | null>(null);
  const [stat, setStat] = useState<StorageStatResult | null>(null);
  const [read, setRead] = useState<StorageReadResult | null>(null);
  const [tooLarge, setTooLarge] = useState<string | null>(null);

  const connected = ble.state === "connected";
  const mock = settings.mockMode && !connected;
  const result = rpc.lastStorageList;
  const canRequest = mock || rpc.ready;

  /** Stat first, then read — and only when the file fits the safety limit. */
  async function openFile(name: string) {
    const base = result?.path ?? DEFAULT_PATH;
    const path = `${base.replace(/\/$/, "")}/${name}`;
    setReadingPath(path);
    setStat(null);
    setRead(null);
    setTooLarge(null);
    try {
      const statResult = await refreshStorageStat(path);
      setStat(statResult);
      if (!statResult.ok || !statResult.entry) return;
      if (statResult.entry.size > MAX_READ_BYTES) {
        setTooLarge(
          `This file is ${statResult.entry.size} bytes, which is larger than the ${MAX_READ_BYTES} byte limit of the current read mode. It was not read.`,
        );
        return;
      }
      setRead(await readStorageFile(path));
    } finally {
      setReadingPath(null);
    }
  }

  return (
    <Panel className="mt-4">
      <h3 className="text-sm font-semibold">Storage</h3>
      <p className="mt-1 text-xs text-muted-foreground">
        Asks the Flipper what a folder on its storage contains. Read-only — nothing is opened,
        changed or removed.
      </p>

      {!canRequest ? (
        <p className="mt-3 text-xs text-muted-foreground">Connect a Flipper to browse storage.</p>
      ) : (
        <p className="mt-3 font-mono text-xs text-muted-foreground">Path: {DEFAULT_PATH}</p>
      )}

      <Button
        size="lg"
        variant="outline"
        className="mt-4 h-12 w-full rounded-xl text-base"
        disabled={!canRequest || loading}
        onClick={() => {
          setLoading(true);
          void refreshStorageList(DEFAULT_PATH).finally(() => setLoading(false));
        }}
      >
        {loading ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
        ) : (
          <HardDrive className="mr-2 h-5 w-5" aria-hidden="true" />
        )}
        {loading ? "Reading…" : mock ? "Refresh Directory (mock)" : "Refresh Directory"}
      </Button>

      {result ? (
        <div className="mt-4 rounded-xl border border-border bg-surface-2 p-3">
          <p className={`text-sm font-medium ${result.ok ? "text-signal" : "text-destructive"}`}>
            {result.ok
              ? result.mock
                ? "Mock Storage"
                : "Directory listing"
              : result.mock
                ? "Mock Storage failed"
                : "Storage List failed"}
          </p>
          <p className="mt-1 break-all font-mono text-xs text-muted-foreground">{result.path}</p>
          {result.mock ? (
            <p className="mt-1 text-xs text-muted-foreground">
              Simulated. No Flipper was contacted and no data was transmitted.
            </p>
          ) : null}
          {result.error ? (
            <p className="mt-1 break-words text-xs text-destructive">{result.error}</p>
          ) : null}

          {result.ok ? (
            result.entries.length > 0 ? (
              <ul className="mt-3 space-y-1">
                {result.entries.map((entry, index) => (
                  <li
                    key={`${entry.type}-${entry.name}-${index}`}
                    className="flex items-center gap-2 rounded-lg px-1 py-1.5"
                  >
                    {entry.type === "dir" ? (
                      <Folder className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                    ) : (
                      <FileIcon
                        className="h-4 w-4 shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                    )}
                    <span className="min-w-0 flex-1 break-all text-sm">{entry.name}</span>
                    <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                      {entry.type === "dir" ? "folder" : formatSize(entry.size)}
                    </span>
                    {entry.type === "file" ? (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 shrink-0 rounded-lg px-3 text-xs"
                        disabled={readingPath !== null}
                        onClick={() => void openFile(entry.name)}
                      >
                        {readingPath?.endsWith(`/${entry.name}`) ? (
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        ) : (
                          "Read"
                        )}
                      </Button>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-xs text-muted-foreground">This directory is empty.</p>
            )
          ) : null}

          <div className="mt-2">
            <InfoRow label="Command ID" value={result.commandId?.toString() ?? "—"} />
            <InfoRow
              label="Round trip"
              value={result.roundTripMs === null ? "—" : `${result.roundTripMs} ms`}
            />
            <InfoRow label="Status" value={result.status ?? "—"} />
            <InfoRow label="Entries" value={result.entries.length.toString()} />
          </div>

          {result.txHex ? (
            <div className="mt-2">
              <p className="text-xs text-muted-foreground">STORAGE LIST TX</p>
              <p className="mt-1 break-all font-mono text-[11px]">{result.txHex}</p>
            </div>
          ) : null}
          {result.rxHex ? (
            <div className="mt-2">
              <p className="text-xs text-muted-foreground">STORAGE LIST RX</p>
              <p className="mt-1 break-all font-mono text-[11px]">{result.rxHex}</p>
            </div>
          ) : null}
        </div>
      ) : null}

      <FileViewerPanel
        stat={stat}
        read={read}
        loading={readingPath !== null}
        tooLarge={tooLarge}
      />
    </Panel>
  );
}
