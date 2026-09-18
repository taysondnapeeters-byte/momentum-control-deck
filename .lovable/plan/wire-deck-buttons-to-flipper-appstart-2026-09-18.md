# Wire Deck Buttons to Flipper AppStart

Make Deck buttons launch saved scripts on the Flipper via the existing `startApp` RPC. UI changes only — the RPC layer, Bluetooth transport, and AI Forge stay untouched.

## What the user sees

**Edit mode (DeckButtonEditor dialog):** two new fields under the existing Name/Icon/Accent:
- **App Type** dropdown: "Bad USB" or "JS" (the Momentum app names).
- **Target Path** text input: the exact file path on the Flipper (e.g. `/ext/badusb/demo.txt`).
- Both optional: a button with no path stays an inert example button. Save is enabled with just a name, as today.

**Play mode (tapping a button):**
- Button has no target path → the existing "UI example" toast (unchanged).
- Flipper not connected and mock mode off → error toast "Flipper not connected".
- Otherwise: the button shows a small spinner and is disabled while running; toast "Starting [name]…", then "Started on Flipper" or an error toast naming the firmware status.
- Mock mode runs the same flow against the simulated RPC (clearly mock — no hardware claim).

The "Buttons are examples" status pill is updated to reflect that configured buttons now run.

## Technical notes

- `src/types/deck.ts`: add optional `appType?: "Bad USB" | "JS"` and `targetPath?: string` to `DeckButton` (replacing the reserved `action?: null`). Existing saved decks load unchanged — the fields are optional; no migration needed.
- `src/components/DeckButtonEditor.tsx`: add the App Type select (native select or ToggleGroup, matching existing tokens) and Target Path input; light client-side validation (path must start with `/ext/`; warn but allow save). Both fields persisted through the existing `upsertButton` → IndexedDB deck store — no state-layer changes needed since the whole button object is already saved.
- `src/routes/index.tsx`: new `runButton(button)` handler — reads `connection` and `mockActive` from `useAppState()`, calls `getFlipperRpc().startApp(button.appType, button.targetPath)` in real mode or `mockSimpleResult()` in mock mode; per-button `runningId` state drives the spinner; toasts via sonner.
- Nothing else touched: no changes to `flipperRpc.ts`, transport, AI Forge, or other routes.

## Verification

- `bunx tsgo --noEmit` clean.
- Playwright at 390×844 in mock mode: create a button with App Type + path, tap it, confirm the starting/success toasts and spinner; tap an unconfigured button and confirm the example toast; confirm edit mode (reorder/edit/remove) still works; no console errors.
- Real-hardware check is yours: save a script via AI Forge, add a Deck button pointing at its path, tap it — the app should launch on the Flipper.
