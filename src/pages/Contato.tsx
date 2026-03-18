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
        className="relative w-full overflow-hidden"
        style={{
          borderRadius: "0 0 150px 0",
          height: "520px",
        }}
      >
        <img
          src={solucoesBg}
          alt="Contato ZUKK"
          className="w-full h-full object-cover object-center block"
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
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <g clipPath="url(#clip_ig)">
                    <path
                      d="M16.2 3.62256C16.6219 3.62256 16.9831 3.77287 17.2837 4.0735C17.5843 4.37412 17.7346 4.73537 17.7346 5.15725C17.7346 5.57912 17.5843 5.94037 17.2837 6.241C16.9831 6.54162 16.6219 6.69194 16.2 6.69194C15.7781 6.69194 15.4169 6.54162 15.1163 6.241C14.8156 5.94037 14.6653 5.57912 14.6653 5.15725C14.6653 4.73537 14.8156 4.37412 15.1163 4.0735C15.4169 3.77287 15.7781 3.62256 16.2 3.62256ZM9.72 7.94256C10.5464 7.94256 11.3136 8.14897 12.0214 8.56178C12.7293 8.97459 13.2878 9.53303 13.6969 10.237C14.1059 10.941 14.3105 11.7082 14.3105 12.5385C14.3105 13.3687 14.1059 14.1359 13.6969 14.8399C13.2878 15.544 12.7293 16.1024 12.0214 16.5152C11.3136 16.928 10.5464 17.1344 9.72 17.1344C8.89359 17.1344 8.12641 16.928 7.41855 16.5152C6.7107 16.1024 6.15225 15.544 5.74312 14.8399C5.334 14.1359 5.12944 13.3687 5.12944 12.5385C5.12944 11.7082 5.334 10.941 5.74312 10.237C6.15225 9.53303 6.7107 8.97459 7.41855 8.56178C8.12641 8.14897 8.89359 7.94256 9.72 7.94256ZM9.72 9.56256C8.89359 9.56256 8.19416 9.85475 7.62173 10.4391C7.04929 11.0235 6.76308 11.7268 6.76308 12.5494C6.76308 13.3719 7.04929 14.0753 7.62173 14.6596C8.19416 15.244 8.89359 15.5362 9.72 15.5362C10.5464 15.5362 11.2458 15.244 11.8183 14.6596C12.3907 14.0753 12.6769 13.3719 12.6769 12.5494C12.6769 11.7268 12.3907 11.0235 11.8183 10.4391C11.2458 9.85475 10.5464 9.56256 9.72 9.56256ZM19.44 6.69194V18.385C19.44 19.3891 19.0835 20.2476 18.3705 20.9606C17.6576 21.6735 16.7991 22.0301 15.795 22.0301H3.645C2.64094 22.0301 1.78242 21.6735 1.06945 20.9606C0.356484 20.2476 0 19.3891 0 18.385V6.69194C0 5.68787 0.356484 4.82935 1.06945 4.11639C1.78242 3.40342 2.64094 3.04694 3.645 3.04694H15.795C16.7991 3.04694 17.6576 3.40342 18.3705 4.11639C19.0835 4.82935 19.44 5.68787 19.44 6.69194ZM17.82 12.5385C17.82 10.2968 17.0275 8.38537 15.4425 6.80412C13.8575 5.22287 11.9462 4.43225 9.70875 4.43225C7.47131 4.43225 5.56359 5.22287 3.98559 6.80412C2.40759 8.38537 1.61859 10.2968 1.61859 12.5385C1.61859 14.7801 2.40759 16.6916 3.98559 18.2728C5.56359 19.8541 7.47506 20.6447 9.72 20.6447C11.965 20.6447 13.8764 19.8541 15.4544 18.2728C17.0324 16.6916 17.82 14.7801 17.82 12.5385Z"
                      fill="#001E3B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip_ig">
                      <rect width="19.44" height="24.003" fill="white" />
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
