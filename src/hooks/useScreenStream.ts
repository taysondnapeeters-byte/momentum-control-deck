/**
 * Virtual Flipper stream lifecycle.
 *
 * Consumes the existing RPC service (which owns the single BLE transport and
 * the single protobuf implementation). Frames never enter React state: the
 * newest frame is kept in a ref and the canvas renders it from a rAF loop, so
 * a fast stream can never flood React.
 */

import { useCallback, useEffect, useRef, useState } from "react";

import { useAppState } from "@/state/AppStateProvider";
import { getFlipperRpc } from "@/services/flipperRpc";
import { createMockFramebuffer, MOCK_MENU_ROWS } from "@/services/flipperScreenMock";
import type { FlipperInputKey, ScreenFrameEvent } from "@/services";

const rpc = getFlipperRpc();

export type StreamStatus = "inactive" | "starting" | "active" | "stopping" | "error";

export interface StreamStats {
  frames: number;
  dropped: number;
  lastSize: number | null;
  lastAt: number | null;
  fps: number;
}

export interface LatestFrame {
  frame: ScreenFrameEvent;
  seq: number;
}

const EMPTY_STATS: StreamStats = { frames: 0, dropped: 0, lastSize: null, lastAt: null, fps: 0 };
const MOCK_FRAME_MS = 100;

