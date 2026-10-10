import React from "react";
import { SiGithub } from "react-icons/si";
import { Marquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import { FOOTER_DATA } from "../data/footer.data";

export const GithubCard = () => {
  return (
    <div className="relative group w-full flex-1 min-h-[250px] sm:min-h-[280px] lg:min-h-0 rounded-2xl sm:rounded-3xl border border-white/[0.12] bg-white/[0.04] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.12)] pt-3.5 pb-3.5 sm:pt-5 sm:pb-5 px-0 overflow-hidden flex flex-col justify-between gap-2.5 sm:gap-3 transition-all duration-300 hover:border-white/25">
      {/* Top Glass Specular Line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Radiant Violet / Purple Ambient Glow behind the marquees */}
      <div className="pointer-events-none absolute -inset-x-20 top-1/2 -translate-y-1/2 h-36 bg-gradient-to-r from-purple-600/15 via-fuchsia-500/20 to-purple-600/15 blur-2xl" />

      {/* Header Row: GitHub Logo + Handle & Follow Button (Padded) */}
      <div className="relative z-10 px-4 sm:px-6 flex items-center justify-between gap-2 sm:gap-3">
        <a
          href={FOOTER_DATA.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 sm:gap-3 min-w-0 text-white hover:text-white/80 transition-colors group/brand"
          aria-label={`GitHub profile ${FOOTER_DATA.githubHandle}`}
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 group-hover/brand:bg-white/[0.12] transition-colors">
            <SiGithub className="size-3.5 sm:size-4 text-white" />
          </div>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-tight text-white group-hover/brand:text-white transition-colors truncate">
            {FOOTER_DATA.githubHandle}
          </span>
        </a>

        {/* Follow Button */}
        <Button
          render={
            <a
              href={FOOTER_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          className="bg-white hover:bg-neutral-200 text-neutral-950 font-bold text-xs sm:text-sm px-3 sm:px-5 h-7 sm:h-8 rounded-lg sm:rounded-full shrink-0 transition-all active:scale-95 shadow-md hover:shadow-white/20"
        >
          Follow
        </Button>
      </div>

      {/* Marquee Area: Completely Edge-to-Edge with the GitHub Card */}
      <div className="relative z-10 w-full overflow-hidden flex flex-col gap-2 sm:gap-3 my-auto px-0">
        {/* Left & Right Smooth Edge Fade Masks flush with outer card edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 md:w-20 bg-gradient-to-r from-[#0c0814]/95 via-[#0c0814]/50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 md:w-20 bg-gradient-to-l from-[#0c0814]/95 via-[#0c0814]/50 to-transparent z-10" />

        {/* Row 1: Content about Arindam's role */}
        <Marquee
          pauseOnHover
          repeat={4}
          className="[--duration:32s] [--gap:0.75rem] sm:[--gap:1rem] py-0.5 sm:py-1 p-0 px-0"
        >
          {FOOTER_DATA.roles.map((role, idx) => (
            <div
              key={`role-${idx}`}
              className="group/card flex flex-col justify-center h-[64px] sm:h-[76px] lg:h-[82px] px-3.5 sm:px-6 rounded-xl sm:rounded-2xl bg-[#0e0919]/90 hover:bg-[#07040e]/95 border border-white/[0.1] hover:border-purple-400/40 backdrop-blur-xl transition-all duration-200 shrink-0 min-w-[210px] sm:min-w-[260px] lg:min-w-[290px] max-w-[340px] shadow-[0_6px_20px_rgba(0,0,0,0.6)] select-none cursor-default"
            >
              <span className="text-xs sm:text-sm lg:text-[15px] font-bold text-white truncate tracking-tight group-hover/card:text-purple-200 transition-colors">
                {role.title}
              </span>
              <span className="text-[11px] sm:text-xs lg:text-[13px] text-neutral-400 group-hover/card:text-neutral-300 truncate mt-0.5 sm:mt-1 tracking-normal transition-colors">
                {role.description}
              </span>
            </div>
          ))}
        </Marquee>

        {/* Row 2: Content about Arindam's projects */}
        <Marquee
          reverse
          pauseOnHover
          repeat={4}
          className="[--duration:32s] [--gap:0.75rem] sm:[--gap:1rem] py-0.5 sm:py-1 p-0 px-0"
        >
          {FOOTER_DATA.projects.map((proj, idx) => (
            <div
              key={`proj-${idx}`}
              className="group/card flex flex-col justify-center h-[64px] sm:h-[76px] lg:h-[82px] px-3.5 sm:px-6 rounded-xl sm:rounded-2xl bg-[#0e0919]/90 hover:bg-[#07040e]/95 border border-white/[0.1] hover:border-purple-400/40 backdrop-blur-xl transition-all duration-200 shrink-0 min-w-[210px] sm:min-w-[260px] lg:min-w-[290px] max-w-[340px] shadow-[0_6px_20px_rgba(0,0,0,0.6)] select-none cursor-default"
            >
              <span className="text-xs sm:text-sm lg:text-[15px] font-bold text-white truncate tracking-tight group-hover/card:text-purple-200 transition-colors">
                {proj.title}
              </span>
              <span className="text-[11px] sm:text-xs lg:text-[13px] text-neutral-400 group-hover/card:text-neutral-300 truncate mt-0.5 sm:mt-1 tracking-normal transition-colors">
                {proj.description}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Subtle Bottom Specular Line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
};
