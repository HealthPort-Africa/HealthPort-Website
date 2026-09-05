"use client";

import { useState } from "react";

/**
 * Contact form — routed by inquiry type per client direction (Sept 2026):
 *   partner   → aishat.adeniji@healthportafrica.com
 *   hospital  → careteam@healthportafrica.com
 *   careers   → careteam@healthportafrica.com
 *   media     → healthportcomms@gmail.com
 *   general   → healthportcomms@gmail.com
 *
 * The mapping is included in the submitted payload as `routeTo` so whatever
 * endpoint (Resend function, Formspree, custom API route) receives the form
 * knows which mailbox to forward to.
 *
 * Submits to CONTACT_ENDPOINT from public env. When not set, the form still
 * renders and validates but the submission is a labeled no-op so nothing
 * misleads the user.
 */
const inquiryTypes = [
  { value: "hospital", label: "Hospital administrator" },
  { value: "partner", label: "Partner (government / NGO / funder)" },
  { value: "media", label: "Media" },
  { value: "careers", label: "Careers" },
  { value: "general", label: "General enquiry" },
];

const routeMap: Record<string, string> = {
  hospital: "careteam@healthportafrica.com",
  careers: "careteam@healthportafrica.com",
  partner: "aishat.adeniji@healthportafrica.com",
  media: "healthportcomms@gmail.com",
  general: "healthportcomms@gmail.com",
};

type Status = "idle" | "sending" | "sent" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Stamp the target mailbox so the receiving endpoint knows where to forward.
    const type = String(data.get("type") ?? "general");
    data.set("routeTo", routeMap[type] ?? routeMap.general);

    if (!endpoint) {
      setStatus("error");
      setErrorMsg(
        "Contact endpoint not configured. Set NEXT_PUBLIC_CONTACT_ENDPOINT in .env to enable form submission."
      );
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Unknown submission error"
      );
    }
  };

  if (status === "sent") {
    return (
      <div
        className="p-8 md:p-10"
        style={{
          border: "1px solid var(--color-keyline)",
          borderRadius: "var(--radius-card)",
        }}
      >
        <p className="eyebrow mb-4" style={{ color: "var(--color-teal)" }}>
          Message sent
        </p>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-h4)",
            fontWeight: 600,
            lineHeight: 1.3,
            color: "var(--color-heading)",
          }}
        >
          Thanks &mdash; we&rsquo;ve got your message and will be in touch
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6" noValidate>
      <Field label="I am contacting HealthPort as" htmlFor="type">
        <select
          id="type"
          name="type"
          required
          defaultValue=""
          className="field-input"
        >
          <option value="" disabled>
            Choose one
          </option>
          {inquiryTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Your name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="field-input"
          />
        </Field>
        <Field label="Your organisation" htmlFor="organisation">
          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            className="field-input"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="field-input"
          />
        </Field>
        <Field label="Phone (optional)" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="field-input"
          />
        </Field>
      </div>

      <Field label="What can we help with?" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="field-input"
        />
      </Field>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="btn-primary"
          disabled={status === "sending"}
          style={status === "sending" ? { opacity: 0.7, cursor: "wait" } : undefined}
        >
          {status === "sending" ? "Sending…" : "Send message"}
          {status !== "sending" && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        {status === "error" && errorMsg && (
          <p
            role="alert"
            className="text-[13px]"
            style={{ color: "var(--color-coral)" }}
          >
            {errorMsg}
          </p>
        )}
      </div>

      <style jsx>{`
        .field-input {
          width: 100%;
          padding: 0.75rem 0.875rem;
          background: var(--color-parchment);
          color: var(--color-fg);
          border: 1px solid var(--color-keyline);
          border-radius: var(--radius-control);
          font-family: var(--font-body);
          font-size: 15px;
          line-height: 1.5;
          transition: border-color 180ms var(--ease-out-brand);
        }
        .field-input:focus {
          outline: none;
          border-color: var(--color-teal);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-teal) 15%, transparent);
        }
        select.field-input {
          appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'><path d='M3 4.5l3 3 3-3' fill='none' stroke='%23001316' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/></svg>");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          padding-right: 2.25rem;
        }
        textarea.field-input {
          resize: vertical;
          min-height: 8rem;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="eyebrow">{label}</span>
      {children}
    </label>
  );
}
