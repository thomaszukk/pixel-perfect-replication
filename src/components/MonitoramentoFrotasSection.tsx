import frotasBg from "@/assets/frotas-bg.png";

const MonitoramentoFrotasSection = () => {
  return (
    <section className="w-full px-6 py-16 md:py-20 bg-background">
      <div className="max-w-[1232px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col gap-[55px] px-[30px] py-[15px]">
            <h2
              className="text-3xl md:text-[48px] leading-[1.14] tracking-tight"
              style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
            >
              <strong className="font-bold">Monitoramento de Frotas:</strong>{" "}
              <span className="font-light">
                Visibilidade e Controle em Tempo Real com{" "}
              </span>
              <span className="font-normal">HERE Routing</span>
            </h2>

            <p
              className="text-base font-normal leading-6"
              style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
            >
              Monitore sua frota de forma abrangente e em tempo real com a
              potência do HERE Routing. Nossas soluções permitem que você
              acompanhe localizações, velocidades, tempos de parada,
              consumo de combustível e muito mais, ajudando a otimizar
              operações, reduzir custos e melhorar a segurança. Com o
              monitoramento de frotas, você tem total controle das operações
              em campo, permitindo decisões rápidas e precisas.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex justify-center px-2 py-[15px]">
            <div
              className="w-full max-w-[584px] overflow-hidden"
              style={{
                borderRadius: "25px",
                boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.50)",
              }}
            >
              <img
                src={frotasBg}
                alt="Monitoramento de Frotas - Caminhão em estrada"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "33/31" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoramentoFrotasSection;
