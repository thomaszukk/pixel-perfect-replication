import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import quemSomosBg from "@/assets/quem-somos-bg.webp";
import solucoesBg from "@/assets/solucoes-hero-bg.png";
import officeImg from "@/assets/quem-somos-office.webp";
import nossaCulturaImg from "@/assets/nossa-cultura.jpeg";
import nossoCompromissoImg from "@/assets/nosso-compromisso.webp";
import politicaSegurancaImg from "@/assets/politica-seguranca.png";

const QuemSomos = () => {
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
          alt="Quem Somos ZUKK"
          className="w-full h-full object-cover object-center block"
        />
      </section>

      {/* Quem Somos Content Section */}
      <section className="relative w-full" style={{ height: "712px" }}>
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${quemSomosBg})` }}
        />
        {/* White gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, #FFF 55%, rgba(255, 255, 255, 0.50) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1232px] mx-auto h-full flex items-center px-6">
          <div className="max-w-[424px]">
            <h2
              className="text-[48px] font-bold leading-[54.86px] mb-5"
              style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
            >
              Quem Somos
            </h2>

            <p
              className="text-[18px] font-semibold leading-[25.2px] mb-8"
              style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
            >
              A ZUKK é uma boutique de tecnologia fundada em 2019 com um propósito claro: transformar inteligência geográfica em valor de negócio.
            </p>

            <p
              className="text-[16px] font-light leading-[22.4px] mb-6"
              style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
            >
              Desde o início, acreditamos que entender o território é fundamental para tomar decisões mais inteligentes e operar com mais eficiência.
            </p>

            <p
              className="text-[16px] font-light leading-[22.4px] mb-6"
              style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
            >
              Atuamos com soluções fim a fim que combinam dados de localização, analytics, inteligência artificial e desenvolvimento de sistemas para otimizar operações e decisões.
            </p>

            <p
              className="text-[16px] font-light leading-[22.4px]"
              style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
            >
              Apoiamos a jornada digital dos nossos clientes, tanto com equipes especializadas quanto com ferramentas e inovação.
            </p>
          </div>
        </div>
      </section>

      {/* Nosso Diferencial Section */}
      <section className="w-full">
        <div className="flex flex-col md:flex-row">
          {/* Left: Office Image */}
          <div className="w-full md:w-[40%] min-h-[400px] md:min-h-[709px] relative">
            <img
              src={officeImg}
              alt="Escritório ZUKK"
              className="w-full h-full object-cover rounded-r-md"
              style={{ position: "absolute", inset: 0 }}
            />
          </div>

          {/* Right: Content */}
          <div
            className="w-full md:w-[60%] flex items-center px-8 py-16 md:px-20 lg:px-[172px]"
            style={{ background: "rgba(11, 19, 43, 0.05)" }}
          >
            <div className="flex flex-col gap-5 max-w-[700px]">
              <h4
                className="text-[22px] font-bold leading-[1.4] pb-[30px]"
                style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
              >
                Nosso diferencial está na forma como conectamos dados, geolocalização e tecnologia robusta para entregar soluções personalizadas, ágeis e estratégicas.
              </h4>

              <p
                className="text-[16px] font-light leading-[1.4]"
                style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
              >
                Com um portfólio completo, desenvolvemos e aplicamos soluções sob medida desde a coleta de dados em campo até soluções com GEO AI, monitoramento em tempo real e muito mais. Ajudamos empresas a superarem desafios operacionais, logísticos e analíticos, de forma simples, eficiente e integrada.
              </p>

              <p
                className="text-[16px] font-light leading-[1.4]"
                style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
              >
                Atuamos em setores como:
              </p>

              <ul className="flex flex-col gap-5 pt-[30px]">
                {["Telecomunicações", "Energia", "Água e Saneamento", "Óleo e Gás", "Agronegócio", "Logística"].map((sector) => (
                  <li key={sector} className="flex items-center gap-[10px]">
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.38496 2.93604C11.4379 2.93604 13.3149 3.74989 14.664 5.09898L13.8392 5.92384C12.7247 4.80937 11.1446 4.10916 9.38496 4.10916C5.80692 4.10916 2.93277 6.98332 2.93277 10.5613C2.93277 14.1394 5.80692 17.0135 9.38496 17.0135C12.963 17.0135 15.8371 14.1394 15.8371 10.5613C15.8371 10.0334 15.7712 9.56419 15.6538 9.09494L16.607 8.16011C16.9003 8.92264 17.0103 9.74016 17.0103 10.5613C17.0103 14.7846 13.6082 18.1867 9.38496 18.1867C5.16171 18.1867 1.75964 14.7846 1.75964 10.5613C1.75964 6.3381 5.16171 2.93604 9.38496 2.93604ZM16.0021 5.44726L16.8453 6.29044L9.80655 13.3292L9.38496 13.7325L8.96336 13.3292L6.03055 10.3964L6.87374 9.55319L9.38496 12.0644L16.0021 5.44726Z" fill="#001E3B" />
                    </svg>
                    <span
                      className="text-[18px] font-semibold leading-[1.4]"
                      style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
                    >
                      {sector}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Cultura Section */}
      <section className="w-full">
        <div className="flex flex-col md:flex-row">
          {/* Left: Content */}
          <div
            className="w-full md:w-[60%] flex items-center px-8 py-16 md:px-16 lg:px-24"
            style={{ background: "#F5F5F5" }}
          >
            <div className="max-w-[600px]">
              <h2
                className="text-[36px] md:text-[48px] font-bold leading-[1.14] mb-8"
                style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
              >
                Nossa Cultura
              </h2>

              <p
                className="text-[16px] font-light leading-[1.4] mb-6"
                style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
              >
                Somos inquietos, colaborativos e profundamente conectados com o mundo real.
              </p>

              <p
                className="text-[16px] font-light leading-[1.4]"
                style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
              >
                Valorizamos a <strong className="font-semibold">curiosidade, inovação e dados estratégicos</strong> como motores da transformação. Acreditamos na escuta ativa, na construção conjunta e na entrega com excelência, sempre com flexibilidade e foco no cliente.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-[40%] min-h-[300px] md:min-h-[410px] relative">
            <img
              src={nossaCulturaImg}
              alt="Nossa Cultura - Edifícios corporativos"
              className="w-full h-full object-cover"
              style={{ position: "absolute", inset: 0 }}
            />
          </div>
        </div>
      </section>

      {/* Nosso Compromisso Section */}
      <section className="w-full" style={{ background: "#0B132B" }}>
        <div className="flex flex-col md:flex-row">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 min-h-[350px] md:min-h-[536px] relative">
            <img
              src={nossoCompromissoImg}
              alt="Nosso Compromisso"
              className="w-full h-full object-cover"
              style={{ position: "absolute", inset: 0 }}
            />
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 flex items-center px-8 py-16 md:px-16 lg:px-24">
            <div className="max-w-[500px]">
              <h2
                className="text-[36px] md:text-[48px] font-bold leading-[1.14] mb-8"
                style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
              >
                Nosso Compromisso
              </h2>

              <p
                className="text-[16px] font-light leading-[1.4] mb-8"
                style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
              >
                Na ZUKK, <strong className="font-semibold">cada projeto é único</strong>. Somos parceiros próximos, com mentalidade ágil e visão de negócio. Mais do que tecnologia, entregamos inteligência aplicada ao território com impacto direto nos resultados dos nossos clientes.
              </p>

              <p
                className="text-[16px] font-bold italic leading-[1.4]"
                style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
              >
                "A ZUKK é uma boutique de tecnologia que tem como seu principal diferencial a inteligência geográfica para auxiliar no negócio dos seus clientes."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Política de Segurança da Informação */}
      <section className="w-full bg-white">
        <div className="flex flex-col md:flex-row">
          {/* Left: Content */}
          <div className="w-full md:w-[60%] flex items-center px-8 py-16 md:px-16 lg:px-24">
            <div className="max-w-[600px]">
              <h2
                className="text-[36px] md:text-[48px] font-bold leading-[1.14] mb-8"
                style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
              >
                Política de Segurança da Informação
              </h2>

              <p
                className="text-[16px] font-light leading-[1.4] mb-6"
                style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
              >
                A ZUKK reconhece que a informação é um ativo essencial para o funcionamento de seus negócios e para a confiança de clientes, parceiros e colaboradores.
              </p>

              <p
                className="text-[16px] font-light leading-[1.4] mb-6"
                style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
              >
                Nossa Política de Segurança da Informação tem como objetivo garantir a <strong className="font-semibold">confidencialidade, integridade e disponibilidade</strong> das informações tratadas pela empresa, assegurando que dados e sistemas sejam utilizados de forma <strong className="font-semibold">segura, responsável e em conformidade</strong> com a legislação aplicável.
              </p>

              <p
                className="text-[16px] font-light leading-[1.4] mb-8"
                style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
              >
                Confira abaixo nossa política atualizada em Março/2026
              </p>

              <div className="flex items-center gap-4">
                <span
                  className="text-[14px] font-semibold"
                  style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
                >
                  PO-SI-01_Política de Segurança da Informação
                </span>
                <a
                  href="/docs/PO-SI-01_Politica_de_Seguranca_da_Informacao.pdf"
                  download
                  className="px-5 py-2 rounded-full border text-[14px] font-medium hover:opacity-80 transition-opacity"
                  style={{ borderColor: "#0B132B", color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
                >
                  Baixar
                </a>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-[40%] min-h-[350px] md:min-h-[535px] relative">
            <img
              src={politicaSegurancaImg}
              alt="Segurança da Informação - Cloud e geolocalização"
              className="w-full h-full object-cover"
              style={{ position: "absolute", inset: 0 }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1232px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <p
            className="text-[24px] md:text-[28px] font-light leading-[1.4] max-w-[500px]"
            style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
          >
            Onde a <strong className="font-bold">ZUKK</strong> está, há <strong className="font-bold">inteligência de localização</strong> fazendo a diferença.
          </p>
          <Link
            to="/solucoes"
            className="px-8 py-4 text-[14px] font-semibold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ background: "#0B132B", fontFamily: "'Poppins', sans-serif", letterSpacing: "2px" }}
          >
            Conheça Nossas Soluções
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
