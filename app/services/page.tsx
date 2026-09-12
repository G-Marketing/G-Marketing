import Link from "next/link";
import Image from "next/image";
import { Button, JsonLd, Kicker, Section } from "@/components/ui";
import { IconArrow } from "@/components/icons";
import { PILLARS } from "@/data/copy";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "G-Marketing services: performance advertising, marketing systems, and growth operations for local and global markets.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Section className="pt-16">
        <Kicker>Services</Kicker>
        <h1 className="mt-4 max-w-4xl font-bold text-4xl sm:text-6xl">
          Three lines that should never be sold as one vague retainer.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
          Advertising buys demand. Marketing earns it. Growth keeps it. You can
          hire one line or all three. The scoreboard stays the same.
        </p>
      </Section>
      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article key={pillar.slug} className="flex flex-col rounded-3xl border border-line bg-panel">
              <Image
                src={pillar.image}
                alt={pillar.imageAlt}
                width={1200}
                height={900}
                className="h-52 w-full rounded-t-3xl object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-bold text-3xl">{pillar.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-mist">{pillar.summary}</p>
                <Link href={pillar.href} className="mt-6 inline-flex items-center gap-2 text-sm text-paper">
                  {pillar.title} in detail <IconArrow className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/contact">Talk through the mix</Button>
        </div>
      </Section>
    </>
  );
}
