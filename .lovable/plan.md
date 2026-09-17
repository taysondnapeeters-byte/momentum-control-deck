# Virtual Flipper: restore full PRESS-bracketed gesture sequences

## Goal

Flipper OS drops SHORT/LONG/REPEAT events that are not preceded by a PRESS for
the same key. Restore the full physical button lifecycle so the firmware accepts
every event, using the existing serialized send queue (already proven on
hardware).

## Changes

### `src/hooks/useScreenStream.ts` — gesture → action sequence mapping

Replace the single-action mapping in `sendKey` with an ordered sequence per
gesture, each action enqueued through the existing guarded chain (unchanged
watchdog, in-flight repeat-drop, error handling):

| Gesture (from D-pad) | Events sent, in order |
|---|---|
| `tap` (released < 400 ms) | PRESS (0) → SHORT (2) → RELEASE (1) |
| `holdStart` (threshold reached) | PRESS (0) → LONG (3) |
| `holdRepeat` (every 150 ms while held) | REPEAT (4) — unchanged |
| `holdRelease` (pointer up after hold) | RELEASE (1) — unchanged |

Details:

- Add a small internal `enqueue(key, action)` helper containing the current
  queue/watchdog/in-flight logic; `sendKey` maps the gesture to its sequence
  and calls `enqueue` for each action in order. The existing chain guarantees
  strict ordering across the sequence.
- Held-set bookkeeping moves to the bracketing events: PRESS adds the key
  (idempotent — a tap's PRESS→…→RELEASE adds then removes it), RELEASE requires
  and removes it, REPEAT still requires the key to be held and is still dropped
  when another event is in flight. LONG/SHORT touch nothing.
- Mock mode: react once per gesture, not once per event — the simulated
  selection/tick update happens on the SHORT (tap) and on LONG/REPEAT (hold),
  so behavior on screen is unchanged.
- Keep the existing "Gesture received in useScreenStream" log; add the action
  sequence to it for diagnostics.

### `src/components/FlipperDpad.tsx`

No logic changes. Gestures, timers, self-pacing repeats, pointer capture,
`touchAction: none`, and logging stay exactly as they are. Only the header
comment is updated to document the PRESS-bracketed sequences.

### Not touched

- RPC layer (`flipperRpc.ts`), protobuf bindings, screen stream, framebuffer
  decoder, canvas rendering, queue watchdog constants, mock-mode connection
  logic, Device/Files pages.

## Verification

1. Typecheck clean.
2. Playwright at 390×844 in mock mode: tap emits PRESS→SHORT→RELEASE in order;
   a hold emits PRESS→LONG→REPEAT…→RELEASE; mock screen still reacts; no
   console errors.
3. Real hardware (user): connect → start stream → tap arrows (menu moves),
   long-press Back (returns to desktop), hold Up/Down (continuous scroll),
   tap immediately after a hold still fires.
