/**
 * Short gradient so the main canvas meets the shared Footer top blend (#0b0c0f).
 * Use when the section above finishes on a different hex than the footer gradient.
 */
export default function PreFooterCanvasBlend({ from }: { from: string }) {
  return (
    <div
      className="pointer-events-none -mt-px h-16 w-full sm:h-20 md:h-24"
      style={{ background: `linear-gradient(to bottom, ${from}, #0b0c0f)` }}
      aria-hidden
    />
  );
}
