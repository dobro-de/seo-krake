export type LayoutVariant = 1 | 2 | 3;

export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityData {
  slug: string;
  name: string;
  layout: LayoutVariant;
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
  faqs: CityFaq[];
}

export const cities: CityData[] = [
  {
    slug: "muenchen",
    name: "München",
    layout: 1,
    metaTitle: "KI Beratung für Handwerksbetriebe in München | kiberatung.de",
    metaDescription: "KI-Lösungen für Münchner Handwerker: Angebotserstellung, Terminplanung, Kundenkommunikation automatisieren. Kostenlose Erstberatung.",
    h1: "KI Beratung für Handwerksbetriebe in München",
    intro: "München ist einer der stärksten Handwerks-Standorte Deutschlands. Über 35.000 Betriebe versorgen die wachsende Metropolregion — doch steigende Materialkosten, Fachkräftemangel und Verwaltungsaufwand bremsen viele Unternehmer aus. KI-Lösungen helfen Münchner Handwerkern, Büroarbeit zu automatisieren und sich auf ihr Kerngeschäft zu konzentrieren.",
    stats: { betriebe: "35.000+", mitarbeiter: "195.000", markttrend: "+4,8 %", label1: "Handwerksbetriebe in München", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Elektro Huber GmbH — München-Schwabing",
      challenge: "Der Elektrobetrieb mit 12 Mitarbeitern verlor täglich 2–3 Stunden für Angebotserstellung und Terminkoordination per Telefon.",
      solution: "KI-gestützte Angebotserstellung aus Fotos und Aufmaßdaten, plus WhatsApp-Bot für Terminvereinbarungen.",
      result1: "Angebotszeit −78 %",
      result2: "Auftragsquote +23 %",
      result3: "Telefonanrufe −65 %",
    },
    faqs: [
      { question: "Welche Handwerksbranchen profitieren am meisten von KI in München?", answer: "Besonders SHK-Betriebe, Elektriker und Maler profitieren — also Gewerke mit hohem Angebotsaufwand und vielen Kundenanfragen. In München kommt der starke Wettbewerb hinzu." },
      { question: "Wie schnell amortisiert sich KI für einen Münchner Handwerksbetrieb?", answer: "Die meisten Betriebe sehen nach 2–3 Monaten eine deutliche Zeitersparnis. Bei Angebots-KI oft schon nach wenigen Wochen durch schnellere Reaktionszeiten und höhere Auftragsquoten." },
      { question: "Brauche ich technisches Vorwissen für KI im Handwerk?", answer: "Nein. Unsere Lösungen sind für Handwerker gebaut — nicht für IT-Experten. Foto hochladen, Termin bestätigen, fertig. Wir schulen Ihr Team in einer Stunde." },
    ],
  },
  {
    slug: "berlin",
    name: "Berlin",
    layout: 2,
    metaTitle: "KI Beratung für Handwerksbetriebe in Berlin | kiberatung.de",
    metaDescription: "KI-Lösungen für Berliner Handwerker: automatische Angebote, intelligente Terminplanung, WhatsApp-Bot. Kostenlose Erstberatung.",
    h1: "KI Beratung für Handwerksbetriebe in Berlin",
    intro: "Die Hauptstadt boomt — und mit ihr die Nachfrage nach Handwerksleistungen. Über 30.000 Betriebe kämpfen um Aufträge, Fachkräfte und Effizienz. Berliner Handwerker, die KI einsetzen, reagieren schneller auf Anfragen, erstellen Angebote in Minuten statt Stunden und verlieren keine Kunden mehr ans Telefon.",
    stats: { betriebe: "30.000+", mitarbeiter: "170.000", markttrend: "+5,1 %", label1: "Handwerksbetriebe in Berlin", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Sanitär Schmidt — Berlin-Kreuzberg",
      challenge: "Der SHK-Betrieb mit 8 Mitarbeitern konnte Anfragen nicht schnell genug bearbeiten — Kunden wanderten zur Konkurrenz ab.",
      solution: "WhatsApp-Bot für Erstqualifizierung, KI-Angebotsgenerator und automatische Terminbestätigungen per SMS.",
      result1: "Reaktionszeit −90 %",
      result2: "Neukundenquote +34 %",
      result3: "Verwaltungszeit −4h/Tag",
    },
    faqs: [
      { question: "Funktioniert KI auch für kleine Handwerksbetriebe in Berlin?", answer: "Gerade für kleine Betriebe mit 2–10 Mitarbeitern lohnt sich KI besonders. Weniger Büropersonal nötig, schnellere Angebote, keine verpassten Anfragen — das macht den Unterschied." },
      { question: "Was kostet KI-Beratung für Berliner Handwerker?", answer: "Das Erstgespräch ist kostenlos. Einfache Lösungen wie ein Terminbot starten ab 500 €. Komplette Digitalisierungspakete liegen bei 2.000–5.000 €." },
      { question: "Wie lange dauert die Einrichtung?", answer: "Ein WhatsApp-Bot oder Terminplaner ist in 1–2 Wochen live. Angebots-KI mit individueller Kalkulation braucht 3–4 Wochen Einrichtung." },
    ],
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    layout: 3,
    metaTitle: "KI Beratung für Handwerksbetriebe in Hamburg | kiberatung.de",
    metaDescription: "KI für Hamburger Handwerker: Angebote per Foto, automatische Terminplanung, Kundenkommunikation rund um die Uhr. Kostenlose Beratung.",
    h1: "KI Beratung für Handwerksbetriebe in Hamburg",
    intro: "Hamburg zählt über 15.000 Handwerksbetriebe — vom Schiffsbauer bis zum Elektroinstallateur. Die Hafenstadt bietet enormes Potenzial, aber auch harten Wettbewerb. Wer als Handwerker in Hamburg schnell auf Anfragen reagiert und professionelle Angebote liefert, gewinnt den Auftrag.",
    stats: { betriebe: "15.000+", mitarbeiter: "105.000", markttrend: "+3,9 %", label1: "Handwerksbetriebe in Hamburg", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Maler Petersen & Sohn — Hamburg-Eimsbüttel",
      challenge: "Der Malerbetrieb in dritter Generation verlor Aufträge, weil Angebote erst nach 3–5 Tagen beim Kunden ankamen.",
      solution: "KI-Aufmaß per Smartphone-Foto, automatische Kalkulation nach aktuellen Materialpreisen und sofortiger PDF-Versand.",
      result1: "Angebote am gleichen Tag",
      result2: "Auftragsquote +41 %",
      result3: "Umsatz +18 % in 6 Monaten",
    },
    faqs: [
      { question: "Welche KI-Lösung bringt Hamburger Handwerkern am schnellsten Ergebnisse?", answer: "Ein WhatsApp-Bot für Anfragen und Terminbuchung. Der ist in einer Woche live und spart sofort 1–2 Stunden pro Tag an Telefonzeit." },
      { question: "Ist KI DSGVO-konform einsetzbar?", answer: "Ja. Alle unsere Lösungen laufen auf deutschen Servern, sind DSGVO-konform und speichern keine Kundendaten länger als nötig." },
      { question: "Kann KI Aufmaße wirklich aus Fotos erstellen?", answer: "Ja — mit Einschränkungen. Für Standardräume (Wände, Decken, Böden) funktioniert die KI-Vermessung per Foto bereits zuverlässig. Komplexe Geometrien erfordern noch manuelle Nacharbeit." },
    ],
  },
  {
    slug: "koeln",
    name: "Köln",
    layout: 1,
    metaTitle: "KI Beratung für Handwerksbetriebe in Köln | kiberatung.de",
    metaDescription: "KI-Automatisierung für Kölner Handwerker: Angebote, Termine, Kundenkommunikation. Mehr Aufträge, weniger Büro. Kostenlose Erstberatung.",
    h1: "KI Beratung für Handwerksbetriebe in Köln",
    intro: "Köln ist das Handwerkszentrum am Rhein — mit über 12.000 Betrieben in der Domstadt und Region. Vom Altbau in der Südstadt bis zum Neubau in Ehrenfeld: Kölner Handwerker stehen unter Druck, schnell zu liefern. KI hilft dabei, Verwaltung zu reduzieren und Kunden besser zu bedienen.",
    stats: { betriebe: "12.000+", mitarbeiter: "85.000", markttrend: "+4,2 %", label1: "Handwerksbetriebe in Köln", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Schreinerei Weber — Köln-Ehrenfeld",
      challenge: "Die Schreinerei brauchte durchschnittlich 4 Stunden pro Angebot für Maßmöbel — zu langsam für die hohe Nachfrage.",
      solution: "KI-Konfigurator: Kunden laden Raumfotos hoch, KI schlägt Maße und Materialien vor, Angebot wird automatisch kalkuliert.",
      result1: "Angebotszeit −70 %",
      result2: "Kundenzufriedenheit 4,9/5",
      result3: "3 Neuaufträge/Woche mehr",
    },
    faqs: [
      { question: "Gibt es Fördermittel für KI im Handwerk in NRW?", answer: "Ja. NRW bietet über das Programm 'Mittelstand Innovativ & Digital' Zuschüsse bis 15.000 € für Digitalisierungsprojekte. Wir helfen beim Antrag." },
      { question: "Wie funktioniert die Angebots-KI konkret?", answer: "Sie fotografieren die Baustelle, laden das Bild in die App und ergänzen kurz den Auftrag. Die KI erkennt Flächen, schlägt Positionen vor und kalkuliert nach Ihren hinterlegten Preisen." },
      { question: "Muss ich meine bestehende Software ersetzen?", answer: "Nein. Unsere KI-Lösungen lassen sich mit den meisten Handwerkerprogrammen verbinden — von Lexware bis DATEV." },
    ],
  },
  {
    slug: "frankfurt",
    name: "Frankfurt",
    layout: 2,
    metaTitle: "KI Beratung für Handwerksbetriebe in Frankfurt | kiberatung.de",
    metaDescription: "KI für Frankfurter Handwerker: automatische Angebotserstellung, Routenplanung, Kundenkommunikation. Jetzt kostenlos beraten lassen.",
    h1: "KI Beratung für Handwerksbetriebe in Frankfurt",
    intro: "Frankfurt am Main und das Rhein-Main-Gebiet bieten Handwerkern ein riesiges Einzugsgebiet — aber auch lange Anfahrtswege und hohen Konkurrenzdruck. Über 10.000 Betriebe in der Region setzen zunehmend auf digitale Werkzeuge. KI macht den Unterschied zwischen dem Betrieb, der den Auftrag bekommt, und dem, der zu spät antwortet.",
    stats: { betriebe: "10.000+", mitarbeiter: "72.000", markttrend: "+4,5 %", label1: "Handwerksbetriebe in Frankfurt", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Heizung Braun GmbH — Frankfurt-Sachsenhausen",
      challenge: "Der SHK-Meisterbetrieb koordinierte 6 Monteure manuell per Telefon. Doppelbuchungen und vergessene Termine waren an der Tagesordnung.",
      solution: "KI-Routenplanung mit GPS-Anbindung, automatische Kundenerinnerungen und digitale Auftragszettel.",
      result1: "Fahrtzeit −25 %",
      result2: "Null Doppelbuchungen",
      result3: "Kundenbeschwerden −80 %",
    },
    faqs: [
      { question: "Lohnt sich KI auch für Einzelunternehmer in Frankfurt?", answer: "Absolut. Gerade Ein-Mann-Betriebe profitieren am meisten, weil sie keinen Büromitarbeiter haben. KI übernimmt Terminplanung, Angebote und Kundenkommunikation — Sie konzentrieren sich aufs Handwerk." },
      { question: "Welche Handwerker in Frankfurt nutzen schon KI?", answer: "Besonders SHK-Betriebe, Elektriker und Maler sind Vorreiter. Aber auch Schreiner und Fliesenleger setzen zunehmend auf KI-gestützte Angebotserstellung." },
      { question: "Kann KI auch bei der Mitarbeitersuche helfen?", answer: "Ja. KI-gestützte Stellenanzeigen und automatisierte Bewerbungsprozesse verkürzen die Time-to-Hire deutlich. Wir beraten auch hierzu." },
    ],
  },
  {
    slug: "stuttgart",
    name: "Stuttgart",
    layout: 3,
    metaTitle: "KI Beratung für Handwerksbetriebe in Stuttgart | kiberatung.de",
    metaDescription: "KI-Lösungen für Stuttgarter Handwerker: Angebote automatisieren, Routen optimieren, Kunden begeistern. Kostenlose Erstberatung.",
    h1: "KI Beratung für Handwerksbetriebe in Stuttgart",
    intro: "Baden-Württemberg ist Deutschlands Handwerksland Nr. 1 — und Stuttgart sein Zentrum. Über 14.000 Betriebe in der Region stehen für Qualität und Präzision. KI-Lösungen passen perfekt zu dieser Mentalität: präzise Kalkulationen, pünktliche Termine, professionelle Kommunikation — automatisch.",
    stats: { betriebe: "14.000+", mitarbeiter: "98.000", markttrend: "+4,1 %", label1: "Handwerksbetriebe in Stuttgart", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Dachdeckerei Krämer — Stuttgart-Vaihingen",
      challenge: "Wind- und Sturmschäden führten zu Anfragespitzen, die der 5-Mann-Betrieb nicht bewältigen konnte. Kunden warteten tagelang auf Rückmeldung.",
      solution: "KI-Erstqualifizierung per WhatsApp: Kunden senden Fotos vom Schaden, KI bewertet Dringlichkeit und plant automatisch Besichtigungstermine.",
      result1: "Reaktionszeit <2 Stunden",
      result2: "Kundenabwanderung −55 %",
      result3: "Umsatz +22 %",
    },
    faqs: [
      { question: "Gibt es KI-Förderung in Baden-Württemberg?", answer: "Ja. Das Programm 'Digitalisierungsprämie Plus' fördert KMU mit bis zu 10.000 € Zuschuss für Digitalisierungsprojekte — inklusive KI-Lösungen." },
      { question: "Wie sicher sind meine Kundendaten bei KI-Nutzung?", answer: "Höchste Priorität. Alle Daten bleiben auf deutschen Servern, Verschlüsselung nach Bankstandard, DSGVO-konform. Wir schließen einen AV-Vertrag mit jedem Kunden." },
      { question: "Funktioniert KI auch ohne stabiles Internet auf der Baustelle?", answer: "Ja. Unsere Mobile-Lösungen arbeiten offline und synchronisieren automatisch, sobald wieder eine Verbindung besteht." },
    ],
  },
  {
    slug: "duesseldorf",
    name: "Düsseldorf",
    layout: 1,
    metaTitle: "KI Beratung für Handwerksbetriebe in Düsseldorf | kiberatung.de",
    metaDescription: "KI für Düsseldorfer Handwerker: automatische Angebote, Terminbots, digitale Aufmaße. Weniger Büro, mehr Umsatz. Jetzt beraten lassen.",
    h1: "KI Beratung für Handwerksbetriebe in Düsseldorf",
    intro: "Düsseldorf und der Niederrhein sind ein starker Handwerksstandort. Über 9.000 Betriebe bedienen anspruchsvolle Privat- und Gewerbekunden. Wer hier professionell und schnell auftritt, gewinnt. KI hilft Düsseldorfer Handwerkern, den Verwaltungsaufwand zu halbieren und mehr Aufträge abzuschließen.",
    stats: { betriebe: "9.000+", mitarbeiter: "65.000", markttrend: "+3,7 %", label1: "Handwerksbetriebe in Düsseldorf", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Elektro Jacobs — Düsseldorf-Oberkassel",
      challenge: "Der Elektromeister verbrachte jeden Abend 2 Stunden mit Angeboten statt bei der Familie. Wochenenden gingen für Papierkram drauf.",
      solution: "KI-Angebotsgenerator: Auftragsdetails per Spracheingabe diktieren, KI erstellt vollständiges Angebot mit Positionen und Preisen.",
      result1: "Feierabend um 17 Uhr",
      result2: "Angebotsversand am selben Tag",
      result3: "Work-Life-Balance ++",
    },
    faqs: [
      { question: "Kann ich KI-Angebote per Spracheingabe erstellen?", answer: "Ja. Sie diktieren die Auftragsdetails ins Handy — die KI erstellt daraus ein professionelles Angebot mit allen Positionen, Mengen und Preisen." },
      { question: "Was bringt ein WhatsApp-Bot für meinen Handwerksbetrieb?", answer: "Kunden erreichen Sie 24/7, bekommen sofort Antworten auf Standardfragen und können direkt Termine buchen — ohne dass Sie zum Telefon greifen müssen." },
      { question: "Ist KI auch für traditionelle Handwerker geeignet?", answer: "Gerade für sie. KI ersetzt nicht das Handwerk — sie nimmt nur den Papierkram ab. Ihr Können bleibt, der Verwaltungsaufwand schrumpft." },
    ],
  },
  {
    slug: "dortmund",
    name: "Dortmund",
    layout: 2,
    metaTitle: "KI Beratung für Handwerksbetriebe in Dortmund | kiberatung.de",
    metaDescription: "KI-Automatisierung für Dortmunder Handwerker: Angebote, Termine, Routen. Im Ruhrgebiet digital vorne sein. Kostenlose Beratung.",
    h1: "KI Beratung für Handwerksbetriebe in Dortmund",
    intro: "Das Ruhrgebiet wandelt sich — und das Handwerk wandelt sich mit. Dortmund zählt über 6.000 Handwerksbetriebe, die von der Baukonjunktur und Sanierungswelle profitieren. Wer jetzt auf KI setzt, sichert sich den Vorsprung im dichtesten Ballungsraum Europas.",
    stats: { betriebe: "6.000+", mitarbeiter: "42.000", markttrend: "+3,4 %", label1: "Handwerksbetriebe in Dortmund", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "SHK Müller — Dortmund-Hörde",
      challenge: "Der Sanitärbetrieb fuhr täglich 120 km kreuz und quer durch Dortmund — ineffiziente Routenplanung kostete Zeit und Diesel.",
      solution: "KI-Routenoptimierung: Tagesplan wird morgens automatisch erstellt, berücksichtigt Prioritäten, Fahrzeiten und Kundenwünsche.",
      result1: "Fahrtstrecke −35 %",
      result2: "1 Auftrag mehr pro Tag",
      result3: "Dieselkosten −280 €/Monat",
    },
    faqs: [
      { question: "Gibt es Digitalisierungsförderung für Handwerker im Ruhrgebiet?", answer: "Ja. NRW fördert über 'Mittelstand Innovativ & Digital' mit bis zu 15.000 €. Zusätzlich gibt es das BAFA-Programm 'Digital Jetzt' mit bis zu 50.000 € Zuschuss." },
      { question: "Wie funktioniert KI-Routenplanung?", answer: "Sie geben Ihre Aufträge für den Tag ein (oder die KI übernimmt das aus dem Kalender), und der Algorithmus berechnet die optimale Reihenfolge — inklusive Zeitfenster und Verkehrslage." },
      { question: "Brauche ich neue Hardware für KI?", answer: "Nein. Ein Smartphone reicht. Alle unsere Lösungen laufen im Browser oder als App — kein teurer PC, keine Installation." },
    ],
  },
  {
    slug: "hannover",
    name: "Hannover",
    layout: 3,
    metaTitle: "KI Beratung für Handwerksbetriebe in Hannover | kiberatung.de",
    metaDescription: "KI für Hannoveraner Handwerker: Angebote automatisieren, Kunden digital betreuen, Termine intelligent planen. Kostenlose Beratung.",
    h1: "KI Beratung für Handwerksbetriebe in Hannover",
    intro: "Hannover ist die Messestadt — und ein starker Handwerksstandort in Niedersachsen. Über 8.000 Betriebe in der Region profitieren von der Nähe zur Industrie und einem wachsenden Sanierungsmarkt. KI hilft Hannoveraner Handwerkern, professioneller aufzutreten und schneller zu wachsen.",
    stats: { betriebe: "8.000+", mitarbeiter: "55.000", markttrend: "+3,6 %", label1: "Handwerksbetriebe in Hannover", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Tischlerei Brinkmann — Hannover-Linden",
      challenge: "Die Tischlerei bekam über Google 20+ Anfragen pro Woche, konnte aber nur die Hälfte zeitnah beantworten.",
      solution: "KI-Chat auf der Website: Beantwortet Standardfragen zu Lieferzeiten, Preisrahmen und Materialien. Qualifizierte Anfragen werden direkt als Termin gebucht.",
      result1: "100 % Anfragen beantwortet",
      result2: "Terminbuchungen +60 %",
      result3: "Konversionsrate 3× höher",
    },
    faqs: [
      { question: "Kann KI auch Nachkalkulationen automatisieren?", answer: "Ja. KI vergleicht Angebotskalkulation mit tatsächlichen Kosten und zeigt Abweichungen auf. So lernen Sie aus jedem Projekt und kalkulieren künftig genauer." },
      { question: "Funktioniert KI auch mit meiner Handwerkersoftware?", answer: "In den meisten Fällen ja. Wir integrieren mit gängigen Systemen wie Lexware, DATEV, TopKontor, Sage und anderen." },
      { question: "Was passiert, wenn die KI einen Fehler macht?", answer: "Jedes KI-Angebot wird vor dem Versand zur Prüfung vorgelegt. Sie behalten immer die Kontrolle — die KI macht den Entwurf, Sie geben frei." },
    ],
  },
  {
    slug: "nuernberg",
    name: "Nürnberg",
    layout: 1,
    metaTitle: "KI Beratung für Handwerksbetriebe in Nürnberg | kiberatung.de",
    metaDescription: "KI-Lösungen für Nürnberger Handwerker: Angebots-KI, Terminplanung, digitale Kundenkommunikation. Jetzt kostenlos beraten lassen.",
    h1: "KI Beratung für Handwerksbetriebe in Nürnberg",
    intro: "Nürnberg und die Metropolregion Franken sind ein Hotspot für Handwerk und Mittelstand. Über 9.000 Betriebe in der Region verbinden Tradition mit Innovation. KI-Lösungen passen perfekt zu fränkischen Handwerkern: bodenständig, effizient und auf Ergebnisse fokussiert.",
    stats: { betriebe: "9.000+", mitarbeiter: "62.000", markttrend: "+3,8 %", label1: "Handwerksbetriebe in Nürnberg", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Fliesenleger Kraus — Nürnberg-Langwasser",
      challenge: "Der Fliesenleger-Meister verbrachte sonntags 4 Stunden mit Angeboten — Freizeit blieb auf der Strecke.",
      solution: "KI-Angebotssystem: Raumfotos + kurze Beschreibung → fertiges Angebot mit Flächenberechnung und Materialpreisen in 5 Minuten.",
      result1: "Sonntags wieder frei",
      result2: "5 Angebote pro Stunde statt 1",
      result3: "Umsatz +15 %",
    },
    faqs: [
      { question: "Gibt es KI-Förderung in Bayern für Handwerker?", answer: "Ja. Der 'Digitalbonus Bayern' fördert KMU mit bis zu 10.000 € (50 % Zuschuss) für Digitalisierungsmaßnahmen — KI-Lösungen eingeschlossen." },
      { question: "Kann KI auch Materialbestellungen automatisieren?", answer: "Ja. Basierend auf dem Angebot kann die KI automatisch Materiallisten erstellen und bei Ihren Stammlieferanten anfragen — inklusive Preisvergleich." },
      { question: "Wie genau kalkuliert die KI?", answer: "Die KI nutzt Ihre hinterlegten Preise, aktuelle Materialkosten und Erfahrungswerte aus vergangenen Projekten. Genauigkeit liegt bei 90–95 % — den Rest prüfen Sie." },
    ],
  },
  {
    slug: "leipzig",
    name: "Leipzig",
    layout: 2,
    metaTitle: "KI Beratung für Handwerksbetriebe in Leipzig | kiberatung.de",
    metaDescription: "KI für Leipziger Handwerker: digitale Angebote, Terminbots, Kundenkommunikation. Die Zukunft des Handwerks in Sachsen.",
    h1: "KI Beratung für Handwerksbetriebe in Leipzig",
    intro: "Leipzig wächst rasant — und damit die Nachfrage nach Handwerksleistungen. Sanierungen im Gründerzeitbestand, Neubauprojekte und steigende Ansprüche: Leipziger Handwerker brauchen digitale Unterstützung, um mitzuhalten. KI ist der Hebel.",
    stats: { betriebe: "5.500+", mitarbeiter: "38.000", markttrend: "+5,8 %", label1: "Handwerksbetriebe in Leipzig", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Maler Richter — Leipzig-Connewitz",
      challenge: "Der wachsende Malerbetrieb verlor den Überblick: Angebote auf Zettel, Termine im Kopf, Rechnungen erst nach Wochen.",
      solution: "Komplettpaket: KI-Angebote, digitaler Terminkalender mit Kundensynchronisation, automatische Rechnungsstellung nach Auftragsabschluss.",
      result1: "Rechnungen am selben Tag",
      result2: "Zahlungseingang 2× schneller",
      result3: "Kein Auftrag mehr vergessen",
    },
    faqs: [
      { question: "Ist KI für Handwerker in Sachsen erschwinglich?", answer: "Ja. Einstiegslösungen starten ab 500 €. Sachsen fördert außerdem über 'E-Business' und 'GRW' Digitalisierung im Handwerk mit attraktiven Zuschüssen." },
      { question: "Kann ich KI erstmal testen, bevor ich mich festlege?", answer: "Selbstverständlich. Wir bieten eine kostenlose 14-Tage-Testphase für alle Lösungen. Kein Risiko, keine Verpflichtung." },
      { question: "Hilft KI auch bei der Buchhaltung?", answer: "Indirekt ja. KI-Rechnungsstellung und automatische DATEV-Exporte reduzieren den Aufwand für Ihren Steuerberater — und damit Ihre Kosten." },
    ],
  },
  {
    slug: "dresden",
    name: "Dresden",
    layout: 3,
    metaTitle: "KI Beratung für Handwerksbetriebe in Dresden | kiberatung.de",
    metaDescription: "KI-Lösungen für Dresdner Handwerker: Angebotserstellung, Terminmanagement, Kundenkommunikation automatisieren. Kostenlos beraten lassen.",
    h1: "KI Beratung für Handwerksbetriebe in Dresden",
    intro: "Dresden verbindet Tradition und High-Tech — das gilt auch fürs Handwerk. Über 5.000 Betriebe in der Elbstadt setzen auf Qualität. KI-Lösungen helfen Dresdner Handwerkern, diese Qualität auch in ihrer Verwaltung und Kundenkommunikation zu zeigen.",
    stats: { betriebe: "5.000+", mitarbeiter: "35.000", markttrend: "+4,3 %", label1: "Handwerksbetriebe in Dresden", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Dachdecker Lehmann — Dresden-Neustadt",
      challenge: "Nach Sturmschäden explodierten die Anfragen. Der 4-Mann-Betrieb konnte unmöglich alle zeitnah bearbeiten.",
      solution: "KI-Triage: Kunden senden Fotos per WhatsApp, KI bewertet Schaden und Dringlichkeit, plant automatisch Besichtigungstermine nach Priorität.",
      result1: "Alle Anfragen in <1 Stunde beantwortet",
      result2: "Dringende Fälle zuerst",
      result3: "Kein Kunde abgesprungen",
    },
    faqs: [
      { question: "Wie sortiert die KI dringende von weniger dringenden Anfragen?", answer: "Anhand der Fotos und Beschreibung bewertet die KI Schadensschwere, Wetterlage und Einsturzgefahr. Dringende Fälle bekommen automatisch den nächsten freien Termin." },
      { question: "Können auch ältere Mitarbeiter mit KI arbeiten?", answer: "Ja. Unsere Oberflächen sind bewusst einfach gehalten — große Buttons, klare Sprache, Spracherkennung. Wir schulen jedes Team individuell." },
      { question: "Was kostet die Komplettlösung?", answer: "Ein Rundum-Sorglos-Paket mit Angebots-KI, Terminplanung und Kundenkommunikation liegt bei 2.500–5.000 €. Danach 99–199 €/Monat Nutzung." },
    ],
  },
  {
    slug: "bremen",
    name: "Bremen",
    layout: 1,
    metaTitle: "KI Beratung für Handwerksbetriebe in Bremen | kiberatung.de",
    metaDescription: "KI für Bremer Handwerker: Angebote in Minuten, Terminplanung per Bot, Kundenkommunikation 24/7. Jetzt kostenlos beraten lassen.",
    h1: "KI Beratung für Handwerksbetriebe in Bremen",
    intro: "Bremen und Bremerhaven haben eine starke Handwerkstradition. Über 5.000 Betriebe versorgen die Hansestadt — von der Schiffselektrik bis zur Haussanierung. KI hilft Bremer Handwerkern, den Sprung in die digitale Zukunft zu schaffen, ohne ihr Handwerk zu verlieren.",
    stats: { betriebe: "5.000+", mitarbeiter: "33.000", markttrend: "+3,2 %", label1: "Handwerksbetriebe in Bremen", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Elektro Behrens — Bremen-Schwachhausen",
      challenge: "Zwei Bürokräfte arbeiteten Vollzeit an Angeboten und Terminplanung. Bei Krankheit brach alles zusammen.",
      solution: "KI-Automatisierung ersetzt 70 % der Büroarbeit: Angebote, Terminbestätigungen und Kundenerinnerungen laufen automatisch.",
      result1: "1 Bürokraft statt 2",
      result2: "12.000 € gespart/Jahr",
      result3: "Kein Ausfall mehr bei Krankheit",
    },
    faqs: [
      { question: "Ersetzt KI meine Bürokraft?", answer: "KI ergänzt — nicht ersetzt. Routineaufgaben (Angebote, Termine, Erinnerungen) übernimmt die KI. Ihre Mitarbeiter können sich auf anspruchsvollere Aufgaben konzentrieren." },
      { question: "Wie sicher sind meine Geschäftsdaten?", answer: "Bankstandard-Verschlüsselung, deutsche Server, DSGVO-konform. Wir schließen einen Auftragsverarbeitungsvertrag ab. Ihre Daten gehören Ihnen." },
      { question: "Kann ich die KI an mein Firmendesign anpassen?", answer: "Ja. Angebote, E-Mails und Chat-Widgets werden in Ihrem Corporate Design gestaltet — Ihr Logo, Ihre Farben, Ihre Sprache." },
    ],
  },
  {
    slug: "essen",
    name: "Essen",
    layout: 2,
    metaTitle: "KI Beratung für Handwerksbetriebe in Essen | kiberatung.de",
    metaDescription: "KI-Automatisierung für Essener Handwerker: Angebotsroboter, Routenplanung, digitale Kundenbetreuung. Kostenlose Erstberatung.",
    h1: "KI Beratung für Handwerksbetriebe in Essen",
    intro: "Essen im Herzen des Ruhrgebiets ist umgeben von Millionen potenzieller Kunden. Über 5.500 Handwerksbetriebe bedienen die Region. KI hilft, den Überblick zu behalten und mehr Aufträge in weniger Zeit abzuwickeln.",
    stats: { betriebe: "5.500+", mitarbeiter: "38.000", markttrend: "+3,5 %", label1: "Handwerksbetriebe in Essen", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "SHK Yilmaz — Essen-Altenessen",
      challenge: "Der junge SHK-Meister hatte mehr Aufträge als er bearbeiten konnte, aber keinen Überblick über offene Angebote und Termine.",
      solution: "KI-Dashboard: Alle Anfragen, Angebote und Aufträge in einer Übersicht. Automatische Erinnerungen bei offenen Angeboten, Priorisierung nach Auftragswert.",
      result1: "Überblick über alle Aufträge",
      result2: "Offene Angebote −50 %",
      result3: "Nachfassquote 100 %",
    },
    faqs: [
      { question: "Was kostet KI-Beratung für einen kleinen Betrieb in Essen?", answer: "Das Erstgespräch ist immer kostenlos. Einfache Lösungen starten ab 500 €. Mit NRW-Förderung zahlen Sie oft nur die Hälfte." },
      { question: "Wie schnell bin ich mit KI produktiv?", answer: "Einfache Tools wie Terminbots: 1 Woche. Angebots-KI: 2–3 Wochen. In dieser Zeit schulen wir auch Ihr Team." },
      { question: "Muss ich einen langfristigen Vertrag abschließen?", answer: "Nein. Monatlich kündbar. Wir überzeugen durch Ergebnisse, nicht durch Vertragslaufzeiten." },
    ],
  },
  {
    slug: "mannheim",
    name: "Mannheim",
    layout: 3,
    metaTitle: "KI Beratung für Handwerksbetriebe in Mannheim | kiberatung.de",
    metaDescription: "KI für Mannheimer Handwerker: Angebotserstellung, Routenplanung, Kundenservice automatisieren. Jetzt kostenlos beraten lassen.",
    h1: "KI Beratung für Handwerksbetriebe in Mannheim",
    intro: "Die Quadratestadt und die Metropolregion Rhein-Neckar bieten Handwerkern ein starkes Umfeld. Über 4.500 Betriebe profitieren von der zentralen Lage und zahlungskräftigen Kunden. KI macht Mannheimer Handwerker noch professioneller.",
    stats: { betriebe: "4.500+", mitarbeiter: "31.000", markttrend: "+4,0 %", label1: "Handwerksbetriebe in Mannheim", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Maler Fischer — Mannheim-Lindenhof",
      challenge: "Der Malerbetrieb hatte keine Website und verlor Kunden an Wettbewerber mit Online-Präsenz und schnellen Angeboten.",
      solution: "KI-gestützte Website mit integriertem Angebotsformular: Kunden beschreiben ihr Projekt, KI erstellt sofort eine Preisindikation.",
      result1: "12 Online-Anfragen/Woche",
      result2: "Konversion 35 %",
      result3: "ROI nach 6 Wochen",
    },
    faqs: [
      { question: "Brauche ich eine Website für KI-Lösungen?", answer: "Nicht zwingend. WhatsApp-Bots funktionieren auch ohne Website. Aber eine KI-optimierte Website mit Angebotsformular ist der stärkste Kanal für Neukundengewinnung." },
      { question: "Wie komme ich an die Förderung in Baden-Württemberg?", answer: "Wir helfen beim Antrag. Der Digitalbonus Baden-Württemberg fördert bis zu 10.000 € — Antrag dauert ca. 30 Minuten, wir füllen ihn gemeinsam aus." },
      { question: "Kann KI auch Bewertungen beantworten?", answer: "Ja. Google-Bewertungen werden automatisch erkannt und individuell beantwortet — professionell, höflich und in Ihrem Tonfall." },
    ],
  },
  {
    slug: "karlsruhe",
    name: "Karlsruhe",
    layout: 1,
    metaTitle: "KI Beratung für Handwerksbetriebe in Karlsruhe | kiberatung.de",
    metaDescription: "KI-Lösungen für Karlsruher Handwerker: Angebote automatisieren, Kundenkommunikation digitalisieren. Technologiestadt trifft Handwerk.",
    h1: "KI Beratung für Handwerksbetriebe in Karlsruhe",
    intro: "Karlsruhe ist Technologiestadt — und das strahlt aufs Handwerk ab. Die Kunden hier sind digital-affin und erwarten schnelle, professionelle Kommunikation. Über 4.000 Handwerksbetriebe in der Fächerstadt können mit KI genau das liefern.",
    stats: { betriebe: "4.000+", mitarbeiter: "28.000", markttrend: "+4,4 %", label1: "Handwerksbetriebe in Karlsruhe", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "KFZ Werkstatt Bauer — Karlsruhe-Durlach",
      challenge: "Die Werkstatt hatte keinen Überblick über Ersatzteilbestände und bestellte oft doppelt oder zu spät.",
      solution: "KI-Lagerverwaltung: Automatische Bestandserfassung, Nachbestellung bei Mindestmenge, Preisvergleich bei Lieferanten.",
      result1: "Lagerkosten −20 %",
      result2: "Keine Doppelbestellungen",
      result3: "Teile immer verfügbar",
    },
    faqs: [
      { question: "Gibt es KI-Beratung speziell für KFZ-Werkstätten?", answer: "Ja. Wir haben Erfahrung mit KFZ-Betrieben: Termin-Management, Ersatzteilbestellung, Kostenvoranschläge und Kundenkommunikation — alles KI-gestützt." },
      { question: "Wie integriert sich KI mit meiner Werkstattsoftware?", answer: "Wir verbinden KI mit gängigen Systemen wie Werbas, KSR oder DAT. Daten fließen automatisch zwischen KI und Ihrer bestehenden Software." },
      { question: "Was ist der erste Schritt?", answer: "Ein kostenloses 30-Minuten-Gespräch. Wir analysieren Ihre Prozesse, identifizieren die größten Hebel und erstellen einen konkreten Plan — unverbindlich." },
    ],
  },
  {
    slug: "augsburg",
    name: "Augsburg",
    layout: 2,
    metaTitle: "KI Beratung für Handwerksbetriebe in Augsburg | kiberatung.de",
    metaDescription: "KI für Augsburger Handwerker: Angebotserstellung, Terminplanung, Verwaltung automatisieren. Bayerische Förderung nutzen.",
    h1: "KI Beratung für Handwerksbetriebe in Augsburg",
    intro: "Augsburg ist Bayerns drittgrößte Stadt und ein traditionsreicher Handwerksstandort. Über 4.000 Betriebe profitieren von der Nähe zu München und einer starken lokalen Wirtschaft. KI-Lösungen helfen Augsburger Handwerkern, moderner und effizienter zu arbeiten.",
    stats: { betriebe: "4.000+", mitarbeiter: "27.000", markttrend: "+3,9 %", label1: "Handwerksbetriebe in Augsburg", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Schreinerei Huber — Augsburg-Lechhausen",
      challenge: "Individuelle Möbelstücke erforderten aufwendige Einzelkalkulationen. Jedes Angebot dauerte einen halben Tag.",
      solution: "KI-Konfigurator mit Materialpreisdatenbank und historischen Kalkulationsdaten. Kunden können online Maße und Material wählen.",
      result1: "Angebotszeit −80 %",
      result2: "Online-Anfragen verdreifacht",
      result3: "Fehlerquote bei Kalkulation −60 %",
    },
    faqs: [
      { question: "Kann KI auch bei Möbelkonfiguratoren helfen?", answer: "Ja. KI-gestützte Konfiguratoren lassen Kunden online Möbel planen, während die Kalkulation automatisch im Hintergrund läuft. Das spart Ihnen Beratungszeit." },
      { question: "Ist der Digitalbonus Bayern auch für Augsburger Betriebe verfügbar?", answer: "Ja. Augsburger Handwerker können den Digitalbonus Bayern (bis 10.000 €, 50 % Zuschuss) für KI-Projekte beantragen. Wir unterstützen beim Antrag." },
      { question: "Wie lange dauert die Amortisation?", answer: "Bei den meisten Betrieben 3–6 Monate. Allein durch schnellere Angebote und weniger verlorene Aufträge rechnet sich die Investition schnell." },
    ],
  },
  {
    slug: "wiesbaden",
    name: "Wiesbaden",
    layout: 3,
    metaTitle: "KI Beratung für Handwerksbetriebe in Wiesbaden | kiberatung.de",
    metaDescription: "KI-Automatisierung für Wiesbadener Handwerker: Angebote, Termine, Routen intelligent planen. Hessische Förderung nutzen.",
    h1: "KI Beratung für Handwerksbetriebe in Wiesbaden",
    intro: "Wiesbaden als Landeshauptstadt bietet Handwerkern zahlungskräftige Privat- und öffentliche Auftraggeber. Über 3.500 Betriebe profitieren von der zentralen Lage im Rhein-Main-Gebiet. KI hilft, die Verwaltung zu verschlanken und mehr aus jedem Arbeitstag herauszuholen.",
    stats: { betriebe: "3.500+", mitarbeiter: "24.000", markttrend: "+3,8 %", label1: "Handwerksbetriebe in Wiesbaden", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Heizungsbau Klein — Wiesbaden-Biebrich",
      challenge: "Öffentliche Ausschreibungen erforderten umfangreiche Dokumentation. Der Betrieb konnte sich nicht auf alle interessanten Projekte bewerben.",
      solution: "KI-Dokumentassistent: Hilft beim Ausfüllen von Formularen, prüft Vollständigkeit und erstellt Leistungsverzeichnisse automatisch.",
      result1: "3× mehr Bewerbungen",
      result2: "Zuschlagsquote +18 %",
      result3: "Dokumentationszeit −65 %",
    },
    faqs: [
      { question: "Hilft KI bei öffentlichen Ausschreibungen?", answer: "Ja. KI kann Leistungsverzeichnisse analysieren, Kalkulationen vorbereiten und Angebotsdokumente zusammenstellen. Das spart Tage an Arbeit pro Ausschreibung." },
      { question: "Gibt es Hessische Förderprogramme für Digitalisierung?", answer: "Ja. Hessen bietet über 'Distr@l' und 'PIUS-Invest' Fördermittel für Digitalisierungsprojekte im Handwerk." },
      { question: "Kann die KI auch Leistungsverzeichnisse lesen?", answer: "Ja. Die KI extrahiert automatisch Positionen, Mengen und Anforderungen aus PDF-Leistungsverzeichnissen und erstellt daraus Ihre Kalkulation." },
    ],
  },
  {
    slug: "bonn",
    name: "Bonn",
    layout: 1,
    metaTitle: "KI Beratung für Handwerksbetriebe in Bonn | kiberatung.de",
    metaDescription: "KI für Bonner Handwerker: Angebotserstellung, Terminmanagement, Kundenkommunikation automatisieren. NRW-Förderung sichern.",
    h1: "KI Beratung für Handwerksbetriebe in Bonn",
    intro: "Bonn und das Rheinland bieten Handwerkern eine stabile Auftragslage — von der Sanierung im Bundesviertel bis zum Neubau in Bad Godesberg. Über 3.000 Betriebe in der ehemaligen Bundeshauptstadt setzen auf Qualität. KI sorgt dafür, dass auch die Verwaltung mithalten kann.",
    stats: { betriebe: "3.000+", mitarbeiter: "21.000", markttrend: "+3,5 %", label1: "Handwerksbetriebe in Bonn", label2: "Beschäftigte im Handwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Elektro Zimmermann — Bonn-Beuel",
      challenge: "Bestandskunden meldeten sich oft für Wartungsarbeiten — aber der Betrieb hatte kein System für regelmäßige Erinnerungen.",
      solution: "KI-Wartungsmanagement: Automatische Erinnerungen an Kunden (E-Check, Heizungswartung etc.), direkte Terminbuchung.",
      result1: "Wartungsaufträge +40 %",
      result2: "Wiederkehrender Umsatz +25 %",
      result3: "Kundenbindung deutlich höher",
    },
    faqs: [
      { question: "Was ist KI-Wartungsmanagement?", answer: "Die KI erinnert Ihre Kunden automatisch an fällige Wartungen (z.B. E-Check alle 4 Jahre, Heizungswartung jährlich). Kunden können direkt einen Termin buchen." },
      { question: "Lohnt sich KI auch für den Gebäudeservice?", answer: "Ja. Reinigungsfirmen und Gebäudeservices profitieren von KI-Routenplanung, automatischer Einsatzplanung und digitaler Qualitätskontrolle." },
      { question: "Wie fange ich am besten an?", answer: "Kostenloses Erstgespräch → wir identifizieren Ihren größten Hebel → Pilotprojekt in 2 Wochen → dann schrittweise ausbauen." },
    ],
  },
];

export const cityMap: Record<string, CityData> = {};
cities.forEach((c) => { cityMap[c.slug] = c; });

export function generateStaticParamsList() {
  return cities.map((c) => ({ stadt: c.slug }));
}
