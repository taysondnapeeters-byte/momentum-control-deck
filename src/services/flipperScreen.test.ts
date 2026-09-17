import { describe, expect, it } from "vitest";

import {
  FRAMEBUFFER_BYTES,
  FramebufferSizeError,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  decodeFramebuffer,
  expandFramebuffer,
} from "./flipperScreen";

function emptyFrame(): Uint8Array {
  return new Uint8Array(FRAMEBUFFER_BYTES);
}

function setPixel(data: Uint8Array, x: number, y: number): void {
  const index = (y >> 3) * SCREEN_WIDTH + x;
  data[index] = (data[index] as number) | (1 << (y & 7));
}

describe("expandFramebuffer", () => {
  it("rejects a payload that is not a full frame", () => {
    expect(() => expandFramebuffer(new Uint8Array(512))).toThrow(FramebufferSizeError);
  });

  it("maps bit 0 of page 0 to the top-left pixel", () => {
    const data = emptyFrame();
    data[0] = 0b0000_0001;
    const pixels = expandFramebuffer(data);
    expect(pixels[0]).toBe(1);
    expect(pixels[SCREEN_WIDTH]).toBe(0);
  });

  it("maps bit 7 of page 7 to the bottom-right pixel", () => {
    const data = emptyFrame();
    data[FRAMEBUFFER_BYTES - 1] = 0b1000_0000;
    const pixels = expandFramebuffer(data);
    expect(pixels[SCREEN_WIDTH * SCREEN_HEIGHT - 1]).toBe(1);
  });

  it("round-trips arbitrary pixels", () => {
    const data = emptyFrame();
    const points: [number, number][] = [
      [0, 0],
      [3, 9],
      [127, 63],
      [64, 32],
    ];
    for (const [x, y] of points) setPixel(data, x, y);
    const pixels = expandFramebuffer(data);
    for (const [x, y] of points) expect(pixels[y * SCREEN_WIDTH + x]).toBe(1);
    expect(pixels.reduce((sum, value) => sum + value, 0)).toBe(points.length);
  });
});

describe("decodeFramebuffer orientation", () => {
  const data = emptyFrame();
  setPixel(data, 0, 0);

  it("keeps horizontal untouched", () => {
    const frame = decodeFramebuffer(data, "horizontal");
    expect([frame.width, frame.height]).toEqual([128, 64]);
    expect(frame.pixels[0]).toBe(1);
  });

  it("rotates horizontal_flip by 180 degrees", () => {
    const frame = decodeFramebuffer(data, "horizontal_flip");
    expect(frame.pixels[SCREEN_WIDTH * SCREEN_HEIGHT - 1]).toBe(1);
  });

  it("swaps axes for vertical", () => {
    const frame = decodeFramebuffer(data, "vertical");
    expect([frame.width, frame.height]).toEqual([64, 128]);
    // 90 degrees clockwise: (0,0) becomes (width - 1, 0).
    expect(frame.pixels[frame.width - 1]).toBe(1);
  });

  it("swaps axes for vertical_flip", () => {
    const frame = decodeFramebuffer(data, "vertical_flip");
    expect([frame.width, frame.height]).toEqual([64, 128]);
    // 270 degrees: (0,0) becomes (0, height - 1).
    expect(frame.pixels[(frame.height - 1) * frame.width]).toBe(1);
  });
});
