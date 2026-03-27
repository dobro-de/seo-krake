import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cityMap, generateStaticParamsList, type CityData } from "./cityData";
import { getVariantBySlug, VARIANTEN_SLUGS } from "./variantenData";

import LocalHero from "./components/LocalHero";
import CityStats from "./components/CityStats";
import ProblemCards from "./components/ProblemCards";
import FeatureGrid from "./components/FeatureGrid";
import CaseStudy from "./components/CaseStudy";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

// ─── Static Params ──────────────────────────────────────────────────────────
export function generateStaticParams() {
  return [
    ...generateStaticParamsList(),
    ...VARIANTEN_SLUGS.map((s) => ({ stadt: s })),
  ];
}

// ─── Resolve slug to CityData ────────────────────────────────────────────────
function resolveData(slug: string): CityData | null {
  if (cityMap[slug]) return cityMap[slug];
  const v = getVariantBySlug(slug);
  if (v) return { ...v, layout: 1 };
  return null;
}

// ─── Metadata ───────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ stadt: string }>;
}): Promise<Metadata> {
  const { stadt } = await params;
  const city = resolveData(stadt);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `https://kiberatung-v2.vercel.app/immobilien/${city.slug}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `https://kiberatung-v2.vercel.app/immobilien/${city.slug}`,
      siteName: "KI Beratung",
      locale: "de_DE",
      type: "website",
    },
  };
}

// ─── JSON-LD Schema ──────────────────────────────────────────────────────────
function SchemaMarkup({ name, slug }: { name: string; slug: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: `KI Beratung Immobilien ${name}`,
          serviceType: "KI Beratung",
          provider: { "@type": "Organization", name: "KI Beratung", url: "https://kiberatung-v2.vercel.app" },
          url: `https://kiberatung-v2.vercel.app/immobilien/${slug}`,
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Kostenlose Erstberatung" },
        }),
      }}
    />
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default async function ImmobilienStadtPage({
  params,
}: {
  params: Promise<{ stadt: string }>;
}) {
  const { stadt } = await params;
  const city = resolveData(stadt);
  if (!city) notFound();

  const sections = {
    hero: <LocalHero key="hero" city={city} />,
    stats: <CityStats key="stats" city={city} />,
    problems: <ProblemCards key="problems" city={city} />,
    features: <FeatureGrid key="features" city={city} />,
    caseStudy: <CaseStudy key="caseStudy" city={city} />,
    faq: <FAQSection key="faq" city={city} />,
    cta: <CTASection key="cta" city={city} />,
  };

  const order: (keyof typeof sections)[] = ["hero", "stats", "problems", "features", "caseStudy", "faq", "cta"];

  return (
    <>
      <SchemaMarkup name={city.name} slug={city.slug} />
      <Nav />
      <main>{order.map((key) => sections[key])}</main>
      <Footer />
    </>
  );
}
