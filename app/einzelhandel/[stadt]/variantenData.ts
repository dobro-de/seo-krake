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
  modehandel: {
    slug: "modehandel",
    name: "Modehandel",
    metaTitle: "KI Beratung für Modehandel | kiberatung.de",
    metaDescription: "KI-Lösungen für Modehändler: Trendprognosen, Sortimentsoptimierung, personalisierte Kundenansprache und automatisiertes Marketing. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Modehandel",
    intro: "Der Modehandel steht unter enormem Druck durch Fast-Fashion-Online-Riesen und wechselnde Trends. KI-gestützte Trendanalysen helfen Modehändlern, die richtigen Kollektionen zur richtigen Zeit einzukaufen — und personalisierte Kundenkommunikation sorgt dafür, dass Stammkunden loyal bleiben statt zu ZARA.com zu wechseln.",
    stats: { betriebe: "45.000+", mitarbeiter: "320.000", markttrend: "+5,8 %", label1: "Modehändler in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Boutique Marlene – Berlin-Charlottenburg",
      challenge: "Die Premium-Modeboutique bestellte zu viele Slow-Seller und zu wenige Topseller, weil die Einkaufsentscheidungen auf Bauchgefühl und Lieferantengesprächen basierten.",
      solution: "KI-Trendanalyse auf Basis von Social-Media-Daten und Laufsteg-Reports, automatische Bestellempfehlungen und personalisiertes Outfit-Styling per E-Mail.",
      result1: "Restposten-Quote −54 %",
      result2: "Topseller-Verfügbarkeit +88 %",
      result3: "Newsletter-Klickrate +195 %",
    },
    faqs: [
      { question: "Wie hilft KI bei der Sortimentsplanung im Modehandel?", answer: "KI analysiert Social-Media-Trends, Suchvolumen, Mitbewerber-Sortimente und eigene Verkaufsdaten — und gibt konkrete Empfehlungen, was für die nächste Saison bestellt werden sollte." },
      { question: "Kann KI personalisierte Outfit-Empfehlungen für Modehandel-Kunden erstellen?", answer: "Ja — KI analysiert die Kaufhistorie jedes Kunden und empfiehlt automatisch passende Outfits und Ergänzungsteile per E-Mail oder App-Benachrichtigung." },
      { question: "Wie schnell amortisiert sich KI für einen Modehändler?", answer: "Durch reduzierte Restposten und höhere Wiederkaufraten berichten viele Modehändler von einer Amortisation innerhalb von 3–5 Monaten." },
    ],
  },
  lebensmittelhandel: {
    slug: "lebensmittelhandel",
    name: "Lebensmittelhandel",
    metaTitle: "KI Beratung für Lebensmittelhandel | kiberatung.de",
    metaDescription: "KI-Lösungen für Lebensmittelhändler: Bestandsoptimierung, Abfallreduktion, dynamische Preisgestaltung und Kundenbindung. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Lebensmittelhandel",
    intro: "Im Lebensmittelhandel entscheiden Frische, Verfügbarkeit und Preis über Erfolg. KI-Bestandsoptimierung minimiert Lebensmittelabfall durch präzise Nachfrageprognosen, während dynamische Preisgestaltung für verderbliche Waren Abschriften reduziert. Personalisierte Treueprogramme binden Stammkunden nachhaltig — auch gegen Discounter-Konkurrenz.",
    stats: { betriebe: "38.000+", mitarbeiter: "580.000", markttrend: "+3,9 %", label1: "Lebensmittelhändler in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Biomarkt Grünkern – München-Schwabing",
      challenge: "Der Bio-Supermarkt hatte täglich hohe Abschriften bei Frischware, weil Bestellmengen nicht präzise genug auf die tagesaktuelle Nachfrage abgestimmt wurden.",
      solution: "KI-Bestandsprognose auf Basis von Wetter, Wochentag, lokalen Events und Verkaufshistorie, kombiniert mit automatischen Bestellvorschlägen für Lieferanten.",
      result1: "Lebensmittelabfall −41 %",
      result2: "Verfügbarkeitsrate +12 %",
      result3: "Marge +18 %",
    },
    faqs: [
      { question: "Wie hilft KI dabei, Lebensmittelverschwendung zu reduzieren?", answer: "KI prognostiziert die Nachfrage für jedes Produkt täglich neu — auf Basis von Wochentag, Wetter, saisonalen Mustern und lokalen Events — und empfiehlt optimale Bestellmengen." },
      { question: "Kann KI dynamische Preise für kurz vor dem MHD liegende Waren setzen?", answer: "Ja — KI erkennt automatisch Produkte, die bald ablaufen, und generiert zielgruppengerechte Angebots-Benachrichtigungen an registrierte Stammkunden." },
      { question: "Lohnt sich KI auch für kleine Lebensmittelhändler?", answer: "Besonders kleine Händler profitieren stark — die Marge im Lebensmittelhandel ist eng, und bereits 5 % weniger Abfall kann den Unterschied zwischen Gewinn und Verlust ausmachen." },
    ],
  },
  elektronikhandel: {
    slug: "elektronikhandel",
    name: "Elektronikhandel",
    metaTitle: "KI Beratung für Elektronikhandel | kiberatung.de",
    metaDescription: "KI-Lösungen für Elektronikhändler: Preismonitoring, Bestandsoptimierung, technische Beratung per Chatbot und Kundenbindung. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Elektronikhandel",
    intro: "Der stationäre Elektronikhandel kämpft gegen Amazon, Mediamarkt.de und spezialisierte Online-Shops. KI gibt lokalen Elektronikhändlern Wettbewerbsvorteile: automatisches Preismonitoring, technische Produktberatung per KI-Chatbot rund um die Uhr und präzise Bestandsprognosen für Produktkategorien mit kurzen Lebenszyklen.",
    stats: { betriebe: "12.000+", mitarbeiter: "95.000", markttrend: "+4,7 %", label1: "Elektronikhändler in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Elektronik Schiller – Frankfurt-Sachsenhausen",
      challenge: "Der unabhängige Elektronikhändler verlor Kunden an Online-Shops, weil er Preisanfragen nicht schnell beantworten konnte und oft nicht mehr den günstigsten Preis bot.",
      solution: "KI-Preismonitoring-System für wichtige Produkte, automatische Preisanpassungsempfehlungen und KI-Chatbot für technische Produktberatung auf der Website.",
      result1: "Konversionsrate +67 %",
      result2: "Beratungszeit −55 %",
      result3: "Preisparität-Score +40 %",
    },
    faqs: [
      { question: "Wie hilft KI-Preismonitoring Elektronikhändlern?", answer: "KI überwacht automatisch die Preise der wichtigsten Wettbewerber und empfiehlt Preisanpassungen, um wettbewerbsfähig zu bleiben — ohne Marge zu verschenken." },
      { question: "Kann KI technische Produktfragen für Elektronikhändler beantworten?", answer: "Ja — ein KI-Chatbot beantwortet technische Spezifikationsfragen, vergleicht Produkte und empfiehlt basierend auf Kundenbedarf das passende Gerät — rund um die Uhr." },
      { question: "Wie optimiert KI den Bestand für kurzlebige Elektronikprodukte?", answer: "KI prognostiziert Produktlebenszyklen und Nachfragetrends und empfiehlt, wann ältere Modelle mit Abschlag abverkauft werden sollten, bevor Nachfolgemodelle erscheinen." },
    ],
  },
  moebelhandel: {
    slug: "moebelhandel",
    name: "Möbelhandel",
    metaTitle: "KI Beratung für Möbelhandel | kiberatung.de",
    metaDescription: "KI-Lösungen für Möbelhändler: Raumplanungs-KI, Personalisierung, Bestandsoptimierung und automatisiertes Marketing. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Möbelhandel",
    intro: "Möbelkäufe sind hochinvolvierte Entscheidungen mit langen Kaufprozessen. KI-gestützte Raumplanungstools und personalisierte Inspirationen helfen Möbelhändlern, Kunden früh im Entscheidungsprozess zu binden und bis zum Kauf zu begleiten. KI-Bestandsoptimierung reduziert teure Lagerkosten bei großvolumigen Produkten.",
    stats: { betriebe: "8.500+", mitarbeiter: "110.000", markttrend: "+6,2 %", label1: "Möbelhändler in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Wohnstudio Bergmann – Hamburg-Eppendorf",
      challenge: "Das Premium-Möbelstudio hatte viele Beratungsgespräche, aber eine niedrige Konversionsrate — Kunden gingen heim und kauften online bei IKEA oder anderen Händlern.",
      solution: "KI-Raumplanungstool auf der Website, automatische Follow-up-E-Mails mit personalisierten Einrichtungsvorschlägen und KI-Preisvergleich-Positionierung.",
      result1: "Beratungs-Konversion +48 %",
      result2: "Warenkorbwert +34 %",
      result3: "Wiederholkäufe +27 %",
    },
    faqs: [
      { question: "Wie hilft KI-Raumplanung Möbelhändlern?", answer: "KI-Raumplanungstools erlauben Kunden, ihre Wohnung virtuell einzurichten — und direkt Produkte aus dem Händler-Sortiment zu platzieren. Das erhöht die Kaufbereitschaft erheblich." },
      { question: "Kann KI Möbelkunden über lange Kaufprozesse hinweg binden?", answer: "Ja — KI-Nurturing-Sequenzen schicken automatisch passende Inspirationen, Angebote und Stilvorschläge über Wochen oder Monate hinweg, bis der Kunde kaufbereit ist." },
      { question: "Wie optimiert KI Lagerkosten für sperrige Möbelware?", answer: "KI prognostiziert Nachfrage und empfiehlt Bestellmengen, die Lagerkapital minimieren — besonders wichtig bei großvolumigen Produkten mit hohen Lagerkosten." },
    ],
  },
  buchhandel: {
    slug: "buchhandel",
    name: "Buchhandel",
    metaTitle: "KI Beratung für Buchhandel | kiberatung.de",
    metaDescription: "KI-Lösungen für Buchhändler: Personalisierte Leseempfehlungen, Event-Marketing, Bestandsoptimierung und Stammkundenbindung. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für den Buchhandel",
    intro: "Unabhängige Buchhandlungen sind unter Druck von Amazon und E-Books — aber sie haben einen einzigartigen Vorteil: persönliche Empfehlungen und Community-Atmosphäre. KI skaliert genau diese Stärke: personalisierte Buchempfehlungen für jeden Kunden, automatisches Event-Marketing für Lesungen und präzise Bestandsoptimierung für die über 1 Million lieferbaren Titel.",
    stats: { betriebe: "3.500+", mitarbeiter: "28.000", markttrend: "+2,1 %", label1: "Buchhandlungen in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Buchhandlung Lesezeichen – Köln-Ehrenfeld",
      challenge: "Die inhabergeführte Buchhandlung hatte eine treue Stammkundschaft, konnte aber personalisierte Buchempfehlungen nicht systematisch und skalierbar liefern — und verlor Kunden an Amazon.",
      solution: "KI-Empfehlungssystem basierend auf Kaufhistorie und Lesevorlieben, automatisiertes Veranstaltungsmarketing für Lesungen und Newsletter-Personalisierung.",
      result1: "Stammkunden-Umsatz +52 %",
      result2: "Lesungs-Anmeldungen +180 %",
      result3: "Newsletter-Klickrate +230 %",
    },
    faqs: [
      { question: "Wie hilft KI Buchhändlern, gegen Amazon zu bestehen?", answer: "KI ermöglicht personalisierte Buchempfehlungen, die genauso präzise sind wie Amazon-Algorithmen — aber mit der persönlichen Note und Glaubwürdigkeit einer lokalen Buchhandlung." },
      { question: "Kann KI Event-Marketing für Buchlesungen automatisieren?", answer: "Ja — KI erstellt automatisch personalisierte Einladungen für Kunden, die thematisch passende Bücher gekauft haben, und erinnert sie an bevorstehende Lesungen." },
      { question: "Wie optimiert KI den Buchbestand bei über einer Million lieferbaren Titeln?", answer: "KI analysiert lokale Nachfragetrends, saisonale Muster und Bestsellerlisten, um Empfehlungen zu geben, welche Titel im Laden vorrätig sein sollten — und welche auf Bestellung." },
    ],
  },
  sportartikel: {
    slug: "sportartikel",
    name: "Sportartikel",
    metaTitle: "KI Beratung für Sportartikelhandel | kiberatung.de",
    metaDescription: "KI-Lösungen für Sportartikelhändler: Saisonoptimierung, personalisierte Empfehlungen, Event-Marketing und Bestandsplanung. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Sportartikelhandel",
    intro: "Sportartikel-Händler kämpfen mit extremer Saisonalität, breiten Sortimenten und starker Online-Konkurrenz. KI-Saisonprognosen helfen, die richtigen Sportarten zur richtigen Zeit zu bevorraten. Personalisierte Sportler-Profile ermöglichen gezielte Produktempfehlungen für jeden Kunden — vom Gelegenheits-Jogger bis zum ambitionierten Triathleten.",
    stats: { betriebe: "5.200+", mitarbeiter: "48.000", markttrend: "+7,4 %", label1: "Sportartikelhändler in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "SportWelt Müller – Stuttgart-Mitte",
      challenge: "Das Sportfachgeschäft hatte nach jedem Winter massive Restposten bei Ski- und Winterausrüstung sowie Engpässe bei Laufschuhen im Frühling.",
      solution: "KI-Saison- und Event-Prognosemodell für Bestandsplanung, personalisierte Sportarten-Newsletter und automatische Abverkaufskampagnen für Restposten.",
      result1: "Saisonale Restposten −62 %",
      result2: "Frühlingskampagnen-Umsatz +44 %",
      result3: "Stammkunden-Retention +36 %",
    },
    faqs: [
      { question: "Wie hilft KI bei der Saison-Bestandsplanung im Sportartikelhandel?", answer: "KI analysiert Wettertrends, Sportereignisse (Marathons, Ski-Saison, Bundesliga) und eigene Verkaufshistorie, um Bestellmengen für jede Sportart und Saison präzise zu planen." },
      { question: "Kann KI personalisierte Empfehlungen für unterschiedliche Sportarten erstellen?", answer: "Ja — KI erstellt automatisch Sportarten-Profile für jeden Kunden und empfiehlt passende Ausrüstung, Ergänzungsprodukte und Saisonvorbereitung per E-Mail." },
      { question: "Wie hilft KI beim Abverkauf von Sportartikel-Restposten?", answer: "KI identifiziert Kunden, die ähnliche Produkte gekauft haben, und verschickt automatisch zielgruppengerechte Abverkaufsangebote — schnellerer Lagerumschlag, höhere Margen." },
    ],
  },
  schmuck: {
    slug: "schmuck",
    name: "Schmuck",
    metaTitle: "KI Beratung für Schmuckhandel | kiberatung.de",
    metaDescription: "KI-Lösungen für Juweliere und Schmuckhändler: VIP-Kundenprogramme, Jubiläums-Marketing, Bestandsoptimierung und Personalisierung. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Juweliere & Schmuckhandel",
    intro: "Schmuck ist ein Hochpreissegment, in dem persönliche Beziehungen und emotionale Momente den Ausschlag geben. KI-gestützte VIP-Kundenprogramme erinnern automatisch an Jubiläen, Geburtstage und besondere Anlässe — und ermöglichen so personalisierte Verkaufsgespräche, die sich nach echter Fürsorge anfühlen. KI-Sortimentsoptimierung reduziert gebundenes Kapital in langsamdrehenden Stücken.",
    stats: { betriebe: "4.200+", mitarbeiter: "22.000", markttrend: "+8,3 %", label1: "Juweliere & Schmuckhändler in DE", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Juwelier Rosenstein – Düsseldorf-Altstadt",
      challenge: "Das Traditionsgeschäft kannte viele Stammkunden persönlich, verpasste aber systematisch Anlässe wie Hochzeitstage und Geburtstage — und verschenkte damit Umsatzpotenzial.",
      solution: "KI-Ereignis-Tracking-System für alle Stammkunden, automatische Jubiläums-Kommunikation mit personalisierten Produktvorschlägen und VIP-Einladungen zu exklusiven Vorpremieren.",
      result1: "Anlass-gebundener Umsatz +74 %",
      result2: "VIP-Kundenbindung +58 %",
      result3: "Durchschn. Kaufwert +29 %",
    },
    faqs: [
      { question: "Wie hilft KI Juwelieren, Jubiläen und Geburtstage der Kunden zu nutzen?", answer: "KI speichert Kundendaten und wichtige Daten automatisch und versendet rechtzeitig personalisierte Angebote — z. B. 6 Wochen vor dem Hochzeitstag mit passenden Schmuckvorschlägen." },
      { question: "Kann KI VIP-Programme für Schmuckhändler automatisieren?", answer: "Ja — KI segmentiert automatisch die wertvollsten Kunden, erstellt VIP-Profile und löst personalisierte Kommunikation für exklusive Angebote, Vorpremieren und Sonderanfertigungen aus." },
      { question: "Wie optimiert KI Sortimente bei Schmuck mit langen Ladenzeiten?", answer: "KI analysiert Umsatzgeschwindigkeit pro Kategorie und Stilrichtung und empfiehlt, welche Stücke mit Rabatt abverkauft und durch neue Topseller ersetzt werden sollten." },
    ],
  },
  optiker: {
    slug: "optiker",
    name: "Optiker",
    metaTitle: "KI Beratung für Optiker | kiberatung.de",
    metaDescription: "KI-Lösungen für Optiker: Sehtest-Erinnerungen, Brillen-Empfehlungen, Kundenbindung und automatisiertes Marketing. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Optiker",
    intro: "Optiker haben einen einzigartigen Wiederholkauf-Rhythmus: Sehkorrektur-Updates alle 1–2 Jahre, Kontaktlinsen-Nachbestellungen monatlich, Modebrillen als Accessoire. KI-gestützte Erinnerungssysteme aktivieren Kunden zum richtigen Zeitpunkt — für Sehtests, Linsennachbestellungen und neue Brillenfassungen. Personalisierte Brillenempfehlungen basierend auf Gesichtsform und Stil steigern den Warenkorbwert.",
    stats: { betriebe: "11.500+", mitarbeiter: "62.000", markttrend: "+5,9 %", label1: "Optiker in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Optik Sonnenschein – Leipzig-Gohlis",
      challenge: "Das Optikergeschäft hatte eine hohe Kundenzufriedenheit, aber keine systematischen Erinnerungen für Sehtest-Intervalle — und verlor viele Kunden an Ketten mit aggressiven Reminder-Kampagnen.",
      solution: "KI-Erinnerungssystem für Sehtest-Intervalle, automatische Kontaktlinsen-Nachbestellungs-Alerts und personalisierte Brillen-Stil-Empfehlungen per E-Mail.",
      result1: "Sehtest-Termine +86 %",
      result2: "Kontaktlinsen-Umsatz +43 %",
      result3: "Zweite Brillen-Käufe +31 %",
    },
    faqs: [
      { question: "Wie automatisiert KI Sehtest-Erinnerungen für Optiker?", answer: "KI trackt automatisch, wann jeder Kunde zuletzt einen Sehtest hatte, und versendet rechtzeitig personalisierte Erinnerungen — per E-Mail, SMS oder WhatsApp." },
      { question: "Kann KI Brillenempfehlungen basierend auf Gesichtsform erstellen?", answer: "Ja — KI-Systeme analysieren Fotos oder Kundendaten und empfehlen Brillenfassungen, die optimal zur Gesichtsform, Hautfarbe und zum persönlichen Stil passen." },
      { question: "Wie hilft KI beim Kontaktlinsen-Abonnement-Marketing?", answer: "KI erkennt automatisch den Nachbestellungszyklus jedes Kunden und versendet rechtzeitige Erinnerungen mit direktem Bestelllink — Churn-Prävention auf Autopilot." },
    ],
  },
  apotheken: {
    slug: "apotheken",
    name: "Apotheken",
    metaTitle: "KI Beratung für Apotheken | kiberatung.de",
    metaDescription: "KI-Lösungen für Apotheken: Bestandsoptimierung, Medikamenten-Erinnerungen, Stammkundenbindung und DSGVO-konformes Marketing. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Apotheken",
    intro: "Apotheken stehen vor der Herausforderung, mit Online-Versandapotheken zu konkurrieren und gleichzeitig ihre Stärken auszuspielen: persönliche Beratung, Sofortverfügbarkeit und Vertrauen. KI-gestützte Kundenbindung und Medikamenten-Erinnerungen stärken die Arzt-Patient-Apotheken-Beziehung, während präzise Bestandsoptimierung Engpässe und Überlagerungen minimiert.",
    stats: { betriebe: "18.000+", mitarbeiter: "150.000", markttrend: "+4,2 %", label1: "Apotheken in Deutschland", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Stadtapotheke am Markt – Nürnberg-Innenstadt",
      challenge: "Die inhabergeführte Apotheke verlor Stammkunden an Online-Apotheken bei Dauermedikamenten, weil Nachbestellungen umständlich waren und keine proaktiven Erinnerungen stattfanden.",
      solution: "KI-Medikamenten-Erinnerungssystem für Dauermedikation, automatische Nachbestellungs-Benachrichtigungen und personalisiertes Saisonkrankheits-Marketing (Grippe, Allergie).",
      result1: "Stammkunden-Retention +67 %",
      result2: "Dauermedikation-Umsatz +38 %",
      result3: "Saisonal-Kampagnen-Umsatz +52 %",
    },
    faqs: [
      { question: "Wie hilft KI Apotheken, Kunden an Dauermedikation zu erinnern?", answer: "KI trackt automatisch Rezepte und Kaufintervalle für Dauermedikation und versendet rechtzeitige, DSGVO-konforme Erinnerungen per E-Mail oder SMS." },
      { question: "Ist KI-Marketing für Apotheken DSGVO-konform?", answer: "Absolut — alle unsere Apotheken-Lösungen sind vollständig DSGVO-konform, laufen auf deutschen Servern und erfordern explizite Einwilligungen. Wir begleiten die datenschutzrechtliche Einrichtung." },
      { question: "Wie optimiert KI den Apothekenbestand, um Engpässe zu vermeiden?", answer: "KI analysiert Verschreibungsmuster, saisonale Krankheitstrends und Lieferzuverlässigkeit der Hersteller, um optimale Sicherheitsbestände zu berechnen und Engpässen vorzubeugen." },
    ],
  },
  baumaerkte: {
    slug: "baumaerkte",
    name: "Baumärkte",
    metaTitle: "KI Beratung für Baumärkte & Baustoffhandel | kiberatung.de",
    metaDescription: "KI-Lösungen für Baumärkte: Bestandsoptimierung, Saisonplanung, Handwerker-B2B-Marketing und automatisiertes Kundenmarketing. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Baumärkte & Baustoffhandel",
    intro: "Baumärkte bedienen zwei sehr unterschiedliche Kundensegmente: Heimwerker-Endkunden und professionelle Handwerker. KI-Segmentierung ermöglicht, beide Gruppen zielgerichtet anzusprechen — Heimwerker mit Projekt-Inspiration und Schritt-für-Schritt-Anleitungen, Handwerker mit B2B-Angeboten, Mengenrabatten und Lieferservice. Saisonale KI-Prognosen optimieren den Gartenbereich für den Frühling und Heizmaterial für den Winter.",
    stats: { betriebe: "2.800+", mitarbeiter: "85.000", markttrend: "+6,7 %", label1: "Baumärkte & Baustoffhändler in DE", label2: "Beschäftigte im Segment", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Baumarkt Hoffmann – Hannover-Linden",
      challenge: "Der regionale Baumarkt verlor Stammkunden an OBI und Bauhaus, weil er keine gezielte Kundenkommunikation und keine Handwerker-Sonderkonditionen systematisch anbot.",
      solution: "KI-Kundensegmentierung Heimwerker vs. Handwerker, automatisiertes B2B-Handwerker-Programm mit Mengenrabatten und saisonale Garten/Heiz-Kampagnen.",
      result1: "Handwerker-B2B-Umsatz +58 %",
      result2: "Frühlings-Gartenbereich +44 %",
      result3: "Stammkunden-Retention +33 %",
    },
    faqs: [
      { question: "Wie hilft KI Baumärkten, Handwerker als B2B-Kunden zu gewinnen?", answer: "KI identifiziert Kaufmuster professioneller Handwerker und triggert automatisch B2B-Angebote mit Mengenrabatten, Lieferservice und Kreditkonten — genau dann, wenn der Handwerker in einer neuen Projektphase ist." },
      { question: "Kann KI Saisonkampagnen für Baumärkte automatisieren?", answer: "Ja — KI prognostiziert automatisch, wann die Gartensaison beginnt, und startet Frühlings-Kampagnen zum optimalen Zeitpunkt, basierend auf Wetterdaten und regionalen Trends." },
      { question: "Wie optimiert KI die Bestandsplanung für Baumärkte mit breitem Sortiment?", answer: "KI analysiert tausende Produkte gleichzeitig und optimiert Bestellmengen auf Basis von Saison, Wetter, lokalen Bauprojekten und eigener Verkaufshistorie — automatisch und präzise." },
    ],
  },
};

export const VARIANTEN_SLUGS = Object.keys(variantenMap);

export function getVariantBySlug(slug: string): VariantData | undefined {
  return variantenMap[slug];
}
