# Dangi Solar Solutions — website source

Premium multi-page Next.js website for Dangi Solar Solutions, Israna, Panipat, Haryana.

## Stack
- Next.js 14 App Router + React + TypeScript
- Custom CSS design system (responsive, reduced-motion aware)
- Lucide icons
- Static route generation for the supplied business pages

## Local development
Requirements: Node.js 18.17+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build
```bash
npm run build
npm start
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Framework preset: Next.js; build command: `npm run build`.
4. Add `NEXT_PUBLIC_SITE_URL` with the final canonical domain, e.g. `https://www.your-domain.in`.
5. Deploy, connect the domain, and verify nested routes, metadata, sitemap and robots.txt.

`NEXT_PUBLIC_SITE_URL` is used for metadata base and sitemap/robots URLs. Replace the default `https://example.com` fallback before production launch.

## Pages
- `/` — homepage
- `/about-us`
- `/solar-rooftop-systems`
- `/residential-solar`
- `/commercial-solar`
- `/solar-panels`
- `/solar-inverters`
- `/solar-batteries`
- `/solar-water-pumps`
- `/solar-street-lights`
- `/solar-savings-calculator`
- `/our-projects`
- `/installation-process`
- `/maintenance-support`
- `/solar-faqs`
- `/contact-us`
- `/privacy-policy`
- `/terms-and-conditions`

## Enquiry form status — important
The quote form validates required fields and prepares a prefilled WhatsApp message to `919466622220`. It does **not** persist leads to a database or send email automatically. This is deliberate: no backend credentials were supplied, and the UI does not falsely claim that a lead was saved.

For server-side lead capture, implement a server action/API route and connect an approved CRM/email/database provider. Keep API keys in server-only environment variables. Add server-side validation, spam protection and consent handling before launch.

## Calculator assumptions
All editable assumptions are centralized in `components/Calculator.tsx` under `MODEL`:
- Generic estimated generation: 4.2 kWh/day per kW
- Placeholder installed cost: ₹50,000–₹75,000 per kW
- Self-consumption assumption: 75% of generation, capped at the entered consumption
- Rooftop planning allowance: 100 sq. ft. per kW
- Capacity cap: 100 kW
- Annual tariff escalation: 4%
- Annual degradation: 0.5%

These are demonstration assumptions, not a validated local engineering model or company price list. The calculator excludes export credits, subsidies, financing, taxes, maintenance and other costs. Confirm local generation, tariff rules, installed costs, roof layout, connection limits and self-consumption before using for commercial quotations. Inputs are validated; a zero bill with no known consumption is handled without producing a recommendation.

## Business information requiring verification
Before launch, confirm:
- The 13+ years and 500+ customer claims.
- The supplied 5.0 Google rating and original review links/text.
- Exact map pin and service area.
- Which services and maintenance arrangements the business actually provides.
- Whether customer testimonials may be republished.
- Real installation photographs and project details; the current project gallery explicitly uses illustrative stock imagery.
- Installed cost and generation assumptions in the calculator.
- Privacy policy and terms against actual business practices.
- Business hours, email address, certifications, equipment brands and warranties if these are to be added (none have been invented here).

## Image assets
The current layout uses remote Unsplash image URLs for illustrative photography. Review image licensing and availability before launch; replace with owned or properly licensed images, and download/compress to WebP/AVIF for more reliable performance. The project gallery labels sample use cases as illustrative and does not present them as completed company installations.

## QA status
Implemented in source:
- 18 independently addressable routes via Next.js App Router and static params.
- Centered desktop wordmark; responsive mobile navigation.
- Homepage sequence includes hero, right-to-left Why Choose marquee as section two, then calculator preview.
- Calculator formulas and assumptions are documented in code and this README.
- Phone and WhatsApp links; contextual calculator WhatsApp message.
- Client-side quote validation with honest WhatsApp handoff messaging.
- FAQ accordions using native accessible `<details>` elements.
- Illustrative project portfolio, map embed, metadata, sitemap and robots routes.
- Reduced-motion CSS and responsive breakpoints.

Still required before production:
- Run `npm install` and `npm run build` in a Node environment; this delivery environment did not install dependencies or execute a browser QA suite.
- Configure a real form backend/CRM if direct lead persistence is required.
- Replace fallback domain, validate canonical URLs and test deployment.
- Verify claims, images, map pin, legal copy and calculator assumptions with the business.
- Perform Lighthouse, keyboard, screen-reader, responsive and live link tests against the deployed build.
