/**
 * OaaS — Process Teaser (sticky-scroll stacked-card pattern).
 *
 * Reference: famasi.me "What can Famasi do for you?" — each stage is its
 * own large two-column card. As the reader scrolls, later cards stick to
 * the top and stack over the earlier ones, so the whole process reveals
 * itself through scroll instead of autoplay.
 *
 * Copy per stage is lifted from the Sales & Facility Onboarding Video
 * script (see docs). The DESIGN-BRIEF asks this teaser to walk the
 * customer through the process from their POV without duplicating the
 * traditional-vs-OaaS comparison further down the page.
 */
import Image from "next/image";
import Link from "next/link";

type Stage = {
  key: string;
  n: string;
  chip: string;
  title: string;
  emphasis: string; // portion of the title colored in the card's accent
  body: React.ReactNode;
  // Card palette — left is the "airy" tint, right is the deeper accent
  // hosting the visual. Both need to satisfy the brand's colour pairings
  // (Ink text on the left tint, Parchment or Ink on the right accent).
  bgLeft: string;
  bgRight: string;
  accentText: string;
  ctaLine?: string;
};

// Copy anchored to the video script's beats but rewritten to be
// self-explanatory when read cold — no jargon, no clever titles, no vague
// nouns. Each title says PLAINLY what the stage does; the body gives one
// sentence of proof.
const stages: Stage[] = [
  {
    key: "assess",
    n: "01",
    chip: "We assess",
    title: "First, we look at what you have.",
    emphasis: "what you have",
    body: (
      <>
        Wards, bed spaces, existing infrastructure, and your hospital&rsquo;s
        oxygen usage. We evaluate what you actually use versus what you need
        per <strong className="font-semibold">WHO</strong> standards, so our
        solution fits your real facility.
      </>
    ),
    bgLeft: "color-mix(in srgb, var(--color-teagreen) 45%, #FFFFFF)",
    bgRight: "var(--color-teal)",
    accentText: "var(--color-teal)",
  },
  {
    key: "design",
    n: "02",
    chip: "We design",
    title: "Then we tailor the right fit.",
    emphasis: "right fit",
    body: "Tailored to your facility: some hospitals require on-site oxygen generation plants, others need low or bulk storage, and some run best on hybrid manifold distribution. We can discuss specific piping and reticulation needs.",
    bgLeft: "color-mix(in srgb, var(--color-sky) 22%, #FFFFFF)",
    bgRight: "var(--color-sky)",
    accentText: "color-mix(in srgb, var(--color-sky) 60%, var(--color-ink))",
  },
  {
    key: "install",
    n: "03",
    chip: "We install",
    title: "We install and take over.",
    emphasis: "take over",
    body: "Installation, piping to the bedside, and clinician training. From handover, keeping oxygen available is our job, not yours.",
    bgLeft: "color-mix(in srgb, var(--color-coral) 18%, #FFFFFF)",
    bgRight: "var(--color-coral)",
    accentText: "color-mix(in srgb, var(--color-coral) 65%, var(--color-ink))",
  },
  {
    key: "stay",
    n: "04",
    chip: "We stay",
    title: "The HealthPort team working alongside the hospital clinical team.",
    emphasis: "hospital clinical team",
    body: "Monitoring, refills, maintenance, and predictable, locked-in pricing with no surge costs during market scarcity. Oxygen is there when your patients need it. Always.",
    bgLeft: "color-mix(in srgb, var(--color-violet) 12%, #FFFFFF)",
    bgRight: "var(--color-violet)",
    accentText: "var(--color-violet)",
  },
];

