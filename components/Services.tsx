// components/Services.tsx
import { ArrowRight } from "lucide-react";

type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  href: string;
};

const LAVENDER = "from-[#C3B4E3]/0 via-[#D6C3F3]/10 to-[#E8E0FF]/0";

const services: Service[] = [
  {
    title: "Book Publishing",
    desc: "Real estate wisdom without the BS — frameworks you can apply tomorrow.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" className="text-[#D6C3F3]">
        <rect x="3" y="4" width="18" height="16" rx="2" ry="2" stroke="currentColor" fill="none"/>
      </svg>
    ),
    href: "/read",
  },
  {
    title: "BossyEmail",
    desc: "Email templates that close deals faster — in your voice, minus the rewrites.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" className="text-[#D6C3F3]">
        <path d="M4 6h16v12H4z" stroke="currentColor" fill="none"/>
        <path d="M4 7l8 6 8-6" stroke="currentColor" fill="none"/>
      </svg>
    ),
    href: "/bossyemail",
  },
  {
            title: "clausevault",
    desc: "Legal language that actually makes sense — faster addenda, fewer fires.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" className="text-[#D6C3F3]">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" fill="none"/>
        <path d="M8 12h8M8 16h5M8 8h8" stroke="currentColor"/>
      </svg>
    ),
    href: "/clausevault",
  },
  {
    title: "TC & Consulting",
    desc: "VIP transaction coordination + systems so your pipeline runs on rails.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" className="text-[#D6C3F3]">
        <circle cx="12" cy="12" r="9" stroke="currentColor" fill="none"/>
        <path d="M8 12h8" stroke="currentColor"/>
      </svg>
    ),
    href: "/elevate",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center mb-8">
        My Services
      </h2>

      {/* 2 columns at sm+; stays 2 columns at lg for a crisp 2×2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-fr">
        {services.map((s) => (
          <a
            key={s.title}
            href={s.href}
            className="group relative isolate flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0F1115] p-6 transition hover:bg-[#13161b] h-full"
          >
            {/* subtle glass gradient on hover */}
            <div
              className={`pointer-events-none absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition
                bg-gradient-to-br ${LAVENDER}`}
            />

            {/* left icon */}
            <div className="shrink-0 rounded-lg border border-white/15 p-2.5 text-[#D6C3F3]">
              {s.icon}
            </div>

            {/* center text */}
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-white leading-tight group-hover:text-[#D6C3F3] transition">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-gray-400 line-clamp-3">
                {s.desc}
              </p>
            </div>

            {/* right arrow */}
            <div className="ml-auto">
              <ArrowRight
                className="h-5 w-5 text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#D6C3F3]"
                aria-hidden="true"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
