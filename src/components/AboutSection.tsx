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
        <div className="flex flex-col md:flex-row items-stretch px-[60px] py-[50px] gap-10">
          {/* Left column - same dimensions as image */}
          <div className="md:w-[360px] flex-shrink-0 flex flex-col justify-center">
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
              Combinamos tecnologia, consultoria e segurança para entregar
              soluções que otimizam operações e potencializam resultados.
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
          <div className="md:w-[360px] flex-shrink-0 flex items-center justify-center">
            <img
              src={sectionImage}
              alt="Mapa com dados geográficos"
              className="w-full h-full object-cover"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
