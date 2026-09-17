# Fix input regression: taps dead after the hold change

## What actually broke

The gesture state machine itself is fine — in the simulated mode a quick tap still emits exactly one SHORT, and the RPC layer was not touched. The regression is a **backlog in the serialized send queue**, which only shows up on real hardware:

- Every input event goes through one promise chain, one at a time.
- A hold fires REPEAT every 150 ms regardless of how long the previous event takes. A Bluetooth round trip to the Flipper is often slower than that, and an unanswered event waits 5 seconds for its timeout.
- So one hold can enqueue dozens of events. Everything tapped afterwards sits behind them, potentially for minutes, and the buttons look completely dead.

Taps are not blocked by the held-set (SHORT never touches it), and the queue does already catch rejections — but a stuck or slow chain still starves every later event.

## The fix

**`src/components/FlipperDpad.tsx`** — repeats become self-pacing instead of fixed-rate:
- Replace the `setInterval` with a self-rescheduling timeout: send one REPEAT, wait for it to complete, then wait 150 ms and send the next, only while the control is still held. A slow link simply repeats more slowly instead of piling up.
- `onInput` may return a promise; the pad awaits it before scheduling the next repeat.
- Tap, LONG start and RELEASE paths stay exactly as they are; timers are still cleared on release, cancel and unmount.

**`src/hooks/useScreenStream.ts`** — the queue can no longer starve a tap:
- Log the gesture and mapped action on entry to `sendKey`, before the queue, so the console shows whether the component actually reported the event.
- Track the in-flight state. A REPEAT that arrives while another event is in flight is dropped rather than queued (repeats are idempotent — losing one only slows scrolling).
- Tap, LONG and RELEASE stay queued and ordered, but the queue is reset to a resolved promise whenever it empties, and every send is wrapped so a rejection or timeout can never leave the chain pending.
- Add a per-send watchdog: if a single send exceeds the RPC timeout window the chain is abandoned and replaced with a fresh resolved promise, so the next tap starts clean.
- Held-set semantics unchanged: SHORT never consults it; LONG adds, RELEASE removes, stale REPEAT dropped.

Mock mode, connection handling, the stream lifecycle and the RPC layer are untouched.

## Verification

Typecheck, then a simulated-mode run at phone size: tap → one SHORT; hold → LONG then paced REPEATs then one RELEASE; and crucially a tap **immediately after** a long hold still fires a SHORT right away. Real-hardware confirmation is yours: tap the arrows, then hold one, then tap again.
