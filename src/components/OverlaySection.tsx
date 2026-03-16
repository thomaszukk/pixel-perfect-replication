import overlayBg from "@/assets/overlay-bg.jpg";

const services = [
  {
    icon: (
      <svg width="47" height="50" viewBox="0 0 47 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.46 8.80151C33.1601 8.80151 41.055 16.6964 41.055 26.3965C41.055 36.0967 33.1601 43.9915 23.46 43.9915C13.7598 43.9915 5.86499 36.0967 5.86499 26.3965C5.86499 16.6964 13.7598 8.80151 23.46 8.80151ZM23.46 11.734C23.06 11.734 22.6604 11.7945 22.2687 11.8257L25.5219 12.0548L26.3008 15.4455L21.9021 16.2702L20.7108 14.6207L18.1907 15.1705L19.0612 19.0653L13.1962 21.8603L9.25569 24.9761L10.6761 27.8628H16.1287L22.0396 32.3073L20.4817 38.1723L22.0854 40.9674C22.5356 41.0086 22.9988 41.059 23.46 41.059C25.7208 41.059 27.8734 40.5471 29.7832 39.6386L32.12 32.3073C32.12 32.3073 31.0398 29.6498 30.8829 29.6498C30.726 29.6498 27.8129 30.1538 27.8129 30.1538L24.9721 27.8169L26.3925 23.4182L28.9126 21.5396L31.4785 21.173L33.8612 22.6392L34.8692 20.8064L30.9287 19.5235L27.7671 20.5315L27.538 17.5074L28.821 16.4077L30.3789 17.095L30.1039 14.1625L31.2953 14.025C29.0295 12.5924 26.3465 11.734 23.46 11.734ZM21.8105 11.8257C20.6277 11.9564 19.4996 12.2108 18.4198 12.6046L19.5194 12.7879L21.8105 11.8257ZM8.88913 27.542C9.35063 33.5649 13.3882 38.5776 18.9238 40.3717L14.7541 35.2398H13.0588L10.3096 32.2157V29.1916L8.88913 27.542Z" fill="#191D2A"/>
      </svg>
    ),
    title: "Location\nIntelligence\nServices",
    description: "Mapas interativos, dashboards, planejamento territorial",
  },
  {
    icon: (
      <svg width="47" height="50" viewBox="0 0 47 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.46 7.33521C30.7304 7.33521 36.6562 13.2611 36.6562 20.5315C36.6562 22.5934 35.8209 24.9589 34.686 27.542C33.5511 30.125 32.0913 32.8661 30.608 35.4231C27.6414 40.5372 24.6513 44.8162 24.6513 44.8162L23.46 46.5574L22.2687 44.8162C22.2687 44.8162 19.2786 40.5372 16.312 35.4231C14.8287 32.8661 13.3689 30.125 12.234 27.542C11.0991 24.9589 10.2637 22.5934 10.2637 20.5315C10.2637 13.2611 16.1896 7.33521 23.46 7.33521ZM23.46 10.2677C17.7746 10.2677 13.1962 14.8461 13.1962 20.5315C13.1962 21.7085 13.8271 23.9277 14.8916 26.3506C15.9561 28.7736 17.4288 31.4585 18.878 33.9568C21.1832 37.9307 22.6114 40.0326 23.46 41.2881C24.3086 40.0326 25.7368 37.9307 28.042 33.9568C29.4913 31.4585 30.9639 28.7736 32.0284 26.3506C33.0929 23.9277 33.7237 21.7085 33.7237 20.5315C33.7237 14.8461 29.1454 10.2677 23.46 10.2677ZM23.46 17.599C25.0796 17.599 26.3925 18.9119 26.3925 20.5315C26.3925 22.151 25.0796 23.464 23.46 23.464C21.8404 23.464 20.5275 22.151 20.5275 20.5315C20.5275 18.9119 21.8404 17.599 23.46 17.599Z" fill="#191D2A"/>
      </svg>
    ),
    title: "Coleta de\nDados em\nCampo",
    description: "Fulcrum, QR Codes, mobile forms",
  },
  {
    icon: (
      <svg width="47" height="50" viewBox="0 0 47 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.055 9.48877V37.6224L40.1844 37.989L29.9207 42.3878L29.3708 42.6169L28.821 42.4336L17.6408 38.2181L7.92691 42.3878L5.865 43.3042V15.1705L6.73558 14.8039L16.9993 10.4052L17.5492 10.1761L18.099 10.3594L29.2792 14.5748L38.9931 10.4052L41.055 9.48877ZM19.0612 13.8417V35.6522L27.8587 38.9512V17.1408L19.0612 13.8417ZM16.1287 13.9333L8.7975 17.0949V38.8596L16.1287 35.698V13.9333ZM38.1225 13.9333L30.7912 17.0949V38.8596L38.1225 35.698V13.9333Z" fill="#191D2A"/>
      </svg>
    ),
    title: "Mapas e\nDados",
    description: "Dados de Google, HERE, clima, pedágios",
  },
  {
    icon: (
      <svg width="47" height="50" viewBox="0 0 47 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.46 10.2678C29.1111 10.2678 33.7237 14.8805 33.7237 20.5316C33.7237 25.6841 29.8862 29.941 24.9262 30.6579V43.9916H21.9937V30.6579C17.0338 29.941 13.1962 25.6841 13.1962 20.5316C13.1962 14.8805 17.8089 10.2678 23.46 10.2678ZM23.46 13.2003C19.3937 13.2003 16.1287 16.4653 16.1287 20.5316C16.1287 24.5979 19.3937 27.8628 23.46 27.8628C27.5263 27.8628 30.7912 24.5979 30.7912 20.5316C30.7912 16.4653 27.5263 13.2003 23.46 13.2003ZM23.46 14.6666V17.5991C21.8227 17.5991 20.5275 18.8943 20.5275 20.5316H17.595C17.595 17.3098 20.2382 14.6666 23.46 14.6666Z" fill="#191D2A"/>
      </svg>
    ),
    title: "Cocriação de\nSoluções",
    description: "Squads ágeis, AMS, Cloud, desenvolvimento sob demanda",
  },
  {
    icon: (
      <svg width="47" height="50" viewBox="0 0 47 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_overlay)">
          <path d="M8.01856 11.7339H38.9014L39.1764 12.8336L46.0036 39.2261L46.5076 41.0589H0.412384L0.916407 39.2261L7.74363 12.8336L8.01856 11.7339ZM10.3096 14.6664L4.21547 38.1264H21.5814L21.7188 32.2614H25.2012L25.3386 38.1264H42.7045L36.6104 14.6664H24.743L24.8346 19.0651H22.0854L22.177 14.6664H10.3096ZM21.9937 21.9976H24.9263L25.1095 29.3289H21.8105L21.9937 21.9976Z" fill="#191D2A"/>
        </g>
        <defs>
          <clipPath id="clip0_overlay">
            <rect width="46.92" height="49.998" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    ),
    title: "GEO AI",
    description: "Previsão climática, ESG insights, análises automatizadas",
  },
];

