# Design System Notes - Home Page Application

## LUX GLOBAL SYSTEM (Namespaced)

### Font Imports (Add to `<head>`)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### CSS System (Add to `<head>`)
```css
<style>
  /* =========================
     LUX SYSTEM (NAMESPACED)
     Minimal / Elegant / Luxury Dark
     ========================= */

  .lux{
    /* Colors */
    --bg:#0B0B0B;
    --bg2:#111111;

    --t1:rgba(255,255,255,.95); /* headings */
    --t2:rgba(255,255,255,.75); /* body */
    --t3:rgba(255,255,255,.60); /* meta */
    --t4:rgba(255,255,255,.55); /* labels */

    --b1:rgba(255,255,255,.10); /* dividers */

    /* Fonts */
    --sans:"Inter",system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
    --mono:"IBM Plex Mono",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono",monospace;

    /* Layout */
    --container:1100px;
    --px:24px;
    --px-lg:40px;

    /* Vertical rhythm */
    --sec:64px;      /* mobile */
    --sec-md:80px;   /* tablet */
    --sec-lg:96px;   /* desktop */

    /* Spacing */
    --p-gap:16px;    /* paragraph stack */
    --h-gap:24px;    /* label->heading and heading->body */
    --cta-gap:40px;  /* CTA offset */
  }

  .lux, .lux *{ box-sizing:border-box; }

  .lux{
    background:var(--bg);
    color:var(--t2);
    font-family:var(--sans);
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
  }

  /* Container */
  .lux-container{
    max-width:var(--container);
    margin:0 auto;
    padding-left:var(--px);
    padding-right:var(--px);
  }
  @media(min-width:768px){
    .lux-container{ padding-left:var(--px-lg); padding-right:var(--px-lg); }
  }

  /* Section spacing */
  .lux-section{
    padding-top:var(--sec);
    padding-bottom:var(--sec);
  }
  @media(min-width:768px){
    .lux-section{ padding-top:var(--sec-md); padding-bottom:var(--sec-md); }
  }
  @media(min-width:1024px){
    .lux-section{ padding-top:var(--sec-lg); padding-bottom:var(--sec-lg); }
  }

  /* Divider */
  .lux-divider{ border-top:1px solid var(--b1); }

  /* Widths */
  .lux-max-xl{ max-width:640px; }  /* matches "My Story" column */
  .lux-max-2xl{ max-width:720px; }
  .lux-max-3xl{ max-width:860px; }

  /* Typography */
  .lux-label{
    font-family:var(--mono);
    font-size:12px;
    text-transform:uppercase;
    letter-spacing:.22em;
    color:var(--t4);
    margin:0;
  }
  @media(min-width:768px){ .lux-label{ font-size:13px; } }

  .lux-h1{
    font-family:var(--sans);
    font-weight:500;
    letter-spacing:-0.02em;
    line-height:1.08;
    color:var(--t1);
    font-size:40px;
    margin:0;
  }
  @media(min-width:768px){ .lux-h1{ font-size:52px; } }
  @media(min-width:1024px){ .lux-h1{ font-size:56px; } }

  .lux-h2{
    font-family:var(--sans);
    font-weight:500;
    letter-spacing:-0.01em;
    line-height:1.2;
    color:var(--t1);
    font-size:28px;
    margin:0;
  }
  @media(min-width:768px){ .lux-h2{ font-size:34px; } }

  .lux-h3{
    font-family:var(--sans);
    font-weight:500;
    letter-spacing:-0.01em;
    line-height:1.35;
    color:var(--t1);
    font-size:20px;
    margin:0;
  }
  @media(min-width:768px){ .lux-h3{ font-size:22px; } }

  .lux-body{
    font-family:var(--sans);
    font-weight:400;
    font-size:16px;
    line-height:1.6;
    color:var(--t2);
    margin:0;
  }
  @media(min-width:768px){ .lux-body{ font-size:17px; } }

  .lux-meta{
    font-family:var(--sans);
    font-size:14px;
    line-height:1.6;
    color:var(--t3);
    margin:0;
  }

  /* Spacing utilities */
  .lux-mt-h{ margin-top:var(--h-gap); }
  .lux-mt-cta{ margin-top:var(--cta-gap); }

  .lux-stack > * + *{ margin-top:var(--p-gap); }

  /* Buttons (your preferred styles) */
  .lux-btnrow{ display:flex; gap:12px; flex-wrap:wrap; margin-top:var(--cta-gap); }

  .lux-btn-primary{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding:12px 20px;
    border-radius:10px;
    font-size:14px;
    font-weight:500;
    background:#fff;
    color:#0B0B0B;
    border:1px solid transparent;
    text-decoration:none;
    transition:opacity .15s ease;
  }
  .lux-btn-primary:hover{ opacity:.9; }

  .lux-btn-secondary{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding:12px 20px;
    border-radius:10px;
    font-size:14px;
    font-weight:500;
    background:transparent;
    color:#fff;
    border:1px solid rgba(255,255,255,.20);
    text-decoration:none;
    transition:border-color .15s ease;
  }
  .lux-btn-secondary:hover{ border-color:rgba(255,255,255,.40); }
</style>
```

