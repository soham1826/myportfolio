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

export function TwitterIcon({ size = 20, className, ...props }: IconProps) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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
