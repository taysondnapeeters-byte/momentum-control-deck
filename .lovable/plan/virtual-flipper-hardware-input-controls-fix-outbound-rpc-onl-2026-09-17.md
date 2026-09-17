# Virtual Flipper — hardware input controls fix (outbound RPC only)

The inbound screen stream works on real hardware and is NOT touched: no changes to the
frame decoder, rendering pipeline, `onScreenFrame` routing, or the start/stop stream
requests.

Only the outbound `gui_send_input_event_request` (PB.Main tag 23) path changes.

## Confirmed from the current code (no guesswork)

- `src/services/flipperRpc.ts` `sendInputEvent()` already sends
  `guiSendInputEventRequest: { key, type }` through the tracked `simpleRequest()` →
  `sendRequest()` path (monotonic `command_id`, length-delimited framing, single
  awaited response, status validation). This IS the tracked RPC path.
- The enum values already match the firmware contract exactly:
  keys `UP=0, DOWN=1, RIGHT=2, LEFT=3, OK=4, BACK=5`;
  types `PRESS=0, RELEASE=1` (`src/proto/gui.proto` and `INPUT_KEYS` / `INPUT_TYPES`).
- `src/components/FlipperDpad.tsx` already uses `setPointerCapture` on pointer down
  and releases exactly once per press on pointer up/cancel/lost-pointer-capture,
  with a held-key set, `touch-action: none`, and NO `onPointerLeave`.

So the wire contract is already correct. What is missing compared to the requested
snippet is per-event diagnostics and loud status/error logging — that is what we add,
so a failing press on hardware shows exactly where it died (not sent / timeout /
firmware rejection).

## Change 1 — `src/services/flipperRpc.ts` (sendInputEvent diagnostics)

Inside the existing tracked `sendInputEvent()` path (architecture unchanged):

- Before sending: `console.log("Virtual Flipper input RPC:\nkey=<n>\ntype=<n>")`
  with the numeric firmware values.
- After the response arrives: log the resulting command status, e.g.
  `Virtual Flipper input RPC result:\nkey=<n>\ntype=<n>\nstatus=<OK|ERROR|...>`
  (from the existing `simpleRequest` status validation — no new response handling).
- On failure/timeout: log `Virtual Flipper input RPC error:\nkey=<n>\ntype=<n>\nerror=<message>`
  in addition to the existing connection-log entry.
- Additionally log the outgoing request hex (a few bytes per press) to the existing
  capped connection log for the first diagnostics round, so the wire format of tag 23
  can be verified against the firmware expectation if presses still do nothing.
- The existing connection-log entry, error surfacing via `RpcSimpleResult`, and
  mock-mode behavior are unchanged. Mock mode still emits no RPC and no real log noise.

No changes to: screen frame dispatch, `drainBuffer` ordering, framing, command-id
tracking, start/stop stream, storage, or any other RPC.

## Change 2 — `src/components/FlipperDpad.tsx` (diagnostics + pointer hardening)

Keep the current Momentum Deck styling and 3×3 D-pad layout (the snippet's Tailwind
classes are placeholders — not adopted). Behavior changes only:

- Add the same console diagnostics on press and release:
  `Virtual Flipper input:\nkey=<NAME>\nkeyValue=<n>\ntype=PRESS|RELEASE`.
- Call `e.preventDefault()` on pointer down (in addition to `touch-action: none`) so
  no browser gesture can hijack a touch.
- Keep: `setPointerCapture` on pointer down; RELEASE only on pointer up / cancel /
  lost-pointer-capture, only when that key is in the held set; exactly one
  PRESS/RELEASE pair per physical press; no repeat PRESS while held.
- Explicitly omit `onPointerLeave` (it would fire false RELEASEs on touch screens).

## Unchanged by design

- `useScreenStream.sendKey` keeps routing presses through the RPC service (press/
  release pairing, mock-mode branch, not-connected guard) — the D-pad does not call
  the RPC service directly, so mock mode and connection state keep working.
- Error text from a rejected press still appears under the D-pad.

## Verification

1. Typecheck clean.
2. Playwright at 390×844 in mock mode: press each of the six controls once — console
   shows one PRESS + one RELEASE pair per button with correct numeric values, mock
   screen still reacts, no console errors, no page scrolling.
3. Real hardware (user test): connect → start stream → press Down on the D-pad and
   watch both the console output and the connection log. Three outcomes, each with a
   clear next step: request never sent (connection guard), timeout (framing/link),
   or firmware status (rejected payload — compare the logged request hex with tag 23).
