import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  prompt: z.string().min(1).max(4000),
  scriptType: z.enum(["duckyscript", "flipper-js"]),
});

const DUCKY_SYSTEM =
  "You are a Hak5 DuckyScript 1.0 expert writing optimized payloads for the Flipper Zero USB BadUSB app. Output strictly raw DuckyScript code only. No markdown, no code fences, no commentary, no explanations.";

const FLIPPER_JS_SYSTEM =
  "You are an expert Flipper Zero QuickJS developer targeting Momentum firmware. Use the module system with require() for available modules: badusb, storage, gui, subghz, event_loop, gpio, infrared, notification. Scripts must use a proper event loop (eventLoop.run()) when interacting with GUI or async events. Output strictly raw JavaScript code only. No markdown, no code fences, no commentary, no explanations.";

function stripFences(text: string): string {
  let out = text.trim();
  // Strip a leading ```lang and trailing ``` if the whole thing is fenced.
  const fence = /^```[a-zA-Z0-9_-]*\n([\s\S]*?)\n```$/;
  const m = out.match(fence);
  if (m) out = m[1];
  return out.trim();
}

export const generatePayload = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const key = process.env["GEMINI_API_KEY"];
    if (!key) {
      return {
        script: null as string | null,
        scriptType: data.scriptType,
        error: "GEMINI_API_KEY is not configured on the server.",
      };
    }

    const systemInstruction =
      data.scriptType === "duckyscript" ? DUCKY_SYSTEM : FLIPPER_JS_SYSTEM;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(
      key,
    )}`;

    let res: Response;
    try {
      res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemInstruction }] },
          contents: [{ role: "user", parts: [{ text: data.prompt }] }],
        }),
      });
    } catch {
      return {
        script: null as string | null,
        scriptType: data.scriptType,
        error: "Failed to reach Gemini.",
      };
    }

    if (!res.ok) {
      return {
        script: null as string | null,
        scriptType: data.scriptType,
        error: `Gemini request failed (${res.status})`,
      };
    }

    const payload = (await res.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };
    const text = payload.candidates?.[0]?.content?.parts
      ?.map((p) => p.text ?? "")
      .join("")
      .trim();

    if (!text) {
      return {
        script: null as string | null,
        scriptType: data.scriptType,
        error: "Gemini returned an empty response.",
      };
    }

    return {
      script: stripFences(text),
      scriptType: data.scriptType,
      error: null as string | null,
    };
  });
