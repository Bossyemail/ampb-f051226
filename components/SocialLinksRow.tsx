"use client";

import { trackEvent } from "@/lib/analytics";

const socialLinks = [
  { name: "Email",     href: "mailto:hello@aylenmontenegro.com",        external: false },
  { name: "Instagram", href: "https://instagram.com/aylenbuilds",        external: true  },
  { name: "YouTube",   href: "https://youtube.com/@aylenmontenegropa",   external: true  },
  { name: "Threads",   href: "https://threads.net/@aylenbuilds",         external: true  },
];

type SocialLinksRowProps = { className?: string };

export default function SocialLinksRow({ className = "" }: SocialLinksRowProps) {
  return (
    <div className={`flex items-center gap-5 ${className}`.trim()} aria-label="Social links">
      {socialLinks.map(({ name, href, external }) => (
        <a
          key={name}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          onClick={() => trackEvent("click", "social", name.toLowerCase())}
          style={{
            fontFamily:    'var(--font-dm-mono)',
            fontSize:      '9px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color:         'rgba(239,235,226,0.45)',
            textDecoration:'none',
            transition:    'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(239,235,226,0.45)')}
        >
          {name}
        </a>
      ))}
    </div>
  );
}
