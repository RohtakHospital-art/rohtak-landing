# Rohtak Hospital — Landing Page

Premium responsive landing page for Rohtak Hospital that includes a lead generation form, WhatsApp contact, doctor profiles, testimonials, and modern UI.

## Features

- Responsive Bootstrap-based layout
- Appointment/lead capture form
- WhatsApp quick contact
- Services, About, Contact, Testimonials, FAQ, Counters
- Accessible and semantic markup (improvable — see checklist)

## Preview

Add a screenshot in `docs/screenshot.png` or link to a live demo once deployed.

## Quick start (development)

1. Clone repository

   git clone https://github.com/RohtakHospital-art/rohtak-landing.git
2. Switch to the working branch (or the branch for this change)

   git checkout add/clean-readme-and-landing

3. Open locally

   - Option A: Open `index.html` directly in a browser.
   - Option B (recommended for local assets): run a simple server:
     - Python 3: `python -m http.server 8000` then open http://localhost:8000
     - Node: `npx http-server` or similar

## Structure

- `index.html`           — main landing page (move HTML from README here)
- `style.css`            — styles for the site
- `script.js`            — client JS (counters, scroll-to-top, form validation)
- `images/`              — images used on the page
- `docs/`                — screenshots, design assets (optional)

## Form handling

The appointment form in `index.html` is static by default. Choose one of:

- Use a server endpoint (your backend) to receive POSTs.
- Use a form service (Formspree, Netlify Forms) for static sites.
- Use a simple Google Forms or Airtable form and link from the site.

Example: to use Formspree, set the form `action` attribute to your Formspree endpoint (e.g. `https://formspree.io/f/your-id`) and method `POST`.

## Improvements & checklist

- Move all HTML/CSS/JS out of README into proper files. (Done in this branch.)
- Add meta Open Graph tags for social sharing.
- Use optimized images (WebP, responsive `srcset`).
- Add `integrity` & `crossorigin` attributes for CDN assets if you want SRI.
- Add `aria-` attributes and ensure heading order for better accessibility.
- Add server-side or third-party form validation and anti-spam (reCAPTCHA or honeypot).
- Avoid using `target="_blank"` without `rel="noopener noreferrer"`.
- Add tests or visual regression checks if needed.
- Provide a `LICENSE` file (MIT is included in this branch).

## Deployment

- GitHub Pages: set the repository to serve from the `main` branch (root) or `gh-pages` branch.
- Or deploy to Netlify/Vercel by connecting your repo.

## Contributing

- Open an issue for features or bugs.
- Fork → create a feature branch → PR with description and screenshots.
- Keep commit messages descriptive.

## License

This project is provided under the MIT License. See `LICENSE`.

## Contact

For questions, reach out via the repo's issues or contact via WhatsApp: https://wa.me/919205657879
