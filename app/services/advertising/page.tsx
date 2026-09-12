import { ServicePage } from "@/components/ServicePage";
import { JsonLd } from "@/components/ui";
import { ADVERTISING, PILLARS } from "@/data/copy";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Advertising",
  description:
    "Performance advertising from G-Marketing: search, social, and video media with audited tracking and a revenue scoreboard.",
  path: "/services/advertising",
});

export default function AdvertisingPage() {
  const pillar = PILLARS[0];
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Advertising", path: "/services/advertising" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Advertising",
          provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
          areaServed: "Worldwide",
          description: ADVERTISING.intro,
        }}
      />
      <ServicePage
        kicker="Advertising"
        title={ADVERTISING.hero}
        points={ADVERTISING.points}
        image={pillar.image}
        imageAlt={pillar.imageAlt}
        offerings={ADVERTISING.offerings}
        effectiveness={ADVERTISING.effectiveness}
        ctaQuery="Advertising"
      />
    </>
  );
}
