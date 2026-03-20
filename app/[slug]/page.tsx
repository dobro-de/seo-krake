import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getBrancheBySlug, getAllBranchenSlugs, BRANCHEN } from "@/lib/branchen";
import { getLoesungBySlug, getAllLoesungenSlugs, LOESUNGEN } from "@/lib/loesungen";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BrancheContent from "@/components/ui/BrancheContent";
import FadeInSection from "@/components/ui/FadeInSection";

interface Props {
  params: Promise<{ slug: string }>;
}

// "gastronomie" hat eine eigene dedizierte Page unter app/gastronomie/page.tsx
const DEDICATED_PAGES = ["gastronomie", "handwerk", "gesundheitswesen", "einzelhandel", "immobilien", "rechtsanwaelte", "logistik", "bildung"];

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
        <BrancheContent b={b} slug={slug} />
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

              {/* KI aktiv badge */}
              <span className="inline-flex items-center gap-1.5 text-xs text-black bg-[#faef70] px-3 py-1 rounded-full font-semibold mb-4">
                ⚡ KI aktiv
              </span>

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

          <FadeInSection>
            <section id="features" className="branche-section branche-challenges-bg">
              <div className="container">
                <div className="branche-section-head">
                  <span className="section-eyebrow">Was KI leistet</span>
                  <h2 className="section-heading section-heading-center">{l.name} — Konkrete Möglichkeiten</h2>
                </div>
                <div className="branche-solutions-grid">
                  {l.features.map((f, i) => (
                    <div key={i} className="branche-solution-card transition-shadow hover:shadow-[0_8px_24px_rgba(250,239,112,0.15)]">
                      <div className="branche-sol-icon" dangerouslySetInnerHTML={{ __html: f.icon }} />
                      <h3 className="branche-sol-title">{f.title}</h3>
                      <p className="branche-sol-desc">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
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
          </FadeInSection>

          <FadeInSection>
            <section className="branche-cta-section">
              <div className="container">
                <div className="branche-cta-inner">
                  <h2 className="section-heading">{l.name} für Ihr Unternehmen?</h2>
                  <p>In einem kostenlosen 30-Minuten-Gespräch zeigen wir konkret, wie {l.keyword} in Ihrem Unternehmen aussehen kann.</p>
                  <a href="mailto:info@kiberatung.de" className="btn-accent btn-accent-lg">Jetzt kostenloses Gespräch buchen →</a>
                </div>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
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
          </FadeInSection>
        </main>
        <Footer />
      </>
    );
  }

  notFound();
}
