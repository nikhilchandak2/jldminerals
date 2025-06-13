import React from 'react';

const RegionCard = ({ children, className = "" }) => {
  return (
    <div className={`text-center p-3 bg-gradient-to-br from-jldBlue/5 to-jldRed/5 rounded-lg border border-jldBlue/10 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl ${className}`}>
      <h3 className="text-base font-medium text-jldBlue">{children}</h3>
    </div>
  );
};

export default RegionCard; 