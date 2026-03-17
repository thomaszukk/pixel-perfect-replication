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
                <svg width="50" height="50" viewBox="0 0 1500 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M802.734 1283.203l128.906-93.75c0-5.859 0-8.789 0-11.719 0-58.594 46.875-108.398 105.469-108.398s108.398 49.805 108.398 108.398c0 58.594-49.805 105.469-108.398 105.469-20.508 0-41.016-5.859-55.664-17.578l-178.711 128.906v105.469h-105.469v-316.406l-181.641-131.836c-17.578 8.789-35.156 14.648-52.734 14.648-58.594 0-108.398-49.805-108.398-108.398s49.805-105.469 108.398-105.469c58.594 0 105.469 46.875 105.469 105.469 0 5.859 0 11.719-2.93 17.578l131.836 96.68v-316.406l-181.641-131.836c-17.578 8.789-35.156 14.648-52.734 14.648-58.594 0-108.398-49.805-108.398-108.398s49.805-105.469 108.398-105.469c58.594 0 105.469 46.875 105.469 105.469 0 5.859 0 14.648-2.93 20.508l131.836 93.75v-295.898l-184.57-134.766c-14.648 8.789-32.227 14.648-49.805 14.648-58.594 0-108.398-46.875-108.398-105.469s49.805-108.398 108.398-108.398c58.594 0 105.469 49.805 105.469 108.398 0 5.859 0 11.719-2.93 17.578l131.836 96.68v-237.305h105.469v448.242l128.906-93.75c0-5.859 0-11.719 0-14.648 0-58.594 46.875-108.398 105.469-108.398s108.398 49.805 108.398 108.398c0 58.594-49.805 105.469-108.398 105.469-20.508 0-38.086-5.859-55.664-14.648l-178.711 128.906v295.898l128.906-93.75c0-5.859 0-8.789 0-11.719 0-61.523 46.875-108.398 105.469-108.398s108.398 46.875 108.398 108.398c0 58.594-49.805 105.469-108.398 105.469-20.508 0-38.086-5.859-55.664-17.578l-178.711 131.836v313.477z" fill="#0B132B"/>
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
