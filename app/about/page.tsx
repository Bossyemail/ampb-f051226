'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';
import { 
  trackPageView, 
  trackButtonClick, 
  trackVideoEvent, 
  trackScrollDepth, 
  trackTimeOnPage 
} from '@/utils/analytics';
import { structuredData, organizationData, breadcrumbData } from './structured-data';
import { useState } from 'react';

function AboutTabs() {
  const [tab, setTab] = useState('welcome');
  const tabList = [
    { id: 'welcome', label: 'Welcome' },
    { id: 'story', label: 'Story' },
    { id: 'what', label: 'What I Do' },
    { id: 'who', label: 'Who I’m For' },
    { id: 'how', label: 'How I Work' },
    { id: 'rules', label: 'Rules I Live By' },
  ];
  return (
    <>
      {/* Tabs */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tabList.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={
              `tab-btn px-3 py-2 text-sm ring-1 ring-white/10 bg-white/0 hover:bg-white/[0.06] rounded-none transition ` +
              (tab === id ? 'bg-white/10 text-white' : 'text-neutral-300')
            }
            aria-selected={tab === id}
            aria-controls={`panel-${id}`}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>
      {/* Panels */}
      <div className="mt-4">
        {/* WELCOME */}
        {tab === 'welcome' && (
          <div id="panel-welcome" className="panel backdrop-blur-md bg-white/5 ring-1 ring-white/10 p-5 rounded-none">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">Welcome to My Corner of the Internet.</h2>
              <p className="text-neutral-300 mb-2">Over 2 decades in the industry has taught me two things:</p>
              <div className="space-y-1 mb-3">
                <div className="text-white font-medium">Real estate sales is a beautiful mess.</div>
                <div className="text-white font-medium">Most of the advice out there is either outdated, sugar-coated, or completely useless in the real world.</div>
              </div>
              <p className="text-neutral-300 mb-2">This space is where I share the good stuff — the tools, the stories, the unfiltered truths — so you can close more deals, stay compliant, and look good doing it. So grab a coffee, poke around, and stay a while.</p>
              <p className="text-neutral-300 mb-1">You’ll find:</p>
              <div className="space-y-1 mb-3">
                <div className="text-white font-medium">Battle-tested tips</div>
                <div className="text-white font-medium">Tools that actually save you time</div>
                <div className="text-white font-medium">A little sarcasm to keep it interesting</div>
              </div>
              <p className="text-neutral-300">Because business should be smart, profitable, and maybe even a little fun.</p>
            </div>
          </div>
        )}
        {/* STORY */}
        {tab === 'story' && (
          <div id="panel-story" className="panel backdrop-blur-md bg-white/5 ring-1 ring-white/10 p-5 rounded-none">
            <div className="prose prose-invert max-w-none space-y-3">
              <p className="text-neutral-300">
                The phone was ringing. A loan officer was waving a file. On line two, a client wanted
                “someone older and more experienced.”
              </p>
              <p className="text-neutral-300">
                I was 18 and working the front desk of a lending firm. Two lessons arrived fast: this industry wasn’t built for me—and I’d have to be so good they couldn’t ignore me.
              </p>
              <p className="text-neutral-300">
                From that desk I watched missed deadlines, sloppy contracts, frantic agents. When I finally got a shot,
                I learned every clause, contingency, and deadline cold.
              </p>
              <p className="text-neutral-300">
                Twenty years later, I’m the transaction coordinator who rescues deals at the eleventh hour, the compliance
                hawk who spots risk before attorneys do, and the fixer who gets the 11:30 p.m. “everything’s on fire” text.
                Licensed and local to South Florida (FL/MA). Thousands of contracts closed. My job: make your closings calm,
                clean, and on time—so you keep your reputation, your time, and your sanity.
              </p>
              <p className="text-neutral-300">
                Two recessions and a front-row seat to daily fraud gave me an unusual advantage: pattern recognition.
                I see weak spots before they blow up. That experience is my clients’ best-kept secret.
              </p>
              <p className="text-neutral-300">
                Now I’m channeling it into software—as the founder and developer of a suite of apps built to fix what
                the industry ignores: tighter contracts, cleaner communication, faster decisions. And yes, I still work
                hands-on with a selective roster that values speed, compliance, and zero drama.
              </p>
              <p className="text-neutral-300">
                The goal is to keep your deals boring (the good kind).
              </p>
            </div>
          </div>
        )}
        {/* WHAT I DO */}
        {tab === 'what' && (
          <div id="panel-what" className="panel backdrop-blur-md bg-white/5 ring-1 ring-white/10 p-5 rounded-none">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 ring-1 ring-white/10 bg-white/0">
                <h3 className="text-white font-semibold text-sm">Selective TC Services</h3>
                <p className="text-neutral-300 text-[13px] mt-1">
                  White-glove contract management for seasoned, full-time agents. Every doc chased. Every deadline met.
                  Compliance airtight.
                </p>
              </div>
              <div className="p-4 ring-1 ring-white/10 bg-white/0">
                <h3 className="text-white font-semibold text-sm">BossyEmail</h3>
                <p className="text-neutral-300 text-[13px] mt-1">
                  AI-smart emails + instant templates that get replies without the cringe.
                </p>
              </div>
              <div className="p-4 ring-1 ring-white/10 bg-white/0">
                <h3 className="text-white font-semibold text-sm">clausevault</h3>
                <p className="text-neutral-300 text-[13px] mt-1">
                  A searchable library of field-tested clauses so you stop reinventing the wheel.
                </p>
              </div>
              <div className="p-4 ring-1 ring-white/10 bg-white/0">
                <h3 className="text-white font-semibold text-sm">Books</h3>
                <p className="text-neutral-300 text-[13px] mt-1">
                  Short, practical reads with scripts, checklists, and stories that actually move deals forward.
                </p>
              </div>
            </div>
          </div>
        )}
        {/* WHO I'M FOR */}
        {tab === 'who' && (
          <div id="panel-who" className="panel backdrop-blur-md bg-white/5 ring-1 ring-white/10 p-5 rounded-none">
            <ul className="space-y-2">
              <li className="text-neutral-300"><span className="text-white font-semibold">Seasoned</span> — A few wins under your belt, and ready to level up.</li>
              <li className="text-neutral-300"><span className="text-white font-semibold">Full-Time</span> — Active clients and systems needed to run your business.</li>
              <li className="text-neutral-300"><span className="text-white font-semibold">Partner-Ready</span> — You value protocols, delegation, and grown-up operations.</li>
            </ul>
          </div>
        )}
        {/* HOW I WORK */}
        {tab === 'how' && (
          <div id="panel-how" className="panel backdrop-blur-md bg-white/5 ring-1 ring-white/10 p-5 rounded-none">
            <ol className="space-y-3">
              <li className="text-neutral-300"><span className="text-white font-semibold">Fit Call</span> — We confirm scope, timelines, and expectations.</li>
              <li className="text-neutral-300"><span className="text-white font-semibold">Install Systems</span> — Shared systems, protocols, and communication preferences.</li>
              <li className="text-neutral-300"><span className="text-white font-semibold">Run the Deal</span> — We manage the moving parts; you focus on clients and future business. You get clarity, speed, and fewer texts that start with “urgent.”</li>
            </ol>
          </div>
        )}
        {/* RULES I LIVE BY */}
        {tab === 'rules' && (
          <div id="panel-rules" className="panel backdrop-blur-md bg-white/5 ring-1 ring-white/10 p-5 rounded-none">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {/* 01 */}
              <div className="group bg-white/5 ring-1 ring-white/10 rounded-none p-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(211,204,214,.35)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">01</span>
                  <span className="text-neutral-500">/</span>
                  <h3 className="text-white text-sm font-semibold tracking-tight">Add Value First</h3>
                </div>
                <p className="mt-1 text-neutral-300 text-[13px] leading-5">Invoice second. Goodwill compounds.</p>
              </div>
              {/* 02 */}
              <div className="group bg-white/5 ring-1 ring-white/10 rounded-none p-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(17,75,77,.35)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">02</span>
                  <span className="text-neutral-500">/</span>
                  <h3 className="text-white text-sm font-semibold tracking-tight">Audit-Proof or Bust</h3>
                </div>
                <p className="mt-1 text-neutral-300 text-[13px] leading-5">If it feels risky, it is.</p>
              </div>
              {/* 03 */}
              <div className="group bg-white/5 ring-1 ring-white/10 rounded-none p-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(211,204,214,.35)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">03</span>
                  <span className="text-neutral-500">/</span>
                  <h3 className="text-white text-sm font-semibold tracking-tight">Structure &gt; Chaos</h3>
                </div>
                <p className="mt-1 text-neutral-300 text-[13px] leading-5">If it’s not in writing, it didn’t happen.</p>
              </div>
              {/* 04 */}
              <div className="group bg-white/5 ring-1 ring-white/10 rounded-none p-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(17,75,77,.35)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">04</span>
                  <span className="text-neutral-500">/</span>
                  <h3 className="text-white text-sm font-semibold tracking-tight">Be So Good</h3>
                </div>
                <p className="mt-1 text-neutral-300 text-[13px] leading-5">They can’t ignore you (especially the ones who tried).</p>
              </div>
              {/* 05 */}
              <div className="group bg-white/5 ring-1 ring-white/10 rounded-none p-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(211,204,214,.35)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">05</span>
                  <span className="text-neutral-500">/</span>
                  <h3 className="text-white text-sm font-semibold tracking-tight">Say No Faster</h3>
                </div>
                <p className="mt-1 text-neutral-300 text-[13px] leading-5">Boundaries are the real luxury.</p>
              </div>
              {/* 06 */}
              <div className="group bg-white/5 ring-1 ring-white/10 rounded-none p-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(17,75,77,.35)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">06</span>
                  <span className="text-neutral-500">/</span>
                  <h3 className="text-white text-sm font-semibold tracking-tight">Match Their Pace</h3>
                </div>
                <p className="mt-1 text-neutral-300 text-[13px] leading-5">Your client’s speed is your client’s trust.</p>
              </div>
              {/* 07 */}
              <div className="group bg-white/5 ring-1 ring-white/10 rounded-none p-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(211,204,214,.35)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">07</span>
                  <span className="text-neutral-500">/</span>
                  <h3 className="text-white text-sm font-semibold tracking-tight">Assume the Plot Twist</h3>
                </div>
                <p className="mt-1 text-neutral-300 text-[13px] leading-5">Every deal has one. Plan like it’s coming.</p>
              </div>
              {/* 08 */}
              <div className="group bg-white/5 ring-1 ring-white/10 rounded-none p-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(17,75,77,.35)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">08</span>
                  <span className="text-neutral-500">/</span>
                  <h3 className="text-white text-sm font-semibold tracking-tight">Stay in the Arena</h3>
                </div>
                <p className="mt-1 text-neutral-300 text-[13px] leading-5">Real advice comes from people still doing the work.</p>
              </div>
              {/* 09 */}
              <div className="group bg-white/5 ring-1 ring-white/10 rounded-none p-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(211,204,214,.35)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">09</span>
                  <span className="text-neutral-500">/</span>
                  <h3 className="text-white text-sm font-semibold tracking-tight">Corazón—Breathe</h3>
                </div>
                <p className="mt-1 text-neutral-300 text-[13px] leading-5">Panicking is optional; preparation isn’t.</p>
              </div>
              {/* 10 */}
              <div className="group bg-white/5 ring-1 ring-white/10 rounded-none p-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(17,75,77,.35)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">10</span>
                  <span className="text-neutral-500">/</span>
                  <h3 className="text-white text-sm font-semibold tracking-tight">Loyalty Is a Two-Way Street</h3>
                </div>
                <p className="mt-1 text-neutral-300 text-[13px] leading-5">I protect the people who protect the work.</p>
              </div>
              {/* 11 */}
              <div className="group bg-white/5 ring-1 ring-white/10 rounded-none p-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(211,204,214,.35)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">11</span>
                  <span className="text-neutral-500">/</span>
                  <h3 className="text-white text-sm font-semibold tracking-tight">You’re Only as Good as Your Last Deal</h3>
                </div>
                <p className="mt-1 text-neutral-300 text-[13px] leading-5">Reputations reset at every closing.</p>
              </div>
              {/* 12 */}
              <div className="group bg-white/5 ring-1 ring-white/10 rounded-none p-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(17,75,77,.35)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">12</span>
                  <span className="text-neutral-500">/</span>
                  <h3 className="text-white text-sm font-semibold tracking-tight">Move Fast & Break Nothing</h3>
                </div>
                <p className="mt-1 text-neutral-300 text-[13px] leading-5">Speed with safeguards beats chaos every time.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default function AboutPage() {
  const startTime = useRef(Date.now());
  const scrollDepth = useRef(0);

  useEffect(() => {
    // Track page view
    trackPageView('About Page');

    // Track time on page
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      trackTimeOnPage(timeSpent);
    };

    // Track scroll depth
    const handleScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > scrollDepth.current) {
        scrollDepth.current = scrollPercent;
        if (scrollPercent % 25 === 0) { // Track every 25%
          trackScrollDepth(scrollPercent);
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = (buttonName: string, location: string) => {
    trackButtonClick(buttonName, location);
  };

  const handleVideoEvent = (action: 'play' | 'pause' | 'complete', videoId: string) => {
    trackVideoEvent(action, videoId);
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-[#121216] via-[#0c0d11] to-[#0a0a0d] text-white">
        {/* Enhanced Sticky Navigation */}
        <StickyNavigation />

        {/* Hero Section */}
        <section className="relative h-[650px] w-full -mt-32">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"

          >
            <source src="/videos/office-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60" />
          <div className="absolute inset-0 flex items-center pt-64">
            <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
              <div className="grid grid-cols-5 gap-8">
                <div className="col-span-2">
                  <div className="text-left max-w-lg">
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="font-body text-sm text-gray-300 leading-relaxed mb-2"
                    >
                      Hey there,
                    </motion.p>
                    <div className="space-y-2">
                      <motion.h1
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2"
                        style={{ textShadow: '0 1px 2px rgba(0,0,0,0.25)' }}
                      >
                        I&apos;m <span className="italic font-bold">Aylen<br />Montenegro</span>
                      </motion.h1>
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="w-16 h-px bg-white/10 mb-2"
                      />
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-sm italic text-gray-300 mb-6"
                      >
                        Real Estate Consultant • Deal Flow Architect • SaaS Builder • Author
                      </motion.p>
                    </div>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="font-body text-base text-gray-300 max-w-lg leading-relaxed mt-4"
                    >
                      I close contracts and contain chaos—calm, clean, on time. Twenty years in the arena gave me pattern recognition your deals can bank on. I also build software that keep closings boring—the good kind.
                    </motion.p>
                  </div>
                </div>
                <div className="col-span-3">
                  {/* Right side space for stats overlay */}
                </div>
              </div>
            </div>
          </div>

          {/* STATS OVERLAY */}
          <aside
            className="pointer-events-none absolute right-6 top-80 hidden w-56 select-none lg:block"
            aria-label="Aylen Montenegro stats"
          >
            <div className="space-y-6">
              {/* item */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">20+</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">YEARS EXPERIENCE</p>
              </motion.div>

              <hr className="border-t border-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">South</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">FLORIDA</p>
              </motion.div>

              <hr className="border-t border-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">Real</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">ESTATE EXPERT</p>
              </motion.div>
            </div>
          </aside>
        </section>

        {/* ABOUT (Tabbed / Glassy / Compact) Section - directly under hero */}
        <section id="about-tabs" className="bg-gradient-to-b from-neutral-900 to-neutral-950 py-12">
          <div className="mx-auto max-w-6xl px-8 lg:px-16">
            {/* Heading - no label, no box */}
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
              Contracts. Closings. Chaos control.
            </h2>
            {/* Tabs */}
            <AboutTabs />
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 px-4 lg:px-8 relative z-10 bg-[#282828]">
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-center text-2xl font-bold mb-1">
                  The 20+ Year Bird's-Eye View
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm not just licensed and experienced — I'm local. My career has spanned lending, operations, title, and sales,<br />
                  giving me a 360° understanding of how deals move (or fall apart) in South Florida.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  {
                    title: "Lending",
                    description: "Experience"
                  },
                  {
                    title: "Operations",
                    description: "Expertise"
                  },
                  {
                    title: "Title",
                    description: "Knowledge"
                  },
                  {
                    title: "Sales",
                    description: "Mastery"
                  }
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <p className="text-white text-2xl md:text-3xl font-semibold tracking-tight mb-1">{feature.title}</p>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-400 italic text-sm">
                  I know the regulations, the personalities, and the nuances that can make or break a closing. Every challenge I've navigated has been filed away in my mental library for the next time I need it — and believe me, there's always a next time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Signup Section - moved after Bird's-Eye View */}
        <div className="bg-[#282828] text-center py-8">
          <a href="/contact"
            className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
            onClick={() => handleButtonClick('Contact Aylen', 'signup')}>
            Contact Aylen →
          </a>
          <p className="text-sm text-gray-400 mt-2">Let's work together.</p>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
