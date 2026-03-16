import caseEnergiaImg from "@/assets/case-energia.webp";

const CaseEnergiaSection = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[543px] relative">
          <img
            src={caseEnergiaImg}
            alt="Case Energia - Turbinas eólicas ao pôr do sol"
            className="w-full h-full object-cover rounded-tr-[40px]"
            style={{ position: "absolute", inset: 0 }}
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-16 md:px-16 lg:px-24 bg-background">
          <div className="flex flex-col items-start gap-2.5 max-w-[614px]">
            <h2
              className="text-3xl md:text-[48px] font-bold leading-[1.14]"
              style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
            >
              Case Energia
            </h2>

            {/* Divider */}
            <div className="w-[184px] py-0.5">
              <div className="h-[3px]" style={{ backgroundColor: "#0B132B" }} />
            </div>

            <p
              className="text-base md:text-lg font-light leading-[1.4] pb-[30px]"
              style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
            >
              Como a ZUKK aumentou a produtividade e reduziu interrupções em
              uma das maiores distribuidoras de energia do Brasil.
            </p>

            <a
              href="#"
              className="text-base font-medium leading-6 hover:opacity-80 transition-opacity"
              style={{ color: "#001E3B", fontFamily: "'Niramit', sans-serif" }}
            >
              [Veja o case completo →]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseEnergiaSection;
