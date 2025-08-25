'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiPython, SiOpenai } from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode;
  gradient: string;
  progress: number;
}

const skills: Skill[] = [
  { name: "HTML", icon: <FaHtml5 />, gradient: "#f97316,#ef4444", progress: 80 },
  { name: "CSS (Tailwind + CSS)", icon: <FaCss3Alt />, gradient: "#e2e8f0,#60a5fa", progress: 75 },
  { name: "JS + TS", icon: <FaJs />, gradient: "#facc15,#f59e0b", progress: 70 },
  { name: "React.js", icon: <FaReact />, gradient: "#22d3ee,#3b82f6", progress: 85 },
  { name: "Next.js", icon: <SiNextdotjs />, gradient: "#f5f5f5,#d4d4d8", progress: 75 },
  { name: "Node.js", icon: <FaNodeJs />, gradient: "#22c55e,#16a34a", progress: 80 },
  { name: "Python", icon: <SiPython />, gradient: "#e2e8f0,#60a5fa", progress: 60 },
  { name: "Pursing Agentic AI", icon: <SiOpenai />, gradient: "#ec4899,#8b5cf6", progress: 50 },
];

const SkillsPage = () => {
  const circumference = 2 * Math.PI * 40;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-black text-white py-16 px-4"
    >
      <h1 className="text-5xl font-bold text-center text-cyan-600 mb-4">
        My Skills
      </h1>
      <p className="text-center text-gray-400 mb-12">
        Technologies I have worked with visualized with glowing progress circles.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
        {skills.map(({ name, icon, gradient, progress }) => {
          const offset = circumference - (progress / 100) * circumference;
          const gradientId = `gradient-${name.replace(/\s+/g, "-")}`;

          return (
            <motion.div
              key={name}
              className="flex flex-col items-center gap-2"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#1f2937"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={`url(#${gradientId})`}
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
                  />
                  <defs>
                    <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={gradient.split(",")[0]} />
                      <stop offset="100%" stopColor={gradient.split(",")[1]} />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl">
                  {icon}
                </div>
              </div>
              <span className="text-white font-semibold text-sm text-center">
                {name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SkillsPage;


