const useCases = [
  {
    icon: "📈",
    title: "KI im Vertrieb",
    description: "Lead-Scoring, Verkaufsprognosen und automatisierte Follow-ups steigern Ihren Umsatz messbar.",
  },
  {
    icon: "🧾",
    title: "KI in der Buchhaltung",
    description: "Automatische Belegverarbeitung, Anomalieerkennung und intelligente Cashflow-Prognosen.",
  },
  {
    icon: "👥",
    title: "KI im HR",
    description: "KI-gestützte Kandidatenvorauswahl, Onboarding-Automatisierung und Mitarbeiterbindungsanalyse.",
  },
  {
    icon: "💬",
    title: "KI im Kundenservice",
    description: "24/7-Chatbots, automatisches Ticket-Routing und KI-gestützte Antwortvorschläge für Agents.",
  },
  {
    icon: "🚛",
    title: "KI in der Logistik",
    description: "Routenoptimierung, Lagerbestandsprognosen und vorausschauende Wartung für Ihre Flotte.",
  },
  {
    icon: "📣",
    title: "KI im Marketing",
    description: "Personalisierte Kampagnen, Content-Generierung und präzises Zielgruppen-Targeting durch KI.",
  },
  {
    icon: "🏭",
    title: "KI in der Produktion",
    description: "Qualitätskontrolle durch Computer Vision, Predictive Maintenance und Produktionsoptimierung.",
  },
  {
    icon: "🛒",
    title: "KI im Einkauf",
    description: "Bedarfsprognosen, automatische Ausschreibungen und KI-gestützte Lieferantenbewertung.",
  },
  {
    icon: "💻",
    title: "KI in der IT",
    description: "Automatisiertes Incident-Management, Code-Generierung und intelligentes Security-Monitoring.",
  },
  {
    icon: "📉",
    title: "KI im Controlling",
    description: "Echtzeit-Abweichungsanalysen, automatische Reports und KI-basierte Budgetprognosen.",
  },
  {
    icon: "⚖️",
    title: "KI im Recht",
    description: "Contract-Review-Automatisierung, Compliance-Checks und KI-gestützte Dokumentenanalyse.",
  },
  {
    icon: "🏥",
    title: "KI in der Pflege",
    description: "Dienstplanoptimierung, Dokumentationsassistenz und KI-gestützte Pflegebedarfsanalyse.",
  },
];

export default function UseCases() {
  return (
    <section className="usecases-section" id="use-cases" aria-labelledby="usecases-heading">
      <div className="usecases-header">
        <span className="section-eyebrow">Anwendungsfälle</span>
        <h2 id="usecases-heading" className="section-heading">
          KI Beratung für jede Abteilung
        </h2>
        <p className="section-sub">
          Ob Vertrieb, HR oder Produktion — KI bietet in jeder Abteilung enorme
          Effizienzpotenziale. Entdecken Sie Ihre Use Cases.
        </p>
      </div>

      <div className="usecases-scroll-wrapper" role="list" aria-label="KI Use Cases nach Abteilung">
        <div className="usecases-row">
          {useCases.map((uc, i) => (
            <div key={i} className="usecase-card" role="listitem">
              <span className="usecase-icon" aria-hidden="true">{uc.icon}</span>
              <h4>{uc.title}</h4>
              <p>{uc.description}</p>
              <a href="#kontakt" className="usecase-link">
                Mehr erfahren <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
