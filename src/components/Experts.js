// src/components/Experts.js
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const experts = [
  { name: "Hariom Tavar", role: "Co-founder-veynor", image: "/hariompic.jpg", skills: ["Java","react.js","SQL"] },
  { name: "Rohan Mehra", role: "Frontend Engineer", image: "/shree1.jpg", skills: ["React", "CSS", "JavaScript"] },
  { name: "Shreey Kapoor", role: "Data Scientist", image: "/shree2.jpg", skills: ["Data Analysis", "Python", "Pandas"] },
  { name: "Ananya Verma", role: "AI specialist", image: "/shree3.jpg", skills: ["ML", "Deep Learning", "Python"] },
  { name: "Alice Johnson", role: "UI/UX Designer", image: "/shree4.jpg", skills: ["Figma", "Design", "Prototyping"] },
  
];

export default function Experts() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((prev) => (prev + 1) % experts.length),
    onSwipedRight: () => setActiveIndex((prev) => (prev - 1 + experts.length) % experts.length),
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experts.length);
      if (carouselRef.current) {
        const cardWidth = carouselRef.current.scrollWidth / experts.length;
        carouselRef.current.scrollTo({
          left: cardWidth * ((activeIndex + 1) % experts.length),
          behavior: "smooth",
        });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Meet Our Experts
      </h2>

      <div
        {...handlers}
        ref={carouselRef}
        className="flex overflow-x-auto space-x-6 px-6 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {experts.map((expert, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, rotateY: 5, boxShadow: "0px 10px 30px rgba(59, 130, 246, 0.3)" }}
            className="relative min-w-[220px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer h-[350px]"
            style={{
              backgroundImage: `url(${expert.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay for text at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-30 flex flex-col justify-end p-5 text-white">
              <h3 className="text-lg font-semibold">{expert.name}</h3>
              <p className="text-sm mb-2">{expert.role}</p>

              <div className="flex flex-wrap gap-2 mt-1">
                {expert.skills.map((skill, i) => (
                  <span key={i} className="text-xs bg-blue-500 bg-opacity-70 px-2 py-1 rounded-full font-medium">
                    {skill}
                  </span>
                ))}
              </div>

              <button className="mt-4 w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-500 transition">
                Connect
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
