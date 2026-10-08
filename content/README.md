# Updating site content

The homepage intentionally shows a curated publication list and links to
INSPIRE for the complete record. Research directions and selected publications
live in `app/content.ts`.

Talks live in `content/talks.json`. To add one:

1. Copy its PDF into `public/files/`.
2. Add one object near the top of `content/talks.json`.
3. Set `"featured": true` only if it should appear in the highlighted list.
4. Run `npm run check:content` before committing.

The CV is always served from `public/files/luca-marchetti-cv.pdf`. Replace that
file to update the downloadable CV without changing any links.

Research page URLs use stable `slug` values. Titles, order, numbering, and the
number of research directions can change independently.
