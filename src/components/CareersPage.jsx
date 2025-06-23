import React, { useState, useEffect } from "react";
// Removed motion imports - using CSS fade effects instead
import { useNavigate } from "react-router-dom";
import { useHideScrollbar } from "../hooks/useHideScrollbar";
import emailjs from '@emailjs/browser';

const CareersPage = () => {
  useHideScrollbar();
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(true);
  
  useEffect(() => {
    document.body.classList.add('product-page');
    // Add CSS to prevent horizontal scrolling
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    return () => {
      document.body.classList.remove('product-page');
      // Reset overflow styles
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salary packages with performance-based incentives"
    },
    {
      title: "Comprehensive Healthcare",
      description: "Complete medical coverage for employees and their families"
    },
    {
      title: "Professional Development",
      description: "Continuous learning opportunities and skill development programs"
    },
    {
      title: "Sustainability Focus",
      description: "Be part of environmentally responsible mining practices"
    },
    {
      title: "Career Growth",
      description: "Clear advancement paths and leadership development opportunities"
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working arrangements and comprehensive leave policies"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS Configuration - Using Vite environment variables
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;



      // Check if environment variables are loaded
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error('EmailJS configuration missing:', {
          SERVICE_ID: !!SERVICE_ID,
          TEMPLATE_ID: !!TEMPLATE_ID,
          PUBLIC_KEY: !!PUBLIC_KEY
        });
        setSubmitMessage('Email configuration error. Please contact support.');
        setIsSubmitting(false);
        return;
      }

      // Prepare template parameters
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        position: formData.position,
        experience: formData.experience,
        message: formData.message || 'No additional message provided',
        resume: formData.resume ? formData.resume.name : 'No resume uploaded'
      };



      // Send email using EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (response.status === 200) {

        setSubmitMessage('Application submitted successfully! We will contact you soon.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          message: '',
          resume: null
        });
        // Reset file input
        document.getElementById('resume').value = '';
      } else {
        console.error('❌ EmailJS response error:', response);
        setSubmitMessage('Error submitting application. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitMessage('Error submitting application. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-futura hide-scrollbar overflow-x-hidden max-w-full">
      {/* Main Content Container */}
      <div
        className="container mx-auto px-6 py-8 hide-scrollbar overflow-x-hidden"
      >
        <div 
          className="max-w-7xl mx-auto space-y-12 overflow-x-hidden"
          initial="hidden"
        >
          {/* Header */}
          <div>
            {/* Logo and Back Button Row */}
            <div className="flex justify-between items-center mb-8">
              <img 
                src="/assets/jld-logo.png" 
                alt="JLD Minerals" 
                className="h-8 w-auto"
                loading="lazy"
              />
              <button 
                onClick={() => navigate('/home')}
                className="text-jldBlue hover:text-jldRed transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
              >
                <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
                <span>Back to Home</span>
              </button>
            </div>

            {/* Title Section */}
            <div className="mb-16 mt-12">
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-light text-jldBlue mb-4 leading-none tracking-tight"
              >
                Join Our <span className="text-jldRed font-normal">Team</span>
              </h1>
              
              <p 
                className="text-xl md:text-2xl text-gray-500 mb-6 font-light leading-relaxed max-w-3xl"
              >
                Build your career with India's leading mineral extraction and processing company
              </p>

              <div 
                className="w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed"
              />
            </div>
          </div>

          {/* Why Choose JLD Minerals - Smart Boxes in One Line */}
          <div
            className="py-16"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-jldBlue mb-6">
                Why Choose <span className="text-jldRed font-normal">JLD Minerals?</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                We're committed to fostering innovation, sustainability, and professional growth in the minerals industry.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <h3 className="text-base sm:text-lg font-medium text-jldBlue mb-3 text-center">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-xs sm:text-sm flex-grow text-center">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Application Form */}
          <div
            className="py-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light text-jldBlue mb-6">
                Apply for a <span className="text-jldRed font-normal">Position</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Submit your application and join our team of dedicated professionals.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jldBlue focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jldBlue focus:border-transparent transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jldBlue focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      Position Applied For *
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jldBlue focus:border-transparent transition-all"
                      placeholder="Enter the position you're applying for"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jldBlue focus:border-transparent transition-all"
                  >
                    <option value="">Select your experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-5">4-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-jldBlue transition-colors">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="hidden"
                    />
                    <label htmlFor="resume" className="cursor-pointer">
                      <div className="text-gray-400 mb-2">
                        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <p className="text-gray-600">
                        {formData.resume ? formData.resume.name : 'Click to upload your resume'}
                      </p>
                      <p className="text-gray-400 text-sm">PDF, DOC, or DOCX (max 5MB)</p>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter / Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jldBlue focus:border-transparent transition-all resize-none"
                    placeholder="Tell us why you're interested in joining JLD Minerals..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-jldBlue text-white px-8 py-4 rounded-lg hover:bg-jldBlue/90 transition-colors font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>

                {submitMessage && (
                  <div className={`text-center p-4 rounded-lg ${submitMessage.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact HR */}
          <div
            className="bg-gradient-to-r from-jldBlue to-jldBlue/90 text-white py-16 px-6 rounded-2xl"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-light mb-6">
                Have Questions About <span className="text-jldRed font-normal">Careers?</span>
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our HR team is here to help you with any questions about career opportunities at JLD Minerals.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>careers@jldminerals.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 123 456 7890</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage; 