"use client";

import React from "react";
import Image from "next/image";
import { EducationItem } from "../data/experience.data";

export interface EducationCardProps {
  education: EducationItem;
}

export const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/5">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      {/* Header: Title, Metadata, and Logo */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {education.degree}
          </h4>
          <p className="mt-1.5 text-sm sm:text-base text-neutral-400">
            {education.institution} • {education.grade}
          </p>
        </div>

        {education.logo && (
          <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-sm flex items-center justify-center">
            <Image
              src={education.logo}
              alt={education.institution}
              width={56}
              height={56}
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
        )}
      </div>

      {/* Clean Bullet Points matching reference screenshot */}
      <ul className="mt-6 space-y-3.5 text-sm sm:text-base text-neutral-300 leading-relaxed">
        {education.achievements.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="text-neutral-500 mt-0.5 select-none text-base">
              •
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;
