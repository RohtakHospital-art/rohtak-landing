---
name: Add cleaned README and split landing page
about: Adds split files and README for the landing page
---

This pull request moves the embedded HTML/CSS out of README.md into separate files and adds a cleaned Markdown README, LICENSE, and minimal JS.

## Changes

- Added `index.html` — cleaned landing page with semantic markup
- Added `style.css` — extracted site styles
- Added `script.js` — counters, back-to-top, and form stub
- Replaced `README.md` with a proper project README
- Added `LICENSE` (MIT)

## Notes / To do

- The appointment form is a static demo (`action="#"`). To enable submissions:
  - Set `form action` to your backend endpoint, or
  - Use Formspree/Netlify Forms and update README with details.
- Images are referenced from `images/` — add optimized assets there.

## Checklist

- [ ] Add images to `images/`
- [ ] Configure form endpoint or third-party service
- [ ] Review accessibility and meta tags

