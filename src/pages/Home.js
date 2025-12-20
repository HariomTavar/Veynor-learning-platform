import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experts from "../components/Experts";
import ConsistencyTracker from "../components/ConsistencyTracker";
import AchievementBadge from "../components/AchievementBadge";
import AIGuide from "../pages/AIGuide";
import Roadmaps from "../pages/Roadmaps";
import AIMentor from "../components/AIMentor"; // ✅ Import AIMentor

export default function Home() {
  const phrases = [
    "Learn new skills daily!",
    "Track your progress consistently!",
    "Get guidance from experts and AI!",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [streak, setStreak] = useState(0);
  const totalDays = 30;
  const [notify, setNotify] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <Hero phrases={phrases} currentIndex={currentIndex} />
      <Roadmaps />
      <Experts />
      <ConsistencyTracker
        streak={streak}
        setStreak={setStreak}
        totalDays={totalDays}
      />
      <AchievementBadge streak={streak} setNotify={setNotify} />
      <AIGuide />
      <AIMentor /> {/* ✅ Add AIMentor */}
      {notify && (
        <div className="fixed bottom-8 right-8 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          {notify}
        </div>
      )}
    </>
  );
}
