# Component Library — kiberatung

Documentation of reusable components across the kiberatung site.

---

## `components/LiveDemoWidget.tsx`

**File path:** `/components/LiveDemoWidget.tsx`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `branche` | `"gastronomie" \| "handwerk" \| "gesundheitswesen" \| "einzelhandel" \| "immobilien" \| "rechtsanwaelte" \| "logistik" \| "bildung"` | `"gastronomie"` | Sets the pre-selected industry tab when the widget loads. |

### What it does

A self-contained interactive phone mockup section that plays a scripted AI conversation for the selected industry. The widget:
- Auto-starts playback when scrolled into view (via `useInView`)
- Loops with a 3-second pause between replays
- Renders a phone mockup with animated "ringing" phase → typed chat bubbles → typing indicator
- Allows the user to switch industry via pill buttons, restarting the animation

### Example usage

```tsx
// On the handwerk branch page
<LiveDemoWidget branche="handwerk" />

// On the gastronomie branch page (default value also works)
<LiveDemoWidget branche="gastronomie" />

// Without a prop — defaults to gastronomie
<LiveDemoWidget />
```

### When to use

Place once per branch page, between the "Lösungen" and the cities/Gewerke grid sections. It acts as an interactive proof-of-concept so visitors experience the AI phone assistant before committing to a consultation call.

---

## `components/Nav.tsx`

**File path:** `/components/Nav.tsx`

### Props

None — the component is fully self-contained.

### What it does

The site-wide navigation bar. Renders:
- Logo link ("KI Beratung") to `/`
- Desktop anchor links: `#leistungen`, `#referenzen`, `#faq`
- A "Kostenlos anfragen" CTA button pointing to `#kontakt`
- A hamburger toggle button for mobile, which shows a full-width dropdown menu

Internal state: `mobileOpen: boolean` (toggled by the hamburger button).

### Example usage

```tsx
import Nav from "@/components/Nav";

export default function SomePage() {
  return (
    <>
      <Nav />
      <main>...</main>
    </>
  );
}
```

### When to use

Include at the very top of every page's JSX, before `<main>`. The gastronomie page uses `Nav` from this file; the handwerk page and other branch pages do the same. Note: `GastronomieFooter` pairs with `Nav` on the gastronomie page; other branch pages pair `Nav` with the generic `Footer`.

---

## `components/GastronomieFooter.tsx`

**File path:** `/components/GastronomieFooter.tsx`

### Props

None — data is sourced directly from internal lib imports.

### What it does

An extended footer used specifically on the Gastronomie branch page. Extends the standard `Footer` content with two gastronomy-specific link columns above the standard footer grid:

1. **KI Beratung nach Stadt** — lists all `cities` from `app/gastronomie/[stadt]/cityData` with deep links
2. **Nach Betriebstyp** — lists all `VARIANTEN_SLUGS` from `app/gastronomie/[stadt]/variantenData` with deep links

Below the gastronomy section it renders the standard footer columns: Lösungen, Branchen, Unternehmen, Kontakt.

### Example usage

```tsx
import GastronomieFooter from "@/components/GastronomieFooter";

// Only used on app/gastronomie/page.tsx
<GastronomieFooter />
```

### When to use

Only on `app/gastronomie/page.tsx`. All other branch pages use the generic `Footer` component. If a branch page grows to have its own city and variant sub-pages, consider creating a branch-specific footer following this same pattern.

---

## `components/ui/AnimatedStat.tsx`

**File path:** `/components/ui/AnimatedStat.tsx`

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `value` | `string` | Yes | The display value, e.g. `"80.000+"`, `"−80%"`, `"24/7"`. Leading numeric portions are parsed and counted up; non-numeric values display as-is. |
| `label` | `string` | Yes | Caption text rendered below the value. |

### What it does

A client component that renders a hero stat block with a count-up animation on first intersection. Uses `IntersectionObserver` (threshold 0.3) to trigger once when the element enters the viewport. Parses the leading numeric portion of `value` using a regex, counts from 0 to the target over 1200 ms with an ease-out cubic curve, then snaps to the exact original string. Renders inside a `div.branche-hero-stat` wrapper.

### Example usage

```tsx
import AnimatedStat from "@/components/ui/AnimatedStat";

// In a hero stats bar
<div className="branche-hero-stats">
  <AnimatedStat value="80.000+" label="Gastronomiebetriebe in DE" />
  <div className="branche-hero-stat-divider" />
  <AnimatedStat value="−80%" label="Telefonanfragen mit KI-Bot" />
  <div className="branche-hero-stat-divider" />
  <AnimatedStat value="24/7" label="Erreichbarkeit für Ihre Gäste" />
</div>
```

### When to use

Use in branch page hero sections when you want the numeric stat to animate on scroll. The gastronomie page uses `AnimatedStat` in its hero; the handwerk page currently uses plain `div.branche-hero-stat` elements without animation — upgrading to `AnimatedStat` is straightforward. Requires `"use client"` in the parent or the page must not be a pure server component.

---

## `components/ui/FadeInSection.tsx`

**File path:** `/components/ui/FadeInSection.tsx`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | The content to wrap with the fade-in animation. |
| `className` | `string` | `undefined` | Optional CSS class forwarded to the motion wrapper div. |
| `delay` | `number` | `0` | Framer Motion delay in seconds before the fade-in starts. |

### What it does

