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
  spedition: {
    slug: "spedition",
    name: "Spedition",
    metaTitle: "KI Beratung für Spedition | kiberatung.de",
    metaDescription: "KI-Lösungen für Speditionen: Sendungsstatus-Automatisierung, Auftragserfassung, Reklamationsmanagement und Tourenoptimierung. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Speditionen",
    intro: "Speditionen stehen unter enormem Druck: Sendungsanfragen häufen sich, Disponenten werden von Routinearbeit blockiert und Reklamationen müssen schnell bearbeitet werden. KI-Lösungen für Speditionen automatisieren Statusauskünfte per WhatsApp und Web, koordinieren Abholtermine und nehmen Reklamationen strukturiert auf — damit Disponenten sich auf komplexe Aufgaben konzentrieren können.",
    stats: { betriebe: "28.000+", mitarbeiter: "185.000", markttrend: "+7,4 %", label1: "Speditionen in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Müller Spedition GmbH – Hannover",
      challenge: "Die mittelständische Spedition bearbeitete täglich über 400 Sendungsanfragen telefonisch. Disponenten verbrachten über 40 % ihrer Zeit mit Statusauskünften statt mit Disposition.",
      solution: "KI-Sendungsstatus-Bot mit TMS-Anbindung, automatische Abholtermin-Koordination und strukturiertes Reklamations-Ersterfassungssystem.",
      result1: "Telefonanfragen −73 %",
      result2: "Disponenten-Planungszeit +45 %",
      result3: "Reklamationsbearbeitungszeit −58 %",
    },
    faqs: [
      { question: "Wie kann KI den Speditionsalltag automatisieren?", answer: "KI übernimmt Sendungsstatusanfragen automatisch per Chat, WhatsApp oder E-Mail, koordiniert Abholtermine und nimmt Reklamationen strukturiert auf — ohne manuelle Eingriffe des Disponenten." },
      { question: "Welche TMS-Systeme kann KI für Speditionen anbinden?", answer: "KI lässt sich an die gängigen TMS-Systeme anbinden — darunter Cargowise, Transporeon, Cargo-Partner-Systeme und viele weitere. Die Integration ist in der Regel in 2–4 Wochen abgeschlossen." },
      { question: "Wie schnell amortisiert sich KI für eine Spedition?", answer: "Durch reduzierte Disponenten-Routinearbeit und schnellere Reklamationsbearbeitung berichten viele Speditionen von einer Amortisation innerhalb von 3–6 Monaten." },
    ],
  },
  "kep-dienste": {
    slug: "kep-dienste",
    name: "KEP-Dienste",
    metaTitle: "KI Beratung für KEP-Dienste | kiberatung.de",
    metaDescription: "KI-Lösungen für Kurier-, Express- und Paketdienste: Sendungsstatus-Automatisierung, Abholkoordination und Reklamationsmanagement. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für KEP-Dienste",
    intro: "Kurier-, Express- und Paketdienste verarbeiten täglich tausende Sendungen — und erhalten entsprechend viele Statusanfragen, Abholwünsche und Reklamationen. KI-Lösungen für KEP-Dienste beantworten Sendungsanfragen sofort per WhatsApp, Web und App, koordinieren Abholtermine automatisch und nehmen Reklamationen strukturiert auf — damit Ihr Team Zeit für das Wesentliche hat.",
    stats: { betriebe: "12.000+", mitarbeiter: "290.000", markttrend: "+11,2 %", label1: "KEP-Unternehmen in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Express Nord GmbH – Hamburg",
      challenge: "Der regionale Expressdienstleister erhielt täglich über 800 Statusanfragen und Abholwünsche per Telefon und E-Mail. Die Belastung war für das kleine Team kaum noch bewältigbar.",
      solution: "KI-Sendungsstatus-Bot für WhatsApp und Website, automatische Abholtermin-Koordination und KI-Reklamations-Erstannahme.",
      result1: "Statusanfragen −81 % manuell",
      result2: "Abholkoordination +100 % automatisiert",
      result3: "Kundenzufriedenheit +29 %",
    },
    faqs: [
      { question: "Wie beantwortet KI Sendungsanfragen für KEP-Dienste automatisch?", answer: "KI verbindet sich mit Ihrem Tracking-System und beantwortet Sendungsanfragen per WhatsApp, Web und App sofort — ohne Einbindung von Mitarbeitern." },
      { question: "Kann KI Abholtermine für KEP-Kunden automatisch koordinieren?", answer: "Ja — KI prüft Fahrerverfügbarkeit, Zeitfenster und Routen und koordiniert Abholungen vollautomatisch inklusive Bestätigung und Erinnerung." },
      { question: "Wie verarbeitet KI Reklamationen für KEP-Dienste?", answer: "KI nimmt Reklamationen strukturiert auf, kategorisiert nach Art (Beschädigung, Verlust, Verspätung) und leitet sie automatisch an den zuständigen Sachbearbeiter weiter." },
    ],
  },
  lagerhaltung: {
    slug: "lagerhaltung",
    name: "Lagerhaltung",
    metaTitle: "KI Beratung für Lagerhaltung | kiberatung.de",
    metaDescription: "KI-Lösungen für Lagerunternehmen: Bestandsoptimierung, automatische Einlagerungsplanung, Kommissionierungsassistenz und Reklamationsmanagement.",
    h1: "KI Automatisierung für Lagerhaltung & Lagerlogistik",
    intro: "Lagerunternehmen stehen vor wachsenden Herausforderungen: Bestandsoptimierung, Effizienz bei Einlagerung und Kommissionierung sowie schnelle Bearbeitung von Kundenanfragen zu Beständen und Lieferterminen. KI-Lösungen für die Lagerhaltung automatisieren Bestandsanfragen, optimieren Einlagerungsprozesse und nehmen Reklamationen strukturiert auf.",
    stats: { betriebe: "8.500+", mitarbeiter: "210.000", markttrend: "+9,1 %", label1: "Lagerunternehmen in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Zentrallager Süd GmbH – Stuttgart",
      challenge: "Das Kontraktlogistikunternehmen erhielt täglich hunderte Bestandsanfragen von Kunden. Mitarbeiter verbrachten viel Zeit mit manuellen Bestandsauskünften statt mit Lagerprozessen.",
      solution: "KI-Bestandsauskunft-Bot mit WMS-Anbindung, automatische Einlagerungsplanung und strukturiertes Reklamationsmanagement für Lagerware.",
      result1: "Bestandsanfragen −77 % manuell",
      result2: "Einlagerungsplanung +32 % effizienter",
      result3: "Reklamationsbearbeitungszeit −61 %",
    },
    faqs: [
      { question: "Wie kann KI Bestandsanfragen im Lager automatisch beantworten?", answer: "KI verbindet sich mit Ihrem WMS und beantwortet Bestandsanfragen von Kunden sofort — inkl. Lagerort, verfügbarer Menge und geplantem Liefertermin." },
      { question: "Kann KI die Einlagerungsplanung optimieren?", answer: "Ja — KI analysiert Warenströme, saisonale Nachfrage und Kommissionierungsmuster und empfiehlt automatisch optimale Lagerplätze für schnellen Zugriff." },
      { question: "Wie nimmt KI Reklamationen für Lagerunternehmen auf?", answer: "KI nimmt Reklamationen zu Fehlbeständen, beschädigter Ware oder Terminverzögerungen strukturiert auf und erstellt automatisch ein vollständiges Ticket für Ihr Team." },
    ],
  },
  "last-mile-delivery": {
    slug: "last-mile-delivery",
    name: "Last-Mile-Delivery",
    metaTitle: "KI Beratung für Last-Mile-Delivery | kiberatung.de",
    metaDescription: "KI-Lösungen für Last-Mile-Delivery: Tourenoptimierung, Lieferbenachrichtigung, Reklamationsmanagement und automatische Abholkoordination.",
    h1: "KI Automatisierung für Last-Mile-Delivery",
    intro: "Die letzte Meile ist teuerste und fehleranfälligste Stufe der Lieferkette. Zustellversuche, Reklamationen und Abholwünsche belasten Disponenten und Fahrer. KI-Lösungen für Last-Mile-Delivery automatisieren Lieferbenachrichtigungen, koordinieren Abholwünsche und nehmen Reklamationen strukturiert auf — damit die letzte Meile effizienter und kundenfreundlicher wird.",
    stats: { betriebe: "6.200+", mitarbeiter: "145.000", markttrend: "+14,8 %", label1: "Last-Mile-Anbieter in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "CityDeliver GmbH – Berlin",
      challenge: "Der Berliner Last-Mile-Dienstleister hatte täglich über 600 fehlgeschlagene Zustellversuche und entsprechend viele Kundenanfragen zu Nachlieferungen und Abholoptionen.",
      solution: "KI-Lieferbenachrichtigungssystem mit automatischer Abholoption, KI-Reklamationsmanagement und proaktive Statusaktualisierungen per WhatsApp.",
      result1: "Fehlzustellungen −44 %",
      result2: "Kundenanfragen nach Fehlversuch −79 %",
      result3: "Kundenzufriedenheit +38 %",
    },
    faqs: [
      { question: "Wie reduziert KI Fehlzustellungen in der Last-Mile-Delivery?", answer: "KI benachrichtigt Empfänger proaktiv vor der Lieferung, ermöglicht Zeitfensterwahl und koordiniert Alternativen bei Abwesenheit — automatisch und ohne manuelle Eingriffe." },
      { question: "Kann KI Abholwünsche nach Fehlzustellungen koordinieren?", answer: "Ja — KI bietet automatisch Abholoptionen (Paketshop, Nachbarschaft, neuer Zustelltermin) an und koordiniert die Rückmeldung vollautomatisch." },
      { question: "Wie nimmt KI Reklamationen in der Last-Mile-Delivery auf?", answer: "KI nimmt Reklamationen zu Fehllieferungen, beschädigter Ware und Verspätungen strukturiert auf und erstellt automatisch ein vollständiges Ticket mit allen relevanten Daten." },
    ],
  },
  kuehltransport: {
    slug: "kuehltransport",
    name: "Kühltransport",
    metaTitle: "KI Beratung für Kühltransport | kiberatung.de",
    metaDescription: "KI-Lösungen für Kühltransport und Temperaturtransport: Sendungsstatus, Temperaturüberwachung, Reklamationsmanagement und Abholkoordination.",
    h1: "KI Automatisierung für Kühltransport & Temperaturtransport",
    intro: "Kühltransportunternehmen stehen vor besonderen Herausforderungen: Temperaturdokumentation, zeitkritische Lieferungen und Reklamationen bei Kühlkettenunterbrechungen. KI-Lösungen für den Kühltransport automatisieren Statusanfragen inkl. Temperaturdaten, koordinieren Abholtermine mit Kühlfahrzeugverfügbarkeit und nehmen Reklamationen strukturiert auf.",
    stats: { betriebe: "4.800+", mitarbeiter: "62.000", markttrend: "+8,3 %", label1: "Kühltransportunternehmen in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "FreshLog Transport GmbH – München",
      challenge: "Der Pharmakühltransporteur erhielt täglich Statusanfragen mit Anforderungen zu Temperaturdokumentation und Lückenlosigkeit der Kühlkette. Manuelle Auskunft kostete viel Zeit.",
      solution: "KI-Statusauskunft mit Temperaturprotokoll-Zugang, automatische Abholkoordination mit Kühlfahrzeugplanung und strukturiertes Reklamationsmanagement für Kühlkettenbrüche.",
      result1: "Temperaturdokumentationsanfragen −72 % manuell",
      result2: "Kühlfahrzeugauslastung +18 %",
      result3: "Reklamationsbearbeitungszeit bei Kühlbrüchen −54 %",
    },
    faqs: [
      { question: "Wie hilft KI Kühltransportunternehmen bei Temperaturdokumentationsanfragen?", answer: "KI stellt Temperaturdaten und Protokolle automatisch bereit — Kunden erhalten auf Anfrage sofort vollständige Kühlkettendokumentation ohne manuellen Aufwand." },
      { question: "Kann KI Kühlfahrzeuge für Abholtermine automatisch koordinieren?", answer: "Ja — KI berücksichtigt Fahrzeugausstattung, Temperaturanforderungen und Zeitfenster und koordiniert Abholungen mit dem richtigen Kühlfahrzeug automatisch." },
      { question: "Wie nimmt KI Reklamationen bei Kühlkettenunterbrechungen auf?", answer: "KI nimmt Reklamationen strukturiert auf, erfasst Temperaturdaten, Zeitstempel und Ursachen und erstellt automatisch ein vollständiges Dokumentationsticket für Regulierungsansprüche." },
    ],
  },
  gefahrgut: {
    slug: "gefahrgut",
    name: "Gefahrgut",
    metaTitle: "KI Beratung für Gefahrguttransport | kiberatung.de",
    metaDescription: "KI-Lösungen für Gefahrguttransport: Dokumentenmanagement, Sendungsstatus, ADR-Compliance-Unterstützung und Reklamationsmanagement.",
    h1: "KI Automatisierung für Gefahrguttransport",
    intro: "Gefahrguttransportunternehmen arbeiten unter strengsten Vorschriften — ADR, IATA, IMDG. Sendungsanfragen beinhalten oft Anforderungen zu Dokumentation, Beförderungspapieren und Einstufungen. KI-Lösungen für den Gefahrguttransport beantworten Statusanfragen inkl. Dokumentenzugang, koordinieren qualifizierte Fahrzeuge und Fahrer und nehmen Reklamationen strukturiert auf.",
    stats: { betriebe: "3.200+", mitarbeiter: "48.000", markttrend: "+6,8 %", label1: "Gefahrguttransportunternehmen in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Chem-Trans KG – Frankfurt",
      challenge: "Der Chemietransporteur erhielt täglich Anfragen zu Beförderungspapieren, ADR-Zertifikaten und Sendungsstatus. Jede manuelle Auskunft kostete den Disponenten Zeit und erforderte Fachkenntnis.",
      solution: "KI-Statusauskunft mit ADR-Dokumenten-Anbindung, automatische Abholkoordination mit Gefahrgut-Qualifikationsprüfung und strukturiertes Reklamationsmanagement.",
      result1: "Dokumentenanfragen −68 % manuell",
      result2: "Qualifizierte Fahrzeugzuordnung 100 % automatisch",
      result3: "Compliance-Fehler bei Abholkoordination −82 %",
    },
    faqs: [
      { question: "Wie hilft KI Gefahrguttransporteuren bei Dokumentationsanfragen?", answer: "KI stellt Beförderungspapiere, UN-Nummern, ADR-Klassen und Sicherheitsdatenblätter automatisch bereit — Kunden erhalten alle Informationen sofort und DSGVO-konform." },
      { question: "Kann KI die Qualifikation von Fahrzeugen und Fahrern für Gefahrgut prüfen?", answer: "Ja — KI prüft automatisch ADR-Zertifikate, Fahrzeugausstattung und Zulassungen und weist nur qualifiziertes Personal für Gefahrgutabholungen zu." },
      { question: "Wie nimmt KI Reklamationen im Gefahrguttransport auf?", answer: "KI nimmt Reklamationen strukturiert auf, erfasst alle relevanten Daten (Gefahrgutklasse, Schadensart, Dokumentation) und erstellt ein vollständiges, behördenkonformes Ticket." },
    ],
  },
  "e-commerce-fulfillment": {
    slug: "e-commerce-fulfillment",
    name: "E-Commerce-Fulfillment",
    metaTitle: "KI Beratung für E-Commerce-Fulfillment | kiberatung.de",
    metaDescription: "KI-Lösungen für E-Commerce-Fulfillment: Retourenmanagement, Sendungsstatus-Bot, Bestandsanfragen und automatisierte Kundenkommunikation.",
    h1: "KI Automatisierung für E-Commerce-Fulfillment",
    intro: "E-Commerce-Fulfillment-Dienstleister verarbeiten tausende Bestellungen täglich und stehen unter enormem Druck bei Retouren, Sendungsanfragen und Kundenkommunikation. KI-Lösungen für das E-Commerce-Fulfillment automatisieren Statusanfragen, verwalten Retourenprozesse und beantworten Kundenanfragen rund um die Uhr — ohne zusätzliches Personal.",
    stats: { betriebe: "2.400+", mitarbeiter: "78.000", markttrend: "+18,6 %", label1: "Fulfillment-Anbieter in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "QuickFulfill GmbH – Köln",
      challenge: "Der Fulfillment-Dienstleister bearbeitete täglich 1.200 Kundenanfragen zu Sendungsstatus und Retouren. Das Support-Team wurde überflutet — besonders in Black-Friday- und Weihnachtszeiten.",
      solution: "KI-Sendungsstatus-Bot mit Retourenprozess-Integration, automatisches Retourenmanagement und KI-gestützte Kundenkommunikation für alle Kanäle.",
      result1: "Statusanfragen −84 % manuell",
      result2: "Retourenbearbeitungszeit −61 %",
      result3: "Kundenzufriedenheit +35 %",
    },
    faqs: [
      { question: "Wie kann KI E-Commerce-Fulfillment-Sendungsanfragen automatisieren?", answer: "KI verbindet sich mit Ihrer Fulfillment-Software und beantwortet Statusanfragen für alle Kanäle (Shopify, WooCommerce, Amazon etc.) automatisch — auch in Peaks." },
      { question: "Wie hilft KI beim Retourenmanagement im E-Commerce-Fulfillment?", answer: "KI führt Kunden automatisch durch den Retourenprozess, erstellt Rücksendeetiketten, koordiniert Abholung und benachrichtigt über Gutschrift — vollautomatisch." },
      { question: "Kann KI Bestandsanfragen für E-Commerce-Fulfillment beantworten?", answer: "Ja — KI informiert Shop-Betreiber automatisch über aktuelle Bestände, Nachbestellbedarfe und geplante Liefertermine — ohne manuelle Auskunft des Fulfillment-Teams." },
    ],
  },
  kontraktlogistik: {
    slug: "kontraktlogistik",
    name: "Kontraktlogistik",
    metaTitle: "KI Beratung für Kontraktlogistik | kiberatung.de",
    metaDescription: "KI-Lösungen für Kontraktlogistik: Bestandsmanagement, automatische Kundenkommunikation, KPI-Reporting und Reklamationsmanagement.",
    h1: "KI Automatisierung für Kontraktlogistik",
    intro: "Kontraktlogistikdienstleister betreiben komplexe Outsourcing-Vereinbarungen mit anspruchsvollen SLA-Anforderungen. Kunden erwarten transparente Kommunikation zu Beständen, Lieferterminen und KPIs. KI-Lösungen für die Kontraktlogistik automatisieren Bestandsauskünfte, erstellen KPI-Reports und nehmen Reklamationen strukturiert auf — für lückenlose SLA-Einhaltung.",
    stats: { betriebe: "1.800+", mitarbeiter: "320.000", markttrend: "+8,9 %", label1: "Kontraktlogistiker in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "LogiContract Solutions GmbH – Dortmund",
      challenge: "Der Kontraktlogistiker betreute 12 Großkunden mit individuellen SLA-Anforderungen. Wöchentliche KPI-Reports und tägliche Bestandsanfragen wurden manuell erstellt — mit hohem Aufwand.",
      solution: "KI-Bestandsauskunft-Bot, automatische KPI-Report-Generierung und strukturiertes Reklamationsmanagement mit SLA-Tracking.",
      result1: "KPI-Reports vollautomatisch generiert",
      result2: "Bestandsanfragen −76 % manuell",
      result3: "SLA-Einhaltung +12 Prozentpunkte",
    },
    faqs: [
      { question: "Wie hilft KI Kontraktlogistikern bei SLA-Anforderungen?", answer: "KI überwacht SLA-Kennzahlen in Echtzeit, generiert automatische Reports und sendet proaktive Warnungen bei drohenden Abweichungen — bevor Kunden reagieren." },
      { question: "Kann KI Bestandsanfragen in der Kontraktlogistik automatisch beantworten?", answer: "Ja — KI verbindet sich mit dem WMS und beantwortet Bestandsanfragen sofort — inkl. Lagerort, verfügbarer Menge, Mindesthaltbarkeit und Liefertermin." },
      { question: "Wie nimmt KI Reklamationen in der Kontraktlogistik auf?", answer: "KI nimmt Reklamationen strukturiert auf, verknüpft sie mit dem SLA-Tracking und erstellt automatisch ein vollständiges Ticket mit Eskalations-Workflow." },
    ],
  },
  schwertransport: {
    slug: "schwertransport",
    name: "Schwertransport",
    metaTitle: "KI Beratung für Schwertransport | kiberatung.de",
    metaDescription: "KI-Lösungen für Schwertransport: Genehmigungsmanagement, Sendungsstatus-Automatisierung, Reklamationsmanagement und Routenplanung.",
    h1: "KI Automatisierung für Schwertransport & Spezialtransport",
    intro: "Schwertransportunternehmen arbeiten mit komplexen Genehmigungsverfahren, strengen Auflagenrouten und anspruchsvollen Kundenkommunikationsanforderungen. Sendungsanfragen beinhalten häufig Genehmigungsstatus, Routen und Zeitfenster. KI automatisiert Statusanfragen, koordiniert Genehmigungsprozesse und nimmt Reklamationen strukturiert auf.",
    stats: { betriebe: "1.100+", mitarbeiter: "18.000", markttrend: "+5,9 %", label1: "Schwertransportunternehmen in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "HeavyMove GmbH – Dortmund",
      challenge: "Das Schwertransportunternehmen bearbeitete täglich Anfragen zu Genehmigungsstatus, Routendetails und Zeitfenstern. Kunden erwarteten schnelle, präzise Auskünfte über mehrspurige Prozesse.",
      solution: "KI-Statusauskunft mit Genehmigungsdaten-Integration, automatische Kunden-Updates bei Genehmigungsfortschritten und strukturiertes Reklamationsmanagement.",
      result1: "Genehmigungsanfragen −66 % manuell",
      result2: "Kundeninformation zu Genehmigungsfortschritt proaktiv automatisiert",
      result3: "Disponenten-Entlastung +43 %",
    },
    faqs: [
      { question: "Wie hilft KI Schwertransportunternehmen beim Genehmigungsmanagement?", answer: "KI informiert Kunden automatisch über den aktuellen Genehmigungsstatus, offene Auflagen und genehmigte Zeitfenster — ohne manuelle Auskunft der Disposition." },
      { question: "Kann KI Kunden bei Schwertransporten proaktiv über Statusänderungen informieren?", answer: "Ja — KI erkennt Statusänderungen im Genehmigungssystem und benachrichtigt Kunden automatisch per E-Mail, SMS oder WhatsApp über Fortschritte und Verzögerungen." },
      { question: "Wie nimmt KI Reklamationen im Schwertransport auf?", answer: "KI nimmt Reklamationen zu Genehmigungsverzögerungen, Schäden oder Terminproblemen strukturiert auf und erstellt ein vollständiges Ticket für die Sachbearbeitung." },
    ],
  },
  intralogistik: {
    slug: "intralogistik",
    name: "Intralogistik",
    metaTitle: "KI Beratung für Intralogistik | kiberatung.de",
    metaDescription: "KI-Lösungen für Intralogistik: Lagerverwaltung, Kommissionierungsoptimierung, Bestandsautomatisierung und Prozessüberwachung.",
    h1: "KI Automatisierung für Intralogistik",
    intro: "Intralogistikunternehmen und Betriebe mit eigener Intralogistik kämpfen mit Kommissionierungsfehlern, Bestandsdifferenzen und ineffizienten Lagerprozessen. KI-Lösungen für die Intralogistik optimieren Kommissionierungsreihenfolgen, überwachen Bestände in Echtzeit und beantworten Kundenanfragen zu Beständen und Lieferterminen automatisch.",
    stats: { betriebe: "5.600+", mitarbeiter: "168.000", markttrend: "+10,4 %", label1: "Intralogistik-Betriebe in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "IntraOpt GmbH – Leipzig",
      challenge: "Das Lager- und Intralogistikunternehmen hatte hohe Kommissionierungsfehlerquoten und Bestandsdifferenzen. Kunden riefen häufig wegen Bestandsauskünften an.",
      solution: "KI-Bestandsüberwachung in Echtzeit, Kommissionierungsoptimierung durch KI-Routenplanung im Lager und automatischer Bestandsauskunft-Bot für Kunden.",
      result1: "Kommissionierungsfehler −58 %",
      result2: "Bestandsdifferenzen −44 %",
      result3: "Bestandsanfragen −73 % manuell",
    },
    faqs: [
      { question: "Wie optimiert KI die Kommissionierung in der Intralogistik?", answer: "KI analysiert Warenströme, Auftragsvolumen und Lagerlayout und erstellt automatisch optimierte Kommissionierungsreihenfolgen — für maximalen Durchsatz mit minimalem Wegeaufwand." },
      { question: "Wie überwacht KI Bestände in der Intralogistik in Echtzeit?", answer: "KI verbindet sich mit dem WMS und IoT-Sensoren, überwacht Bestände kontinuierlich und sendet automatische Alerts bei Unterschreitungen, Differenzen oder Fehllagerungen." },
      { question: "Kann KI Bestandsanfragen von Kunden in der Intralogistik automatisch beantworten?", answer: "Ja — KI beantwortet Bestandsanfragen sofort per Chat oder E-Mail mit Echtzeit-Daten aus dem WMS — ohne dass Lagermitarbeiter manuell Auskunft geben müssen." },
    ],
  },
};

export const VARIANTEN_SLUGS = Object.keys(variantenMap);

export function getVariantBySlug(slug: string): VariantData | null {
  return variantenMap[slug] ?? null;
}
