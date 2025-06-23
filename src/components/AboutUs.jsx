import React from 'react';
// Removed motion imports - using CSS fade effects instead
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    try {
      navigate('/about');
    } catch (error) {
      console.error('Navigation error:', error);
    window.location.href = '/about';
    }
  };

  const handleScrollDown = () => {
    // Add scroll functionality to move to next section
    if (window.fullpage_api) {
      window.fullpage_api.moveSectionDown();
    }
  };

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center"
    >
      <Helmet>
        <title>About JLD Minerals – Clay Mining & Export Experts</title>
        <meta
          name="description"
          content="JLD Minerals is India's leading supplier of Ball Clay, Kaolin, and other clay minerals. Explore our legacy and commitment to quality, sustainability, and innovation."
        />
        <meta
          name="keywords"
          content="JLD Minerals, About JLD, Ball Clay Exporter, Kaolin Supplier, Clay Mining India"
        />
      </Helmet>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/1.webp"
          alt="Mining Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content - Mobile positioned high on sky, desktop unchanged */}
      <div className="relative z-10 text-center px-4 max-w-6xl 
                   -mt-[21rem] sm:-mt-[16rem] md:-mt-[18rem] lg:-mt-[20rem] xl:-mt-[22rem]"
      >
        <p className="text-sm sm:text-lg md:text-xl leading-tight sm:leading-relaxed mb-6 sm:mb-6 text-jldBlue font-futura text-justify sm:text-center px-2 sm:px-0">
          <strong>JLD Minerals</strong> delivers precision-engineered ceramic raw materials to top manufacturers worldwide. Driven by deep R&D and technical insight, we solve complex formulation and firing challenges.<br className="hidden sm:block" />
          <span className="block sm:inline"> From mine to lab, we create materials that perform — consistently, reliably, and ahead of the curve.</span>
        </p>
        <button 
          onClick={handleViewMore}
          className="px-3 sm:px-6 py-1.5 sm:py-2 border border-jldBlue text-jldBlue rounded-full transition duration-300 hover:bg-jldBlue hover:text-white cursor-pointer font-futura text-xs sm:text-base"
        >
          About Us
        </button>
      </div>

      {/* Mobile Scroll Indicator - Same as GlobalSnapshot mobile version */}
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

      {/* Desktop Scroll Indicator - Exact same positioning as Industries section */}
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

    </section>
  );
};

export default AboutUs;