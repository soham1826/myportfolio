"use client";

import React, { useEffect, useState } from "react";

export function InteractiveBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Set the global custom properties on the root HTML element
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 bg-[radial-gradient(600px_circle_at_var(--mouse-x,_0px)_var(--mouse-y,_0px),_var(--spotlight-color),_transparent_80%)]"
    />
  );
}
