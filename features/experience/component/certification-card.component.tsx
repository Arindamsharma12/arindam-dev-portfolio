"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Calendar, Award, Sparkles } from "lucide-react";
import { SiHackerrank } from "react-icons/si";
import { CertificationItem } from "../data/experience.data";

export interface CertificationCardProps {
  certification: CertificationItem;
}

export const CertificationCard = ({
  certification,
}: CertificationCardProps) => {
  // Helper to render issuer logo or branded badge
  const renderIssuerLogo = () => {
    if (certification.logo) {
      return (
        <div className="relative h-11 w-11 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-sm flex items-center justify-center bg-black/40">
          <Image
            src={certification.logo}
            alt={certification.issuer}
            width={56}
            height={56}
            className="h-full w-full object-cover"
            unoptimized
          />
        </div>
      );
    }

    if (certification.issuer.toLowerCase().includes("hackerrank")) {
      return (
        <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-black border border-white/10 shadow-sm text-[#00EA64]">
          <SiHackerrank className="h-6 w-6 sm:h-8 sm:w-8" />
        </div>
      );
    }

    if (certification.issuer.toLowerCase().includes("hcltech")) {
      return (
        <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 text-white font-black text-[10px] sm:text-xs shadow-sm border border-white/10">
          <span>HCLTech</span>
        </div>
      );
    }

    if (certification.issuer.toLowerCase().includes("hackaccino")) {
      return (
        <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-white font-mono text-xs sm:text-sm shadow-sm">
          <span className="font-bold tracking-tighter">&lt;☕/&gt;</span>
        </div>
      );
    }

    if (certification.issuer.toLowerCase().includes("smart india")) {
      return (
        <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white font-bold text-[10px] sm:text-xs shadow-sm border border-orange-400/30">
          <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
      );
    }

    return (
      <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-neutral-300">
        <Award className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
    );
  };

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-neutral-900/60 p-5 sm:p-7 md:p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5 overflow-hidden">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Main Certification Header */}
      <div className="flex items-start gap-3 sm:gap-4">
        {renderIssuerLogo()}

        <div className="flex-1 min-w-0">
          <h4 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white break-words">
            {certification.title}
          </h4>

          <p className="mt-1 text-sm sm:text-base font-medium text-neutral-300 break-words">
            {certification.issuer}
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-x-2 text-xs sm:text-sm text-neutral-400">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 shrink-0 text-neutral-500" />
              <span>Issued {certification.issuedDate}</span>
              {certification.expiryDate && (
                <span>· Expires {certification.expiryDate}</span>
              )}
            </span>
          </div>

          {certification.credentialUrl && (
            <div className="mt-3">
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:border-blue-500/40 hover:text-white transition-colors"
              >
                <span>Show credential</span>
                <ExternalLink className="size-3 text-neutral-400" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
