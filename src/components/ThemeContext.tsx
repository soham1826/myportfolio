"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent) => void;
  isResumeOpen: boolean;
  openResume: () => void;
  closeResume: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const playThemeSound = (nextTheme: Theme) => {
    if (typeof window === "undefined") return;
    const AudioContextClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    try {
      const ctx = new AudioContextClass();
      const now = ctx.currentTime;

      if (nextTheme === "light") {
        // Light Mode: quick ascending synth-chirp
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(523.25, now); // C5
        gain1.gain.setValueAtTime(0.04, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.06);

        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(783.99, now + 0.04); // G5
        gain2.gain.setValueAtTime(0.04, now + 0.04);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(now + 0.04);
        osc2.stop(now + 0.15);
      } else {
        // Dark Mode: warm descending synth-pulse
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(392.00, now); // G4
        osc.frequency.exponentialRampToValueAtTime(220.00, now + 0.18); // A3
        
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.18);
      }
    } catch (error) {
      console.warn("Theme audio play failed:", error);
    }
  };

  const toggleTheme = (event?: React.MouseEvent) => {
    const nextTheme = theme === "light" ? "dark" : "light";
    playThemeSound(nextTheme);
    
    // Fallback if view transitions are not supported
    if (typeof document === "undefined" || !document.startViewTransition) {
      setTheme(nextTheme);
      localStorage.setItem("theme", nextTheme);
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
      return;
    }

    // Capture coordinates or center of viewport if click event doesn't exist
    const x = event ? event.clientX : window.innerWidth / 2;
    const y = event ? event.clientY : window.innerHeight / 2;

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
      localStorage.setItem("theme", nextTheme);
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
    });

    transition.ready.then(() => {
      const startInset = `inset(${y}px ${window.innerWidth - x}px ${window.innerHeight - y}px ${x}px)`;
      const endInset = `inset(0px 0px 0px 0px)`;

      document.documentElement.animate(
        {
          clipPath: [startInset, endInset],
        },
        {
          duration: 500,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isResumeOpen, openResume, closeResume }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
