import React, { useRef, useEffect } from "react";
// Removed motion imports - using CSS fade effects instead
import { useNavigate } from "react-router-dom";

export default function RnDInnovation() {
  const navigate = useNavigate();
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

  return (
    <>
      {/* Mobile Layout */}
      <div
        ref={mobileContainerRef}
        className="md:hidden w-full flex flex-col overflow-hidden bg-white relative"
      >
        {/* Background Image with blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        
        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 py-8">
          <div
            className="max-w-md w-full space-y-4 mx-auto"
          >
            {/* Heading - Match Products section font size and center */}
            <div
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-jldBlue">R&D and</span> <span className="font-bold text-jldRed">Innovation</span>
              </h2>
            </div>

            {/* Opening Statement - Justified */}
            <p
              className="text-base font-medium leading-relaxed text-jldBlue text-justify"
            >
              At JLD Minerals, technical precision is the foundation of everything we do.
            </p>

            {/* Condensed Content - Justified */}
            <div
              className="space-y-3 text-sm leading-relaxed text-jldBlue text-justify"
            >
              <p>
                Our in-house R&D and quality control lab replicates real-world ceramic manufacturing conditions, rigorously testing every material property that affects your production. Each batch undergoes multi-stage testing and validation, ensuring unmatched consistency and reliability.
              </p>
              
              <p>
                Our technical team brings together deep ceramic knowledge, lab-driven insights, and real production experience. We work hand-in-hand with your team to solve complex issues, optimize formulations, reduce rejection rates, and lower costs through smarter material design.
              </p>
            </div>

            {/* Closing Statement - Justified */}
            <p
              className="text-base font-medium leading-relaxed text-jldBlue text-justify"
            >
              At JLD, collaboration replaces guesswork, and your challenges become ours to solve.
            </p>

            {/* CTA Button - Centered */}
            <div
              className="pt-3 text-center"
            >
              <button
                onClick={() => navigate('/rd-innovation')}
                className="px-5 py-2 border border-jldBlue text-jldBlue rounded-full transition duration-300 hover:bg-jldBlue hover:text-white cursor-pointer font-futura text-sm"
              >
                Explore Our R&D Capabilities →
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Exact same positioning as other sections */}
        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer touch-manipulation flex flex-col items-center justify-center"
          onClick={() => window.fullpage_api && window.fullpage_api.moveSectionDown()}
        >
          <div
            className="text-white/70 hover:text-white transition-colors p-2 flex items-center justify-center"
          >
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
      <div className="hidden md:block h-screen relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        
        {/* Content Container - Positioned on white area */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12 lg:px-20">
          <div
            className="max-w-xl w-full space-y-6 ml-auto mr-6 md:mr-10 lg:mr-14"
          >
            {/* Heading */}
            <div
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-jldBlue">R&D and</span> <span className="font-bold text-jldRed">Innovation</span>
              </h2>
            </div>

            {/* Opening Statement */}
            <p
              className="text-lg md:text-xl font-medium leading-relaxed text-jldBlue"
            >
              At JLD Minerals, technical precision is the foundation of everything we do.
            </p>

            {/* Condensed Content */}
            <div
              className="space-y-4 text-sm md:text-base leading-relaxed text-jldBlue"
            >
              <p>
                Our in-house R&D and quality control lab replicates real-world ceramic manufacturing conditions, rigorously testing every material property that affects your production. Each batch undergoes multi-stage testing and validation, ensuring unmatched consistency and reliability.
              </p>
              
              <p>
                Our technical team brings together deep ceramic knowledge, lab-driven insights, and real production experience. We work hand-in-hand with your team to solve complex issues, optimize formulations, reduce rejection rates, and lower costs through smarter material design.
              </p>
            </div>

            {/* Closing Statement */}
            <p
              className="text-lg md:text-xl font-medium leading-relaxed text-jldBlue"
            >
              At JLD, collaboration replaces guesswork, and your challenges become ours to solve.
            </p>

            {/* CTA Button */}
            <div
              className="pt-4"
            >
              <button
                onClick={() => navigate('/rd-innovation')}
                className="px-6 py-2 border border-jldBlue text-jldBlue rounded-full transition duration-300 hover:bg-jldBlue hover:text-white cursor-pointer font-futura"
              >
                Explore Our R&D Capabilities →
              </button>
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
