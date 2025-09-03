"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-10 lg:py-14 bg-[#121216]">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
            Ready to Move Forward?
          </h2>
          {/* Subheadline */}
          <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I help South Florida agents close more deals—faster, smoother, no fluff. Worst case? You wasted 30 seconds. Best case? You change your business.
          </p>
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-2"
          >
            <button className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300 overflow-hidden">
              {/* Glass effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D6C4E9]/20 to-[#D6C4E9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Button content */}
              <span className="relative z-10">Let's Get to Work</span>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              {/* Lavender accent glow */}
              <div className="absolute inset-0 bg-[#D6C4E9]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
