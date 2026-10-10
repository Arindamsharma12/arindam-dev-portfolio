"use client";

import React from "react";
import Image from "next/image";
import { ExperienceItem } from "../data/experience.data";

export interface ExperienceCardProps {
  experience: ExperienceItem;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const primaryRole = experience.roles[0];
  const title = experience.title || primaryRole?.role || experience.company;
  const subtitle =
    experience.subtitle ||
    `${experience.company} • ${primaryRole?.location || experience.locationType || ""} • ${
      experience.totalDuration || primaryRole?.duration || ""
    }`;

  const bullets = experience.bullets || [
    ...(primaryRole?.description ? [primaryRole.description] : []),
    ...(primaryRole?.highlights || []),
    ...(experience.roles.length > 1
      ? [
          `Previously worked as ${experience.roles[1].role} (${experience.roles[1].duration}).`,
        ]
      : []),
    ...(primaryRole?.skills?.length
      ? [`Tech Stack: ${primaryRole.skills.join(", ")}.`]
      : []),
  ];

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Header: Title, Metadata, and Logo */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            {title}
          </h4>
          <p className="mt-1.5 text-sm sm:text-base text-neutral-400">
            {subtitle}
          </p>
        </div>

        {experience.logo && (
          <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-sm flex items-center justify-center">
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

      {/* Clean Bullet Points matching Education Card & Screenshot reference */}
      <ul className="mt-6 space-y-3.5 text-sm sm:text-base text-neutral-300 leading-relaxed">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="text-neutral-500 mt-0.5 select-none text-base">
              •
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
