import { Car, Send, Clock } from "lucide-react";

const differentials = [
  {
    icon: Car,
    title: "Planejamento de Rotas Otimizado",
    description:
      "Crie rotas eficientes considerando tráfego em tempo real, restrições de veículos, custos de pedágios e outros fatores relevantes modelo de análise e planejamento consagrado mundialmente pela HERE",
  },
  {
    icon: Send,
    title: "Estimativas de Chegada Precisas (ETAs)",
    description:
      "Melhore a comunicação e aumente a satisfação dos clientes ao fornecer previsões exatas de entrega e deslocamento",
  },
  {
    icon: Clock,
    title: "Monitoramento em Tempo Real",
    description:
      "Informações da localização e status dos veículos em tempo real para uma gestão proativa",
  },
];

const RoutePlanningDifferentialsSection = () => {
  return (
    <section className="w-full px-6 py-16 md:py-20 bg-white">
      <div className="max-w-[1232px] mx-auto">
        <h3
          className="text-[29px] font-bold leading-[36px] mb-8 px-[30px]"
          style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
        >
          Diferenciais do Route Planning HERE
        </h3>

        <div className="flex flex-col gap-[30px]">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 flex items-start gap-4"
              style={{
                boxShadow: "0 19px 38px 0 rgba(0, 0, 0, 0.16)",
              }}
            >
              <div className="flex items-center p-[15px]">
                <div
                  className="w-[60px] h-[60px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#09A5C1" }}
                >
                  <item.icon className="w-[28px] h-[28px] text-white" />
                </div>
              </div>

              <div className="flex flex-col gap-[9px] py-[15px] flex-1">
                <h5
                  className="text-[18px] font-bold leading-[25.2px] uppercase"
                  style={{
                    color: "#001E3B",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {item.title}
                </h5>
                <p
                  className="text-[16px] font-normal leading-[22.4px]"
                  style={{
                    color: "#191D2A",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutePlanningDifferentialsSection;
