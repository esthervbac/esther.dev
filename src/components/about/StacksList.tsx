import { Code2 } from "lucide-react";
import { AboutCard } from "./AboutCard";

interface StacksData {
  frontend: string[];
  backend: string[];
  databaseAndCloud: string[];
}

interface StacksListProps {
  stacks: StacksData;
}

interface StackCategoryProps {
  label: string;
  items: string[];
  badgeClassName: string;
}

function StackCategory({ label, items, badgeClassName }: StackCategoryProps) {
  return (
    <div>
      <h4 className="mb-2.5 text-sm font-semibold text-purple-300">{label}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <span
            key={tech}
            className={`rounded-lg border px-3 py-1.5 text-xs font-medium ${badgeClassName}`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function StacksList({ stacks }: StacksListProps) {
  return (
    <AboutCard>
      <div className="mb-6 flex items-center gap-3">
        <Code2 className="h-6 w-6 text-purple-400" />
        <h3 className="text-xl font-bold text-white">Stacks & Tecnologias</h3>
      </div>

      <div className="space-y-5">
        <StackCategory
          label="Front-end"
          items={stacks.frontend}
          badgeClassName="border-purple-500/25 bg-purple-500/10 text-purple-200"
        />
        <StackCategory
          label="Back-end"
          items={stacks.backend}
          badgeClassName="border-violet-500/25 bg-violet-500/10 text-violet-200"
        />
        <StackCategory
          label="Bancos de Dados, Cloud & Ferramentas"
          items={stacks.databaseAndCloud}
          badgeClassName="border-slate-700 bg-slate-800/80 text-slate-300"
        />
      </div>
    </AboutCard>
  );
}
