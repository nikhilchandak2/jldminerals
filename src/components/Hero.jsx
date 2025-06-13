import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    // Preload the logo
    const img = new Image();
    img.onload = () => {
      setLogoLoaded(true);
    };
    img.src = '/assets/jld-white-logo.png';

    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Small delay before showing content
      setTimeout(() => setShowContent(true), 200);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#101048] to-[#e4222b] text-white px-4 relative"
    >
      <Helmet>
        <title>JLD Minerals – Crafting the Future of Ceramics</title>
        <meta
          name="description"
          content="JLD Minerals leads the ceramic materials value chain with 30+ mines, innovation labs, and global clients. Explore our premium Ball Clay, Kaolin, and industrial minerals."
        />
        <meta name="keywords" content="Ball Clay, Kaolin, Ceramic Minerals, JLD Minerals, Clay Exporters India" />
        <link rel="preload" as="image" href="/assets/jld-white-logo.png" />
      </Helmet>

      {/* Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-[#101048] to-[#e4222b] z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.p
              className="mt-4 text-white/80 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Loading...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <>
      {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-12"
            >
              <img
        src="/assets/jld-white-logo.png"
        alt="JLD Minerals"
                className="h-14 md:h-20"
                onLoad={() => setLogoLoaded(true)}
      />
            </motion.div>

      {/* Hero Content */}
      <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          Crafting the Future of Ceramics
        </h1>
        <p className="max-w-xl text-base md:text-lg mx-auto">
          We lead the ceramic materials value chain with 30+ mines, innovation labs, and clients across 10+ countries.
        </p>
      </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}