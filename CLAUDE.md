# KI Beratung (kiberatung.de) — CLAUDE.md

## Projekt
Everlast Consulting GmbH — KI Beratungswebseite.
Lokaler Pfad: `/home/node/openclaw/kiberatung-v2/`

**Stack:** Next.js 16 + React 19 + TypeScript + Tailwind CSS + Framer Motion
**Sprache:** Deutsch

## Design System (Everlast)
```
Background:   #000000
Accent:       #faef70  (Gelb)
Text:         #ffffff
Text soft:    #cccccc
Border-Radius: 16px (Buttons), 24px (Cards)
```

**Fonts:** CircularStd (Display + Body)

## Git-Regeln
```bash
git config user.name "dobro-de"
git config user.email "vincent@brandingbrothers.de"
```

**Remotes:**
- `origin` → `git@github.com:dobro-de/kiberatung-v2.git` (Preview/Backup)
- `everlast` → `git@github.com:dobrowolny-everlast/kiberatung-2026.git` (Produktion — NUR auf Anweisung pushen!)

**Push-Regel:** `git push origin main` für Preview. `git push everlast main` NUR wenn explizit "live schalten" gesagt wird.

## Qualitätsstandards (NICHT VERHANDELBAR)

### Performance
- Lighthouse Performance Score: **≥ 90**
- Lighthouse Accessibility Score: **≥ 95**
- Lighthouse SEO Score: **≥ 95**
- First Load JS: **max 150KB**
- LCP: **< 2.5s**

### Barrierefreiheit (WCAG 2.1 AA — Pflicht)
- Semantisches HTML: `<main>`, `<nav>`, `<header>`, `<footer>`
- h1 genau 1x pro Seite, h2 → h3 (nie springen)
- Kontrast: ≥ 4.5:1 Fließtext, ≥ 3:1 Überschriften
- `alt` auf allen Bildern, Focus-Ring, Touch-Targets 44×44px
- `aria-label` auf Icon-only Buttons
- `<html lang="de">`

### Code-Qualität
- TypeScript strict mode, **kein `any`**
- `"use client"` nur bei echtem Bedarf
- Framer Motion: `prefers-reduced-motion` respektieren
- Sticky scroll mit `useScroll` + `useTransform`

### Design-Regeln
- **Keine Emojis als Icons** — nur SVG/Lucide
- Buttons: `btn-primary` (gelber Gradient), `btn-secondary` (ghost)
- Badges mit pulse-Animation
- Animationen: `whileInView` mit `once: true`

## Vor jedem Commit
```bash
npm run build          # 0 Fehler
npx tsc --noEmit       # TypeScript sauber
```
