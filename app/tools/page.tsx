"use client";

import Link from "next/link";
import StickyNavigation from "@/components/StickyNavigation";
import Footer from "@/components/Footer";

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#0c0d11] text-white flex flex-col">
      <StickyNavigation />

      <main className="flex-1">
        <section
          className="pb-16 px-6 sm:px-10 lg:px-16"
          style={{ paddingTop: "272px" }} // nav gap +80px
        >
          <div className="max-w-5xl mx-auto space-y-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Tools Built From Real Transactions
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed space-y-1">
              <span className="block">
                These are not generic AI tools or downloadable fluff.
              </span>
              <span className="block">
                They’re operational systems built from real deal flow — the emails, clauses, and backend processes that actually keep transactions moving.
              </span>
            </p>
          </div>
        </section>

        <section className="pb-16 px-6 sm:px-10 lg:px-16">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* BossyEmail - Primary */}
            <div className="border border-white/18 bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg shadow-white/10">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">BossyEmail</h2>
                <p className="text-gray-100">
                  Deal-safe emails for real estate agents — instantly. When wording matters, guessing isn’t an option. BossyEmail tells you exactly what to say in inspections, follow-ups, and escalations.
                </p>
                <p className="text-sm text-gray-300">
                  If you only use one tool from this page, make it this one.
                </p>
                <div>
                  <a
                    href="https://bossyemail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-md"
                  >
                    Go to BossyEmail →
                  </a>
                </div>
              </div>
            </div>

            {/* ClauseVault - Secondary */}
            <div className="border border-white/12 bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-7">
              <div className="flex flex-col gap-3">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">ClauseVault</h2>
                <p className="text-gray-300 leading-relaxed">
                  Contract language for real-world scenarios. A curated library of deal-support clauses built around Florida’s As-Is contract framework. Designed to reduce ambiguity and support clearer communication — not replace legal advice.
                </p>
                <div>
                  <Link
                    href="/clausevault"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm border border-white text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    Go to ClauseVault →
                  </Link>
                </div>
              </div>
            </div>

            {/* Transaction Coordination - Quiet */}
            <div className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-7">
              <div className="flex flex-col gap-3">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Transaction Coordination</h2>
                <p className="text-gray-300 leading-relaxed">
                  Backend support for producing agents. I work with a limited number of agents and teams providing transaction coordination — by availability.
                </p>
                <div>
                  <Link
                    href="/elevate"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm border border-white text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    View TC Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

