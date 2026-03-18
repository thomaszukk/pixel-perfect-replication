import { Link } from "react-router-dom";
import caseTelecomImg from "@/assets/case-telecom.webp";

const CaseTelecomSection = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left: Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-16 md:px-16 lg:px-24 bg-background">
          <div className="flex flex-col items-start max-w-[400px]">
            <h2
              className="text-3xl md:text-[48px] font-bold leading-[1.14] mb-6"
              style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
            >
              Case Telecom
            </h2>

            <p
              className="text-base md:text-lg font-light leading-[1.4] mb-10"
              style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
            >
              Como a ZUKK transformou a retirada de cobre em um retorno
              bilionário para uma das maiores operadoras de telecom do país.
            </p>

            <Link
              to="/cases"
              className="text-base font-medium leading-6 hover:opacity-80 transition-opacity"
              style={{ color: "#001E3B", fontFamily: "'Niramit', sans-serif" }}
            >
              [Veja o case completo →]
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[440px] relative overflow-hidden rounded-br-[40px]" style={{ backgroundColor: "#0B132B" }}>
          <img
            src={caseTelecomImg}
            alt="Case Telecom - Globo digital com redes de conexão"
            className="max-w-none"
            style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default CaseTelecomSection;
