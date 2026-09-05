"use client";

import { useEffect } from "react";

/**
 * ProcessTeaserSync — as the reader scrolls through the OaaS process
 * teaser's stage cards, the active card swaps to Violet and the sticky
 * panel's matching stage fades in. IntersectionObserver on each
 * [data-process-stage] with a middle-of-viewport threshold; the stage whose
 * midpoint is closest to viewport center wins.
 *
 * Respects prefers-reduced-motion: leaves the initial stage active.
 */
export function ProcessTeaserSync() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-process-root]");
    if (!root) return;

    const stages = Array.from(
      root.querySelectorAll<HTMLElement>("[data-process-stage]")
    );
    const panelStages = Array.from(
      root.querySelectorAll<HTMLElement>("[data-process-panel-stage]")
    );
    if (stages.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const setActive = (key: string) => {
      stages.forEach((s) => {
        const k = s.dataset.processStage;
        if (k === key) {
          s.dataset.active = "true";
          s.style.background = "var(--color-violet)";
          s.style.color = "var(--color-parchment)";
          s.style.border = "1px solid transparent";
          const eyebrow = s.querySelector<HTMLElement>(".eyebrow");
          if (eyebrow) eyebrow.style.color = "rgba(242,239,234,0.75)";
          const h3 = s.querySelector("h3") as HTMLElement | null;
          if (h3) h3.style.color = "var(--color-parchment)";
          const p = s.querySelector("p") as HTMLElement | null;
          if (p) p.style.color = "rgba(242,239,234,0.85)";
        } else {
          delete s.dataset.active;
          s.style.background = "var(--color-surface)";
          s.style.color = "var(--color-fg)";
          s.style.border = "1px solid var(--color-keyline)";
          const eyebrow = s.querySelector<HTMLElement>(".eyebrow");
          if (eyebrow) eyebrow.style.color = "var(--color-muted)";
          const h3 = s.querySelector("h3") as HTMLElement | null;
          if (h3) h3.style.color = "var(--color-heading)";
          const p = s.querySelector("p") as HTMLElement | null;
          if (p) p.style.color = "var(--color-muted)";
        }
      });
      panelStages.forEach((p) => {
        p.style.opacity = p.dataset.processPanelStage === key ? "1" : "0";
      });
    };

    let raf = 0;
    let queued = false;

    const pick = () => {
      queued = false;
      const winH = window.innerHeight;
      const mid = winH * 0.45;
      let best: { key: string; d: number } | null = null;
      stages.forEach((s) => {
        const r = s.getBoundingClientRect();
        const stageMid = r.top + r.height / 2;
        const d = Math.abs(stageMid - mid);
        const key = s.dataset.processStage!;
        if (!best || d < best.d) best = { key, d };
      });
      if (best) setActive((best as { key: string; d: number }).key);
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      raf = window.requestAnimationFrame(pick);
    };

    pick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
