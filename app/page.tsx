import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GamesSection from "@/components/GamesSection";
import FeaturesSection from "@/components/FeaturesSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <Hero />
        <GamesSection />
        <FeaturesSection />
        <InfrastructureSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
