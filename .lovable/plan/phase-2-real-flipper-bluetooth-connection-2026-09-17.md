# Phase 2 — Real Flipper Bluetooth connection

Goal: connect Momentum Deck to a real Flipper Zero over Web Bluetooth and show honest connection diagnostics. No other features, no redesign.

## What changes for the user

Only the Device page changes.

**Disconnected:** "Flipper Zero" / "Not connected" with a "Connect Flipper" button. Pressing it opens the browser's own Bluetooth chooser.

**While connecting:** the page shows the live stage — requesting, connecting, discovering — so a slow or failed step is visible instead of a spinner.

**Connected:** "Flipper Zero" / "Connected", the Bluetooth device name, and a "Disconnect" button. Below it, a diagnostics area:

- Bluetooth: device name, connection state, GATT connected yes/no
- Momentum Serial Service: found yes/no
- Each of the four channels (TX, RX, Flow Control, RPC Status): found yes/no plus the properties the firmware actually reports (read / write / write-without-response / notify / indicate). Nothing is marked supported unless it was really discovered.
- Connection log: timestamped lines ("Bluetooth request started", "Device selected", "GATT connected", "Momentum Serial Service discovered", each characteristic, "Notifications enabled"). Errors appear here with the real reason.
- Raw data: incoming notifications shown as hex, newest first, capped at 200 entries, with a "Clear log" button. Unknown bytes are never interpreted.

**Mock mode:** a clearly labelled switch stays on the Device page. A badge at the top of the page always reads either REAL HARDWARE or MOCK MODE so there is never any doubt. Mock mode never pretends a real Flipper is attached, and turning it on while a real device is connected is blocked.

**Unsupported browser:** if the browser has no Web Bluetooth, the Connect button is disabled and the page explains "Web Bluetooth is not available in this browser." plus that a compatible browser and device are required. Nothing crashes.

**Losing the device** (powered off, out of range, browser error) simply returns the page to "Not connected" with a log entry. No automatic reconnect.

Nothing is transmitted to the Flipper in this phase — the app only discovers the service and listens.

## Technical notes

New file `src/services/flipperBleTransport.ts` — the only place in the app that touches `navigator.bluetooth`.

- Service `0000fe60-cc7a-482a-984a-7f2ed5b3e58f`; characteristics TX `…fe61-8e22-4541-9d4c-21edae82ed19`, RX `…fe62-…`, Flow Control `…fe63-…`, RPC Status `…fe64-…`. No other UUIDs.
- `requestDevice()` uses a service filter on the Momentum service with `optionalServices` including it; if the chooser yields a device that lacks the service after connecting, the transport disconnects cleanly and reports why.
- API: `isSupported()`, `requestDevice()`, `connect()`, `disconnect()`, `getState()`, `subscribe(listener)`, plus emitted `log` and `raw` events. Reserved `write()` exists but is unused this phase.
- Explicit state union: `disconnected | requesting | connecting | discovering | connected | disconnecting | error` (with an `error` message field). No boolean.
- Discovery records each characteristic's real `properties` object; notify/indicate subscriptions are started only where the property is present, each wrapped so one failure does not abort the others.
- `gattserverdisconnected` listener resets all transport state and detaches listeners.

`src/services/index.ts`: replace the placeholder `ConnectionStatus` and `FlipperBleTransport` types with the real state union and transport contract; keep `FlipperDevice`, `FlipperCli`, `FlipperRpc`, `GeminiService` as untouched placeholders for the next phase.

`src/state/AppStateProvider.tsx`: hold a single transport instance, expose `connection` state, device name, discovery result, log entries, raw entries, `connectFlipper()`, `disconnectFlipper()`, `clearBleLog()`, and `mockMode` / `setMockMode`. Mock mode persists in IndexedDB settings. All UI reads from here; no component imports the transport directly.

`src/routes/device.tsx`: rewritten presentation per above, built from existing `PageShell` / `Panel` / `StatusPill` / `Button` primitives. New small components for the characteristic table and log lists.

Errors from the Bluetooth API (user-cancelled chooser, security, GATT failure) are caught and converted to plain messages; nothing throws into React.
