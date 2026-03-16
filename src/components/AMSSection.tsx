import amsBg from "@/assets/ams-bg.png";

const AMSSection = () => {
  return (
    <section className="w-full px-6 pt-[10px] pb-16 md:pb-20 bg-white">
      <div className="max-w-[1232px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col gap-[55px] px-[30px] py-[15px]">
            <h2
              className="text-2xl md:text-[29px] leading-[1.2] tracking-tight"
              style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
            >
              <strong className="font-bold">
                Application Management Services (AMS), Suporte e Sustentação:
              </strong>{" "}
              <span className="font-light">
                Performance, Confiabilidade e Tranquilidade 24/7
              </span>
            </h2>

            <p
              className="text-base font-normal leading-6"
              style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
            >
              Gerencie suas aplicações com máxima eficiência, segurança e
              inovação. Nosso serviço AMS englobando Suporte, Manutenção e
              Sustentação vai além do tradicional: oferecemos acompanhamento
              completo, monitoramento proativo, manutenção preventiva e foco
              contínuo em melhorias. Com a Zukk, sua equipe foca no core
              business enquanto nossos especialistas garantem que toda sua
              operação tecnológica permanece estável, atual e protegida.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex justify-center px-2 py-[15px]">
            <div
              className="w-full max-w-[680px] overflow-hidden"
              style={{
                borderRadius: "25px",
                boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.50)",
              }}
            >
              <img
                src={amsBg}
                alt="AMS - Application Management Services"
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

export default AMSSection;
