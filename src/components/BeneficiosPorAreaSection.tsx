import beneficiosImg from "@/assets/industria-telecom-beneficios.png";

const areas = [
  {
    label: "Operações e Manutenção de Redes",
    items: [
      "Redução de custos com otimização de rotas e manutenção preditiva.",
      "Melhora da eficiência operacional com monitoramento em tempo real.",
      "Aumento da segurança da equipe em campo.",
    ],
  },
  {
    label: "Serviços de Localização",
    items: [
      "Aumento da receita com oferta de serviços de localização personalizados.",
      "Melhora do engajamento do cliente com experiências interativas.",
      "Diferenciação da concorrência com soluções inovadoras.",
    ],
  },
];

const BeneficiosPorAreaSection = () => {
  return (
    <section className="w-full flex justify-center pt-[10px] pb-[26px]">
      <div className="max-w-[1232px] w-full px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left: Title + Areas */}
          <div className="w-full md:w-[57%] p-[15px] flex flex-col justify-center">
            <div className="flex flex-col gap-10">
              {/* Title */}
              <h2
                className="text-3xl md:text-[48px] font-normal leading-[1.14]"
                style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
              >
                Benefícios das Soluções
                <br />
                por Área
              </h2>

              {/* Areas grid */}
              <div className="flex flex-col">
                {areas.map((area, idx) => (
                  <div key={idx} className="flex">
                    {/* Label */}
                    <div
                      className="w-[213px] flex-shrink-0 pr-10 py-[15px] flex items-center"
                      style={{ borderRight: "1px solid #CCC" }}
                    >
                      <h3
                        className="text-sm font-semibold uppercase tracking-[1px] leading-[1.4]"
                        style={{ color: "#001E3B", fontFamily: "'Poppins', sans-serif" }}
                      >
                        {area.label}
                      </h3>
                    </div>

                    {/* Items */}
                    <div className="flex-1 pl-10 py-[8px] flex items-center">
                      <ul className="list-disc pl-10 flex flex-col">
                        {area.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-base font-light leading-[1.4] py-[4px]"
                            style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-[43%] p-[15px] flex items-center">
            <div
              className="w-full h-full min-h-[350px] md:min-h-[440px] rounded-[25px] overflow-hidden"
              style={{ boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.50)" }}
            >
              <img
                src={beneficiosImg}
                alt="Benefícios das Soluções - Trabalhador em torre de telecomunicações"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosPorAreaSection;
