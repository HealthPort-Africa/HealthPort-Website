"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";
import "./motion.css";

/** Ease desktop wheel input on the native document, preserving sticky layouts. */
export function SmoothScroll() {
  const pathname = usePathname();
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(pointer: fine)");
    let instance: Lenis | undefined;
    let disposed = false;
    let generation = 0;
    const configure = async () => {
      const current = ++generation;
      instance?.destroy();
      instance = undefined;
      if (reduced.matches || !desktop.matches) return;
      const { default: LenisScroll } = await import("lenis");
      if (disposed || current !== generation) return;
      instance = new LenisScroll({
        autoRaf: true,
        smoothWheel: true,
        syncTouch: false,
        lerp: 0.13,
        anchors: { offset: -88 },
        prevent: node => Boolean(node.closest("[data-lenis-prevent], textarea, select, [role='dialog']")),
      });
    };
    void configure();
    reduced.addEventListener("change", configure);
    desktop.addEventListener("change", configure);
    return () => {
      disposed = true;
      ++generation;
      instance?.destroy();
      reduced.removeEventListener("change", configure);
      desktop.removeEventListener("change", configure);
    };
  }, [pathname]);
  return null;
}
