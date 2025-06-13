import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useHideScrollbar } from '../../hooks/useHideScrollbar';

const RefractoryPage = () => {
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
    { name: "Kiln Furniture and Lining Systems", description: "High-performance materials for kiln furniture and advanced lining systems" },
    { name: "Firebricks and High-Alumina Bricks", description: "Specialized formulations for firebricks and high-alumina brick production" },
    { name: "Castables and Monolithics", description: "Advanced materials for castable and monolithic refractory applications" },
    { name: "Boiler and Furnace Linings", description: "Durable solutions for boiler and furnace lining applications" },
    { name: "Cement, Steel, Glass, and Petrochemical Plants", description: "Industrial-grade materials for major industrial plant applications" }
  ];

  const products = [
    {
      name: "Ball Clay",
      subtitle: "Low-Impurity Grades",
      description: "Selected low-impurity grades that offer plasticity and dry strength for firebrick shaping",
      features: ["Low impurity", "High plasticity", "Dry strength", "Firebrick shaping"],
      image: "/assets/ball-clay.webp"
    },
    {
      name: "Kaolin", 
      subtitle: "High-Alumina Bodies",
      description: "Ideal for high-alumina bodies with excellent fired refractoriness",
      features: ["High-alumina content", "Fired refractoriness", "Thermal stability", "Superior performance"],
      image: "/assets/kaolin.webp"
    },
    {
      name: "Feldspar",
      subtitle: "Potash & Soda",
      description: "Used as controlled fluxes in insulating bodies and dense refractory shapes",
      features: ["Controlled fluxes", "Insulating bodies", "Dense shapes", "Thermal control"],
      image: "/assets/feldspar.webp"
    },
    {
      name: "Quartz & Silica",
      subtitle: "High-Temperature Stability",
      description: "For high-temperature stability, volume control, and resistance to thermal shock",
      features: ["High-temp stability", "Volume control", "Thermal shock resistance", "Dimensional stability"],
      image: "/assets/quartz-silica.webp"
    }
  ];

  const highTempPerformance = [
    "Materials with high fusion point and dimensional stability",
    "Low Fe₂O₃ and alkali content for minimal corrosion risk",
    "Custom blends designed for low shrinkage and high load-bearing strength",
    "Raw materials suitable for both basic and acid refractory systems"
  ];

  const globalReach = [
    "Tailor-made raw material blends",
    "Documentation support for compliance",
    "Logistics reliability for large project-based dispatches",
    "Consistent particle size and thermal performance"
  ];

  const whyJLD = [
    {
      title: "Proven Grades",
      description: "Proven grades with high refractoriness and stability"
    },
    {
      title: "Customizable Solutions",
      description: "Customizable particle size and composition"
    },
    {
      title: "Clean-Burning Clays", 
      description: "Clean-burning clays with low impurity content"
    },
    {
      title: "Industry Trust",
      description: "Trusted by large industrial refractory manufacturers"
    },
    {
      title: "Material Science Support",
      description: "Deep material science support for R&D and formulation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Refractory Industry - High-Alumina, Low-Iron Clays for Thermal Endurance & Structural Integrity | JLD Minerals</title>
        <meta
          name="description"
          content="JLD Minerals - high-performance raw materials for refractory industry. Engineered for extreme temperatures, mechanical stress, and corrosive environments with thermal endurance."
        />
        <link rel="canonical" href="https://jldminerals.com/industries/refractory" />
        <link rel="preload" as="image" href="/assets/Refractory.png" />
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
                  Refractory
                </h1>
                
                <div className="w-32 h-px bg-jldBlue mx-auto" />
                
                <h2 className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                  High-Alumina, Low-Iron Clays for Thermal Endurance & Structural Integrity
                </h2>
                
                <div className="max-w-4xl mx-auto space-y-6 mt-12">
                  <p className="text-xl text-gray-700 leading-relaxed font-light">
                    At JLD Minerals, we supply high-performance raw materials for the refractory industry, engineered to withstand extreme temperatures, mechanical stress, and corrosive environments. Our materials are used in the production of firebricks, castables, insulating bodies, kiln furniture, and other high-temperature applications where durability and dimensional stability are non-negotiable.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    With deep technical experience and a diverse mineral portfolio, JLD helps refractory manufacturers across the globe achieve higher life cycles, minimal deformation, and low thermal conductivity in their finished products.
                  </p>
                </div>
              </div>
            </div>

            {/* Applications Grid - Equal heading size */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Applications Across Thermal Industries
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
                Each use case has its own material demands — and JLD's team works closely with clients to recommend the right mix for the right temperature profile and operating environment.
              </p>
            </div>

            {/* Products - Equal heading size */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Products We Offer for Refractory Applications
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our refractory-grade materials are selected for their alumina content, low iron levels, and thermal resistance:
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
                We offer both raw and processed materials, with consistency engineered for castables, gunning mixes, ramming masses, and dense or insulating bricks.
              </p>
            </div>

            {/* Built for High-Temperature Performance */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Built for High-Temperature Performance
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {highTempPerformance.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                    <div className="w-3 h-3 bg-jldBlue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-xl text-jldBlue italic font-light">
                  Our quality control process ensures that every batch meets tight compositional and thermal property specifications required by refractory designers.
                </p>
              </div>
            </div>

            {/* Global Reach - Fixed image path and equal heading size */}
            <div className="mb-16 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-light text-jldBlue mb-6">
                    Global Reach & Technical Reliability
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    JLD Minerals supplies refractory materials to clients in India, the Middle East, North Africa, and Southeast Asia, offering:
                  </p>
                  <div className="space-y-3">
                    {globalReach.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-jldRed rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="py-8 overflow-hidden">
                  <img 
                    src="/assets/Refractory.png" 
                    alt="Premium Refractory Manufacturing"
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
                  Why JLD for Refractory?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover what makes JLD Minerals the preferred partner for refractory manufacturers worldwide
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
                  Where heat pushes materials to the limit — JLD materials stand strong.
                </h2>
                
                <p className="text-xl mb-8 opacity-90">
                  Partner with us to develop high-performance, cost-effective refractory solutions built to last.
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

export default RefractoryPage; 