"use client";

import React, { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { FOOTER_DATA } from "../data/footer.data";
import { Button } from "@/components/ui/button";

export const EmailCard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(FOOTER_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative group w-full h-[68px] shrink-0 rounded-2xl sm:rounded-3xl border border-white/[0.12] bg-white/[0.04] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_1px_0_rgba(255,255,255,0.12)] px-2.5 sm:px-4 md:px-6 flex items-center justify-between gap-1.5 sm:gap-3 transition-all duration-300 hover:border-white/25">
      {/* Top Glass Highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Left: Email icon and clickable mail address */}
      <a
        href={`mailto:${FOOTER_DATA.email}`}
        className="flex items-center gap-1.5 sm:gap-2.5 min-w-0 flex-1 group/link"
        aria-label={`Send email to ${FOOTER_DATA.email}`}
      >
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 group-hover/link:bg-white/[0.12] transition-colors">
          <Mail className="size-3.5 sm:size-4 text-white/90" />
        </div>
        <div className="flex flex-col min-w-0 flex-1 justify-center leading-tight">
          <span className="text-[11px] sm:text-xs font-semibold text-white/90 group-hover/link:text-white truncate">
            Email Me
          </span>
          <span className="text-[10px] sm:text-[11px] md:text-sm text-neutral-400 group-hover/link:text-neutral-300 truncate">
            {FOOTER_DATA.email}
          </span>
        </div>
      </a>

      {/* Right: Copy Button */}
      <div className="relative shrink-0">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          aria-label={copied ? "Email copied" : "Copy email address"}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-white/[0.06] hover:bg-white/[0.14] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all active:scale-95 cursor-pointer shadow-sm p-0"
        >
          {copied ? (
            <Check className="size-3.5 sm:size-4 text-emerald-400 transition-transform scale-110" />
          ) : (
            <Copy className="size-3.5 sm:size-4" />
          )}
        </Button>

        {/* Floating "Copied!" notification badge */}
        {copied && (
          <span className="absolute -top-8 right-0 text-[10px] sm:text-[11px] font-semibold tracking-wide bg-emerald-500/90 text-black px-2 py-0.5 rounded-full shadow-lg animate-in fade-in zoom-in-95 duration-200">
            Copied!
          </span>
        )}
      </div>
    </div>
  );
};
