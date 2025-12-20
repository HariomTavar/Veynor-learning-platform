import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy } from "lucide-react";

export default function AchievementBadge({ streak, unlockedSkills = [], setUnlockedBadges, setNotify }) {
  const achievements = [
    { title: "Consistency Starter", condition: 5 },
    { title: "Focused Learner", condition: 10 },
    { title: "Skill Builder", condition: 15 },
    { title: "Knowledge Hero", condition: 20 },
    { title: "Challenge Crusher", condition: 25 },
    { title: "Master Achiever", condition: 30 },
  ];

  const [open, setOpen] = useState(false);
  const [localUnlocked, setLocalUnlocked] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("unlockedAchievements")) || [];
    return stored;
  });

  // Unlock badges dynamically
  useEffect(() => {
    achievements.forEach((ach) => {
      if ((streak >= ach.condition || unlockedSkills.length >= ach.condition) && !localUnlocked.includes(ach.title)) {
        const updated = [...localUnlocked, ach.title];
        setLocalUnlocked(updated);
        localStorage.setItem("unlockedAchievements", JSON.stringify(updated));
        if (setUnlockedBadges) setUnlockedBadges(updated);
        setNotify(`🏆 Achievement Unlocked: ${ach.title}!`);
        setTimeout(() => setNotify(""), 3000);
      }
    });
  }, [streak, unlockedSkills, localUnlocked, setUnlockedBadges, setNotify]);

  const totalUnlocked = localUnlocked.length;
  const totalAchievements = achievements.length;

  return (
    <section className="py-16 bg-gray-50 text-center">
      {/* Header Card */}
      <motion.div
        className="max-w-2xl mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl shadow-xl p-6 cursor-pointer hover:shadow-2xl transition-all"
        whileHover={{ scale: 1.05 }}
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-2xl font-bold mb-2">🏆 Your Achievements</h2>
        <p className="text-white/80">{open ? "Hide Achievements ▲" : "View Progress ▼"}</p>
        <p className="mt-1 text-sm">{totalUnlocked} / {totalAchievements} Unlocked</p>
      </motion.div>

      {/* Summary Progress Bar */}
      <motion.div
        className="mt-6 mx-auto w-80 bg-white shadow-md rounded-xl p-4 border border-gray-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="h-2 rounded-full bg-green-500"
            initial={{ width: 0 }}
            animate={{ width: `${(totalUnlocked / totalAchievements) * 100}%` }}
            transition={{ duration: 1.2 }}
          />
        </div>
      </motion.div>

      {/* Expanded Achievements */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="mt-10 max-w-5xl mx-auto space-y-10"
          >
            <div className="flex gap-6 overflow-x-auto px-2 pb-4 scrollbar-hide">
              {achievements.map((ach, idx) => {
                const progress = Math.min((streak / ach.condition) * 100, 100);
                const isUnlocked = localUnlocked.includes(ach.title);

                return (
                  <motion.div
                    key={idx}
                    className={`relative flex-none w-64 p-5 rounded-2xl shadow-lg transition-all
                      ${isUnlocked
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-800"}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Trophy size={36} className="mb-2" />
                    <h4 className="font-semibold mb-2">{ach.title}</h4>
                    <div className="w-full bg-gray-400 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${isUnlocked ? "bg-green-700" : "bg-gray-500"}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                    <p className="text-sm mt-2">{isUnlocked ? "Unlocked 🎉" : `Unlock at ${ach.condition} days`}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
