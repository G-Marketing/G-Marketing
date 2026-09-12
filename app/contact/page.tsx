import { Suspense } from "react";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { IconMail } from "@/components/icons";
import { JsonLd, Kicker, Section } from "@/components/ui";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Request a G-Marketing diagnostic. Tell us the number, the market, and the constraint.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Section className="pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Kicker>Contact</Kicker>
            <h1 className="mt-4 font-bold text-4xl sm:text-6xl">
              Book the diagnostic.
            </h1>
            <p className="mt-6 text-lg leading-8 text-mist">
              Thirty minutes is enough if you bring the number you need to
              move. We reply to work emails. If the fit is wrong, we will say so.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-6 inline-flex items-center gap-2 text-paper"
            >
              <IconMail className="h-5 w-5 text-gold" />
              {SITE.email}
            </a>
            <div className="mt-10 overflow-hidden rounded-3xl border border-line">
              <Image
                src="/images/contact-room.jpg"
                alt="Bright glass meeting room with performance curves on the wall."
                width={1200}
                height={900}
                className="h-64 w-full object-cover"
              />
            </div>
          </div>
          <div className="rounded-3xl border border-line bg-panel p-6 sm:p-8">
            <Suspense fallback={<p className="text-sm text-mist">Loading form…</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Section>
    </>
  );
}
