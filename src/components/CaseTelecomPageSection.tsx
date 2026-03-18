import caseTelecomImg from "@/assets/case-telecom.webp";

const CaseTelecomPageSection = () => {
  return (
    <section className="w-full" style={{ backgroundColor: "#001E3B" }}>
      <div className="flex flex-col md:flex-row">
        {/* Left - Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-12 md:px-16 lg:px-24">
          <div className="flex flex-col items-start max-w-[680px]">
            <p
              className="text-sm font-bold uppercase tracking-wider mb-1"
              style={{ color: "#CBFAF5", fontFamily: "'Poppins', sans-serif", letterSpacing: "1px" }}
            >
              Transformação na Retirada do Cobre
            </p>
            <h3
              className="text-[27px] font-bold leading-[1.4] mb-6"
              style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
            >
              Otimização com GIS para uma Grande Distribuidora de Energia
            </h3>

            <div className="flex flex-col gap-4">
              {/* Demanda */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-[35px] h-[35px] flex items-center justify-center">
                    <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip_d2)">
                        <path d="M18.903 25.3827V21.8754C18.903 21.7031 18.8446 21.5585 18.7277 21.4416C18.6107 21.3247 18.4723 21.2662 18.3123 21.2662H14.768C14.608 21.2662 14.4696 21.3247 14.3527 21.4416C14.2358 21.5585 14.1773 21.7031 14.1773 21.8754V25.3827C14.1773 25.555 14.2358 25.6996 14.3527 25.8166C14.4696 25.9335 14.608 25.9919 14.768 25.9919H18.3123C18.4723 25.9919 18.6107 25.9335 18.7277 25.8166C18.8446 25.6996 18.903 25.555 18.903 25.3827ZM18.8661 18.4788L19.1984 10.0057C19.1984 9.85803 19.1368 9.74112 19.0138 9.65498C18.8538 9.5196 18.7061 9.45192 18.5707 9.45192H14.5096C14.3742 9.45192 14.2265 9.5196 14.0665 9.65498C13.9435 9.74112 13.8819 9.87034 13.8819 10.0426L14.1958 18.4788C14.1958 18.6018 14.2573 18.7034 14.3804 18.7834C14.5034 18.8633 14.6511 18.9033 14.8234 18.9033H18.2385C18.4108 18.9033 18.5554 18.8633 18.6723 18.7834C18.7892 18.7034 18.8538 18.6018 18.8661 18.4788ZM18.6077 1.2373L32.7848 27.2287C33.2155 28.004 33.2032 28.7794 32.7479 29.5547C32.5387 29.9116 32.2525 30.1946 31.8895 30.4038C31.5265 30.613 31.1357 30.7176 30.7173 30.7176H2.36302C1.9446 30.7176 1.55386 30.613 1.19082 30.4038C0.827777 30.1946 0.54165 29.9116 0.332438 29.5547C-0.122904 28.7794 -0.135211 28.004 0.295519 27.2287L14.4727 1.2373C14.6819 0.855793 14.9711 0.554283 15.3403 0.332765C15.7095 0.111247 16.1094 0.000488281 16.5402 0.000488281C16.9709 0.000488281 17.3709 0.111247 17.7401 0.332765C18.1092 0.554283 18.3985 0.855793 18.6077 1.2373Z" fill="#34EACD" />
                      </g>
                      <defs><clipPath id="clip_d2"><rect width="33.08" height="35.002" fill="white" /></clipPath></defs>
                    </svg>
                  </div>
                  <span
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: "#34EACD", fontFamily: "'Poppins', sans-serif", letterSpacing: "1px" }}
                  >
                    Demanda
                  </span>
                </div>
                <p
                  className="text-sm font-normal leading-[1.4] pl-[47px]"
                  style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
                >
                  A operadora enfrentava a falta de controle sobre a retirada do cobre durante a modernização da rede, com riscos de extravio, roubo, dados inconsistentes e prejuízo financeiro significativo.
                </p>
              </div>

              {/* Solução */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-[35px] h-[35px] flex items-center justify-center">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip_s2)">
                        <path d="M16.324 16.3308C16.324 15.0434 15.8685 13.9442 14.9576 13.0332C14.0467 12.1223 12.9475 11.6668 11.66 11.6668C10.3725 11.6668 9.27334 12.1223 8.36241 13.0332C7.45147 13.9442 6.996 15.0434 6.996 16.3308C6.996 17.6183 7.45147 18.7175 8.36241 19.6284C9.27334 20.5394 10.3725 20.9948 11.66 20.9948C12.9475 20.9948 14.0467 20.5394 14.9576 19.6284C15.8685 18.7175 16.324 17.6183 16.324 16.3308ZM30.316 25.6588C30.316 25.0273 30.0852 24.4807 29.6237 24.0192C29.1621 23.5576 28.6156 23.3268 27.984 23.3268C27.3524 23.3268 26.8059 23.5576 26.3443 24.0192C25.8828 24.4807 25.652 25.0273 25.652 25.6588C25.652 26.3026 25.8797 26.8522 26.3352 27.3076C26.7907 27.7631 27.3403 27.9908 27.984 27.9908C28.6277 27.9908 29.1773 27.7631 29.6328 27.3076C30.0883 26.8522 30.316 26.3026 30.316 25.6588ZM30.316 7.00284C30.316 6.37126 30.0852 5.82469 29.6237 5.36315C29.1621 4.90161 28.6156 4.67084 27.984 4.67084C27.3524 4.67084 26.8059 4.90161 26.3443 5.36315C25.8828 5.82469 25.652 6.37126 25.652 7.00284C25.652 7.64657 25.8797 8.19617 26.3352 8.65164C26.7907 9.10711 27.3403 9.33484 27.984 9.33484C28.6277 9.33484 29.1773 9.10711 29.6328 8.65164C30.0883 8.19617 30.316 7.64657 30.316 7.00284ZM23.32 14.6729V18.0434C23.32 18.1649 23.2775 18.2833 23.1925 18.3987C23.1074 18.5141 23.0103 18.5778 22.901 18.59L20.0771 19.0272C19.9435 19.4523 19.7491 19.9139 19.4941 20.4118C19.907 20.9948 20.4536 21.6932 21.1337 22.507C21.2188 22.6406 21.2613 22.7621 21.2613 22.8714C21.2613 23.0171 21.2188 23.1325 21.1337 23.2175C20.8544 23.5819 20.3534 24.1254 19.6307 24.8481C18.908 25.5708 18.4313 25.9321 18.2005 25.9321C18.0669 25.9321 17.9394 25.8896 17.8179 25.8046L15.7228 24.1649C15.2734 24.3957 14.8058 24.5839 14.3199 24.7297C14.1863 26.0414 14.0467 26.9827 13.9009 27.5536C13.8159 27.8451 13.6337 27.9908 13.3543 27.9908H9.96566C9.83205 27.9908 9.71059 27.9453 9.60128 27.8542C9.49197 27.7631 9.43124 27.6568 9.41909 27.5354L9.00006 24.7479C8.5871 24.6264 8.13163 24.4382 7.63366 24.1831L5.48384 25.8046C5.39882 25.8896 5.27736 25.9321 5.11947 25.9321C4.98586 25.9321 4.85833 25.8835 4.73687 25.7864C2.98787 24.171 2.11337 23.1993 2.11337 22.8714C2.11337 22.7621 2.15589 22.6467 2.24091 22.5252C2.36236 22.3552 2.61135 22.0333 2.98787 21.5596C3.3644 21.0859 3.64982 20.7155 3.84416 20.4483C3.5648 19.9139 3.35225 19.4159 3.2065 18.9543L0.43725 18.5171C0.315792 18.5049 0.212552 18.4473 0.127531 18.344C0.0425104 18.2408 0 18.1224 0 17.9887V14.6183C0 14.4968 0.0425104 14.3784 0.127531 14.263C0.212552 14.1476 0.309719 14.0839 0.419031 14.0717L3.24294 13.6345C3.37654 13.2094 3.57087 12.7478 3.82594 12.2498C3.41298 11.6668 2.86642 10.9685 2.18625 10.1547C2.10123 10.0211 2.05872 9.89962 2.05872 9.79031C2.05872 9.64456 2.10123 9.5231 2.18625 9.42593C2.45346 9.06156 2.95144 8.52107 3.68019 7.80446C4.40894 7.08786 4.8887 6.72956 5.11947 6.72956C5.25307 6.72956 5.3806 6.77207 5.50206 6.85709L7.59722 8.49678C8.01018 8.27815 8.47779 8.08382 9.00006 7.91378C9.13367 6.60203 9.27334 5.6668 9.41909 5.10809C9.50411 4.81659 9.6863 4.67084 9.96566 4.67084H13.3543C13.4879 4.67084 13.6094 4.71639 13.7187 4.80748C13.828 4.89857 13.8888 5.00485 13.9009 5.12631L14.3199 7.91378C14.7329 8.03524 15.1884 8.2235 15.6863 8.47856L17.8362 6.85709C17.9333 6.77207 18.0548 6.72956 18.2005 6.72956C18.3341 6.72956 18.4617 6.77814 18.5831 6.87531C20.3321 8.4907 21.2066 9.46237 21.2066 9.79031C21.2066 9.88748 21.1641 10.0029 21.0791 10.1365C20.9333 10.3308 20.6783 10.6587 20.3139 11.1203C19.9495 11.5818 19.6762 11.9462 19.4941 12.2134C19.7734 12.7964 19.9799 13.2944 20.1135 13.7073L22.8827 14.1264C23.0042 14.1507 23.1074 14.2144 23.1925 14.3177C23.2775 14.4209 23.32 14.5393 23.32 14.6729Z" fill="#34EACD" />
                      </g>
                      <defs><clipPath id="clip_s2"><rect width="34.98" height="34.5582" fill="white" /></clipPath></defs>
                    </svg>
                  </div>
                  <span
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: "#34EACD", fontFamily: "'Poppins', sans-serif", letterSpacing: "1px" }}
                  >
                    Solução
                  </span>
                </div>
                <p
                  className="text-sm font-normal leading-[1.4] pl-[47px]"
                  style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
                >
                  A ZUKK implantou uma <strong>solução completa de coleta de dados em campo</strong>, com fotos, geolocalização, validação de peso e rastreabilidade do cobre desde a retirada até a entrega na sucata.
                </p>
              </div>

              {/* Resultados */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-[35px] h-[35px] flex items-center justify-center">
                    <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30.8461 10.4487C30.8461 10.941 30.6738 11.3594 30.3292 11.704L16.9643 25.0689L14.4538 27.5794C14.1092 27.924 13.6908 28.0963 13.1985 28.0963C12.7063 28.0963 12.2878 27.924 11.9433 27.5794L9.43273 25.0689L2.75027 18.3864C2.40569 18.0418 2.2334 17.6234 2.2334 17.1312C2.2334 16.6389 2.40569 16.2205 2.75027 15.8759L5.26081 13.3653C5.60539 13.0208 6.02382 12.8485 6.51608 12.8485C7.00834 12.8485 7.42676 13.0208 7.77135 13.3653L13.1985 18.811L25.3082 6.68289C25.6528 6.33831 26.0712 6.16602 26.5634 6.16602C27.0557 6.16602 27.4741 6.33831 27.8187 6.68289L30.3292 9.19343C30.6738 9.53801 30.8461 9.95643 30.8461 10.4487Z" fill="#34EACD" />
                    </svg>
                  </div>
                  <span
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: "#34EACD", fontFamily: "'Poppins', sans-serif", letterSpacing: "1px" }}
                  >
                    Resultados
                  </span>
                </div>
                <div
                  className="text-sm font-normal leading-[1.4] pl-[47px] flex flex-col gap-3"
                  style={{ color: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
                >
                  <p>
                    Com a solução da ZUKK, houve uma <strong>redução expressiva nas perdas por roubo ou desvio de cobre</strong> durante as obras, além do aumento da confiabilidade e rastreabilidade do processo como um todo.
                  </p>
                  <p>
                    A empresa evitou desperdícios que antes resultavam em milhões de reais perdidos por falhas no controle, <strong>identificando um potencial de retorno financeiro de R$ 3 bilhões</strong> com a venda adequada do cobre.
                  </p>
                  <p>
                    O projeto também proporcionou <strong>maior eficiência e governança</strong> no programa de modernização da rede.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Image (same logic as home page) */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[520px] relative overflow-hidden" style={{ backgroundColor: "#0B132B" }}>
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

export default CaseTelecomPageSection;
