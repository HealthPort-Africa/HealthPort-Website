# AGENTS.md — HealthPort Website

Read this file fully before writing or changing any code. It is the design constitution
for this project. When a request conflicts with this file, flag the conflict instead of
silently following either one.

## What this project is

Marketing website for HealthPort, a healthcare infrastructure company delivering
Oxygen as a Service (OaaS) to hospitals across Africa. Primary audience: hospital
administrators. Secondary: governments, NGOs, development organizations, funders.
The site's one job: make a hospital administrator feel "these people will take the
oxygen problem off my hands" and book an assessment.

The core message on every page: hospitals no longer manage oxygen — they partner
with HealthPort, and HealthPort manages oxygen for them. The recurring promise line
is: "You focus on patient care. We make sure oxygen is always available."

Seven pages: Home, Oxygen as a Service, OxyIntel, Hospital Solutions, For Partners,
About, Contact. The page order and section order per page are defined in
`docs/DESIGN-BRIEF.md` — follow it; do not invent or reorder sections.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4, deployed on Vercel
- Everything statically generated (`export const dynamic = "force-static"` mindset):
  this is a marketing site — no server rendering, no API routes except the contact
  form handler
- Server Components by default; `"use client"` only where interaction demands it
  (animations, form, video controls). Keep client components small and leaf-level.
- `next/image` for all images; `next/font/local` for the three self-hosted faces
- GSAP + ScrollTrigger is the only animation library. No Framer Motion, no Lottie.
- SEO: per-page `metadata` exports (title, description, OpenGraph), `sitemap.ts`,
  `robots.ts`, canonical URLs, semantic HTML. One h1 per page.
- Contact form posts to the configured endpoint (see `.env.example`)

## Design direction (non-negotiable)

The aesthetic is **institutional calm with editorial confidence** — the reference is
fruitful.com's chaptered, one-idea-per-screen storytelling, adapted to healthcare
infrastructure and low-bandwidth conditions. Minimal, warm, typographic. Trust is
the product.

## Source of truth for design

Read this order when they disagree:

1. **The Figma file** — "HealthPort Website", https://www.figma.com/design/SvEODqvtjc93vfH9UB1mQH
   This is the live design. If the Figma MCP connector is available in this session,
   pull frames directly rather than inferring layout from prose. Where Figma and any
   HTML demo disagree, Figma wins.
2. **This file + DESIGN-BRIEF.md + app/tokens.css** — the rules, the rationale, and
   the token values. Figma should already match these; if it visibly does not, flag
   it rather than silently following one or the other.
3. **The HTML demo** (healthport-website.zip / healthport-landing.html) — a working
   reference prototype built before the Figma file. Useful for motion behaviour and
   section order. Treat as historical, not authoritative, on visual detail.

Sections specified in DESIGN-BRIEF.md but not yet drawn in Figma are built from the
written spec. The process teaser on the OaaS page is currently in that category.

### Color tokens

