import Link from "next/link";
import { BRANCHEN } from "@/lib/branchen";

export default function Branchen() {
  return (
    <section className="branchen-section" id="branchen" aria-labelledby="branchen-heading">
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <span className="section-eyebrow">Branchen</span>
          <h2 id="branchen-heading" className="section-heading section-heading-center">
            KI Beratung für Ihre Branche
          </h2>
          <p className="section-sub section-sub-center">
            Wir kennen die spezifischen Herausforderungen und Chancen in jeder
            Branche — und liefern maßgeschneiderte KI-Lösungen.
          </p>
        </div>

        <div className="branchen-grid" role="list" aria-label="Branchen für KI Beratung">
          {BRANCHEN.map((b) => (
            <Link
              key={b.slug}
              href={`/${b.slug}`}
              className="branche-card fade-up"
              role="listitem"
              aria-label={b.name}
            >
              <div className="branche-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d={b.svgPath} />
                </svg>
              </div>
              <h4>{b.name}</h4>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link href="/branchen" className="btn-ghost">
            Alle Branchen ansehen →
          </Link>
        </div>
      </div>
    </section>
  );
}
