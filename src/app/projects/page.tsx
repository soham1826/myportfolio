"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink, Code2 } from "lucide-react";

interface Project {
  slug: string;
  name: string;
  number: string;
  subtitle: string;
  status: "Live" | "Building";
  desc: string;
  thumbnail: string;
  technologies: string[];
  previewLabel: string;
  hoverStyle?: React.CSSProperties;
  previewUrl?: string;
  codeUrl?: string;
}

const ALL_PROJECTS: Project[] = [
  {
    slug: "summarix-ai",
    name: "summarix",
    number: "001",
    subtitle: "DOCUMENT COMPREHENSION",
    status: "Live",
    desc: "An intelligent document comprehension platform built to parse, index, and semantically query high-volume research archives and enterprise documents.",
    thumbnail: "/images/summarix-ai.png",
    technologies: ["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND", "OPENAI API", "PRISMA"],
    previewLabel: "Comprehension space",
    previewUrl: "https://summarix-ai.vercel.app",
    codeUrl: "https://github.com/soham1826/summarix-ai",
    hoverStyle: {
      background: "repeating-conic-gradient(from 0deg, #dfd5c6 0deg 12deg, #6b8d8e 12deg 24deg, #c4796a 24deg 36deg, #7d9ba6 36deg 48deg, #d3a274 48deg 60deg)"
    }
  },
  {
    slug: "mdm-notification-engine",
    name: "mdm-engine",
    number: "002",
    subtitle: "HIGH-THROUGHPUT PIPELINE",
    status: "Live",
    desc: "A resilient distributed messaging backend managing automated transaction statuses and batch user notifications across multiple message brokers.",
    thumbnail: "/images/mdm-notification.png",
    technologies: ["NODE.JS", "TYPESCRIPT", "BULLMQ", "REDIS", "POSTGRESQL", "DOCKER"],
    previewLabel: "Job Pipeline",
    previewUrl: "https://github.com/soham1826/mdm-notification-engine#readme",
    codeUrl: "https://github.com/soham1826/mdm-notification-engine",
    hoverStyle: {
      background: "repeating-conic-gradient(from 0deg, #dfd2bc 0deg 12deg, #769b8f 12deg 24deg, #c67f67 24deg 36deg, #d0a66d 36deg 48deg, #dcb295 48deg 60deg)"
    }
  },
  {
    slug: "projectmind",
    name: "projectmind",
    number: "003",
    subtitle: "AI KNOWLEDGE GRAPH CANVAS",
    status: "Building",
    desc: "A collaborative real-time note-taking and knowledge mapping environment that connects visual concepts using vector search and graphs.",
    thumbnail: "/images/projectmind.png",
    technologies: ["NEXT.JS", "REACT", "TYPESCRIPT", "MONGODB", "PRISMA", "TAILWIND"],
    previewLabel: "Knowledge Graph",
    previewUrl: "https://github.com/soham1826/projectmind#readme",
    codeUrl: "https://github.com/soham1826/projectmind",
    hoverStyle: {
      background: "repeating-conic-gradient(from 0deg, #e6d6c3 0deg 12deg, #df8c6a 12deg 24deg, #bf6b5b 24deg 36deg, #ebd0be 36deg 48deg, #d6a15d 48deg 60deg)"
    }
  },
  {
    slug: "next-project",
    name: "next-project",
    number: "004",
    subtitle: "LOCAL-FIRST DASHBOARD",
    status: "Building",
    desc: "Designing a local-first personal dashboard that syncs SQLite data dynamically and performs edge vector query embeddings for private notes search.",
    thumbnail: "/images/next-project.png",
    technologies: ["TYPESCRIPT", "SQLITE", "REACT", "TAILWIND"],
    previewLabel: "Idea Board",
    previewUrl: "https://github.com/soham1826/next-project#readme",
    codeUrl: "https://github.com/soham1826/next-project",
    hoverStyle: {
      background: "repeating-conic-gradient(from 0deg, #ebdcc8 0deg 12deg, #6b8ca2 12deg 24deg, #b6837a 24deg 36deg, #cfa068 36deg 48deg, #5b7b8e 48deg 60deg)"
    }
  },
  {
    slug: "flow-reactor",
    name: "flow-reactor",
    number: "005",
    subtitle: "EVENT PROCESSOR ENGINE",
    status: "Live",
    desc: "A highly resilient stream event pipeline built in Go and gRPC to process high-throughput telemetry updates with sub-millisecond propagation latency.",
    thumbnail: "/images/flow-reactor.png",
    technologies: ["GO", "GRPC", "REDIS", "POSTGRESQL", "DOCKER"],
    previewLabel: "Telemetry Stream",
    previewUrl: "https://github.com/soham1826/flow-reactor#readme",
    codeUrl: "https://github.com/soham1826/flow-reactor",
    hoverStyle: {
      background: "repeating-conic-gradient(from 0deg, #d2e4d3 0deg 12deg, #5f8d68 12deg 24deg, #7ba892 24deg 36deg, #c6dfc3 36deg 48deg, #b6d395 48deg 60deg)"
    }
  },
  {
    slug: "distributed-kv",
    name: "dist-kv",
    number: "006",
    subtitle: "RAFT REPLICATED LOG",
    status: "Building",
    desc: "A custom replicated key-value storage engine utilizing the Raft consensus algorithm for cluster state consistency and database compaction cycles.",
    thumbnail: "/images/distributed-kv.png",
    technologies: ["GO", "RAFT", "GOSSIP PROTOCOL", "SQLITE"],
    previewLabel: "Consensus Log",
    previewUrl: "https://github.com/soham1826/dist-kv#readme",
    codeUrl: "https://github.com/soham1826/dist-kv",
    hoverStyle: {
      background: "repeating-conic-gradient(from 0deg, #e3dfd2 0deg 12deg, #8b795f 12deg 24deg, #a88d7b 24deg 36deg, #dfc6b5 36deg 48deg, #d3b695 48deg 60deg)"
    }
  }
];

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkIsMobile = () => {
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(hasTouch || isSmallScreen);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const isLive = project.status === "Live";
  const dotColor = isLive ? "bg-emerald-500" : "bg-amber-500";
  const isHoverActive = !isMobile && isHovered;

  return (
    <div 
      className="group relative block space-y-4 cursor-pointer transform-gpu"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Invisible link overlay covering the card area for navigation */}
      <Link 
        href={`/projects/${project.slug}`} 
        className="absolute inset-0 z-10"
        aria-label={`View details for ${project.name}`}
      />

      {/* Top Preview box */}
      <div className="bg-[#fafafa] dark:bg-[#1a1a1c] p-5 rounded-xl border border-dotted border-neutral-300 dark:border-neutral-700 aspect-[4/3] flex flex-col justify-between overflow-hidden relative transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
        
        {/* Dynamic pattern background overlay */}
        <div 
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none z-0"
          style={{
            ...project.hoverStyle,
            opacity: isHoverActive ? 1 : 0
          }}
        />

        {/* Subtle Vignette overlay */}
        <div 
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none z-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.12)_100%)]"
          style={{
            opacity: isHoverActive ? 1 : 0
          }}
        />

        {/* Noise overlay to give a subtle organic texture */}
        <div 
          className="absolute inset-0 mix-blend-overlay pointer-events-none z-10 transition-opacity duration-300"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.25'/%3E%3C/svg%3E")`,
            opacity: isHoverActive ? 0.35 : 0
          }}
        />

        {/* Category text wrapper with layout-based shift */}
        <div className="relative z-10 w-full flex items-center">
          <div className={`w-full flex transition-all duration-300 ${isHoverActive ? "justify-center" : "justify-start"}`}>
            <motion.span 
              layout={!isMobile}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`text-[11px] font-mono uppercase tracking-wider transition-colors duration-300 ${
                isHoverActive ? "text-neutral-950 font-bold" : "text-neutral-400 dark:text-neutral-500 font-medium"
              }`}
            >
              {project.previewLabel}
            </motion.span>
          </div>
        </div>

        {/* Screenshot floating inside */}
        <div className="relative w-full h-[76%] rounded-lg overflow-hidden border border-neutral-200/30 dark:border-neutral-800/50 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-none z-10">
          <motion.div
            animate={{ scale: isHoverActive ? 1.04 : 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full h-full relative transform-gpu"
          >
            <Image
              src={project.thumbnail}
              alt={`${project.name} preview`}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom details */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[17px] font-bold font-sans text-neutral-900 dark:text-white tracking-tight">
            {project.name}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[12px] font-mono text-neutral-400 dark:text-neutral-500">
            <span className="relative flex h-1.5 w-1.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-75`} />
              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${dotColor}`} />
            </span>
            {project.status}
          </span>
        </div>

        <p className="text-[13.5px] leading-relaxed text-neutral-600 dark:text-neutral-400 font-sans">
          {project.desc}
        </p>

        <div className="pt-1 flex flex-wrap items-center justify-between gap-y-2.5 gap-x-4">
          <div className="flex items-center gap-1 text-[12px] font-mono font-medium text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-150">
            <span>View Details</span>
            <ArrowUpRight 
              size={13} 
              strokeWidth={1.5} 
              className="group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform duration-150" 
            />
          </div>

          <div className="flex items-center gap-2 relative z-20">
            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono uppercase tracking-wider border border-dotted border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-500 dark:hover:border-neutral-500 transition-all duration-150"
              >
                <ExternalLink size={10} strokeWidth={1.5} />
                Preview
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono uppercase tracking-wider border border-dotted border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-500 dark:hover:border-neutral-500 transition-all duration-150"
              >
                <Code2 size={10} strokeWidth={1.5} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
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
          Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-900 pb-6">
        <div>
          <h1 className="text-[22px] font-semibold font-sans tracking-tight text-neutral-950 dark:text-white leading-none">
            All Projects
          </h1>
          <p className="text-[13px] text-neutral-500 dark:text-neutral-400 font-sans mt-1">
            Deep-dive into my engineering and systems work
          </p>
        </div>
        <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-950/30 px-2.5 py-1 border border-neutral-200/60 dark:border-neutral-800 rounded-md">
          TOTAL: {ALL_PROJECTS.length}
        </div>
      </div>

      {/* Projects Grid with Dashed Dividers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 relative pt-4 pb-20">
        {/* Vertical dashed line separating columns */}
        <div className="hidden md:block absolute left-[calc(50%)] top-0 bottom-0 w-px border-l border-dashed border-neutral-300 dark:border-neutral-700 -translate-x-1/2" />
        
        {ALL_PROJECTS.map((project, idx) => {
          return (
            <React.Fragment key={idx}>
              {/* Desktop horizontal row divider */}
              {idx > 0 && idx % 2 === 0 && (
                <div className="col-span-full border-t border-dashed border-neutral-300 dark:border-neutral-700 my-2 hidden md:block" />
              )}
              {/* Mobile horizontal divider */}
              {idx > 0 && (
                <div className="col-span-full border-t border-dashed border-neutral-300 dark:border-neutral-700 my-2 md:hidden" />
              )}

              <ProjectCard project={project} />
            </React.Fragment>
          );
        })}
      </div>

    </div>
  );
}
