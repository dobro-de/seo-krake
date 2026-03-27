import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KI-Chatbot für Websites | Automatischer Kundenservice | kiberatung.de",
  description:
    "KI-Chatbot für Ihre Website: 24/7 Kundenfragen beantworten, Termine buchen, Leads qualifizieren. In 48 Stunden live. Monatlich ab €149.",
  alternates: {
    canonical: "https://kiberatung.de/ki-chatbot",
  },
};

export default function KiChatbotLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
