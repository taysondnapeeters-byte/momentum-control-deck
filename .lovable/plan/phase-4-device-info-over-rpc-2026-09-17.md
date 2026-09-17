# Phase 4 — Device Info over RPC

Add one read-only RPC capability on top of the working Bluetooth + RPC layer: ask the Flipper for its device information and show it on the Device page.

## Schema check (done, nothing missing)

The needed definitions are already in `src/proto/`:

- `system.proto`: `DeviceInfoRequest {}` and `DeviceInfoResponse { string key = 1; string value = 2; }`
- `flipper.proto`: `system_device_info_request = 32`, `system_device_info_response = 33` inside `PB.Main`

Important detail from the schema: the Flipper answers Device Info as a **stream** — one `Main` message per key/value pair, all sharing the same command ID, with `has_next = true` on every message except the last. The existing Ping path resolves on the first response, so the RPC layer needs multi-part support before Device Info can work.

## What changes

1. `src/services/flipperRpc.ts`
   - Extend the pending-request bookkeeping so a request can collect a sequence of responses until `has_next` is false, reusing the same command IDs, timeout, receive buffer and framing already proven by Ping. Ping behaviour stays exactly as it is.
   - New `getDeviceInfo()`: checks the session is ready, allocates a command ID, builds `Main { systemDeviceInfoRequest: {} }`, encodes length-delimited, writes through the existing transport, collects the streamed responses, rejects on non-OK status / timeout / disconnect / malformed or unexpected response, and returns a typed result containing the key/value pairs plus captured TX and RX hex.
   - A clearly labelled mock result for mock mode, matching how mock Ping already works.
   - Logging through the existing connection log: request created, command ID, TX bytes, response received, response command ID, response status, decoded successfully, plus failure and command-ID-mismatch entries.

2. `src/services/index.ts` — types for the Device Info result and the new RPC snapshot field.

3. `src/state/AppStateProvider.tsx` — expose `refreshDeviceInfo()` alongside `pingFlipper()`, routing to the mock result when mock mode is on and nothing is connected.

4. `src/components/RpcPanel.tsx` (or a small sibling component in the same style) — a "Device Information" card.

Unchanged: all Bluetooth UUIDs, filters, connection flow, notifications, writes, Flow Control and RPC Status handling.

## Device Information card

- Disconnected: "Connect a Flipper to read device information."
- Connected: a "Refresh Device Info" button (disabled while disconnected or while a request is in flight, spinner while waiting).
- On success: every key/value pair the Flipper actually returned, rendered in the existing row style — no invented or placeholder fields, nothing shown that the device did not send.
- On failure: a plain-language error in the card, with detail in the connection log.
- Raw TX/RX bytes in uppercase hex, in the existing diagnostics style.
- No polling, no automatic request on connect — only the button sends anything.

## Verification

- `bunx tsgo --noEmit` must be clean.
- Page render checked in a headless browser (no console errors).
- Final confirmation is yours on real hardware: Connect → Device page → Refresh Device Info → real values appear and the log shows the request/response entries.
