import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getBrancheBySlug, getAllBranchenSlugs, BRANCHEN } from "@/lib/branchen";
import { getLoesungBySlug, getAllLoesungenSlugs, LOESUNGEN } from "@/lib/loesungen";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

// "gastronomie" hat eine eigene dedizierte Page unter app/gastronomie/page.tsx
const DEDICATED_PAGES = ["gastronomie", "handwerk"];

export function generateStaticParams() {
  const branchenSlugs = getAllBranchenSlugs()
    .filter((s) => !DEDICATED_PAGES.includes(s))
    .map((slug) => ({ slug }));
  const loesungenSlugs = getAllLoesungenSlugs().map((slug) => ({ slug }));
  return [...branchenSlugs, ...loesungenSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const b = getBrancheBySlug(slug);
  if (b) return { title: b.metaTitle, description: b.metaDescription };
  const l = getLoesungBySlug(slug);
  if (l) return { title: l.metaTitle, description: l.metaDescription };
  return {};
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;

  // ── BRANCHE ──────────────────────────────────────────────────────────────
  const b = getBrancheBySlug(slug);
  if (b) {
    return (
      <>
        <Nav />
        <main>
          <section className="branche-hero" style={{ paddingBottom: "4rem" }}>
            <div className="container">
              <nav className="branche-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Startseite</Link><span>›</span>
                <Link href="/branchen">Branchen</Link><span>›</span>
                <span>{b.name}</span>
              </nav>
              <div className="branche-hero-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d={b.svgPath} />
                </svg>
              </div>
              <h1 className="branche-title font-display">
                {b.heroTitle.replace(b.name.toUpperCase(), "").trim()}{" "}
                <span className="text-accent">{b.name.toUpperCase()}</span>
              </h1>
              <p className="branche-subtitle">{b.heroSubtitle}</p>
              <div className="branche-hero-stats">
                {b.loesungen.slice(0, 3).map((l, i) => (
                  <>
                    {i > 0 && <div key={`d${i}`} className="branche-hero-stat-divider" />}
                    <div key={l.title} className="branche-hero-stat">
                      <span className="branche-hero-stat-val">{l.stat}</span>
                      <span className="branche-hero-stat-lbl">{l.statLabel}</span>
                    </div>
                  </>
                ))}
              </div>
              <div className="branche-actions" style={{ marginTop: "2rem" }}>
                <a href="#loesungen" className="btn-accent">Lösungen ansehen</a>
                <a href="mailto:info@kiberatung.de" className="btn-ghost">Kostenloses Erstgespräch</a>
              </div>
            </div>
          </section>

          <section className="branche-section branche-challenges-bg">
            <div className="container">
              <div className="branche-section-head">
                <span className="section-eyebrow">Herausforderungen</span>
                <h2 className="section-heading section-heading-center">Was hält {b.name}-Unternehmen zurück?</h2>
              </div>
              <div className="branche-challenges-grid">
                {b.challenges.map((c, i) => (
                  <div key={i} className="branche-challenge-card">
                    <span className="branche-num">0{i + 1}</span>
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="loesungen" className="branche-section">
            <div className="container">
              <div className="branche-section-head">
                <span className="section-eyebrow">KI-Lösungen</span>
                <h2 className="section-heading section-heading-center">Was wir für {b.name} tun</h2>
              </div>
              <div className="branche-solutions-grid">
                {b.loesungen.map((l, i) => (
                  <div key={i} className="branche-solution-card">
                    <div className="branche-sol-icon" dangerouslySetInnerHTML={{ __html: l.icon }} />
                    <h3 className="branche-sol-title">{l.title}</h3>
                    <p className="branche-sol-desc">{l.desc}</p>
                    <div className="branche-sol-stat">
                      <span className="branche-sol-val">{l.stat}</span>
                      <span className="branche-sol-lbl">{l.statLabel}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="branche-cta-section">
            <div className="container">
              <div className="branche-cta-inner">
                <h2 className="section-heading">Bereit für KI in Ihrer {b.name}?</h2>
                <p>In einem kostenlosen 30-Minuten-Gespräch analysieren wir Ihre größten Hebel und zeigen konkrete Einstiegspunkte.</p>
                <a href="mailto:info@kiberatung.de" className="btn-accent btn-accent-lg">Jetzt kostenloses Gespräch buchen →</a>
              </div>
            </div>
          </section>

          <section className="branche-section">
            <div className="container">
              <h3 className="branche-more-label">Weitere Branchen</h3>
              <div className="branche-more-pills">
                {BRANCHEN.filter((x) => x.slug !== slug).map((x) => (
                  <Link key={x.slug} href={`/${x.slug}`} className="branche-pill">{x.name}</Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  // ── LÖSUNG ───────────────────────────────────────────────────────────────
  const l = getLoesungBySlug(slug);
  if (l) {
    return (
      <>
        <Nav />
        <main>
          <section className="branche-hero" style={{ paddingBottom: "4rem" }}>
            <div className="container">
              <nav className="branche-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Startseite</Link><span>›</span>
                <Link href="/loesungen">Lösungen</Link><span>›</span>
                <span>{l.name}</span>
              </nav>
              <div className="branche-hero-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d={l.svgPath} />
                </svg>
              </div>
              <h1 className="branche-title font-display">
                {l.heroTitle.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-accent">{l.heroTitle.split(" ").slice(-1)}</span>
              </h1>
              <p className="branche-subtitle">{l.heroSubtitle}</p>
              <div className="branche-hero-stats">
                {l.stats.map((s, i) => (
                  <>
                    {i > 0 && <div key={`d${i}`} className="branche-hero-stat-divider" />}
                    <div key={s.lbl} className="branche-hero-stat">
                      <span className="branche-hero-stat-val">{s.val}</span>
                      <span className="branche-hero-stat-lbl">{s.lbl}</span>
                    </div>
                  </>
                ))}
              </div>
              <div className="branche-actions" style={{ marginTop: "2rem" }}>
                <a href="#features" className="btn-accent">Mehr erfahren</a>
                <a href="mailto:info@kiberatung.de" className="btn-ghost">Kostenloses Erstgespräch</a>
              </div>
            </div>
          </section>

          <section id="features" className="branche-section branche-challenges-bg">
            <div className="container">
              <div className="branche-section-head">
                <span className="section-eyebrow">Was KI leistet</span>
                <h2 className="section-heading section-heading-center">{l.name} — Konkrete Möglichkeiten</h2>
              </div>
              <div className="branche-solutions-grid">
                {l.features.map((f, i) => (
                  <div key={i} className="branche-solution-card">
                    <div className="branche-sol-icon" dangerouslySetInnerHTML={{ __html: f.icon }} />
                    <h3 className="branche-sol-title">{f.title}</h3>
                    <p className="branche-sol-desc">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="branche-section">
            <div className="container">
              <div className="branche-section-head">
                <span className="section-eyebrow">Anwendungsfälle</span>
                <h2 className="section-heading section-heading-center">{l.name} in der Praxis</h2>
              </div>
              <div className="loesung-usecase-grid">
                {l.useCases.map((u, i) => (
                  <div key={i} className="loesung-usecase-card">
                    <svg className="loesung-usecase-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    <div>
                      <span className="loesung-usecase-branche">{u.branche}</span>
                      <p className="loesung-usecase-example">{u.example}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="branche-cta-section">
            <div className="container">
              <div className="branche-cta-inner">
                <h2 className="section-heading">{l.name} für Ihr Unternehmen?</h2>
                <p>In einem kostenlosen 30-Minuten-Gespräch zeigen wir konkret, wie {l.keyword} in Ihrem Unternehmen aussehen kann.</p>
                <a href="mailto:info@kiberatung.de" className="btn-accent btn-accent-lg">Jetzt kostenloses Gespräch buchen →</a>
              </div>
            </div>
          </section>

          <section className="branche-section">
            <div className="container">
              <h3 className="branche-more-label">Weitere KI-Lösungen</h3>
              <div className="branche-more-pills">
                {LOESUNGEN.filter((x) => x.slug !== slug).slice(0, 8).map((x) => (
                  <Link key={x.slug} href={`/${x.slug}`} className="branche-pill">{x.name}</Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  notFound();
}
