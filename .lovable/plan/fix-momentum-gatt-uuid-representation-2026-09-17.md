# Fix Momentum GATT UUID representation

The diagnostic experiment isolated the problem: Chrome connects, but the FE60 service UUID string used by the web app does not match the canonical UUID the Flipper actually exposes. The Android GATT scanner confirms the real canonical UUIDs. This plan swaps the UUID constants to the canonical strings and restores the normal advertising filters.

## Exact UUID constants to change (src/services/flipperBleTransport.ts)

Replace the current constants with:

```ts
/**
 * Canonical Momentum GATT UUIDs, as reported by an independent Android GATT
 * scanner. The firmware source stores these as BLE-stack byte arrays whose
 * textual grouping is NOT the canonical UUID string — do not regroup them.
 * Symbolic labels (FE60 etc.) are kept in comments/logs only.
 */
export const MOMENTUM_SERIAL_SERVICE = "8fe5b3d5-2e7f-4a98-2a48-7acc60fe0000"; // FE60

export const MOMENTUM_CHARACTERISTICS = [
  { key: "tx",          label: "TX",           uuid: "19ed82ae-ed21-4c9d-4145-228e61fe0000" }, // FE61
  { key: "rx",          label: "RX",           uuid: "19ed82ae-ed21-4c9d-4145-228e62fe0000" }, // FE62
  { key: "flowControl", label: "Flow Control", uuid: "19ed82ae-ed21-4c9d-4145-228e63fe0000" }, // FE63
  { key: "rpcStatus",   label: "RPC Status",   uuid: "19ed82ae-ed21-4c9d-4145-228e64fe0000" }, // FE64
];
```

## Restore normal-connect filters (remove the acceptAllDevices experiment)

`connect()` goes back to:

```ts
const device = await navigator.bluetooth.requestDevice({
  filters: [
    ...MOMENTUM_ADVERTISING_UUIDS.map((uuid) => ({ services: [uuid] })),      // verified 0x3080–0x3083
    ...UNVERIFIED_ADVERTISING_UUIDS.map((uuid) => ({ services: [uuid] })),    // unverified 0x3084–0x308F
    { namePrefix: "Flipper" },                                                // OR alternative
  ],
  optionalServices: [MOMENTUM_SERIAL_SERVICE],
});
```

The "Diagnostic experiment: acceptAllDevices…" log entry is removed. Verified/unverified advertising lists stay unchanged.

## Logging clarity

Log lines that mention a UUID will show both the symbolic label and the canonical string, e.g. `Momentum Serial Service (FE60): 8fe5b3d5-2e7f-4a98-2a48-7acc60fe0000` and `TX (FE61) found`. Existing diagnostics (services-exposed enumeration, original-error capture) are kept.

## Unchanged

- No CLI, no writes, no test bytes, no notification subscriptions beyond the existing read-only discovery behavior
- Diagnostic Connect flow untouched
- Connection states, architecture, advertising UUID lists untouched

## Verification

- `bunx tsgo --noEmit` clean
- Playwright smoke check at 390x844: Device page renders, no console errors
