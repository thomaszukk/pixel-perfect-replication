import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseEnergiaPageSection from "@/components/CaseEnergiaPageSection";
import CaseTelecomPageSection from "@/components/CaseTelecomPageSection";
import solucoesBg from "@/assets/solucoes-hero-bg.png";

const Cases = () => {
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
          alt="Cases de sucesso ZUKK"
          className="w-full h-full object-cover object-center block"
        />
      </section>

      <CaseEnergiaPageSection />

      <Footer />
    </div>
  );
};

export default Cases;
