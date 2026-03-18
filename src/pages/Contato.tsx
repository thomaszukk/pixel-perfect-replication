import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import solucoesBg from "@/assets/solucoes-hero-bg.png";
import { Phone, Mail, MapPin } from "lucide-react";

const addresses = [
  {
    label: "Brasil, São Paulo",
    address:
      "Av. das Nações Unidas, nº 14.401 – Sala 2902 – Cond. Parque da Cidade – Torre Tarumã – São Paulo/SP – CEP: 04794-000",
  },
  {
    label: "Brasil, Salvador:",
    address:
      "R. Dr. José Peroba, 297, sala 908 – Stiep, Salvador – BA – CEP: 41770-235",
  },
  {
    label: "Portugal:",
    address:
      "R. Dr António Martins, 102, 2º direito Estoril, 2765-194 – Portugal",
  },
  {
    label: "Alemanha:",
    address: "Britzer Damm 119, Berlin – Germany",
  },
];

const Contato = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden h-[320px] md:h-[520px]"
        style={{
          borderRadius: "0 0 150px 0",
        }}
      >
        <img
          src={solucoesBg}
          alt="Contato ZUKK"
          className="w-full h-full object-cover object-top block"
        />
      </section>

      {/* Contact Info Section */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[1232px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-8">
            {/* Left column – phone, email, addresses */}
            <div className="flex-1">
              <div className="flex flex-col gap-10">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone
                    className="w-[18px] h-[18px] flex-shrink-0"
                    style={{ color: "#001E3B" }}
                  />
                  <span
                    className="text-base font-light"
                    style={{
                      color: "#0B132B",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    + 55 (11) 91752-9281
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail
                    className="w-[22px] h-[18px] flex-shrink-0"
                    style={{ color: "#001E3B" }}
                  />
                  <span
                    className="text-base font-light"
                    style={{
                      color: "#0B132B",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    contato@zukk.com.br
                  </span>
                </div>

                {/* Addresses */}
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-[14px] h-[20px] flex-shrink-0 mt-1"
                    style={{ color: "#001E3B" }}
                  />
                  <ul className="list-disc pl-6 flex flex-col gap-5">
                    {addresses.map((loc) => (
                      <li
                        key={loc.label}
                        className="text-base font-light leading-[1.4]"
                        style={{
                          color: "#0B132B",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        <span className="font-bold">{loc.label}</span>{" "}
                        {loc.address}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right column – social links */}
            <div className="md:w-[300px] flex flex-col gap-10">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/zukk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-70 transition-opacity"
              >
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <g clipPath="url(#clip_li)">
                    <path
                      d="M2.99953 17.8985H5.92312V9.11506H2.99953V17.8985ZM6.11297 6.40662C6.10453 5.96787 5.95266 5.60506 5.65734 5.31818C5.36203 5.03131 4.96969 4.88787 4.48031 4.88787C3.99094 4.88787 3.59227 5.03131 3.2843 5.31818C2.97633 5.60506 2.82234 5.96787 2.82234 6.40662C2.82234 6.83693 2.97211 7.19764 3.27164 7.48873C3.57117 7.77982 3.96141 7.92537 4.44234 7.92537H4.455C4.95281 7.92537 5.35359 7.77982 5.65734 7.48873C5.96109 7.19764 6.11297 6.83693 6.11297 6.40662ZM13.5169 17.8985H16.4405V12.8613C16.4405 11.5619 16.1325 10.579 15.5166 9.9124C14.9006 9.24584 14.0864 8.91256 13.0739 8.91256C11.9264 8.91256 11.0447 9.40615 10.4288 10.3933H10.4541V9.11506H7.53047C7.55578 9.67193 7.55578 12.5997 7.53047 17.8985H10.4541V12.9879C10.4541 12.6672 10.4836 12.431 10.5427 12.2791C10.6692 11.9838 10.8591 11.7328 11.1122 11.5261C11.3653 11.3194 11.6775 11.216 12.0487 11.216C13.0275 11.216 13.5169 11.8783 13.5169 13.203V17.8985ZM19.44 5.26756V17.4176C19.44 18.4216 19.0835 19.2801 18.3705 19.9931C17.6576 20.7061 16.7991 21.0626 15.795 21.0626H3.645C2.64094 21.0626 1.78242 20.7061 1.06945 19.9931C0.356484 19.2801 0 18.4216 0 17.4176V5.26756C0 4.2635 0.356484 3.40498 1.06945 2.69201C1.78242 1.97904 2.64094 1.62256 3.645 1.62256H15.795C16.7991 1.62256 17.6576 1.97904 18.3705 2.69201C19.0835 3.40498 19.44 4.2635 19.44 5.26756Z"
                      fill="#001E3B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip_li">
                      <rect width="19.44" height="24.0031" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  className="text-base font-semibold"
                  style={{
                    color: "#0B132B",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Linkedin
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/zukkoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-70 transition-opacity"
              >
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 1536 1896.0833"
                  fill="#001E3B"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path d="M1024 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zM768 266q-7 0-76.5-.5t-105.5 0-96.5 3-103 10T315 297q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103T169 1349q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103T1367 443q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124T5 1213q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z" />
                </svg>
                <span
                  className="text-base font-semibold"
                  style={{
                    color: "#0B132B",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
