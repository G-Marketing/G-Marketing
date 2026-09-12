import type { Metadata } from "next";
import { SITE } from "./site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  ogImage?: string;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return new URL(path, SITE.url).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  index = true,
  ogImage = "/images/og-lockup.jpg",
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const branded = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;

  return {
    title: { absolute: branded },
    description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      type: "website",
      url,
      siteName: SITE.name,
      title: branded,
      description,
      locale: SITE.locale,
      images: [{ url: absoluteUrl(ogImage), width: 1200, height: 630, alt: `${SITE.name} | ${SITE.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: branded,
      description,
      images: [absoluteUrl(ogImage)],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    image: absoluteUrl("/images/og-lockup.jpg"),
    logo: absoluteUrl("/images/brand-mark.png"),
    description: SITE.description,
    areaServed: ["Local markets", "International markets"],
    serviceType: ["Advertising", "Marketing", "Growth consulting"],
    knowsAbout: [
      "Paid search",
      "Paid social",
      "SEO",
      "Conversion rate optimization",
      "Marketing analytics",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: "en",
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };
}
