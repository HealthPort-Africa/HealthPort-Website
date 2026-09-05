/**
 * Contact §3 — direct channels. WhatsApp, phone, email.
 * Real client-supplied numbers (received Sept 2026 via Sage).
 */
const channels = [
  {
    label: "WhatsApp",
    value: "+234 803 590 4073",
    href: "https://wa.me/2348035904073",
    note: "Fastest way to reach us during working hours.",
  },
  {
    label: "Phone",
    value: "+234 806 412 4356",
    href: "tel:+2348064124356",
    note: "Direct line for hospitals and partners.",
  },
  {
    label: "Email",
    value: "hello@healthportafrica.com",
    href: "mailto:hello@healthportafrica.com",
    note: "For anything not urgent.",
  },
];

export function ContactChannels() {
  return (
    <section
      className="chapter"
      aria-label="Direct contact channels"
      style={{ paddingBlock: "clamp(3rem, 2rem + 4vw, 6rem)" }}
    >
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Or reach us directly</p>
        <ul className="list-none flex flex-col gap-6 max-w-3xl">
          {channels.map((c) => (
            <li
              key={c.label}
              className="grid grid-cols-1 md:grid-cols-[minmax(0,8rem)_1fr] gap-2 md:gap-8 py-4"
              style={{ borderTop: "1px solid var(--color-keyline)" }}
            >
              <p className="eyebrow" style={{ color: "var(--color-teal)" }}>
                {c.label}
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={c.href}
                  className="link-quiet"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h5)",
                    fontWeight: 600,
                  }}
                >
                  {c.value}
                </a>
                <p style={{ color: "var(--color-muted)" }}>{c.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
