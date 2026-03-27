export interface VariantData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  stats: {
    betriebe: string;
    mitarbeiter: string;
    markttrend: string;
    label1: string;
    label2: string;
    label3: string;
  };
  caseStudy: {
    restaurant: string;
    challenge: string;
    solution: string;
    result1: string;
    result2: string;
    result3: string;
  };
  faqs: { question: string; answer: string }[];
}

export const variantenMap: Record<string, VariantData> = {
  steuerberater: {
    slug: "steuerberater",
    name: "Steuerberater",
    metaTitle: "KI Beratung für Steuerberater | kiberatung.de",
    metaDescription: "KI-Lösungen für Steuerberatungskanzleien: automatisierte Mandantenkommunikation, Fristenverwaltung, Dokumentenverarbeitung. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Steuerberatungskanzleien",
    intro: "Steuerberater stehen jedes Jahr vor denselben Engpässen: In der Hauptsaison stapeln sich Mandantenunterlagen, Fristen drohen, und Standardanfragen binden wertvolle Beratungszeit. KI-Automatisierung übernimmt die Dokumentenverarbeitung, beantwortet Standardfragen automatisch und verwaltet Fristen lückenlos — damit Steuerberater sich auf hochwertige Mandatsarbeit konzentrieren können.",
    stats: { betriebe: "95.000+", mitarbeiter: "380.000", markttrend: "+4,2 %", label1: "Steuerberaterkanzleien in Deutschland", label2: "Beschäftigte im Steuerberatungssektor", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Steuerkanzlei Hoffmann – Düsseldorf",
      challenge: "Die Kanzlei war in der Steuerspitzenzeit völlig überlastet — Mandantenanfragen blieben tagelang unbeantwortet und Mitarbeiter arbeiteten bis weit nach Mitternacht.",
      solution: "KI-FAQ-Bot für häufige Mandantenanfragen, automatisierte Dokumentenvorverarbeitung und KI-Fristenverwaltungssystem mit automatischen Mandantenerinnerungen.",
      result1: "Routineanfragen manuell −78 %",
      result2: "Fristversäumnisse −100 %",
      result3: "Überstunden Hauptsaison −45 %",
    },
    faqs: [
      { question: "Welche Aufgaben kann KI in einer Steuerberatungskanzlei übernehmen?", answer: "KI kann Mandantenanfragen zu Standardthemen beantworten, Dokumente automatisch vorverarbeiten und kategorisieren, Fristen überwachen und Erinnerungen versenden sowie Buchhaltungsdaten aufbereiten." },
      { question: "Ist KI in Steuerberatung DSGVO-konform einsetzbar?", answer: "Ja — alle unsere Lösungen laufen auf deutschen Servern und sind vollständig DSGVO-konform. Wir begleiten die datenschutzrechtliche Einrichtung inklusive Auftragsverarbeitungsvertrag." },
      { question: "Kann KI Steuerberatern helfen, mehr Mandate zu betreuen?", answer: "Absolut — durch die Automatisierung von Routineaufgaben können Steuerberater 30–50 % mehr Mandate mit gleichem Team betreuen, ohne Qualitätseinbußen." },
      { question: "Wie schnell ist KI in einer Steuerkanzlei implementiert?", answer: "Einfache KI-Lösungen wie Dokumenten-Uploads und FAQ-Bots sind in 1–2 Wochen live. Komplexere Systeme mit tiefer Kanzlei-Software-Integration benötigen 4–8 Wochen." },
    ],
  },
  rechtsanwaelte: {
    slug: "rechtsanwaelte",
    name: "Rechtsanwälte",
    metaTitle: "KI Beratung für Rechtsanwaltskanzleien | kiberatung.de",
    metaDescription: "KI-Lösungen für Rechtsanwälte: Mandantenkommunikation, Fristenverwaltung, Recherche-Unterstützung und Dokumentenmanagement. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Rechtsanwaltskanzleien",
    intro: "Rechtsanwaltskanzleien verlieren täglich Stunden an administrative Aufgaben: Mandantenanfragen, Terminvereinbarungen, Fristenverwaltung und Dokumentenorganisation. KI übernimmt diese Routinearbeiten automatisch und gibt Anwälten die Zeit zurück, die sie für die eigentliche Rechtsberatung brauchen — während gleichzeitig kein Mandant auf eine Antwort warten muss.",
    stats: { betriebe: "165.000+", mitarbeiter: "420.000", markttrend: "+3,8 %", label1: "Rechtsanwälte in Deutschland", label2: "Beschäftigte in Kanzleien", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Kanzlei für Arbeitsrecht – Berlin-Mitte",
      challenge: "Die arbeitsrechtlich spezialisierte Kanzlei konnte bei steigender Mandatszahl die Mandantenkommunikation und Dokumentenverwaltung nicht mehr ohne Qualitätsverlust aufrechterhalten.",
      solution: "KI-Mandantenportal mit automatischer Erstberatungs-FAQ, KI-Fristenkalender mit automatischen Erinnerungen und digitales Aktenmanagement-System.",
      result1: "Mandantenkapazität +40 %",
      result2: "Fristenverwaltung −90 % manuell",
      result3: "Mandantenzufriedenheit +55 %",
    },
    faqs: [
      { question: "Was darf KI in einer Rechtsanwaltskanzlei automatisieren?", answer: "KI darf Terminbuchungen, Fristenverwaltung, Dokumentenorganisation und Standardkommunikation automatisieren. Die eigentliche Rechtsberatung verbleibt beim Anwalt — KI unterstützt administrativ." },
      { question: "Ist KI-Recherche-Unterstützung für Rechtsanwälte sinnvoll?", answer: "Ja — KI kann Rechtsprechungsdatenbanken durchsuchen, relevante Urteile zusammenfassen und Argumentationsgrundlagen aufbereiten. Das spart erhebliche Recherchestunden." },
      { question: "Wie DSGVO-konform ist KI-Einsatz in Kanzleien?", answer: "Alle Lösungen laufen auf deutschen Servern mit Verschlüsselung und DSGVO-Compliance. Mandantendaten werden niemals für Modelltraining genutzt — maximaler Datenschutz." },
    ],
  },
  versicherungsmakler: {
    slug: "versicherungsmakler",
    name: "Versicherungsmakler",
    metaTitle: "KI Beratung für Versicherungsmakler | kiberatung.de",
    metaDescription: "KI-Lösungen für Versicherungsmakler: Bedarfsanalyse, Angebotsvergleich, Kundenbindung und automatisiertes Schadenmanagement. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Versicherungsmakler",
    intro: "Versicherungsmakler stehen täglich vor komplexen Aufgaben: Bedarfsanalysen, Tarifvergleiche, Kundenkommunikation und Schadenmanagement binden enorme Ressourcen. KI automatisiert den gesamten Akquise- und Betreuungszyklus — von der automatischen Bedarfsanalyse für Interessenten bis zur KI-gestützten Schadenmeldungsbearbeitung — und gibt Maklern den Spielraum für mehr Kunden und bessere Beratung.",
    stats: { betriebe: "46.000+", mitarbeiter: "210.000", markttrend: "+5,1 %", label1: "Versicherungsmakler in Deutschland", label2: "Beschäftigte im Maklersektor", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Versicherungsmakler Müller & Partner – München",
      challenge: "Das Maklerunternehmen verlor potenzielle Kunden, weil die manuelle Angebotserstellung zu lange dauerte und Interessenten in der Zwischenzeit bei anderen Anbietern abschlossen.",
      solution: "KI-Bedarfsanalyse-Fragebogen mit automatischem Angebotsvergleich, sofortige Angebotserstellung und KI-gestütztes Follow-up-System.",
      result1: "Angebotserstellung von 2 Tagen auf 15 Minuten",
      result2: "Interessenten-Abschlussquote +62 %",
      result3: "Neukundengewinnung +48 %",
    },
    faqs: [
      { question: "Wie hilft KI bei der Versicherungs-Bedarfsanalyse?", answer: "KI-Fragebogen-Systeme führen Interessenten automatisch durch eine strukturierte Bedarfsanalyse und erstellen sofort einen personalisierten Vergleich passender Tarife." },
      { question: "Kann KI Schadenmeldungen für Versicherungsmakler bearbeiten?", answer: "Ja — KI kann Schadenmeldungsformulare entgegennehmen, Vollständigkeit prüfen, bei den Versicherern einreichen und den Kunden automatisch über den Status informieren." },
      { question: "Welchen ROI haben Versicherungsmakler durch KI?", answer: "Versicherungsmakler berichten von einer Verdopplung der betreuungsfähigen Kundenzahl und einer Abschlussquoten-Steigerung von 40–60 % durch schnellere Angebotsbearbeitung." },
    ],
  },
  personalberatung: {
    slug: "personalberatung",
    name: "Personalberatung",
    metaTitle: "KI Beratung für Personalberatungen & Headhunter | kiberatung.de",
    metaDescription: "KI-Lösungen für Personalberatungen: Kandidaten-Prescreening, automatisches Matching, Mandantenkommunikation. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Personalberatungen",
    intro: "Personalberatungen und Headhunter stehen unter doppeltem Druck: Immer mehr offene Positionen, immer mehr Kandidaten — und immer weniger Zeit für tiefes menschliches Matching. KI-Prescreening und intelligente Matching-Algorithmen übernehmen die zeitintensive Kandidatenvorauswahl automatisch, während Berater sich auf das Wesentliche konzentrieren: die menschliche Passung und die Beziehungspflege.",
    stats: { betriebe: "12.000+", mitarbeiter: "85.000", markttrend: "+6,4 %", label1: "Personalberatungen in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Executive Search Partner – Frankfurt",
      challenge: "Die Executive-Search-Firma konnte ihre Kapazität nicht skalieren — jede Position erforderte intensive manuelle Kandidatenrecherche und -qualifizierung.",
      solution: "KI-Kandidaten-Prescreening-System mit automatischem CV-Parsing, KI-Matching-Score für Positionsanforderungen und automatisiertes Kandidaten-Outreach-System.",
      result1: "Prescreening-Zeit −74 %",
      result2: "Candidate Pipeline +220 %",
      result3: "Time-to-Placement −35 %",
    },
    faqs: [
      { question: "Kann KI Kandidaten für Personalberatungen vorauswählen?", answer: "Ja — KI-Prescreening analysiert Lebensläufe, prüft Qualifikationsanforderungen und erstellt automatische Eignungsscores, die dem Berater die erste Selektion abnehmen." },
      { question: "Wie hilft KI beim Kandidaten-Outreach?", answer: "KI erstellt personalisierte Erstkontakt-Nachrichten für jeden Kandidaten auf Basis seines Profils und der Positionsanforderungen — deutlich höhere Rücklaufquoten als generische Nachrichten." },
      { question: "Gefährdet KI die Qualität des Matchings in Personalberatungen?", answer: "Nein — KI übernimmt das Vorscreening, aber das finale Matching und die Persönlichkeitsbewertung verbleiben beim Berater. KI macht Berater effizienter, ersetzt sie nicht." },
    ],
  },
  "it-dienstleister": {
    slug: "it-dienstleister",
    name: "IT-Dienstleister",
    metaTitle: "KI Beratung für IT-Dienstleister | kiberatung.de",
    metaDescription: "KI-Lösungen für IT-Dienstleister: automatisierter Support, Kapazitätsskalierung, Kundenmanagement und Monitoring. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für IT-Dienstleister",
    intro: "IT-Dienstleister kennen das Paradox: Je erfolgreicher das Unternehmen wächst, desto mehr Supportaufwand entsteht — und desto schwerer wird es, die Marge zu halten. KI-First-Level-Support, automatisiertes Monitoring und intelligentes Ticketsystem ermöglichen IT-Dienstleistern, das Verhältnis von Kunden zu Technikern massiv zu verbessern und profitabler zu skalieren.",
    stats: { betriebe: "98.000+", mitarbeiter: "640.000", markttrend: "+8,2 %", label1: "IT-Dienstleister in Deutschland", label2: "Beschäftigte im IT-Dienstleistungssektor", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Managed Services Partner GmbH – Stuttgart",
      challenge: "Der Managed-Services-Anbieter hatte ein schlechtes Techniker/Kunden-Verhältnis und konnte nicht wachsen, ohne proportional Techniker einzustellen.",
      solution: "KI-First-Level-Support mit automatischer Ticketlösung für bekannte Probleme, intelligentes Monitoring mit präventiver Alerting und KI-Dokumentations-Chatbot.",
      result1: "Kunden/Techniker-Verhältnis von 20:1 auf 55:1",
      result2: "First-Level-Tickets automatisch gelöst 68 %",
      result3: "Marge pro Kunde +38 %",
    },
    faqs: [
      { question: "Wie kann KI IT-Dienstleistern helfen, zu skalieren?", answer: "KI übernimmt First-Level-Support, automatisiertes Monitoring und Ticket-Routing — das ermöglicht IT-Dienstleistern, deutlich mehr Kunden mit gleichem Technik-Team profitabel zu betreuen." },
      { question: "Welche IT-Ticketsysteme lassen sich mit KI verbinden?", answer: "KI-Lösungen lassen sich mit allen gängigen ITSM-Systemen wie ServiceNow, Jira, Freshdesk oder Zendesk integrieren — für nahtlose Automatisierung im bestehenden Workflow." },
      { question: "Kann KI präventive IT-Wartung unterstützen?", answer: "Ja — KI-Monitoring-Systeme erkennen Anomalien und drohende Ausfälle, bevor sie auftreten, und alarmieren den Techniker proaktiv. Das reduziert Notfalleinsätze erheblich." },
    ],
  },
  reinigungsservice: {
    slug: "reinigungsservice",
    name: "Reinigungsservice",
    metaTitle: "KI Beratung für Reinigungsunternehmen | kiberatung.de",
    metaDescription: "KI-Lösungen für Reinigungsunternehmen: automatische Angebotserstellung, Einsatzplanung, Mitarbeitermanagement und Kundenkommunikation.",
    h1: "KI Automatisierung für Reinigungsunternehmen",
    intro: "Reinigungsunternehmen stehen vor täglichen Planungsherausforderungen: Mitarbeitereinsatz, Routenoptimierung, Angebotskalkulationen und Kundenkommunikation fressen administrative Kapazitäten. KI-gestützte Einsatzplanung, automatische Angebotserstellung und smarte Kundenkommunikation geben Reinigungsunternehmen die Zeit zurück, die sie für Qualitätskontrolle und Kundenpflege brauchen.",
    stats: { betriebe: "28.000+", mitarbeiter: "680.000", markttrend: "+4,9 %", label1: "Reinigungsunternehmen in Deutschland", label2: "Beschäftigte im Reinigungsgewerbe", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Profi Reinigung GmbH – Hamburg",
      challenge: "Das mittelgroße Reinigungsunternehmen mit 85 Mitarbeitern verlor täglich stunden durch manuelle Einsatzplanung, Routenoptimierung und Angebotserstellung für neue Kunden.",
      solution: "KI-Einsatzplanung mit automatischer Mitarbeiter-Route-Optimierung, KI-Angebotsgenerator für Neukunden und automatisches Kundenfeedback-System.",
      result1: "Planungsaufwand −65 %",
      result2: "Fahrtwege −22 %",
      result3: "Neukundenangebote in 30 Minuten",
    },
    faqs: [
      { question: "Wie hilft KI bei der Einsatzplanung für Reinigungsunternehmen?", answer: "KI-Planungssysteme optimieren automatisch Mitarbeiterzuweisungen, Routen und Zeiten — unter Berücksichtigung von Qualifikationen, Objektanforderungen und Fahrtzeiten. Das spart täglich stunden." },
      { question: "Kann KI Angebote für Reinigungsaufträge automatisch kalkulieren?", answer: "Ja — KI-Angebotsgeneratoren berechnen auf Basis von Objektgröße, Reinigungsintervall und Anforderungen automatisch den Preis und erstellen professionelle Angebotsdokumente." },
      { question: "Wie hilft KI bei der Mitarbeiterkommunikation im Reinigungsgewerbe?", answer: "KI-Systeme versenden automatisch Einsatzpläne, Objektinformationen und Änderungen an Mitarbeiter per App oder SMS — ohne manuelle Koordination durch Disponenten." },
    ],
  },
  gebaeudemanagement: {
    slug: "gebaeudemanagement",
    name: "Gebäudemanagement",
    metaTitle: "KI Beratung für Gebäudemanagement-Unternehmen | kiberatung.de",
    metaDescription: "KI-Lösungen für Gebäudemanagement: Wartungsplanung, Mieter-Support, Energieoptimierung und automatisiertes Reporting. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Gebäudemanagement",
    intro: "Gebäudemanagement-Unternehmen verwalten komplexe Objektportfolios mit zahllosen Mietern, Dienstleistern und Wartungsaufgaben. KI-gestützte Wartungsplanung verhindert Ausfälle durch präventive Instandhaltung, automatisierter Mieter-Support reduziert Anfragen drastisch, und KI-Energiemanagement senkt Betriebskosten messbar — für profitablere Immobilienverwaltung.",
    stats: { betriebe: "18.000+", mitarbeiter: "220.000", markttrend: "+5,8 %", label1: "Gebäudemanagement-Firmen in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "ImmoService GmbH – Berlin",
      challenge: "Das Gebäudemanagementunternehmen verwaltete 2.400 Einheiten mit einem Team, das durch Mieteranfragen, Wartungstickets und Abrechnungen völlig überlastet war.",
      solution: "KI-Mieter-Support-Portal für Standardanfragen und Schadenmeldungen, KI-Wartungsplanung mit präventivem Alerting und automatisiertes Nebenkostenabrechnung.",
      result1: "Mieteranfragen manuell −72 %",
      result2: "Wartungsausfälle −45 %",
      result3: "Verwaltete Einheiten je Mitarbeiter +80 %",
    },
    faqs: [
      { question: "Wie hilft KI bei der Wartungsplanung im Gebäudemanagement?", answer: "KI-Systeme analysieren Wartungsintervalle, Gerätehistorien und Sensordaten, um präventive Wartungspläne zu erstellen und Ausfälle zu verhindern, bevor sie teuer werden." },
      { question: "Kann KI Mieteranfragen im Gebäudemanagement bearbeiten?", answer: "Ja — KI-Mieterportale beantworten Standardfragen zu Nebenkosten, Reparaturmeldungen und Vertragsthemen automatisch. Nur komplexe Fälle werden an den Property Manager eskaliert." },
      { question: "Wie optimiert KI den Energieverbrauch in verwalteten Gebäuden?", answer: "KI-Energiemanagementsysteme analysieren Verbrauchsmuster, optimieren Heizungs- und Lüftungssteuerung automatisch und reduzieren so die Energiekosten der Immobilien." },
    ],
  },
  "event-agenturen": {
    slug: "event-agenturen",
    name: "Event-Agenturen",
    metaTitle: "KI Beratung für Event-Agenturen | kiberatung.de",
    metaDescription: "KI-Lösungen für Event-Agenturen: Angebotsautomatisierung, Gästemanagement, Lieferantenkoordination und automatisiertes Eventreporting.",
    h1: "KI Automatisierung für Event-Agenturen",
    intro: "Event-Agenturen jonglieren täglich mit unzähligen Anfragen, Lieferantenkoordination, Gästemanagement und Budget-Kalkulation. KI macht den aufwendigsten Teil dieses Jobs schneller und fehlerfreier: automatische Angebotserstellung, KI-Gästemanagement, smarte Lieferantenkoordination und automatisiertes Eventreporting — damit sich das Kreativteam auf das Wesentliche konzentriert.",
    stats: { betriebe: "8.500+", mitarbeiter: "65.000", markttrend: "+6,7 %", label1: "Event-Agenturen in Deutschland", label2: "Beschäftigte in der Eventbranche", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Eventkultur GmbH – Köln",
      challenge: "Die Eventagentur verlor potenzielle Kunden, weil die manuelle Angebotserstellung für größere Events 2–3 Tage dauerte — und Interessenten in der Zwischenzeit bei schnelleren Wettbewerbern buchten.",
      solution: "KI-Event-Angebotsgenerator mit automatischer Lieferantenanfrage, KI-Kapazitätsprüfung und sofortige Grobkalkulation für Interessenten innerhalb von 2 Stunden.",
      result1: "Angebotserstellung von 3 Tagen auf 2 Stunden",
      result2: "Buchungsquote Anfragen +58 %",
      result3: "Agentururmsatz +44 %",
    },
    faqs: [
      { question: "Wie hilft KI bei der Angebotserstellung für Events?", answer: "KI-Event-Generatoren erstellen auf Basis von Anfrageparametern (Gästezahl, Budget, Eventtyp, Datum) automatisch strukturierte Angebote inklusive Grobkalkulation und Lieferantenvorschlägen." },
      { question: "Kann KI das Gästemanagement für Events automatisieren?", answer: "Ja — KI-Gästemanagementsysteme verschicken automatisch Einladungen, verwalten An- und Absagen, versenden Erinnerungen und erstellen Sitzpläne auf Basis von Präferenzen." },
      { question: "Wie hilft KI bei der Lieferantenkoordination für Events?", answer: "KI-Systeme versenden automatisch Anfragen an passende Lieferanten, aggregieren Angebote, prüfen Verfügbarkeiten und erstellen Vergleichstabellen für die finale Auswahl." },
    ],
  },
  "marketing-agenturen": {
    slug: "marketing-agenturen",
    name: "Marketing-Agenturen",
    metaTitle: "KI Beratung für Marketing-Agenturen | kiberatung.de",
    metaDescription: "KI-Lösungen für Marketing-Agenturen: automatisiertes Reporting, KI-Content-Erstellung, Pitch-Automatisierung und Kampagnenoptimierung.",
    h1: "KI Automatisierung für Marketing-Agenturen",
    intro: "Marketing-Agenturen stehen unter permanentem Effizienz- und Kreativitätsdruck. KI übernimmt zeitfressende Routineaufgaben: automatisierte Performance-Reportings, KI-gestützte Content-Erstellung für A/B-Tests, schnellere Pitch-Erstellung und Kampagnenoptimierung in Echtzeit — damit Kreative mehr Zeit für strategische Arbeit haben.",
    stats: { betriebe: "25.000+", mitarbeiter: "185.000", markttrend: "+7,3 %", label1: "Marketing-Agenturen in Deutschland", label2: "Beschäftigte in Marketing-Agenturen", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Performance Marketing Studio – Hamburg",
      challenge: "Das Agenturteam verbrachte täglich 3+ Stunden mit manuellem Reporting für Kunden — Zeit, die für Optimierung und Strategie fehlte.",
      solution: "KI-automatisiertes Reporting-System mit Dashboard-Generierung, KI-gestützte Kampagnenanalyse und automatische Handlungsempfehlungen für Kunden-Updates.",
      result1: "Reporting-Aufwand −85 %",
      result2: "Kundenreport-Qualität +40 %",
      result3: "Freigestellte Strategiezeit +12 Stunden/Woche",
    },
    faqs: [
      { question: "Wie hilft KI Marketing-Agenturen beim Client-Reporting?", answer: "KI-Reportingsysteme aggregieren automatisch Daten aus allen Kanälen (Meta, Google, LinkedIn), erstellen visuelle Dashboards und formulieren automatische Optimierungsempfehlungen." },
      { question: "Kann KI Marketing-Content für Agenturen erstellen?", answer: "Ja — KI erstellt automatisch Varianten für A/B-Tests, Social-Media-Posts, E-Mail-Betreffzeilen und Ad-Texte auf Basis der Kampagnenstrategie und Zielgruppe." },
      { question: "Wie hilft KI beim Pitch-Prozess für neue Kunden?", answer: "KI-Pitch-Generatoren erstellen auf Basis von Briefings automatisch Gliederungen, recherchieren Wettbewerber und generieren erste Strategievorschläge — der Kreative verfeinert und veredelt." },
    ],
  },
  unternehmensberatung: {
    slug: "unternehmensberatung",
    name: "Unternehmensberatung",
    metaTitle: "KI Beratung für Unternehmensberatungen | kiberatung.de",
    metaDescription: "KI-Lösungen für Unternehmensberatungen: automatisierte Analysen, KI-gestütztes Reporting, Mandantenmanagement und skalierbare Beratungsprodukte.",
    h1: "KI Automatisierung für Unternehmensberatungen",
    intro: "Unternehmensberatungen stehen vor einem fundamentalen Skalierungsproblem: mehr Mandate bedeuten proportional mehr Berater. KI bricht dieses Verhältnis auf: automatisierte Datenanalysen, KI-gestützte Marktforschung, intelligente Reporting-Tools und skalierbare Standardberatungsprodukte ermöglichen es Unternehmensberatungen, deutlich mehr Mandate mit gleichem Team profitabel zu betreuen.",
    stats: { betriebe: "22.000+", mitarbeiter: "320.000", markttrend: "+6,1 %", label1: "Unternehmensberatungen in Deutschland", label2: "Beschäftigte in der Beratungsbranche", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Strategieberatung Wachstum GmbH – München",
      challenge: "Die mittelgroße Unternehmensberatung wollte kleinere Mandate profitabel annehmen, konnte dies aber nicht, weil die manuelle Analyse- und Reportingarbeit zu kostspielig war.",
      solution: "KI-Erstanalyse-Tool für neue Mandate, automatisiertes Datenanalyse-System und KI-gestützte Standardberichte für Segmentanalysen und Benchmark-Reports.",
      result1: "Kleinstmandate jetzt profitabel ab 5.000 €",
      result2: "Analyseaufwand je Mandat −55 %",
      result3: "Beratungskapazität +70 %",
    },
    faqs: [
      { question: "Wie hilft KI Unternehmensberatern bei der Datenanalyse?", answer: "KI kann automatisch Unternehmensdaten, Marktforschung und Branchenbenchmarks analysieren, Anomalien identifizieren und Handlungsempfehlungen generieren — in Minuten statt Tagen." },
      { question: "Kann KI standardisierte Beratungsprodukte für kleinere Mandate ermöglichen?", answer: "Ja — KI-gestützte Standardanalysen (Marktpotenzialanalyse, Prozesseffizienz-Check, Digitalisierungsreife-Assessment) ermöglichen es Beratungen, kleinere Mandate profitabel zu bedienen." },
      { question: "Wie hilft KI bei der Wissensverwaltung in Unternehmensberatungen?", answer: "KI-Wissensmanagementsysteme erschließen automatisch das interne Wissensarchiv, finden relevante frühere Projekte und Lösungsansätze und beschleunigen die Beratungsarbeit erheblich." },
    ],
  },
};

export const VARIANTEN_SLUGS = Object.keys(variantenMap);

export function getVariantBySlug(slug: string): VariantData | undefined {
  return variantenMap[slug];
}
