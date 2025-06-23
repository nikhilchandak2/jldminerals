// Removed motion imports - using CSS fade effects instead
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LazyImage from './shared/LazyImage';
import StandardPlaceholder from './shared/StandardPlaceholder';
import { useHideScrollbar } from '../hooks/useHideScrollbar';

const FINAL_IMAGE_WIDTH = 280;
const FINAL_IMAGE_HEIGHT = 280;

const QuartzSilicaPage = () => {
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
    sessionStorage.removeItem('quartzSilicaImagePosition');
    
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

  const handleIndustryClick = (route) => {
    // Pass state to indicate where the user came from
    navigate(route, { state: { from: '/products/quartz-silica' } });
  };

  const handleBackClick = () => {
    try {
      // Get where user came from via React Router state
      const fromPage = location.state?.from;
      
      // Debug logging
      console.log('QuartzSilicaPage - Back button clicked');
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
      // This ensures Quartz & Silica always goes back to Products section when not coming from an industry page
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
          <title>Quartz & Silica - High-Purity Silica Solutions for Ceramics & Technical Applications | JLD Minerals</title>
          <meta
            name="description"
            content="High-purity quartz and silica from JLD Minerals. Advanced quartz grits production facility for engineered stone. Global export to 25+ countries with technical support."
          />
          <link rel="canonical" href="https://jldminerals.com/products/quartz-silica" />
          <link rel="preload" as="image" href="/assets/quartz-silica.webp" />
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
                Quartz & Silica
              </h1>
              <p className="text-lg text-gray-500 mb-4 font-light leading-relaxed">
                High-Purity Silica Solutions for Ceramics & Technical Applications
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto" />
            </div>

            {/* What are Quartz & Silica - Mobile Optimized */}
            <div 
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-light text-jldBlue mb-4 text-center">
                What are Quartz & Silica?
              </h2>
              
              <div className="text-sm text-gray-700 leading-relaxed space-y-3 text-justify">
                <p>
                  Quartz is one of the most abundant and versatile natural minerals, composed of crystalline silicon dioxide (SiO₂). When finely processed, quartz is commonly referred to as silica, and it plays a crucial role in the ceramic, glass, and refractory industries.
                </p>
                <p>
                  Silica is primarily extracted directly from natural quartz deposits, but in many cases, it is also found as an overburden layer above ball clay mines — offering unique grain characteristics and diverse industrial use.
                </p>
              </div>
            </div>

            {/* JLD Expertise - Mobile Optimized */}
            <div 
              className="bg-gradient-to-r from-jldBlue to-jldBlue/90 rounded-xl p-6 text-white shadow-lg"
            >
              <h2 className="text-lg font-light mb-3 text-center">
                Quartz & Silica at JLD Minerals
              </h2>
              <div className="w-12 h-1 bg-jldRed mx-auto mb-4" />
              
              <div className="text-sm leading-relaxed space-y-3 text-justify">
                <p>
                  At JLD Minerals, we offer a diverse portfolio of quartz and silica products, ranging from natural lumps and powders to precision-graded quartz grits, tailored for ceramic and technical use.
                </p>
                <p>
                  We hold strategic quartz and silica deposits across Rajasthan, and benefit from extensive silica-bearing formations associated with our ball clay mining operations.
                </p>
              </div>
            </div>

            {/* Quartz Grits - Mobile Optimized */}
            <div 
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-lg font-light text-jldBlue mb-3 text-center">
                Quartz Grits for Engineered Stone
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-4" />
              
              <div className="text-sm text-gray-700 leading-relaxed space-y-3 text-justify">
                <p>
                  JLD Minerals operates one of the most advanced and largest quartz grits production facilities in India, specifically designed for the engineered stone industry.
                </p>
                <p>
                  Our quartz grits are precisely sized and sorted, color-controlled for aesthetic consistency, free from metallic and organic impurities, and optimized for strength, brightness, and resin compatibility.
                </p>
              </div>
            </div>

            {/* Applications - Mobile Optimized */}
            <div 
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-lg font-light text-jldBlue mb-3 text-center">
                Key Applications
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-4" />
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                {industries.map((industry, index) => (
                  <div 
                    key={index}
                    className="group cursor-pointer bg-gray-50 rounded-lg shadow-md overflow-hidden border border-gray-100 hover:border-jldBlue/30 transition-all duration-300"
                    onClick={() => handleIndustryClick(industry.route)}
                  >
                    <div className="relative overflow-hidden">
                      <LazyImage
                        src={industry.image} 
                        alt={industry.name}
                        className="w-full h-20 object-cover group-hover:scale-110 transition-transform duration-500"
                        containerClassName="w-full h-20"
                        placeholder={<StandardPlaceholder className="w-full h-20" />}
                      />
                    </div>
                    
                    <div className="p-2 text-center">
                      <h3 className="text-xs font-light text-jldBlue mb-1 group-hover:text-jldRed transition-colors duration-300 leading-tight">
                        {industry.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-xs text-gray-600 leading-relaxed text-center">
                Each grade is developed for controlled particle size, minimal impurities, and thermal stability across demanding ceramic and thermal processing environments.
              </p>
            </div>

            {/* Global Reach & Supply - Mobile Optimized */}
            <div 
              className="bg-gradient-to-br from-gray-900 to-jldBlue rounded-xl p-6 text-white shadow-lg"
            >
              <h2 className="text-lg font-light mb-3 text-center">
                Global Reach & Supply
              </h2>
              <div className="w-12 h-1 bg-jldRed mx-auto mb-4" />
              
              <div className="text-sm leading-relaxed space-y-3 text-justify">
                <p>
                  JLD Minerals exports quartz and silica to clients in over 25 countries, delivering both bulk and precision products to industries across Asia, Middle East, Africa, and Europe.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-jldRed rounded-full flex-shrink-0 mt-2 mr-3" />
                    <p className="text-justify">Available in bulk, 50 kg bags, and 1 MT jumbo bags</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-jldRed rounded-full flex-shrink-0 mt-2 mr-3" />
                    <p className="text-justify">Supplied in lumps, powders, or grits, depending on the application</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-jldRed rounded-full flex-shrink-0 mt-2 mr-3" />
                    <p className="text-justify">Comprehensive logistics and dispatch support for domestic and international orders</p>
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
                  At JLD Minerals, we combine mineral expertise with customer insight to deliver more than just raw materials. Our technical team works closely with clients to match grades with process requirements, ensure purity standards, and help solve material or production challenges through smart mineral choices.
                </p>
                <p>
                  With access to prime deposits, precision processing, and application-specific R&D, we are a trusted partner to ceramic and engineered stone manufacturers worldwide.
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
                Looking for the right silica or quartz grade for your production line?
              </p>
              
              <p className="text-xs leading-relaxed mb-4 opacity-90 text-justify">
                Reach out to our team for customized recommendations and technical support.
              </p>

              <button
                className="bg-white text-jldBlue px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors active:scale-95"
                onClick={() => navigate('/contact', { state: { from: '/products/quartz-silica' } })}
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
        <title>Quartz & Silica - High-Purity Silica Solutions for Ceramics & Technical Applications | JLD Minerals</title>
        <meta
          name="description"
          content="High-purity quartz and silica from JLD Minerals. Advanced quartz grits production facility for engineered stone. Global export to 25+ countries with technical support."
        />
        <link rel="canonical" href="https://jldminerals.com/products/quartz-silica" />
        <link rel="preload" as="image" href="/assets/quartz-silica.webp" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-futura hide-scrollbar overflow-y-auto">
        {/* Main Content Container */}
        <div
          className="container mx-auto px-6 py-8"
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
                  Quartz & Silica
                </h1>
                
                <p 
                  className="text-xl md:text-2xl text-gray-500 mb-6 font-light leading-relaxed max-w-3xl"
                >
                  High-Purity Silica Solutions for Ceramics & Technical Applications
                </p>

                <div 
                  className="w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed"
                />
              </div>
            </div>

            {/* What are Quartz & Silica */}
            <div className="bg-jldWhite rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-light text-jldBlue mb-6 leading-tight text-center">
                What are Quartz & Silica?
              </h2>
              
              <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                <p>
                  Quartz is one of the most abundant and versatile natural minerals, composed of crystalline silicon dioxide (SiO₂). When finely processed, quartz is commonly referred to as silica, and it plays a crucial role in the ceramic, glass, and refractory industries.
                </p>
                <p>
                  Silica is primarily extracted directly from natural quartz deposits, but in many cases, it is also found as an overburden layer above ball clay mines — offering unique grain characteristics and diverse industrial use.
                </p>
                <p>
                  Quartz and silica are valued for:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl">
                  <p className="text-base md:text-lg font-medium text-jldBlue">High chemical purity</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl">
                  <p className="text-base md:text-lg font-medium text-jldBlue">Thermal resistance and mechanical strength</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl">
                  <p className="text-base md:text-lg font-medium text-jldBlue">Hardness and abrasion resistance</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl">
                  <p className="text-base md:text-lg font-medium text-jldBlue">Low thermal expansion and low reactivity</p>
                </div>
              </div>

              <div className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                <p>
                  Their controlled particle size and consistent chemistry make them indispensable in applications that demand dimensional stability, strength, and precision melting behavior.
                </p>
              </div>
            </div>

            {/* JLD Minerals Expertise */}
            <div className="bg-gradient-to-r from-jldBlue to-jldBlue/90 rounded-2xl p-8 text-jldWhite shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
                  Quartz & Silica at JLD Minerals
                </h2>
                <div className="w-24 h-1 bg-jldRed mx-auto mb-4"></div>
                <p className="text-lg md:text-xl font-light opacity-90 max-w-4xl mx-auto leading-relaxed">
                  At JLD Minerals, we offer a diverse portfolio of quartz and silica products, ranging from natural lumps and powders to precision-graded quartz grits, tailored for ceramic and technical use.
                </p>
              </div>

              <p className="text-base md:text-lg leading-relaxed opacity-80 text-center max-w-5xl mx-auto">
                We hold strategic quartz and silica deposits across Rajasthan, and benefit from extensive silica-bearing formations associated with our ball clay mining operations. This allows us to supply versatile, high-performance silica materials to a wide range of ceramic applications.
              </p>
            </div>

            {/* Quartz Grits Section */}
            <div className="bg-jldWhite rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-light text-jldBlue mb-6 leading-tight text-center">
                Quartz Grits for Engineered Stone
              </h2>
              
              <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                <p>
                  JLD Minerals operates one of the most advanced and largest quartz grits production facilities in India, specifically designed for the engineered stone industry.
                </p>
                <p>
                  Our quartz grits are:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl">
                  <p className="text-base md:text-lg font-medium text-jldBlue">Precisely sized and sorted</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl">
                  <p className="text-base md:text-lg font-medium text-jldBlue">Color-controlled for aesthetic consistency</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl">
                  <p className="text-base md:text-lg font-medium text-jldBlue">Free from metallic and organic impurities</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl">
                  <p className="text-base md:text-lg font-medium text-jldBlue">Optimized for strength, brightness, and resin compatibility</p>
                </div>
              </div>

              <div className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                <p>
                  These grits are ideal for use in quartz countertops, engineered slabs, and composite surfaces, where consistency, whiteness, and purity are non-negotiable.
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
                  Our quartz and silica materials are optimized for performance in:
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
                Each grade is developed for controlled particle size, minimal impurities, and thermal stability across demanding ceramic and thermal processing environments.
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
                  JLD Minerals exports quartz and silica to clients in over 25 countries, delivering both bulk and precision products to industries across:
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center">
                    <p className="text-sm font-medium text-jldBlue">Asia</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center">
                    <p className="text-sm font-medium text-jldBlue">Middle East</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center">
                    <p className="text-sm font-medium text-jldBlue">Africa</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center">
                    <p className="text-sm font-medium text-jldBlue">Europe</p>
                  </div>
                </div>

                <p className="text-base text-gray-600 leading-relaxed">
                  Our clients trust us for material traceability, on-time delivery, and customized product solutions.
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
                      <p className="text-base md:text-lg leading-relaxed">Supplied in lumps, powders, or grits, depending on the application</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-jldRed rounded-full flex-shrink-0 mt-2 mr-3"></div>
                      <p className="text-base md:text-lg leading-relaxed">Comprehensive logistics and dispatch support for domestic and international orders</p>
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
                  At JLD Minerals, we combine mineral expertise with customer insight to deliver more than just raw materials. Our technical team works closely with clients to match grades with process requirements, ensure purity standards, and help solve material or production challenges through smart mineral choices.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  With access to prime deposits, precision processing, and application-specific R&D, we are a trusted partner to ceramic and engineered stone manufacturers worldwide.
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
                Looking for the right silica or quartz grade for your production line?
              </p>
              
              <p className="text-base md:text-lg leading-relaxed mb-6 opacity-90 max-w-3xl mx-auto">
                Reach out to our team for customized recommendations and technical support.
              </p>

              <button
                className="bg-jldWhite text-jldBlue px-8 py-3 rounded-full font-medium text-base md:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
                onClick={() => navigate('/contact', { state: { from: '/products/quartz-silica' } })}
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

export default QuartzSilicaPage;
