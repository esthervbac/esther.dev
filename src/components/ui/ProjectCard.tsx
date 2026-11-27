"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "../ui/SocialIcons";
import { GitHubProject } from "@/lib/github";

interface ProjectCardProps {
  project: GitHubProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const customPreviewUrl = `https://raw.githubusercontent.com/esthervbac/${project.name}/main/preview.png`;
  const [imgSrc, setImgSrc] = useState(customPreviewUrl);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-purple-500/20 bg-slate-950/70 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/10">
      <div className="relative h-48 w-full overflow-hidden border-b border-slate-800 bg-slate-900">
        <Image
          src={imgSrc}
          alt={`Preview do projeto ${project.formattedName}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => {
            if (imgSrc !== project.imageUrl) {
              setImgSrc(project.imageUrl);
            }
          }}
        />

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-purple-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-purple-500"
          >
            Demo ao vivo <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-2 text-purple-400">
            <FolderGit2 className="h-4 w-4 shrink-0" />
            <h4 className="line-clamp-1 text-lg font-bold text-white">
              {project.formattedName}
            </h4>
          </div>

          <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-slate-300">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stacks.map((stack) => (
              <span
                key={stack}
                className="rounded-md border border-purple-500/20 bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-300"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4 text-sm font-medium">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-300 transition-colors hover:text-purple-400"
          >
            <GithubIcon className="h-4 w-4" /> Repositório
          </a>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-purple-400 transition-colors hover:text-purple-300"
            >
              Ver Demo <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <span className="text-xs text-slate-500">Sem link demo</span>
          )}
        </div>
      </div>
    </article>
  );
}
