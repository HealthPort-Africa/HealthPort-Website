"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * WhatWeDoCarousel — cinematic Netflix-style hero carousel. Each slide has
 * a strong diagonal darken (bottom-left → top-right), a mono category tag,
 * big display-font caption, and an optional subtitle. Dot indicator sits
 * bottom-right so it stays clear of the caption block.
 *
 * Autoplay with crossfade. Pauses on hover. Reduced-motion pauses autoplay
 * (first slide stays visible; dots remain clickable).
 */
type Slide = {
  src: string;
  alt: string;
  /** Small uppercase mono tag above the caption (e.g. "AT YOUR FACILITY"). */
  tag?: string;
  /** Big display-font headline for the slide (the "what"). */
  caption?: string;
  /** Optional short subtitle below the caption (the "why it matters"). */
  subtitle?: string;
};

export function WhatWeDoCarousel({
  slides,
  intervalMs = 5200,
}: {
  slides: Slide[];
  intervalMs?: number;
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || paused) return;
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [slides.length, intervalMs, paused]);

  const s = slides[idx];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: "16 / 9",
        borderRadius: "28px",
        background: "#0b0f10",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      data-image-reveal
    >
      {/* Slide stack — crossfaded photos */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0"
          style={{
            opacity: i === idx ? 1 : 0,
            transition: "opacity 900ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <Image
            src={slide.src}
            alt={i === idx ? slide.alt : ""}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Netflix-style diagonal darken — heaviest at bottom-left where the
          caption sits, fading to clean image at top-right. */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,19,22,0.88) 0%, rgba(0,19,22,0.7) 28%, rgba(0,19,22,0.35) 55%, rgba(0,19,22,0.05) 80%, rgba(0,19,22,0) 100%)",
        }}
      />

      {/* Extra bottom-edge shadow for the dot indicator legibility on the right */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "20%",
          background:
            "linear-gradient(to top, rgba(0,19,22,0.55) 0%, rgba(0,19,22,0) 100%)",
        }}
      />

      {/* Caption block — bottom-left, cinematic */}
      <div
        key={`cap-${idx}`}
        className="absolute flex flex-col gap-3"
        style={{
          left: "clamp(24px, 4vw, 56px)",
          right: "clamp(24px, 4vw, 56px)",
          bottom: "clamp(28px, 4vw, 56px)",
          maxWidth: "38rem",
          animation:
            "billing-slide-in 620ms cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        {s?.tag && (
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              style={{
                display: "inline-block",
                width: "22px",
                height: "2px",
                background: "var(--color-teagreen)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono, ui-monospace)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-teagreen)",
              }}
            >
              {s.tag}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono, ui-monospace)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "rgba(242,239,234,0.55)",
              }}
            >
              · {String(idx + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        )}

        {s?.caption && (
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 3.4vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "var(--color-parchment)",
              margin: 0,
              textWrap: "balance",
            }}
          >
            {s.caption}
          </p>
        )}

        {s?.subtitle && (
          <p
            style={{
              fontSize: "clamp(13px, 1vw, 15px)",
              lineHeight: 1.5,
              color: "rgba(242,239,234,0.78)",
              margin: 0,
              maxWidth: "32rem",
            }}
          >
            {s.subtitle}
          </p>
        )}
      </div>

      {/* Dot indicator — bottom-right, out of the caption's way */}
      <div
        className="absolute flex items-center gap-1.5"
        style={{
          right: "clamp(20px, 3vw, 40px)",
          bottom: "clamp(20px, 3vw, 32px)",
          padding: "10px 14px",
          borderRadius: "999px",
          background: "rgba(0,19,22,0.55)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          border: "1px solid rgba(242,239,234,0.12)",
        }}
        role="tablist"
        aria-label="Facility gallery"
      >
        {slides.map((slide, i) => {
          const isActive = i === idx;
          return (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Show slide ${i + 1}: ${slide.alt}`}
              onClick={() => setIdx(i)}
              style={{
                width: isActive ? "22px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: isActive
                  ? "var(--color-parchment)"
                  : "rgba(242,239,234,0.55)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition:
                  "width 400ms cubic-bezier(0.22, 1, 0.36, 1), background 300ms",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
