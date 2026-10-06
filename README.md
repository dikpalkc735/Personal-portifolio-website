# Digital Dikpal — AI Marketing Expert Website

A production-ready, conversion-focused personal brand and business website for **Dikpal K C / Digital Dikpal**. It presents AI-powered marketing services for small and medium-sized businesses and guides visitors toward a free consultation.

## Technology

- Next.js-compatible App Router via Vinext
- React 19 and TypeScript
- Tailwind CSS 4 plus a custom CSS variable design system
- Zod validation for server-side form payloads
- Cloudflare Worker-compatible Sites build, deployable on Vercel with standard Next.js tooling

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal. Create a production build with:

```bash
npm run build
```

The bundled Sites starter uses Vinext for the production Worker build. A standard Next.js installation can also use the existing App Router source.

## Environment variables

Copy `.env.example` to `.env.local` and add only the integrations you use. Never commit API secrets.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production origin |
| `NEXT_PUBLIC_BOOKING_URL` | Calendly, Cal.com, or another scheduling URL |
| `NEXT_PUBLIC_LINKEDIN_URL` etc. | Enables configured social links |
| `CONTACT_FORM_ENDPOINT` | Server-side form/CRM webhook |
| `CONTACT_FORM_API_KEY` | Optional bearer token for the contact endpoint |
| `NEWSLETTER_ENDPOINT` | Server-side email list webhook |
| `NEWSLETTER_API_KEY` | Optional bearer token for the newsletter endpoint |
| `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_META_PIXEL_ID` | Reserved analytics configuration |

If a form endpoint is not configured, the website returns a clear, user-friendly message instead of pretending the submission succeeded.

## Customize personal information

Edit `lib/site-data.ts` to change:

- brand and personal name
- role and email
- booking URL fallback
- social profiles
- services, FAQs, benefits, and article content

The visible brand is currently **Digital Dikpal**, with **Dikpal K C** used for personal and author information.

## Change colors and typography

Brand colors, shadows, corner radius, and core typography are defined as CSS variables at the top of `app/globals.css`. Update the variables there to re-theme the whole site consistently.

## Modify services

Services live in the `services` array in `lib/site-data.ts`. Add, remove, or rename an item there. The services overview, footer, contact selector, sitemap, and dynamic `/services/[slug]` pages all update from that same data.

## Add blog posts

Add a typed entry to the `blogPosts` array in `lib/site-data.ts`. Each post supports:

- title, slug, category, date, and reading time
- featured state and excerpt
- structured sections, paragraphs, and bullet lists

The blog index, search, category filters, sitemap, article metadata, article schema, table of contents, and related articles update automatically.

## Booking flow

Set `NEXT_PUBLIC_BOOKING_URL` to your real Calendly, Cal.com, or Google Calendar-based scheduling link. Every consultation button first routes through `/book-consultation`, where the visitor understands the value of the call before opening the external calendar.

## Contact and newsletter integrations

`app/api/contact/route.ts` and `app/api/newsletter/route.ts` validate input, include honeypot-ready spam handling, and forward approved payloads to a server-only endpoint. This makes it easy to connect Resend, Formspree, HubSpot, Mailchimp, ConvertKit, or a CRM webhook without exposing secrets in browser code.

Adapt the outbound payload if your provider requires a different schema. Add provider-specific rate limiting or CAPTCHA at the route layer if needed.

## Analytics

Important elements include event hooks for:

- `consultation_cta_click`
- `consultation_booking_start`
- `contact_form_submit`
- `newsletter_signup`
- `service_page_view`

`components/analytics.tsx` pushes events to `window.dataLayer` and dispatches a `marketing-analytics` browser event. Connect your approved Google Analytics, Google Tag Manager, or Meta Pixel loader there.

## SEO and accessibility

The project includes unique metadata, canonical URLs, Open Graph and X metadata, structured data, sitemap, robots rules, semantic landmarks, keyboard-friendly navigation, accessible form labels, visible focus states, reduced-motion support, and one primary heading per page.

Before public launch, replace the email placeholder, connect real form/booking services, review the legal placeholders, and add only approved testimonials.

## Deploy

### Vercel

1. Import the repository.
2. Add the environment variables in Project Settings.
3. Use the default install and build commands.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain.

### OpenAI Sites

The project includes `.openai/hosting.json` and the Worker-compatible build configuration used by the Sites publishing workflow.

## Key routes

- `/`
- `/about`
- `/services`
- `/services/[slug]`
- `/blog`
- `/blog/[slug]`
- `/contact`
- `/book-consultation`
- `/privacy-policy`
- `/terms`
