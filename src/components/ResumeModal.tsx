"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, Eye } from "lucide-react";
import { useTheme } from "./ThemeContext";

type ResumeType = "fullstack" | "ai";

export function ResumeModal() {
  const { isResumeOpen, closeResume } = useTheme();
  const [selectedResume, setSelectedResume] = useState<ResumeType>("fullstack");
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewports/touch devices on mount and resize
  useEffect(() => {
    const checkIsMobile = () => {
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(hasTouch || isSmallScreen);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Reset to fullstack resume when modal opens
  useEffect(() => {
    if (isResumeOpen) {
      setSelectedResume("fullstack");
    }
  }, [isResumeOpen]);

  // Escape key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeResume();
      }
    };
    if (isResumeOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isResumeOpen, closeResume]);

  const pdfUrl = selectedResume === "fullstack" ? "/resume-fullstack.pdf" : "/resume-ai.pdf";
  const downloadName = selectedResume === "fullstack" ? "Soham_Kulkarni_Fullstack_Resume.pdf" : "Soham_Kulkarni_AI_Resume.pdf";
  const filenameDisplay = selectedResume === "fullstack" ? "resume_fullstack.pdf" : "resume_ai.pdf";

  // Accent styling mapping for high-fidelity tab feedback
  const tabStyles = {
    fullstack: {
      activeText: "text-blue-600 dark:text-blue-400 font-bold",
      pillBg: "bg-blue-50/70 dark:bg-blue-950/35 border border-blue-200/50 dark:border-blue-900/40 shadow-[0_1px_3px_rgba(59,130,246,0.05)]"
    },
    ai: {
      activeText: "text-emerald-600 dark:text-emerald-400 font-bold",
      pillBg: "bg-emerald-50/70 dark:bg-emerald-950/35 border border-emerald-200/50 dark:border-emerald-900/40 shadow-[0_1px_3px_rgba(16,185,129,0.05)]"
    }
  };

  // 1. Mobile-exclusive direct download selector popup
  if (isMobile) {
    return (
      <AnimatePresence>
        {isResumeOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 select-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeResume}
              className="absolute inset-0 bg-neutral-950/45 dark:bg-black/65 backdrop-blur-md"
            />

            {/* Compact Popup Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
              className="relative w-full max-w-[320px] bg-white dark:bg-[#0b0b0c] border border-dashed border-neutral-300 dark:border-neutral-800 p-5 rounded-2xl shadow-2xl flex flex-col gap-4 z-10"
            >
              {/* Close Button X */}
              <button
                onClick={closeResume}
                className="absolute top-3.5 right-3.5 p-1 text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                aria-label="Close dialog"
              >
                <X size={15} strokeWidth={1.5} />
              </button>

              {/* Title */}
              <div className="text-center pt-2 pb-1.5 border-b border-dashed border-neutral-200 dark:border-neutral-800">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                  Select Resume
                </span>
              </div>

              {/* Selection Options */}
              <div className="flex flex-col gap-3 pt-1">
                {/* Fullstack Resume Card */}
                <div className="w-full p-3.5 bg-neutral-50/50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-850 rounded-xl flex flex-col gap-3">
                  <div className="text-left">
                    <div className="font-sans text-[13px] font-bold text-neutral-900 dark:text-white">Fullstack Roles</div>
                    <div className="font-mono text-[9px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wide mt-0.5">resume_fullstack.pdf</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="/resume-fullstack.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeResume}
                      className="flex items-center justify-center gap-1.5 py-1.5 px-3 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-100/60 dark:hover:bg-neutral-800/40 text-neutral-600 dark:text-neutral-300 transition-colors"
                    >
                      <Eye size={12} strokeWidth={1.5} />
                      <span className="font-mono text-[10px] uppercase tracking-wider">View</span>
                    </a>
                    <a
                      href="/resume-fullstack.pdf"
                      download="Soham_Kulkarni_Fullstack_Resume.pdf"
                      onClick={closeResume}
                      className="flex items-center justify-center gap-1.5 py-1.5 px-3 bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 rounded-lg hover:bg-neutral-900 dark:hover:bg-white transition-colors"
                    >
                      <Download size={12} strokeWidth={1.5} />
                      <span className="font-mono text-[10px] uppercase tracking-wider">Get PDF</span>
                    </a>
                  </div>
                </div>

                {/* AI Resume Card */}
                <div className="w-full p-3.5 bg-neutral-50/50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-850 rounded-xl flex flex-col gap-3">
                  <div className="text-left">
                    <div className="font-sans text-[13px] font-bold text-neutral-900 dark:text-white">AI Roles</div>
                    <div className="font-mono text-[9px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wide mt-0.5">resume_ai.pdf</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="/resume-ai.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeResume}
                      className="flex items-center justify-center gap-1.5 py-1.5 px-3 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-100/60 dark:hover:bg-neutral-800/40 text-neutral-600 dark:text-neutral-300 transition-colors"
                    >
                      <Eye size={12} strokeWidth={1.5} />
                      <span className="font-mono text-[10px] uppercase tracking-wider">View</span>
                    </a>
                    <a
                      href="/resume-ai.pdf"
                      download="Soham_Kulkarni_AI_Resume.pdf"
                      onClick={closeResume}
                      className="flex items-center justify-center gap-1.5 py-1.5 px-3 bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 rounded-lg hover:bg-neutral-900 dark:hover:bg-white transition-colors"
                    >
                      <Download size={12} strokeWidth={1.5} />
                      <span className="font-mono text-[10px] uppercase tracking-wider">Get PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }

  // 2. Desktop full-screen interactive PDF viewer modal
  return (
    <AnimatePresence>
      {isResumeOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeResume}
            className="absolute inset-0 bg-neutral-950/40 dark:bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.1 }}
            className="relative w-full max-w-5xl h-[85vh] bg-white/90 dark:bg-[#0b0b0c]/90 border border-dotted border-neutral-300 dark:border-neutral-800 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-5 py-4 border-b border-dotted border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/20">
              {/* Title */}
              <div className="flex items-center gap-2.5 sm:flex-1 min-w-0">
                <FileText size={18} className="text-neutral-500 dark:text-neutral-400 flex-shrink-0" />
                <span className="font-mono text-[13px] font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 truncate">
                  {filenameDisplay}
                </span>
              </div>

              {/* Segmented Toggle Control */}
              <div className="relative flex items-center border border-neutral-200/80 dark:border-neutral-800/80 p-1 rounded-lg bg-neutral-100/40 dark:bg-neutral-950/40 flex-shrink-0 self-start sm:self-auto">
                <button
                  onClick={() => setSelectedResume("fullstack")}
                  className={`relative z-10 px-4 py-1.5 text-[10.5px] font-mono uppercase tracking-wider transition-colors duration-200 focus:outline-none ${
                    selectedResume === "fullstack"
                      ? tabStyles.fullstack.activeText
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                  }`}
                >
                  {selectedResume === "fullstack" && (
                    <motion.div
                      layoutId="activeResumeTab"
                      className={`absolute inset-0 rounded-md ${tabStyles.fullstack.pillBg}`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">Fullstack Roles</span>
                </button>

                <button
                  onClick={() => setSelectedResume("ai")}
                  className={`relative z-10 px-4 py-1.5 text-[10.5px] font-mono uppercase tracking-wider transition-colors duration-200 focus:outline-none ${
                    selectedResume === "ai"
                      ? tabStyles.ai.activeText
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                  }`}
                >
                  {selectedResume === "ai" && (
                    <motion.div
                      layoutId="activeResumeTab"
                      className={`absolute inset-0 rounded-md ${tabStyles.ai.pillBg}`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">AI Roles</span>
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 sm:flex-1 justify-end self-end sm:self-auto">
                {/* Download Button */}
                <a
                  href={pdfUrl}
                  download={downloadName}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-dotted border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 dark:hover:border-neutral-500 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-all duration-150 font-mono text-[11px] uppercase tracking-wider bg-transparent"
                >
                  <Download size={13} strokeWidth={1.5} />
                  Download
                </a>

                {/* Close Button */}
                <button
                  onClick={closeResume}
                  className="p-1.5 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-all duration-150"
                  aria-label="Close dialog"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* PDF Viewport */}
            <div className="flex-grow bg-[#fafafa] dark:bg-neutral-950 relative overflow-hidden">
              <iframe
                key={selectedResume} // Force reload of iframe when selection changes
                src={`${pdfUrl}#toolbar=0`}
                className="w-full h-full border-none"
                title="Soham Kulkarni Resume PDF"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
