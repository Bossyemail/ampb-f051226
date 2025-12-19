"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "BossyEmail",
    href: "https://bossyemail.com",
    description: "AI-powered email tools for real estate communication"
  },
  {
    number: "02",
    title: "ClauseVault",
    href: "/clausevault",
    description: "Contract support tools that close communication gaps"
  },
  {
    number: "03",
    title: "Transaction Coordination",
    href: "mailto:hello@aylenmontenegro.com?subject=TC%20availability",
    description: "White-glove transaction coordination and advisory support"
  }
];

export default function ServicesTicker() {
  return (
    <section className="relative py-8 pb-16 lg:pb-20 bg-[#0a0a0a] border-t border-white/10">
      <div className="overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -100 * services.length + "%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear"
            }
          }}
        >
          {/* Multiple sets for seamless loop */}
          {services.map((service, index) => (
            <div key={`set1-${index}`} className="flex items-center">
              {service.href.startsWith('http') ? (
                <a 
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 hover:text-white/80 transition-colors duration-300 px-8"
                >
                  <span className="text-white/60 text-4xl font-mono tracking-wider">
                    {service.number}
                  </span>
                  <span className="text-white font-semibold text-lg">
                    {service.title}
                  </span>
                  <span className="text-white/40 text-sm">
                    {service.description}
                  </span>
                </a>
              ) : (
                <Link 
                  href={service.href}
                  className="group flex items-center gap-4 hover:text-white/80 transition-colors duration-300 px-8"
                >
                  <span className="text-white/60 text-4xl font-mono tracking-wider">
                    {service.number}
                  </span>
                  <span className="text-white font-semibold text-lg">
                    {service.title}
                  </span>
                  <span className="text-white/40 text-sm">
                    {service.description}
                  </span>
                </Link>
              )}
              <span className="text-white/20 mx-8 text-2xl">\</span>
            </div>
          ))}
          
          {services.map((service, index) => (
            <div key={`set2-${index}`} className="flex items-center">
              {service.href.startsWith('http') ? (
                <a 
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 hover:text-white/80 transition-colors duration-300 px-8"
                >
                  <span className="text-white/60 text-4xl font-mono tracking-wider">
                    {service.number}
                  </span>
                  <span className="text-white font-semibold text-lg">
                    {service.title}
                  </span>
                  <span className="text-white/40 text-sm">
                    {service.description}
                  </span>
                </a>
              ) : (
                <Link 
                  href={service.href}
                  className="group flex items-center gap-4 hover:text-white/80 transition-colors duration-300 px-8"
                >
                  <span className="text-white/60 text-4xl font-mono tracking-wider">
                    {service.number}
                  </span>
                  <span className="text-white font-semibold text-lg">
                    {service.title}
                  </span>
                  <span className="text-white/40 text-sm">
                    {service.description}
                  </span>
                </Link>
              )}
              <span className="text-white/20 mx-8 text-2xl">\</span>
            </div>
          ))}

          {services.map((service, index) => (
            <div key={`set3-${index}`} className="flex items-center">
              {service.href.startsWith('http') ? (
                <a 
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 hover:text-white/80 transition-colors duration-300 px-8"
                >
                  <span className="text-white/60 text-4xl font-mono tracking-wider">
                    {service.number}
                  </span>
                  <span className="text-white font-semibold text-lg">
                    {service.title}
                  </span>
                  <span className="text-white/40 text-sm">
                    {service.description}
                  </span>
                </a>
              ) : (
                <Link 
                  href={service.href}
                  className="group flex items-center gap-4 hover:text-white/80 transition-colors duration-300 px-8"
                >
                  <span className="text-white/60 text-4xl font-mono tracking-wider">
                    {service.number}
                  </span>
                  <span className="text-white font-semibold text-lg">
                    {service.title}
                  </span>
                  <span className="text-white/40 text-sm">
                    {service.description}
                  </span>
                </Link>
              )}
              <span className="text-white/20 mx-8 text-2xl">\</span>
            </div>
          ))}

          {services.map((service, index) => (
            <div key={`set4-${index}`} className="flex items-center">
              {service.href.startsWith('http') ? (
                <a 
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 hover:text-white/80 transition-colors duration-300 px-8"
                >
                  <span className="text-white/60 text-4xl font-mono tracking-wider">
                    {service.number}
                  </span>
                  <span className="text-white font-semibold text-lg">
                    {service.title}
                  </span>
                  <span className="text-white/40 text-sm">
                    {service.description}
                  </span>
                </a>
              ) : (
                <Link 
                  href={service.href}
                  className="group flex items-center gap-4 hover:text-white/80 transition-colors duration-300 px-8"
                >
                  <span className="text-white/60 text-4xl font-mono tracking-wider">
                    {service.number}
                  </span>
                  <span className="text-white font-semibold text-lg">
                    {service.title}
                  </span>
                  <span className="text-white/40 text-sm">
                    {service.description}
                  </span>
                </Link>
              )}
              <span className="text-white/20 mx-8 text-2xl">\</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
