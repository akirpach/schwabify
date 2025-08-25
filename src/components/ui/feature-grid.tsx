import { ReactNode } from "react";

interface FeatureGridProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "max-w-4xl" | "max-w-5xl" | "max-w-6xl" | "max-w-7xl";
  spacing?: "gap-4" | "gap-6" | "gap-8";
  columns?: {
    default: "grid-cols-1" | "grid-cols-2" | "grid-cols-3";
    md?: "md:grid-cols-1" | "md:grid-cols-2" | "md:grid-cols-3";
    lg?: "lg:grid-cols-1" | "lg:grid-cols-2" | "lg:grid-cols-3" | "lg:grid-cols-4";
  };
}

export function FeatureGrid({ 
  children, 
  className = "",
  maxWidth = "max-w-6xl",
  spacing = "gap-6",
  columns = {
    default: "grid-cols-1",
    md: "md:grid-cols-2", 
    lg: "lg:grid-cols-3"
  }
}: FeatureGridProps) {
  const gridClasses = [
    "mt-12 grid",
    columns.default,
    columns.md,
    columns.lg,
    spacing,
    maxWidth,
    "mx-auto relative z-30",
    className
  ].filter(Boolean).join(" ");

  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
}