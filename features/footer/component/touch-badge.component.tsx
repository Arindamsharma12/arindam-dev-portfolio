import React from "react";

export const TouchBadge = () => {
  return (
    <div className="relative group w-full h-[68px] shrink-0 flex items-center justify-center rounded-2xl sm:rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/[0.12] shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.12)] transition-all duration-300 hover:border-white/25">
      {/* Top Glass Highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Text Content */}
      <div className="flex flex-col items-center justify-center text-center select-none leading-none">
        <span className="text-xs sm:text-base md:text-lg font-black tracking-widest text-white uppercase leading-none drop-shadow-sm">
          GET IN
        </span>
        <span className="text-xs sm:text-base md:text-lg font-black tracking-widest text-white uppercase leading-none drop-shadow-sm mt-1 sm:mt-1.5">
          TOUCH
        </span>
      </div>
    </div>
  );
};
