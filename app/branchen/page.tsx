import type { Metadata } from "next";
import Link from "next/link";
import { BRANCHEN } from "@/lib/branchen";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KI Beratung nach Branche | kiberatung.de",
  description: "Maßgeschneiderte KI-Lösungen für jede Branche: Gastronomie, Handwerk, Mittelstand, Logistik und mehr. Jetzt kostenloses Erstgespräch buchen.",
};

export default function BranchenPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="branche-hero">
          <div className="container">
            <nav className="branche-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Startseite</Link>
              <span>›</span>
              <span>Branchen</span>
            </nav>
            <h1 className="branche-title font-display">KI BERATUNG FÜR IHRE BRANCHE</h1>
            <p className="branche-subtitle">
              Keine generische KI — sondern Lösungen die genau Ihre Branche kennen.
              8 Branchen, bewährte Frameworks, sofortige Wirkung.
            </p>
          </div>
        </section>

        <section className="branche-section">
          <div className="container">
            <div className="branche-overview-grid">
              {BRANCHEN.map((b) => (
                <Link key={b.slug} href={`/${b.slug}`} className="branche-overview-card">
                  <div className="branche-overview-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d={b.svgPath} />
                    </svg>
                  </div>
                  <h3>{b.name}</h3>
                  <p>{b.heroSubtitle}</p>
                  <span className="branche-overview-cta">Mehr erfahren →</span>
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
