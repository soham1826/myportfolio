"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  FileText, 
  Mail,
  Sun,
  Moon,
  Eye
} from "lucide-react";
import { 
  GithubIcon, LinkedinIcon, XIcon,
  ReactLogo, NextjsLogo, TypeScriptLogo, TailwindLogo, NodejsLogo, 
  PostgreSQLLogo, MongoDBLogo, RedisLogo, BullMQLogo, PrismaLogo, 
  DockerLogo, PythonLogo, OpenAILogo 
} from "@/components/Icons";
import { PixelatingImage } from "@/components/PixelatingImage";
import { useTheme } from "@/components/ThemeContext";


// Monogram avatar for companies (squarish rounded-xl, 48px)
function CompanyLogo({ name, src }: { name: string; src?: string }) {
  const [error, setError] = React.useState(false);
  const monogram = name.charAt(0);

  if (src && !error) {
    return (
      <div className="relative w-12 h-12 flex-shrink-0 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white p-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <Image
          src={src}
          alt={`${name} logo`}
          fill
          className="object-cover"
          onError={() => setError(true)}
        />
      </div>
    );
  }

  return (
    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-neutral-900 dark:bg-neutral-800 text-white dark:text-neutral-200 font-mono text-lg font-bold rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      {monogram}
    </div>
  );
}



// Maps uppercase tech keys to custom SVG components
const TechIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "REACT": ReactLogo,
  "NEXT.JS": NextjsLogo,
  "TYPESCRIPT": TypeScriptLogo,
  "TAILWIND": TailwindLogo,
  "NODE.JS": NodejsLogo,
  "POSTGRESQL": PostgreSQLLogo,
  "MONGODB": MongoDBLogo,
  "REDIS": RedisLogo,
  "BULLMQ": BullMQLogo,
  "PRISMA": PrismaLogo,
  "DOCKER": DockerLogo,
  "PYTHON": PythonLogo,
  "OPENAI API": OpenAILogo,
};

function TechChip({ name }: { name: string }) {
  const normalizedKey = name.trim().toUpperCase();
  const Logo = TechIconMap[normalizedKey];

  return (
    <span className="group inline-flex items-center gap-1.5 px-3 py-1 border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/60 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-700 rounded-md text-[12px] font-mono font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-all duration-150 hover:scale-[1.03] cursor-default shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
      {Logo && <Logo size={13} className="text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors" />}
      {name}
    </span>
  );
}

function GlitchHeading({ displayIndex, isGlitching }: { displayIndex: number; isGlitching: boolean }) {
  const text = displayIndex === 0 ? "Soham Kulkarni" : "@kulsoham18262";

  return (
    <h1 className="relative text-[30px] sm:text-[38px] font-bold tracking-tighter font-mono text-neutral-900 dark:text-white leading-none pt-1 select-none min-h-[44px] sm:min-h-[52px] flex items-center">
      {/* Base Text */}
      <span className={isGlitching ? "opacity-35 transition-opacity" : "opacity-100"}>
        {text}
      </span>

      {/* Glitch overlays */}
      {isGlitching && (
        <>
          {/* Cyan text split */}
          <motion.span
            animate={{
              x: [-4, 5, -2, 3, 0],
              y: [1, -1, 1.5, -0.5, 0],
            }}
            transition={{ duration: 0.35, ease: "linear" }}
            className="absolute inset-0 text-cyan-500/80 mix-blend-screen dark:mix-blend-color-dodge select-none flex items-center"
          >
            {text}
          </motion.span>

          {/* Magenta text split */}
          <motion.span
            animate={{
              x: [4, -5, 3, -2, 0],
              y: [-1, 1, -1.5, 0.5, 0],
            }}
            transition={{ duration: 0.35, ease: "linear" }}
            className="absolute inset-0 text-pink-500/80 mix-blend-screen dark:mix-blend-color-dodge select-none flex items-center"
          >
            {text}
          </motion.span>

          {/* Sliced/Skewed offset copy */}
          <motion.span
            animate={{
              x: [0, -8, 10, -4, 0],
              skewX: [0, 10, -15, 5, 0],
            }}
            transition={{ duration: 0.38, ease: "easeInOut" }}
            className="absolute inset-0 text-neutral-900 dark:text-white select-none opacity-80 flex items-center"
            style={{
              clipPath: "inset(35% 0% 35% 0%)",
            }}
          >
            {text}
          </motion.span>
        </>
      )}
    </h1>
  );
}

