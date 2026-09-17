# Minimal Reconnect Diagnostic/UI Fix

Make the Web Bluetooth known-device lookup fully transparent in the UI and connection log, without changing any connection, GATT, or RPC behavior.

## What changes

### 1. Track the lookup result explicitly
Introduce a lookup-status value with four states:
- **unavailable** — `navigator.bluetooth.getDevices` does not exist
- **empty** — API exists, returned zero devices
- **found** — API exists, returned one or more devices
- **error** — `getDevices()` threw (name/message captured)

This status lives in AppState alongside the existing `knownDevices` list. The transport's `listKnownDevices()` already returns `[]` for both "unsupported" and "no devices", so the transport gains a way to report which case occurred (e.g. a status alongside the list, or `supportsReconnect()` checked before the call). No change to `reconnect()`, `attach()`, or the GATT sequence.

### 2. Device page UI for each state
In the existing "Previously connected Flipper" panel:
- **unavailable**: "Previously permitted devices: unavailable in this browser" (replaces the current generic fallback text)
- **empty**: "No previously permitted Bluetooth devices were returned by this browser." — states only what the API returned; no claims about lost permission or Chrome forgetting the Flipper
- **found**: existing Reconnect buttons, unchanged
- **error**: surfaced through the connection log (see below)

### 3. Logging via the existing connection log
On each lookup, log:
- `Bluetooth known-device lookup started`
- `Bluetooth getDevices available: true|false`
- `Bluetooth getDevices returned: N`
- `Bluetooth known device: <name>` for each returned device
- `Bluetooth getDevices error: <name>: <message>` on exception

No device IDs or other sensitive data logged.

### 4. Re-run the lookup at the right moments
The lookup currently runs once on mount. It will additionally run:
- after a successful connection (state becomes "connected")
- after disconnection (state leaves "connected")

This only refreshes the list — it never triggers a connect, never opens the chooser, never calls `requestDevice()`.

## What does NOT change
- GATT connection sequence (GATT → FE60 → FE61–FE64 → notifications/indications): untouched
- `reconnect()` behavior and the existing Reconnect UI when devices are found: untouched
- RPC implementation: untouched
- No persistence of device IDs (IndexedDB/localStorage/settings): the browser's permission mechanism stays the source of truth
- No auto-connect, no automatic chooser, no polling
- Mock mode: untouched (lookup only runs in real mode paths, as today)
- No unrelated UI or functionality

## Files touched
- `src/services/flipperBleTransport.ts` — report lookup outcome (available/empty/found/error) and log it
- `src/services/index.ts` — type for the lookup status on the transport interface
- `src/state/AppStateProvider.tsx` — store lookup status, re-run lookup on connect/disconnect
- `src/routes/device.tsx` — render the unavailable/empty diagnostic messages

## Verification
- `bunx tsgo --noEmit` clean
- Playwright at phone width: mock mode still works; no Bluetooth chooser appears automatically; no auto-reconnect; manual Connect flow unchanged
- Real-hardware/browser check (user-side): Reconnect flow unchanged when `getDevices()` returns a device; empty/unavailable messages appear correctly otherwise
