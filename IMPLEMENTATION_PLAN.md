# Naturenergy Website Implementation Plan

## Project Summary

This document translates the client PDF brief, the current codebase state, and the two reference websites into a practical implementation plan for the Naturenergy website.

The current project already has a React + Vite + TypeScript structure with reusable page and UI components. However, several sections are still placeholders or are too heavily influenced by the Dr Joe Dispenza reference site. The next implementation phase should simplify the site, align the content with the client brief, and remove speculative sections that are not yet supported by real content.

## Sources Reviewed

- Client brief PDF: `c:\Users\Abhayraj B\Downloads\Website questions .pdf`
- Codebase: `c:\Users\Abhayraj B\nt_landing`
- Reference website 1: `https://drjoedispenza.com/`
- Reference website 2: `https://www.anitamoorjani.com/`

## Confirmed Client Requirements

### Brand

- Brand name: `Naturenergy`
- Tagline: `Reset and protect your energetic system naturally`
- Core positioning:
  - bridging medical science and ancient wisdom
  - healing across mental, emotional, and physical dimensions
  - support for people in recovery or difficult life phases

### Founder / Practice Story

- The founder story is important and should be visible on the site
- The practice is based on:
  - chakra-based healing
  - physical movement to strengthen the body
  - practical lived experience
  - relevant certifications
  - emotional support and resilience
- The first consultation includes:
  - daily routines
  - family support
  - work environment
  - emotional support context

### Services / Offer

- Current offer is a package-based service
- Client mentioned `5-10 sessions` as the current model
- Main CTA should be `Book consultation`

### Assets / Media

- Professional photos are not available yet
- Personal accident/recovery photos are available and should be used where appropriate
- Existing logo draft has been shared by the client and may be refined

### Contact / Lead Capture

- Email: `hello@naturenergy.sg`
- Contact number: client's WhatsApp number
- Business is currently operated by one practitioner
- Booking system is not finalized and client wants guidance

### Testimonials

- No testimonials are available yet

### Hosting / Domain

- Hosting/domain note from client: `Vodien`

## Reference Site Interpretation

### What to take from Dr Joe Dispenza

- strong hero section with one primary CTA
- clean section sequencing
- visible booking / event / offer entry points
- structured homepage with clear conversion flow

### What not to copy from Dr Joe Dispenza

- retreat-heavy navigation
- product store structure
- large event ecosystem
- member/live/blog architecture unless the client explicitly wants it

### What to take from Anita Moorjani

- story-first positioning
- personal transformation framing
- softer trust-building content
- stronger emphasis on the founder journey and credibility through lived experience
- image-led storytelling once founder photos are available

### Recommended Direction

Naturenergy should use:

- Dr Joe's site for layout discipline and CTA clarity
- Anita Moorjani's site for tone, story framing, and trust-building

Naturenergy should not be implemented as a retreat platform, product store, or content membership website at this stage.

## Current Codebase Assessment

### Good Foundations Already Present

- React + Vite + TypeScript setup is working
- shared layout and route structure already exist
- centralized content model in `src/data/siteData.ts`
- reusable UI building blocks already exist:
  - `src/components/ui/ButtonLink.tsx`
  - `src/components/ui/InfoCard.tsx`
  - `src/components/ui/SectionIntro.tsx`

### Existing Pages

- `Home`
- `About`
- `Services`
- `Programs`
- `Story`
- `Events`
- `Resources`
- `FAQ`
- `Contact`
- `Book`

### Current Problems

- homepage is still too influenced by Dr Joe's site structure
- several sections are speculative and not client-confirmed
- `Retreats` navigation is misleading for the current business stage
- fake or placeholder data is still present
- booking flow is not connected to a real scheduling system
- testimonials are referenced despite none being available
- story/media section is still only a placeholder

## Items That Should Be Removed or Reworked

### High Priority Rework

- `Featured Programs` on the homepage
- `Upcoming Retreats` on the homepage
- `Stories of Transformation` style promotional blocks if there is no real content yet
- `Retreats` label in navigation
- retreat dropdown menu
- speculative event ecosystem
- speculative resource ecosystem

### Replace Placeholder Data

- replace fake WhatsApp URL
- replace placeholder package naming if not approved by the client
- replace invented event titles if events are not confirmed
- replace invented resources if downloadable content is not ready
- remove or suppress testimonials section until real testimonials exist

## Recommended Final Site Architecture

The site should be simplified to a trust-building service website.

### Primary Navigation

- Home
- About
- Services
- Story
- Book Consultation
- Contact
- FAQ

### Optional Navigation Items

Use only if the client confirms real content:

- Programs
- Resources
- Events

## Page-by-Page Implementation Plan

### 1. Home

Purpose:

- establish Naturenergy clearly
- explain the offer quickly
- build trust
- send users to booking

Sections:

- hero with brand positioning and primary CTA
- short founder/practice introduction
- healing methodology summary
- session package summary
- story teaser with founder journey
- booking CTA

Remove:

- product-style blocks
- retreat/event blocks
- speculative blog/live/community promos

### 2. About

Purpose:

- explain philosophy and approach
- clarify the integrated healing method

Sections:

- healing philosophy
- science + ancient wisdom positioning
- emotional, mental, physical support framework
- qualifications / lived experience summary
- resilience quote if approved by the client

### 3. Services

Purpose:

- explain what the client actually does

Sections:

- first consultation overview
- chakra healing support
- movement/body strengthening support
- emotional support component
- integrated recovery process

Note:

The page should stay grounded and not over-claim outcomes.

### 4. Story

Purpose:

- make the founder journey the emotional trust center of the website

Sections:

- adversity / accident / recovery narrative
- why the work was created
- transition into helping others
- media gallery for personal photos

Future upgrade:

- add professional brand photography once available

### 5. Programs or Packages

Purpose:

- explain the `5-10 sessions` structure in a clearer way

Recommended approach:

- rename this page from `Programs` to `Packages` unless the client prefers `Programs`
- keep packages simple and real
- avoid invented premium-brand names unless approved

Possible structure:

- 5-session package
- 8-session package
- 10-session package

Each package should describe:

- who it is for
- what it includes
- what the progression looks like

### 6. Book Consultation

Purpose:

- convert interest into inquiry or appointment

Initial implementation:

- email booking CTA
- WhatsApp CTA
- short explanation of what happens after booking

Later implementation:

- replace with Calendly or another booking system once confirmed
- optionally embed the scheduler directly on the page

### 7. Contact

Purpose:

- provide direct access for inquiries

Content:

- email
- WhatsApp
- practitioner note: solo founder/practitioner
- response-time expectation if provided

### 8. FAQ

Purpose:

- reduce hesitation before booking

Suggested FAQ topics:

- how many sessions should I start with
- is this spiritual, practical, or both
- what happens in the first consultation
- is this suitable for people in emotional recovery phases
- how do I book

### 9. Resources and Events

Recommendation:

- do not feature these as major navigation items unless the client has real content ready
- if kept, they should be lightweight and clearly marked as upcoming or evolving

## Content That Is Still Needed From the Client

### Required Before Final Production Copy

- real WhatsApp number
- preferred booking method
- confirmation on whether Calendly should be used
- approved founder biography
- approved story copy
- approved package breakdown
- final logo or permission to refine current one

### Required Before Visual Completion

- professional headshots or brand photos
- approved personal journey photos for web use
- brand colors if the client has a preference

### Helpful but Not Blocking

- certifications list
- social links
- testimonials in the future
- short disclaimer language if the client wants wellness positioning clarified

## Technical Implementation Checklist

### Content and Data Layer

- rewrite `src/data/siteData.ts` to only include approved content
- remove invented products, retreats, and speculative ecosystem content
- add a more realistic data shape for services, founder story, and packages

### Navigation and Routing

- simplify navigation in `src/components/layout/SiteHeader.tsx`
- remove retreat dropdown behavior
- decide whether `Programs`, `Resources`, and `Events` stay public

### Homepage Refactor

- redesign `src/pages/HomePage.tsx`
- replace product/retreat sections with service-first trust-building sections
- add stronger founder story teaser and booking CTA

### Story and About Refactor

- expand `src/pages/StoryPage.tsx`
- align `src/pages/AboutPage.tsx` with approved client language
- support image blocks for founder journey photos

### Services / Packages Refactor

- refine `src/pages/ServicesPage.tsx`
- revise `src/pages/ProgramsPage.tsx` or rename it to packages
- ensure package details match only confirmed client offer

### Booking Flow

- update `src/pages/BookPage.tsx`
- replace placeholder booking instructions with the actual booking path
- update CTA links across home, footer, and contact pages

### Contact and Trust Signals

- update `src/pages/ContactPage.tsx`
- show real contact information
- avoid fake testimonials or fake proof sections

### Styling

- move away from a reference-clone look
- make the visual tone more intentional, calm, and founder-led
- preserve responsive behavior
- introduce real imagery once assets are available

## Recommended Build Order

### Phase 1: Content Cleanup

- clean `siteData`
- remove misleading sections
- simplify navigation

### Phase 2: Core Conversion Pages

- Home
- About
- Services
- Book
- Contact

### Phase 3: Trust and Storytelling

- Story page
- package details
- FAQ refinement

### Phase 4: Optional Expansion

- Resources
- Events
- testimonials
- richer booking integration

## Acceptance Criteria

The implementation should be considered successful when:

- the website reflects the actual Naturenergy offer instead of a copied reference-site structure
- the homepage clearly explains the practice and drives users to booking
- founder story is visible and emotionally credible
- all fake placeholder data is removed
- contact and booking paths are real
- mobile and desktop experiences both feel polished
- optional sections are only shown if real content exists

## Immediate Next Action

The next development task should be:

`Refactor the homepage, navigation, and site data model so the site becomes a real Naturenergy service website instead of a retreat/product placeholder build.`
