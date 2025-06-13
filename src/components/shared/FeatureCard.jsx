import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ 
  children, 
  className = "", 
  animatedBorder = false,
  hoverScale = false 
}) => {
  return (
    <motion.div 
      className={`p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl ${className}`}
      whileHover={hoverScale ? { scale: 1.02 } : {}}
    >
      {animatedBorder && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <motion.div
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-jldBlue to-jldRed"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.div
            className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-jldBlue to-jldRed"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: 'top' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-jldBlue to-jldRed"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ transformOrigin: 'right' }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-jldBlue to-jldRed"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{ transformOrigin: 'bottom' }}
          />
        </div>
      )}
      {children}
    </motion.div>
  );
};

export default FeatureCard; 