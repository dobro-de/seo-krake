import type { CityData } from "../cityData";

interface Props {
  city: CityData;
}

const features = [
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "KI-Kundensupport",
    desc: "Chatbot beantwortet Kundenanfragen sofort, rund um die Uhr — auf Website, WhatsApp oder E-Mail. Eskaliert nur wenn nötig an Ihr Team.",
    highlight: "24/7 Support verfügbar",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>,
    title: "Terminmanagement",
    desc: "Kunden buchen selbst online, KI schickt automatische Erinnerungen und verwaltet Stornierungen. No-Shows sinken drastisch.",
    highlight: "bis zu 45 % weniger No-Shows",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    title: "Angebots-Automatisierung",
    desc: "KI erstellt personalisierte Angebote auf Basis von Kundendaten und Anforderungen in Minuten statt Stunden — professionell und fehlerlos.",
    highlight: "bis zu 70 % weniger Aufwand",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
    title: "Service-Analysen",
    desc: "Live-Dashboards für KPIs: Welche Services laufen gut? Wo brechen Kunden ab? KI liefert actionable Insights in Echtzeit.",
    highlight: "datengesteuerte Entscheidungen",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    title: "Automatisierte Rechnungsstellung",
    desc: "KI erstellt und versendet Rechnungen automatisch zum richtigen Zeitpunkt — inkl. Zahlungserinnerungen und DSGVO-konformer Archivierung.",
    highlight: "100 % pünktlich, fehlerlos",
  },
  {
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="12" y1="7" x2="12" y2="13"/></svg>,
    title: "KI-Bewertungsmanagement",
    desc: "KI antwortet automatisch auf Google- und Bewertungsportal-Einträge — professionell, individuell und zeitnah. Kein Bewertung bleibt unbeantwortet.",
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
            KI-Tools, die Ihren Dienstleistungsbetrieb in {city.name} transformieren
          </h2>
          <p className="section-sub section-sub-center">
            Maßgeschneiderte KI-Lösungen für die spezifischen Anforderungen des {city.name}er
            Dienstleistungsmarkts.
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
