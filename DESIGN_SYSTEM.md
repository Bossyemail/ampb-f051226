# GLOBAL DESIGN + SPACING SPEC (Aylen Site)

## 0) Core Visual Intent

**Quiet luxury / Apple-like restraint.**

One consistent cadence: big breathing room, tight type hierarchy, soft contrast, subtle surfaces.

---

## 1) Colors (Global Tokens)

### Background (Default Page)
- **Page background:** `bg-[#0E0F11]` (soft charcoal, not pitch black)

### Text
- **Primary:** `text-white`
- **Body:** `text-white/70`
- **Secondary:** `text-white/60`
- **Labels / meta:** `text-white/55`
- **De-emphasis:** `text-white/45`

### Surfaces (Cards)
- **Standard card:** `bg-white/[0.02]`
- **Primary emphasis card:** `bg-white/[0.03]`
- **Inset panels:** `bg-black/20`

### Borders / Dividers
- **Card borders:** `border-white/10`
- **Pills/interactive accents:** `border-white/15`
- **Hairline dividers:** `border-white/10`

### Overlays on Photography
- **Desktop overlay:** `bg-black/45`
- **Mobile overlay:** `bg-black/55` (stronger for legibility)

**Rule:** No random gradients across sections. If you must use glow, keep it inside section with `overflow-hidden`.

---

## 2) Layout Container + Gutters

### Site Container
```
mx-auto max-w-6xl px-6 sm:px-10
```

### Max Line Lengths
- **Long paragraphs:** wrap in `max-w-2xl`
- **Section intro blocks:** `max-w-3xl`
- **Never allow long text to run full width in a 12-col grid.**

---

## 3) Global Vertical Rhythm (Outer Spacing)

**This is the "luxury breathing room" system. Apply to ALL pages.**

### Section Padding (Default)
```
py-24 sm:py-32
```

### Hero Sections
```
pt-28 pb-32 sm:pt-36 sm:pb-40
```

### Closing CTAs / Final Sections
```
py-28 sm:py-40
```

### Transitions (Thin Divider Zones)
```
py-14 sm:py-16 + border-t border-white/10
```

**Rule:** Do not mix random `py-16`/`py-20`/`py-22` unless it's intentionally a "tight" utility section.

---

## 4) Component Spacing (Inner Rhythm)

### Card Padding
- **Standard:** `p-10 sm:p-12`
- **Small cards:** `p-8`
- **Never use** `p-6`/`p-7`/`p-9` on primary pages.

### Card Stack Spacing
- **Between stacked large cards:** `space-y-8 sm:space-y-10`

### Copy Spacing Rules (Consistent Everywhere)
- **Label → Heading:** `mt-4`
- **Heading → Body:** `mt-6`
- **Body paragraph → next paragraph:** `mt-6`
- **Body → CTA row:** `mt-10 sm:mt-12`
- **CTA row → supporting note:** `mt-4`

---

## 5) Typography System (Use This Scale Sitewide)

### Section Label (Mono / Tracking)
```
font-mono text-xs tracking-[0.28em] text-white/55
```

### H1
```
text-4xl sm:text-5xl font-semibold tracking-tight
```

### H2
```
text-3xl sm:text-4xl font-semibold tracking-tight
```

### H3
```
text-xl font-semibold tracking-tight text-white/90
```

### Body (Primary)
```
text-base sm:text-lg leading-relaxed text-white/70
```

### Body (Small)
```
text-sm leading-relaxed text-white/60
```

### Micro Notes
```
text-xs text-white/55
```

**Rule:** If it's not a heading, don't exceed `sm:text-lg`. Luxury reads calm.

---

## 6) Button + Pill System (Don't Improvise)

### Primary Button
```
rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black hover:bg-white/90
```
**Always include:** `style={{ color: '#000000' }}` for visibility

### Secondary Button
```
rounded-full border border-white/20 bg-white/[0.03] px-8 py-3.5 text-sm font-medium text-white/90 hover:bg-white/[0.06]
```

### Pill Tags / Nav Chips
```
rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75
```

### Inline Link
```
text-white/80 hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/40
```

---

## 7) Shadows + Rounding (Subtle Depth Only)

### Rounding
- **Cards:** `rounded-3xl`
- **Small inset:** `rounded-2xl`
- **Pills:** `rounded-full`

### Shadow (Optional but Consistent)
- **Hero / primary surfaces only:**
  ```
  shadow-[0_24px_90px_rgba(0,0,0,.55)]
  ```

**Rule:** Only one "deep shadow" element per section. Too many = cheap.

---

## 8) Number Styling

All numbers (01, 02, 03, etc.) should use:
- `font-mono` class
- Inline styles:
  ```tsx
  style={{
    fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
    fontVariantNumeric: 'slashed-zero',
    fontFeatureSettings: '"zero"',
  }}
  ```

This ensures slashed zeros (0 with diagonal line) are displayed consistently.

---

## MOBILE RHYTHM POLISH (Must-Do Checklist)

### 1) Hero Legibility on Photography
Mobile needs stronger contrast.
- **Add overlay:** `bg-black/55` over the image
- **Ensure hero copy block has:**
  - `max-w-[22rem]` to prevent wide wrapping
  - `text-white/75` for body
- **Reduce H1 on mobile:**
  - `text-4xl max` (avoid huge multi-line wrap)

### 2) Pill Row Behavior (Tools Page Chips)
On mobile, pills should:
- `overflow-x-auto`
- `whitespace-nowrap`
- `gap-2`
- Add subtle edge fade (optional) but do not use gradients across the whole section.

**Recommended wrapper:**
```
flex gap-2 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]
```

### 3) Large Cards Must Not Feel "Cramped"
On mobile:
- **Card padding becomes:** `p-7` (not `p-10`)
- **Card stacks spacing:** `space-y-6`
- **CTA button goes full width:**
  - `w-full justify-center`

### 4) Two-Column Layouts Collapse Rules
Your About hero has photo + stats.

On mobile:
- **Stats block should move below hero copy, not alongside**
- **Stats become a 3-up row or stacked list:**
  - `grid grid-cols-3 gap-4` (best)
  - or `space-y-3` if too tight

### 5) Paragraph Density on Mobile
Mobile should never show "essay blocks."

Convert any paragraph over ~4 lines into:
- two shorter paragraphs or
- one paragraph + 2 bullets

**Increase vertical spacing:**
- `space-y-6` in narrative sections

### 6) Footer Spacing (Often Overlooked)
On mobile, your footer background image + text can feel busy.
- **Add overlay:** `bg-black/60`
- **Increase inner padding:** `py-16`
- **Keep columns stacked with gap-10**

---

## The "No Weird Gradients" Rule

If you ever see a "mystery haze" on top of a section (like reviews issue), 90% of the time it's:
- a parent `bg-gradient-to-*`
- a pseudo-element overlay
- or a `backdrop-blur` layer

### Global Fix:
If you use a top glow anywhere, contain it inside the section with `overflow-hidden`, and keep it subtle:
- **Glow layer max:** `bg-white/[0.04] blur-3xl opacity-40`
- **Never let it bleed into the next section**
