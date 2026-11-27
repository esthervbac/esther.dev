import { EXPERIENCES, STACKS } from "@/data/portfolioData";
import { getGitHubProjects } from "@/lib/github";
import { ExperienceTimeline } from "../about/ExperienceTimeline";
import { GitHubProjectsGrid } from "../about/GitHubProjectsGrid";
import { ProfessionalBio } from "../about/ProfessionalBio";
import { StacksList } from "../about/StacksList";

export async function About() {
  const projects = await getGitHubProjects("esthervbac");

  return (
    <section
      id="sobre"
      className="scroll-mt-20 border-t border-slate-900 bg-slate-900/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-purple-400">
            Sobre mim
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Trajetória, stacks e projetos
          </h2>
        </div>

        <ProfessionalBio />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <StacksList stacks={STACKS} />
          <ExperienceTimeline experiences={EXPERIENCES} />
        </div>

        <GitHubProjectsGrid projects={projects} githubUsername="esthervbac" />
      </div>
    </section>
  );
}
