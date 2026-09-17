# Phase 7 — Storage Stat + Read (read-only)

Ask the Flipper for a file's details, then fetch the actual bytes of that one file and show them. Nothing is written, renamed, deleted or executed.

## Schema check — complete, nothing missing

Verified in the project's own protobuf files:

- `src/proto/storage.proto`
  - `StatRequest { string path = 1; }`
  - `StatResponse { File file = 1; }`
  - `ReadRequest { string path = 1; }`
  - `ReadResponse { File file = 1; }`
  - `File { FileType type = 1 (FILE = 0, DIR = 1); string name = 2; uint32 size = 3; bytes data = 4; string md5sum = 5; }`
- `src/proto/flipper.proto`
  - `storage_stat_request = 24`, `storage_stat_response = 25`
  - `storage_read_request = 9`, `storage_read_response = 10`
  - `command_status = 2`, `has_next = 3`, plus the same storage error statuses Phase 6 already maps

**File bytes live in `ReadResponse.file.data`** (protobuf `bytes`). Stat is a single response (`has_next` false); Read is streamed — each part carries one chunk of `data`, and the stream ends when `has_next` is false. `File.size` is only meaningful on Stat; read parts carry data.

## What gets built

1. **Types** (`src/services/index.ts`)
   - `StorageStatResult { ok, mock, commandId, path, entry: StorageListEntry | null, roundTripMs, txHex, rxHex, status, error, at }` — reuses the existing `StorageListEntry` shape rather than a duplicate file type.
   - `StorageReadResult { ok, mock, commandId, path, size, data: Uint8Array, roundTripMs, txHex, rxHex, status, error, at }`.
   - `RpcSnapshot` gains `lastStorageStat` and `lastStorageRead`; `FlipperRpc` gains `statStorage(path)` and `readStorage(path)`.

2. **RPC methods** (`src/services/flipperRpc.ts`)
   - `statStorage(path)`: readiness check, the existing `validateStoragePath`, monotonic command ID, `PB.Main { storageStatRequest: { path } }`, single-response resolution through the existing `track()` (it already resolves on the first part when `has_next` is false — no multipart collector is forced on it), command ID / status / response-type validation, returns type, name, size, md5sum exactly as reported.
   - `readStorage(path)`: same preamble with `storageReadRequest: { path }`; every part validated independently (command ID, status, presence of `storageReadResponse`), `data` chunks appended in received order into one `Uint8Array`, resolving only on `has_next === false`. Reuses the existing `track()` / `deliver()` streaming machinery unchanged — no second streaming implementation. `rxHex` comes from the existing `completedRxHex` map, so it holds every response frame.
   - Read uses a longer timeout than the 5 s single-shot default, since a multi-chunk file takes several frames; it stays a single named constant.
   - An empty file (zero bytes) is a success, not an error.
   - Existing `storageStatusMessage()` covers not-exist, not-ready, denied, already-open and the rest; unknown statuses stay visible verbatim.
   - Mocks: `mockStorageStat(path)` and `mockStorageRead(path)` for a simulated `/ext/momentum-demo.txt`, both clearly labelled mock.

3. **Size safety** — one constant, `MAX_READ_BYTES = 64 * 1024` (64 KB), easy to change. The flow is always Stat first; if the reported size exceeds the limit, Read is never started and the viewer says the file is too large for the current read mode. Nothing is ever truncated or presented as complete when it is not.

4. **Concurrency** — one Storage Read at a time. While a read is running, every Read action in the list is disabled and the active row shows a spinner. No queue.

5. **App state** (`src/state/AppStateProvider.tsx`) — `refreshStorageStat(path)` and `readStorageFile(path)`, mock-gated exactly like the existing storage call. The UI never touches `flipperRpc` directly.

6. **UI**
   - `src/components/StorageListPanel.tsx`: the listing itself is unchanged; file entries (protobuf type `FILE` only) gain a small **Read** action. Directory entries get no action and still do not navigate.
   - New `src/components/FileViewerPanel.tsx`: path, name, size from Stat, read status, command ID, round-trip time, and `STORAGE STAT TX/RX` + `STORAGE READ TX/RX` uppercase hex blocks in the existing diagnostics style.
   - Content: a text preview only when the bytes decode as valid UTF-8 with no control bytes outside tab/newline/carriage-return (strict decode, conservative check); otherwise "Binary file" with the byte count and a hex preview of the first 256 bytes only. Previews are capped so large content is never dumped into the page.
   - Read-only: no editor, save, write, delete, rename, upload, download or execute anywhere in this phase.

7. **Logging** — via the existing connection log, following the established wording: request created, path, command ID, TX bytes, response received, response command ID, response status, decoded response part, `has_next`, decoded successfully, total bytes. Failures as `Storage Stat failed: <reason>` / `Storage Read failed: <reason>`. File contents are never logged.

## Unchanged

The whole Bluetooth layer: UUIDs, filters, connection sequence, notifications, writes, Flow Control, RPC Status. Ping, Device Info, Power Info and Storage List behave exactly as before. No write, delete, mkdir, rename, md5, backup, CLI or app launching.

## Verification

`bunx tsgo --noEmit` clean, then a headless render at phone width confirming the Storage list still works, Read appears on files only, the disconnected state is intact, mock mode reads the simulated text file, and no console errors. Final proof is on your hardware: connect, refresh `/ext`, pick a small real `.txt` file, confirm Stat reports the right size and Read returns the matching byte count with readable text, all parts sharing one command ID and the last with `has_next: false`; then repeat with a small binary file and confirm it is shown as binary with a hex preview.
