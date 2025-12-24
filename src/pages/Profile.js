import React from "react";
import { motion } from "framer-motion";

export default function Profile() {
    const user = {
        name: "Alex Johnson",
        role: "Aspiring AI Engineer",
        level: 5,
        xp: 2450,
        nextLevelXp: 3000,
        streak: 12,
        badges: ["🔥 Streak Master", "🚀 Quick Learner", "🤖 AI Enthusiast"],
        completedCourses: 3,
        ongoingCourses: 2,
        about: "Passionate learner exploring the world of Artificial Intelligence and Web Development. Committed to daily growth and building meaningful projects."
    };

    return (
        <section className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Profile Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8"
                >
                    <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                    <div className="px-8 pb-8">
                        <div className="relative flex justify-between items-end -mt-12 mb-6">
                            <div className="flex items-end gap-6">
                                <div className="w-24 h-24 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
                                    <img
                                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                        alt="Profile"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="mb-1">
                                    <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                                    <p className="text-blue-600 font-medium">{user.role}</p>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                                Edit Profile
                            </button>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-gray-50 p-4 rounded-2xl text-center">
                                <span className="block text-2xl font-bold text-gray-900">{user.level}</span>
                                <span className="text-sm text-gray-500">Level</span>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-2xl text-center">
                                <span className="block text-2xl font-bold text-gray-900">{user.streak} 🔥</span>
                                <span className="text-sm text-gray-500">Day Streak</span>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-2xl text-center">
                                <span className="block text-2xl font-bold text-gray-900">{user.completedCourses}</span>
                                <span className="text-sm text-gray-500">Completed</span>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-2xl text-center">
                                <span className="block text-2xl font-bold text-gray-900">{user.ongoingCourses}</span>
                                <span className="text-sm text-gray-500">In Progress</span>
                            </div>
                        </div>

                        {/* XP Progress */}
                        <div className="mb-2">
                            <div className="flex justify-between text-sm font-semibold mb-1">
                                <span className="text-gray-700">XP Progress</span>
                                <span className="text-blue-600">{user.xp} / {user.nextLevelXp} XP</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(user.xp / user.nextLevelXp) * 100}%` }}
                                    transition={{ duration: 1 }}
                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                ></motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* About Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white p-6 rounded-3xl shadow-lg mb-8"
                >
                    <h2 className="text-xl font-bold text-gray-900 mb-4">About Me</h2>
                    <p className="text-gray-600 leading-relaxed">
                        {user.about}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Badges Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-6 rounded-3xl shadow-lg"
                    >
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Achievements</h2>
                        <div className="flex flex-wrap gap-3">
                            {user.badges.map((badge, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold border border-yellow-200"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Recent Activity (Mock) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-6 rounded-3xl shadow-lg"
                    >
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                Completed "Python for AI" module
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                Joined "Machine Learning" roadmap
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                Unlocked "Quick Learner" badge
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
