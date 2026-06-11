"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
  key: string;
}

export function HUDNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const [activeSection, setActiveSection] = React.useState("HERO");

  const items: NavItem[] = [
    { id: "hero", label: "01 // HERO", key: "1" },
    { id: "experience", label: "02 // EXPERIENCE", key: "2" },
    { id: "projects", label: "03 // PROJECTS", key: "3" },
    { id: "threads", label: "04 // THREADS", key: "4" },
    { id: "education", label: "05 // EDUCATION", key: "5" },
  ];

  // Track scroll position and calculate active section
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Determine active section based on DOM bounding boxes
      for (const item of items) {
        if (item.id === "hero") {
          if (window.scrollY < 300) {
            setActiveSection("HERO");
            break;
          }
          continue;
        }

        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the element is near the top of the viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(item.id.toUpperCase().substring(0, 5));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scroll to elements
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // offset to align headers
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Bind keyboard shortcuts (1-5)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in inputs or search boxes
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        return;
      }
      
      const matchedItem = items.find((item) => item.key === e.key);
      if (matchedItem) {
        e.preventDefault();
        scrollToSection(matchedItem.id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono select-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 p-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-dotted border-neutral-400/50 dark:border-neutral-600/50 shadow-xl w-64 text-neutral-800 dark:text-neutral-200"
          >
            {/* Header info HUD */}
            <div className="pb-3 mb-3 border-b border-dotted border-neutral-300 dark:border-neutral-800 text-[10px] text-neutral-400 dark:text-neutral-500 uppercase flex justify-between">
              <span>nav.controller</span>
              <span>[1-5] jump</span>
            </div>

            {/* List */}
            <nav className="flex flex-col gap-1.5">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left py-1.5 px-2 hover:bg-neutral-50 dark:hover:bg-neutral-900 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 transition-all duration-150 flex items-center justify-between text-[12px] group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {item.label}
                  </span>
                  <span className="text-[9px] text-neutral-400 dark:text-neutral-500 px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
                    {item.key}
                  </span>
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Closed HUD Coordinates Block */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-3 py-2 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-dotted border-neutral-400/50 dark:border-neutral-600/50 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-all duration-150 shadow-sm"
      >
        <div className="flex flex-col items-start text-[9px] leading-tight text-neutral-400 dark:text-neutral-500 uppercase">
          <div>LOC.Y: <span className="text-neutral-700 dark:text-neutral-300 font-semibold">{Math.round(scrollY).toString().padStart(4, "0")}px</span></div>
          <div>SECT: <span className="text-neutral-700 dark:text-neutral-300 font-semibold">{activeSection}</span></div>
        </div>

        <div className="w-px h-5 bg-neutral-200 dark:bg-neutral-800" />

        <span className="text-[11px] font-bold tracking-wider uppercase">
          {isOpen ? "CLOSE" : "MENU"}
        </span>
      </button>
    </div>
  );
}
