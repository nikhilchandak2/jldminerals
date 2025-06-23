import React, { useEffect, useState } from 'react';
// Removed motion imports - using CSS fade effects instead
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation } from 'react-router-dom';
import { useHideScrollbar } from '../../hooks/useHideScrollbar';

const TilesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useHideScrollbar();

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
    
    // Apply immediate scrollbar hiding styles
    document.body.style.msOverflowStyle = 'none';
    document.body.style.scrollbarWidth = 'none';
    document.documentElement.style.msOverflowStyle = 'none';
    document.documentElement.style.scrollbarWidth = 'none';
    
    // Add webkit scrollbar hiding immediately
    const style = document.createElement('style');
    style.id = 'hide-scrollbar-immediate';
    style.textContent = `
      body::-webkit-scrollbar,
      html::-webkit-scrollbar,
      *::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
    `;
    document.head.appendChild(style);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      document.body.classList.remove('product-page');
      // Reset scrollbar styles
      document.body.style.msOverflowStyle = '';
      document.body.style.scrollbarWidth = '';
      document.documentElement.style.msOverflowStyle = '';
      document.documentElement.style.scrollbarWidth = '';
      // Remove webkit styles
      const immediateStyle = document.getElementById('hide-scrollbar-immediate');
      if (immediateStyle) {
        document.head.removeChild(immediateStyle);
      }
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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

  const handleBackClick = () => {
    try {
      // Get where user came from via React Router state
      const fromPage = location.state?.from;
      
      // Debug logging
      console.log('TilesPage - Back button clicked');
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
        <title>Tiles Industry - Engineered Clay Solutions for Every Tile Imaginable | JLD Minerals</title>
        <meta
          name="description"
          content="JLD Minerals - trusted leader in global ceramic tile industry. Premium ball clay, kaolin, feldspar & quartz solutions for all tile types. 25+ countries served."
        />
        <link rel="canonical" href="https://jldminerals.com/industries/tiles" />
        <link rel="preload" as="image" href="/assets/Tile.png" />
      </Helmet>

            <div className="min-h-screen bg-white overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <header className="flex justify-between items-center mb-6 md:mb-8">
              <img 
                src="/assets/jld-logo.png" 
                alt="JLD Minerals" 
                className="h-6 md:h-8 w-auto"
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

            {/* Hero Section - Responsive */}
            <div className="min-h-[60vh] md:min-h-screen flex flex-col justify-center items-center text-center mb-16 md:mb-24 xl:mb-32 md:-mt-14">
              <div className="max-w-6xl mx-auto space-y-6 md:space-y-8 xl:space-y-10 px-4 xl:px-6 2xl:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extralight text-jldBlue tracking-tight leading-none">
                  Tiles
                </h1>
                
                <div className="w-24 md:w-32 xl:w-40 2xl:w-48 h-px bg-jldBlue mx-auto" />
                
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 font-light leading-relaxed tracking-wide max-w-4xl mx-auto px-4">
                  Engineered Clay Solutions for Every Tile Imaginable
                </h2>
                
                <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 xl:space-y-8 mt-8 md:mt-12 xl:mt-16 px-4">
                  <p className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-700 leading-relaxed font-light text-justify">
                    At JLD Minerals, tiles are not just a segment — they are our legacy. As one of the most trusted names in the global ceramic tile industry, JLD is synonymous with innovation, consistency, and problem-solving in tile body formulation and raw material engineering.
                  </p>
                  <p className="text-sm md:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed text-justify">
                    We proudly cater to every type of tile produced worldwide, offering tailored raw material solutions designed to meet the unique firing cycles, mechanical properties, and aesthetic demands of each format.
                  </p>
                </div>
              </div>
            </div>

            {/* Tile Types Grid - Responsive */}
            <div className="space-responsive-lg">
              <div className="text-center space-responsive-sm">
                <div className="responsive-container">
                  <h2 className="text-responsive-title font-light text-jldBlue space-responsive-sm">
                    Types of Tiles We Serve
                  </h2>
                  <p className="text-responsive-body text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
                    Our specialized clays and mineral blends are used in manufacturing:
                  </p>
                </div>
              </div>

              <div className="responsive-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-responsive-xs space-responsive-sm">
                  {tileTypes.map((tile, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="border-l-2 border-gray-200 pl-responsive-xs py-responsive-xs transition-all duration-500 group-hover:border-jldBlue">
                        <h3 className="text-responsive-body font-medium text-gray-800 mb-2 transition-colors duration-300 group-hover:text-jldBlue">
                          {tile.name}
                        </h3>
                        <p className="text-gray-600 text-responsive-body leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300 text-justify">
                          {tile.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-center text-gray-600 max-w-4xl mx-auto italic text-responsive-body text-justify mt-responsive-sm">
                  We offer custom-developed ball clay varieties for each of these segments — ensuring the right balance of plasticity, whiteness, dry strength, and thermal behavior for your exact process.
                </p>
              </div>
            </div>

            {/* Products - Responsive */}
            <div className="space-responsive-lg">
              <div className="text-center space-responsive-sm">
                <div className="responsive-container">
                  <h2 className="text-responsive-title font-light text-jldBlue space-responsive-sm">
                    Products We Offer for Tile Manufacturing
                  </h2>
                  <p className="text-responsive-body text-gray-600 max-w-3xl mx-auto text-justify">
                    To serve the needs of the tile industry, JLD offers a comprehensive range of premium ceramic raw materials:
                  </p>
                </div>
              </div>

              <div className="responsive-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-responsive-sm space-responsive-sm">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="bg-white p-responsive-sm rounded-lg border border-gray-200 hover:border-jldRed hover:shadow-md transition-all duration-300 flex flex-col text-center h-full"
                    >
                      <div className="mb-responsive-xs">
                        <h3 className="text-responsive-body font-semibold text-jldBlue mb-1">{product.name}</h3>
                        <span className="text-responsive-body text-gray-500 uppercase tracking-wide opacity-75">{product.subtitle}</span>
                      </div>
                      <p className="text-responsive-body text-gray-700 mb-responsive-xs leading-relaxed text-center">
                        {product.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-responsive-xs flex-grow">
                        {product.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="text-responsive-body border border-gray-200 px-responsive-xs py-responsive-xs rounded-lg text-center text-gray-700 font-medium shadow-sm hover:shadow-md transition-all duration-200 min-h-[2.5rem] flex items-center justify-center leading-tight"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="w-32 md:w-40 xl:w-48 2xl:w-56 h-32 md:h-40 xl:h-48 2xl:h-56 flex-shrink-0 mx-auto mt-auto">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-center text-gray-600 italic max-w-4xl mx-auto text-responsive-body text-justify mt-responsive-sm">
                  These materials are available in powder, lump, or chip form, and can be customized to match your body recipe and kiln conditions.
                </p>
              </div>
            </div>

            {/* Technical Expertise - Responsive */}
            <div className="mb-16 md:mb-32">
              <div className="border-2 border-gray-400 rounded-xl p-6 md:p-10 bg-gray-50">
                <div className="text-center mb-6 md:mb-10 px-4">
                  <h2 className="text-2xl md:text-4xl font-light text-jldBlue mb-4 md:mb-6">
                    Deep Technical Expertise
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed text-justify">
                    Our in-house technical and R&D teams bring decades of hands-on experience in tile body formulation, fast firing cycles, and large-format tile production. We work closely with production plants to:
                  </p>
                </div>

                <div className="max-w-5xl mx-auto mb-6 md:mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {capabilities.map((capability, index) => (
                      <div key={index} className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-white rounded-xl border-2 border-gray-200 shadow-sm">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-jldRed rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed text-sm md:text-lg">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center px-4">
                  <p className="text-base md:text-xl text-jldBlue italic font-light">
                    We don't just supply raw materials — we deliver engineered ceramic solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Global Reach - Responsive */}
            <div className="mb-16 md:mb-32 py-4 md:py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="px-4">
                  <h2 className="text-2xl md:text-4xl font-light text-jldBlue mb-4 md:mb-6">
                    Global Reach, Local Precision
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                    JLD Minerals is a key supplier to numerous tile factories across India and 25+ countries, supporting manufacturers with both standardized and tailor-made solutions. Our ability to deliver batch-to-batch consistency, tight particle control, and application-specific support makes us the partner of choice for high-performance tile production.
                  </p>
                </div>
                <div className="py-4 md:py-8 overflow-hidden px-4 md:px-0">
                  <img 
                    src="/assets/Tile.png" 
                    alt="Premium Ceramic Tiles Manufacturing"
                    className="w-full object-cover max-w-full h-64 sm:h-80 md:h-auto rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Why JLD - Responsive */}
            <div className="mb-16 md:mb-32">
              <div className="text-center mb-8 md:mb-12 px-4">
                <h2 className="text-2xl md:text-4xl font-light text-jldBlue mb-4 md:mb-6">
                  Why JLD for Tiles?
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto text-justify">
                  Discover what makes JLD Minerals the preferred partner for ceramic tile manufacturers worldwide
                </p>
              </div>

              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                  {whyJLD.map((item, index) => (
                    <div
                      key={index}
                      className="relative bg-white p-4 md:p-6 rounded-2xl border-2 border-gray-200 hover:border-jldBlue transition-colors duration-300 text-center overflow-hidden h-full flex flex-col min-h-[120px] md:min-h-[140px]"
                    >
                      {/* Smart bar accent */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-jldBlue to-jldRed"></div>
                      
                      {/* Content */}
                      <h3 className="text-sm md:text-base font-semibold text-jldBlue mb-2 md:mb-3">
                        {item.title}  
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-xs md:text-sm text-center flex-grow flex items-center justify-center">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Final Statement - Responsive */}
            <div className="responsive-container">
              <div className="bg-gradient-to-r from-jldBlue to-jldRed rounded-2xl p-responsive-md text-center text-white">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-responsive-title font-light space-responsive-sm">
                    When it comes to tiles — JLD doesn't just follow trends, we help define them.
                  </h2>
                  
                  <p className="text-responsive-body space-responsive-sm opacity-90 text-justify">
                    Let our team help you unlock better performance, lower costs, and higher consistency in your tile production.
                  </p>

                  <button 
                    onClick={() => navigate('/contact', { state: { from: '/industries/tiles' } })}
                    className="bg-white text-jldBlue px-responsive-sm py-responsive-xs rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 text-responsive-body"
                  >
                    Partner With JLD Minerals
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </>
  );
};

export default TilesPage;