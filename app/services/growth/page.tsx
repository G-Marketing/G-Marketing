import { ServicePage } from "@/components/ServicePage";
import { JsonLd } from "@/components/ui";
import { GROWTH, PILLARS } from "@/data/copy";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Growth",
  description:
    "Growth operations from G-Marketing: analytics, CRO, funnel architecture, and incrementality so demand converts and compounds.",
  path: "/services/growth",
});

export default function GrowthPage() {
  const pillar = PILLARS[2];
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Growth", path: "/services/growth" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Growth",
          provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
          areaServed: "Worldwide",
          description: GROWTH.intro,
        }}
      />
      <ServicePage
        kicker="Growth"
        title={GROWTH.hero}
        intro={GROWTH.intro}
        image={pillar.image}
        imageAlt={pillar.imageAlt}
        offerings={GROWTH.offerings}
        effectiveness={GROWTH.effectiveness}
        ctaQuery="Growth"
      />
    </>
  );
}
