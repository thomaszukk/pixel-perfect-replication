import partnersLogos from "@/assets/partners-logos.webp";

const PartnersSection = () => {
  return (
    <section className="bg-background px-6 py-16 md:py-24">
      <div className="max-w-[1232px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-0">
          {/* Left column - Heading */}
          <div className="md:w-[40%] flex items-center px-6 md:px-[30px]">
            <div className="py-4">
              <h2
                className="text-3xl md:text-[48px] font-bold leading-[1.14] tracking-tight"
                style={{
                  color: "#0B132B",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Parcerias
                <br />
                estratégicas
                <br className="hidden md:block" />
                {" "}que ampliam
                <br />
                nossa
                <br />
                capacidade de
                <br />
                inovar e
                <br />
                entregar
                <br />
                excelência
              </h2>
            </div>
          </div>

          {/* Right column - Logos */}
          <div className="md:w-[60%] flex items-center justify-center px-6 md:px-[30px]">
            <div
              className="w-full min-h-[401px] flex items-end justify-center overflow-hidden"
              style={{ borderRadius: "40px" }}
            >
              <img
                src={partnersLogos}
                alt="Logos dos parceiros: HERE, Fulcrum, AWS, IBM, Microsoft, OpenLogic, Esri"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
