import { ReactNode } from "react";

interface AboutCardProps {
  children: ReactNode;
  className?: string;
}

export function AboutCard({ children, className = "" }: AboutCardProps) {
  return (
    <div
      className={`rounded-2xl border border-purple-500/20 bg-slate-900/80 p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
