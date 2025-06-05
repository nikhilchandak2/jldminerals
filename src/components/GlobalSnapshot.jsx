import React from "react";
import { motion } from "framer-motion";

export default function GlobalSnapshot() {
  return (
    <section className="h-screen w-full px-4 py-20 bg-white text-[#2B235E] flex flex-col items-center justify-center text-center">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-[#ED1D25] mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Global Snapshot
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-12 max-w-5xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
      >
        {[
          { icon: "landscape", label: "Mines", value: "30+" },
          { icon: "geography", label: "Export Countries", value: "25+" },
          { icon: "laboratory", label: "Innovation Labs", value: "2" },
          { icon: "dump-truck", label: "Tonnes/Year", value: "1M+" },
          { icon: "factory", label: "Processing Plants", value: "4" },
          { icon: "time", label: "Years Legacy", value: "50+" },
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className="w-16 h-16">
              <img
                src={`https://img.icons8.com/ios-filled/100/${item.icon}.png`}
                alt={item.label}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold">{item.value}</h2>
            <p className="text-base">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}