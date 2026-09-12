import Link from "next/link";
import { Kicker, Section } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: "Terms that govern use of the G-Marketing website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section className="pt-16">
      <Kicker>Legal</Kicker>
      <h1 className="mt-4 font-bold text-4xl sm:text-5xl">Terms of Use</h1>
      <div className="mt-10 max-w-3xl space-y-8 text-sm leading-7 text-mist">
        <p>
          Last updated 12 September 2026. These terms govern access to and use of{" "}
          {SITE.url} and related pages operated by {SITE.name} (the &quot;site&quot;).
          Contact: {SITE.email}.
        </p>

        <section>
          <h2 className="text-lg text-paper">1. Agreement</h2>
          <p className="mt-2">
            By visiting or using the site you agree to these terms and to our{" "}
            <Link href="/privacy" className="text-paper underline-offset-4 hover:underline">
              Privacy
            </Link>{" "}
            notice. If you do not agree, do not use the site. If you use the site on
            behalf of a company, you confirm that you are allowed to bind that company
            to these terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg text-paper">2. The site is not a client contract</h2>
          <p className="mt-2">
            The site is an information and enquiry channel. Nothing on it is an offer,
            a proposal, or a binding engagement for advertising, marketing, or growth
            work. Paid work starts only when {SITE.name} and the client sign a separate
            statement of work, insertion order, or other written agreement. Those
            documents control the commercial relationship if they conflict with these
            website terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg text-paper">3. No guarantee of results</h2>
          <p className="mt-2">
            Media, search, and creative performance depend on budget, markets,
            platforms, competition, creative, tracking, and factors outside our
            control. Content on the site, including scoreboards, process notes, and
            examples of method, does not promise revenue, rankings, leads, or any
            other outcome. We do not invent client case studies or testimonials.
          </p>
        </section>

        <section>
          <h2 className="text-lg text-paper">4. Acceptable use</h2>
          <p className="mt-2">
            You may use the site only for lawful purposes. You must not attempt to
            disrupt, scrape at a scale that harms the service, introduce malware,
            probe without permission, impersonate others, or submit false or
            unlawful content through the contact form or any other channel.
          </p>
        </section>

        <section>
          <h2 className="text-lg text-paper">5. Enquiries and user content</h2>
          <p className="mt-2">
            If you send a form, email, or other message, you grant {SITE.name} a
            non-exclusive right to use that material to reply, assess fit, and run
            the commercial relationship. You confirm that you are allowed to share
            it and that it is accurate to the best of your knowledge. We may refuse
            or delete submissions that appear abusive, unlawful, or irrelevant.
          </p>
        </section>

        <section>
          <h2 className="text-lg text-paper">6. Intellectual property</h2>
          <p className="mt-2">
            The site, including text, layout, graphics, logos, and original images,
            is owned by {SITE.name} or its licensors. You may view and share pages for
            ordinary business evaluation. You may not copy the site as a template,
            republish substantial content, or use our name or marks in a way that
            suggests endorsement, without prior written consent. Platform marks shown
            on the site (for example Google, Meta, LinkedIn, YouTube) belong to their
            owners.
          </p>
        </section>

        <section>
          <h2 className="text-lg text-paper">7. Third-party services</h2>
          <p className="mt-2">
            The site may describe or link to third-party platforms, tools, and
            websites. Those services have their own terms. {SITE.name} is not
            responsible for their content, availability, or policies. Buying media or
            using those platforms is subject to their rules and to any separate
            agreement with us.
          </p>
        </section>

        <section>
          <h2 className="text-lg text-paper">8. Disclaimers</h2>
          <p className="mt-2">
            The site is provided &quot;as is&quot; and &quot;as available&quot;. To the fullest
            extent permitted by law, {SITE.name} disclaims all warranties, express or
            implied, including merchantability, fitness for a particular purpose, and
            non-infringement. We do not warrant that the site will be uninterrupted,
            error-free, or free of harmful components, or that content is complete or
            current.
          </p>
        </section>

        <section>
          <h2 className="text-lg text-paper">9. Limitation of liability</h2>
          <p className="mt-2">
            To the fullest extent permitted by law, {SITE.name} is not liable for
            indirect, incidental, special, consequential, punitive, or lost-profit
            damages arising from the site or from reliance on its content. Our total
            liability arising from use of the site is limited to the greater of one
            hundred US dollars (USD 100) or the amount you paid us, if any, solely to
            access the site in the twelve months before the claim. Some jurisdictions
            do not allow certain limits; in those places the limit is the maximum
            permitted. This clause does not limit liability that cannot be excluded
            by law, including for fraud or for death or personal injury caused by
            negligence where that cannot be excluded.
          </p>
        </section>

        <section>
          <h2 className="text-lg text-paper">10. Indemnity</h2>
          <p className="mt-2">
            You will defend and indemnify {SITE.name} and its people against claims,
            losses, and reasonable legal costs arising from your misuse of the site,
            your content, or your breach of these terms, except to the extent caused
            by our own unlawful conduct.
          </p>
        </section>

        <section>
          <h2 className="text-lg text-paper">11. Privacy</h2>
          <p className="mt-2">
            How we handle contact data, cookies, and future measurement tools is
            described in{" "}
            <Link href="/privacy" className="text-paper underline-offset-4 hover:underline">
              Privacy
            </Link>
            . The contact form is sales correspondence, not a marketing list.
          </p>
        </section>

        <section>
          <h2 className="text-lg text-paper">12. Changes</h2>
          <p className="mt-2">
            We may update the site and these terms. The &quot;Last updated&quot; date
            will change when we do. Continued use after an update means you accept the
            revised terms. Material changes to how we handle personal data are
            described in Privacy.
          </p>
        </section>

        <section>
          <h2 className="text-lg text-paper">13. Access</h2>
          <p className="mt-2">
            We may suspend, restrict, or stop the site, or refuse an enquiry, where we
            have a legitimate reason, including security, abuse, or legal risk. You
            may stop using the site at any time.
          </p>
        </section>

        <section>
          <h2 className="text-lg text-paper">14. Law and disputes</h2>
          <p className="mt-2">
            These terms are governed by the laws that apply to {SITE.name}&apos;s
            operations, without regard to conflict-of-law rules. If a dispute about
            the site cannot be resolved informally through {SITE.email}, the courts
            with jurisdiction over {SITE.name} may hear it. Mandatory consumer
            protections in your country of residence still apply where they cannot be
            waived.
          </p>
        </section>

        <section>
          <h2 className="text-lg text-paper">15. General</h2>
          <p className="mt-2">
            If a clause is unenforceable, the rest remains in force. These terms are
            the entire agreement for use of the site. They do not create a
            partnership, employment, or agency relationship. Failure to enforce a
            right is not a waiver. You may not assign these terms without our consent.
            We may assign them as part of a business transfer.
          </p>
        </section>

        <section>
          <h2 className="text-lg text-paper">16. Contact</h2>
          <p className="mt-2">
            Questions about these terms:{" "}
            <a href={`mailto:${SITE.email}`} className="text-paper underline-offset-4 hover:underline">
              {SITE.email}
            </a>
            .
          </p>
        </section>
      </div>
    </Section>
  );
}
