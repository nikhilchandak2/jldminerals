import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function RnDInnovation() {
  const bullets = [
    "In-house labs for MOR, shrinkage & absorption testing",
    "Raw mix formulations for various clay bodies",
    "Black core, fast-firing, and silica-free optimization",
    "Customized mineral grading based on application",
    "White ceramic body brightness enhancement",
    "Technical team support for trial and transition batches",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#101048] to-[#e4222b] text-white px-6 py-20 flex flex-col items-center justify-center">
      {/* Heading & Subtext */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">R&D & Innovation</h2>
        <p className="text-sm md:text-base max-w-2xl mx-auto">
          Elevating mineral performance through science, testing, and advanced formulations.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="flex flex-col md:flex-row gap-10 items-center max-w-6xl w-full">
        {/* Left: Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="https://img.icons8.com/ios-filled/250/laboratory.png"
            alt="R&D Lab"
            className="w-48 md:w-64 h-auto"
          />
        </motion.div>

        {/* Right: Bullet List */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ul className="space-y-4">
            {bullets.map((item, index) => (
              <li key={index} className="flex items-start text-sm md:text-base">
                <FaCheckCircle className="text-[#ffffff] mr-2 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
