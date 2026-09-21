# NextGen Digital Professional Redesign

## Goal
Transform the existing single-page dark portfolio into a warm, editorial, conversion-focused digital studio website inspired by the supplied reference, while preserving the real logo, project visuals, live demo links, WhatsApp, phone, email, SEO foundations, and deployment setup.

## What the audit found
- The app currently has one long homepage and hash links; the requested standalone pages do not yet exist.
- Four real portfolio entries and demo links exist: A B Construction, Gayatri Dental Clinic, Fit Fitness Gym, and Looks Salon.
- Contact actions work through phone, email, and WhatsApp. The enquiry form currently only displays a temporary success message and does not submit anywhere.
- SEO metadata, structured data, robots.txt, sitemap.xml, and Google verification already exist, but some schema uses an outdated placeholder email.
- Existing testimonials, experience counts, project counts, response times, delivery claims, and some performance claims are not substantiated. They will not be carried into the new interface.

## Build plan

### 1. Establish the new design system
- Replace the black-heavy glass style with the specified warm ivory, soft beige, deep navy, restrained gold, white, muted text, and soft-border palette.
- Use an editorial serif/sans typography pairing, compact radii, fine rules, disciplined spacing, and limited shadows.
- Add restrained reveal and image-motion effects with reduced-motion support.
- Keep the existing metallic ND logo while presenting the wordmark more professionally.

### 2. Add real page routing and shared structure
- Add client-side routes for `/`, `/services`, `/work`, `/pricing`, `/process`, `/about`, `/contact`, `/faq`, `/privacy-policy`, `/terms-and-conditions`, and `/cancellation-refund`.
- Build one shared sticky header, mobile menu, footer, page heading pattern, final CTA, and route-aware navigation.
- Preserve useful homepage section anchors so direct section links continue to work.

### 3. Recompose the homepage
- Build the requested sequence: navigation, hero, positioning, services, selected work, why NextGen, seven-step process, pricing, FAQ, navy CTA, enquiry form, and footer.
- Use an actual project image as the hero browser preview instead of decorative floating cards.
- Present services, differentiators, and process through varied editorial layouts rather than repeated card grids.
- Make Sungava Resort & Spa the lead showcase using the closest available hospitality asset; retain all existing real projects on the Work page.

### 4. Create service, portfolio, pricing, process, and company pages
- Reuse centralized service, project, pricing, process, and FAQ data so homepage and subpages remain consistent.
- Give each project a truthful studio-style presentation with industry, challenge, approach, features, image, live demo, and case-study view; avoid invented outcomes.
- Add complete content for About and Contact while preserving Ashutosh Kumar Srivastava as founder and the verified contact details.
- Create concise legal pages with clear business-language policies and no invented office address.

### 5. Improve enquiry handling without a fake integration
- Build the requested validated fields: name, business name, business type, phone/WhatsApp, email, project type, budget, and requirements.
- Prepare a typed submission payload and adapter boundary for a future Google Sheets connection.
- Until connected, submit the validated enquiry through the existing WhatsApp contact path rather than claiming it was stored.

### 6. Preserve and correct SEO
- Add route-specific titles, descriptions, canonicals, and Open Graph data.
- Update structured data to use the verified email and remove placeholder or unsupported claims.
- Update sitemap entries for all public routes and preserve robots.txt and Google verification.
- Keep one clear H1 per page, semantic section headings, useful alt text, and truthful business language.

### 7. Production verification
- Check all routes, desktop/tablet/mobile navigation, project demos, calls, email, WhatsApp enquiry flow, accordions, and legal links.
- Confirm there is no horizontal overflow, broken image, broken import, console error, or unsupported claim.
- Review current preview diagnostics after implementation and test key flows at desktop and mobile sizes.

## Technical details
- Continue with React, Vite, TypeScript, Tailwind, existing Radix UI primitives, and Lucide icons.
- Use lightweight browser-history routing with SPA fallback support already present in deployment configuration, avoiding unnecessary framework replacement.
- Centralize content in typed data modules and split shared sections/pages into focused components.
- Use semantic design tokens in `src/styles.css`; avoid hardcoded page-level colors and excessive visual effects.
