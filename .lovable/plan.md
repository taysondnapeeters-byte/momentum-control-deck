# Fix Momentum BLE discovery

The Connect flow currently asks the browser to find devices advertising the FE60 serial
service. Momentum does not advertise that UUID — it advertises a 16-bit value based on
`0x3080`, with the hardware colour value OR-ed in. That is why the Android chooser says
"No compatible devices found".

Only the discovery step changes. No redesign, no new features, nothing is ever written to
the Flipper.

## What changes

1. **Advertising filter (device chooser)**
   The chooser now matches on the advertised Momentum values instead of FE60: the full set of
   16-bit UUIDs `0x3080` through `0x308F` (base `0x3080` with every possible colour value
   OR-ed in), plus a name-prefix match on "Flipper" as a secondary filter. Web Bluetooth has
   no wildcard matching, so enumerating the 16 concrete values is the closest
   standards-compliant equivalent; the Device page states this limitation in plain text.

2. **FE60 stays, as an optional service**
   The FE60 GATT UUID is kept in the code and listed in `optionalServices`, so the browser is
   authorised to read it after connection. It is no longer used as the advertising filter.

3. **Verification after connect is unchanged in spirit, stricter in wording**
   After GATT connect the app explicitly requests FE60, then FE61 (TX), FE62 (RX), FE63 (Flow
   Control), FE64 (RPC Status). A characteristic is marked found only when the browser
   actually returns it. If FE60 cannot be discovered, the real browser error is shown rather
   than a generic message, and the connection is closed cleanly.

4. **Selection is not proof of compatibility**
   Appearing in the chooser proves nothing; the page reports "Momentum Serial Service: YES"
   only after FE60 is really returned.

5. **Connection log wording**
   Distinct entries: Bluetooth chooser opened, Device selected, GATT connected, Momentum
   advertising profile detected (only when the browser actually reports a matching advertised
   UUID — otherwise not logged), GATT service discovery started, Momentum Serial Service
   found, TX found, RX found, Flow Control found, RPC Status found, Connection ready.

6. **Diagnostic Connect stays exactly as it is** — broad chooser, inspect, disconnect.

## Still read-only

No writes to RX, Flow Control or RPC Status; no CLI, no test bytes. Only discovery and
notification subscription on characteristics that advertise notify/indicate.

## Technical notes

- `src/services/flipperBleTransport.ts`: add `MOMENTUM_ADVERTISING_UUIDS` (0x3080–0x308F as
  128-bit base UUID strings); `connect()` uses
  `filters: [...advertising services, { namePrefix: "Flipper" }]` with
  `optionalServices: [MOMENTUM_SERIAL_SERVICE]`; per-characteristic log lines; FE60 failure
  surfaces `describeError(error)`; final "Connection ready" entry.
- `src/routes/device.tsx`: short note under the Connect button explaining the advertising vs
  GATT distinction and the no-wildcard limitation.
- No changes to state, types (unless a small field is needed for the detected advertising
  UUID), styling or other pages.