const OverlaySection = () => {
  return (
    <section
      className="w-full px-6 py-20 md:py-24"
      style={{ backgroundColor: "#ebebeb" }}
    >

      <div className="max-w-[1232px] mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-[30px] leading-[38px] mb-4"
            style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
          >
            Descubra como nossa expertise em{" "}
            <strong className="font-bold">Geo & Location</strong>
            <br />
            <strong className="font-bold">Intelligence</strong> se traduz em soluções inovadoras.
          </h2>

          {/* Divider */}
          <div
            className="w-[125px] h-[4px] mx-auto mb-6"
            style={{ backgroundColor: "#03A9F4" }}
          />

          {/* Subtitle */}
          <p
            className="text-base md:text-[19px] font-normal leading-[28.8px] max-w-[800px] mx-auto"
            style={{ color: "#0B132B" }}
          >
            Nossos serviços e produtos integram tecnologia de ponta, consultoria estratégica e
            segurança cibernética para impulsionar o crescimento dos nossos clientes.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-start gap-5">
              {/* Icon */}
              <div className="w-[50px] h-[50px] flex items-start">{service.icon}</div>

              {/* Title */}
              <h4
                className="text-lg md:text-[22px] font-bold leading-[31px] whitespace-pre-line"
                style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
              >
                {service.title}
              </h4>

              {/* Description */}
              <p
                className="text-sm md:text-base font-light leading-6"
                style={{ color: "#191D2A" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverlaySection;
