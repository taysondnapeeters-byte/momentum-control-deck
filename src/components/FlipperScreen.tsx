import { useEffect, useRef } from "react";

import { decodeFramebuffer, SCREEN_HEIGHT, SCREEN_WIDTH } from "@/services/flipperScreen";
import type { LatestFrame } from "@/hooks/useScreenStream";

/**
 * The live Flipper display.
 *
 * A real canvas at the device resolution (128x64), scaled with CSS and drawn
 * without smoothing so pixels stay square. Frames are pulled from a ref inside
 * a requestAnimationFrame loop — they never pass through React state.
 *
 * Momentum's ScreenFrame carries bg_color/fg_color, but those values also
 * encode Momentum-specific colour modes that cannot be mapped with confidence,
 * so rendering stays monochrome rather than inventing an interpretation.
 */

/** Classic Flipper display colours. */
const BACKGROUND = "#ff8200";
const FOREGROUND = "#0a0a0a";

export function FlipperScreen({
  latestRef,
  onError,
}: {
  latestRef: React.MutableRefObject<LatestFrame | null>;
  onError?: (message: string) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    let raf = 0;
    let renderedSeq = -1;
    let imageData: ImageData | null = null;

    const paint = () => {
      raf = requestAnimationFrame(paint);
      const latest = latestRef.current;
      if (!latest || latest.seq === renderedSeq) return;
      renderedSeq = latest.seq;
      // Consuming the frame lets the stream count genuinely dropped frames.
      latestRef.current = null;

      let decoded;
      try {
        decoded = decodeFramebuffer(latest.frame.data, latest.frame.orientation);
      } catch (error) {
        onError?.(error instanceof Error ? error.message : "Unreadable frame.");
        return;
      }

      if (canvas.width !== decoded.width || canvas.height !== decoded.height) {
        canvas.width = decoded.width;
        canvas.height = decoded.height;
        ctx.imageSmoothingEnabled = false;
        imageData = null;
      }
      if (!imageData || imageData.width !== decoded.width) {
        imageData = ctx.createImageData(decoded.width, decoded.height);
      }

      const out = imageData.data;
      for (let i = 0; i < decoded.pixels.length; i += 1) {
        const lit = decoded.pixels[i] === 1;
        const o = i * 4;
        out[o] = lit ? 0x0a : 0xff;
        out[o + 1] = lit ? 0x0a : 0x82;
        out[o + 2] = lit ? 0x0a : 0x00;
        out[o + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    raf = requestAnimationFrame(paint);
    return () => cancelAnimationFrame(raf);
  }, [latestRef, onError]);

  return (
    <div
      className="rounded-xl border border-border bg-background p-2"
      style={{ boxShadow: "inset 0 0 24px rgba(0,0,0,0.5)" }}
    >
      <canvas
        ref={canvasRef}
        width={SCREEN_WIDTH}
        height={SCREEN_HEIGHT}
        aria-label="Live Flipper display"
        className="block w-full rounded-md"
        style={{
          imageRendering: "pixelated",
          aspectRatio: `${SCREEN_WIDTH} / ${SCREEN_HEIGHT}`,
          backgroundColor: BACKGROUND,
          color: FOREGROUND,
        }}
      />
    </div>
  );
}
