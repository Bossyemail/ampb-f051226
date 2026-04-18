import type { Metadata } from "next";
import StickyNavigation from "@/components/StickyNavigation";
import Footer from "@/components/Footer";
import KitSnarkletterEmbed from "@/components/snarkletter/KitSnarkletterEmbed";

export const metadata: Metadata = {
  title: "The Real Estate Snarkletter",
  description:
    "Weekly operations intelligence for real estate professionals who are done working for cents on the dollar.",
};

const whatYouGet = [
  {
    title: "Compliance breakdowns",
    body:
      "Real disclosure failures from real files. Named, dated, and dissected — so you never get caught.",
  },
  {
    title: "Operator playbooks",
    body:
      "How top TCs and brokerages run 40+ files without losing their minds. Templates, systems, and why they work.",
  },
  {
    title: "Industry commentary",
    body:
      "What's actually happening in South Florida, not what NAR's press release says. Opinions with teeth.",
  },
];

export default function SnarkletterPage() {
  return (
    <div className="min-h-screen text-white antialiased" style={{ backgroundColor: "#0B0C0F" }}>
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_620px_at_12%_-10%,rgba(255,255,255,0.06),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_700px_at_86%_0%,rgba(201,194,255,0.07),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_900px_at_50%_120%,rgba(0,0,0,0.9),transparent_62%)]" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <main className="relative z-10">
        <StickyNavigation />

        {/* Hero */}
        <section className="relative w-full overflow-hidden pb-12 sm:pb-16">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/clausevault-bg-11.jpg)",
            }}
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#0B0C0F] via-[#0B0C0F]/75 to-transparent" />

          <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
            <div className="grid items-start gap-10 pt-32 sm:pt-40 lg:grid-cols-12 lg:pt-48">
              <div className="lg:col-span-7">
                <p
                  className="mb-4 text-xs tracking-[0.34em] text-white/50 uppercase"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  THE NEWSLETTER
                </p>

                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  The Real Estate Snarkletter.
                </h1>

                <p className="mt-6 max-w-[64ch] text-sm leading-[1.7] text-white/70 sm:text-base sm:leading-[1.75]">
                  Weekly operations intelligence for real estate professionals who are done working for cents on
                  the dollar.
                </p>
              </div>

              <div className="lg:col-span-5 lg:pl-6">
                <div className="space-y-7 text-right lg:pt-2">
                  {[
                    { label: "Weekly", tag: "IN YOUR INBOX" },
                    { label: "Field-tested", tag: "NOT THEORY" },
                    { label: "Zero fluff", tag: "JUST OPS" },
                  ].map((row, index) => (
                    <div key={row.tag} className="pb-2">
                      {index === 1 ? (
                        <div className="mb-4 ml-auto h-px w-1/2 bg-white/10" aria-hidden />
                      ) : null}
                      <div className="text-lg font-semibold tracking-tight text-white/90 sm:text-xl">{row.label}</div>
                      <div
                        className="mt-1 text-[10px] tracking-[0.28em] text-white/55"
                        style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                      >
                        {row.tag}
                      </div>
                      {index > 0 ? (
                        <div className="mt-4 ml-auto h-px w-1/2 bg-white/10" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* What you'll actually get */}
        <section className="relative py-16 md:py-24" aria-labelledby="what-you-get-heading">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <p
              className="mb-4 text-xs tracking-[0.34em] text-white/45 uppercase"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
            >
              WHAT YOU&apos;LL ACTUALLY GET
            </p>
            <h2
              id="what-you-get-heading"
              className="max-w-[40ch] text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              <span className="block">Six months of systems.</span>
              <span className="mt-2 block sm:mt-3">Not six months of SEO filler.</span>
            </h2>

            <div className="mt-8 max-w-[64ch] space-y-4 text-sm leading-relaxed text-white/65 sm:text-base sm:leading-relaxed">
              <p>One letter a week. No fluff, no vendor pitches, no motivational reheats.</p>
              <p>
                Just what actually broke in real files this week, what brokers miss until it costs them $15K, and the
                systems I&apos;ve pulled out of 3,000+ transactions to keep volume from turning into chaos.
              </p>
              <p>Built for agents, brokers, and TCs who are done being surprised on Friday at 4pm.</p>
            </div>

            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {whatYouGet.map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-semibold tracking-tight text-white/95">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base sm:leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Get on the list — Kit embed */}
        <section className="relative py-16 md:py-24" aria-labelledby="subscribe-heading">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <p
              className="mb-4 text-xs tracking-[0.34em] text-white/45 uppercase"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
            >
              GET ON THE LIST
            </p>
            <h2 id="subscribe-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Join before the next issue drops.
            </h2>
            <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-white/65 sm:text-base">
              Free forever. Unsubscribe with one click. No sales pipeline.
            </p>

            <div className="mt-10 mx-auto w-full max-w-2xl">
              {/* Script must mount inside this div — next/script injects at document end and Kit renders after the script */}
              <KitSnarkletterEmbed />
            </div>

            <p className="mt-8 max-w-[70ch] text-sm leading-relaxed text-white/50">
              Read by agents, brokers, attorneys, and ops teams in South Florida and beyond.
            </p>
          </div>
        </section>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
