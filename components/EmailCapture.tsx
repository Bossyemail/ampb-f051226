"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function EmailCapture() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    trackEvent('sign_up', 'email_capture', 'main_section');
    // Here you would integrate with your email service
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="relative isolate w-full px-6 pt-4 pb-8 md:pt-6 md:pb-10 lg:pt-8 lg:pb-12 [clip-path:polygon(0_0,100%_0,100%_92%,0_100%)] overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#bcafaf] via-[#d3ccd6] to-[#7B8E90] animate-pulse"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
      
      {/* Backdrop Blur with Gradient Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-br from-white/10 via-transparent to-black/5"></div>
      
      {/* Animated Glow Effects */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#d3ccd6]/40 via-[#7B8E90]/30 to-[#bcafaf]/40 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -inset-8 bg-gradient-to-l from-[#7B8E90]/20 via-[#d3ccd6]/15 to-[#bcafaf]/20 rounded-full blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/30 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/25 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/6 left-3/4 w-1 h-1 bg-white/25 rounded-full"
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        />
        <motion.div
          className="absolute top-2/3 left-1/6 w-1.5 h-1.5 bg-white/20 rounded-full"
          animate={{
            y: [0, -22, 0],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/6 w-1 h-1 bg-white/35 rounded-full"
          animate={{
            y: [0, -16, 0],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />
        <motion.div
          className="absolute top-5/6 left-1/2 w-2 h-2 bg-white/15 rounded-full"
          animate={{
            y: [0, -24, 0],
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        <motion.div
          className="absolute top-1/8 right-2/3 w-1 h-1 bg-white/30 rounded-full"
          animate={{
            y: [0, -19, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2.9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7
          }}
        />
        <motion.div
          className="absolute top-3/5 left-2/3 w-1.5 h-1.5 bg-white/20 rounded-full"
          animate={{
            y: [0, -21, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 3.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.1
          }}
        />
        <motion.div
          className="absolute top-4/5 right-1/8 w-1 h-1 bg-white/25 rounded-full"
          animate={{
            y: [0, -17, 0],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.9
          }}
        />
        
        {/* Button Glow Burst Particles */}
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white/40 rounded-full"
          animate={{
            y: [0, -12, 0],
            x: [0, -8, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-white/35 rounded-full"
          animate={{
            y: [0, -15, 0],
            x: [0, 6, 0],
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white/45 rounded-full"
          animate={{
            y: [0, -18, 0],
            x: [0, -12, 0],
            opacity: [0.2, 0.65, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white/30 rounded-full"
          animate={{
            y: [0, -14, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 2.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        />
        <motion.div
          className="absolute bottom-1/5 left-1/2 w-1 h-1 bg-white/50 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, -5, 0],
            opacity: [0.15, 0.75, 0.15],
          }}
          transition={{
            duration: 3.0,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.0
          }}
        />
        <motion.div
          className="absolute bottom-1/5 left-1/2 w-1.5 h-1.5 bg-white/40 rounded-full"
          animate={{
            y: [0, -16, 0],
            x: [0, 8, 0],
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }}
        />
        <motion.div
          className="absolute bottom-1/6 left-1/2 w-1 h-1 bg-white/35 rounded-full"
          animate={{
            y: [0, -22, 0],
            x: [0, -10, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 2.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute bottom-1/6 left-1/2 w-1.5 h-1.5 bg-white/45 rounded-full"
          animate={{
            y: [0, -19, 0],
            x: [0, 12, 0],
            opacity: [0.15, 0.65, 0.15],
          }}
          transition={{
            duration: 2.9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-white/30 rounded-full"
          animate={{
            y: [0, -13, 0],
            x: [0, 0, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"
          animate={{
            y: [0, -17, 0],
            x: [0, 0, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.9
          }}
        />
      </div>
      
      <div className="relative mx-auto max-w-5xl text-center space-y-5">
        {/* Headline with Scroll Animation */}
        <motion.h2 
          className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Don't sign up. Seriously.
        </motion.h2>

        {/* Subcopy with Scroll Animation */}
        <motion.p 
          className="mx-auto max-w-3xl text-sm leading-relaxed text-black mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Unless you want the only real estate emails that make you laugh, think, and actually help you close more deals.
        </motion.p>

        {/* Social Proof with Scroll Animation */}
        {/* Removed the 500+ agents line for a thinner form */}

        {/* Enhanced Button with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handleSubmit}
            className="inline-flex items-center gap-2 px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/5"
            whileHover={{ 
              scale: 1.02,
              y: -2
            }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Today
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
