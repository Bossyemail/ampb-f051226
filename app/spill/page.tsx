"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import StickyNavigation from "@/components/StickyNavigation";
import Footer from "@/components/Footer";
import { useState, useRef, useEffect } from 'react';

// Confetti component
function Confetti({ isActive }: { isActive: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    size: number;
    life: number;
  }>>([]);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Create confetti particles
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    for (let i = 0; i < 50; i++) {
      particlesRef.current.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8 - 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 4 + 2,
        life: 1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1; // gravity
        particle.life -= 0.02;

        if (particle.life > 0) {
          ctx.save();
          ctx.globalAlpha = particle.life;
          ctx.fillStyle = particle.color;
          ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
          ctx.restore();
          return true;
        }
        return false;
      });

      if (particlesRef.current.length > 0) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}

// Scratch-off component
function ScratchOffCard({ children, scratchText = "SCRATCH TO REVEAL" }: { children: React.ReactNode; scratchText?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScratched, setIsScratched] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Create scratch surface
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#666666');
    gradient.addColorStop(0.5, '#888888');
    gradient.addColorStop(1, '#666666');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add scratch text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(scratchText, canvas.width / 2, canvas.height / 2);

    // Add some texture
    ctx.fillStyle = '#999999';
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 3;
      ctx.fillRect(x, y, size, size);
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsScratching(true);
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isScratching) {
      scratch(e.clientX, e.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsScratching(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsScratching(true);
    const touch = e.touches[0];
    scratch(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (isScratching) {
      const touch = e.touches[0];
      scratch(touch.clientX, touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    setIsScratching(false);
  };

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Create circular scratch area
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

    // Check if enough is scratched
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    let transparentPixels = 0;
    
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] === 0) transparentPixels++;
    }
    
    const scratchPercentage = (transparentPixels / (data.length / 4)) * 100;
    
    if (scratchPercentage > 30) {
      setIsScratched(true);
      setShowConfetti(true);
      // Hide confetti after animation completes
      setTimeout(() => setShowConfetti(false), 2000);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative group backdrop-blur-md bg-white/5 ring-1 ring-white/10 p-6 rounded-none transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(211,204,214,.35)] cursor-crosshair"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
      {!isScratched && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-crosshair"
          style={{ touchAction: 'none' }}
        />
      )}
      <Confetti isActive={showConfetti} />
    </div>
  );
}

