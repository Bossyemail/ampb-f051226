"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-10 lg:py-14 pb-20 lg:pb-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
            Still Scrolling?
          </h2>
          {/* Subheadline */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              At some point, you've got to stop browsing and start closing.
            </p>
            <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              It's decision-making time. Chaos won't fix itself.
            </p>
          </div>
          {/* Simple CTA Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-6 sm:pt-8"
          >
            <p className="text-white/60 text-2xl sm:text-3xl md:text-4xl font-mono tracking-wider uppercase leading-tight px-2">
              GRAB WHAT YOU NEED AND LET'S GO.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
