import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function Consistency() {
  const [streak, setStreak] = useState(0);
  const totalDays = 30;
  const completedDays = Math.min(streak, totalDays);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-increment streak for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setStreak((prev) => (prev < totalDays ? prev + 1 : prev));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const progressPercentage = (completedDays / totalDays) * 100;

  return (
    <section className="relative bg-gradient-to-r from-yellow-50 via-blue-50 to-purple-50 py-20 min-h-screen overflow-hidden">
      {completedDays === totalDays && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}

      {/* Floating streak icons */}
      <motion.div
        className="absolute top-10 left-10 w-12 h-12 bg-yellow-400 rounded-full opacity-30 blur-lg"
        animate={{ y: [0, 30, 0], x: [0, 15, 0], rotate: [0, 360, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-25 blur-2xl"
        animate={{ y: [0, -25, 0], x: [0, -20, 0], rotate: [0, -360, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
      >
        Track Your Learning Consistency
      </motion.h2>

      <div className="max-w-xl mx-auto text-center px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-700 mb-6"
        >
          You have completed{" "}
          <span className="font-semibold text-blue-600">{completedDays}</span> out of{" "}
          {totalDays} days of learning. 🎯
        </motion.p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1 }}
            className="bg-blue-500 h-6"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-gray-600 text-md"
        >
          Keep learning daily to maintain your streak and achieve your goals! 🚀
        </motion.p>
      </div>
    </section>
  );
}
