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
  shk: {
    slug: "shk",
    name: "SHK (Sanitär, Heizung, Klima)",
    metaTitle: "KI Beratung für SHK-Betriebe | kiberatung.de",
    metaDescription: "KI-Lösungen für SHK-Betriebe: Angebotserstellung, Terminplanung, Wartungsmanagement, Notdienst-Automatisierung. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für SHK-Betriebe",
    intro: "Sanitär-, Heizungs- und Klimabetriebe gehören zu den am stärksten nachgefragten Handwerksberufen. Über 50.000 SHK-Betriebe in Deutschland kämpfen mit Fachkräftemangel, komplexen Angeboten und einem nie enden wollenden Telefon. KI-Lösungen nehmen den Druck: automatische Angebote, intelligente Terminplanung und 24/7-Erreichbarkeit.",
    stats: { betriebe: "50.000+", mitarbeiter: "380.000", markttrend: "+6,2 %", label1: "SHK-Betriebe in Deutschland", label2: "Beschäftigte im SHK-Handwerk", label3: "Umsatzwachstum durch Wärmewende" },
    caseStudy: {
      restaurant: "Heizung & Sanitär Berger — Düsseldorf",
      challenge: "Der SHK-Betrieb mit 15 Monteuren verlor 30 % der Anfragen, weil Angebote erst nach 5–7 Tagen verschickt wurden.",
      solution: "KI-Angebotsgenerator für Heizungsanlagen: Fotos vom Keller + Gebäudedaten → Angebot mit Förderberechnung in 15 Minuten.",
      result1: "Angebotsversand am selben Tag",
      result2: "Auftragsquote +38 %",
      result3: "Fördermittel-Hinweise automatisch",
    },
    faqs: [
      { question: "Kann KI auch Förderanträge für Heizungen berechnen?", answer: "Ja. Die KI kennt aktuelle BAFA- und KfW-Fördersätze und integriert sie automatisch ins Angebot. Der Kunde sieht sofort seinen Eigenanteil." },
      { question: "Wie funktioniert KI-Notdienst-Automatisierung?", answer: "Bei Notdienst-Anfragen (Rohrbruch, Heizungsausfall) qualifiziert die KI per WhatsApp: Was ist passiert? Fotos? Adresse? Der nächste verfügbare Monteur wird automatisch benachrichtigt." },
      { question: "Lohnt sich KI für SHK-Betriebe unter 5 Mitarbeitern?", answer: "Gerade für kleine Betriebe. Kein Büropersonal nötig, trotzdem professionelle Angebote und 24/7-Erreichbarkeit. Das spart locker 1.000 € pro Monat." },
    ],
  },
  elektro: {
    slug: "elektro",
    name: "Elektroinstallation",
    metaTitle: "KI Beratung für Elektrobetriebe | kiberatung.de",
    metaDescription: "KI-Lösungen für Elektriker: Angebotserstellung, E-Check-Erinnerungen, Materialplanung, Kundenkommunikation. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für Elektrobetriebe",
    intro: "Elektrobetriebe sind gefragt wie nie — Photovoltaik, Wallboxen, Smart Home und die Energiewende treiben die Nachfrage. Über 55.000 Elektrobetriebe in Deutschland müssen mehr Aufträge in weniger Zeit schaffen. KI automatisiert Angebote, plant E-Checks und hält den Kundenkontakt lebendig.",
    stats: { betriebe: "55.000+", mitarbeiter: "520.000", markttrend: "+8,5 %", label1: "Elektrobetriebe in Deutschland", label2: "Beschäftigte im E-Handwerk", label3: "Umsatzwachstum durch Energiewende" },
    caseStudy: {
      restaurant: "Elektro König — Stuttgart",
      challenge: "Die Nachfrage nach PV-Anlagen und Wallboxen explodierte. Der Betrieb konnte nicht schnell genug Angebote schreiben.",
      solution: "KI-PV-Konfigurator: Dachfoto + Stromrechnung → individuelles PV-Angebot mit Amortisationsrechnung in 10 Minuten.",
      result1: "10 PV-Angebote pro Tag",
      result2: "Konversionsrate 42 %",
      result3: "Wartezeit für Kunden −85 %",
    },
    faqs: [
      { question: "Kann KI PV-Angebote automatisch erstellen?", answer: "Ja. Aus einem Dachfoto und der Stromrechnung berechnet die KI die optimale Anlagengröße, erwarteten Ertrag, Kosten und Amortisation — inklusive aktueller Fördersätze." },
      { question: "Wie automatisiert KI E-Check-Erinnerungen?", answer: "Die KI erinnert Ihre Kunden automatisch an fällige E-Checks (alle 4 Jahre) per SMS oder WhatsApp. Der Kunde kann direkt einen Termin buchen. Wiederkehrender Umsatz ohne Aufwand." },
      { question: "Funktioniert KI auch für Smart-Home-Beratung?", answer: "Ja. KI-Chatbots können Kunden zu Smart-Home-Optionen beraten, Kompatibilität prüfen und Kostenübersichten erstellen — bevor Sie selbst auch nur einen Finger rühren." },
    ],
  },
  maler: {
    slug: "maler",
    name: "Maler & Lackierer",
    metaTitle: "KI Beratung für Malerbetriebe | kiberatung.de",
    metaDescription: "KI-Lösungen für Maler: Aufmaß per Foto, automatische Angebote, Farbberatung per KI. Weniger Büro, mehr Baustelle.",
    h1: "KI Automatisierung für Malerbetriebe",
    intro: "Malerbetriebe leben von schnellen Angeboten und persönlichem Service. Über 40.000 Maler in Deutschland kämpfen mit dem Spagat zwischen Baustelle und Büro. KI übernimmt die Kalkulation: Raumfotos analysieren, Flächen berechnen, Materialmengen ermitteln und Angebote erstellen — in Minuten statt Stunden.",
    stats: { betriebe: "40.000+", mitarbeiter: "210.000", markttrend: "+3,8 %", label1: "Malerbetriebe in Deutschland", label2: "Beschäftigte im Malerhandwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Malerbetrieb Sommer — Hamburg",
      challenge: "Jedes Angebot erforderte einen Vor-Ort-Termin zum Ausmessen. Bei 10 Anfragen pro Woche kaum zu schaffen.",
      solution: "KI-Aufmaß per Kundenfotos: Kunden schicken Raumbilder per WhatsApp, KI berechnet Wandflächen und erstellt Angebot.",
      result1: "Vor-Ort-Termine −60 %",
      result2: "Angebotsversand in 2 Stunden",
      result3: "Auftragsquote +30 %",
    },
    faqs: [
      { question: "Kann KI wirklich Wandflächen aus Fotos berechnen?", answer: "Ja — mit guter Genauigkeit für Standardräume. Die KI erkennt Wände, Türen und Fenster und berechnet die Nettofläche. Bei komplexen Räumen wird ein Korrekturfaktor angewendet." },
      { question: "Gibt es KI-Farbberatung für Kunden?", answer: "Ja. Kunden können ein Raumfoto hochladen und verschiedene Farben virtuell testen. Das reduziert Rückfragen und macht den Beratungsprozess visuell." },
      { question: "Wie hilft KI bei der Materialplanung?", answer: "Basierend auf dem Aufmaß berechnet die KI automatisch Farbmengen, Grundierung, Abdeckmaterial und Werkzeugbedarf. Bestelllisten werden automatisch erstellt." },
    ],
  },
  schreiner: {
    slug: "schreiner",
    name: "Schreiner & Tischler",
    metaTitle: "KI Beratung für Schreinereien & Tischlereien | kiberatung.de",
    metaDescription: "KI-Lösungen für Schreiner: Möbelkonfigurator, Kalkulations-KI, Materialoptimierung. Tradition trifft Innovation.",
    h1: "KI Automatisierung für Schreinereien & Tischlereien",
    intro: "Schreinereien und Tischlereien stehen für Individualität und Handwerkskunst. Doch gerade die Einzelfertigung macht Kalkulationen aufwendig. KI hilft bei der Angebotserstellung für Maßmöbel, optimiert den Materialverschnitt und ermöglicht Online-Konfiguratoren für Kunden.",
    stats: { betriebe: "25.000+", mitarbeiter: "145.000", markttrend: "+4,1 %", label1: "Schreinereien in Deutschland", label2: "Beschäftigte im Tischlerhandwerk", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Tischlerei Bergmann — Köln",
      challenge: "Jede Maßmöbel-Kalkulation dauerte 3–4 Stunden. Der Tischlermeister konnte maximal 2 Angebote pro Tag erstellen.",
      solution: "KI-Kalkulator mit Materialpreisdatenbank, historischen Aufträgen als Referenz und automatischer Verschnittoptimierung.",
      result1: "Kalkulationszeit −75 %",
      result2: "Materialverschnitt −12 %",
      result3: "6 Angebote pro Tag statt 2",
    },
    faqs: [
      { question: "Kann KI bei Einzelmöbeln wirklich kalkulieren?", answer: "Ja. Die KI lernt aus Ihren bisherigen Aufträgen: Welches Material, welche Arbeitszeit, welche Beschläge. Bei ähnlichen Projekten wird die Kalkulation automatisch vorgeschlagen und Sie passen nur noch an." },
      { question: "Was ist KI-Verschnittoptimierung?", answer: "Die KI berechnet die optimale Platzierung von Zuschnitten auf Plattenmaterial. Das reduziert Verschnitt um 10–15 % — bei teuren Hölzern schnell hunderte Euro Ersparnis pro Monat." },
      { question: "Gibt es KI-Online-Konfiguratoren für Möbel?", answer: "Ja. Kunden können online Maße, Material und Design wählen. Die Kalkulation läuft im Hintergrund automatisch. Sie bekommen qualifizierte Anfragen statt unverbindlicher E-Mails." },
    ],
  },
  dachdecker: {
    slug: "dachdecker",
    name: "Dachdecker",
    metaTitle: "KI Beratung für Dachdeckerbetriebe | kiberatung.de",
    metaDescription: "KI für Dachdecker: Drohnen-Aufmaß, Sturmschaden-Triage, automatische Angebote. Schneller reagieren, mehr Aufträge gewinnen.",
    h1: "KI Automatisierung für Dachdeckerbetriebe",
    intro: "Dachdecker sind Spezialisten — und chronisch ausgebucht. Die Kombination aus Wetterabhängigkeit, saisonalen Spitzen und komplexen Kalkulationen macht KI zum idealen Partner. Automatische Schadensbewertung per Foto, Drohnen-Aufmaß und intelligente Terminplanung schaffen Luft.",
    stats: { betriebe: "15.000+", mitarbeiter: "95.000", markttrend: "+5,5 %", label1: "Dachdeckerbetriebe in Deutschland", label2: "Beschäftigte im Dachdeckerhandwerk", label3: "Umsatzwachstum durch Sanierungspflicht" },
    caseStudy: {
      restaurant: "Dachdeckerei Wagner — München",
      challenge: "Nach Hagelschäden gingen 80+ Anfragen pro Tag ein. Der Betrieb konnte nur 5–10 Besichtigungen schaffen.",
      solution: "KI-Schadens-Triage: Kunden laden Fotos hoch, KI bewertet Schwere und Dringlichkeit, plant automatisch Besichtigungen nach Priorität.",
      result1: "Alle 80 Anfragen bearbeitet",
      result2: "Dringende Fälle in <4 Stunden",
      result3: "Kein Kunde verloren",
    },
    faqs: [
      { question: "Kann KI Dachschäden aus Fotos bewerten?", answer: "Ja. Die KI erkennt typische Schadensmuster: fehlende Ziegel, Wasserflecken, Durchbiegungen. Die Bewertung ersetzt keine Vor-Ort-Besichtigung, priorisiert aber die Reihenfolge." },
      { question: "Funktioniert KI mit Drohnenaufnahmen?", answer: "Ja. Drohnenbilder werden automatisch analysiert: Dachfläche berechnet, Schadensstellen markiert, Materialmengen geschätzt. Das spart den gefährlichen Aufstieg aufs Dach für die Erstbewertung." },
      { question: "Wie hilft KI bei saisonalen Spitzen?", answer: "KI priorisiert automatisch, erstellt Standard-Angebote schneller und hält die Kundenkommunikation am Laufen — auch wenn Sie selbst auf dem Dach stehen." },
    ],
  },
  kfz: {
    slug: "kfz",
    name: "KFZ-Werkstätten",
    metaTitle: "KI Beratung für KFZ-Werkstätten | kiberatung.de",
    metaDescription: "KI für KFZ-Werkstätten: Terminbuchung, Kostenvoranschläge, Ersatzteilmanagement, Kundenerinnerungen. Kostenlose Erstberatung.",
    h1: "KI Automatisierung für KFZ-Werkstätten",
    intro: "KFZ-Werkstätten sind Service-Betriebe — und Service heißt Geschwindigkeit. Über 37.000 Werkstätten in Deutschland kämpfen mit Online-Buchungsportalen, Preisdruck und wachsenden Kundenansprüchen. KI automatisiert Terminbuchungen, erstellt Kostenvoranschläge und erinnert Kunden an fällige Inspektionen.",
    stats: { betriebe: "37.000+", mitarbeiter: "450.000", markttrend: "+3,2 %", label1: "KFZ-Werkstätten in Deutschland", label2: "Beschäftigte im KFZ-Gewerbe", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "AutoService Klein — Frankfurt",
      challenge: "Die freie Werkstatt verlor Kunden an Online-Buchungsportale. Telefonische Terminvergabe war umständlich und langsam.",
      solution: "KI-Buchungssystem: 24/7 Online-Terminbuchung, automatische Erinnerungen an TÜV, Inspektion und Reifenwechsel.",
      result1: "Online-Buchungen 60 %",
      result2: "Telefonanrufe −70 %",
      result3: "Kundentreue +25 %",
    },
    faqs: [
      { question: "Kann KI Kostenvoranschläge für Reparaturen erstellen?", answer: "Ja. Basierend auf Fahrzeugtyp, Kilometerstand und Fehlerbeschreibung erstellt die KI einen Kostenvoranschlag mit Arbeitszeit und Ersatzteilpreisen. Für Standardreparaturen sehr genau." },
      { question: "Wie erinnert KI meine Kunden an fällige Services?", answer: "Die KI sendet automatisch SMS oder WhatsApp-Nachrichten vor TÜV-Termin, Inspektion oder Reifenwechsel. Der Kunde kann direkt einen Termin buchen — kein Telefonat nötig." },
      { question: "Funktioniert KI auch für freie Werkstätten?", answer: "Gerade für freie Werkstätten. Im Gegensatz zu Markenwerkstätten haben Sie keine Konzern-IT. KI gibt Ihnen die gleichen digitalen Tools — zu einem Bruchteil der Kosten." },
    ],
  },
  fliesen: {
    slug: "fliesen",
    name: "Fliesenleger",
    metaTitle: "KI Beratung für Fliesenleger | kiberatung.de",
    metaDescription: "KI für Fliesenleger: Aufmaß per Foto, Fliesenplanung, automatische Angebote mit Materialberechnung. Jetzt beraten lassen.",
    h1: "KI Automatisierung für Fliesenleger",
    intro: "Fliesenlegen ist Präzisionsarbeit — die Kalkulation sollte es auch sein. KI hilft Fliesenlegern, Aufmaße schneller zu erfassen, Materialmengen exakt zu berechnen und professionelle Angebote in Minuten zu versenden. Weniger Büro, mehr Baustelle.",
    stats: { betriebe: "12.000+", mitarbeiter: "65.000", markttrend: "+4,5 %", label1: "Fliesenlegerbetriebe in DE", label2: "Beschäftigte im Fliesenhandwerk", label3: "Umsatzwachstum durch Badsanierung" },
    caseStudy: {
      restaurant: "Fliesen Schwarz — Nürnberg",
      challenge: "Kunden wollten vor dem Auftrag wissen, wie die Fliesen im Raum aussehen. Visualisierungen dauerten Stunden.",
      solution: "KI-Fliesenvisualisierung: Kunden laden ein Raumfoto hoch, wählen Fliesen aus dem Katalog und sehen das Ergebnis sofort — fotorealistisch.",
      result1: "Visualisierung in 30 Sekunden",
      result2: "Auftragsabschluss +45 %",
      result3: "Keine Fehlbestellungen mehr",
    },
    faqs: [
      { question: "Kann KI Fliesen visualisieren?", answer: "Ja. KI ersetzt die Fliesen in einem Raumfoto fotorealistisch. Kunden sehen sofort, wie ihre Wunschfliese im eigenen Bad aussieht. Das beschleunigt die Entscheidung enorm." },
      { question: "Wie berechnet KI den Fliesenbedarf?", answer: "Aus Raummaßen und Fliesenformat berechnet die KI die optimale Verlegung, Verschnitt und Gesamtmenge — inklusive Sockelfliesen, Bordüren und Ecken." },
      { question: "Funktioniert das auch für große Gewerbeflächen?", answer: "Ja. Gerade bei großen Flächen spart die KI-Verschnittoptimierung am meisten. Bei einem 500m²-Projekt können das schnell 2.000–5.000 € weniger Materialkosten sein." },
    ],
  },
  zimmerer: {
    slug: "zimmerer",
    name: "Zimmerer & Holzbau",
    metaTitle: "KI Beratung für Zimmereibetriebe | kiberatung.de",
    metaDescription: "KI-Lösungen für Zimmerer: Holzbau-Kalkulation, Abbund-Planung, Projektmanagement automatisieren. Tradition trifft Technologie.",
    h1: "KI Automatisierung für Zimmereibetriebe",
    intro: "Zimmerer und Holzbaubetriebe arbeiten an komplexen Projekten — vom Dachstuhl bis zum Holzhaus. KI hilft bei der Kalkulation, Materialbestellung und Projektplanung. Automatische Abbundlisten, intelligente Terminkoordination und KI-gestützte Statik-Vorprüfungen sparen Zeit und vermeiden Fehler.",
    stats: { betriebe: "11.000+", mitarbeiter: "75.000", markttrend: "+7,2 %", label1: "Zimmereibetriebe in Deutschland", label2: "Beschäftigte im Holzbau", label3: "Umsatzwachstum durch Holzbau-Boom" },
    caseStudy: {
      restaurant: "Zimmerei Holzmann — Freiburg",
      challenge: "Jedes Dachstuhl-Angebot erforderte 6–8 Stunden Kalkulation mit CAD und Materiallisten.",
      solution: "KI-Kalkulator: Grundriss + Dachform eingeben → automatische Holzliste, Abbundplan-Entwurf und Angebot mit aktuellen Holzpreisen.",
      result1: "Kalkulationszeit −70 %",
      result2: "Materialbestellung 1-Klick",
      result3: "Holzpreise tagesaktuell",
    },
    faqs: [
      { question: "Kann KI Abbundlisten erstellen?", answer: "KI erstellt Entwürfe für Abbundlisten basierend auf Grundriss und Dachform. Der Zimmerermeister prüft und optimiert — aber der Großteil der Arbeit ist erledigt." },
      { question: "Wie hilft KI bei schwankenden Holzpreisen?", answer: "Die KI verfolgt tagesaktuelle Holzpreise und kalkuliert automatisch mit aktuellen Marktpreisen. Bei Preissprüngen werden offene Angebote automatisch geprüft." },
      { question: "Funktioniert KI auch für Fertighausbauer?", answer: "Ja. Gerade in der Serienfertigung mit leichten Variationen spart KI enorm. Einmal konfiguriert, erstellt die KI Kalkulationen für jede Hausvariante in Sekunden." },
    ],
  },
  bau: {
    slug: "bau",
    name: "Bauunternehmen",
    metaTitle: "KI Beratung für Bauunternehmen | kiberatung.de",
    metaDescription: "KI für Baubetriebe: Ausschreibungsanalyse, Projektplanung, Baustellendokumentation, Nachkalkulation automatisieren.",
    h1: "KI Automatisierung für Bauunternehmen",
    intro: "Bauunternehmen managen komplexe Projekte mit vielen Beteiligten, engen Zeitplänen und strengen Budgets. KI hilft bei der Analyse von Ausschreibungen, optimiert die Baustellenplanung und automatisiert die Dokumentation. Weniger Papierkram, bessere Projektsteuerung.",
    stats: { betriebe: "75.000+", mitarbeiter: "920.000", markttrend: "+4,8 %", label1: "Bauunternehmen in Deutschland", label2: "Beschäftigte am Bau", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Bau Schneider GmbH — Leipzig",
      challenge: "Der Rohbaubetrieb verbrachte wöchentlich 10+ Stunden mit Bautagebüchern, Fotodokumentation und Berichtswesen.",
      solution: "KI-Baustellendokumentation: Fotos per App, KI erstellt automatisch Tagesbericht mit Wetter, Fortschritt, Mängeln und Personal.",
      result1: "Dokumentationszeit −80 %",
      result2: "Lückenlose Beweissicherung",
      result3: "Bauherren-Reports automatisch",
    },
    faqs: [
      { question: "Kann KI Ausschreibungen analysieren?", answer: "Ja. Die KI liest Leistungsverzeichnisse, extrahiert Positionen und Mengen und erstellt einen Kalkulationsentwurf. Für Standard-Positionen spart das 50–70 % der Kalkulationszeit." },
      { question: "Wie funktioniert KI-Baustellendokumentation?", answer: "Fotos per Smartphone-App hochladen, kurze Sprachnotiz dazu — die KI erstellt einen vollständigen Tagesbericht mit Gewerk, Fortschritt, Wetter und erkannten Mängeln." },
      { question: "Hilft KI bei der Nachkalkulation?", answer: "Ja. KI vergleicht Soll-Kalkulation mit Ist-Kosten in Echtzeit. Abweichungen werden sofort erkannt — nicht erst nach Projektabschluss." },
    ],
  },
  garten: {
    slug: "garten",
    name: "Garten- und Landschaftsbau",
    metaTitle: "KI Beratung für Garten- und Landschaftsbau | kiberatung.de",
    metaDescription: "KI für GaLaBau: Pflanzplanung, Aufmaß per Drohne, Pflegevertrags-Management. Mehr Grün, weniger Papier.",
    h1: "KI Automatisierung für Garten- und Landschaftsbau",
    intro: "Garten- und Landschaftsbaubetriebe arbeiten saisonal, projektbasiert und oft auf großen Flächen. KI hilft bei der Aufmaßerfassung per Drohne, automatisiert Pflegeverträge und optimiert die Routenplanung für Pflegetouren — damit Sie mehr Zeit im Grünen verbringen statt am Schreibtisch.",
    stats: { betriebe: "18.000+", mitarbeiter: "130.000", markttrend: "+5,1 %", label1: "GaLaBau-Betriebe in Deutschland", label2: "Beschäftigte im GaLaBau", label3: "Umsatzwachstum ggü. Vorjahr" },
    caseStudy: {
      restaurant: "Garten Eden GmbH — Hannover",
      challenge: "60 Pflegekunden, jeder mit individuellem Rhythmus. Die Tourenplanung dauerte jeden Montag 2 Stunden.",
      solution: "KI-Tourenoptimierung: Plant automatisch Wochenpläne basierend auf Pflegeintervall, Wetter, Fahrstrecke und verfügbarem Personal.",
      result1: "Tourenplanung in 5 Minuten",
      result2: "Fahrtstrecke −28 %",
      result3: "2 zusätzliche Kunden pro Tag",
    },
    faqs: [
      { question: "Kann KI Gärten aus Drohnenbildern vermessen?", answer: "Ja. Drohnenaufnahmen werden automatisch zu Flächenplänen verarbeitet — mit Bepflanzungszonen, Rasenflächen und Wegen. Genauer als Handaufmaß und in einem Bruchteil der Zeit." },
      { question: "Wie hilft KI bei saisonaler Planung?", answer: "Die KI plant vorausschauend: Pflanzzeiten, Rückschnitt, Düngung und Winterdienst werden automatisch im Kalender eingeplant — für jeden Kunden individuell." },
      { question: "Funktioniert KI-Routenplanung bei 50+ Pflegekunden?", answer: "Gerade dann. Je mehr Kunden und Variablen, desto mehr spart die KI. Bei 50+ Pflegekunden sind Einsparungen von 20–30 % Fahrstrecke realistisch." },
    ],
  },
};

export const VARIANTEN_SLUGS = Object.keys(variantenMap);

export function getVariantBySlug(slug: string): VariantData | undefined {
  return variantenMap[slug];
}
