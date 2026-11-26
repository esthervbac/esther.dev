import { Mail } from "lucide-react";
import { Logo } from "../ui/Logo";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";
import { CopyrightYear } from "./CopyrightYear";

export function Footer() {
  return (
    <footer className="border-t border-purple-500/15 bg-slate-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Logo />
          <p className="text-sm text-slate-400">
            Construindo interfaces modernas e soluções fullstack.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:esther.v.bacelar@gmail.com"
            aria-label="Enviar e-mail"
            className="rounded-full border border-slate-800 bg-slate-900 p-2.5 text-slate-300 transition-colors hover:border-purple-500/50 hover:text-purple-400"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/esthervbac"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-slate-800 bg-slate-900 p-2.5 text-slate-300 transition-colors hover:border-purple-500/50 hover:text-purple-400"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/esther-valentim-bacelar/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-slate-800 bg-slate-900 p-2.5 text-slate-300 transition-colors hover:border-purple-500/50 hover:text-purple-400"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-slate-500">
        © <CopyrightYear /> Esther.dev — Todos os direitos reservados.
      </div>
    </footer>
  );
}
