# AI Forge: "Save & Run" button

## Goal

Add a second button next to "Save to Flipper" that runs the exact same safe
storage-write pipeline and, only if the write fully succeeds, launches the
payload on the Flipper over the existing RPC.

## What changes

Three files: `src/services/flipperRpc.ts` (new RPC method),
`src/services/index.ts` (one interface line so the method is typed),
`src/routes/ai.tsx` (button + handler). The backend, Gemini logic, and the
storage-write code stay untouched.

### 1. RPC layer — `startApp(name, args)` (`src/services/flipperRpc.ts`)

- New async method `startApp(name: string, args: string): Promise<RpcSimpleResult>`.
- Uses the existing tracked `simpleRequest()` helper with the official
  protobuf command already in the bindings:
  `appStartRequest: { name, args }` (PB_Main tag 16, `PB_App.StartRequest`).
- Resolves `ok: true` only when the Flipper acknowledges with
  `CommandStatus.OK`; any other status returns the firmware's status name in
  `error` (same semantics as the screen-stream and input requests).
- Mock mode reuses the existing `mockSimpleResult("App start …")` — simulated,
  nothing transmitted, logged as such.
- One line added to the `FlipperRpc` interface in `src/services/index.ts` so
  callers get the typed method. No other interface changes.

### 2. Frontend — `src/routes/ai.tsx`

- New "Save & Run" button (Play icon) next to "Save to Flipper", with its own
  `savingAndRunning` spinner state ("Saving & starting…"); both buttons are
  disabled while either operation is in progress.
- The shared save logic is extracted into one internal `saveToFlipper()`
  helper used by both buttons — connection check, Stat-first refuse-if-exists
  (zero write packets on conflict), UTF-8 write, success/error toasts —
  identical to today's behavior. `writeStorage` itself is not modified.
- `onSaveAndRun` calls that helper and, **only if the write returned
  `ok: true`**, maps the script type to the Flipper app name:
  - `duckyscript` → `"Bad USB"`
  - `flipper-js` → `"JS"`
  then calls `await rpc.startApp(appName, path)` (real) or
  `rpc.mockSimpleResult(...)` (mock mode).
- Success: secondary toast "Script started on Flipper!" after the existing
  "Saved to …" toast. If the app start fails, an error toast names the
  firmware status — the file is still saved and that is said in the toast.
- The generated script content is never logged.

## Strict rules kept

- Refuse-if-exists safety check unchanged; never overwrites.
- `writeStorage`, the transport, protobuf bindings, Virtual Flipper, and
  `src/lib/aiForge.functions.ts` are not touched.

## Verification

- Typecheck clean (`tsgo --noEmit`).
- Playwright at 390x844 in mock mode: forge a script, "Save & Run" → both
  toasts appear ("Saved to …", "Script started on Flipper!"); repeat →
  refuse-if-exists fires with no write and no app start; "Save to Flipper"
  still works alone; no console errors.
- Real-hardware check is yours: connect on Device, forge a BadUSB payload,
  Save & Run, and confirm the Bad USB app launches on the Flipper with the
  saved file loaded.
