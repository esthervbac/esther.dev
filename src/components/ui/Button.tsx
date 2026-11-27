import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-500/25 hover:from-purple-500 hover:to-violet-400",
    outline:
      "border border-purple-400/50 bg-purple-950/20 text-purple-200 hover:border-purple-400 hover:bg-purple-900/40",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
