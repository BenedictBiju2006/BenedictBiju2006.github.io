# Modern Portfolio (Next.js + MDX)

A minimal, modern portfolio site built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **MDX**.

## Features

- Hero landing page (`/`)
- Horizontal scroll-snapping project gallery (`/projects`)
- Dynamic MDX project pages (`/projects/[slug]`)
- Animated vertical timeline (`/timeline`)
- Content-driven project system in `content/projects/*.mdx`

## Folder Structure

```txt
app/
  page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  timeline/page.tsx
components/
  ProjectCard.tsx
  HorizontalScroll.tsx
  Timeline.tsx
  TimelineItem.tsx
  MDXRenderer.tsx
lib/
  projects.ts
data/
  timeline.ts
content/projects/
  *.mdx
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding a New Project

1. Create a new file in `content/projects/<slug>.mdx`.
2. Add frontmatter:

```md
---
title: "Project Title"
date: "2026-01-01"
description: "Short summary of the project."
---
```

3. Add your MDX content below frontmatter.

Your project will automatically show up in `/projects` and generate `/projects/<slug>`.
