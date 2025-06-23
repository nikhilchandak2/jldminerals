import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AboutUsPage = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('product-page');
    
    // Prevent over-scroll and control document height
    document.body.style.overscrollBehavior = 'none';
    document.documentElement.style.overscrollBehavior = 'none';
    
    return () => {
      document.body.classList.remove('product-page');
      document.body.style.overscrollBehavior = '';
      document.documentElement.style.overscrollBehavior = '';
    };
  }, []);

  // Enhanced scroll tracking for shutter parallax effect
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollY(scrolled);

      if (!ticking) {
        requestAnimationFrame(() => {
          const parallax = parallaxRef.current;
          if (parallax) {
            // Background image stays completely fixed (no movement)
            parallax.style.transform = `translate3d(0, 0, 0)`;
            
            // Hide background completely when content section starts covering it
            if (scrolled >= window.innerHeight * 0.8) {
              parallax.style.opacity = '0';
            } else {
              parallax.style.opacity = '1';
            }
          }

          // Move hero content (logo, button, card) upward on scroll
          const heroContent = document.querySelector('.hero-content-wrapper');
          if (heroContent) {
            const moveSpeed = Math.min(scrolled * 0.8, window.innerHeight * 1.2); // Allow more movement
            heroContent.style.transform = `translate3d(0, -${moveSpeed}px, 0)`;
          }

          // Content section acts as a shutter sliding up
          const contentSection = document.querySelector('.content-section');
          if (contentSection) {
            // Simple slide up that ensures complete coverage
            const slideUp = Math.min(scrolled * 0.8, window.innerHeight);
            contentSection.style.transform = `translate3d(0, -${slideUp}px, 0)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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

  // Smooth scroll to content function
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style>
        {`
          /* Prevent over-scroll and control page height */
          html, body {
            overscroll-behavior: none;
            overflow-x: hidden;
          }

          /* Main page container with controlled height */
          .about-page-container {
            position: relative;
            z-index: 1;
            background: transparent;
            min-height: 100vh; /* Allow natural content height */
            overflow: visible; /* Allow content to be scrollable */
          }

          /* Hero section container */
          .hero-section {
            min-height: 100vh;
            max-height: 100vh;
            display: flex;
            flex-direction: column;
            position: relative;
            z-index: 2;
            background: transparent;
            overflow: visible; /* Allow content to move out */
          }

          /* Fixed background image that never moves */
          .parallax-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh; /* Back to normal viewport height */
            background-image: url('/assets/3.jpg');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
            will-change: transform;
            z-index: 1;
          }

          /* Wrapper for hero content that moves on scroll */
          .hero-content-wrapper {
            position: relative;
            z-index: 10;
            height: 100vh;
            display: flex;
            flex-direction: column;
            will-change: transform;
          }

          /* Fixed header positioning */
          .fixed-header {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 15;
            padding: 2rem 1.5rem;
          }

          /* Hero content centered properly */
          .hero-content {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1.5rem;
            margin-top: 4rem;
          }

          /* Content section that acts as a shutter */
          .content-section {
            background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
            position: absolute;
            z-index: 20;
            width: 100%;
            min-height: 100vh; /* Return to normal height */
            top: 100vh; /* Start exactly at bottom of viewport */
            left: 0;
            margin-top: 0;
            padding-top: 2rem;
            padding-bottom: 2rem; /* Normal padding */
            will-change: transform;
            /* Add shadow to create depth */
            box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
            /* Ensure complete coverage */
            border-top: 20px solid #f8fafc;
          }
          
          /* Simple background coverage for bottom */
          .content-section::before {
            content: '';
            position: absolute;
            top: -50px;
            left: 0;
            width: 100%;
            height: 50px;
            background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
            z-index: -1;
          }

          /* Ensure no layout shift */
          .no-layout-shift {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }

          /* Fix logo positioning */
          .fixed-header img {
            filter: brightness(0) invert(1);
          }

          /* Ensure proper button styling */
          .back-button {
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 255, 255, 0.2);
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

      <div className="about-page-container">
        {/* Hero Section */}
        <div className="hero-section">
          {/* Fixed background image that never moves */}
          <div className="parallax-overlay no-layout-shift" ref={parallaxRef}></div>
          
          {/* Hero content wrapper that moves on scroll */}
          <div className="hero-content-wrapper">
            {/* Fixed Header */}
            <div className="fixed-header">
              <div className="flex justify-between items-center max-w-7xl mx-auto">
                <img 
                  src="/assets/jld-logo.png" 
                  alt="JLD Minerals" 
                  className="h-8 w-auto"
                  loading="lazy"
                />
                <button 
                  onClick={() => navigate('/#about')}
                  className="back-button text-white hover:text-jldRed transition-all duration-300 text-sm font-medium flex items-center gap-2 group px-4 py-2 rounded-full"
                >
                  <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
                  <span>Back to Home</span>
                </button>
              </div>
            </div>

            {/* Hero Content */}
            <div className="hero-content">
              <div className="text-center max-w-6xl mx-auto bg-black/25 rounded-3xl p-12 backdrop-blur-[2px] border border-white/30 no-layout-shift">
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

            {/* Mobile Scroll Indicator - Same as homepage sections */}
            <div
              className="md:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer touch-manipulation flex flex-col items-center justify-center"
              onClick={scrollToContent}
              onTouchStart={scrollToContent}
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 20
              }}
            >
              <svg
                className="text-white/70 hover:text-white transition-colors animate-bounce"
                width="20" 
                height="20" 
                viewBox="0 0 24 24"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 13l3 3 3-3"/>
                <path d="M7 6l3 3 3-3"/>
              </svg>
            </div>

            {/* Desktop Scroll Indicator - Exact same positioning as homepage sections */}
            <div
              className="hidden md:block absolute bottom-6 cursor-pointer touch-manipulation flex flex-col items-center justify-center"
              onClick={scrollToContent}
              onTouchStart={scrollToContent}
              style={{
                left: 'calc(50% - 10px + 2px)',
                width: '20px',
                height: '20px',
                zIndex: 20
              }}
            >
              <svg
                className="text-white/70 hover:text-white transition-colors animate-bounce"
                width="20" 
                height="20" 
                viewBox="0 0 24 24"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 13l3 3 3-3"/>
                <path d="M7 6l3 3 3-3"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="content-section" style={{ paddingBottom: '5rem' }}>
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
          <div className="container mx-auto px-6 py-16">
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
          <div className="bg-gradient-to-r from-jldBlue/5 to-jldRed/5 py-8 text-center border-t border-gray-200">
            <p className="text-gray-600 text-sm">© JLD Minerals. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage; 