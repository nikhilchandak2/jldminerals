import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useHideScrollbar } from '../../hooks/useHideScrollbar';

const TablewarePage = () => {
  const navigate = useNavigate();
  useHideScrollbar();

  useEffect(() => {
    // Add product page class to body to override global styles
    document.body.classList.add('product-page');
    
    return () => {
      document.body.classList.remove('product-page');
    };
  }, []);

  const applications = [
    { name: "Stoneware and Porcelain Tableware", description: "Premium materials for high-quality stoneware and porcelain production" },
    { name: "Bone China", description: "Specialized formulations for fine bone china manufacturing" },
    { name: "Hotelware and Institutional Crockery", description: "Durable materials for commercial and institutional tableware" },
    { name: "Handcrafted and Designer Ceramics", description: "Custom solutions for artisanal and designer ceramic pieces" },
    { name: "Tableware Glazes and Decorative Coatings", description: "Advanced materials for superior glaze performance and decorative finishes" }
  ];

  const products = [
    {
      name: "Ball Clay",
      subtitle: "High Plasticity Grades",
      description: "High plasticity, ultra-clean grades for shaping, slip casting, and pressure casting",
      features: ["High plasticity", "Ultra-clean", "Shaping excellence", "Casting support"],
      image: "/assets/ball-clay.webp"
    },
    {
      name: "Kaolin", 
      subtitle: "Superior Whiteness",
      description: "For superior whiteness, translucency, and fired strength",
      features: ["Superior whiteness", "Translucency", "Fired strength", "Clean burning"],
      image: "/assets/kaolin.webp"
    },
    {
      name: "Feldspar",
      subtitle: "Potash & Soda",
      description: "Fluxes for smooth glaze melt and improved strength",
      features: ["Smooth glaze melt", "Improved strength", "Thermal stability", "Enhanced vitrification"],
      image: "/assets/feldspar.webp"
    },
    {
      name: "Quartz & Silica",
      subtitle: "Thermal Control",
      description: "To control thermal expansion, support glaze bonding, and enhance body integrity",
      features: ["Thermal expansion control", "Glaze bonding", "Body integrity", "Enhanced stability"],
      image: "/assets/quartz-silica.webp"
    }
  ];

  const capabilities = [
    "Minimize defects like bloating, pinholes, and warping",
    "Improve casting rates and green handling strength",
    "Achieve optimal surface finish for high-end glazes",
    "Customize raw material blends for kiln type and firing curve"
  ];

  const whyJLD = [
    {
      title: "Balanced Solutions",
      description: "Balanced body and glaze solutions tailored for tableware"
    },
    {
      title: "High-Whiteness Clays",
      description: "Clean-burning, high-whiteness clays for superior aesthetics"
    },
    {
      title: "Customizable Grades", 
      description: "Customizable grades for high-end and mass-market production"
    },
    {
      title: "Technical Assistance",
      description: "Technical assistance from formulation to firing"
    },
    {
      title: "Premium Brand Trust",
      description: "Global supplier trusted by premium tableware brands"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tableware Industry - Refined Clay Solutions for High-Precision Tableware Ceramics | JLD Minerals</title>
        <meta
          name="description"
          content="JLD Minerals - specialized portfolio for global tableware industry. High-performance raw and processed clays for dimensional precision, whiteness, translucency, and strength."
        />
        <link rel="canonical" href="https://jldminerals.com/industries/tableware" />
        <link rel="preload" as="image" href="/assets/Table-Ware.png" />
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
                  Tableware
                </h1>
                
                <div className="w-32 h-px bg-jldBlue mx-auto" />
                
                <h2 className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                  Refined Clay Solutions for High-Precision Tableware Ceramics
                </h2>
                
                <div className="max-w-4xl mx-auto space-y-6 mt-12">
                  <p className="text-xl text-gray-700 leading-relaxed font-light">
                    JLD Minerals offers a specialized portfolio of high-performance raw and processed clays crafted for the global tableware industry. From daily-use crockery to fine bone china and luxury ceramic ware, our materials support dimensional precision, whiteness, translucency, and strength — all essential to delivering quality tableware.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    With a deep understanding of thermal behavior, glaze interaction, and body formulation, JLD Minerals works with manufacturers around the world to meet both aesthetic and functional demands of tableware production.
                  </p>
                </div>
              </div>
            </div>

            {/* Applications Grid - Equal heading size */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Key Applications
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Our materials are used in the production of:
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {applications.map((application, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="border-l-2 border-gray-200 pl-6 py-4 transition-all duration-500 group-hover:border-jldBlue">
                      <h3 className="text-lg font-medium text-gray-800 mb-3 transition-colors duration-300 group-hover:text-jldBlue">
                        {application.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {application.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-gray-600 max-w-4xl mx-auto italic">
                Whether you're pressing, casting, or shaping — our products support clean surfaces, structural strength, and smooth glaze fit.
              </p>
            </div>

            {/* Products - Equal heading size */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Products We Offer for Tableware Manufacturing
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our diverse product portfolio is tailored to meet the stringent technical requirements of tableware bodies and glazes:
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
                We offer a rich mix of both raw and processed materials, available in dry, wet, and customized blended forms depending on your process and product type.
              </p>
            </div>

            {/* Technical Expertise - Equal heading size */}
            <div className="mb-32">
              <div className="border-2 border-gray-400 rounded-xl p-10 bg-gray-50">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-light text-jldBlue mb-6">
                    Technical Support That Understands Tableware
                  </h2>
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Our technical team understands the complex balance of plasticity, translucency, porosity, and vitrification needed in tableware ceramics. We help manufacturers:
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
                    Whether you produce daily-use tableware or premium export-grade ceramics, JLD provides materials that meet your specifications consistently.
                  </p>
                </div>
              </div>
            </div>

            {/* Customization & Material Expertise */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Customization & Material Expertise
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-3 h-3 bg-jldBlue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed text-lg">Materials compatible with fine bone china, hotelware, and vitrified tableware</span>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-3 h-3 bg-jldBlue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed text-lg">Slip casting, jiggering, and isostatic pressing support</span>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-3 h-3 bg-jldBlue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed text-lg">Firing behavior optimization for smooth surfaces, tight tolerances, and zero warping</span>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-3 h-3 bg-jldBlue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed text-lg">In-house R&D lab to test and simulate body/glaze interactions under different firing conditions</span>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-xl text-jldBlue italic font-light">
                  From shaping and glazing to firing and finishing — we help your material perform at every step.
                </p>
              </div>
            </div>

            {/* Global Reach - Fixed image path and equal heading size */}
            <div className="mb-16 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-light text-jldBlue mb-6">
                    Global Reach & Trusted Delivery
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    We supply to leading tableware manufacturers across Asia, Europe, and the Middle East, with a growing footprint in North Africa and South America.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Clients rely on JLD for:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-jldRed rounded-full"></div>
                      <span className="text-gray-700">Consistency in every batch</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-jldRed rounded-full"></div>
                      <span className="text-gray-700">Process-matched materials</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-jldRed rounded-full"></div>
                      <span className="text-gray-700">Reliable global logistics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-jldRed rounded-full"></div>
                      <span className="text-gray-700">Responsive customer and technical support</span>
                    </div>
                  </div>
                </div>
                <div className="py-8 overflow-hidden">
                  <img 
                    src="/assets/Table-Ware.png" 
                    alt="Premium Tableware Manufacturing"
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
                  Why JLD for Tableware?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover what makes JLD Minerals the preferred partner for tableware manufacturers worldwide
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
                  In the world of tableware, aesthetics meet precision — and JLD Minerals delivers both.
                </h2>
                
                <p className="text-xl mb-8 opacity-90">
                  Consult our team for body solutions that bring consistency, beauty, and performance to the table.
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

export default TablewarePage;