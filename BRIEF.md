# kiberatung.de Facelift — BRIEF.md

## Was ist das?
Next.js 16 Website für Everlast Consulting's KI-Beratungs-Dienstleistung (kiberatung.de).
SEO-Krake-Strategie: dedizierte Branchen-Seiten mit Stadt-Varianten für maximale organische Reichweite.

## Tech Stack
- Next.js 16.1.6 + React 19.2.3 + TypeScript 5.9.3
- Tailwind CSS 4 (via `@tailwindcss/postcss`)
- Framer Motion 12.35.0
- Fonts: Inter + Bebas Neue (Google Fonts, via `next/font/google`)
- Hosting: Vercel (Everlast-Account)

## Design System
- Hintergrund: `#0c0f16` (--bg-primary), Cards: `#111827` (--bg-card)
- Akzent: `#f97316` Orange (--accent), Hover: `#ea6b0e`
- Text: `#f8fafc` (--text-white), `#94a3b8` (--text-gray)
- Border-Radius: 12px (Cards), 999px (Pills)
- Border: `rgba(249, 115, 22, 0.15)`

## Struktur / Seiten
- `/` — Homepage (fertig)
- `/branchen` — Branchen-Übersicht (fertig)
- `/gastronomie`, `/gastronomie/[stadt]` — 15 Städte × Varianten (fertig)
- `/handwerk`, `/handwerk/[stadt]` — 20 Städte × 10 Gewerke (fertig)
- `/gesundheitswesen`, `/gesundheitswesen/[stadt]` — 15 Städte × 9 Fachrichtungen (fertig)
- `/loesungen` — 15 SEO-Lösungsseiten (fertig)
- `/[slug]` — Generisches Branchen-Template
- **TODO:** `/leistungen`, `/ki-telefonassistent`, `/termin-buchen` — noch nicht auf Niveau der Branchen-Seiten

## Git
- Remote: `git@github.com:dobro-de/kiberatung-v2.git`
- Commits als: `dobro-de` / `vincent@brandingbrothers.de`
- Co-author: `Co-Authored-By: Paperclip <noreply@paperclip.ing>`
- Preview: `git push origin main` → Vercel Preview
- Produktion (`kiberatung.de`): NUR auf Vincents explizite Anweisung

## Wichtige Entscheidungen
- SEO-Krake: Stadt-Unterseiten statt generischer Seiten (mehr organische Indexierung)
- Branchen-First: Gastronomie/Handwerk/Gesundheit als Referenz-Qualität gebaut
- SVG-Icons statt Emojis (Commit 30c5e1c)
- Tailwind 4 mit `@import "tailwindcss"` (kein v3 config-file)

## Deployment
- `pnpm dev` — lokaler Dev-Server
- `pnpm build` — Production Build
- Env vars: keine lokalen `.env` nötig für Dev
- Produktion: Vercel (Auto-Deploy auf main via Everlast-Account)

## Nächste Aufgaben
→ Aus Paperclip Issues entnehmen (Everlast Company, KI-Beratung Projekt)
→ Priority: `/leistungen`, `/ki-telefonassistent`, `/termin-buchen` auf Branchen-Seiten-Niveau heben
