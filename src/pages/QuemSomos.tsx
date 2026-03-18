import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import quemSomosBg from "@/assets/quem-somos-bg.webp";
import solucoesBg from "@/assets/solucoes-hero-bg.png";

const QuemSomos = () => {
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
          alt="Quem Somos ZUKK"
          className="w-full h-full object-cover object-center block"
        />
      </section>

      {/* Quem Somos Content Section */}
      <section className="relative w-full" style={{ height: "712px" }}>
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${quemSomosBg})` }}
        />
        {/* White gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, #FFF 55%, rgba(255, 255, 255, 0.50) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1232px] mx-auto h-full flex items-center px-6">
          <div className="max-w-[424px]">
            <h2
              className="text-[48px] font-bold leading-[54.86px] mb-5"
              style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
            >
              Quem Somos
            </h2>

            <p
              className="text-[18px] font-semibold leading-[25.2px] mb-8"
              style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
            >
              A ZUKK é uma boutique de tecnologia fundada em 2019 com um propósito claro: transformar inteligência geográfica em valor de negócio.
            </p>

            <p
              className="text-[16px] font-light leading-[22.4px] mb-6"
              style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
            >
              Desde o início, acreditamos que entender o território é fundamental para tomar decisões mais inteligentes e operar com mais eficiência.
            </p>

            <p
              className="text-[16px] font-light leading-[22.4px] mb-6"
              style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
            >
              Atuamos com soluções fim a fim que combinam dados de localização, analytics, inteligência artificial e desenvolvimento de sistemas para otimizar operações e decisões.
            </p>

            <p
              className="text-[16px] font-light leading-[22.4px]"
              style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
            >
              Apoiamos a jornada digital dos nossos clientes, tanto com equipes especializadas quanto com ferramentas e inovação.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
