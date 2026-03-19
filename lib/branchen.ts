export interface Branche {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  challenges: { title: string; desc: string }[];
  loesungen: { icon: string; title: string; desc: string; stat: string; statLabel: string }[];
  svgPath: string; // for Branchen.tsx icon
  accentColor: string;
  visualStyle: "warm" | "industrial" | "clean" | "tech" | "trust" | "luxury" | "dynamic" | "professional";
  caseStudy: {
    firma: string;
    ergebnis: string;
    zitat: string;
  };
  testimonial: {
    name: string;
    rolle: string;
    text: string;
  };
  stadtIntros: Record<string, string>;
}

export const BRANCHEN: Branche[] = [
  {
    slug: "gastronomie",
    name: "Gastronomie",
    svgPath: "M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3",
    accentColor: "#f59e0b",
    visualStyle: "warm",
    metaTitle: "KI Beratung für Gastronomie & Restaurants | kiberatung.de",
    metaDescription: "KI-Lösungen für Restaurants, Hotels und Cafés: Reservierungsbot, automatische Bewertungsantworten, Speisekarten-KI. Kostenlose Erstberatung.",
    heroTitle: "KI BERATUNG FÜR GASTRONOMIE",
    heroSubtitle: "Mehr Tische, weniger Aufwand. KI übernimmt Reservierungen, beantwortet Bewertungen und optimiert Ihre Speisekarte — damit Sie sich auf Ihre Gäste konzentrieren.",
    challenges: [
      { title: "Personalmangel", desc: "Jeder Anruf, jede Anfrage kostet Zeit. KI übernimmt Routineaufgaben sofort und rund um die Uhr." },
      { title: "Bewertungsflut", desc: "Hunderte Google-Bewertungen unbeantwortet? KI antwortet professionell, individuell und in Sekunden." },
      { title: "Sprachbarrieren", desc: "Internationale Gäste, eine Karte. KI übersetzt Ihre Speisekarte automatisch in mehrere Sprachen." },
    ],
    loesungen: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>`, title: "Reservierungsbot", desc: "24/7 automatische Tischbuchung per WhatsApp, Telefon oder Website. Keine verpassten Reservierungen mehr.", stat: "−80%", statLabel: "Telefonanfragen" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`, title: "Bewertungsmanagement", desc: "KI erkennt Ton und Inhalt jeder Bewertung und antwortet individuell — auf Deutsch, Englisch und mehr.", stat: "100%", statLabel: "Bewertungen beantwortet" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`, title: "Speisekarten-KI", desc: "Automatische Übersetzung, Allergen-Kennzeichnung und saisonale Anpassung — kein manueller Aufwand.", stat: "6", statLabel: "Sprachen gleichzeitig" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>`, title: "Bestell-Automatisierung", desc: "Digitale Bestellprozesse und KI-gestützte Lagerverwaltung mit automatischer Nachbestellung.", stat: "−35%", statLabel: "Lebensmittelverschwendung" },
    ],
    caseStudy: {
      firma: "Trattoria Sole, Frankfurt",
      ergebnis: "−78 % Telefonanfragen, Umsatz +22 %",
      zitat: "Unser KI-Bot bucht Tische, wenn wir schlafen. Die Gäste merken keinen Unterschied — aber wir merken, dass morgens der Kalender voll ist.",
    },
    testimonial: {
      name: "Marco Ferretti",
      rolle: "Inhaber, Ristorante da Marco, Hamburg",
      text: "Ich hatte Angst, dass Technik uns unpersönlich macht. Aber die Gäste bemerken gar nicht, dass ein Bot antwortet. Sie buchen einfach — und kommen wieder.",
    },
    stadtIntros: {
      muenchen: "München hat mehr Restaurants pro Einwohner als jede andere deutsche Großstadt. Im Wettbewerb um Tischreservierungen entscheidet Geschwindigkeit — und KI bucht rund um die Uhr.",
      berlin: "Berlin ist die Gastronomiehauptstadt Deutschlands mit über 7.000 Restaurants. Wer in diesem Markt bestehen will, braucht mehr als gutes Essen: Er braucht smarte Automatisierung.",
      hamburg: "Die Hansestadt lockt jährlich Millionen Touristen und hat eine der aktivsten Restaurant-Szenen im Norden. KI hilft Hamburger Gastronomen, internationale Gäste nahtlos zu betreuen.",
      frankfurt: "Als Finanzmetropole ist Frankfurt ein Hoch-Frequenz-Markt für Business-Lunches und After-Work-Gastronomie. KI-gestützte Reservierungssysteme sind hier kein Luxus, sondern Standard.",
      koeln: "Köln vereint rheinische Gastlichkeit mit Messebetrieb und Tourismus. Gerade in Stoßzeiten rund um Veranstaltungen ist ein KI-Reservierungsbot Gold wert.",
      stuttgart: "Stuttgart hat eine wachsende gehobene Gastronomieszene mit anspruchsvollen Gästen. KI-Bewertungsmanagement hilft, den Ruf konsequent zu pflegen.",
      duesseldorf: "Düsseldorf ist bekannt für seine japanische Community und internationale Küche. Mehrsprachige KI-Systeme sprechen Gäste in ihrer Muttersprache an.",
      leipzig: "Leipzig wächst rasant — und mit der Stadt wächst die Gastronomie. Junges Publikum erwartet digitale Buchung und schnelle Kommunikation über WhatsApp.",
      nuernberg: "Nürnberg vereint Traditionsgastronomie mit moderner Eventkultur. KI hilft, Stammgäste zu binden und neue Zielgruppen über digitale Kanäle zu erreichen.",
      dresden: "Dresden profitiert vom Tourismus rund um Altstadt und Kultureinrichtungen. KI-Übersetzungslösungen für internationale Gäste sind hier besonders wertvoll.",
    },
  },
  {
    slug: "handwerk",
    name: "Handwerk",
    svgPath: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    accentColor: "#ef4444",
    visualStyle: "industrial",
    metaTitle: "KI Beratung für Handwerksbetriebe | kiberatung.de",
    metaDescription: "KI-Lösungen für Handwerker: automatische Angebotserstellung, Terminplanung, Kundenkommunikation. Weniger Büro, mehr Baustelle.",
    heroTitle: "KI BERATUNG FÜR HANDWERK",
    heroSubtitle: "Kein Handwerker will stundenlang Angebote tippen. KI erledigt Büroarbeit in Minuten — damit Sie wieder auf die Baustelle können.",
    challenges: [
      { title: "Verwaltungsaufwand", desc: "Angebote, Rechnungen, Terminplanung — KI übernimmt Büroarbeit automatisch und fehlerfrei." },
      { title: "Erreichbarkeit", desc: "Anfragen kommen rein wenn Sie auf der Baustelle sind. KI antwortet sofort und bucht Termine." },
      { title: "Fachkräftemangel", desc: "Mit KI-gestützter Planung schaffen zwei Mitarbeiter die Arbeit von drei — ohne Überstunden." },
    ],
    loesungen: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`, title: "Angebots-KI", desc: "Foto hochladen → fertiges Angebot in 2 Minuten. Kalkulation, Positionen und Layout automatisch generiert.", stat: "2 Min", statLabel: "pro Angebot" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>`, title: "Terminplanung", desc: "KI plant Routen, bucht Termine und schickt automatische Erinnerungen an Kunden — ohne Telefon.", stat: "−60%", statLabel: "Planungsaufwand" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`, title: "Kundenkommunikation", desc: "WhatsApp-Bot antwortet auf Anfragen, qualifiziert Kunden und übergibt nur ernsthafte Aufträge an Sie.", stat: "24/7", statLabel: "erreichbar" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`, title: "Aufmaß per KI", desc: "Fotos aus der App direkt in Aufmaßblätter verwandeln. Kein manuelles Ausmessen mehr.", stat: "−50%", statLabel: "Fehler bei Aufmaß" },
    ],
    caseStudy: {
      firma: "Elektro Müller GmbH, Stuttgart",
      ergebnis: "−78 % Angebotszeit, Auftragsquote +31 %",
      zitat: "Früher habe ich abends zwei Stunden getippt. Heute mache ich ein Foto, und das Angebot ist in zwei Minuten fertig. Das hat unser Büro verändert.",
    },
    testimonial: {
      name: "Thomas Brandt",
      rolle: "Meister, Heizung Sanitär Brandt, Dortmund",
      text: "Mein WhatsApp-Bot qualifiziert Anfragen, bevor ich sie überhaupt sehe. Ich bekomme nur noch ernsthafte Aufträge — kein Zeitverlust mehr mit unklaren Anfragen.",
    },
    stadtIntros: {
      muenchen: "München ist einer der stärksten Handwerksstandorte Deutschlands. Über 35.000 Betriebe versorgen die wachsende Metropolregion — und KI hilft, den steigenden Auftragseingang zu bewältigen.",
      berlin: "Die Hauptstadt boomt — Sanierungen, Neubauten, Energetik. Berliner Handwerker, die KI einsetzen, reagieren schneller auf Anfragen und verlieren keine Kunden mehr ans Telefon.",
      hamburg: "Hamburgs Hafen und Logistikinfrastruktur bringen ständig neue Bauprojekte. Handwerker, die KI für Terminplanung nutzen, koordinieren komplexe Großprojekte effizienter.",
      frankfurt: "Als Finanzzentrum hat Frankfurt einen hohen Sanierungsbedarf in Bürogebäuden und Wohnungen. KI-Angebotssoftware hilft, Ausschreibungen schnell und präzise zu beantworten.",
      koeln: "Köln vereint historische Altbausubstanz mit modernem Wohnungsbau. Der hohe Renovierungsbedarf macht KI-gestützte Angebotstools zu einem echten Wettbewerbsvorteil.",
      stuttgart: "Die Automobilregion Stuttgart investiert massiv in klimafreundliche Sanierungen. Handwerker mit KI-Unterstützung profitieren überproportional von Förderprogramm-Aufträgen.",
      duesseldorf: "Düsseldorfs Immobilienmarkt ist einer der teuersten Deutschlands. Schnelle, professionelle Angebote sind hier der Schlüssel zu hochwertigen Aufträgen.",
      leipzig: "Leipzig wächst schneller als jede andere ostdeutsche Großstadt. Der Boom bei Altbausanierungen schafft enorme Nachfrage — KI hilft, dieses Volumen zu stemmen.",
      nuernberg: "Nürnbergs Mittelstand investiert kontinuierlich in Betriebsgebäude. Handwerker, die digital aufgestellt sind, haben bei Gewerbeaufträgen klaren Vorsprung.",
      dresden: "Dresden verbindet Industriegeschichte mit modernem Wohnungsbau. KI-gestützte Routenplanung ist hier besonders wertvoll, da die Stadt über eine große Fläche verteilt ist.",
    },
  },
  {
    slug: "mittelstand",
    name: "Mittelstand",
    svgPath: "M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    accentColor: "#3b82f6",
    visualStyle: "tech",
    metaTitle: "KI Beratung für den Mittelstand | kiberatung.de",
    metaDescription: "KI-Lösungen für mittelständische Unternehmen: Prozessautomatisierung, KI-Analysen, DSGVO-konforme Implementierung.",
    heroTitle: "KI BERATUNG FÜR DEN MITTELSTAND",
    heroSubtitle: "Mittelständische Unternehmen brauchen keine Enterprise-KI. Sie brauchen die richtige KI — schnell, bezahlbar und sofort wirksam.",
    challenges: [
      { title: "Ressourcenknappheit", desc: "KI-Projekte scheitern oft an fehlendem IT-Personal. Wir liefern betriebsfertige Lösungen ohne eigenes KI-Team." },
      { title: "Datensilos", desc: "Ihre Daten stecken in ERP, CRM und Excel. KI verbindet alle Quellen zu einem handlungsfähigen System." },
      { title: "Wettbewerbsdruck", desc: "Große Konzerne investieren Millionen in KI. Mittelständler brauchen schnellere, günstigere Einstiegspunkte." },
    ],
    loesungen: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`, title: "Prozessautomatisierung", desc: "Routineaufgaben in Einkauf, Buchhaltung und Vertrieb automatisieren — ohne teures Custom-Development.", stat: "+40%", statLabel: "Produktivität" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`, title: "KI-Analysen", desc: "Echtzeit-Insights aus Ihren Geschäftsdaten. Entscheidungen auf Basis von Fakten, nicht Bauchgefühl.", stat: "3×", statLabel: "schnellere Entscheidungen" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`, title: "KI-Vertriebsassistent", desc: "Lead-Scoring, automatisierte Follow-ups und intelligente Angebotserstellung im CRM.", stat: "+25%", statLabel: "Abschlussrate" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, title: "DSGVO-konforme KI", desc: "Alle Lösungen entwickelt für den deutschen Markt — AI Act, DSGVO und branchenspezifische Regularien inklusive.", stat: "100%", statLabel: "Compliance-sicher" },
    ],
    caseStudy: {
      firma: "Maschinenbau Kessler GmbH, Ulm",
      ergebnis: "+40 % Produktivität im Vertrieb, Angebote in 3 statt 15 Tagen",
      zitat: "Wir haben sechs Monate gezögert. Dann haben wir angefangen — und nach vier Wochen fragten wir uns, warum wir so lange gewartet haben.",
    },
    testimonial: {
      name: "Sabine Kessler",
      rolle: "Geschäftsführerin, Kessler Maschinenbau GmbH, Ulm",
      text: "KI hat uns nicht ersetzt, sondern befreit. Unser Vertriebsteam macht jetzt Strategie statt Datenpflege. Die Zahlen sprechen für sich.",
    },
    stadtIntros: {
      muenchen: "München ist Heimat zahlreicher mittelständischer Hidden Champions — von Maschinenbau bis Software. KI-Lösungen helfen Münchner Unternehmen, international wettbewerbsfähig zu bleiben.",
      berlin: "Berlin hat sich zur Startup- und Technologiehochburg entwickelt. Mittelständler, die hier KI einsetzen, finden hervorragende Partnernetzwerke und Fachkräfte.",
      hamburg: "Hamburgs Mittelstand ist stark exportorientiert. KI-Analysen und automatisierte Prozesse verschaffen Unternehmen im globalen Wettbewerb entscheidende Zeitvorteile.",
      frankfurt: "Als europäisches Finanzzentrum bietet Frankfurt Mittelständlern engen Zugang zu Kapital und Partnern. KI-gestützte Prozesse machen Unternehmen für Investoren attraktiver.",
      koeln: "Kölns Mittelstand ist vielfältig — von Medien über Chemie bis Maschinenbau. KI-Lösungen sind hier skalierbar über verschiedene Branchen einsetzbar.",
      stuttgart: "Die Automobilregion Stuttgart wandelt sich. Mittelständler, die früh auf KI setzen, sichern sich Zulieferaufträge in der Mobilitätswende.",
      duesseldorf: "Düsseldorf ist ein führender Messestandort. Mittelständler nutzen KI für Lead-Qualifizierung und Messenachfassung — und verwandeln Kontakte in Kunden.",
      leipzig: "Leipzig entwickelt sich zur ostdeutschen Wirtschaftsdrehscheibe. KI senkt die Markteintrittskosten und gibt kleinen Mittelständlern Zugang zu großen Märkten.",
      nuernberg: "Nürnberg ist Logistik- und Technologiezentrum. Mittelständler profitieren von KI besonders in Einkauf, Disposition und Qualitätskontrolle.",
      dresden: "Dresden vereint Halbleitertechnologie und klassischen Mittelstand. KI-Lösungen für Prozessautomatisierung sind hier besonders gefragt — und erprobt.",
    },
  },
  {
    slug: "einzelhandel",
    name: "Einzelhandel",
    svgPath: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0",
    accentColor: "#8b5cf6",
    visualStyle: "dynamic",
    metaTitle: "KI Beratung für Einzelhandel | kiberatung.de",
    metaDescription: "KI-Lösungen für Einzelhändler: Bestandsoptimierung, personalisierte Kundenansprache und automatisiertes Marketing.",
    heroTitle: "KI BERATUNG FÜR EINZELHANDEL",
    heroSubtitle: "Online-Riesen haben riesige KI-Budgets. Lokale Händler brauchen smarte Lösungen — erschwinglich, praxiserprobt und sofort einsetzbar.",
    challenges: [
      { title: "Online-Konkurrenz", desc: "Amazon kennt jeden Kunden. Mit KI kennen auch Sie Ihre Kunden — und sprechen sie genau richtig an." },
      { title: "Lagerkosten", desc: "Zu viel vom Falschen, zu wenig vom Richtigen. KI prognostiziert Nachfrage und optimiert Ihren Einkauf." },
      { title: "Kundenbindung", desc: "Einmalige Käufer zu Stammkunden machen — mit personalisierten KI-Angeboten zum richtigen Zeitpunkt." },
    ],
    loesungen: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>`, title: "Bestandsoptimierung", desc: "KI analysiert Verkaufsdaten, Saison und Trends — und empfiehlt automatisch, was wann bestellt werden soll.", stat: "−30%", statLabel: "Lagerkosten" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`, title: "Personalisierung", desc: "Jeder Kunde bekommt maßgeschneiderte Angebote — per E-Mail, App oder am POS-System.", stat: "+35%", statLabel: "Wiederkaufrate" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`, title: "Sales-Analysen", desc: "Echtzeit-Dashboards zeigen welche Produkte, Zeiten und Filialen am besten performen.", stat: "Live", statLabel: "Verkaufsdaten" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`, title: "KI-Marketing", desc: "Automatische Newsletter, Social-Posts und Aktions-E-Mails — generiert und versendet ohne manuellen Aufwand.", stat: "×3", statLabel: "Marketing-Output" },
    ],
    caseStudy: {
      firma: "Modehaus Reiter, Nürnberg",
      ergebnis: "−30 % Lagerkosten, Wiederkaufrate +35 %",
      zitat: "Früher haben wir nach Bauchgefühl bestellt. Heute sagt uns die KI, welche Größen in welcher Menge in drei Wochen gefragt sein werden. Wir haben kaum noch Restposten.",
    },
    testimonial: {
      name: "Julia Reiter",
      rolle: "Inhaberin, Modehaus Reiter, Nürnberg",
      text: "Das KI-Beratungsgespräch hat mir gezeigt, dass ich gar nicht groß sein muss, um KI zu nutzen. Schon ein kleines Personalisierungsmodul hat unsere Newsletter-Öffnungsrate verdoppelt.",
    },
    stadtIntros: {
      muenchen: "München ist eine der kaufkraftstärksten Städte Europas. Einzelhändler, die mit KI personalisieren, erreichen ein Publikum, das bereit ist, für echten Mehrwert zu zahlen.",
      berlin: "Berlin hat eine der vielfältigsten Einzelhandelsszenen Deutschlands. KI hilft lokalen Händlern, in einem fragmentierten Markt präzise die richtigen Zielgruppen anzusprechen.",
      hamburg: "Hamburgs Innenstadt gehört zu den umsatzstärksten Einkaufsmeilen Nordeuropas. KI-gestützte Bestandsoptimierung reduziert Kapitalbindung und erhöht die Marge.",
      frankfurt: "Frankfurt hat einen hohen Anteil internationaler Kundschaft. Mehrsprachige KI-Kommunikation und personalisierte Angebote sind hier ein echter Differenziator.",
      koeln: "Köln ist bekannt für seinen starken lokalen Einzelhandel, der gegen Online-Riesen besteht. KI gibt kleinen Händlern das Werkzeug, das Amazon schon lange nutzt.",
      stuttgart: "Stuttgarts wohlhabende Kundschaft hat hohe Erwartungen an Service und Relevanz. KI-Personalisierung schafft das Einkaufserlebnis, das Stammkunden bindet.",
      duesseldorf: "Düsseldorf gilt als Modemetropole Deutschlands. Fashion-Händler setzen KI für Trendanalysen und präzises Sortimentsmanagement ein.",
      leipzig: "Leipzigs junges und wachsendes Stadtpublikum ist digital-affin. KI-Marketing und personalisierte Apps treffen hier den Nerv der Zielgruppe.",
      nuernberg: "Nürnbergs Einzelhandel ist geprägt von Familienunternehmen mit langer Tradition. KI ermöglicht es, Stammkundenwissen zu digitalisieren und skalierbar einzusetzen.",
      dresden: "Dresden verbindet Touristenströme mit einer treuen lokalen Stammkundschaft. KI-Analysen helfen, beide Segmente effizient zu bedienen.",
    },
  },
  {
    slug: "gesundheitswesen",
    name: "Gesundheitswesen",
    svgPath: "M22 12h-4l-3 9L9 3l-3 9H2",
    accentColor: "#14b8a6",
    visualStyle: "clean",
    metaTitle: "KI Beratung für Arztpraxen & Gesundheitswesen | kiberatung.de",
    metaDescription: "KI-Lösungen für Arztpraxen und Gesundheitsdienstleister: Terminmanagement, Dokumentation und Patientenkommunikation — DSGVO-konform.",
    heroTitle: "KI BERATUNG FÜR DAS GESUNDHEITSWESEN",
    heroSubtitle: "Ärzte sollen heilen, nicht dokumentieren. KI übernimmt Terminvergabe, Nachsorge und Verwaltungsarbeit — DSGVO-konform und zuverlässig.",
    challenges: [
      { title: "Dokumentationsflut", desc: "Arztbriefe, Diagnosen, Abrechnungen — KI diktiert, transkribiert und strukturiert in Echtzeit." },
      { title: "Terminausfälle", desc: "No-Shows kosten bares Geld. KI sendet automatisch Erinnerungen und füllt freie Slots selbstständig." },
      { title: "Datenschutz", desc: "Alle KI-Lösungen auf deutschen Servern, DSGVO-konform und nach den Vorgaben der Ärztekammer." },
    ],
    loesungen: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>`, title: "Terminmanagement", desc: "Patienten buchen online, KI priorisiert nach Dringlichkeit und füllt Lücken automatisch auf.", stat: "−40%", statLabel: "No-Show-Rate" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`, title: "KI-Dokumentation", desc: "Spracheingabe → strukturierter Arztbrief in 60 Sekunden. Spart 2–3 Stunden täglich.", stat: "2–3h", statLabel: "täglich eingespart" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`, title: "Patientenkommunikation", desc: "Automatische Erinnerungen, Nachsorge-Checklisten und FAQ-Bot — mehrsprachig.", stat: "24/7", statLabel: "Patientenservice" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, title: "DSGVO-konforme KI", desc: "Hosting auf deutschen Servern, verschlüsselte Übertragung, keine Daten an US-Anbieter.", stat: "100%", statLabel: "DSGVO-konform" },
    ],
    caseStudy: {
      firma: "HNO-Praxis Dr. Hamann, Köln",
      ergebnis: "No-Show-Rate −42 %, 2,5 h täglich eingespart",
      zitat: "Die KI-Dokumentation hat mir drei Abendstunden zurückgegeben. Ich diktiere kurz — und der strukturierte Brief ist fertig. Das klingt nach wenig, aber es verändert alles.",
    },
    testimonial: {
      name: "Dr. Monika Hamann",
      rolle: "Fachärztin für HNO, Köln",
      text: "Ich war skeptisch, ob KI im sensiblen Gesundheitsbereich funktioniert. Die DSGVO-Konformität und das deutsche Server-Hosting haben mein Vertrauen gewonnen. Heute würde ich nie mehr ohne arbeiten.",
    },
    stadtIntros: {
      muenchen: "München ist einer der größten Gesundheitsstandorte Deutschlands mit über 8.000 niedergelassenen Ärzten. KI hilft Münchner Praxen, die steigende Nachfrage ohne mehr Personal zu bewältigen.",
      berlin: "Berlin hat über 12.000 niedergelassene Ärzte und eine der diversesten Patientenpopulationen Deutschlands. Mehrsprachige KI-Systeme sind hier kein Luxus, sondern Notwendigkeit.",
      hamburg: "Hamburgs Gesundheitsmarkt wächst durch eine älter werdende Bevölkerung. KI-gestützte Nachsorge und Erinnerungssysteme entlasten Praxen nachhaltig.",
      frankfurt: "Frankfurt hat einen hohen Anteil internationaler Patienten. KI-Kommunikation in mehreren Sprachen verbessert die Versorgungsqualität und reduziert Missverständnisse.",
      koeln: "Köln ist mit mehreren Universitätskliniken ein Zentrum der medizinischen Forschung. Praxen profitieren von KI-Dokumentation, die Forschungsstandards erfüllt.",
      stuttgart: "Stuttgart hat einen überdurchschnittlich gesunden Arbeitsmarkt — und überdurchschnittliche Ansprüche der Patienten. KI-Terminmanagement setzt neue Standards.",
      duesseldorf: "Düsseldorf beherbergt zahlreiche Facharztzentren und MVZ. Koordinationssoftware mit KI optimiert die Zusammenarbeit über Fachrichtungen hinweg.",
      leipzig: "Leipzig entwickelt sich zum Gesundheitsstandort Mitteldeutschlands. Praxen, die früh auf KI setzen, sichern sich Nachwuchsärzte — die digital erwarten.",
      nuernberg: "Nürnbergs Praxen kämpfen wie überall mit Terminengpässen. KI-gestützte Selbstbuchung und Triage reduzieren Telefonlast erheblich.",
      dresden: "Dresdens Universitätsmedizin setzt Maßstäbe. Praxen in der Region profitieren von erprobten KI-Lösungen aus der Uniklinikforschung.",
    },
  },
  {
    slug: "immobilien",
    name: "Immobilien",
    svgPath: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10",
    accentColor: "#d97706",
    visualStyle: "luxury",
    metaTitle: "KI Beratung für die Immobilienbranche | kiberatung.de",
    metaDescription: "KI-Lösungen für Immobilienmakler: Exposé-Generator, Interessenten-Chatbot, automatische Marktanalysen.",
    heroTitle: "KI BERATUNG FÜR IMMOBILIEN",
    heroSubtitle: "Exposés in 10 Minuten, Besichtigungsanfragen automatisch beantwortet, Marktpreise in Echtzeit — KI macht Ihr Maklerbüro effizienter.",
    challenges: [
      { title: "Exposé-Erstellung", desc: "Stundenlange Texte für jedes Objekt. KI generiert professionelle Exposés aus Fotos und Basisdaten." },
      { title: "Anfragenflut", desc: "Hunderte Interessentenanfragen manuell beantworten — KI qualifiziert und antwortet automatisch." },
      { title: "Marktüberblick", desc: "Preise schwanken täglich. KI analysiert den lokalen Markt in Echtzeit und gibt fundierte Empfehlungen." },
    ],
    loesungen: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`, title: "Exposé-Generator", desc: "Fotos hochladen + Daten eingeben → professionelles Exposé in 10 Minuten fertig.", stat: "10 Min", statLabel: "pro Exposé" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`, title: "Interessenten-Bot", desc: "KI qualifiziert Anfragen, beantwortet Fragen und bucht Besichtigungstermine automatisch.", stat: "24/7", statLabel: "erreichbar" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`, title: "Marktanalyse", desc: "Echtzeitdaten zu Preisen, Angebot und Nachfrage in Ihrer Region — als automatischer Wochenbericht.", stat: "Live", statLabel: "Marktdaten" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`, title: "Objektbewertung", desc: "KI bewertet Objekte anhand von Marktdaten, Lage und Ausstattung — in Minuten statt Tagen.", stat: "−80%", statLabel: "Bewertungszeit" },
    ],
    caseStudy: {
      firma: "Immo Kern, München",
      ergebnis: "Exposé-Zeit −85 %, 3× mehr Besichtigungen pro Woche",
      zitat: "Früher habe ich pro Objekt zwei bis drei Stunden für das Exposé gebraucht. Heute sind es zehn Minuten — und das Ergebnis ist besser als vorher.",
    },
    testimonial: {
      name: "Stefan Kern",
      rolle: "Inhaber, Immo Kern Immobilien, München",
      text: "Der Interessenten-Bot qualifiziert rund um die Uhr. Wenn ich morgens ins Büro komme, habe ich bereits vorgebuchte Besichtigungen. Das hat mein Geschäft transformiert.",
    },
    stadtIntros: {
      muenchen: "München ist einer der teuersten Immobilienmärkte Europas. KI-Marktanalysen geben Maklern die Präzision, die in diesem hochpreisigen Segment nötig ist.",
      berlin: "Berlins Immobilienmarkt hat sich in zehn Jahren verdreifacht. KI-gestützte Preisbewertung hilft Maklern, in einem volatilen Markt fundiert zu beraten.",
      hamburg: "Hamburg hat einen der stabilsten Immobilienmärkte Deutschlands. KI-Tools für Exposé-Erstellung und Interessentenqualifizierung erhöhen die Effizienz signifikant.",
      frankfurt: "Frankfurt ist ein internationaler Immobilienmarkt mit vielen ausländischen Investoren. Mehrsprachige KI-Kommunikation ist hier ein entscheidender Vorteil.",
      koeln: "Kölns Immobilienmarkt boomt durch anhaltenden Zuzug. KI-Bestandsanalysen helfen Maklern, Angebote schneller zu matchen als die Konkurrenz.",
      stuttgart: "Stuttgarts Immobilienmarkt ist geprägt von hoher Nachfrage und geringem Angebot. Schnelle Exposés und KI-Preisbewertung sichern den Abschluss.",
      duesseldorf: "Düsseldorf zieht internationale Unternehmen an — und ihre Mitarbeiter suchen Wohnungen. KI-gestützte Vermittlung passt Anforderungen präzise auf Angebote ab.",
      leipzig: "Leipzig ist das neue Investorenziel in Ostdeutschland. KI-Marktdaten zeigen, welche Stadtteile die stärkste Wertsteigerung versprechen.",
      nuernberg: "Nürnbergs Immobilienmarkt ist solide und stetig. KI-Objektbewertung gibt Käufern und Verkäufern Vertrauen in Preisverhandlungen.",
      dresden: "Dresden profitiert vom Tourismus und wachsender IT-Branche. Kurzzeitvermietungen und Gewerbeimmobilien sind KI-optimierte Wachstumsfelder.",
    },
  },
  {
    slug: "logistik",
    name: "Logistik",
    svgPath: "M1 3h15v13H1zM16 8l4 0 3 3v5h-7V8zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
    accentColor: "#f97316",
    visualStyle: "dynamic",
    metaTitle: "KI Beratung für Logistik & Supply Chain | kiberatung.de",
    metaDescription: "KI-Lösungen für Logistikunternehmen: Routenoptimierung, Predictive Maintenance und automatisierte Lagerverwaltung.",
    heroTitle: "KI BERATUNG FÜR LOGISTIK",
    heroSubtitle: "Jede Stunde Stillstand kostet. KI-gestützte Routen, vorausschauende Wartung und automatisierte Prozesse halten Ihre Flotte am Laufen.",
    challenges: [
      { title: "Routenkomplexität", desc: "Hunderte Stopps, schwankende Verkehrslage, Zeitfenster. KI berechnet täglich die optimale Route in Sekunden." },
      { title: "Fahrzeugausfälle", desc: "Ungeplante Reparaturen stoppen den Betrieb. Predictive Maintenance erkennt Defekte Wochen im Voraus." },
      { title: "Personalkosten", desc: "Manuelle Tourenplanung kostet Stunden. KI übernimmt das automatisch — täglich, fehlerfrei." },
    ],
    loesungen: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`, title: "Routenoptimierung", desc: "KI berechnet täglich die schnellste, günstigste Route — inklusive Echtzeit-Staus und Zeitfenstervorgaben.", stat: "−20%", statLabel: "Kraftstoffkosten" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`, title: "Predictive Maintenance", desc: "Sensordaten analysieren, Verschleiß prognostizieren, Wartung planen — bevor der Lkw liegen bleibt.", stat: "−50%", statLabel: "Fahrzeugausfälle" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`, title: "Lagerverwaltung", desc: "Automatische Einlagerung, Bestandsprognosen und Kommissionier-Optimierung mit KI.", stat: "+30%", statLabel: "Lagerumschlag" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`, title: "Auto-Dokumentation", desc: "Lieferscheine, Frachtbriefe und Zolldokumente automatisch generiert und archiviert.", stat: "−70%", statLabel: "Dokumentationsaufwand" },
    ],
    caseStudy: {
      firma: "Transporthaus Wegner, Hamburg",
      ergebnis: "−22 % Kraftstoffkosten, Fahrzeugausfälle halbiert",
      zitat: "Predictive Maintenance klingt nach Zukunft. Aber bei uns hat es in den ersten drei Monaten zwei Lkw-Ausfälle verhindert, die uns je 8.000 Euro Schaden erspart haben.",
    },
    testimonial: {
      name: "Klaus Wegner",
      rolle: "Geschäftsführer, Transporthaus Wegner, Hamburg",
      text: "Die Routenoptimierungs-KI hat unsere Disposition verändert. Was früher drei Stunden manuelle Planung war, ist jetzt zehn Minuten Kontrolle. Meine Dispatcher können sich endlich auf das Wichtige konzentrieren.",
    },
    stadtIntros: {
      muenchen: "München ist Süddeutschlands wichtigstes Logistikzentrum mit direktem Autobahnanschluss nach Italien, Österreich und Osteuropa. KI-Routenoptimierung reduziert Kraftstoffkosten auf diesen langen Strecken erheblich.",
      berlin: "Berlin hat sich zur Logistikdrehscheibe Osteuropas entwickelt. KI-gestützte Lagerverwaltung und Predictive Maintenance sind hier entscheidend für Just-in-Time-Lieferungen.",
      hamburg: "Der Hamburger Hafen ist Deutschlands Tor zur Welt. Logistikunternehmen, die KI für Dokumentenautomatisierung nutzen, senken Zoll- und Abfertigungszeiten signifikant.",
      frankfurt: "Frankfurt ist Europas Luft-Logistikzentrum. KI-Disposition für zeitkritische Sendungen ist hier kein Bonus, sondern Grundvoraussetzung für Wettbewerbsfähigkeit.",
      koeln: "Köln verbindet Rhein-Schifffahrt, Straße und Schiene. KI-Multimodal-Planung optimiert Transportketten, die mehrere Verkehrsträger kombinieren.",
      stuttgart: "Stuttgarts Automobilindustrie braucht präzise Just-in-Time-Logistik. KI-Routenoptimierung und Predictive Maintenance sind für Zulieferer hier Pflicht.",
      duesseldorf: "Düsseldorf ist Hubs für internationalen Handel. KI-gestützte Zolldokumentation und mehrsprachige Kommunikation beschleunigen Importprozesse.",
      leipzig: "Leipzig ist DHL-Hauptdrehscheibe und einer der schnellstwachsenden Logistikstandorte Europas. KI-Lösungen skalieren hier mit dem rasanten Wachstum.",
      nuernberg: "Nürnberg liegt im Zentrum Europas und ist Logistikstandort für ganz Süddeutschland. KI-Lagerverwaltung optimiert die Verteilung in alle Richtungen.",
      dresden: "Dresden ist Tor zu Tschechien und Polen. KI-Dokumentation für grenzüberschreitende Transporte spart Stunden an Zollformalitäten.",
    },
  },
  {
    slug: "dienstleistungen",
    name: "Dienstleistungen",
    svgPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    accentColor: "#6366f1",
    visualStyle: "professional",
    metaTitle: "KI Beratung für Dienstleistungsunternehmen | kiberatung.de",
    metaDescription: "KI-Lösungen für Dienstleister: Automatisierter Kundensupport, smarte Terminverwaltung und KI-gestütztes Angebotswesen.",
    heroTitle: "KI BERATUNG FÜR DIENSTLEISTUNGEN",
    heroSubtitle: "Mehr Kunden betreuen, weniger Aufwand haben. KI übernimmt Support, Terminverwaltung und Angebotserstellung — damit Ihr Team sich auf das Wesentliche konzentriert.",
    challenges: [
      { title: "Skalierbarkeit", desc: "Wachstum ohne mehr Personal ist schwer. KI skaliert Ihren Service automatisch mit." },
      { title: "Reaktionszeit", desc: "Kunden erwarten sofortige Antworten. KI-Support reagiert in Sekunden, rund um die Uhr." },
      { title: "Angebotsprozess", desc: "Jedes Angebot kostet Zeit. KI erstellt individualisierte Angebote in Minuten." },
    ],
    loesungen: [
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`, title: "KI-Kundensupport", desc: "Chatbot beantwortet Fragen sofort, eskaliert nur wenn nötig — auf Ihrer Website, WhatsApp oder E-Mail.", stat: "24/7", statLabel: "Support verfügbar" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>`, title: "Terminmanagement", desc: "Kunden buchen selbst, KI schickt Erinnerungen und verwaltet Ausfälle automatisch.", stat: "−45%", statLabel: "No-Shows" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`, title: "Angebots-Automatisierung", desc: "KI erstellt personalisierte Angebote auf Basis von Kundendaten und Anforderungsprofil.", stat: "−70%", statLabel: "Angebotsaufwand" },
      { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`, title: "Service-Analysen", desc: "Welche Services laufen gut? Wo brechen Kunden ab? KI-Dashboards zeigen es in Echtzeit.", stat: "Live", statLabel: "Service-KPIs" },
    ],
    caseStudy: {
      firma: "Steuerberatung Hoffmann, Düsseldorf",
      ergebnis: "+60 % Mandantenkapazität, Angebotsaufwand −70 %",
      zitat: "Unser Onboarding-Chatbot beantwortet Mandantenanfragen, bevor ich morgens ins Büro komme. Das hat unsere Wachstumsdecke gesprengt.",
    },
    testimonial: {
      name: "Dr. Andreas Hoffmann",
      rolle: "Steuerberater, Kanzlei Hoffmann, Düsseldorf",
      text: "KI hat mir nicht meinen Job genommen — sie hat mir meinen Job zurückgegeben. Ich berate wieder, statt zu administrieren. Das ist der Unterschied.",
    },
    stadtIntros: {
      muenchen: "München ist Deutschlands Dienstleistungsmetropole mit einem dichten Netz aus Beratungen, Kanzleien und Agenturen. KI-gestützte Prozesse geben Dienstleistern den Spielraum, den sie für Wachstum brauchen.",
      berlin: "Berlin ist Deutschlands Startup-Hub — und damit auch Zentrum für innovative Dienstleistungsmodelle. KI-Skalierbarkeit ist hier nicht optional: sie ist der Wachstumsmotor.",
      hamburg: "Hamburgs Wirtschaft ist stark dienstleistungsgeprägt. Von Agenturen bis Rechtsberatung — KI-Automatisierung senkt die Kosten pro Mandat und erhöht die Marge.",
      frankfurt: "Frankfurt bündelt Finanzdienstleistungen wie keine andere Stadt. Compliance-konforme KI-Lösungen sind hier ein Muss und ein Wettbewerbsvorteil zugleich.",
      koeln: "Köln ist Medien- und Kreativstandort. Agenturen und Dienstleister nutzen KI für Pitchs, Reporting und Kundenkommunikation — schneller und besser.",
      stuttgart: "Stuttgarts Wirtschaftsstärke schafft Nachfrage nach hochwertigen Business-Services. KI-gestützte Dienstleistungsangebote treffen hier auf zahlungskräftige Kunden.",
      duesseldorf: "Düsseldorf ist ein wichtiger Unternehmensstandort mit internationalem Flair. KI für Mehrsprachigkeit und kulturgerechte Kommunikation ist hier ein Schlüsselfaktor.",
      leipzig: "Leipzig wächst als Dienstleistungsstandort rapide. Junge Unternehmen setzen KI von Anfang an ein — und schaffen damit skalierbare Strukturen.",
      nuernberg: "Nürnbergs Dienstleistungssektor ist stark mittelständisch geprägt. KI senkt Einstiegskosten für Digitalisierung und gibt kleinen Kanzleien und Büros große Reichweite.",
      dresden: "Dresden hat eine starke IT- und Beratungsszene. Dienstleister nutzen KI nicht nur für Kunden, sondern auch intern für effizientere Projektabwicklung.",
    },
  },
];

export function getBrancheBySlug(slug: string): Branche | undefined {
  return BRANCHEN.find((b) => b.slug === slug);
}

export function getAllBranchenSlugs(): string[] {
  return BRANCHEN.map((b) => b.slug);
}
