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
    }, 100); // Faster for demo
    return () => clearInterval(interval);
  }, []);

  const progressPercentage = (completedDays / totalDays) * 100;

  return (
    <section className="relative bg-gray-50 py-20 min-h-screen overflow-hidden text-gray-900 flex items-center justify-center">
      {completedDays === totalDays && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full blur-[80px] opacity-40"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200 rounded-full blur-[80px] opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Consistency is Key 🔑
          </h2>
          <p className="text-gray-600 text-lg">
            Build a habit. Track your progress. Achieve mastery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Circular Progress */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-200 flex flex-col items-center justify-center aspect-square shadow-xl"
          >
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                  className="text-gray-200"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * progressPercentage) / 100}
                  strokeLinecap="round"
                  className="text-blue-500"
                  initial={{ strokeDashoffset: 283 }}
                  animate={{ strokeDashoffset: 283 - (283 * progressPercentage) / 100 }}
                  transition={{ duration: 1 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-gray-900">{completedDays}</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Days</span>
              </div>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Current Streak</h3>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">Total Goal</span>
                <span className="text-xl font-bold text-gray-900">{totalDays} Days</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="w-full bg-blue-500/30 h-2 rounded-full"></div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">Completion</span>
                <span className="text-xl font-bold text-green-600">{Math.round(progressPercentage)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-green-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-2xl shadow-lg text-white">
              <h4 className="font-bold text-lg mb-2">💡 Daily Tip</h4>
              <p className="text-sm opacity-90">
                "Small daily improvements are the key to staggering long-term results."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