export function useScreenStream() {
  const { settings, connection } = useAppState();
  const mockActive = settings.mockMode && connection !== "connected";

  const [status, setStatus] = useState<StreamStatus>("inactive");
  const [error, setError] = useState<string | null>(null);
  const [inputError, setInputError] = useState<string | null>(null);
  const [stats, setStats] = useState<StreamStats>(EMPTY_STATS);

  const latestRef = useRef<LatestFrame | null>(null);
  const seqRef = useRef(0);
  const countsRef = useRef({ frames: 0, dropped: 0, lastSize: 0, lastAt: 0, window: 0 });
  const unsubscribeRef = useRef<(() => void) | null>(null);
  const mockTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mockStateRef = useRef({ tick: 0, selection: 0, pressed: null as string | null });
  const heldRef = useRef(new Set<FlipperInputKey>());
  const statusRef = useRef<StreamStatus>("inactive");

  statusRef.current = status;

  const pushFrame = useCallback((frame: ScreenFrameEvent) => {
    const counts = countsRef.current;
    // Latest-frame strategy: an unrendered frame is simply replaced.
    if (latestRef.current) counts.dropped += 1;
    seqRef.current += 1;
    latestRef.current = { frame, seq: seqRef.current };
    counts.frames += 1;
    counts.window += 1;
    counts.lastSize = frame.data.length;
    counts.lastAt = frame.at;
  }, []);

  /** Diagnostics tick — never per frame. */
  useEffect(() => {
    const id = setInterval(() => {
      const counts = countsRef.current;
      const fps = counts.window * 2;
      counts.window = 0;
      setStats({
        frames: counts.frames,
        dropped: counts.dropped,
        lastSize: counts.lastSize || null,
        lastAt: counts.lastAt || null,
        fps,
      });
    }, 500);
    return () => clearInterval(id);
  }, []);

  const detach = useCallback(() => {
    unsubscribeRef.current?.();
    unsubscribeRef.current = null;
    if (mockTimerRef.current) clearInterval(mockTimerRef.current);
    mockTimerRef.current = null;
    heldRef.current.clear();
  }, []);

  const startMock = useCallback(() => {
    mockTimerRef.current = setInterval(() => {
      const state = mockStateRef.current;
      state.tick += 1;
      pushFrame({
        data: createMockFramebuffer(state),
        orientation: "horizontal",
        bgColor: 0,
        fgColor: 0,
        at: Date.now(),
      });
    }, MOCK_FRAME_MS);
  }, [pushFrame]);

  const start = useCallback(async () => {
    if (statusRef.current === "starting" || statusRef.current === "active") return;
    setError(null);
    setInputError(null);
    countsRef.current = { frames: 0, dropped: 0, lastSize: 0, lastAt: 0, window: 0 };
    setStats(EMPTY_STATS);
    setStatus("starting");

    if (mockActive) {
      startMock();
      setStatus("active");
      return;
    }

    if (connection !== "connected" || !rpc.isReady()) {
      setStatus("error");
      setError("The Flipper is not connected. Connect on the Device page first.");
      return;
    }

    const result = await rpc.startScreenStream();
    if (!result.ok) {
      setStatus("error");
      setError(result.error ?? "The Flipper refused to start the screen stream.");
      return;
    }
    // Subscribe only after the start response, so no duplicate listeners exist.
    unsubscribeRef.current?.();
    unsubscribeRef.current = rpc.onScreenFrame(pushFrame);
    setStatus("active");
  }, [connection, mockActive, pushFrame, startMock]);

  const stop = useCallback(async () => {
    if (statusRef.current === "inactive" || statusRef.current === "stopping") {
      detach();
      return;
    }
    const wasLive = !mockActive && connection === "connected" && rpc.isReady();
    setStatus("stopping");
    detach();
    if (wasLive) {
      const result = await rpc.stopScreenStream();
      if (!result.ok) setError(result.error ?? "The Flipper did not confirm the stop request.");
    }
    latestRef.current = null;
    setStatus("inactive");
  }, [connection, detach, mockActive]);

  /**
   * One gesture per control: PRESS on down, then SHORT + RELEASE on up.
   * Sends are serialized so SHORT reaches the wire before RELEASE.
   */
  const sendQueueRef = useRef<Promise<void>>(Promise.resolve());
  const sendKey = useCallback(
    async (key: FlipperInputKey, action: "press" | "release" | "short") => {
      if (action === "press") {
        if (heldRef.current.has(key)) return;
        heldRef.current.add(key);
      } else if (action === "release") {
        if (!heldRef.current.has(key)) return;
        heldRef.current.delete(key);
      }
      // "short" touches nothing: it is always bracketed by PRESS and RELEASE.

      if (mockActive) {
        // The simulated display already reacted to the press; SHORT is a no-op.
        if (action === "short") return;
        const state = mockStateRef.current;
        state.pressed = action === "press" ? key : null;
        if (action === "press") {
          if (key === "down") state.selection = (state.selection + 1) % MOCK_MENU_ROWS;
          if (key === "up") state.selection = (state.selection + MOCK_MENU_ROWS - 1) % MOCK_MENU_ROWS;
          if (key === "ok" || key === "right") state.tick += 8;
          if (key === "back" || key === "left") state.selection = 0;
        }
        return;
      }

      if (connection !== "connected" || !rpc.isReady()) {
        setInputError("Not connected — the input was not sent.");
        return;
      }
      const send = async () => {
        const result = await rpc.sendInputEvent(key, action);
        setInputError(result.ok ? null : (result.error ?? `Input ${key} ${action} failed.`));
      };
      const queued = sendQueueRef.current.then(send, send);
      sendQueueRef.current = queued.catch(() => {});
      await queued;
    },
    [connection, mockActive],
  );

  // A lost connection stops rendering immediately. No retry, no reconnect.
  useEffect(() => {
    if (connection === "connected" || mockActive) return;
    if (statusRef.current === "inactive") return;
    detach();
    latestRef.current = null;
    setStatus("inactive");
    setError("The Bluetooth connection ended, so the stream stopped.");
  }, [connection, detach, mockActive]);

  // Leaving the screen always releases listeners and stops the stream.
  useEffect(() => {
    return () => {
      const live = statusRef.current === "active" || statusRef.current === "starting";
      detach();
      if (live && !mockActive && connection === "connected" && rpc.isReady()) {
        void rpc.stopScreenStream();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { status, error, inputError, stats, latestRef, start, stop, sendKey, mockActive };
}
