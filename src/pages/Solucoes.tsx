import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolucoesServicesSection from "@/components/SolucoesServicesSection";
import LocationIntelligenceSection from "@/components/LocationIntelligenceSection";
import GeocodeSection from "@/components/GeocodeSection";
import HereDifferentialsSection from "@/components/HereDifferentialsSection";
import BeneficiosSolucaoSection from "@/components/BeneficiosSolucaoSection";
import MonitoramentoFrotasSection from "@/components/MonitoramentoFrotasSection";
import solucoesBg from "@/assets/solucoes-hero-bg.png";

const Solucoes = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          borderRadius: "0 0 150px 0",
          height: "520px",
        }}
      >
        <img
          src={solucoesBg}
          alt="Conectando o futuro com Soluções Inteligentes"
          className="w-full h-full object-cover object-center block"
        />
      </section>

      <SolucoesServicesSection />
      <LocationIntelligenceSection />
      <GeocodeSection />
      <HereDifferentialsSection />
      <BeneficiosSolucaoSection />

      <Footer />
    </div>
  );
};

export default Solucoes;
