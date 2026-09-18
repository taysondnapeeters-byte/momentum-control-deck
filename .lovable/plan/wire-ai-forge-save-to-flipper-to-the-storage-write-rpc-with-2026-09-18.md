# Wire AI Forge "Save to Flipper" to the Storage Write RPC (with AI-generated filenames)

## Goal

The AI Forge already generates BadUSB / Flipper JS payloads. This change makes the
"Approve & Log" button actually transfer the generated script to the Flipper's SD
card over the existing BLE storage-write pipeline — under a short, context-aware
filename that the AI invents from the user's intent.

## What changes

Two files: `src/lib/aiForge.functions.ts` (backend) and `src/routes/ai.tsx`
(frontend). The RPC layer, Virtual Flipper, and everything else stay untouched.

### 1. Backend — dynamic filename (`src/lib/aiForge.functions.ts`)

- Extend both system instructions: in addition to the raw script, the model must
  propose a short descriptive **snake_case filename** based on the intent
  (e.g. `blink_led.js`, `open_notepad.txt`).
- Response format: ask the model for a small JSON object
  `{ "filename": "...", "script": "..." }` and parse it server-side; keep the
  existing defensive markdown-fence stripping before parsing.
- **Sanitize the filename server-side, never trust it:**
  - lowercase, allow only `[a-z0-9_]`, collapse repeats, trim to 40 chars
  - force the correct extension for the script type (`.txt` for DuckyScript,
    `.js` for Flipper JS) regardless of what the model returned
  - fall back to `ai_payload` when nothing usable comes back
- Return `{ script, scriptType, filename, error }` — the Gemini endpoint, key
  handling, and error semantics stay exactly as they are.

### 2. Frontend — Save to Flipper (`src/routes/ai.tsx`)

- Button renamed to **Save to Flipper**, with a "Transferring…" spinner state
  while the write is in progress.
- Target path is derived from the script type plus the AI-generated filename:
  - `duckyscript` → `/ext/badusb/<filename>`
  - `flipper-js` → `/ext/apps/Scripts/<filename>`
- The script text is encoded as UTF-8 and sent through the existing
  `writeStorage` RPC (512-byte chunks, single command, verified response) — the
  same proven path the Files page uses. No new BLE or RPC code is written.

### 3. Safety checks before anything is sent (mirrors the Files-page flow)

- If the Flipper is not connected (and mock mode is off), the button shows an
  error toast ("Flipper not connected") and nothing is sent.
- A Storage Stat runs first. If the path already exists as a file or folder,
  the save is refused with an error toast and **zero write packets** are sent.
  This preserves the project's no-overwrite rule — to save a new version of the
  same idea, forge a new script (the AI will usually pick a fresh name) or delete
  the old file on the Flipper itself.
- The generated script content is never written to logs.

### 4. Feedback

- Success toast naming the exact dynamic path, e.g.
  "Saved to /ext/badusb/open_notepad.txt".
- Error toast on any failure (not connected, already exists, write error,
  possible partial file).

### 5. Mock mode

- With mock mode on and no Flipper connected, the same flow runs against the
  simulated storage so the button can be tried without hardware.

## Technical details

- `src/lib/aiForge.functions.ts`: system-instruction text + JSON parse +
  `sanitizeFilename()` helper; zod input unchanged.
- `src/routes/ai.tsx`: import `getFlipperRpc` from `@/services` and `useAppState`
  for connection/mock state; add `saving` state; new `onSave` handler:
  stat (`statStorage` / `mockStorageStat`) → refuse-if-exists →
  `writeStorage` / `mockStorageWrite` → toasts. Existing safeguards in
  `writeStorage` (the `/ext/` namespace check, 64 KiB cap, path validation)
  apply automatically; the sanitized filename contains no slashes, so the
  composed path always stays inside the target folder.
- No changes to `src/services/*`, `src/state/AppStateProvider.tsx`, or any other
  file.

## Verification

- Typecheck clean.
- Playwright at phone size in mock mode: forge a script, confirm a sensible
  snake_case filename comes back, save it, confirm the success toast shows the
  dynamic path; save again and confirm the "already exists" refusal; no console
  errors.
- Real-hardware check is yours: connect on Device, forge a payload, save it, and
  confirm the file appears in the Files browser at the shown path.
