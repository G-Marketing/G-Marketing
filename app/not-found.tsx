import { Button, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section className="pt-24">
      <p className="text-xs uppercase tracking-[0.22em] text-gold">404</p>
      <h1 className="mt-4 font-bold text-4xl">This page is not in the system.</h1>
      <p className="mt-4 max-w-md text-mist">
        The services, markets, and contact routes are live. Start there.
      </p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </Section>
  );
}
