import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getBrancheBySlug, getAllBranchenSlugs, BRANCHEN } from "@/lib/branchen";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllBranchenSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const b = getBrancheBySlug(slug);
  if (!b) return {};
  return { title: b.metaTitle, description: b.metaDescription };
}

export default async function BranchePage({ params }: Props) {
  const { slug } = await params;
  const b = getBrancheBySlug(slug);
  if (!b) notFound();

  return (
    <>
      <Nav />
      <main>
        {/* ── HERO ── */}
        <section className="branche-hero">
          <div className="container">
            <nav className="branche-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Startseite</Link>
              <span>›</span>
              <Link href="/branchen">Branchen</Link>
              <span>›</span>
              <span>{b.name}</span>
            </nav>
            <h1 className="branche-title font-display">{b.heroTitle}</h1>
            <p className="branche-subtitle">{b.heroSubtitle}</p>
            <div className="branche-actions">
              <a href="#loesungen" className="btn-accent">Lösungen ansehen</a>
              <a href="mailto:info@kiberatung.de" className="btn-ghost">Kostenloses Erstgespräch</a>
            </div>
          </div>
        </section>

        {/* ── HERAUSFORDERUNGEN ── */}
        <section className="branche-section branche-challenges-bg">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">Herausforderungen</span>
              <h2 className="section-heading section-heading-center">
                Was hält Ihre Branche zurück?
              </h2>
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

        {/* ── LÖSUNGEN ── */}
        <section id="loesungen" className="branche-section">
          <div className="container">
            <div className="branche-section-head">
              <span className="section-eyebrow">KI-Lösungen</span>
              <h2 className="section-heading section-heading-center">
                Was wir für Sie tun
              </h2>
            </div>
            <div className="branche-solutions-grid">
              {b.loesungen.map((l, i) => (
                <div key={i} className="branche-solution-card">
                  <div
                    className="branche-sol-icon"
                    dangerouslySetInnerHTML={{ __html: l.icon }}
                  />
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

        {/* ── CTA ── */}
        <section className="branche-cta-section">
          <div className="container">
            <div className="branche-cta-inner">
              <h2 className="section-heading">Bereit für KI in Ihrer {b.name}?</h2>
              <p>In einem kostenlosen 30-Minuten-Gespräch analysieren wir Ihre größten Hebel und zeigen konkrete Einstiegspunkte.</p>
              <a href="mailto:info@kiberatung.de" className="btn-accent btn-accent-lg">
                Jetzt kostenloses Gespräch buchen →
              </a>
            </div>
          </div>
        </section>

        {/* ── WEITERE BRANCHEN ── */}
        <section className="branche-section">
          <div className="container">
            <h3 className="branche-more-label">Weitere Branchen</h3>
            <div className="branche-more-pills">
              {BRANCHEN.filter((x) => x.slug !== slug).map((x) => (
                <Link key={x.slug} href={`/${x.slug}`} className="branche-pill">
                  {x.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
