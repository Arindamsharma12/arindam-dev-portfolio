import React from "react";
import { FOOTER_DATA } from "../data/footer.data";

export const ConnectCtaCard = () => {
  return (
    <div className="relative group w-full min-h-[56px] sm:h-[68px] shrink-0 rounded-2xl sm:rounded-3xl border border-white/[0.12] bg-white/[0.04] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.12)] px-3.5 sm:px-6 py-2.5 sm:py-0 flex items-center justify-center text-center transition-all duration-300 hover:border-white/25">
      {/* Top Glass Highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Message */}
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white/90 group-hover:text-white transition-colors tracking-tight leading-snug select-none">
        {FOOTER_DATA.ctaText}
      </p>
    </div>
  );
};
