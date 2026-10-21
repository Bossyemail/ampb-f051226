// components/AboutPeek.tsx
import { ChevronRight, Instagram, Youtube, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const ACCENT = "#D6C3F3"; // Lavender Fog

export default function AboutPeek() {

  return (
    <section
      className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 pt-24"
      style={{ ["--accent" as any]: ACCENT }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Content Column */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            About Aylen
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            If you&apos;re looking for a polished, corporate-approved &quot;About&quot; page… this is not it.  I landed in MIA with $121 in my pocket, a carryon full of dreams, and zero interest in playing it safe.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Two decades later, I&apos;m the go-to for agents and brokerages who want contracts closed, chaos managed, and deals done without the added stress. Scroll for the polished version… but this is the real one.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Fair warning: once you know my story, you&apos;ll stop buying excuses from anyone else.
          </p>

          <div className="flex items-center">
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white/[0.03] transition-all duration-150 rounded-none select-none active:scale-[0.97] active:shadow-[inset_0_2px_12px_rgba(0,0,0,0.35)] active:brightness-90"
            >
              Learn more
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right Portrait */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-48 h-64 overflow-hidden">
            <img
              src="/images/aylen-portrait.jpg"
              alt="Aylen Montenegro"
              className="h-full w-full object-cover object-center grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
