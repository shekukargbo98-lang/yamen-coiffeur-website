```markdown
# Yamen — L'artiste Coiffeur (Starter static site)

This is a lightweight static starter site (HTML/CSS/JS) with multilingual support (FR / EN / AR with RTL) intended as the production-ready homepage for Yamen — L'artiste Coiffeur.

Project structure:
- index.html — homepage and single-file app
- css/styles.css — core styles
- js/i18n.js — translations loader and language switcher
- js/main.js — small UI interactions
- translations/*.json — FR (default), EN, AR
- assets/ — place your images, logo and favicon here

How to use
1. Replace assets:
   - Replace `assets/logo.png` (and favicon) with the real logo (SVG/PNG) from the Instagram profile.
   - Replace `assets/images/hero.jpg`, `assets/images/1.jpg`, `2.jpg`, etc. with the high-res images you will provide.
   - Replace `assets/images/og-image.jpg` with the Open Graph image for social sharing.

2. Update business/contact data:
   - Update the phone number in `js/main.js` (variable `phone`) or replace placeholders in index.html.
   - Update the JSON-LD LocalBusiness script in `index.html` with the real phone, url, and openingHours.

3. Booking integration:
   - Paste the booking provider embed code (Booksy/Fresha/Calendly) into the booking embed area in `index.html`.

4. Google Maps:
   - Replace the stub iframe src in the contact map with your actual Google Maps embed URL.

5. Deploy
   - Netlify: drag & drop the project folder or connect the repo. No build command is required for pure static HTML. Optionally set the publish directory to `/`.
   - GitHub Pages: push to a repo and enable GitHub Pages for the main branch (or gh-pages branch). If using a custom domain, add `CNAME` file and configure DNS.
   - Once live, add the site URL to the LocalBusiness JSON-LD.

6. SEO & Analytics
   - Add Google Analytics / GA4 snippet and Meta Pixel as needed.
   - Consider pre-rendering/perf: compress images (WebP), enable caching, and add sitemap.xml when you add pages.

Accessibility & i18n notes
- All visible text uses data-i18n keys. To add pages or elements, include `data-i18n="key.path"` and add translations to the JSON files.
- Arabic uses the "Cairo" font (Google Fonts) and sets dir="rtl". Confirm fonts for branding.

Next steps I can take for you
- Replace placeholders with your assets and publish a Netlify preview.
- Add a multilingual Services page, a full Gallery with lightbox, and a team/About page.
- Wire up bookings (Booksy/Fresha/Calendly) and full SEO markup (sitemap, robots, canonical tags).
- Add schema for Reviews and Social Profiles.

Please provide:
- High-resolution images (hero + gallery)
- Logo file (SVG or PNG)
- Phone/WhatsApp number to embed
- Preferred booking provider (and embed code if available)
- The exact website URL when you want it in JSON-LD

When you give me the assets I'll replace the placeholders and deploy a preview link.
```
