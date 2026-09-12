import Image from "next/image";
import { Button, JsonLd, Kicker, Section } from "@/components/ui";
import { IconArrow } from "@/components/icons";
import { PROCESS, SCOREBOARD } from "@/data/copy";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Approach",
  description:
    "How G-Marketing diagnoses, scores, builds, and operates advertising, marketing, and growth work, and how effectiveness is proven.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Approach", path: "/approach" },
        ])}
      />
      <Section className="pt-16">
        <Kicker>Approach</Kicker>
        <h1 className="mt-4 max-w-4xl font-bold text-4xl sm:text-6xl">
          Effectiveness is a process, not a slide with a hockey stick.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
          We start with a diagnostic so we do not inherit broken tracking and
          then “optimize” it. Implementation is weekly. Proof is commercial.
        </p>
      </Section>
      <Section className="pt-0">
        <div className="overflow-hidden rounded-3xl border border-line">
          <Image
            src="/images/approach-process.jpg"
            alt="Four instruments on pale slabs in daylight: compass, hourglass, loupe, and a vial of light."
            width={1376}
            height={768}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {PROCESS.map((item) => (
            <li key={item.step} className="rounded-2xl border border-line bg-panel p-6">
              <p className="font-bold text-2xl text-gold">{item.step}</p>
              <h2 className="mt-2 text-2xl">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-mist">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section className="bg-panel/50">
        <h2 className="font-bold text-3xl">What “good” looks like in reporting</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {SCOREBOARD.map((item) => (
            <li key={item.metric} className="rounded-2xl border border-line bg-panel p-5">
              <p className="text-cobalt">{item.metric}</p>
              <p className="mt-2 text-sm text-mist">{item.meaning}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-sm leading-7 text-mist">
          We will not fabricate client names or ROI to dress this page. When
          there is a public case, it will have a real company, a real window,
          and a real constraint. Until then, the method is the proof of
          seriousness.
        </p>
        <div className="mt-8">
          <Button href="/contact">
            Request the diagnostic <IconArrow className="h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  );
}
