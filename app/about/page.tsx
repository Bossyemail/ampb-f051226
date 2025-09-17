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
  const [activeTickerItem, setActiveTickerItem] = useState<string | null>('story');

  const tickerItems = [
    {
      id: 'story',
      number: '01',
      title: 'Story',
      content: (
        <>
          <div className="relative mb-6">
            <span className="float-left text-white/60 text-4xl font-mono tracking-wider leading-none mr-4 mt-1">
              01
            </span>
            <p>The phone was ringing. A loan officer was waving a file. On line two, a client wanted "someone older and more experienced." I was 18, working the front desk of a lending firm. Two lessons came fast: This industry wasn't built for me. I'd have to be so good they couldn't ignore me.</p>
          </div>
          
          {/* Mobile version - shorter content */}
          <div className="block md:hidden space-y-4">
            <p>Back then, there was no tech to lean on. Contracts were faxed, files lived in manila folders, and "transaction management" meant a stack of sticky notes and a highlighter.</p>
            
            <p>I've worked in lending, title, operations, and sales, which means I've seen every angle of the deal — where it breaks, why it closes, and what agents overlook until it's too late.</p>
            
            <p>The truth? Chaos never goes away. But systems, experience, and the right tools make sure you survive it. Because in this business, boring closings are the ultimate compliment.</p>
          </div>
          
          {/* Desktop version - full content */}
          <div className="hidden md:block space-y-6">
            <p>Back then, there was no tech to lean on. Contracts were faxed, files lived in manila folders, and "transaction management" meant a stack of sticky notes and a highlighter. Fast-forward two decades and now the panic is that AI will unlock a Supra box and take the agent's job.</p>
            
            <p>I've had a front row seat to every shift in between — from the paper-heavy days to Zillow connecting all MLS feeds nationwide, to DocuSign changing signatures forever, to today's wave of AI tools that promise to replace what experience still does better.</p>
            
            <p>I've worked in lending, title, operations, and sales, which means I've seen every angle of the deal — where it breaks, why it closes, and what agents overlook until it's too late. Two recessions and thousands of contracts later, I'm still here: the fixer who gets the 6:30 p.m. "everything's on fire" text, the compliance hawk who spots risks before attorneys do, and now the builder creating software to fix the gaps the industry still pretends aren't there.</p>
            
            <p>The truth? Chaos never goes away. But systems, experience, and the right tools make sure you survive it. Because in this business, boring closings are the ultimate compliment.</p>
          </div>
          
          {/* Desktop only - hide on mobile to save space */}
          <div className="hidden md:block mt-12 pt-8 border-t border-white/10">
            <h3 className="text-center text-2xl font-bold mb-4">
              The 20+ Year Bird's-Eye View
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8 text-center">
              I'm not just licensed and experienced — I'm local. My career has spanned lending, operations, title, and sales,<br />
              giving me a 360° understanding of how deals move (or fall apart) in South Florida.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
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
            
            <p className="text-gray-400 italic text-sm text-center mb-8">
              I know the regulations, the personalities, and the nuances that can make or break a closing. Every challenge I've navigated has been filed away in my mental library for the next time I need it — and believe me, there's always a next time.
            </p>
            
            <div className="text-center">
              <a href="mailto:hello@aylenmontenegro.com"
                className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                onClick={() => handleButtonClick('Contact Aylen', 'email')}>
                Contact Aylen →
              </a>
              <p className="text-sm text-gray-400 mt-2">Let's work together.</p>
            </div>
          </div>
          
          {/* Mobile only - simplified contact section */}
          <div className="block md:hidden mt-8 pt-6 border-t border-white/10 text-center">
            <a href="mailto:hello@aylenmontenegro.com"
              className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
              onClick={() => handleButtonClick('Contact Aylen', 'email')}>
              Contact Aylen →
            </a>
            <p className="text-sm text-gray-400 mt-2">Let's work together.</p>
          </div>
        </>
      )
    },
    {
      id: 'what-i-do',
      number: '02',
      title: 'What I Do',
      content: (
        <>
          <div className="relative mb-6">
            <span className="float-left text-white/60 text-4xl font-mono tracking-wider leading-none mr-4 mt-1">
              02
            </span>
            <p>I keep deals alive, clean, and compliant — and I've been doing it since before "transaction coordinator" was even a job title.</p>
          </div>
          
          <p className="mb-6">Here's what that looks like today:</p>
          
          <ul className="mb-6">
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span>Support from Contract to Closing.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span>Critical deadlines tracked before they become fire drills.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span>Compliance handled without you having to chase it.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span>Agents free to actually sell instead of babysitting paperwork.</span>
            </li>
          </ul>
          
          <p>I've seen this business evolve from hand-signed contracts to e-signatures, from file cabinets to cloud storage, and now to AI drafting clauses. Through all of it, one truth hasn't changed: deals don't close on technology — they close on precision, discipline and know-how. That's what I deliver.</p>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-center text-2xl font-bold mb-4">
              The 20+ Year Bird's-Eye View
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8 text-center">
              I'm not just licensed and experienced — I'm local. My career has spanned lending, operations, title, and sales,<br />
              giving me a 360° understanding of how deals move (or fall apart) in South Florida.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
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
            
            <p className="text-gray-400 italic text-sm text-center mb-8">
              I know the regulations, the personalities, and the nuances that can make or break a closing. Every challenge I've navigated has been filed away in my mental library for the next time I need it — and believe me, there's always a next time.
            </p>
            
            <div className="text-center">
              <a href="mailto:hello@aylenmontenegro.com"
                className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                onClick={() => handleButtonClick('Contact Aylen', 'email')}>
                Contact Aylen →
              </a>
              <p className="text-sm text-gray-400 mt-2">Let's work together.</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'who-im-for',
      number: '03',
      title: 'Who I\'m For',
      content: (
        <>
          <div className="relative mb-6">
            <span className="float-left text-white/60 text-4xl font-mono tracking-wider leading-none mr-4 mt-1">
              03
            </span>
            <p>I love what I do, but here's the thing — in real estate sales we're all independent contractors. That means we get to choose each other. I don't believe in forced fits. If we work together, it's because we both know it's the right move: you value precision and systems, and I bring the experience and chaos control to back you up.</p>
          </div>
          
          <p className="mb-6">I work best with:</p>
          
          <ul className="mb-6">
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span>Full-time agents who treat this like a career, not a side hustle.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span>Producers with volume who understand leverage and don't want their growth capped by paperwork.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span>Teams that run like businesses and know that systems and compliance are non-negotiable.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span>Operators who value reputation — because in this industry, your name is your currency.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span>Pros who understand tools are helpers, not saviors. AI might draft an addendum, but it can't stop you from blowing a deadline.</span>
            </li>
          </ul>
          
          <p className="mb-6">Who I don't work with:</p>
          
          <ul className="mb-6">
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span>Side-hustlers looking for a discount.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span>Fire-drill agents who only call when the house is already burning down.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span>Anyone who thinks "compliance" is optional until their broker or the state comes knocking.</span>
            </li>
          </ul>
          
          <p>If you want a checkbox-pusher, you've got options. If you want a partner who sees the whole board, anticipates the problems, and protects your business like it's their own — you're in the right place.</p>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-center text-2xl font-bold mb-4">
              The 20+ Year Bird's-Eye View
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8 text-center">
              I'm not just licensed and experienced — I'm local. My career has spanned lending, operations, title, and sales,<br />
              giving me a 360° understanding of how deals move (or fall apart) in South Florida.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
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
            
            <p className="text-gray-400 italic text-sm text-center mb-8">
              I know the regulations, the personalities, and the nuances that can make or break a closing. Every challenge I've navigated has been filed away in my mental library for the next time I need it — and believe me, there's always a next time.
            </p>
            
            <div className="text-center">
              <a href="mailto:hello@aylenmontenegro.com"
                className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                onClick={() => handleButtonClick('Contact Aylen', 'email')}>
                Contact Aylen →
              </a>
              <p className="text-sm text-gray-400 mt-2">Let's work together.</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'how-i-work',
      number: '04',
      title: 'How I Work',
      content: (
        <>
          <div className="relative mb-6">
            <span className="float-left text-white/60 text-4xl font-mono tracking-wider leading-none mr-4 mt-1">
              04
            </span>
            <p>Technology has changed. Principles haven't. From the moment a contract hits my desk to the day the keys change hands, I follow a protocol for every step and every contingency. Reviewing documents, tracking deadlines, coordinating with all parties, keeping communication clean — nothing is left to chance.</p>
          </div>
          
          <p className="mb-6">Every deal runs on systems, not fire drills. If there's risk, you'll hear it from me first. If there's a shortcut that looks tempting, I'll guide you back to the path that's legally, ethically, and morally right — because protecting your reputation matters more than saving two minutes.</p>
          
          <p className="mb-6">Here's what you can expect working with me:</p>
          
          <ul className="mb-6">
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>Calm over Chaos.</strong> Every deal gets a process — so you're not waking up to fire drills.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>Transparency, Always.</strong> You'll know where things stand without having to ask. If there's a risk, you'll hear it from me first.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>Proactive {'>'} Reactive.</strong> I don't wait for problems to land in your lap. I flag them before they cost you a commission.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>Selective Roster.</strong> I only work with agents who respect the process — because that's how I keep the quality high.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>Partnership Mindset.</strong> I don't just move paper. I safeguard your contracts, your compliance, and your credibility.</span>
            </li>
          </ul>
          
          <p className="mb-6">Yes, I use the tools — from e-sign to AI. I even build my own. But the tech doesn't matter without someone who knows the terrain, the rules, and how to keep the deal alive.</p>
          
          <p>That's me.</p>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-center text-2xl font-bold mb-4">
              The 20+ Year Bird's-Eye View
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8 text-center">
              I'm not just licensed and experienced — I'm local. My career has spanned lending, operations, title, and sales,<br />
              giving me a 360° understanding of how deals move (or fall apart) in South Florida.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
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
            
            <p className="text-gray-400 italic text-sm text-center mb-8">
              I know the regulations, the personalities, and the nuances that can make or break a closing. Every challenge I've navigated has been filed away in my mental library for the next time I need it — and believe me, there's always a next time.
            </p>
            
            <div className="text-center">
              <a href="mailto:hello@aylenmontenegro.com"
                className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                onClick={() => handleButtonClick('Contact Aylen', 'email')}>
                Contact Aylen →
              </a>
              <p className="text-sm text-gray-400 mt-2">Let's work together.</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'rules-i-live-by',
      number: '05',
      title: 'Rules I Live By',
      content: (
        <>
          <div className="relative mb-6">
            <span className="float-left text-white/60 text-4xl font-mono tracking-wider leading-none mr-4 mt-1">
              05
            </span>
            <p>These aren't motivational quotes. They're survival tactics from two decades in the trenches. The industry changes — fax machines, e-signatures, AI — but these rules hold no matter what.</p>
          </div>
          
          <ul className="mb-6">
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>Audit-Proof or Bust</strong> → If it feels risky, it is.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>Say No Faster</strong> → Boundaries are the real luxury.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>Match Their Pace</strong> → A client's speed is their trust.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>Corazón — Breathe</strong> → Panic is optional; prep isn't.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>Add Value First</strong> → Invoice second. Goodwill compounds.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>Assume the Plot Twist</strong> → Every deal has one. Plan for it.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>Structure {'>'} Chaos</strong> → If it's not in writing, it didn't happen.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>Stay in the Arena</strong> → Real advice comes from those still doing it.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>Move Fast & Break Nothing</strong> → Speed with safeguards beats chaos.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>Be So Good</strong> → They can't ignore you (especially the ones who tried).</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>Loyalty Is a Two-Way Street</strong> → I protect those who protect the work.</span>
            </li>
            <li className="flex items-start">
              <span className="text-white/60 mr-3 mt-1">›</span>
              <span><strong>You're Only as Good as Your Last Deal</strong> → Reputations reset at every closing.</span>
            </li>
          </ul>
          
          <p>Steal these until you make your own. Mine were built in the trenches to keep deals from catching fire — mantras that tame chaos, keep contracts clean, and remind you that boring closings are the goal.</p>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-center text-2xl font-bold mb-4">
              The 20+ Year Bird's-Eye View
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8 text-center">
              I'm not just licensed and experienced — I'm local. My career has spanned lending, operations, title, and sales,<br />
              giving me a 360° understanding of how deals move (or fall apart) in South Florida.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
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
            
            <p className="text-gray-400 italic text-sm text-center mb-8">
              I know the regulations, the personalities, and the nuances that can make or break a closing. Every challenge I've navigated has been filed away in my mental library for the next time I need it — and believe me, there's always a next time.
            </p>
            
            <div className="text-center">
              <a href="mailto:hello@aylenmontenegro.com"
                className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                onClick={() => handleButtonClick('Contact Aylen', 'email')}>
                Contact Aylen →
              </a>
              <p className="text-sm text-gray-400 mt-2">Let's work together.</p>
            </div>
          </div>
        </>
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
      
      <div className="min-h-screen bg-gradient-to-b from-[#121216] via-[#0c0d11] to-[#0a0a0d] text-white">
        {/* Enhanced Sticky Navigation */}
        <StickyNavigation />

        {/* Hero Section */}
        <section 
          className="relative h-[1100px] w-full -mt-32"
          style={{
            backgroundImage: 'url(/images/IMG_6635.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 10%',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/60" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 to-transparent" />
          <div className="absolute inset-0 flex items-center pt-20">
            <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
              <div className="flex items-start justify-between">
                <div className="text-left max-w-sm pr-8">
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="font-body text-sm text-gray-300 leading-relaxed mb-2"
                    >
                      Hey there,
                    </motion.p>
                    <div className="space-y-1">
                      <motion.h1
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-1"
                        style={{ textShadow: '0 1px 2px rgba(0,0,0,0.25)' }}
                      >
                        I&apos;m <span className="italic font-bold">Aylen<br />Montenegro</span>
                      </motion.h1>
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="w-16 h-px bg-white/10 mb-1"
                      />
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-sm italic text-gray-300 mb-3"
                      >
                        Deal Flow Architect • SaaS Builder • Author
                      </motion.p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="font-body text-base text-gray-300 max-w-lg leading-relaxed mt-4 space-y-2"
                    >
                      {/* Mobile version - shorter content */}
                      <div className="block md:hidden">
                        <p>I close contracts and contain chaos — calm, clean, on time.</p>
                        <p>Twenty years in the arena gave me pattern recognition your deals can bank on.</p>
                        <p>This space is where I share the good stuff — tools, stories, and unfiltered truths that help you close more deals.</p>
                      </div>
                      
                      {/* Desktop version - full content */}
                      <div className="hidden md:block space-y-2">
                        <p>I close contracts and contain chaos — calm, clean, on time.</p>
                        
                        <p>Twenty years in the arena gave me pattern recognition your deals can bank on. I've worn every hat in this business, and now I'm building software to keep closings boring — the good kind.</p>
                        
                        <p>This space is different.</p>
                        <p>It's where I share the good stuff — the tools, stories, and unfiltered truths that actually help you close more deals, stay compliant, and look good doing it.</p>
                        
                        <p>Because business should be smart, profitable, and yes — even a little fun.</p>
                      </div>
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
            <div className="space-y-6">
              {/* item */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-white text-4xl font-mono tracking-wider text-right">20+</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">YEARS EXPERIENCE</p>
              </motion.div>

              <hr className="border-t border-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <p className="text-white text-4xl font-mono tracking-wider text-right">South</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">FLORIDA</p>
              </motion.div>

              <hr className="border-t border-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <p className="text-white text-4xl font-mono tracking-wider text-right">Real</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">ESTATE EXPERT</p>
              </motion.div>
            </div>
          </aside>
          {/* Interactive About Sections Ticker - Mobile responsive */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-4 left-0 right-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 w-full text-sm px-4 sm:px-8 lg:px-16 py-8"
          >
            {tickerItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTickerItem(activeTickerItem === item.id ? null : item.id)}
                className={`flex items-center gap-2 sm:gap-4 transition-all duration-300 hover:scale-105 ${
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
            className="bg-neutral-900 pt-0 pb-16"
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
                      className="text-base text-gray-300 leading-relaxed max-w-4xl space-y-4"
                    >
                      <div>
                        {typeof item.content === 'string' ? (
                          <p>{item.content}</p>
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




        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
