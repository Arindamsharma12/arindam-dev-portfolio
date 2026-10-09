"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isDark = !mounted || resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl border transition-all duration-300 cursor-pointer select-none active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 backdrop-blur-md",
        isDark
          ? "bg-[#18181b]/90 border-white/10 text-white hover:bg-[#232328] hover:border-white/20 shadow-md shadow-black/30"
          : "bg-white/90 border-neutral-200 text-neutral-900 hover:bg-neutral-100 hover:border-neutral-300 shadow-sm shadow-neutral-400/20",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 45 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Sun className="w-5 h-5 stroke-[1.8]" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, scale: 0.6, rotate: 45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: -45 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Moon className="w-5 h-5 stroke-[1.8]" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default ThemeToggle;
