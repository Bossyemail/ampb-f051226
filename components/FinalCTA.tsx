"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-10 lg:py-14 pb-20 lg:pb-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
            Still Scrolling?
          </h2>
          {/* Subheadline */}
          <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At some point, you've got to stop browsing and start closing.
          </p>
          <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed -mt-4">
            It's decision-making time. Chaos won't fix itself.
          </p>
          {/* Simple CTA Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-8"
          >
            <p className="text-white/60 text-4xl font-mono tracking-wider uppercase">
              GRAB WHAT YOU NEED AND LET'S GO.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
