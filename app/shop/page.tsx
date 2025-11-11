"use client";
import { useState, useEffect } from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';

export default function ShopPage() {
  const [currentImageNumber, setCurrentImageNumber] = useState(1);
  
  // Available background images (same as ClauseVault page)
  const availableImages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
    101, 102, 103, 104, 105, 106
  ];

  // Cycle through background images every 6 hours (same as ClauseVault)
  useEffect(() => {
    const getCurrentImageIndex = () => {
      const now = new Date();
      const hoursSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60));
      const arrayIndex = Math.floor(hoursSinceEpoch / 6) % availableImages.length;
      const imageNumber = availableImages[arrayIndex];
      setCurrentImageNumber(imageNumber);
      return arrayIndex;
    };

    getCurrentImageIndex();
  }, []);

  // Product data with categories
  const products = [
    { id: 1, type: 'Tool', title: 'ClauseVault', description: 'The searchable clause library you wish you had sooner.', price: '$99 / $891 per year', action: 'Secure My Clauses', href: '/clausevault' },
    { id: 2, type: 'Resource', title: 'The Real Estate Email Vault', description: '200 plug-and-play email templates.\nBuilt from 1,000+ real closings.', price: '$42', action: 'Get The Email Vault', href: 'https://aylen3.gumroad.com/l/jojlkc', spanTwo: true },
    { id: 3, type: 'Service', title: 'Transaction Coordination', description: 'Outsource the chaos.\nKeep the commission.', action: 'Apply to Work With Us', href: '/elevate' },
    { id: 4, type: 'Tool', title: 'BossyEmail', description: '100+ templates + AI email generator. Inbox domination.', price: '$19 / $39 per month', action: 'Fix My Inbox Chaos', href: '/upgrade' }
  ];

  return (
    <div className="min-h-screen text-[#fafafa] font-sans antialiased flex flex-col relative">
      {/* Background Image - Same as ClauseVault page */}
      <div className="fixed inset-0 z-0">
        <img 
          src={`/images/clausevault/clausevault-bg-${currentImageNumber}.jpg`}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          loading="eager"
          decoding="async"
        />
        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Additional gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      {/* Sticky Header */}
      <div className="relative z-10">
        <StickyNavigation />
      </div>

      {/* Hero / Shop Landing */}
      <section id="shop" className="relative isolate overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 z-20">
          <div className="mt-16">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-0">Pick Your Poison</h1>
              <p className="text-lg text-gray-300 mb-0">Choose your weapon. Close more, stress less.</p>
            </div>
          </div>

          {/* Product Grid - Mobile optimized */}
          <div id="grid" className="mt-8 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => {
              const backgroundPatterns = [
                { gradient: 'from-[#8B5E3C]/5 to-[#114B4D]/5', radial: 'circle_at_30%_20%', opacity: 30 },
                { gradient: 'from-[#114B4D]/5 to-[#D3CCD6]/5', radial: 'circle_at_70%_80%', opacity: 30 },
                { gradient: 'from-[#BCAFAF]/5 to-[#7B8E90]/5', radial: 'circle_at_50%_50%', opacity: 25 },
                { gradient: 'from-[#7B8E90]/5 to-[#BCAFAF]/5', radial: 'circle_at_20%_80%', opacity: 25 },
                { gradient: 'from-[#D3CCD6]/5 via-[#7B8E90]/5 to-[#BCAFAF]/5', radial: 'circle_at_80%_20%', opacity: 30 }
              ];
              
              const pattern = backgroundPatterns[index % backgroundPatterns.length];
              
              return (
                <article 
                  key={product.id}
                  className={`card border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition relative overflow-hidden ${
                    product.type === 'Service' || product.spanTwo ? 'md:col-span-2' : ''
                  }`}
                >
                  {/* Subtle background pattern */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pattern.gradient} opacity-${pattern.opacity}`}></div>
                  <div className={`absolute inset-0 bg-[radial-gradient(${pattern.radial},rgba(255,255,255,0.02)_0%,transparent_50%)] opacity-20`}></div>
                  <div className="relative z-10">
                    <div className="cap text-zinc-400">{product.type}</div>
                    <h3 className="mt-2 text-xl font-semibold text-white">{product.title}</h3>
                    <p className="mt-2 text-zinc-300 whitespace-pre-line">{product.description}</p>
                    {product.price && (
                      <p className="mt-3 text-sm text-zinc-400">{product.price}</p>
                    )}
                    <a href={product.href} className="mt-6 inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-black/20 rounded min-h-[44px]">
                      {product.action} <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Proof Strip */}
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <div className="flex items-center">
              <div className="mr-5 h-px w-full bg-white/15"></div>
              <div className="text-right">
                <div className="text-2xl font-bold leading-none">2 Books</div>
                <div className="mt-1 cap text-zinc-400">→ Zoom Flex</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-5 h-px w-full bg-white/15"></div>
              <div className="text-right">
                <div className="text-2xl font-bold leading-none">Stories</div>
                <div className="mt-1 cap text-zinc-400">→ Cheap Therapy</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-5 h-px w-full bg-white/15"></div>
              <div className="text-right">
                <div className="text-2xl font-bold leading-none">Amazon</div>
                <div className="mt-1 cap text-zinc-400">→ Algo Darling</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-5 h-px w-full bg-white/15"></div>
              <div className="text-right">
                <div className="text-2xl font-bold leading-none">Built</div>
                <div className="mt-1 cap text-zinc-400">→ War-Tested</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section id="explore" className="max-w-7xl mx-auto px-6 pb-16 relative z-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Explore More</h2>
          <p className="cap text-zinc-400">Optional • For the Chaos-Curious</p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <a href="/read" className="group border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-0.5 hover:shadow-xl transition">
            <div className="cap text-zinc-400">Read</div>
            <h3 className="mt-2 text-xl font-semibold text-white">The Reading Room</h3>
            <p className="mt-2 text-zinc-300">Field-tested frameworks & clause hacks.</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-300 group-hover:text-white transition">
              Browse the Books
              <ChevronRight className="w-4 h-4" />
            </span>
          </a>
          <a href="/spill" className="group border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-0.5 hover:shadow-xl transition">
            <div className="cap text-zinc-400">Newsletter</div>
            <h3 className="mt-2 text-xl font-semibold text-white">The Snarkletter</h3>
            <p className="mt-2 text-zinc-300">Unfiltered. Useful. Occasional chaos control.</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-300 group-hover:text-white transition">
              Send Me the Snark
              <ChevronRight className="w-4 h-4" />
            </span>
          </a>
          <a href="/about" className="group border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-0.5 hover:shadow-xl transition">
            <div className="cap text-zinc-400">About</div>
            <h3 className="mt-2 text-xl font-semibold text-white">Who's Aylen?</h3>
            <p className="mt-2 text-zinc-300">Snarky, surgical, all signal—no noise.</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-300 group-hover:text-white transition">
              Read the Bio
              <ChevronRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section id="newsletter" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 pb-24 z-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Don’t sign up. Seriously.</h2>
            <p className="text-lg text-gray-300 mb-6 italic">Unfiltered • Battle-Tested • Inbox Gold.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl">
              <input type="email" placeholder="Enter your email"
                className="w-full rounded-lg bg-zinc-900/70 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c7b4e3]" />
              <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-black/20 font-semibold flex items-center gap-2 whitespace-nowrap">
                I Can Handle It <ChevronRight className="w-4 h-4" />
              </button>
            </form>
            <div className="mt-4 space-y-1 text-sm text-zinc-400">
              <p>• One snarky email a week</p>
              <p>• Zero fluff. Chaos control only.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
