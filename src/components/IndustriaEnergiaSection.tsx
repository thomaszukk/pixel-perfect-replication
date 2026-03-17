import industriaEnergiaImg from "@/assets/industria-energia.png";

const IndustriaEnergiaSection = () => {
  return (
    <section className="w-full flex justify-center pt-[50px]">
      <div className="max-w-[1232px] w-full px-6">
        <div className="flex flex-col md:flex-row gap-0">
          {/* Left: Image */}
          <div className="w-full md:w-1/3 p-[15px]">
            <div
              className="w-full h-[241px] rounded-[30px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${industriaEnergiaImg})`,
                boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.50)",
              }}
            />
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-2/3 p-[15px]">
            <div className="bg-white rounded-[30px] p-[15px] h-full flex flex-col justify-center">
              <div className="flex flex-col gap-[10px]">
                {/* Icon */}
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 4L10 28H24L22 46L40 22H26L28 4Z" stroke="#0B132B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <line x1="18" y1="8" x2="18" y2="2" stroke="#0B132B" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="32" y1="8" x2="32" y2="2" stroke="#0B132B" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="25" y1="6" x2="25" y2="0" stroke="#0B132B" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>

                {/* Title */}
                <h2
                  className="text-[28px] md:text-[38px] font-bold leading-[1.14]"
                  style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
                >
                  Energia Elétrica
                </h2>

                {/* Description */}
                <p
                  className="text-base font-light leading-[1.4] max-w-[731px]"
                  style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
                >
                  A ZUKK entrega soluções de inteligência geográfica sob medida para empresas de energia
                  elétrica que buscam <strong className="font-bold">eficiência operacional, controle territorial e redução de perdas</strong>.
                  Nossas ferramentas potencializam desde o planejamento da rede até a gestão de campo
                  — com dados estratégicos e visão de território.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriaEnergiaSection;
