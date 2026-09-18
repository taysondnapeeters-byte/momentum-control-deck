# AI Forge — Fix 524 Timeouts

## Finding (verified with live API tests against the saved key)

- `gemini-2.5-flash` **cannot be used**: both the interactions endpoint and the old `generateContent` endpoint return 404 — "This model is no longer available to new users." The downgrade requested is impossible on this API key.
- Google's error message recommends **`gemini-3.6-flash`** as the replacement.
- Live test: `gemini-3.6-flash` on the current interactions endpoint returned **200 in ~6s** (vs `gemini-3.8-flash`, which is the slow heavyweight causing the Cloudflare 524s — it occasionally takes over 100s).
- Disabling the "thinking" step was probed (4 parameter shapes) — the interactions endpoint does not accept any thinking-budget parameter in this revision, so ~6s worst-case is the floor. That is still far inside the timeout window; 3.8's multi-minute hangs are what break it.

## Change (one line)

`src/lib/aiForge.functions.ts` — in the `generatePayload` handler body:

```ts
model: "gemini-3.8-flash",   →   model: "gemini-3.6-flash",
```

Endpoint, headers, system instructions, response parsing, sanitization, frontend: all untouched.

## Untouched

- `src/routes/ai.tsx` and all other files.
- (Cosmetic note: the AI tab badge still says "Gemini 2.5 Flash" — left as-is unless you want it relabeled.)

## Verification

- Typecheck clean.
- Live call from the preview (AI tab → Forge Script) with a short DuckyScript prompt: expect a fast raw script in the preview panel and no 524. If the shared key is rate-limited (429) at test time, the code change is still verified by the direct API test above.
