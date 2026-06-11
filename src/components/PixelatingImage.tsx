"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PixelatingImageProps {
  displayIndex: number;
  isGlitching: boolean;
}

export function PixelatingImage({ displayIndex, isGlitching }: PixelatingImageProps) {
  const images = ["/images/profile_real.jpg", "/images/profile_avatar.jpg"];
  const sliceCount = 6;

  return (
    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 shadow-[0_1px_3px_rgba(0,0,0,0.06)] flex-shrink-0 select-none">
      
      {/* Base Image (background during glitch, static normally) */}
      <Image
        src={images[displayIndex]}
        alt="Soham Kulkarni profile"
        fill
        className="object-cover"
        priority
      />

      {/* Glitch Layer and RGB Split Effects */}
      {isGlitching && (
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          
          {/* Cyan Chromatic Aberration Split */}
          <motion.div
            animate={{
              x: [-4, 5, -2, 3, 0],
              y: [1, -2, 2, -1, 0],
            }}
            transition={{
              duration: 0.35,
              ease: "linear",
            }}
            className="absolute inset-0 opacity-60 mix-blend-screen dark:mix-blend-color-dodge"
            style={{
              filter: "hue-rotate(180deg) saturate(2)",
            }}
          >
            <Image
              src={images[displayIndex]}
              alt="Cyan split"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Magenta Chromatic Aberration Split */}
          <motion.div
            animate={{
              x: [4, -5, 3, -2, 0],
              y: [-1, 2, -2, 1, 0],
            }}
            transition={{
              duration: 0.35,
              ease: "linear",
            }}
            className="absolute inset-0 opacity-60 mix-blend-screen dark:mix-blend-color-dodge"
            style={{
              filter: "hue-rotate(300deg) saturate(2)",
            }}
          >
            <Image
              src={images[displayIndex]}
              alt="Magenta split"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Horizontal Slices with rapid displacements */}
          {Array.from({ length: sliceCount }).map((_, idx) => {
            const topPercent = (idx * 100) / sliceCount;
            const bottomPercent = 100 - ((idx + 1) * 100) / sliceCount;
            
            // Randomized displacement sequence for each slice
            const displacements = [
              0,
              (Math.random() - 0.5) * 16,
              (Math.random() - 0.5) * -22,
              (Math.random() - 0.5) * 10,
              0
            ];

            return (
              <motion.div
                key={`${displayIndex}-${idx}`}
                animate={{
                  x: displacements,
                  skewX: [0, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * -12, 0],
                }}
                transition={{
                  duration: 0.38,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
                style={{
                  clipPath: `inset(${topPercent}% 0% ${bottomPercent}% 0%)`,
                }}
              >
                <Image
                  src={images[displayIndex]}
                  alt={`Slice ${idx}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            );
          })}

          {/* Sweep scanning bar */}
          <motion.div
            animate={{
              y: ["-100%", "200%"],
            }}
            transition={{
              duration: 0.35,
              ease: "linear",
            }}
            className="absolute left-0 right-0 h-1 bg-white/30 dark:mix-blend-overlay"
          />
        </div>
      )}
    </div>
  );
}
