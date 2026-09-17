import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  File as FileIcon,
  FilePlus2,
  Folder,
  Loader2,
  RefreshCw,
} from "lucide-react";

import { Panel, PageShell, StatusPill } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileViewerPanel } from "@/components/FileViewerPanel";
import { useAppState } from "@/state/AppStateProvider";

export const Route = createFileRoute("/files")({
  head: () => ({
    meta: [
      { title: "Files — Momentum Deck" },
      {
        name: "description",
        content: "Browse the Flipper Zero SD card read-only from your phone.",
      },
      { property: "og:title", content: "Files — Momentum Deck" },
      {
        property: "og:description",
        content: "Browse the Flipper Zero SD card read-only from your phone.",
      },
    ],
  }),
  component: FilesPage,
});

const ROOT_PATH = "/ext";

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function FilesPage() {
  const {
    ble,
    settings,
    rpc,
    storagePath,
    storageList,
    storageLoading,
    storageReadLoading,
    storageWriteLoading,
    createFileReport,
    createStorageFile,
    clearCreateFileReport,
    selectedFile,
    refreshStorageList,
    navigateIntoStorageDirectory,
    navigateBackStorageDirectory,
    openStorageFile,
    closeStorageFile,
  } = useAppState();

  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState("momentum-deck-test.txt");
  const [newContent, setNewContent] = useState("Momentum Deck write test 1\n");
  const [confirming, setConfirming] = useState(false);

  const connected = ble.state === "connected";
  const mock = settings.mockMode && !connected;
  const canBrowse = mock || rpc.ready;
  const busy = storageLoading || storageReadLoading || storageWriteLoading;
  const listing = storageList && storageList.path === storagePath ? storageList : null;

  const newBytes = new TextEncoder().encode(newContent);
  const targetPath = `${storagePath.replace(/\/$/, "")}/${newName.trim()}`;

  return (
    <PageShell title="Files" subtitle="Read-only storage browser.">
      <div className="mb-4">
        <StatusPill tone={connected ? "signal" : mock ? "danger" : "muted"}>
          {connected ? "Real hardware" : mock ? "Mock filesystem" : "Not connected"}
        </StatusPill>
      </div>

      <Panel>
        <div className="flex items-center gap-2">
          {storagePath !== ROOT_PATH ? (
            <Button
              size="icon"
              variant="outline"
              className="h-10 w-10 shrink-0 rounded-xl"
              aria-label="Back to parent folder"
              disabled={!canBrowse || busy}
              onClick={() => void navigateBackStorageDirectory()}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </Button>
          ) : null}
          <p className="min-w-0 flex-1 break-all font-mono text-xs text-muted-foreground">
            {storagePath}
          </p>
          <Button
            size="icon"
            variant="outline"
            className="h-10 w-10 shrink-0 rounded-xl"
            aria-label="Refresh this folder"
            disabled={!canBrowse || busy}
            onClick={() => void refreshStorageList()}
          >
            {storageLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            ) : (
              <RefreshCw className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>

        {!canBrowse ? (
          <p className="mt-4 text-sm text-muted-foreground">
            Connect a Flipper to browse files.
          </p>
        ) : !listing ? (
          <p className="mt-4 text-sm text-muted-foreground">
            Press refresh to load this folder from {mock ? "the simulated filesystem" : "your Flipper"}.
          </p>
        ) : listing.error ? (
          <p className="mt-4 break-words text-sm text-destructive">{listing.error}</p>
        ) : listing.entries.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">This directory is empty.</p>
        ) : (
          <ul className="mt-4 space-y-1">
            {listing.entries.map((entry, index) => (
              <li key={`${entry.type}-${entry.name}-${index}`}>
                {entry.type === "dir" ? (
                  <button
                    type="button"
                    className="flex w-full min-h-11 items-center gap-2 rounded-xl px-2 py-2 text-left hover:bg-surface-2 disabled:opacity-50"
                    disabled={busy}
                    onClick={() => void navigateIntoStorageDirectory(entry.name)}
                  >
                    <Folder className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                    <span className="min-w-0 flex-1 break-all text-sm">{entry.name}</span>
                    <ChevronRight
                      className="h-4 w-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </button>
                ) : (
                  <div className="flex min-h-11 items-center gap-2 rounded-xl px-2 py-2">
                    <FileIcon
                      className="h-4 w-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1 break-all text-sm">{entry.name}</span>
                    <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                      {formatSize(entry.size)}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-9 shrink-0 rounded-lg px-3 text-xs"
                      disabled={busy}
                      onClick={() => void openStorageFile(entry.name)}
                    >
                      {storageReadLoading && selectedFile?.name === entry.name ? (
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      ) : (
                        "Read"
                      )}
                    </Button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </Panel>

      <Panel className="mt-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold">Create file</h3>
          {!creating ? (
            <Button
              size="sm"
              variant="outline"
              className="h-10 rounded-xl px-3 text-xs"
              disabled={!canBrowse || busy}
              onClick={() => {
                clearCreateFileReport();
                setCreating(true);
              }}
            >
              <FilePlus2 className="mr-1 h-4 w-4" aria-hidden="true" />
              New file
            </Button>
          ) : null}
        </div>

        {!canBrowse ? (
          <p className="mt-3 text-sm text-muted-foreground">
            Connect a Flipper to create a file.
          </p>
        ) : creating ? (
          <div className="mt-3 space-y-3">
            <div>
              <label className="mb-1 block text-xs text-muted-foreground" htmlFor="new-file-name">
                File name
              </label>
              <Input
                id="new-file-name"
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
                className="h-11 rounded-xl font-mono text-sm"
                autoComplete="off"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-muted-foreground" htmlFor="new-file-body">
                Contents
              </label>
              <Textarea
                id="new-file-body"
                value={newContent}
                onChange={(event) => setNewContent(event.target.value)}
                rows={4}
                className="rounded-xl font-mono text-sm"
              />
            </div>
            <p className="break-all font-mono text-[11px] text-muted-foreground">
              {targetPath} · {newBytes.length} bytes
            </p>

            {confirming ? (
              <div className="rounded-xl border border-border bg-surface-2 p-3">
                <p className="text-sm font-medium">Create new file on Flipper</p>
                <p className="mt-1 break-all font-mono text-[11px] text-muted-foreground">
                  {targetPath}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {newBytes.length} bytes. Existing files are never replaced — if this name is
                  already taken, nothing is sent.
                </p>
                <div className="mt-3 flex gap-2">
                  <Button
                    size="sm"
                    className="h-10 rounded-xl px-3 text-xs"
                    disabled={busy}
                    onClick={() => {
                      setConfirming(false);
                      void createStorageFile(newName.trim(), newBytes).then(() => {
                        setCreating(false);
                      });
                    }}
                  >
                    {storageWriteLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    ) : (
                      "Create new file on Flipper"
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-10 rounded-xl px-3 text-xs"
                    onClick={() => setConfirming(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="h-10 rounded-xl px-3 text-xs"
                  disabled={busy || !newName.trim() || newBytes.length === 0}
                  onClick={() => setConfirming(true)}
                >
                  Create file
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-10 rounded-xl px-3 text-xs"
                  disabled={busy}
                  onClick={() => setCreating(false)}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        ) : null}

        {createFileReport ? (
          <div className="mt-3 rounded-xl border border-border p-3">
            <p className="break-all font-mono text-[11px] text-muted-foreground">
              {createFileReport.path}
            </p>
            <p
              className={`mt-1 break-words text-sm ${
                createFileReport.ok ? "text-signal" : "text-destructive"
              }`}
            >
              {createFileReport.message}
            </p>
            {createFileReport.write ? (
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                {createFileReport.write.mock ? "MOCK · " : ""}
                command {createFileReport.write.commandId} ·{" "}
                {createFileReport.write.chunks} chunk(s) · status{" "}
                {createFileReport.write.status ?? "—"}
              </p>
            ) : null}
          </div>
        ) : null}
      </Panel>


      {selectedFile ? (
        <Panel className="mt-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="min-w-0 break-all text-sm font-semibold">{selectedFile.name}</h3>
            <Button
              size="sm"
              variant="ghost"
              className="h-9 shrink-0 rounded-lg px-3 text-xs"
              onClick={closeStorageFile}
            >
              Close
            </Button>
          </div>
          <FileViewerPanel
            stat={selectedFile.stat}
            read={selectedFile.read}
            loading={storageReadLoading}
            tooLarge={selectedFile.tooLarge}
          />
        </Panel>
      ) : null}
    </PageShell>
  );
}
