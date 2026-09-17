# Virtual Flipper: synthesize LONG and REPEAT for holds

Taps already work on real hardware. Holds don't, because Flipper UI views listen for LONG (3) and REPEAT (4), which the hardware timer normally synthesizes — RPC input bypasses it.

## Behaviour after the change

- Quick tap (released under 400ms): one SHORT (2). Unchanged.
- Hold reaches 400ms: send LONG (3) instead of PRESS.
- While still held: every 150ms send REPEAT (4), starting right after LONG.
- Pointer up/cancel after a hold: clear the repeat interval, send RELEASE (1).

## Technical details

`src/components/FlipperDpad.tsx`
- `PadGesture` becomes `"tap" | "holdStart" | "holdRepeat" | "holdRelease"`.
- Add a `repeatTimer` ref per button. When the hold timer fires: emit `holdStart`, then `setInterval(150ms)` emitting `holdRepeat` while `held.current` is true.
- Release path clears both the hold timeout and the repeat interval before emitting `holdRelease`; unmount cleanup clears them too.
- Console logs updated to LONG / REPEAT / RELEASE / SHORT. Pointer capture, `preventDefault`, `touchAction: none`, no `onPointerLeave` — all unchanged.

`src/hooks/useScreenStream.ts`
- Gesture → action map: `tap → short`, `holdStart → long`, `holdRepeat → repeat`, `holdRelease → release`.
- Held-set bookkeeping: `long` adds the key (guarding duplicates), `release` requires and removes it, `repeat` only sends while the key is in the set (so a stray interval tick after release is dropped).
- All sends continue through the existing serialized `sendQueueRef` chain, so rapid REPEATs stay ordered.
- Mock mode: `long` and `repeat` advance the simulated selection the same way a tap does; `release` stays a no-op. Connection/stream logic untouched.

`src/services/index.ts`
- Comment only — `FlipperInputAction` already includes `long` and `repeat`; the RPC layer already maps them.

## Verification

Typecheck, then mock-mode check at phone size: tap emits one SHORT; a ~1s hold emits LONG followed by repeated REPEATs and a single RELEASE on let-go; no console errors. Real-hardware confirmation (long-press Back returns to desktop, holding Up/Down scrolls) is yours to run.
