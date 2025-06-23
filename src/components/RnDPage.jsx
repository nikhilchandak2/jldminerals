import React, { useEffect } from "react";
// Removed motion imports - using CSS fade effects instead
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useHideScrollbar } from "../hooks/useHideScrollbar";

const RnDPage = () => {
  const navigate = useNavigate();
  useHideScrollbar();

  useEffect(() => {
    // Add product page class to body to override global styles
    document.body.classList.add('product-page');
    
    return () => {
      document.body.classList.remove('product-page');
    };
  }, []);

  const rdHighlights = [
    {
      title: "Advanced R&D Labs",
      description: "Two state-of-the-art facilities with cutting-edge equipment"
    },
    {
      title: "Expert Team",
      description: "Highly qualified ceramic technologists and formulation experts"
    },
    {
      title: "Extensive Raw Material Base",
      description: "Access to diverse mine resources for unparalleled flexibility"
    }
  ];

  const technicalServices = [
    {
      title: "Factory Visits",
      description: "Regular on-site analysis and operational challenge assessment"
    },
    {
      title: "Formulation Tweaking",
      description: "Hands-on collaboration to optimize material compositions"
    },
    {
      title: "Productivity Enhancement",
      description: "Solutions that increase efficiency and reduce costs by millions"
    },
    {
      title: "Strategic Partnership",
      description: "Beyond material supply - process insight and ceramic expertise"
    }
  ];

  const qualityTests = [
    "XRF Chemical Analysis",
    "Loss on Ignition (LOI)",
    "Moisture Content Measurement",
    "Plasticity & Shrinkage Tests",
    "Dry & Fired Strength Tests",
    "Fired Whiteness & Water Absorption",
    "Rheological Behavior Analysis",
    "Particle Size Distribution"
  ];

  const whyItMatters = [
    {
      title: "Unique Clay Solutions",
      description: "Unmatched ability to develop solutions using diverse mine resources"
    },
    {
      title: "Embedded Teams",
      description: "Technical teams deeply integrated in customer operations"
    },
    {
      title: "Full-Circle Integration",
      description: "Seamless connection between R&D, QC, and application"
    },
    {
      title: "Innovation Leadership",
      description: "Top-tier labs, tools, and experts driving industry innovation"
    },
    {
      title: "Competitive Advantage",
      description: "Customers gain productivity, cost-efficiency, and market edge"
    }
  ];

  return (
    <>
      <Helmet>
        <title>R&D, Technical Support & Quality Control - Driving Innovation, Solving Challenges, Ensuring Consistency | JLD Minerals</title>
        <meta
          name="description"
          content="JLD Minerals R&D division - advanced labs, ceramic technologists, technical support, and quality control ensuring consistent, innovative ceramic solutions."
        />
        <link rel="canonical" href="https://jldminerals.com/rd-innovation" />
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        <div className="container mx-auto px-6 py-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <header className="flex justify-between items-center mb-8">
              <img 
                src="/assets/jld-logo.png" 
                alt="JLD Minerals" 
                className="h-8 w-auto"
                loading="lazy"
              />
              <button 
                onClick={() => navigate('/home')}
                className="text-gray-600 hover:text-jldBlue transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
              >
                <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
                <span>Back to Home</span>
              </button>
            </header>

            {/* Hero Section - Keep original heading format */}
            <div className="min-h-screen flex flex-col justify-center items-center text-center -mt-14 mb-32">
              <div className="max-w-6xl mx-auto space-y-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-jldBlue mb-4 leading-none tracking-tight">
                  R&D, Technical Support & <span className="text-jldRed font-normal">Quality Control</span>
                </h1>
                
                <div className="w-32 h-px bg-jldBlue mx-auto" />
                
                <h2 className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
                  Driving Innovation, Solving Challenges, Ensuring Consistency
                </h2>
                
                <div className="max-w-4xl mx-auto space-y-6 mt-12">
                  <p className="text-xl text-gray-700 leading-relaxed font-light">
                    At JLD Minerals, technical excellence is not just a promise — it's embedded in our DNA.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Across Research & Development, Technical Support, and Quality Control, we deliver value-driven, future-ready, and application-specific ceramic solutions to clients around the globe.
                  </p>
                </div>
              </div>
            </div>

            {/* Research & Development Section */}
            <div className="mb-32">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Research & Development
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
                  Innovating the Future of Ceramic Raw Materials
                </p>
              </div>

              {/* R&D Highlights Cards */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {rdHighlights.map((highlight, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-semibold text-jldBlue mb-4">{highlight.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{highlight.description}</p>
                  </div>
                ))}
              </div>

              {/* Key Advantages */}
              <div className="bg-white border-2 border-gray-100 rounded-3xl p-10 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-jldBlue mb-6">Unparalleled Advantages</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-jldRed rounded-full mt-3"></div>
                        <p className="text-gray-700 leading-relaxed">Access to one of the widest local clay reserves in the country</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-jldRed rounded-full mt-3"></div>
                        <p className="text-gray-700 leading-relaxed">Develop specialty clays that consistently outperform market standards</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-jldRed rounded-full mt-3"></div>
                        <p className="text-gray-700 leading-relaxed">Forward-looking projects for next-generation materials</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-jldBlue to-jldRed p-8 rounded-2xl text-white">
                    <h4 className="text-xl font-semibold mb-4">Our Mission</h4>
                    <p className="text-lg leading-relaxed opacity-95">
                      Value creation for our clients through cost-efficient, technically superior, and scalable engineered solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Support Section */}
            <div className="mb-32">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Technical Support
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
                  Solving Complex Challenges On-Site & At Scale
                </p>
              </div>

              {/* Technical Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {technicalServices.map((service, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-lg font-semibold text-jldBlue mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>

              {/* Industry Leadership Statement */}
              <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-10 rounded-3xl border border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-2xl font-semibold text-jldBlue mb-6">Industry Leadership</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    JLD Minerals leads the industry in real-time technical support, offering unmatched collaboration between our field technicians and in-house R&D team.
                  </p>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <p className="text-xl text-jldBlue font-medium">
                      Our customers rely on us not just for material, but for partnership, process insight, and ceramic expertise that adds tangible value to their business.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Control Section */}
            <div className="mb-32">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Quality Control
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
                  Consistency from the Ground Up
                </p>
              </div>

              {/* Quality Process Flow */}
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-jldBlue">Pre-Excavation Excellence</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-jldBlue rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Geographic Survey</h4>
                        <p className="text-gray-600 text-sm">Comprehensive geo-chemical testing and analysis</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-jldBlue rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Layer Mapping</h4>
                        <p className="text-gray-600 text-sm">Segregation based on chemical and physical parameters</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-jldBlue rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Multi-Point Sampling</h4>
                        <p className="text-gray-600 text-sm">Continuous sampling during processing for consistency</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-jldBlue">Comprehensive Testing Suite</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {qualityTests.map((test, index) => (
                      <div key={index} className="bg-white border border-gray-200 p-3 rounded-lg text-center hover:border-jldBlue transition-colors duration-300">
                        <span className="text-sm text-gray-700 font-medium">{test}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quality Assurance Promise */}
              <div className="bg-gradient-to-r from-jldBlue to-jldRed p-10 rounded-3xl text-white text-center">
                <h3 className="text-2xl font-semibold mb-4">Our Quality Promise</h3>
                <p className="text-xl leading-relaxed opacity-95 max-w-4xl mx-auto">
                  Each dispatch is backed by batch-level traceability, documentation, and technical conformance, ensuring that our customers receive only the most reliable and consistent material — every single time.
                </p>
              </div>
            </div>

            {/* Why It Matters Section */}
            <div className="mb-32">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-light text-jldBlue mb-6">
                  Why It Matters
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover what makes JLD Minerals the preferred technical partner
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {whyItMatters.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-jldBlue hover:shadow-lg transition-all duration-300">
                    {/* Smart bar accent */}
                    <div className="w-1/4 h-1 bg-gradient-to-r from-jldBlue to-jldRed rounded-full mb-6"></div>
                    
                    <h3 className="text-lg font-semibold text-jldBlue mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Statement */}
            <div className="bg-gradient-to-r from-jldBlue to-jldRed rounded-3xl p-12 text-center text-white">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Innovation, precision, and support — the JLD way.
                </h2>
                
                <p className="text-xl mb-8 opacity-95">
                  Let our technical backbone become your ceramic advantage.
                </p>

                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-white text-jldBlue px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                >
                  Contact Our Technical Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default RnDPage; 