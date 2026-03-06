import type { Metadata } from "next";
import Link from "next/link";
import { LOESUNGEN } from "@/lib/loesungen";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KI-Lösungen für Unternehmen | kiberatung.de",
  description: "15 KI-Lösungen für Ihr Unternehmen: Chatbot, Prozessautomatisierung, Datenanalyse, SEO und mehr. Kostenlose Erstberatung.",
};

export default function LoesungenPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="branche-hero">
          <div className="container">
            <nav className="branche-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Startseite</Link>
              <span>›</span>
              <span>Lösungen</span>
            </nav>
            <h1 className="branche-title font-display">
              KI-LÖSUNGEN FÜR IHR <span className="text-accent">UNTERNEHMEN</span>
            </h1>
            <p className="branche-subtitle">
              Von Chatbots über Prozessautomatisierung bis SEO — konkrete KI-Anwendungen mit messbarem ROI.
            </p>
          </div>
        </section>

        <section style={{ padding: "2rem 0 6rem" }}>
          <div className="container">
            <div className="branche-overview-grid">
              {LOESUNGEN.map((l) => (
                <Link key={l.slug} href={`/${l.slug}`} className="branche-overview-card">
                  <div className="branche-overview-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d={l.svgPath} />
                    </svg>
                  </div>
                  <h3>{l.name}</h3>
                  <p>{l.heroSubtitle}</p>
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
