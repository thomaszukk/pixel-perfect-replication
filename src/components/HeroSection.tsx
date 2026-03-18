import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-background">
      {/* Inner container with rounded corner */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden h-[80vh] md:h-[110vh]"
        style={{ borderRadius: "0 0 150px 0" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(17, 18, 25, 0.4)" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[900px] mx-auto text-center px-6 mt-16">
          <h1 className="text-4xl md:text-[48px] font-bold leading-tight mb-6" style={{ color: "white" }}>
            Decisões Inteligentes
            <br />
            Começam no Mapa
          </h1>

          <p className="text-lg md:text-[22px] font-light leading-relaxed mb-10 max-w-[850px] mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
            Desbloqueamos o poder da{" "}
            <span className="font-semibold">inteligência geográfica</span>,
            {" "}transformando dados em insights precisos para decisões estratégicas
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/solucoes"
              className="px-10 py-3.5 rounded-full text-base font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#09A5C1", color: "white" }}
            >
              Saiba mais
            </Link>
            <Link
              to="/contato"
              className="px-10 py-3.5 rounded-full text-base font-semibold border-2 transition-all hover:bg-white/10"
              style={{ borderColor: "white", color: "white" }}
            >
              Fale conosco
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