Wraps any content in a `motion.div` that fades in from `opacity: 0, y: 32` to `opacity: 1, y: 0` when the element scrolls into view. Uses Framer Motion's `whileInView` with `viewport={{ once: true, amount: 0.2 }}`, meaning the animation fires once the element is 20% visible and does not replay on scroll-out. Easing: custom spring `[0.16, 1, 0.3, 1]` over 0.6 s.

### Example usage

```tsx
import FadeInSection from "@/components/ui/FadeInSection";

<FadeInSection>
  <section className="branche-section">
    ...
  </section>
</FadeInSection>

// With a staggered delay
<FadeInSection delay={0.15}>
  <div className="some-card">...</div>
</FadeInSection>
```

### When to use

Wrap entire `<section>` blocks on branch pages to give the page a polished scroll-reveal feel. The gastronomie page wraps every section below the hero in `FadeInSection`; the handwerk page does not currently use it (sections are plain). For consistency, add `FadeInSection` to handwerk sections to match the gastronomie depth level.

---

## `components/ui/BrancheContent.tsx`

**File path:** `/components/ui/BrancheContent.tsx`

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `b` | `Branche` (from `@/lib/branchen`) | Yes | The full branch data object containing `name`, `heroTitle`, `heroSubtitle`, `svgPath`, `accentColor`, `challenges`, `loesungen`, `caseStudy`, `testimonial`, etc. |
| `slug` | `string` | Yes | The URL slug of the branch, used for internal links and to conditionally render the cities grid (hidden for the 8 dedicated branch pages). |

### What it does

A reusable full-page layout for branch pages that do **not** have their own dedicated `app/[branche]/page.tsx`. Renders the complete branch page structure:
1. Hero with breadcrumb, KI-aktiv badge, icon glow, title, animated stats, CTA buttons
2. Herausforderungen section (animated stagger grid)
3. Lösungen section (hover-lift cards)
4. Case Study section
5. Testimonial section
6. Städte grid (conditionally rendered — hidden for the 8 dedicated pages listed in `DEDICATED_PAGES`)
7. CTA section
8. Weitere Branchen pills

All sections are wrapped in `FadeInSection`. Uses `AnimatedStat` for hero stats.

### Example usage

```tsx
// In app/[slug]/page.tsx — the catch-all branch route
import BrancheContent from "@/components/ui/BrancheContent";

const b = getBrancheBySlug(slug);
if (b) return (
  <>
    <Nav />
    <BrancheContent b={b} slug={slug} />
    <Footer />
  </>
);
```

### When to use

Used by `app/[slug]/page.tsx` as the fallback renderer for any branch slug that does **not** have a hand-crafted dedicated page. The 8 dedicated pages (`gastronomie`, `handwerk`, `gesundheitswesen`, `einzelhandel`, `immobilien`, `rechtsanwaelte`, `logistik`, `bildung`) each have their own `app/[branche]/page.tsx` with custom sections (city grids, Gewerke/Betriebstypen grids, etc.). Do not use `BrancheContent` for those — it will show a cities grid pointing to non-existent routes.

---

## Branch Page Pattern

The site uses a **two-tier** approach to branch pages:

### Tier 1 — Dedicated pages (`app/[branche]/page.tsx`)

Eight branches have hand-crafted pages with deep content, city sub-pages, and trade/variant sub-pages:

| Branch | Page | Sub-pages |
|--------|------|-----------|
| Gastronomie | `app/gastronomie/page.tsx` | `app/gastronomie/[stadt]/page.tsx` (cities + Betriebstypen) |
| Handwerk | `app/handwerk/page.tsx` | `app/handwerk/[stadt]/page.tsx` (cities + Gewerke) |
| Gesundheitswesen | `app/gesundheitswesen/page.tsx` | `app/gesundheitswesen/[stadt]/page.tsx` |
| Einzelhandel | `app/einzelhandel/page.tsx` | `app/einzelhandel/[stadt]/page.tsx` |
| Immobilien | `app/immobilien/page.tsx` | `app/immobilien/[stadt]/page.tsx` |
| Rechtsanwälte | `app/rechtsanwaelte/page.tsx` | `app/rechtsanwaelte/[stadt]/page.tsx` |
| Logistik | `app/logistik/page.tsx` | `app/logistik/[stadt]/page.tsx` |
| Bildung | `app/bildung/page.tsx` | `app/bildung/[stadt]/page.tsx` |

These pages include custom sections (Gewerke or Betriebstypen grids, animated hero badges, etc.) that go beyond what `BrancheContent` provides.

### Tier 2 — Dynamic catch-all (`app/[slug]/page.tsx`)

All remaining branch slugs (those not in `DEDICATED_PAGES`) fall through to `app/[slug]/page.tsx`, which renders `BrancheContent` and a generic city grid using a hardcoded list of 10 major German cities. The route also handles Lösungen slugs.

Sub-city pages for non-dedicated branches are handled by `app/[slug]/[stadt]/page.tsx`.

### When to promote a branch from Tier 2 to Tier 1

Create a dedicated page when a branch needs:
- A custom trade/type grid (Gewerke, Betriebstypen, Fachrichtungen)
- A branch-specific footer with deep city/variant links (like `GastronomieFooter`)
- City sub-pages sourced from a dedicated `cityData.ts` file with branch-specific stats
- Additional SEO sections (stats boxes, comparison tables, FAQ) beyond the generic template
