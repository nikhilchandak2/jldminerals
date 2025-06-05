import React from "react";
import { motion } from "framer-motion";

const industries = [
  { name: "Tiles", image: "/assets/Tile.png", slug: "tiles" },
  { name: "Glazes and Engobes", image: "/assets/Engobe and Glaze.png", slug: "glazes-engobes" },
  { name: "Sanitary Ware", image: "/assets/Sanitary-Ware.png", slug: "sanitary-ware" },
  { name: "Table Ware", image: "/assets/Table-Ware.png", slug: "table-ware" },
  { name: "Electrical Porcelain", image: "/assets/Electrical Porcelain.png", slug: "electrical-porcelain" },
  { name: "Refractory", image: "/assets/Refractory.png", slug: "refractory" },
];

export default function Industries() {
  const handleIndustryClick = (industrySlug) => {
    window.location.href = `/industries/${industrySlug}`;
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col overflow-hidden">
      {/* Header - Moved down by 0.5 inch (48px) */}
      <motion.div
        className="text-center pt-20 pb-8 px-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#2B235E]">Industries We Serve</h2>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          Trusted across industries. Engineered by precision. Built to perform.
        </p>
      </motion.div>

      {/* Images Row - Positioned at absolute bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2 }}
      >
        <div className="w-full flex">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="flex-1 relative group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              onClick={() => handleIndustryClick(industry.slug)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleIndustryClick(industry.slug);
                }
              }}
              aria-label={`${industry.name} industry page`}
            >
              {/* Image with fade-out mask and hover effects */}
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-[304px] md:h-[404px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
                style={{
                  maskImage: "linear-gradient(to top, black 60%, rgba(0,0,0,0.3) 85%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to top, black 60%, rgba(0,0,0,0.3) 85%, transparent 100%)",
                }}
              />
              
              {/* Industry Name - Center aligned and moved upwards */}
              <h3 className="absolute top-1 left-0 right-0 text-center text-lg font-semibold text-[#2B235E] group-hover:scale-105 transition-transform duration-300">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}