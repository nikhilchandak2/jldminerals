import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet';

const AboutUsPage = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  const timelineEvents = [
    { year: "1965", title: "Foundation", description: "JLD Minerals established with a vision to supply quality ceramic raw materials" },
    { year: "1978", title: "First Mining License", description: "Acquired our first ball clay mining license, beginning our journey in mineral extraction" },
    { year: "1985", title: "Processing Plant", description: "Built our first state-of-the-art mineral processing facility" },
    { year: "1992", title: "Export Operations", description: "Started international exports, reaching our first overseas markets" },
    { year: "2000", title: "Major Expansion", description: "Expanded to 10+ mining assets and multiple processing plants" },
    { year: "2010", title: "R&D Center", description: "Established dedicated research and development facility for ceramic materials" },
    { year: "2015", title: "Global Recognition", description: "Became India's largest ceramic raw material supplier and leading exporter" },
    { year: "2020", title: "Digital Transformation", description: "Implemented Industry 4.0 technologies across operations" },
    { year: "2025", title: "Future Vision", description: "Continuing innovation with 30+ mines serving 25+ countries worldwide" }
  ];

  const stats = [
    { number: 50, suffix: "+", label: "Years of Excellence" },
    { number: 30, suffix: "+", label: "Mining Assets" },
    { number: 25, suffix: "+", label: "Countries Served" },
    { number: 1500, suffix: "+", label: "Employees" }
  ];

  const businessVerticals = [
    "Electrical porcelain manufacturing",
    "Granite and quartzite mining", 
    "Agricultural development",
    "High-purity quartz for engineered stone industry"
  ];

  const achievements = [
    'Solve complex production issues',
    'Reduce firing defects and rejection rates',
    'Optimize ceramic body formulations',
    'Achieve cost reductions',
    'Decrease dependency on imported materials'
  ];

  // Timeline Navigation State
  const [currentTimelineIndex, setCurrentTimelineIndex] = useState(0);

  // Counter Animation Hook
  const useCountAnimation = (target, duration = 2000) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const inView = useInView(countRef, { once: true });

    useEffect(() => {
      if (inView) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
      }
    }, [inView, target, duration]);

    return [count, countRef];
  };

  // Stats Counter Component
  const StatCounter = ({ stat, index }) => {
    const [count, countRef] = useCountAnimation(stat.number, 2000);
    
    return (
      <motion.div 
        ref={countRef}
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-3xl md:text-4xl font-bold text-jldBlue mb-2">
          {count}{stat.suffix}
        </div>
        <div className="text-gray-600 text-sm font-medium">
          {stat.label}
        </div>
      </motion.div>
    );
  };

  // Timeline Navigation Functions
  const nextTimeline = () => {
    setCurrentTimelineIndex((prev) => 
      prev + 3 >= timelineEvents.length ? 0 : prev + 3
    );
  };

  const prevTimeline = () => {
    setCurrentTimelineIndex((prev) => 
      prev - 3 < 0 ? Math.max(0, timelineEvents.length - 3) : prev - 3
    );
  };

  return (
    <div className="min-h-screen bg-white font-futura overflow-x-hidden">
      <Helmet>
        <title>About JLD Minerals - India's Leading Ceramic Raw Material Supplier & Exporter</title>
        <meta name="description" content="JLD Minerals is India's largest ceramic raw material supplier and exporter of ball clay, potash feldspar, and custom ceramic inputs, with 30+ mines and clients across 25+ countries." />
        <meta name="keywords" content="JLD Minerals, ceramic raw materials, ball clay exporter, potash feldspar, India largest supplier, ceramic materials, tile industry, sanitaryware, tableware" />
        <link rel="canonical" href="https://jldminerals.com/about" />
      </Helmet>

      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <img src="/assets/jld-logo.png" alt="JLD Minerals" className="h-8" />
          <button 
            onClick={handleBackHome}
            className="text-gray-600 hover:text-jldBlue transition-colors duration-300 text-sm font-medium flex items-center gap-2"
          >
            <span>←</span>
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Single Page Content */}
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Hero Section */}
          <div className="py-12 text-center">
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-jldBlue/10 to-jldRed/10 text-jldBlue rounded-full text-sm font-semibold border border-jldBlue/20">
                Established 1965 • 50+ Years of Excellence
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-jldBlue mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              About JLD Minerals
            </motion.h1>
            
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-6 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              India's Leading <span className="text-jldBlue font-semibold">Ceramic Raw Material</span> Supplier & Exporter
            </motion.p>

            <motion.p 
              className="text-gray-500 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Transforming the global ceramic industry through precision-engineered materials and unwavering commitment to excellence across 25+ countries worldwide.
            </motion.p>
          </div>

          {/* Stats Row */}
          <div className="py-8 bg-gradient-to-r from-jldBlue/5 via-jldBlue/10 to-jldRed/5 rounded-2xl mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatCounter key={index} stat={stat} index={index} />
              ))}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            
            {/* Company Story Column */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Our Legacy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-jldBlue/10 to-jldRed/10 text-jldBlue rounded-full text-sm font-semibold border border-jldBlue/20">
                    Our Legacy
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-jldBlue mb-4">
                  Pioneering Excellence in Ceramic Raw Materials
                </h2>
                
                <div className="w-16 h-1 bg-gradient-to-r from-jldBlue to-jldRed mb-4 rounded-full"></div>
                
                <p className="text-gray-700 mb-4">
                  <strong className="text-jldBlue">JLD Minerals</strong> is a globally trusted ceramic raw material supplier, serving the tile, sanitaryware, and tableware industries with precision-engineered materials for over <strong className="text-jldBlue">50 years</strong>.
                </p>
                
                <p className="text-gray-600">
                  With a legacy spanning three generations, we bring deep expertise, scale, and innovation to every layer of the ceramic supply chain. Our commitment to excellence has made us the preferred partner for manufacturers across 25+ countries worldwide.
                </p>
              </motion.div>

              {/* Business Verticals */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-jldBlue mb-4">Diversified Operations</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {businessVerticals.map((vertical, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 border-l-4 border-jldBlue"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-jldBlue/20 to-jldRed/20 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-gradient-to-br from-jldBlue to-jldRed rounded-full"></div>
                        </div>
                        <p className="font-semibold text-gray-800 text-sm">{vertical}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Technical Expertise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-jldBlue mb-4">Technical Excellence</h3>
                <p className="text-gray-600 mb-4">India's most advanced hub for ceramic raw material research and innovation</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-jldBlue/5 to-jldRed/5 rounded-lg p-4 border border-jldBlue/20"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-jldBlue to-jldRed rounded-full mt-1 flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <p className="font-semibold text-jldBlue text-sm">{achievement}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Materials Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-jldBlue mb-4">Raw Materials Excellence</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-white to-jldBlue/5 rounded-lg p-6 border-l-4 border-jldBlue">
                    <h4 className="text-lg font-bold text-jldBlue mb-3">India's Largest Potash Feldspar Mine</h4>
                    <p className="text-gray-600 text-sm">Globally recognized for purity and whiteness, setting international standards for quality.</p>
                  </div>
                  <div className="bg-gradient-to-br from-white to-jldRed/5 rounded-lg p-6 border-l-4 border-jldRed">
                    <h4 className="text-lg font-bold text-jldBlue mb-3">Premium Ball Clay Reserves</h4>
                    <p className="text-gray-600 text-sm">Some of the biggest and best ball clay reserves in the country, delivering unmatched plasticity and fired performance.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              
              {/* Company Visual */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative inline-block">
                  <div className="w-48 h-48 bg-gradient-to-br from-jldBlue to-jldRed rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="text-center text-white">
                      <div className="text-3xl font-bold mb-2">50+</div>
                      <div className="text-lg font-medium">Years</div>
                      <div className="text-sm opacity-90">of Excellence</div>
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-jldBlue/20">
                    <div className="text-center">
                      <div className="text-sm font-bold text-jldBlue">25+</div>
                      <div className="text-xs text-gray-600">Countries</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Facts */}
              <motion.div
                className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-jldBlue mb-4">Quick Facts</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Founded:</span>
                    <span className="font-semibold text-jldBlue">1965</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mining Assets:</span>
                    <span className="font-semibold text-jldBlue">30+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Countries Served:</span>
                    <span className="font-semibold text-jldBlue">25+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Employees:</span>
                    <span className="font-semibold text-jldBlue">1500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Headquarters:</span>
                    <span className="font-semibold text-jldBlue">India</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                className="bg-gradient-to-r from-jldBlue to-jldRed rounded-lg p-6 text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold mb-3">Ready to Partner?</h4>
                <p className="text-sm mb-4 opacity-90">Discover how we can transform your ceramic manufacturing processes.</p>
                <button 
                  onClick={handleBackHome}
                  className="px-6 py-2 bg-white text-jldBlue rounded-lg hover:bg-gray-50 transition-colors duration-300 font-semibold text-sm"
                >
                  Explore Solutions
                </button>
              </motion.div>
            </div>
          </div>

          {/* Full Width Timeline */}
          <div className="mb-12">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-jldBlue mb-4">Our Journey Through Time</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-600">Six decades of innovation, growth, and excellence</p>
            </motion.div>

            {/* Timeline Container */}
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
              {/* Navigation Buttons */}
              <button
                onClick={prevTimeline}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-jldBlue hover:bg-jldBlue hover:text-white transition-all duration-300 border-2 border-jldBlue/20 hover:border-jldBlue"
                disabled={currentTimelineIndex === 0}
              >
                <span className="text-lg">‹</span>
              </button>

              <button
                onClick={nextTimeline}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-jldBlue hover:bg-jldBlue hover:text-white transition-all duration-300 border-2 border-jldBlue/20 hover:border-jldBlue"
                disabled={currentTimelineIndex + 3 >= timelineEvents.length}
              >
                <span className="text-lg">›</span>
              </button>

              {/* Timeline Track */}
              <div className="mx-12 relative">
                {/* Timeline Line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-jldBlue to-jldRed transform -translate-y-1/2"></div>
                
                {/* Timeline Items Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ minHeight: '300px' }}>
                  {timelineEvents.slice(currentTimelineIndex, currentTimelineIndex + 3).map((event, index) => {
                    const actualIndex = currentTimelineIndex + index;
                    const isTop = index % 2 === 0;
                    
                    return (
                      <motion.div
                        key={actualIndex}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: isTop ? -30 : 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        {/* Card Above/Below */}
                        <div className={`mb-6 ${isTop ? '' : 'order-3'}`}>
                          <div className="bg-white rounded-lg p-4 shadow-md border border-jldBlue/20 hover:border-jldBlue/40 transition-all duration-300 max-w-xs">
                            <div className="text-lg font-bold text-jldBlue mb-2">{event.year}</div>
                            <h3 className="text-md font-semibold text-jldBlue mb-2">{event.title}</h3>
                            <p className="text-gray-600 text-xs leading-relaxed">{event.description}</p>
                          </div>
                        </div>

                        {/* Timeline Dot */}
                        <div className={`w-4 h-4 bg-gradient-to-br from-jldBlue to-jldRed rounded-full border-2 border-white shadow-md z-10 ${isTop ? 'order-2' : 'order-2'}`}></div>

                        {/* Spacer for alignment */}
                        <div className={`${isTop ? 'order-3' : ''} ${!isTop ? 'mb-6' : ''}`} style={{ height: isTop ? '0' : '150px' }}></div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Timeline Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: Math.ceil(timelineEvents.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTimelineIndex(index * 3)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      Math.floor(currentTimelineIndex / 3) === index 
                        ? 'bg-jldBlue scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center py-8 bg-gradient-to-r from-jldBlue/5 to-jldRed/5 rounded-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-jldBlue mb-4">
                Built on Trust, Driven by Innovation
              </h2>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                At JLD Minerals, we create long-term value for the global ceramic industry through responsible mining, world-class technical support, and a partnership-first approach.
              </p>
              <button 
                onClick={handleBackHome}
                className="px-8 py-3 bg-gradient-to-r from-jldBlue to-jldRed text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Explore Our Solutions
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;