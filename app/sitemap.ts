import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services",
    "/services/advertising",
    "/services/marketing",
    "/services/growth",
    "/markets",
    "/approach",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return paths.map((path) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: new Date("2026-09-11"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services") ? 0.9 : 0.7,
  }));
}
