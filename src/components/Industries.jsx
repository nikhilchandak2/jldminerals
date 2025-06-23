import React, { useState, useEffect, useRef } from "react";
// Removed motion imports - using CSS fade effects instead
import { useNavigate } from 'react-router-dom';

const industries = [
  { name: "Tiles", image: "/assets/Tile.webp", slug: "tiles" },
  { name: "Glazes and Engobes", image: "/assets/Engobe and Glaze.webp", slug: "glazes-engobes" },
  { name: "Sanitary Ware", image: "/assets/Sanitary-Ware.webp", slug: "sanitary-ware" },
  { name: "Table Ware", image: "/assets/Table-Ware.webp", slug: "table-ware" },
  { name: "Electrical Porcelain", image: "/assets/Electrical Porcelain.webp", slug: "electrical-porcelain" },
  { name: "Refractory", image: "/assets/Refractory.webp", slug: "refractory" },
];

export default function Industries() {
  const navigate = useNavigate();

  const handleIndustryClick = (industrySlug) => {
    try {
      // Use React Router navigation with state to indicate coming from Industries section
      navigate(`/industries/${industrySlug}`, { state: { from: '/home#industries' } });
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback to window.location if React Router fails
    window.location.href = `/industries/${industrySlug}`;
    }
  };

  // Mobile carousel state
  const [realIndex, setRealIndex] = useState(0);

  const nextSlide = () => {
    setRealIndex((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setRealIndex((prev) => (prev - 1 + industries.length) % industries.length);
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

  const mobileContainerRef = useRef(null);

  useEffect(() => {
    const setHeight = () => {
      if (mobileContainerRef.current) {
        mobileContainerRef.current.style.height = `${window.innerHeight}px`;
      }
    };
    
    // Set on initial mount
    setHeight();

    // Adjust on window resize
    window.addEventListener('resize', setHeight);

    // Cleanup
    return () => window.removeEventListener('resize', setHeight);
  }, []);

  // Scrollbar hiding for Industries section
  useEffect(() => {
    // Only apply scrollbar hiding when this component is visible
    const hideScrollbarsForIndustries = () => {
      // Apply immediate scrollbar hiding styles for this section
      const style = document.createElement('style');
      style.id = 'hide-scrollbar-industries';
      style.textContent = `
        .fp-section.active::-webkit-scrollbar,
        .fp-section.active *::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        .fp-section.active {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `;
      
      // Only add if not already present
      if (!document.getElementById('hide-scrollbar-industries')) {
        document.head.appendChild(style);
      }
    };

    hideScrollbarsForIndustries();

    return () => {
      // Clean up styles when component unmounts
      const industriesStyle = document.getElementById('hide-scrollbar-industries');
      if (industriesStyle) {
        document.head.removeChild(industriesStyle);
      }
    };
  }, []);

  return (
    <>
      {/* Mobile Layout - Correct, non-scrolling, full-screen structure */}
      <div
        ref={mobileContainerRef}
        className="md:hidden w-full flex flex-col overflow-hidden bg-white relative"
      >
        {/* Header Section */}
        <div className="relative z-20 text-center pt-12 pb-4 px-4 bg-white flex-shrink-0">
          <h2 className="text-3xl font-bold text-jldBlue mb-4">
            Industries We Serve
          </h2>
          <p className="text-sm text-gray-600 text-justify px-2 max-w-sm mx-auto">
            Trusted across industries. Engineered by precision. Built to perform.
          </p>
        </div>

        {/* Carousel Section - Fills remaining space (restored original layout) */}
        <div
          className="relative flex-1 w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {industries.map((industry, index) => (
            <div
              key={industry.slug}
              className={`absolute inset-0 w-full h-full cursor-pointer transition-opacity duration-700 ease-in-out ${
                index === realIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              onClick={() => handleIndustryClick(industry.slug)}
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover"
                style={{
                  objectPosition: 'center 15%'
                }}
              />
              <div 
                className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent"
                style={{ height: '50%' }}
              ></div>
              <div className="absolute top-10 left-0 right-0 text-center">
                <h3 className="text-lg font-semibold text-jldBlue">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots - Positioned to match Products section height and perfectly centered */}
        <div className="absolute bottom-20 left-0 right-0 z-30">
          <div className="flex justify-center space-x-2">
            {industries.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer border-0 p-0 ${
                  index === realIndex ? 'bg-jldBlue' : 'bg-white'
                }`}
                onClick={() => setRealIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                style={{
                  minWidth: '8px',
                  minHeight: '8px',
                  background: index === realIndex ? '#1a365d' : 'white'
                }}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator - Exact same positioning as other sections */}
        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer touch-manipulation flex flex-col items-center justify-center"
          onClick={() => window.fullpage_api && window.fullpage_api.moveSectionDown()}
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

      {/* Desktop Layout */}
      <div className="hidden md:block h-screen w-full bg-white relative">
        <div
          className="text-center pt-20 pb-8 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-jldBlue">Industries We Serve</h2>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            Trusted across industries. Engineered by precision. Built to perform.
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 w-full"
        >
          <div className="w-full flex">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex-1 relative group cursor-pointer overflow-hidden"
                onClick={() => handleIndustryClick(industry.slug)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleIndustryClick(industry.slug);
                  }
                }}
                aria-label={`${industry.name} industry page`}
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-[304px] md:h-[404px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105"
                  style={{
                    transition: 'transform 0.5s ease-in-out, filter 0.5s ease-in-out',
                    opacity: 1,
                    maskImage: "linear-gradient(to top, black 60%, rgba(0,0,0,0.3) 85%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to top, black 60%, rgba(0,0,0,0.3) 85%, transparent 100%)",
                  }}
                />
                <h3 className="absolute top-1 left-0 right-0 text-center text-lg font-semibold text-jldBlue group-hover:scale-105 transition-transform duration-300">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
          
          {/* Desktop Scroll Indicator - Positioned exactly between 3rd and 4th industry images */}
          <div
            className="absolute bottom-6 cursor-pointer touch-manipulation flex flex-col items-center justify-center"
            onClick={() => window.fullpage_api && window.fullpage_api.moveSectionDown()}
            onTouchStart={() => window.fullpage_api && window.fullpage_api.moveSectionDown()}
            style={{
              left: 'calc(50% - 10px + 2px)',
              width: '20px',
              height: '20px',
              zIndex: 20
            }}
          >
            <div className="text-jldBlue/70 hover:text-jldBlue transition-colors p-2 flex items-center justify-center animate-bounce">
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
      </div>
    </>
  );
}