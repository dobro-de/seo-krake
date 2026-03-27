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
  makler: {
    slug: "makler",
    name: "Makler",
    metaTitle: "KI Beratung für Immobilienmakler | kiberatung.de",
    metaDescription: "KI-Lösungen für Immobilienmakler: Exposé-Generator, Interessenten-Bot, automatische Marktanalysen. Mehr Abschlüsse, weniger Verwaltung.",
    h1: "KI Automatisierung für Immobilienmakler",
    intro: "Immobilienmakler in Deutschland stehen unter steigendem Wettbewerbsdruck: Kunden erwarten schnelle Antworten, professionelle Exposés und fundierte Preisberatung — rund um die Uhr. KI-Lösungen helfen Maklern, genau das zu liefern: automatisierte Exposé-Erstellung aus Fotos und Basisdaten, 24/7-Interessentenqualifizierung und Echtzeit-Marktanalysen für präzise Preisberatung. Das Ergebnis: mehr Abschlüsse bei deutlich weniger Verwaltungsaufwand.",
    stats: { betriebe: "85.000+", mitarbeiter: "240.000", markttrend: "+6,2 %", label1: "Immobilienmakler in Deutschland", label2: "Beschäftigte im Maklersegment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Kern Immobilien – München",
      challenge: "Das Maklerbüro verwaltete 40+ aktive Objekte und verbrachte pro Exposé durchschnittlich 2,5 Stunden — Zeit, die für Besichtigungen und Kundenberatung fehlte.",
      solution: "KI-Exposé-Generator auf Basis von Fotos und Grunddaten, kombiniert mit einem 24/7-Interessenten-Bot für Qualifizierung und Terminbuchung.",
      result1: "Exposé-Zeit −87 %",
      result2: "Besichtigungen +220 %",
      result3: "Abschlussrate +34 %",
    },
    faqs: [
      { question: "Welche KI-Lösungen bringen Immobilienmaklern den schnellsten ROI?", answer: "KI-Exposé-Generator und Interessenten-Bot bringen den schnellsten Return: Exposé-Erstellung von 2+ Stunden auf unter 15 Minuten, Interessentenqualifizierung rund um die Uhr." },
      { question: "Wie schnell ist KI für ein Maklerbüro implementiert?", answer: "Exposé-KI und Interessenten-Bot sind in 1–2 Wochen einsatzbereit. Das erste Gespräch ist kostenlos." },
      { question: "Kann KI den Makler bei der Preisberatung unterstützen?", answer: "Ja — KI-Marktanalysen liefern datenbasierte Preisspannen auf Basis aktueller Transaktionen, Lage und Ausstattung. Ideal als Grundlage für Bewertungsgespräche." },
    ],
  },
  hausverwaltung: {
    slug: "hausverwaltung",
    name: "Hausverwaltung",
    metaTitle: "KI Beratung für Hausverwaltungen | kiberatung.de",
    metaDescription: "KI-Lösungen für Hausverwaltungen: Mieter-Kommunikationsbot, Wartungsmanagement, automatische Nebenkostenabrechnung. Mehr Effizienz, weniger Aufwand.",
    h1: "KI Automatisierung für Hausverwaltungen",
    intro: "Hausverwaltungen managen komplexe Mieterbeziehungen, Wartungsanfragen, Abrechnungen und rechtliche Anforderungen gleichzeitig. Der Verwaltungsaufwand wächst mit jeder zusätzlichen Einheit. KI-Lösungen transformieren Hausverwaltungen: automatisierte Mieter-Kommunikation, intelligentes Wartungsmanagement und KI-gestützte Nebenkostenabrechnung — damit Ihre Verwaltung skaliert, ohne proportional mehr Personal einzustellen.",
    stats: { betriebe: "22.000+", mitarbeiter: "185.000", markttrend: "+8,1 %", label1: "Hausverwaltungen in Deutschland", label2: "Beschäftigte im Segment", label3: "Marktwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Stadtpark Hausverwaltung – Frankfurt",
      challenge: "Die Verwaltung betreute 800 Wohneinheiten mit einem Team von 5 Personen. Wartungsanfragen, Nebenkostenfragen und allgemeine Anfragen der Mieter kosteten täglich mehrere Stunden.",
      solution: "KI-Mieter-Bot für 24/7-Kommunikation, automatisches Wartungsticket-System mit Handwerker-Koordination und KI-gestützte Betriebskostenauswertung.",
      result1: "Mieteranfragen automatisiert −75 %",
      result2: "Wartungsreaktionszeit −60 %",
      result3: "Verwaltungskapazität +150 %",
    },
    faqs: [
      { question: "Wie hilft KI bei der Mieter-Kommunikation in der Hausverwaltung?", answer: "Ein KI-Bot beantwortet Standardanfragen von Mietern rund um die Uhr: Nebenkostenfragen, Wartungsanmeldungen, Dokumentenanfragen — ohne manuellen Aufwand für Ihr Team." },
      { question: "Kann KI die Nebenkostenabrechnung in der Hausverwaltung unterstützen?", answer: "Ja — KI analysiert Verbrauchsdaten, erkennt Ausreißer und erstellt abrechnungsfertige Aufstellungen. Das reduziert Fehler und Rückfragen von Mietern erheblich." },
      { question: "Lohnt sich KI für eine kleinere Hausverwaltung mit 100–300 Einheiten?", answer: "Ja — besonders Mieter-Kommunikation und Wartungsmanagement rentieren sich auch bei kleineren Beständen. Das erste Gespräch zeigt konkret, was für Ihre Verwaltung sinnvoll ist." },
    ],
  },
  projektentwicklung: {
    slug: "projektentwicklung",
    name: "Projektentwicklung",
    metaTitle: "KI Beratung für Immobilien-Projektentwickler | kiberatung.de",
    metaDescription: "KI-Lösungen für Projektentwickler: Standortanalyse, automatisierte Vermarktung, Interessentenmanagement für Neubauprojekte.",
    h1: "KI Automatisierung für Immobilien-Projektentwickler",
    intro: "Immobilien-Projektentwickler stehen vor komplexen Herausforderungen: Standortentscheidungen auf Basis von Marktdaten, Vermarktung von Projekten in der Planungsphase und Management von hunderten Interessenten gleichzeitig. KI-Lösungen unterstützen alle Phasen: von der datengetriebenen Standortanalyse über automatisiertes Interessentenmanagement bis zur KI-gestützten Vermarktungsstrategie.",
    stats: { betriebe: "4.800+", mitarbeiter: "78.000", markttrend: "+9,4 %", label1: "Projektentwickler in Deutschland", label2: "Beschäftigte im Segment", label3: "Marktwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Neue Quartiere GmbH – Hamburg",
      challenge: "Der Projektentwickler vermarktete ein 120-Wohnungen-Projekt ab Planungsphase und erhielt 1.200+ Interessentenanfragen, konnte aber nur manuell priorisieren.",
      solution: "KI-Interessenten-Scoring nach Kaufbereitschaft und Finanzierung, automatische Projekt-Updates an registrierte Interessenten und KI-Standortanalyse für Folgeprojekte.",
      result1: "Interessenten priorisiert in Echtzeit",
      result2: "Vorverkaufsquote 82 % vor Fertigstellung",
      result3: "Standortentscheidung 3× schneller",
    },
    faqs: [
      { question: "Wie hilft KI bei der Standortentscheidung für neue Immobilienprojekte?", answer: "KI analysiert Bevölkerungsentwicklung, Infrastruktur, Kaufkraft, Wettbewerb und Preistrends für potenzielle Standorte — und liefert ein datenbasiertes Scoring für Investitionsentscheidungen." },
      { question: "Kann KI Interessenten für Neubauprojekte automatisch verwalten?", answer: "Ja — KI erfasst, qualifiziert und priorisiert Projektinteressenten nach Kaufbereitschaft, Budget und Zeitplan. Sie sehen jederzeit, wer wirklich kaufen will." },
      { question: "Wie hilft KI bei der Vermarktung in der frühen Projektphase?", answer: "KI erstellt projektspezifische Landingpages-Texte, Interessenten-Newsletter und automatische Fortschritts-Updates — damit Sie maximale Sichtbarkeit in jeder Projektphase haben." },
    ],
  },
  gewerbevermietung: {
    slug: "gewerbevermietung",
    name: "Gewerbevermietung",
    metaTitle: "KI Beratung für Gewerbevermietung | kiberatung.de",
    metaDescription: "KI-Lösungen für Gewerbevermietung: Investorenexposés, Mieter-Scoring, automatische Due-Diligence-Unterstützung.",
    h1: "KI Automatisierung für Gewerbevermietung",
    intro: "Gewerbevermietung ist komplex: lange Entscheidungszyklen, anspruchsvolle institutionelle Mieter, umfangreiche Due-Diligence-Prozesse und hohe Exposé-Anforderungen. KI-Lösungen unterstützen Gewerbevermieter auf allen Ebenen: professionelle Investorenexposés in Minuten, KI-gestütztes Mieter-Scoring nach Bonität und Branche sowie automatisierte Due-Diligence-Dokumentation.",
    stats: { betriebe: "12.000+", mitarbeiter: "95.000", markttrend: "+5,7 %", label1: "Gewerbeimmobilien-Vermieter in DE", label2: "Beschäftigte im Segment", label3: "Transaktionswachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Commerce Properties – Düsseldorf",
      challenge: "Der Gewerbevermieter erstellte Investorenexposés manuell — jeweils 8–12 Stunden für ein vollständiges Dokument. Due-Diligence-Anfragen von Mietinteressenten kosteten zusätzlich wertvolle Zeit.",
      solution: "KI-Investorenexposé-Generator mit automatischer Kennzahlenberechnung, KI-Mieter-Scoring nach Branche und Bonität und strukturierte Due-Diligence-Dokument-KI.",
      result1: "Exposé-Erstellung: 8h → 45 min",
      result2: "Due-Diligence-Prozess −50 %",
      result3: "Gewerbe-Abschlussrate +38 %",
    },
    faqs: [
      { question: "Wie erstellt KI professionelle Investorenexposés für Gewerbeimmobilien?", answer: "KI verarbeitet Flächendaten, Mietvertragsinformationen, Lageanalysen und Renditedaten — und erstellt daraus institutionengerechte Exposés in unter einer Stunde." },
      { question: "Kann KI Gewerbemieter nach Bonität und Branchenrisiko bewerten?", answer: "Ja — KI-Mieter-Scoring analysiert Bilanzdaten, Branchentrends und Insolvenzrisiken. Das gibt Ihnen eine fundierte Grundlage für Mietentscheidungen." },
      { question: "Wie hilft KI bei der Due Diligence in der Gewerbevermietung?", answer: "KI strukturiert und analysiert Vertragsunterlagen, extrahiert relevante Klauseln und erstellt Zusammenfassungen für Investorenberichte — ein Prozess, der sonst Tage dauert." },
    ],
  },
  luxusimmobilien: {
    slug: "luxusimmobilien",
    name: "Luxusimmobilien",
    metaTitle: "KI Beratung für Luxusimmobilien-Makler | kiberatung.de",
    metaDescription: "KI-Lösungen für Luxusimmobilien: Premium-Exposés, diskretes Interessenten-Scoring, internationale Käufer-Qualifizierung.",
    h1: "KI Automatisierung für Luxusimmobilien",
    intro: "Der Luxusimmobilienmarkt funktioniert nach eigenen Regeln: Diskretion, Exklusivität und höchste Professionalität sind keine Optionen — sie sind Voraussetzung. KI-Lösungen für Luxusmakler sind darauf ausgelegt: diskrete Vorabqualifizierung von Interessenten, Premium-Exposés auf internationalem Sprachniveau und KI-Bewertungen, die selbst Ultrahochwertimmobilien präzise einschätzen.",
    stats: { betriebe: "3.200+", mitarbeiter: "18.000", markttrend: "+11,3 %", label1: "Luxusimmobilien-Makler in Deutschland", label2: "Beschäftigte im Luxussegment", label3: "Marktwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Elite Properties – Hamburg-Blankenese",
      challenge: "Das exklusive Büro verlor täglich Zeit mit unqualifizierten Anfragen für Objekte ab 2 Mio. € und konnte die internationale Käuferklientel nicht effizient in englischer Sprache bedienen.",
      solution: "KI-Qualifizierungs-Vorab-System mit Vermögensnachweis-Anforderung, Premium-Exposés auf Deutsch/Englisch/Arabisch und KI-Matching für internationale Käuferprofile.",
      result1: "Unqualifizierte Anfragen −91 %",
      result2: "Internationale Käufer +175 %",
      result3: "Durchschnittlicher Transaktionswert +18 %",
    },
    faqs: [
      { question: "Wie hilft KI im Luxusimmobilien-Segment diskret und professionell?", answer: "KI-Qualifizierung ist für den Interessenten unsichtbar — er erlebt einen professionellen Prozess, während im Hintergrund Budget, Finanzierungsnachweis und Kaufzeitplan geprüft werden." },
      { question: "Kann KI Luxus-Exposés auf internationalem Sprachniveau erstellen?", answer: "Ja — KI-Exposés für Luxusobjekte werden in Deutsch, Englisch und weiteren Sprachen erstellt. Ton, Bildsprache und Argumentation entsprechen dem Premium-Standard, den internationale Käufer erwarten." },
      { question: "Wie bewertet KI Ultrahochwert-Immobilien ohne vergleichbare Transaktionen?", answer: "KI berücksichtigt Lage, Alleinstellungsmerkmale, Ausstattungsmerkmale und internationale Vergleichsdaten für Luxusobjekte — und liefert eine fundierte Preisspanne, auch wenn Vergleichsobjekte rar sind." },
    ],
  },
  bautraeger: {
    slug: "bautraeger",
    name: "Bauträger",
    metaTitle: "KI Beratung für Bauträger | kiberatung.de",
    metaDescription: "KI-Lösungen für Bauträger: Projektkommunikation, Käufer-Management, automatische Fortschritts-Updates und Reservierungsverwaltung.",
    h1: "KI Automatisierung für Bauträger",
    intro: "Bauträger managen komplexe Projekte mit hunderten Käufern gleichzeitig: Reservierungsmanagement, Baufortschrittskommunikation, Abnahme-Koordination und laufende Käufer-Kommunikation — während gleichzeitig neue Projekte vermarktet werden. KI nimmt Bauträgern den Großteil dieser operativen Last ab: automatisierte Käufer-Updates, intelligentes Reservierungsmanagement und KI-gestützte Vermarktung.",
    stats: { betriebe: "6.500+", mitarbeiter: "112.000", markttrend: "+7,8 %", label1: "Bauträger in Deutschland", label2: "Beschäftigte im Segment", label3: "Neubauvolumen-Wachstum" },
    caseStudy: {
      restaurant: "Neubau Quartier GmbH – Stuttgart",
      challenge: "Der Bauträger hatte 150 Käufer in einem Neubauprojekt und musste sie manuell über Baufortschritte informieren, Abnahmen koordinieren und Sonderwunsch-Anfragen bearbeiten.",
      solution: "KI-Käufer-Portal mit automatischen Meilenstein-Updates, KI-Sonderwunsch-Koordination und intelligentes Abnahme-Buchungssystem.",
      result1: "Käufer-Kommunikation 90 % automatisiert",
      result2: "Sonderwunsch-Bearbeitung −65 %",
      result3: "Abnahme-Koordination −70 % Aufwand",
    },
    faqs: [
      { question: "Wie hilft KI Bauträgern bei der Kommunikation mit Käufern während der Bauphase?", answer: "KI versendet automatisch Baufortschritts-Updates mit Fotos und Meilensteinen an alle Käufer — ohne manuelle Arbeit. Jeder Käufer ist jederzeit informiert." },
      { question: "Kann KI Sonderwunsch-Anfragen von Käufern verwalten?", answer: "Ja — KI erfasst Sonderwünsche strukturiert, prüft Machbarkeit und Mehrkosten automatisch und kommuniziert Entscheidungen an Käufer und Handwerker." },
      { question: "Wie hilft KI beim Reservierungsmanagement für neue Bauträgerprojekte?", answer: "KI verwaltet die Interessentenliste, priorisiert nach Kaufbereitschaft und Finanzierungsnachweis und koordiniert den Reservierungsprozess — von der Anfrage bis zum Kaufvertrag." },
    ],
  },
  immobilienbewertung: {
    slug: "immobilienbewertung",
    name: "Immobilienbewertung",
    metaTitle: "KI Beratung für Immobilienbewertung | kiberatung.de",
    metaDescription: "KI-Lösungen für Immobilienbewertung: automatische Marktwertanalyse, Bewertungsberichte, Lage-Scoring und Preisprognosen.",
    h1: "KI Automatisierung für Immobilienbewertung",
    intro: "Immobilienbewertung ist zeit- und datenintensiv: Gutachter und Makler brauchen Zugang zu aktuellen Transaktionsdaten, Lageanalysen, Ausstattungsbewertungen und Markttrends — um fundierte Wertgutachten zu erstellen. KI-Lösungen transformieren die Bewertungspraxis: automatische Marktdatenanalyse, KI-Lage-Scoring und maschinell generierte Bewertungsberichte als Entscheidungsgrundlage für Gutachter und Makler.",
    stats: { betriebe: "8.500+", mitarbeiter: "42.000", markttrend: "+10,2 %", label1: "Immobilienbewertungsexperten in DE", label2: "Beschäftigte im Segment", label3: "Marktwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Westmark Bewertungen – Köln",
      challenge: "Das Bewertungsbüro erhielt monatlich 80–100 Bewertungsaufträge, musste aber für jedes Gutachten manuell Vergleichsdaten recherchieren — was pro Gutachten 3–4 Stunden extra kostete.",
      solution: "KI-Marktdaten-Aggregation mit automatischer Vergleichsobjektauswahl, KI-Lage-Scoring für alle deutschen Postleitzahlen und automatisch generierte Bewertungszusammenfassungen.",
      result1: "Recherche pro Gutachten −78 %",
      result2: "Gutachten-Kapazität +120 %",
      result3: "Bewertungsgenauigkeit +15 %",
    },
    faqs: [
      { question: "Wie genau sind KI-basierte Immobilienbewertungen?", answer: "KI-Bewertungen erreichen bei Standardobjekten eine Genauigkeit von ±5–8 % gegenüber tatsächlichen Transaktionspreisen. Sie dienen als fundierte Grundlage, nicht als Ersatz für das Gutachtergutachten." },
      { question: "Welche Daten nutzt KI für Immobilienbewertungen?", answer: "KI aggregiert aktuelle Angebotspreise, historische Transaktionen, Lage-Scoring (Infrastruktur, ÖPNV, Schulen), Mikrolage-Faktoren und Ausstattungsmerkmale für präzise Werteinschätzungen." },
      { question: "Kann KI Bewertungsberichte automatisch erstellen?", answer: "Ja — KI generiert strukturierte Bewertungszusammenfassungen mit Vergleichsobjekten, Markttrends und Wertbegründung. Diese dienen als Basis für das finale Gutachten." },
    ],
  },
  proptech: {
    slug: "proptech",
    name: "PropTech",
    metaTitle: "KI Beratung für PropTech-Unternehmen | kiberatung.de",
    metaDescription: "KI-Lösungen für PropTech: Produktintegration, KI-Feature-Entwicklung, Datenautomatisierung für Immobilientechnologie-Startups.",
    h1: "KI Integration für PropTech-Unternehmen",
    intro: "PropTech-Unternehmen nutzen Technologie, um den Immobilienmarkt zu transformieren — aber die Integration von KI-Funktionen in bestehende Produkte ist komplex. KI-Beratung für PropTechs umfasst die strategische Integration von NLP für Dokumentenverarbeitung, Computer Vision für Bildanalysen, Predictive Analytics für Preismodelle und Automatisierungs-APIs für Workflow-Optimierung.",
    stats: { betriebe: "1.200+", mitarbeiter: "28.000", markttrend: "+24,6 %", label1: "PropTech-Unternehmen in Deutschland", label2: "Beschäftigte im Segment", label3: "Marktwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "ImmoPlatform GmbH – Berlin",
      challenge: "Das PropTech wollte KI-basierte Preisschätzungen in seine Plattform integrieren, hatte aber intern keine ML-Expertise und benötigte schnelle Time-to-Market.",
      solution: "KI-Preisschätzungs-API-Integration, automatische Objektbeschreibungs-KI aus strukturierten Daten und KI-Matching für Käufer-Objekt-Empfehlungen.",
      result1: "KI-Feature live in 8 Wochen",
      result2: "Nutzerbindung +44 %",
      result3: "Premium-Abos +67 %",
    },
    faqs: [
      { question: "Wie unterstützt KI-Beratung PropTech-Produktteams?", answer: "Wir helfen PropTechs, KI-Funktionen strategisch zu priorisieren, die richtigen APIs und Modelle auszuwählen und Integration in bestehende Plattformen ohne massive interne ML-Ressourcen umzusetzen." },
      { question: "Welche KI-Features haben den größten Impact für PropTech-Produkte?", answer: "KI-Preisschätzung, automatische Exposé-Generierung, intelligentes Matching und Dokumenten-KI für Vertragsanalyse bringen den größten messbaren Mehrwert für Immobilientechnologie-Plattformen." },
      { question: "Wie schnell kann KI in ein bestehendes PropTech-Produkt integriert werden?", answer: "Einfache Integrationen (API-Anbindung, Textgenerierung) sind in 4–8 Wochen live. Komplexere ML-Modelle benötigen 3–6 Monate. Das erste Gespräch ist kostenlos." },
    ],
  },
  ferienvermietung: {
    slug: "ferienvermietung",
    name: "Ferienvermietung",
    metaTitle: "KI Beratung für Ferienvermietung & Ferienimmobilien | kiberatung.de",
    metaDescription: "KI-Lösungen für Ferienvermietung: dynamisches Preismanagement, Gäste-Kommunikationsbot, automatische Buchungsoptimierung.",
    h1: "KI Automatisierung für Ferienvermietung",
    intro: "Ferienvermietung ist ein 24/7-Geschäft: Buchungsanfragen kommen nachts, Gäste haben Fragen während des Aufenthalts und die Preisoptimierung zwischen Hochsaison und Nebensaison ist entscheidend für den Ertrag. KI-Lösungen für Ferienvermieter automatisieren alle diese Prozesse: dynamisches Preismanagement nach Nachfrage, automatischer Gäste-Bot für Kommunikation und Buchungsoptimierung über alle Plattformen.",
    stats: { betriebe: "180.000+", mitarbeiter: "95.000", markttrend: "+18,4 %", label1: "Ferienvermieter in Deutschland", label2: "Beschäftigte im Segment", label3: "Buchungswachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Küstentraum Vermietungen – Sylt",
      challenge: "Die Vermieterin bewirtschaftete 12 Ferienwohnungen auf Sylt und verbrachte täglich 3+ Stunden mit Gäste-Kommunikation, manueller Preisanpassung und Buchungsbestätigungen über 4 Portale.",
      solution: "KI-Gäste-Bot für alle Kommunikation vor, während und nach dem Aufenthalt, dynamisches KI-Preismanagement und Cross-Platform-Buchungssynchronisation.",
      result1: "Kommunikationsaufwand −82 %",
      result2: "Auslastung +28 %",
      result3: "Jahresumsatz +35 %",
    },
    faqs: [
      { question: "Wie hilft KI-Preismanagement Ferienvermietern?", answer: "KI analysiert Buchungsplattform-Daten, Konkurrenzpreise, saisonale Nachfrage und Events in der Region — und passt Ihre Preise täglich automatisch an, um Auslastung und Ertrag zu maximieren." },
      { question: "Kann KI die Gäste-Kommunikation für Ferienwohnungen übernehmen?", answer: "Ja — KI beantwortet Check-in-Fragen, WLAN-Codes, lokale Empfehlungen und Beschwerden automatisch und rund um die Uhr. Sie werden nur bei echten Sonderfällen eingebunden." },
      { question: "Lohnt sich KI für Ferienvermieter mit nur 1–3 Objekten?", answer: "Ja — besonders dynamisches Preismanagement und Gäste-Kommunikation rentieren sich auch bei kleinen Beständen durch höhere Auslastung und gesparene Zeit. Das erste Gespräch ist kostenlos." },
    ],
  },
  seniorenwohnen: {
    slug: "seniorenwohnen",
    name: "Seniorenwohnen",
    metaTitle: "KI Beratung für Seniorenwohnen & Betreutes Wohnen | kiberatung.de",
    metaDescription: "KI-Lösungen für Seniorenwohnen: Anfragenmanagement, Wartelistenverwaltung, Angehörigen-Kommunikation und Belegungsoptimierung.",
    h1: "KI Automatisierung für Seniorenwohnen & Betreutes Wohnen",
    intro: "Anbieter von Seniorenwohnen und Betreutem Wohnen stehen vor einzigartigen Herausforderungen: emotionalen Entscheidungsprozessen, langen Entscheidungszyklen, Angehörigen-Kommunikation und komplexen Wartelistenverwaltungen. KI-Lösungen unterstützen sensibel und effizient: automatisiertes Anfragen-Management, intelligente Wartelistenverwaltung und KI-gestützte Angehörigen-Kommunikation — mit dem nötigen Einfühlungsvermögen.",
    stats: { betriebe: "11.000+", mitarbeiter: "680.000", markttrend: "+12,7 %", label1: "Seniorenwohnen-Anbieter in Deutschland", label2: "Beschäftigte im Segment", label3: "Nachfragewachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Sonnenhof Betreutes Wohnen – Freiburg",
      challenge: "Die Einrichtung hatte 120 Anfragen monatlich für 15–20 freiwerdende Plätze. Die Bearbeitung, Wartelistenverwaltung und Angehörigen-Kommunikation kostete das Team täglich 4+ Stunden.",
      solution: "KI-Anfragen-Bot für erste Orientierungsgespräche, intelligentes Wartelistensystem mit automatischen Status-Updates und Angehörigen-Kommunikationsautomatisierung.",
      result1: "Anfragen-Bearbeitung −70 %",
      result2: "Angehörigen-Zufriedenheit +45 %",
      result3: "Belegungsrate 98 %",
    },
    faqs: [
      { question: "Wie hilft KI sensibel bei der Kommunikation mit Senioren und Angehörigen?", answer: "KI-Kommunikation für Seniorenwohnen ist speziell auf einfühlsame Sprache ausgelegt: klare Informationen, verständliche Antworten und professioneller Ton — sowohl für Senioren als auch für Angehörige." },
      { question: "Kann KI Wartelisten für Seniorenwohn-Einrichtungen verwalten?", answer: "Ja — KI verwaltet Wartelisten strukturiert, informiert Wartelistenplätze automatisch über ihren Status und koordiniert Voranmeldegespräche — transparent und DSGVO-konform." },
      { question: "Lohnt sich KI für kleinere Seniorenwohneinrichtungen?", answer: "Ja — besonders Anfragen-Management und Angehörigen-Kommunikation rentieren sich auch für kleinere Einrichtungen. Das erste Gespräch zeigt, was für Ihre Situation sinnvoll ist." },
    ],
  },
};

export function getVariantBySlug(slug: string): VariantData | undefined {
  return variantenMap[slug];
}

export const VARIANTEN_SLUGS = Object.keys(variantenMap);
