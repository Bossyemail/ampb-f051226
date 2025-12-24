# Design System Tokens - Main Page

## Global CSS Variables & Typography System

This document captures the design system tokens and utility classes for the main page.

### Fonts
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
```

### CSS Variables (Color Tokens)
```css
:root {
  --bg: #000;
  --text: rgba(255,255,255,1);
  --body: rgba(255,255,255,.75);
  --muted: rgba(255,255,255,.60);
  --kicker: rgba(255,255,255,.55);
  --dim: rgba(255,255,255,.45);
  --line: rgba(255,255,255,.10);
}
```

### Global Styles
```css
html, body {
  background: var(--bg);
  color: var(--text);
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
}

body {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  font-weight: 400;
}

* { box-sizing: border-box; }
p, h1, h2, h3 { margin: 0; }
p { max-width: 65ch; }
```

### Utility Classes

#### Container
```css
.container {
  width: 100%;
  max-width: 72rem;           /* ~ max-w-6xl */
  margin: 0 auto;
  padding: 0 1.5rem;          /* px-6 */
}
@media (min-width: 640px) {
  .container { padding: 0 2.5rem; } /* sm:px-10 */
}
```

#### Section
```css
.section {
  padding: 4rem 0;            /* py-16 */
  border-top: 1px solid var(--line);
}
.section:first-of-type { border-top: none; }
@media (min-width: 640px) {
  .section { padding: 5rem 0; }     /* sm:py-20 */
}
@media (min-width: 1024px) {
  .section { padding: 6rem 0; }     /* lg:py-24 */
}
```

### Typography Tokens

#### Kicker (mono label)
```css
.kicker {
  font-family: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.75rem;         /* text-xs */
  letter-spacing: 0.22em;     /* tracking-[0.22em] */
  text-transform: uppercase;
  color: var(--kicker);
}
@media (min-width: 640px) {
  .kicker { font-size: 0.875rem; } /* sm:text-sm */
}
```

#### H1 (hero)
```css
.h1 {
  margin-top: 1.5rem;         /* mt-6 */
  font-size: 2.25rem;         /* text-4xl */
  font-weight: 500;           /* font-medium */
  letter-spacing: -0.02em;    /* tracking-tight feel */
  line-height: 1.08;          /* leading-[1.08] */
}
@media (min-width: 640px) {
  .h1 { font-size: 3rem; }    /* sm:text-5xl */
}
@media (min-width: 1024px) {
  .h1 { font-size: 56px; }    /* lg:text-[56px] */
}
```

#### H2 (section title)
```css
.h2 {
  font-size: 1.875rem;        /* text-3xl */
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.15;          /* leading-tight */
}
@media (min-width: 640px) {
  .h2 { font-size: 2.25rem; } /* sm:text-4xl */
}
```

#### Body paragraph
```css
.p {
  font-size: 1rem;            /* text-base */
  line-height: 1.7;           /* leading-relaxed */
  color: var(--body);
}
@media (min-width: 640px) {
  .p { font-size: 17px; }     /* sm:text-[17px] */
}
```

#### Spacing Utilities
```css
.stack-4 > * + * { margin-top: 1rem; } /* space-y-4 */
.mt-6 { margin-top: 1.5rem; }
.mt-10 { margin-top: 2.5rem; }
.mt-14 { margin-top: 3.5rem; }
```

#### Small/meta text
```css
.meta { 
  font-size: 0.875rem; 
  color: var(--muted); 
}
```

### Text Alignment Fix
```css
/* Prevent justified / stretched text (common wrapper bug) */
.no-justify, .no-justify * {
  text-align: left !important;
  text-justify: auto !important;
  justify-content: flex-start !important;
}
```

## Usage Notes

- Use CSS variables for colors: `var(--text)`, `var(--body)`, `var(--kicker)`, etc.
- Use utility classes for typography: `.kicker`, `.h1`, `.h2`, `.p`
- Use `.container` for max-width containers
- Use `.section` for section spacing and borders
- Font family: Inter for body text, IBM Plex Mono for kickers/labels
- All text should be left-aligned by default (use `.no-justify` if needed)
