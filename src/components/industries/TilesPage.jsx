import React from 'react';
import { motion } from 'framer-motion';
import IndustryLayout from '../shared/IndustryLayout';

const TilesPage = () => {
  const materials = [
    {
      name: "Ball Clay",
      description: "Provides plasticity and workability for tile bodies",
      benefits: ["Superior plasticity", "Reduced cracking", "Enhanced workability"],
      image: "/assets/ball-clay.webp"
    },
    {
      name: "Kaolin",
      description: "Delivers whiteness and strength to ceramic tiles",
      benefits: ["High whiteness", "Low iron content", "Thermal stability"],
      image: "/assets/kaolin.webp"
    },
    {
      name: "Feldspar",
      description: "Acts as flux reducing firing temperature",
      benefits: ["Lower firing costs", "Improved vitrification", "Enhanced durability"],
      image: "/assets/feldspar.webp"
    },
    {
      name: "Quartz & Silica",
      description: "Provides structural integrity and thermal properties",
      benefits: ["Dimensional stability", "Thermal shock resistance", "Strength enhancement"],
      image: "/assets/quartz-silica.webp"
    }
  ];

  const applications = [
    {
      title: "Wall Tiles",
      description: "Premium materials for interior and exterior wall tiles with superior finish and durability.",
      specs: ["Size: 200x300mm to 600x1200mm", "Water absorption: <0.5%", "Thickness: 7-12mm"]
    },
    {
      title: "Floor Tiles",
      description: "High-strength formulations for residential and commercial flooring applications.",
      specs: ["Size: 300x300mm to 1200x1200mm", "Slip resistance: R9-R13", "Load bearing: >2000N"]
    },
    {
      title: "Porcelain Tiles",
      description: "Ultra-low porosity tiles for high-end applications with exceptional properties.",
      specs: ["Water absorption: <0.1%", "Density: >2.3 g/cm³", "Frost resistance: Class A"]
    },
    {
      title: "Decorative Tiles",
      description: "Specialized formulations for artistic and decorative ceramic tile production.",
      specs: ["Custom colors", "Texture variations", "Pattern compatibility"]
    }
  ];

  const benefits = [
    {
      icon: "🏆",
      title: "Premium Quality",
      description: "Consistent quality materials ensuring superior tile performance and appearance."
    },
    {
      icon: "🔬",
      title: "Technical Support",
      description: "Expert formulation guidance and technical assistance for optimal results."
    },
    {
      icon: "🚚",
      title: "Reliable Supply",
      description: "Consistent supply chain with global delivery capabilities and quality assurance."
    },
    {
      icon: "🌱",
      title: "Sustainable",
      description: "Environmentally responsible mining and processing with minimal ecological impact."
    }
  ];

  return (
    <IndustryLayout
      title="Tiles Industry"
      description="Premium clay minerals and ceramic materials for tile manufacturing. JLD Minerals provides high-quality Ball Clay, Kaolin, Feldspar, and Quartz for superior tile production with consistent quality and performance."
      keywords="ceramic tiles, tile manufacturing, ball clay tiles, kaolin tiles, feldspar tiles, porcelain tiles, wall tiles, floor tiles, JLD Minerals"
      heroImage="/assets/Tile.png"
      heroTitle="Tiles Industry"
      heroSubtitle="Premium Materials for Superior Ceramic Tile Manufacturing"
    >
      {/* Overview Section */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-jldBlue mb-6">
              Leading the Ceramic Tile Industry
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              JLD Minerals has been the trusted partner for ceramic tile manufacturers worldwide, 
              providing premium-grade raw materials that ensure consistent quality, superior 
              performance, and exceptional aesthetic appeal in every tile produced.
            </p>
            <p className="text-gray-700 mb-6">
              Our comprehensive range of minerals including Ball Clay, Kaolin, Feldspar, and 
              Quartz & Silica are specially processed and quality-tested to meet the exacting 
              standards of modern tile manufacturing.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-jldBlue">500+</div>
                <div className="text-sm text-gray-600">Tile Manufacturers</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-jldBlue">25+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/assets/Tile.png" 
              alt="Ceramic Tiles Manufacturing"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* Materials Section */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-jldBlue text-center mb-12">
          Our Premium Materials for Tile Manufacturing
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((material, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <img 
                src={material.image} 
                alt={material.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-jldBlue mb-3">{material.name}</h3>
              <p className="text-gray-600 mb-4">{material.description}</p>
              <ul className="space-y-1">
                {material.benefits.map((benefit, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-jldRed rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Applications Section */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-jldBlue text-center mb-12">
          Tile Applications & Specifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border border-gray-200"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-jldBlue mb-4">{app.title}</h3>
              <p className="text-gray-700 mb-6">{app.description}</p>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Technical Specifications:</h4>
                <ul className="space-y-2">
                  {app.specs.map((spec, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-jldRed rounded-full mr-3"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-jldBlue text-center mb-12">
          Why Choose JLD Minerals for Tiles?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-jldBlue mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        className="bg-gradient-to-r from-jldBlue to-gray-800 text-white rounded-lg p-8 mb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Quality Process</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-jldBlue">1</span>
            </div>
            <h3 className="font-semibold mb-2">Mining</h3>
            <p className="text-sm text-gray-200">Sustainable extraction from premium deposits</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-jldBlue">2</span>
            </div>
            <h3 className="font-semibold mb-2">Processing</h3>
            <p className="text-sm text-gray-200">Advanced beneficiation and purification</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-jldBlue">3</span>
            </div>
            <h3 className="font-semibold mb-2">Testing</h3>
            <p className="text-sm text-gray-200">Rigorous quality control and certification</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-jldBlue">4</span>
            </div>
            <h3 className="font-semibold mb-2">Delivery</h3>
            <p className="text-sm text-gray-200">Global logistics and timely supply</p>
          </div>
        </div>
      </motion.section>
    </IndustryLayout>
  );
};

export default TilesPage;