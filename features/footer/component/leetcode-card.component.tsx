import React from "react";
import { SiLeetcode } from "react-icons/si";
import { FOOTER_DATA } from "../data/footer.data";

// 16 columns x 4 rows matrix mimicking activity heatmap
const HEATMAP_CELLS: number[] = [
  1, 2, 0, 3, 2, 1, 0, 2, 3, 1, 2, 3, 0, 1, 2, 3,
  0, 1, 2, 2, 3, 0, 1, 3, 2, 0, 1, 2, 3, 2, 1, 2,
  2, 3, 1, 0, 1, 2, 3, 1, 0, 2, 3, 1, 2, 0, 3, 1,
  1, 0, 2, 3, 1, 2, 0, 2, 3, 1, 0, 3, 2, 1, 2, 3,
];

const INTENSITY_COLORS: Record<number, string> = {
  0: "bg-white/[0.08]",
  1: "bg-purple-400/40",
  2: "bg-purple-300/70",
  3: "bg-white/90",
};

export const LeetcodeCard = () => {
  return (
    <div className="relative group w-full h-[148px] sm:h-[156px] lg:h-[136px] shrink-0 rounded-2xl sm:rounded-3xl border border-white/[0.12] bg-white/[0.04] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.12)] p-3 sm:p-4 md:p-5 overflow-hidden flex flex-col justify-between gap-2 transition-all duration-300 hover:border-white/25">
      {/* Top Glass Highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Top Section: LeetCode Logo + Activity Matrix */}
      <div className="relative z-10 flex items-center justify-between gap-1.5 sm:gap-2.5">
        {/* LeetCode Icon */}
        <a
          href={FOOTER_DATA.leetcodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode profile"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 hover:bg-white/[0.12] transition-colors"
        >
          <SiLeetcode className="size-4 sm:size-5 text-white/90 group-hover:text-amber-400 transition-colors" />
        </a>

        {/* Heatmap Activity Grid */}
        <div className="grid grid-cols-[repeat(16,minmax(0,1fr))] gap-[1.5px] min-[360px]:gap-[2px] sm:gap-[2.5px] p-1 sm:p-1.5 rounded-lg bg-black/30 border border-white/5">
          {HEATMAP_CELLS.map((intensity, idx) => (
            <div
              key={idx}
              className={`w-[4px] h-[4px] min-[360px]:w-[4.8px] min-[360px]:h-[4.8px] sm:w-[6.5px] sm:h-[6.5px] md:w-[7.5px] md:h-[7.5px] rounded-[1px] sm:rounded-[1.5px] ${INTENSITY_COLORS[intensity]} transition-opacity duration-300`}
            />
          ))}
        </div>
      </div>

      {/* Bottom: LeetCode Profile Pill */}
      <div className="relative z-10 w-full">
        <a
          href={FOOTER_DATA.leetcodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-xl sm:rounded-2xl bg-black/50 hover:bg-black/70 border border-white/10 hover:border-white/25 px-2.5 sm:px-4 py-1.5 sm:py-2 flex items-center justify-center text-[11px] sm:text-xs md:text-[13px] font-medium text-white/70 hover:text-white transition-all shadow-inner truncate tracking-tight sm:tracking-wide"
        >
          <span className="truncate">{FOOTER_DATA.leetcodeHandle}</span>
        </a>
      </div>
    </div>
  );
};
