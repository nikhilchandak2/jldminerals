import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LazyImage from './shared/LazyImage';

const FINAL_IMAGE_WIDTH = 280;
const FINAL_IMAGE_HEIGHT = 280;

const KaolinPage = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // Clear any stored position data
    sessionStorage.removeItem('kaolinImagePosition');
    
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
      body {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
      }
      body::-webkit-scrollbar { 
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
      name: "Vitrified and Porcelain Tiles", 
      image: "/assets/Tile.png",
      route: "/industries/tiles"
    },
    { 
      name: "Sanitaryware & Bathroom Ceramics", 
      image: "/assets/Sanitary-Ware.png",
      route: "/industries/sanitaryware"
    },
    { 
      name: "Tableware & Fine China", 
      image: "/assets/Table-Ware.png",
      route: "/industries/tableware"
    },
    { 
      name: "Glaze and Engobe Applications", 
      image: "/assets/Engobe and Glaze.png",
      route: "/industries/glazes-engobes"
    },
    { 
      name: "Electrical Porcelain", 
      image: "/assets/Electrical Porcelain.png",
      route: "/industries/electrical-porcelain"
    },
    { 
      name: "Refractory and Insulating Bodies", 
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
        <title>Kaolin - High-Purity Hydrated Clay for Ceramic Precision | JLD Minerals</title>
        <meta
          name="description"
          content="High-purity kaolin clay from JLD Minerals. Over 10 unique grades for tiles, sanitaryware, tableware. Global export to 25+ countries with technical support."
        />
        <link rel="canonical" href="https://jldminerals.com/products/kaolin" />
        <link rel="preload" as="image" href="/assets/kaolin.webp" />
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
                  Kaolin
                </motion.h1>
                
                <motion.p 
                  className="text-xl md:text-2xl text-gray-500 mb-6 font-light leading-relaxed max-w-3xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  High-Purity Hydrated Clay Tailored for Ceramic Precision
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

            {/* What is Kaolin */}
            <motion.div variants={itemVariants} className="bg-jldWhite rounded-2xl p-8 shadow-xl">
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
                <div className="p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl">
                  <p className="text-base md:text-lg font-medium text-jldBlue">Providing whiteness and translucency</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl">
                  <p className="text-base md:text-lg font-medium text-jldBlue">Controlling thermal expansion and shrinkage</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl">
                  <p className="text-base md:text-lg font-medium text-jldBlue">Acting as a filler to enhance mechanical strength</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl">
                  <p className="text-base md:text-lg font-medium text-jldBlue">Supporting glaze bonding and surface smoothness</p>
                </div>
              </div>

              <div className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                <p>
                  Its low impurity levels and firing reliability make it ideal for a wide range of technical and decorative ceramic applications.
                </p>
              </div>
            </motion.div>

            {/* JLD Minerals Expertise */}
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-jldBlue to-jldBlue/90 rounded-2xl p-8 text-jldWhite shadow-xl">
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
            </motion.div>

            {/* Applications */}
            <motion.div variants={itemVariants}>
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
                  </motion.div>
                ))}
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
                JLD kaolins are chosen for their purity, particle control, and compatibility with fast-firing cycles, helping clients achieve high-performance bodies and defect-free finishes.
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
                  JLD Minerals exports kaolin to clients in over 25 countries, with reliable logistics and dedicated technical support across:
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {["Asia", "Middle East", "Africa", "Europe"].map((region, index) => (
                    <div key={index} className="text-center p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl">
                      <h3 className="text-base font-medium text-jldBlue">{region}</h3>
                    </div>
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
                  At JLD Minerals, we believe material performance begins with deep understanding. Our experts work alongside clients to analyze process challenges, refine body formulations, and optimize end-product quality.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Our team's technical insight and field knowledge allow us to deliver practical, plant-level solutions — whether you're troubleshooting a performance issue or seeking formulation cost-efficiencies. Our goal is not just to supply kaolin — but to strengthen your process and product outcomes.
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
                Looking for the right kaolin for your ceramic or technical application?
              </p>
              
              <p className="text-base md:text-lg leading-relaxed mb-6 opacity-90 max-w-3xl mx-auto">
                Reach out to our experts for tailored recommendations and technical insights.
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

export default KaolinPage; 