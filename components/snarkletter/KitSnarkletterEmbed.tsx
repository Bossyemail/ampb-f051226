"use client";

import { useEffect, useRef } from "react";

/** Default Kit script embed for Snarkletter (override via env in .env.local if needed). */
const DEFAULT_KIT_SCRIPT_SRC = "https://snarkletter.kit.com/d6f8f840c5/index.js";
const DEFAULT_KIT_DATA_UID = "d6f8f840c5";

/**
 * Kit (kit.com) signup embed — configure one of:
 *
 * 1) JavaScript embed (default): script `src` + `data-uid` from Kit → Embed
 *    Defaults match the live Snarkletter form. Override with:
 *    NEXT_PUBLIC_KIT_SNARKLETTER_SCRIPT_SRC
 *    NEXT_PUBLIC_KIT_SNARKLETTER_SCRIPT_DATA_UID
 *
 * 2) Iframe: set NEXT_PUBLIC_KIT_SNARKLETTER_IFRAME_URL to use iframe instead of script.
 *
 * Styling: see `.formkit-form` in globals.css. Script is appended to the host div so Kit injects the form in place (next/script loads at document end and breaks placement).
 */
export default function KitSnarkletterEmbed() {
  const scriptHostRef = useRef<HTMLDivElement>(null);

  const iframeUrl = process.env.NEXT_PUBLIC_KIT_SNARKLETTER_IFRAME_URL;
  const scriptSrc =
    process.env.NEXT_PUBLIC_KIT_SNARKLETTER_SCRIPT_SRC ?? DEFAULT_KIT_SCRIPT_SRC;
  const scriptDataUid =
    process.env.NEXT_PUBLIC_KIT_SNARKLETTER_SCRIPT_DATA_UID ?? DEFAULT_KIT_DATA_UID;

  useEffect(() => {
    if (iframeUrl || !scriptHostRef.current) return;

    const root = scriptHostRef.current;
    const existing = root.querySelector(`script[src="${scriptSrc}"]`);
    if (existing) return;

    const s = document.createElement("script");
    s.async = true;
    s.src = scriptSrc;
    s.setAttribute("data-uid", scriptDataUid);
    root.appendChild(s);

    return () => {
      if (s.parentNode === root) root.removeChild(s);
    };
  }, [iframeUrl, scriptSrc, scriptDataUid]);

  if (iframeUrl) {
    return (
      <div className="snarkletter-kit-form overflow-hidden rounded-xl bg-black/25">
        <iframe
          title="Subscribe to the Real Estate Snarkletter"
          src={iframeUrl}
          className="h-[min(560px,75vh)] w-full border-0 sm:h-[520px]"
          loading="lazy"
        />
      </div>
    );
  }

  return <div ref={scriptHostRef} className="w-full min-h-[1px]" />;
}
