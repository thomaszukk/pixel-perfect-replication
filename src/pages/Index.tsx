import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import SectorsSection from "@/components/SectorsSection";
import OverlaySection from "@/components/OverlaySection";
import CaseEnergiaSection from "@/components/CaseEnergiaSection";
import CaseTelecomSection from "@/components/CaseTelecomSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <SectorsSection />
      <OverlaySection />
      <CaseEnergiaSection />
      <CaseTelecomSection />
    </div>
  );
};

export default Index;
