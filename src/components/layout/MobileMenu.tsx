"use client";

import { X } from "lucide-react";
import { NAV_LINKS } from "@/data/portfolioData";
import { Logo } from "../ui/Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-slate-950/75 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 left-0 z-50 flex h-full w-72 flex-col justify-between border-r border-purple-500/20 bg-slate-900 p-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-5">
            <Logo onClick={onClose} />
            <button
              onClick={onClose}
              aria-label="Fechar menu"
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-purple-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-purple-500/15 hover:text-purple-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-slate-800 pt-4 text-xs text-slate-400">
          <p>Desenvolvedora Fullstack & Frontend</p>
          <p className="mt-1 text-purple-400">esther.v.bacelar@gmail.com</p>
        </div>
      </aside>
    </>
  );
}
