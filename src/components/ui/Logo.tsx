import Link from "next/link";

interface LogoProps {
  onClick?: () => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <Link
      href="#home"
      onClick={onClick}
      className="text-2xl font-extrabold tracking-tight text-white transition-opacity hover:opacity-90"
    >
      Esther<span className="text-purple-400">.dev</span>
    </Link>
  );
}
