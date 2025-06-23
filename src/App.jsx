import React, { memo, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./styles/fullpage.css";

// Import components
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import GlobalSnapshot from "./components/GlobalSnapshot";
import OurProducts from "./components/OurProducts";
import Industries from "./components/Industries";
import RnDInnovation from "./components/RnDInnovation";
import Sustainability from "./components/Sustainability";
import ContactUs from "./components/ContactUs";

// Optimized Fullpage.js configuration with proper history handling and smooth transitions
const FULLPAGE_CONFIG = {
  licenseKey: "15NV8-MO996-KKK67-4JZQI-KATGN",
  scrollingSpeed: 350,
  css3: true,
  easingcss3: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  navigation: true,
  navigationPosition: "right",
  sectionsColor: new Array(8).fill("transparent"),
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 25,
  scrollBar: false,
  recordHistory: true,
  anchors: ["hero", "about", "snapshot", "products", "industries", "rnd", "sustainability", "contact"],
  menu: null,
  verticalCentered: true,
  resize: true,
  dragAndMove: false,
  touchSensitivity: 5,
  normalScrollElementTouchThreshold: 5,
  bigSectionsDestination: "top",
  animateAnchor: true,
  lazyLoading: false,
  
  // Critical callbacks for proper fade initialization
  afterRender: function() {
    // Ensure first section is properly visible and transitions are enabled
    setTimeout(() => {
      const firstSection = document.querySelector('.fp-section:first-child');
      if (firstSection) {
        firstSection.style.opacity = '1';
        firstSection.style.zIndex = '10';
      }
      
      // Enable transitions for all sections after initialization
      document.querySelectorAll('.fp-section').forEach(section => {
        section.style.transition = 'opacity 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      });
    }, 50);
  },
  
  onLeave: function(origin, destination, direction) {
    // Ensure smooth transitions by managing opacity states
    const allSections = document.querySelectorAll('.fp-section');
    allSections.forEach((section, index) => {
      if (index === destination.index) {
        section.style.opacity = '1';
        section.style.zIndex = '10';
      } else {
        section.style.opacity = '0';
        section.style.zIndex = '1';
      }
    });
  },
  
  afterLoad: function(origin, destination, direction) {
    // Final opacity confirmation after transition completes
    setTimeout(() => {
      const activeSection = document.querySelector('.fp-section.active');
      if (activeSection) {
        activeSection.style.opacity = '1';
        activeSection.style.zIndex = '10';
      }
    }, 25);
  }
};

// Section configuration for better maintainability
const SECTIONS = [
  { component: Hero, anchor: "hero" },
  { component: AboutUs, anchor: "about" },
  { component: GlobalSnapshot, anchor: "snapshot" },
  { component: OurProducts, anchor: "products" },
  { component: Industries, anchor: "industries" },
  { component: RnDInnovation, anchor: "rnd" },
  { component: Sustainability, anchor: "sustainability" },
  { component: ContactUs, anchor: "contact" },
];

const App = memo(() => {
  useEffect(() => {
    // Enhanced hash navigation handler with proper history support
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && window.fullpage_api) {
        // Clear any existing timeouts
        clearTimeout(window.navigationTimeout);
        
        // Navigate with a slight delay for stability
        window.navigationTimeout = setTimeout(() => {
          try {
            const sectionIndex = SECTIONS.findIndex(section => section.anchor === hash);
            if (sectionIndex !== -1) {
              window.fullpage_api.moveTo(sectionIndex + 1);
            }
          } catch (error) {
            console.error('Navigation error:', error);
          }
        }, 50);
      }
    };

    // Handle initial navigation and browser back/forward
    const handlePopState = (event) => {
      handleHashNavigation();
    };

    // Handle initial navigation after component mount
    setTimeout(handleHashNavigation, 100);

    // Listen for browser navigation events
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashNavigation);

    // Clean up function
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashNavigation);
      if (window.navigationTimeout) {
        clearTimeout(window.navigationTimeout);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ReactFullpage
        {...FULLPAGE_CONFIG}
        render={({ state, fullpageApi }) => {
          // Store API reference globally for navigation
          if (fullpageApi && !window.fullpage_api) {
            window.fullpage_api = fullpageApi;
          }
          
          return (
          <ReactFullpage.Wrapper>
            {SECTIONS.map(({ component: Component, anchor }) => (
              <div key={anchor} className="section" data-anchor={anchor}>
                <Component />
              </div>
            ))}
          </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
});

App.displayName = "App";

export default App;