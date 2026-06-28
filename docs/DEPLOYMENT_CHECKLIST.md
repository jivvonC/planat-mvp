# Planat — Vercel Deployment Checklist

Use this checklist before shipping the MVP for usability testing.

## Pre-deploy verification

### Build & quality

- [ ] `npm run build` completes without errors
- [ ] `npm run lint` passes (no errors)
- [ ] `npm run preview` — smoke test production build locally
- [ ] TypeScript compiles cleanly (`tsc -b` via build script)

### Routing & navigation

- [ ] Root `/` redirects to `/plants` after onboarding
- [ ] `/onboarding` accessible before completion; redirects after
- [ ] Bottom nav: Plants, Calendar, Store all load
- [ ] Plant detail: `/plants/:id` opens and back works
- [ ] AI flow: diagnosis mode → manual/photo → result → confirm
- [ ] Store: `/store/:productId` opens product detail
- [ ] Notifications: `/notifications` opens; taps navigate correctly
- [ ] No dead-end screens (every screen has back or tab exit)
- [ ] `vercel.json` SPA rewrite present for deep links

### Responsive layout

- [ ] Mobile viewport (375×812) renders correctly
- [ ] Desktop: app centered in mobile container
- [ ] Safe area insets respected (bottom nav, sheets)
- [ ] No horizontal scroll on any screen

### Assets

- [ ] All images load in production build (no broken paths)
- [ ] Custom font (Tektur) renders for "Planat" branding
- [ ] Favicon visible at `/favicon.svg`

### Environment

- [ ] No secrets in repository
- [ ] No `.env` required for MVP (document if added later)

## Vercel project settings

| Setting | Value |
|---------|-------|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Node.js Version | 20.x or later |

## Post-deploy smoke test (production URL)

Walk the full user journey on the live URL:

1. [ ] Complete onboarding (all 8 steps)
2. [ ] Home — planet hero, summary cards, water plant
3. [ ] Plant detail — water, mission, care tip visible
4. [ ] AI diagnosis — complete one flow, confirm result
5. [ ] Calendar — quick record, date selection, timeline tab
6. [ ] Notifications — open from header, tap a notification
7. [ ] Store — browse, favorite, open product detail
8. [ ] Return to home via bottom nav

## Known MVP limitations (expected)

- State resets on page refresh (in-memory Zustand only)
- AI diagnosis uses mock flows, not a live model
- Weather data is static mock JSON
- Store checkout is not implemented (browse only)
- Single toast at a time (no queue)
- Bundle size warning for large plant images (~500 kB JS chunk)

## Rollback

- Vercel: redeploy previous deployment from the Deployments tab
- Keep `main` branch always deployable

## Optional enhancements (post-MVP)

- [ ] Add analytics (Vercel Analytics, Plausible, etc.)
- [ ] Add error monitoring (Sentry)
- [ ] Configure custom domain
- [ ] Add `robots.txt` / `meta` tags for SEO if going public
