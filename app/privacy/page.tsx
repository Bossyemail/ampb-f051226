'use client'
import LegalPage, { LegalSection } from '@/components/LegalPage'

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      headline="Privacy Policy"
      subhead="What we collect, why we collect it, and what we do with it — no fine print games."
      lastUpdated="July 2026"
    >
      <LegalSection>
        <p>
          Aylen Montenegro ("we," "us," "our") operates aylenmontenegro.com and its related
          products (TC Services, CloseAdmin, Snarkletter). This policy explains what
          information we collect, how we use it, and the choices you have.
        </p>
      </LegalSection>

      <LegalSection heading="Information we collect">
        <ul>
          <li>
            <strong>Account & contact information</strong> — name, email, phone, brokerage
            affiliation, and other details you provide when you sign up for a service, join
            the Snarkletter, or contact us.
          </li>
          <li>
            <strong>Transaction & deal information</strong> (CloseAdmin / TC Services clients
            only) — contract details, deadlines, communications, and files necessary to
            coordinate your transaction. This may include information about your clients and
            counterparties where relevant to a specific deal.
          </li>
          <li>
            <strong>Payment information</strong> — processed securely through Stripe. We do
            not store your full card details on our servers.
          </li>
          <li>
            <strong>Usage data</strong> — pages visited, time on site, and general analytics
            collected automatically when you use our site or tools.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="How we use it">
        <ul>
          <li>To provide the services you've signed up for (transaction coordination, CloseAdmin access, the Snarkletter, etc.)</li>
          <li>To communicate with you about your account, deals in progress, or updates you've opted into</li>
          <li>To improve our products and content</li>
          <li>To meet legal and contractual obligations related to real estate transactions</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Who we share it with">
        <p>
          We don't sell your data. We share information only with the service providers that
          power our tools — Supabase (database hosting), Stripe (payment processing), and
          Kit (email delivery) — and only to the extent needed for those tools to function. We may also share transaction details with
          parties directly involved in a deal (agents, brokers, title companies) as necessary
          to do the work you've hired us for.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <ul>
          <li>You can unsubscribe from the Snarkletter at any time via the link in any email.</li>
          <li>
            You can request a copy of, correction to, or deletion of your personal information
            by contacting us at{' '}
            <a
              href="mailto:hello@aylenmontenegro.com"
              style={{ color: '#5f9ea0', textDecoration: 'none' }}
            >
              hello@aylenmontenegro.com
            </a>.
          </li>
          <li>
            If you're located in the EU/UK or California, you may have additional rights under
            GDPR or CCPA — contact us and we'll accommodate applicable requests.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Data retention">
        <p>
          We retain personal and transaction-related information only for as long as
          reasonably necessary to provide our services, satisfy contractual obligations,
          maintain business records, resolve disputes, and comply with applicable legal
          and regulatory requirements. Retention periods vary based on the nature of
          the information and service involved.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about this policy? Reach us at{' '}
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
