# Fix Web Bluetooth filter construction

The browser rejects the device chooser with:
"Failed to read the 'services' property from 'BluetoothLEScanFilterInit': The provided value cannot be converted to a sequence."

Root cause: in `src/services/flipperBleTransport.ts`, the `connect()` chooser maps every advertising UUID to `{ services: uuid }` — a single string. Web Bluetooth requires `services` to be a sequence (array).

Only the filter object shape changes. No architecture, discovery strategy, UUID lists, logging, or Diagnostic Connect changes.

## What changes

1. **`src/services/flipperBleTransport.ts` — `connect()` filters**
   Each service filter becomes `{ services: [uuid] }`. The exact final construction:

```ts
device = await navigator.bluetooth!.requestDevice({
  // Web Bluetooth OR-filters across filter objects: any advertised
  // Momentum value OR a "Flipper" name prefix matches.
  // `services` must be a sequence (array) — a scalar is rejected.
  filters: [
    ...MOMENTUM_ADVERTISING_UUIDS.map((uuid) => ({
      services: [uuid],
    })),
    ...UNVERIFIED_ADVERTISING_UUIDS.map((uuid) => ({
      services: [uuid],
    })),
    { namePrefix: "Flipper" },
  ],
  optionalServices: [MOMENTUM_SERIAL_SERVICE],
});
```

   Verified values 0x3080–0x3083 and unverified 0x3084–0x308F keep their existing lists and the same OR semantics between filter objects.

2. **`src/types/web-bluetooth.d.ts` — prevent recurrence**
   Narrow `services` in the `filters` entry of `RequestDeviceOptions` from `string | string[]` to `string[]`, so TypeScript rejects a scalar in any future filter.

## Unchanged

- `optionalServices: [MOMENTUM_SERIAL_SERVICE]` (FE60 stays the optional service)
- FE60 as the authoritative post-connect compatibility check
- Verified/unverified UUID lists and the `namePrefix: "Flipper"` OR filter
- Diagnostic Connect flow (uses `acceptAllDevices`, no service filters)
- All connection logging, connection states, disconnect handling
- Read-only scope: no writes, no CLI, no test bytes

## Verification

- `bunx tsgo --noEmit` typecheck
- Playwright at 390x844: Device page renders, unsupported-browser message intact, no console errors
