# Svavass Senior Living — website

Single-page marketing site for **Svavass — An Estate for Wellbeing & Senior Living, by DFPL**.
Built with Next.js 16 (App Router) + React 19 and plain CSS, the same stack as the other sites in this workspace.

```bash
npm install
npm run dev      # http://localhost:3010
npm run build && npm start
```

## Before launch: replace the placeholders

All unverified content lives in **`lib/site.js`**. Each block marked `PLACEHOLDER` needs confirming with DFPL:

| What | Where |
| --- | --- |
| Phone, email, address, visiting hours, map link | `contact` |
| Production domain (canonical URL, sitemap, OG tags) | `site.url` |
| Amenities | `amenityFeatures`, `amenityList` |
| Residence types, areas and design features | `residences`, `residenceDesign` |
| Care services | `care` |
| Testimonials (use real, consented quotes only) | `testimonials` |

The site shows small "indicative" notes beside amenities, residences and care, plus a disclaimer in the footer. Edit or remove them once the content is confirmed.

## Enquiry form

The form posts to `app/api/enquiry/route.js`, which validates each submission on the server (the rules are in `lib/enquiry.js`) and has a honeypot field to catch spam.
Set `ENQUIRY_WEBHOOK_URL` to forward each lead as JSON to a CRM, Zapier, Google Apps Script or similar.
If it isn't set, leads are only written to the server log.

## Brand assets

- `public/brand/`: the official logo, extracted as vectors from *Svavass logo guideline*. Files: `svavass-logo.svg` (original), `-gold.svg` (dark surfaces), `-white.svg` (white on dark), and `svavass-mark.svg` (hummingbird, also used for the brand pattern). `app/icon.svg` is the favicon.
- Colours: Deep Olive `#2B3324` and Gold `#D7AD51` (from the guideline), with supporting ivory, sage and clay tones. All are defined as tokens in `app/globals.css`.
- Typography: the brand fonts are **Gohdtail** (display) and **Grift** (sans). They need web licences, so Cormorant Garamond and Outfit stand in for now. To switch, add the `.woff2` files to `public/fonts/` and uncomment the `@font-face` rules at the top of `globals.css`. The font stacks already list the brand fonts first.

## Photography

The images in `public/images/` are representative stock photos (Unsplash licence). Replace them with project photography when it's available:
`npm run images -- <folder-of-jpgs>` resizes the originals and converts them to WebP. Keep the same file names, or update `lib/images.js`.

## Film & cookies

- `public/video/svavass-community.mp4` is a 34-second silent edit of free Mixkit stock clips (Mixkit licence), with `public/images/video-poster.webp` as its poster image. It only downloads when someone presses play. Replace it with project footage when that's available.
- Cookie consent (`components/CookieConsent.jsx`) saves the visitor's choice to localStorage and to a `svavass-consent` cookie. It also fires a `svavass:consent` event; analytics and marketing scripts should load only after that event confirms consent. Visitors can reopen their preferences from "Cookie preferences" in the footer.

## Accessibility notes

- 18px base text, plus a visitor text-size control (A / A+ / A++) that is remembered between visits
- Skip link, visible focus rings, keyboard-operable tabs, menu and lightbox
- Large touch targets and a sticky call/visit bar on phones
- Testimonials never rotate on their own, and animations respect `prefers-reduced-motion`
