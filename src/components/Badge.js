// src/components/Badges.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const badgesList = [
  { id: 1, name: "Streak Starter", condition: 3, emoji: "🔥", gradient: "from-yellow-400 via-yellow-300 to-yellow-200" },
  { id: 2, name: "Rising Learner", condition: 7, emoji: "🚀", gradient: "from-blue-400 via-blue-300 to-blue-200" },
  { id: 3, name: "Consistency Champ", condition: 15, emoji: "💪", gradient: "from-green-400 via-green-300 to-green-200" },
  { id: 4, name: "Mastermind", condition: 30, emoji: "🧠", gradient: "from-purple-400 via-purple-300 to-purple-200" },
  { id: 5, name: "AI Explorer", condition: 20, emoji: "🤖", gradient: "from-pink-400 via-pink-300 to-pink-200" },
  { id: 6, name: "Roadmap Master", condition: 10, emoji: "📈", gradient: "from-indigo-400 via-indigo-300 to-indigo-200" },
];

export default function Badges({ streak }) {
  const [earnedBadges, setEarnedBadges] = useState([]);

  useEffect(() => {
    const unlocked = badgesList.filter((b) => streak >= b.condition);
    setEarnedBadges(unlocked);
  }, [streak]);

  return (
    <section className="py-12 bg-gradient-to-r from-white via-blue-50 to-yellow-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">🏆 Achievements</h2>

      {/* Horizontal scroll container */}
      <div className="flex overflow-x-auto space-x-4 px-4 py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {badgesList.map((badge) => {
          const unlocked = earnedBadges.some((b) => b.id === badge.id);
          return (
            <motion.div
              key={badge.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: unlocked ? 1 : 0.8, opacity: unlocked ? 1 : 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative flex-shrink-0 w-28 h-28 rounded-2xl shadow-lg cursor-pointer hover:scale-110 transition-transform"
            >
              {/* Holographic glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${badge.gradient} blur-xl opacity-50`} />

              {/* Badge content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <span className="text-3xl">{badge.emoji}</span>
                <span className="text-xs font-semibold text-gray-900 mt-1">{badge.name}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Earned badge summary */}
      {earnedBadges.length > 0 && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-6 text-sm text-gray-700 font-medium"
        >
          {earnedBadges.length} / {badgesList.length} badges unlocked 🎉
        </motion.p>
      )}
    </section>
  );
}
