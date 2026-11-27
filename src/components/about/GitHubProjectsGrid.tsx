import { FolderKanban } from "lucide-react";
import { GitHubProject } from "@/lib/github";
import { GithubIcon } from "../ui/SocialIcons";
import { ProjectCard } from "../ui/ProjectCard";
import { AboutCard } from "./AboutCard";

interface GitHubProjectsGridProps {
  projects: GitHubProject[];
  githubUsername?: string;
}

export function GitHubProjectsGrid({
  projects,
  githubUsername = "esthervbac",
}: GitHubProjectsGridProps) {
  const repositoriesUrl = `https://github.com/${githubUsername}?tab=repositories`;

  return (
    <AboutCard className="mt-8">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <FolderKanban className="h-6 w-6 text-purple-400" />
          <div>
            <h3 className="text-xl font-bold text-white">Meus Projetos</h3>
            <p className="text-sm text-slate-400">
              Sincronizados automaticamente com meu GitHub
            </p>
          </div>
        </div>

        <a
          href={repositoriesUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-xl border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold text-purple-300 transition-colors hover:bg-purple-500/20 sm:self-auto"
        >
          <GithubIcon className="h-4 w-4" /> Ver todos no GitHub
        </a>
      </div>

      {projects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 text-center text-sm text-slate-400">
          Não foi possível carregar os repositórios no momento. Confira
          diretamente em{" "}
          <a
            href={repositoriesUrl}
            target="_blank"
            rel="noreferrer"
            className="text-purple-400 underline"
          >
            github.com/{githubUsername}
          </a>
          .
        </p>
      )}
    </AboutCard>
  );
}
