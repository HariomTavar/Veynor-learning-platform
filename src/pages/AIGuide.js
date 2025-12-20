// src/pages/AIGuide.js
import React from "react";
import { motion } from "framer-motion";

const AIGuide = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-800 text-white overflow-hidden">
      {/* Floating holographic shapes */}
      <motion.div
        className="absolute top-10 left-1/4 w-48 h-48 bg-purple-600 rounded-full opacity-20 blur-3xl -z-10"
        animate={{ y: [0, 25, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/3 w-48 h-48 bg-blue-500 rounded-full opacity-20 blur-3xl -z-10"
        animate={{ y: [0, -25, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* AI hologram floating icons */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-14 h-14 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-full shadow-lg"
        animate={{ y: [0, -20, 0], rotate: [0, 360, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-2/3 right-1/4 w-16 h-16 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 rounded-full shadow-lg"
        animate={{ y: [0, 20, 0], rotate: [0, -360, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide"
        >
          Your AI Learning Guide 🤖
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed"
        >
          Veynor’s AI Guide helps you plan your learning path, adapt to your skill level, 
          and optimize your daily progress.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed"
        >
          Receive personalized recommendations, track milestones, and stay consistent with intelligent insights.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg transition-all"
        >
          Start Your AI Guide
        </motion.button>
      </div>
    </section>
  );
};

export default AIGuide;
