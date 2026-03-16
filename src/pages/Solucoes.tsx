import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import solucoesBg from "@/assets/solucoes-hero-bg.jpg";

const Solucoes = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${solucoesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "0 0 150px 0",
          padding: "105px 20px 120px 20px",
          minHeight: "525px",
        }}
      >
        <div className="w-full max-w-[1232px] mx-auto relative z-10">
          <p
            className="text-white text-[28px] md:text-[36px] leading-[1.2] font-light italic"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Conectando
            <br />
            o <em className="font-light">futuro</em> com
          </p>
          <h1
            className="text-[40px] md:text-[56px] leading-[1.05] font-bold mt-1"
            style={{ color: "#3DE8E0", fontFamily: "'Poppins', sans-serif" }}
          >
            SOLUÇÕES
            <br />
            INTELIGENTES
          </h1>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solucoes;
