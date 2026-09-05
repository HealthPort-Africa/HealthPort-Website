/**
 * OaaS §9 — Hospital story / case highlight.
 *
 * CASE STUDY NEEDED: 1–2 short hospital stories per client (situation before
 * HealthPort, what changed, outcome). Ships as a labeled placeholder card
 * with the correct structural rhythm so real content drops in cleanly.
 */
export function CaseHighlight() {
  return (
    <section className="chapter" aria-label="Case highlight">
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Case highlight</p>
        <h2 className="max-w-4xl mb-14">
          One hospital, one change &mdash; the story that keeps repeating.
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          style={{
            borderTop: "1px solid var(--color-keyline)",
            borderBottom: "1px solid var(--color-keyline)",
            paddingBlock: "3rem",
          }}
        >
          <Slot label="Before" pendingNote="Facility situation pending" />
          <Slot label="What changed" pendingNote="Intervention pending" />
          <Slot label="Outcome" pendingNote="Result pending" />
        </div>

        <p
          className="mt-6 text-[13px]"
          style={{ color: "var(--color-muted)" }}
        >
          Case-study material pending client permission and copy.
        </p>
      </div>
    </section>
  );
}

function Slot({
  label,
  pendingNote,
}: {
  label: string;
  pendingNote: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="eyebrow" style={{ color: "var(--color-teal)" }}>
        {label}
      </p>
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-h5)",
          lineHeight: 1.35,
          fontWeight: 600,
          color: "var(--color-muted)",
        }}
      >
        {pendingNote}
      </p>
    </div>
  );
}
