import Image from "next/image";
import { Button, Container, Kicker, Section } from "./ui";
import { IconArrow } from "./icons";

type Block = { label: string; items: string[] };
type Offering = { title: string; body: string };

export function ServicePage({
  kicker,
  title,
  intro,
  image,
  imageAlt,
  offerings,
  effectiveness,
  ctaQuery,
}: {
  kicker: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  offerings: Offering[];
  effectiveness: Block[];
  ctaQuery: string;
}) {
  return (
    <>
      <Section className="pt-16">
        <Kicker>{kicker}</Kicker>
        <h1 className="mt-4 max-w-4xl font-bold text-4xl leading-tight text-paper sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">{intro}</p>
        <div className="mt-8">
          <Button href={`/contact?service=${encodeURIComponent(ctaQuery)}`}>
            Start with this line <IconArrow className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      <Container className="pb-8">
        <div className="overflow-hidden rounded-3xl border border-line">
          <Image
            src={image}
            alt={imageAlt}
            width={1600}
            height={1200}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </Container>

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
            <article key={block.label} className="rounded-2xl border border-line bg-ink p-6">
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