function PremiumFAQ() {
  const faqData = [
    {
      q: "Wait… what even is a newsletter?",
      a: "It's like Instagram, but with sentences. You open it in your inbox, skim it with coffee, and actually learn something instead of just scrolling memes."
    },
    {
      q: "How long will it take me to read?",
      a: "About 3 minutes — unless you're enjoying it and read it twice. Either way, faster than waiting for an appraiser to call you back."
    },
    {
      q: "Spam? Data? Unsubscribe?",
      a: "No spam. No selling your data. And if you unsubscribe? That's fine. Enjoy your weekly Zillow email blasts instead."
    },
    {
      q: "What exactly do I get?",
      a: "A weekly hit of deal alerts, scripts, tools, and field stories that actually help you. Zero fluff. Zero guru BS."
    },
    {
      q: "Do I need wine to read this?",
      a: "Optional. Pairs well with a cabernet, a cafecito, or the tears of a buyer who just lost their fifth offer."
    },
    {
      q: "Will this make me a millionaire?",
      a: "No. But it will keep you from looking like an amateur, which is a step in the right direction."
    },
    {
      q: "Can I forward this to my broker?",
      a: "Sure — but fair warning: they might pretend they wrote it."
    },
    {
      q: "What if I already know everything?",
      a: "Congrats. You're either lying or you're the one writing those boring Facebook posts nobody reads. Either way, you'll still laugh."
    },
    {
      q: "Will you try to sell me something?",
      a: "Eventually, yes. But by then, you'll actually want it."
    },
    {
      q: "Can I reply to your emails?",
      a: "Yes, I actually read them all. But if you send me \"unsubscribe\" in all caps, I'll frame it as fan mail."
    }
  ];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="mt-16">
      <h1 className="text-center text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
        What You're Thinking
        <br />
        (But Afraid to Say Out Loud)
      </h1>
      <div className="flex flex-col divide-y divide-white/10">
        {faqData.map(({ q, a }, i) => (
          <div
            key={i}
            className="py-4 cursor-pointer group transition-all duration-300"
            onClick={() => setOpen(open === i ? null : i)}
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpen(open === i ? null : i); }}
            aria-expanded={open === i}
            role="button"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-white font-semibold text-base text-center">{q}</span>
              <ChevronDown className={`w-4 h-4 text-white transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}
              style={{ minHeight: 0 }}
            >
              <p className="text-neutral-300 text-[15px] text-center">{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SpillPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121216] via-[#0c0d11] to-[#0a0a0d] text-white">
      <StickyNavigation />
      {/* Hero Section - Consistent with other pages */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50" />
        {/* Gradient blend at bottom of hero video */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121216] to-transparent" />
        <div className="absolute inset-0 flex items-center pt-64">
          <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-5 gap-8">
              <div className="col-span-2">
                <div className="text-left">
                  <motion.h2
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2"
                  >
                    Don't sign up.<br />Seriously.
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-sm italic text-gray-300 mb-2"
                  >
                    Unfiltered • Battle-Tested • Inbox Gold.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-base text-gray-300 max-w-2xl leading-tight mb-6"
                  >
                    Unless you want real talk, field-tested tactics, and inbox gold that actually helps you win your next deal.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <button
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                      aria-label="Send Me the Snarkletter"
                    >
                      Send Me the Snarkletter
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </motion.div>
                </div>
              </div>
              {/* Stats Overlay */}
              <aside
                className="pointer-events-none absolute right-0 top-80 hidden w-56 select-none lg:block mr-6"
                aria-label="Snarkletter stats"
              >
                <div className="space-y-6">
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
                    <p className="text-white text-4xl font-mono tracking-wider text-right">NO</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">SPAM</p>
                  </motion.div>
                  <hr className="border-t border-white/10" />
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}>
                    <p className="text-white text-4xl font-mono tracking-wider text-right">NO</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">FLUFF</p>
                  </motion.div>
                  <hr className="border-t border-white/10" />
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}>
                    <p className="text-white text-4xl font-mono tracking-wider text-right">NO</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">BORING</p>
                  </motion.div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        {/* STATS OVERLAY */}
        {/* This aside block is now redundant with the new grid layout */}
      </section>
      {/* Main Content - Replace with provided copy */}
      <main className="bg-[#121216] py-12 pb-24">
        <div className="mx-auto max-w-6xl px-8 lg:px-16">
          {/* Hero Section Description */}
          <section className="mt-2">
            <p className="text-base text-gray-300 max-w-3xl leading-tight text-center mx-auto">
              This is where the glossy "rah-rah" industry advice goes to die — and real talk takes over.
              <br />
              Every edition delivers something you can actually use before your next showing, contract negotiation,
              <br />
              or late-night "we have a problem" text.
            </p>
          </section>

          {/* FROM SOMEONE IN THE ARENA (text only) */}
          <section className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">From Someone in the Arena</h2>
            <p className="mt-2 text-neutral-300 max-w-3xl mx-auto">
              Not recycled theory from a "guru." This comes from someone still in the trenches:
            </p>
            <ul className="mt-3 space-y-1 text-neutral-300 text-[14px] max-w-3xl mx-auto">
              <li className="flex gap-2 justify-center"><span className="text-neutral-500">•</span> Negotiated meltdown contracts</li>
              <li className="flex gap-2 justify-center"><span className="text-neutral-500">•</span> Cleaned up deals other agents swore were unsalvageable</li>
              <li className="flex gap-2 justify-center"><span className="text-neutral-500">•</span> Survived the 11:30 p.m. "we need to rewrite the addendum" calls</li>
            </ul>
            <blockquote className="mt-4 text-neutral-300 italic max-w-3xl mx-auto">
              Think of it as your inbox's best friend — the one who knows the contracts, the chaos,
              <br />
              and the shortcuts, and will tell you exactly what's worth your time.
            </blockquote>
          </section>

          {/* INSIDE EVERY SNARKLETTER */}
          <section className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Inside Every Snarkletter</h2>
            <p className="mt-2 text-neutral-300">
              Real solutions, zero fluff.
              <br />
              Here's what hits your inbox.
            </p>
            <div className="mt-4 grid gap-4 grid-cols-5">
              {/* 01 */}
              <ScratchOffCard scratchText="SCRATCH TO REVEAL">
                <div className="text-center">
                  <div className="text-white/60 text-4xl font-mono tracking-wider mb-2">01</div>
                  <div className="text-neutral-500 mb-3">/</div>
                  <h3 className="text-white text-lg font-semibold tracking-tight mb-3">Current Alerts</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    A deal disaster, red flags to avoid, and the fix that keeps you from stepping on the same landmine.
                  </p>
                </div>
              </ScratchOffCard>
              {/* 02 */}
              <ScratchOffCard scratchText="SCRATCH TO REVEAL">
                <div className="text-center">
                  <div className="text-white/60 text-4xl font-mono tracking-wider mb-2">02</div>
                  <div className="text-neutral-500 mb-3">/</div>
                  <h3 className="text-white text-lg font-semibold tracking-tight mb-3">Quick Win</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Takeaways, tactics, or shortcuts you can steal and drop into your deals today.
                  </p>
                </div>
              </ScratchOffCard>
              {/* 03 */}
              <ScratchOffCard scratchText="SCRATCH TO REVEAL">
                <div className="text-center">
                  <div className="text-white/60 text-4xl font-mono tracking-wider mb-2">03</div>
                  <div className="text-neutral-500 mb-3">/</div>
                  <h3 className="text-white text-lg font-semibold tracking-tight mb-3">Storytime</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    The behind-the-scenes chaos they never cover in training — equal parts lesson, laugh, and "thank God that wasn't me."
                  </p>
                </div>
              </ScratchOffCard>
              {/* 04 */}
              <ScratchOffCard scratchText="SCRATCH TO REVEAL">
                <div className="text-center">
                  <div className="text-white/60 text-4xl font-mono tracking-wider mb-2">04</div>
                  <div className="text-neutral-500 mb-3">/</div>
                  <h3 className="text-white text-lg font-semibold tracking-tight mb-3">Tools &amp; Trends</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    Clauses, news, and industry curveballs — decoded without the boring PowerPoint energy.
                  </p>
                </div>
              </ScratchOffCard>
              {/* 05 */}
              <ScratchOffCard scratchText="SCRATCH TO REVEAL">
                <div className="text-center">
                  <div className="text-white/60 text-4xl font-mono tracking-wider mb-2">05</div>
                  <div className="text-neutral-500 mb-3">/</div>
                  <h3 className="text-white text-lg font-semibold tracking-tight mb-3">Fave to Share</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    A song on repeat, an IG account worth stalking, a design that slaps, or a random gem I can't stop thinking about.
                  </p>
                </div>
              </ScratchOffCard>
            </div>
          </section>

          {/* Micro-FAQ */}
          <section className="mt-16">
            <PremiumFAQ />
          </section>

          {/* CTA - Editorial Button at the bottom */}
          <div className="mt-16 text-center">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
              aria-label="Send Me the Snarkletter"
            >
              Send Me the Snarkletter
              <ChevronDown className="w-4 h-4" />
            </button>
            <p className="mt-3 text-sm text-gray-400 italic">
              Your deals will thank you.
            </p>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
