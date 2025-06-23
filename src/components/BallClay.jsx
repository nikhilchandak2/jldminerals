// Removed motion imports - using CSS fade effects instead
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LazyImage from './shared/LazyImage';
import StandardPlaceholder from './shared/StandardPlaceholder';
import { useHideScrollbar } from '../hooks/useHideScrollbar';

const FINAL_IMAGE_WIDTH = 280;
const FINAL_IMAGE_HEIGHT = 280;

const BallClay = () => {
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
    sessionStorage.removeItem('ballClayImagePosition');
    
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

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
      name: "Refractory", 
      image: "/assets/Refractory.png",
      route: "/industries/refractory"
    }
  ];

  const handleIndustryClick = (route) => {
    // Pass state to indicate where the user came from
    navigate(route, { state: { from: '/products/ball-clay' } });
  };

  const handleBackClick = () => {
    try {
      // Get where user came from via React Router state
      const fromPage = location.state?.from;
      
      // Debug logging
      console.log('BallClay - Back button clicked');
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
      
      // Check document.referrer for initial navigation only
      const referrer = document.referrer;
      if (referrer && referrer.includes('/home') && referrer.includes('#products')) {
        console.log('Using referrer to go back to Products section');
        navigate('/home#products');
        return;
      }
      
      // Default: go to products section of homepage
      // This ensures Ball Clay always goes back to Products section when not coming from an industry page
      console.log('Using fallback to Products section');
      navigate('/home#products');
      
    } catch (error) {
      console.error('Navigation error:', error);
      navigate('/home#products');
    }
  };

  // Mobile Layout
  if (isMobile) {
    return (
      <>
        <Helmet>
          <title>Ball Clay - High-Plasticity Clay for Precision Ceramics | JLD Minerals</title>
          <meta
            name="description"
            content="Premium ball clay from India's largest supplier. Over 50 custom varieties for tiles, sanitaryware, tableware. Global export to 25+ countries with technical support."
          />
          <link rel="canonical" href="https://jldminerals.com/products/ball-clay" />
          <link rel="preload" as="image" href="/assets/ball-clay.webp" />
        </Helmet>

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
                Ball Clay
              </h1>
              <p className="text-lg text-gray-500 mb-4 font-light leading-relaxed">
                High-Plasticity Clay for Precision Ceramics
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto" />
            </div>

            {/* What is Ball Clay - Mobile Optimized */}
            <div 
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-light text-jldBlue mb-4 text-center">
                What is Ball Clay?
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed space-y-3 text-justify">
                <p>
                  Ball clay is a highly plastic, fine-grained natural clay primarily composed of a complex mix of kaolinite, illite, montmorillonite, and other layered silicate minerals. It often contains quartz, feldspathic material, and varying levels of organic matter, which together give it excellent formability, strength, and fired performance.
                </p>
                <p>
                  Ball clay is essential to ceramic body formulations due to its ability to enhance plasticity for shaping, improve green and dry strength, contribute to dimensional accuracy during firing, and balance shrinkage and vitrification. Its fine particle size and mineral balance make it ideal for producing ceramic bodies that are both workable during forming and robust after firing, while also maintaining smooth surfaces and aesthetic clarity.
                </p>
                <p className="font-medium text-jldBlue mb-3">Key Benefits:</p>
                <div className="grid grid-cols-1 gap-2">
                  <div className="p-3 bg-gradient-to-br from-jldBlue/10 to-jldRed/10 rounded-lg border border-jldBlue/20 shadow-sm">
                    <div className="flex items-start">
                      <span className="text-jldBlue mr-2 font-bold text-sm">•</span>
                      <span className="text-xs font-medium text-jldBlue">Enhance plasticity for shaping</span>
                    </div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-jldBlue/10 to-jldRed/10 rounded-lg border border-jldBlue/20 shadow-sm">
                    <div className="flex items-start">
                      <span className="text-jldBlue mr-2 font-bold text-sm">•</span>
                      <span className="text-xs font-medium text-jldBlue">Improve green and dry strength</span>
                    </div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-jldBlue/10 to-jldRed/10 rounded-lg border border-jldBlue/20 shadow-sm">
                    <div className="flex items-start">
                      <span className="text-jldBlue mr-2 font-bold text-sm">•</span>
                      <span className="text-xs font-medium text-jldBlue">Contribute to dimensional accuracy during firing</span>
                    </div>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-jldBlue/10 to-jldRed/10 rounded-lg border border-jldBlue/20 shadow-sm">
                    <div className="flex items-start">
                      <span className="text-jldBlue mr-2 font-bold text-sm">•</span>
                      <span className="text-xs font-medium text-jldBlue">Balance shrinkage and vitrification</span>
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
                Ball Clay at JLD Minerals
              </h2>
              <div className="w-16 h-1 bg-jldRed mx-auto mb-4" />
              
              <div className="text-sm leading-relaxed space-y-3 text-justify">
                <p className="opacity-90">
                  Ball clay is the primary strength of JLD Minerals. We are proud to be the largest supplier of ball clay in India and one of the leading exporters globally.
                </p>
                <p className="opacity-80">
                  With a legacy of over five decades in the ceramic minerals industry, JLD Minerals operates several dedicated ball clay mines across India, strategically located near key ceramic production clusters. We manage the full supply chain — from extraction and beneficiation to testing and formulation — ensuring exceptional consistency and reliability.
                </p>
              </div>
            </div>

            {/* What Sets Our Ball Clay Apart - Mobile Optimized */}
            <div 
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-light text-jldBlue mb-3 text-center">
                What Sets Our Ball Clay Apart?
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-4" />
              
              <p className="text-sm text-gray-600 leading-relaxed mb-4 text-justify">
                Discover the excellence that makes JLD Minerals the preferred choice for premium ball clay solutions
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10">
                  <p className="text-xs leading-relaxed text-gray-700">
                    Over 50 custom-developed varieties of ball clay, curated to meet specific ceramic body requirements
                  </p>
                </div>

                <div className="p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10">
                  <p className="text-xs leading-relaxed text-gray-700">
                    Tailor-made formulations designed for tiles, sanitaryware, tableware, and more
                  </p>
                </div>

                <div className="p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10">
                  <p className="text-xs leading-relaxed text-gray-700">
                    Large-volume production capacity with multiple processing and drying facilities
                  </p>
                </div>

                <div className="p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10">
                  <p className="text-xs leading-relaxed text-gray-700">
                    In-house R&D and technical support to co-engineer body compositions and optimize performance
                  </p>
                </div>

                <div className="p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10">
                  <p className="text-xs leading-relaxed text-gray-700">
                    Strict quality control through multi-stage lab testing and batch monitoring
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed mt-4 text-justify">
                Whether you're looking for super-white clays, low-shrinkage formulations, or fast-firing compatibility, JLD Minerals offers the widest range and deepest expertise in ball clay supply.
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
                Our ball clays are used in a wide range of ceramic and refractory applications:
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

              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Each application has its own performance criteria — and JLD's application-specific ball clay grades are engineered to meet those technical demands.
              </p>
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
                  JLD Minerals exports ball clay to over 25 countries, serving world-class ceramic manufacturers across:
                </p>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {["Asia", "Middle East", "Africa", "Europe"].map((region, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-2 text-center">
                      <span className="text-xs font-medium text-jldBlue">{region}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  We are a trusted global supplier known for logistics reliability, technical support, and product consistency at scale.
                </p>
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
                    <p className="text-justify">Dedicated logistics support for seamless domestic and international dispatches</p>
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
                  At JLD Minerals, we don't just deliver materials — we work as technical partners. Our team collaborates closely with customers to diagnose production challenges, refine formulations, and enhance overall process performance.
                </p>
                <p>
                  Our experts are trained to understand the full ceramic value chain — from raw material behavior to final product outcomes — allowing us to deliver tailored solutions that consistently add value and reduce inefficiencies in both cost and output.
                </p>
                <p>
                  With ball clay at the core of our product portfolio, we continue to lead innovation, performance, and value creation for the global ceramic industry.
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
              
              <p className="text-sm leading-relaxed mb-2 text-justify">
                Looking for the perfect ball clay match for your process?
              </p>
              
              <p className="text-xs leading-relaxed mb-4 opacity-90 text-justify">
                Connect with our technical team for customized guidance and on-ground solutions.
              </p>

              <button
                className="bg-white text-jldBlue px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors active:scale-95"
                onClick={() => navigate('/contact', { state: { from: '/products/ball-clay' } })}
              >
                Contact Our Technical Team
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Ball Clay - High-Plasticity Clay for Precision Ceramics | JLD Minerals</title>
        <meta
          name="description"
          content="Premium ball clay from India's largest supplier. Over 50 custom varieties for tiles, sanitaryware, tableware. Global export to 25+ countries with technical support."
        />
        <link rel="canonical" href="https://jldminerals.com/products/ball-clay" />
        <link rel="preload" as="image" href="/assets/ball-clay.webp" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-futura hide-scrollbar overflow-y-auto">
        {/* Main Content Container */}
        <div
          className="container mx-auto px-6 py-8 hide-scrollbar"
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
                  Ball Clay
                </h1>
                
                <p 
                  className="text-xl md:text-2xl text-gray-500 mb-6 font-light leading-relaxed max-w-3xl"
                >
                  High-Plasticity Clay Engineered for Precision Ceramics
                </p>

                <div 
                  className="w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed"
                />
              </div>
            </div>

            {/* What is Ball Clay */}
            <div className="bg-jldWhite rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-light text-jldBlue mb-6 leading-tight text-center">
                What is Ball Clay?
              </h2>
              
              <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                <p>
                  Ball clay is a highly plastic, fine-grained natural clay primarily composed of a complex mix of kaolinite, illite, montmorillonite, and other layered silicate minerals. It often contains quartz, feldspathic material, and varying levels of organic matter, which together give it excellent formability, strength, and fired performance.
                </p>
                <p>
                  Ball clay is essential to ceramic body formulations due to its ability to enhance plasticity for shaping, improve green and dry strength, contribute to dimensional accuracy during firing, and balance shrinkage and vitrification. Its fine particle size and mineral balance make it ideal for producing ceramic bodies that are both workable during forming and robust after firing, while also maintaining smooth surfaces and aesthetic clarity.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl">
                  <p className="text-base md:text-lg font-medium text-jldBlue">Enhance plasticity for shaping</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl">
                  <p className="text-base md:text-lg font-medium text-jldBlue">Improve green and dry strength</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl">
                  <p className="text-base md:text-lg font-medium text-jldBlue">Contribute to dimensional accuracy during firing</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl">
                  <p className="text-base md:text-lg font-medium text-jldBlue">Balance shrinkage and vitrification</p>
                </div>
              </div>
            </div>

            {/* JLD Minerals Expertise */}
            <div className="bg-gradient-to-r from-jldBlue to-jldBlue/90 rounded-2xl p-8 text-jldWhite shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
                  Ball Clay at JLD Minerals
                </h2>
                <div className="w-24 h-1 bg-jldRed mx-auto mb-4"></div>
                <p className="text-lg md:text-xl font-light opacity-90 max-w-4xl mx-auto leading-relaxed">
                  Ball clay is the primary strength of JLD Minerals. We are proud to be the largest supplier of ball clay in India and one of the leading exporters globally.
                </p>
              </div>

              <p className="text-base md:text-lg leading-relaxed opacity-80 text-center max-w-5xl mx-auto">
                With a legacy of over five decades in the ceramic minerals industry, JLD Minerals operates several dedicated ball clay mines across India, strategically located near key ceramic production clusters. We manage the full supply chain — from extraction and beneficiation to testing and formulation — ensuring exceptional consistency and reliability.
              </p>
            </div>

            {/* What Sets Our Ball Clay Apart - Premium Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-jldBlue/5 via-jldRed/5 to-jldBlue/5 rounded-3xl"></div>
              <div className="relative bg-jldWhite/80 backdrop-blur-sm rounded-3xl p-10 border border-jldBlue/10 shadow-xl">
                <div className="text-center mb-10">
                  <h2 className="text-4xl md:text-5xl font-light text-jldBlue mb-4 leading-tight">
                    What Sets Our Ball Clay Apart?
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-jldBlue via-jldRed to-jldBlue mx-auto mb-6"></div>
                  <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                    Discover the excellence that makes JLD Minerals the preferred choice for premium ball clay solutions
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
                  <div 
                    className="group p-6 bg-gradient-to-br from-jldWhite to-gray-50 rounded-2xl border border-jldBlue/20 hover:border-jldBlue/40 transition-all duration-500 hover:shadow-lg h-56 flex flex-col relative overflow-hidden"
                  >
                    {/* Animated Lines */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-jldBlue to-jldRed"
                      />
                      <div
                        className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-jldBlue to-jldRed"
                      />
                      <div
                        className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-jldBlue to-jldRed"
                      />
                      <div
                        className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-jldBlue to-jldRed"
                      />
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-gray-700 group-hover:text-jldBlue transition-colors duration-300 flex-1 relative z-10">
                      Over 50 custom-developed varieties of ball clay, curated to meet specific ceramic body requirements
                    </p>
                  </div>

                  <div 
                    className="group p-6 bg-gradient-to-br from-jldWhite to-gray-50 rounded-2xl border border-jldBlue/20 hover:border-jldBlue/40 transition-all duration-500 hover:shadow-lg h-56 flex flex-col relative overflow-hidden"
                  >
                    {/* Animated Lines */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-jldBlue to-jldRed"
                      />
                      <div
                        className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-jldBlue to-jldRed"
                      />
                      <div
                        className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-jldBlue to-jldRed"
                      />
                      <div
                        className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-jldBlue to-jldRed"
                      />
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-gray-700 group-hover:text-jldBlue transition-colors duration-300 flex-1 relative z-10">
                      Tailor-made formulations designed for tiles, sanitaryware, tableware, and more
                    </p>
                  </div>

                  <div 
                    className="group p-6 bg-gradient-to-br from-jldWhite to-gray-50 rounded-2xl border border-jldBlue/20 hover:border-jldBlue/40 transition-all duration-500 hover:shadow-lg h-56 flex flex-col relative overflow-hidden"
                  >
                    {/* Animated Lines */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-jldBlue to-jldRed"
                      />
                      <div
                        className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-jldBlue to-jldRed"
                      />
                      <div
                        className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-jldBlue to-jldRed"
                      />
                      <div
                        className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-jldBlue to-jldRed"
                      />
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-gray-700 group-hover:text-jldBlue transition-colors duration-300 flex-1 relative z-10">
                      Large-volume production capacity with multiple processing and drying facilities
                    </p>
                  </div>

                  <div 
                    className="group p-6 bg-gradient-to-br from-jldWhite to-gray-50 rounded-2xl border border-jldBlue/20 hover:border-jldBlue/40 transition-all duration-500 hover:shadow-lg h-56 flex flex-col relative overflow-hidden"
                  >
                    {/* Animated Lines */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-jldBlue to-jldRed"
                      />
                      <div
                        className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-jldBlue to-jldRed"
                      />
                      <div
                        className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-jldBlue to-jldRed"
                      />
                      <div
                        className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-jldBlue to-jldRed"
                      />
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-gray-700 group-hover:text-jldBlue transition-colors duration-300 flex-1 relative z-10">
                      In-house R&D and technical support to co-engineer body compositions and optimize performance
                    </p>
                  </div>

                  <div 
                    className="group p-6 bg-gradient-to-br from-jldWhite to-gray-50 rounded-2xl border border-jldBlue/20 hover:border-jldBlue/40 transition-all duration-500 hover:shadow-lg h-56 flex flex-col relative overflow-hidden"
                  >
                    {/* Animated Lines */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-jldBlue to-jldRed"
                      />
                      <div
                        className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-jldBlue to-jldRed"
                      />
                      <div
                        className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-jldBlue to-jldRed"
                      />
                      <div
                        className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-jldBlue to-jldRed"
                      />
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-gray-700 group-hover:text-jldBlue transition-colors duration-300 flex-1 relative z-10">
                      Strict quality control through multi-stage lab testing and batch monitoring
                    </p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-4xl mx-auto">
                    Whether you're looking for super-white clays, low-shrinkage formulations, or fast-firing compatibility, JLD Minerals offers the widest range and deepest expertise in ball clay supply.
                  </p>
                </div>
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
                  Our ball clays are used in a wide range of ceramic and refractory applications:
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
                        placeholder={
                          <div className="w-full h-32 bg-gray-200 animate-pulse flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-gray-300 border-t-jldBlue rounded-full animate-spin"></div>
                          </div>
                        }
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-jldBlue/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="p-4 text-center">
                      <h3 className="text-base font-light text-jldBlue mb-2 group-hover:text-jldRed transition-colors duration-300">
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
                Each application has its own performance criteria — and JLD's application-specific ball clay grades are engineered to meet those technical demands.
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
                  JLD Minerals exports ball clay to over 25 countries, serving world-class ceramic manufacturers across:
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {["Asia", "Middle East", "Africa", "Europe"].map((region, index) => (
                    <div key={index} className="text-center p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl">
                      <h3 className="text-base font-medium text-jldBlue">{region}</h3>
                    </div>
                  ))}
                </div>

                <p className="text-base text-gray-600 leading-relaxed">
                  We are a trusted global supplier known for logistics reliability, technical support, and product consistency at scale.
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
                      <p className="text-base md:text-lg leading-relaxed">Available in bulk</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-jldRed rounded-full flex-shrink-0 mt-2 mr-3"></div>
                      <p className="text-base md:text-lg leading-relaxed">50 kg bags</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-jldRed rounded-full flex-shrink-0 mt-2 mr-3"></div>
                      <p className="text-base md:text-lg leading-relaxed">1 MT jumbo bags</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-jldRed rounded-full flex-shrink-0 mt-2 mr-3"></div>
                      <p className="text-base md:text-lg leading-relaxed">Dedicated logistics support for seamless domestic and international dispatches</p>
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
                  At JLD Minerals, we don't just deliver materials — we work as technical partners. Our team collaborates closely with customers to diagnose production challenges, refine formulations, and enhance overall process performance.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Our experts are trained to understand the full ceramic value chain — from raw material behavior to final product outcomes — allowing us to deliver tailored solutions that consistently add value and reduce inefficiencies in both cost and output.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  With ball clay at the core of our product portfolio, we continue to lead innovation, performance, and value creation for the global ceramic industry.
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
                Looking for the perfect ball clay match for your process?
              </p>
              
              <p className="text-base md:text-lg leading-relaxed mb-6 opacity-90 max-w-3xl mx-auto">
                Connect with our technical team for customized guidance and on-ground solutions.
              </p>

              <button
                onClick={() => navigate('/contact', { state: { from: '/products/ball-clay' } })}
                className="bg-jldWhite text-jldBlue px-8 py-3 rounded-full font-medium text-base md:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              >
                Contact Our Technical Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BallClay;