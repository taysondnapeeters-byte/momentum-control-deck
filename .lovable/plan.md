# Momentum Deck — Foundation

A mobile-first control deck shell: polished dark UI, seven sections, local storage, no hardware code.

## Pages

- **Deck** (home) — Stream Deck grid with example buttons: TV ON, TV OFF, LIGHTS, VOLUME +, VOLUME -, CUSTOM. Each has an icon, name, colour accent and edit action. "Edit Deck" mode enables reorder (move left/right), edit, remove and add. Buttons do nothing when tapped outside edit mode (a short "not wired up yet" note).
- **Device** — "Flipper Zero", status "Not connected", "Connect Flipper" button showing: "Bluetooth integration will be enabled in the next development phase."
- **AI** — "Gemini AI", status "Not configured", "Configure Gemini" navigates to Settings.
- **Files** — empty state: "Flipper Files" / "Connect a Flipper to browse supported files."
- **Virtual Flipper** — blank device-screen placeholder (clearly inert, labelled "Hardware integration pending") plus Up/Down/Left/Right/OK/Back pad, non-functional.
- **Geo** — "Geo-Catcher" map placeholder with "Signal and GPS functionality will be added later."
- **Settings** — Appearance (dark/light), Gemini API key field (password style, show/hide, save, remove, test connection disabled with an explanation), a visible warning that API keys are sensitive, and "Clear local app data" behind a confirmation dialog.

Bottom navigation bar with the seven sections, Deck as the default screen.

## Look and feel

Deep near-black background, one cool accent colour, rounded cards, hairline borders, high-contrast type, touch targets at least 44px, short restrained transitions. Light mode is a clean inverse of the same system.

## Technical notes

- The project runs on the TanStack Start + Vite + React + TypeScript + Tailwind v4 template already in place; each section becomes its own route, so pages are shareable and each gets its own title/description.
- Local persistence in IndexedDB via a small hand-written wrapper (no extra library): stores for `deck`, `settings`, and reserved space for future data. The Gemini key is only written when the user presses Save.
- State: a lightweight context per concern — deck config, settings/theme, connection status — each reading/writing through the IndexedDB layer, so UI never talks to storage directly.
- Architecture placeholders under `src/services/`: type-only interfaces for `FlipperDevice`, `FlipperBleTransport`, `FlipperCli`, `FlipperRpc`, `FlipperCapabilities`, `GeminiService`, with no implementations.
- Mock deck seed data lives in `src/data/mockDeck.ts`, clearly labelled and never presented as device data.
- Global error boundary plus a toast surface for friendly messages; missing hardware can never crash the app.
- PWA: web app manifest with icons and theme colour so the app is installable. No service worker/offline caching in this phase (it causes stale previews); can be added later on request.

## Out of scope this phase

Bluetooth, Flipper communication, Gemini API, file transfer, screen streaming, signal capture. Work stops after this foundation.
