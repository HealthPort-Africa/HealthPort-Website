/**
 * About §8 — Press and recognition. Placeholder rows until client supplies
 * links and mentions.
 */
const rows = [
  { title: "Publication name pending", meta: "Article title pending" },
  { title: "Publication name pending", meta: "Article title pending" },
  { title: "Publication name pending", meta: "Article title pending" },
];

export function Press() {
  return (
    <section
      className="chapter"
      aria-label="Press and recognition"
      style={{ paddingBlock: "clamp(3rem, 2rem + 4vw, 6rem)" }}
    >
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Press and recognition</p>
        <h2 className="max-w-3xl mb-10">Where we&rsquo;ve shown up.</h2>

        <ul
          className="list-none"
          style={{ borderTop: "1px solid var(--color-keyline)" }}
        >
          {rows.map((r, i) => (
            <li
              key={i}
              className="grid grid-cols-1 md:grid-cols-[minmax(0,14rem)_1fr] gap-2 md:gap-8 py-5"
              style={{ borderBottom: "1px solid var(--color-keyline)" }}
            >
              <span
                className="eyebrow"
                style={{ color: "var(--color-muted)" }}
              >
                {r.title}
              </span>
              <span style={{ color: "var(--color-muted)" }}>
                {r.meta}
              </span>
            </li>
          ))}
        </ul>

        <p
          className="mt-6 text-[13px]"
          style={{ color: "var(--color-muted)" }}
        >
          Press links pending client input.
        </p>
      </div>
    </section>
  );
}