function RotatingRoles() {
  const roles = ["Fullstack Engineer", "Tech Enthusiast", "AI Expert"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3500); // Rotates every 3.5 seconds
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <span className="inline-block relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="text-neutral-500 dark:text-neutral-400 font-medium font-mono text-[14px] sm:text-[15px]"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

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
}

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const isLive = project.status === "Live";
  const dotColor = isLive ? "bg-emerald-500" : "bg-amber-500";

  return (
    <Link 
      href={`/projects/${project.slug}`} 
      className="group block space-y-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Preview box */}
      <div className="bg-[#fafafa] dark:bg-[#1a1a1c] p-5 rounded-xl border border-dotted border-neutral-300 dark:border-neutral-700 aspect-[4/3] flex flex-col justify-between overflow-hidden relative transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
        
        {/* Dynamic pattern background overlay */}
        <div 
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none z-0"
          style={{
            ...project.hoverStyle,
            opacity: isHovered ? 1 : 0
          }}
        />

        {/* Subtle Vignette overlay */}
        <div 
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none z-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.12)_100%)]"
          style={{
            opacity: isHovered ? 1 : 0
          }}
        />

        {/* Noise overlay to give a subtle organic texture */}
        <div 
          className="absolute inset-0 mix-blend-overlay pointer-events-none z-10 transition-opacity duration-300"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.25'/%3E%3C/svg%3E")`,
            opacity: isHovered ? 0.35 : 0
          }}
        />

        {/* Category text wrapper with layout-based shift */}
        <div className="relative z-10 w-full flex items-center">
          <div className={`w-full flex transition-all duration-300 ${isHovered ? "justify-center" : "justify-start"}`}>
            <motion.span 
              layout
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`text-[11px] font-mono uppercase tracking-wider transition-colors duration-300 ${
                isHovered ? "text-neutral-950 font-bold" : "text-neutral-400 dark:text-neutral-500 font-medium"
              }`}
            >
              {project.previewLabel}
            </motion.span>
          </div>
        </div>

        {/* Screenshot floating inside */}
        <div className="relative w-full h-[76%] rounded-lg overflow-hidden border border-neutral-200/30 dark:border-neutral-800/50 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-none z-10">
          <motion.div
            animate={{ scale: isHovered ? 1.04 : 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full h-full relative"
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
            <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
            {project.status}
          </span>
        </div>

        <p className="text-[13.5px] leading-relaxed text-neutral-600 dark:text-neutral-400 font-sans">
          {project.desc}
        </p>

        <div className="pt-1 flex items-center gap-1 text-[12px] font-mono font-medium text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-150">
          <span>View Details</span>
          <ArrowUpRight 
            size={13} 
            strokeWidth={1.5} 
            className="group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform duration-150" 
          />
        </div>
      </div>
    </Link>
  );
}

interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  date: string;
  location: string;
  logo: string;
  bulletPoints: string[];
}

