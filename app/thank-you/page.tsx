import { Button, Kicker, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Thank you",
  description: "Your G-Marketing diagnostic request was received.",
  path: "/thank-you",
  index: false,
});

export default function ThankYouPage() {
  return (
    <Section className="pt-24">
      <Kicker>Received</Kicker>
      <h1 className="mt-4 max-w-3xl font-bold text-4xl sm:text-6xl">
        We have the request. You will hear from a person.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-mist">
        If it is urgent, write the constraint in a follow-up to hello@g-marketing.net
        with the same subject line you used here.
      </p>
      <div className="mt-10">
        <Button href="/approach" variant="ghost">
          Read the approach while you wait
        </Button>
      </div>
    </Section>
  );
}
