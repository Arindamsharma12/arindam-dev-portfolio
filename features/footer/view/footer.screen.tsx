"use client";

import React, { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FOOTER_DATA } from "../data/footer.data";
import { TouchBadge } from "../component/touch-badge.component";
import { ProfileCard } from "../component/profile-card.component";
import { EmailCard } from "../component/email-card.component";
import { GithubCard } from "../component/github-card.component";
import { ConnectCtaCard } from "../component/connect-cta-card.component";
import { LinkedinCard } from "../component/linkedin-card.component";
import { LeetcodeCard } from "../component/leetcode-card.component";

// Dynamically import WebThreads to prevent SSR hydration mismatches
const WebThreads = dynamic(() => import("@/components/WebThreads"), {
  ssr: false,
});

const emptySubscribe = () => () => {};

export const FooterScreen = () => {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const { resolvedTheme } = useTheme();
  const isLight = isMounted && resolvedTheme === "light";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      aria-label="Footer and Contact Section"
      className="relative w-full bg-black text-white pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 px-3 sm:px-6 lg:px-8 overflow-hidden select-none transition-colors duration-300"
    >
      {/* 1. Dynamic WebGL Shader Background matching RippleGrid theme */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-90">
        {isMounted && (
          <WebThreads
            color1={isLight ? "#4f46e5" : "#5227FF"}
            color2={isLight ? "#7c3aed" : "#FF9FFC"}
            color3={isLight ? "#4338ca" : "#FFFFFF"}
            speed={0.2}
            threadCount={6}
            frequency={4.5}
            spread={0.22}
            taper={1.0}
            position={0.5}
            fanMode="center"
            glow={0.025}
            falloff={0.6}
            thickness={1.2}
            brightness={isLight ? 0.6 : 0.8}
            opacity={isLight ? 0.75 : 1.0}
            mirror={true}
            shimmer={false}
            grain={true}
            grainIntensity={0.04}
            mouseInteraction={true}
            mouseStrength={0.3}
            backgroundColor={isLight ? "#FFFFFF" : "#000000"}
            lightMode={isLight}
            className="w-full h-full"
          />
        )}
      </div>

      {/* 2. Top & Bottom Edge Blends */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-black via-black/90 to-transparent z-0" />

      {/* 3. Main Footer Bento Grid with Responsive Breakpoints */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5 items-stretch lg:h-[510px]">
          {/* Column 1 on desktop: Left (TouchBadge + ProfileCard) */}
          <div className="contents lg:flex lg:flex-col lg:col-span-3 lg:gap-5 lg:h-full">
            {/* TouchBadge: Row 1 Col 1 on mobile */}
            <div className="col-span-1 order-1 lg:order-none">
              <TouchBadge />
            </div>
            {/* ProfileCard: Row 2 Full-width on mobile with increased height */}
            <div className="col-span-2 order-3 lg:order-none lg:flex-1 lg:flex lg:flex-col">
              <ProfileCard />
            </div>
          </div>

          {/* Column 2 on desktop: Center (EmailCard + GithubCard + ConnectCtaCard) */}
          <div className="contents lg:flex lg:flex-col lg:col-span-6 lg:gap-5 lg:h-full">
            {/* EmailCard: Row 1 Col 2 on mobile (shares row with TouchBadge) */}
            <div className="col-span-1 order-2 lg:order-none">
              <EmailCard />
            </div>
            {/* GithubCard: Row 3 Full-width on mobile */}
            <div className="col-span-2 order-4 lg:order-none lg:flex-1 lg:flex lg:flex-col">
              <GithubCard />
            </div>
            {/* ConnectCtaCard: Row 4 Full-width on mobile */}
            <div className="col-span-2 order-5 lg:order-none">
              <ConnectCtaCard />
            </div>
          </div>

          {/* Column 3 on desktop: Right (LinkedinCard + LeetcodeCard) */}
          <div className="contents lg:flex lg:flex-col lg:col-span-3 lg:gap-5 lg:h-full">
            {/* LinkedinCard: Row 5 Col 1 on mobile */}
            <div className="col-span-1 order-6 lg:order-none lg:flex-1 lg:flex lg:flex-col">
              <LinkedinCard />
            </div>
            {/* LeetcodeCard: Row 5 Col 2 on mobile (shares row with LinkedinCard) */}
            <div className="col-span-1 order-7 lg:order-none">
              <LeetcodeCard />
            </div>
          </div>
        </div>

        {/* 4. Bottom Footer Navigation & Copyright */}
        <div className="relative z-10 mt-10 sm:mt-12 md:mt-14 pt-4 sm:pt-6 border-t border-white/[0.08] flex items-center justify-between gap-3 sm:gap-4">
          {/* Spacer for symmetrical center alignment */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 pointer-events-none opacity-0" aria-hidden="true" />

          {/* Copyright Center */}
          <p className="text-[11px] sm:text-xs md:text-sm font-medium text-white/60 tracking-wider text-center flex-1">
            © {FOOTER_DATA.copyrightYear} {FOOTER_DATA.name} {FOOTER_DATA.surname}
          </p>

          {/* Scroll to Top Button Right */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200 active:scale-95 shadow-md cursor-pointer p-0 shrink-0"
          >
            <ArrowUp className="size-3.5 sm:size-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default FooterScreen;
