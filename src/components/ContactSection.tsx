import { Phone, Mail, MapPin } from "lucide-react";
import contactBg from "@/assets/contact-bg.png";

const ContactSection = () => {
  return (
    <section className="w-full relative h-[380px] overflow-hidden">
      {/* Background image with parallax-like fixed attachment */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${contactBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 xl:px-40 max-w-[1232px] mx-auto">
        <h2
          className="text-3xl md:text-[48px] font-bold leading-[1.14] mb-6 whitespace-nowrap"
          style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
        >
          Fale com nosso time de especialistas
        </h2>

        {/* Divider */}
        <div className="w-[158px] h-[4px] bg-white mb-6" />

        {/* Contact list */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <Phone className="w-[22px] h-[22px] text-white flex-shrink-0" />
            <span
              className="text-base font-light"
              style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
            >
              + 55 (11) 91752-9281
            </span>
          </div>

          <div className="flex items-center gap-3 whitespace-nowrap">
            <Mail className="w-[28px] h-[22px] text-white flex-shrink-0" />
            <span
              className="text-base font-light"
              style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
            >
              contato@zukk.com.br
            </span>
          </div>

          <div className="flex items-center gap-3 whitespace-nowrap">
            <MapPin className="w-[22px] h-[22px] text-white flex-shrink-0" />
            <span
              className="text-base font-light"
              style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
            >
              Av. das Nações Unidas, nº 14.401 – Sala 2902 – Cond. Parque da Cidade – Torre Tarumã – São Paulo/SP – CEP: 04794-000
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
