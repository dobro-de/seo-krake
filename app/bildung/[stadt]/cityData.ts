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
    metaTitle: "KI Beratung für Bildungseinrichtungen Berlin | kiberatung.de",
    metaDescription: "KI-Lösungen für Berliner Bildungseinrichtungen: automatische Kursbuchungen, FAQ-Bot und Prüfungsbegleitung. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Berliner Bildungseinrichtungen",
    intro: "Berlin hat eine der vielfältigsten Bildungslandschaften Deutschlands — von Sprachschulen über Nachhilfeinstitute bis zu beruflichen Weiterbildungszentren. Die wachsende Nachfrage nach flexiblen Kursangeboten und digitaler Kommunikation trifft auf Sekretariate, die mit Buchungsanfragen und Routinefragen überlastet sind. KI automatisiert Kursbuchungen, beantwortet FAQ sofort und begleitet Lernende durch die Prüfungsvorbereitung.",
    stats: {
      betriebe: "3.800+",
      mitarbeiter: "48.000",
      markttrend: "+9,2 %",
      label1: "Bildungseinrichtungen in Berlin",
      label2: "Beschäftigte im Berliner Bildungssektor",
      label3: "Nachfragewachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Sprachschule Kreuzberg – Berlin-Kreuzberg",
      challenge: "Die Sprachschule erhielt täglich über 80 Buchungsanfragen und immer dieselben Fragen zu Kursniveaus, Terminen und Preisen. Verwaltung band das Team — statt Unterricht.",
      solution: "KI-Kursbuchungssystem mit automatischer Niveauzuweisung, FAQ-Bot für Kursinhalte und WhatsApp-Integration für Elternanfragen.",
      result1: "Buchungsaufwand −78 %",
      result2: "FAQ-Anfragen 100 % automatisch",
      result3: "Schülerzahl +32 %",
    },
    faqs: [
      {
        question: "Wie automatisiert KI Kursbuchungen für Berliner Sprachschulen?",
        answer: "KI übernimmt den gesamten Buchungsprozess: Anfrage entgegennehmen, Verfügbarkeit prüfen, Buchung bestätigen und Zahlungserinnerungen senden — rund um die Uhr ohne Sekretariatsaufwand.",
      },
      {
        question: "Kann KI Fragen zu Kursinhalten für Berliner Bildungsanbieter beantworten?",
        answer: "Ja — ein KI-FAQ-Bot auf Ihrer Website oder per WhatsApp beantwortet Fragen zu Kursinhalten, Voraussetzungen, Terminen und Preisen sofort und individuell.",
      },
      {
        question: "Wie hilft KI bei der Prüfungsvorbereitung für Berliner Lernende?",
        answer: "KI erstellt personalisierte Lernpläne, beantwortet Übungsfragen und gibt Feedback zu Lernfortschritten — als digitaler Lernbegleiter zwischen den Stunden.",
      },
      {
        question: "Was kostet KI-Beratung für ein Berliner Nachhilfeinstitut?",
        answer: "Das erste Gespräch ist kostenlos. Viele Berliner Institute starten mit einem KI-Buchungssystem ab 400 Euro monatlich und erweitern schrittweise um FAQ-Bot und Prüfungsassistenten.",
      },
    ],
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    layout: 2,
    metaTitle: "KI Beratung für Bildungseinrichtungen Hamburg | kiberatung.de",
    metaDescription: "KI-Lösungen für Hamburger Bildungseinrichtungen: Kursbuchungs-Automatisierung, mehrsprachiger FAQ-Bot und Prüfungsbegleitung. Anfragen.",
    h1: "KI für Hamburger Bildungseinrichtungen: Mehr Schüler, weniger Verwaltung",
    intro: "Hamburg ist ein bedeutender Standort für Sprachkurse, berufliche Weiterbildung und internationale Bildungsangebote. Der Hamburger Hafen bringt eine multinationale Klientel, die mehrsprachige Kommunikation erwartet. KI beantwortet Anfragen auf Deutsch und Englisch, automatisiert Buchungen und entlastet Lehrkräfte von administrativem Aufwand.",
    stats: {
      betriebe: "2.600+",
      mitarbeiter: "34.000",
      markttrend: "+8,4 %",
      label1: "Bildungseinrichtungen in Hamburg",
      label2: "Beschäftigte im Hamburger Bildungssektor",
      label3: "Nachfragewachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Lernstudio Altona – Hamburg-Altona",
      challenge: "Das Nachhilfeinstitut hatte eine wachsende internationale Klientel. Elternanfragen kamen auf Englisch und Türkisch, das Team konnte nicht immer schnell antworten.",
      solution: "Mehrsprachiger KI-FAQ-Bot (DE/EN/TR), automatisches Kursbuchungssystem und personalisierter Prüfungsvorbereitungs-Assistent.",
      result1: "Internationale Anfragen 100 % abgedeckt",
      result2: "Buchungen +44 % durch 24/7-Verfügbarkeit",
      result3: "Lehrkräfte-Entlastung −65 % Verwaltungsaufwand",
    },
    faqs: [
      {
        question: "Kann KI Elternanfragen auf Englisch für Hamburger Nachhilfeinstitute beantworten?",
        answer: "Ja — KI beantwortet Elternanfragen mehrsprachig auf Deutsch, Englisch und weiteren Sprachen automatisch, sodass internationale Familien sofort eine Antwort erhalten.",
      },
      {
        question: "Wie hilft KI bei der Buchungsverwaltung für Hamburger Bildungsanbieter?",
        answer: "KI übernimmt Buchung, Stornierung, Wartelistenverwaltung und Zahlungsbestätigung vollautomatisch — ohne Sekretariatsaufwand, rund um die Uhr.",
      },
      {
        question: "Lohnt sich KI-Beratung für kleine Hamburger Nachhilfeinstitute?",
        answer: "Ja — besonders kleine Institute profitieren von KI, da sie keine dedizierte Verwaltungskraft brauchen. Der FAQ-Bot und das Buchungssystem amortisieren sich meist in wenigen Monaten.",
      },
      {
        question: "Wie lange dauert die Implementierung einer KI-Lösung in einem Hamburger Bildungsinstitut?",
        answer: "Ein einfacher FAQ-Bot und Buchungssystem sind in 1–2 Wochen live. Integrierter Prüfungsassistent und Elternkommunikation dauern 3–4 Wochen.",
      },
    ],
  },
  {
    slug: "muenchen",
    name: "München",
    layout: 3,
    metaTitle: "KI Beratung für Bildungseinrichtungen München | kiberatung.de",
    metaDescription: "KI-Lösungen für Münchner Bildungseinrichtungen: automatische Kursbuchungen, Prüfungsbegleitung und FAQ-Automatisierung. Erstberatung anfragen.",
    h1: "KI für Münchner Bildung: Abitur-Vorbereitung und Kursbuchungen automatisiert",
    intro: "München hat eine hohe Nachfrage nach Nachhilfe, Abiturvorbereitung und beruflicher Weiterbildung — getrieben von anspruchsvollen Bildungszielen und kaufkräftigen Familien. Die Erwartungen an Service und Reaktionszeit sind hoch. KI-Buchungssysteme und intelligente Prüfungsassistenten heben Münchner Bildungseinrichtungen auf ein neues Niveau.",
    stats: {
      betriebe: "2.900+",
      mitarbeiter: "39.000",
      markttrend: "+10,1 %",
      label1: "Bildungseinrichtungen in München",
      label2: "Beschäftigte im Münchner Bildungssektor",
      label3: "Nachfragewachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Lernzentrum Heller – München-Schwabing",
      challenge: "Das Nachhilfeinstitut hatte in der Abiturvorbereitungszeit (März–Mai) dreifaches Anfragevolumen. Buchungen und Elternanfragen überlasteten das Sekretariat.",
      solution: "KI-Buchungssystem mit automatischer Kapazitätsverwaltung, Prüfungsvorbereitungs-Assistent für Abiturienten und KI-Elternkommunikation.",
      result1: "Abiturzeit ohne Mehrpersonal bewältigt",
      result2: "Buchungsaufwand −75 %",
      result3: "Schülerzufriedenheit +38 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Münchner Nachhilfeinstituten in der Abitur-Hochsaison?",
        answer: "KI skaliert automatisch in Hochzeiten — Buchungen, FAQ und Prüfungsbegleitung laufen vollautomatisch, ohne Personalaufstockung in März und April.",
      },
      {
        question: "Kann KI personalisierte Abiturvorbereitung für Münchner Schüler anbieten?",
        answer: "Ja — der KI-Prüfungsassistent erstellt individuelle Lernpläne basierend auf Schwächen und Prüfungsterminen, beantwortet Übungsfragen und trackt Fortschritte.",
      },
      {
        question: "Wie beantwortet KI Elternanfragen für Münchner Nachhilfeinstitute?",
        answer: "KI beantwortet Fragen zu Lernfortschritten, Terminen, Preisen und Kurswechseln automatisch — per WhatsApp, E-Mail oder Website-Chat.",
      },
      {
        question: "Ist KI auch für gehobene Münchner Bildungsanbieter mit individuellen Angeboten geeignet?",
        answer: "Absolut — KI passt sich Ihrem Angebot an. Das erste Beratungsgespräch ist kostenlos, und wir empfehlen nur, was sich konkret für Ihr Institut rechnet.",
      },
    ],
  },
  {
    slug: "frankfurt",
    name: "Frankfurt",
    layout: 1,
    metaTitle: "KI Beratung für Bildungseinrichtungen Frankfurt | kiberatung.de",
    metaDescription: "KI-Lösungen für Frankfurter Bildungseinrichtungen: Business-Englisch-Kurse, automatische Buchungen und mehrsprachiger FAQ-Bot.",
    h1: "KI für Frankfurter Bildung: Business-Englisch und Weiterbildung automatisiert",
    intro: "Frankfurt hat als Finanz- und Wirtschaftszentrum eine besonders hohe Nachfrage nach Business-Englisch, Managementtraining und beruflicher Weiterbildung. Internationale Klientel erwartet sofortige Antworten auf Englisch. KI automatisiert Buchungen, beantwortet Kursinhalts-Fragen mehrsprachig und begleitet Lernende durch Zertifikatsprüfungen.",
    stats: {
      betriebe: "2.100+",
      mitarbeiter: "28.000",
      markttrend: "+9,6 %",
      label1: "Bildungseinrichtungen in Frankfurt",
      label2: "Beschäftigte im Frankfurter Bildungssektor",
      label3: "Nachfragewachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Business English Academy – Frankfurt-Westend",
      challenge: "Die Sprachschule betreute Banker und Unternehmensberater mit hohen Erwartungen an Erreichbarkeit. Buchungen und Anfragen kamen häufig abends und am Wochenende.",
      solution: "KI-Buchungssystem mit 24/7-Verfügbarkeit, mehrsprachiger FAQ-Bot (DE/EN) und KI-Prüfungsbegleitung für TOEIC und Cambridge-Zertifikate.",
      result1: "Abend- und Wochenend-Buchungen +89 %",
      result2: "FAQ-Anfragen 100 % automatisch",
      result3: "Zertifikat-Erfolgsrate +28 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Frankfurter Sprachschulen mit internationaler Business-Klientel?",
        answer: "KI beantwortet Anfragen auf Englisch und Deutsch sofort, bucht Kurse automatisch und begleitet Lernende durch Zertifikatsvorbereitung — ohne Mehraufwand für das Team.",
      },
      {
        question: "Kann KI Kursbuchungen für Frankfurter Weiterbildungsanbieter automatisieren?",
        answer: "Ja — KI übernimmt Buchung, Stornierung, Rechnungsversand und Zahlungserinnerungen vollautomatisch, auch abends und am Wochenende.",
      },
      {
        question: "Wie hilft KI bei der Vorbereitung auf TOEIC und Cambridge-Zertifikate?",
        answer: "Der KI-Prüfungsassistent erstellt individuelle Lernpläne, simuliert Prüfungssituationen und gibt personalisiertes Feedback — als digitaler Lernbegleiter.",
      },
      {
        question: "Ist KI-Beratung für kleine Frankfurter Weiterbildungsinstitute geeignet?",
        answer: "Ja — auch kleine Institute mit hohem Anfragevolumen profitieren sofort. Das erste Gespräch ist kostenlos.",
      },
    ],
  },
  {
    slug: "stuttgart",
    name: "Stuttgart",
    layout: 2,
    metaTitle: "KI Beratung für Bildungseinrichtungen Stuttgart | kiberatung.de",
    metaDescription: "KI-Lösungen für Stuttgarter Bildungseinrichtungen: technische Weiterbildung, automatische Kursbuchungen und Prüfungsbegleitung.",
    h1: "KI für Stuttgarter Bildung: Technische Weiterbildung automatisiert",
    intro: "Stuttgarts Bildungsmarkt ist geprägt von technischer und industrieller Weiterbildung — für die Automotive- und Maschinenbaubranche. Unternehmen und Individuen buchen Schulungen, fragen nach Inhalten und benötigen Zertifikatsvorbereitung. KI automatisiert Buchungen, beantwortet FAQ und begleitet Lernende durch technische Prüfungen.",
    stats: {
      betriebe: "1.800+",
      mitarbeiter: "24.000",
      markttrend: "+8,1 %",
      label1: "Bildungseinrichtungen in Stuttgart",
      label2: "Beschäftigte im Stuttgarter Bildungssektor",
      label3: "Nachfragewachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "TechLearn Stuttgart – Stuttgart-Zuffenhausen",
      challenge: "Das technische Weiterbildungsinstitut erhielt Buchungsanfragen von Industrieunternehmen für ganze Mitarbeitergruppen. Koordination war aufwendig und fehleranfällig.",
      solution: "KI-Buchungssystem für Gruppenanmeldungen, FAQ-Bot für Kursinhalte und technische Zertifikatsvorbereitung mit personalisierten Lernpfaden.",
      result1: "Gruppenanmeldungen −70 % Koordinationsaufwand",
      result2: "FAQ vollständig automatisiert",
      result3: "Zertifikats-Erstbestehensrate +22 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Stuttgarter Weiterbildungsinstituten bei Gruppenanmeldungen?",
        answer: "KI verwaltet Gruppenanmeldungen vollautomatisch — von der Anfrage über die Kapazitätsprüfung bis zur Rechnungsstellung an Unternehmen.",
      },
      {
        question: "Kann KI Fragen zu technischen Kursinhalten für Stuttgarter Institute beantworten?",
        answer: "Ja — ein FAQ-Bot auf Basis Ihrer Kursdokumentation beantwortet technische Inhaltsfragen, Voraussetzungen und Abschlüsse sofort und präzise.",
      },
      {
        question: "Wie hilft KI bei der Vorbereitung auf technische Zertifikate in Stuttgart?",
        answer: "KI erstellt individuelle Lernpläne für Zertifikatsprüfungen (IHK, DIN-Normen etc.), beantwortet Übungsfragen und trackt den Lernfortschritt.",
      },
      {
        question: "Lohnt sich KI für kleine Stuttgarter Weiterbildungsanbieter?",
        answer: "Absolut — gerade bei Gruppenanmeldungen spart KI überproportional viel Koordinationsaufwand. Das erste Gespräch ist kostenlos.",
      },
    ],
  },
  {
    slug: "koeln",
    name: "Köln",
    layout: 3,
    metaTitle: "KI Beratung für Bildungseinrichtungen Köln | kiberatung.de",
    metaDescription: "KI-Lösungen für Kölner Bildungseinrichtungen: Musik- und Kreativkurse, Kursbuchungs-Automatisierung und FAQ-Bot. Anfragen.",
    h1: "KI für Kölner Bildung: Musik, Kreativität und Nachhilfe automatisiert",
    intro: "Köln hat eine besonders vielfältige Bildungslandschaft — von Musikschulen und Kreativkursen bis zu Nachhilfeinstituten. Elternanfragen, Kursbuchungen und Inhaltsfragen kommen in hohem Volumen. KI entlastet Kölner Bildungseinrichtungen von administrativer Arbeit und schafft Raum für das Wesentliche: Unterrichten.",
    stats: {
      betriebe: "2.400+",
      mitarbeiter: "31.000",
      markttrend: "+7,8 %",
      label1: "Bildungseinrichtungen in Köln",
      label2: "Beschäftigte im Kölner Bildungssektor",
      label3: "Nachfragewachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Musikschule Rheinland – Köln-Nippes",
      challenge: "Die Musikschule mit 12 Lehrkräften erhielt täglich 40–60 Elternanfragen zu Instrumenten, Terminen und Kursoptionen. Verwaltungsarbeit dominierte den Alltag.",
      solution: "KI-FAQ-Bot für Instrumenten- und Kursfragen, automatisches Buchungssystem und KI-Elternkommunikation per WhatsApp.",
      result1: "Elternanfragen −72 % manuell",
      result2: "Buchungen 100 % automatisch",
      result3: "Neue Schüler +28 % durch bessere Erreichbarkeit",
    },
    faqs: [
      {
        question: "Wie hilft KI Kölner Musikschulen bei der Kursbuchung?",
        answer: "KI verwaltet Buchungen für alle Instrumente, Altersgruppen und Kursniveaus automatisch — mit Wartelistenverwaltung und automatischer Bestätigung.",
      },
      {
        question: "Kann KI Elternanfragen für Kölner Nachhilfeinstitute automatisch beantworten?",
        answer: "Ja — ein KI-Bot auf WhatsApp oder Ihrer Website beantwortet Fragen zu Kursinhalten, Lehrkräften, Preisen und Terminen sofort und ohne Wartezeit.",
      },
      {
        question: "Wie hilft KI Kölner Kreativkursanbietern?",
        answer: "KI automatisiert Buchungen, beantwortet Inhaltsfragen und erinnert Teilnehmer automatisch an Kurstermine — ideal für Mal-, Foto- und Designkurse.",
      },
      {
        question: "Was kostet KI-Beratung für ein Kölner Bildungsinstitut?",
        answer: "Das erste Gespräch ist kostenlos. Viele Kölner Institute starten mit einem FAQ-Bot ab 300 Euro monatlich und erweitern schrittweise.",
      },
    ],
  },
  {
    slug: "duesseldorf",
    name: "Düsseldorf",
    layout: 1,
    metaTitle: "KI Beratung für Bildungseinrichtungen Düsseldorf | kiberatung.de",
    metaDescription: "KI-Lösungen für Düsseldorfer Bildungseinrichtungen: mehrsprachige Kursbuchungen, internationaler FAQ-Bot und Prüfungsbegleitung.",
    h1: "KI für Düsseldorfer Bildung: Internationale Klientel mehrsprachig betreuen",
    intro: "Düsseldorf hat durch seine internationale Community eine besonders hohe Nachfrage nach mehrsprachigen Bildungsangeboten — Japanisch, Englisch, Niederländisch. Bildungseinrichtungen müssen Anfragen in verschiedenen Sprachen bearbeiten und Buchungen international koordinieren. KI löst das mehrsprachig und automatisch.",
    stats: {
      betriebe: "1.900+",
      mitarbeiter: "25.000",
      markttrend: "+8,7 %",
      label1: "Bildungseinrichtungen in Düsseldorf",
      label2: "Beschäftigte im Düsseldorfer Bildungssektor",
      label3: "Nachfragewachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "International Learning Center – Düsseldorf-Stadtmitte",
      challenge: "Das internationale Bildungszentrum betreute japanische und niederländische Kunden. Sprachbarrieren verlangsamten Buchungen und FAQ-Bearbeitung erheblich.",
      solution: "Mehrsprachiger KI-Buchungsbot (DE/EN/JA/NL), FAQ-Automatisierung in vier Sprachen und KI-Prüfungsbegleitung mit mehrsprachigen Lernmaterialien.",
      result1: "Japanische Buchungen +156 %",
      result2: "Mehrsprachige Anfragen 100 % abgedeckt",
      result3: "Teamaufwand für Übersetzungen −90 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Düsseldorfer Bildungsanbietern mit japanischen Kunden?",
        answer: "KI kommuniziert vollautomatisch auf Japanisch — Kursbuchungen, FAQ und Lernbegleitung — ohne dass Ihr Team Japanischkenntnisse braucht.",
      },
      {
        question: "Kann KI mehrsprachige Kursbuchungen für Düsseldorfer Institute automatisieren?",
        answer: "Ja — KI erkennt die Sprache des Kunden automatisch und führt den gesamten Buchungsprozess in der jeweiligen Sprache durch.",
      },
      {
        question: "Wie hilft KI bei der Prüfungsvorbereitung für internationale Lernende in Düsseldorf?",
        answer: "KI erstellt Lernmaterialien in der Muttersprache des Lernenden, beantwortet Fragen und begleitet durch Zertifikatsprüfungen — mehrsprachig und personalisiert.",
      },
      {
        question: "Lohnt sich KI für kleine Düsseldorfer Bildungsanbieter mit internationaler Klientel?",
        answer: "Absolut — mehrsprachige KI zahlt sich besonders bei internationaler Klientel aus. Das erste Beratungsgespräch ist kostenlos.",
      },
    ],
  },
  {
    slug: "leipzig",
    name: "Leipzig",
    layout: 2,
    metaTitle: "KI Beratung für Bildungseinrichtungen Leipzig | kiberatung.de",
    metaDescription: "KI-Lösungen für Leipziger Bildungseinrichtungen: digitale Kursbuchungen, WhatsApp-FAQ-Bot und Prüfungsbegleitung. Anfragen.",
    h1: "KI für Leipziger Bildung: Digital-affines Publikum begeistern",
    intro: "Leipzigs junges, digital-affines Stadtpublikum erwartet sofortige Kommunikation über digitale Kanäle — WhatsApp, Instagram-DMs und Website-Chat. Bildungseinrichtungen, die auf KI-gestützte Kommunikation setzen, erreichen diese Zielgruppe dort, wo sie ist. KI-Buchungssysteme und FAQ-Bots sind für Leipziger Bildungsanbieter ein echter Wachstumsmotor.",
    stats: {
      betriebe: "1.400+",
      mitarbeiter: "18.000",
      markttrend: "+11,8 %",
      label1: "Bildungseinrichtungen in Leipzig",
      label2: "Beschäftigte im Leipziger Bildungssektor",
      label3: "Nachfragewachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Nachhilfezentrum Leipzig-Mitte – Leipzig-Zentrum",
      challenge: "Das wachsende Nachhilfeinstitut hatte eine junge Klientel, die WhatsApp-Kommunikation und 24/7-Buchbarkeit erwartete. Das Sekretariat konnte mit dem Wachstum nicht mithalten.",
      solution: "KI-Buchungsbot per WhatsApp und Website, FAQ-Automatisierung über alle digitalen Kanäle und KI-Prüfungsbegleitung für Abitur und MSA.",
      result1: "WhatsApp-Buchungen +210 %",
      result2: "Buchungsaufwand −68 %",
      result3: "Schülerzahl +46 % in 6 Monaten",
    },
    faqs: [
      {
        question: "Kann KI Kursbuchungen für Leipziger Bildungsanbieter per WhatsApp automatisieren?",
        answer: "Ja — ein KI-WhatsApp-Bot nimmt Buchungsanfragen entgegen, prüft Verfügbarkeiten und bestätigt Buchungen vollautomatisch, rund um die Uhr.",
      },
      {
        question: "Wie hilft KI Leipziger Nachhilfeinstituten, mit dem Stadtbewachstum Schritt zu halten?",
        answer: "KI skaliert Buchung, Kommunikation und Prüfungsbegleitung automatisch mit dem Wachstum — ohne dass proportional mehr Verwaltungspersonal eingestellt werden muss.",
      },
      {
        question: "Kann KI Abiturvorbereitung für Leipziger Schüler digitalisieren?",
        answer: "Ja — der KI-Prüfungsassistent erstellt individuelle Lernpläne, beantwortet Übungsfragen und gibt Feedback — als digitaler Lernbegleiter auf dem Smartphone.",
      },
      {
        question: "Ist KI auch für kleine Bildungsanbieter in Leipzig geeignet?",
        answer: "Absolut — gerade kleine Institute mit großem Wachstumspotenzial profitieren. Das erste Gespräch ist immer kostenlos.",
      },
    ],
  },
  {
    slug: "nuernberg",
    name: "Nürnberg",
    layout: 3,
    metaTitle: "KI Beratung für Bildungseinrichtungen Nürnberg | kiberatung.de",
    metaDescription: "KI-Lösungen für Nürnberger Bildungseinrichtungen: automatische Kursbuchungen, FAQ-Bot und Prüfungsbegleitung. Kostenlose Erstberatung.",
    h1: "KI für Nürnberger Bildung: Traditionsreiche Institute digital transformieren",
    intro: "Nürnbergs Bildungsmarkt ist solide und mittelständisch geprägt — von Familiennachhilfeinstituten bis zu beruflichen Weiterbildungszentren. KI ermöglicht es diesen Instituten, mit gleichem Team mehr Schüler zu betreuen, Buchungen zu automatisieren und Elternanfragen sofort zu beantworten — ohne digitale Überforderung.",
    stats: {
      betriebe: "1.200+",
      mitarbeiter: "16.000",
      markttrend: "+7,2 %",
      label1: "Bildungseinrichtungen in Nürnberg",
      label2: "Beschäftigte im Nürnberger Bildungssektor",
      label3: "Nachfragewachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Lernhilfe Franken – Nürnberg-Innenstadt",
      challenge: "Das familiengeführte Nachhilfeinstitut hatte ein Sekretariat, das täglich mit denselben 20 Fragen zu Preisen, Terminen und Lehrkräften beschäftigt war.",
      solution: "KI-FAQ-Bot für alle Standardfragen, automatisches Buchungssystem und KI-Elternkommunikation per E-Mail und WhatsApp.",
      result1: "Sekretariat-Routinearbeit −71 %",
      result2: "Buchungen 100 % automatisch",
      result3: "Elternzufriedenheit +34 %",
    },
    faqs: [
      {
        question: "Wie hilft KI familiengeführten Nürnberger Nachhilfeinstituten?",
        answer: "KI übernimmt die Routinearbeit — Buchungen, Standardanfragen, Zahlungserinnerungen — damit Inhaber und Lehrkräfte sich auf den Unterricht konzentrieren können.",
      },
      {
        question: "Kann KI Elternanfragen für Nürnberger Bildungseinrichtungen automatisch beantworten?",
        answer: "Ja — ein KI-Bot beantwortet Fragen zu Preisen, Terminen, Lehrkräften und Kursinhalten sofort, rund um die Uhr — per Website-Chat oder WhatsApp.",
      },
      {
        question: "Wie hilft KI beim Kursbuchungsmanagement für Nürnberger Institute?",
        answer: "KI verwaltet Buchungen, Stornierungen und Wartelisten vollautomatisch — mit automatischen Bestätigungen und Zahlungserinnerungen.",
      },
      {
        question: "Ist KI auch für kleine Nürnberger Institute mit wenig Budget geeignet?",
        answer: "Ja — wir bieten skalierbare Einstiegslösungen ab 300 Euro monatlich. Das erste Gespräch ist immer kostenlos.",
      },
    ],
  },
  {
    slug: "bremen",
    name: "Bremen",
    layout: 1,
    metaTitle: "KI Beratung für Bildungseinrichtungen Bremen | kiberatung.de",
    metaDescription: "KI-Lösungen für Bremer Bildungseinrichtungen: Sprachkurse, automatische Buchungen und mehrsprachiger FAQ-Bot. Anfragen.",
    h1: "KI für Bremer Bildung: Maritime Fachkurse und Sprachschule automatisiert",
    intro: "Bremen hat eine aktive Bildungslandschaft mit Fokus auf Sprachen, maritime Fachkurse und berufliche Weiterbildung — geprägt von Hafenwirtschaft und internationalem Handel. KI-Buchungssysteme und mehrsprachige FAQ-Bots geben Bremer Bildungsanbietern die Kapazität, ohne Mehrkosten zu wachsen.",
    stats: {
      betriebe: "900+",
      mitarbeiter: "12.000",
      markttrend: "+6,8 %",
      label1: "Bildungseinrichtungen in Bremen",
      label2: "Beschäftigte im Bremer Bildungssektor",
      label3: "Nachfragewachstum ggü. Vorjahr",
    },
    caseStudy: {
      restaurant: "Weser Sprachschule – Bremen-Innenstadt",
      challenge: "Die Sprachschule bot Kurse auf Englisch, Spanisch und Portugiesisch an — für Hafenarbeiter, Kaufleute und internationale Studenten. Buchungen und FAQ kamen in verschiedenen Sprachen.",
      solution: "Mehrsprachiger KI-Buchungsbot (DE/EN/ES/PT), FAQ-Automatisierung und KI-Prüfungsbegleitung für Sprachzertifikate.",
      result1: "Mehrsprachige Anfragen vollständig automatisiert",
      result2: "Buchungsaufwand −66 %",
      result3: "Sprachzertifikats-Erfolgsrate +24 %",
    },
    faqs: [
      {
        question: "Wie hilft KI Bremer Sprachschulen mit mehrsprachigen Buchungen?",
        answer: "KI führt den Buchungsprozess in der Sprache des Kunden durch — Deutsch, Englisch, Spanisch, Portugiesisch — vollautomatisch und rund um die Uhr.",
      },
      {
        question: "Kann KI maritime Fachkurs-Anfragen für Bremer Bildungsanbieter beantworten?",
        answer: "Ja — ein FAQ-Bot auf Basis Ihrer Kursunterlagen beantwortet Fragen zu Inhalten, Zertifikaten, Voraussetzungen und Terminen sofort und präzise.",
      },
      {
        question: "Wie hilft KI bei der Vorbereitung auf Sprachzertifikate in Bremen?",
        answer: "Der KI-Prüfungsassistent erstellt individuelle Lernpläne, simuliert Prüfungssituationen und gibt personalisiertes Feedback für IELTS, DELE und andere Zertifikate.",
      },
      {
        question: "Was kostet KI-Beratung für ein Bremer Bildungsinstitut?",
        answer: "Das erste Gespräch ist kostenlos. Viele Bremer Institute starten mit einem mehrsprachigen FAQ-Bot ab 350 Euro monatlich und erweitern bei Erfolg.",
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
