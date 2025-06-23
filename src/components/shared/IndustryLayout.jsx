import React from 'react';
import { Helmet } from 'react-helmet';
// Removed motion imports - using CSS fade effects instead
import { useNavigate } from 'react-router-dom';

const IndustryLayout = ({ 
  title, 
  description, 
  keywords, 
  heroImage, 
  heroTitle, 
  heroSubtitle, 
  children,
  onBackClick
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
    } else if (window.history.length > 1) {
      navigate(-1); // Go back to previous page
    } else {
      navigate('/home#industries'); // Fallback to industries section
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{title} | JLD Minerals</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://jldminerals.com/industries/${title.toLowerCase().replace(/\s+/g, '-')}`} />
        <meta property="og:title" content={`${title} | JLD Minerals`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | JLD Minerals`} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      {/* Navigation Header */}
      <div className="bg-jldBlue text-white py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="/assets/jld-white-logo.png" 
              alt="JLD Minerals" 
              className="h-8"
            />
            <span className="text-xl font-semibold">JLD Minerals</span>
          </div>
          <button 
            onClick={handleBack}
            className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-jldBlue transition duration-300"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div 
        className="relative h-96 bg-gradient-to-r from-jldBlue to-gray-800 text-white overflow-hidden"
      >
        {heroImage && (
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt={heroTitle}
              className="w-full h-full object-cover opacity-30"
            />
          </div>
        )}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div>
            <h1 
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {heroTitle}
            </h1>
            <p 
              className="text-xl md:text-2xl text-gray-200"
            >
              {heroSubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {children}
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-jldBlue mb-4">
            Ready to Partner with JLD Minerals?
          </h2>
          <p className="text-gray-700 mb-8">
            Get premium quality materials with consistent supply and expert technical support.
          </p>
          <button 
            onClick={() => navigate('/contact', { state: { from: '/industries' } })}
            className="px-8 py-3 bg-jldBlue text-white rounded-lg hover:bg-opacity-90 transition duration-300 text-lg font-semibold"
          >
            Contact Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustryLayout;