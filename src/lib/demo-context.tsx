"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

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

export type SceneKey = "hero" | "cmd" | "how" | "ch" | "org" | "sys";
export type FitKey = "hero" | "how" | "ch" | "sys";
export type Phase = "p0" | "p1";

const FIXED_DURATIONS: Record<"hero" | "cmd" | "org", number> = {
  hero: 15000,
  cmd: 15000,
  org: 15000,
};

const LIST_DURATIONS: Record<"how" | "ch" | "sys", readonly number[]> = {
  how: [8000, 8500, 7500],
  ch: [9000, 9500, 7000, 7000, 8000, 8000],
  sys: [13500, 8000, 9500, 8000, 8500],
};

const HOW_ADVANCE_MS = 6500;

interface DemoContextValue {
  phases: Record<SceneKey, Phase>;
  paused: Record<SceneKey, boolean>;
  howIndex: number;
  howAuto: boolean;
  chIndex: number;
  sysIndex: number;
  faqIndex: number | null;
  selectHow: (index: number) => void;
  selectCh: (index: number) => void;
  selectSys: (index: number) => void;
  toggleFaq: (index: number) => void;
  registerScene: (key: SceneKey, el: HTMLElement | null) => void;
  registerFit: (key: FitKey, el: HTMLElement | null, designWidth: number) => void;
}

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [phases, setPhases] = useState<Record<SceneKey, Phase>>({
    hero: "p0",
    cmd: "p0",
    how: "p0",
    ch: "p0",
    org: "p0",
    sys: "p0",
  });
  const [paused, setPaused] = useState<Record<SceneKey, boolean>>({
    hero: false,
    cmd: false,
    how: false,
    ch: false,
    org: false,
    sys: false,
  });
  const [howIndex, setHowIndex] = useState(0);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const [howAutoState, setHowAutoState] = useState(true);
  const howAuto = howAutoState && !reducedMotion;
  const [chIndex, setChIndex] = useState(0);
  const [sysIndex, setSysIndex] = useState(0);
  const [faqIndex, setFaqIndex] = useState<number | null>(null);

  const curRef = useRef({ how: 0, ch: 0, sys: 0 });
  const howManualRef = useRef(false);
  const reducedMotionRef = useRef(reducedMotion);
  useEffect(() => {
    reducedMotionRef.current = reducedMotion;
  }, [reducedMotion]);
  const elapsedRef = useRef<Partial<Record<SceneKey, number>>>({});
  const hoverRef = useRef<Partial<Record<SceneKey, boolean>>>({});
  const seenRef = useRef<Partial<Record<SceneKey, boolean>>>({});
  const howElapsedRef = useRef(0);
  const lastRef = useRef<number>(0);

  const sceneElsRef = useRef<Partial<Record<SceneKey, HTMLElement>>>({});
  const fitElsRef = useRef<
    Partial<Record<FitKey, { el: HTMLElement; width: number }>>
  >({});
  const ioRef = useRef<IntersectionObserver | null>(null);
  const roRef = useRef<ResizeObserver | null>(null);

  const restart = useCallback((k: SceneKey) => {
    setPhases((prev) => ({
      ...prev,
      [k]: prev[k] === "p1" ? "p0" : "p1",
    }));
    elapsedRef.current[k] = 0;
  }, []);

  const setHowInternal = useCallback((i: number, manual: boolean) => {
    curRef.current.how = i;
    elapsedRef.current.how = 0;
    howElapsedRef.current = 0;
    setHowIndex(i);
    if (manual) {
      howManualRef.current = true;
      setHowAutoState(false);
    }
  }, []);

  const selectHow = useCallback(
    (i: number) => {
      const same = i === curRef.current.how;
      setHowInternal(i, true);
      if (same) restart("how");
    },
    [restart, setHowInternal]
  );

  const selectCh = useCallback(
    (i: number) => {
      const same = i === curRef.current.ch;
      curRef.current.ch = i;
      elapsedRef.current.ch = 0;
      setChIndex(i);
      if (same) restart("ch");
    },
    [restart]
  );

  const selectSys = useCallback(
    (i: number) => {
      const same = i === curRef.current.sys;
      curRef.current.sys = i;
      elapsedRef.current.sys = 0;
      setSysIndex(i);
      if (same) restart("sys");
    },
    [restart]
  );

  const toggleFaq = useCallback((i: number) => {
    setFaqIndex((prev) => (prev === i ? null : i));
  }, []);

  const applyFit = useCallback((el: HTMLElement, key: FitKey, width: number) => {
    const cs = getComputedStyle(el);
    const inner =
      el.clientWidth -
      (parseFloat(cs.paddingLeft) || 0) -
      (parseFloat(cs.paddingRight) || 0);
    const z = Math.max(
      0.35,
      Math.min(1, Math.floor((inner / width) * 1000) / 1000)
    );
    const targets = document.querySelectorAll<HTMLElement>(`[data-zoom="${key}"]`);
    targets.forEach((node) => {
      (node.style as CSSStyleDeclaration & { zoom: string }).zoom = String(z);
    });
  }, []);

  useEffect(() => {
    lastRef.current = Date.now();
    const timer = window.setInterval(() => {
      const now = Date.now();
      const dt = Math.max(0, Math.min(120000, now - lastRef.current));
      lastRef.current = now;

      (Object.keys(sceneElsRef.current) as SceneKey[]).forEach((k) => {
        if (hoverRef.current[k]) return;
        const duration =
          k === "how" || k === "ch" || k === "sys"
            ? LIST_DURATIONS[k][curRef.current[k]]
            : FIXED_DURATIONS[k];
        const nextElapsed = (elapsedRef.current[k] || 0) + dt;
        elapsedRef.current[k] = nextElapsed;
        if (nextElapsed >= duration) {
          restart(k);
        }
      });

      if (!howManualRef.current && !reducedMotionRef.current && !hoverRef.current.how) {
        howElapsedRef.current += dt;
        if (howElapsedRef.current >= HOW_ADVANCE_MS) {
          setHowInternal((curRef.current.how + 1) % 3, false);
        }
      }
    }, 250);

    return () => {
      window.clearInterval(timer);
    };
  }, [restart, setHowInternal]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const k = entry.target.getAttribute("data-scene") as SceneKey | null;
          if (!k) return;
          if (entry.isIntersecting) {
            if (!seenRef.current[k]) {
              seenRef.current[k] = true;
              if (k === "how" && !howManualRef.current && !reducedMotionRef.current) {
                setHowInternal(0, false);
              }
              restart(k);
            }
          } else {
            seenRef.current[k] = false;
          }
        });
      },
      { threshold: 0.3 }
    );
    ioRef.current = io;
    Object.values(sceneElsRef.current).forEach((el) => {
      if (el) io.observe(el);
    });
    return () => {
      io.disconnect();
      ioRef.current = null;
    };
  }, [restart, setHowInternal]);

  useLayoutEffect(() => {
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const k = entry.target.getAttribute("data-fit") as FitKey | null;
          const w = parseFloat(entry.target.getAttribute("data-fit-w") || "1") || 1;
          if (k) {
            applyFit(entry.target as HTMLElement, k, w);
          }
        });
      });
      roRef.current = ro;
      (Object.keys(fitElsRef.current) as FitKey[]).forEach((k) => {
        const entry = fitElsRef.current[k];
        if (entry) {
          applyFit(entry.el, k, entry.width);
          ro.observe(entry.el);
        }
      });
      return () => {
        ro.disconnect();
        roRef.current = null;
      };
    }

    const onResize = () => {
      (Object.keys(fitElsRef.current) as FitKey[]).forEach((k) => {
        const entry = fitElsRef.current[k];
        if (entry) applyFit(entry.el, k, entry.width);
      });
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [applyFit]);

  const cleanupMapRef = useRef<Partial<Record<SceneKey, () => void>>>({});

  const registerScene = useCallback((key: SceneKey, el: HTMLElement | null) => {
    const prevCleanup = cleanupMapRef.current[key];
    if (prevCleanup) {
      prevCleanup();
      delete cleanupMapRef.current[key];
    }
    if (!el) {
      delete sceneElsRef.current[key];
      return;
    }
    sceneElsRef.current[key] = el;
    const onEnter = () => {
      hoverRef.current[key] = true;
      setPaused((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
    };
    const onLeave = () => {
      hoverRef.current[key] = false;
      setPaused((prev) => (!prev[key] ? prev : { ...prev, [key]: false }));
    };
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    if (ioRef.current) {
      ioRef.current.observe(el);
    }
    cleanupMapRef.current[key] = () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      if (ioRef.current) ioRef.current.unobserve(el);
    };
  }, []);

  const registerFit = useCallback(
    (key: FitKey, el: HTMLElement | null, designWidth: number) => {
      const prev = fitElsRef.current[key];
      if (prev && roRef.current) {
        roRef.current.unobserve(prev.el);
      }
      if (!el) {
        delete fitElsRef.current[key];
        return;
      }
      fitElsRef.current[key] = { el, width: designWidth };
      applyFit(el, key, designWidth);
      if (roRef.current) {
        roRef.current.observe(el);
      }
    },
    [applyFit]
  );

  const value = useMemo<DemoContextValue>(
    () => ({
      phases,
      paused,
      howIndex,
      howAuto,
      chIndex,
      sysIndex,
      faqIndex,
      selectHow,
      selectCh,
      selectSys,
      toggleFaq,
      registerScene,
      registerFit,
    }),
    [
      phases,
      paused,
      howIndex,
      howAuto,
      chIndex,
      sysIndex,
      faqIndex,
      selectHow,
      selectCh,
      selectSys,
      toggleFaq,
      registerScene,
      registerFit,
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
