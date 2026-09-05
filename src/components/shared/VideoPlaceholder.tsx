/**
 * Video placeholder — used across pages until client-supplied MP4s land.
 * Layout keeps its 16:9 proportion so nothing shifts when the real
 * <video> swaps in.
 */
export function VideoPlaceholder({
  label,
  note,
}: {
  label: string;
  note: string;
}) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: "16 / 9",
        background:
          "color-mix(in srgb, var(--color-teal) 8%, var(--color-parchment))",
        border: "1px solid var(--color-keyline)",
        borderRadius: "var(--radius-media)",
      }}
      role="img"
      aria-label={`${label} placeholder`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div
            className="flex items-center justify-center"
            style={{
              width: "76px",
              height: "76px",
              borderRadius: "50%",
              background: "var(--color-parchment)",
              border: "1px solid var(--color-keyline)",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path d="M9 7v10l8-5-8-5z" fill="var(--color-teal)" />
            </svg>
          </div>
          <div className="text-center">
            <p className="eyebrow" style={{ color: "var(--color-fg)" }}>
              {label}
            </p>
            <p
              className="mt-2 text-[13px]"
              style={{ color: "var(--color-muted)" }}
            >
              {note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
