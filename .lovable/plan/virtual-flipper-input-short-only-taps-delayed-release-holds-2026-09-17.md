# Virtual Flipper input: SHORT-only taps, delayed-RELEASE holds

The screen stream stays untouched. Only the outbound input gesture logic changes, in `src/components/FlipperDpad.tsx` and `src/hooks/useScreenStream.ts`. The RPC layer (`sendInputEvent`, enums, tracked request path, diagnostics) is already correct and is not modified.

Verified enum contract (matches `PB_Gui` in `src/proto/flipper_pb.js`): keys Up=0, Down=1, Right=2, Left=3, Ok=4, Back=5; types Press=0, Release=1, Short=2, Long=3, Repeat=4.

## Phase 1 — SHORT-only taps (default)

A quick tap on any of the six controls sends exactly one `SHORT (2)` event and nothing else:

- Pointer down: no RPC is sent. The button still captures the pointer, calls `preventDefault`, and shows its pressed visual state, so touch behavior is unchanged.
- Pointer up / cancel / lost-capture: if the gesture lasted under the hold threshold (~400 ms), send one `SHORT` event through the existing serialized send queue.
- Mock mode: the simulated display reacts to the tap exactly as it does today (selection movement, tick advance), so the mock stays testable.

## Phase 2 — full state emulation for holds

Holding a control beyond the threshold switches to physical-press emulation, for games and hold-to-scroll:

- At the moment the threshold is crossed while the pointer is still down: send `PRESS (0)`.
- On pointer up after a hold: send `RELEASE (1)` only — no SHORT, since no SHORT was bracketed by this PRESS.
- If a hold gesture ever needs SHORT + RELEASE together (it does not in this design), RELEASE must be sent after an explicit ~40 ms `setTimeout` so the Flipper UI thread processes SHORT first. The send queue already serializes events; the delay is inserted inside the queued task.

## Wiring changes

- `FlipperDpad.tsx`: track pointer-down timestamp per button; on up, call `onInput(key, "tap")` or `onInput(key, "holdRelease")` depending on elapsed time; on threshold expiry while held, call `onInput(key, "holdStart")`. No `onPointerLeave` (unchanged). Console diagnostics updated to log the actual event sent.
- `useScreenStream.ts`: `sendKey` accepts the three gesture outcomes and maps them to `sendInputEvent(key, "short")`, `("press")`, `("release")`; the held-key set and mock state handling adjust accordingly. The serialized queue is preserved so events never arrive out of order.
- Types in `src/services/index.ts` are unchanged (`FlipperInputAction` already includes all five types).

## Out of scope

No changes to the screen stream, framebuffer decoder, rendering, transport, protobuf bindings, or any other route. No auto-repeat, no LONG/REPEAT events, no new UI chrome beyond what already exists.

## Verification

- Typecheck clean.
- Playwright at phone size in mock mode: each control produces exactly one SHORT per tap, hold produces PRESS then RELEASE, stream start/stop still works, no console errors.
- Real-hardware check on the As4ber Flipper: tap Up/Down/OK/Back and confirm menus react; hold a direction and confirm continuous scrolling.
