'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ── Types ──────────────────────────────────────────────────────────────────

type Branche =
  | "gastronomie"
  | "handwerk"
  | "gesundheitswesen"
  | "einzelhandel"
  | "immobilien"
  | "rechtsanwaelte"
  | "logistik"
  | "bildung";

type Speaker = "caller" | "ai";

interface Message {
  speaker: Speaker;
  text: string;
}

interface BrancheConfig {
  label: string;
  messages: Message[];
}

// ── Dialog scripts ─────────────────────────────────────────────────────────

const DIALOGS: Record<Branche, BrancheConfig> = {
  gastronomie: {
    label: "Gastronomie",
    messages: [
      { speaker: "caller", text: "Hallo, ich hätte gerne einen Tisch für zwei Personen heute Abend um 20 Uhr." },
      { speaker: "ai",     text: "Guten Tag! Ich bin der KI-Assistent von Restaurant Bella Vista. Ich prüfe die Verfügbarkeit…" },
      { speaker: "ai",     text: "Perfekt, wir haben noch einen Tisch für 2 Personen frei. Auf welchen Namen?" },
      { speaker: "caller", text: "Müller." },
      { speaker: "ai",     text: "Wunderbar! Reservierung für Müller, 2 Personen, heute 20 Uhr ist eingetragen. Wir freuen uns auf Sie!" },
    ],
  },
  handwerk: {
    label: "Handwerk",
    messages: [
      { speaker: "caller", text: "Ich brauche dringend einen Klempner, bei mir tropft die Heizung." },
      { speaker: "ai",     text: "Guten Tag! Ich bin der Assistent von Heizung & Sanitär Schulz. Wie dringend ist die Situation?" },
      { speaker: "caller", text: "Naja, es tropft leicht, aber schon seit gestern." },
      { speaker: "ai",     text: "Ich verstehe. Ich kann Ihnen morgen früh um 8:30 Uhr einen Techniker schicken. Passt das?" },
      { speaker: "caller", text: "Ja, perfekt." },
      { speaker: "ai",     text: "Notiert! Morgen 8:30 Uhr bei Ihnen. Ich schicke Ihnen zur Bestätigung eine SMS." },
    ],
  },
  gesundheitswesen: {
    label: "Gesundheitswesen",
    messages: [
      { speaker: "caller", text: "Ich möchte einen Termin beim Internisten, so schnell wie möglich." },
      { speaker: "ai",     text: "Guten Tag, hier ist die KI-Sprechstundenhilfe der Praxis Dr. Meier. Haben Sie akute Beschwerden?" },
      { speaker: "caller", text: "Nein, eine Routineuntersuchung." },
      { speaker: "ai",     text: "Für eine Routineuntersuchung hätte ich Dienstag, 15. April um 10:15 Uhr oder Donnerstag um 14:30. Was passt besser?" },
      { speaker: "caller", text: "Dienstag bitte." },
      { speaker: "ai",     text: "Eingetragen! Termin am Dienstag, 15. April, 10:15 Uhr bei Dr. Meier. Bis dahin!" },
    ],
  },
  einzelhandel: {
    label: "Einzelhandel",
    messages: [
      { speaker: "caller", text: "Haben Sie den Pullover in Größe M noch auf Lager? Den blauen von der Herbstkollektion." },
      { speaker: "ai",     text: "Guten Tag! Ich überprüfe das sofort für Sie… Ja, wir haben den blauen Pullover in M noch zweimal auf Lager." },
      { speaker: "caller", text: "Super! Kann ich den reservieren?" },
      { speaker: "ai",     text: "Natürlich! Ich halte ihn 24 Stunden für Sie zurück. Auf welchen Namen?" },
    ],
  },
  immobilien: {
    label: "Immobilien",
    messages: [
      { speaker: "caller", text: "Ich interessiere mich für die Wohnung in der Hauptstraße 12. Wann kann ich besichtigen?" },
      { speaker: "ai",     text: "Guten Tag! Ich bin der Assistent von Immobilien Schmidt. Die Wohnung ist noch verfügbar. Wann passt es Ihnen? Wir haben Dienstag um 17 Uhr oder Samstag um 11 Uhr." },
      { speaker: "caller", text: "Samstag um 11 wäre ideal." },
      { speaker: "ai",     text: "Perfekt! Besichtigungstermin Samstag, 11 Uhr, Hauptstraße 12 ist gebucht. Bis Samstag!" },
    ],
  },
  rechtsanwaelte: {
    label: "Rechtsanwälte",
    messages: [
      { speaker: "caller", text: "Ich habe eine Frage zu einer Kündigung, die ich erhalten habe." },
      { speaker: "ai",     text: "Guten Tag, hier ist die Kanzlei Weber & Partner. Ich nehme Ihre Anfrage auf. Handelt es sich um eine Kündigung vom Arbeitgeber?" },
      { speaker: "caller", text: "Ja, genau." },
      { speaker: "ai",     text: "Wichtig: Die Klagefrist beträgt 3 Wochen. Ich verbinde Sie jetzt mit unserem Experten für Arbeitsrecht — er meldet sich heute noch bei Ihnen." },
    ],
  },
  logistik: {
    label: "Logistik",
    messages: [
      { speaker: "caller", text: "Ich wollte fragen wo mein Paket ist, es sollte gestern ankommen." },
      { speaker: "ai",     text: "Guten Tag! Ich bin der KI-Assistent von Logistik Express. Können Sie mir Ihre Sendungsnummer nennen?" },
      { speaker: "caller", text: "LE-2026-447812" },
      { speaker: "ai",     text: "Ich habe Ihre Sendung gefunden. Sie befindet sich gerade im Verteilzentrum Frankfurt und wird heute zwischen 14 und 18 Uhr zugestellt." },
    ],
  },
  bildung: {
    label: "Bildung",
    messages: [
      { speaker: "caller", text: "Gibt es bei euch noch freie Plätze im Mathe-Kurs für die 10. Klasse?" },
      { speaker: "ai",     text: "Guten Tag! Ich bin der Assistent vom Lernstudio Brillant. Im Mathe-Kurs Klasse 10 haben wir noch 2 freie Plätze. Soll ich Sie anmelden?" },
      { speaker: "caller", text: "Ja gerne, für meine Tochter." },
      { speaker: "ai",     text: "Sehr gerne! Der Kurs startet jeden Mittwoch um 17 Uhr. Ich schicke Ihnen die Anmeldeunterlagen per E-Mail." },
    ],
  },
};

