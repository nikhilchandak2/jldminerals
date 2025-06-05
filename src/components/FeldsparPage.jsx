import { motion } from 'framer-motion';
import React from 'react';

const FeldsparPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-20 bg-white">
      <div className="flex items-center gap-12">
        {/* Left Side: Text */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="max-w-md"
        >
          <h1 className="text-3xl font-bold mb-4">Feldspar</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Feldspar is a critical raw material in ceramics and glass industries,
            providing strength, durability, and acting as a flux during firing.
          </p>
        </motion.div>

        {/* Right Side: Image */}
        <motion.img
          src="/assets/feldspar.webp"
          alt="Feldspar"
          layoutId="feldspar-img"
          className="w-[350px] rounded-none shadow-none bg-transparent mix-blend-normal"
          transition={{ duration: 1.4 }}
        />
      </div>
    </div>
  );
};

export default FeldsparPage;
