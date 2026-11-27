import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";
import { GithubIcon } from "../ui/SocialIcons";

export function Projects() {
  return (
    <section
      id="projetos"
      className="scroll-mt-20 border-t border-slate-900 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-purple-400">
            Portfólio
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Projetos em destaque
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <article
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-purple-500/20 bg-slate-900/70 p-6 transition-all hover:border-purple-400/50"
            >
              <div>
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-purple-500/15 px-2.5 py-1 text-xs font-medium text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 border-t border-slate-800 pt-4 text-sm font-medium">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 transition-colors hover:text-purple-400"
                >
                  <GithubIcon className="h-4 w-4" /> Código
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-purple-400 transition-colors hover:text-purple-300"
                >
                  <ExternalLink className="h-4 w-4" /> Ver projeto
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
