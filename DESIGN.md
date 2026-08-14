---
name: Asif Mahmud Rony Portfolio
description: A dark editorial spread for a streaming-platform engineer — two navy bands, one amber voice.
colors:
  ink-900: "#22252E"
  ink-800: "#2E313C"
  ink-750: "#343845"
  ink-700: "#3D414F"
  amber: "#F9B233"
  amber-ink: "#22252E"
  fg: "#F2F3F5"
  fg-muted: "#9AA0AD"
  fg-faint: "#6E7481"
  hairline: "rgba(255, 255, 255, 0.09)"
  error: "#FFAE9B"
typography:
  display:
    fontFamily: "Poppins, 'Segoe UI Regular', sans-serif"
    fontSize: "clamp(3.25rem, 8.2vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Poppins, 'Segoe UI Regular', sans-serif"
    fontSize: "clamp(1.75rem, 3.2vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Poppins, 'Segoe UI Regular', sans-serif"
    fontSize: "clamp(1.3rem, 2vw, 1.7rem)"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Poppins, 'Segoe UI Regular', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.9
  label:
    fontFamily: "Poppins, 'Segoe UI Regular', sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.22em"
rounded:
  hairline: "2px"
  soft: "3px"
  pill: "50%"
spacing:
  band: "clamp(4.5rem, 10vw, 9rem)"
  column-gap: "clamp(2rem, 6vw, 5.5rem)"
  card: "clamp(1.5rem, 2.5vw, 2rem)"
  shell-max: "1120px"
components:
  card-service:
    backgroundColor: "{colors.ink-700}"
    textColor: "{colors.fg}"
    padding: "{spacing.card}"
  card-service-lead:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.amber-ink}"
    padding: "{spacing.card}"
  card-work:
    backgroundColor: "{colors.ink-750}"
    textColor: "{colors.fg}"
    padding: "{spacing.card}"
  link-arrow:
    textColor: "{colors.amber}"
    typography: "{typography.body}"
  nav-link:
    textColor: "{colors.fg-muted}"
  nav-link-current:
    textColor: "{colors.fg}"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    padding: "1.5rem 0 1rem"
---

# Design System: Asif Mahmud Rony Portfolio

## Overview

**Creative North Star: "The Late Shift"**

This is the palette of a screen in a dark room — the working light of someone who ships video platforms at night. The page never goes bright. It moves between two closely-related navy-charcoals and lets a single amber do every job that colour is allowed to do: draw a rule, mark a link, set a numeral, fill exactly one card. The restraint is the point; when nine sections share one accent, the accent still means something by the ninth.

Density is editorial rather than app-like. Content sits in an asymmetric two-column split with a narrow left rail carrying the heading and a wider right field carrying the substance, and the page paces itself by alternating two band colours instead of drawing dividers. There are no borders between sections, no boxes around text, and no card wrapping anything that isn't genuinely a discrete object.

The type is one geometric sans at four weights, set tight and large at the top of the page and quiet everywhere else. Its one mannerism is a terminal period on headings, rendered in amber — a full stop that reads as a signature.

**Key Characteristics:**
- Two-band navy ground; no third background colour
- One accent, used sparingly enough to stay loud
- Asymmetric split grid, never a symmetric three-up
- Headings terminate in an amber period
- Tonal layering for depth; shadows only under objects that are physically lifted

## Colors

A near-monochrome navy-charcoal field with a single warm accent; every other value is a neutral step on the same cool axis.

### Primary
- **Signal Amber** (`#F9B233`): the only chromatic colour on the page. It carries the hero rule, every link and arrow, the statistic numerals, the active nav dot, the active testimonial tab, and the fill of exactly one service card. It is never used for body text, never for large fields, and never for more than one card in a group.

### Neutral
- **Deep Band** (`#22252E`): the darker of the two section grounds. Carries the availability/statistics band, services, blog, and testimonials.
- **Mid Band** (`#2E313C`): the page default and the lighter of the two grounds. Carries the hero, clients, portfolio, contact, and footer.
- **Raised Panel** (`#343845`): work-card surfaces sitting on the mid band.
- **Raised Panel High** (`#3D414F`): service-card surfaces sitting on the deep band, and placeholder wells.
- **Full Ink** (`#F2F3F5`): headings and primary text. Never pure white.
- **Muted Ink** (`#9AA0AD`): body copy and secondary labels. Verified at 4.9:1 on the mid band.
- **Faint Ink** (`#6E7481`): eyebrow labels, client wordmarks at rest, legal text.
- **Hairline** (`rgba(255,255,255,0.09)`): the only rule colour — list separators and input underlines.
- **Recovery Coral** (`#FFAE9B`): form error text and invalid field underlines. The one colour permitted outside the amber/neutral system, because an error must not read as an accent.

