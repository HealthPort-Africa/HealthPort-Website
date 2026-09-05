/**
 * About §5 — Leadership grid: photo, name, role, two-line bio. Ships as
 * four labeled placeholder cards until client supplies headshots and bios
 * (see open_client_decisions).
 */
const slots = [
  { role: "Founder & CEO" },
  { role: "Head of Operations" },
  { role: "Head of Engineering" },
  { role: "Head of OxyIntel" },
];

export function Leadership() {
  return (
    <section className="chapter" aria-label="Leadership">
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Leadership</p>
        <h2 className="max-w-3xl mb-16">The people building this.</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {slots.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-4"
              style={{
                border: "1px solid var(--color-keyline)",
                borderRadius: "var(--radius-card)",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  aspectRatio: "3 / 4",
                  background:
                    "color-mix(in srgb, var(--color-violet) 8%, var(--color-parchment))",
                  borderRadius: "var(--radius-control)",
                }}
                aria-label="Headshot placeholder"
                role="img"
              />
              <div className="flex flex-col gap-1">
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h5)",
                    fontWeight: 600,
                    color: "var(--color-muted)",
                  }}
                >
                  Name pending
                </p>
                <p
                  className="eyebrow"
                  style={{ color: "var(--color-teal)" }}
                >
                  {s.role}
                </p>
                <p
                  className="mt-2"
                  style={{
                    color: "var(--color-muted)",
                    fontSize: "var(--text-p3)",
                    lineHeight: 1.5,
                  }}
                >
                  Bio pending client input.
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-6 text-[13px]"
          style={{ color: "var(--color-muted)" }}
        >
          Headshots, names, and bios pending client input.
        </p>
      </div>
    </section>
  );
}
