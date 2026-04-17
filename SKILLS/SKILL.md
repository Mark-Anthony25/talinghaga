---
name: talinghaga-astro-tailwind
description: 'Design and build the Talinghaga confession site using Astro and Tailwind CSS with a Modern-Filipino Minimalist, boxy and cropped visual system. Use when creating or refining confession flows, Supabase message storage in mga_talinghaga, and non-generic branded UI with the Ibulong action.'
argument-hint: 'What page or feature should be built or revised for Talinghaga?'
user-invocable: true
disable-model-invocation: false
---

# Talinghaga Astro Tailwind Workflow

## Outcome
Produce production-ready Astro UI and data flow for the Talinghaga confession experience with these non-negotiables:
- Visual direction: Modern-Filipino Minimalist
- Shape language: boxy and cropped, no rounded corners
- Palette: Olive `#556B2F` and Vellum/Cream `#F5F5DC`
- Stack: Astro components + Tailwind utility classes
- Typography pairing: elegant serif for Talinghaga title, clean monospace for confession input
- Backend logic: Supabase insert and fetch for `mga_talinghaga`
- Primary action label: `Ibulong`

## When To Use
- Building new pages or components for Talinghaga in Astro
- Refactoring HTML/CSS into Astro + Tailwind components
- Implementing confession submission and listing backed by Supabase
- Auditing UI to remove bubbly/mobile-first SaaS styling

## Procedure
1. Confirm scope and target
- Identify which page/feature is being built: landing, confession form, archive list, or combined flow.
- Confirm whether work is new implementation or refactor.

2. Establish visual tokens in Tailwind-friendly form
- Define color tokens for Olive and Vellum.
- Define border and corner rules: `border`, `border-olive`, `rounded-none`.
- Define spacing and rhythm for cropped, grid-aligned sections.

3. Build page shell in Astro
- Create semantic Astro structure with clear regions: header, confession form, archive/list, footer.
- Prefer reusable components (`SectionFrame.astro`, `ConfessionForm.astro`, `WhisperList.astro`) when repeated.
- Keep classes utility-first in markup; avoid large bespoke CSS unless needed for one-off effects.

4. Apply typography pairing
- Title and ceremonial headings use serif stack.
- Confession textarea/input and metadata use monospace stack.
- Preserve readable line-length and contrast on cream surfaces.

5. Implement confession input UX
- Use a multiline field optimized for short-form confessions.
- Ensure button text is exactly `Ibulong`, never `Submit`.
- Include disabled/loading/error/success states with clear copy.

6. Add Supabase integration for `mga_talinghaga`
- Configure Supabase client via environment variables.
- Insert flow: validate input, write confession row, handle write errors gracefully.
- Fetch flow: read latest messages with stable ordering and safe fallback empty state.
- Keep database logic in server-safe context (Astro endpoints/server code) and avoid leaking secrets.

7. Add interaction polish without generic template feel
- Use intentional motion only where meaningful: staged entrance, section reveal, or subtle state transitions.
- Avoid bubbly controls and generic blue/white SaaS components.
- Preserve boxy geometry, sharp borders, and editorial composition on mobile and desktop.

8. Validate and finish
- Verify visual constraints, typography pairing, and palette usage.
- Verify Supabase read/write success and failure behavior.
- Verify responsive behavior for small and large screens.
- Verify naming/copy: `Ibulong` appears in the primary submission action.

## Decision Points And Branching
- If the page already has an established system:
  - Keep existing component conventions and naming.
  - Apply Talinghaga tokens and geometry without disruptive rewrites.
- If no design system exists yet:
  - Start from tokenized Tailwind conventions and reusable Astro components.
- If Supabase is unavailable in the environment:
  - Implement storage interface and mock data adapter first.
  - Keep fetch/insert contracts identical so Supabase can be swapped in later.
- If performance or complexity grows:
  - Split data-fetch and form-submit logic into dedicated Astro server routes or API endpoints.

## Quality Gates (Definition of Done)
- Design fidelity:
  - Olive/Vellum palette is dominant and intentional.
  - No rounded corners on primary surfaces or controls.
  - Visual output does not resemble a generic SaaS starter layout.
- Technical fidelity:
  - Astro components are used for structure.
  - Tailwind utilities are used as the primary styling mechanism.
  - Supabase logic reads/writes `mga_talinghaga` with robust error handling.
- Product fidelity:
  - Primary action text is `Ibulong`.
  - Confession flow is understandable, accessible, and responsive.

## Output Contract For Each Task Invocation
Return:
- Files created/updated
- Supabase query/write behavior implemented
- Visual decisions made (tokens, type pairing, layout moves)
- Validation results against Quality Gates
- Any assumptions or missing environment prerequisites
