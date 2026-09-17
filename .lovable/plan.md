# Storage Write — Phase 1 (create new file only)

One explicit action on the Files page that creates a **new** file on the Flipper, then proves it landed correctly by reading it back. Nothing existing is ever overwritten.

## Safety model

- Storage Stat runs first. If the path exists as a file or a directory, the operation is refused and **zero** write packets are sent.
- Allowed namespace `/ext/` only; existing path validation plus ASCII-only and length ≤ 255.
- Maximum 64 KiB.
- Only a button press starts a write — no automatic, background or retried writes.
- Confirmation step shows the exact path, the exact byte count and "Create new file on Flipper".
- Connection lost mid-write is reported as "a partial or empty file may have been created on the Flipper".
- File contents are never logged.

## Protocol (as verified from the firmware)

- One command ID for the whole sequence; the pending response is registered once via the existing `track()`.
- File data split into 512-byte chunks, one `PB.Main { storageWriteRequest: { path, file: { data } } }` per chunk, sent through the existing `writeFramed()`.
- `has_next` true on every chunk except the last, false on the last.
- Exactly one empty response is awaited at the end; its command ID and command status are validated, statuses mapped through the existing `storageStatusMessage()`.
- A dedicated write timeout sized for multi-chunk writes; no second streaming implementation, no BLE transport changes.

## Verification after a successful write

Automatic, in order: Storage Stat → Storage Read → byte-for-byte comparison. Fully successful only when the write status is OK, Stat reports FILE with the original byte length, Read returns the same length, and every byte matches. Any mismatch is reported explicitly as a verification failure, not as success.

## Changes

1. `src/services/index.ts` — `StorageWriteResult { ok, mock, commandId, path, size, chunks, roundTripMs, txHex, rxHex, status, error, at }`, `RpcSnapshot.lastStorageWrite`, `FlipperRpc.writeStorage(path, bytes)`.
2. `src/services/flipperRpc.ts` — `writeStorage()` with the readiness/path/size checks, chunk loop and response validation above, plus a clearly labelled mock that simulates the same flow and contacts nothing.
3. `src/state/AppStateProvider.tsx` — `createStorageFile(path, bytes)` running stat-refusal → write → stat/read verification, an in-flight flag, mock gating exactly like the existing storage actions, and a listing refresh afterwards.
4. `src/routes/files.tsx` — a single "Create file" action (file name + text content), the confirmation dialog, and a plain-language result line. No overwrite, delete, rename, mkdir, bulk or drag-and-drop upload.

Unchanged: BLE transport, UUIDs, connection flow, `track`/`deliver`, protobuf definitions, and every existing read-only operation.

## Verification before finishing

`bunx tsgo --noEmit` clean, plus a headless render at phone width exercising the full mock flow (refusal on an existing name, successful create, verification result) with no console errors. Real-hardware proof is yours: first `/ext/momentum-deck-test.txt` with `Momentum Deck write test 1\n` (27 bytes, single chunk), then a ~1500-byte file for the multi-chunk path.
