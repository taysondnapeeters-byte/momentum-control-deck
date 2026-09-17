# Diagnose the FE60 post-connect discovery failure

## Goal

Find out exactly why `getPrimaryService(FE60)` fails after a successful GATT connection — by making the normal Connect flow log the real browser state and the original error, instead of the current misleading generic message. Diagnostic only: no discovery-filter, architecture, or feature changes.

## Current state (verified in `src/services/flipperBleTransport.ts`)

- Chooser, device selection, and GATT connect all succeed.
- At line 208, `gatt.getPrimaryService(MOMENTUM_SERIAL_SERVICE)` throws; the catch at lines 209–213 wraps it in a new `Error` whose text comes from `describeError()`. For a `NotFoundError` DOMException that produces "No device was selected, or no Flipper advertising the Momentum serial service was found." — misleading, since a device was selected and GATT connected.
- The original DOMException's `name`, `message`, and `constructor.name` are never logged.
- `getPrimaryServices()` enumeration exists only in Diagnostic Connect, not in the normal Connect path.

## Changes (all inside `connect()` in `src/services/flipperBleTransport.ts`)

1. **Log the runtime FE60 value** — before `requestDevice()`, log the exact value of `MOMENTUM_SERIAL_SERVICE` (e.g. `Momentum Serial Service UUID: 0000fe60-...`).
2. **Log optionalServices** — log that `optionalServices` contains exactly that UUID (e.g. `optionalServices: [0000fe60-...]`).
3. **Preserve the original error** — in the `getPrimaryService` catch, log the original error's `name`, `message`, and `constructor.name` (via a small helper that reads these off the caught value) before/instead of wrapping. The surfaced error message will include the real DOMException text, not the generic "No device was selected…" line.
4. **Enumerate exposed services** — after GATT connect (in the normal Connect path), call `gatt.getPrimaryServices()` inside its own try/catch and log each returned service UUID; if the browser refuses enumeration, log that refusal. Read-only: no characteristic access, no writes, no subscriptions added by this step.
5. Keep the rest of the flow (characteristic discovery, notifications, "Connection ready") unchanged.

## Explicitly unchanged

- Verified advertising values 0x3080–0x3083 and unverified candidates 0x3084–0x308F.
- The `namePrefix: "Flipper"` OR-filter and the OR semantics between filter objects.
- `optionalServices: [MOMENTUM_SERIAL_SERVICE]` content.
- Diagnostic Connect flow.
- Connection architecture, states, and all existing log entries.
- Read-only guarantee: no writes, no CLI, no test bytes.

## Expected outcome

The connection log will show the exact UUID used, the exact optionalServices, every service UUID Chrome actually exposes after connect, and — if FE60 is missing — the original DOMException (`name` / `message` / `constructor.name`). That distinguishes "Chrome hides FE60" from "the Flipper doesn't expose FE60" and gives the real reason.

## Verification

- `bunx tsgo --noEmit` clean.
- Playwright at 390×844: Device page renders, no console errors (headless Chromium shows the unsupported-Bluetooth path; the new log lines only execute on real hardware).