White base ruling (verified against the guide's own layouts): page background is
#FFFFFF; Parchment is the SURFACE color for cards and panels. Headlines are Ink;
Violet is reserved for the hero headline, the promise line, punch lines, CTAs, and
full-Violet slides — its 60% presence comes from blocks and slides, not body text.


The full token set lives in `tokens.css` (Tailwind v4 @theme) — values are sampled
directly from the brand guide and are exact. Summary:

Primary: Violet #801078 (anchor), Oceanic Teal #155362, Vibrant Coral #EF6461,
Sky Surge #5DB7DE. Secondary: Sunny #EFF37B, Tea Green #CCEEAA, Parchment White
#F2EFEA (page background), Ink Black #001316 (body text). Tints/shades in tokens.css.

Usage proportions come from the guide and are enforced: Violet ~60% of color
presence, Teal + Sky ~30%, Coral + accents ~10%. Parchment and Ink do the
day-to-day work; color arrives as headings, keylines, CTAs, stats, and at most
one full-Violet chapter slide per page. No gradients anywhere.

Pairing rules FROM THE GUIDE (non-negotiable):
- Use: Violet×Parchment, Teal×Parchment, Sunny×Teal, TeaGreen×Ink, Sky×Ink,
  Coral×Parchment, Parchment-on-Violet, Sky-on-Violet
- Never: Coral×Violet, Teal×Violet, Violet×Ink, Ink×Teal, Sky×TeaGreen, Coral×Sunny
- Web contrast: Coral and Sky fail AA at body size on Parchment — headline size
  (h3+) or on dark panels only. Body text is Ink on Parchment, or Parchment on
  Violet/Ink slides.

### Typography

Two faces, loaded via `next/font/google` with `display: swap` and exposed as
CSS variables (`--font-manrope`, `--font-inter`). Consumed through the
`--font-display` and `--font-body` tokens.

- **Display — Manrope** (SemiBold/Bold): h1–h6, eyebrows, buttons, stats.
  Large, tight (`letter-spacing: -0.02em` on hero/h2), set in sentence case.
  This face carries the site's personality; use it big for hero/h2, smaller
  for h3+, and uppercase-tracked for eyebrows.
- **Body — Inter** (Regular/Medium): p, li, forms, everything long-form.
  Warm, readable, institutional.
- **Mono — system monospace** (`ui-monospace, SFMono-Regular, …`): reserved
  for genuine data displays (numbers with tabular figures, code, dashboard
  labels). Not currently loaded as a webfont — uses the OS stack.

Type scale (desktop / mobile): hero 72/40, h2 44/30, h3 24/20, body 18/16,
caption 14/13, eyebrow 13/12. Line length for prose: 65ch max. Never use a
font outside these two. If a section needs a different feel, adjust weight
or tracking within Manrope/Inter — don't add a third face.

### Layout

- Max content width 1200px; prose columns 720px. 12-col grid, 24px gutters.
- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 192px. Sections
  breathe: 128–192px vertical padding on desktop, 64–96px mobile.
- **Every page gets the chapter treatment** — one idea per section, generous
  vertical space, the oxygen thread on the left rail, scroll reveals throughout.
  Chapter numbers (Manrope eyebrow style) appear only where content is a real
  sequence (the OaaS journey, onboarding steps). Sections are tall but never
  scroll-jacked: normal scrolling, no `scroll-snap` on the main axis, no hijacked
  wheel events.
- Dense reference sections within a page (What's Included lists, comparisons,
  eligibility, the contact form) stay compact and scannable inside their chapter —
  the deck rhythm lives between sections, not inside tables of information.
- Alignment is left by default. Centered text only for the hero and full-purple
  chapter slides. Never center body copy.
- Corners follow the guide's organic-container language: 8px on buttons/inputs,
  20px on cards/panels, 28px on image and video containers; the brand's organic
  blob container (`--radius-organic`) may frame ONE feature image per page.
  Sharp corners are off-brand. Borders are 1px keylines (`--color-keyline`).
  Shadows: none, anywhere.

### Signature element — the oxygen thread

One memorable device, used with discipline: a thin (2px) Oceanic Teal vertical line that
runs down the left rail of every page, connecting section to section — it
represents piped oxygen (reticulation). It draws in as the user scrolls (SVG
stroke-dashoffset tied to scroll progress via IntersectionObserver, not a scroll
library). Chapter numbers sit on the thread. On mobile it thins to a static hairline.
This is the only ambient animation on the site. Do not add other decorative motion.

### Motion rules

Every animation must explain something; decoration gets cut.

All motion is built with GSAP + ScrollTrigger. Allowed, and only these:
1. The oxygen thread draw-in, and the System section's network rail — the ONLY two places `scrub` is permitted (same flow idea at two scales)
2. Impact stats count up once when scrolled into view (`once: true`)
3. Sections fade-up 12px on first reveal (250ms ease-out, stagger 60ms, `once: true`)
4. Journey steps reveal in sequence as the thread reaches them
5. Before/after comparison toggle on Hospital Solutions
6. Nav compresses on scroll
7. **Home photo ticker** — a slow horizontal strip of real facility photography below the Impact chapter, followed by partner logos. The 2026-10-14 stakeholder review moves “What we do” directly below the hero copy and moves this strip out of the hero. Pure CSS keyframe translate (no GSAP), ≥60s per loop, seamless (image set duplicated), edge-faded via `mask-image`. Stakeholder-approved replacement for the hero video re-cut. This is the ONE marquee on the site; do not add another.

ScrollTrigger discipline: `pin` is banned. Horizontal scroll sections are banned.
`scrub` outside the thread is banned. Parallax is banned. If a proposed effect is
not one of the seven above, it does not ship. Register GSAP in one client module and
kill all ScrollTriggers on route change.

Also banned: marquees (except the hero photo ticker in rule 7), cursor followers,
typewriter text, hover-triggered videos, page transition overlays. Wrap all motion
in `gsap.matchMedia()` respecting `prefers-reduced-motion: reduce` — the site must
be fully legible with animation off.

### Banned patterns (the AI-slop list)

Never produce any of the following, even if a change request seems to invite it:
gradient hero blobs or mesh backgrounds; glassmorphism; gradient text; emoji as
icons or bullets; the default shadcn look; three identical icon-title-blurb cards
repeated per section; drop shadows as decoration; dark-mode-by-default; fake
testimonials, fake logos, or invented statistics; stock photos of doctors pointing
at tablets; center-aligned everything; "Lorem ipsum" (use real copy from
`docs/copy/` or leave a clearly marked `<!-- COPY NEEDED: ... -->` comment).

### Imagery

Real photography of facilities, cylinders, piping, deliveries, and people from
`src/assets/photos/` only. Duotone treatment optional (ink + paper) for consistency
when mixed sources clash. If a required photo doesn't exist yet, render a neutral
`--color-violet-tint` panel at low opacity with a mono label naming the shot needed — never substitute
generic stock, never generate imagery. Icons: stroke-only, 1.5px, single color,
from one consistent set (Lucide), used sparingly.

## Performance budget (hard limits — audience is on Nigerian mobile networks)

- ≤ 90KB JS total (gzipped) per page; Lighthouse mobile ≥ 90 across the board
- Images: AVIF with WebP fallback, explicit dimensions, lazy-loaded below the fold
- **Hero video (the one exception to no-autoplay):** the Home hero may autoplay a
  muted testimonial loop (10–20s cut of the hospital testimonial) with a pull-quote
  overlay while muted and a 'tap for sound' control that restarts from 0 unmuted;
  VTT captions default-on while muted. Same technical rules as any hero loop: — `muted playsinline loop preload="metadata"` with a poster
  image, 10–20s, 720p, hard cap ~3MB, sound only on explicit user click (unmute +
  controls). Skip loading it entirely (poster only) when
  `navigator.connection.saveData` is true or effectiveType is 2g/3g, and pause it
  under `prefers-reduced-motion`. A soft ink overlay keeps the headline at AA
  contrast on top of it.
- All other videos never autoplay; poster + tap to play; hosted files (Vercel Blob
  or /public), not YouTube embeds
- Fonts: three families, subset to Latin, ≤ 120KB combined
- No third-party scripts except the form endpoint and (later, if asked) analytics

## Accessibility

WCAG AA minimum: 4.5:1 contrast for text (Coral and Sky fail AA at body size on Parchment — headline sizes or dark panels only), visible focus states (2px `--color-teal` outline),
semantic landmarks, one h1 per page, alt text on every image, form labels always
visible (no placeholder-as-label), all interactions keyboard-operable.

## Copy voice

Source copy lives in `docs/copy/`. Voice: plain, confident, outcome-first. Short
sentences. "You/your" for the hospital, "we" for HealthPort. No jargon a hospital
administrator wouldn't use. Buttons say what happens: "Book an assessment", not
"Get started". Never invent statistics, partner names, testimonials, purity figures,
or certifications — if a section needs an unconfirmed fact, insert
`<!-- FACT NEEDED: ... -->` and build the layout around a placeholder.

## Working rules

- Before styling any new section, re-read the Design direction above.
- Build mobile-first; check 375px, 768px, 1280px before considering a section done.
- After completing a page, self-review against the Banned patterns list and remove
  one element that isn't earning its place (there is always one).
- Small, single-purpose commits with imperative messages ("Add impact stat counter").
- Never commit `node_modules`, `.env`, or font license violations.
- Do not add dependencies without stating why in the commit; prefer zero-dependency
  vanilla solutions for the six allowed animations.
