"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [progress, setProgress] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const loadedOnce = sessionStorage.getItem("portfolio_loaded_once");
    if (loadedOnce) {
      // Dispatch immediately if already loaded in this session
      window.dispatchEvent(new Event("portfolio-loaded"));
      return;
    }

    setIsVisible(true);
    const duration = 1200; // 1.2s total boot time
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsVisible(false);
          sessionStorage.setItem("portfolio_loaded_once", "true");
          window.dispatchEvent(new Event("portfolio-loaded"));
        }, 150);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#0b0b0c] select-none pointer-events-auto"
        >
          {/* Subtle grid background representation */}
          <div 
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
              backgroundSize: "24px 24px"
            }}
          />

          <div className="relative flex flex-col items-center gap-6">
            {/* Reticle loader */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              {/* Rotating outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                className="absolute w-12 h-12 rounded-full border border-dashed border-neutral-300 dark:border-neutral-700"
              />

              {/* Pulsing inner ring */}
              <motion.div
                animate={{ scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                className="absolute w-6 h-6 rounded-full border border-neutral-200 dark:border-neutral-800"
              />

              {/* Horizontal crosshair */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute h-px bg-neutral-400 dark:bg-neutral-600"
              />

              {/* Vertical crosshair */}
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: 48 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute w-px bg-neutral-400 dark:bg-neutral-600"
              />

              {/* Center dot */}
              <div className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white rounded-full z-10" />
            </div>

            {/* Grid booting details */}
            <div className="flex flex-col items-center gap-1 font-mono text-[10px] tracking-wider text-neutral-400 dark:text-neutral-500 uppercase">
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                sys.aligning_grid
              </span>
              <span className="font-semibold text-neutral-800 dark:text-neutral-300">
                {progress.toString().padStart(3, "0")}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
