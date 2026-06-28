"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { TechIconMap } from "@/components/Icons";

interface ProjectDetail {
  name: string;
  role: string;
  year: string;
  description: string;
  image: string;
  caption: string;
  previewUrl?: string;
  codeUrl?: string;
  videoUrl?: string;
  technologies?: string[];
}

// Project detail data dictionary
const projectDetails: Record<string, ProjectDetail> = {
  "notifyflow": {
    name: "Notifyflow",
    role: "Lead Creator / Systems Engineer",
    year: "2026",
    description: `Notifyflow is a multi-tenant notification delivery platform that lets developers send email, webhook, in-app, and SMS notifications through a single API call — without building any of the underlying infrastructure themselves.

Built as a deep learning project inspired by Novu, Courier, and Knock, it handles everything a production notification system needs: async job queuing, priority-based delivery, exponential backoff retries, a dead-letter queue for permanent failures, per-tenant rate limiting, and a real-time delivery dashboard.

Key engineering decisions:

→ Three priority BullMQ queues so OTPs never wait behind bulk campaigns
→ Atomic sliding window rate limiter using a Redis Lua script to eliminate race conditions
→ Bring Your Own Keys (BYOK) — tenants connect their own Resend account, credentials stored encrypted with AES-256-GCM
→ Redis Pub/Sub bridges the API and worker processes, streaming live delivery events to the dashboard via SSE
→ Strategy pattern for channel abstraction — adding a new provider is one new class, zero changes to the pipeline`,
    image: "/images/notifyflow.png",
    caption: "Video Explaining the Notifyflow system in Depth",
    previewUrl: "https://notifyflow-dashboard.vercel.app/",
    codeUrl: "https://github.com/soham1826/Notifyflow",
    videoUrl: "https://www.youtube.com/embed/PiKvpfwErko?autoplay=1&mute=1",
    technologies: ["NODE.JS", "EXPRESS", "TYPESCRIPT", "BULLMQ", "REDIS", "POSTGRESQL", "PRISMA", "NEXT.JS", "SUPABASE", "RENDER", "VERCEL"],
  },
  "mdm-notification-engine": {
    name: "MDM Notification Engine",
    role: "Core Backend Engineer",
    year: "2025",
    description: "A resilient distributed messaging backend managing automated transaction statuses and batch user notifications across multiple message brokers.",
    image: "/images/mdm-notification.png",
    caption: "Figure 2.0: MDM Engine queuing pipeline metrics reporting live Redis job queue statistics.",
    previewUrl: "https://github.com/soham1826/mdm-notification-engine#readme",
    codeUrl: "https://github.com/soham1826/mdm-notification-engine",
    technologies: ["NODE.JS", "TYPESCRIPT", "BULLMQ", "REDIS", "POSTGRESQL", "DOCKER"],
  },
  "projectmind": {
    name: "ProjectMind",
    role: "Full Stack Engineer",
    year: "2026",
    description: "A collaborative real-time note-taking and knowledge mapping tool powered by AI embeddings to organize concepts into relational visual webs.",
    image: "/images/projectmind.png",
    caption: "Figure 3.0: ProjectMind canvas rendering node-based relationship trees mapping semantic connections.",
    previewUrl: "https://github.com/soham1826/projectmind#readme",
    codeUrl: "https://github.com/soham1826/projectmind",
    technologies: ["NEXT.JS", "REACT", "TYPESCRIPT", "MONGODB", "PRISMA", "TAILWIND"],
  },
  "next-project": {
    name: "next-project",
    role: "Lead Systems Engineer",
    year: "2026",
    description: "Designing a local-first personal dashboard that syncs SQLite data dynamically and performs edge vector query embeddings for private notes search.",
    image: "/images/next-project.png",
    caption: "Figure 4.0: Dashboard prototype rendering SQLite query tables and offline vector embeddings indexing nodes.",
    previewUrl: "https://github.com/soham1826/next-project#readme",
    codeUrl: "https://github.com/soham1826/next-project",
    technologies: ["TYPESCRIPT", "SQLITE", "REACT", "TAILWIND"],
  },
  "flow-reactor": {
    name: "Flow Reactor",
    role: "Systems & Stream Architect",
    year: "2025",
    description: "A highly resilient stream event pipeline built in Go and gRPC to process high-throughput telemetry updates with sub-millisecond propagation latency.",
    image: "/images/flow-reactor.png",
    caption: "Figure 5.0: Telemetry state logs and buffer health reporting high-speed event processing loops.",
    previewUrl: "https://github.com/soham1826/flow-reactor#readme",
    codeUrl: "https://github.com/soham1826/flow-reactor",
    technologies: ["GO", "GRPC", "REDIS", "POSTGRESQL", "DOCKER"],
  },
  "distributed-kv": {
    name: "Distributed KV",
    role: "Consensus Log Engineer",
    year: "2026",
    description: "A custom replicated key-value storage engine utilizing the Raft consensus algorithm for cluster state consistency and database compaction cycles.",
    image: "/images/distributed-kv.png",
    caption: "Figure 6.0: State machine log replication status displaying cluster leadership terms and heartbeat ticks.",
    previewUrl: "https://github.com/soham1826/dist-kv#readme",
    codeUrl: "https://github.com/soham1826/dist-kv",
    technologies: ["GO", "RAFT", "GOSSIP PROTOCOL", "SQLITE"],
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
  const project = projectDetails[params.slug];

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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 dark:border-neutral-900 pb-6">
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
        <div className="self-start sm:self-auto text-[13px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-950/30 px-2.5 py-1 border border-neutral-200/60 dark:border-neutral-800 rounded-md">
          {project.year}
        </div>
      </div>

      {/* Screenshot/Video Container */}
      <div className="space-y-4 pt-4">
        <div className="w-full bg-[#f5f5f5] dark:bg-neutral-950/40 rounded-xl p-3 md:p-4 border border-neutral-950 dark:border-neutral-800 shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="relative aspect-[3/2] w-full rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900">
            {project.videoUrl ? (
              <iframe
                src={project.videoUrl}
                title={`${project.name} demo video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0 rounded-lg"
              ></iframe>
            ) : (
              <Image
                src={project.image}
                alt={`${project.name} dashboard screenshot`}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>
        <p className="text-[12px] font-mono text-neutral-500 dark:text-neutral-400 text-center uppercase tracking-wide">
          {project.caption}
        </p>
      </div>

      {/* Action Buttons */}
      {(project.previewUrl || project.codeUrl) && (
        <div className="flex flex-wrap items-center gap-3">
          {project.previewUrl && (
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 border border-dashed border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 dark:hover:border-neutral-500 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-200 font-mono text-[11px] uppercase tracking-wider"
            >
              <ExternalLink size={12} strokeWidth={1.5} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              Live Preview
              <ArrowLeft size={10} className="rotate-[135deg] opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200" />
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 border border-dashed border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 dark:hover:border-neutral-500 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-200 font-mono text-[11px] uppercase tracking-wider"
            >
              <Code2 size={12} strokeWidth={1.5} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              Source Code
              <ArrowLeft size={10} className="rotate-[135deg] opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200" />
            </a>
          )}
        </div>
      )}

      {/* Tech stack row */}
      {project.technologies && project.technologies.length > 0 && (
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          {project.technologies.map((tech) => {
            const normalizedKey = tech.trim().toUpperCase();
            const Logo = TechIconMap[normalizedKey];
            return (
              <span 
                key={tech} 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/60 rounded-md text-[12px] font-mono font-medium text-neutral-700 dark:text-neutral-300"
              >
                {Logo && <Logo size={13} className="text-neutral-500 dark:text-neutral-400" />}
                {tech}
              </span>
            );
          })}
        </div>
      )}

      {/* Large description */}
      <div className="text-[15px] md:text-[16px] font-normal font-sans text-neutral-800 dark:text-neutral-300 leading-relaxed space-y-4 whitespace-pre-line">
        {project.description}
      </div>

    </div>
  );
}
