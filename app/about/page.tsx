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
              `tab-btn px-3 py-2 text-sm ring-1 ring-white/10 bg-white/0 hover:bg-white/[0.06] rounded-none transition-all duration-150 select-none active:scale-[0.98] active:shadow-[inset_0_2px_10px_rgba(0,0,0,0.35)] active:brightness-90 ` +
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
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">Welcome to My Corner of the Internet.</h1>
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
            <ul className="mb-6 space-y-3 text-white/75" style={{ lineHeight: '1.7' }}>
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
  const [activeTickerItem, setActiveTickerItem] = useState<string | null>('story');

  const tickerItems = [
    {
      id: 'story',
      number: '01',
      title: 'Story',
      content: (
        <div className="space-y-6">
          <p className="mb-6 font-semibold text-white" style={{ lineHeight: '1.2' }}>This isn’t a résumé. It’s pattern recognition.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>I started where most people don’t talk about starting: answering phones, managing files, cleaning up messes, and becoming the person agents relied on when things were already on fire.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>Back then, contracts were faxed. Files lived in folders. “Transaction management” meant a highlighter and a stack of sticky notes.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>Fast-forward through multiple market cycles, two recessions, and thousands of transactions later, and one thing hasn’t changed: Deals don’t close on technology. They close on precision, discipline, and judgment. Tools evolve. Principles don’t.</p>
          <p className="mb-6 font-semibold text-white" style={{ lineHeight: '1.2' }}>The 20+ year bird’s-eye view</p>
          <ul className="mb-6 space-y-3 text-white/75" style={{ lineHeight: '1.7' }}>
            <li className="text-white/75" style={{ lineHeight: '1.7' }}>• Lending — how financing pressure really shows up</li>
            <li className="text-white/75" style={{ lineHeight: '1.7' }}>• Operations — where deals actually break</li>
            <li className="text-white/75" style={{ lineHeight: '1.7' }}>• Title — what compliance catches before attorneys do</li>
            <li className="text-white/75" style={{ lineHeight: '1.7' }}>• Sales — what agents overlook until it’s too late</li>
          </ul>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>That vantage point gives me something most people don’t have: a 360° understanding of how deals move — or stall — in South Florida. It’s also why I don’t panic when things get loud. I’ve seen this movie before.</p>
        </div>
      )
    },
    {
      id: 'closings',
      number: '02',
      title: 'Closings',
      content: (
        <div className="space-y-6">
          <p className="mb-6 font-semibold text-white" style={{ lineHeight: '1.2' }}>Today, I focus on building systems that make closings boring — the good kind.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>That includes:</p>
          <ul className="mb-6 space-y-3 text-white/75" style={{ lineHeight: '1.7' }}>
            <li className="text-white/75" style={{ lineHeight: '1.7' }}>• backend transaction coordination for a select group of producing agents</li>
            <li className="text-white/75" style={{ lineHeight: '1.7' }}>• operational frameworks that prevent fire drills</li>
            <li className="text-white/75" style={{ lineHeight: '1.7' }}>• software and tools that turn hard-earned experience into leverage</li>
          </ul>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>Everything I build comes from real client work. If it hasn’t survived a live transaction, it doesn’t ship.</p>
        </div>
      )
    },
    {
      id: 'who',
      number: '03',
      title: 'Who',
      content: (
        <div className="space-y-6">
          <p className="mb-6 font-semibold text-white" style={{ lineHeight: '1.2' }}>I work with professionals who treat real estate like a business, not a side hustle.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>People who:</p>
          <ul className="mb-6 space-y-3 text-white/75" style={{ lineHeight: '1.7' }}>
            <li className="text-white/75" style={{ lineHeight: '1.7' }}>• value precision and systems</li>
            <li className="text-white/75" style={{ lineHeight: '1.7' }}>• understand that compliance is non-negotiable</li>
            <li className="text-white/75" style={{ lineHeight: '1.7' }}>• care about reputation more than shortcuts</li>
            <li className="text-white/75" style={{ lineHeight: '1.7' }}>• want fewer fires, not more apps</li>
          </ul>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>If you’re looking for the cheapest option, I’m not it. If you’re looking for a partner who sees the whole board and protects your downside, you’re in the right place.</p>
        </div>
      )
    },
    {
      id: 'process',
      number: '04',
      title: 'Process',
      content: (
        <div className="space-y-6">
          <p className="mb-6 font-semibold text-white" style={{ lineHeight: '1.2' }}>Every deal runs on process, not adrenaline.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>I follow a protocol for every step and every contingency — reviewing documents, tracking deadlines, coordinating communication, and flagging risk before it becomes expensive.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>If there’s a problem, you’ll hear it from me first. If there’s a shortcut that compromises your position, I’ll steer you away from it.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>Speed matters. But safeguards matter more.</p>
        </div>
      )
    },
    {
      id: 'rules',
      number: '05',
      title: 'Rules',
      content: (
        <div className="space-y-6">
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>This work only functions when expectations are clear.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>So here are mine.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>We don't guess. We verify.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>We don't chase files. We run them.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>We don't cut corners to move faster.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>We don't manage chaos — We prevent it.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>Communication is direct.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>Deadlines are non-negotiable.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>Compliance comes before convenience.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>If something puts your position at risk, I'll flag it — even if it's uncomfortable.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>If a shortcut compromises the deal, we won't recommend it — even if it's faster.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>We work best with professionals who value precision, respect process, and understand that clean systems beat heroics.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>If you're looking for flexibility without accountability, this won't be a fit.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>If you're looking for someone who protects the downside and keeps deals moving quietly — it will be.</p>
          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>They're survival tactics.</p>
        </div>
      )
    }
  ];

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
      
      <div className="min-h-screen text-white" style={{ backgroundColor: '#0B0C0F' }}>
        {/* Enhanced Sticky Navigation */}
        <StickyNavigation />

        {/* Hero Section */}
        <section 
          className="relative h-[1100px] w-full -mt-32"
          style={{
            backgroundImage: 'url(/images/22.png)',
            backgroundSize: '85%',
            backgroundPosition: 'right 20%',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/60" />
          <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#0B0C0F] via-[#0B0C0F]/80 to-transparent" />
          {/* Mobile-specific gradient to hide feet */}
          <div className="absolute bottom-0 left-0 right-0 h-64 md:hidden bg-gradient-to-t from-[#0B0C0F] via-[#0B0C0F]/70 to-transparent" />
          <div className="absolute inset-0 flex items-center pt-20">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
              <div className="flex items-start justify-between">
                <div className="text-left max-w-xl md:pr-8">
                  <motion.h1
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8 text-2xl sm:text-3xl font-semibold tracking-tight text-white"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.25)' }}
                  >
                    Hi, I&apos;m Aylen Montenegro.
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="mb-8 text-xs tracking-[0.28em] text-white/60 uppercase"
                    style={{
                      fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                    }}
                  >
                    DEAL FLOW ARCHITECT. SYSTEMS BUILDER. REAL ESTATE OPERATOR.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="space-y-6 max-w-[65ch]"
                  >
                    <p className="mb-6 text-sm leading-[1.7] text-white/75 sm:text-base sm:leading-[1.75]">I don't chase chaos. I contain it — calmly, cleanly, and on time.</p>
                    <p className="mb-6 text-sm leading-[1.7] text-white/75 sm:text-base sm:leading-[1.75]">For more than two decades, I've operated inside real estate deals where wording, timing, and precision actually matter. Not in theory. In live files — inspections, extensions, escalations, compliance reviews, and the moments when one bad email can derail a closing.</p>
                    <p className="mb-6 text-sm leading-[1.7] text-white/75 sm:text-base sm:leading-[1.75]">That's the arena I come from and that's the perspective everything I build is grounded in.</p>
                  </motion.div>
                </div>
                </div>
                <div className="flex-1">
                  {/* Right side space for stats overlay */}
                </div>
              </div>
            </div>
            
            {/* STATS OVERLAY */}
            <aside
              className="pointer-events-none absolute right-6 top-80 hidden w-72 select-none lg:block"
              aria-label="Aylen Montenegro stats"
            >
            <div className="space-y-7 text-right">
              {/* item */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pb-6"
              >
                <div className="text-xl font-semibold tracking-tight text-white/90">20+</div>
                <div
                  className="mt-1 text-[10px] tracking-[0.28em] text-white/55"
                  style={{
                    fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                  }}
                >
                  YEARS EXPERIENCE
                </div>
                {/* half-length divider */}
                <div className="mt-4 ml-auto h-px w-1/2 bg-white/10"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="pb-6"
              >
                <div className="text-xl font-semibold tracking-tight text-white/90">3K+</div>
                <div
                  className="mt-1 text-[10px] tracking-[0.28em] text-white/55"
                  style={{
                    fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                  }}
                >
                  CLOSED DEALS
                </div>
                {/* half-length divider */}
                <div className="mt-4 ml-auto h-px w-1/2 bg-white/10"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="pb-6"
              >
                <div className="text-xl font-semibold tracking-tight text-white/90">4+</div>
                <div
                  className="mt-1 text-[10px] tracking-[0.28em] text-white/55"
                  style={{
                    fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                  }}
                >
                  SAAS PRODUCTS BUILT
                </div>
                {/* half-length divider */}
                <div className="mt-4 ml-auto h-px w-1/2 bg-white/10"></div>
              </motion.div>
            </div>
          </aside>
          {/* Interactive About Sections Ticker - Mobile responsive */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-4 left-0 right-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full text-sm px-4 sm:px-8 lg:px-16 py-4 sm:py-6 md:py-8"
          >
            {tickerItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTickerItem(activeTickerItem === item.id ? null : item.id)}
                className={`flex items-center gap-1 sm:gap-2 md:gap-4 transition-all duration-300 hover:scale-105 ${
                  activeTickerItem === item.id ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                }`}
              >
                <span className={`text-2xl sm:text-3xl font-mono tracking-wider transition-colors duration-300 ${
                  activeTickerItem === item.id ? 'text-white' : 'text-white/60'
                }`}>
                  {item.number}
                </span>
                <span className="text-neutral-500">\</span>
                <span className={`transition-colors duration-300 ${
                  activeTickerItem === item.id ? 'text-white' : 'text-white'
                }`}>
                  {item.title}
                </span>
              </button>
            ))}
          </motion.div>
        </section>

        {/* Ticker Content Section */}
        {activeTickerItem && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="pt-0 pb-16"
            style={{ backgroundColor: '#0B0C0F' }}
          >
            <div className="mx-auto max-w-4xl px-4 lg:px-8">
              {tickerItems
                .filter(item => item.id === activeTickerItem)
                .map((item) => (
                  <div key={item.id} className="text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-base text-white/75 max-w-[65ch] space-y-6"
                      style={{ lineHeight: '1.7' }}
                    >
                      <div>
                        {typeof item.content === 'string' ? (
                          <p className="mb-6 text-white/75" style={{ lineHeight: '1.7' }}>{item.content}</p>
                        ) : (
                          item.content
                        )}
                      </div>
                    </motion.div>
                  </div>
                ))}
            </div>
          </motion.section>
        )}

        {/* Closing message */}
        <section className="border-t border-white/5 py-28 sm:py-32 lg:py-36 px-4 sm:px-8 lg:px-16" style={{ backgroundColor: '#0B0C0F' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">If this resonates</h3>
            <p className="mt-2 text-base text-gray-300 leading-relaxed opacity-80">
              We don't need to convince each other.
            </p>
            <p className="mt-6 text-base text-gray-300 leading-relaxed opacity-80">
              If you read this and thought, "Finally — someone who actually gets it," then it's worth a conversation.
            </p>
            <p className="mt-2 text-base text-gray-300 leading-relaxed opacity-80">
              If not, that's fine too. Fit matters. Let's see if it is.
            </p>
            <div className="pt-8">
              <a
                href="mailto:hello@aylenmontenegro.com"
                onClick={() => handleButtonClick('Contact Aylen', 'closing-message')}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold bg-white text-black hover:bg-white/90 transition-all duration-150 shadow-md rounded-none select-none active:scale-[0.98] active:shadow-[inset_0_2px_10px_rgba(0,0,0,0.12)] active:brightness-95"
                style={{ color: '#000000' }}
              >
                Contact Aylen →
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
