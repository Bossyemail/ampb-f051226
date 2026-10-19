'use client'
import LegalPage, { LegalSection } from '@/components/LegalPage'

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      headline="Accessibility Statement"
      subhead="Built to work for everyone — not just the people who never zoom out."
      lastUpdated="July 2026"
    >
      <LegalSection>
        <p>
          We're committed to making aylenmontenegro.com usable by as many people as
          possible, including people with visual, auditory, motor, or cognitive
          disabilities.
        </p>
      </LegalSection>

      <LegalSection heading="What we're doing">
        <ul>
          <li>Using semantic HTML and clear heading structure so screen readers can navigate the site logically</li>
          <li>Maintaining sufficient color contrast between text and backgrounds</li>
          <li>Ensuring interactive elements (buttons, links, forms) are keyboard-navigable</li>
          <li>Testing key flows (signup forms, newsletter opt-in, contact) for basic screen-reader compatibility</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Ongoing work">
        <p>
          Accessibility isn't a one-time checklist — it's something we keep improving as
          the site evolves. If new features or design changes fall short, we want to know.
        </p>
      </LegalSection>

      <LegalSection heading="Feedback & contact">
        <p>
          If you experience any difficulty accessing content or functionality on this site,
          please reach out at{' '}
          <a
            href="mailto:hello@aylenmontenegro.com"
            style={{ color: '#5f9ea0', textDecoration: 'none' }}
          >
            hello@aylenmontenegro.com
          </a>.
          Tell us what page you were on and what happened — we'll do our best to fix
          it and get back to you.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
