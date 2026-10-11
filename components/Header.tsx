"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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

  const effectiveIsMobileHidden = isMobileHidden && !mobileMenuOpen;

  return (
    <header
      className={cn(
        "fixed top-6 inset-x-0 z-40 flex justify-center px-4 pointer-events-none transition-all duration-300 ease-out",
        effectiveIsMobileHidden
          ? "max-md:-translate-y-28 max-md:opacity-0 max-md:pointer-events-none"
          : "max-md:translate-y-0 max-md:opacity-100",
        "md:translate-y-0 md:opacity-100",
        className
      )}
    >
      <nav
        aria-label="Main Navigation"
        className={cn(
          "pointer-events-auto relative flex items-center justify-between w-full max-w-3xl px-6 py-2.5 rounded-2xl border transition-all duration-300",
          scrolled
            ? "bg-black/70 backdrop-blur-md border-white/10 shadow-lg shadow-black/30"
            : "bg-black/40 backdrop-blur-md border-white/[0.08]"
        )}
      >
        {/* Brand - Left */}
        <div className="flex items-center">
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "#home");
            }}
            className="text-white text-base font-semibold tracking-tight hover:opacity-80 transition-opacity select-none"
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
                  onClick={(e) => {
                    if (item.href === "#home") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      window.history.pushState(null, "", "#home");
                    }
                  }}
                  className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <Button
            render={<Link href="#contact" />}
            className="rounded-xl bg-white text-neutral-950 hover:bg-neutral-200 px-5 h-9 text-sm font-semibold transition-all duration-200 active:scale-95 shadow-sm"
          >
            Contact
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-1.5 text-neutral-400 hover:text-white focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[calc(100%+12px)] inset-x-0 rounded-2xl bg-black/90 backdrop-blur-md border border-white/10 p-5 shadow-xl shadow-black/40 flex flex-col gap-4 md:hidden pointer-events-auto"
            >
              <ul className="flex flex-col gap-3">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                        if (item.href === "#home") {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          window.history.pushState(null, "", "#home");
                        }
                      }}
                      className="block text-base font-medium text-neutral-300 hover:text-white py-1 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-white/10">
                <Button
                  render={
                    <Link
                      href="#contact"
                      onClick={() => setMobileMenuOpen(false)}
                    />
                  }
                  className="w-full rounded-xl bg-white text-neutral-950 hover:bg-neutral-200 px-5 h-10 text-sm font-semibold transition-all active:scale-95"
                >
                  Contact
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;
