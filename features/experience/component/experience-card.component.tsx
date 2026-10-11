"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ExperienceItem } from "../data/experience.data";

export interface ExperienceCardProps {
  experience: ExperienceItem;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const hasMultipleRoles = experience.roles && experience.roles.length > 1;
  const primaryRole = experience.roles[0];

  // Multi-Role Company View
  if (hasMultipleRoles) {
    return (
      <div className="group relative rounded-2xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5">
        {/* Subtle top glow */}
        <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        {/* Company Header: Company Name, Total Duration, Location & Logo */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {experience.company}
              </h4>
              {experience.companyUrl && (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-blue-400 transition-colors"
                  title={`Visit ${experience.company}`}
                  aria-label={`Visit ${experience.company}`}
                >
                  <ExternalLink className="size-4" />
                </a>
              )}
            </div>
            <p className="mt-1.5 text-sm sm:text-base text-neutral-400">
              {experience.totalDuration ? `${experience.totalDuration} • ` : ""}
              {experience.locationType || primaryRole?.location || ""}
            </p>
          </div>

          {experience.logo && (
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-sm flex items-center justify-center bg-black/40">
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

        {/* Roles Progression Timeline */}
        <div className="mt-7 relative border-l-2 border-neutral-800 ml-2 sm:ml-2.5 pb-1 space-y-8">
          {experience.roles.map((role, idx) => {
            const isFirst = idx === 0;
            return (
              <div key={idx} className="relative pl-6 sm:pl-7">
                {/* Timeline Node Marker */}
                <div
                  className={`absolute -left-[8px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                    isFirst
                      ? "border-blue-400 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                      : "border-neutral-600 bg-neutral-900"
                  }`}
                  aria-hidden="true"
                />

                {/* Role Title & Employment Info */}
                <div>
                  <h5 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    {role.role}
                  </h5>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-400">
                    {role.employmentType && <span>{role.employmentType} • </span>}
                    <span>{role.duration}</span>
                    {role.location && <span> • {role.location}</span>}
                  </p>
                </div>

                {/* Role Description */}
                {role.description && (
                  <p className="mt-2.5 text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {role.description}
                  </p>
                )}

                {/* Role Highlights (if present) */}
                {role.highlights && role.highlights.length > 0 && (
                  <ul className="mt-3 space-y-2 text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {role.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <span className="text-neutral-500 select-none">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Role Skills Badges */}
                {role.skills && role.skills.length > 0 && (
                  <div className="mt-3.5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-neutral-300 transition-colors hover:border-blue-500/30 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Role Media Link (if present) */}
                {role.media && (
                  <div className="mt-3.5">
                    <a
                      href={role.media.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/media inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-neutral-300 hover:border-blue-500/40 hover:text-blue-400 transition-all"
                    >
                      <ExternalLink className="size-3.5 text-neutral-400 group-hover/media:text-blue-400 transition-colors" />
                      <span className="font-medium truncate max-w-xs sm:max-w-md">
                        {role.media.title}
                      </span>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Single Role Company View
  const title = experience.title || primaryRole?.role || experience.company;
  const subtitle =
    experience.subtitle ||
    `${experience.company} • ${primaryRole?.location || experience.locationType || ""} • ${
      experience.totalDuration || primaryRole?.duration || ""
    }`;

  const bullets = experience.bullets || [
    ...(primaryRole?.description ? [primaryRole.description] : []),
    ...(primaryRole?.highlights || []),
    ...(primaryRole?.skills?.length
      ? [`Tech Stack: ${primaryRole.skills.join(", ")}.`]
      : []),
  ];

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Header: Title, Metadata, and Logo */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {title}
            </h4>
            {experience.companyUrl && (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-blue-400 transition-colors"
                title={`Visit ${experience.company}`}
                aria-label={`Visit ${experience.company}`}
              >
                <ExternalLink className="size-4" />
              </a>
            )}
          </div>
          <p className="mt-1.5 text-sm sm:text-base text-neutral-400">
            {subtitle}
          </p>
        </div>

        {experience.logo && (
          <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-sm flex items-center justify-center bg-black/40">
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

      {/* Skills Badges for single role (if available) */}
      {primaryRole?.skills && primaryRole.skills.length > 0 && (
        <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5 sm:gap-2">
          {primaryRole.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-neutral-300 transition-colors hover:border-blue-500/30 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
