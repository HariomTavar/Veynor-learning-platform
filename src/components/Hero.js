// src/components/Hero.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero({ phrases, currentIndex }) {
  return (
    <section className="relative text-center py-24 overflow-hidden bg-gradient-to-r from-blue-50 via-purple-50 to-white">
      {/* Background floating shapes */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-200 rounded-full top-[-60px] left-[-60px] opacity-30 animate-pulse-slow"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        className="absolute w-56 h-56 bg-purple-200 rounded-full bottom-[-40px] right-[-40px] opacity-30 animate-pulse-slow"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800"
      >
        Veynor — Your Skill Growth Partner
      </motion.h1>

      {/* Dynamic Phrases */}
      <AnimatePresence mode="wait">
        <motion.p
          key={phrases[currentIndex]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl font-semibold text-blue-600 h-10 mb-4"
        >
          {phrases[currentIndex]}
        </motion.p>
      </AnimatePresence>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
      >
        Learn new skills guided by experts and AI — curated roadmaps, consistency tracking, and mentorship to help you stay focused and motivated.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.button
        whileHover={{ scale: 1.08, boxShadow: "0px 10px 20px rgba(59,130,246,0.4)" }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-10 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all"
      >
        Start Learning Now
      </motion.button>
    </section>
  );
}
