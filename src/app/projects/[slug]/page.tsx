"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

// Project detail data dictionary
const projectDetails = {
  "summarix-ai": {
    name: "Summarix AI",
    role: "Lead Creator / AI Architect",
    year: "2024",
    description: "An intelligent document digestion platform built to parse, index, and semantically query high-volume research archives and enterprise documents.",
    image: "/images/summarix-ai.png",
    caption: "Figure 1.0: Summarix AI vector space and dashboard displaying file digestion queues and accuracy graphs.",
  },
  "mdm-notification-engine": {
    name: "MDM Notification Engine",
    role: "Core Backend Engineer",
    year: "2025",
    description: "A resilient distributed messaging backend managing automated transaction statuses and batch user notifications across multiple message brokers.",
    image: "/images/mdm-notification.png",
    caption: "Figure 2.0: MDM Engine queuing pipeline metrics reporting live Redis job queue statistics.",
  },
  "projectmind": {
    name: "ProjectMind",
    role: "Full Stack Engineer",
    year: "2026",
    description: "A collaborative real-time note-taking and knowledge mapping tool powered by AI embeddings to organize concepts into relational visual webs.",
    image: "/images/projectmind.png",
    caption: "Figure 3.0: ProjectMind canvas rendering node-based relationship trees mapping semantic connections.",
  },
  "next-project": {
    name: "next-project",
    role: "Lead Systems Engineer",
    year: "2026",
    description: "Designing a local-first personal dashboard that syncs SQLite data dynamically and performs edge vector query embeddings for private notes search.",
    image: "/images/next-project.png",
    caption: "Figure 4.0: Dashboard prototype rendering SQLite query tables and offline vector embeddings indexing nodes.",
  },
};

// Monogram app icon fallback
function AppIcon({ name }: { name: string }) {
  const monogram = name.charAt(0);
  return (
    <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-neutral-950 dark:bg-neutral-900 text-white dark:text-neutral-200 font-mono text-base font-semibold rounded-[8px] border border-neutral-200/10 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      {monogram}
    </div>
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectDetails[params.slug as keyof typeof projectDetails];

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-[650px] mx-auto px-6 pt-20 md:pt-32 space-y-10 selection:bg-neutral-100 dark:selection:bg-neutral-800">
      
      {/* Back Button */}
      <div>
        <Link 
          href="/" 
          className="inline-flex items-center gap-1.5 text-[13px] text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-150 group"
        >
          <ArrowLeft 
            size={14} 
            strokeWidth={1.5} 
            className="group-hover:-translate-x-[2px] transition-transform duration-150" 
          />
          Back
        </Link>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-900 pb-6">
        <div className="flex items-center gap-4">
          <AppIcon name={project.name} />
          <div>
            <h1 className="text-[22px] font-semibold font-sans tracking-tight text-neutral-950 dark:text-white leading-none">
              {project.name}
            </h1>
            <p className="text-[13px] text-neutral-500 dark:text-neutral-400 font-sans mt-1">
              {project.role}
            </p>
          </div>
        </div>
        <div className="text-[13px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-950/30 px-2.5 py-1 border border-neutral-200/60 dark:border-neutral-800 rounded-md">
          {project.year}
        </div>
      </div>

      {/* Large description */}
      <div className="text-[18px] md:text-[20px] font-medium font-sans text-neutral-800 dark:text-neutral-300 leading-relaxed">
        {project.description}
      </div>

      {/* Screenshot Container */}
      <div className="space-y-4 pt-4">
        <div className="w-full bg-[#f5f5f5] dark:bg-neutral-950/40 rounded-xl p-3 md:p-4 border border-neutral-200/30 dark:border-neutral-800/50 shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="relative aspect-[3/2] w-full rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900">
            <Image
              src={project.image}
              alt={`${project.name} dashboard screenshot`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <p className="text-[12px] font-mono text-neutral-500 dark:text-neutral-400 text-center uppercase tracking-wide">
          {project.caption}
        </p>
      </div>

    </div>
  );
}
