---
layout: post
title: "Why this site runs on Jekyll and no database"
description: "A static portfolio with a Markdown blog bolted on — how the pieces fit, and what it buys you when the whole site weighs less than a single stock photo."
date: 2026-08-15 09:00:00 +0600
category: Engineering
tags: [jekyll, static-sites, performance]
image: /resources/images/og-card.jpg
image_alt: "Asif Mahmud Rony — Senior Frontend Engineer and Full Stack Developer"
---

The portfolio you are reading is hand-written HTML, CSS and a little jQuery.
There is no framework, no build step for the pages themselves, and nothing
running on a server. Jekyll sits alongside it and turns Markdown files into
blog pages at deploy time.

<!--more-->

That split is deliberate. The marketing surface changes a few times a year and
benefits from being hand-tuned. Writing changes weekly and benefits from being
plain text in a folder.

## What Jekyll actually does here

Every file in `_posts` is a Markdown document with a small block of front
matter at the top — title, date, description, tags. On push, GitHub Pages runs
Jekyll, which reads those files, pours them into a layout, and writes plain
HTML into `_site`. That output is what visitors download.

The practical consequences:

- **No database.** A post is a file. Backups are `git log`.
- **No server runtime.** Nothing to patch, nothing to keep awake, nothing that
  can be SQL-injected.
- **No admin panel.** Publishing is a commit.
- **Free hosting**, because static files are cheap to serve.

## The cost of the alternative

A conventional CMS would put PHP, a database, a template engine, and a plugin
surface between a visitor and three paragraphs of text. Each of those is a
thing that can be slow, and a thing that can be breached.

> The fastest request is the one that never reaches an application server.

For a site whose job is to load quickly and say who I am, that trade is not
close.

## What it costs me instead

Static generation is not free of trade-offs. Comments need a third-party
service or nothing at all. Search needs a client-side index. Anything genuinely
dynamic — a form, say — has to go out to an API.

The contact form on the homepage is exactly that: it posts to a form service
rather than to a backend of mine. One external dependency, scoped to one
feature, instead of a runtime under the entire site.

## Writing a post

The workflow is a file and a commit:

```bash
# 1. create the file
touch _posts/2026-09-01-some-title.md

# 2. write it, front matter first
# 3. publish
git add _posts && git commit -m "New post" && git push
```

GitHub Pages rebuilds within a minute or so, and the post appears on the
journal index, in `sitemap.xml`, and in the RSS feed without any further work.

That is the whole system. It is small enough to keep in your head, which is the
main thing I want from infrastructure that exists to serve prose.
