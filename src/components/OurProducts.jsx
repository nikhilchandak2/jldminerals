import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function OurProducts() {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const handleProductClick = (productSlug) => {
    if (productSlug === "ball-clay") {
      setIsTransitioning(true);
      
      // Get the clicked image element's position
      const element = document.getElementById("ball-clay-image");
      if (element) {
        const rect = element.getBoundingClientRect();
        
        // Store the position in sessionStorage for the next page
        sessionStorage.setItem('ballClayImagePosition', JSON.stringify({
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        }));
        
        // Add a slight delay for smooth transition
        setTimeout(() => {
          navigate(`/products/${productSlug}`);
        }, 100);
      } else {
        navigate(`/products/${productSlug}`);
      }
    } else {
      navigate(`/products/${productSlug}`);
    }
  };

  const handleImageLoad = (slug) => {
    setImagesLoaded(prev => ({ ...prev, [slug]: true }));
  };

  const products = [
    { name: "Ball Clay", slug: "ball-clay", img: "ball-clay.webp" },
    { name: "Kaolin", slug: "kaolin", img: "kaolin.webp" },
    { name: "Feldspar", slug: "feldspar", img: "feldspar.webp" },
    { name: "Quartz and Silica", slug: "quartz-silica", img: "quartz-silica.webp" },
  ];

  return (
    <div id="products" className="min-h-screen px-4 py-20 bg-[#1a1a40] text-white text-center flex flex-col items-center relative overflow-hidden">
      <Helmet>
        <title>Our Products | JLD Minerals</title>
        <meta
          name="description"
          content="Explore Ball Clay, Kaolin, Feldspar, Quartz & Silica – premium mineral solutions by JLD Minerals trusted by ceramic manufacturers worldwide."
        />
        <link rel="canonical" href="https://jldminerals.com/products" />
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/assets/ball-clay.webp" />
        <link rel="preload" as="image" href="/assets/kaolin.webp" />
        <link rel="preload" as="image" href="/assets/feldspar.webp" />
        <link rel="preload" as="image" href="/assets/quartz-silica.webp" />
      </Helmet>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      {/* Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-slate-50 to-blue-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-6 mt-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Our Products
      </motion.h2>

      <motion.p
        className="max-w-xl text-base md:text-lg mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
      >
        Premium industrial minerals trusted by leading ceramic manufacturers
        across the globe — backed by in-house labs, R&D, and consistent quality.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl relative z-10">
        {products.map(({ name, slug, img }, index) => (
          <motion.div
            key={slug}
            className="cursor-pointer relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleProductClick(slug)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleProductClick(slug);
              }
            }}
            aria-label={`${name} product page`}
          >
            <motion.div
              layoutId={slug === "ball-clay" ? "ball-clay-container" : undefined}
              className="relative"
            >
              {/* Image Container with Loading State */}
              <div className="relative mb-4 mx-auto w-48 h-48 flex items-center justify-center">
                {!imagesLoaded[slug] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
                
                <motion.img
                  id={slug === "ball-clay" ? "ball-clay-image" : undefined}
                  layoutId={slug === "ball-clay" ? "ball-clay-image" : undefined}
                  src={`/assets/${img}`}
                  alt={name}
                  className={`w-48 h-48 object-contain transition-opacity duration-500 ${
                    imagesLoaded[slug] ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(slug)}
                />
              </div>
              
              <motion.h3 
                layoutId={slug === "ball-clay" ? "ball-clay-title" : undefined}
                className="text-lg font-normal"
              >
                {name}
              </motion.h3>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a40] to-transparent pointer-events-none"></div>
    </div>
  );
}