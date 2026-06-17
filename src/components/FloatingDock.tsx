"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, FileText, Sun, Moon } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./Icons";
import { useTheme } from "./ThemeContext";

export function FloatingDock() {
  const { theme, toggleTheme, openResume } = useTheme();

  const items = [
    { icon: Home, label: "Home", href: "/" },
    { icon: FileText, label: "Resume", href: "#", isExternal: false },
    { icon: GithubIcon, label: "GitHub", href: "https://github.com/soham1826", isExternal: true },
    { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/soham-ashok-kulkarni/", isExternal: true },
    { icon: XIcon, label: "Twitter", href: "https://x.com/kulsoham18262", isExternal: true },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 px-4 py-3 rounded-full bg-white/70 dark:bg-black/70 border border-neutral-200/50 dark:border-neutral-800/50 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
        {items.map((item, idx) => {
          const Icon = item.icon;
          const content = (
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="p-2 cursor-pointer rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-150"
              aria-label={item.label}
            >
              <Icon size={20} strokeWidth={1.5} />
            </motion.div>
          );

          if (item.label === "Resume") {
            return (
              <button key={idx} onClick={openResume} className="focus:outline-none">
                {content}
              </button>
            );
          }

          return item.isExternal ? (
            <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          ) : (
            <Link key={idx} href={item.href}>
              {content}
            </Link>
          );
        })}

        <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-800" />

        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="p-2 cursor-pointer rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-150"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon size={20} strokeWidth={1.5} />
          ) : (
            <Sun size={20} strokeWidth={1.5} />
          )}
        </motion.button>
      </div>
    </div>
  );
}
