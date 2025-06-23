import React, { useEffect } from 'react';
// Removed motion imports - using CSS fade effects instead
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation } from 'react-router-dom';

const SanitarywarePage = () => {
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
    { name: "Toilets (One-piece, Two-piece, Smart toilets)", description: "High-performance ceramic bodies for all toilet types with superior strength" },
    { name: "Wash Basins & Pedestals", description: "Premium materials for elegant washbasins with excellent surface finish" },
    { name: "Urinals, Cisterns, Bidets", description: "Specialized formulations for various sanitary fixtures" },  
    { name: "Bathroom Accessories", description: "Custom blends for ceramic bathroom accessories and fittings" },
    { name: "Glaze Coatings for Sanitary Ceramics", description: "Advanced materials for superior glaze performance and aesthetics" }
  ];

  const products = [
    {
      name: "Ball Clay",
      subtitle: "Highly Plastic Grades",
      description: "Highly plastic, clean-burning grades for superior shaping and green strength",
      features: ["Superior plasticity", "Clean burning", "Green strength", "Shaping excellence"],
      image: "/assets/ball-clay.webp"
    },
    {
      name: "Kaolin", 
      subtitle: "Premium Whiteness",
      description: "For whiteness, body integrity, and stable drying/firing behavior",
      features: ["High whiteness", "Body integrity", "Stable drying", "Firing stability"],
      image: "/assets/kaolin.webp"
    },
    {
      name: "Feldspar",
      subtitle: "Potash & Soda",
      description: "Fluxes for glaze melting and body vitrification; JLD's feldspar is among the best available for both glaze and body applications",
      features: ["Glaze melting", "Body vitrification", "Dual application", "Premium quality"],
      image: "/assets/feldspar.webp"
    },
    {
      name: "Quartz & Silica",
      subtitle: "Thermal Stability",
      description: "For thermal stability, glaze development, and body strength under high firing",
      features: ["Thermal stability", "Glaze development", "Body strength", "High firing performance"],
      image: "/assets/quartz-silica.webp"
    }
  ];

  const capabilities = [
    "Solve problems related to cracking, bloating, and warping",
    "Enhance glaze fit, surface quality, and whiteness",
    "Improve yield, reduce breakage, and achieve tighter firing controls", 
    "Replace high-cost imported inputs with locally optimized blends"
  ];

  const whyJLD = [
    {
      title: "Custom-blended Solutions",
      description: "Custom-blended clay solutions proven in large-scale production"
    },
    {
      title: "Best Feldspar Grades",
      description: "One of the best feldspar grades for glaze and body vitrification"
    },
    {
      title: "Casting Expertise", 
      description: "Experience with pressure casting, slip casting, and high-pressure systems"
    },
    {
      title: "Import Reduction",
      description: "Active role in reducing India's reliance on imported ceramic inputs"
    },
    {
      title: "Proven Partnership",
      description: "Partner to top sanitaryware producers in India and abroad"
    }
  ];

  const handleBackClick = () => {
    try {
      // Get navigation state (where user came from)
      const fromPage = location.state?.from;
      const referrer = document.referrer;
      
      // Debug logging to understand what's happening
      console.log('SanitarywarePage - Back button clicked');
      console.log('Navigation state from:', fromPage);
      console.log('Document referrer:', referrer);
      console.log('Window history length:', window.history.length);
      
      // Check React Router state first (most reliable for client-side navigation)
      if (fromPage === '/products/ball-clay') {
        console.log('Navigating back to Ball Clay page (from state)');
        navigate('/products/ball-clay');
        return;
      } else if (fromPage === '/products/kaolin') {
        console.log('Navigating back to Kaolin page (from state)');
        navigate('/products/kaolin');
        return;
      } else if (fromPage === '/products/feldspar') {
        console.log('Navigating back to Feldspar page (from state)');
        navigate('/products/feldspar');
        return;
      } else if (fromPage === '/products/quartz-silica') {
        console.log('Navigating back to Quartz-Silica page (from state)');
        navigate('/products/quartz-silica');
        return;
      } else if (fromPage === '/home#industries') {
        console.log('Navigating back to Industries section (from state)');
        navigate('/home#industries');
        return;
      }
      
      // Fallback to document.referrer for direct URL access
      if (referrer && referrer.includes('/products/ball-clay')) {
        console.log('Navigating back to Ball Clay page (from referrer)');
        navigate('/products/ball-clay');
        return;
      } else if (referrer && referrer.includes('/products/kaolin')) {
        console.log('Navigating back to Kaolin page (from referrer)');
        navigate('/products/kaolin');
        return;
      } else if (referrer && referrer.includes('/products/feldspar')) {
        console.log('Navigating back to Feldspar page (from referrer)');
        navigate('/products/feldspar');
        return;
      } else if (referrer && referrer.includes('/products/quartz-silica')) {
        console.log('Navigating back to Quartz-Silica page (from referrer)');
        navigate('/products/quartz-silica');
        return;
      } else if (referrer && (referrer.includes('/home#industries') || referrer.includes('#industries'))) {
        console.log('Navigating back to Industries section (from referrer)');
        navigate('/home#industries');
        return;
      } else if (window.history.length > 1) {
        console.log('Using browser back navigation');
        navigate(-1);
        return;
      } else {
        console.log('Using fallback to Industries section');
        navigate('/home#industries');
      }
    } catch (error) {
      console.error('Navigation error:', error);
      navigate('/home#industries');
    }
  };

  return (
    <>
      <Helmet>
        <title>Sanitaryware Industry - Precision Clay Solutions for High-Performance Sanitary Ceramics | JLD Minerals</title>
        <meta
          name="description"
          content="JLD Minerals - innovative raw material partner for global sanitaryware industry. Custom-engineered blends for high mechanical strength, whiteness standards in sanitaryware production."
        />
        <link rel="canonical" href="https://jldminerals.com/industries/sanitaryware" />
        <link rel="preload" as="image" href="/assets/Sanitary-Ware.png" />
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
                  Sanitaryware
                </h1>
                
                <div className="w-32 h-px bg-jldBlue mx-auto" />
                
                <h2 className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                  Precision Clay Solutions for High-Performance Sanitary Ceramics
                </h2>
                
                <div className="max-w-4xl mx-auto space-y-6 mt-12">
                  <p className="text-xl text-gray-700 leading-relaxed font-light">
                    At JLD Minerals, we are proud to be one of the most innovative and technically trusted raw material partners for the global sanitaryware industry. Over the years, we have developed custom-engineered blends that have helped manufacturers not only solve critical production issues but also significantly reduce dependency on imported raw materials.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    From toilets and wash basins to cisterns and bathroom fittings, our materials are designed to meet the tight tolerances, high mechanical strength, and whiteness standards required in sanitaryware production.
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
                  Our materials are engineered for:
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
                Each product line requires its own shrinkage profile, firing behavior, and mechanical strength — and our grades are formulated to meet those exact needs.
              </p>
            </div>

            {/* Products - Equal heading size */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Products We Offer for Sanitaryware Manufacturing
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  JLD offers a curated portfolio of high-performance materials tailored for sanitaryware bodies and glazes:
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
                Our materials are available in both wet and dry processed forms, with custom blends developed through close technical collaboration.
              </p>
            </div>

            {/* Technical Expertise - Equal heading size */}
            <div className="mb-32">
              <div className="border-2 border-gray-400 rounded-xl p-10 bg-gray-50">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-light text-jldBlue mb-6">
                    Technical Expertise You Can Trust
                  </h2>
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Our technical teams have worked closely with leading sanitaryware producers across India, Europe, and the Middle East, helping them:
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
                    We provide practical, on-ground technical support backed by deep material science and process insight.
                  </p>
                </div>
              </div>
            </div>

            {/* Specialization & Infrastructure */}
            <div className="mb-32">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Specialization & Infrastructure
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-3 h-3 bg-jldBlue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed text-lg">Custom sanitaryware blends formulated to customer-specific specs</span>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-3 h-3 bg-jldBlue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed text-lg">State-of-the-art wet and dry processing plants for maximum control</span>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-3 h-3 bg-jldBlue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed text-lg">Large, consistent raw material reserves to support long-term supply</span>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-3 h-3 bg-jldBlue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed text-lg">In-house R&D labs to simulate sanitaryware body behavior and optimize results</span>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-xl text-jldBlue italic font-light">
                  We don't offer generic materials — we engineer body performance based on the unique needs of your production line and firing schedule.
                </p>
              </div>
            </div>

            {/* Global Reach - Fixed image path and equal heading size */}
            <div className="mb-16 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-light text-jldBlue mb-6">
                    Global Reach, Proven Performance
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    JLD Minerals powers leading sanitaryware factories in over 25 countries, offering:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-jldRed rounded-full"></div>
                      <span className="text-gray-700">Batch-to-batch consistency</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-jldRed rounded-full"></div>
                      <span className="text-gray-700">Tailored formulations for casting and pressure casting</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-jldRed rounded-full"></div>
                      <span className="text-gray-700">Strong technical documentation and support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-jldRed rounded-full"></div>
                      <span className="text-gray-700">Flexible logistics and reliable delivery models</span>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    Whether you operate a high-volume casting facility or a specialty sanitaryware line, we ensure material reliability that supports operational efficiency.
                  </p>
                </div>
                <div className="py-8 overflow-hidden">
                  <img 
                    src="/assets/Sanitary-Ware.png" 
                    alt="Premium Sanitaryware Manufacturing"
                    className="w-full object-cover max-w-full"
                  />
                </div>
              </div>
            </div>

            {/* Why JLD - 5 cards in one horizontal line without icons */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Why JLD for Sanitaryware?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover what makes JLD Minerals the preferred partner for sanitaryware manufacturers worldwide
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
                  In sanitaryware, performance isn't optional — and neither is consistency.
                </h2>
                
                <p className="text-xl mb-8 opacity-90">
                  Partner with JLD Minerals to elevate your material quality, production reliability, and profitability.
                </p>

                <button 
                  onClick={() => navigate('/contact', { state: { from: '/industries/sanitary-ware' } })}
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

export default SanitarywarePage; 