const BRANCHEN_ORDER: Branche[] = [
  "gastronomie",
  "handwerk",
  "gesundheitswesen",
  "einzelhandel",
  "immobilien",
  "rechtsanwaelte",
  "logistik",
  "bildung",
];

// ── Sub-components ─────────────────────────────────────────────────────────

function ThreeDots() {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center", padding: "4px 0" }}>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "rgba(249,115,22,0.7)",
            display: "inline-block",
          }}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function RingingPhone() {
  return (
    <motion.div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "20px 0" }}
    >
      {/* Animated ring circles */}
      <div style={{ position: "relative", width: 80, height: 80 }}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "2px solid rgba(249,115,22,0.5)",
            }}
            animate={{ scale: [1, 1.8 + i * 0.4], opacity: [0.7, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4, ease: "easeOut" }}
          />
        ))}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "rgba(249,115,22,0.15)",
            border: "2px solid var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          animate={{ rotate: [-8, 8, -8, 8, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.6 }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12 19.79 19.79 0 0 1 1.21 3.59 2 2 0 0 1 3.22 1.42h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.9 5.9l1.58-1.58a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.92 16.92z" />
          </svg>
        </motion.div>
      </div>
      <motion.p
        style={{ color: "var(--text-gray)", fontSize: 13, fontWeight: 500, letterSpacing: "0.03em" }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.4, repeat: Infinity }}
      >
        Eingehender Anruf…
      </motion.p>
    </motion.div>
  );
}

// ── PhoneMockup ─────────────────────────────────────────────────────────────

interface PhoneMockupProps {
  branche: Branche;
  playing: boolean;
}

