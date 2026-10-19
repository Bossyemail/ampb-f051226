// components/ServicesQuad.tsx
import { ArrowUp } from "lucide-react";

const ACCENT = "#D6C3F3"; // Lavender Fog

type Item = {
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
};

const items: Item[] = [
  {
    title: "Books",
    desc:
      "Learn the Game (and How to Win It)\nFrom hard truths to insider tactics, my books and courses cut the fluff and give you the skills to close more, faster.",
    href: "/read",
    icon: (
      // big transparent outline icon
      <svg
        viewBox="0 0 24 24"
        className="w-14 h-14 text-[color:var(--accent)]/70"
        style={{ color: ACCENT }}
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8h18" />
      </svg>
    ),
  },
  {
    title: "BossyEmail",
    desc:
      "Say It Like a Pro — in Seconds\nInstant templates and real-estate-ready emails that chase docs, follow up, and diffuse chaos without sounding like a robot… unless you want to.",
    href: "/bossyemail",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-14 h-14 text-[color:var(--accent)]/70"
        style={{ color: ACCENT }}
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
            title: "clausevault Pro",
    desc:
      "Your Secret Weapon for Bulletproof Contracts\nStop copy-pasting outdated clauses. Get a vetted library built for South Florida real estate — and keep your deals airtight.",
    href: "/closeadmin",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-14 h-14 text-[color:var(--accent)]/70"
        style={{ color: ACCENT }}
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h6M8 16h5" />
      </svg>
    ),
  },
  {
    title: "Contract Management",
    desc:
      "Keep the Paperwork Moving (Without Losing Your Mind)\nFlawless transaction coordination so nothing slips through the cracks. Deadlines? Met. Docs? Filed. You? Still breathing.",
    href: "/tc-services",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-14 h-14 text-[color:var(--accent)]/70"
        style={{ color: ACCENT }}
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
];

export default function ServicesQuad() {
  return (
    <section
      className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      style={{ ["--accent" as any]: ACCENT }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center mb-4">
        Tools, Templates & Tactics<br />
        to Keep Your Deals (and Sanity) Intact
      </h2>
      <p className="text-lg text-gray-300 text-center mb-8 max-w-4xl mx-auto leading-relaxed">
        From contract chaos to client communication, I give South Florida agents and brokerages the exact tools, words, and workflows to close faster, look sharper, and stop wasting time on things that don't make you money.
      </p>

      {/* center hairline dividers */}
      <div className="relative">
        {/* vertical line */}
        <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />
        {/* horizontal line */}
        <div className="pointer-events-none absolute top-1/2 left-0 right-0 h-px bg-white/10 hidden sm:block" />

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {items.map((it) => (
            <a
              key={it.title}
              href={it.href}
              className="group flex items-start gap-5 p-5 md:p-6 transition-colors hover:bg-white/[0.02] rounded-xl"
            >
              {/* icon — transparent outline, slightly large */}
              <div className="shrink-0">{it.icon}</div>

              {/* copy */}
              <div className="min-w-0 pr-6">
                <h3 className="text-white text-xl font-semibold leading-tight group-hover:text-[color:var(--accent)] transition-colors">
                  {it.title}
                </h3>
                <div className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {it.desc.split('\n').map((line, index) => (
                    <p key={index} className={index === 0 ? "font-medium text-white/90 mb-1" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* arrow on the far right */}
              <ArrowUp
                className="ml-auto h-16 w-16 text-gray-400 transition-transform duration-200 group-hover:-translate-y-1 group-hover:text-[color:var(--accent)] rotate-[35deg]"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
