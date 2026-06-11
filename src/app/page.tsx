"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  FileText, 
  Mail 
} from "lucide-react";
import { 
  GithubIcon, LinkedinIcon, TwitterIcon,
  ReactLogo, NextjsLogo, TypeScriptLogo, TailwindLogo, NodejsLogo, 
  PostgreSQLLogo, MongoDBLogo, RedisLogo, BullMQLogo, PrismaLogo, 
  DockerLogo, PythonLogo, OpenAILogo 
} from "@/components/Icons";
import { PixelatingImage } from "@/components/PixelatingImage";


// Monogram avatar for companies (circular, 40px)
function CompanyLogo({ name, src }: { name: string; src?: string }) {
  const [error, setError] = React.useState(false);
  const monogram = name.charAt(0);

  if (src && !error) {
    return (
      <div className="relative w-10 h-10 flex-shrink-0 rounded-full overflow-hidden border border-neutral-100 dark:border-neutral-900">
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
    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-neutral-900 dark:bg-neutral-800 text-white dark:text-neutral-200 font-mono text-sm font-semibold rounded-full border border-neutral-200/10">
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
  const text = displayIndex === 0 ? "Soham Kulkarni" : "@Soham_dev";

  return (
    <h1 className="relative text-[36px] sm:text-[48px] font-bold tracking-tight font-serif text-neutral-900 dark:text-white leading-none pt-1 sm:pt-2 select-none min-h-[48px] sm:min-h-[56px] flex items-center">
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
  }, []);

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



export default function Home() {
  const [displayIndex, setDisplayIndex] = React.useState(0);
  const [isGlitching, setIsGlitching] = React.useState(false);

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
    },
  ];

  return (
    <div className="max-w-[800px] mx-auto px-6 pt-20 md:pt-32 space-y-20 selection:bg-neutral-100 dark:selection:bg-neutral-800">
      
      {/* Hero Section */}
      <motion.header
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6"
      >
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
            I&apos;m a developer at Winjit Technologies. I build backend systems that don&apos;t fall apart — BullMQ pipelines, event-driven architectures, AI integrations. I care about the details most people skip.
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
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-2.5 py-1 border border-neutral-200/80 dark:border-neutral-800 text-[12px] font-medium font-sans rounded-[12px] hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-150 flex items-center gap-1"
              >
                <TwitterIcon size={12} strokeWidth={1.5} />
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
        whileInView="visible"
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
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-4"
      >
        <h2 className="text-[20px] font-semibold font-sans tracking-tight">About</h2>
        <div className="text-[14px] font-normal leading-relaxed text-neutral-600 dark:text-neutral-400 space-y-6 font-mono">
          <p>
            I graduated from <span className="font-semibold text-neutral-800 dark:text-neutral-200">K. K. Wagh College of Engineering, Nashik</span> in 2024 with a <a href="#education" className="underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-800 dark:hover:decoration-neutral-400 transition-colors">9.08 CGPA</a>. During my time there, I realized writing code is easy, but building code that stays functional under high loads is where the craftsmanship is.
          </p>
          <p>
            Currently, I am at Winjit Technologies as a Full Stack Developer. My time is divided between writing optimized TypeScript APIs and maintaining the <Link href="/projects/mdm-notification-engine" className="underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-800 dark:hover:decoration-neutral-400 transition-colors">BullMQ notification system</Link> that powers our core notification flow. I also built <Link href="/projects/summarix-ai" className="underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-800 dark:hover:decoration-neutral-400 transition-colors">Summarix AI</Link>, an automated document comprehension engine.
          </p>
          <p>
            I believe software should be built with restraint and purpose. When I&apos;m not writing code, I read about PostgreSQL transaction management and experiment with Docker networks.
          </p>
        </div>
      </motion.section>

      {/* Work Experience */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-4"
      >
        <h2 className="text-[20px] font-semibold font-sans tracking-tight">Work Experience</h2>
        <div className="border-t border-neutral-100 dark:border-neutral-900">
          
          <motion.div
            whileHover={{ x: 2 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex items-center justify-between p-4 -mx-4 rounded-xl hover:bg-neutral-50/60 dark:hover:bg-neutral-950/30 transition-colors duration-180 border-b border-neutral-100/60 dark:border-neutral-900/50"
          >
            <div className="flex items-center gap-4">
              <CompanyLogo name="Winjit Technologies" />
              <div>
                <div className="text-[14px] font-semibold font-sans text-neutral-900 dark:text-neutral-200">
                  Winjit Technologies
                </div>
                <div className="text-[13px] text-neutral-500 dark:text-neutral-400 font-sans">
                  Full Stack Developer
                </div>
              </div>
            </div>
            <div className="text-[13px] font-mono text-neutral-500 dark:text-neutral-400 text-right">
              Jul 2024 – Present
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        id="education"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-4"
      >
        <h2 className="text-[20px] font-semibold font-sans tracking-tight">Education</h2>
        <div className="border-t border-neutral-100 dark:border-neutral-900">
          
          <motion.div
            whileHover={{ x: 2 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex items-center justify-between p-4 -mx-4 rounded-xl hover:bg-neutral-50/60 dark:hover:bg-neutral-950/30 transition-colors duration-180 border-b border-neutral-100/60 dark:border-neutral-900/50"
          >
            <div className="flex items-center gap-4">
              <CompanyLogo name="K" />
              <div>
                <div className="text-[14px] font-semibold font-sans text-neutral-900 dark:text-neutral-200">
                  K. K. Wagh College of Engineering
                </div>
                <div className="text-[13px] text-neutral-500 dark:text-neutral-400 font-sans">
                  B.E. Computer Engineering
                </div>
              </div>
            </div>
            <div className="text-right flex flex-col items-end">
              <div className="text-[13px] font-mono text-neutral-500 dark:text-neutral-400">
                2020 – 2024
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
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-6"
      >
        <div className="text-[12px] font-medium tracking-widest uppercase font-mono text-neutral-400 dark:text-neutral-500">
          current projects
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 relative">
          {/* Vertical dashed line separating columns */}
          <div className="hidden md:block absolute left-[calc(50%)] top-0 bottom-0 w-px border-l border-dashed border-neutral-200 dark:border-neutral-800 -translate-x-1/2" />
          
          {projects.map((project, idx) => {
            const isLive = project.status === "Live";
            const dotColor = isLive ? "bg-emerald-500" : "bg-amber-500";

            return (
              <React.Fragment key={idx}>
                {/* Desktop horizontal row divider */}
                {idx === 2 && (
                  <div className="col-span-full border-t border-dashed border-neutral-200 dark:border-neutral-800 my-2 hidden md:block" />
                )}
                {/* Mobile horizontal divider */}
                {idx > 0 && (
                  <div className="col-span-full border-t border-dashed border-neutral-200 dark:border-neutral-800 my-2 md:hidden" />
                )}

                <Link href={`/projects/${project.slug}`} className="group block space-y-4">
                  {/* Top Preview box */}
                  <div className="bg-[#fafafa]/50 dark:bg-neutral-900/10 p-5 rounded-xl border border-neutral-200/50 dark:border-neutral-800 aspect-[4/3] flex flex-col justify-between overflow-hidden relative transition-colors duration-180 hover:bg-neutral-50/80 dark:hover:bg-neutral-900/20">
                    <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 font-medium uppercase tracking-wider">
                      {project.previewLabel}
                    </span>

                    {/* Screenshot floating inside */}
                    <div className="relative w-full h-[76%] rounded-lg overflow-hidden border border-neutral-200/30 dark:border-neutral-800/50 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-none">
                      <motion.div
                        variants={{
                          rest: { scale: 1 },
                          hover: { scale: 1.03 }
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
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
              </React.Fragment>
            );
          })}

        </div>
      </motion.section>

      {/* Writing / Thoughts */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-4"
      >
        <div className="text-[12px] font-medium tracking-widest uppercase font-mono text-neutral-400 dark:text-neutral-500">
          thoughts
        </div>
        <div className="flex flex-col border-t border-neutral-100 dark:border-neutral-900">
          
          {[
            {
              title: "The engineering cost of 'simple' notification queues",
              date: "June 2026",
            },
            {
              title: "Why we chose SQLite for local vector storage",
              date: "April 2026",
            },
            {
              title: "Designing interfaces that respect negative space",
              date: "January 2026",
            },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href="#"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="group flex items-center justify-between py-3.5 border-b border-neutral-100/60 dark:border-neutral-900/50 hover:bg-neutral-50/60 dark:hover:bg-neutral-950/30 px-3 -mx-3 rounded-lg transition-colors duration-180"
            >
              <span className="text-[15px] font-normal text-neutral-700 dark:text-neutral-300 font-sans group-hover:text-neutral-950 dark:group-hover:text-neutral-100 transition-colors">
                {item.title}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-mono text-neutral-400 dark:text-neutral-500">
                  {item.date}
                </span>
                <ArrowUpRight 
                  size={16} 
                  strokeWidth={1.5} 
                  className="text-neutral-500 dark:text-neutral-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-all duration-150" 
                />
              </div>
            </motion.a>
          ))}

        </div>
      </motion.section>

    </div>
  );
}
