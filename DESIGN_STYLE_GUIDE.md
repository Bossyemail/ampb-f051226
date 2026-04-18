# Design Style Guide - Typography & Spacing

## Typography Hierarchy

### 1. Primary Heading (H1)
- **Example:** "I'm Aylen,"
- **Style:** Mixed case, very bold sans-serif
- **Size:** `text-4xl sm:text-5xl lg:text-[56px]`
- **Weight:** `font-medium`
- **Tracking:** `tracking-tight`
- **Leading:** `leading-[1.08]`
- **Color:** `text-white`
- **Spacing:** `mt-6` after kicker text

### 2. Sub-Hero / Kicker Text
- **Example:** "HI THERE"
- **Style:** All caps, regular weight
- **Size:** `text-xs sm:text-sm`
- **Weight:** Regular
- **Tracking:** `tracking-[0.22em]` (0.22em letter spacing)
- **Color:** `text-white/55`
- **Font:** `font-mono` (monospace)
- **Spacing:** Appears above primary heading

### 3. Section Headings (H2)
- **Example:** "What I Build", "The real problem", "Why this exists", "Who this is for"
- **Style:** Mixed case (title case), bold
- **Size:** `text-2xl sm:text-3xl` or `text-3xl sm:text-4xl`
- **Weight:** `font-medium`
- **Tracking:** `tracking-tight`
- **Leading:** `leading-tight`
- **Color:** `text-white`
- **Spacing:** `mt-6` after section divider or previous content
- **Note:** Main section headings use title case, not all caps

### 4. Section Sub-description / Parenthetical
- **Example:** "(WITHOUT THE CHAOS)"
- **Style:** All caps, regular weight, in parentheses
- **Size:** `text-xs sm:text-sm`
- **Weight:** Regular
- **Tracking:** `tracking-[0.22em]`
- **Color:** `text-white/45`
- **Font:** `font-mono`
- **Spacing:** `mt-3` after main section heading

### 5. Numbered List Prefix
- **Example:** "01", "02", "03"
- **Style:** Numerals, regular weight, monospaced
- **Size:** `text-2xl sm:text-3xl` (for product lists) or very large `text-[120px] sm:text-[140px]` (for roller)
- **Weight:** Regular
- **Tracking:** `tracking-tight`
- **Leading:** `leading-none`
- **Color:** `text-white/35` (for product lists) or `text-white/70` (for roller inactive) or `text-white` (for roller active)
- **Font:** `font-mono`
- **Spacing:** Horizontal gap of `gap-6` (for product lists) or `gap-8` (for roller) before label/text
- **Width:** `w-14` for product lists to ensure consistent alignment

### 6. Product/Item Names
- **Example:** "BossyEmail", "ClauseVault", "Transaction Coordination"
- **Style:** Mixed case, bold
- **Size:** `text-2xl sm:text-3xl`
- **Weight:** `font-medium`
- **Tracking:** `tracking-tight`
- **Color:** `text-white/90`
- **Spacing:** `mb-2` after number, before description

### 7. Body Text / Paragraphs
- **Example:** "I help real estate professionals close deals..."
- **Style:** Mixed case, regular weight
- **Size:** `text-base sm:text-[17px]`
- **Weight:** Regular
- **Tracking:** Normal
- **Leading:** `leading-relaxed`
- **Color:** `text-white/75`
- **Spacing:** `space-y-4` between paragraphs

### 8. Statistics Numbers
- **Example:** "20+", "3K+", "4+"
- **Style:** Numerals, bold
- **Size:** `text-2xl`
- **Weight:** `font-medium`
- **Color:** `text-white/90`
- **Spacing:** `mt-1` or `mt-3` before description

### 9. Statistics Descriptions
- **Example:** "YEARS EXPERIENCE", "CLOSED DEALS"
- **Style:** All caps, regular weight
- **Size:** `text-[11px]`
- **Weight:** Regular
- **Tracking:** `tracking-[0.22em]`
- **Color:** `text-white/45`
- **Font:** `font-mono`
- **Spacing:** `mt-1` or `mt-3` after number

### 10. Navigation & Small Text
- **Example:** "TOOLS", "BOSSYEMAIL", "AYLEN MONTENEGRO"
- **Style:** All caps, regular weight
- **Size:** `text-xs` or `text-[10px]`
- **Weight:** `font-medium`
- **Tracking:** `tracking-widest` or `tracking-[0.22em]`
- **Color:** `text-white/70` or `text-white`
- **Spacing:** Horizontal spacing between nav items

### 11. Button Text
- **Example:** "Explore the Tools", "Work With Me"
- **Style:** Mixed case, medium weight
- **Size:** `text-sm`
- **Weight:** `font-medium`
- **Color:** `text-white/90`
- **Spacing:** `space-y-3` between buttons

## Spacing Guidelines

### Vertical Spacing Between Sections
- **Section padding:** `py-16 sm:py-20 lg:py-24`
- **Section dividers:** `border-t border-white/10` with padding above

### Vertical Spacing Within Sections
- **After H1:** `mt-6` before body text
- **After H2:** `mt-6` before body text
- **After kicker:** `mt-6` before H1
- **After sub-description:** `mt-6` before body text
- **Between paragraphs:** `space-y-4` or `mt-6`
- **Between list items:** `space-y-3` or `space-y-8`
- **Before buttons:** `mt-10`

### Horizontal Spacing
- **Between number and label:** `gap-4` or `gap-8`
- **Between nav items:** `space-x-4`
- **Content max-width:** `max-w-3xl`, `max-w-4xl`, or `max-w-6xl`
- **Content padding:** `px-6 sm:px-10`

## Color Palette

### Text Colors
- **Primary white:** `text-white`
- **Secondary white:** `text-white/90`
- **Muted white:** `text-white/75`
- **Light gray:** `text-white/55` or `text-white/45`
- **Very light gray:** `text-white/35` or `text-white/40`

### Background Colors
- **Primary:** `bg-black`
- **Overlay:** `bg-white/[0.03]` or `bg-white/5`
- **Border:** `border-white/10` or `border-white/35`

## Font Families

- **Sans-serif (body):** `font-sans` (Geist Sans)
- **Monospace (labels, numbers):** `font-mono` (Geist Mono)

## Roller Section Specific

### Roller Numbers
- **Size:** `text-[120px] sm:text-[140px]`
- **Leading:** `leading-none`
- **Tracking:** `tracking-tight`
- **Color (active):** `text-white`
- **Color (inactive):** `text-white/55` or `text-white/70`

### Roller Labels
- **Size:** `text-xs`
- **Tracking:** `tracking-[0.22em]`
- **Color (active):** `text-white/75`
- **Color (inactive):** `text-white/45` or `text-white/55`
- **Font:** `font-mono`
- **Style:** `uppercase`

### Roller Content Panel
- **Kicker:** `text-xs uppercase tracking-[0.22em] text-white/55 font-mono`
- **Title (if present):** `text-2xl sm:text-3xl font-medium tracking-tight leading-tight`
- **Body:** `text-base sm:text-[17px] leading-relaxed text-white/75`
- **Spacing:** `mt-5` after kicker, `mt-6` before body, `space-y-4` between paragraphs
