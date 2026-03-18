import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import solucoesBg from "@/assets/solucoes-hero-bg.png";

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - same as Cases/Solucoes */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          borderRadius: "0 0 150px 0",
          height: "520px",
        }}
      >
        <img
          src={solucoesBg}
          alt="Quem Somos ZUKK"
          className="w-full h-full object-cover object-center block"
        />
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
