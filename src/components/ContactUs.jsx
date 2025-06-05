import React from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <div className="h-screen w-full bg-white text-[#2B235E] px-6 font-[Futura] flex flex-col">
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
          <div className="hidden md:block w-[2px] h-40 bg-[#ED1D25] mx-8 rounded-full" />

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
                  <a
                    href={link}
                    className="text-lg hover:text-[#ED1D25] transition-colors"
                  >
                    {label}
                  </a>
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
        <strong className="text-[#2B235E]">
          Crafting the Future with Every Layer of Earth.
        </strong>
      </motion.footer>
    </div>
  );
}
