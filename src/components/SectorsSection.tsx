import sectorEnergia from "@/assets/sector-energia.webp";
import sectorTelecom from "@/assets/sector-telecom.webp";
import sectorAgua from "@/assets/sector-agua.webp";

const sectors = [
  { image: sectorEnergia, title: "Energia", href: "#energia" },
  { image: sectorTelecom, title: "Telecomunicações", href: "#telecom" },
  { image: sectorAgua, title: "Água e Saneamento", href: "#agua" },
];

const SectorsSection = () => {
  return (
    <section
      className="w-full px-6 py-20 md:py-28"
      style={{ backgroundColor: "#0B132B" }}
    >
      <div className="max-w-[1232px] mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-[48px] font-bold leading-tight mb-4"
          style={{ color: "white", fontFamily: "'Poppins', sans-serif" }}
        >
          Setores que Impactamos
        </h2>

        {/* Divider */}
        <div
          className="w-[120px] h-[4px] mx-auto mb-6"
          style={{ backgroundColor: "white" }}
        />

        {/* Subtitle */}
        <p
          className="text-base md:text-lg font-light leading-relaxed max-w-[680px] mx-auto mb-14"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          Aplicamos o poder da inteligência geográfica para resolver desafios específicos de cada setor. Confira como transformamos dados em resultados reais para nossos clientes.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <div key={sector.title} className="flex flex-col items-start text-left">
              {/* Image */}
              <div
                className="w-full aspect-square overflow-hidden mb-6"
                style={{ borderRadius: "20px" }}
              >
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Divider line */}
              <div
                className="w-full h-[4px] mb-4"
                style={{ backgroundColor: "#09A5C1" }}
              />

              {/* Title */}
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "white", fontFamily: "'Poppins', sans-serif" }}
              >
                {sector.title}
              </h3>

              {/* Link */}
              <a
                href={sector.href}
                className="text-sm font-light underline transition-opacity hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                saiba mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
