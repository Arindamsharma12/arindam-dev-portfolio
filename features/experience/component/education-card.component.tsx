"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { EducationItem } from "../data/experience.data";

export interface EducationCardProps {
  education: EducationItem;
}

export const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-neutral-900/60 p-5 sm:p-7 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/5 overflow-hidden">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      {/* Header: Degree, Institution, Duration/Grade, and Logo */}
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white break-words">
            {education.degree}
          </h4>
          <p className="mt-1 text-sm sm:text-base font-medium text-neutral-300 break-words">
            {education.institution}
          </p>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-neutral-400 break-words">
            {education.duration && <span>{education.duration}</span>}
            {education.duration && education.grade && (
              <span className="text-neutral-600">•</span>
            )}
            {education.grade && (
              <span className="inline-flex items-center rounded-md border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 text-xs font-semibold text-purple-300">
                {education.grade}
              </span>
            )}
          </div>
        </div>

        {education.logo ? (
          <div className="relative h-11 w-11 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-sm flex items-center justify-center bg-black/40">
            <Image
              src={education.logo}
              alt={education.institution}
              width={56}
              height={56}
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
        ) : (
          <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
        )}
      </div>

      {/* Achievements / Bullet Points */}
      {education.achievements && education.achievements.length > 0 && (
        <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed">
          {education.achievements.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
              <span className="text-neutral-500 mt-0.5 select-none text-base shrink-0">
                •
              </span>
              <span className="break-words">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EducationCard;
