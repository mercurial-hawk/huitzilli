# Huitzilli — Proposal A2 + Global Team Readiness Check (React)

A React port of the A2 homepage proposal, with the "Global Team Readiness Check" section from
Proposal B2 added in. Same 15 sections, same design system, same real photography and logo —
just componentized and buildable with Vite instead of a single static HTML file.

## Open this in VS Code

1. Unzip this folder and open it in VS Code (`File → Open Folder…`).
2. Open a terminal inside VS Code (`` Ctrl+` `` / `` Cmd+` ``).
3. Install dependencies:
   ```
   npm install
   ```
4. Start the dev server:
   ```
   npm run dev
   ```
5. Open the URL it prints (usually `http://localhost:5173`) in your browser. Vite hot-reloads
   on every save.

Requires [Node.js](https://nodejs.org) 18 or later. Check with `node -v`; install it first if
that command isn't found.

## Project structure

```
src/
  main.jsx              — React entry point
  App.jsx                — assembles all sections in order
  index.css              — full design system (tokens, layout, components)
  assets/                 — real photos + logo (decoded from the original base64)
  hooks/Reveal.jsx        — scroll-reveal wrapper (replaces the vanilla IntersectionObserver script)
  components/
    Header.jsx            — sticky header + mobile nav (has its own state)
    Hero.jsx
    CredibilityStrip.jsx
    InvisibleChallenges.jsx   — the iceberg diagram
    QuietWithdrawal.jsx       — emotional narrative section
    HowWeHelp.jsx             — 5 services, data-driven from an array
    Approach.jsx              — 4-stage method graphic
    WorkshopExperience.jsx    — 5-image mosaic (currently placeholders)
    Outcomes.jsx
    Proof.jsx                 — logos, case study, testimonial, stats
    Alejandra.jsx
    InsightsAndMagnet.jsx     — articles + Cultural Readiness Checklist
    ReadinessCheck.jsx        — NEW: Global Team Readiness Check (from Proposal B2)
    FAQ.jsx
    FinalCTA.jsx
    Footer.jsx
```

Each section is its own component so you can edit, reorder, or remove any one of them without
touching the rest. Copy lives directly in the JSX (or in small arrays at the top of a file, e.g.
`HowWeHelp.jsx`, `FAQ.jsx`) rather than a separate CMS — search the component for the text you
want to change.

## Building for production

```
npm run build
```
Outputs a static site to `dist/` that you can deploy anywhere (Vercel, Netlify, S3, WordPress as
static assets, etc). Preview the production build locally with `npm run preview`.

## Fonts

Libre Baskerville + Inter, loaded from Google Fonts in `index.html`. Libre Baskerville is an
open-source stand-in for the licensed Baskerville Display PT — see the original implementation
notes for what to confirm before this goes to production.

## Known open items (carried over from the static version)

- The Workshop Experience mosaic (`WorkshopExperience.jsx`) currently shows placeholder notes,
  not real photos — they were pulled after a layout bug; the bug is fixed, so real photos can go
  back in whenever they're ready (see `.imgph` in `index.css`).
- Two secondary conversion offers now sit close together (the Cultural Readiness Checklist in
  `InsightsAndMagnet.jsx` and the new Global Team Readiness Check in `ReadinessCheck.jsx`) —
  worth deciding whether to keep both, merge them, or stage them differently in the funnel.
- The readiness-check radar diagram is a static illustration, not a working assessment tool.
- Client logos, the case-study quote, and the two proof stats are all still placeholders pending
  real, confirmed content.
