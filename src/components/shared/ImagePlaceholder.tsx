/**
 * ImagePlaceholder — used across pages until client-supplied photos land.
 * Per CLAUDE.md imagery rule: a neutral Violet-tint panel at low opacity
 * with a mono label naming the shot needed. Never generic stock.
 *
 * Callers pass the shot description as `label`. Aspect ratio defaults to 3:2
 * (works for the WhatWeDo image slot and most content blocks); override for
 * portrait/square placements.
 */
export function ImagePlaceholder({
  label,
  aspect = "3 / 2",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: aspect,
        background:
          "color-mix(in srgb, var(--color-violet-tint) 55%, var(--color-parchment))",
        border: "1px solid var(--color-keyline)",
        borderRadius: "var(--radius-media)",
      }}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            style={{ color: "var(--color-violet)" }}
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="16"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="9" cy="10" r="1.5" fill="currentColor" />
            <path
              d="M4 18l5-5 4 4 3-3 4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p
            className="eyebrow"
            style={{ color: "var(--color-violet-deep)" }}
          >
            Photo pending
          </p>
          <p
            className="text-[13px] max-w-sm"
            style={{ color: "var(--color-violet-deep)", opacity: 0.75 }}
          >
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
