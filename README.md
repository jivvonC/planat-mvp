# Planat

A mobile-first plant care MVP inspired by *The Little Prince*. Planat helps users build a warmer relationship with the plants they already have — through daily care, AI diagnosis, calendar journaling, and gentle reminders.

Built for usability testing and iterative product validation.

## Features

- **Onboarding** — 8-step guided introduction (name, philosophy, AI diagnosis, weather, widget preview)
- **Home (My Plants)** — orbital planet hero, today's care summary, watering & missions
- **Plant Detail** — health status, care tips, weather context, watering & mission sheet
- **AI Diagnosis** — photo or manual symptom flow with structured results
- **Calendar** — quick record (water, fertilizer, photo, note), monthly grid, timeline feed
- **Notifications** — care reminders with deep links to plants and diagnosis
- **Store** — product browsing, favorites, personalized recommendations, product detail

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Routing | React Router v7 |
| State | Zustand |
| Icons | Lucide React + custom assets |

## Folder Structure

```
Planat/
├── docs/                  # Product & implementation documentation
├── public/                # Static public assets
├── src/
│   ├── assets/            # Images, fonts, icons
│   ├── components/        # Shared UI (common, calendar, plants, store, ai, onboarding)
│   ├── data/              # Mock JSON data
│   ├── hooks/             # App-level hooks
│   ├── layouts/           # App shell, tabs, onboarding gates
│   ├── lib/               # Utilities (motion tokens, cn helper)
│   ├── pages/             # Route-level screens
│   ├── store/             # Zustand stores
│   ├── styles/            # Global CSS & design tokens
│   ├── types/             # TypeScript types
│   └── utils/             # Domain helpers
├── index.html
├── package.json
├── vercel.json            # SPA rewrite rules for deployment
└── vite.config.ts
```

## Installation

**Requirements:** Node.js 20+ and npm

```bash
git clone <repository-url>
cd Planat
npm install
```

No environment variables are required for the MVP — all data is in-memory mock state.

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). The app is optimized for a mobile viewport (max-width ~430px) centered on desktop.

### Other scripts

```bash
npm run build        # Production build (TypeScript + Vite)
npm run preview      # Preview production build locally
npm run lint         # ESLint
npm run format       # Prettier (src/**/*.{ts,tsx,css})
```

## Build

```bash
npm run build
```

Output is written to `dist/`. Asset paths are relative and work with static hosting.

## Deployment

### Vercel (recommended)

1. Import the repository in [Vercel](https://vercel.com)
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. `vercel.json` is included for client-side routing (SPA rewrites)

See [docs/DEPLOYMENT_CHECKLIST.md](docs/DEPLOYMENT_CHECKLIST.md) for the full pre-launch checklist.

### Other static hosts

Serve the `dist/` folder and configure a fallback to `index.html` for all routes.

## User Journey

```
Onboarding → Home → Plant Detail → AI Diagnosis → AI Result
     ↓
Calendar / Notifications / Store → Product Detail → Home
```

## Future Improvements

- Persistent storage (localStorage or backend API)
- Real weather API integration
- Live AI diagnosis backend
- Push notifications (native or web)
- User authentication & multi-device sync
- Image upload to cloud storage
- Code splitting for smaller initial bundle
- Accessibility audit (screen reader, reduced motion)
- Internationalization beyond Korean copy

## Documentation

Detailed product and implementation docs live in `docs/`. Start with `docs/19_CURSOR_START_PROMPT.md` for project context.

## License

Private MVP — not licensed for public distribution.
