import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "../utils/motion";
import { Helmet } from "react-helmet";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    // Aggressive mobile viewport height handling
    const updateViewportHeight = () => {
      // Get the actual viewport height
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      
      setViewportHeight(vh);
      
      // Update CSS custom property for mobile viewport
      document.documentElement.style.setProperty('--vh', `${vh * 0.01}px`);
      
      // For mobile devices, force the exact height to prevent white space
      if (vw <= 768) {
        const heroSection = document.querySelector('[data-section="hero"]');
        if (heroSection) {
          heroSection.style.height = `${vh}px`;
          heroSection.style.minHeight = `${vh}px`;
          heroSection.style.maxHeight = `${vh}px`;
        }
      }
    };

    // Set initial height immediately
    updateViewportHeight();

    // Update on resize with debouncing
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateViewportHeight, 100);
    };

    // Update on orientation change with delay for mobile browser UI
    const handleOrientationChange = () => {
      setTimeout(updateViewportHeight, 300);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    // Also update when the page becomes visible (mobile browser back/forward)
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        setTimeout(updateViewportHeight, 100);
      }
    });

    // Preload the logo
    const img = new Image();
    img.onload = () => {
      setLogoLoaded(true);
    };
    img.src = '/assets/jld-white-logo.png';

    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Small delay before showing content
      setTimeout(() => {
        setShowContent(true);
        // Update height again after content loads
        setTimeout(updateViewportHeight, 100);
      }, 200);
    }, 1500);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
      document.removeEventListener('visibilitychange', updateViewportHeight);
      clearTimeout(timer);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const handleScrollDown = () => {
    // Add touch-friendly scroll indicator functionality
    if (window.fullpage_api) {
      window.fullpage_api.moveSectionDown();
    }
  };

  const dynamicStyle = {
    height: viewportHeight > 0 ? `${viewportHeight}px` : '100vh',
    minHeight: viewportHeight > 0 ? `${viewportHeight}px` : '100vh',
    maxHeight: viewportHeight > 0 ? `${viewportHeight}px` : '100vh'
  };

  return (
    <section
      data-section="hero"
      className="w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#101048] to-[#e4222b] text-white relative overflow-hidden"
      style={dynamicStyle}
    >
      <Helmet>
        <title>JLD Minerals – Crafting the Future of Ceramics</title>
        <meta
          name="description"
          content="JLD Minerals leads the ceramic materials value chain with 30+ mines, innovation labs, and global clients. Explore our premium Ball Clay, Kaolin, and industrial minerals."
        />
        <meta name="keywords" content="Ball Clay, Kaolin, Ceramic Minerals, JLD Minerals, Clay Exporters India" />
        <link rel="preload" as="image" href="/assets/jld-white-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </Helmet>

      {/* Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#101048] to-[#e4222b] z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-12 md:w-16 h-12 md:h-16 border-4 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.p
              className="mt-4 text-white/80 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Loading...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Container - fills entire viewport */}
      <div 
        className="w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
        style={dynamicStyle}
      >
        <AnimatePresence>
          {showContent && (
            <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
              {/* Logo Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-8 md:mb-12"
              >
                <img
                  src="/assets/jld-white-logo.png"
                  alt="JLD Minerals"
                  className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto max-w-full"
                  onLoad={() => setLogoLoaded(true)}
                  onError={() => {}}
                />
              </motion.div>

              {/* Hero Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                className="text-center w-full"
              >
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 md:mb-6 leading-tight px-2">
                  Crafting the Future of Ceramics
                </h1>
                <p className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl mx-auto leading-relaxed px-2">
                  We lead the ceramic materials value chain with 30+ mines, innovation labs, and clients across 10+ countries.
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Mobile Scroll Indicator - Same as GlobalSnapshot mobile version */}
        {showContent && (
          <div
            className="md:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer touch-manipulation flex flex-col items-center justify-center"
            onClick={handleScrollDown}
            onTouchStart={handleScrollDown}
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
        )}


      </div>

      {/* Desktop Scroll Indicator - Exact same positioning as Industries section */}
      {showContent && (
        <div
          className="hidden md:block absolute bottom-6 cursor-pointer touch-manipulation flex flex-col items-center justify-center"
          onClick={handleScrollDown}
          onTouchStart={handleScrollDown}
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
      )}
    </section>
  );
}