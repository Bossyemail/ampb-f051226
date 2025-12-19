# Universal Design System Specification

## Fonts (Universal)

**Primary font:** Inter  
**Accent font:** IBM Plex Mono (labels only)

### Font Usage Rules
- **Inter** for ALL headings + body + buttons
- **Mono ONLY for:** section label ("ABOUT ME"), small category lines, small nav rail labels, and tiny stats labels

## Type Scale (ONLY these sizes on the homepage)

### H1 (hero)
- **Desktop:** 56px
- **Tablet:** 52px
- **Mobile:** 40px
- **Weight:** 500
- **Line-height:** 1.08
- **Letter-spacing:** -0.02em

### H2 (section headings)
- **Desktop/Tablet:** 34px
- **Mobile:** 28px
- **Weight:** 500
- **Line-height:** 1.2
- **Letter-spacing:** -0.01em

### Body (all paragraphs + list text)
- **Desktop/Tablet:** 17px
- **Mobile:** 16px
- **Weight:** 400
- **Line-height:** 1.65
- **Color:** rgba(255,255,255,0.75)

### Label (mono labels)
- **Tablet/Desktop:** 13px
- **Mobile:** 12px
- **Uppercase**
- **Letter-spacing:** 0.22em
- **Color:** rgba(255,255,255,0.55)

## Spacing Rhythm (Universal)

### Section Padding
- **Desktop:** 96px top/bottom
- **Tablet:** 88px
- **Mobile:** 72px

### Inside a Section (matches "My Story" block)
- **Label → heading:** 24px
- **Heading → meta label line:** 24px
- **Meta label line → paragraph stack:** 24px
- **Paragraph spacing:** 16px
- **Last paragraph → CTA:** 40px

## Width Rules (Universal)

- **Main content column:** max-width 640px (this is why "My Story" looks expensive)
- **Big hero headline can be wider:** max-width 860px if needed
- **Centered sections must still cap text width at 640px**

## CSS Implementation

Create `design-system.css` and load it LAST. Wrap homepage in `<div class="ds">`.

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

.ds{
  --bg:#0B0B0B;
  --t1:rgba(255,255,255,.95);
  --t2:rgba(255,255,255,.75);
  --t3:rgba(255,255,255,.55);
  --b1:rgba(255,255,255,.10);

  --sans:"Inter",system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  --mono:"IBM Plex Mono",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono",monospace;

  --container:1100px;
  --px:24px;
  --pxLg:40px;

  --sec:72px;
  --secMd:88px;
  --secLg:96px;

  --gap1:16px;
  --gap2:24px;
  --gap3:40px;
}

.ds, .ds *{ box-sizing:border-box; }

/* FIX: prevent weird justification / wrapping artifacts */
.ds, .ds * {
  text-align: left !important;
  text-justify: auto !important;
  hyphens: manual !important;
  word-break: normal !important;
  overflow-wrap: normal !important;
}

.ds{
  background:var(--bg);
  color:var(--t2);
  font-family:var(--sans);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}

.ds .container{
  max-width:var(--container);
  margin:0 auto;
  padding:0 var(--px);
}
@media(min-width:768px){
  .ds .container{ padding:0 var(--pxLg); }
}

.ds .section{ padding:var(--sec) 0; }
@media(min-width:768px){ .ds .section{ padding:var(--secMd) 0; } }
@media(min-width:1024px){ .ds .section{ padding:var(--secLg) 0; } }

.ds .divider{ border-top:1px solid var(--b1); }

.ds .w-xl{ max-width:640px; }
.ds .w-hero{ max-width:860px; }

/* LABEL */
.ds .label{
  font-family:var(--mono);
  font-size:12px;
  letter-spacing:.22em;
  text-transform:uppercase;
  color:var(--t3);
  margin:0;
}
@media(min-width:768px){ .ds .label{ font-size:13px; } }

/* H1 */
.ds .h1{
  font-weight:500;
  letter-spacing:-0.02em;
  line-height:1.08;
  color:var(--t1);
  margin:0;
  font-size:40px;
}
@media(min-width:768px){ .ds .h1{ font-size:52px; } }
@media(min-width:1024px){ .ds .h1{ font-size:56px; } }

/* H2 */
.ds .h2{
  font-weight:500;
  letter-spacing:-0.01em;
  line-height:1.2;
  color:var(--t1);
  margin:0;
  font-size:28px;
}
@media(min-width:768px){ .ds .h2{ font-size:34px; } }

/* BODY */
.ds .body{
  font-weight:400;
  font-size:16px;
  line-height:1.65;
  color:var(--t2);
  margin:0;
}
@media(min-width:768px){ .ds .body{ font-size:17px; } }

.ds .stack > * + *{ margin-top:var(--gap1); }
.ds .mt-2{ margin-top:var(--gap2); }
.ds .mt-3{ margin-top:var(--gap3); }

/* Buttons (keep your existing visual style; just normalize typography) */
.ds .btn{
  font-family:var(--sans);
  font-size:14px;
  font-weight:500;
  line-height:1;
}
```

## Mapping Rules for the Whole Homepage

### Left-column Editorial Sections (like "My Story")

```html
<section class="section">
  <div class="container">
    <div class="w-xl">
      <p class="label">SECTION LABEL</p>
      <h2 class="h2 mt-2">Section Heading</h2>

      <p class="label mt-2">OPTIONAL META LINE</p>

      <div class="stack mt-2">
        <p class="body">Paragraph…</p>
        <p class="body">Paragraph…</p>
      </div>

      <div class="mt-3">
        <a class="btn" href="#">CTA</a>
      </div>
    </div>
  </div>
</section>
```

### Centered Sections (like "What I Build")

Same tokens, just centered container, but paragraph max width stays 640:
- Heading uses `.h2`
- Subheading uses `.label` (NOT a new font size)
- Paragraph uses `.body` inside `.w-xl`

## The Non-Negotiable Rule

If any element on the homepage uses:
- a different font-size
- a different line-height
- a different font-family
- random margin values

**Cursor must replace it with the token classes above.**
