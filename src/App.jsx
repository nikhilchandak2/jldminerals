import React, { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import GlobalSnapshot from "./components/GlobalSnapshot";
import OurProducts from "./components/OurProducts";
import Industries from "./components/Industries";
import RnDInnovation from "./components/RnDInnovation";
import Sustainability from "./components/Sustainability";
import ContactUs from "./components/ContactUs";

export default function App() {
  useEffect(() => {
    // Add minimal global styles
    const style = document.createElement('style');
    style.textContent = `
      /* Hide custom DotNav component */
      .dot-nav {
        display: none !important;
      }
      
      /* Basic ReactFullpage setup */
      #fullpage {
        height: 100vh !important;
        overflow: hidden !important;
      }
      
      .fp-section {
        width: 100% !important;
        height: 100vh !important;
        position: relative !important;
      }
      
      /* Navigation dots styling */
      #fp-nav {
        position: fixed !important;
        z-index: 100 !important;
        right: 20px !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
      }
      
      #fp-nav ul li a span {
        border-radius: 50% !important;
        height: 4px !important;
        width: 4px !important;
        background: rgba(43, 35, 94, 0.4) !important;
        transition: all 0.3s ease !important;
      }
      
      #fp-nav ul li a.active span {
        background: #2b235e !important;
        width: 10px !important;
        height: 10px !important;
      }
      
      /* White dots for dark backgrounds */
      .fp-viewing-hero #fp-nav ul li a span,
      .fp-viewing-products #fp-nav ul li a span {
        background: rgba(255, 255, 255, 0.4) !important;
      }
      
      .fp-viewing-hero #fp-nav ul li a.active span,
      .fp-viewing-products #fp-nav ul li a.active span {
        background: #ffffff !important;
      }
      
      /* Remove body scroll */
      body, html {
        overflow: hidden !important;
        margin: 0 !important;
        padding: 0 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      <ReactFullpage
        licenseKey="15NV8-MO996-KKK67-4JZQI-KATGN"
        scrollingSpeed={1000}
        navigation={true}
        navigationPosition="right"
        autoScrolling={true}
        fitToSection={true}
        scrollBar={false}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Hero />
              </div>
              <div className="section">
                <div style={{ backgroundColor: 'white', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2b235e', fontSize: '2rem' }}>
                  <div>
                    <h1>About Us Section</h1>
                    <AboutUs />
                  </div>
                </div>
              </div>
              <div className="section">
                <div style={{ backgroundColor: '#f8f9fa', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2b235e', fontSize: '2rem' }}>
                  <div>
                    <h1>Global Snapshot Section</h1>
                    <GlobalSnapshot />
                  </div>
                </div>
              </div>
              <div className="section">
                <OurProducts />
              </div>
              <div className="section">
                <Industries />
              </div>
              <div className="section">
                <RnDInnovation />
              </div>
              <div className="section">
                <Sustainability />
              </div>
              <div className="section">
                <ContactUs />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}