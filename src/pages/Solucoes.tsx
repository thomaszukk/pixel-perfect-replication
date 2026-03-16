import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
          height: "485px",
        }}
      >
        <img
          src={solucoesBg}
          alt="Conectando o futuro com Soluções Inteligentes"
          className="w-full h-full object-cover object-center block"
        />
      </section>

      <Footer />
    </div>
  );
};

export default Solucoes;
