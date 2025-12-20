import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Roadmaps with resources
const roadmaps = [
  {
    title: "Web Development",
    skills: [
      { name: "HTML", streakRequired: 1, resources: [{ type: "YouTube", link: "https://www.youtube.com/watch?v=pQN-pnXPaVg" }] },
      { name: "CSS", streakRequired: 3, resources: [{ type: "Blog", link: "https://css-tricks.com/" }] },
      { name: "JavaScript", streakRequired: 5, resources: [{ type: "Article", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }] },
      { name: "React", streakRequired: 10, resources: [{ type: "YouTube", link: "https://www.youtube.com/watch?v=Ke90Tje7VS0" }] },
      { name: "Node.js", streakRequired: 12, resources: [{ type: "Article", link: "https://nodejs.org/en/docs/" }] },
    ],
  },
  {
    title: "Data Science",
    skills: [
      { name: "Python", streakRequired: 1, resources: [{ type: "YouTube", link: "https://www.youtube.com/watch?v=rfscVS0vtbw" }] },
      { name: "Pandas", streakRequired: 3, resources: [{ type: "Article", link: "https://pandas.pydata.org/" }] },
      { name: "Machine Learning", streakRequired: 5, resources: [{ type: "Blog", link: "https://towardsdatascience.com/" }] },
      { name: "AI", streakRequired: 10, resources: [{ type: "YouTube", link: "https://www.youtube.com/watch?v=aircAruvnKk" }] },
    ],
  },
];

export default function Roadmaps({ streak, unlockedBadges, setUnlockedBadges, setNotify }) {
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);
  const [completedSkills, setCompletedSkills] = useState(() => {
    const stored = localStorage.getItem("completedSkills");
    return stored ? JSON.parse(stored) : {};
  });

  // Unlock badges & track completion
  useEffect(() => {
    if (selectedRoadmap === null) return;

    const skills = roadmaps[selectedRoadmap].skills;
    const updated = { ...completedSkills };

    skills.forEach((skill) => {
      if (streak >= skill.streakRequired && !updated[skill.name]) {
        updated[skill.name] = true;
        if (!unlockedBadges.includes(skill.name)) {
          setUnlockedBadges((prev) => [...prev, skill.name]);
          setNotify(`✅ You unlocked skill: ${skill.name}`);
          setTimeout(() => setNotify(""), 3000);
        }
      }
    });

    setCompletedSkills(updated);
    localStorage.setItem("completedSkills", JSON.stringify(updated));
  }, [streak, selectedRoadmap, unlockedBadges, setUnlockedBadges, setNotify]);

  // Determine current skill index
  const currentSkillIndex =
    selectedRoadmap !== null
      ? roadmaps[selectedRoadmap].skills.findIndex((skill) => streak < skill.streakRequired)
      : -1;

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        {selectedRoadmap === null ? "Choose a Roadmap to Start Learning" : roadmaps[selectedRoadmap].title}
      </h2>

      {/* Roadmap selection */}
      {!selectedRoadmap && (
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {roadmaps.map((roadmap, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-xl p-6 w-72 text-center"
            >
              <h3 className="text-xl font-semibold mb-4">{roadmap.title}</h3>
              <button
                onClick={() => setSelectedRoadmap(idx)}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Start Learning 🚀
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {/* Skill Path */}
      {selectedRoadmap !== null && (
        <div className="px-4">
          <button
            onClick={() => setSelectedRoadmap(null)}
            className="mb-6 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            ← Back to Roadmaps
          </button>

          <div className="flex flex-col gap-6 items-center">
            {roadmaps[selectedRoadmap].skills.map((skill, index) => {
              const unlocked = completedSkills[skill.name] || false;
              const isCurrent = index === currentSkillIndex;
              const progressPercent = Math.min((streak / skill.streakRequired) * 100, 100);

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className={`w-full max-w-md p-4 rounded-xl shadow-lg flex flex-col ${
                    unlocked
                      ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  whileHover={{
                    scale: unlocked ? 1.03 : 1,
                    rotateY: unlocked ? 5 : 0,
                    boxShadow: unlocked ? "0 0 15px #a78bfa, 0 0 20px #f472b6" : "none",
                    transition: { type: "tween", duration: 0.3 },
                  }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className={`text-lg font-bold ${isCurrent ? "underline" : ""}`}>{skill.name}</h4>
                    <p className="text-sm">{unlocked ? "Unlocked ✅" : `Day ${skill.streakRequired}`}</p>
                  </div>

                  {/* Progress Bar */}
                  {!unlocked && (
                    <div className="w-full bg-gray-300 rounded-full h-2 mb-2 overflow-hidden">
                      <motion.div
                        className="h-2 bg-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  )}

                  {/* Resources */}
                  {unlocked && (
                    <div className="mt-2">
                      <h5 className="font-semibold mb-1">Resources:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        {skill.resources.map((res, i) => (
                          <li key={i}>
                            <a
                              href={res.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline hover:text-blue-600"
                            >
                              {res.type}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
