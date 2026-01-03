"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface GlassButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
}

export function GlassButton({ 
  href, 
  onClick, 
  children, 
  variant = "primary",
  className = "",
  external = false
}: GlassButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200 rounded-md sm:px-8 sm:py-3.5";
  
  const variantClasses = variant === "primary" 
    ? "bg-white/10 border border-white/20 text-white hover:bg-white/15 hover:border-white/30 backdrop-blur-sm"
    : "bg-transparent border border-white/15 text-white/90 hover:border-white/25 hover:text-white hover:bg-white/[0.02]";

  const buttonContent = (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        whileHover={{ opacity: 0.9, y: -1 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseClasses} ${variantClasses} ${className}`}
        style={variant === "primary" ? {
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        } : {}}
      >
        {children}
      </motion.div>
    </motion.div>
  );

  if (href) {
    if (external || href.startsWith('http')) {
      return (
        <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="inline-block">
          {buttonContent}
        </a>
      );
    }
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="inline-block">
        {buttonContent}
      </button>
    );
  }

  return buttonContent;
}

