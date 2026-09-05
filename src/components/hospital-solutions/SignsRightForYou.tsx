import { Checklist } from "@/components/shared/Checklist";

const signs = [
  "You&rsquo;re running out of oxygen more often than you should",
  "Growing demand is outpacing your current supply arrangements",
  "You depend on multiple suppliers with inconsistent service",
  "Cylinders go missing, wait unused, or return late",
  "You want real-time visibility into what&rsquo;s where",
  "You want predictable monthly costs instead of surprise refills",
  "You want a partner who owns oxygen availability with you",
];

export function SignsRightForYou() {
  return (
    <section className="chapter" aria-label="Signs HealthPort is right for your facility">
      <div className="chapter-inner">
        <p className="eyebrow mb-8">Signs HealthPort is right for your facility</p>
        <h2 className="max-w-3xl mb-12">
          If two or three of these sound familiar, we should talk.
        </h2>
        <Checklist items={signs} />
      </div>
    </section>
  );
}
