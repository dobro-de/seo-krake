const useCases = [
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: "KI im Vertrieb",
    description: "Lead-Scoring, Verkaufsprognosen und automatisierte Follow-ups steigern Ihren Umsatz messbar.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "KI in der Buchhaltung",
    description: "Automatische Belegverarbeitung, Anomalieerkennung und intelligente Cashflow-Prognosen.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "KI im HR",
    description: "KI-gestützte Kandidatenvorauswahl, Onboarding-Automatisierung und Mitarbeiterbindungsanalyse.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "KI im Kundenservice",
    description: "24/7-Chatbots, automatisches Ticket-Routing und KI-gestützte Antwortvorschläge für Agents.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: "KI in der Logistik",
    description: "Routenoptimierung, Lagerbestandsprognosen und vorausschauende Wartung für Ihre Flotte.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="3 11 22 2 13 21 11 13 3 11"/>
      </svg>
    ),
    title: "KI im Marketing",
    description: "Personalisierte Kampagnen, Content-Generierung und präzises Zielgruppen-Targeting durch KI.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="m8 21 4-4 4 4"/><path d="M12 17v4"/>
      </svg>
    ),
    title: "KI in der Produktion",
    description: "Qualitätskontrolle durch Computer Vision, Predictive Maintenance und Produktionsoptimierung.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    title: "KI im Einkauf",
    description: "Bedarfsprognosen, automatische Ausschreibungen und KI-gestützte Lieferantenbewertung.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    title: "KI in der IT",
    description: "Automatisiertes Incident-Management, Code-Generierung und intelligentes Security-Monitoring.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
      </svg>
    ),
    title: "KI im Controlling",
    description: "Echtzeit-Abweichungsanalysen, automatische Reports und KI-basierte Budgetprognosen.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "KI im Recht",
    description: "Contract-Review-Automatisierung, Compliance-Checks und KI-gestützte Dokumentenanalyse.",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
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
              <div className="usecase-icon" aria-hidden="true">{uc.svg}</div>
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
