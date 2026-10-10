import React from "react";
import Image from "next/image";
import { FOOTER_DATA } from "../data/footer.data";
import { JapaneseClouds } from "./japanese-clouds.component";

export const ProfileCard = () => {
  return (
    <div className="relative group w-full flex-1 min-h-[420px] sm:min-h-[460px] md:min-h-[480px] lg:min-h-0 rounded-2xl sm:rounded-3xl border border-white/[0.12] bg-white/[0.04] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.45),inset_0_1px_1px_0_rgba(255,255,255,0.15)] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-white/25 hover:shadow-[0_12px_40px_0_rgba(168,85,247,0.15)]">
      {/* 1. Full-Card Portrait Photo */}
      {/* Black & White by default, colorful on hover */}
      <Image
        src={FOOTER_DATA.profileImage}
        alt={`${FOOTER_DATA.name} ${FOOTER_DATA.surname}`}
        fill
        sizes="(max-width: 1024px) 100vw, 360px"
        priority
        className="object-cover object-[center_16%] filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out select-none pointer-events-none"
      />

      {/* 2. Japanese Traditional Stylized Clouds Overlay (Subtle in upper area) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 sm:h-52 z-10 opacity-25 mix-blend-screen overflow-hidden">
        <JapaneseClouds />
      </div>

      {/* 3. Soft Darkening Gradient Overlays for Text Legibility */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 sm:h-48 bg-gradient-to-b from-black/85 via-black/35 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

      {/* 4. Top Specular Glass Line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent z-20" />

      {/* 5. Content Over Photo (Top) */}
      <div className="relative z-20 pt-5 sm:pt-6 px-3 sm:px-4 flex flex-col items-center text-center select-none">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-widest text-white uppercase leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          {FOOTER_DATA.name}
        </h3>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-widest text-white uppercase leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] mt-1">
          {FOOTER_DATA.surname}
        </h3>
        <p className="text-[11px] sm:text-xs md:text-[13px] font-medium text-white/90 tracking-wide mt-1.5 sm:mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          {FOOTER_DATA.role}
        </p>
      </div>

      {/* Empty bottom spacer */}
      <div className="relative z-20 pb-3 sm:pb-4" />
    </div>
  );
};
