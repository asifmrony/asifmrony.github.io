# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Prospective clients and hiring contacts evaluating Asif Mahmud Rony for **freelance or project-based engagements**. They arrive from a CV link, a LinkedIn profile, or a referral, usually on desktop, usually skimming several candidates in one sitting. Their job is to decide within a minute or two whether he can take on their build — and to find a way to contact him.

Secondary: recruiters and engineering managers screening for senior frontend roles.

## Product Purpose

A single-page personal portfolio at `asifmrony.github.io` that establishes seniority, shows the kind of product work he does, and opens a conversation. Success is an inbound enquiry about freelance or project work.

## Positioning

Senior Frontend Engineer and Full Stack Developer, based in Dhaka. Six-plus years shipping production frontends at scale, with an unusual specialism in **streaming and video delivery** (OTT/VOD, Video.js, HLS, MUX) and in **platform reach beyond the browser** — a Samsung Tizen TV application, and multi-platform payment gateways spanning web, Android, and iOS. That combination — video-platform depth plus TV/native delivery — is what a general frontend portfolio cannot truthfully copy.

## Operating Context

Static site served from GitHub Pages off the `master` branch of `asifmrony.github.io`. No build step, no package manager, no server-side processing. All libraries are vendored into `resources/`. Any form must post to a third-party endpoint or fall back to `mailto:`.

## Capabilities and Constraints

- **Stack is fixed by the user:** HTML + Bootstrap 4.4.1 + custom CSS + jQuery 3.4.1, all vendored locally. Font Awesome Free 5.12.0 self-hosted. No framework, no build tooling.
- **Contact form:** markup and styling to be built now; endpoint integration is explicitly deferred — the user will instruct separately. Ships inert and clearly non-functional to the developer, not to the visitor.
- **Deferred content the user will supply later:** project screenshots, client logo files, blog post content, testimonial quotes and attributions, CV PDF.
- Existing `resources/images/myphoto_bgremoved.png` / `.webp` is a background-removed portrait, usable as the hero cut-out.
- Existing `portfolio/p1.jpg`–`p9.jpg` are generic stock placeholders, not real project work.

## Brand Commitments

- **Name:** Asif Mahmud Rony. Initials mark: `AMR.`
- **Binding visual reference:** the user supplied a design comp as a video walkthrough (`original-25635086bf10c13f1e0cf7b7992d03db.mp4`, a Dribbble-style scroll of a static "Carlos Mendoza" portfolio comp). Frames extracted to the session scratchpad. This comp is the pinned visual world — dark navy-charcoal ground, single amber accent, geometric sans, headings terminated with a period, em-dash eyebrow labels, alternating background bands. Nine sections, reproduced in order.
- **Contact:** asifmrony@gmail.com · +8801793726776 · Banasree, Dhaka
- **Profiles:** GitHub, GitLab, LinkedIn

## Evidence on Hand

Real, from the résumé and the user's own account:

- **Experience:** 6+ years frontend, 2 years backend, 1 year cross-platform mobile.
- **Rockstreamer Pte Ltd** (HQ Singapore), Sr. Software Engineer (Frontend), March 2023–present. SaaS OTT/VOD platforms; multi-platform payment gateway (web/Android/iOS); 50+ REST endpoints across microservices; Samsung Tizen TV app that raised client satisfaction ~30%; ~20% frontend performance gain via code-splitting, lazy loading, React Suspense; Lighthouse Core Web Vitals F→A; ~10% conversion lift from UI/UX work.
- **CodeSmith Tech Ltd**, Frontend Engineer, June 2020–February 2023. ES6/jQuery/React/HTML5 across social, e-commerce, admin dashboards, inventory; headless CMS integration cutting content update times ~30%; WordPress theme/template architecture.
- **Southeast University**, BSc Computer Science and Engineering, CGPA 3.45, December 2019.
- **Named projects:** Iscreen (OTT/streaming — web + TV app, Video.js, VOD and live). Game2wins (web/gaming — Next.js, embedded third-party HTML5 games).
- **Named clients (9, confirmed as "notable" among more):** Impress Telefilm Ltd, Robi Axiata Limited, Grameenphone Limited, Banglalink Digital Communications Ltd, Brac Bank Limited, Urduflix, Funprime, Springdale International School, CMV Music.
- **Stats confirmed for display:** "6+ Years of Experience" and "9 Notable Clients". No other counts are established.

**Must not be fabricated:** client counts beyond 9, project counts, satisfaction or revenue figures beyond those quoted above, testimonial text or attribution, blog posts, press mentions, availability dates, rates.

## Product Principles

1. **Seniority is shown through specifics, not adjectives.** Tizen, HLS, F→A Lighthouse, 50+ endpoints — the concrete facts are the credential.
2. **Streaming and multi-platform delivery is the differentiator.** Where a section can carry that, it should.
3. **Every claim traces to the résumé or the user's own words.** Placeholders are visibly placeholders; invented numbers never ship.
4. **The contact path is never more than one screen away.** The visitor's job ends in an enquiry.
5. **Deferred content degrades gracefully.** Sections awaiting real assets must look composed, not broken, so the site is showable today.

## Accessibility & Inclusion

No user-specific requirement established. Standard obligations apply: the design is a dark theme, so text contrast must be verified against the navy ground; the résumé's Lighthouse work indicates the user cares about measurable frontend quality.