function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div 
      className="p-4 -mx-4 transition-colors duration-180 border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50/60 dark:hover:bg-neutral-950/30 rounded-none"
    >
      <div 
        className="flex items-start justify-between cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start gap-4">
          {/* Logo box */}
          <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-white border border-neutral-200 dark:border-neutral-800 flex items-center justify-center p-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              width={36}
              height={36}
              className="object-contain"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[15px] font-bold font-sans text-neutral-900 dark:text-white tracking-tight">
                {experience.company}
              </span>
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900 rounded-md">
                {experience.type}
              </span>
            </div>
            <div className="text-[13px] font-sans text-neutral-500 dark:text-neutral-400 mt-0.5">
              {experience.role}
            </div>
          </div>
        </div>

        <div className="text-right flex flex-col items-end gap-1">
          <div className="flex items-center gap-1.5 text-[13px] font-mono text-neutral-500 dark:text-neutral-400">
            <span>{experience.date}</span>
            <motion.span
              animate={{ rotate: isOpen ? 0 : 180 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="inline-block"
            >
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="opacity-70"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </motion.span>
          </div>
          <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
            {experience.location}
          </span>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-2.5 pl-2 border-l border-neutral-200 dark:border-neutral-800/80 ml-6">
              {experience.bulletPoints.map((point, idx) => (
                <li 
                  key={idx} 
                  className="text-[13px] font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed relative pl-4 list-none before:content-['•'] before:absolute before:left-0 before:text-neutral-400 dark:before:text-neutral-600"
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface TwitterThread {
  title: string;
  teaser: string;
  tweetsCount: string;
  views: string;
  link: string;
}

function TwitterThreadCard({ thread }: { thread: TwitterThread }) {
  return (
    <a
      href={thread.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-4 -mx-4 border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50/60 dark:hover:bg-neutral-950/30 transition-colors duration-180 rounded-none"
    >
      <div className="flex gap-4">
        {/* Left thread line UI structure */}
        <div className="flex flex-col items-center flex-shrink-0 w-8">
          <div className="w-8 h-8 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center text-neutral-400 dark:text-neutral-500">
            <XIcon size={14} className="group-hover:text-neutral-950 dark:group-hover:text-white transition-colors" />
          </div>
          {/* Vertical dotted connector line */}
          <div className="w-px flex-grow border-l border-dashed border-neutral-200 dark:border-neutral-800/80 mt-2 min-h-[40px]" />
        </div>

        {/* Right content details */}
        <div className="flex-grow space-y-1.5 pb-1">
          <div className="flex items-center justify-between">
            <span className="text-[14.5px] font-bold font-sans text-neutral-900 dark:text-white tracking-tight group-hover:text-neutral-950 dark:group-hover:text-neutral-100 transition-colors">
              {thread.title}
            </span>
            <ArrowUpRight 
              size={14} 
              className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-950 dark:group-hover:text-white group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-all duration-150" 
            />
          </div>

          <p className="text-[13px] font-sans text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {thread.teaser}
          </p>

          <div className="pt-2 flex items-center gap-3 text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
            <span className="px-2 py-0.5 border border-neutral-200 dark:border-neutral-800 rounded bg-neutral-50/50 dark:bg-neutral-900/50">
              {thread.tweetsCount}
            </span>
            <span>•</span>
            <span>{thread.views}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [displayIndex, setDisplayIndex] = React.useState(0);
  const [isGlitching, setIsGlitching] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  const [visitorCount, setVisitorCount] = React.useState(0);

  React.useEffect(() => {
    const loadedOnce = sessionStorage.getItem("portfolio_loaded_once");
    if (loadedOnce) {
      setIsLoading(false);
      return;
    }

    const handleLoaded = () => {
      setIsLoading(false);
    };

    window.addEventListener("portfolio-loaded", handleLoaded);
    return () => {
      window.removeEventListener("portfolio-loaded", handleLoaded);
    };
  }, []);

  React.useEffect(() => {
    const storedCount = localStorage.getItem("portfolio_visitors");
    const count = storedCount ? parseInt(storedCount, 10) : 134;
    const newCount = count + 1;
    localStorage.setItem("portfolio_visitors", newCount.toString());
    setVisitorCount(newCount);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      
      // Swap image index exactly halfway through the glitch duration (at 200ms)
      const swapTimeout = setTimeout(() => {
        setDisplayIndex((prev) => (prev === 0 ? 1 : 0));
      }, 200);

      // End glitch animation at 400ms
      const endTimeout = setTimeout(() => {
        setIsGlitching(false);
      }, 400);

      return () => {
        clearTimeout(swapTimeout);
        clearTimeout(endTimeout);
      };
    }, 6000); // Swap every 6 seconds

    return () => clearInterval(interval);
  }, []);

  // Page load staggered animation variants
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  // Section entry viewport fade variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const experiences: ExperienceItem[] = [
    {
      company: "Winjit Technologies",
      role: "Software Developer",
      type: "Full-time",
      date: "Sep 2025 – Present",
      location: "India – Onsite",
      logo: "/images/winjit.png",
      bulletPoints: [
        "Built scalable full-stack web applications with React/Next.js and Node.js across MongoDB and PostgreSQL.",
        "Architected event-driven automated notifications using BullMQ pipelines and a dual-database strategy.",
        "Developed a dynamic audience targeting module using a Segment Registry pattern to decouple configuration.",
        "Built and deployed Generative AI-powered internal tools integrating LLM APIs to improve productivity."
      ]
    },
    {
      company: "Connect Link",
      role: "Full Stack Developer Intern",
      type: "Internship",
      date: "Oct 2023 – Jan 2024",
      location: "India – Remote",
      logo: "/images/connectlink.png",
      bulletPoints: [
        "Delivered 5 core features end-to-end for a social media platform using React/Next.js and Node.js/Express.",
        "Optimized RESTful API performance by 20% through query refinement, response shaping, and middleware."
      ]
    },
    {
      company: "Salesforce",
      role: "Developer Virtual Intern",
      type: "Internship",
      date: "Oct 2022 – Dec 2022",
      location: "India – Remote",
      logo: "/images/salesforce.png",
      bulletPoints: [
        "Developed 2 custom Lightning Web Components (LWC) using Apex and JavaScript to streamline workflows.",
        "Earned the Apex Specialist Superbadge covering triggers, SOQL query optimization, and Apex architecture."
      ]
    }
  ];

  const twitterThreads = [
    {
      title: "Introducing Bitlayer: A Bitcoin L-2 Solution",
      teaser: "Introducing Bitlayer: A groundbreaking Bitcoin L-2 solution that's set to revolutionize the crypto landscape. @BitlayerLabs brings Turing-complete smart contracts to Bitcoin while inheriting its unmatched security. Let's dive into why this is a game-changer!",
      tweetsCount: "16 Tweets",
      views: "1.6K Views",
      link: "https://x.com/kulsoham18262/status/1808381390498533881?s=20"
    },
    {
      title: "Unlock a New Level in Your Crypto Investing",
      teaser: "Unlock the new Level in your crypto investing with your own Grimoire of on-Chain analysis. Meet @dyorcryptoapp and add certainty of on-chain research to your next crypto decisions!",
      tweetsCount: "8 Tweets",
      views: "2.2K Views",
      link: "https://x.com/kulsoham18262/status/1789494514916192672?s=20"
    },
    {
      title: "The Future of Web3 & Chain Abstraction",
      teaser: "\"The future of Web3 might not be about choosing the right chain, but about not having to choose at all.\" Here's how @ArcanaNetwork is reshaping the landscape.",
      tweetsCount: "20 Tweets",
      views: "600 Views",
      link: "https://x.com/kulsoham18262/status/1818268358451789914?s=20"
    }
  ];

  const projects = [
    {
      slug: "summarix-ai",
      name: "summarix",
      number: "001",
      subtitle: "DOCUMENT COMPREHENSION",
      status: "Live" as const,
      desc: "An intelligent document comprehension platform built to parse, index, and semantically query high-volume research archives and enterprise documents.",
      thumbnail: "/images/summarix-ai.png",
      technologies: ["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND", "OPENAI API", "PRISMA"],
      previewLabel: "Comprehension space",
      hoverStyle: {
        background: "repeating-conic-gradient(from 0deg, #dfd5c6 0deg 12deg, #6b8d8e 12deg 24deg, #c4796a 24deg 36deg, #7d9ba6 36deg 48deg, #d3a274 48deg 60deg)"
      }
    },
    {
      slug: "mdm-notification-engine",
      name: "mdm-engine",
      number: "002",
      subtitle: "HIGH-THROUGHPUT PIPELINE",
      status: "Live" as const,
      desc: "A resilient distributed messaging backend managing automated transaction statuses and batch user notifications across multiple message brokers.",
      thumbnail: "/images/mdm-notification.png",
      technologies: ["NODE.JS", "TYPESCRIPT", "BULLMQ", "REDIS", "POSTGRESQL", "DOCKER"],
      previewLabel: "Job Pipeline",
      hoverStyle: {
        background: "repeating-conic-gradient(from 0deg, #dfd2bc 0deg 12deg, #769b8f 12deg 24deg, #c67f67 24deg 36deg, #d0a66d 36deg 48deg, #dcb295 48deg 60deg)"
      }
    },
    {
      slug: "projectmind",
      name: "projectmind",
      number: "003",
      subtitle: "AI KNOWLEDGE GRAPH CANVAS",
      status: "Building" as const,
      desc: "A collaborative real-time note-taking and knowledge mapping environment that connects visual concepts using vector search and graphs.",
      thumbnail: "/images/projectmind.png",
      technologies: ["NEXT.JS", "REACT", "TYPESCRIPT", "MONGODB", "PRISMA", "TAILWIND"],
      previewLabel: "Knowledge Graph",
      hoverStyle: {
        background: "repeating-conic-gradient(from 0deg, #e6d6c3 0deg 12deg, #df8c6a 12deg 24deg, #bf6b5b 24deg 36deg, #ebd0be 36deg 48deg, #d6a15d 48deg 60deg)"
      }
    },
    {
      slug: "next-project",
      name: "next-project",
      number: "004",
      subtitle: "LOCAL-FIRST DASHBOARD",
      status: "Building" as const,
      desc: "Designing a local-first personal dashboard that syncs SQLite data dynamically and performs edge vector query embeddings for private notes search.",
      thumbnail: "/images/next-project.png",
      technologies: ["TYPESCRIPT", "SQLITE", "REACT", "TAILWIND"],
      previewLabel: "Idea Board",
      hoverStyle: {
        background: "repeating-conic-gradient(from 0deg, #ebdcc8 0deg 12deg, #6b8ca2 12deg 24deg, #b6837a 24deg 36deg, #cfa068 36deg 48deg, #5b7b8e 48deg 60deg)"
      }
    },
  ];

  return (
    <div className="max-w-[650px] mx-auto px-6 pt-20 md:pt-32 space-y-20 selection:bg-neutral-100 dark:selection:bg-neutral-800">
      
      {/* Hero Section */}
      <motion.header
        variants={heroContainerVariants}
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
          <div className="flex items-center gap-4 sm:gap-5">
            <motion.div variants={heroItemVariants}>
              <PixelatingImage displayIndex={displayIndex} isGlitching={isGlitching} />
            </motion.div>
            <div className="flex flex-col justify-center">
              <motion.div variants={heroItemVariants}>
                <GlitchHeading displayIndex={displayIndex} isGlitching={isGlitching} />
              </motion.div>
              <motion.div 
                variants={heroItemVariants}
                className="min-h-[20px] mt-1 sm:mt-1.5"
              >
                <RotatingRoles />
              </motion.div>
            </div>
          </div>

          {/* Inline controls (Theme toggle + Visitor Counter) */}
          <motion.div 
            variants={heroItemVariants}
            className="flex flex-col items-end gap-1.5 self-start sm:self-center"
          >
            {/* Theme Toggle Button */}
            <button 
              onClick={(e) => toggleTheme(e)}
              className="w-8 h-8 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors duration-150"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon size={15} strokeWidth={2} />
              ) : (
                <Sun size={15} strokeWidth={2} />
              )}
            </button>

            {/* Visitor Counter Label (Icon + Count, no border) */}
            <div className="h-8 px-1 flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 font-mono text-[12px] select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <Eye size={13} strokeWidth={2} />
              <span>{visitorCount}</span>
            </div>
          </motion.div>
        </div>

        <div className="space-y-4 md:w-[85%]">
          <motion.p 
            variants={heroItemVariants}
            className="text-[15px] font-normal leading-relaxed text-neutral-500 dark:text-neutral-400 font-sans"
          >
            I build systems that hold up.
          </motion.p>
          
          <motion.p 
            variants={heroItemVariants}
            className="text-[14px] font-normal leading-relaxed text-neutral-600 dark:text-neutral-300 font-mono"
          >
            I think about systems the way architects think about buildings — the structure has to hold before the surface matters.
          </motion.p>

          <motion.div 
            variants={heroItemVariants}
            className="flex items-center gap-3 pt-2"
          >
            <a 
              href="https://resume.io/r/soham-kulkarni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium font-sans px-3.5 py-1.5 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-150 rounded-lg flex items-center gap-1.5"
            >
              <FileText size={13} strokeWidth={1.5} />
              Resume
            </a>
            <a 
              href="mailto:soham.kulkarni@example.com"
              className="text-[13px] font-medium font-sans px-3.5 py-1.5 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-150 rounded-lg flex items-center gap-1.5"
            >
              <Mail size={13} strokeWidth={1.5} />
              Send an email
            </a>
          </motion.div>

          <motion.div 
            variants={heroItemVariants}
            className="text-[13px] text-neutral-500 dark:text-neutral-400 font-sans pt-2 flex items-center flex-wrap gap-x-2 gap-y-2"
          >
            <span>Here are my <strong className="font-semibold text-neutral-800 dark:text-neutral-200">socials</strong>:</span>
            <div className="flex items-center gap-1.5">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-2.5 py-1 border border-neutral-200/80 dark:border-neutral-800 text-[12px] font-medium font-sans rounded-[12px] hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-150 flex items-center gap-1"
              >
                <GithubIcon size={12} strokeWidth={1.5} />
                GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-2.5 py-1 border border-neutral-200/80 dark:border-neutral-800 text-[12px] font-medium font-sans rounded-[12px] hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-150 flex items-center gap-1"
              >
                <LinkedinIcon size={12} strokeWidth={1.5} />
                LinkedIn
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-2.5 py-1 border border-neutral-200/80 dark:border-neutral-800 text-[12px] font-medium font-sans rounded-[12px] hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-150 flex items-center gap-1"
              >
                <XIcon size={12} strokeWidth={1.5} />
                Twitter
              </a>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Tech Stack Chips (Subtle visual support) */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView={isLoading ? "hidden" : "visible"}
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-3"
      >
        <div className="text-[12px] font-medium tracking-widest uppercase font-mono text-neutral-400 dark:text-neutral-500">
          stack
        </div>
        <div className="flex flex-wrap gap-2.5">
          {[
            "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", 
            "Redis", "BullMQ", "Prisma", "Tailwind", "React", 
            "Docker", "Python", "OpenAI API"
          ].map((item, idx) => (
            <TechChip key={idx} name={item} />
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView={isLoading ? "hidden" : "visible"}
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-4"
      >
        <h2 className="text-[20px] font-semibold font-sans tracking-tight">About</h2>
        <div className="text-[14px] font-normal leading-relaxed text-neutral-600 dark:text-neutral-400 space-y-6 font-mono">
          <p>
            I got into software because I liked solving puzzles. I stayed because I found something harder than puzzles — building things other people depend on.
          </p>
          <p>
            Most of my thinking happens at the seam between backend reliability and product experience. How does a notification reach the right person at the right time, every time? How do you design a queue that degrades gracefully instead of failing loudly? Those are the questions I find genuinely interesting.
          </p>
          <p>
            I&apos;ve been drawn to AI not because it&apos;s the trend, but because it changes what&apos;s possible at that seam — things that used to need a team can now be done with the right architecture and a focused engineer.
          </p>
          <p>
            Outside of work I&apos;m usually in the gym, down a rabbit hole about something I didn&apos;t plan to read about, or pitching side project ideas to friends who&apos;ve learned to be skeptical.
          </p>
        </div>
      </motion.section>

      {/* Work Experience */}
      <motion.section
        id="experience"
        variants={sectionVariants}
        initial="hidden"
        whileInView={isLoading ? "hidden" : "visible"}
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-4"
      >
        <h2 className="text-[20px] font-semibold font-sans tracking-tight">Work Experience</h2>
        <div className="border-t border-neutral-200 dark:border-neutral-800">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        id="education"
        variants={sectionVariants}
        initial="hidden"
        whileInView={isLoading ? "hidden" : "visible"}
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-4"
      >
        <h2 className="text-[20px] font-semibold font-sans tracking-tight">Education</h2>
        <div className="border-t border-neutral-200 dark:border-neutral-800">
          
          <motion.div
            whileHover={{ x: 2 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex items-center justify-between p-4 -mx-4 rounded-none hover:bg-neutral-50/60 dark:hover:bg-neutral-950/30 transition-colors duration-180 border-b border-neutral-200 dark:border-neutral-800"
          >
            <div className="flex items-center gap-4">
              <CompanyLogo name="Sandip Institute of Technology" />
              <div>
                <div className="text-[14px] font-semibold font-sans text-neutral-900 dark:text-neutral-200">
                  Sandip Institute of Technology
                </div>
                <div className="text-[13px] text-neutral-500 dark:text-neutral-400 font-sans">
                  BE computer Engineering
                </div>
              </div>
            </div>
            <div className="text-right flex flex-col items-end">
              <div className="text-[13px] font-mono text-neutral-500 dark:text-neutral-400">
                2021 – 2025
              </div>
              <div className="text-[12px] font-mono text-emerald-600 dark:text-emerald-500 font-medium">
                CGPA: 9.08
              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        variants={sectionVariants}
        initial="hidden"
        whileInView={isLoading ? "hidden" : "visible"}
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-6"
      >
        <div className="text-[12px] font-medium tracking-widest uppercase font-mono text-neutral-400 dark:text-neutral-500">
          current projects
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 relative">
          {/* Vertical dashed line separating columns */}
          <div className="hidden md:block absolute left-[calc(50%)] top-0 bottom-0 w-px border-l border-dotted border-neutral-300 dark:border-neutral-700 -translate-x-1/2" />
          
          {projects.map((project, idx) => {
            return (
              <React.Fragment key={idx}>
                {/* Desktop horizontal row divider */}
                {idx === 2 && (
                  <div className="col-span-full border-t border-dotted border-neutral-300 dark:border-neutral-700 my-2 hidden md:block" />
                )}
                {/* Mobile horizontal divider */}
                {idx > 0 && (
                  <div className="col-span-full border-t border-dotted border-neutral-300 dark:border-neutral-700 my-2 md:hidden" />
                )}

                <ProjectCard project={project} />
              </React.Fragment>
            );
          })}

        </div>
      </motion.section>

      {/* Featured Twitter Threads */}
      <motion.section
        id="threads"
        variants={sectionVariants}
        initial="hidden"
        whileInView={isLoading ? "hidden" : "visible"}
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-4"
      >
        <div className="text-[12px] font-medium tracking-widest uppercase font-mono text-neutral-400 dark:text-neutral-500">
          featured threads
        </div>
        <div className="flex flex-col border-t border-neutral-200 dark:border-neutral-800">
          {twitterThreads.map((thread, idx) => (
            <TwitterThreadCard key={idx} thread={thread} />
          ))}
        </div>
      </motion.section>

      {/* ─── Quote Section ─── */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView={isLoading ? "hidden" : "visible"}
        viewport={{ once: true, amount: 0.3 }}
        className="relative py-16 md:py-20"
      >
        {/* Top border line */}
        <div className="absolute top-0 left-0 right-0 border-t border-dashed border-neutral-300 dark:border-neutral-700" />
        
        <div className="flex flex-col items-center text-center space-y-6 max-w-lg mx-auto">
          {/* Large quotation mark */}
          <span className="text-[64px] md:text-[80px] leading-none font-serif text-neutral-200 dark:text-neutral-800 select-none" aria-hidden="true">
            &ldquo;
          </span>

          <blockquote className="text-[18px] md:text-[20px] font-medium leading-relaxed text-neutral-700 dark:text-neutral-300 font-serif italic -mt-10">
            The first principle is that you must not fool yourself — and you are the easiest person to fool.
          </blockquote>

          <div className="flex items-center gap-2 text-[12px] font-mono text-neutral-400 dark:text-neutral-500 tracking-wider uppercase">
            <span className="w-6 h-px bg-neutral-300 dark:bg-neutral-700" />
            <span>Richard Feynman</span>
            <span className="w-6 h-px bg-neutral-300 dark:bg-neutral-700" />
          </div>
        </div>

        {/* Bottom border line */}
        <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-neutral-300 dark:border-neutral-700" />
      </motion.section>

      {/* ─── Footer ─── */}
      <motion.footer
        variants={sectionVariants}
        initial="hidden"
        whileInView={isLoading ? "hidden" : "visible"}
        viewport={{ once: true, amount: 0.3 }}
        className="pb-24 pt-4 space-y-10"
      >
        {/* Social strip */}
        <div className="space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600">
            outbound_links.config
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "GitHub", href: "https://github.com", icon: <GithubIcon size={13} /> },
              { label: "LinkedIn", href: "https://linkedin.com", icon: <LinkedinIcon size={13} /> },
              { label: "Twitter", href: "https://x.com/kulsoham18262", icon: <XIcon size={13} /> },
              { label: "Resume", href: "https://resume.io/r/soham-kulkarni", icon: <FileText size={13} strokeWidth={1.5} /> },
              { label: "Email", href: "mailto:soham.kulkarni@example.com", icon: <Mail size={13} strokeWidth={1.5} /> },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label === "Email" ? undefined : "_blank"}
                rel={social.label === "Email" ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-2 px-3 py-2 border border-dotted border-neutral-300 dark:border-neutral-800 hover:border-neutral-500 dark:hover:border-neutral-600 bg-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-200 font-mono text-[11px] tracking-wide"
              >
                <span className="opacity-60 group-hover:opacity-100 transition-opacity">{social.icon}</span>
                <span className="uppercase">{social.label}</span>
                <ArrowUpRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200" />
              </a>
            ))}
          </div>
        </div>

        {/* System readout strip */}
        <div className="border-t border-dashed border-neutral-200 dark:border-neutral-800 pt-6 space-y-4">
          {/* Status line */}
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 dark:text-neutral-600 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>sys.status: <span className="text-emerald-600 dark:text-emerald-500">online</span></span>
            </div>
            <span>build: 2025.06.stable</span>
          </div>

          {/* ASCII signal end */}
          <div className="flex items-center gap-3 text-neutral-300 dark:text-neutral-800">
            <div className="flex-grow border-t border-dotted border-neutral-200 dark:border-neutral-800" />
            <span className="text-[9px] font-mono tracking-[0.3em] text-neutral-400 dark:text-neutral-600 uppercase select-none">
              end_of_transmission
            </span>
            <div className="flex-grow border-t border-dotted border-neutral-200 dark:border-neutral-800" />
          </div>

          {/* Copyright */}
          <div className="text-center text-[11px] font-mono text-neutral-400 dark:text-neutral-600 space-y-1">
            <p>Designed &amp; built by <span className="text-neutral-600 dark:text-neutral-400 font-medium">Soham Kulkarni</span></p>
            <p className="text-[10px] text-neutral-300 dark:text-neutral-700">© {new Date().getFullYear()} — All systems nominal.</p>
          </div>
        </div>
      </motion.footer>

    </div>
  );
}
