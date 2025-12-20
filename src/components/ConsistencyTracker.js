import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function ConsistencyTracker({ streak, setStreak, totalDays = 30 }) {
  const [todayDone, setTodayDone] = useState(false);
  const [timeLeft, setTimeLeft] = useState(""); // Countdown
  const [completedDays, setCompletedDays] = useState(() => {
    const stored = localStorage.getItem("completedDays");
    return stored ? JSON.parse(stored) : [];
  });

  // Initialize streak & check today
  useEffect(() => {
    const savedStreak = localStorage.getItem("userStreak");
    const lastDate = localStorage.getItem("lastCompletedDate");

    if (savedStreak) setStreak(Number(savedStreak));
    checkTodayDone(lastDate);
  }, [setStreak]);

  const checkTodayDone = (lastDate) => {
    const today = new Date().toDateString();
    if (lastDate === today) {
      setTodayDone(true);
      startCountdown();
    }
  };

  // Countdown for next day
  const startCountdown = () => {
    const interval = setInterval(() => {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setHours(24, 0, 0, 0);
      const diff = tomorrow - now;

      if (diff <= 0) {
        setTodayDone(false);
        setTimeLeft("");
        clearInterval(interval);
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
  };

  // Mark today done
  const handleMarkDone = () => {
    if (todayDone) return;
    const newStreak = streak + 1;
    setStreak(newStreak);
    setTodayDone(true);

    const today = new Date().toDateString();
    localStorage.setItem("lastCompletedDate", today);
    localStorage.setItem("userStreak", newStreak);

    const updatedDays = [...completedDays, newStreak];
    setCompletedDays(updatedDays);
    localStorage.setItem("completedDays", JSON.stringify(updatedDays));

    startCountdown();
  };

  const progressPercent = (streak / totalDays) * 100;

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Consistency Tracker 🔥</h2>
        <p className="mb-6 text-lg text-gray-600">
          Stay consistent and unlock badges & resources as you grow!
        </p>

        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-block bg-white p-6 rounded-2xl shadow-xl mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <Flame size={36} className="text-yellow-500 mr-2 animate-pulse" />
            <p className="text-5xl font-bold text-blue-600">{streak} 🔥</p>
          </div>
          <p className="text-gray-500 mb-4">Goal: {totalDays} Days</p>

          <button
            onClick={handleMarkDone}
            disabled={todayDone}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition ${
              todayDone
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {todayDone ? "Marked Today ✅" : "Mark Today Done"}
          </button>

          {todayDone && timeLeft && (
            <p className="mt-2 text-sm text-gray-600">Next streak available in: {timeLeft}</p>
          )}
        </motion.div>

        {/* Calendar View */}
        <div className="grid grid-cols-7 gap-2 justify-center mb-6">
          {[...Array(totalDays)].map((_, i) => {
            const day = i + 1;
            const completed = completedDays.includes(day);
            return (
              <motion.div
                key={i}
                className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ${
                  completed ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
                whileHover={{ scale: completed ? 1.05 : 1.1 }}
                onClick={() => !completed && handleMarkDone()}
              >
                {day}
              </motion.div>
            );
          })}
        </div>

        {/* Linear Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <motion.div
            className="h-4 bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1.2 }}
          />
        </div>
      </div>
    </section>
  );
}
