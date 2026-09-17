# # Virtual Flipper — live screen stream and touch controls

Turn the Virtual Flipper placeholder into a real-time mirror of the connected Flipper: its screen streams into the app, and six on-screen buttons drive the real device.

## What the user gets

- Status line: connection + stream state (Inactive / Starting / Active / Stopping / Error).

- A large, crisp Flipper screen in the Momentum Deck visual language, exact 128:64 shape.

- Start / Stop stream buttons — never automatic.

- D-pad (Up/Down/Left/Right) plus OK and Back, sized for thumbs, no page scrolling while pressing.

- Compact diagnostics: frames received, last frame size, approximate FPS, last frame age, last input error.

- Mock mode keeps working: a simulated animated 128x64 screen driven through the exact same renderer, with the buttons changing the mock screen.

## Confirmed from the current code and Momentum firmware

- `src/proto/gui.proto` in this project defines `ScreenFrame` with only `data = 1` and `orientation = 2` — the Momentum `bg_color = 3` / `fg_color = 4` fields are missing and must be added, then the bindings `src/proto/flipper_pb.js` / `.d.ts`) regenerated with the already-installed protobufjs tooling.

- `flipper.proto` already maps GUI tags 20/21/22/23, and the generated `PB.Main` already exposes `guiStartScreenStreamRequest`, `guiStopScreenStreamRequest`, `guiScreenFrame`, `guiSendInputEventRequest`.

- `MomentumRpc.deliver()` currently discards any message whose `command_id` has no pending request (logs a warning). Unsolicited screen frames would be dropped there today — this is the one place in the receive path that must change.

- `sendRequest(main, timeoutMs)` already exists as the generic tracked request path; start, stop and input events use it unchanged.

- `drainBuffer()` logs "RPC response received" and computes hex for every frame; that must be skipped for screen frames (performance + no frame contents in logs).

- Momentum firmware `rpc_gui.c` confirms that `gui_screen_frame` is emitted asynchronously after `StartScreenStream` succeeds and is NOT a normal command response. The firmware creates a reusable screen-frame message, copies the GUI framebuffer into it, and transmits it asynchronously. Stop removes the framebuffer callback and destroys the transmission worker.

- Momentum firmware maps the four canvas orientations directly to the protobuf screen orientations: HORIZONTAL, HORIZONTAL_FLIP, VERTICAL and VERTICAL_FLIP.

- The firmware passes the actual u8g2 GUI framebuffer directly to the screen-stream callback. Therefore the incoming 1024-byte framebuffer must be decoded using the Flipper/u8g2 page layout; it must NOT be treated as a linear XBM or row-major pixel buffer.

- Momentum firmware also populates `bg_color` and `fg_color` in streamed frames, but those values may represent normal colours or Momentum-specific colour modes such as rainbow/backlight.

## Technical approach

### Protobuf

Add exactly these two fields to `ScreenFrame` in `src/proto/gui.proto`:

```proto

uint32 bg_color = 3;

uint32 fg_color = 4;