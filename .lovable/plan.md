# Storage Write — Analysis Only (no code written)

Firmware evidence read directly from Momentum at commit `d3f89dfe2ef6b01839201598e9be1590cba80322`
(`applications/services/rpc/rpc_storage.c`, `rpc.h`, and the pinned
`flipperzero-protobuf` submodule `storage.options`).

## STORAGE WRITE — VERIFIED PROTOCOL

VERIFIED FROM FIRMWARE SOURCE

1. `WriteRequest { string path = 1; File file = 2; }`; `File { type, name, size, data, md5sum }`. Write uses only `path` and `file.data`.
2. There is no `WriteResponse`. The firmware answers with an **empty** message carrying `command_status` only.
3. Tags: `storage_write_request = 11` in `PB.Main` (no response tag). Matches `src/proto/flipper.proto`.
4. Every request of one write sequence must carry the **same `command_id`**. The handler compares `request->command_id` with `rpc_storage->current_command_id`; a different ID while writing aborts the in-progress write with `ERROR_CONTINUOUS_COMMAND_INTERRUPTED` and starts fresh.
5. `has_next = true` on every request except the last. The firmware sends a response **only** when `has_next` is false (or on error) — no per-chunk acknowledgement.
6. File creation/truncation happens on the **first** request of the sequence: `storage_file_open(..., FSAM_WRITE, FSOM_CREATE_ALWAYS)`. So the target is truncated immediately, before any data is confirmed. An existing file is overwritten unconditionally; no "exists" error.
7. An interrupted sequence (a different command arrives, or the session resets) closes the file and, where applicable, emits `ERROR_CONTINUOUS_COMMAND_INTERRUPTED`. The already-truncated file stays truncated — a partially written file remains on the SD card.
8. Final request (`has_next = false`) → one empty response with `OK` or a filesystem status from `rpc_system_storage_get_file_error()`.
9. Filesystem error at any chunk → immediate empty response with the mapped storage status, state reset, sequence over.
10. Empty file: allowed. A single request with `has_next = false` and no `file.data` opens with `CREATE_ALWAYS`, writes nothing, replies `OK`.
11. Directory as target: `storage_file_open` on a directory fails, so the response is a storage error — the directory is not replaced. Confirmed by code path, not yet by hardware.
12. Non-ASCII paths: **rejected** — `path_contains_only_ascii()` fails first and returns `ERROR_STORAGE_INVALID_NAME`. Path length limit 255 (`storage.options`).

NOT YET VERIFIED
- Whether a missing parent directory returns `ERROR_STORAGE_NOT_EXIST` or another status (FatFS-level behaviour, not asserted in the RPC handler). Assume the parent must exist.
- Real-hardware status mapping for a full SD card.

## EXISTING DECK ARCHITECTURE

VERIFIED FROM EXISTING WEB APP (`src/services/flipperRpc.ts`)

- One `MomentumRpc` instance over `flipperBleTransport`. `track(commandId, sentAt, timeoutMs, msg)` registers a pending request; `deliver()` accumulates parts under the command ID and resolves only when `has_next` is false, restarting the timer per part.
- `writeFramed()` splits a length-delimited `PB.Main` frame into 243-byte BLE chunks; `MAX_SERIAL_DATA = 486`.
- Timeouts: `REQUEST_TIMEOUT_MS = 5000`, `READ_TIMEOUT_MS = 30000`. `MAX_READ_BYTES = 64 KiB`.
- `validateStoragePath()` requires a leading `/`, rejects empty and `..`. `storageStatusMessage()` maps storage statuses to plain sentences.
- Every operation follows the same shape: readiness check → path check → `++commandId` → encode → `writeFramed` → await parts → validate ID/status/response type → typed result with TX/RX hex → `finishX()` snapshot + connection log.

**The one structural gap:** every existing operation sends exactly one frame and then waits. Write sends *N* frames under a single command ID and waits once at the end. `track()` already supports "register, then resolve later", so the new method registers the waiter once, writes all chunks sequentially, and awaits — no change to `track`/`deliver` and no second streaming implementation.

## CHUNKING MODEL

Three distinct layers, none of which should be conflated:

- **A. BLE fragmentation** — `writeFramed()` cuts any byte sequence into 243-byte characteristic writes. Purely a transport detail; invisible to the protocol.
- **B. Protobuf message size** — the firmware's RPC stream buffer is `RPC_BUFFER_SIZE = 1024` bytes. One encoded `PB.Main` frame must stay comfortably below that.
- **C. Firmware file-data chunk** — `storage.options` states explicitly, as a client contract not enforced by nanopb: `PB_Storage.File.data max_size: 512`.

**Safe payload: 512 bytes of file data per Storage Write request.** With path, tags and the length prefix, the encoded frame lands near 530–560 bytes, well inside the 1024-byte buffer. The existing encoder handles this unchanged — it already fragments and already encodes length-delimited.

## SAFETY CONSIDERATIONS

Firmware truncates on the first request, so **there is no such thing as a non-destructive write attempt**. Consequences:

