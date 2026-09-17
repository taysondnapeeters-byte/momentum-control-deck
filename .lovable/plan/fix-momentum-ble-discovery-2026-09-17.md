# Fix Momentum BLE discovery

The Connect flow currently asks the browser to find devices advertising the FE60 serial  
service. Momentum does not advertise that UUID — it advertises a 16-bit value based on  
`0x3080`, with the hardware colour value OR-ed in. That is why the Android chooser says  
"No compatible devices found".

Only the discovery step changes. No redesign, no new features, No application data or commands are written to the Flipper.

## What changes

1. **Advertising filter (device chooser)**
  The chooser now matches on the advertised Momentum values instead of FE60:
  - Verified values: `0x3080`, `0x3081`, `0x3082`, `0x3083` (base `0x3080` OR-ed with the  
  hardware colour enum Unknown/Black/White/Transparent).
  - Defensive candidates: `0x3084`–`0x308F`, explicitly labelled unverified /  
  forward-compatible — not known Momentum values.  
   Plus an alternative discovery filter: `namePrefix: "Flipper"`. Web Bluetooth OR-filters  
   across filter objects, so the name prefix is an additional way to be found, not a  
   requirement combined with the service values. No other UUIDs are added.  
   Web Bluetooth has no wildcard matching, so enumerating these concrete values is the  
   closest standards-compliant equivalent; the Device page states this limitation in plain  
   text.
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

## Still non-command / non-data-write

No application data is written to RX, Flow Control, RPC Status, or any other Flipper characteristic. No CLI commands and no test bytes are sent.

The app may call startNotifications() where supported. Any GATT descriptor operation performed internally by the browser to enable notifications is expected and is not considered application data transmission.

## Technical notes

- `src/services/flipperBleTransport.ts`: add `MOMENTUM_ADVERTISING_UUIDS` (verified  
0x3080–0x3083) and `UNVERIFIED_ADVERTISING_UUIDS` (0x3084–0x308F, labelled forward-compatible  
candidates); `connect()` uses `filters: [...all advertising services, { namePrefix: "Flipper" }]` (OR across filters) with  
`optionalServices: [MOMENTUM_SERIAL_SERVICE]`; the post-connect FE60 check remains the  
authoritative compatibility test; per-characteristic log lines; FE60 failure  
surfaces `describeError(error)`; final "Connection ready" entry.
- `src/routes/device.tsx`: short note under the Connect button explaining the advertising vs  
GATT distinction and the no-wildcard limitation.
- No changes to state, types (unless a small field is needed for the detected advertising  
UUID), styling or other pages.