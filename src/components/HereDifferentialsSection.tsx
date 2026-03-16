const differentials = [
  {
    icon: (
      <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.8398 7.11694V35.192H4.69141V14.997L6.08417 15.2902L11.4353 16.3531L18.1059 11.9183L18.509 11.6617L18.9489 11.735L25.5095 12.8346L30.9339 8.58301L32.8398 7.11694ZM30.4941 11.9183L26.5357 14.997L26.1326 15.3269L25.6194 15.2536L19.0222 14.154L12.3882 18.5889L11.9851 18.8454L11.5086 18.7355L7.03711 17.8559V22.6572L11.5819 24.4898L18.1059 20.1282L18.5823 19.835L19.1321 20.0183L25.5461 22.1441L30.4941 18.2224V11.9183ZM30.4941 21.2278L26.5357 24.3798L26.0226 24.783L25.4362 24.5631L18.9855 22.4006L12.3882 26.7988L11.8751 27.1287L11.2887 26.9088L7.03711 25.2228V32.8463H30.4941V21.2278Z" fill="white"/>
      </svg>
    ),
    title: "Precisão de nível de porta a porta",
    description:
      "A HERE é reconhecida como a única provedora de dados no Brasil com cobertura no nível de porta, trazendo localização de altíssima precisão para endereços e pontos de interesse.",
  },
  {
    icon: (
      <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.7656 5.68762L19.4253 6.12744L33.4995 15.5469L34.0127 15.8768V26.3591L33.4995 26.689L19.4253 36.1084L18.7656 36.5482L18.1059 36.1084L4.03168 26.689L3.51855 26.3591V15.8768L4.03168 15.5469L18.1059 6.12744L18.7656 5.68762ZM17.5928 9.27948L6.8172 16.5365L11.5452 19.7252L17.5928 15.6568V9.27948ZM19.9385 9.27948V15.6568L25.986 19.7252L30.714 16.5365L19.9385 9.27948ZM18.7656 17.7093L13.671 21.1179L18.7656 24.5265L23.8602 21.1179L18.7656 17.7093ZM5.86425 18.6989V23.5369L9.45611 21.1179L5.86425 18.6989ZM31.667 18.6989L28.0751 21.1179L31.667 23.5369V18.6989ZM11.5819 22.5107L6.8172 25.6994L17.5928 32.9564V26.579L11.5819 22.5107ZM25.9493 22.5107L19.9385 26.579V32.9564L30.714 25.6994L25.9493 22.5107Z" fill="white"/>
      </svg>
    ),
    title: "Cobertura Global",
    description:
      "Mapas e dados de localização para mais de 200 países, possibilitando a expansão global do seu negócio com confiança.",
  },
  {
    icon: (
      <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.7656 7.52014L19.2421 7.74005L30.9706 13.0179L31.667 13.3111V28.1916L31.0805 28.5215L19.352 35.0455L18.7656 35.3753L18.1792 35.0455L6.45068 28.5215L5.86426 28.1916V13.3111L6.56064 13.0179L18.2891 7.74005L18.7656 7.52014ZM18.7656 10.0858L9.74932 14.1174L18.7656 18.6256L27.7819 14.1174L18.7656 10.0858ZM8.20996 15.9867V26.7989L17.5928 32.0034V20.6781L8.20996 15.9867ZM29.3213 15.9867L19.9385 20.6781V32.0034L29.3213 26.7989V15.9867Z" fill="white"/>
      </svg>
    ),
    title: "Mapas Offline",
    description:
      "Disponível mesmo sem conexão com a internet, ideal para operações remotas ou de baixa conectividade",
  },
];

const HereDifferentialsSection = () => {
  return (
    <section className="w-full px-6 pt-[10px] pb-10 bg-background">
      <div className="max-w-[1232px] mx-auto">
        {/* Heading */}
        <div className="px-[30px] mb-4">
          <h3
            className="text-[29px] font-bold leading-[36px]"
            style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
          >
            Diferenciais da HERE no Brasil e no Mundo
          </h3>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-0">
          {differentials.map((item) => (
            <div key={item.title} className="p-[15px]">
              <div
                className="flex items-start gap-0 p-2 bg-white"
                style={{ boxShadow: "0 19px 38px 0 rgba(0, 0, 0, 0.16)" }}
              >
                {/* Icon */}
                <div className="p-[23px] flex-shrink-0">
                  <div
                    className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#09A5C1" }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 p-[23px] flex flex-col gap-[9px]">
                  <h5
                    className="text-[18px] font-bold leading-[25.2px] uppercase"
                    style={{
                      color: "#001E3B",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {item.title}
                  </h5>
                  <p
                    className="text-base font-normal leading-[22.4px]"
                    style={{
                      color: "#191D2A",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HereDifferentialsSection;
