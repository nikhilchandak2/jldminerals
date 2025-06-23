import React, { useRef, useEffect, useState } from "react";
// Removed motion imports - using CSS fade effects instead

export default function Sustainability() {
  const mobileContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Content cards for carousel - 3 optimized cards with all desktop content
  const contentCards = [
    {
      id: 1,
      type: "intro_and_safety",
      content: (
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100 shadow-lg h-full flex flex-col justify-center">
          <div className="space-y-4">
            <div className="w-12 h-1 bg-gradient-to-r from-jldBlue to-jldRed mb-4"></div>
            <p className="text-lg text-jldBlue font-semibold leading-relaxed text-center mb-4">
              At JLD Minerals, sustainability isn't a statement — it's a standard we uphold across every facet of our business.
            </p>
            
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              We are deeply committed to responsible mining, environmental stewardship, and community well-being. Some of our mines have been repeatedly recognized with "Safest Mine" awards by government authorities — a reflection of our unwavering focus on safety, training, and compliance.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      type: "community_impact",
      content: (
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100 shadow-lg h-full flex flex-col justify-center">
          <div className="space-y-4">
            <div className="w-12 h-1 bg-gradient-to-r from-jldBlue to-jldRed mb-4"></div>
            <p className="text-base text-jldBlue font-medium leading-relaxed text-center mb-3">
              Community Well-being
            </p>
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              Our commitment extends far beyond the mine. We regularly conduct free medical camps and have facilitated hundreds of life-changing medical operations for those in need. We also actively support local schools and hospitals, contributing to long-term educational and healthcare impact in the regions we operate.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      type: "esg_vision",
      content: (
        <div className="h-full flex flex-col space-y-3">
          {/* ESG Card - Top Half */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-5 border border-gray-100 shadow-lg flex-1 flex flex-col justify-center">
            <div className="space-y-3">
              <div className="w-10 h-1 bg-gradient-to-r from-jldBlue to-jldRed mb-2"></div>
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                From waste reduction and energy-efficient processes to governance rooted in transparency, our approach to ESG is both practical and deeply personal.
              </p>
            </div>
          </div>

          {/* Vision Statement Card - Bottom Half with Final Message */}
          <div className="bg-gradient-to-r from-jldBlue to-jldRed rounded-2xl p-5 border border-gray-100 shadow-lg flex-1 flex flex-col justify-center">
            <div className="space-y-3">
              <div className="w-10 h-1 bg-white/50 mb-2"></div>
              <p className="text-sm text-white leading-relaxed text-center font-medium">
                At JLD, we don't just extract minerals — we work to uplift the land, the people, and the future of the ceramic ecosystem.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

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

  // Touch/swipe support for mobile - Match Industries section exactly
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

    if (isLeftSwipe && currentIndex < contentCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      {/* Mobile Layout */}
      <div
        ref={mobileContainerRef}
        className="md:hidden w-full flex flex-col overflow-hidden bg-white relative"
      >
        {/* Header Section - Fixed at top */}
        <div className="relative z-20 text-center pt-12 pb-0 px-4 bg-white flex-shrink-0">
          <h2
            className="text-3xl font-bold text-jldBlue mb-4"
          >
            Sustainability & ESG
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto"></div>
        </div>

        {/* Carousel Content - Fix to properly display cards */}
        <div 
          className="relative flex-1 w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {contentCards.map((card, index) => (
            <div
              key={card.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="w-full h-full px-6 flex items-center justify-center">
                <div className="w-full max-w-md mx-auto">
                  <div className="w-full">
                    {card.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots - Match Industries/Products section styling exactly */}
        <div className="absolute bottom-20 left-0 right-0 z-30">
          <div className="flex justify-center space-x-2">
            {contentCards.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer border-0 p-0 ${
                  index === currentIndex ? 'bg-jldBlue' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                style={{
                  minWidth: '8px',
                  minHeight: '8px',
                  background: index === currentIndex ? '#101048' : '#9ca3af'
                }}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator - Match other sections exactly with bounce animation */}
        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer touch-manipulation flex flex-col items-center justify-center"
          onClick={() => window.fullpage_api && window.fullpage_api.moveSectionDown()}
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
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

      {/* Desktop Layout */}
      <div className="hidden md:block h-screen bg-white text-jldBlue px-6 py-12">
        <div className="h-full flex flex-col items-center justify-center">
          {/* Header */}
          <div
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Sustainability & ESG
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Content - Single Screen Layout */}
            <div
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Left Column - Main Content */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100 shadow-lg">
                  <p className="text-lg md:text-xl text-jldBlue font-medium leading-relaxed mb-6">
                    At JLD Minerals, sustainability isn't a statement — it's a standard we uphold across every facet of our business.
                  </p>
                  
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    We are deeply committed to responsible mining, environmental stewardship, and community well-being. Some of our mines have been repeatedly recognized with "Safest Mine" awards by government authorities — a reflection of our unwavering focus on safety, training, and compliance.
                  </p>
                  
                  <p className="text-base text-gray-700 leading-relaxed">
                    Our commitment extends far beyond the mine. We regularly conduct free medical camps and have facilitated hundreds of life-changing medical operations for those in need. We also actively support local schools and hospitals, contributing to long-term educational and healthcare impact in the regions we operate.
                  </p>
                </div>
              </div>

              {/* Right Column - ESG & Final Statement */}
              <div className="space-y-6 h-full flex flex-col">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg flex-1 flex flex-col justify-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-jldBlue to-jldRed mb-6"></div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    From waste reduction and energy-efficient processes to governance rooted in transparency, our approach to ESG is both practical and deeply personal.
                  </p>
                </div>

                {/* Final Statement */}
                <div className="bg-gradient-to-r from-jldBlue to-jldRed rounded-2xl p-8 text-left text-white shadow-xl flex-1 flex flex-col justify-center">
                  <div className="w-16 h-1 bg-white/30 mb-6"></div>
                  <p className="text-base font-light leading-relaxed">
                    At JLD, we don't just extract minerals — we work to uplift the land, the people, and the future of the ceramic ecosystem.
                  </p>
                  <div className="w-16 h-1 bg-white/30 mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Scroll Indicator - Exact same positioning as Industries section */}
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
    </>
  );
}