- Recommendation: **A — create new file only**, for the first implementation. Before writing, run the existing Storage Stat; if the path exists (file or directory), refuse and explain. Overwrite (B) becomes a later, separately confirmed capability, because a failed overwrite destroys the original.
- Explicit user action only: one button, one press, one write. No automatic, background, retried or hidden writes.
- Path rules: reuse `validateStoragePath`, plus ASCII-only, length ≤ 255, and a namespace restriction to `/ext/`.
- Confirmation step showing exact path, exact byte count and "this creates a new file on your Flipper".
- Size cap: a named constant (suggest 64 KiB, mirroring `MAX_READ_BYTES`).
- Timeout: a dedicated write timeout comparable to `READ_TIMEOUT_MS`, since a multi-chunk write takes many frames.
- Connection loss mid-sequence: fail loudly and state plainly that a partial or empty file may exist on the device.
- Cancellation: allowed only between chunks, and reported with the same partial-file warning. No silent abort.
- Mock mode simulates the whole thing and contacts nothing.

## PROPOSED FIRST TEST

1. Path: `/ext/momentum-deck-test.txt` (disposable, created by the test itself). No Manifest, firmware, app or system asset is touched.
2. Content: `Momentum Deck write test 1\n` — 27 bytes ASCII, single chunk.
3. Expected RPC: one `Main { commandId: N, hasNext: false, storageWriteRequest: { path, file: { data } } }`, one empty response with the same command ID.
4. Expected status: `OK`.
5. Verify with existing Storage Stat: entry type FILE, size 27.
6. Verify with existing Storage Read: 27 bytes, text identical.
7. Multi-chunk test second: ~1500 bytes → three requests sharing one command ID, `has_next` true, true, false; one response; Stat and Read confirm 1500 bytes.
8. Overwrite behaviour tested only later, and only on the same disposable path.
9. Success evidence: single command ID across the sequence, final status `OK`, and Stat + Read byte-for-byte agreement with what was sent.

## OTHER VERIFIED RPC CAPABILITIES

Handlers confirmed registered in the firmware at this commit:

| Capability | Firmware | Protobuf | In Deck | Useful | Concerns |
| --- | --- | --- | --- | --- | --- |
| Storage Delete | yes (tag 12) | `DeleteRequest{path, recursive}`, empty response | no | yes | destructive; recursive delete is high risk |
| Storage Mkdir | yes (13) | `MkdirRequest{path}` | no | yes | low risk; needed for upload targets |
| Storage Rename | yes (30) | `RenameRequest{old,new}` | no | moderate | can clobber a destination |
| Storage MD5 | yes (14/15) | `Md5sumRequest/Response` | no | yes | read-only; ideal post-write verification |
| GUI Screen Stream | yes (20/21/22) | `ScreenFrame` | no | high | continuous stream, new streaming UI |
| GUI Virtual Display | yes (26/27) | — | no | low for now | pairs with screen stream |
| GUI Input Events | yes (23) | `SendInputEventRequest` | no | high | remote control; acts on the device |
| App Start | yes (16) | `StartRequest` | no | high (Deck core) | launches apps; locks the device |
| App Load File | yes (48) | `AppLoadFileRequest` | no | high | needs a running app |
| App Button Press/Release | yes (49/50/75) | — | no | high | app-specific semantics |
| App Data Exchange | yes (65) | `DataExchangeRequest` | no | later | app-specific |

Also present and unused: Storage Info (28/29), Timestamp (59/60), Backup/Restore (42/43), Tar Extract (71), App Get Error (63/64).

## MINIMAL IMPLEMENTATION PLAN

(Not implemented now — this is the shape of the next phase.)

1. Types: `StorageWriteResult { ok, mock, commandId, path, size, chunks, roundTripMs, txHex, rxHex, status, error, at }`; `RpcSnapshot.lastStorageWrite`; `FlipperRpc.writeStorage(path, bytes)`.
2. `flipperRpc.ts`: `writeStorage()` — readiness, path validation (existing + ASCII + `/ext/` + length), size cap, one command ID, `track()` once with a write timeout, 512-byte chunk loop via the existing `writeFramed`, `hasNext` true on all but the last, validate the single empty response's ID and status, reuse `storageStatusMessage`. Plus a clearly labelled mock.
3. `AppStateProvider`: `createStorageFile(path, bytes)` doing Stat-first refusal-if-exists, then write, then a Stat/Read verification pass.
4. Files route: a single explicit "Create file" action with a confirmation dialog stating path and byte count; disabled while any RPC is in flight.
5. Logging via the existing connection log; file contents never logged.

## FILES THAT WOULD NEED TO CHANGE

- `src/services/index.ts` — result type, snapshot field, interface method
- `src/services/flipperRpc.ts` — `writeStorage()` + mock
- `src/state/AppStateProvider.tsx` — action, mock gating, in-flight flag
- `src/routes/files.tsx` — the one explicit action + confirmation
- possibly a small new confirmation component

Unchanged: `flipperBleTransport.ts`, all UUIDs/filters/connection flow, `track`/`deliver`, and every existing read-only operation.

## OPEN QUESTIONS

1. Where does the content come from — typed text, a picked local file, or Deck-generated config?
2. Overwrite: keep it out of the first implementation as recommended, or include it behind a second confirmation?
3. Should MD5 be added alongside Write as the verification method instead of full Read-back?
4. Keep the write size cap at 64 KiB?

## CONFIDENCE

High on protocol, chunk size, command-ID and `has_next` semantics, truncate-on-first-request and ASCII path rejection — all read from the firmware source at the exact commit. Medium on missing-parent-directory and full-SD statuses. The BLE/RPC layer's ability to carry the sequence is high-confidence by code inspection but unproven on hardware until the first real write.
