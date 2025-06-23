import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
// Removed motion imports - using CSS fade effects instead
import { useNavigate } from "react-router-dom";

export default function OurProducts() {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleProductClick = (productSlug) => {
    const targetRoute = `/products/${productSlug}`;
    
    try {
      // Pass state to indicate user came from Products section
      navigate(targetRoute, { state: { from: '/home#products' } });
    } catch (error) {
      console.error('Navigation error:', error);
      // Use direct window.location navigation as fallback
      setTimeout(() => {
        window.location.href = targetRoute;
      }, 100);
    }
  };

  const handleImageLoad = (slug) => {
    setImagesLoaded(prev => ({ ...prev, [slug]: true }));
  };

  const products = [
    { name: "Ball Clay", slug: "ball-clay", img: "ball-clay.webp" },
    { name: "Kaolin", slug: "kaolin", img: "kaolin.webp" },
    { name: "Feldspar", slug: "feldspar", img: "feldspar.webp" },
    { name: "Quartz and Silica", slug: "quartz-silica", img: "quartz-silica.webp" },
  ];

  // Simple fade carousel logic
  const [realIndex, setRealIndex] = useState(0);

  const nextSlide = () => {
    setRealIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setRealIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // Touch/swipe support for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const handleScrollDown = () => {
    if (window.fullpage_api) {
      window.fullpage_api.moveSectionDown();
    }
  };

  return (
    <div id="products" className="h-screen bg-gradient-to-br from-gray-900 to-jldBlue text-white text-center relative overflow-hidden">
      <Helmet>
        <title>Our Products | JLD Minerals</title>
        <meta
          name="description"
          content="Explore Ball Clay, Kaolin, Feldspar, Quartz & Silica – premium mineral solutions by JLD Minerals trusted by ceramic manufacturers worldwide."
        />
        <link rel="canonical" href="https://jldminerals.com/products" />
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/assets/ball-clay.webp" />
        <link rel="preload" as="image" href="/assets/kaolin.webp" />
        <link rel="preload" as="image" href="/assets/feldspar.webp" />
        <link rel="preload" as="image" href="/assets/quartz-silica.webp" />
      </Helmet>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      {/* Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-50 to-blue-50 z-50" />
      )}

      {/* Mobile Layout */}
      <div className="md:hidden h-full w-full flex flex-col justify-center items-center px-4 py-8 relative">
        <div>
          <h2 className="text-3xl font-bold text-white mb-12">
            Our Products
          </h2>
        </div>

        <p className="text-sm text-white text-justify mb-8 px-2 relative z-10 max-w-sm mx-auto">
          Premium industrial minerals trusted by leading ceramic manufacturers
          across the globe — backed by in-house labs, R&D, and consistent quality.
        </p>

        {/* Mobile Carousel */}
        <div className="relative w-full max-w-sm overflow-hidden">
          <div 
            className="relative w-full h-80 overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {products.map(({ name, slug, img }, index) => (
              <div
                key={slug}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
                  index === realIndex ? 'opacity-100 cursor-pointer z-10' : 'opacity-0 pointer-events-none z-0'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleProductClick(slug);
                }}
              >
                <div className="relative mb-2 mx-auto w-48 h-48 flex items-center justify-center">
                  {!imagesLoaded[slug] && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  <img
                    id={slug === "ball-clay" ? "ball-clay-image" : undefined}
                    src={`/assets/${img}`}
                    alt={name}
                    className={`w-44 h-44 object-contain transition-all duration-500 ${
                      imagesLoaded[slug] ? 'opacity-100' : 'opacity-0'
                    } hover:scale-105`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(slug)}
                  />
                </div>
                
                <h3 className="text-lg font-normal text-white">
                  {name}
                </h3>
              </div>
            ))}
          </div>
          
          {/* Remove duplicate dots - keeping only the properly positioned ones below */}
        </div>

        {/* Navigation Dots - Positioned to match Industries section exactly */}
        <div className="absolute bottom-20 left-0 right-0 z-30">
          <div className="flex justify-center space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer border-0 p-0 ${
                  index === realIndex ? 'bg-white' : 'bg-white/30'
                }`}
                onClick={() => setRealIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                style={{
                  minWidth: '8px',
                  minHeight: '8px'
                }}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator - Same as Industries mobile version */}
        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer touch-manipulation flex flex-col items-center justify-center"
          onClick={handleScrollDown}
          onTouchStart={handleScrollDown}
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20
          }}
        >
          <div className="text-white/70 hover:text-white transition-colors p-2 flex items-center justify-center animate-bounce">
            <svg
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

      {/* Desktop Layout - Original */}
      <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:h-full md:w-full md:px-4 md:py-20">
        <h2
          className="text-3xl md:text-5xl font-bold mb-6 mt-16 relative z-10"
        >
          Our Products
        </h2>

        <p
          className="max-w-xl text-base md:text-lg mb-16 relative z-10"
        >
          Premium industrial minerals trusted by leading ceramic manufacturers
          across the globe — backed by in-house labs, R&D, and consistent quality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl relative z-10">
          {products.map(({ name, slug, img }, index) => (
            <div
              key={slug}
              className="cursor-pointer relative"
              onClick={() => handleProductClick(slug)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleProductClick(slug);
                }
              }}
              aria-label={`${name} product page`}
            >
              <div
                className="relative"
              >
                {/* Image Container with Embossed Card Effect */}
                <div className="relative mb-4 mx-auto w-48 h-48 flex items-center justify-center">
                  {!imagesLoaded[slug] && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  <img
                    id={slug === "ball-clay" ? "ball-clay-image" : undefined}
                    src={`/assets/${img}`}
                    alt={name}
                    className={`w-44 h-44 object-contain transition-all duration-500 ${
                      imagesLoaded[slug] ? 'opacity-100' : 'opacity-0'
                    } hover:scale-105`}
                    loading="lazy"
                    onLoad={() => handleImageLoad(slug)}
                  />
                </div>
                
                <h3
                  className="text-lg font-normal"
                >
                  {name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Scroll Indicator - Exact same positioning as Industries section */}
        <div
          className="absolute bottom-6 cursor-pointer touch-manipulation flex flex-col items-center justify-center"
          onClick={handleScrollDown}
          onTouchStart={handleScrollDown}
          style={{
            left: 'calc(50% - 10px + 2px)',
            width: '20px',
            height: '20px',
            zIndex: 20
          }}
        >
          <div className="text-white/70 hover:text-white transition-colors p-2 flex items-center justify-center animate-bounce">
            <svg
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

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a40] to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}