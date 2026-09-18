# Wire AI Forge "Save to Flipper" to the Storage Write RPC

## Goal

The AI Forge already generates BadUSB / Flipper JS payloads. This change makes the
"Approve & Log" button actually transfer the generated script to the Flipper's SD
card over the existing BLE storage-write pipeline.

## What changes

**Only `src/routes/ai.tsx` is modified.** The Gemini server function, the RPC
layer, Virtual Flipper, and everything else stay untouched.

1. **Save handler (replaces `onApprove`)**
   - Button renamed to **Save to Flipper**, with a "Transferring…" spinner state
     while the write is in progress.
   - Target path is derived from the script type:
     - `duckyscript` → `/ext/badusb/ai_payload.txt`
     - `flipper-js` → `/ext/apps/Scripts/ai_payload.js`
   - The script text is encoded as UTF-8 bytes and sent through the existing
     `writeStorage` RPC (512-byte chunks, single command, verified response) — the
     same proven path the Files page uses. No new BLE or RPC code is written.

2. **Safety checks before anything is sent** (mirrors the Files-page flow)
   - If the Flipper is not connected (and mock mode is off), the button shows an
     error toast ("Flipper not connected") and nothing is sent.
   - A Storage Stat runs first. If the path already exists as a file or folder,
     the save is refused with an error toast and **zero write packets** are sent.
     This preserves the project's no-overwrite rule.
   - Consequence to be aware of: because the paths are fixed, the **first** save
     to each path succeeds; a later save to the same path is refused. Overwriting
     would be a separate, explicitly approved phase.

3. **Feedback**
   - Success toast naming the exact path, e.g. "Saved to /ext/badusb/ai_payload.txt".
   - Error toast on any failure (not connected, already exists, write error,
     possible partial file).
   - The generated script content is never written to logs.

4. **Mock mode**
   - With mock mode on and no Flipper connected, the same flow runs against the
     simulated storage so the button can be tried without hardware.

## Technical details

- `src/routes/ai.tsx`: import `getFlipperRpc` from `@/services` and `useAppState`
  for connection/mock state; add `saving` state; new `onSave` handler:
  stat (`statStorage` / `mockStorageStat`) → refuse-if-exists →
  `writeStorage` / `mockStorageWrite` → toasts. Existing safeguards in
  `writeStorage` (the `/ext/` namespace check, 64 KiB cap, path validation)
  apply automatically.
- No changes to `src/lib/aiForge.functions.ts`, `src/services/*`,
  `src/state/AppStateProvider.tsx`, or any other file.

## Verification

- Typecheck clean.
- Playwright at phone size in mock mode: generate a script, save it, confirm the
  success toast; save again and confirm the "already exists" refusal; confirm no
  console errors.
- Real-hardware check is yours: connect on Device, forge a payload, save it, and
  confirm the file appears in the Files browser at the target path.
