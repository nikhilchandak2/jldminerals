import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LazyImage from './shared/LazyImage';

const FINAL_IMAGE_WIDTH = 280;
const FINAL_IMAGE_HEIGHT = 280;

const BallClay = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // Clear any stored position data
    sessionStorage.removeItem('ballClayImagePosition');
    
    // Hide scrollbar with CSS
    const style = document.createElement('style');
    style.textContent = `
      .hide-scrollbar {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
      }
      .hide-scrollbar::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup function to remove style when component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
      route: "/industries/sanitaryware"
    },
    { 
      name: "Tableware", 
      image: "/assets/Table-Ware.png",
      route: "/industries/tableware"
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
    navigate(route);
  };

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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden font-futura hide-scrollbar">
        {/* Main Content Container */}
        <motion.div
          className="relative z-20 container mx-auto px-6 py-8 hide-scrollbar"
          style={{ height: '100vh', overflowY: 'scroll' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="max-w-7xl mx-auto space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
          >
            {/* Header */}
            <motion.div variants={itemVariants}>
              {/* Logo and Back Button Row */}
              <div className="flex justify-between items-center mb-8">
                <motion.img 
                  src="/assets/jld-logo.png" 
                  alt="JLD Minerals" 
                  className="h-6 w-auto"
                  loading="lazy"
                />
                <motion.button 
                  onClick={() => {
                    navigate('/home');
                    // Use ReactFullpage API to navigate to OurProducts section (index 3)
                    setTimeout(() => {
                      if (window.fullpage_api) {
                        window.fullpage_api.moveTo(4); // Section 4 (OurProducts is at index 3, but fullpage uses 1-based indexing)
                      }
                    }, 100);
                  }}
                  className="text-gray-600 hover:text-jldBlue transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
                  <span>Back to Products</span>
                </motion.button>
              </div>

              {/* Title Section */}
              <div className="mb-16">
                <motion.h1 
                  className="text-5xl md:text-7xl font-light text-jldBlue mb-4 leading-none tracking-tight"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Ball Clay
                </motion.h1>
                
                <motion.p 
                  className="text-xl md:text-2xl text-gray-500 mb-6 font-light leading-relaxed max-w-3xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  High-Plasticity Clay Engineered for Precision Ceramics
                </motion.p>

                <motion.div 
                  className="w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            </motion.div>

            {/* What is Ball Clay */}
            <motion.div variants={itemVariants} className="bg-jldWhite rounded-2xl p-8 shadow-xl">
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
            </motion.div>

            {/* JLD Minerals Expertise */}
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-jldBlue to-jldBlue/90 rounded-2xl p-8 text-jldWhite shadow-xl">
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
            </motion.div>

            {/* What Sets Our Ball Clay Apart - Premium Section */}
            <motion.div variants={itemVariants} className="relative">
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
                  <motion.div 
                    className="group p-6 bg-gradient-to-br from-jldWhite to-gray-50 rounded-2xl border border-jldBlue/20 hover:border-jldBlue/40 transition-all duration-500 hover:shadow-lg h-56 flex flex-col relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Animated Lines */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.div
                        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-jldBlue to-jldRed"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        style={{ transformOrigin: 'left' }}
                      />
                      <motion.div
                        className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-jldBlue to-jldRed"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ transformOrigin: 'top' }}
                      />
                      <motion.div
                        className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-jldBlue to-jldRed"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        style={{ transformOrigin: 'right' }}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-jldBlue to-jldRed"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        style={{ transformOrigin: 'bottom' }}
                      />
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-gray-700 group-hover:text-jldBlue transition-colors duration-300 flex-1 relative z-10">
                      Over 50 custom-developed varieties of ball clay, curated to meet specific ceramic body requirements
                    </p>
                  </motion.div>

                  <motion.div 
                    className="group p-6 bg-gradient-to-br from-jldWhite to-gray-50 rounded-2xl border border-jldBlue/20 hover:border-jldBlue/40 transition-all duration-500 hover:shadow-lg h-56 flex flex-col relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Animated Lines */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.div
                        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-jldBlue to-jldRed"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        style={{ transformOrigin: 'left' }}
                      />
                      <motion.div
                        className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-jldBlue to-jldRed"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ transformOrigin: 'top' }}
                      />
                      <motion.div
                        className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-jldBlue to-jldRed"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        style={{ transformOrigin: 'right' }}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-jldBlue to-jldRed"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        style={{ transformOrigin: 'bottom' }}
                      />
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-gray-700 group-hover:text-jldBlue transition-colors duration-300 flex-1 relative z-10">
                      Tailor-made formulations designed for tiles, sanitaryware, tableware, and more
                    </p>
                  </motion.div>

                  <motion.div 
                    className="group p-6 bg-gradient-to-br from-jldWhite to-gray-50 rounded-2xl border border-jldBlue/20 hover:border-jldBlue/40 transition-all duration-500 hover:shadow-lg h-56 flex flex-col relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Animated Lines */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.div
                        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-jldBlue to-jldRed"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        style={{ transformOrigin: 'left' }}
                      />
                      <motion.div
                        className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-jldBlue to-jldRed"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ transformOrigin: 'top' }}
                      />
                      <motion.div
                        className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-jldBlue to-jldRed"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        style={{ transformOrigin: 'right' }}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-jldBlue to-jldRed"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        style={{ transformOrigin: 'bottom' }}
                      />
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-gray-700 group-hover:text-jldBlue transition-colors duration-300 flex-1 relative z-10">
                      Large-volume production capacity with multiple processing and drying facilities
                    </p>
                  </motion.div>

                  <motion.div 
                    className="group p-6 bg-gradient-to-br from-jldWhite to-gray-50 rounded-2xl border border-jldBlue/20 hover:border-jldBlue/40 transition-all duration-500 hover:shadow-lg h-56 flex flex-col relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Animated Lines */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.div
                        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-jldBlue to-jldRed"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        style={{ transformOrigin: 'left' }}
                      />
                      <motion.div
                        className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-jldBlue to-jldRed"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ transformOrigin: 'top' }}
                      />
                      <motion.div
                        className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-jldBlue to-jldRed"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        style={{ transformOrigin: 'right' }}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-jldBlue to-jldRed"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        style={{ transformOrigin: 'bottom' }}
                      />
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-gray-700 group-hover:text-jldBlue transition-colors duration-300 flex-1 relative z-10">
                      In-house R&D and technical support to co-engineer body compositions and optimize performance
                    </p>
                  </motion.div>

                  <motion.div 
                    className="group p-6 bg-gradient-to-br from-jldWhite to-gray-50 rounded-2xl border border-jldBlue/20 hover:border-jldBlue/40 transition-all duration-500 hover:shadow-lg h-56 flex flex-col relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Animated Lines */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.div
                        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-jldBlue to-jldRed"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        style={{ transformOrigin: 'left' }}
                      />
                      <motion.div
                        className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-jldBlue to-jldRed"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ transformOrigin: 'top' }}
                      />
                      <motion.div
                        className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-jldBlue to-jldRed"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        style={{ transformOrigin: 'right' }}
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-jldBlue to-jldRed"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        style={{ transformOrigin: 'bottom' }}
                      />
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-gray-700 group-hover:text-jldBlue transition-colors duration-300 flex-1 relative z-10">
                      Strict quality control through multi-stage lab testing and batch monitoring
                    </p>
                  </motion.div>
                </div>

                <div className="text-center mt-8">
                  <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-4xl mx-auto">
                    Whether you're looking for super-white clays, low-shrinkage formulations, or fast-firing compatibility, JLD Minerals offers the widest range and deepest expertise in ball clay supply.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Applications */}
            <motion.div variants={itemVariants}>
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
                  <motion.div 
                    key={index}
                    className="group cursor-pointer bg-jldWhite rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:border-jldBlue/30 transition-all duration-500 w-48"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 15px 30px rgba(43, 35, 94, 0.15)"
                    }}
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
                  </motion.div>
                ))}
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
                Each application has its own performance criteria — and JLD's application-specific ball clay grades are engineered to meet those technical demands.
              </p>
            </motion.div>

            {/* Global Reach & Supply */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
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
            </motion.div>

            {/* Partnership */}
            <motion.div variants={itemVariants} className="bg-jldWhite rounded-xl p-8 shadow-xl">
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
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-jldBlue to-jldRed rounded-xl p-8 text-jldWhite text-center shadow-xl">
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

              <motion.button
                className="bg-jldWhite text-jldBlue px-8 py-3 rounded-full font-medium text-base md:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Our Technical Team
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default BallClay;
