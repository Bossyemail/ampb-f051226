// components/ServicesMinimal.tsx
import { ArrowUp, BookOpen, Mail, FileText, Users } from "lucide-react";

type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  href: string;
};

const services: Service[] = [
  {
    title: "Book Publishing",
    desc: "Real estate wisdom without the BS — frameworks you can apply tomorrow.",
    icon: <BookOpen className="w-6 h-6" />,
    href: "/read",
  },
  {
    title: "CloseAdmin",
    desc: "Email templates that close deals faster — in your voice, minus the rewrites.",
    icon: <Mail className="w-6 h-6" />,
    href: "/closeadmin",
  },
  {
    title: "TC & Consulting",
    desc: "VIP transaction coordination + systems so your pipeline runs on rails.",
    icon: <Users className="w-6 h-6" />,
    href: "/tc-services",
  },
];

export default function ServicesMinimal() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center mb-8">
        My Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border border-white/10 rounded-lg overflow-hidden">
        {services.map((s, i) => (
          <a
            key={s.title}
            href={s.href}
            className="group flex items-center gap-4 p-6 hover:bg-[#13161b] transition"
          >
            {/* left icon */}
            <div className="shrink-0 text-[#D6C3F3]">{s.icon}</div>

            {/* text */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white leading-tight">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-gray-400">{s.desc}</p>
            </div>

            {/* arrow */}
            <ArrowUp
              className="h-5 w-5 text-gray-400 transition-transform duration-200 group-hover:-translate-y-1 group-hover:text-[#D6C3F3]"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
