import React, { useEffect } from 'react';
// Removed motion imports - using CSS fade effects instead
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation } from 'react-router-dom';
const ElectricalPorcelainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Multiple scroll attempts with different timings to ensure it works
    const scrollToTop = () => {
      // Try multiple scroll methods
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Scroll any potential container elements
      const containers = document.querySelectorAll('.overflow-y-auto, .min-h-screen, .container');
      containers.forEach(container => {
        container.scrollTop = 0;
      });
    };

    // Immediate scroll
    scrollToTop();
    
    // Additional scroll attempts with delays
    setTimeout(scrollToTop, 10);
    setTimeout(scrollToTop, 50);
    setTimeout(scrollToTop, 100);
    setTimeout(scrollToTop, 200);
    
    // Add product page class to body to override global styles
    document.body.classList.add('product-page');
    
    return () => {
      document.body.classList.remove('product-page');
    };
  }, []);

  const applications = [
    { name: "Pin & Post Insulators", description: "Engineered materials for reliable pin and post insulator production" },
    { name: "Hollow Bushings & Transformer Components", description: "Specialized formulations for transformer bushings and components" },
    { name: "Disc Insulators (Suspension, Tension)", description: "High-strength materials for disc insulator manufacturing" },
    { name: "Long Rod Insulators & Special Shapes", description: "Custom solutions for long rod insulators and special configurations" },
    { name: "Glazes for Electrical Insulation Surfaces", description: "Advanced glazing materials for superior electrical insulation properties" }
  ];

  const products = [
    {
      name: "Ball Clay",
      subtitle: "High Plasticity Grades",
      description: "High plasticity grades ideal for shaping large, high-tension insulator bodies",
      features: ["High plasticity", "Large shaping capability", "High-tension support", "Insulator grade"],
      image: "/assets/ball-clay.webp"
    },
    {
      name: "Kaolin", 
      subtitle: "Fired Strength",
      description: "For increased fired strength, thermal insulation, and structural integrity",
      features: ["Fired strength", "Thermal insulation", "Structural integrity", "High performance"],
      image: "/assets/kaolin.webp"
    },
    {
      name: "Feldspar",
      subtitle: "Potash & Soda",
      description: "Fluxes to control vitrification and densification",
      features: ["Vitrification control", "Densification", "Process optimization", "Quality assurance"],
      image: "/assets/feldspar.webp"
    },
    {
      name: "Quartz & Silica",
      subtitle: "Thermal Resistance",
      description: "To improve thermal resistance and reduce thermal expansion",
      features: ["Thermal resistance", "Low expansion", "High performance", "Stability enhancement"],
      image: "/assets/quartz-silica.webp"
    }
  ];

  const capabilities = [
    "High dielectric strength and insulation resistance",
    "Low thermal expansion and high mechanical strength",
    "Formulation compatibility with double-shell and long-cycle firing",
    "Tight control over iron and alkali content"
  ];

  const operationalExperience = [
    "Direct experience running two electrical porcelain factories",
    "In-depth knowledge of pressing, drying, glazing, and multi-day firing cycles",
    "Expertise in producing clays for large-size, high-voltage insulators",
    "Capable of serving both medium-voltage and high-tension porcelain applications"
  ];

  const customerBenefits = [
    "Proven track record of insulator-grade clay supply",
    "Batch consistency and technical documentation",
    "Responsive support and formulation guidance",
    "On-time delivery for high-volume requirements"
  ];

  const whyJLD = [
    {
      title: "Plant-Level Experience",
      description: "Direct plant-level experience in insulator production"
    },
    {
      title: "Custom High-Voltage Clays",
      description: "Custom clays for high-voltage, large-format insulators"
    },
    {
      title: "Engineered Formulations", 
      description: "Engineered formulations for strength, insulation, and shrinkage control"
    },
    {
      title: "Global Trust",
      description: "Trusted by major global manufacturers"
    },
    {
      title: "Advanced Portfolio",
      description: "One of the most advanced clay portfolios for electrical porcelain in the world"
    }
  ];

  const handleBackClick = () => {
    try {
      // Get where user came from via React Router state
      const fromPage = location.state?.from;
      
      // Debug logging
      console.log('ElectricalPorcelainPage - Back button clicked');
      console.log('From page (state):', fromPage);
      console.log('Document referrer:', document.referrer);
      
      // Check React Router state first (most reliable)
      if (fromPage) {
        if (fromPage === '/products/ball-clay') {
          console.log('Navigating back to Ball Clay page');
          navigate('/products/ball-clay');
          return;
        } else if (fromPage === '/products/kaolin') {
          console.log('Navigating back to Kaolin page');
          navigate('/products/kaolin');
          return;
        } else if (fromPage === '/products/feldspar') {
          console.log('Navigating back to Feldspar page');
          navigate('/products/feldspar');
          return;
        } else if (fromPage === '/products/quartz-silica') {
          console.log('Navigating back to Quartz-Silica page');
          navigate('/products/quartz-silica');
          return;
        } else if (fromPage === '/home#industries' || fromPage.includes('#industries')) {
          console.log('Navigating back to Industries section');
          navigate('/home#industries');
          return;
        }
      }
      
      // Fallback: check document.referrer
      const referrer = document.referrer;
      if (referrer && referrer.includes('/products/ball-clay')) {
        console.log('Using referrer to go back to Ball Clay page');
        navigate('/products/ball-clay');
        return;
      } else if (referrer && referrer.includes('/products/kaolin')) {
        console.log('Using referrer to go back to Kaolin page');
        navigate('/products/kaolin');
        return;
      } else if (referrer && referrer.includes('/products/feldspar')) {
        console.log('Using referrer to go back to Feldspar page');
        navigate('/products/feldspar');
        return;
      } else if (referrer && referrer.includes('/products/quartz-silica')) {
        console.log('Using referrer to go back to Quartz-Silica page');
        navigate('/products/quartz-silica');
        return;
      } else if (referrer && (referrer.includes('/home#industries') || referrer.includes('#industries'))) {
        console.log('Using referrer to go back to Industries section');
        navigate('/home#industries');
        return;
      }
      
      // Default: go to Industries section
      console.log('Using fallback to Industries section');
      navigate('/home#industries');
      
    } catch (error) {
      console.error('Navigation error:', error);
      navigate('/home#industries');
    }
  };

  return (
    <>
      <Helmet>
        <title>Electrical Porcelain Industry - High-Performance Clay Solutions for Power-Grade Ceramic Insulators | JLD Minerals</title>
        <meta
          name="description"
          content="JLD Minerals - engineered clays for electrical porcelain industry. High-performance solutions for power-grade ceramic insulators with operational experience and technical excellence."
        />
        <link rel="canonical" href="https://jldminerals.com/industries/electrical-porcelain" />
        <link rel="preload" as="image" href="/assets/Electrical Porcelain.png" />
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
                onClick={handleBackClick}
                className="text-jldBlue hover:text-jldRed transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
              >
                <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
                <span>Back</span>
              </button>
            </header>

            {/* Hero Section - Full viewport with even content distribution */}
            <div className="min-h-screen flex flex-col justify-center items-center text-center -mt-14 mb-32">
              <div className="max-w-6xl mx-auto space-y-8">
                <h1 
                  className="text-6xl md:text-8xl font-extralight text-jldBlue tracking-tight leading-none"
                >
                  Electrical Porcelain
                </h1>
                
                <div className="w-32 h-px bg-jldBlue mx-auto" />
                
                <h2 className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                  High-Performance Clay Solutions for Power-Grade Ceramic Insulators
                </h2>
                
                <div className="max-w-4xl mx-auto space-y-6 mt-12">
                  <p className="text-xl text-gray-700 leading-relaxed font-light">
                    At JLD Minerals, our contribution to the electrical porcelain industry is both deep-rooted and technically unmatched. We supply some of the biggest names in the global insulator market, delivering engineered clays that meet the highest technical and mechanical standards in the industry.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    With firsthand experience in operating two electrical porcelain manufacturing plants, our team understands the nuances of shaping, drying, and firing large and high-tension insulators — and this experience has helped us develop some of the finest clays available for electrical porcelain production anywhere in the world.
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
                  Our clays are engineered for use in:
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
                We offer solutions for manual, semi-automatic, and fully automated production lines, adaptable to each plant's firing profile and mechanical requirements.
              </p>
            </div>

            {/* Products - Equal heading size */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Products We Offer for Electrical Porcelain Manufacturing
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our clay portfolio for electrical porcelain is engineered to deliver mechanical strength, thermal shock resistance, electrical insulation, and dimensional stability under extreme conditions.
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
                Each raw material is rigorously tested and validated to ensure performance in critical ceramic insulation applications.
              </p>
            </div>

            {/* Backed by Operational Experience */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Backed by Operational Experience
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {operationalExperience.map((experience, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                    <div className="w-3 h-3 bg-jldBlue rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed text-lg">{experience}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-xl text-jldBlue italic font-light">
                  Our production background gives us a practical advantage in developing raw materials that don't just look good on paper — but perform reliably in real-world plant conditions.
                </p>
              </div>
            </div>

            {/* Technical Expertise - Equal heading size */}
            <div className="mb-32">
              <div className="border-2 border-gray-400 rounded-xl p-10 bg-gray-50">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-light text-jldBlue mb-6">
                    Engineered for Insulation Performance
                  </h2>
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    We understand the critical parameters that define quality in electrical porcelain:
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
                    Our materials help clients produce porcelain insulators for transformers, bushings, lightning arresters, pin & disc insulators, and more — with confidence and consistency.
                  </p>
                </div>
              </div>
            </div>

            {/* Global Reach - Fixed image path and equal heading size */}
            <div className="mb-16 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-light text-jldBlue mb-6">
                    Global Reach & Supply Reliability
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    JLD supplies electrical porcelain manufacturers across India, the Middle East, and Southeast Asia, supporting both OEM production and infrastructure project demand.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Customers choose JLD for:
                  </p>
                  <div className="space-y-3">
                    {customerBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-jldRed rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="py-8 overflow-hidden">
                  <img 
                    src="/assets/Electrical Porcelain.png" 
                    alt="Premium Electrical Porcelain Manufacturing"
                    className="w-full object-cover max-w-full"
                  />
                </div>
              </div>
            </div>

            {/* Why JLD - 5 cards in one horizontal line without icons */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Why JLD for Electrical Porcelain?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover what makes JLD Minerals the preferred partner for electrical porcelain manufacturers worldwide
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
                  In a field where failure isn't an option — JLD delivers certainty.
                </h2>
                
                <p className="text-xl mb-8 opacity-90">
                  Consult our technical team to access high-performance clays trusted by the world's leading insulator brands.
                </p>

                <button 
                  onClick={() => navigate('/contact', { state: { from: '/industries/electrical-porcelain' } })}
                  className="bg-white text-jldBlue px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
                >
                  Partner With JLD Minerals
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default ElectricalPorcelainPage;