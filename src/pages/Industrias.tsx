import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustriaTelecomSection from "@/components/IndustriaTelecomSection";
import IndustriaTelecomCardsSection from "@/components/IndustriaTelecomCardsSection";
import BeneficiosPorAreaSection from "@/components/BeneficiosPorAreaSection";
import solucoesBg from "@/assets/solucoes-hero-bg.png";

const Industrias = () => {
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
          alt="Indústrias que transformamos com inteligência geográfica"
          className="w-full h-full object-cover object-center block"
        />
      </section>

      <IndustriaTelecomSection />
      <IndustriaTelecomCardsSection />
      <BeneficiosPorAreaSection />

      {/* Divider */}
      <div className="flex justify-center py-4">
        <div className="w-[120px] h-[1px]" style={{ backgroundColor: "#09A5C1" }} />
      </div>

      <Footer />
    </div>
  );
};

export default Industrias;
