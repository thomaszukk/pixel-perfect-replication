import lisMap from "@/assets/lis-map.png";
import lisCity from "@/assets/lis-city.png";
import lisGeo from "@/assets/lis-geo.png";
import { ChevronDown } from "lucide-react";

const LocationIntelligenceSection = () => {
  return (
    <section
      className="w-full overflow-visible"
      style={{ backgroundColor: "#0B132B" }}
    >
      <div className="max-w-[1232px] mx-auto flex flex-col md:flex-row items-stretch gap-8 md:gap-0 px-6 h-[300px]">
        {/* Title */}
        <div className="md:w-[280px] flex-shrink-0 flex items-center">
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

        {/* Images - float above top and don't touch bottom */}
        <div className="flex-1 flex gap-4 -mt-10 mb-10">
          <div className="flex-1 overflow-hidden rounded-sm">
            <img src={lisMap} alt="Location Intelligence map" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 overflow-hidden rounded-sm">
            <img src={lisCity} alt="City aerial view" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 overflow-hidden rounded-sm relative">
            <img src={lisGeo} alt="Geo analysis" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1232px] mx-auto px-6 pb-6 flex justify-end">
        <a
          href="#"
          className="flex items-center gap-1 text-white text-sm font-medium hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <ChevronDown size={16} />
          Conheças as soluções
        </a>
      </div>
    </section>
  );
};

export default LocationIntelligenceSection;
