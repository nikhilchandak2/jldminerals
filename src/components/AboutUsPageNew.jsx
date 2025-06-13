import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useHideScrollbar } from '../hooks/useHideScrollbar';

const AboutUsPage = () => {
  const navigate = useNavigate();

  useHideScrollbar();

  useEffect(() => {
    document.body.classList.add('product-page');
    
    return () => {
      document.body.classList.remove('product-page');
    };
  }, []);

  // Native intersection observer hook for counters
  const useCountAnimation = (target, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [isVisible]);

    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const end = target;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
      }
    }, [isVisible, target, duration]);

    return [count, ref];
  };

  const AnimatedCounter = ({ number, suffix, label }) => {
    const [count, ref] = useCountAnimation(number);
    return (
      <div ref={ref} className="text-center">
        <div className="text-4xl md:text-5xl font-light text-white mb-2">
          {count}{suffix}
        </div>
        <div className="text-sm text-white/80 font-light">{label}</div>
      </div>
    );
  };

  // Custom scroll to content function
  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>
        {`
          /* Pure CSS Parallax - No Fade Effects */
          .parallax-container {
            height: 100vh;
            overflow-x: hidden;
            overflow-y: auto;
            scroll-snap-type: y mandatory;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          
          .parallax-container::-webkit-scrollbar {
            display: none;
          }
          
          .parallax-section {
            height: 100vh;
            scroll-snap-align: start;
            position: relative;
          }
          
          .parallax-hero {
            background-image: url('/assets/3.jpg');
            background-attachment: fixed;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
          }
          
          .content-section {
            background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          
          .content-section::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      
      <Helmet>
        <title>About JLD Minerals - India's Leading Ceramic Raw Material Supplier & Exporter</title>
        <meta
          name="description"
          content="JLD Minerals is India's largest ceramic raw material supplier and exporter of ball clay, potash feldspar, and custom ceramic inputs, with 30+ mines and clients across 25+ countries."
        />
        <link rel="canonical" href="https://jldminerals.com/about" />
      </Helmet>

      <div className="parallax-container">
        {/* Hero Section with Pure CSS Parallax */}
        <div className="parallax-section parallax-hero">
          <div className="container mx-auto px-6 py-8 relative z-10 h-full">
            {/* Transparent Header */}
            <div className="flex justify-between items-center mb-8">
              <img 
                src="/assets/jld-logo.png" 
                alt="JLD Minerals" 
                className="h-8 w-auto"
                loading="lazy"
              />
              <button 
                onClick={() => navigate('/#about')}
                className="text-jldBlue hover:text-jldRed transition-all duration-300 text-sm font-medium flex items-center gap-2 group bg-white/80 px-4 py-2 rounded-lg backdrop-blur-sm"
              >
                <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
                <span>Back to Home</span>
              </button>
            </div>

            {/* Hero Content */}
            <div className="h-full flex items-center justify-center -mt-16">
              <div className="text-center max-w-6xl mx-auto bg-black/25 rounded-3xl p-12 backdrop-blur-[2px] border border-white/30">
                <h1 className="text-6xl md:text-8xl font-light text-white mb-6 leading-none tracking-tight">
                  About Us
                </h1>
                
                <p className="text-lg md:text-xl text-white font-light leading-relaxed max-w-4xl mx-auto mb-12">
                  JLD Minerals is a globally trusted ceramic raw material supplier based in India, serving the tile, sanitaryware, and tableware industries with precision-engineered materials for over 50 years. With a legacy spanning three generations, we bring deep expertise, scale, and innovation to every layer of the ceramic supply chain.
                </p>

                {/* Animated Numbers Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/15 rounded-2xl p-8 border border-white/30">
                  <AnimatedCounter number={30} suffix="+" label="Mining Assets" />
                  <AnimatedCounter number={25} suffix="+" label="Countries Served" />
                  <AnimatedCounter number={1500} suffix="+" label="Employees" />
                  <AnimatedCounter number={50} suffix="+" label="Years Experience" />
                </div>
              </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <div className="flex flex-col items-center animate-bounce cursor-pointer group" onClick={scrollToContent}>
                <span className="text-white text-sm font-light mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">Scroll Down</span>
                <div className="w-6 h-10 border-2 border-white/60 group-hover:border-white/90 rounded-full flex justify-center transition-colors duration-300">
                  <div className="w-1 h-3 bg-white/80 group-hover:bg-white rounded-full mt-2 animate-pulse"></div>
                </div>
                <svg 
                  className="w-6 h-6 text-white/60 group-hover:text-white/90 mt-2 transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div id="content-section" className="parallax-section content-section">
          <div className="h-screen overflow-y-auto">
            
            {/* Two Column Layout: Conglomerate + Scale */}
            <div className="container mx-auto px-6 py-16">
              <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
                
                {/* Conglomerate Section */}
                <div className="bg-gradient-to-br from-jldBlue to-jldBlue/90 rounded-3xl p-10 text-white">
                  <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
                    Conglomerate
                  </h2>
                  <div className="w-16 h-1 bg-jldRed mb-6"></div>
                  <p className="text-lg font-light opacity-90 mb-8 leading-relaxed">
                    JLD Minerals operates as part of a wider conglomerate with business interests across:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-jldRed"></div>
                      <p className="text-base font-light">Electrical porcelain manufacturing</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-jldRed"></div>
                      <p className="text-base font-light">Granite and quartzite mining</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-jldRed"></div>
                      <p className="text-base font-light">Agricultural development</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-jldRed"></div>
                      <p className="text-base font-light">High-purity quartz vertical supplying engineered stone industry</p>
                    </div>
                  </div>
                </div>

                {/* Scale Section */}
                <div className="bg-white rounded-3xl p-10 shadow-xl">
                  <h2 className="text-3xl md:text-4xl font-light text-jldBlue mb-6 leading-tight">
                    Scale
                  </h2>
                  <div className="w-16 h-1 bg-jldRed mb-6"></div>
                  <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                    Our scale and infrastructure enable global reach:
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-4 bg-gradient-to-br from-jldBlue/10 to-jldBlue/5 rounded-xl">
                      <div className="text-2xl font-light text-jldBlue mb-1">30+</div>
                      <div className="text-sm text-gray-600">Mining Assets</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-jldRed/10 to-jldRed/5 rounded-xl">
                      <div className="text-2xl font-light text-jldRed mb-1">25+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-jldBlue/10 to-jldBlue/5 rounded-xl">
                      <div className="text-2xl font-light text-jldBlue mb-1">1500+</div>
                      <div className="text-sm text-gray-600">Employees</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-jldRed/10 to-jldRed/5 rounded-xl">
                      <div className="text-2xl font-light text-jldRed mb-1">50+</div>
                      <div className="text-sm text-gray-600">Years</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 font-light leading-relaxed">
                    Multiple state-of-the-art processing plants across India, exporting to Asia, Middle East, Africa, and Europe.
                  </p>
                </div>
              </div>
            </div>

            {/* Rest of content sections... */}
            <div className="container mx-auto px-6 py-16">
              <div className="max-w-7xl mx-auto bg-gradient-to-r from-jldRed/10 via-white to-jldBlue/10 rounded-3xl p-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-light text-jldBlue mb-6 leading-tight">
                    Raw Material That Set <span className="text-jldRed">Global Benchmark</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-6"></div>
                  <p className="text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
                    Our mineral portfolio includes India's finest ceramic raw materials
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 bg-white rounded-2xl border border-jldBlue/20 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-medium text-jldBlue mb-4">India's Largest Potash Feldspar Mine</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Globally recognized for purity and whiteness, setting industry standards for ceramic applications worldwide.
                    </p>
                  </div>
                  
                  <div className="p-8 bg-white rounded-2xl border border-jldRed/20 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-medium text-jldRed mb-4">Premium Ball Clay Reserves</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Some of the biggest and best ball clay reserves in the country, delivering unmatched plasticity and fired performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Spacing */}
            <div className="py-16"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage; 