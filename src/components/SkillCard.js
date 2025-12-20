import React from "react";

export default function SkillCard({ title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2 text-yellow-600">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}