import Link from "next/link";

/**
 * Hospital Solutions §5 — Infrastructure and services included. Compact
 * summary that points to the full What's Included list on the OaaS page
 * so we don't duplicate the dense reference table.
 */
const highlights = [
  "Medical oxygen cylinders",
  "Reticulation (copper piping to bedside)",
  "Cylinder deployment & replenishment",
  "Pulse oximeters and pressure gauges where required",
  "Installation, deployment, and clinician training",
  "Ongoing monitoring and optimisation",
];

export function InfrastructureIncluded() {
  return (
    <section
      className="chapter"
      aria-label="Infrastructure and services included"
    >
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Infrastructure and services included</p>
        <h2 className="max-w-3xl mb-12">
          Everything you need to stop managing oxygen.
        </h2>

        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 list-none max-w-3xl"
          style={{ borderTop: "1px solid var(--color-keyline)", paddingTop: "2rem" }}
        >
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-baseline gap-3"
              style={{
                fontSize: "var(--text-p1)",
                lineHeight: 1.45,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  width: "0.4rem",
                  height: "0.4rem",
                  borderRadius: "50%",
                  background: "var(--color-teal)",
                  flexShrink: 0,
                  transform: "translateY(-2px)",
                }}
              />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8">
          <Link
            href="/oxygen-as-a-service"
            className="link-quiet"
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              textDecorationColor: "var(--color-keyline)",
              color: "var(--color-fg)",
            }}
          >
            See the full list of what&rsquo;s included &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
}
