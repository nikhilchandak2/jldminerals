import React, { memo } from "react";
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

// Fullpage.js configuration
const FULLPAGE_CONFIG = {
  licenseKey: "15NV8-MO996-KKK67-4JZQI-KATGN",
  scrollingSpeed: 800,
  css3: true,
  easingcss3: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  navigation: true,
  navigationPosition: "right",
  sectionsColor: new Array(8).fill("transparent"),
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 300,
  scrollBar: false,
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
  return (
    <div className="relative w-full h-screen">
      <ReactFullpage
        {...FULLPAGE_CONFIG}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            {SECTIONS.map(({ component: Component, anchor }) => (
              <div key={anchor} className="section" data-anchor={anchor}>
                <Component />
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
});

App.displayName = "App";

export default App;