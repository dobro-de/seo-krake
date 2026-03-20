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
const DEDICATED_PAGES = ["gastronomie", "handwerk", "gesundheitswesen", "einzelhandel", "immobilien", "rechtsanwaelte", "logistik", "bildung"];

const CITIES = [
  { slug: "muenchen", name: "München" },
  { slug: "berlin", name: "Berlin" },
  { slug: "hamburg", name: "Hamburg" },
  { slug: "frankfurt", name: "Frankfurt" },
  { slug: "koeln", name: "Köln" },
  { slug: "stuttgart", name: "Stuttgart" },
  { slug: "duesseldorf", name: "Düsseldorf" },
  { slug: "leipzig", name: "Leipzig" },
  { slug: "nuernberg", name: "Nürnberg" },
  { slug: "dresden", name: "Dresden" },
];

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
    const accentStyle = {
      "--accent": b.accentColor,
      "--accent-hover": b.accentColor,
      "--accent-dim": `${b.accentColor}26`,
      "--accent-glow": `${b.accentColor}4d`,
      "--border": `${b.accentColor}26`,
    } as React.CSSProperties;

    return (
      <div style={accentStyle}>
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

          {/* ── CASE STUDY ── */}
          <section className="branche-section branche-challenges-bg">
            <div className="container">
              <div className="branche-section-head">
                <span className="section-eyebrow">Praxisbeispiel</span>
                <h2 className="section-heading section-heading-center">
                  KI in der {b.name} — ein konkretes Beispiel
                </h2>
              </div>
              <div className="branche-casestudy-card">
                <div className="branche-casestudy-firma">{b.caseStudy.firma}</div>
                <div className="branche-casestudy-ergebnis text-accent">{b.caseStudy.ergebnis}</div>
                <blockquote className="branche-casestudy-zitat">
                  &ldquo;{b.caseStudy.zitat}&rdquo;
                </blockquote>
                <p className="branche-casestudy-disclaimer">
                  * Fiktives Beispiel auf Basis realer Kundenergebnisse. Individuelles Ergebnis kann abweichen.
                </p>
              </div>
            </div>
          </section>

          {/* ── TESTIMONIAL ── */}
          <section className="branche-section">
            <div className="container">
              <div className="branche-section-head">
                <span className="section-eyebrow">Kundenstimme</span>
                <h2 className="section-heading section-heading-center">Was unsere Kunden sagen</h2>
              </div>
              <div className="branche-testimonial-card">
                <svg
                  className="branche-testimonial-quote-icon"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 8C5.6 8 2 11.6 2 16s3.6 8 8 8c1.6 0 3-.4 4.2-1.2L20 24l-1.2-5.8C19.6 17 20 15.6 20 14c0-3.3-4.5-6-10-6zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm12-12c-1.3 0-2.5.3-3.6.8.3.7.6 1.4.8 2.2.9-.3 1.8-.4 2.8-.4 2.2 0 4 1.8 4 4s-1.8 4-4 4c-.3 0-.7 0-1-.1L18 20l1.8-3.6c-.1-.4-.2-.9-.2-1.4 0-.4 0-.8.1-1.2C18.6 12.8 16 10.7 16 8.5c0-1.4.7-2.5 2-3 .6-.2 1.3-.5 2-.5 2.2 0 4 1.8 4 4z" />
                </svg>
                <p className="branche-testimonial-text">{b.testimonial.text}</p>
                <div className="branche-testimonial-author">
                  <span className="branche-testimonial-name">{b.testimonial.name}</span>
                  <span className="branche-testimonial-rolle">{b.testimonial.rolle}</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── STÄDTE (nur für non-dedicated branches) ── */}
          {!DEDICATED_PAGES.includes(slug) && (
            <section className="branche-section branche-challenges-bg">
              <div className="container">
                <div className="branche-section-head">
                  <span className="section-eyebrow">Lokale Beratung</span>
                  <h2 className="section-heading section-heading-center">
                    KI Beratung für {b.name} in Ihrer Stadt
                  </h2>
                  <p className="section-sub section-sub-center" style={{ maxWidth: 560, margin: "0.75rem auto 0" }}>
                    Wir beraten {b.name}-Unternehmen in ganz Deutschland — mit lokalen Kenntnissen und erprobten Lösungen.
                  </p>
                </div>
                <div className="gastro-cities-grid">
                  {CITIES.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${slug}/${city.slug}`}
                      className="gastro-city-card"
                    >
                      <span className="gastro-city-name">{city.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

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
      </div>
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
