'use client'
import LegalPage, { LegalSection } from '@/components/LegalPage'

export default function DataSecurityPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      headline="Data & Security"
      subhead="Your deal files aren't sitting in a spreadsheet on someone's desktop. Here's how we actually protect them."
      lastUpdated="July 2026"
    >
      <LegalSection>
        <p>
          Given the sensitivity of real estate transaction data, we take security
          seriously. Here's a plain-language breakdown of how your information is
          protected.
        </p>
      </LegalSection>

      <LegalSection heading="Infrastructure">
        <ul>
          <li>
            <strong>Database</strong> — data is stored using Supabase, a secure,
            encrypted database provider.
          </li>
          <li>
            <strong>Authentication</strong> — account access is managed through Clerk,
            which handles secure login, password protection, and session management.
          </li>
          <li>
            <strong>Payments</strong> — processed through Stripe. We never see or store
            your raw card details.
          </li>
          <li>
            <strong>Hosting</strong> — our site and tools are hosted on Vercel, with
            encrypted HTTPS connections enforced across the platform.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Access controls">
        <p>
          Access to client and transaction data is limited to what's necessary to
          provide the service — only the team members actively working your file can
          view its details.
        </p>
      </LegalSection>

      <LegalSection heading="Encryption">
        <p>
          Data is encrypted in transit via HTTPS/TLS and at rest through our
          infrastructure providers' standard encryption practices.
        </p>
      </LegalSection>

      <LegalSection heading="Incident response">
        <p>
          In the event of a data breach affecting your personal information, we will
          notify affected users in accordance with applicable law, as promptly as
          reasonably possible.
        </p>
      </LegalSection>

      <LegalSection heading="Your role">
        <p>
          Security is a two-way street — please use a strong, unique password for your
          account and never share your login credentials with anyone.
        </p>
      </LegalSection>

      <LegalSection heading="Questions or concerns">
        <p>
          If you have questions about how your data is secured, or want to report a
          suspected vulnerability, contact us at{' '}
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
