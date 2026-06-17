import React from "react";

interface IconProps extends React.ComponentProps<"svg"> {
  size?: number;
}

export function GithubIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function XIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M20 4L4 20" />
    </svg>
  );
}

// React Atom Logo
export function ReactLogo({ size = 12, className, ...props }: { size?: number; className?: string } & React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <ellipse rx="11" ry="4.2" cx="12" cy="12" />
      <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(60 12 12)" />
      <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

// Next.js Logo
export function NextjsLogo({ size = 12, className, ...props }: { size?: number; className?: string } & React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 17V7l7.5 9.5" />
      <path d="M17 7v10" />
    </svg>
  );
}

// TypeScript Logo (TS inside box)
export function TypeScriptLogo({ size = 12, className, ...props }: { size?: number; className?: string } & React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 8h4M9 8v8M14 13c1 0 2 0 2-1.5S15 10 14 10s-2 0-2 1.5M12 14.5c0 1.5 1 1.5 2 1.5s2 0 2-1.5" />
    </svg>
  );
}

// Tailwind CSS Logo
export function TailwindLogo({ size = 12, className, ...props }: { size?: number; className?: string } & React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 5.5c-2 0-3.5 1-4.5 3 2-.5 3.5.5 4.5 3-1.5 0-2.5.5-3 1.5s-.5 2 0 3.5c1.5 0 2.5-.5 3-1.5s.5-2 0-3.5c2 0 3.5-1 4.5-3-2 .5-3.5-.5-4.5-3z" />
    </svg>
  );
}

// Node.js Logo (Hexagon)
export function NodejsLogo({ size = 12, className, ...props }: { size?: number; className?: string } & React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
      <path d="M12 2v20" />
      <path d="M2 7l10 5 10-5" />
    </svg>
  );
}

// PostgreSQL Logo (Database shape)
export function PostgreSQLLogo({ size = 12, className, ...props }: { size?: number; className?: string } & React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  );
}

// MongoDB Logo (Leaf)
export function MongoDBLogo({ size = 12, className, ...props }: { size?: number; className?: string } & React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 2c0 0-5 3.5-5 9.5s5 10.5 5 10.5 5-4.5 5-10.5S12 2 12 2z" />
      <path d="M12 2v20" />
    </svg>
  );
}

// Redis Logo (Layered stacked prisms)
export function RedisLogo({ size = 12, className, ...props }: { size?: number; className?: string } & React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M3 13l9-4 9 4-9 4-9-4z" />
      <path d="M3 19l9-4 9 4-9 4-9-4z" />
      <path d="M3 7v12l9 4 9-4V7" />
    </svg>
  );
}

// BullMQ Logo (Queue processing)
export function BullMQLogo({ size = 12, className, ...props }: { size?: number; className?: string } & React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="2" y="4" width="20" height="5" rx="1" />
      <rect x="2" y="11" width="20" height="5" rx="1" />
      <rect x="2" y="18" width="20" height="5" rx="1" />
      <path d="M17 6.5h.01M17 13.5h.01M17 20.5h.01" />
    </svg>
  );
}

// Prisma Logo (Triangle Prism)
export function PrismaLogo({ size = 12, className, ...props }: { size?: number; className?: string } & React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 2L2 21h20L12 2z" />
      <path d="M12 2v19" />
      <path d="M12 11l10 10" />
      <path d="M12 11L2 21" />
    </svg>
  );
}

// Docker Logo (Containers ship)
export function DockerLogo({ size = 12, className, ...props }: { size?: number; className?: string } & React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="2" y="10" width="20" height="8" rx="2" />
      <rect x="4" y="6" width="3" height="3" rx="0.5" />
      <rect x="8" y="6" width="3" height="3" rx="0.5" />
      <rect x="12" y="6" width="3" height="3" rx="0.5" />
      <rect x="6" y="2" width="3" height="3" rx="0.5" />
    </svg>
  );
}

// Python Logo
export function PythonLogo({ size = 12, className, ...props }: { size?: number; className?: string } & React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 2c2.76 0 5 2.24 5 5v2H7V7c0-2.76 2.24-5 5-5z" />
      <path d="M12 22c-2.76 0-5-2.24-5-5v-2h10v2c0 2.76-2.24 5-5 5z" />
      <path d="M7 15H5c-1.66 0-3-1.34-3-3s1.34-3 3-3h2" />
      <path d="M17 9h2c1.66 0 3 1.34 3 3s-1.34 3-3 3h-2" />
    </svg>
  );
}

// OpenAI API Logo (Spiral atom)
export function OpenAILogo({ size = 12, className, ...props }: { size?: number; className?: string } & React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8a4 4 0 1 0 4 4" />
      <path d="M12 12m-2 0a2 2 0 1 0 4 0" />
      <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" />
    </svg>
  );
}

// Gemini Logo (4-pointed star)
export function GeminiLogo({ size = 12, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 3a9 9 0 0 0 9 9 9 9 0 0 0-9 9 9 9 0 0 0-9-9 9 9 0 0 0 9-9Z" />
    </svg>
  );
}

// LangChain Logo (Chain link)
export function LangChainLogo({ size = 12, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

// LangGraph Logo (Connected nodes)
export function LangGraphLogo({ size = 12, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M10.5 7L6.5 16M13.5 7l5 11M7 18h10" />
    </svg>
  );
}

// RAG Logo (Database search / indexing document)
export function RAGLogo({ size = 12, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

// Prompt Engineering Logo (Terminal command symbol)
export function PromptLogo({ size = 12, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="m5 7 5 5-5 5M12 17h7" />
    </svg>
  );
}

// Redux Logo (Triquetra loop)
export function ReduxLogo({ size = 12, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
      <path d="M12 6a6 6 0 0 0-6 6M12 18a6 6 0 0 0 6-6" />
    </svg>
  );
}

// Express Logo (Ex monogram in a box)
export function ExpressLogo({ size = 12, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M7 10h4M7 14h4M14 10l3 4M17 10l-3 4" />
    </svg>
  );
}

// FastAPI Logo (Bolt inside a shield)
export function FastAPILogo({ size = 12, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m13 6-4 5h5l-3 7 5-6h-4z" />
    </svg>
  );
}

// REST APIs Logo (Connecting client-server boxes)
export function RESTAPILogo({ size = 12, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="2" y="8" width="6" height="8" rx="1" />
      <rect x="16" y="8" width="6" height="8" rx="1" />
      <path d="M8 12h8M12 9v6M12 12h.01" />
    </svg>
  );
}

// AWS Logo (Smile arc)
export function AWSLogo({ size = 12, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M17.5 19c-2.5 2-6.5 2-9 0" />
      <path d="m15 19 3 2 1-3" />
      <path d="M12 5C8.13 5 5 8.13 5 12c0 2.12.93 4.02 2.41 5.33" />
      <path d="M19 12c0-3.87-3.13-7-7-7" />
    </svg>
  );
}

// GCP Logo (Polygon/Hexagon layers)
export function GCPLogo({ size = 12, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
      <path d="M12 2v20M3 7l9 5 9-5" />
      <path d="m12 12-9 5M12 12l9 5" />
    </svg>
  );
}

// GitHub Actions Logo (Workflow paths)
export function GitHubActionsLogo({ size = 12, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={size}
      height={size}
      {...props}
    >
      <rect x="2" y="6" width="6" height="4" rx="1" />
      <rect x="16" y="14" width="6" height="4" rx="1" />
      <path d="M8 8h4a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2" />
    </svg>
  );
}
