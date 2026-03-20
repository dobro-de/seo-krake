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
    slug: "berlin",
    name: "Berlin",
    layout: 1,
    metaTitle: "KI Beratung für Logistik Berlin | kiberatung.de",
    metaDescription: "KI-Lösungen für Berliner Logistikunternehmen: Sendungsstatus-Automatisierung, Reklamationsmanagement und Abholkoordination. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Berliner Logistikunternehmen",
    intro: "Berlin ist Drehscheibe für osteuropäische Lieferketten und wächst als Logistikstandort rasant. Mit tausenden Sendungen täglich steigen Anfragen zu Sendungsstatus, Abholungen und Reklamationen — und überlasten Disponenten. KI beantwortet Sendungsanfragen automatisch, koordiniert Abholtermine und nimmt Reklamationen strukturiert auf, damit Ihr Team sich auf das Wesentliche konzentriert.",
    stats: {
      betriebe: "4.200+",
      mitarbeiter: "62.000",
      markttrend: "+8,4 %",
      label1: "Logistikbetriebe in Berlin",
      label2: "Beschäftigte in der Berliner Logistik",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Nordost Kurier GmbH – Berlin-Lichtenberg",
      challenge: "Das Unternehmen erhielt täglich über 300 Sendungsanfragen per Telefon und E-Mail. Disponenten verbrachten 40 % ihrer Zeit mit Statusauskünften statt mit Planung.",
      solution: "KI-Sendungsstatus-Bot per WhatsApp und Website, automatische Abholtermin-Koordination und strukturierte Reklamations-Erstannahme.",
      result1: "Telefonanfragen −72 %",
      result2: "Disponenten-Entlastung +38 %",
      result3: "Reklamationsbearbeitungszeit −55 %",
    },
    faqs: [
      {
        question: "Wie beantwortet KI Sendungsanfragen für Berliner Logistiker automatisch?",
        answer: "KI verbindet sich mit Ihrem Tracking-System und beantwortet Sendungsstatusanfragen sofort per WhatsApp, Website-Chat oder E-Mail — ohne Einbindung eines Disponenten.",
      },
      {
        question: "Kann KI Abholtermine für Berliner Kurierdienste koordinieren?",
        answer: "Ja — KI prüft Verfügbarkeiten, schlägt Zeitfenster vor und bestätigt Abholtermine automatisch. Änderungen werden ebenfalls automatisch kommuniziert.",
      },
      {
        question: "Wie hilft KI beim Reklamationsmanagement in der Berliner Logistik?",
        answer: "KI nimmt Reklamationen strukturiert auf, kategorisiert sie nach Art (Beschädigung, Verlust, Verzögerung) und leitet sie an die richtige Stelle weiter — inklusive automatischer Eingangsbestätigung.",
      },
      {
        question: "Was kostet KI-Beratung für ein Berliner Logistikunternehmen?",
        answer: "Das erste Gespräch ist kostenlos. Viele Berliner Logistiker starten mit einem Pilotprojekt für den Sendungsstatus-Bot ab 600 Euro monatlich und erweitern schrittweise.",
      },
    ],
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    layout: 2,
    metaTitle: "KI Beratung für Logistik Hamburg | kiberatung.de",
    metaDescription: "KI-Lösungen für Hamburger Logistik und Hafenunternehmen: Sendungsstatus, Zolldokumentation und automatisiertes Reklamationsmanagement.",
    h1: "KI für Hamburger Logistik: Hafen-Effizienz durch Automatisierung",
    intro: "Hamburgs Hafen ist Deutschlands wichtigstes Logistiktor zur Welt. Sendungsanfragen, Abholtermine und Reklamationen kommen in enormem Volumen — und auf mehreren Sprachen. KI beantwortet Statusanfragen automatisch, koordiniert Abholungen und nimmt Reklamationen strukturiert auf, sodass Disponenten freie Kapazität für komplexe Aufgaben haben.",
    stats: {
      betriebe: "5.800+",
      mitarbeiter: "94.000",
      markttrend: "+9,1 %",
      label1: "Logistikbetriebe in Hamburg",
      label2: "Beschäftigte in der Hamburger Logistik",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "HHLa Spedition GmbH – Hamburg-Harburg",
      challenge: "Das Hamburger Speditionsunternehmen erhielt täglich über 500 Sendungsanfragen — darunter viele internationale Kunden auf Englisch und Niederländisch. Disponenten wurden von Routineanfragen blockiert.",
      solution: "Mehrsprachiger KI-Sendungsstatus-Bot, automatische Abholkoordination mit Zeitfenstermanagement und KI-gestützte Reklamations-Erstannahme.",
      result1: "Telefonanfragen −68 %",
      result2: "Internationale Anfragen +100 % abgedeckt",
      result3: "Disponenten-Produktivität +42 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Hamburger Hafenlogistikern bei internationalen Sendungsanfragen?",
        answer: "KI beantwortet Sendungsanfragen mehrsprachig — Deutsch, Englisch, Niederländisch und mehr — automatisch und rund um die Uhr, ohne Sprachkenntnisse des Disponenten.",
      },
      {
        question: "Kann KI Abholtermine am Hamburger Hafen automatisch koordinieren?",
        answer: "Ja — KI prüft Zeitfenster, Kapazitäten und Torauslastung und koordiniert Abholtermine automatisch, inklusive Bestätigung und Erinnerungs-SMS.",
      },
      {
        question: "Wie funktioniert KI-Reklamationsmanagement für Speditionsunternehmen?",
        answer: "KI nimmt Reklamationen strukturiert auf, kategorisiert sie und leitet sie priorisiert an die Sachbearbeiter weiter — mit vollständiger Dokumentation von Anfang an.",
      },
      {
        question: "Wie lange dauert die Implementierung einer KI-Lösung in einem Hamburger Logistikbetrieb?",
        answer: "Einfache Lösungen wie ein Sendungsstatus-Bot sind in 2–3 Wochen live. Komplexere Systeme mit TMS-Integration dauern 6–8 Wochen.",
      },
    ],
  },
  {
    slug: "muenchen",
    name: "München",
    layout: 3,
    metaTitle: "KI Beratung für Logistik München | kiberatung.de",
    metaDescription: "KI-Lösungen für Münchner Logistikunternehmen: Sendungsstatus-Bot, Abholtermin-Koordination und Reklamations-Erstannahme. Erstberatung anfragen.",
    h1: "KI für Münchner Logistik: Just-in-Time mit KI-Effizienz",
    intro: "München ist Süddeutschlands Logistikzentrum mit direktem Zugang zu Österreich, Italien und Osteuropa. Automotive-Zulieferer, Kurierdienste und Speditionen erhalten täglich hunderte Sendungsanfragen und Reklamationen. KI entlastet Disponenten durch automatische Statusauskünfte, koordiniert Abholtermine und strukturiert Reklamationseingänge — damit Ihr Team sich auf kritische Sendungen fokussiert.",
    stats: {
      betriebe: "4.800+",
      mitarbeiter: "71.000",
      markttrend: "+7,8 %",
      label1: "Logistikbetriebe in München",
      label2: "Beschäftigte in der Münchner Logistik",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Bayern Express Logistik – München-Riem",
      challenge: "Der Münchner Kurierdienst lieferte zeitkritische Autoteile an OEM-Zulieferer. Sendungsanfragen und Abholtermine wurden manuell bearbeitet — mit steigendem Aufwand.",
      solution: "KI-Sendungsstatus-Bot mit TMS-Anbindung, automatische Abholtermin-Koordination und priorisierte Reklamations-Erstannahme für kritische Sendungen.",
      result1: "Sendungsanfragen −76 % manuell",
      result2: "Abholkoordination +100 % automatisch",
      result3: "Kundenzufriedenheit +29 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Münchner Automotive-Logistikern bei Sendungsanfragen?",
        answer: "KI verbindet sich mit dem TMS und beantwortet Sendungsstatusanfragen von OEM-Kunden sofort — inkl. Lieferzeitfenster, GPS-Position und Eskalation bei Abweichungen.",
      },
      {
        question: "Kann KI zeitkritische Abholtermine für Münchner Automobilzulieferer koordinieren?",
        answer: "Ja — KI berücksichtigt Zeitfenster, Fahrzeugverfügbarkeit und Priorisierung nach Dringlichkeit und koordiniert Abholungen automatisch, inklusive Fahrerzuweisung.",
      },
      {
        question: "Wie funktioniert KI-Reklamationsmanagement in der Münchner Logistik?",
        answer: "KI nimmt Reklamationen strukturiert auf, priorisiert nach Schwere (Beschädigung, Verlust, Verzögerung) und leitet sie mit vollständiger Dokumentation an den zuständigen Sachbearbeiter weiter.",
      },
      {
        question: "Ist KI-Beratung für kleine Münchner Kurierdienste sinnvoll?",
        answer: "Absolut — gerade kleine Dienste mit hohem Anfragevolumen profitieren enorm. Das erste Gespräch ist kostenlos, und wir empfehlen nur, was sich konkret rechnet.",
      },
    ],
  },
  {
    slug: "frankfurt",
    name: "Frankfurt",
    layout: 1,
    metaTitle: "KI Beratung für Logistik Frankfurt | kiberatung.de",
    metaDescription: "KI-Lösungen für Frankfurter Logistik und Luftfracht: Sendungsstatus-Automatisierung, Abholkoordination und Reklamationsmanagement.",
    h1: "KI für Frankfurter Logistik: Luftfracht-Speed mit KI-Automatisierung",
    intro: "Frankfurt am Main ist Europas wichtigstes Luftfrachtdrehkreuz. Zeitkritische Sendungen, internationale Kunden und hohe Anfragevolumen prägen den Alltag. KI-Automatisierung beantwortet Sendungsanfragen in Echtzeit, koordiniert Abholungen und nimmt Reklamationen strukturiert auf — in mehreren Sprachen und rund um die Uhr.",
    stats: {
      betriebe: "3.900+",
      mitarbeiter: "58.000",
      markttrend: "+10,2 %",
      label1: "Logistikbetriebe in Frankfurt",
      label2: "Beschäftigte in der Frankfurter Logistik",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "FRA Cargo Services – Frankfurt-Flughafen",
      challenge: "Der Luftfrachtdienstleister erhielt täglich über 600 internationale Sendungsanfragen — viele außerhalb der Bürozeiten und in verschiedenen Sprachen. Disponenten wurden dauerhaft überlastet.",
      solution: "Mehrsprachiger KI-Sendungsstatus-Bot (DE/EN/FR), automatische Abholtermin-Koordination für Luftfrachtsendungen und KI-Reklamations-Erstannahme.",
      result1: "Anfragen außerhalb Bürozeiten 100 % abgedeckt",
      result2: "Disponenten-Entlastung −65 % Routineaufwand",
      result3: "Kundenzufriedenheit +34 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Frankfurter Luftfrachtunternehmen bei internationalen Sendungsanfragen?",
        answer: "KI beantwortet Statusanfragen mehrsprachig (Deutsch, Englisch, Französisch etc.) automatisch, auch nachts und am Wochenende — ohne Personalaufwand.",
      },
      {
        question: "Kann KI Abholtermine am Frankfurter Flughafen automatisch koordinieren?",
        answer: "Ja — KI verwaltet Zeitfenster, Zollfreigaben und Abholbereitschaft und koordiniert Abholtermine automatisch mit Bestätigung per SMS oder E-Mail.",
      },
      {
        question: "Wie nimmt KI Reklamationen für Luftfrachtunternehmen auf?",
        answer: "KI führt den Kunden durch einen strukturierten Reklamationsprozess, erfasst alle relevanten Daten (Sendungsnummer, Schadensart, Fotos) und erstellt automatisch ein vollständiges Ticket.",
      },
      {
        question: "Ist KI-Beratung für kleine Frankfurter Speditionen sinnvoll?",
        answer: "Ja — auch kleine Speditionen mit hohem Telefonaufkommen profitieren sofort. Das erste Beratungsgespräch ist kostenlos.",
      },
    ],
  },
  {
    slug: "koeln",
    name: "Köln",
    layout: 2,
    metaTitle: "KI Beratung für Logistik Köln | kiberatung.de",
    metaDescription: "KI-Lösungen für Kölner Logistikunternehmen: Sendungsstatus, Abholtermin-Koordination und KI-Reklamationsmanagement. Anfragen.",
    h1: "KI für Kölner Logistik: Rhein-Korridor effizient automatisieren",
    intro: "Köln verbindet Rhein-Schifffahrt, Straße und Schiene — ein multimodaler Logistikstandort mit hohem Transaktionsvolumen. Sendungsanfragen, Abholtermine und Reklamationen häufen sich besonders rund um Messezeiträume. KI entlastet Disponenten durch automatische Statusauskünfte und strukturiertes Reklamationsmanagement.",
    stats: {
      betriebe: "3.400+",
      mitarbeiter: "51.000",
      markttrend: "+7,3 %",
      label1: "Logistikbetriebe in Köln",
      label2: "Beschäftigte in der Kölner Logistik",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Rhein Logistics KG – Köln-Niehl",
      challenge: "Das multimodale Logistikunternehmen erhielt während Messezeiträumen das Dreifache der üblichen Sendungsanfragen. Das Team war überlastet, Antwortzeiten stiegen auf Stunden.",
      solution: "KI-Sendungsstatus-Bot mit automatischer Lastspitzen-Erkennung, Abholtermin-Koordination und priorisiertes Messe-Reklamationsmanagement.",
      result1: "Antwortzeit auf Sendungsanfragen −88 %",
      result2: "Messe-Peak ohne Personalaufstockung bewältigt",
      result3: "Reklamationsquote −18 % durch bessere Kommunikation",
    },
    faqs: [
      {
        question: "Wie hilft KI Kölner Logistikern in Messezeiten mit dem Anfragevolumen?",
        answer: "KI skaliert automatisch mit dem Anfragevolumen — auch in Stoßzeiten rund um Kölner Messen beantwortet sie Sendungsanfragen sofort ohne Personalaufstockung.",
      },
      {
        question: "Kann KI multimodale Abholtermine in Köln koordinieren?",
        answer: "Ja — KI berücksichtigt Rhein-Schifffahrtszeiten, LKW-Kapazitäten und Bahnverbindungen und koordiniert Abholtermine über alle Verkehrsträger hinweg.",
      },
      {
        question: "Wie funktioniert KI-Reklamationsmanagement für Kölner Spediteure?",
        answer: "KI nimmt Reklamationen strukturiert auf, klassifiziert sie nach Transportweg (Straße/Schiff/Schiene) und leitet sie priorisiert an die richtigen Sachbearbeiter weiter.",
      },
      {
        question: "Wie schnell amortisiert sich KI für ein Kölner Logistikunternehmen?",
        answer: "Viele Kölner Logistiker berichten von einer Amortisation innerhalb von 3–5 Monaten durch reduzierte Disponenten-Routinearbeit. Das erste Gespräch ist kostenlos.",
      },
    ],
  },
  {
    slug: "duesseldorf",
    name: "Düsseldorf",
    layout: 3,
    metaTitle: "KI Beratung für Logistik Düsseldorf | kiberatung.de",
    metaDescription: "KI-Lösungen für Düsseldorfer Logistik: internationaler Handel, Sendungsstatus-Bot und automatisiertes Reklamationsmanagement.",
    h1: "KI für Düsseldorfer Logistik: Internationaler Handel automatisiert",
    intro: "Düsseldorf ist Hub für internationalen Handel und Importlogistik. Sendungsanfragen kommen aus aller Welt, auf Englisch, Japanisch und Arabisch. KI-Automatisierung beantwortet Statusanfragen mehrsprachig, koordiniert Abholtermine und nimmt Reklamationen strukturiert auf — ohne Mehraufwand für Ihr Team.",
    stats: {
      betriebe: "2.900+",
      mitarbeiter: "43.000",
      markttrend: "+8,0 %",
      label1: "Logistikbetriebe in Düsseldorf",
      label2: "Beschäftigte in der Düsseldorfer Logistik",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "DUS Import Logistics GmbH – Düsseldorf-Hafen",
      challenge: "Das Import-Logistikunternehmen betreute japanische und asiatische Handelspartner. Sprachbarrieren und Zeitzonenunterschiede führten zu Verzögerungen bei Sendungsanfragen.",
      solution: "Mehrsprachiger KI-Sendungsstatus-Bot (DE/EN/JA), automatische Abholkoordination mit Zeitzonenerkennung und KI-Reklamations-Erstannahme.",
      result1: "Anfragen aus Asien 100 % automatisch beantwortet",
      result2: "Antwortzeit auf 24/7 reduziert",
      result3: "Kundenzufriedenheit bei int. Kunden +41 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Düsseldorfer Logistikern mit internationalen Kunden?",
        answer: "KI kommuniziert automatisch in der Sprache des Kunden — Deutsch, Englisch, Japanisch, Arabisch — und beantwortet Sendungsanfragen auch zu anderen Zeitzonen sofort.",
      },
      {
        question: "Kann KI Abholtermine für internationale Kunden in Düsseldorf koordinieren?",
        answer: "Ja — KI erkennt Zeitzonen, kommuniziert in der Muttersprache und koordiniert Abholtermine vollautomatisch, inklusive Zollstatus-Information.",
      },
      {
        question: "Wie nimmt KI Reklamationen von internationalen Kunden auf?",
        answer: "KI führt den Kunden mehrsprachig durch den Reklamationsprozess, erfasst alle relevanten Daten und übersetzt die Informationen für Ihr Team ins Deutsche.",
      },
      {
        question: "Lohnt sich KI für kleinere Düsseldorfer Import-Speditionen?",
        answer: "Ja — gerade bei internationalem Kundenstamm spart KI überproportional viel Zeit. Das erste Beratungsgespräch ist kostenlos.",
      },
    ],
  },
  {
    slug: "stuttgart",
    name: "Stuttgart",
    layout: 1,
    metaTitle: "KI Beratung für Logistik Stuttgart | kiberatung.de",
    metaDescription: "KI-Lösungen für Stuttgarter Logistik: Automotive Just-in-Time, Sendungsstatus-Bot und Reklamationsmanagement. Erstberatung anfragen.",
    h1: "KI für Stuttgarter Logistik: Automotive Just-in-Time mit KI",
    intro: "Stuttgarts Logistiklandschaft ist geprägt von Automotive-Zulieferern und Just-in-Time-Anforderungen. Sendungsanfragen sind oft zeitkritisch, Reklamationen bei Lieferverzögerungen folgenreich. KI beantwortet Statusanfragen sofort, koordiniert Abholtermine mit Priorisierung und nimmt Reklamationen strukturiert auf — damit kein Bandstillstand riskiert wird.",
    stats: {
      betriebe: "2.600+",
      mitarbeiter: "39.000",
      markttrend: "+7,1 %",
      label1: "Logistikbetriebe in Stuttgart",
      label2: "Beschäftigte in der Stuttgarter Logistik",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Schwaben Teile Logistik – Stuttgart-Untertürkheim",
      challenge: "Der Automotive-Zulieferlogistiker erhielt täglich kritische Statusanfragen von OEM-Kunden. Verzögerungen in der Antwort gefährdeten Bandversorgung und Lieferverträge.",
      solution: "KI-Sendungsstatus-Bot mit kritischen Sendungs-Alerts, automatische Abholkoordination mit Priorisierung und Reklamations-Erstannahme mit OEM-Eskalation.",
      result1: "Kritische Anfragen in unter 60 Sek. beantwortet",
      result2: "OEM-Eskalationen −43 %",
      result3: "Disponenten-Routineaufwand −58 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Stuttgarter Automotive-Logistikern bei zeitkritischen Sendungsanfragen?",
        answer: "KI beantwortet Sendungsanfragen sofort und sendet automatisch Alerts bei Abweichungen — damit OEM-Kunden immer informiert sind, bevor ein Bandstillstand droht.",
      },
      {
        question: "Kann KI Just-in-Time-Abholtermine in Stuttgart automatisch koordinieren?",
        answer: "Ja — KI berücksichtigt Zeitfenster, Fahrzeugverfügbarkeit und OEM-Vorgaben und koordiniert Abholungen automatisch mit Priorisierung nach Dringlichkeit.",
      },
      {
        question: "Wie funktioniert KI-Reklamationsmanagement für Stuttgarter Automobilzulieferer?",
        answer: "KI nimmt Reklamationen strukturiert auf, priorisiert nach Schwere und OEM-Relevanz und löst automatisch die richtige Eskalation aus — mit vollständiger Dokumentation.",
      },
      {
        question: "Ist KI auch für kleinere Stuttgarter Zuliefererlogistiker geeignet?",
        answer: "Absolut — gerade kleinere Logistiker mit hohem Anfragedruck profitieren sofort. Wir analysieren Ihren Betrieb kostenlos in einem Erstgespräch.",
      },
    ],
  },
  {
    slug: "nuernberg",
    name: "Nürnberg",
    layout: 2,
    metaTitle: "KI Beratung für Logistik Nürnberg | kiberatung.de",
    metaDescription: "KI-Lösungen für Nürnberger Logistikunternehmen: Sendungsstatus-Automatisierung, Abholkoordination und Reklamationsmanagement.",
    h1: "KI für Nürnberger Logistik: Süddeutschland-Hub effizient verwalten",
    intro: "Nürnberg liegt im Zentrum Europas und ist Logistikdrehscheibe für ganz Süddeutschland. Das Spielzeug- und Elektronikgeschäft sowie der Messebetrieb sorgen für saisonale Peaks. KI beantwortet Sendungsanfragen automatisch, koordiniert Abholtermine und entlastet Disponenten gerade in Hochzeiten rund um Spielwarenmesse und Christkindlesmarkt.",
    stats: {
      betriebe: "2.200+",
      mitarbeiter: "34.000",
      markttrend: "+6,9 %",
      label1: "Logistikbetriebe in Nürnberg",
      label2: "Beschäftigte in der Nürnberger Logistik",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Franken Logistik GmbH – Nürnberg-Hafen",
      challenge: "Das Logistikunternehmen war rund um die Spielwarenmesse im Januar mit Sendungsanfragen überflutet. Disponenten kamen mit manueller Beantwortung nicht mehr nach.",
      solution: "KI-Sendungsstatus-Bot mit Messe-Peak-Erkennung, automatische Abholkoordination und priorisiertes Reklamationsmanagement für Spielzeug- und Elektronikware.",
      result1: "Messe-Peak ohne Mehrpersonal bewältigt",
      result2: "Sendungsanfragen −69 % manuell",
      result3: "Kundenzufriedenheit +27 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Nürnberger Logistikern während der Spielwarenmesse?",
        answer: "KI skaliert automatisch in Hochzeiten und beantwortet Sendungsanfragen von Spielwarenherstellern und Händlern sofort — ohne Personalaufstockung.",
      },
      {
        question: "Kann KI Abholtermine für die Nürnberger Messelogistik koordinieren?",
        answer: "Ja — KI verwaltet Zeitfenster, Laderampenkapazitäten und Priorisierungen rund um Messetermine und koordiniert Abholungen vollautomatisch.",
      },
      {
        question: "Wie nimmt KI Reklamationen für Nürnberger Logistiker auf?",
        answer: "KI führt Kunden durch einen strukturierten Reklamationsprozess, erfasst alle notwendigen Daten und erstellt automatisch ein priorisiertes Ticket für Ihr Team.",
      },
      {
        question: "Für welche Nürnberger Logistikbetriebe eignet sich KI besonders?",
        answer: "Besonders geeignet für Kurierdienste, Speditionen und Lagerbetriebe mit hohem Anfragevolumen. Das erste Beratungsgespräch ist immer kostenlos.",
      },
    ],
  },
  {
    slug: "leipzig",
    name: "Leipzig",
    layout: 3,
    metaTitle: "KI Beratung für Logistik Leipzig | kiberatung.de",
    metaDescription: "KI-Lösungen für Leipziger Logistikunternehmen: DHL-Hub-Umfeld, Sendungsstatus-Bot und Reklamationsmanagement. Anfragen.",
    h1: "KI für Leipziger Logistik: Europas wachsendstes Hub automatisiert",
    intro: "Leipzig ist DHL-Hauptdrehscheibe und einer der am schnellsten wachsenden Logistikstandorte Europas. Das enorme Sendungsvolumen und das rasante Wachstum schaffen täglich neue Anforderungen. KI beantwortet Sendungsanfragen automatisch, koordiniert Abholtermine und verwaltet Reklamationen strukturiert — und skaliert mit Ihrem Wachstum.",
    stats: {
      betriebe: "1.900+",
      mitarbeiter: "42.000",
      markttrend: "+14,7 %",
      label1: "Logistikbetriebe in Leipzig",
      label2: "Beschäftigte in der Leipziger Logistik",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Sachsen Kurier GmbH – Leipzig-Schkeuditz",
      challenge: "Das wachsende Unternehmen verdoppelte sein Sendungsvolumen innerhalb von 18 Monaten. Sendungsanfragen und Reklamationen skalieren mit dem Volumen — das Team nicht.",
      solution: "KI-Sendungsstatus-Bot mit automatischer Skalierung, Abholtermin-Koordination und strukturiertes Reklamationsmanagement für schnell wachsende Volumen.",
      result1: "Sendungsvolumen 2× ohne Mehrpersonal für Anfragen",
      result2: "Reklamationsbearbeitungszeit −61 %",
      result3: "Disponenten-Entlastung +48 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Leipziger Logistikern, mit dem Wachstum des Standorts Schritt zu halten?",
        answer: "KI skaliert automatisch mit dem Sendungsvolumen — ohne dass für Sendungsanfragen oder Reklamationen proportional mehr Personal eingestellt werden muss.",
      },
      {
        question: "Kann KI Abholtermine am DHL-Hub in Leipzig koordinieren?",
        answer: "Ja — KI verwaltet Zeitfenster, Kapazitäten und Priorisierungen rund um das Expressvolumen des Schkeuditz-Hubs und koordiniert vollautomatisch.",
      },
      {
        question: "Wie funktioniert skalierbares KI-Reklamationsmanagement in Leipzig?",
        answer: "KI nimmt Reklamationen strukturiert auf und skaliert mit dem Volumen — auch in Hochzeiten wie Black Friday oder Weihnachten werden alle Reklamationen sofort erfasst und priorisiert.",
      },
      {
        question: "Ist KI auch für schnell wachsende Startups in der Leipziger Logistik geeignet?",
        answer: "Absolut — KI gibt wachsenden Unternehmen Skalierbarkeit ohne proportionale Personalkosten. Das erste Gespräch ist kostenlos.",
      },
    ],
  },
  {
    slug: "bremen",
    name: "Bremen",
    layout: 1,
    metaTitle: "KI Beratung für Logistik Bremen | kiberatung.de",
    metaDescription: "KI-Lösungen für Bremer Logistik und Seehandel: Sendungsstatus, Abholkoordination und automatisiertes Reklamationsmanagement.",
    h1: "KI für Bremer Logistik: Seehandel und Hafenlogistik automatisiert",
    intro: "Bremen ist einer der bedeutendsten Seehafenstandorte Deutschlands — Spezialität Automobil- und Kaffeeimporte. Sendungsanfragen kommen international, Abholtermine sind hafengebunden. KI beantwortet Statusanfragen mehrsprachig, koordiniert Abholungen mit Hafenzeitfenstern und nimmt Reklamationen strukturiert auf.",
    stats: {
      betriebe: "1.600+",
      mitarbeiter: "28.000",
      markttrend: "+6,2 %",
      label1: "Logistikbetriebe in Bremen",
      label2: "Beschäftigte in der Bremer Logistik",
      label3: "Umsatzwachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Weser Cargo Logistics – Bremen-Überseehafen",
      challenge: "Der Hafenlogistiker bearbeitete Sendungsanfragen von Automobilimporteuren aus Japan und Südkorea. Zeitzonenunterschiede und Sprachbarrieren führten zu Verzögerungen.",
      solution: "Mehrsprachiger KI-Sendungsstatus-Bot mit Hafenzeitplan-Integration, automatische Abholkoordination und KI-Reklamations-Erstannahme für Importware.",
      result1: "Internationale Anfragen 100 % automatisch",
      result2: "Hafenabholungen −40 % Koordinationsaufwand",
      result3: "Kundenzufriedenheit bei Importeuren +36 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Bremer Hafenlogistikern bei internationalen Sendungsanfragen?",
        answer: "KI beantwortet Sendungsanfragen mehrsprachig — Deutsch, Englisch, Japanisch, Koreanisch — automatisch und rund um die Uhr, auch zu asiatischen Geschäftszeiten.",
      },
      {
        question: "Kann KI Abholtermine am Bremer Hafen automatisch koordinieren?",
        answer: "Ja — KI berücksichtigt Hafenzeitpläne, Zollfreigaben und Liegeplatzpläne und koordiniert Abholtermine automatisch mit Bestätigung in der Sprache des Kunden.",
      },
      {
        question: "Wie nimmt KI Reklamationen für Bremer Importlogistiker auf?",
        answer: "KI führt den Kunden mehrsprachig durch den Reklamationsprozess, erfasst alle relevanten Daten zu beschädigter oder fehlender Ware und erstellt ein vollständiges Schadensticket.",
      },
      {
        question: "Was kostet KI-Beratung für ein Bremer Logistikunternehmen?",
        answer: "Das erste Gespräch ist kostenlos. Viele Bremer Hafenlogistiker starten mit einem mehrsprachigen Sendungsstatus-Bot und skalieren schrittweise.",
      },
    ],
  },
];

export const cityMap: Record<string, CityData> = Object.fromEntries(
  cities.map((c) => [c.slug, c])
);

export function generateStaticParamsList() {
  return cities.map((c) => ({ stadt: c.slug }));
}
