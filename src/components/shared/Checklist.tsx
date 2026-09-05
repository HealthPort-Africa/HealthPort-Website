/**
 * Checklist — a scannable list with soft teal circular check marks. Used for
 * eligibility ("Is OaaS right for your facility?" on OaaS) and pain-signals
 * ("Signs HealthPort is right for your facility" on Hospital Solutions).
 */
export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="list-none flex flex-col gap-4 max-w-3xl">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-4"
          style={{
            fontSize: "var(--text-p1)",
            lineHeight: 1.5,
            color: "var(--color-fg)",
          }}
        >
          <Check />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Check() {
  return (
    <span
      aria-hidden="true"
      className="flex items-center justify-center"
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        background: "color-mix(in srgb, var(--color-teal) 12%, transparent)",
        color: "var(--color-teal)",
        flexShrink: 0,
        marginTop: "0.15rem",
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.5l2.5 2.5 4.5-5.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
