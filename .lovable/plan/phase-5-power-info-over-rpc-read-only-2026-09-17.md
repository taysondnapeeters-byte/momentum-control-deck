# Phase 5 — Power Info over RPC (read-only)

Add one more read-only capability on top of the working Bluetooth + RPC stack: ask the Flipper for its power information and show exactly what it returns.

## Schema check — complete, nothing missing

Confirmed in the protobuf files already in the project:

- `src/proto/system.proto`: `message PowerInfoRequest {}` and `message PowerInfoResponse { string key = 1; string value = 2; }`
- `src/proto/flipper.proto`, inside `PB.Main`: `system_power_info_request = 44`, `system_power_info_response = 45`
- Generated types expose `systemPowerInfoRequest` / `systemPowerInfoResponse` on `PB.Main`

Same key/value streaming shape as Device Info, so `has_next` ends the stream exactly as it already does.

## What changes

1. `src/services/index.ts` — add `RpcPowerInfoEntry { key, value }` and `RpcPowerInfoResult { ok, mock, commandId, roundTripMs, entries, txHex, rxHex, status, error, at }`; add `lastPowerInfo` to the RPC snapshot and `getPowerInfo()` / `mockPowerInfo()` to the RPC interface.
2. `src/services/flipperRpc.ts` — add `getPowerInfo()` and `mockPowerInfo()`, mirroring the Device Info implementation exactly: session-ready check, next monotonic command ID, `PB.Main { systemPowerInfoRequest: {} }`, the existing length-delimited encoder, the existing chunked write, the existing `track()` pending/streaming mechanism (collect parts until `has_next === false`), the existing 5 s timeout and disconnect handling, captured TX/RX hex. Rejects on non-OK status, command-ID mismatch, timeout, disconnect, decode failure, or a response that is not a `system_power_info_response`. Ping and Device Info are untouched.
3. `src/state/AppStateProvider.tsx` — add `refreshPowerInfo()`, mock-gated the same way as `refreshDeviceInfo()`.
4. New `src/components/PowerInfoPanel.tsx` — a "Power information" card on the Device page, built from the same Panel/InfoRow pieces as the Device Information card.
5. `src/routes/device.tsx` — render the new card after the Device Information card.

## What the card shows

- Disconnected: "Connect a Flipper to read power information."
- Connected: a "Refresh Power Info" button, disabled while disconnected or while a request is running, with a spinner while waiting.
- On success: every key/value pair the Flipper actually returned — no predefined or invented fields — plus command ID, round-trip time, status, and the raw `POWER INFO TX` / `POWER INFO RX` bytes in uppercase hex.
- On failure: a plain-language message in the card, with the detail in the connection log.
- Mock mode with nothing connected: a clearly labelled "Mock Power Information" result that never claims a real Flipper answered.

No polling, no timers, no automatic request on connect — the button is the only trigger.

## Logging

Through the existing connection log, in the established style: request created, command ID, TX bytes, response received, response command ID, response status, decoded successfully; plus "Power Info failed: …" and "Power Info response command ID mismatch".

## Untouched

The Bluetooth layer stays exactly as it is: service and characteristic IDs, device filters, connection sequence, notifications, writes, Flow Control and RPC Status handling. No power control, reboot, sleep, charging control, or any other command — read-only only.

## Verification

`bunx tsgo --noEmit` clean, then the Device page rendered in a headless browser with no console errors and the new card and button present. Final confirmation is on your phone: Connect → Device page → Refresh Power Info, then check that every response shares one command ID, the last one has `has_next = false`, and the values shown match what the Flipper reported.