### Named Rules

**The One Card Rule.** In any group of cards, at most one is filled with Signal Amber. It marks the primary offer, not the first position.

**The Two Band Rule.** Sections are separated by alternating `#22252E` and `#2E313C` grounds. Never by a border, a divider, or a third colour.

**The Cool Neutral Rule.** Secondary text is tinted from the ground's own blue axis, never desaturated to grey. `#9AA0AD` over `#2E313C`, not `#888888`.

## Typography

**Display Font:** Poppins (self-hosted, latin subset, weights 400/500/600/700), falling back to Segoe UI Regular
**Body Font:** Poppins — the same family throughout
**Label Font:** Poppins at 0.6875rem with 0.22em tracking

**Character:** A single geometric sans doing all the work. Circular bowls and even stroke weight keep it neutral enough for dense technical copy, while the tight negative tracking at display size gives the name real presence. There is no serif, no monospace, and no second family anywhere in the system.

### Hierarchy
- **Display** (700, `clamp(3.25rem, 8.2vw, 6rem)`, 1.02, -0.035em): the name in the hero. Appears exactly once per page.
- **Headline** (600, `clamp(1.75rem, 3.2vw, 2.6rem)`, 1.18, -0.02em): section headings, usually broken over two lines with an explicit `<br>` so the break is designed rather than accidental.
- **Title** (500, `clamp(1.3rem, 2vw, 1.7rem)`, 1.4): the hero introduction, the pull quote, and testimonial quotes. The register for a sentence that must be read, not scanned.
- **Body** (400, `0.9375rem`, 1.9): all paragraph copy, capped at 46ch in two-column layouts and 58ch when stacked.
- **Label** (500, `0.6875rem`, 0.22em, uppercase): eyebrow labels and the client-strip lead-in.

### Named Rules

**The Full Stop Rule.** Display and headline text terminates in a period wrapped in `.dot`, rendered in Signal Amber. It is the system's signature and appears on the name, every section heading, every card title. On an amber-filled card the period inverts to `#22252E` so it stays visible.

**The Designed Break Rule.** Multi-line headings carry an explicit `<br>` at the intended break. Never let a two-line heading rewrap arbitrarily across breakpoints.

**The One Family Rule.** Hierarchy comes from weight, size, and tracking. Adding a second typeface is not an available move.

## Layout

A centred shell caps content at 1120px with fluid gutters (`clamp(1.5rem, 6vw, 4rem)`). Vertical rhythm is one band token (`clamp(4.5rem, 10vw, 9rem)`) applied as section padding, so band height scales with viewport rather than stepping at breakpoints.

The recurring structure is an asymmetric two-column split: a narrower left rail (0.85fr) holding the eyebrow, heading, body, and link, against a wider right field (1.15fr) holding the substance — statistics, project cards, post list, contact form. The hero inverts this ratio (1.35fr / 1fr) because the name needs the width.

The portfolio grid is a true two-column masonry in which the section's intro occupies the first cell and cards flow around it; cards landing in the right column are dropped by `clamp(1.5rem, 4vw, 3.5rem)` to stagger the two columns against each other.

**Breakpoints:** 1024px (hero portrait narrows), 880px (all splits collapse to one column, nav becomes a full-screen sheet, services go two-up), 620px (everything single-column, stagger removed, band rhythm drops to 4rem).

### Named Rules

**The Asymmetric Split Rule.** Two-column sections are 0.85fr / 1.15fr, never 50/50. The heading rail is always the narrower side.

**The Stagger Is Desktop Rule.** The portfolio's column offset exists above 620px only. Stacked, it reads as a broken grid rather than a designed one.

## Elevation & Depth

Depth is primarily **tonal**: panels are lighter steps on the same navy axis, and sections separate by ground colour rather than by shadow. Shadows appear only beneath objects that are physically lifted or tilted — never as ambient decoration on a flat surface. Every shadow carries a large negative spread so it reads as contact shadow under a raised object rather than a glow around it.

### Shadow Vocabulary
- **Lifted card** (`0 26px 44px -26px rgba(0,0,0,0.75)`): service cards on hover, when they translate up 8px.
- **Tilted object** (`0 34px 60px -30px rgba(0,0,0,0.85)`): the 3D-rotated project mockups at rest; deepens to `0 42px 70px -30px rgba(0,0,0,0.9)` as the tilt relaxes on hover.
- **Sticky chrome** (`0 12px 32px -18px rgba(0,0,0,0.8)`): under the condensed header once scrolled, paired with a 14px backdrop blur.