function PhoneMockup({ branche, playing }: PhoneMockupProps) {
  const messages = DIALOGS[branche].messages;

  // Phase: 'ringing' → 'chatting' → 'done'
  type Phase = "ringing" | "chatting" | "done";
  const [phase, setPhase] = useState<Phase>("ringing");
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const phaseRef = useRef(phase);
  phaseRef.current = phase;
  const playingRef = useRef(playing);
  playingRef.current = playing;

  // Reset whenever branche changes or playing flips on
  useEffect(() => {
    setPhase("ringing");
    setVisibleCount(0);
    setShowTyping(false);
  }, [branche, playing]);

  // Orchestrate the animation sequence
  useEffect(() => {
    if (!playing) return;

    let cancelled = false;

    const sleep = (ms: number) =>
      new Promise<void>((res) => setTimeout(() => { if (!cancelled) res(); }, ms));

    async function run() {
      // Ringing phase
      await sleep(2200);
      if (cancelled) return;
      setPhase("chatting");

      for (let i = 0; i < messages.length; i++) {
        if (cancelled) return;
        const msg = messages[i];

        // If AI message → show three-dots first
        if (msg.speaker === "ai") {
          setShowTyping(true);
          await sleep(1200);
          if (cancelled) return;
          setShowTyping(false);
        }

        setVisibleCount(i + 1);
        // Pause between bubbles based on text length
        const readTime = Math.min(Math.max(msg.text.length * 28, 900), 2600);
        await sleep(readTime);
      }

      if (cancelled) return;
      setPhase("done");
    }

    run();
    return () => { cancelled = true; };
  }, [playing, branche, messages]);

  return (
    <div style={{
      width: 240,
      background: "#0a0a0f",
      border: "3px solid #1f2937",
      borderRadius: 36,
      padding: "0 0 16px",
      boxShadow: "0 0 0 1px rgba(249,115,22,0.12), 0 24px 64px rgba(0,0,0,0.6)",
      position: "relative",
      overflow: "hidden",
      flexShrink: 0,
    }}>
      {/* Notch */}
      <div style={{
        margin: "10px auto 0",
        width: 72,
        height: 20,
        background: "#111827",
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
      }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1f2937" }} />
        <div style={{ width: 28, height: 6, borderRadius: 4, background: "#1f2937" }} />
      </div>

      {/* Status bar */}
      <div style={{ padding: "6px 16px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 9, color: "#4b5563", fontWeight: 600 }}>9:41</span>
        <span style={{ fontSize: 9, color: "#4b5563" }}>●●●</span>
      </div>

      {/* Screen content */}
      <div style={{
        margin: "8px 10px 0",
        background: "#0f172a",
        borderRadius: 18,
        minHeight: 320,
        padding: "12px 10px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        overflowY: "auto",
        maxHeight: 340,
      }}>
        {/* Call label */}
        <div style={{
          textAlign: "center",
          fontSize: 9,
          color: "var(--text-gray)",
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 4,
        }}>
          KI-Telefonassistent
        </div>

        <AnimatePresence mode="wait">
          {phase === "ringing" && (
            <motion.div
              key="ringing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              <RingingPhone />
            </motion.div>
          )}

          {phase !== "ringing" && (
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ display: "flex", flexDirection: "column", gap: 8 }}
            >
              <AnimatePresence>
                {messages.slice(0, visibleCount).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    style={{
                      display: "flex",
                      justifyContent: msg.speaker === "caller" ? "flex-end" : "flex-start",
                    }}
                  >
                    <div style={{
                      maxWidth: "82%",
                      padding: "7px 10px",
                      borderRadius: msg.speaker === "caller"
                        ? "14px 14px 4px 14px"
                        : "14px 14px 14px 4px",
                      background: msg.speaker === "caller"
                        ? "rgba(249,115,22,0.18)"
                        : "#1e293b",
                      border: msg.speaker === "caller"
                        ? "1px solid rgba(249,115,22,0.3)"
                        : "1px solid rgba(248,250,252,0.07)",
                      fontSize: 10.5,
                      lineHeight: 1.45,
                      color: msg.speaker === "caller" ? "#fed7aa" : "#e2e8f0",
                    }}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              <AnimatePresence>
                {showTyping && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <div style={{
                      padding: "6px 12px",
                      borderRadius: "14px 14px 14px 4px",
                      background: "#1e293b",
                      border: "1px solid rgba(248,250,252,0.07)",
                    }}>
                      <ThreeDots />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom home bar */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <div style={{ width: 50, height: 4, background: "#1f2937", borderRadius: 2 }} />
      </div>
    </div>
  );
}

// ── Main Widget ─────────────────────────────────────────────────────────────

interface LiveDemoWidgetProps {
  branche?: Branche;
}

export default function LiveDemoWidget({ branche: initialBranche = "gastronomie" }: LiveDemoWidgetProps) {
  const [activeBranche, setActiveBranche] = useState<Branche>(initialBranche);
  const [playKey, setPlayKey] = useState(0); // increment to restart
  const [playing, setPlaying] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-80px" });

  // Start animation when entering viewport
  useEffect(() => {
    if (inView && !playing) {
      setPlaying(true);
    }
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-replay: watch for conversation end via a timeout based on total dialog length
  const messages = DIALOGS[activeBranche].messages;
  const totalDuration = useRef(0);

  useEffect(() => {
    if (!playing) return;

    // Estimate total time: ringing(2.2s) + per-message (typing + read time)
    let t = 2200;
    for (const msg of messages) {
      if (msg.speaker === "ai") t += 1200;
      t += Math.min(Math.max(msg.text.length * 28, 900), 2600);
    }
    totalDuration.current = t;

    const replayTimer = setTimeout(() => {
      // 3s pause then restart
      setTimeout(() => {
        setPlayKey((k) => k + 1);
        setPlaying(false);
        setTimeout(() => setPlaying(true), 50);
      }, 3000);
    }, t);

    return () => clearTimeout(replayTimer);
  }, [playing, activeBranche, playKey, messages]);

  const handleBrancheClick = useCallback((b: Branche) => {
    setActiveBranche(b);
    setPlayKey((k) => k + 1);
    setPlaying(false);
    setTimeout(() => setPlaying(true), 80);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "5rem 0",
        background: "linear-gradient(180deg, transparent 0%, rgba(249,115,22,0.03) 50%, transparent 100%)",
      }}
    >
      <div className="container">
        {/* Section head */}
        <div className="branche-section-head" style={{ marginBottom: "3rem" }}>
          <span className="section-eyebrow">Live Demo</span>
          <h2 className="section-heading section-heading-center">
            So klingt Ihr KI-Telefonassistent — live erleben:
          </h2>
        </div>

        {/* Widget body: two columns */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "3rem",
          alignItems: "flex-start",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {/* Left: Phone mockup */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <PhoneMockup key={`${activeBranche}-${playKey}`} branche={activeBranche} playing={playing} />
            {/* Replay hint */}
            <p style={{ fontSize: 11, color: "var(--text-gray)", opacity: 0.6, textAlign: "center", maxWidth: 200 }}>
              Wiederholt automatisch nach 3 Sekunden
            </p>
          </div>

          {/* Right: Branch selector */}
          <div style={{ flex: 1, minWidth: 240, maxWidth: 420 }}>
            <p style={{
              fontSize: 13,
              color: "var(--text-gray)",
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Branche wählen:
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {BRANCHEN_ORDER.map((b) => {
                const isActive = b === activeBranche;
                return (
                  <button
                    key={b}
                    onClick={() => handleBrancheClick(b)}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "var(--radius-pill)",
                      border: isActive
                        ? "1.5px solid var(--accent)"
                        : "1.5px solid rgba(248,250,252,0.12)",
                      background: isActive
                        ? "rgba(249,115,22,0.15)"
                        : "rgba(248,250,252,0.04)",
                      color: isActive ? "var(--accent)" : "var(--text-gray)",
                      fontSize: 13,
                      fontWeight: isActive ? 600 : 400,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {DIALOGS[b].label}
                  </button>
                );
              })}
            </div>

            {/* Active branche info */}
            <motion.div
              key={activeBranche}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              style={{
                marginTop: "1.75rem",
                padding: "1.25rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-card)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  boxShadow: "0 0 8px rgba(249,115,22,0.6)",
                  animation: "live-pulse 1.5s ease-in-out infinite",
                }} />
                <span style={{ fontSize: 12, color: "var(--accent)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Live
                </span>
              </div>
              <p style={{ fontSize: 13, color: "var(--text-gray)", lineHeight: 1.6 }}>
                Echtes Gesprächsbeispiel für{" "}
                <strong style={{ color: "var(--text-white)" }}>{DIALOGS[activeBranche].label}</strong>.
                Ihr KI-Assistent übernimmt genau so — rund um die Uhr, ohne Wartezeit.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes live-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
