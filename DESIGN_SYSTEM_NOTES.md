# Design System Notes - Hero Section Application

## Font Imports
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## CSS Variables & Design Tokens

### Global Tokens — Minimal / Elegant / Luxury (Dark)

```css
:root{
  /* Backgrounds */
  --bg: #0B0B0B;
  --bg-2: #111111;

  /* Text */
  --t1: rgba(255,255,255,.95); /* headings */
  --t2: rgba(255,255,255,.75); /* body */
  --t3: rgba(255,255,255,.60); /* meta */
  --t4: rgba(255,255,255,.55); /* labels */

  /* Borders */
  --b1: rgba(255,255,255,.10);

  /* Type */
  --sans: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  --mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;

  /* Layout */
  --container: 1100px; /* ~max-w-6xl */
  --pad-x: 24px;       /* mobile padding */
  --pad-x-lg: 40px;    /* desktop padding */

  /* Spacing rhythm */
  --sec-y: 64px;       /* mobile section padding */
  --sec-y-md: 80px;    /* tablet */
  --sec-y-lg: 96px;    /* desktop */

  --gap-1: 16px;       /* paragraph spacing */
  --gap-2: 24px;       /* heading → content */
  --gap-3: 40px;       /* CTA spacing */
  --gap-4: 64px;       /* big group spacing */
}
```

## Base Styles

```css
html, body { height: 100%; }
body{
  margin:0;
  background: var(--bg);
  color: var(--t2);
  font-family: var(--sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

## Typography Classes

### Label
```css
.label{
  font-family: var(--mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: .22em;
  color: var(--t4);
}
@media(min-width:768px){ .label{ font-size: 13px; } }
```

### H1
```css
.h1{
  font-family: var(--sans);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.08;
  color: var(--t1);
  font-size: 40px;
  margin: 0;
}
@media(min-width:768px){ .h1{ font-size: 52px; } }
@media(min-width:1024px){ .h1{ font-size: 56px; } }
```

### H2
```css
.h2{
  font-family: var(--sans);
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.2;
  color: var(--t1);
  font-size: 28px;
  margin: 0;
}
@media(min-width:768px){ .h2{ font-size: 34px; } }
```

### H3
```css
.h3{
  font-family: var(--sans);
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.35;
  color: var(--t1);
  font-size: 20px;
  margin: 0;
}
@media(min-width:768px){ .h3{ font-size: 22px; } }
```

### Body
```css
.body{
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.6;
  color: var(--t2);
  margin: 0;
}
@media(min-width:768px){ .body{ font-size: 17px; } }
```

### Meta
```css
.meta{
  font-family: var(--sans);
  font-size: 14px;
  line-height: 1.6;
  color: var(--t3);
  margin: 0;
}
```

## Layout Utilities

```css
.container{
  max-width: var(--container);
  margin: 0 auto;
  padding-left: var(--pad-x);
  padding-right: var(--pad-x);
}
@media (min-width: 768px){
  .container{ padding-left: var(--pad-x-lg); padding-right: var(--pad-x-lg); }
}

.section{
  padding-top: var(--sec-y);
  padding-bottom: var(--sec-y);
}
@media (min-width: 768px){
  .section{ padding-top: var(--sec-y-md); padding-bottom: var(--sec-y-md); }
}
@media (min-width: 1024px){
  .section{ padding-top: var(--sec-y-lg); padding-bottom: var(--sec-y-lg); }
}

.divider{ border-top: 1px solid var(--b1); }

.max-w-xl{ max-width: 640px; }
.max-w-2xl{ max-width: 720px; }
.max-w-3xl{ max-width: 860px; }
```

## Spacing Utilities

```css
.mt-1{ margin-top: var(--gap-1); }
.mt-2{ margin-top: var(--gap-2); }
.mt-3{ margin-top: var(--gap-3); }
.mt-4{ margin-top: var(--gap-4); }

.stack > * + *{ margin-top: var(--gap-1); } /* paragraph stacks */
.bullets > * + *{ margin-top: 12px; }       /* bullets spacing */
```

## Notes

- **Action buttons should remain as they are** - do not change the button styles
- This design system should be applied to the hero section
- Typography uses Inter for sans-serif and IBM Plex Mono for monospace
- Color system uses rgba white with varying opacity levels
- Spacing follows a consistent rhythm based on the gap variables
