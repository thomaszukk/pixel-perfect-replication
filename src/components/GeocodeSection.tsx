import geocodeBg from "@/assets/geocode-bg.png";

const GeocodeSection = () => {
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
              <strong className="font-bold">Geocode:</strong>{" "}
              <span className="font-light">
                Precisão e Contexto para seus dados com{" "}
              </span>
              <span className="font-normal">HERE Technologies</span>
            </h2>

            <p
              className="text-base font-normal leading-6"
              style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
            >
              Transforme endereços em coordenadas geográficas precisas e dê
              vida nova aos seus dados com nosso serviço de Geocoding,
              impulsionado pela tecnologia líder da HERE Technologies. Ideal
              para enriquecer análises, visualizações em mapas e tomar
              decisões estratégicas baseadas em localização. Com o Geocode,
              você pode visualizar padrões, tendências e oportunidades que
              antes estavam escondidas em seus dados
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
                src={geocodeBg}
                alt="Geocode - Visualização de dados geográficos com redes de conexão"
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

export default GeocodeSection;
