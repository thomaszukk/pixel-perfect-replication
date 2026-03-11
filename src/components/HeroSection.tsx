import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[648px] flex items-center justify-center overflow-hidden"
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
      <div className="relative z-10 max-w-[900px] mx-auto text-center px-6 py-32">
        <h1 className="text-4xl md:text-[48px] font-bold leading-tight mb-6" style={{ color: "white" }}>
          Decisões Inteligentes
          <br />
          Começam no Mapa
        </h1>

        <p className="text-base md:text-2xl font-light leading-relaxed mb-10 max-w-[750px] mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
          Desbloqueamos o poder da{" "}
          <span className="font-semibold">inteligência geográfica</span>,
          transformando dados em insights precisos para decisões estratégicas
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#solucoes"
            className="px-8 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#09A5C1", color: "white" }}
          >
            Saiba mais
          </a>
          <a
            href="#contato"
            className="px-8 py-3 rounded-full text-sm font-semibold border-2 transition-all hover:bg-white/10"
            style={{ borderColor: "white", color: "white" }}
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
