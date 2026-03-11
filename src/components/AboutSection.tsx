import sectionImage from "@/assets/section2-image.png";

const AboutSection = () => {
  return (
    <section className="relative z-10 -mt-[8px] px-6 pb-16">
      <div
        className="max-w-[1142px] mx-auto bg-white overflow-hidden"
        style={{
          borderRadius: "40px",
          boxShadow: "0 15px 70px -10px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left column */}
          <div className="flex-1 p-[30px] flex flex-col justify-center">
            <h2
              className="text-[22px] font-bold leading-tight mb-5"
              style={{ color: "#0B132B" }}
            >
              Na ZUKK, transformamos dados
              <br />
              em estratégias vencedoras.
            </h2>
            <p
              className="text-[16px] font-light leading-relaxed mb-8"
              style={{ color: "#191D2A" }}
            >
              Somos uma empresa de inteligência geográfica que combina
              tecnologia, dados e estratégia para ajudar negócios a tomarem
              decisões mais inteligentes. Da escolha do ponto ideal à
              compreensão profunda do mercado, entregamos soluções sob medida
              que geram impacto real.
            </p>
            <div>
              <a
                href="#sobre"
                className="inline-block px-8 py-3 text-[11px] font-semibold uppercase tracking-wider transition-all hover:opacity-90"
                style={{
                  backgroundColor: "#001E3B",
                  color: "white",
                  borderRadius: "5px",
                  fontFamily: "'Open Sans', sans-serif",
                }}
              >
                Conheça mais
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="flex-shrink-0 p-[30px] flex items-center justify-center">
            <img
              src={sectionImage}
              alt="Mapa com dados geográficos"
              className="w-full md:w-[320px] h-auto object-cover"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
