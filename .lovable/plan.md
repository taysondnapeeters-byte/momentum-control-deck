# Phase 6 — Storage List (read-only)

Ask the Flipper for the contents of a folder on its SD card and show the real list on the Device page. Nothing is opened, changed, or deleted.

## Schema check — complete, nothing missing

Verified in the project's own protobuf files:

- `src/proto/storage.proto`
  - `ListRequest { string path = 1; bool include_md5 = 2; uint32 filter_max_size = 3; }`
  - `ListResponse { repeated File file = 1; }`
  - `File { FileType type = 1 (FILE = 0, DIR = 1); string name = 2; uint32 size = 3; bytes data = 4; string md5sum = 5; }`
- `src/proto/flipper.proto`
  - `storage_list_request = 7`, `storage_list_response = 8` inside `PB.Main`
  - `has_next = 3`, `command_status = 2`
  - Storage statuses present: `ERROR_STORAGE_NOT_READY`, `ERROR_STORAGE_EXIST`, `ERROR_STORAGE_NOT_EXIST`, `ERROR_STORAGE_INVALID_PARAMETER`, `ERROR_STORAGE_DENIED`, `ERROR_STORAGE_INVALID_NAME`, `ERROR_STORAGE_INTERNAL`, `ERROR_STORAGE_NOT_IMPLEMENTED`, `ERROR_STORAGE_ALREADY_OPEN`, `ERROR_STORAGE_DIR_NOT_EMPTY`

One response carries a batch of `File` entries; the stream ends when `has_next` is false — the same shape the existing Device Info / Power Info code already handles. Request sends only `path` (no md5, no size filter).

## What gets built

1. **Types** (`src/services/index.ts`)
   - `StorageEntryType = "file" | "dir"`
   - `StorageListEntry { type, name, size, md5sum: string | null }` — mapped from the protobuf `File`, keeping size and type rather than a bare name.
   - `StorageListResult { ok, mock, commandId, path, roundTripMs, entries, txHex, rxHex, status, error, at }`
   - `RpcSnapshot` gains `lastStorageList`; `FlipperRpc` gains `listStorage(path)`.

2. **RPC method** (`src/services/flipperRpc.ts`)
   - `listStorage(path)`: readiness check, local path validation (must start with `/`, no empty string, no `..` segment — the path is otherwise passed through unchanged), monotonic command ID, `PB.Main { storageListRequest: { path } }` encoded length-delimited, written through the existing transport.
   - Reuses the existing `track()` / `deliver()` streaming machinery unchanged — parts accumulate under one command ID and resolve only on `has_next === false`. No second streaming implementation.
   - Every part validated: command ID match, `command_status`, presence of `storageListResponse`. Entries appended in received order, no deduplication.
   - `rxHex` comes from the existing `completedRxHex` map, so it holds all response frames, not just the last.
   - `mockStorageList(path)` returns a clearly simulated `/ext` listing (infrared, subghz, nfc, badusb as directories) labelled as mock.

3. **Error mapping** — a small table turning storage statuses into plain sentences, e.g. `ERROR_STORAGE_NOT_EXIST` → "That folder does not exist on the Flipper.", `ERROR_STORAGE_NOT_READY` → "The Flipper's storage is not ready (is an SD card inserted?).", `ERROR_STORAGE_DENIED` → "The Flipper refused access to that folder." Unknown statuses are shown verbatim, never hidden. The raw status stays visible in diagnostics.

4. **App state** (`src/state/AppStateProvider.tsx`) — `refreshStorageList(path: string)`, mock-gated exactly like `refreshDeviceInfo` / `refreshPowerInfo`. The UI never touches `flipperRpc` directly.

5. **UI** (`src/components/StorageListPanel.tsx`, rendered in `src/routes/device.tsx` after the Power panel)
   - Disconnected: "Connect a Flipper to browse storage."
   - Connected: `Path: /ext` and a **Refresh Directory** button (disabled while disconnected or in flight, spinner while waiting, exactly one request per press, no polling).
   - Entries listed with a folder or file icon driven by the protobuf `type` field only; files show their size. Informational only — no open/delete/rename/download, and no navigation in this phase.
   - Zero entries → "This directory is empty." (not an error).
   - Command ID, round trip, status, plus `STORAGE LIST TX` / `STORAGE LIST RX` uppercase hex blocks in the existing diagnostics style.

6. **Logging** — via the existing connection log: request created, path, command ID, TX bytes, response received, response command ID, response status, decoded response part, `has_next`, decoded successfully, entry count. Failures as `Storage List failed: <reason>`, plus the command-ID-mismatch and unexpected-response-type messages. Individual entry names are not logged.

## Unchanged

The whole Bluetooth layer: UUIDs, filters, connection sequence, notifications, writes, Flow Control, RPC Status. Ping, Device Info and Power Info behave exactly as before. No storage read/write/delete/mkdir/rename/md5/backup, no CLI, no app launching.

## Verification

`bunx tsgo --noEmit` clean, then a headless render of the Device page at phone width confirming the Storage card, the button, and the disconnected state with no console errors. Final proof is on your hardware: connect, wait for the RPC session, press **Refresh Directory**, and confirm the log shows one command ID across all parts with the last part `has_next: false`, and that the listed folders and files match what is actually on your Flipper's `/ext`.
