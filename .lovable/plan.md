# AI Forge — Gemini 3.8 Flash via the Interactions Endpoint

Update the Gemini call in `src/lib/aiForge.functions.ts` to the new interactions endpoint and API-key header format, since the old `generateContent` URL now returns 404. Only the server-function handler changes; no other file is touched.

## Handler changes (`generatePayload`)

1. **URL** — `POST https://generativelanguage.googleapis.com/v1beta/interactions` (no `?key=` query parameter).
2. **Headers**
   ```ts
   headers: {
     "Content-Type": "application/json",
     "x-goog-api-key": key,             // process.env["GEMINI_API_KEY"], already read inside the handler
     "Api-Revision": "2026-05-20",
   }
   ```
3. **Body** — system instruction and user prompt combined into a single `input` string, targeting `gemini-3.8-flash`:
   ```ts
   body: JSON.stringify({
     model: "gemini-3.8-flash",
     input: `${systemInstruction}\n\nUser request: ${data.prompt}`,
   })
   ```
   The existing per-`scriptType` system instructions (DuckyScript 1.0 / Flipper JS QuickJS with "raw code only, no markdown") stay as-is and are folded into the combined string.
4. **Response parsing** — the endpoint returns the generated text in `outputText`. Parse defensively across both documented shapes:
   ```ts
   const text = (data.outputText ?? data.interaction?.outputText ?? "").trim();
   ```
   Empty result keeps the existing `"Gemini returned an empty response."` error. Non-2xx keeps `Gemini request failed (<status>)` — never leaking the provider body.
5. Keep `stripFences()` unchanged and apply it to the extracted text, exactly as before.
6. Keep the existing zod input validation, `{ script, scriptType, error }` return shape, and error handling untouched.

## Untouched

- `src/routes/ai.tsx` and the entire frontend.
- Virtual Flipper, `flipperRpc.ts`, BLE/RPC/screen-stream logic.
- The `GEMINI_API_KEY` secret (already saved server-side; value never reaches the browser).

## Verification

- Typecheck clean.
- Dev-server check: call the server function from the preview (AI tab → Forge Script) with a tiny DuckyScript prompt and confirm a raw script renders in the preview panel; confirm the 404 is gone. If the endpoint rejects a detail of the new format (status 4xx), report the exact status and stop rather than probing variations.
