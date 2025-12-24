// src/components/Navbar.js
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);

  const links = ["Roadmaps", "Experts", "Consistency", "AI Guide"];

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Aesthetic Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <img
              src="/veynor_logo.png"
              alt="Veynor Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-2xl font-bold text-gray-800 tracking-tight group-hover:text-blue-600 transition-colors font-sans">
            Veynor
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase().replace(/\s+/g, "")}`}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Search Icon & Input */}
          <div ref={searchRef} className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-500 text-xl hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-gray-50"
            >
              🔍
            </button>

            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 260, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="absolute right-0 top-full mt-2 flex gap-2 items-center bg-white p-2 rounded-xl shadow-xl border border-gray-100 ring-1 ring-black/5"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for skills, experts..."
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm text-gray-700 placeholder-gray-400 transition-all"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Profile Dropdown */}
          <div className="relative group">
            <Link to="/profile" className="flex items-center gap-2 focus:outline-none">
              <div className="w-10 h-10 rounded-full p-0.5 border-2 border-transparent group-hover:border-blue-100 transition-all">
                <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-sm">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" className="w-full h-full" />
                </div>
              </div>
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right ring-1 ring-black/5">
              <div className="py-2">
                <div className="px-4 py-2 border-b border-gray-50">
                  <p className="text-sm font-semibold text-gray-800">Alex Johnson</p>
                  <p className="text-xs text-gray-500">alex@example.com</p>
                </div>
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  My Profile
                </Link>
                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Settings
                </Link>
                <div className="border-t border-gray-50 my-1"></div>
                <button className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors rounded-b-2xl">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-2xl focus:outline-none p-2">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl flex flex-col px-6 py-6 space-y-4 font-semibold text-gray-600"
          >
            {links.map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase().replace(/\s+/g, "")}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-600 transition-colors block text-lg"
                >
                  {link}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
