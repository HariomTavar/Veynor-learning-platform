// src/pages/AIGuide.js
import React from "react";
import { motion } from "framer-motion";

const AIGuide = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-blue-50 via-purple-50 to-white text-gray-900 overflow-hidden min-h-screen flex items-center">
      {/* Floating holographic shapes */}
      <motion.div
        className="absolute top-10 left-1/4 w-48 h-48 bg-purple-200 rounded-full opacity-40 blur-3xl -z-10"
        animate={{ y: [0, 25, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/3 w-48 h-48 bg-blue-200 rounded-full opacity-40 blur-3xl -z-10"
        animate={{ y: [0, -25, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* AI hologram floating icons */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-14 h-14 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 rounded-full shadow-lg opacity-80"
        animate={{ y: [0, -20, 0], rotate: [0, 360, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-2/3 right-1/4 w-16 h-16 bg-gradient-to-r from-green-200 via-teal-200 to-blue-200 rounded-full shadow-lg opacity-80"
        animate={{ y: [0, 20, 0], rotate: [0, -360, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide text-gray-900"
        >
          Your AI Learning Guide 🤖
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl mb-6 text-gray-600 leading-relaxed"
        >
          Veynor’s AI Guide helps you plan your learning path, adapt to your skill level,
          and optimize your daily progress.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed"
        >
          Receive personalized recommendations, track milestones, and stay consistent with intelligent insights.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(59,130,246,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg transition-all"
        >
          Start Your AI Guide
        </motion.button>
      </div>
    </section>
  );
};

export default AIGuide;
