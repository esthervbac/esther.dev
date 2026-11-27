"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/data/portfolioData";
import { Logo } from "../ui/Logo";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 w-full border-b border-purple-500/15 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-purple-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu de navegação"
            className="rounded-xl border border-purple-500/20 bg-slate-900/80 p-2.5 text-purple-300 transition-colors hover:bg-purple-500/20 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
