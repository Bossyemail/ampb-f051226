"use client";

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

const pressClasses =
  "transition-all duration-150 ease-out select-none " +
  "group-hover:-translate-y-0.5 " +
  "group-active:scale-[0.97] group-active:shadow-[inset_0_2px_14px_rgba(0,0,0,0.38)] " +
  "group-active:brightness-[0.88]";

export function GlassButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  external = false,
}: GlassButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-none sm:px-8 sm:py-3.5";

  const variantClasses =
    variant === "primary"
      ? "bg-white/10 border border-white/20 text-white hover:bg-white/15 hover:border-white/30 backdrop-blur-sm"
      : "bg-transparent border border-white/15 text-white/90 hover:border-white/25 hover:text-white hover:bg-white/[0.02]";

  const innerClassName = `${baseClasses} ${variantClasses} ${pressClasses} ${className}`;

  const innerStyle =
    variant === "primary"
      ? {
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }
      : undefined;

  const inner = (
    <span className={innerClassName} style={innerStyle}>
      {children}
    </span>
  );

  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="group inline-block cursor-pointer rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          {inner}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className="group inline-block cursor-pointer rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        {inner}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="group inline-block cursor-pointer rounded-none border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        {inner}
      </button>
    );
  }

  return <span className="group inline-block">{inner}</span>;
}
