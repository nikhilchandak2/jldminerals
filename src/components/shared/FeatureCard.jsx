import React from 'react';
// Removed motion imports - using CSS fade effects instead

const FeatureCard = ({ 
  children, 
  className = "", 
  animatedBorder = false,
  hoverScale = false 
}) => {
  return (
    <div 
      className={`p-4 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 text-center shadow-xl ${className}`}
    >
      {animatedBorder && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-jldBlue to-jldRed"
          />
          <div
            className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-jldBlue to-jldRed"
          />
          <div
            className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-jldBlue to-jldRed"
          />
          <div
            className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-jldBlue to-jldRed"
          />
        </div>
      )}
      {children}
    </div>
  );
};

export default FeatureCard; 