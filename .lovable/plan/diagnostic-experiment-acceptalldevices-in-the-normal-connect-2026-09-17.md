# Diagnostic experiment: acceptAllDevices in the normal Connect flow

## Goal

Determine whether Chrome exposes the Momentum Serial Service (FE60) after GATT connect when the device-selection filter is completely removed. Temporary experiment only — no BLE architecture, UUID, firmware-assumption, or Diagnostic Connect changes.

## Current state (verified in `src/services/flipperBleTransport.ts`)

- `connect()` calls `requestDevice()` with `filters` (all verified/unverified 0x3080–0x308F service filters plus the `namePrefix: "Flipper"` OR-filter) and `optionalServices: [MOMENTUM_SERIAL_SERVICE]`.
- Existing post-connect diagnostics are already in place: runtime FE60 UUID log, `optionalServices` log, `getPrimaryServices()` enumeration, and original-error preservation on `getPrimaryService(FE60)`.
- Chooser, device selection, and GATT connect currently succeed; FE60 discovery fails.

## Change (all inside `connect()` in `src/services/flipperBleTransport.ts`)

Replace the `requestDevice()` options — remove `filters` entirely:

```ts
device = await navigator.bluetooth!.requestDevice({
  acceptAllDevices: true,
  optionalServices: [MOMENTUM_SERIAL_SERVICE],
});
```

Replace the current two filter-explanation comment lines with a note that this is a temporary diagnostic experiment and that `namePrefix` cannot be combined with `acceptAllDevices` (Web Bluetooth forbids mixing them).

Add one clear connection-log entry before the request (alongside the existing "Bluetooth chooser opened" entry):

```
Diagnostic experiment: acceptAllDevices + optionalServices[FE60]
```

Keep the existing `Momentum Serial Service UUID: ...` and `optionalServices: [...]` log entries unchanged.

## Explicitly unchanged

- All UUID values (`MOMENTUM_SERIAL_SERVICE`, FE61–FE64, the 0x3080–0x3083 verified advertising values, 0x3084–0x308F unverified candidates) — the constants stay in the code.
- `MOMENTUM_ADVERTISING_UUIDS` / `UNVERIFIED_ADVERTISING_UUIDS` exports and all firmware assumptions.
- Diagnostic Connect (`runDiagnostic()`) — untouched.
- Connection states, disconnect handling, read-only guarantee: no writes, no CLI, no test bytes, no notification subscriptions.
- All existing post-connect diagnostics: `getPrimaryServices()` enumeration, FE60 check, per-characteristic FE61–FE64 checks, original-error logging, "Connection ready" flow.
- `describeError()` and the failure path (clean disconnect + surfaced real error text).

## Expected outcome

The chooser will list every nearby Bluetooth device. If the user selects the Flipper and GATT connects, the log will show whether Chrome exposes FE60 with no selection filter at all — isolating "Chrome hides FE60 because of the filter" from "the Flipper doesn't expose FE60".

## Reverting later

This is temporary: once the experiment result is known, restore the previous filters construction (verified/unverified advertising service filters + `namePrefix: "Flipper"` OR-filter) and remove the diagnostic log entry.

## Verification

- `bunx tsgo --noEmit` clean.
- Playwright at 390×844: Device page renders, no console errors (headless Chromium shows the unsupported-Bluetooth path; the new request options only execute on real hardware).
