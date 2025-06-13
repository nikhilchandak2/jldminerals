import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useHideScrollbar } from '../hooks/useHideScrollbar';

const AboutUsPage = () => {
  const navigate = useNavigate();
  const parallaxRef = useRef(null);
  const containerRef = useRef(null);

  useHideScrollbar();

  useEffect(() => {
    document.body.classList.add('product-page');
    
    return () => {
      document.body.classList.remove('product-page');
    };
  }, []);

  // JavaScript parallax effect with smooth section transitions
  useEffect(() => {
    let isScrolling = false;
    let currentSection = 0;
    let allowNormalScroll = false;

    const handleScroll = () => {
      if (parallaxRef.current && containerRef.current) {
        const scrolled = containerRef.current.scrollTop;
        const parallax = parallaxRef.current;
        const speed = 0.5;
        parallax.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;

        // Keep background always visible - no hiding
        parallax.style.opacity = '1';
        parallax.style.visibility = 'visible';

        // Update current section based on scroll position
        const viewportHeight = window.innerHeight;
        if (scrolled < viewportHeight * 0.5) {
          currentSection = 0;
          allowNormalScroll = false;
        } else {
          currentSection = 1;
          // Allow normal scrolling when in content section and past the transition point
          allowNormalScroll = scrolled > viewportHeight;
        }
      }
    };

    const handleWheel = (e) => {
      if (isScrolling) return;
      
      const container = containerRef.current;
      if (!container) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const viewportHeight = window.innerHeight;
      const currentScrollTop = container.scrollTop;

      // If we're in hero section and scrolling down
      if (currentSection === 0 && direction > 0) {
        e.preventDefault();
        isScrolling = true;
        currentSection = 1;
        
        container.scrollTo({
          top: viewportHeight,
          behavior: 'smooth'
        });

        setTimeout(() => {
          isScrolling = false;
          allowNormalScroll = true;
        }, 800);
      }
      // If we're at the top of content section and scrolling up
      else if (currentSection === 1 && direction < 0 && currentScrollTop <= viewportHeight + 50) {
        e.preventDefault();
        isScrolling = true;
        currentSection = 0;
        allowNormalScroll = false;
        
        container.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

        setTimeout(() => {
          isScrolling = false;
        }, 800);
      }
      // Allow normal scrolling when deep in content section
      else if (currentSection === 1 && allowNormalScroll) {
        // Let normal scrolling happen
        return;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      container.addEventListener('wheel', handleWheel, { passive: false });
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('wheel', handleWheel);
      };
    }
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
    if (contentSection && containerRef.current) {
      containerRef.current.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style>
        {`
          /* Hide scrollbars globally */
          * {
            scrollbar-width: none;
            -ms-overflow-style: none;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          *::-webkit-scrollbar {
            display: none;
          }

          /* Ensure body and html fill viewport */
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
            background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
          }

          /* JavaScript-based Parallax Container */
          .parallax-container {
            height: 100vh;
            width: 100vw;
            overflow-x: hidden;
            overflow-y: auto;
            position: fixed;
            top: 0;
            left: 0;
            scrollbar-width: none;
            -ms-overflow-style: none;
            background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
            scroll-behavior: smooth;
          }
          
          .parallax-container::-webkit-scrollbar {
            display: none;
          }
          
          .parallax-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-image: url('/assets/3.jpg');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            will-change: transform;
            z-index: 0;
            transition: opacity 0.3s ease;
            opacity: 1;
          }
          
          .parallax-section {
            position: relative;
            z-index: 1;
            margin: 0;
            padding: 0;
          }
          
          .hero-section {
            background: transparent;
            position: relative;
            z-index: 2;
            height: 100vh;
            width: 100%;
            margin: 0;
            padding: 0;
          }
          
          .content-section {
            position: relative;
            z-index: 3;
            background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
            width: 100%;
            margin: 0;
            padding: 0;
            min-height: 200vh;
          }
          
          .content-section-inner {
            position: relative;
            z-index: 4;
            background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
            width: 100%;
            padding: 0;
            margin: 0;
            min-height: 100%;
          }

          /* Remove any default margins from containers */
          .container {
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            max-width: none;
          }

          /* Copyright section */
          .copyright-section {
            background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
            padding: 1.5rem 0;
            text-align: center;
            position: relative;
            z-index: 4;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            margin: 0;
            width: 100%;
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

      <div className="parallax-container" ref={containerRef}>
        {/* Parallax Background */}
        <div className="parallax-background" ref={parallaxRef}></div>
        
        {/* Hero Section */}
        <div className="parallax-section hero-section">
          <div className="px-6 py-8 relative z-10 h-full max-w-7xl mx-auto">
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
                className="text-jldBlue hover:text-jldRed transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
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
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="flex flex-col items-center cursor-pointer group" onClick={scrollToContent}>
                <div className="bg-jldBlue backdrop-blur-md rounded-full p-3 border border-jldBlue group-hover:bg-jldRed transition-all duration-300">
                  <svg 
                    className="w-5 h-5 text-white animate-bounce" 
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
        </div>

        {/* Content Section */}
        <div id="content-section" className="parallax-section content-section">
          <div className="content-section-inner" style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
            minHeight: '100vh',
            position: 'relative',
            zIndex: 2,
            margin: 0,
            padding: 0
          }}>
            {/* Two Column Layout: Conglomerate + Scale */}
            <div className="flex-grow" style={{ margin: 0, padding: 0 }}>
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
            </div>

            {/* Raw Material That Set Global Benchmark */}
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

            {/* Clean Design Section */}
            <div className="container mx-auto px-6 py-16">
              <div className="max-w-7xl mx-auto text-center">
                <div className="bg-white rounded-3xl p-16 shadow-xl">
                  <h2 className="text-4xl md:text-5xl font-light text-jldBlue mb-8 leading-tight">
                    Clean Design
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-8"></div>
                  <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
                    At JLD Minerals, we don't just extract and supply minerals — we create long-term value for the global ceramic industry through responsible mining, world-class technical support, and a partnership-first approach.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Expertise Global */}
            <div className="container mx-auto px-6 py-16">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-light text-jldBlue mb-6 leading-tight">
                    Technical Expertise <span className="text-jldRed">Global</span>
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-6"></div>
                  <p className="text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
                    Our achievements speak to our commitment to excellence and innovation
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
                    <div className="text-3xl font-light text-jldBlue mb-4">ISO</div>
                    <div className="text-lg font-medium text-gray-800 mb-2">Certified Quality</div>
                    <p className="text-gray-600 font-light">International standards compliance across all operations</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
                    <div className="text-3xl font-light text-jldRed mb-4">R&D</div>
                    <div className="text-lg font-medium text-gray-800 mb-2">Innovation Labs</div>
                    <p className="text-gray-600 font-light">Cutting-edge research and development facilities</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
                    <div className="text-3xl font-light text-jldBlue mb-4">24/7</div>
                    <div className="text-lg font-medium text-gray-800 mb-2">Global Support</div>
                    <p className="text-gray-600 font-light">Round-the-clock technical assistance worldwide</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
                    <div className="text-3xl font-light text-jldRed mb-4">AI</div>
                    <div className="text-lg font-medium text-gray-800 mb-2">Smart Mining</div>
                    <p className="text-gray-600 font-light">AI-powered extraction and quality control systems</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="container mx-auto px-6 py-16">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-light text-jldBlue mb-6 leading-tight">
                    Our <span className="text-jldRed">Journey</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-6"></div>
                  <p className="text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
                    Five decades of growth, innovation, and global expansion
                  </p>
                </div>

                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/3 text-center md:text-right">
                      <div className="text-3xl font-light text-jldBlue mb-2">1970s</div>
                      <div className="text-xl font-medium text-gray-800 mb-4">Foundation</div>
                      <p className="text-gray-600 font-light">Started as a small mining operation with a vision for quality ceramic raw materials</p>
                    </div>
                    <div className="md:w-1/3 flex justify-center">
                      <div className="w-4 h-4 rounded-full bg-jldBlue"></div>
                    </div>
                    <div className="md:w-1/3"></div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-1/3 flex justify-center">
                      <div className="w-4 h-4 rounded-full bg-jldRed"></div>
                    </div>
                    <div className="md:w-1/3 text-center md:text-left">
                      <div className="text-3xl font-light text-jldRed mb-2">1990s</div>
                      <div className="text-xl font-medium text-gray-800 mb-4">Expansion</div>
                      <p className="text-gray-600 font-light">Expanded operations across multiple states and began international exports</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/3 text-center md:text-right">
                      <div className="text-3xl font-light text-jldBlue mb-2">2010s</div>
                      <div className="text-xl font-medium text-gray-800 mb-4">Innovation</div>
                      <p className="text-gray-600 font-light">Introduced advanced processing technologies and sustainable mining practices</p>
                    </div>
                    <div className="md:w-1/3 flex justify-center">
                      <div className="w-4 h-4 rounded-full bg-jldBlue"></div>
                    </div>
                    <div className="md:w-1/3"></div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-1/3 flex justify-center">
                      <div className="w-4 h-4 rounded-full bg-jldRed"></div>
                    </div>
                    <div className="md:w-1/3 text-center md:text-left">
                      <div className="text-3xl font-light text-jldRed mb-2">Today</div>
                      <div className="text-xl font-medium text-gray-800 mb-4">Global Leader</div>
                      <p className="text-gray-600 font-light">Leading ceramic raw material supplier serving 25+ countries with cutting-edge solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Section */}
            <div className="container mx-auto px-6 py-16" style={{ margin: '0 auto', padding: '4rem 1.5rem' }}>
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-light text-jldBlue mb-6 leading-tight">
                    Leadership <span className="text-jldRed">Team</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-6"></div>
                  <p className="text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
                    Visionary leaders driving innovation and sustainable growth
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-jldBlue to-jldBlue/80 mx-auto mb-6 flex items-center justify-center">
                      <span className="text-2xl font-light text-white">JL</span>
                    </div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Executive Leadership</h3>
                    <p className="text-jldBlue font-medium mb-4">Strategic Vision</p>
                    <p className="text-gray-600 font-light">Guiding the company's strategic direction and global expansion initiatives</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-jldRed to-jldRed/80 mx-auto mb-6 flex items-center justify-center">
                      <span className="text-2xl font-light text-white">TD</span>
                    </div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Technical Direction</h3>
                    <p className="text-jldRed font-medium mb-4">Innovation Focus</p>
                    <p className="text-gray-600 font-light">Leading research and development of advanced ceramic material solutions</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-jldBlue to-jldBlue/80 mx-auto mb-6 flex items-center justify-center">
                      <span className="text-2xl font-light text-white">OM</span>
                    </div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Operations Management</h3>
                    <p className="text-jldBlue font-medium mb-4">Operational Excellence</p>
                    <p className="text-gray-600 font-light">Ensuring world-class quality and efficiency across all mining and processing operations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright section */}
            <div className="copyright-section" style={{ 
              background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
              margin: 0,
              padding: '1.5rem 0'
            }}>
              <p className="text-gray-600 text-sm">© JLD Minerals. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage; 