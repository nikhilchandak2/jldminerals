import React, { useEffect, useRef } from "react";
// Removed motion imports - using CSS fade effects instead
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();
  const mobileContainerRef = useRef(null);

  const handleNavigation = (link, label) => {
    if (link === "/") {
      // Navigate to home and scroll to hero
      navigate("/home");
      setTimeout(() => {
        if (window.fullpage_api) {
          window.fullpage_api.moveTo(1);
        }
      }, 100);
    } else if (link === "/products") {
      // Navigate to home and scroll to products section
      navigate("/home");
      setTimeout(() => {
        if (window.fullpage_api) {
          window.fullpage_api.moveTo(4);
        }
      }, 100);
    } else if (link === "/applications") {
      // Navigate to home and scroll to industries section
      navigate("/home");
      setTimeout(() => {
        if (window.fullpage_api) {
          window.fullpage_api.moveTo(5);
        }
      }, 100);
    } else if (link === "/sustainability") {
      // Navigate to home and scroll to sustainability section
      navigate("/home");
      setTimeout(() => {
        if (window.fullpage_api) {
          window.fullpage_api.moveTo(7);
        }
      }, 100);
    } else {
      // Navigate to dedicated pages
      navigate(link);
    }
  };

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
      {/* Desktop Version */}
      <div className="hidden md:flex h-screen w-full bg-white text-jldBlue px-6 font-[Futura] flex-col">
        <div className="flex-1 flex flex-col justify-center items-center">
          <div
            className="flex flex-row justify-center items-center w-full max-w-6xl"
          >
            {/* Left Section with Logo */}
            <div className="flex-1 flex flex-col justify-center items-center py-6">
              <img
                src="/assets/jld-logo.jpg"
                alt="JLD Minerals Logo"
                className="h-10 object-contain"
              />
            </div>

            {/* Divider */}
            <div className="w-[2px] h-40 bg-jldRed mx-8 rounded-full" />

            {/* Right Section with Navigation */}
            <div className="flex-1 flex justify-center items-center py-6">
              <ul className="space-y-4 text-left">
                {[
                  ["Home", "/"],
                  ["About Us", "/about"],
                  ["Products", "/products"],
                  ["Applications", "/applications"],
                  ["Sustainability", "/sustainability"],
                  ["Blogs", "/blogs"],
                  ["Careers", "/careers"],
                  ["Contact Us", "/contact"]
                ].map(([label, link], index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation(link, label)}
                      className="text-lg hover:text-jldRed transition-colors cursor-pointer"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="w-full text-center text-sm text-[#888] py-4"
        >
          &copy; 2025 JLD Minerals.{" "}
          <strong className="text-jldBlue">
            Crafting the Future with Every Layer of Earth.
          </strong>
        </footer>
      </div>

      {/* Mobile Version */}
      <div 
        ref={mobileContainerRef}
        className="md:hidden w-full bg-white text-jldBlue font-[Futura] flex flex-col overflow-hidden"
      >
        {/* Logo Section */}
        <div 
          className="flex justify-center items-center pt-12 pb-8"
        >
          <img
            src="/assets/jld-logo.jpg"
            alt="JLD Minerals Logo"
            className="h-8 object-contain"
          />
        </div>

        {/* Navigation Grid */}
        <div 
          className="flex-1 px-6 flex items-center justify-center"
        >
          <div className="w-full max-w-sm">
            <div className="grid grid-cols-2 gap-6">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Products", "/products"],
                ["Applications", "/applications"],
                ["Sustainability", "/sustainability"],
                ["Blogs", "/blogs"],
                ["Careers", "/careers"],
                ["Contact Us", "/contact"]
              ].map(([label, link], index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(link, label)}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 text-center"
                >
                  <span className="text-sm font-medium text-jldBlue">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="w-full text-center text-xs text-[#888] px-6 pb-8 pt-4"
        >
          <div className="space-y-1">
            <div>&copy; 2025 JLD Minerals.</div>
            <div className="text-jldBlue font-medium text-xs">
              Crafting the Future with Every Layer of Earth.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
