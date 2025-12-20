import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Notification({ message, show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 20, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold px-6 py-3 rounded-xl shadow-2xl z-50 text-lg"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-xl blur-xl bg-white mix-blend-screen opacity-20 pointer-events-none"></div>
          <span className="relative">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
