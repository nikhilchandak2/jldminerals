import React from "react";
import { FaLeaf, FaRecycle, FaTruck, FaTint, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sustainability() {
  const items = [
    {
      icon: <FaTint className="text-[#ED1D25] w-6 h-6" />,
      title: "Water Conservation",
      text: "Efficient water use across washing, processing, and lab testing.",
    },
    {
      icon: <FaSun className="text-[#ED1D25] w-6 h-6" />,
      title: "Renewable Energy",
      text: "Solar and clean power sources at mine offices and facilities.",
    },
    {
      icon: <FaRecycle className="text-[#ED1D25] w-6 h-6" />,
      title: "Waste Reduction",
      text: "Minimized overburden, lab waste and responsible reuse of tailings.",
    },
    {
      icon: <FaTruck className="text-[#ED1D25] w-6 h-6" />,
      title: "Smart Logistics",
      text: "Route optimization, bulk freight planning, and carbon-aware shipping.",
    },
    {
      icon: <FaLeaf className="text-[#ED1D25] w-6 h-6" />,
      title: "Green Sourcing",
      text: "Environmentally safe mining with monitored land restoration.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#2B235E] px-6 py-20 flex flex-col items-center justify-center">
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Sustainability & ESG
      </motion.h2>

      <motion.p
        className="text-center text-sm md:text-base text-[#444] max-w-2xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        We engineer every process with environmental balance and social responsibility in mind — from mine to material.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#f7f7f7] p-6 rounded-xl shadow-sm hover:shadow-md transition"
            whileHover={{ scale: 1.03 }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-[#555] leading-snug">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
