"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import oxygenValve from "../../../public/images/oxygen-valve.png";

const points = [
  {
    title: "Limited visibility",
    body: "Care teams need to know how much oxygen is available where care actually happens.",
  },
  {
    title: "Delayed refills",
    body: "An empty cylinder means waiting for a refill to reach the ward that needs it.",
  },
  {
    title: "The last mile",
    body: "Supply upstream only helps when coordination and delivery carry it all the way to the bedside.",
  },
];

export function OxygenGap() {
  const composition = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = composition.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const animations: Animation[] = [];
    const tankMotion = el.querySelector<HTMLElement>("[data-gap-depth]");
    const textMotion = Array.from(el.querySelectorAll<HTMLElement>("[data-gap-drift]"));
    const desktop = window.matchMedia("(min-width: 1024px)");
    let frame = 0;
    const updateDepth = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      // Scaling from the bottom keeps the cylinder shoulder on the section boundary.
      if (tankMotion) tankMotion.style.transform = desktop.matches ? `scale(${1 + progress * 0.045})` : "";
      textMotion.forEach((point, index) => {
        point.style.transform = desktop.matches ? `translateY(${(0.5 - progress) * (index ? 24 : 16)}px)` : "";
      });
    };
    const scheduleDepth = () => { if (!frame) frame = requestAnimationFrame(updateDepth); };
    window.addEventListener("scroll", scheduleDepth, { passive: true });
    window.addEventListener("resize", scheduleDepth);
    scheduleDepth();
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const tank = el.querySelector<HTMLElement>("[data-gap-tank]");
      if (tank) animations.push(tank.animate(
        [{ opacity: 0, transform: "translateY(56px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 1000, easing: "cubic-bezier(0.22,1,0.36,1)", fill: "backwards" }
      ));
      el.querySelectorAll<HTMLElement>("[data-gap-copy]").forEach((point, index) => {
        animations.push(point.animate(
          [{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 650, delay: 280 + index * 100, easing: "cubic-bezier(0.22,1,0.36,1)", fill: "backwards" }
        ));
      });
      observer.disconnect();
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      window.removeEventListener("scroll", scheduleDepth);
      window.removeEventListener("resize", scheduleDepth);
      cancelAnimationFrame(frame);
      if (tankMotion) tankMotion.style.transform = "";
      textMotion.forEach(point => { point.style.transform = ""; });
    };
  }, []);

  return (
    <section
      id="oxygen-gap"
      className="oxygen-gap-section relative w-full overflow-hidden"
      aria-label="The oxygen access gap"
      style={{ paddingTop: "clamp(3rem, 5vw, 5rem)" }}
    >
      <div className="container-page">
        <header className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3" style={{ color: "var(--color-muted)" }}>The problem</p>
          <h2 className="mb-5" style={{
            fontSize: "clamp(2.5rem, 1.2rem + 4.5vw, 4.5rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            fontWeight: 600,
          }}>
            The oxygen<br />
            <span style={{ color: "var(--color-coral)" }}>access gap.</span>
          </h2>
          <p className="mx-auto max-w-xl" style={{ fontSize: "18px", lineHeight: 1.55, color: "var(--color-muted)" }}>
            The gap is between oxygen being available and oxygen reaching the patient who needs it.
          </p>
        </header>

        <div ref={composition} className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_minmax(280px,360px)_1fr] items-center gap-8 lg:gap-12">
          <div data-gap-drift className="order-2 lg:order-1 flex flex-col gap-8 lg:gap-14 lg:items-end">
            {points.slice(0, 2).map(point => <GapPoint key={point.title} {...point} align="left-side" />)}
          </div>
          <div data-gap-tank className="oxygen-gap-tank relative order-1 lg:order-2 mx-auto w-full max-w-[360px] h-[340px] sm:h-[420px] lg:h-[500px]" aria-hidden="true">
            {/* The source has transparent space to the right. Align the valve itself,
                whose visual center sits about 19.5% across the original image. */}
            <div data-gap-depth className="absolute inset-0" style={{ transformOrigin: "50% 100%" }}>
            <Image
              src={oxygenValve}
              alt=""
              width={800}
              height={501}
              sizes="800px"
              style={{ position: "absolute", height: "100%", width: "auto", maxWidth: "none", left: "50%", bottom: "-1px", transform: "translateX(-19.5%)" }}
            />
            </div>
          </div>
          <div data-gap-drift className="order-3">
            <GapPoint {...points[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function GapPoint({ title, body, align }: { title: string; body: string; align?: "left-side" }) {
  return (
    <div data-gap-copy className={`relative max-w-xs ${align ? "lg:text-right" : ""}`}>
      <h3 className="mb-3" style={{ fontSize: "clamp(1.25rem, 1rem + 0.7vw, 1.625rem)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.15 }}>{title}</h3>
      <p style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--color-muted)" }}>{body}</p>
    </div>
  );
}
