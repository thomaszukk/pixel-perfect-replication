import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import solucoesBg from "@/assets/solucoes-hero-bg.png";

const QuemSomos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - same as Cases/Solucoes */}
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
      <section className="w-full py-20">
        <div className="max-w-[1232px] mx-auto px-6">
          <div className="max-w-[620px]">
            <h2
              className="text-[48px] font-bold leading-tight mb-8"
              style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
            >
              Quem Somos
            </h2>

            <p
              className="text-[18px] font-semibold leading-[28px] mb-6"
              style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
            >
              A ZUKK é uma boutique de tecnologia fundada em 2019 com um
              propósito claro: transformar inteligência geográfica em valor de
              negócio.
            </p>

            <p
              className="text-base font-normal leading-[26px] mb-5"
              style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
            >
              Desde o início, acreditamos que entender o território é
              fundamental para tomar decisões mais inteligentes e operar com
              mais eficiência.
            </p>

            <p
              className="text-base font-normal leading-[26px] mb-5"
              style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
            >
              Atuamos com soluções fim a fim que combinam dados de localização,
              analytics, inteligência artificial e desenvolvimento de sistemas
              para otimizar operações e decisões.
            </p>

            <p
              className="text-base font-normal leading-[26px] mb-8"
              style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
            >
              Apoiamos a jornada digital dos nossos clientes, tanto com equipes
              especializadas quanto com ferramentas e inovação.
            </p>

            <h3
              className="text-[22px] font-bold leading-[30px] mb-6"
              style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
            >
              Nosso diferencial está na forma como conectamos dados,
              geolocalização e tecnologia robusta para entregar soluções
              personalizadas, ágeis e estratégicas.
            </h3>

            <p
              className="text-base font-normal leading-[26px] mb-8"
              style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
            >
              Com um portfólio completo, desenvolvemos e aplicamos soluções sob
              medida desde a coleta de dados em campo até soluções com GEO AI,
              monitoramento em tempo real e muito mais. Ajudamos empresas a
              superarem desafios operacionais, logísticos e analíticos, de forma
              simples, eficiente e integrada.
            </p>

            {/* Setores */}
            <p
              className="text-base font-normal leading-[26px] mb-4"
              style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
            >
              Atuamos em setores como:
            </p>
            <ul
              className="list-disc pl-6 mb-10 space-y-1"
              style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
            >
              <li className="text-base">Telecomunicações</li>
              <li className="text-base">Energia</li>
              <li className="text-base">Água e Saneamento</li>
              <li className="text-base">Óleo e Gás</li>
              <li className="text-base">Agronegócio</li>
              <li className="text-base">Logística</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Nossa Cultura Section */}
      <section
        className="w-full py-20"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="max-w-[1232px] mx-auto px-6">
          <h2
            className="text-[48px] font-bold leading-tight mb-6"
            style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
          >
            Nossa Cultura
          </h2>

          <p
            className="text-base font-normal leading-[26px] mb-8 max-w-[700px]"
            style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
          >
            Somos inquietos, colaborativos e profundamente conectados com o
            mundo real. Valorizamos a{" "}
            <strong>curiosidade, inovação e dados estratégicos</strong> como
            motores da transformação. Acreditamos na escuta ativa, na
            construção conjunta e na entrega com excelência, sempre com
            flexibilidade e foco no cliente.
          </p>

          <h3
            className="text-[22px] font-bold leading-[30px] mb-4"
            style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
          >
            Nosso Compromisso
          </h3>

          <p
            className="text-base font-normal leading-[26px] mb-10 max-w-[700px]"
            style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
          >
            Na ZUKK, <strong>cada projeto é único</strong>. Somos parceiros
            próximos, com mentalidade ágil e visão de negócio. Mais do que
            tecnologia, entregamos inteligência aplicada ao território com
            impacto direto nos resultados dos nossos clientes.
          </p>

          {/* Quote */}
          <blockquote
            className="border-l-4 pl-6 py-2 mb-10 max-w-[700px]"
            style={{ borderColor: "#09A5C1" }}
          >
            <p
              className="text-[18px] font-semibold italic leading-[28px]"
              style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
            >
              "A ZUKK é uma boutique de tecnologia que tem como seu principal
              diferencial a inteligência geográfica para auxiliar no negócio dos
              seus clientes."
            </p>
          </blockquote>
        </div>
      </section>

      {/* Segurança da Informação Section */}
      <section className="w-full py-20">
        <div className="max-w-[1232px] mx-auto px-6">
          <h2
            className="text-[48px] font-bold leading-tight mb-6"
            style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
          >
            Política de Segurança da Informação
          </h2>

          <p
            className="text-base font-normal leading-[26px] mb-5 max-w-[700px]"
            style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
          >
            A ZUKK reconhece que a informação é um ativo essencial para o
            funcionamento de seus negócios e para a confiança de clientes,
            parceiros e colaboradores.
          </p>

          <p
            className="text-base font-normal leading-[26px] mb-8 max-w-[700px]"
            style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
          >
            Nossa Política de Segurança da Informação tem como objetivo
            garantir a <strong>confidencialidade</strong>,{" "}
            <strong>integridade e disponibilidade</strong> das informações
            tratadas pela empresa, assegurando que dados e sistemas sejam
            utilizados de forma <strong>segura</strong>,{" "}
            <strong>responsável e em conformidade</strong> com a legislação
            aplicável.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="w-full py-16"
        style={{ backgroundColor: "#001E3B" }}
      >
        <div className="max-w-[1232px] mx-auto px-6 text-center">
          <h3
            className="text-[28px] font-normal leading-[38px] mb-8"
            style={{ color: "white", fontFamily: "'Poppins', sans-serif" }}
          >
            Onde a <strong>ZUKK</strong> está, há{" "}
            <strong>inteligência de localização</strong> fazendo a diferença.
          </h3>
          <a
            href="/solucoes"
            className="inline-block px-10 py-4 text-[12px] font-semibold uppercase tracking-wider transition-all hover:opacity-90"
            style={{
              backgroundColor: "#09A5C1",
              color: "white",
              borderRadius: "5px",
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            Conheça nossas Soluções
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
