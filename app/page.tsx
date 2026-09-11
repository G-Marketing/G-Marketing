import Image from "next/image";
import Link from "next/link";
import { Button, Container, JsonLd, Kicker, Section } from "@/components/ui";
import { IconArrow, IconChart, IconGlobe, IconShield, IconTarget } from "@/components/icons";
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
        <Image
          src="/images/hero-command.jpg"
          alt="A dark media command center with abstract performance screens, photographed from behind the operator."
          width={1376}
          height={768}
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />
        <Container className="relative py-28 sm:py-36">
          <Kicker>Local markets. Global rollouts.</Kicker>
          <h1 className="mt-5 max-w-4xl font-bold text-5xl leading-[1.05] text-paper sm:text-7xl">
            Advertising, marketing, and growth — aimed at a number.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-mist">
            G-Marketing buys demand, builds the brand system that makes it cheaper,
            and installs the measurement that proves it. If it cannot be scored, we
            do not scale it.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact">
              Book a growth diagnostic <IconArrow className="h-4 w-4" />
            </Button>
            <Button href="/approach" variant="ghost">
              See how we prove work
            </Button>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: IconTarget, title: "Buy with intent", body: "Media follows commercial goals, not channel fashion." },
            { icon: IconChart, title: "Earn compounding demand", body: "SEO, message, and lifecycle so ads are not the only engine." },
            { icon: IconShield, title: "Prove before you scale", body: "A scoreboard first. Then budget. Never the other way around." },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-panel p-6">
              <item.icon className="h-6 w-6 text-cobalt" />
              <h2 className="mt-4 text-lg text-paper">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-mist">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

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
            <article key={item.metric} className="rounded-2xl border border-line bg-ink p-6">
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
              alt="A rain-wet local street dissolving into Earth at night, connected by a thin arc of light."
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
            <li key={item.step} className="rounded-2xl border border-line bg-ink p-6">
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
        <div className="overflow-hidden rounded-3xl border border-line">
          <div className="relative">
            <Image
              src="/images/contact-room.jpg"
              alt="Two people in a dark glass meeting room reviewing performance curves at night."
              width={1600}
              height={1200}
              className="h-80 w-full object-cover opacity-50 sm:h-96"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-ink via-ink/40 to-transparent p-8 sm:p-12">
              <h2 className="max-w-xl font-bold text-4xl text-paper">
                Bring the number. We will bring the plan.
              </h2>
              <div className="mt-6">
                <Button href="/contact">
                  Request a diagnostic <IconArrow className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
