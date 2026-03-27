import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const features = [
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>,
    title: "KI-Terminmanagement",
    desc: "Automatische Terminvergabe, smarte Recall-Systeme und No-Show-Prognosen — der Patientenfluss wird optimiert, Wartezeiten sinken spürbar.",
    highlight: "bis zu 55 % weniger No-Shows",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>,
    title: "KI-Dokumentationsassistent",
    desc: "Automatische Erstellung von Arztbriefen, Entlassungsberichten und Behandlungsdokumentation aus Spracheingabe — sicher und DSGVO-konform.",
    highlight: "bis zu 60 % weniger Dokumentationsaufwand",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "Patienten-Kommunikationsbot",
    desc: "24/7 automatische Beantwortung von Patientenanfragen, Terminbestätigungen und Erinnerungen per SMS oder App — ohne Personalaufwand.",
    highlight: "24/7 verfügbar, mehrsprachig",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "KI-Personalplanung",
    desc: "Auslastungsprognose-gekoppelte Dienstplanung eliminiert Über- und Unterbesetzung — mit fairer Rotation und gesetzeskonformen Ruhezeiten.",
    highlight: "bis zu 20 % Personalkostensenkung",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9M12 17V5M6 17v-3"/></svg>,
    title: "Praxis-Analytics",
    desc: "Echtzeit-Dashboards für Behandlungsauslastung, Abrechnungsperformance und Patientenzufriedenheit — mit KI-gestützten Handlungsempfehlungen.",
    highlight: "datengesteuerte Praxisführung",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Compliance & Datenschutz-KI",
    desc: "Automatisierte DSGVO-Dokumentation, MDR-konforme Prozesse und Datenschutz-Audits — KI erkennt Risiken, bevor sie zu Problemen werden.",
    highlight: "vollständig DSGVO-konform",
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
            KI-Tools, die Ihre Gesundheitseinrichtung in {city.name} transformieren
          </h2>
          <p className="section-sub section-sub-center">
            Maßgeschneiderte KI-Lösungen für die spezifischen Anforderungen des {city.name}er
            Gesundheitsmarkts.
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
