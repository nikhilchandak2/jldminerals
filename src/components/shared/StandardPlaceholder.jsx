import React from 'react';

const StandardPlaceholder = ({ className = "w-full h-32" }) => {
  return (
    <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}>
      <div className="w-8 h-8 border-2 border-gray-300 border-t-jldBlue rounded-full animate-spin"></div>
    </div>
  );
};

export default StandardPlaceholder; 