import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PartnersSection from "@/components/PartnersSection";
import SectorsSection from "@/components/SectorsSection";
import OverlaySection from "@/components/OverlaySection";
import CaseEnergiaSection from "@/components/CaseEnergiaSection";
import CaseTelecomSection from "@/components/CaseTelecomSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
