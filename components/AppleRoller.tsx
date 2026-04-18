"use client";

import * as React from "react";

type Step = {
  label: string;
  num: string;
  title: string;
  body: string;
  footer: string;
  progress: number;
};

const STEPS: Step[] = [
  {
    label: "PROBLEM",
    num: "01",
    title: "Deals don't die from drama. They die from friction.",
    body: "Missed details, unclear communication, and the classic \"I thought you had it\" moment.",
    footer: "The smallest gap turns into a giant mess under volume.",
    progress: 25,
  },
  {
    label: "WHY",
    num: "02",
    title: "Most teams are under-systemed.",
    body: "If your process relies on memory and reaction speed, it breaks the moment you get busy.",
    footer: "Busy is the goal. Systems make it survivable.",
    progress: 50,
  },
  {
    label: "WHAT",
    num: "03",
    title: "Tools + workflows that make closing boring.",
    body: "Templates, deadlines, clause support, structure, and visibility — so you don't live in your inbox.",
    footer: "Boring scales. Chaos doesn't.",
    progress: 75,
  },
  {
    label: "WHO",
    num: "04",
    title: "For agents who want control without chaos.",
    body: "Top producers and teams who care about reputation, speed, and consistency.",
    footer: "Less fire-drills. More closings.",
    progress: 100,
  },
];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function AppleRoller() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const stageLabelRef = React.useRef<HTMLParagraphElement | null>(null);
  const stageNumberRef = React.useRef<HTMLDivElement | null>(null);
  const railRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  // Swap animation helper
  const swap = React.useCallback((el: HTMLElement | null, text: string) => {
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(6px)";
    setTimeout(() => {
      el.textContent = text;
      el.style.opacity = "1";
      el.style.transform = "translateY(0px)";
    }, 120);
  }, []);

  // Set step content
  const setStep = React.useCallback(
    (i: number) => {
      const step = STEPS[i];
      if (!step) return;

      // Roller animation: translate stack (handled by activeIndex state)
      setActiveIndex(i);

      swap(stageLabelRef.current, step.label);

      // Update rail active state
      railRefs.current.forEach((btn, idx) => {
        if (!btn) return;
        const text = btn.querySelector(".railText") as HTMLElement;
        const dot = btn.querySelector(".railDot") as HTMLElement;
        if (idx === i) {
          text?.classList.remove("text-white/55");
          text?.classList.add("text-white");
          dot?.classList.remove("bg-white/20");
          dot?.classList.add("bg-white/70");
        } else {
          text?.classList.remove("text-white");
          text?.classList.add("text-white/55");
          dot?.classList.remove("bg-white/70");
          dot?.classList.add("bg-white/20");
        }
      });

    },
    [swap]
  );

  // Scroll handler
  const onScroll = React.useCallback(() => {
    if (typeof window === "undefined") return;
    
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;

    // start/end mapping
    const start = 0.18 * vh; // aligns with sticky top-20 visually
    const total = rect.height - vh;
    const raw = total > 0 ? (start - rect.top) / total : 0;
    const p = clamp(raw, 0, 0.9999);

    const idx = clamp(Math.floor(p * 4), 0, 3);
    if (idx !== activeIndex) {
      setStep(idx);
    }
  }, [activeIndex, setStep]);

  // Jump to step
  const jumpTo = React.useCallback((i: number) => {
    if (typeof window === "undefined") return;
    
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const y = window.scrollY + rect.top;
    const target = y + section.offsetHeight * (i / 4);
    window.scrollTo({ top: target, behavior: "smooth" });
  }, []);

  // Initialize and set up scroll listener
  React.useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setPrefersReducedMotion(prefersReduced);

    if (prefersReduced) {
      setStep(0);
      return;
    }

    // Set initial step
    setStep(0);

    // Set up scroll listener
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    
    // Call onScroll after a brief delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      onScroll();
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [onScroll, setStep]);

  return (
    <section ref={sectionRef} className="relative mt-16 sm:mt-20">
      {/* Scroll track height controls how long it stays active */}
      <div className="relative" style={{ height: "240vh" }}>
        {/* Sticky stage */}
        <div className="sticky top-20">
          {/* Single stage container (NO nested boxes) */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-12">
              {/* LEFT: big number + rail */}
              <div className="lg:col-span-5">
                <p
                  ref={stageLabelRef}
                  className="text-xs tracking-[0.28em] text-white/60"
                  style={{
                    fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                    transition: "opacity 180ms ease, transform 220ms cubic-bezier(.2, .8, .2, 1)",
                    willChange: "opacity, transform",
                  }}
                >
                  PROBLEM
                </p>

                {/* NUMBER ROLLER (no box) */}
                <div className="mt-6 leading-none">
                  <div className="relative h-[120px] w-[220px] overflow-hidden">
                    {/* Apple-style fades */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-black/85 to-transparent"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-gradient-to-t from-black/85 to-transparent"></div>

                    {/* wheel stack */}
                    <div
                      ref={stageNumberRef}
                      className="will-change-transform"
                      style={{
                        transition: prefersReducedMotion
                          ? "none"
                          : "transform 520ms cubic-bezier(.2, .8, .2, 1)",
                        transform: `translateY(${-activeIndex * 120}px)`,
                      }}
                    >
                      {STEPS.map((step) => (
                        <div
                          key={step.num}
                          className="flex h-[120px] items-center justify-start text-[140px] font-semibold leading-none tracking-tight text-white/35"
                          style={{ letterSpacing: "-0.03em" }}
                        >
                          {step.num}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  PROBLEM → WHY → WHAT → WHO.
                  <br />
                  Scroll to advance.
                </p>

                {/* rail */}
                <div className="mt-8 space-y-3">
                  {STEPS.map((step, i) => (
                    <button
                      key={step.label}
                      ref={(el) => {
                        railRefs.current[i] = el;
                      }}
                      data-step={i}
                      onClick={() => jumpTo(i)}
                      className="rail flex w-full items-center justify-between border-b border-white/10 pb-3 text-left"
                    >
                      <span
                        className={`railText text-xs tracking-[0.28em] ${
                          i === 0 ? "text-white" : "text-white/55"
                        }`}
                        style={{
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                        }}
                      >
                        {step.label}
                      </span>
                      <span
                        className={`railDot h-1.5 w-1.5 rounded-full ${
                          i === 0 ? "bg-white/70" : "bg-white/20"
                        }`}
                      ></span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
