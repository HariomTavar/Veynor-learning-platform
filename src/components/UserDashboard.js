import React from "react";
import { motion } from "framer-motion";
import { Trophy, Flame, Target } from "lucide-react";

export default function UserDashboard({ streak, achievements, progress }) {
  streak = streak || 0;
  progress = progress || 0;
  achievements = Array.isArray(achievements) ? achievements : [];

  const circumference = 2 * Math.PI * 36;
  const streakOffset = circumference * (1 - Math.min(streak, 30) / 30);
  const progressOffset = circumference * (1 - Math.min(progress, 100) / 100);

  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Your Dashboard
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {/* Streak */}
          <motion.div
            className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Flame size={36} className="mb-2" />
            <p className="text-2xl font-bold">{streak} days</p>
            <p className="text-sm mt-1">Current Streak</p>

            <div className="mt-4 w-20 h-20 relative">
              <svg className="w-20 h-20">
                <circle
                  className="text-yellow-300"
                  strokeWidth="6"
                  stroke="currentColor"
                  fill="transparent"
                  r="36"
                  cx="40"
                  cy="40"
                  strokeDasharray={circumference}
                  strokeDashoffset={streakOffset}
                />
              </svg>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy size={36} className="mb-2" />
            <p className="text-2xl font-bold">{achievements.length}</p>
            <p className="text-sm mt-1">Achievements Unlocked</p>
            <div className="mt-4 flex space-x-2 overflow-x-auto">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  className="bg-white text-green-600 rounded-xl px-3 py-1 text-xs font-semibold shadow-md flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  {ach.title}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Overall Progress */}
          <motion.div
            className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Target size={36} className="mb-2" />
            <p className="text-2xl font-bold">{progress}%</p>
            <p className="text-sm mt-1">Overall Progress</p>

            <div className="mt-4 w-20 h-20 relative">
              <svg className="w-20 h-20">
                <circle
                  className="text-blue-300"
                  strokeWidth="6"
                  stroke="currentColor"
                  fill="transparent"
                  r="36"
                  cx="40"
                  cy="40"
                  strokeDasharray={circumference}
                  strokeDashoffset={progressOffset}
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Linear Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <motion.div
            className="h-4 bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.2 }}
          />
        </div>
      </div>
    </section>
  );
}
