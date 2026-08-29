# asifmrony.github.io

My personal portfolio and blog — a single-page site with a Markdown-driven
journal attached.

**Live:** <https://asifmrony.github.io>

I'm Asif Mahmud Rony, a Senior Frontend Engineer and Full Stack Developer based
in Dhaka. I build OTT/VOD streaming platforms, payment gateways, and apps for
screens that aren't laptops — including a Samsung Tizen TV application.

---

## Why it's built this way

I spend my working life in React and Next.js. This site is deliberately none of
that.

A portfolio has one job: load fast and say who you are. It has no users to
authenticate, no state to manage, and no data to fetch. Reaching for a
framework here would mean shipping a runtime, a hydration step, and a build
pipeline to serve what is, in the end, a few screens of text and images.

So the site is hand-written HTML and CSS with a little jQuery. There is no
bundler and no build step for the pages themselves. Jekyll sits alongside it
purely to turn Markdown files into blog posts at deploy time.

The result is a site that weighs **about 700 KB in total**, has no server to
patch, no database to back up, and costs nothing to host. My CV claims I took a
production app's Core Web Vitals from F to A — it would be a poor look if the
page making that claim were slow.

---

## How it works

There are two halves, and they meet only at deploy time.

**The homepage** (`index.html`) is a complete, hand-written HTML document. It
carries a small block of Jekyll front matter so that two things can be dynamic:
the header's blog link, and the section that lists the three most recent posts.
Everything else is static markup.

**The blog** is Jekyll. Each post is a Markdown file in `_posts/`. On push,
GitHub Pages runs Jekyll, which pours those files into the layouts in
`_layouts/` and writes plain HTML. That output is what visitors download —
there's no JavaScript framework rendering anything at runtime.

Publishing a post updates the blog index, the homepage's blog section, the
sitemap, and the RSS feed automatically. No code changes.

---

## Project structure

```
├── index.html              # the homepage — one hand-written document
├── _config.yml             # Jekyll config: metadata, SEO plugins, excludes
├── _posts/                 # blog posts, one Markdown file each
├── _layouts/
│   ├── default.html        # shared shell (head, header, footer)
│   ├── blog.html           # the /blog/ archive
│   ├── post.html           # a single article
│   └── none.html           # passthrough, keeps index.html unwrapped
├── _includes/              # head, header and footer partials
├── blog/index.html         # front matter only; renders via _layouts/blog.html
├── resources/
│   ├── css/
│   │   ├── style.css       # the design system + homepage
│   │   ├── blog.css        # blog-only styles (archive + article typography)
│   │   ├── font.css        # @font-face declarations
│   │   └── all.css         # Font Awesome (brand icons only)
│   ├── js/main.js          # nav, scroll reveals, lightbox, contact form
│   ├── fonts/Poppins/      # self-hosted, latin subset
│   └── images/             # portrait, project shots, client logos
├── favicon.ico             # + SVG/PNG icon set in resources/images/
├── site.webmanifest
└── robots.txt
```

`DESIGN.md` and `PRODUCT.md` are my own working notes on the design system and
product decisions. They're excluded from the build, so they live in the repo
but never get published.

---

## Running it locally

You only need Ruby if you want to work on the **blog**. For the homepage, open
the file.

### Homepage only

```bash
# any static server works
npx serve .
# or
python -m http.server
```

Opening `index.html` directly in a browser mostly works too, though the Jekyll
front matter will show up as stray text at the top since nothing is processing
it.

### With the blog (full site)

Requires Ruby 3.x and Bundler.

```bash
# 1. install dependencies
bundle install

# 2. serve with live reload at http://localhost:4000
bundle exec jekyll serve --livereload
```

Jekyll writes the generated site to `_site/`, which is gitignored — GitHub
Pages rebuilds it on its own, so there's no need to commit it.

---

## Writing a blog post

Create a Markdown file in `_posts/` named `YYYY-MM-DD-some-slug.md`:

```markdown
---
title: "The title of the post"
description: "One sentence. Becomes the meta description and the archive excerpt."
date: 2026-09-01 09:00:00 +0600
category: Performance
tags: [react, web-vitals]
image: /resources/images/posts/screenshot.webp
---

The opening paragraph, which is what shows above the fold.

<!--more-->

The rest of the article. Standard Markdown — headings, lists, links,
blockquotes, code fences and tables are all styled.
```

`layout: post` is applied automatically. Commit, push, and GitHub Pages
publishes it within a minute or so.

Everything above `<!--more-->` becomes the excerpt, so you control the summary
rather than letting Jekyll grab whatever paragraph comes first.

---

## Tech

| | |
|---|---|
| **Pages** | Hand-written HTML5 and CSS (custom properties, Grid, Flexbox) |
| **Blog** | Jekyll 3.10 via the `github-pages` gem, Markdown + Liquid |
| **JavaScript** | jQuery 3.4 — nav, scroll reveals, testimonial slider, form |
| **Lightbox** | Magnific Popup |
| **Type** | Poppins, self-hosted (latin subset, four weights, ~32 KB) |
| **Icons** | Font Awesome brand icons only (~76 KB), plus hand-drawn SVG |
| **Contact form** | Web3Forms — posts client-side, so there's no backend |
| **Hosting** | GitHub Pages |

No bundler, no package.json, no node_modules. Every dependency is vendored into
`resources/` and committed, so the repo is the whole site.

---

## Design

The visual system is a dark editorial layout: two alternating navy-charcoal
grounds, a single amber accent doing every job (rules, links, statistics, one
filled card), one typeface, and headings that end in a period.

It's documented properly in [`DESIGN.md`](DESIGN.md) — tokens, named rules, and
the reasoning — so future work stays consistent rather than drifting.

---

## Performance notes

A few decisions that keep the page small:

- **Images are sized to their display size** and served as WebP. The portrait
  went from 1.4 MB to 59 KB this way; the project screenshots from ~3.7 MB to
  ~270 KB combined.
- **No CSS framework.** Bootstrap was dropped once it turned out no Bootstrap
  classes were actually in use — 156 KB for nothing.
- **Font Awesome trimmed** to just the brand icon file. The solid and regular
  sets, and the legacy `.eot`/`.svg`/`.ttf` formats, were removed.
- **Fonts self-hosted and subset**, preloaded, with `font-display: swap`.
- Motion respects `prefers-reduced-motion`; every section is visible without
  JavaScript.

---

## SEO

- `jekyll-seo-tag` for titles, canonical URLs, Open Graph and Twitter cards
- `BlogPosting` JSON-LD on every post
- `jekyll-sitemap` and `jekyll-feed` generate `sitemap.xml` and `feed.xml`
- A purpose-built 1200×630 social card, and a full favicon set including the
  96px PNG Google prefers for search results

---

## Status

The site is live and the blog is running. Testimonials are written but
commented out until I have real quotes to put in them — I'd rather ship a
section short than ship placeholder praise.

---

## Contact

- **Email** — [asifmrony@gmail.com](mailto:asifmrony@gmail.com)
- **LinkedIn** — [linkedin.com/in/asifmrony](https://www.linkedin.com/in/asifmrony)
- **GitHub** — [github.com/asifmrony](https://github.com/asifmrony)

Open to freelance and project-based work.

---

## License

The code is free to learn from and borrow. The content — my name, photograph,
writing, project descriptions, and the client logos — is not; please swap those
for your own if you use this as a starting point.
