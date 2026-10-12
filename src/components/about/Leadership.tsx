/**
 * About §5 — Leadership.
 *
 * Four client-supplied portraits in a static responsive grid.
 *
 * Photos: client-supplied team portraits. Roles are provisional preview copy.
 */
import Image from "next/image";

type TeamMember = {
  key: string;
  name: string;
  role: string;
  image: string;
};

// Names are taken from the supplied photo filenames.
// Role titles are provisional, requested for the design preview; replace when confirmed.
const team: TeamMember[] = [
  {
    key: "toyeeb",
    name: "Toyeeb",
    role: "Engineering Lead",
    image: "/photos/team/toyeeb.jpg",
  },
  {
    key: "francis",
    name: "Francis",
    role: "Operations Lead",
    image: "/photos/team/francis.jpeg",
  },
  {
    key: "aisha",
    name: "Aisha",
    role: "Partnerships Lead",
    image: "/photos/team/aisha.jpeg",
  },
  {
    key: "mariam",
    name: "Mariam",
    role: "Clinical Programmes Lead",
    image: "/photos/team/mariam.png",
  },
];

const leadershipOrder = ["aisha", "mariam", "toyeeb", "francis"];
const orderedTeam = leadershipOrder.map(key => team.find(member => member.key === key)!);

export function Leadership() {
  return (
    <section
      id="leadership"
      className="w-full"
      aria-label="Leadership"
      style={{ paddingBlock: "var(--spacing-section)" }}
    >
      <div className="container-page">
        <div className="max-w-3xl mb-12 md:mb-16" data-parallax="-0.06">
          <p
            className="eyebrow mb-5"
            style={{ color: "var(--color-violet)" }}
          >
            Leadership
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 1.5rem + 1.8vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--color-heading)",
              margin: 0,
              marginBottom: "1rem",
              textWrap: "balance",
            }}
          >
            The people building this.
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1vw, 17px)",
              lineHeight: 1.6,
              color: "var(--color-muted)",
              margin: 0,
            }}
          >
            A small, deliberate team of engineers, operators, and
            clinicians building oxygen infrastructure for a continent.
          </p>
        </div>
      </div>

      <div className="container-page">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 list-none">
          {orderedTeam.map(member => (
            <li key={member.key} className="min-w-0">
              <PolaroidCard member={member} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------- PolaroidCard ---------------------------- */

function PolaroidCard({ member }: { member: TeamMember }) {
  return (
    <article
      className="w-full min-w-0 h-full overflow-hidden"
      style={
        {
          background: "var(--color-white)",
          border: "1px solid var(--color-keyline)",
          borderRadius: "20px",
          position: "relative",
        } as React.CSSProperties
      }
      role="group"
      aria-label={`${member.name}, ${member.role}`}
    >
      {/* Consistent portrait framing, using the supplied team photography. */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "3 / 4",
          background: "var(--color-ink)",
        }}
      >
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          fill
          sizes="(min-width: 1280px) 228px, (min-width: 1024px) 22vw, (min-width: 640px) 44vw, 90vw"
          style={{ objectFit: "cover", objectPosition: "50% 30%" }}
        />
      </div>

      {/* Caption */}
      <div className="flex flex-col px-5 py-5">
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(14px, 1vw, 16px)",
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: "-0.005em",
            color: "var(--color-heading)",
            margin: 0,
            marginBottom: "2px",
          }}
        >
          {member.name}
        </p>
        <p
          className="eyebrow"
          style={{
            fontSize: "10px",
            color: "var(--color-muted)",
            letterSpacing: "0.14em",
          }}
        >
          {member.role}
        </p>
      </div>
    </article>
  );
}
