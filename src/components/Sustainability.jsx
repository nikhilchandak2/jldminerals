import React from "react";
import { motion } from "framer-motion";

export default function Sustainability() {
  return (
    <div className="h-screen bg-white text-jldBlue px-6 py-12 flex flex-col items-center justify-center">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Sustainability & ESG
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Main Content - Single Screen Layout */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100 shadow-lg">
              <p className="text-lg md:text-xl text-jldBlue font-medium leading-relaxed mb-6">
                At JLD Minerals, sustainability isn't a statement — it's a standard we uphold across every facet of our business.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                We are deeply committed to responsible mining, environmental stewardship, and community well-being. Some of our mines have been repeatedly recognized with "Safest Mine" awards by government authorities — a reflection of our unwavering focus on safety, training, and compliance.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed">
                Our commitment extends far beyond the mine. We regularly conduct free medical camps and have facilitated hundreds of life-changing medical operations for those in need. We also actively support local schools and hospitals, contributing to long-term educational and healthcare impact in the regions we operate.
              </p>
            </div>
          </div>

          {/* Right Column - ESG & Final Statement */}
          <div className="space-y-6 h-full flex flex-col">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg flex-1 flex flex-col justify-center">
              <div className="w-12 h-1 bg-gradient-to-r from-jldBlue to-jldRed mb-6"></div>
              <p className="text-base text-gray-700 leading-relaxed">
                From waste reduction and energy-efficient processes to governance rooted in transparency, our approach to ESG is both practical and deeply personal.
              </p>
            </div>

            {/* Final Statement */}
            <div className="bg-gradient-to-r from-jldBlue to-jldRed rounded-2xl p-8 text-left text-white shadow-xl flex-1 flex flex-col justify-center">
              <div className="w-16 h-1 bg-white/30 mb-6"></div>
              <p className="text-base font-light leading-relaxed">
                At JLD, we don't just extract minerals — we work to uplift the land, the people, and the future of the ceramic ecosystem.
              </p>
              <div className="w-16 h-1 bg-white/30 mt-6"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
