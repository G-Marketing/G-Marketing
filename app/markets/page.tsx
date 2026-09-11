import Image from "next/image";
import { Button, JsonLd, Kicker, Section } from "@/components/ui";
import { IconArrow, IconPin } from "@/components/icons";
import { MARKETS } from "@/data/copy";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Local and global markets",
  description:
    "How G-Marketing runs local-market density and global rollouts without mixing the two into one unaccountable budget.",
  path: "/markets",
});

export default function MarketsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Markets", path: "/markets" },
        ])}
      />
      <Section className="pt-16">
        <Kicker>Markets</Kicker>
        <h1 className="mt-4 max-w-4xl font-bold text-4xl sm:text-6xl">
          A local win and a global rollout are different products.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
          We will not run “international” as a single campaign with translated
          headlines. Local work is density. Global work is a control system with
          market cells.
        </p>
      </Section>
      <Section className="pt-0">
        <div className="overflow-hidden rounded-3xl border border-line">
          <Image
            src="/images/markets-local-global.jpg"
            alt="Local night street dissolving into the Earth at night, connected by a cobalt arc."
            width={1376}
            height={768}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {MARKETS.map((market) => (
            <article key={market.title} className="rounded-3xl border border-line bg-panel p-8">
              <h2 className="flex items-center gap-2 font-bold text-3xl">
                <IconPin className="h-6 w-6 text-gold" />
                {market.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-mist">{market.body}</p>
              <ul className="mt-6 space-y-3 text-sm text-paper">
                {market.points.map((point) => (
                  <li key={point} className="border-l border-cobalt/70 pl-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/contact">
            Tell us the market <IconArrow className="h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  );
}
