'use client'
import LegalPage, { LegalSection } from '@/components/LegalPage'

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      headline="Terms & Conditions"
      subhead="The ground rules. Read once, refer back never (hopefully)."
      lastUpdated="July 2026"
    >
      <LegalSection>
        <p>
          By using aylenmontenegro.com or any of our products (TC Services, CloseAdmin,
          Snarkletter), you agree to the following terms.
        </p>
      </LegalSection>

      <LegalSection heading="Who this is for">
        <p>
          Our services are built for licensed real estate professionals and their teams.
          You must be at least 18 years old and legally able to enter into a contract
          to use our paid services.
        </p>
      </LegalSection>

      <LegalSection heading="Services provided">
        <ul>
          <li>
            <strong>TC Services</strong> — transaction coordination provided under the
            terms of a separate service agreement and rate sheet. These Terms & Conditions
            don't replace that agreement; where they conflict, the signed service agreement
            governs.
          </li>
          <li>
            <strong>CloseAdmin</strong> — software tools provided on a
            subscription or waitlist basis, subject to the specific terms presented at
            signup or checkout.
          </li>
          <li>
            <strong>Snarkletter</strong> — a free email newsletter. Subscribing doesn't
            create any contractual service relationship beyond receiving emails you can
            unsubscribe from at any time.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Payment & billing">
        <p>
          Fees for paid services are billed as described at signup (via Stripe) and are
          non-refundable except as required by law or as explicitly stated in your service
          agreement.
        </p>
      </LegalSection>

      <LegalSection heading="Acceptable use">
        <p>
          You agree not to misuse our tools — including attempting to access other users'
          data, reverse-engineer our software, or use our content or tools for any
          unlawful purpose.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          All content, branding, and software on this site belong to Aylen Montenegro
          unless otherwise noted. You may not reproduce or redistribute
          our content or tools without explicit written permission.
        </p>
      </LegalSection>

      <LegalSection heading="Disclaimers">
        <p>
          Our tools and content are provided "as is." We do our best to keep everything
          accurate and running smoothly, but we don't guarantee uninterrupted service,
          and we aren't liable for indirect or consequential damages arising from your
          use of our site or tools.
        </p>
      </LegalSection>

      <LegalSection heading="Not legal, tax, or financial advice">
        <p>
          Nothing on this site — including blog posts, the Snarkletter, or in-app
          guidance — constitutes legal, tax, or financial advice. Always confirm
          transaction-specific questions with your broker, attorney, or accountant.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to these terms">
        <p>
          We may update these terms from time to time. Continued use of our services
          after a change means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions? Reach us at{' '}
          <a
            href="mailto:hello@aylenmontenegro.com"
            style={{ color: '#5f9ea0', textDecoration: 'none' }}
          >
            hello@aylenmontenegro.com
          </a>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
