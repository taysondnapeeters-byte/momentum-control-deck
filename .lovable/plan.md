# Virtual Flipper — live screen stream and touch controls

Turn the Virtual Flipper placeholder into a real-time mirror of the connected Flipper: its screen streams into the app, and six on-screen buttons drive the real device.

## What the user gets

- Status line: connection + stream state (Inactive / Starting / Active / Stopping / Error).
- A large, crisp Flipper screen in the Momentum Deck visual language, exact 128:64 shape.
- Start / Stop stream buttons — never automatic.
- D-pad (Up/Down/Left/Right) plus OK and Back, sized for thumbs, no page scrolling while pressing.
- Compact diagnostics: frames received, last frame size, approximate FPS, last frame age, last input error.
- Mock mode keeps working: a simulated animated 128x64 screen driven through the exact same renderer, with the buttons changing the mock screen.

## Confirmed from the current code

- `src/proto/gui.proto` in this project defines `ScreenFrame` with only `data = 1` and `orientation = 2` — the Momentum `bg_color = 3` / `fg_color = 4` fields are missing and must be added, then the bindings (`src/proto/flipper_pb.js` / `.d.ts`) regenerated with the already-installed protobufjs tooling.
- `flipper.proto` already maps GUI tags 20/21/22/23, and the generated `PB.Main` already exposes `guiStartScreenStreamRequest`, `guiStopScreenStreamRequest`, `guiScreenFrame`, `guiSendInputEventRequest`.
- `MomentumRpc.deliver()` currently discards any message whose `command_id` has no pending request (logs a warning). Unsolicited screen frames would be dropped there today — this is the one place in the receive path that must change.
- `sendRequest(main, timeoutMs)` already exists as the generic tracked request path; start, stop and input events use it unchanged.
- `drainBuffer()` logs "RPC response received" and computes hex for every frame; that must be skipped for screen frames (performance + no frame contents in logs).

## Technical approach

**Protobuf.** Add `uint32 bg_color = 3;` and `uint32 fg_color = 4;` to `ScreenFrame` in `gui.proto`, regenerate `flipper_pb.js`/`.d.ts` from the same proto set. No other message changes.

**Unsolicited event channel (`flipperRpc.ts`).** Add a small generic subscription: `onEvent(listener: (message: PB.Main) => void)`. In `deliver()`, before the pending-map lookup, if `message.content === "guiScreenFrame"`, dispatch to event listeners and return. In `drainBuffer()`, skip the hex computation and the per-frame log line for that content type. Everything else in framing, command IDs and pending tracking stays untouched.

**GUI RPC methods (`flipperRpc.ts`).**
- `startScreenStream()` / `stopScreenStream()` — tracked `sendRequest`, validate `command_status`, return a typed result.
- `sendInputEvent(key, type)` — tracked `sendRequest`, status handled, error surfaced.
- `onScreenFrame(listener)` — filtered wrapper over `onEvent`, giving `{ data: Uint8Array, orientation, bgColor, fgColor }` with no copies beyond what protobuf already produced.
- Mock equivalents: `mockStartScreenStream`, `mockStopScreenStream`, `mockSendInputEvent`, plus a mock frame generator that emits real 1024-byte framebuffers.

**Framebuffer decoder (`src/services/flipperScreen.ts`, pure and isolated).** The Flipper GUI buffer is the u8g2 page layout, not a linear XBM: for a 128x64 screen it is 8 pages of 128 bytes; byte index `page * 128 + x`, bit `y & 7` within that byte (bit 0 = topmost row of the page). `decodeFramebuffer(data, orientation)` validates the length (1024 for 128x64, reject otherwise with a clear reason), expands to a 128x64 pixel array, applies the orientation transform, and returns pixels plus effective width/height. Written as a pure function so its layout and orientation handling can be unit-tested. The exact bit order will be confirmed visually on the first hardware run; if the image comes out mirrored or striped, only this function changes.

**Colors.** `bg_color`/`fg_color` are decoded only if they arrive as values we can map with confidence to concrete RGB; otherwise the renderer uses the monochrome Flipper palette. Color metadata never blocks or breaks a frame.

**Rendering.** A `FlipperScreen` component owning a real `<canvas width=128 height=64>`, `imageSmoothingEnabled = false`, `image-rendering: pixelated`, CSS-scaled to full width at a 2:1 aspect ratio. A ref holds the latest frame only; a `requestAnimationFrame` loop paints it via one reused `ImageData`. Newer frames replace unrendered ones (counted as dropped). No frame ever enters React state; only counters/status do, throttled to about twice a second.

**Input.** Pointer handlers on each control: `pointerdown` → PRESS (with `setPointerCapture`), `pointerup`/`pointercancel`/`pointerleave` → RELEASE, exactly once per press, tracked per control so a held button issues no repeats. `touch-action: none` on the pad to stop scrolling and gestures. Only PRESS/RELEASE are used; the method signature already accepts LONG/REPEAT for later.

**Lifecycle (in `AppStateProvider`).** Stream state, frame subscription and counters live in app state so the page just consumes them. Start requires a ready connection (or mock mode), runs once, waits for the OK response, then enables rendering. Stop sends the stop request when the link is usable, waits, detaches listeners, clears the canvas. Leaving the route stops the stream. A BLE state change away from `connected` immediately marks the stream inactive, detaches listeners and clears counters — no retry, no auto-reconnect. Starting while already active surfaces the firmware error cleanly without adding a second listener.

**Page (`src/routes/virtual-flipper.tsx`).** Rebuilt around status → screen → D-pad → OK/Back → diagnostics, reusing `PageShell`, `Panel`, `StatusPill`.

## Out of scope

Deck actions, IR, Sub-GHz, BadUSB, AI, Geo, Storage Delete/Rename/Mkdir, bulk upload, CLI, auto-reconnect, Virtual Display RPC. Storage, Device Info and Power Info behavior is untouched; BLE UUIDs, discovery and transport are untouched.

## Files

- `src/proto/gui.proto`, regenerated `src/proto/flipper_pb.js` / `flipper_pb.d.ts`
- `src/services/index.ts` (GUI types + RPC interface additions)
- `src/services/flipperRpc.ts` (event channel, GUI methods, mocks)
- `src/services/flipperScreen.ts` (new, pure decoder) + a small test file
- `src/components/FlipperScreen.tsx`, `src/components/FlipperDpad.tsx` (new)
- `src/state/AppStateProvider.tsx` (stream lifecycle + counters)
- `src/routes/virtual-flipper.tsx`

## Verification

`bunx tsgo --noEmit`; decoder unit tests; mock-mode run at phone width (start, animated frames, all six controls, stop, restart, no console errors); Device and Files pages re-checked. Real hardware acceptance (frames matching the physical screen, navigation, disconnect cleanup) is yours to run — Web Bluetooth cannot be exercised here.
