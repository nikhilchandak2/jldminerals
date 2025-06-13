import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LazyImage from './shared/LazyImage';
import StandardPlaceholder from './shared/StandardPlaceholder';
import FeatureCard from './shared/FeatureCard';
import RegionCard from './shared/RegionCard';
import { useHideScrollbar } from '../hooks/useHideScrollbar';

const FINAL_IMAGE_WIDTH = 280;
const FINAL_IMAGE_HEIGHT = 280;

const FeldsparPage = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // Clear any stored position data
    sessionStorage.removeItem('feldsparImagePosition');
  }, []);

  useHideScrollbar();

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
      name: "Wall & Floor Tiles", 
      image: "/assets/Tile.png",
      route: "/industries/tiles"
    },
    { 
      name: "Sanitaryware Bodies", 
      image: "/assets/Sanitary-Ware.png",
      route: "/industries/sanitaryware"
    },
    { 
      name: "Tableware & Bone China", 
      image: "/assets/Table-Ware.png",
      route: "/industries/tableware"
    },
    { 
      name: "Ceramic Glazes & Engobes", 
      image: "/assets/Engobe and Glaze.png",
      route: "/industries/glazes-engobes"
    },
    { 
      name: "Frits, Enamels & Glassware", 
      image: "/assets/Electrical Porcelain.png",
      route: "/industries/electrical-porcelain"
    }
  ];

  const handleIndustryClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <Helmet>
        <title>Feldspar - High-Purity Potassium & Sodium Feldspar for Ceramic Excellence | JLD Minerals</title>
        <meta
          name="description"
          content="High-purity potassium and sodium feldspar from JLD Minerals. India's largest K-feldspar reserve. Global export to 25+ countries with technical support for ceramic applications."
        />
        <link rel="canonical" href="https://jldminerals.com/products/feldspar" />
        <link rel="preload" as="image" href="/assets/feldspar.webp" />
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
                  className="h-8 w-auto"
                  loading="lazy"
                />
                <motion.button 
                  onClick={() => navigate('/home')}
                  className="text-gray-600 hover:text-jldBlue transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
                  <span>Back to Products</span>
                </motion.button>
              </div>

              {/* Title Section */}
              <div className="mb-16 mt-12">
                <motion.h1 
                  className="text-5xl md:text-7xl font-light text-jldBlue mb-4 leading-none tracking-tight"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Feldspar
                </motion.h1>
                
                <motion.p 
                  className="text-xl md:text-2xl text-gray-500 mb-6 font-light leading-relaxed max-w-3xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  High-Purity Potassium & Sodium Feldspar for Ceramic Excellence
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

            {/* What is Feldspar */}
            <motion.div variants={itemVariants} className="bg-jldWhite rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-light text-jldBlue mb-6 leading-tight text-center">
                What is Feldspar?
              </h2>
              
              <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                <p>
                  Feldspar is a group of alumino-silicate minerals containing varying amounts of potassium (K) and sodium (Na). It plays a critical role in ceramic, glass, and enamel formulations due to its function as a flux — reducing firing temperatures and improving vitrification.
                </p>
                <p>
                  In ceramics, feldspar helps:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FeatureCard>
                  <p className="text-base md:text-lg font-medium text-jldBlue">Lower the melting point of the ceramic body</p>
                </FeatureCard>
                <FeatureCard>
                  <p className="text-base md:text-lg font-medium text-jldBlue">Improve density, strength, and gloss</p>
                </FeatureCard>
                <FeatureCard>
                  <p className="text-base md:text-lg font-medium text-jldBlue">Enhance glaze melt fluidity and surface smoothness</p>
                </FeatureCard>
                <FeatureCard>
                  <p className="text-base md:text-lg font-medium text-jldBlue">Support color development and glass phase formation</p>
                </FeatureCard>
              </div>
            </motion.div>

            {/* JLD Minerals Expertise */}
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-jldBlue to-jldBlue/90 rounded-2xl p-8 text-jldWhite shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
                  Feldspar at JLD Minerals
                </h2>
                <div className="w-24 h-1 bg-jldRed mx-auto mb-4"></div>
                <p className="text-lg md:text-xl font-light opacity-90 max-w-4xl mx-auto leading-relaxed">
                  JLD Minerals is a trusted supplier of both potassium feldspar (K-feldspar) and sodium feldspar (Na-feldspar), offering a wide range of high-purity grades suited for both ceramic body formulations and glaze applications.
                </p>
              </div>

              <p className="text-base md:text-lg leading-relaxed opacity-80 text-center max-w-5xl mx-auto">
                We offer feldspar in powder as well as chips form, with precisely controlled chemical and physical properties tailored to meet specific manufacturing needs in:
              </p>

              <div className="mt-6 text-base md:text-lg leading-relaxed opacity-80 text-center max-w-5xl mx-auto">
                <p>
                  Tiles (Porcelain, Vitrified, Wall & Floor Tiles), Sanitaryware and Tableware, Glazes, Engobes, and Frits, Glass and Enamel.
                </p>
              </div>
            </motion.div>

            {/* World-Class Reserve */}
            <motion.div variants={itemVariants} className="bg-jldWhite rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-light text-jldBlue mb-6 leading-tight text-center">
                A World-Class Potassium Feldspar Reserve
              </h2>
              
              <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                <p>
                  JLD Minerals owns and operates India's largest potassium feldspar deposit, spread across 135 hectares near Ajmer, Rajasthan. This reserve is not only the largest by scale but is also considered one of the highest-quality K-feldspar sources globally, known for its low iron content, stable chemistry, and superior whiteness.
                </p>
                <p>
                  This strategic asset enables JLD to offer unmatched reliability, volume capacity, and consistent high performance — critical for both body fluxing and glazing applications.
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
                  Our feldspar grades are widely used in a variety of ceramic and glass industry applications, including:
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
                  </motion.div>
                ))}
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
                Each application demands specific melt behavior and chemical interaction — and JLD's feldspar grades are engineered to meet the precise functional needs of your formulation.
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
                  JLD Minerals exports feldspar to over 25 countries, supporting manufacturers across:
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {["Asia", "Middle East", "Africa", "Europe"].map((region, index) => (
                    <RegionCard key={index}>{region}</RegionCard>
                  ))}
                </div>

                <p className="text-base text-gray-600 leading-relaxed">
                  Our clients trust us for technical accuracy, on-time delivery, and application-specific consistency — batch after batch.
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
                      <p className="text-base md:text-lg leading-relaxed">Available in 50kgs bags/1 MT jumbo bags and customized chip loads</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-jldRed rounded-full flex-shrink-0 mt-2 mr-3"></div>
                      <p className="text-base md:text-lg leading-relaxed">Supplied in powder or chip form based on client requirements</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-jldRed rounded-full flex-shrink-0 mt-2 mr-3"></div>
                      <p className="text-base md:text-lg leading-relaxed">End-to-end logistics coordination for domestic and global dispatches</p>
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
                  JLD Minerals works as more than a material vendor — we are your technical ally in ceramic production. Our team engages with manufacturers to fine-tune feldspar usage, troubleshoot production inefficiencies, and enhance firing performance and glaze results.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  With the largest K-feldspar mine in India, a broad product portfolio, and strong in-house expertise, we help our clients optimize quality, reduce costs, and scale with confidence.
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
                Need help choosing the right feldspar grade for your glaze or body formulation?
              </p>
              
              <p className="text-base md:text-lg leading-relaxed mb-6 opacity-90 max-w-3xl mx-auto">
                Connect with our team for technical guidance and customized recommendations.
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

export default FeldsparPage;
