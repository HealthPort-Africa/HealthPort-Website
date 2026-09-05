import type { MetadataRoute } from "next";

/**
 * Sitemap generated at build time. Route list is small enough to hand-write;
 * updating it when a new page ships is intentional so we never accidentally
 * expose a page we're not ready to publish.
 */
const routes = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/oxygen-as-a-service", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/hospital-solutions", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/oxyintel", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/for-partners", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://healthportafrica.com";
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