### Named Rules

**The Flat At Rest Rule.** Surfaces carry no shadow until they lift, tilt, or stick. A shadow on a static panel is decoration, and this system does not use it.

## Shapes

Near-square. The system's default corner is 0 — service cards, work cards, and the testimonial well are hard-cornered rectangles, which is what lets the amber card read as a colour field rather than a button. Radius appears only in three places: 2px on the amber rules and testimonial tabs (so the ends don't look chipped), 3px on project screenshots (matching a real screen's corner), and a full circle on the logo mark and the form's send control.

Imagery is masked by its container rather than framed: the hero portrait is a background-removed cut-out with no border, clipped by the hero's own bottom edge at the band change; project mockups are clipped by the card they bleed against.

## Components

### Navigation
Four plain text links at 1rem/500 in Muted Ink, brightening to Full Ink on hover and when their section is in view. The current section is marked by a 5px amber dot that scales in beneath the link — the only active-state indicator. There is no button, pill, or filled CTA in the nav; the contact link is a peer of the others. Below 880px the list becomes a full-screen sheet on the deep band at 1.5rem, toggled by a two-bar control that crosses into an X.

### Links
**The arrow link** is the system's only link treatment: amber, 600 weight, a 1px underline, and a trailing 18px stroked arrow. On hover the gap between label and arrow widens from 0.75rem to 1.25rem and the label shifts to Full Ink — the arrow stays put and the space opens.

### Cards / Containers
- **Corner style:** square (0 radius)
- **Background:** Raised Panel High on the deep band, Raised Panel on the mid band
- **Border:** none — cards are distinguished by tonal step alone
- **Internal padding:** `clamp(1.5rem, 2.5vw, 2rem)`
- **Service cards** push their icon to the top and their title to the bottom of a `clamp(200px, 22vw, 250px)` box, so titles align across the row regardless of icon or subtitle length. They lift 8px on hover.
- **Work cards** are flex columns with the shot anchored to the bottom edge and padding-bottom zeroed, so the mockup bleeds against the card boundary.

### Inputs / Fields
Underline-only: no box, no fill, no radius. The label sits above at 1.0625rem/600 and stays visible — it is a label, not a placeholder. The hairline underline turns amber on `:focus-within` and the label turns amber with it. Errors turn the underline and message Recovery Coral, and messages name both the problem and the recovery ("Please add an email address so I can reply"). The textarea auto-grows from a single line.

### Signature Component: the tilted mockup
Project screenshots sit in a 16/10 box with 1500px perspective, rotated `rotateX(7deg) rotateY(-15deg) rotateZ(3deg)` and scaled 1.08 past the card's edge so they read as bleeding out of frame. On reveal they settle into that angle from a steeper one; on hover they relax toward flat. This is the page's one authored motion moment and the element that carries its ambition.

### Motion
One orchestrated reveal: elements rise 22px and fade in on `cubic-bezier(.16, 1, .3, 1)`, staggered 70ms per sibling within a section and capped at six steps. Amber rules scale in from the left instead of rising. All of it is disabled under `prefers-reduced-motion`, where every element ships visible. Transitions animate transform, opacity, colour, and translate only — never width, height, padding, or margin.

## Do's and Don'ts

### Do:
- **Do** separate sections by alternating `#22252E` and `#2E313C`. The band change is the divider.
- **Do** terminate headings with the amber `.dot` period, and invert it to `#22252E` on amber-filled surfaces.
- **Do** keep the accent to one card, one rule, links, and numerals. If a second element wants amber, one of them is wrong.
- **Do** tint secondary text from the ground's blue axis (`#9AA0AD`, `#6E7481`), never neutral grey.
- **Do** put explicit `<br>` breaks in two-line headings.
- **Do** animate transform, opacity, and translate. Condense the header by sliding it, not by transitioning its padding.
- **Do** verify any new text colour at 4.5:1 against both band colours, not just the lighter one.

### Don't:
- **Don't** introduce a third background colour or a border between sections.
- **Don't** round card corners. The square corner is what keeps the amber card reading as a field.
- **Don't** add a filled pill or button to the navigation — links are peers here, and a stock pill is foreign to this vocabulary.
- **Don't** put a shadow on a surface that isn't lifted, tilted, or stuck.
- **Don't** add a second typeface. Hierarchy is weight, size, and tracking.
- **Don't** carry the em-dash eyebrow label onto new surfaces. It is inherited from the pinned reference comp on this page; it is not a house pattern, and a heading that needs a label above it usually needs a better heading.
- **Don't** let the portfolio stagger survive below 620px.
