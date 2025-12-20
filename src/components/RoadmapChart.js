// src/components/RoadmapChart.js
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#4f46e5", "#6366f1", "#818cf8", "#a5b4fc", "#c7d2fe"];

export default function RoadmapChart({ roadmap }) {
  const data = roadmap.skills.map((skill) => ({
    name: skill.name,
    value: skill.progress,
  }));

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 m-4 max-w-xs">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{roadmap.title}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={5}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
