"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-14 lg:py-16 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-5"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
            Still Scrolling?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            At some point, you stop browsing and start closing.<br />
            Chaos won’t fix itself.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-2"
        >
          <a
            href="https://bossyemail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-md"
          >
            Try BossyEmail →
          </a>
          <p className="text-xs text-gray-400 mt-2">Get started in under 60 seconds.</p>
        </motion.div>
      </div>
    </section>
  );
}
