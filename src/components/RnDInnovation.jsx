import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function RnDInnovation() {
  const navigate = useNavigate();

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/R&D.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Content Container - Positioned on white area */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12 lg:px-20">
        <motion.div
          className="max-w-xl w-full space-y-6 ml-auto mr-6 md:mr-10 lg:mr-14"
          style={{ marginRight: 'calc(3rem + -0.4in)' }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-jldBlue">R&D and</span> <span className="font-bold text-jldRed">Innovation</span>
            </h2>
          </motion.div>

          {/* Opening Statement */}
          <motion.p
            className="text-lg md:text-xl font-medium leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            At JLD Minerals, technical precision is the foundation of everything we do.
          </motion.p>

          {/* Condensed Content */}
          <motion.div
            className="space-y-4 text-sm md:text-base leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p>
              Our in-house R&D and quality control lab replicates real-world ceramic manufacturing conditions, rigorously testing every material property that affects your production. Each batch undergoes multi-stage testing and validation, ensuring unmatched consistency and reliability.
            </p>
            
            <p>
              Our technical team brings together deep ceramic knowledge, lab-driven insights, and real production experience. We work hand-in-hand with your team to solve complex issues, optimize formulations, reduce rejection rates, and lower costs through smarter material design.
            </p>
          </motion.div>

          {/* Closing Statement */}
          <motion.p
            className="text-lg md:text-xl font-medium leading-relaxed text-jldBlue"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            At JLD, collaboration replaces guesswork, and your challenges become ours to solve.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <button
              onClick={() => navigate('/rd-innovation')}
              className="px-6 py-2 border border-jldBlue text-jldBlue rounded-full transition duration-300 hover:bg-jldBlue hover:text-white cursor-pointer font-futura"
            >
              Explore Our R&D Capabilities →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
