"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

interface DemoContextValue {
  hiw: number;
  hiwAuto: boolean;
  hiwRun: number;
  ch: number;
  sys: number;
  faq: number;
  reducedMotion: boolean;
  pickHiw: (index: number) => void;
  pickCh: (index: number) => void;
  pickSys: (index: number) => void;
  pickFaq: (index: number) => void;
  registerLiveStage: (el: HTMLElement | null) => void;
}

const DemoContext = createContext<DemoContextValue | null>(null);

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [hiw, setHiw] = useState(0);
  const [hiwAutoState, setHiwAutoState] = useState(true);
  const [hiwRun, setHiwRun] = useState(0);
  const [ch, setCh] = useState(0);
  const [sys, setSys] = useState(0);
  const [faq, setFaq] = useState(-1);

  const hiwAuto = hiwAutoState && !reducedMotion;

  const liveElsRef = useRef<Set<HTMLElement>>(new Set());
  const ioRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!hiwAuto) return;
    const timer = window.setInterval(() => {
      setHiw((prev) => (prev + 1) % 3);
      setHiwRun((r) => r + 1);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [hiwAuto]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-offscreen", !entry.isIntersecting);
        });
      },
      { threshold: 0.05 }
    );
    ioRef.current = io;
    liveElsRef.current.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      ioRef.current = null;
    };
  }, []);

  const registerLiveStage = useCallback((el: HTMLElement | null) => {
    if (!el) return;
    if (!liveElsRef.current.has(el)) {
      liveElsRef.current.add(el);
      if (ioRef.current) ioRef.current.observe(el);
    }
  }, []);

  const pickHiw = useCallback((index: number) => {
    setHiw(index);
    setHiwAutoState(false);
    setHiwRun((r) => r + 1);
  }, []);

  const pickCh = useCallback((index: number) => {
    setCh(index);
  }, []);

  const pickSys = useCallback((index: number) => {
    setSys(index);
  }, []);

  const pickFaq = useCallback((index: number) => {
    setFaq((prev) => (prev === index ? -1 : index));
  }, []);

  const value = useMemo<DemoContextValue>(
    () => ({
      hiw,
      hiwAuto,
      hiwRun,
      ch,
      sys,
      faq,
      reducedMotion,
      pickHiw,
      pickCh,
      pickSys,
      pickFaq,
      registerLiveStage,
    }),
    [
      hiw,
      hiwAuto,
      hiwRun,
      ch,
      sys,
      faq,
      reducedMotion,
      pickHiw,
      pickCh,
      pickSys,
      pickFaq,
      registerLiveStage,
    ]
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemoRuntime(): DemoContextValue {
  const ctx = useContext(DemoContext);
  if (!ctx) {
    throw new Error("useDemoRuntime must be used inside DemoProvider");
  }
  return ctx;
}
