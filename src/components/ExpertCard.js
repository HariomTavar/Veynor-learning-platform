// src/components/ExpertCard.js
import React from "react";

const ExpertCard = ({ name, skill, link, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:scale-105 transition-transform">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{skill}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-blue-500 font-medium hover:underline"
      >
        Learn More
      </a>
    </div>
  );
};

export default ExpertCard;
