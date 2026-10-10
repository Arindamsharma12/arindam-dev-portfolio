"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Calendar, Award, FileText, CheckCircle2, Sparkles, Terminal } from "lucide-react";
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
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-neutral-200/80 dark:border-white/10 shadow-sm flex items-center justify-center">
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
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-black border border-white/10 shadow-sm text-[#00EA64]">
          <SiHackerrank className="h-8 w-8" />
        </div>
      );
    }

    if (certification.issuer.toLowerCase().includes("hcltech")) {
      return (
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 text-white font-black text-xs shadow-sm border border-white/10">
          <span>HCLTech</span>
        </div>
      );
    }

    if (certification.issuer.toLowerCase().includes("hackaccino")) {
      return (
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-white font-mono text-sm shadow-sm">
          <span className="font-bold tracking-tighter">&lt;☕/&gt;</span>
        </div>
      );
    }

    if (certification.issuer.toLowerCase().includes("smart india")) {
      return (
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white font-bold text-xs shadow-sm border border-orange-400/30">
          <Sparkles className="h-6 w-6" />
        </div>
      );
    }

    return (
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-300">
        <Award className="h-6 w-6" />
      </div>
    );
  };

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-neutral-900/60 p-6 md:p-7 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/5">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Main Certification Header */}
      <div className="flex items-start gap-4">
        {renderIssuerLogo()}

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              {certification.title}
            </h4>
          </div>

          <p className="text-sm font-semibold text-neutral-300">
            {certification.issuer}
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-x-3 text-xs text-neutral-400">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              Issued {certification.issuedDate}
              {certification.expiryDate && ` · Expires ${certification.expiryDate}`}
            </span>
          </div>

          {certification.credentialId && (
            <p className="mt-1 text-xs font-mono text-neutral-400">
              Credential ID <span className="text-neutral-200">{certification.credentialId}</span>
            </p>
          )}
        </div>
      </div>

      {/* Skills tags */}
      {certification.skills && certification.skills.length > 0 && (
        <div className="mt-4 pt-3 border-t border-white/5">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-xs font-semibold text-neutral-400 mr-1">
              Skills:
            </span>
            {certification.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium text-neutral-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Single Media / Credential Link Component */}
      {(certification.mediaTitle || certification.credentialUrl) && (
        <div className="mt-4">
          {certification.credentialUrl ? (
            <Link
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-3.5 rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-black/40 p-3 transition-colors hover:border-blue-400/50 hover:bg-blue-50/20 dark:hover:bg-blue-950/20"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="line-clamp-1 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white group-hover/link:text-blue-500 dark:group-hover/link:text-blue-400">
                  {certification.mediaTitle || certification.title}
                </p>
                {certification.mediaDescription && (
                  <p className="line-clamp-1 text-xs text-neutral-500 dark:text-neutral-400">
                    {certification.mediaDescription}
                  </p>
                )}
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-neutral-400 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-blue-500" />
            </Link>
          ) : (
            <div className="flex items-center gap-3.5 rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-black/40 p-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="line-clamp-1 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">
                  {certification.mediaTitle || certification.title}
                </p>
                {certification.mediaDescription && (
                  <p className="line-clamp-1 text-xs text-neutral-500 dark:text-neutral-400">
                    {certification.mediaDescription}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CertificationCard;
