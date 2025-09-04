"use client";
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] font-sans antialiased flex flex-col">
      {/* Sticky Header */}
      <StickyNavigation />

      {/* Hero / Shop Landing */}
      <section id="shop" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c7b4e3]/20 via-[#d8c9ec]/10 to-transparent opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 py-14">
          <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-0">Pick Your Poison</h1>
              <p className="text-lg text-gray-300 mb-0">No fluff. Just checkout.</p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <button className="filter-btn cap rounded-full border border-white/15 bg-white/5 px-4 py-2 text-zinc-300 hover:bg-white/10 transition">All</button>
              <button className="filter-btn cap rounded-full border border-white/15 bg-white/0 px-4 py-2 text-zinc-300 hover:bg-white/10 transition">Books</button>
              <button className="filter-btn cap rounded-full border border-white/15 bg-white/0 px-4 py-2 text-zinc-300 hover:bg-white/10 transition">Tools</button>
              <button className="filter-btn cap rounded-full border border-white/15 bg-white/0 px-4 py-2 text-zinc-300 hover:bg-white/10 transition">Services</button>
            </div>
          </div>

          {/* Product Grid */}
          <div id="grid" className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* ClauseVault Pro (Tool) - now first */}
            <article className="card border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-1 hover:shadow-xl transition relative overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5E3C]/5 to-[#114B4D]/5 opacity-30"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.02)_0%,transparent_50%)] opacity-20"></div>
              <div className="relative z-10">
                <div className="cap text-zinc-400">Tool</div>
                <h3 className="mt-2 text-xl font-semibold text-white">clausevault Pro</h3>
                <p className="mt-2 text-zinc-300">The searchable clause library you wish you had sooner.</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-black/20 rounded">
                  Join Waitlist <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </article>
            {/* BossyEmail (Tool) - now second */}
            <article className="card border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-1 hover:shadow-xl transition relative overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#114B4D]/5 to-[#D3CCD6]/5 opacity-30"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.02)_0%,transparent_50%)] opacity-15"></div>
              <div className="relative z-10">
                <div className="cap text-zinc-400">Tool</div>
                <h3 className="mt-2 text-xl font-semibold text-white">BossyEmail</h3>
                <p className="mt-2 text-zinc-300">100+ templates + AI email generator. Inbox domination.</p>
                <p className="mt-3 text-sm text-zinc-400">$20 / $29 per month</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-black/20 rounded">
                  Subscribe <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </article>
            {/* Book 1 */}
            <article className="card border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-1 hover:shadow-xl transition relative overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#BCAFAF]/5 to-[#7B8E90]/5 opacity-25"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.015)_0%,transparent_60%)] opacity-10"></div>
              <div className="relative z-10">
                <div className="cap text-zinc-400">Book</div>
                <h3 className="mt-2 text-xl font-semibold text-white">Boring Closings (The Good Kind)</h3>
                <p className="mt-2 text-zinc-300">Because contracts don't need drama—they need decisions.</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-black/20 rounded">
                  Buy on Amazon <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </article>
            {/* Book 2 */}
            <article className="card border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-1 hover:shadow-xl transition relative overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B8E90]/5 to-[#BCAFAF]/5 opacity-25"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.015)_0%,transparent_60%)] opacity-10"></div>
              <div className="relative z-10">
                <div className="cap text-zinc-400">Book</div>
                <h3 className="mt-2 text-xl font-semibold text-white">clausevault Field Guide</h3>
                <p className="mt-2 text-zinc-300">Drop-in clauses that save your ass (and your license).</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-black/20 rounded">
                  Buy on Amazon <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </article>
            {/* Service */}
            <article className="card border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-1 hover:shadow-xl transition relative overflow-hidden lg:col-span-2">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D3CCD6]/5 via-[#7B8E90]/5 to-[#BCAFAF]/5 opacity-30"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.02)_0%,transparent_50%)] opacity-15"></div>
              <div className="relative z-10">
                <div className="cap text-zinc-400">Service</div>
                <h3 className="mt-2 text-xl font-semibold text-white">Transaction Coordination</h3>
                <p className="mt-2 text-zinc-300">Outsource the chaos. Keep the commission.</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-black/20 rounded">
                  Apply <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          </div>

          {/* Proof Strip */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="flex items-center">
              <div className="mr-5 h-px w-full bg-white/15"></div>
              <div className="text-right">
                <div className="text-4xl font-extrabold leading-none">2</div>
                <div className="mt-1 cap text-zinc-400">Books</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-5 h-px w-full bg-white/15"></div>
              <div className="text-right">
                <div className="text-2xl font-bold leading-none">Amazon</div>
                <div className="mt-1 cap text-zinc-400">Published</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-5 h-px w-full bg-white/15"></div>
              <div className="text-right">
                <div className="text-4xl font-extrabold leading-none">100+</div>
                <div className="mt-1 cap text-zinc-400">Scripts & Templates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section id="explore" className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Explore More</h2>
          <p className="cap text-zinc-400">Optional • For the Curious</p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <a href="#" className="group border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-0.5 hover:shadow-xl transition">
            <div className="cap text-zinc-400">Read</div>
            <h3 className="mt-2 text-xl font-semibold text-white">The Reading Room</h3>
            <p className="mt-2 text-zinc-300">Field-tested frameworks & clause hacks.</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-300 group-hover:text-white transition">
              Browse Books
              <ChevronRight className="w-4 h-4" />
            </span>
          </a>
          <a href="#" className="group border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-0.5 hover:shadow-xl transition">
            <div className="cap text-zinc-400">Newsletter</div>
            <h3 className="mt-2 text-xl font-semibold text-white">The Snarkletter</h3>
            <p className="mt-2 text-zinc-300">Unfiltered. Useful. Occasional chaos control.</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-300 group-hover:text-white transition">
              Sign Up
              <ChevronRight className="w-4 h-4" />
            </span>
          </a>
          <a href="#" className="group border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-0.5 hover:shadow-xl transition">
            <div className="cap text-zinc-400">About</div>
            <h3 className="mt-2 text-xl font-semibold text-white">Who’s Aylen?</h3>
            <p className="mt-2 text-zinc-300">Snarky, surgical, all signal—no noise.</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-300 group-hover:text-white transition">
              Read Bio
              <ChevronRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section id="newsletter" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#c7b4e3]/20 via-[#d8c9ec]/10 to-transparent opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Don’t sign up. Seriously.</h2>
            <p className="text-lg text-gray-300 mb-6 italic">Unfiltered • Battle-Tested • Inbox Gold.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl">
              <input type="email" placeholder="Enter your email"
                className="w-full rounded-lg bg-zinc-900/70 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c7b4e3]" />
              <button className="rounded-lg px-10 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5 font-semibold flex items-center gap-2 whitespace-nowrap">
                Sign Up <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
