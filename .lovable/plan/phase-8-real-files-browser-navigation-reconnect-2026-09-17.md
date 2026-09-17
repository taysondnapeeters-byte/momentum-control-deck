# Phase 8 — Real Files browser, navigation, reconnect

Turn the Files tab into the actual read-only Flipper filesystem browser, with folder navigation and Back, and add an explicit Reconnect after a page refresh where the browser supports it. No new Bluetooth or RPC code — everything sits on the proven Storage List / Stat / Read methods.

## What exists today (verified)

- `flipperRpc.ts` already has `listStorage(path)`, `statStorage(path)`, `readStorage(path)` plus their mocks, one shared streaming collector, `validateStoragePath()`, and the 64 KB `MAX_READ_BYTES` limit.
- `AppStateProvider.tsx` already exposes `refreshStorageList`, `refreshStorageStat`, `readStorageFile`, all mock-gated, and holds the transport + RPC singletons at module level — so the connection already survives tab switches and no page component creates it.
- `StorageListPanel.tsx` owns the `/ext` listing, the per-file Read flow and the size check; `FileViewerPanel.tsx` owns the text/binary presentation and Stat/Read diagnostics.
- `flipperBleTransport.ts` has a single `connect()` that always calls `requestDevice()`; there is no previously-authorised-device path yet, and `web-bluetooth.d.ts` does not declare `getDevices()`.
- The listing is rendered in device order — no sort exists, and none will be added.

## 1. Filesystem state moves into AppStateProvider

New runtime state alongside the existing storage actions, named to match current conventions:

- `storagePath` (starts at `/ext`), `storageLoading`, `selectedFile` (path + name + the Stat/Read results), `storageReadLoading`.
- `refreshStorageList(path?)` — defaults to the current path, exactly one request per call, ignored while a listing or read is in flight.
- `navigateIntoStorageDirectory(name)` — builds the child path from the current path plus a name the Flipper itself returned, runs the existing `validateStoragePath`, sets it as current, loads it once, and clears any open file.
- `navigateBackStorageDirectory()` — parent of the current path, never above `/ext`; same single load, viewer cleared.
- `openStorageFile(path)` — the existing Stat → size check → Read sequence, moved out of the component so Files and any future screen share it.
- `closeStorageFile()` — clears the viewer only; the path and listing stay as they are, and nothing is re-requested.

Serialisation: one listing or one read at a time; navigation, Refresh and every Read control are disabled while anything is in flight. No queue. On disconnect the loading flags clear, the viewer closes, the path is kept, and the page shows the disconnected state.

`storagePath` is persisted in settings (path string only — never a Bluetooth object) and restored on load for display. No Storage RPC is ever fired automatically; the user presses Refresh.

## 2. Files page (`src/routes/files.tsx`)

Replaces the placeholder, using the existing panel/typography language — no new visual style, no animation:

- Header row: current path in mono, a Back button shown only above `/ext`, and Refresh (spinner while loading, disabled while any operation runs).
- Entries in the order the Flipper returned them. Folder rows (protobuf `DIR`) are tappable and have no Read action; file rows show the size and a Read action. Type comes only from `File.type`.
- `This directory is empty.` for zero entries — not an error. Storage errors appear as the existing plain sentences.
- Not connected and mock off: "Connect a Flipper to browse files." with no requests.
- Mock mode with nothing connected: a clearly headed MOCK FILESYSTEM. The mock listing gains child listings for `infrared`, `subghz`, `nfc` and `badusb` so navigation and Back are exercisable, and `momentum-demo.txt` still reads through the existing mock Stat/Read. Real connection always wins over mock, exactly as now.
- The file viewer renders below the listing as the existing `FileViewerPanel`, unchanged in content and diagnostics, with a Close control that returns to the listing without re-reading anything.

## 3. Device page

`StorageListPanel` is removed from `src/routes/device.tsx`; connection, BLE diagnostics, RPC/Ping, Device Info, Power Info and the connection log all stay. The Storage diagnostics themselves are not lost — they move with the browser into Files. `StorageListPanel.tsx` is deleted once the Files page carries its behaviour, so there is no second browser.

## 4. Explicit reconnect

`navigator.bluetooth.getDevices()` returns devices the user already permitted, but it is Chrome-only and can be disabled — so it is feature-detected at runtime and never assumed.

- `flipperBleTransport.ts`: `connect()` is refactored so the existing post-selection sequence (GATT connect, FE60, FE61–FE64, notifications, "Connection ready") is shared, with the device either chosen through `requestDevice()` as today or supplied by the new `reconnect()`. No second connection implementation.
- New `listKnownDevices()` returning permitted devices' names, and `reconnect(id)`; both no-op cleanly when `getDevices` is absent.
- `web-bluetooth.d.ts` gains the `getDevices()` declaration.
- The Device page shows "Previously connected Flipper — <name>" with a Reconnect button only when the browser actually returned one. Nothing connects on page load, no permission prompt is raised implicitly, and a failed reconnect shows the real error plus the normal Connect Flipper path. Where the API is missing, the app says reconnect is not available in this browser rather than showing a button that cannot work.
- Only the last known device name is persisted; GATT objects never touch storage.

## Unchanged

UUIDs, filters, connection sequence, notifications, Flow Control, RPC Status, protobuf framing, Ping, Device Info, Power Info, and the Storage List/Stat/Read RPC methods including the 64 KB limit and multipart RX diagnostics. Strictly read-only — no write, delete, rename, mkdir, md5, upload, execute or CLI anywhere.

## Verification

`bunx tsgo --noEmit` clean, then a headless pass at phone width: Files renders, disconnected state renders, the mock filesystem lists, navigating into a mock folder and back works, the mock file reads and the viewer closes, no console errors. Then on your hardware: connect, open Files, Refresh `/ext`, step into a real folder and back, read a small real file and confirm Stat size matches the bytes read; switch Device → Files → Device and confirm the connection holds; refresh the page and confirm Reconnect either restores the session or reports honestly that your browser does not offer it.
