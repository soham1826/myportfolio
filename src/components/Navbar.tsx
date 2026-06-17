"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "./ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "skills", label: "Intro & Skills" },
  { id: "About", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
];

export function Navbar() {
  const { openResume } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Monitor scroll for visual header feedback and active item tracking
  useEffect(() => {
    if (pathname.startsWith("/projects")) {
      setActiveSection("projects");
      setScrolled(true);
      return;
    }

    if (pathname !== "/") {
      setActiveSection("");
      setScrolled(true);
      return;
    }

    // Default home page states
    setActiveSection("hero");
    setScrolled(window.scrollY > 20);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll offset
      const scrollPosition = window.scrollY + 160;

      for (const item of NAV_ITEMS) {
        if (item.id === "hero") {
          if (window.scrollY < 300) {
            setActiveSection("hero");
            continue;
          }
          continue;
        }

        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    console.log("Navbar: scrollToSection element found:", !!el, "for id:", id);
    if (el) {
      el.style.scrollMarginTop = "90px";
      setTimeout(() => {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        console.log("Navbar: scrollIntoView executed for:", id);
      }, 50);
    }
  };

  const handleNavClick = (id: string) => {
    console.log("Navbar: handleNavClick called for id:", id, "pathname:", pathname);
    setIsOpen(false);
    if (pathname === "/") {
      if (id === "hero") {
        console.log("Navbar: Scroll to top");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 50);
      } else {
        scrollToSection(id);
      }
    } else {
      console.log("Navbar: Push route /#" + id);
      router.push(`/#${id}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled || isOpen
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-lg border-neutral-200/50 dark:border-neutral-800/50 py-3 shadow-[0_1px_10px_rgba(0,0,0,0.02)]"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-[650px] mx-auto px-6 flex items-center justify-between w-full">
        {/* Monogram logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="flex items-center gap-2 font-mono text-[13px] font-bold tracking-wider text-neutral-900 dark:text-white hover:opacity-75 transition-opacity focus:outline-none"
        >
          <svg className="w-[35px] h-[35px] flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="6" className="fill-neutral-950 dark:fill-neutral-900" />
            <svg x="6" y="6" width="20" height="20" viewBox="0 0 100 100">
              <path 
                d="M 37.32 15.0 L 38.84 15.0 L 40.36 15.0 L 41.88 15.51 L 43.41 15.51 L 44.93 16.01 L 46.45 16.52 L 47.97 17.03 L 49.49 18.04 L 51.01 17.54 L 52.54 17.03 L 54.06 16.52 L 55.58 16.01 L 57.1 15.51 L 58.62 15.51 L 60.14 15.0 L 61.67 15.0 L 63.19 15.51 L 64.71 15.51 L 66.23 16.01 L 67.75 16.52 L 69.28 17.03 L 70.8 17.54 L 72.32 18.55 L 73.84 20.07 L 75.36 21.59 L 76.88 23.12 L 77.9 24.64 L 78.41 26.16 L 78.91 27.68 L 79.42 29.2 L 79.93 30.72 L 79.93 32.25 L 79.93 33.77 L 79.42 35.29 L 79.42 36.81 L 78.41 38.33 L 77.39 39.86 L 75.87 41.38 L 74.35 42.39 L 72.83 43.41 L 71.3 43.91 L 69.78 43.91 L 68.26 44.42 L 66.74 44.42 L 65.22 43.91 L 63.7 43.41 L 62.17 42.9 L 60.65 41.88 L 59.13 40.36 L 58.12 38.84 L 57.1 37.32 L 56.59 35.8 L 56.09 34.28 L 56.09 32.75 L 56.09 31.23 L 55.58 29.71 L 55.58 28.19 L 54.57 26.67 L 54.06 25.14 L 53.04 23.62 L 51.52 22.1 L 50.0 21.09 L 48.48 22.1 L 46.96 23.62 L 45.94 25.14 L 45.43 26.67 L 44.42 28.19 L 43.91 29.71 L 43.91 31.23 L 43.91 32.75 L 43.91 34.28 L 43.91 35.8 L 44.42 37.32 L 44.93 38.84 L 45.43 40.36 L 46.45 41.88 L 47.97 43.41 L 49.49 44.93 L 51.01 45.94 L 52.54 46.96 L 54.06 47.97 L 55.58 48.48 L 57.1 48.48 L 58.62 48.99 L 60.14 48.99 L 61.67 49.49 L 63.19 49.49 L 64.71 49.49 L 66.23 50.0 L 67.75 50.51 L 69.28 51.01 L 70.8 51.52 L 72.32 52.54 L 73.84 54.06 L 75.36 55.58 L 76.88 57.1 L 77.39 58.62 L 78.41 60.14 L 78.91 61.67 L 79.42 63.19 L 79.93 64.71 L 79.93 66.23 L 79.93 67.75 L 79.93 69.28 L 79.42 70.8 L 78.91 72.32 L 78.41 73.84 L 77.9 75.36 L 76.88 76.88 L 75.87 78.41 L 74.35 79.93 L 72.83 80.94 L 71.3 81.96 L 69.78 82.97 L 68.26 83.48 L 66.74 83.99 L 65.22 84.49 L 63.7 85.0 L 62.17 85.0 L 60.65 85.0 L 59.13 85.0 L 57.61 85.0 L 56.09 84.49 L 54.57 83.99 L 53.04 83.48 L 51.52 82.97 L 50.0 81.96 L 48.48 82.97 L 46.96 83.48 L 45.43 83.99 L 43.91 84.49 L 42.39 85.0 L 40.87 85.0 L 39.35 85.0 L 37.83 85.0 L 36.3 85.0 L 34.78 84.49 L 33.26 83.99 L 31.74 83.48 L 30.22 82.97 L 28.7 81.96 L 27.17 80.94 L 25.65 79.93 L 24.13 78.41 L 23.12 76.88 L 22.1 75.36 L 21.59 73.84 L 21.09 72.32 L 20.58 70.8 L 20.07 69.28 L 20.07 67.75 L 20.07 66.23 L 20.58 64.71 L 20.58 63.19 L 21.59 61.67 L 22.61 60.14 L 24.13 58.62 L 25.65 57.61 L 27.17 57.1 L 28.7 56.59 L 30.22 56.09 L 31.74 56.09 L 33.26 56.09 L 34.78 56.09 L 36.3 56.59 L 37.83 57.61 L 39.35 58.62 L 40.87 59.64 L 41.88 61.16 L 42.9 62.68 L 43.41 64.2 L 43.91 65.72 L 43.91 67.25 L 43.91 68.77 L 43.91 70.29 L 44.42 71.81 L 44.93 73.33 L 45.94 74.86 L 46.96 76.38 L 48.48 77.9 L 50.0 79.42 L 51.52 77.9 L 53.04 76.38 L 54.06 74.86 L 55.07 73.33 L 55.58 71.81 L 56.09 70.29 L 56.09 68.77 L 56.09 67.25 L 56.09 65.72 L 56.09 64.2 L 55.58 62.68 L 55.07 61.16 L 54.06 59.64 L 53.04 58.12 L 52.03 56.59 L 50.51 55.07 L 48.99 54.06 L 47.46 53.04 L 45.94 52.54 L 44.42 52.03 L 42.9 51.52 L 41.38 51.01 L 39.86 51.01 L 38.33 51.01 L 36.81 51.01 L 35.29 50.51 L 33.77 50.0 L 32.25 50.0 L 30.72 48.99 L 29.2 48.48 L 27.68 47.46 L 26.16 46.45 L 24.64 44.93 L 23.62 43.41 L 22.61 41.88 L 21.59 40.36 L 21.09 38.84 L 20.58 37.32 L 20.07 35.8 L 20.07 34.28 L 20.07 32.75 L 20.07 31.23 L 20.58 29.71 L 20.58 28.19 L 21.09 26.67 L 22.1 25.14 L 23.12 23.62 L 24.13 22.1 L 25.14 20.58 L 26.67 19.57 L 28.19 18.55 L 29.71 17.54 L 31.23 16.52 L 32.75 16.01 L 34.28 15.51 L 35.8 15.51 L 37.32 15.0 Z" 
                className="fill-white" 
              />
            </svg>
            <rect 
              x="2" 
              y="2" 
              width="28" 
              height="28" 
              rx="4" 
              fill="none" 
              className="stroke-neutral-800 dark:stroke-neutral-700" 
              strokeWidth="1" 
              strokeDasharray="2 2" 
            />
          </svg>
        </button>

        {/* Desktop Menu links */}
        <nav className="hidden sm:flex items-center gap-5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-[12px] font-mono tracking-wide uppercase transition-colors duration-150 relative py-1 focus:outline-none ${
                activeSection === item.id
                  ? "text-neutral-950 dark:text-white font-semibold"
                  : "text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-px bg-neutral-950 dark:bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right side: Resume */}
        <div className="flex items-center gap-2">
          {/* Resume Modal trigger */}
          <button
            onClick={openResume}
            className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border border-dotted border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-500 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-150"
          >
            Resume
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              console.log("Navbar: Hamburger clicked. Current state:", !isOpen);
              setIsOpen(!isOpen);
            }}
            className="sm:hidden p-3 -mr-3 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="sm:hidden w-full bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-neutral-100 dark:border-neutral-900 overflow-hidden"
          >
            <div className="max-w-[650px] mx-auto px-6 py-4 flex flex-col gap-3.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[12px] font-mono tracking-widest uppercase text-left py-3 w-full focus:outline-none ${
                    activeSection === item.id
                      ? "text-neutral-900 dark:text-white font-bold pl-2 border-l border-neutral-950 dark:border-white"
                      : "text-neutral-400 pl-2 border-l border-transparent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
