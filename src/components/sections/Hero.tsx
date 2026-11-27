import { ArrowRight, Download, Sparkles, Terminal } from "lucide-react";
import { PROFILE_INFO } from "@/data/portfolioData";
import { Button } from "../ui/Button";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span>{PROFILE_INFO.tagline}</span>
            </div>

            <p className="text-base font-medium text-slate-300 sm:text-lg">
              Olá, eu sou a
            </p>

            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {PROFILE_INFO.fullName}
              <span className="mt-2 block bg-linear-to-r from-purple-400 via-violet-300 to-fuchsia-400 bg-clip-text text-xl font-bold text-transparent sm:text-2xl lg:text-3xl">
                {PROFILE_INFO.roleTitle}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Mais de 4 anos construindo, evoluindo e sustentando aplicações web
              escaláveis com React.js, TypeScript e Node.js — de interfaces
              responsivas a APIs REST, PostgreSQL, MongoDB e AWS.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contato">
                <Button variant="primary">
                  Vamos conversar <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="/Curriculo_Esther_Desenvolvedor_Fullstack.pdf" download>
                <Button variant="outline">
                  <Download className="h-4 w-4" /> Baixar CV
                </Button>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-800/80 pt-8">
              <div className="flex items-center gap-3">
                <a
                  href={PROFILE_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-xl border border-slate-800 bg-slate-900/90 p-2.5 text-slate-300 transition-colors hover:border-purple-500/50 hover:text-purple-400"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href={PROFILE_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-xl border border-slate-800 bg-slate-900/90 p-2.5 text-slate-300 transition-colors hover:border-purple-500/50 hover:text-purple-400"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>

              <div className="hidden h-8 w-px bg-slate-800 sm:block" />

              <div className="flex items-center gap-6 text-sm">
                <div>
                  <p className="text-lg font-bold text-white">+4 anos</p>
                  <p className="text-xs text-slate-400">Experiência Web</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-purple-300">
                    Full Stack
                  </p>
                  <p className="text-xs text-slate-400">Front, Back & Cloud</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-purple-500/25 bg-slate-900/90 p-5 shadow-2xl shadow-purple-950/40 backdrop-blur-md sm:p-6">
              <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400">
                  <Terminal className="h-3.5 w-3.5 text-purple-400" />
                  esther.profile.ts
                </span>
              </div>

              <pre className="overflow-x-auto font-mono text-xs leading-6 text-slate-300 sm:text-[13px]">
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-violet-200">developer</span> = {"{\n"}
                  {"  "}name:{" "}
                  <span className="text-emerald-300">
                    &apos;{PROFILE_INFO.fullName}&apos;
                  </span>
                  ,{"\n"}
                  {"  "}role:{" "}
                  <span className="text-emerald-300">
                    &apos;Full Stack & Front-end&apos;
                  </span>
                  ,{"\n"}
                  {"  "}location:{" "}
                  <span className="text-emerald-300">
                    &apos;Niterói, RJ&apos;
                  </span>
                  ,{"\n"}
                  {"  "}stack: [{"\n"}
                  {"    "}
                  <span className="text-amber-200">
                    &apos;React.js&apos;
                  </span>,{" "}
                  <span className="text-amber-200">&apos;Next.js&apos;</span>,
                  {"\n"}
                  {"    "}
                  <span className="text-amber-200">&apos;TypeScript&apos;</span>
                  , <span className="text-amber-200">&apos;Node.js&apos;</span>,
                  {"\n"}
                  {"    "}
                  <span className="text-amber-200">&apos;PostgreSQL&apos;</span>
                  , <span className="text-amber-200">&apos;AWS&apos;</span>
                  {"\n"}
                  {"  "}],{"\n"}
                  {"  "}openToWork:{" "}
                  <span className="text-purple-400">true</span>
                  {"\n"}
                  {"};"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
