import { FileText, Loader2 } from "lucide-react";

import { InfoRow } from "@/components/DeviceDiagnostics";
import type { StorageReadResult, StorageStatResult } from "@/services";

/** Never render more than this many bytes as a hex preview. */
const HEX_PREVIEW_BYTES = 256;
/** Never render more than this many characters of text into the page. */
const TEXT_PREVIEW_CHARS = 4000;

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function toHex(bytes: Uint8Array): string {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0").toUpperCase()).join(" ");
}

/**
 * Conservative text detection: the bytes must decode as strict UTF-8 and may
 * only contain printable characters plus tab, newline and carriage return.
 */
function decodeAsText(bytes: Uint8Array): string | null {
  if (bytes.length === 0) return "";
  let text: string;
  try {
    text = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch {
    return null;
  }
  for (const char of text) {
    const code = char.codePointAt(0) ?? 0;
    if (code === 9 || code === 10 || code === 13) continue;
    if (code < 32 || code === 127) return null;
  }
  return text;
}

interface FileViewerPanelProps {
  stat: StorageStatResult | null;
  read: StorageReadResult | null;
  loading: boolean;
  /** Set when the file was not read because it exceeds the size limit. */
  tooLarge: string | null;
}

/**
 * Read-only file viewer. No editing, saving, renaming, deleting or executing
 * exists anywhere in this component by design.
 */
export function FileViewerPanel({ stat, read, loading, tooLarge }: FileViewerPanelProps) {
  if (!stat && !read && !loading && !tooLarge) return null;

  const path = read?.path ?? stat?.path ?? "";
  const name = stat?.entry?.name ?? path.split("/").pop() ?? "";
  const mock = Boolean(read?.mock ?? stat?.mock);
  const text = read?.ok ? decodeAsText(read.data) : null;

  return (
    <div className="mt-4 rounded-xl border border-border bg-surface-2 p-3">
      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
        <p className="text-sm font-medium">{mock ? "Mock file" : "File"}</p>
        {loading ? (
          <Loader2 className="ml-auto h-4 w-4 animate-spin text-muted-foreground" aria-hidden="true" />
        ) : null}
      </div>
      <p className="mt-1 break-all font-mono text-xs text-muted-foreground">{path}</p>
      {mock ? (
        <p className="mt-1 text-xs text-muted-foreground">
          Simulated. No Flipper was contacted and no data was transmitted.
        </p>
      ) : null}

      {stat?.error ? (
        <p className="mt-2 break-words text-xs text-destructive">Stat: {stat.error}</p>
      ) : null}
      {read?.error ? (
        <p className="mt-2 break-words text-xs text-destructive">Read: {read.error}</p>
      ) : null}
      {tooLarge ? <p className="mt-2 break-words text-xs text-destructive">{tooLarge}</p> : null}

      <div className="mt-2">
        <InfoRow label="Name" value={name || "—"} />
        <InfoRow
          label="Reported size"
          value={stat?.entry ? formatSize(stat.entry.size) : "—"}
        />
        <InfoRow label="Bytes read" value={read?.ok ? `${read.size}` : "—"} />
        <InfoRow
          label="Read status"
          value={loading ? "Reading…" : read?.ok ? "Complete" : (read?.status ?? stat?.status ?? "—")}
        />
        <InfoRow label="Stat command ID" value={stat?.commandId?.toString() ?? "—"} />
        <InfoRow label="Read command ID" value={read?.commandId?.toString() ?? "—"} />
        <InfoRow
          label="Stat round trip"
          value={stat?.roundTripMs === null || stat === null ? "—" : `${stat.roundTripMs} ms`}
        />
        <InfoRow
          label="Read round trip"
          value={read?.roundTripMs === null || read === null ? "—" : `${read.roundTripMs} ms`}
        />
      </div>

      {read?.ok ? (
        read.size === 0 ? (
          <p className="mt-3 text-xs text-muted-foreground">This file is empty (0 bytes).</p>
        ) : text !== null ? (
          <div className="mt-3">
            <p className="text-xs text-muted-foreground">TEXT PREVIEW</p>
            <pre className="mt-1 max-h-72 overflow-auto whitespace-pre-wrap break-all rounded-lg bg-background p-2 font-mono text-[11px]">
              {text.slice(0, TEXT_PREVIEW_CHARS)}
              {text.length > TEXT_PREVIEW_CHARS ? "\n… preview truncated" : ""}
            </pre>
          </div>
        ) : (
          <div className="mt-3">
            <p className="text-xs text-muted-foreground">
              Binary file — {read.size} bytes. First {Math.min(HEX_PREVIEW_BYTES, read.size)} bytes:
            </p>
            <p className="mt-1 max-h-72 overflow-auto break-all font-mono text-[11px]">
              {toHex(read.data.subarray(0, HEX_PREVIEW_BYTES))}
            </p>
          </div>
        )
      ) : null}

      {stat?.txHex ? (
        <div className="mt-2">
          <p className="text-xs text-muted-foreground">STORAGE STAT TX</p>
          <p className="mt-1 break-all font-mono text-[11px]">{stat.txHex}</p>
        </div>
      ) : null}
      {stat?.rxHex ? (
        <div className="mt-2">
          <p className="text-xs text-muted-foreground">STORAGE STAT RX</p>
          <p className="mt-1 break-all font-mono text-[11px]">{stat.rxHex}</p>
        </div>
      ) : null}
      {read?.txHex ? (
        <div className="mt-2">
          <p className="text-xs text-muted-foreground">STORAGE READ TX</p>
          <p className="mt-1 break-all font-mono text-[11px]">{read.txHex}</p>
        </div>
      ) : null}
      {read?.rxHex ? (
        <div className="mt-2">
          <p className="text-xs text-muted-foreground">STORAGE READ RX</p>
          <p className="mt-1 max-h-48 overflow-auto break-all font-mono text-[11px]">{read.rxHex}</p>
        </div>
      ) : null}
    </div>
  );
}
