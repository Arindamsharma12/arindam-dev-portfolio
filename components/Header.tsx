"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

interface NavItem {
  label: string;
  href: string;
}

const navLinks: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Project", href: "#project" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
];

export interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileHidden, setIsMobileHidden] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Keep header visible when near the top of the page
      if (currentScrollY <= 30) {
        setIsMobileHidden(false);
      } else if (currentScrollY > lastScrollYRef.current + 8) {
        // Scrolling down: hide header on small screens
        if (!mobileMenuOpen) {
          setIsMobileHidden(true);
        }
      } else if (currentScrollY < lastScrollYRef.current - 8) {
        // Scrolling up: show header on small screens
        setIsMobileHidden(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      setIsMobileHidden(false);
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Desktop Theme Toggle - Left side */}
      <div className="hidden md:block fixed top-6 left-4 md:left-8 z-50 pointer-events-auto">
        <ThemeToggle />
      </div>

      <header
        className={cn(
          "fixed top-6 inset-x-0 z-40 flex justify-center px-4 pointer-events-none transition-all duration-300 ease-out",
          isMobileHidden
            ? "max-md:-translate-y-28 max-md:opacity-0 max-md:pointer-events-none"
            : "max-md:translate-y-0 max-md:opacity-100",
          "md:translate-y-0 md:opacity-100",
          className
        )}
      >
        <div className="flex items-center gap-2.5 sm:gap-3 w-full max-w-3xl pointer-events-none">
          {/* Mobile Theme Toggle - aligned side-by-side with header nav */}
          <div className="flex md:hidden pointer-events-auto shrink-0 items-center">
            <ThemeToggle className="h-[46px] w-[46px] sm:h-[46px] sm:w-[46px] rounded-2xl" />
          </div>

          <nav
            aria-label="Main Navigation"
            className={cn(
              "pointer-events-auto relative flex items-center justify-between flex-1 md:w-full px-6 py-2.5 rounded-2xl border transition-all duration-300",
              scrolled
                ? "bg-white/75 dark:bg-black/70 backdrop-blur-md border-neutral-200/80 dark:border-white/10 shadow-lg shadow-neutral-900/5 dark:shadow-black/30"
                : "bg-white/45 dark:bg-black/40 backdrop-blur-md border-neutral-200/60 dark:border-white/[0.08]"
            )}
          >
          {/* Brand - Left */}
          <div className="flex items-center">
            <Link
              href="#home"
              className="text-neutral-900 dark:text-white text-base font-semibold tracking-tight hover:opacity-80 transition-opacity select-none"
            >
              Arindam
            </Link>
          </div>

          {/* Desktop Navigation Links & Contact CTA - Right */}
          <div className="hidden md:flex items-center gap-7">
            <ul className="flex items-center gap-6">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 px-5 py-2 text-sm font-semibold transition-all duration-200 active:scale-95 shadow-sm"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-1.5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-[calc(100%+12px)] inset-x-0 rounded-2xl bg-white/95 dark:bg-black/85 backdrop-blur-md border border-neutral-200/80 dark:border-white/10 p-5 shadow-xl shadow-black/10 dark:shadow-black/40 flex flex-col gap-4 md:hidden pointer-events-auto"
              >
                <ul className="flex flex-col gap-3">
                  {navLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-base font-medium text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white py-1 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 border-t border-neutral-200/80 dark:border-white/10">
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 px-5 py-2.5 text-sm font-semibold transition-all active:scale-95"
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
    </>
  );
}

export default Header;
