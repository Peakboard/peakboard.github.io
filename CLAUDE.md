# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Peakboard Help is a multilingual (German/English) documentation website for Peakboard dashboard software. Built with Jekyll, Tailwind CSS, and modern frontend tooling (Gulp, Webpack).

**Live URL**: help.peakboard.com

## Build Commands

```bash
# Install dependencies
npm install
bundle install

# Development build
npm run build

# Production build
npm run build-prod

# Local development server with hot reload
npm run serve
# Opens http://localhost:4000
```

Note: npm scripts use Windows-specific `set` command syntax for environment variables.

## Build Pipeline

**Gulp tasks** (`gulpfile.js`):
- **style**: SCSS → PostCSS/Tailwind → Autoprefixer → CSSO → `assets/app.css`
- **js**: Webpack → Terser → Concat → `assets/app.js`

**Source locations**:
- SCSS: `resources/sass/`
- JavaScript: `resources/js/`

## Architecture

### Content Structure

All documentation content lives in `content/` as Jekyll collections:
- `_administration/`, `_controls/`, `_data_sources/`, `_get_started/`, `_scripting/`, etc.

**Bilingual naming convention**: Files are prefixed with language code:
- `de-topic-name.md` (German)
- `en-topic-name.md` (English)

**Required frontmatter**:
```yaml
layout: article
title: Page Title
description: Brief description
lang: de  # or en
weight: 100  # sort order
ref: unique-identifier  # for cross-language linking
```

### Templates

- `_layouts/`: Liquid HTML templates (base.html, article.html, category_landing.html)
- `_includes/`: Reusable components (head.html, footer.html, side_menu.html, menu_bar.html)

### JavaScript Modules

Entry point: `resources/js/app.js` imports:
- `menu.js` - Top navigation dropdown
- `sideMenu.js` - Left sidebar navigation (product/category/subcategory toggles)
- `accordian.js` - Collapsible content sections
- `review.js` - Article feedback form
- `lighbox/` - Lity.js image lightbox

### Configuration

- `_config.yml` - Jekyll settings, collections definitions, analytics IDs
- `tailwind.config.js` - Custom colors (sherpa-blue #003944, orange #ffa500), fonts (HelveticaNow), breakpoints
- `netlify.toml` - Geolocation redirects for Chinese visitors

## Deployment

- Push to `master` triggers Netlify auto-deploy
- GitHub Action (`algolia-search.yml`) updates Algolia search index on push

## Key Technologies

| Layer | Technology |
|-------|------------|
| Static Site Generator | Jekyll (via github-pages gem) |
| CSS Framework | Tailwind CSS 2.2.19 |
| CSS Preprocessor | SCSS |
| JS Bundler | Webpack (via webpack-stream) |
| Build Automation | Gulp 4 |
| Search | Algolia (jekyll-algolia plugin) |
| Hosting | Netlify |
