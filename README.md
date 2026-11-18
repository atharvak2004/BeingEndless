# Being Endless — Next.js rebuild

A rebuild of https://www.beingendless.com (Wix) in **Next.js 16 (App Router)** and **Tailwind CSS v4**. It keeps the live site's URLs, page titles, meta descriptions, canonicals, Open Graph/Twitter tags, verification tags and JSON-LD.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

| Path | Purpose |
| --- | --- |
| `src/lib/site.ts` | Contact details, social links, verification codes, header/footer nav |
| `src/lib/seo.ts` | `seo()` helper: title, description, canonical, OG, Twitter, RSS link |
| `src/data/*.ts` | All page copy: programs, counselling, blog posts, videos, FAQs |
| `src/components/sections.tsx` | Home sections (About, Area of Focus, How it Works, Why Choose Us, FAQ, cards) |
| `src/app/**/page.tsx` | One route per live URL (URLs kept exactly, e.g. `/about-3`, `/contact-8`) |
| `src/app/sitemap.ts`, `robots.ts`, `blog-feed.xml/route.ts` | sitemap.xml, robots.txt, RSS feed |
| `src/app/api/consultation/route.ts` | Booking form endpoint |
| `public/images/` | All images downloaded from the live site |

## Booking form

`/contact-8` posts to `/api/consultation`. Set `CONSULTATION_WEBHOOK_URL` (Zapier/Make/Formspree, or your own mail service) to forward submissions. Without it, submissions are only logged on the server.

## Content notes from the live site

- `/mentalprograms/*` detail pages are broken on the live site: they redirect to placeholder items ("Digital Infrastructure", "Corporate Resilience", "Healthy workplaces") or a 404. Here they show the program's listing copy. Real content can go in `src/data/programs.ts`.
- `/counselling-program/couple-and-marital-relationship-counselling` mentions "Creative Horizons Counselling", which is verbatim from the live page.
- The counselling program pages, `/podcast-1` and `/inquiry-services-page` have no meta description on the live site, so none is set here.
- The live "How do you identify?" dropdown has no options, so sensible defaults were added in `ConsultationForm.tsx`.
