import { Mail, MapPin } from "lucide-react";
import { PROFILE_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";

interface ContactInfoProps {
  email?: string;
  location?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  description?: string;
}

export function ContactInfo({
  email = PROFILE_INFO.email,
  location = PROFILE_INFO.location,
  githubUrl = PROFILE_INFO.githubUrl,
  linkedinUrl = PROFILE_INFO.linkedinUrl,
  description = "Tem um projeto em mente, uma vaga ou quer trocar uma ideia sobre desenvolvimento Full Stack e Front-end? Me mande uma mensagem pelo formulário ou direto no meu e-mail.",
}: ContactInfoProps) {
  return (
    <div className="space-y-6">
      <p className="leading-relaxed text-slate-300">{description}</p>

      <div className="rounded-2xl border border-purple-500/20 bg-slate-900/80 p-6">
        {/* E-mail direto */}
        <div className="flex items-center gap-3.5">
          <div className="rounded-xl bg-purple-500/15 p-3 text-purple-400">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-slate-400">E-mail direto</p>
            <a
              href={`mailto:${email}`}
              className="text-sm font-semibold text-purple-300 transition-colors hover:text-purple-200 hover:underline"
            >
              {email}
            </a>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-3.5 border-t border-slate-800 pt-5">
          <div className="rounded-xl bg-purple-500/15 p-3 text-purple-400">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-slate-400">Localização</p>
            <p className="text-sm font-medium text-slate-200">{location}</p>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-slate-800 pt-5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3.5 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-purple-500/40 hover:text-purple-300"
          >
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3.5 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-purple-500/40 hover:text-purple-300"
          >
            <LinkedinIcon className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
