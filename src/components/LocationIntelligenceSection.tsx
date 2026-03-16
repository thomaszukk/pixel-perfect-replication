import lisMap from "@/assets/lis-map.png";
import lisCity from "@/assets/lis-city.png";
import lisGeo from "@/assets/lis-geo.png";
import { ChevronDown } from "lucide-react";

const LocationIntelligenceSection = () => {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#0B132B" }}
    >
      <div className="max-w-[1232px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-0 px-6 py-12 md:py-0">
        {/* Title */}
        <div className="md:w-[280px] flex-shrink-0 py-10">
          <h3
            className="text-[36px] font-bold leading-[1.2] text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Location
            <br />
            Intelligence
            <br />
            Services
          </h3>
        </div>

        {/* Images */}
        <div className="flex-1 flex gap-0 h-[300px]">
          <div className="flex-1 overflow-hidden">
            <img src={lisMap} alt="Location Intelligence map" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 overflow-hidden">
            <img src={lisCity} alt="City aerial view" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 overflow-hidden relative">
            <img src={lisGeo} alt="Geo analysis" className="w-full h-full object-cover" />
            {/* CTA */}
            <a
              href="#"
              className="absolute bottom-6 right-6 flex items-center gap-1 text-white text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <ChevronDown size={16} />
              Conheças as soluções
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationIntelligenceSection;
