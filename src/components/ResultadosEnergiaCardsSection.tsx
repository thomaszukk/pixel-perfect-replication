import { DollarSign, Settings, Cloud } from "lucide-react";

const results = [
  {
    icon: (
      <div
        className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
        style={{ backgroundColor: "#09A5C1" }}
      >
        <DollarSign size={28} color="white" />
      </div>
    ),
    title: "Redução e Prevenção",
    description:
      "Cruzamento de dados geográficos para minimizar perdas e evitar falhas operacionais.",
    borderColor: "#09A5C1",
  },
  {
    icon: (
      <div
        className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
        style={{ backgroundColor: "#0B132B" }}
      >
        <Settings size={28} color="white" />
      </div>
    ),
    title: "Agilidade em Campo",
    description:
      "Resposta rápida a incidentes com equipes mobilizadas por geolocalização e processos digitais.",
    borderColor: "#0B132B",
  },
  {
    icon: (
      <div
        className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
        style={{ backgroundColor: "#3DE8E0" }}
      >
        <Cloud size={28} color="white" />
      </div>
    ),
    title: "Planejamento Inteligente",
    description:
      "Otimização de rotas, manutenção preditiva e escolha inteligente de locais.",
    borderColor: "#3DE8E0",
  },
];

const ResultadosEnergiaCardsSection = () => {
  return (
    <section className="w-full flex justify-center pt-[10px]">
      <div className="max-w-[1232px] w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white rounded-t-[20px] rounded-b-none p-8 pt-10 relative overflow-hidden"
              style={{ boxShadow: "0 19px 38px 0 rgba(0, 0, 0, 0.16)" }}
            >
              {/* Icon */}
              <div className="mb-6">{item.icon}</div>

              {/* Title */}
              <h3
                className="text-xl font-bold leading-[1.4] mb-3"
                style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-base font-light leading-[1.4]"
                style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
              >
                {item.description}
              </p>

              {/* Bottom border */}
              <div
                className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full"
                style={{ backgroundColor: item.borderColor }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultadosEnergiaCardsSection;
