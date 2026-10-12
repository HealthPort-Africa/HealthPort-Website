import Image from "next/image";

/**
 * Hero photo ticker — slow horizontal strip of real facility photography
 * pinned to the bottom of the Home hero (CLAUDE.md motion rule #7).
 *
 * The track is the image set rendered twice so the CSS keyframe loop
 * (0 → -50%) is seamless. Keep the two halves identical and in order.
 *
 * To swap in the final hero ticker photos: drop files into
 * /public/photos/ and update `HERO_TICKER_PHOTOS` below. Alt text must
 * describe the shot — these are content, not decoration.
 */
const HERO_TICKER_PHOTOS: ReadonlyArray<{ src: string; alt: string }> = [
  { src: "/photos/nexair-plant-tower.webp", alt: "HealthPort's on-site Nexair oxygen plant" },
  { src: "/photos/manifold-regulator-install.webp", alt: "Technician installing a medical regulator on a copper manifold" },
  { src: "/photos/techs-servicing-compressor.webp", alt: "HealthPort technicians servicing a compressor inside the plant" },
  { src: "/photos/tech-commissioning-plant.webp", alt: "Technician commissioning the Nexair plant control panel" },
  { src: "/photos/cylinder-depot-stack.webp", alt: "Rack of filled HealthPort cylinders at the depot" },
  { src: "/photos/delivery-cylinder-handtruck.webp", alt: "Technician wheeling a HealthPort cylinder on a hand truck" },
  { src: "/photos/oxygen-storage-valve.webp", alt: "Technician checking a cylinder valve in oxygen storage" },
  { src: "/photos/wendel-compressor-room.webp", alt: "Wendel compressor and dryer feeding the oxygen plant" },
  { src: "/photos/ward-consultation-tablet.webp", alt: "HealthPort team member consulting with a nurse on the ward" },
  { src: "/photos/nurse-incubator-oximeter.webp", alt: "Neonatal nurse reading a pulse oximeter beside an incubator" },
];

export function HeroTicker() {
  const track = [...HERO_TICKER_PHOTOS, ...HERO_TICKER_PHOTOS];
  return (
    <div className="hero-ticker relative w-full shrink-0 overflow-hidden">
      <div className="hero-ticker-track flex w-max">
        {track.map((photo, i) => {
          const isDuplicate = i >= HERO_TICKER_PHOTOS.length;
          return (
            <div
              key={`${photo.src}-${i}`}
              className="relative shrink-0 overflow-hidden"
              style={{
                width: "clamp(14rem, 22vw, 22rem)",
                aspectRatio: "1 / 1.15",
              }}
            >
              <Image
                src={photo.src}
                alt={isDuplicate ? "" : photo.alt}
                aria-hidden={isDuplicate || undefined}
                fill
                sizes="(max-width: 768px) 60vw, 22rem"
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
