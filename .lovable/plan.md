# AI Forge — Context-Aware Payload Generator

Build an "AI Forge" module that turns natural-language intent into Flipper Zero payloads (BadUSB DuckyScript or Flipper JS) via Gemini, with the API key kept strictly server-side.

## What the user sees

On the AI tab:
- A toggle: **BadUSB (DuckyScript)** / **Flipper JS**.
- A large text area for the intent (e.g. "Open Notepad and type hello").
- A **Forge Script** button with a loading state.
- A **Preview** panel: monospace code block showing the generated script.
- An **Approve & Log** button that (for now) logs the script + type to the browser console. Wiring it to the storage-write RPC comes in a later step.

Momentum visual language (dark, compact, orange accent, PageShell + Panel).

## Security model

- The Gemini API key never touches the browser.
- It is stored as the backend secret `GEMINI_API_KEY` via the secure add-secret form.
- A TanStack server function (`src/lib/aiForge.functions.ts`) reads `process.env['GEMINI_API_KEY']` inside its handler and calls Google's Generative Language API server-side. The stack runs on Cloudflare Workers, so this replaces the Supabase Edge Function from the brief while keeping the same "key stays server-side" guarantee.

## Backend — server function

File: `src/lib/aiForge.functions.ts`

- `generatePayload = createServerFn({ method: "POST" })`
- `.inputValidator` (zod): `{ prompt: string (1..4000), scriptType: "duckyscript" | "flipper-js" }`
- `.handler`:
  - Read `GEMINI_API_KEY` inside the handler; throw a clear error if missing.
  - Pick system instruction by `scriptType`:
    - **duckyscript**: "You are a Hak5 DuckyScript 1.0 expert writing optimized payloads for the Flipper Zero USB BadUSB app. Output strictly raw DuckyScript code only. No markdown, no code fences, no commentary."
    - **flipper-js**: "You are an expert Flipper Zero QuickJS developer targeting Momentum firmware. Use the module system (`require('badusb')`, `require('storage')`, `require('gui')`, `require('subghz')`, `require('event_loop')`, `require('gpio')`, `require('infrared')`, `require('notification')`). Scripts must use a proper event loop (`eventLoop.run()`) where relevant. Output strictly raw JavaScript only. No markdown, no code fences, no commentary."
  - POST to `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=…` with `system_instruction` + `contents: [{ role: "user", parts: [{ text: prompt }] }]`.
  - Return `{ script: string, scriptType }`. Strip a stray leading/trailing ```` ``` ```` fence defensively.
  - On non-2xx: return `{ script: null, error: "Gemini request failed (<status>)" }` — never leak the raw provider body.

## Frontend — `src/routes/ai.tsx`

Rewrite the current placeholder page:
- State: `scriptType`, `prompt`, `loading`, `result: { script, scriptType } | null`, `error`.
- Toggle group for script type (shadcn `ToggleGroup` or two buttons using existing tokens).
- `Textarea` for prompt.
- **Forge Script** button: disabled while `loading` or when prompt is empty; calls `useServerFn(generatePayload)`.
- Preview panel: `<pre>` with `font-mono` + `whitespace-pre-wrap` + border/surface tokens. Copy button (uses `navigator.clipboard`).
- **Approve & Log** button under the preview: `console.log("AI Forge approved", { scriptType, script })` and shows a sonner toast "Logged to console". Shown only when a script exists.
- If the server function returns `error`, render it inline (destructive tone). Sonner toast on network failure.
- Keep the existing "Configure Gemini" affordance out — the key now lives server-side; replace the Panel content entirely.

Update route `head()` to reflect the AI Forge purpose (title/description/OG).

## Secrets flow

Before writing code, request the secret via `add_secret` for `GEMINI_API_KEY` (format hint: `AIza…`). Explain in chat where to get it (Google AI Studio → Get API key). No placeholder value, no client exposure.

## Strict scope — do not touch

- `src/services/flipperRpc.ts`, `flipperBleTransport.ts`, `flipperScreen*`, `useScreenStream.ts`, `FlipperDpad.tsx`, `FlipperScreen.tsx`, `virtual-flipper.tsx`.
- Files, Device, Geo, Settings routes.
- BLE/RPC/screen-stream/input logic of any kind.

## Verification

- Typecheck clean.
- Playwright at 390×844: toggle both script types, submit a short prompt, see loading state, see either a rendered script preview or the inline error; **Approve & Log** produces the expected `console.log`; no console errors from unrelated pages.
- Real Gemini call verified once the secret is saved by generating a tiny DuckyScript ("Type hello") and a tiny Flipper JS ("blink LED") and reading the returned code.

## Out of scope (next step)

Wiring **Approve & Log** to `writeStorage` under `/ext/badusb/` or `/ext/apps/Scripts/` with the existing create-new-file safeguards.
