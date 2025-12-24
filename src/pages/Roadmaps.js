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
  {
    title: "Artificial Intelligence",
    skills: [
      {
        name: "Python for AI",
        streakRequired: 1,
        resources: [
          { type: "YouTube Playlist", link: "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU" },
          { type: "FreeCodeCamp", link: "https://www.freecodecamp.org/learn/scientific-computing-with-python/" }
        ]
      },
      {
        name: "Mathematics (Linear Algebra & Calc)",
        streakRequired: 3,
        resources: [
          { type: "3Blue1Brown Series", link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" },
          { type: "Khan Academy", link: "https://www.khanacademy.org/math/linear-algebra" }
        ]
      },
      {
        name: "Machine Learning Foundations",
        streakRequired: 7,
        resources: [
          { type: "Andrew Ng Course", link: "https://www.coursera.org/learn/machine-learning" },
          { type: "Scikit-Learn Docs", link: "https://scikit-learn.org/stable/tutorial/index.html" }
        ]
      },
      {
        name: "Deep Learning & Neural Networks",
        streakRequired: 14,
        resources: [
          { type: "Fast.ai", link: "https://course.fast.ai/" },
          { type: "TensorFlow Tutorials", link: "https://www.tensorflow.org/tutorials" }
        ]
      },
      {
        name: "NLP & LLMs",
        streakRequired: 21,
        resources: [
          { type: "Hugging Face Course", link: "https://huggingface.co/course/chapter1/1" },
          { type: "Andrej Karpathy (Zero to Hero)", link: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ" }
        ]
      },
      {
        name: "Computer Vision",
        streakRequired: 30,
        resources: [
          { type: "OpenCV Tutorials", link: "https://docs.opencv.org/4.x/d9/df8/tutorial_root.html" },
          { type: "YOLO Object Detection", link: "https://pjreddie.com/darknet/yolo/" }
        ]
      },
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
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {selectedRoadmap === null ? "Choose Your Learning Path" : roadmaps[selectedRoadmap].title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {selectedRoadmap === null
              ? "Select a roadmap to start your journey towards mastering a new skill set."
              : "Follow the path below to master this skill. Consistency is key!"}
          </p>
        </motion.div>

        {/* Roadmap selection */}
        {!selectedRoadmap && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmaps.map((roadmap, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 group cursor-pointer"
                onClick={() => setSelectedRoadmap(idx)}
              >
                <div className={`h-32 bg-gradient-to-r ${idx === 0 ? "from-orange-400 to-pink-500" :
                  idx === 1 ? "from-blue-400 to-indigo-500" :
                    "from-purple-500 to-violet-600"
                  } p-6 flex items-center justify-center`}>
                  <span className="text-5xl">
                    {idx === 0 ? "💻" : idx === 1 ? "📊" : "🤖"}
                  </span>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{roadmap.title}</h3>
                  <p className="text-gray-500 mb-6">{roadmap.skills.length} Milestones</p>
                  <button
                    className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold group-hover:bg-blue-600 transition-colors"
                  >
                    Start Journey 🚀
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Skill Path */}
        {selectedRoadmap !== null && (
          <div>
            <button
              onClick={() => setSelectedRoadmap(null)}
              className="mb-8 px-6 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium shadow-sm flex items-center gap-2"
            >
              ← Back to Roadmaps
            </button>

            <div className="relative max-w-3xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>

              <div className="flex flex-col gap-12">
                {roadmaps[selectedRoadmap].skills.map((skill, index) => {
                  const unlocked = completedSkills[skill.name] || false;
                  const isCurrent = index === currentSkillIndex;
                  const progressPercent = Math.min((streak / skill.streakRequired) * 100, 100);

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                    >
                      {/* Timeline Dot */}
                      <div className={`absolute left-8 md:left-1/2 w-8 h-8 rounded-full border-4 border-white shadow-md z-10 transform -translate-x-1/2 hidden md:block ${unlocked ? "bg-green-500" : isCurrent ? "bg-blue-500" : "bg-gray-300"
                        }`}></div>

                      {/* Content Card */}
                      <div className={`w-full md:w-[calc(50%-2rem)] p-6 rounded-2xl shadow-lg border ${unlocked
                        ? "bg-white border-green-200 shadow-green-100"
                        : isCurrent
                          ? "bg-white border-blue-200 shadow-blue-100 ring-2 ring-blue-100"
                          : "bg-gray-50 border-gray-200 opacity-70"
                        }`}>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-gray-800">{skill.name}</h4>
                            <p className="text-sm text-gray-500 font-medium mt-1">
                              {unlocked ? "Completed ✅" : `Requires ${skill.streakRequired} Day Streak`}
                            </p>
                          </div>
                          <span className="text-2xl">{unlocked ? "🔓" : "🔒"}</span>
                        </div>

                        {/* Progress Bar */}
                        {!unlocked && (
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 overflow-hidden">
                            <motion.div
                              className="h-full bg-blue-500"
                              initial={{ width: 0 }}
                              animate={{ width: `${progressPercent}%` }}
                              transition={{ duration: 1 }}
                            />
                          </div>
                        )}

                        {/* Resources */}
                        {unlocked && (
                          <div className="mt-4 bg-green-50 p-4 rounded-xl">
                            <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                              📚 Learning Resources
                            </h5>
                            <ul className="space-y-2">
                              {skill.resources.map((res, i) => (
                                <li key={i}>
                                  <a
                                    href={res.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors bg-white px-3 py-2 rounded-lg border border-green-100 shadow-sm hover:shadow-md"
                                  >
                                    <span className="text-xs font-bold uppercase tracking-wider text-green-600 bg-green-100 px-2 py-0.5 rounded">{res.type}</span>
                                    <span className="truncate">{res.link}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
