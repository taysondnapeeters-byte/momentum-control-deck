/**
 * Mock-mode framebuffer generator.
 *
 * It produces real 1024-byte Flipper framebuffers in the exact page layout the
 * firmware sends, so mock mode exercises the same decoder, canvas and render
 * loop as a live stream. Nothing here touches Bluetooth.
 */

import { FRAMEBUFFER_BYTES, SCREEN_HEIGHT, SCREEN_WIDTH } from "./flipperScreen";

export interface MockScreenState {
  /** Increments once per generated frame; drives the animation. */
  tick: number;
  /** Menu row the virtual pad has selected (0-3). */
  selection: number;
  /** Key currently held down, if any. */
  pressed: string | null;
}

export const MOCK_MENU_ROWS = 4;

function packPixels(pixels: Uint8Array): Uint8Array {
  const data = new Uint8Array(FRAMEBUFFER_BYTES);
  for (let y = 0; y < SCREEN_HEIGHT; y += 1) {
    const page = y >> 3;
    const bit = y & 7;
    for (let x = 0; x < SCREEN_WIDTH; x += 1) {
      if (pixels[y * SCREEN_WIDTH + x]) {
        const index = page * SCREEN_WIDTH + x;
        data[index] = (data[index] as number) | (1 << bit);
      }
    }
  }
  return data;
}

function fillRect(
  pixels: Uint8Array,
  x0: number,
  y0: number,
  w: number,
  h: number,
  value: 0 | 1,
): void {
  for (let y = y0; y < y0 + h; y += 1) {
    if (y < 0 || y >= SCREEN_HEIGHT) continue;
    for (let x = x0; x < x0 + w; x += 1) {
      if (x < 0 || x >= SCREEN_WIDTH) continue;
      pixels[y * SCREEN_WIDTH + x] = value;
    }
  }
}

/** Deterministic simulated screen. Same pipeline as a real frame. */
export function createMockFramebuffer(state: MockScreenState): Uint8Array {
  const pixels = new Uint8Array(SCREEN_WIDTH * SCREEN_HEIGHT);

  // Frame border.
  fillRect(pixels, 0, 0, SCREEN_WIDTH, 1, 1);
  fillRect(pixels, 0, SCREEN_HEIGHT - 1, SCREEN_WIDTH, 1, 1);
  fillRect(pixels, 0, 0, 1, SCREEN_HEIGHT, 1);
  fillRect(pixels, SCREEN_WIDTH - 1, 0, 1, SCREEN_HEIGHT, 1);

  // Title bar with a scanning marker so motion is always visible.
  fillRect(pixels, 1, 1, SCREEN_WIDTH - 2, 11, 1);
  const marker = 3 + ((state.tick * 2) % (SCREEN_WIDTH - 12));
  fillRect(pixels, marker, 3, 7, 7, 0);

  // Menu rows; the selected one is inverted.
  for (let row = 0; row < MOCK_MENU_ROWS; row += 1) {
    const top = 15 + row * 11;
    const selected = row === state.selection;
    if (selected) fillRect(pixels, 3, top - 1, SCREEN_WIDTH - 6, 10, 1);
    // Row glyph blocks.
    for (let i = 0; i < 6 + row; i += 1) {
      fillRect(pixels, 7 + i * 7, top + 2, 5, 5, selected ? 0 : 1);
    }
  }

  // Held-key indicator in the bottom-right corner.
  if (state.pressed) {
    fillRect(pixels, SCREEN_WIDTH - 12, SCREEN_HEIGHT - 10, 8, 7, 1);
  }

  return packPixels(pixels);
}
