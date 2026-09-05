"use client";

import { useEffect } from "react";

/**
 * StatReveal — per-item variant of the "fade-up on reveal" motion allowed by
 * CLAUDE.md, applied to numbered / stat cards inside a panel. Each
 * [data-stat-reveal] fades up and settles from a 96% scale, 80ms staggered
 * within its [data-stat-group] group. Once, IntersectionObserver-driven, no
 * scroll library, respects prefers-reduced-motion.
 *
 * Applied to OxygenGap's Tea Green fact panel. Semantically the same
 * "sections fade-up" motion, scoped to items rather than sections — the
 * scale is the "fun" the copy asked for and stays subtle enough to not read
 * as decoration.
 */
export function StatReveal() {
  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>("[data-stat-reveal]")
    );
    if (items.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    // Group items by nearest [data-stat-group] so stagger resets per group.
    const groups = new Map<HTMLElement, HTMLElement[]>();
    items.forEach((el) => {
      const container =
        el.closest<HTMLElement>("[data-stat-group]") || document.body;
      if (!groups.has(container)) groups.set(container, []);
      groups.get(container)!.push(el);
    });

    items.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(14px) scale(0.96)";
      el.style.transition =
        "opacity 480ms cubic-bezier(0.22,1,0.36,1), transform 480ms cubic-bezier(0.22,1,0.36,1)";
      el.style.willChange = "opacity, transform";
    });

    const revealedByGroup = new WeakMap<HTMLElement, Set<HTMLElement>>();
    groups.forEach((_, g) => revealedByGroup.set(g, new Set()));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const container =
            el.closest<HTMLElement>("[data-stat-group]") || document.body;
          const groupItems = groups.get(container) || [];
          const revealed = revealedByGroup.get(container) || new Set();
          const idx = groupItems.indexOf(el);
          const stagger = Math.max(
            0,
            (idx - (groupItems.length - Math.min(groupItems.length, revealed.size + 1))) * 80
          );

          window.setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0) scale(1)";
            window.setTimeout(() => {
              el.style.willChange = "";
            }, 520);
          }, stagger);

          revealed.add(el);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