## Implementation Pattern

### Page Wrapper
Wrap the entire page content in:
```html
<div class="lux">
  <!-- All page content here -->
</div>
```

### Section Pattern Example
```html
<section class="lux-section">
  <div class="lux-container">
    <div class="lux-max-xl">
      <p class="lux-label">ABOUT ME</p>
      <h2 class="lux-h2 lux-mt-h">My Story</h2>

      <p class="lux-label lux-mt-h">REAL ESTATE PROFESSIONAL · SYSTEMS BUILDER · DEAL CLOSER</p>

      <div class="lux-stack lux-mt-h">
        <p class="lux-body">Paragraph one…</p>
        <p class="lux-body">Paragraph two…</p>
        <p class="lux-body">Paragraph three…</p>
        <p class="lux-body">Paragraph four…</p>
      </div>

      <div class="lux-btnrow">
        <a class="lux-btn-primary" href="#">Explore the Tools</a>
        <a class="lux-btn-secondary" href="#">Work With Me</a>
      </div>
    </div>
  </div>
</section>

<div class="lux-divider"></div>
```

## Class Reference

### Typography
- `.lux-label` - Uppercase labels (mono font, 12px/13px)
- `.lux-h1` - Main heading (40px → 52px → 56px)
- `.lux-h2` - Section heading (28px → 34px)
- `.lux-h3` - Subsection heading (20px → 22px)
- `.lux-body` - Body text (16px → 17px)
- `.lux-meta` - Meta text (14px)

### Layout
- `.lux-container` - Max-width container with responsive padding
- `.lux-section` - Section with responsive vertical padding
- `.lux-divider` - Horizontal divider line
- `.lux-max-xl` - Max-width 640px
- `.lux-max-2xl` - Max-width 720px
- `.lux-max-3xl` - Max-width 860px

### Spacing
- `.lux-mt-h` - Margin-top for heading spacing (24px)
- `.lux-mt-cta` - Margin-top for CTA spacing (40px)
- `.lux-stack` - Stack children with paragraph gap (16px)

### Buttons
- `.lux-btnrow` - Button row container
- `.lux-btn-primary` - Primary button (white bg, black text)
- `.lux-btn-secondary` - Secondary button (transparent, white border)

## Notes

- **Namespaced with `.lux` prefix** - All classes are prefixed to avoid conflicts
- **Apply to entire home page** - Wrap all content in `<div class="lux">`
- **Consistent spacing rhythm** - Uses CSS variables for all spacing
- **Responsive typography** - Font sizes scale at 768px and 1024px breakpoints
- **Inter font for sans-serif** - IBM Plex Mono for labels/mono text
- **Color system** - Uses rgba white with varying opacity levels
