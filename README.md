# Kulved Hospital Website

Production-ready Next.js website for Kulved Hospital, a pediatric / children's super speciality hospital in Faridabad, Haryana.

## Prerequisites

- Node.js 20+
- npm 10+

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

The local development server runs at `http://localhost:3000` by default.

## Production Build

```bash
npm run build
```

Next.js generates the production application in `.next`.

## Deployment

- Build command: `npm run build`
- Start command: `npm run start`
- Environment variables can be configured in the hosting platform.

## Environment Variables

Copy `.env.example` to `.env` for local development.

- `NEXT_PUBLIC_SITE_URL`: canonical production domain.
- `NEXT_PUBLIC_APPOINTMENT_API_URL`: optional endpoint for appointment submissions.
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL`: optional future map embed URL.

## SEO

The site uses the Next.js App Router. Route metadata is rendered in HTML through `metadata` / `generateMetadata`, and doctor and speciality pages are statically generated from `src/data`.

## Content Updates

Hospital content is stored in `src/data`.

- `hospital.ts`: brand, contact, address, navigation and quick actions.
- `doctors.ts`: doctor profiles.
- `specialities.ts`: speciality pages.
- `facilities.ts`: services and facilities.
- `articles.ts`: health library content.

Each clinical or operational content object includes a verification level. Replace placeholder images with hospital-approved assets before public launch.

## Notes

Instagram is used as a brand/content reference, but the website does not scrape Instagram at runtime. Add approved post images or official assets manually, or integrate a supported official social feed later.
