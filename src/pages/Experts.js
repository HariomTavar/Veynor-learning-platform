import React from "react";
import { motion } from "framer-motion";

const experts = [
  {
    id: 1,
    name: "Dr. Sarah Connor",
    role: "AI Research Scientist",
    specialization: "Deep Learning & NLP",
    experience: "10+ Years",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    status: "Online",
  },
  {
    id: 2,
    name: "James T. Kirk",
    role: "Senior Data Engineer",
    specialization: "Big Data & Cloud Architecture",
    experience: "8 Years",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    status: "Offline",
  },
  {
    id: 3,
    name: "Ada Lovelace",
    role: "Machine Learning Engineer",
    specialization: "Computer Vision",
    experience: "5 Years",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    status: "Online",
  },
  {
    id: 4,
    name: "Alan Turing",
    role: "Algorithm Specialist",
    specialization: "Optimization & Logic",
    experience: "12+ Years",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    status: "Busy",
  },
];

export default function Experts() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Experts</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get 1-on-1 guidance, code reviews, and career advice from industry leaders in AI and Software Development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col group hover:border-blue-500/50 transition-all"
            >
              <div className="relative h-32 bg-gradient-to-r from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200 transition-all">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                  <span
                    className={`absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 border-white ${expert.status === "Online"
                      ? "bg-green-500"
                      : expert.status === "Busy"
                        ? "bg-red-500"
                        : "bg-gray-400"
                      }`}
                    title={expert.status}
                  ></span>
                </div>
              </div>

              <div className="pt-16 pb-6 px-6 text-center flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900">{expert.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-2">{expert.role}</p>
                <p className="text-gray-500 text-sm mb-4 flex-1">{expert.specialization}</p>

                <div className="mt-auto">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
                    <span>🕒 {expert.experience}</span>
                  </div>
                  <button
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                    onClick={() => alert(`Request sent to ${expert.name}!`)}
                  >
                    Connect Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
