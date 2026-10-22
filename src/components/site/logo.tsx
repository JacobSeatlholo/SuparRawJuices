import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

/**
 * Circular badge logo echoing the Super Raw Juices market banner:
 * green bottle + juice glass ring with stacked wordmark.
 */
export function Logo({ className, variant = "dark" }: LogoProps) {
  const isDark = variant === "dark";
  const ring = isDark ? "#f7b32b" : "#16382a";
  const paper = isDark ? "#fdf6ea" : "#16382a";
  const pulp = "#f2670f";
  const leaf = isDark ? "#7fb069" : "#4d7c0f";

  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="Super Raw Juices logo"
      className={cn("shrink-0", className)}
    >
      <circle cx="50" cy="50" r="48" fill={paper} />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke={ring}
        strokeWidth="3"
      />
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="none"
        stroke={ring}
        strokeWidth="1.5"
      />
      {/* leaf sprig */}
      <path d="M50 15c4-5 11-5 14 0-3 5-10 6-14 2z" fill={leaf} />
      {/* bottle */}
      <rect x="30" y="30" width="13" height="30" rx="3" fill={ring} />
      <rect x="34" y="24" width="5" height="7" rx="1" fill={ring} />
      <rect x="32" y="44" width="9" height="14" rx="2" fill={leaf} />
      {/* glass */}
      <path d="M58 32h14l-2 26h-10z" fill={ring} />
      <path d="M60 42h10l-1.4 14h-7.2z" fill={pulp} />
      {/* wordmark */}
      <text
        x="50"
        y="72"
        textAnchor="middle"
        fontFamily="var(--font-anton), sans-serif"
        fontSize="13"
        letterSpacing="1"
        fill={paper}
      >
        SUPER
      </text>
      <text
        x="50"
        y="84"
        textAnchor="middle"
        fontFamily="var(--font-anton), sans-serif"
        fontSize="9"
        letterSpacing="3"
        fill={pulp}
      >
        JUICES
      </text>
    </svg>
  );
}
