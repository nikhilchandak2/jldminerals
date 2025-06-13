import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();

  const handleNavigation = (link, label) => {
    if (link === "/") {
      // Navigate to home and scroll to hero
      navigate("/home");
      setTimeout(() => {
        if (window.fullpage_api) {
          window.fullpage_api.moveTo(1);
        }
      }, 100);
    } else if (link === "/products") {
      // Navigate to home and scroll to products section
      navigate("/home");
      setTimeout(() => {
        if (window.fullpage_api) {
          window.fullpage_api.moveTo(4);
        }
      }, 100);
    } else if (link === "/applications") {
      // Navigate to home and scroll to industries section
      navigate("/home");
      setTimeout(() => {
        if (window.fullpage_api) {
          window.fullpage_api.moveTo(5);
        }
      }, 100);
    } else if (link === "/sustainability") {
      // Navigate to home and scroll to sustainability section
      navigate("/home");
      setTimeout(() => {
        if (window.fullpage_api) {
          window.fullpage_api.moveTo(7);
        }
      }, 100);
    } else {
      // Navigate to dedicated pages
      navigate(link);
    }
  };

  return (
    <div className="h-screen w-full bg-white text-jldBlue px-6 font-[Futura] flex flex-col">
      <div className="flex-1 flex flex-col justify-center items-center">
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Left Section with Logo */}
          <div className="flex-1 flex flex-col justify-center items-center py-6">
            <img
              src="/assets/jld-logo.jpg"
              alt="JLD Minerals Logo"
              className="h-9 md:h-10 object-contain"
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[2px] h-40 bg-jldRed mx-8 rounded-full" />

          {/* Right Section with Navigation */}
          <div className="flex-1 flex justify-center items-center py-6">
            <ul className="space-y-4 text-center md:text-left">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Products", "/products"],
                ["Applications", "/applications"],
                ["Sustainability", "/sustainability"],
                ["Blogs", "/blogs"],
                ["Careers", "/careers"],
                ["Contact Us", "/contact"]
              ].map(([label, link], index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(link, label)}
                    className="text-lg hover:text-jldRed transition-colors cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="w-full text-center text-sm text-[#888] py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        &copy; 2025 JLD Minerals.{" "}
        <strong className="text-jldBlue">
          Crafting the Future with Every Layer of Earth.
        </strong>
      </motion.footer>
    </div>
  );
}
