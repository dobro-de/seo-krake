# kiberatung.de Facelift — BRIEF.md

## Was ist das?
Next.js 15 Website für Everlast Consulting's KI-Beratung (kiberatung.de).
Bestehende Marke modernisieren, neue Unterseiten nach Qualitätsstandard der dedizierten Branchen-Seiten.

## Tech Stack
- Next.js 15.1 + React 19.2 + TypeScript 5.9.3
- Tailwind CSS 3.4.17 + Framer Motion
- Font: CircularStd (custom, /public/fonts/ — KEIN Ersatz durch andere Fonts!)
- Hosting: Vercel (Everlast-Account)

## Design System (EXAKT)
```
--bg:      #000000   (Seiten-BG)
--akzent:  #faef70   (Gelb — Buttons, CTAs)
--text:    #ffffff   (Primärtext)
--subtext: #cccccc   (Sekundärtext)
--card-bg: #111111   (Cards)
--border:  #222222   (Trennlinien)

Buttons: bg-[#faef70] text-black font-bold rounded-full px-6 py-3
Animationen: fadeUp { opacity:0, y:40 → opacity:1, y:0, duration:0.7 }
             stagger: staggerChildren:0.12, viewport:{once:true, amount:0.2}
```

## Referenz-Qualität: app/gastronomie/page.tsx
**DIESE SEITE ist Vorlage für ALLE neuen Seiten** (202 Zeilen, vollständige Struktur):
Hero (Problem) → Pain Point → Lösung → Features → Social Proof → CTA

## Projektstruktur
```
app/
├── page.tsx                    # Homepage ✅
├── [slug]/page.tsx             # Generisches Branchen-Template
├── gastronomie/page.tsx        # ✅ REFERENZ (202 Zeilen)
├── handwerk/page.tsx           # ✅
├── gesundheitswesen/page.tsx   # ✅
├── leistungen/                 # ⚠️ AUSBAU NÖTIG
├── ki-telefonassistent/        # ⚠️ AUSBAU NÖTIG (Product Page)
└── termin-buchen/              # ⚠️ AUSBAU NÖTIG
```

## Aktueller Stand (2026-03-20)
- ✅ Homepage + 3 dedizierte Branchen-Seiten
- ✅ SEO-Krake: Handwerk (20 Städte × 10 Gewerke), Gesundheitswesen (15 Städte × 9 Fachrichtungen)
- ⚠️ Issue #13: /leistungen, /ki-telefonassistent, /termin-buchen auf Gastronomie-Qualität heben
- ⚠️ Issue #14: SEO-Branchen-Seiten — unique Pain Points + FAQPage Schema

## Git
- Remote `origin`: `git@github.com:dobro-de/kiberatung-v2.git` → Vercel Preview
- Remote `everlast`: `git@github.com:dobrowolny-everlast/kiberatung-2026.git` → Produktion
- **IMMER als:** `dobro-de` / `vincent@brandingbrothers.de`
- `git push origin main` → Preview
- `git push everlast main` → **NUR auf Vincents explizite Anweisung!**

## Nächste Aufgaben (Issues #13 + #14)
- /leistungen: Leistungs-Grid + 4 Sektionen
- /ki-telefonassistent: vollständige Sales-Page (Problem→Demo→Features→FAQ→CTA)
- /termin-buchen: Buchungs-Flow + Trust-Elemente
- SEO-Seiten: je eine branche-spezifische Statistik/Zahl im Hero + FAQPage Schema

## Wichtige Entscheidungen
- CircularStd IMMER — kein Fallback
- `once: true` für alle Animationen (kein Loop)
- DEDICATED_PAGES = ["gastronomie", "handwerk", "gesundheitswesen"] — eigene Dateien, nicht via [slug]
- Dark Mode only — kein Toggle