export function ProcessTeaser() {
  return (
    <section
      id="what-is-oaas"
      className="w-full"
      aria-label="What is Oxygen as a Service"
      style={{ paddingBlock: "var(--spacing-section)" }}
    >
      {/* Section header — stays contained. */}
      <div className="container-page">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <p
            className="eyebrow mb-4"
            style={{ color: "var(--color-violet)" }}
          >
            A service, not a purchase
          </p>
          <h2 className="mb-4">
            What is
            <br />
            <span style={{ color: "var(--color-violet)" }}>
              Oxygen as a Service?
            </span>
          </h2>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.55,
              color: "var(--color-muted)",
            }}
          >
            HealthPort manages your oxygen infrastructure, so you only pay
            for reliable oxygen delivery.
          </p>
        </div>
      </div>

      {/* Sticky-stack — each card sticks at the same top offset. Because
          the DOM order is top → bottom, the last card in DOM ends up on
          top of the stack once scrolled to. Each card is ~90vh tall so
          the reader gets a full frame of each stage. */}
      <div className="mt-14 md:mt-20 container-page">
        <div className="flex flex-col gap-6 md:gap-8">
          {stages.map((s, i) => (
            <StackedStage
              key={s.key}
              stage={s}
              index={i}
              total={stages.length}
            />
          ))}
        </div>
      </div>

      <div className="container-page mt-12 md:mt-16">
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Book an assessment
            <ArrowRight />
          </Link>
          <Link href="/hospital-solutions" className="btn-secondary">
            See hospital solutions
          </Link>
        </div>
      </div>
    </section>
  );
}

function StackedStage({
  stage,
  index,
  total,
}: {
  stage: Stage;
  index: number;
  total: number;
}) {
  return (
    <div
      className="relative"
      style={{
        // Sticky offset — each card sticks a bit lower than the previous
        // so the previous card's TOP edge peeks out (~14px per level)
        // when the next one has settled. That peek is what tells the eye
        // the cards are stacking.
        position: "sticky",
        top: `calc(5rem + ${index * 14}px)`,
        zIndex: index + 1,
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 overflow-hidden"
        style={{
          minHeight: "min(80vh, 720px)",
          borderRadius: "clamp(20px, 2vw, 28px)",
          border: "1px solid var(--color-keyline)",
        }}
      >
        {/* LEFT — chip + big title + body. */}
        <div
          className="flex flex-col justify-between"
          style={{
            background: stage.bgLeft,
            padding: "clamp(1.75rem, 3vw, 3rem)",
            color: "var(--color-ink)",
          }}
        >
          <div>
            <span
              className="inline-block"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: stage.accentText,
                marginBottom: "clamp(1.5rem, 2vw, 2.25rem)",
              }}
            >
              {stage.n} · {stage.chip}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.6vw, 44px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontWeight: 700,
                color: "var(--color-ink)",
                marginBottom: "clamp(1.25rem, 1.75vw, 1.75rem)",
                maxWidth: "18ch",
                textWrap: "balance",
              }}
            >
              <TitleWithAccent
                title={stage.title}
                emphasis={stage.emphasis}
                accent={stage.accentText}
              />
            </h3>
            <p
              style={{
                fontSize: "clamp(15px, 1vw, 17px)",
                lineHeight: 1.6,
                color: "var(--color-fg)",
                maxWidth: "34ch",
              }}
            >
              {stage.body}
            </p>
          </div>

          {/* Stage progress — quiet marker for context. */}
          <div
            className="mt-8 md:mt-10"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            Stage {stage.n} / {String(total).padStart(2, "0")}
          </div>
        </div>

        {/* RIGHT — accent-colored panel hosting the visual for this stage. */}
        <div
          className="relative overflow-hidden"
          style={{
            background: stage.bgRight,
            color: "var(--color-parchment)",
            minHeight: "clamp(320px, 55vh, 560px)",
          }}
        >
          <StageVisual stageKey={stage.key} />
        </div>
      </div>
    </div>
  );
}

