# Luca Marchetti — academic website

Source for [marchetti-luca.github.io](https://marchetti-luca.github.io/).

The site is a statically exported Next.js application deployed by GitHub
Actions. It preserves the existing `/files/` addresses for talks and provides
stable, data-driven research pages.

## Local development

```bash
npm ci
npm run dev
```

Run `npm run check` before proposing changes. See `content/README.md` for the
low-maintenance content workflow.

## Deployment

Merges to `master` build and deploy automatically through the GitHub Pages
workflow. In the repository settings, Pages must use **GitHub Actions** as its
source.
