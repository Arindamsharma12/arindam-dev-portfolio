"use client";

import React from "react";
import Image from "next/image";
import { ExperienceItem } from "../data/experience.data";

export interface ExperienceCardProps {
  experience: ExperienceItem;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const primaryRole = experience.roles?.[0];
  const designation = experience.title || primaryRole?.role || experience.company;
  const duration =
    primaryRole?.duration ||
    (experience.totalDuration
      ? `${experience.timelineTitle} · ${experience.totalDuration}`
      : experience.timelineTitle);

  const bullets =
    experience.bullets && experience.bullets.length > 0
      ? experience.bullets
      : [
          ...(primaryRole?.description ? [primaryRole.description] : []),
          ...(primaryRole?.highlights || []),
        ];

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-neutral-900/60 p-5 sm:p-7 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Header: Designation, Company Name, Durations, and Logo */}
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white break-words">
            {designation}
          </h4>
          <p className="mt-1 text-sm sm:text-base font-medium text-neutral-300 break-words">
            {experience.company}
          </p>
          <p className="mt-0.5 text-xs sm:text-sm text-neutral-400 break-words">
            {duration}
          </p>
        </div>

        {experience.logo && (
          <div className="relative h-11 w-11 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-sm flex items-center justify-center bg-black/40">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={56}
              height={56}
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
        )}
      </div>

      {/* Bullet Points */}
      <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
            <span className="text-neutral-500 mt-0.5 select-none text-base shrink-0">
              •
            </span>
            <span className="break-words">{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
