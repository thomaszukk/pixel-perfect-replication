import { Globe } from "lucide-react";
import industriaTelecomImg from "@/assets/industria-telecom.png";

const IndustriaTelecomSection = () => {
  return (
    <section className="w-full flex justify-center pt-[50px]">
      <div className="max-w-[1232px] w-full px-6">
        <div className="flex flex-col md:flex-row gap-0">
          {/* Left: Image */}
          <div className="w-full md:w-1/3 p-[15px]">
            <div
              className="w-full h-[241px] rounded-[30px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${industriaTelecomImg})`,
                boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.50)",
              }}
            />
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-2/3 p-[15px]">
            <div className="bg-white rounded-[30px] p-[15px] h-full flex flex-col justify-center">
              <div className="flex flex-col gap-[10px]">
                {/* Icon */}
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_telecom)">
                    <path d="M25 0C11.193 0 0 11.193 0 25C0 38.807 11.193 50 25 50C38.807 50 50 38.807 50 25C49.9815 11.2005 38.7995 0.0185 25 0ZM42.09 9.202C40.323 9.9395 38.501 10.5365 36.6405 10.9885C35.527 7.7705 33.654 4.868 31.18 2.528C35.368 3.692 39.147 6.004 42.09 9.202ZM25.8425 14.011C29.116 13.9695 32.378 13.6155 35.584 12.955C36.7185 16.594 37.3165 20.3795 37.3595 24.191H25.8425V14.011ZM25.8425 12.326V1.764C29.618 2.247 32.921 5.91 35.0224 11.3485C31.9994 11.9565 28.9259 12.284 25.8425 12.326ZM24.1575 1.764V12.326C21.0745 12.288 18.0015 11.9645 14.9776 11.3595C17.0785 5.899 20.3821 2.247 24.1575 1.764ZM24.1575 14.011V24.1235H12.6405C12.6836 20.312 13.2815 16.527 14.416 12.8875C17.62 13.571 20.882 13.9475 24.1575 14.011ZM10.944 24.1235H1.73053C1.90353 19.1635 3.66403 14.39 6.75303 10.5055C8.70353 11.388 10.726 12.102 12.7981 12.6405C11.6251 16.3695 11.0006 20.249 10.9441 24.1575V24.1235ZM10.944 25.809C10.997 29.729 11.6215 33.62 12.798 37.3595C10.7285 37.8685 8.7065 38.5525 6.753 39.4045C3.664 35.52 1.903 30.7465 1.73 25.7865L10.944 25.809ZM12.6405 25.809H24.1575V35.9215C20.884 35.963 17.622 36.317 14.416 36.9775C13.2915 33.3705 12.6935 29.6205 12.6405 25.8425V25.809ZM24.1575 37.674V48.236C20.382 47.753 17.079 44.09 14.9776 38.6515C18.0006 38.043 21.0741 37.716 24.1575 37.674ZM25.8425 48.236V37.674C28.9255 37.712 31.9985 38.0355 35.0224 38.6405C32.9215 44.101 29.6179 47.753 25.8425 48.236ZM25.8425 35.989V25.8765H37.3595C37.3164 29.688 36.7185 33.473 35.584 37.1125C32.38 36.429 29.118 36.0525 25.8425 35.989ZM39.056 25.8765H48.2695C48.0965 30.8365 46.336 35.61 43.247 39.4945C41.2965 38.612 39.274 37.8975 37.2019 37.3595C38.3749 33.6305 38.9994 29.751 39.0559 25.8425V25.8765ZM39.056 24.191C39.005 20.2635 38.3805 16.3645 37.202 12.618C39.2715 12.109 41.2935 11.425 43.247 10.573C46.336 14.4575 48.0965 19.231 48.2695 24.191H39.056ZM18.82 2.528C16.345 4.8605 14.468 7.755 13.348 10.966C11.4875 10.514 9.665 9.917 7.899 9.179C10.848 5.987 14.631 3.683 18.82 2.528ZM7.899 40.7305C9.666 39.993 11.488 39.3955 13.3485 38.944C14.4555 42.1875 16.3335 45.114 18.8206 47.472C14.6286 46.31 10.8456 43.9985 7.899 40.798V40.7305ZM31.18 47.472C33.6565 45.136 35.5335 42.238 36.652 39.0225C38.5125 39.474 40.3345 40.0716 42.1015 40.8091C39.1535 44.0056 35.3705 46.3136 31.18 47.472Z" fill="#0B132B"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_telecom">
                      <rect width="50" height="50" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>

                {/* Title */}
                <h2
                  className="text-[28px] md:text-[38px] font-bold leading-[1.14]"
                  style={{ color: "#0B132B", fontFamily: "'Poppins', sans-serif" }}
                >
                  Telecomunicações
                </h2>

                {/* Description */}
                <p
                  className="text-base font-light leading-[1.4] max-w-[731px]"
                  style={{ color: "#191D2A", fontFamily: "'Poppins', sans-serif" }}
                >
                  A Zukk oferece soluções de inteligência geográfica personalizadas para impulsionar o
                  sucesso das empresas de telecomunicações. Maximize a eficiência, reduza custos e
                  melhore a experiência do cliente com nossas soluções inovadoras:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriaTelecomSection;
