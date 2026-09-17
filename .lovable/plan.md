# Phase 3 — Flipper RPC foundation (System Ping only)

Goal: prove one real round trip — app → Bluetooth RX → Momentum RPC → System Ping handler → protobuf response → TX → app. No CLI, no text protocol, no other RPC commands.

## What exists today (inspected)

- `src/services/flipperBleTransport.ts` is the only module touching `navigator.bluetooth`. It connects, discovers the Momentum service and all four characteristics, enables notifications/indications, keeps a timestamped log plus a 200-entry hex raw log, and exposes `isSupported / getSnapshot / subscribe / connect / runDiagnostic / disconnect / clearLogs / write`.
- `write()` currently throws ("not enabled in this phase") — this is the only place that needs a real implementation.
- Incoming characteristic values are handled by one internal listener per characteristic which only pushes hex into the raw log; there is no way for another module to receive the bytes yet.
- `AppStateProvider` holds the transport singleton and re-renders the UI from its snapshot; the Device page renders status, characteristics, connection log, raw log and Diagnostic Connect.

Discovery, filters, UUIDs, mock mode, logging and UI stay exactly as they are.

## Changes

### 1. Transport (small, additive)

- Implement `write(data)`: write to the RX characteristic, preferring write-without-response when the discovered properties allow it, otherwise write-with-response. Fails cleanly when not connected or RX was not discovered.
- Add `onData(source, listener)` so a higher layer can receive raw TX (and Flow Control) chunks. The existing raw-hex logging keeps working unchanged.
- Nothing else in this file changes. FE64 RPC Status keeps its current passive behaviour; no values are ever written to FE63/FE64.

### 2. New `src/services/flipperRpc.ts`

Sits above the transport; React never sees protobuf or characteristics.

- `isReady()` — true when connected and RX/TX are usable.
- `ping()` — builds `PB.Main { command_id, command_status: OK, has_next: false, system_ping_request { data } }` with payload bytes for "Momentum Deck Ping".
- `sendRequest(main)` — generic path used by `ping()`, so future commands reuse it.
- Monotonic `command_id` counter; a pending-request map `command_id → { resolve, reject, timer, sentAt }`.
- 5 s timeout per request; on expiry the pending entry is rejected and removed. No retries, no auto-reconnect.
- Receive buffer: TX chunks are appended to a growing byte buffer and decoded with length-delimited framing in a loop — read the varint length prefix, wait if fewer bytes than that are present, decode one `PB.Main`, drop the consumed bytes, repeat. One notification ≠ one message is explicitly handled.
- Outgoing writes go through a chunker capped at 243 bytes per characteristic write (Momentum's max chunk), so future larger messages already fragment correctly; the ping fits in one write.
- Errors handled without crashing: not connected, RPC not ready, write failure, encode failure, decode failure, incomplete/malformed response, command-ID mismatch, `command_status != OK`, timeout, disconnect during a request (pending requests are rejected on disconnect).
- Mock mode: handled at the app-state level, not inside the real RPC path, so a simulated result can never be mistaken for hardware.

### 3. Protobuf

- Vendor the official `flipperzero-protobuf` (dev) `.proto` files needed for `PB.Main` + `system_ping` into `src/proto/`, unmodified, with their source noted.
- Add `protobufjs` and generate a static TypeScript module from those `.proto` files once, committed into `src/proto/`. Runtime only uses `protobufjs/minimal` — no `.proto` parsing in the browser, no hand-invented field numbers.
- Length-delimited framing uses the generated `encodeDelimited` / `decodeDelimited` (the `PB_ENCODE_DELIMITED` / `PB_DECODE_DELIMITED` counterpart).

### 4. Device page — "RPC" section

Shown under the existing diagnostics when connected:

- `RPC: Ready / Not ready`
- Button **Ping Flipper** (≥44px, matching the existing style)
- Result: "RPC Ping successful" (or the exact failure reason), with command ID, round-trip time in ms, returned payload, and the raw TX/RX bytes in hex.
- In mock mode the button returns a clearly labelled **"Mock RPC Ping successful"** and never claims a real device answered.

### 5. Logging

Added to the existing connection log: `RPC session ready`, `RPC Ping request created`, `RPC command ID: n`, `RPC TX bytes: …`, `RPC response received`, `RPC response command ID: n`, `RPC response status: OK`, `RPC Ping successful`, plus `RPC decode error …`, `RPC Ping timeout`. Flow Control values are logged as observed only — no invented semantics. No secrets logged.

## Out of scope (unchanged)

Text CLI, arbitrary commands, IR, Sub-GHz, NFC, RFID, BadUSB, JS execution, file transfer, SD browsing, Gemini, screen streaming, virtual Flipper, GPIO, Geo. No state-changing RPC commands of any kind.

## Verification

`bunx tsgo --noEmit` clean, plus a 390x844 preview check that the Device page renders with no console errors. The real round trip can only be confirmed by you on the Android phone.
