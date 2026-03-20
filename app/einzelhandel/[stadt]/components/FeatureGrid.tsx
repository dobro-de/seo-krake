import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const features = [
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4"/><circle cx="9" cy="19" r="1"/><circle cx="17" cy="19" r="1"/></svg>,
    title: "KI-Bestandsoptimierung",
    desc: "KI prognostiziert die Nachfrage präzise auf Basis von Verkaufsdaten, Saisonalität, lokalen Events und Wettbewerb — und reduziert Überbestände systematisch.",
    highlight: "bis zu 35 % weniger Lagerkosten",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
    title: "Personalisierte Kundenansprache",
    desc: "Jeder Kunde bekommt maßgeschneiderte Angebote zum richtigen Zeitpunkt — per E-Mail, WhatsApp oder am POS-System.",
    highlight: "bis zu 35 % höhere Wiederkaufrate",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    title: "Automatisiertes KI-Marketing",
    desc: "Newsletter, Social-Media-Posts und Aktions-E-Mails werden von KI generiert und versendet — ohne manuellen Aufwand, immer zum optimalen Zeitpunkt.",
    highlight: "3× mehr Marketing-Output",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "KI-Kunden-Assistent",
    desc: "Mehrsprachiger Chatbot beantwortet Produktanfragen, prüft Verfügbarkeiten und nimmt Bestellvorbestellungen auf — 24/7 ohne Personalaufwand.",
    highlight: "24/7 verfügbar, mehrsprachig",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9M12 17V5M6 17v-3"/></svg>,
    title: "Echtzeit-Sales-Analytics",
    desc: "Live-Dashboards für Umsatz, Lagerumschlag, Konversionsraten und Kundenwert — mit KI-gestützten Handlungsempfehlungen für Ihr Sortiment.",
    highlight: "datengesteuerte Entscheidungen",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="12" y1="7" x2="12" y2="13"/></svg>,
    title: "KI-Bewertungsmanagement",
    desc: "KI antwortet automatisch auf Google- und Trustpilot-Bewertungen — professionell, individuell und in der Sprache des Kunden.",
    highlight: "100 % Bewertungsantwortrate",
  },
];

export default function FeatureGrid({ city }: Props) {
  return (
    <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="section-eyebrow" style={{ display: "inline-flex", marginBottom: "16px" }}>
            Unsere KI-Lösungen für {city.name}
          </div>
          <h2 className="section-heading section-heading-center">
            KI-Tools, die Ihren Einzelhandel in {city.name} transformieren
          </h2>
          <p className="section-sub section-sub-center">
            Maßgeschneiderte KI-Lösungen für die spezifischen Anforderungen des {city.name}er
            Einzelhandelsmarkts.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-card)",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "border-color 0.3s ease",
              }}
            >
              <div style={{ width: 36, height: 36, color: "var(--accent)", marginBottom: "4px" }}>{f.svg}</div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-white)",
                  lineHeight: 1.3,
                }}
              >
                {f.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-gray)", lineHeight: 1.65, flex: 1 }}>
                {f.desc}
              </p>
              <div
                style={{
                  background: "var(--accent-dim)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-pill)",
                  padding: "4px 12px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--accent)",
                  alignSelf: "flex-start",
                }}
              >
                {f.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
