# allenjohn.dev

My personal portfolio and blog, built with [Astro](https://astro.build/).

## Stack

- **Astro** — zero-JS static site generator
- **Vanilla CSS** — no frameworks, no runtime
- **Content Collections** — type-safe Markdown blog
- **GitHub Pages** — deployment via GitHub Actions

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # builds to ./dist
npm run preview   # preview production build
```

## Blog

Create a `.md` file in `src/content/blog/`:

```markdown
---
title: "Post Title"
description: "Short description"
date: 2026-03-24
tags: ["tag"]
draft: false
---

Your content here...
```

Set `draft: true` to hide while writing, `false` to publish.
