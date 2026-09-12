import { ServicePage } from "@/components/ServicePage";
import { JsonLd } from "@/components/ui";
import { MARKETING, PILLARS } from "@/data/copy";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Marketing",
  description:
    "Marketing systems from G-Marketing: positioning, SEO, content, lifecycle, and landing pages that make paid media cheaper.",
  path: "/services/marketing",
});

export default function MarketingPage() {
  const pillar = PILLARS[1];
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Marketing", path: "/services/marketing" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Marketing",
          provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
          areaServed: "Worldwide",
          description: MARKETING.intro,
        }}
      />
      <ServicePage
        kicker="Marketing"
        title={MARKETING.hero}
        points={MARKETING.points}
        image={pillar.image}
        imageAlt={pillar.imageAlt}
        offerings={MARKETING.offerings}
        effectiveness={MARKETING.effectiveness}
        ctaQuery="Marketing"
      />
    </>
  );
}
