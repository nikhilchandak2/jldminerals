import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  const handleReadMore = () => {
    window.location.href = '/about';
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
          src="/assets/1.png"
          alt="Mining Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4 max-w-6xl -mt-[22rem]"
      >
        <p className="text-lg md:text-xl leading-relaxed mb-6 text-jldBlue font-futura">
          <strong>JLD Minerals</strong> delivers precision-engineered ceramic raw materials to top manufacturers worldwide. Driven by deep R&D and technical insight, we solve complex formulation and firing challenges.<br />
          From mine to lab, we create materials that perform — consistently, reliably, and ahead of the curve.
        </p>
        <button 
          onClick={handleReadMore}
          className="px-6 py-2 border border-jldBlue text-jldBlue rounded-full transition duration-300 hover:bg-jldBlue hover:text-white cursor-pointer font-futura"
        >
          About Us
        </button>
      </motion.div>
    </section>
  );
};

export default AboutUs;