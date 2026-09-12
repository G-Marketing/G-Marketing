import Image from "next/image";
import { HeroPoints } from "./HeroPoints";
import { Button, Container, Kicker, Section } from "./ui";
import { IconArrow } from "./icons";

type Block = { label: string; items: string[] };
type Offering = { title: string; body: string };

export function ServicePage({
  kicker,
  title,
  points,
  image,
  imageAlt,
  offerings,
  effectiveness,
  ctaQuery,
}: {
  kicker: string;
  title: string;
  points: readonly string[];
  image: string;
  imageAlt: string;
  offerings: Offering[];
  effectiveness: Block[];
  ctaQuery: string;
}) {
  return (
    <>
      <section className="relative overflow-hidden">
        <Container className="relative py-10 sm:py-14">
          <Kicker>{kicker}</Kicker>
          <h1 className="mt-3 font-bold tracking-tight text-paper [font-size:clamp(1.05rem,5.2vw,3.35rem)]">
            {title}
          </h1>
          <div className="mt-6 grid items-stretch gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-6 lg:h-full lg:min-h-[300px]">
              <HeroPoints points={points} />
              <div>
                <Button href={`/contact?service=${encodeURIComponent(ctaQuery)}`}>
                  Start with this line <IconArrow className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-line sm:min-h-[300px] lg:min-h-full">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <h2 className="font-bold text-3xl text-paper">What we run</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {offerings.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-panel p-6">
              <h3 className="text-lg font-medium text-paper">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mist">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-panel/60">
        <Kicker>Effectiveness</Kicker>
        <h2 className="mt-3 font-bold text-3xl text-paper">How this line is judged</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {effectiveness.map((block) => (
            <article key={block.label} className="rounded-2xl border border-line bg-panel p-6">
              <h3 className="text-sm uppercase tracking-[0.16em] text-gold">{block.label}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-mist">
                {block.items.map((item) => (
                  <li key={item} className="border-l border-cobalt/60 pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
