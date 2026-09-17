/**
 * Pure Flipper framebuffer decoding. No DOM, no BLE, no React — so it can be
 * unit tested on its own.
 *
 * Momentum's GUI RPC screen stream copies the u8g2 GUI framebuffer straight
 * into `ScreenFrame.data`. That buffer is NOT a linear XBM bitmap: it is
 * organised in horizontal pages of 8 rows.
 *
 *   byte index = page * width + x,   page = y >> 3
 *   bit        = y & 7,              bit 0 = the topmost row of the page
 *
 * A set bit is a lit (foreground) pixel.
 */

import type { ScreenOrientation } from "./index";

export const SCREEN_WIDTH = 128;
export const SCREEN_HEIGHT = 64;
export const FRAMEBUFFER_BYTES = (SCREEN_WIDTH * SCREEN_HEIGHT) / 8; // 1024

export interface DecodedFrame {
  /** Width after the orientation transform. */
  width: number;
  /** Height after the orientation transform. */
  height: number;
  /** One byte per pixel: 1 = foreground, 0 = background. Row-major. */
  pixels: Uint8Array;
}

export class FramebufferSizeError extends Error {
  constructor(received: number) {
    super(
      `Unexpected framebuffer size: ${received} bytes (expected ${FRAMEBUFFER_BYTES} for ${SCREEN_WIDTH}x${SCREEN_HEIGHT}).`,
    );
    this.name = "FramebufferSizeError";
  }
}

/** Expands the raw page-organised framebuffer into 128x64 one-byte pixels. */
export function expandFramebuffer(data: Uint8Array): Uint8Array {
  if (data.length !== FRAMEBUFFER_BYTES) throw new FramebufferSizeError(data.length);
  const pixels = new Uint8Array(SCREEN_WIDTH * SCREEN_HEIGHT);
  for (let y = 0; y < SCREEN_HEIGHT; y += 1) {
    const page = y >> 3;
    const bit = y & 7;
    const rowStart = y * SCREEN_WIDTH;
    const pageStart = page * SCREEN_WIDTH;
    for (let x = 0; x < SCREEN_WIDTH; x += 1) {
      pixels[rowStart + x] = ((data[pageStart + x] as number) >> bit) & 1;
    }
  }
  return pixels;
}

/**
 * Decodes a raw frame and applies the orientation the device reported.
 * Throws `FramebufferSizeError` when the payload is not a full frame.
 */
export function decodeFramebuffer(
  data: Uint8Array,
  orientation: ScreenOrientation = "horizontal",
): DecodedFrame {
  const source = expandFramebuffer(data);

  if (orientation === "horizontal") {
    return { width: SCREEN_WIDTH, height: SCREEN_HEIGHT, pixels: source };
  }

  if (orientation === "horizontal_flip") {
    const pixels = new Uint8Array(source.length);
    for (let y = 0; y < SCREEN_HEIGHT; y += 1) {
      for (let x = 0; x < SCREEN_WIDTH; x += 1) {
        const target = (SCREEN_HEIGHT - 1 - y) * SCREEN_WIDTH + (SCREEN_WIDTH - 1 - x);
        pixels[target] = source[y * SCREEN_WIDTH + x] as number;
      }
    }
    return { width: SCREEN_WIDTH, height: SCREEN_HEIGHT, pixels };
  }

  // Both vertical modes swap the axes.
  const width = SCREEN_HEIGHT;
  const height = SCREEN_WIDTH;
  const pixels = new Uint8Array(source.length);
  for (let y = 0; y < SCREEN_HEIGHT; y += 1) {
    for (let x = 0; x < SCREEN_WIDTH; x += 1) {
      const value = source[y * SCREEN_WIDTH + x] as number;
      // vertical = 90 degrees clockwise, vertical_flip = 270 degrees.
      const tx = orientation === "vertical" ? SCREEN_HEIGHT - 1 - y : y;
      const ty = orientation === "vertical" ? x : SCREEN_WIDTH - 1 - x;
      pixels[ty * width + tx] = value;
    }
  }
  return { width, height, pixels };
}
