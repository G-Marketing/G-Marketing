import Image from "next/image";
import Link from "next/link";
import { HeroReel } from "@/components/HeroReel";
import { HeroPoints } from "@/components/HeroPoints";
import { Button, Container, JsonLd, Kicker, Section } from "@/components/ui";
import { IconArrow, IconGlobe } from "@/components/icons";
import { FAQS, MARKETS, PILLARS, PROCESS, SCOREBOARD } from "@/data/copy";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: `${SITE.name} | Advertising, marketing, and growth`,
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />

      <section className="relative overflow-hidden">
        <Container className="relative py-10 sm:py-14">
          <Kicker className="text-sm tracking-[0.2em] sm:text-base">Multi-Market Expertise</Kicker>
          <h1 className="mt-3 w-full whitespace-nowrap font-bold tracking-tight text-paper [font-size:clamp(1.05rem,5.2vw,3.35rem)]">
            Advertising. Marketing. Growth.
          </h1>
          <div className="mt-6 grid items-stretch gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-6 lg:h-full lg:min-h-[300px]">
              <HeroPoints />
              <div>
                <Button href="/contact">
                  Book a growth diagnostic <IconArrow className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <HeroReel />
          </div>
        </Container>
      </section>

      <Section>
        <Kicker>Three lines. One operating system.</Kicker>
        <h2 className="mt-3 max-w-3xl font-bold text-4xl text-paper">
          What we actually do
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <Link key={pillar.slug} href={pillar.href} className="group block">
              <div className="overflow-hidden rounded-2xl border border-line">
                <Image
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  width={1200}
                  height={900}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.18em] text-gold">{pillar.kicker}</p>
              <h3 className="mt-2 font-bold text-3xl text-paper">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mist">{pillar.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-paper">
                Explore {pillar.title} <IconArrow className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-panel/50">
        <Kicker>Effectiveness</Kicker>
        <h2 className="mt-3 max-w-3xl font-bold text-4xl text-paper">
          The scoreboard we will not hide
        </h2>
        <p className="mt-4 max-w-2xl text-mist">
          We do not publish invented case-study percentages. We publish the
          measures an engagement is held to. If a vendor cannot tell you which of
          these they own, they are selling activity.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SCOREBOARD.map((item) => (
            <article key={item.metric} className="rounded-2xl border border-line bg-panel p-6">
              <p className="font-bold text-3xl text-cobalt">{item.metric}</p>
              <h3 className="mt-2 text-paper">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-mist">{item.meaning}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Kicker>Markets</Kicker>
            <h2 className="mt-3 font-bold text-4xl text-paper">
              Local density. Global control.
            </h2>
            <div className="mt-8 space-y-6">
              {MARKETS.map((market) => (
                <article key={market.title}>
                  <h3 className="flex items-center gap-2 text-lg text-paper">
                    <IconGlobe className="h-5 w-5 text-gold" />
                    {market.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-mist">{market.body}</p>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/markets" variant="ghost">
                Market model <IconArrow className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-line">
            <Image
              src="/images/markets-local-global.jpg"
              alt="A sunlit local street dissolving into Earth in daylight, connected by a thin cobalt arc."
              width={1376}
              height={768}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-panel/50">
        <Kicker>How work starts</Kicker>
        <h2 className="mt-3 font-bold text-4xl text-paper">Four steps, then a weekly decision</h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((item) => (
            <li key={item.step} className="rounded-2xl border border-line bg-panel p-6">
              <p className="font-bold text-2xl text-gold">{item.step}</p>
              <h3 className="mt-3 text-lg text-paper">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-mist">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <Kicker>FAQ</Kicker>
        <h2 className="mt-3 font-bold text-4xl text-paper">Before you book</h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none text-lg text-paper marker:content-none">
                {item.q}
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-mist">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-line bg-panel lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <h2 className="max-w-xl font-bold text-4xl text-paper">
              Bring the number. We will bring the plan.
            </h2>
            <div className="mt-6">
              <Button href="/contact">
                Request a diagnostic <IconArrow className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Image
            src="/images/contact-room.jpg"
            alt="Two people in a bright glass meeting room reviewing performance curves in daylight."
            width={1600}
            height={1200}
            className="h-64 w-full object-cover sm:h-80 lg:h-full"
          />
        </div>
      </Section>
    </>
  );
}
