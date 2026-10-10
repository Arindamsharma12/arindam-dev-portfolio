"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TechSkill } from "../data/tech.data";

interface TechCardProps {
  skill: TechSkill;
  index?: number;
}

export const TechCard = ({ skill, index = 0 }: TechCardProps) => {
  const Icon = skill.icon;
  const [isHovered, setIsHovered] = useState(false);
  const accent = skill.accentColor || "#38BDF8";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.015, 0.35),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{
        y: -5,
        scale: 1.08,
        transition: { type: "spring", stiffness: 420, damping: 20 },
      }}
      whileTap={{ scale: 0.96 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col items-center justify-center cursor-pointer select-none
        w-[62px] h-[62px] sm:w-[72px] sm:h-[72px] md:w-[80px] md:h-[80px] lg:w-[86px] lg:h-[86px]
        rounded-xl sm:rounded-2xl p-1.5 sm:p-2
        /* Liquid Glass Base */
        bg-white/[0.04] hover:bg-white/[0.08]
        backdrop-blur-md sm:backdrop-blur-lg
        border border-white/[0.14]
        /* Specular rim light & depth shadow */
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_20px_rgba(0,0,0,0.35)]
        transition-all duration-300 ease-out"
      style={{
        borderColor: isHovered ? `${accent}80` : undefined,
        boxShadow: isHovered
          ? `0 0 24px ${accent}45, inset 0 1px 2px rgba(255,255,255,0.5)`
          : undefined,
      }}
      role="button"
      tabIndex={0}
      aria-label={skill.name}
    >
      {/* Liquid Glass Highlight (Top specular sheen reflection) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/[0.18] via-white/[0.04] to-transparent" />
        {/* Colorful dynamic radial glow when hovered */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at center, ${accent}30 0%, transparent 75%)`,
          }}
        />
      </div>

      {/* Tech Logo - Monochrome when idle, Colorful & glowing on hover */}
      <div
        className="relative z-10 flex items-center justify-center mb-1 text-white/80 transition-all duration-300 group-hover:scale-110"
        style={{
          color: isHovered ? accent : undefined,
          filter: isHovered
            ? `drop-shadow(0 0 8px ${accent}90)`
            : "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
        }}
      >
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 transition-colors duration-300" />
      </div>

      {/* Tech Name */}
      <span
        className="relative z-10 text-[9.5px] sm:text-[10.5px] md:text-[11.5px] font-medium tracking-tight leading-none text-center truncate max-w-full px-1 transition-colors duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]"
        style={{
          color: isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.75)",
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
};

export default TechCard;
