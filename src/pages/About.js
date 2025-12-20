// src/pages/About.js
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-800 text-white overflow-hidden">
      {/* Floating holographic circles */}
      <motion.div
        className="absolute top-10 left-1/4 w-64 h-64 bg-purple-600 rounded-full opacity-20 blur-3xl -z-10"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/3 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl -z-10"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating AI hologram icons */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-12 h-12 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-full shadow-lg"
        animate={{ y: [0, -15, 0], rotate: [0, 360, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-2/3 right-1/4 w-16 h-16 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 rounded-full shadow-lg"
        animate={{ y: [0, 20, 0], rotate: [0, -360, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide"
        >
          About Veynor 🌟
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed"
        >
          Veynor is your personalized learning platform designed to help you master new skills efficiently.
          We provide curated learning paths guided by experts and AI, with interactive tools to maintain consistency.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed"
        >
          Our mission is to make learning simple, enjoyable, and motivating. Whether you are a beginner or want to level up, 
          Veynor adapts to your style.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg transition-all"
        >
          Explore Features
        </motion.button>
      </div>
    </section>
  );
};

export default About;
