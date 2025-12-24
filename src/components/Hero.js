// src/components/Hero.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Users, TrendingUp, ArrowRight } from "lucide-react";

export default function Hero({ phrases, currentIndex }) {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      title: "Curated Roadmaps",
      desc: "Step-by-step guides to master any skill.",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Expert Mentorship",
      desc: "Connect with industry leaders directly.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "Track Progress",
      desc: "Visualize your growth and consistency.",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gray-50 min-h-screen flex flex-col justify-center">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              The Future of Learning
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6 tracking-tight"
            >
              Master Your Craft <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                With Confidence
              </span>
            </motion.h1>

            {/* Dynamic Phrases */}
            <div className="h-8 mb-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={phrases[currentIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl text-gray-500 font-medium"
                >
                  {phrases[currentIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Veynor provides the tools, roadmaps, and mentorship you need to accelerate your career. Join thousands of learners today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/roadmaps">
                <button className="px-8 py-4 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                  Start Learning
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/experts">
                <button className="px-8 py-4 rounded-xl bg-white text-gray-700 font-semibold border border-gray-200 hover:bg-gray-50 transition-all shadow-sm hover:shadow-md">
                  Find a Mentor
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Feature Cards (Visuals) */}
          <div className="lg:w-1/2 relative mt-12 lg:mt-0">
            <div className="relative w-full max-w-md mx-auto lg:mr-0">
              {/* Decorative Circle */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

              {/* Cards Stack */}
              <div className="relative z-10 grid gap-6">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-5 transition-all"
                  >
                    <div className={`p-3 rounded-xl bg-gray-50 border border-gray-100 shadow-sm`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-500">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
