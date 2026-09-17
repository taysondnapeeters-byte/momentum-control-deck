# Fix Virtual Flipper Input: synthesize SHORT on release

## Problem
Real-hardware UI elements (menus, lists) listen for the SHORT (2) input event,
which the physical hardware timer normally synthesizes. Our RPC input events are
injected straight into the GUI queue, bypassing that timer, so PRESS + RELEASE
alone never trigger menu navigation.

## Current state (verified)
- `src/services/flipperRpc.ts`: `INPUT_TYPES` already maps `short: 2` (and
  `long: 3`, `repeat: 4`); `sendInputEvent` already accepts
  `FlipperInputAction` including `"short"`, sends it through the tracked RPC
  with status validation and per-event diagnostics. No RPC-layer change needed.
- `src/services/index.ts`: `FlipperInputAction` already includes `"short"`.
- `src/components/FlipperDpad.tsx`: `onInput` is typed
  `(key, action: "press" | "release")`; release sends only RELEASE.
- `src/hooks/useScreenStream.ts`: `sendKey` accepts only `"press" | "release"`;
  mock mode reacts to PRESS (menu movement); real path calls
  `rpc.sendInputEvent(key, action)` and awaits it.

## Changes

### 1. `src/components/FlipperDpad.tsx`
- Widen the `onInput` action type to `"press" | "release" | "short"`.
- In the release handler (`pointerup` / `pointercancel` / `lostpointercapture`),
  after the existing held-set guard, emit SHORT first, then RELEASE:
  `onInput(flipperKey, "short")` followed by `onInput(flipperKey, "release")`.
- Add a `type=SHORT` console log alongside the existing PRESS/RELEASE logs.
- Everything else stays exactly as is: PRESS on pointerdown,
  `setPointerCapture` (best-effort, try/catch), held-set single-fire guard,
  no `onPointerLeave`, `preventDefault`, `touchAction: none`, layouts.

### 2. `src/hooks/useScreenStream.ts`
- Widen `sendKey`'s action parameter to include `"short"`.
- Serialize sends with a small promise chain so SHORT reaches the wire and
  completes before RELEASE is written (both calls fire synchronously from the
  D-pad; concurrent RPC writes must not interleave).
- Held-set semantics unchanged: PRESS adds the key, RELEASE removes it, SHORT
  touches nothing (it is always bracketed by PRESS and RELEASE).
- Mock mode: PRESS keeps the existing mock menu behaviour; `"short"` is a no-op
  in mock (the simulated display already responded to the press). No mock RPC
  is sent for SHORT.
- Real path: `"short"` flows through the existing
  `rpc.sendInputEvent(key, "short")` — status validation and the existing
  per-event diagnostics apply unchanged.

## Not changed
- Screen stream, framebuffer decoding, rendering pipeline, BLE transport,
  protobuf bindings, key enum values (`INPUT_KEYS`/`FLIPPER_KEYS`),
  connection lifecycle, mock-mode state, any other route or page.

## Verification
- Typecheck clean.
- Playwright at 390x844 in mock mode: every control produces exactly one PRESS,
  one SHORT and one RELEASE per tap in that order (read from the console
  output), mock screen still reacts, stream start/stop unaffected, no console
  errors; Device and Files pages still load.
- Real-hardware acceptance stays with the user (Web Bluetooth cannot be driven
  headlessly): connect → start stream → press a key → the menu should now
  react; the connection log will show SHORT (type=2) frames before RELEASE.
