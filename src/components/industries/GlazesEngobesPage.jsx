import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useHideScrollbar } from '../../hooks/useHideScrollbar';

const GlazesEngobesPage = () => {
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
    { name: "Glossy & Matte Glazes", description: "High-performance materials for both glossy and matte glaze finishes" },
    { name: "White and Colored Engobes", description: "Specialized formulations for white and colored engobe applications" },
    { name: "Transparent, Semi-Transparent, and Crackle Glazes", description: "Advanced materials for various transparency effects and crackle patterns" },
    { name: "Reactive & Special Effect Surfaces", description: "Innovative solutions for reactive glazes and special surface effects" },
    { name: "Glaze Layers for Tiles, Tableware, and Sanitaryware", description: "Comprehensive materials for all ceramic glaze applications" }
  ];

  const products = [
    {
      name: "Ball Clay",
      subtitle: "Exceptional Plasticity",
      description: "Exceptional plasticity and suspending properties; ideal for slip preparation and base glaze blends",
      features: ["Exceptional plasticity", "Suspending properties", "Slip preparation", "Base glaze blends"],
      image: "/assets/ball-clay.webp"
    },
    {
      name: "Kaolin", 
      subtitle: "Glaze Stability",
      description: "For glaze stability, whiteness, and controlled shrinkage",
      features: ["Glaze stability", "Enhanced whiteness", "Controlled shrinkage", "Quality assurance"],
      image: "/assets/kaolin.webp"
    },
    {
      name: "Feldspar",
      subtitle: "Potash & Soda",
      description: "High-performance fluxes essential for glassy phase formation and smooth melt behavior",
      features: ["Glassy phase formation", "Smooth melt behavior", "High performance", "Essential fluxes"],
      image: "/assets/feldspar.webp"
    },
    {
      name: "Quartz & Silica",
      subtitle: "Thermal Control",
      description: "To control glaze hardness, thermal expansion, and opacity",
      features: ["Glaze hardness control", "Thermal expansion", "Opacity control", "Quality enhancement"],
      image: "/assets/quartz-silica.webp"
    }
  ];

  const creativeExpression = [
    "Fine particle size distributions for smooth application and consistent finishes",
    "Customizable raw mixes for transparent, opaque, glossy, or matte glazes",
    "Low-impurity grades for brilliant color development and glaze clarity",
    "Reliable thermal behavior to match fast-firing and standard kilns"
  ];

  const processingExcellence = [
    "Dry and wet processed clays to suit your slip preparation and application technique",
    "Controlled chemistry for glaze-body compatibility",
    "Batch consistency and traceability through multi-stage quality checks",
    "Tailored solutions developed in collaboration with your glaze development teams"
  ];

  const clientBenefits = [
    "Global logistics and export compliance",
    "Support in glaze-body fit challenges",
    "Color consistency and batch precision",
    "Material recommendations based on desired finish and application method"
  ];

  const whyJLD = [
    {
      title: "Complete Portfolio",
      description: "Complete portfolio: Ball clay, kaolin, feldspar, and quartz"
    },
    {
      title: "Manufacturing Flexibility",
      description: "Wet and dry processed options for full manufacturing flexibility"
    },
    {
      title: "Superior Materials", 
      description: "Technically superior ball clays and feldspars for smooth finishes and clean melt"
    },
    {
      title: "Innovation Support",
      description: "Materials that support innovation, texture, and color brilliance"
    },
    {
      title: "Global Trust",
      description: "Global supplier trusted for aesthetic-focused ceramic production"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Glazes & Engobes Industry - High-Purity Materials for Aesthetic Excellence & Surface Innovation | JLD Minerals</title>
        <meta
          name="description"
          content="JLD Minerals - high-performance clays and minerals for glazes and engobes. Supporting aesthetic innovation and firing consistency for creative surface coating applications."
        />
        <link rel="canonical" href="https://jldminerals.com/industries/glazes-engobes" />
        <link rel="preload" as="image" href="/assets/Engobe and Glaze.png" />
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
                  Glazes & Engobes
                </h1>
                
                <div className="w-32 h-px bg-jldBlue mx-auto" />
                
                <h2 className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                  High-Purity Materials for Aesthetic Excellence & Surface Innovation
                </h2>
                
                <div className="max-w-4xl mx-auto space-y-6 mt-12">
                  <p className="text-xl text-gray-700 leading-relaxed font-light">
                    At JLD Minerals, we understand that glazes and engobes are where creativity meets chemistry. As a trusted raw material partner to tile, sanitaryware, and tableware manufacturers, we provide a broad range of high-performance clays and minerals designed to meet the visual, functional, and technical needs of surface coating applications.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Whether you're aiming for high-gloss, satin matte, crystal, or reactive finishes, our materials are engineered to support aesthetic innovation and firing consistency at scale.
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
                  Our materials are used in:
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
                Each application has unique chemical and aesthetic demands — and we supply materials engineered to meet them.
              </p>
            </div>

            {/* Products - Equal heading size */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Products We Offer for Glazes & Engobes
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We offer a comprehensive suite of products from across our mineral portfolio for use in glaze and engobe formulations:
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
                We provide raw, dry-processed, and wet-processed options, allowing manufacturers to optimize for cost, consistency, and production method — whether they use spray application, bell application, screen printing, or dipping.
              </p>
            </div>

            {/* Enabling Creative Expression */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Enabling Creative Expression Through Materials
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Our materials enable producers to push the boundaries of ceramic surface design:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {creativeExpression.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                    <div className="w-3 h-3 bg-jldBlue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-xl text-jldBlue italic font-light">
                  From white engobes to artistic glazes — our materials support function and flair.
                </p>
              </div>
            </div>

            {/* Processing Excellence - Equal heading size */}
            <div className="mb-32">
              <div className="border-2 border-gray-400 rounded-xl p-10 bg-gray-50">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-light text-jldBlue mb-6">
                    Consistency Backed by Processing Excellence
                  </h2>
                </div>

                <div className="max-w-5xl mx-auto mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {processingExcellence.map((excellence, index) => (
                      <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl border-2 border-gray-200 shadow-sm">
                        <div className="w-3 h-3 bg-jldRed rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed text-lg">{excellence}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xl text-jldBlue italic font-light">
                    We help clients reduce glaze defects, improve application consistency, and explore new effects — all while maintaining cost-efficiency.
                  </p>
                </div>
              </div>
            </div>

            {/* Global Reach - Fixed image path and equal heading size */}
            <div className="mb-16 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-light text-jldBlue mb-6">
                    Global Reach & Technical Support
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    JLD Minerals supplies materials for glaze and engobe applications to manufacturers across 25+ countries, powering everything from mass-market floor tiles to high-end decorative ceramics.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our clients benefit from:
                  </p>
                  <div className="space-y-3">
                    {clientBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-jldRed rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="py-8 overflow-hidden">
                  <img 
                    src="/assets/Engobe and Glaze.png" 
                    alt="Premium Glazes & Engobes Manufacturing"
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
                  Why JLD for Glazes & Engobes?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover what makes JLD Minerals the preferred partner for glazes & engobes manufacturers worldwide
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
                  Beautiful surfaces start with trusted materials.
                </h2>
                
                <p className="text-xl mb-8 opacity-90">
                  Partner with JLD Minerals to unlock surface consistency, creative freedom, and technical excellence in every glaze.
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

export default GlazesEngobesPage;