import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const TilesPage = () => {
  const navigate = useNavigate();

  const tileTypes = [
    { name: "Vitrified Tiles", description: "High-performance vitrified tiles with superior strength and durability" },
    { name: "Porcelain Tiles", description: "Premium porcelain tiles with exceptional whiteness and low porosity" },
    { name: "GVT (Glazed Vitrified Tiles)", description: "Glazed vitrified tiles combining aesthetics with performance" },
    { name: "Full Body Vitrified Tiles", description: "Uniform composition throughout for consistent appearance" },
    { name: "Double Charge Tiles", description: "Enhanced surface patterns with double charging technology" },
    { name: "Soluble Salt (Nano) Tiles", description: "Advanced nano technology for superior surface properties" },
    { name: "Ceramic Floor Tiles", description: "Durable ceramic floor tiles for residential and commercial use" },
    { name: "Ceramic Wall Tiles", description: "Elegant wall tiles with superior finish and adhesion" },
    { name: "Large Format Slabs", description: "Contemporary large format slabs for modern architectural needs" }
  ];

  const products = [
    {
      name: "Ball Clay",
      subtitle: "Over 50 Varieties",
      description: "Over 50 varieties engineered for different body types and tile formats",
      features: ["Superior plasticity", "Reduced cracking", "Enhanced workability", "Consistent quality"],
      image: "/assets/ball-clay.webp"
    },
    {
      name: "Kaolin",
      subtitle: "Premium Grade",
      description: "For enhanced whiteness, structural strength, and stability",
      features: ["High whiteness", "Low iron content", "Thermal stability", "Strength enhancement"],
      image: "/assets/kaolin.webp"
    },
    {
      name: "Feldspar",
      subtitle: "Potash & Soda",
      description: "As fluxes for vitrification, strength, and surface quality",
      features: ["Lower firing costs", "Improved vitrification", "Enhanced durability", "Surface quality"],
      image: "/assets/feldspar.webp"
    },
    {
      name: "Quartz & Silica",
      subtitle: "Precision Grade",
      description: "To control thermal expansion and optimize body formulation",
      features: ["Dimensional stability", "Thermal resistance", "Strength enhancement", "Controlled expansion"],
      image: "/assets/quartz-silica.webp"
    }
  ];

  const capabilities = [
    "Resolve complex manufacturing challenges",
    "Optimize material cost and yield", 
    "Enhance strength, color response, and surface finish",
    "Adapt materials to new technologies and firing conditions"
  ];

  const whyJLD = [
    {
      title: "Largest Portfolio",
      description: "Largest portfolio of ball clays for tiles in India"
    },
    {
      title: "Tailored Solutions", 
      description: "Tailored grades for every tile type"
    },
    {
      title: "R&D Innovation",
      description: "R&D-led innovation in body design and performance"
    },
    {
      title: "Technical Support",
      description: "Responsive technical support team with production expertise"
    },
    {
      title: "Global Reach",
      description: "Global supplier powering tile factories across continents"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tiles Industry - Engineered Clay Solutions for Every Tile Imaginable | JLD Minerals</title>
        <meta
          name="description"
          content="JLD Minerals - trusted leader in global ceramic tile industry. Premium ball clay, kaolin, feldspar & quartz solutions for all tile types. 25+ countries served."
        />
        <link rel="canonical" href="https://jldminerals.com/industries/tiles" />
        <link rel="preload" as="image" href="/assets/Tile.png" />
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        <div className="container mx-auto px-6 py-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <header className="flex justify-between items-center mb-8">
              <img 
                src="/assets/jld-logo.png" 
                alt="JLD Minerals" 
                className="h-8 w-auto"
                loading="lazy"
              />
              <button 
                onClick={() => {
                  window.location.replace('/home#industries');
                }}
                className="text-gray-600 hover:text-jldBlue transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
              >
                <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
                <span>Back to Industries</span>
              </button>
            </header>

            {/* Hero Section - Full viewport with even content distribution */}
            <div className="min-h-screen flex flex-col justify-center items-center text-center -mt-14 mb-32">
              <div className="max-w-6xl mx-auto space-y-8">
                <h1 
                  className="text-6xl md:text-8xl font-extralight text-jldBlue tracking-tight leading-none"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  Tiles
                </h1>
                
                <div className="w-32 h-px bg-jldBlue mx-auto" />
                
                <h2 className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                  Engineered Clay Solutions for Every Tile Imaginable
                </h2>
                
                <div className="max-w-4xl mx-auto space-y-6 mt-12">
                  <p className="text-xl text-gray-700 leading-relaxed font-light">
                    At JLD Minerals, tiles are not just a segment — they are our legacy. As one of the most trusted names in the global ceramic tile industry, JLD is synonymous with innovation, consistency, and problem-solving in tile body formulation and raw material engineering.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We proudly cater to every type of tile produced worldwide, offering tailored raw material solutions designed to meet the unique firing cycles, mechanical properties, and aesthetic demands of each format.
                  </p>
                </div>
              </div>
            </div>

            {/* Tile Types Grid - Equal heading size */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Types of Tiles We Serve
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Our specialized clays and mineral blends are used in manufacturing:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {tileTypes.map((tile, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="border-l-2 border-gray-200 pl-6 py-4 transition-all duration-500 group-hover:border-jldBlue">
                      <h3 className="text-lg font-medium text-gray-800 mb-3 transition-colors duration-300 group-hover:text-jldBlue">
                        {tile.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {tile.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-gray-600 max-w-4xl mx-auto italic">
                We offer custom-developed ball clay varieties for each of these segments — ensuring the right balance of plasticity, whiteness, dry strength, and thermal behavior for your exact process.
              </p>
            </div>

            {/* Products - Equal heading size */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Products We Offer for Tile Manufacturing
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  To serve the needs of the tile industry, JLD offers a comprehensive range of premium ceramic raw materials:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg border border-gray-200 hover:border-jldRed hover:shadow-md transition-all duration-300 flex"
                  >
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-jldBlue mb-1">{product.name}</h3>
                        <span className="text-sm text-gray-500 uppercase tracking-wide">{product.subtitle}</span>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="text-xs bg-gray-50 px-3 py-2 rounded text-center text-gray-600"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="ml-4 w-24 h-24 flex-shrink-0">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-gray-600 italic max-w-4xl mx-auto">
                These materials are available in powder, lump, or chip form, and can be customized to match your body recipe and kiln conditions.
              </p>
            </div>

            {/* Technical Expertise - Equal heading size */}
            <div className="mb-16">
              <div className="border-2 border-gray-400 rounded-xl p-10 bg-gray-50">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-light text-jldBlue mb-6">
                    Deep Technical Expertise
                  </h2>
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Our in-house technical and R&D teams bring decades of hands-on experience in tile body formulation, fast firing cycles, and large-format tile production. We work closely with production plants to:
                  </p>
                </div>

                <div className="max-w-5xl mx-auto mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {capabilities.map((capability, index) => (
                      <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl border-2 border-gray-200 shadow-sm">
                        <div className="w-3 h-3 bg-jldRed rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed text-lg">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xl text-jldBlue italic font-light">
                    We don't just supply raw materials — we deliver engineered ceramic solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Global Reach - Fixed image path and equal heading size */}
            <div className="mb-16 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-light text-jldBlue mb-6">
                    Global Reach, Local Precision
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    JLD Minerals is a key supplier to numerous tile factories across India and 25+ countries, supporting manufacturers with both standardized and tailor-made solutions. Our ability to deliver batch-to-batch consistency, tight particle control, and application-specific support makes us the partner of choice for high-performance tile production.
                  </p>
                </div>
                <div className="py-8 overflow-hidden">
                  <img 
                    src="/assets/Tile.png" 
                    alt="Premium Ceramic Tiles Manufacturing"
                    className="w-full object-cover max-w-full"
                    style={{ height: '960px', opacity: '1', filter: 'none' }}
                  />
                </div>
              </div>
            </div>

            {/* Why JLD - 5 cards in one horizontal line without icons */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Why JLD for Tiles?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover what makes JLD Minerals the preferred partner for ceramic tile manufacturers worldwide
                </p>
              </div>

              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {whyJLD.map((item, index) => (
                    <div
                      key={index}
                      className="relative bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-jldBlue transition-colors duration-300 text-center overflow-hidden"
                    >
                      {/* Smart bar accent */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-jldBlue to-jldRed"></div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-semibold text-jldBlue mb-3">
                        {item.title}  
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Final Statement */}
            <div className="bg-gradient-to-r from-jldBlue to-jldRed rounded-2xl p-12 text-center text-white">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  When it comes to tiles — JLD doesn't just follow trends, we help define them.
                </h2>
                
                <p className="text-xl mb-8 opacity-90">
                  Let our team help you unlock better performance, lower costs, and higher consistency in your tile production.
                </p>

                <button className="bg-white text-jldBlue px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
                  Partner With JLD Minerals
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Hide scrollbar for all elements */
        * {
          scrollbar-width: none; /* Firefox */
        }
        
        *::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Edge */
        }
        
        /* Ensure body can still scroll */
        body {
          overflow-y: auto;
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
};

export default TilesPage;