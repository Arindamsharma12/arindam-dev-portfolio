import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiDocker,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiHtml5,
  SiGit,
  SiRedis,
} from "react-icons/si";
import { FOOTER_DATA } from "../data/footer.data";

const WATERMARK_ICONS = [
  SiJavascript,
  SiTypescript,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiDocker,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiHtml5,
  SiGit,
  SiRedis,
];

export const LinkedinCard = () => {
  return (
    <div className="relative group w-full h-[148px] sm:h-[156px] lg:h-full lg:flex-1 rounded-2xl sm:rounded-3xl border border-white/[0.12] bg-white/[0.04] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.12)] p-3 sm:p-4 md:p-6 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-white/25 hover:shadow-[0_12px_40px_0_rgba(168,85,247,0.2)]">
      {/* Top Glass Highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Radiant Violet / Purple Ambient Light in lower half */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-purple-600/30 via-fuchsia-600/15 to-transparent blur-xl" />

      {/* Watermark Tech Icons Grid */}
      <div className="pointer-events-none absolute inset-0 p-3 pt-10 sm:p-5 sm:pt-14 grid grid-cols-4 gap-y-3 sm:gap-y-4 gap-x-2.5 items-center justify-items-center opacity-15 group-hover:opacity-25 transition-opacity duration-500">
        {WATERMARK_ICONS.map((Icon, idx) => (
          <Icon key={idx} className="size-3.5 sm:size-4 md:size-5 text-white" />
        ))}
      </div>

      {/* Top Left: LinkedIn Icon Button */}
      <div className="relative z-10">
        <a
          href={FOOTER_DATA.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-xl sm:rounded-2xl bg-white text-neutral-950 flex items-center justify-center shadow-lg group-hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <FaLinkedinIn className="size-4 sm:size-4.5 md:size-5 text-neutral-950" />
        </a>
      </div>

      {/* Bottom: LinkedIn Profile Pill */}
      <div className="relative z-10 w-full">
        <a
          href={FOOTER_DATA.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-xl sm:rounded-2xl bg-black/50 hover:bg-black/70 border border-white/10 hover:border-white/25 px-2.5 sm:px-4 py-1.5 sm:py-2.5 flex items-center justify-center text-[11px] sm:text-xs md:text-[13px] font-medium text-white/80 hover:text-white transition-all shadow-inner truncate tracking-tight sm:tracking-wide"
        >
          <span className="truncate">{FOOTER_DATA.linkedinHandle}</span>
        </a>
      </div>
    </div>
  );
};
