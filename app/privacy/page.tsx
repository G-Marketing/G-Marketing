import Link from "next/link";
import { Kicker, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy",
  description: "How G-Marketing handles contact data, cookies, and future advertising pixels.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section className="pt-16">
      <Kicker>Legal</Kicker>
      <h1 className="mt-4 font-bold text-4xl sm:text-5xl">Privacy</h1>
      <div className="mt-10 max-w-3xl space-y-8 text-sm leading-7 text-mist">
        <p>
          Last updated 11 September 2026. Controller: {SITE.name}. Contact: {SITE.email}.
          Site use is also governed by our{" "}
          <Link href="/terms" className="text-paper underline-offset-4 hover:underline">
            Terms of Use
          </Link>
          .
        </p>
        <section>
          <h2 className="text-lg text-paper">What we collect</h2>
          <p className="mt-2">
            The contact form stores name, work email, company, website, market
            focus, service interest, budget band, message, and any UTM parameters
            present on the URL. That is sales correspondence, not a marketing list.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-paper">Cookies</h2>
          <p className="mt-2">
            Today the site uses an essential acknowledgement flag in local storage
            so the cookie notice does not repeat. No analytics or advertising
            cookies are set until a measurement ID is installed with your consent
            model in place.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-paper">Ads and SEO tooling</h2>
          <p className="mt-2">
            Pages include structured data, canonical URLs, Open Graph tags, and a
            `dataLayer` stub so Google Tag Manager, Google Ads, Meta, and LinkedIn
            can be connected later without rebuilding the site. Conversion event
            name for the form is `generate_lead`.
          </p>
        </section>
        <section>
          <h2 className="text-lg text-paper">Retention</h2>
          <p className="mt-2">
            Lead records are kept as long as needed to reply and to run the
            commercial relationship, then deleted on request to {SITE.email}.
          </p>
        </section>
      </div>
    </Section>
  );
}
