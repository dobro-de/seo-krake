import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import Features from "@/components/Features";
import VideoSection from "@/components/VideoSection";
import Prozess from "@/components/Prozess";
import Stats from "@/components/Stats";
import UseCases from "@/components/UseCases";
import Branchen from "@/components/Branchen";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <Features />
        <VideoSection />
        <Prozess />
        <Stats />
        <UseCases />
        <Branchen />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ClientScripts />
    </>
  );
}
