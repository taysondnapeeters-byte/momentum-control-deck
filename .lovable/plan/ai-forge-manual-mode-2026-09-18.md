# AI Forge — Manual Mode

## Goal
Add a mode toggle to the AI Forge page: **AI Mode** (current generator, untouched) and **Manual Mode** (user writes/pastes their own script, no backend call). Manual Mode reuses the exact same safe save pipeline.

## Scope
- Only `src/routes/ai.tsx` changes. No backend (`aiForge.functions.ts`), no RPC, no Bluetooth logic.

## Design

### Mode toggle
- New top-level `ToggleGroup` (or tab strip) at the top of the page: `AI Mode` / `Manual Mode`, styled like the existing script-type toggle (dark, signal accent, Momentum visual language).
- State: `mode: "ai" | "manual"` (default `"ai"`). Switching modes keeps each mode's draft content intact (independent state).

### AI Mode — unchanged
- Intent textarea, BadUSB / Flipper JS selector, "Forge Script" button, preview panel, Save buttons: byte-for-byte current behavior.
- The "Gemini" status pill only renders in AI Mode (Manual Mode never contacts Gemini).

### Manual Mode UI
- **Filename** text input (e.g. `my_script`) — no extension typed by the user.
- **Script type** selector (BadUSB / Flipper JS) — reuses the existing `scriptType` state so AI and Manual share the choice.
- **Script body**: large monospace `Textarea` (same styling as the preview block's monospace look), placeholder differs per script type.
- Below it, the same "Save to Flipper" and "Save & Run" buttons (same icons, loading states, busy states).

### Unified save path
- Extract a small `getPendingPayload()` helper that returns `{ script, filename, scriptType } | null`:
  - AI Mode → the existing `result` state (unchanged).
  - Manual Mode → manual fields after client-side sanitization.
- `saveToFlipper()`, `onSave()`, `onSaveAndRun()` switch to operating on `getPendingPayload()` instead of reading `result` directly — the Stat-first refuse-if-exists, UTF-8 write, `startApp` runner mapping (`Bad USB` / `JS`), toasts, and mock-mode handling stay exactly as they are.

### Filename sanitization (client-side, Manual Mode)
- Trim; lowercase; strip everything except `[a-z0-9_]`; collapse repeats; cap at 40 chars.
- Force the extension server-style already does server-side; client mirrors it: `.txt` for DuckyScript, `.js` for Flipper JS, regardless of what the user typed. Any slashes are impossible after sanitization.
- Empty/unsanitizable name or empty script body → error toast, nothing sent.

## Verification
- Typecheck clean.
- Playwright at phone size, mock mode: switch to Manual Mode, type a script + filename, save → success toast shows the dynamic path; repeat → refuse-if-exists toast; Save & Run fires the app-start mock; switch back to AI Mode → current flow still works; no console errors.
- Real-hardware check remains manual (Playwright has no Web Bluetooth).
