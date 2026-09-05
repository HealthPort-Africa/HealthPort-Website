/**
 * About §1 — Mission and Vision as two chapters. Big type, quiet section.
 * Ink on Parchment. This is the page hero for About.
 */
export function MissionVision() {
  return (
    <>
      {/* Mission */}
      <section
        className="chapter pt-16 md:pt-24"
        style={{ paddingBottom: "clamp(3rem, 2rem + 3vw, 5rem)" }}
      >
        <div className="chapter-inner">
          <p className="eyebrow mb-8">Our mission</p>
          <h1 className="max-w-5xl">
            To become Africa&rsquo;s most hospital-centric oxygen
            infrastructure company &mdash; so no patient dies from lack of
            oxygen.
          </h1>
        </div>
      </section>

      {/* Vision */}
      <section
        className="chapter"
        style={{ paddingBlock: "clamp(4rem, 3rem + 6vw, 8rem)" }}
      >
        <div className="chapter-inner">
          <p className="eyebrow mb-8">Our vision</p>
          <h2 className="max-w-4xl">
            10,000+ hospitals with reliable oxygen access. 100,000+ lives
            saved every year by 2035.
          </h2>
        </div>
      </section>
    </>
  );
}
