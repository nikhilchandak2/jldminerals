// Removed motion imports - using CSS fade effects instead
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LazyImage from './shared/LazyImage';
import StandardPlaceholder from './shared/StandardPlaceholder';
import FeatureCard from './shared/FeatureCard';
import RegionCard from './shared/RegionCard';
import { useHideScrollbar } from '../hooks/useHideScrollbar';
import { containerVariants, itemVariants } from '../utils/animations';

const FINAL_IMAGE_WIDTH = 280;
const FINAL_IMAGE_HEIGHT = 280;

const KaolinPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showContent, setShowContent] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const mobileContainerRef = useRef(null);

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
    
    // Clear any stored position data
    sessionStorage.removeItem('kaolinImagePosition');
    
    // Add product page class to body to override global styles
    document.body.classList.add('product-page');
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      document.body.classList.remove('product-page');
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Set mobile height dynamically
  const setMobileHeight = () => {
    if (mobileContainerRef.current && isMobile) {
      const height = window.innerHeight;
      mobileContainerRef.current.style.height = `${height}px`;
    }
  };

  useEffect(() => {
    if (isMobile) {
      setMobileHeight();
      window.addEventListener('resize', setMobileHeight);
      window.addEventListener('orientationchange', () => {
        setTimeout(setMobileHeight, 100);
      });
      
      return () => {
        window.removeEventListener('resize', setMobileHeight);
        window.removeEventListener('orientationchange', setMobileHeight);
      };
    }
  }, [isMobile]);

  // Industry applications with images and navigation
  const industries = [
    { 
      name: "Tiles", 
      image: "/assets/Tile.png",
      route: "/industries/tiles"
    },
    { 
      name: "Sanitaryware", 
      image: "/assets/Sanitary-Ware.png",
      route: "/industries/sanitary-ware"
    },
    { 
      name: "Tableware", 
      image: "/assets/Table-Ware.png",
      route: "/industries/table-ware"
    },
    { 
      name: "Electrical Porcelain", 
      image: "/assets/Electrical Porcelain.png",
      route: "/industries/electrical-porcelain"
    },
    { 
      name: "Glazes & Engobes", 
      image: "/assets/Engobe and Glaze.png",
      route: "/industries/glazes-engobes"
    },
    { 
      name: "Refractory", 
      image: "/assets/Refractory.png",
      route: "/industries/refractory"
    }
  ];

  const handleBackClick = () => {
    try {
      // Get where user came from via React Router state
      const fromPage = location.state?.from;
      
      // Debug logging
      console.log('KaolinPage - Back button clicked');
      console.log('From page (state):', fromPage);
      console.log('Document referrer:', document.referrer);
      
      // Check React Router state first (most reliable)
      if (fromPage) {
        if (fromPage.includes('/industries/')) {
          console.log('Navigating back to:', fromPage);
          navigate(fromPage);
          return;
        } else if (fromPage === '/home#products' || fromPage.includes('#products')) {
          console.log('Navigating back to Products section');
          navigate('/home#products');
          return;
        }
      }
      
      // Fallback: check document.referrer
      const referrer = document.referrer;
      if (referrer && referrer.includes('/industries/')) {
        console.log('Using referrer to go back to industry page');
        navigate(-1);
        return;
      }
      
      // Default: go to products section of homepage
      console.log('Using fallback to Products section');
      navigate('/home#products');
      
    } catch (error) {
      console.error('Navigation error:', error);
      navigate('/home#products');
    }
  };

  const handleIndustryClick = (route) => {
    // Pass state to indicate where the user came from
    navigate(route, { state: { from: '/products/kaolin' } });
  };

  return (
    <>
      <Helmet>
        <title>Kaolin - High-Purity Hydrated Clay for Ceramic Precision | JLD Minerals</title>
        <meta
          name="description"
          content="High-purity kaolin clay from JLD Minerals. Over 10 unique grades for tiles, sanitaryware, tableware. Global export to 25+ countries with technical support."
        />
        <link rel="canonical" href="https://jldminerals.com/products/kaolin" />
        <link rel="preload" as="image" href="/assets/kaolin.webp" />
      </Helmet>

      {/* Desktop Version */}
              <div className="hidden md:block min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative font-futura hide-scrollbar overflow-y-auto">
        {/* Main Content Container */}
        <div
          className="relative z-20 container mx-auto px-6 py-8 hide-scrollbar"
        >
          <div 
            className="max-w-7xl mx-auto space-y-12"
            initial="hidden"
          >
            {/* Header */}
            <div>
              {/* Logo and Back Button Row */}
              <div className="flex justify-between items-center mb-8">
                <img 
                  src="/assets/jld-logo.png" 
                  alt="JLD Minerals" 
                  className="h-8 w-auto"
                  loading="lazy"
                />
                                  <button 
                    onClick={handleBackClick}
                  className="text-gray-600 hover:text-jldBlue transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
                >
                  <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
                  <span>Back to Products</span>
                </button>
              </div>

              {/* Title Section */}
              <div className="mb-16 mt-12">
                <h1 
                  className="text-5xl md:text-7xl font-light text-jldBlue mb-4 leading-none tracking-tight"
                >
                  Kaolin
                </h1>
                
                <p 
                  className="text-xl md:text-2xl text-gray-500 mb-6 font-light leading-relaxed max-w-3xl"
                >
                  High-Purity Hydrated Clay Tailored for Ceramic Precision
                </p>

                <div 
                  className="w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed"
                />
              </div>
            </div>

            {/* What is Kaolin */}
            <div className="bg-jldWhite rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-light text-jldBlue mb-6 leading-tight text-center">
                What is Kaolin?
              </h2>
              
              <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                <p>
                  Kaolin, also known as china clay, is a soft, white clay primarily composed of the mineral kaolinite — a hydrous aluminum silicate formed through the natural weathering of feldspathic rocks. It is valued in ceramics for its whiteness, chemical inertness, low plasticity, and excellent thermal stability.
                </p>
                <p>
                  Kaolin plays a vital role in ceramic body formulations by:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FeatureCard>
                  <p className="text-base md:text-lg font-medium text-jldBlue">Providing whiteness and translucency</p>
                </FeatureCard>
                <FeatureCard>
                  <p className="text-base md:text-lg font-medium text-jldBlue">Controlling thermal expansion and shrinkage</p>
                </FeatureCard>
                <FeatureCard>
                  <p className="text-base md:text-lg font-medium text-jldBlue">Acting as a filler to enhance mechanical strength</p>
                </FeatureCard>
                <FeatureCard>
                  <p className="text-base md:text-lg font-medium text-jldBlue">Supporting glaze bonding and surface smoothness</p>
                </FeatureCard>
              </div>

              <div className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                <p>
                  Its low impurity levels and firing reliability make it ideal for a wide range of technical and decorative ceramic applications.
                </p>
              </div>
            </div>

            {/* JLD Minerals Expertise */}
            <div className="bg-gradient-to-r from-jldBlue to-jldBlue/90 rounded-2xl p-8 text-jldWhite shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
                  Kaolin at JLD Minerals
                </h2>
                <div className="w-24 h-1 bg-jldRed mx-auto mb-4"></div>
                <p className="text-lg md:text-xl font-light opacity-90 max-w-4xl mx-auto leading-relaxed">
                  At JLD Minerals, kaolin is an integral part of our ceramic raw materials portfolio. We offer a diverse selection of high-purity kaolins, sourced and processed through carefully vetted supply channels, ensuring consistent quality and application-specific performance.
                </p>
              </div>

              <p className="text-base md:text-lg leading-relaxed opacity-80 text-center max-w-5xl mx-auto">
                Our portfolio includes over 10 unique kaolin grades, ranging from raw kaolin clays to engineered, refined kaolins designed to meet stringent demands of various ceramic and industrial applications.
              </p>

              <div className="mt-6 text-base md:text-lg leading-relaxed opacity-80 text-center max-w-5xl mx-auto">
                <p>
                  Whether your requirement is for whiteness, casting behavior, controlled particle size, or thermal resistance, we offer both standard and tailor-made kaolins to match your production needs.
                </p>
              </div>
            </div>

            {/* Applications */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-light text-jldBlue mb-4 leading-tight">
                  Key Applications
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-4"></div>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  Our kaolin grades are trusted across a variety of technical and decorative ceramic industries, including:
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {industries.map((industry, index) => (
                  <div 
                    key={index}
                    className="group cursor-pointer bg-jldWhite rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:border-jldBlue/30 transition-all duration-500 w-48"
                    onClick={() => handleIndustryClick(industry.route)}
                  >
                    <div className="relative overflow-hidden">
                      <LazyImage
                        src={industry.image} 
                        alt={industry.name}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-700"
                        containerClassName="w-full h-32"
                        placeholder={<StandardPlaceholder className="w-full h-32" />}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-jldBlue/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="p-4 text-center">
                      <h3 className="text-sm font-light text-jldBlue mb-2 group-hover:text-jldRed transition-colors duration-300 leading-tight">
                        {industry.name}
                      </h3>
                      <div className="flex items-center justify-center text-jldBlue group-hover:text-jldRed transition-colors duration-300">
                        <span className="font-medium tracking-wide text-xs">Explore Industry</span>
                        <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
                JLD kaolins are chosen for their purity, particle control, and compatibility with fast-firing cycles, helping clients achieve high-performance bodies and defect-free finishes.
              </p>
            </div>

            {/* Global Reach & Supply */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Global Reach */}
              <div className="bg-jldWhite rounded-xl p-6 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-light text-jldBlue mb-4 leading-tight">
                  Global Reach
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-jldBlue to-jldRed mb-4"></div>
                
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                  JLD Minerals exports kaolin to clients in over 25 countries, with reliable logistics and dedicated technical support across:
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {["Asia", "Middle East", "Africa", "Europe"].map((region, index) => (
                    <RegionCard key={index}>{region}</RegionCard>
                  ))}
                </div>

                <p className="text-base text-gray-600 leading-relaxed">
                  We are known globally for our consistency, reliability, and responsive supply systems that meet production-scale requirements.
                </p>
              </div>

              {/* Packaging & Supply */}
              <div className="bg-gradient-to-br from-gray-900 to-jldBlue rounded-xl p-6 text-jldWhite flex flex-col shadow-xl">
                <h2 className="text-2xl md:text-3xl font-light mb-4 leading-tight">
                  Packaging & Supply
                </h2>
                <div className="w-16 h-1 bg-jldRed mb-4"></div>
                
                <div className="flex-1 flex items-center">
                  <div className="space-y-3 w-full">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-jldRed rounded-full flex-shrink-0 mt-2 mr-3"></div>
                      <p className="text-base md:text-lg leading-relaxed">Available in bulk, 50 kg bags, and 1 MT jumbo bags</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-jldRed rounded-full flex-shrink-0 mt-2 mr-3"></div>
                      <p className="text-base md:text-lg leading-relaxed">Dedicated logistics support for seamless domestic and export shipments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership */}
            <div className="bg-jldWhite rounded-xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-light text-jldBlue mb-4 leading-tight">
                  Partnering Beyond Supply
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-4"></div>
              </div>

              <div className="space-y-4 max-w-5xl mx-auto text-justify">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  At JLD Minerals, we believe material performance begins with deep understanding. Our experts work alongside clients to analyze process challenges, refine body formulations, and optimize end-product quality.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Our team's technical insight and field knowledge allow us to deliver practical, plant-level solutions — whether you're troubleshooting a performance issue or seeking formulation cost-efficiencies. Our goal is not just to supply kaolin — but to strengthen your process and product outcomes.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-jldBlue to-jldRed rounded-xl p-8 text-jldWhite text-center shadow-xl">
              <h2 className="text-3xl md:text-4xl font-light mb-4 leading-tight">
                Consult Our Experts
              </h2>
              <div className="w-24 h-1 bg-jldWhite mx-auto mb-4"></div>
              
              <p className="text-lg md:text-xl leading-relaxed mb-2">
                Looking for the right kaolin for your ceramic or technical application?
              </p>
              
              <p className="text-base md:text-lg leading-relaxed mb-6 opacity-90 max-w-3xl mx-auto">
                Reach out to our experts for tailored recommendations and technical insights.
              </p>

              <button
                onClick={() => navigate('/contact', { state: { from: '/products/kaolin' } })}
                className="bg-jldWhite text-jldBlue px-8 py-3 rounded-full font-medium text-base md:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              >
                Contact Our Technical Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      {isMobile && (
      <div 
        ref={mobileContainerRef}
          className="bg-gradient-to-br from-gray-50 to-blue-50 overflow-y-auto font-futura"
      >
        {/* Mobile Header */}
        <div 
          className="flex justify-between items-center p-4 pt-8"
        >
          <img 
            src="/assets/jld-logo.png" 
            alt="JLD Minerals" 
            className="h-6 w-auto"
            loading="lazy"
          />
                      <button 
              onClick={handleBackClick}
              className="text-gray-600 hover:text-jldBlue transition-colors text-sm font-medium flex items-center gap-1"
            >
            <span>←</span>
            <span>Back</span>
          </button>
        </div>

        {/* Mobile Content */}
        <div className="px-4 pb-8 space-y-6">
          {/* Title Section */}
          <div 
            className="text-center"
          >
            <h1 className="text-4xl font-light text-jldBlue mb-2 leading-tight">
              Kaolin
            </h1>
            <p className="text-lg text-gray-500 mb-4 font-light leading-relaxed">
              High-Purity Hydrated Clay for Ceramic Precision
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto" />
          </div>

          {/* What is Kaolin - Mobile Optimized */}
          <div 
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-light text-jldBlue mb-4 text-center">
              What is Kaolin?
            </h2>
            
            <div className="text-sm text-gray-700 leading-relaxed space-y-3 text-justify">
              <p>
                Kaolin, also known as china clay, is a soft, white clay primarily composed of the mineral kaolinite — a hydrous aluminum silicate formed through the natural weathering of feldspathic rocks. It is valued in ceramics for its whiteness, chemical inertness, low plasticity, and excellent thermal stability.
              </p>
              <p>
                Kaolin plays a vital role in ceramic body formulations by providing whiteness and translucency, controlling thermal expansion and shrinkage, acting as a filler to enhance mechanical strength, and supporting glaze bonding and surface smoothness. Its low impurity levels and firing reliability make it ideal for technical and decorative ceramic applications.
              </p>
              <p className="font-medium text-jldBlue mb-3">Key Benefits:</p>
              <div className="grid grid-cols-1 gap-2">
                <div className="p-3 bg-gradient-to-br from-jldBlue/10 to-jldRed/10 rounded-lg border border-jldBlue/20 shadow-sm">
                  <div className="flex items-start">
                    <span className="text-jldBlue mr-2 font-bold text-sm">•</span>
                    <span className="text-xs font-medium text-jldBlue">Provides whiteness and translucency</span>
                  </div>
                </div>
                <div className="p-3 bg-gradient-to-br from-jldBlue/10 to-jldRed/10 rounded-lg border border-jldBlue/20 shadow-sm">
                  <div className="flex items-start">
                    <span className="text-jldBlue mr-2 font-bold text-sm">•</span>
                    <span className="text-xs font-medium text-jldBlue">Controls thermal expansion and shrinkage</span>
                  </div>
                </div>
                <div className="p-3 bg-gradient-to-br from-jldBlue/10 to-jldRed/10 rounded-lg border border-jldBlue/20 shadow-sm">
                  <div className="flex items-start">
                    <span className="text-jldBlue mr-2 font-bold text-sm">•</span>
                    <span className="text-xs font-medium text-jldBlue">Acts as a filler to enhance mechanical strength</span>
                  </div>
                </div>
                <div className="p-3 bg-gradient-to-br from-jldBlue/10 to-jldRed/10 rounded-lg border border-jldBlue/20 shadow-sm">
                  <div className="flex items-start">
                    <span className="text-jldBlue mr-2 font-bold text-sm">•</span>
                    <span className="text-xs font-medium text-jldBlue">Supports glaze bonding and surface smoothness</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* JLD Expertise - Mobile Optimized */}
          <div 
            className="bg-gradient-to-r from-jldBlue to-jldBlue/90 rounded-xl p-6 text-white"
          >
            <h2 className="text-xl font-light mb-3 text-center">
              Kaolin at JLD Minerals
            </h2>
            <div className="w-16 h-1 bg-jldRed mx-auto mb-4" />
            
            <div className="text-sm leading-relaxed space-y-3 text-justify">
              <p className="opacity-90">
                JLD Minerals offers over 10 unique kaolin grades, from raw clays to engineered, refined kaolins for ceramic and industrial applications. With decades of experience in mineral processing, we provide consistent, high-quality kaolins tailored to specific industry needs.
              </p>
              <p className="opacity-80">
                Our portfolio includes standard and tailor-made kaolins for whiteness, casting behavior, particle size control, and thermal resistance. We manage the full supply chain — from extraction and beneficiation to testing and formulation — ensuring exceptional consistency and reliability across all grades.
              </p>
            </div>
          </div>

          {/* What Sets Our Kaolin Apart - Mobile Optimized */}
          <div 
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-light text-jldBlue mb-3 text-center">
              What Sets Our Kaolin Apart?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-4" />
            
            <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
              Discover the excellence that makes JLD Minerals the preferred choice for premium kaolin solutions
            </p>

            <div className="space-y-3">
              <div className="p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10">
                <p className="text-xs leading-relaxed text-gray-700">
                  Over 10 unique kaolin grades, from raw clays to engineered, refined kaolins for ceramic precision
                </p>
              </div>

              <div className="p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10">
                <p className="text-xs leading-relaxed text-gray-700">
                  Tailor-made formulations for whiteness, casting behavior, particle size control, and thermal resistance
                </p>
              </div>

              <div className="p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10">
                <p className="text-xs leading-relaxed text-gray-700">
                  Advanced processing facilities with consistent quality control and batch monitoring
                </p>
              </div>

              <div className="p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10">
                <p className="text-xs leading-relaxed text-gray-700">
                  In-house R&D and technical support to optimize kaolin performance in ceramic applications
                </p>
              </div>

              <div className="p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10">
                <p className="text-xs leading-relaxed text-gray-700">
                  Strict quality control through multi-stage lab testing and chemical analysis
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed mt-4 text-justify">
              Whether you're looking for high-whiteness clays, low-impurity formulations, or specialized grades for technical ceramics, JLD Minerals offers the widest range and deepest expertise in kaolin supply.
            </p>
          </div>

          {/* Applications - Mobile Grid */}
          <div
          >
            <h2 className="text-xl font-light text-jldBlue mb-3 text-center">
              Key Applications
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-4" />
            
            <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
              Our kaolins are used in a wide range of ceramic and technical applications:
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              {industries.slice(0, 6).map((industry, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 active:scale-95 transition-transform"
                  onClick={() => handleIndustryClick(industry.route)}
                >
                  <LazyImage
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-20 object-cover"
                    containerClassName="w-full h-20"
                    placeholder={<StandardPlaceholder className="w-full h-20" />}
                  />
                  
                  <div className="p-3">
                    <h3 className="text-xs font-medium text-jldBlue leading-tight text-center">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Global Reach & Supply - Mobile Combined */}
          <div 
            className="space-y-4"
          >
            {/* Global Reach */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-lg font-light text-jldBlue mb-3 text-center">
                Global Reach
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-4" />
              
              <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
                Exported to 25+ countries across Asia, Middle East, Africa, and Europe.
              </p>

              <div className="grid grid-cols-2 gap-2">
                {["Asia", "Middle East", "Africa", "Europe"].map((region, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-jldBlue">{region}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging */}
            <div className="bg-gradient-to-br from-gray-900 to-jldBlue rounded-xl p-6 text-white">
              <h2 className="text-lg font-light mb-3 text-center">
                Packaging & Supply
              </h2>
              <div className="w-12 h-1 bg-jldRed mx-auto mb-4" />
              
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-jldRed rounded-full flex-shrink-0 mt-2 mr-3" />
                  <p className="text-justify">Available in bulk, 50 kg bags, and 1 MT jumbo bags</p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-jldRed rounded-full flex-shrink-0 mt-2 mr-3" />
                  <p className="text-justify">Dedicated logistics for domestic and export shipments</p>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership - Mobile Optimized */}
          <div 
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-lg font-light text-jldBlue mb-3 text-center">
              Partnering Beyond Supply
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-4" />
            
            <div className="text-sm text-gray-700 leading-relaxed space-y-3 text-justify">
              <p>
                Our experts work with clients to analyze process challenges, refine formulations, and optimize product quality.
              </p>
              <p>
                We deliver practical, plant-level solutions for performance issues and cost-efficiencies.
              </p>
            </div>
          </div>

          {/* CTA - Mobile Optimized */}
          <div 
            className="bg-gradient-to-r from-jldBlue to-jldRed rounded-xl p-6 text-white text-center"
          >
            <h2 className="text-lg font-light mb-3">
              Consult Our Experts
            </h2>
            <div className="w-12 h-1 bg-white mx-auto mb-4" />
            
            <p className="text-sm leading-relaxed mb-4 opacity-90 text-justify">
              Looking for the right kaolin for your application? Reach out for tailored recommendations.
            </p>

            <button
              className="bg-white text-jldBlue px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors active:scale-95"
              onClick={() => navigate('/contact')}
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default KaolinPage;