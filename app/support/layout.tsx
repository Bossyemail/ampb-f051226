// ClauseVault support page — not part of the public website.
// Source is preserved for future standalone extraction.
// To restore public access: set CLAUSEVAULT_ENABLED=true in Vercel environment variables.

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function SupportLayout({ children }: { children: ReactNode }) {
  if (process.env.CLAUSEVAULT_ENABLED !== 'true') {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif', color: '#3d3c3c' }}>
        <p>This page is temporarily unavailable.</p>
      </div>
    );
  }
  return <>{children}</>;
}
