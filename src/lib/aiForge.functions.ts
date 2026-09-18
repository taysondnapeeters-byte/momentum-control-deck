import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  prompt: z.string().min(1).max(4000),
  scriptType: z.enum(["duckyscript", "flipper-js"]),
});

type ScriptType = z.infer<typeof InputSchema>["scriptType"];

const DUCKY_SYSTEM =
  "You are a Hak5 DuckyScript 1.0 expert writing optimized payloads for the Flipper Zero USB BadUSB app. " +
  'Respond with a single JSON object of the form {"filename": "...", "script": "..."} and nothing else. ' +
  '"script" is the raw DuckyScript code only — no markdown, no code fences, no commentary. ' +
  '"filename" is a short descriptive snake_case name based on the user intent (e.g. open_notepad.txt). ' +
  "Use only lowercase letters, digits and underscores, with a .txt extension.";

const FLIPPER_JS_SYSTEM =
  "You are an expert Flipper Zero QuickJS developer targeting Momentum firmware. Use the module system with require() for available modules: badusb, storage, gui, subghz, event_loop, gpio, infrared, notification. Scripts must use a proper event loop (eventLoop.run()) when interacting with GUI or async events. " +
  'Respond with a single JSON object of the form {"filename": "...", "script": "..."} and nothing else. ' +
  '"script" is the raw JavaScript code only — no markdown, no code fences, no commentary. ' +
  '"filename" is a short descriptive snake_case name based on the user intent (e.g. blink_led.js). ' +
  "Use only lowercase letters, digits and underscores, with a .js extension.";

function stripFences(text: string): string {
  let out = text.trim();
  // Strip a leading ```lang and trailing ``` if the whole thing is fenced.
  const fence = /^```[a-zA-Z0-9_-]*\n([\s\S]*?)\n```$/;
  const m = out.match(fence);
  if (m && m[1]) out = m[1];
  return out.trim();
}

/**
 * Never trust the model's filename: lowercase snake_case only, correct
 * extension forced per script type, 40-char stem cap, ai_payload fallback.
 * The result never contains a slash, so it cannot escape the target folder.
 */
function sanitizeFilename(raw: unknown, scriptType: ScriptType): string {
  const ext = scriptType === "duckyscript" ? ".txt" : ".js";
  if (typeof raw !== "string") return `ai_payload${ext}`;
  const stem = raw
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 40);
  return `${stem || "ai_payload"}${ext}`;
}

type ForgeResult = {
  script: string | null;
  filename: string | null;
  scriptType: ScriptType;
  error: string | null;
};

function failure(scriptType: ScriptType, error: string): ForgeResult {
  return { script: null, filename: null, scriptType, error };
}

export const generatePayload = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }): Promise<ForgeResult> => {
    const key = process.env["GEMINI_API_KEY"];
    if (!key) {
      return failure(data.scriptType, "GEMINI_API_KEY is not configured on the server.");
    }

    const systemInstruction =
      data.scriptType === "duckyscript" ? DUCKY_SYSTEM : FLIPPER_JS_SYSTEM;

    const url = "https://generativelanguage.googleapis.com/v1beta/interactions";

    let res: Response;
    try {
      res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": key,
          "Api-Revision": "2026-05-20",
        },
        body: JSON.stringify({
          model: "gemini-3.8-flash",
          input: `${systemInstruction}\n\nUser request: ${data.prompt}`,
        }),
      });
    } catch {
      return failure(data.scriptType, "Failed to reach Gemini.");
    }

    if (!res.ok) {
      return failure(data.scriptType, `Gemini request failed (${res.status})`);
    }

    // Defensive parsing across the documented shapes: a top-level outputText,
    // an interaction-wrapped outputText, or the steps array where the text
    // lives in the "model_output" step's content parts.
    const payload = (await res.json()) as {
      outputText?: string;
      interaction?: { outputText?: string };
      steps?: { type?: string; content?: { text?: string }[] }[];
    };
    const fromSteps = payload.steps
      ?.filter((s) => s.type === "model_output")
      .flatMap((s) => s.content ?? [])
      .map((c) => c.text ?? "")
      .join("")
      .trim();
    const text = (
      payload.outputText ??
      payload.interaction?.outputText ??
      fromSteps ??
      ""
    ).trim();

    if (!text) {
      return failure(data.scriptType, "Gemini returned an empty response.");
    }

    // The model was asked for {"filename": "...", "script": "..."}. Parse it;
    // if it ignored the format, treat the whole reply as the script.
    const cleaned = stripFences(text);
    let script = cleaned;
    let filenameRaw: unknown = null;
    try {
      const parsed = JSON.parse(cleaned) as { filename?: unknown; script?: unknown };
      if (parsed && typeof parsed.script === "string" && parsed.script.trim()) {
        script = stripFences(parsed.script);
        filenameRaw = parsed.filename;
      }
    } catch {
      // Not JSON — keep the whole reply as the script.
    }

    return {
      script,
      filename: sanitizeFilename(filenameRaw, data.scriptType),
      scriptType: data.scriptType,
      error: null,
    };
  });