function TitleWithAccent({
  title,
  emphasis,
  accent,
}: {
  title: string;
  emphasis: string;
  accent: string;
}) {
  const idx = title.toLowerCase().indexOf(emphasis.toLowerCase());
  if (idx === -1) return <>{title}</>;
  const before = title.slice(0, idx);
  const match = title.slice(idx, idx + emphasis.length);
  const after = title.slice(idx + emphasis.length);
  return (
    <>
      {before}
      <span style={{ color: accent }}>{match}</span>
      {after}
    </>
  );
}

/* ------------------------------------------------------------------
   Per-stage visuals. Each sits on the card's accent-color panel so
   the visuals are Parchment-line on colored surface. Kept editorial:
   one clean symbol per stage, matching the script's beats.
   ------------------------------------------------------------------ */

function StageVisual({ stageKey }: { stageKey: string }) {
  switch (stageKey) {
    case "assess":
      return <AssessVisual />;
    case "design":
      return <DesignVisual />;
    case "install":
      return <InstallVisual />;
    case "stay":
      return <StayVisual />;
    default:
      return null;
  }
}

function AssessVisual() {
  // Floor-plan reveal — hospital rooms fade in one after another as if
  // being surveyed. Matches the script's "we learn your facility — wards,
  // bed spaces, clinical service areas, existing oxygen infrastructure."
  // Fills the entire column instead of sitting as a centred vignette.
  //
  // Layout: 3-column × 2-row grid of rooms with a corridor between the
  // rows. Each room has an outline, small bed dots, and a label. Rooms
  // pulse on a staggered continuous loop.
  // 3 × 3 grid — 9 clinical/service areas, three per row, with a
  // corridor line between each row of rooms.
  const rooms = [
    { x: 18,  y: 15,  w: 116, h: 88, label: "Ward A",      beds: 5, delay: 0    },
    { x: 142, y: 15,  w: 116, h: 88, label: "ICU",         beds: 4, delay: 0.35 },
    { x: 266, y: 15,  w: 116, h: 88, label: "Recovery",    beds: 4, delay: 0.70 },
    { x: 18,  y: 116, w: 116, h: 88, label: "Ward B",      beds: 5, delay: 1.05 },
    { x: 142, y: 116, w: 116, h: 88, label: "Emergency",   beds: 4, delay: 1.40 },
    { x: 266, y: 116, w: 116, h: 88, label: "Pharmacy",    beds: 3, delay: 1.75 },
    { x: 18,  y: 217, w: 116, h: 88, label: "Radiology",   beds: 3, delay: 2.10 },
    { x: 142, y: 217, w: 116, h: 88, label: "Lab",         beds: 3, delay: 2.45 },
    { x: 266, y: 217, w: 116, h: 88, label: "Storage",     beds: 3, delay: 2.80 },
  ];
  return (
    <div
      className="absolute inset-0"
      style={{ padding: "clamp(1.5rem, 2.4vw, 2.5rem)" }}
    >
      <svg
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        role="img"
        aria-label="Hospital floor plan being surveyed"
      >
        {/* Corridors between each row of rooms. */}
        <line
          x1="18"
          y1="110"
          x2="382"
          y2="110"
          stroke="rgba(242,239,234,0.28)"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
        <line
          x1="18"
          y1="211"
          x2="382"
          y2="211"
          stroke="rgba(242,239,234,0.28)"
          strokeWidth="1"
          strokeDasharray="3 5"
        />

        {rooms.map((r) => (
          <g
            key={r.label}
            className="stage-anim"
            style={{
              animation: "stage-room-reveal 7.2s ease-in-out infinite",
              animationDelay: `${r.delay}s`,
              transformOrigin: `${r.x + r.w / 2}px ${r.y + r.h / 2}px`,
            }}
          >
            {/* Room outline + soft fill */}
            <rect
              x={r.x}
              y={r.y}
              width={r.w}
              height={r.h}
              rx="6"
              fill="rgba(242,239,234,0.08)"
              stroke="rgba(242,239,234,0.6)"
              strokeWidth="1.2"
            />
            {/* Beds — small dots inside the room, laid out in a row */}
            {Array.from({ length: r.beds }).map((_, bi) => {
              const cols = Math.min(r.beds, 3);
              const rows = Math.ceil(r.beds / cols);
              const gapX = (r.w - 24) / (cols + 1);
              const gapY = (r.h - 40) / (rows + 1);
              const col = bi % cols;
              const row = Math.floor(bi / cols);
              const cx = r.x + 12 + gapX * (col + 1);
              const cy = r.y + 20 + gapY * (row + 1);
              return (
                <circle
                  key={bi}
                  cx={cx}
                  cy={cy}
                  r="3"
                  fill="var(--color-parchment)"
                  fillOpacity="0.72"
                />
              );
            })}
            {/* Label — bottom-left of the room */}
            <text
              x={r.x + 8}
              y={r.y + r.h - 8}
              fontFamily="var(--font-display)"
              fontSize="10"
              fontWeight="600"
              fill="var(--color-parchment)"
              style={{ letterSpacing: "0.06em" }}
            >
              {r.label.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function DesignVisual() {
  // Real on-site photography — HealthPort technicians servicing a
  // compressor inside the plant. Matches the REVIEW-BLOCKERS ask for this
  // card ("machinery / skid / facility-installation shots"). A soft sky
  // tint sits over the image so it belongs on the card's accent-colored
  // panel next to the other three illustrated stages.
  return (
    <>
      <Image
        src="/photos/techs-servicing-compressor.webp"
        alt="HealthPort technicians servicing a compressor inside the plant"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--color-sky) 28%, transparent) 0%, color-mix(in srgb, var(--color-sky) 12%, transparent) 100%)",
          mixBlendMode: "multiply",
        }}
      />
    </>
  );
}

function InstallVisual() {
  return (
    <Image
      src="/photos/manifold-regulator-install.webp"
      alt="Technician installing medical oxygen pipework and adjusting manifold regulators"
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
      style={{ objectPosition: "45% center" }}
    />
  );
}

function StayVisual() {
  // Refill cycle, expanded. Larger ring, icon-based nodes (Depot / Ward /
  // Hospital), a small "always on" orchestration mark at the centre, TWO
  // shipment beads orbiting at opposite positions so the loop never
  // looks empty, and thin radial connectors from the centre out to each
  // node. Matches the brief's "cylinder refill cycle looping,
  // depot → hospital → ward" but reads at the column scale of Cards 1-3.
  const CX = 200;
  const CY = 160;
  // Ring radius tightened so the badges + labels sit in clear space at
  // the viewBox edges without crossing the ring itself.
  const R = 100;
  const nodes: Array<{ label: string; angleDeg: number; icon: "depot" | "ward" | "hospital" }> = [
    { label: "Depot",    angleDeg: -90, icon: "depot"    }, // top
    { label: "Hospital", angleDeg:  30, icon: "hospital" }, // bottom right
    { label: "Ward",     angleDeg: 150, icon: "ward"     }, // bottom left
  ];
  return (
    <div
      className="absolute inset-0"
      style={{ padding: "clamp(1.5rem, 2.4vw, 2.5rem)" }}
    >
      <svg
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        role="img"
        aria-label="Continuous refill cycle: depot to hospital to ward"
      >
        {/* Outer ring — the loop itself */}
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="rgba(242,239,234,0.42)"
          strokeWidth="1.4"
          strokeDasharray="2 5"
        />
        {/* Inner subtle guide ring for depth */}
        <circle
          cx={CX}
          cy={CY}
          r={R - 22}
          fill="none"
          stroke="rgba(242,239,234,0.18)"
          strokeWidth="1"
        />

        {/* Thin connectors from the centre orchestration mark to each
            node — reads as "HealthPort coordinates every leg." */}
        {nodes.map((n) => {
          const a = (n.angleDeg * Math.PI) / 180;
          const x = CX + Math.cos(a) * (R - 6);
          const y = CY + Math.sin(a) * (R - 6);
          return (
            <line
              key={`spoke-${n.label}`}
              x1={CX}
              y1={CY}
              x2={x}
              y2={y}
              stroke="rgba(242,239,234,0.24)"
              strokeWidth="0.8"
              strokeDasharray="1 3"
            />
          );
        })}

        {/* Centre orchestration mark — small target with pulsing outer
            ring, quietly says "coordinated by HealthPort." */}
        <circle
          cx={CX}
          cy={CY}
          r="24"
          fill="none"
          stroke="rgba(242,239,234,0.35)"
          strokeWidth="1"
          className="stage-anim"
          style={{
            transformOrigin: `${CX}px ${CY}px`,
            animation: "stage-hub-pulse 3.6s ease-in-out infinite",
          }}
        />
        <circle
          cx={CX}
          cy={CY}
          r="10"
          fill="rgba(242,239,234,0.18)"
          stroke="var(--color-parchment)"
          strokeWidth="1.2"
        />
        <circle cx={CX} cy={CY} r="3" fill="var(--color-parchment)" />

        {/* Three cycle nodes — each is a small hub + icon + label. Labels
            are pushed 40 units past the ring so they never touch the
            node circle, and their text-anchor is set to the SIDE AWAY
            from the ring: right-side nodes anchor="start" (text extends
            outward to the right), left-side nodes anchor="end" (text
            extends outward to the left). */}
        {nodes.map((n) => {
          const a = (n.angleDeg * Math.PI) / 180;
          const x = CX + Math.cos(a) * R;
          const y = CY + Math.sin(a) * R;
          const cosA = Math.cos(a);
          // Anchor away from the ring — start (=left-aligned) for right-
          // side nodes, end (=right-aligned) for left-side nodes.
          const anchor: "start" | "middle" | "end" =
            cosA > 0.25 ? "start" : cosA < -0.25 ? "end" : "middle";
          const LABEL_R = R + 34;
          const labelX = CX + Math.cos(a) * LABEL_R;
          const labelY = CY + Math.sin(a) * LABEL_R + 5;
          return (
            <g key={n.label}>
              {/* Node circle */}
              <circle
                cx={x}
                cy={y}
                r="18"
                fill="var(--color-parchment)"
                stroke="var(--color-parchment)"
                strokeWidth="1.5"
              />
              {/* Icon inside the node */}
              <g transform={`translate(${x - 9}, ${y - 9})`}>
                <NodeIcon icon={n.icon} />
              </g>
              {/* Label — text extends AWAY from the ring via anchor. */}
              <text
                x={labelX}
                y={labelY}
                textAnchor={anchor}
                fontFamily="var(--font-display)"
                fontSize="13"
                fontWeight="700"
                fill="var(--color-parchment)"
                style={{ letterSpacing: "0.06em" }}
              >
                {n.label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Two orbiting shipment beads on opposite sides of the ring —
            gives the loop a persistent sense of "in-transit"; the ring
            never looks empty. */}
        <g
          className="stage-anim"
          style={{
            transformOrigin: `${CX}px ${CY}px`,
            animation: "stage-orbit 9s linear infinite",
          }}
        >
          <circle
            cx={CX}
            cy={CY - R}
            r="5"
            fill="var(--color-parchment)"
          />
        </g>
        <g
          className="stage-anim"
          style={{
            transformOrigin: `${CX}px ${CY}px`,
            animation: "stage-orbit 9s linear infinite",
            animationDelay: "-4.5s",
          }}
        >
          <circle
            cx={CX}
            cy={CY - R}
            r="4"
            fill="rgba(242,239,234,0.72)"
          />
        </g>

        {/* Cadence badge — small pill top-right, positioned above the
            ring's top edge so it never crosses the loop. */}
        <g transform="translate(288, 6)">
          <rect
            x="0"
            y="0"
            width="100"
            height="22"
            rx="11"
            fill="rgba(242,239,234,0.12)"
            stroke="var(--color-parchment)"
            strokeWidth="1"
          />
          <circle cx="12" cy="11" r="2.5" fill="var(--color-parchment)">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <text
            x="22"
            y="15"
            fontFamily="var(--font-display)"
            fontSize="10"
            fontWeight="700"
            fill="var(--color-parchment)"
            style={{ letterSpacing: "0.1em" }}
          >
            ALWAYS ON
          </text>
        </g>

        {/* Monitoring tile — bottom, centered underneath the ring so it
            sits clear of both the Ward and Hospital node labels. */}
        <g transform="translate(136, 286)">
          <rect
            x="0"
            y="0"
            width="128"
            height="34"
            rx="6"
            fill="rgba(242,239,234,0.10)"
            stroke="var(--color-parchment)"
            strokeWidth="1"
          />
          {/* Monitoring label */}
          <text
            x="10"
            y="14"
            fontFamily="var(--font-display)"
            fontSize="9"
            fontWeight="700"
            fill="var(--color-parchment)"
            style={{ letterSpacing: "0.14em" }}
          >
            MONITORING
          </text>
          {/* Live status dot next to the label */}
          <circle cx="82" cy="11" r="2.5" fill="var(--color-parchment)">
            <animate
              attributeName="opacity"
              values="0.35;1;0.35"
              dur="1.6s"
              repeatCount="indefinite"
            />
          </circle>
          <text
            x="90"
            y="14"
            fontFamily="var(--font-display)"
            fontSize="8"
            fontWeight="600"
            fill="rgba(242,239,234,0.75)"
            style={{ letterSpacing: "0.1em" }}
          >
            LIVE
          </text>
          {/* Waveform bars — 8 short vertical bars pulsing in place so
              the tile always feels live. */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <rect
              key={i}
              x={10 + i * 8}
              y="20"
              width="4"
              height="10"
              rx="1"
              fill="var(--color-parchment)"
              className="stage-anim"
              style={{
                transformOrigin: `${12 + i * 8}px 25px`,
                animation:
                  "stage-bar-pulse 1.4s ease-in-out infinite",
                animationDelay: `${i * 90}ms`,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

/**
 * Small pictogram inside each cycle node. Parchment fill on the icon so
 * it reads on any card bg colour. viewBox is 18×18; rendered inside a
 * <g transform="translate(x, y)"> placed by the caller.
 */
function NodeIcon({ icon }: { icon: "depot" | "ward" | "hospital" }) {
  const stroke = "var(--color-violet)";
  const sw = 1.2;
  switch (icon) {
    case "depot":
      // Warehouse — roof + shutter doors
      return (
        <g>
          <path
            d="M2 8 L9 3 L16 8 L16 16 L2 16 Z"
            fill="none"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <line x1="6" y1="10" x2="6" y2="16" stroke={stroke} strokeWidth={sw} />
          <line x1="12" y1="10" x2="12" y2="16" stroke={stroke} strokeWidth={sw} />
          <line x1="2" y1="13" x2="16" y2="13" stroke={stroke} strokeWidth={sw} />
        </g>
      );
    case "hospital":
      // Hospital cross
      return (
        <g>
          <rect
            x="2"
            y="2"
            width="14"
            height="14"
            rx="1"
            fill="none"
            stroke={stroke}
            strokeWidth={sw}
          />
          <rect x="8" y="5" width="2" height="8" fill={stroke} />
          <rect x="5" y="8" width="8" height="2" fill={stroke} />
        </g>
      );
    case "ward":
      // Ward bed — simple bed silhouette
      return (
        <g>
          <path
            d="M2 10 L2 14 L16 14 L16 10"
            fill="none"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <path
            d="M2 10 L2 6 L8 6 L8 10"
            fill="none"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinejoin="round"
          />
          <rect x="3" y="7" width="4" height="3" fill={stroke} />
        </g>
      );
  }
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
