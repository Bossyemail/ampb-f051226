'use client'
import LegalPage, { LegalSection } from '@/components/LegalPage'

export default function AffiliateDisclosurePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      headline="Affiliate Disclosure"
      subhead="Yes, sometimes we get a kickback. Here's when and how."
      lastUpdated="July 2026"
    >
      <LegalSection>
        <p>
          Some links on this site, in the Snarkletter, or in our content (YouTube, social
          posts, etc.) may be affiliate links. This means if you click through and make a
          purchase, we may earn a small commission — at no additional cost to you.
        </p>
      </LegalSection>

      <LegalSection heading="What this means for you">
        <ul>
          <li>
            We only recommend tools, products, or services we've actually used or genuinely
            believe would help real estate professionals — not because a brand paid for
            placement.
          </li>
          <li>
            Affiliate relationships never influence our editorial opinions. If something
            isn't good, we'll say so, commission or not.
          </li>
          <li>
            Prices and terms for any linked product are set by that company, not us — we
            don't control or guarantee pricing, availability, or support for third-party
            products.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Why we do it">
        <p>
          Affiliate income helps support free content like the Snarkletter and our YouTube
          channel, so we can keep producing resources for agents and TCs without a paywall
          on everything.
        </p>
      </LegalSection>

      <LegalSection heading="Questions">
        <p>
          If you're ever unsure whether a specific link or recommendation is an affiliate
          relationship, reach out at{' '}
          <a
            href="mailto:hello@aylenmontenegro.com"
            style={{ color: '#5f9ea0', textDecoration: 'none' }}
          >
            hello@aylenmontenegro.com
          </a>{' '}
          and we'll tell you straight.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
