import { Briefcase } from "lucide-react";
import { AboutCard } from "./AboutCard";

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <AboutCard>
      <div className="mb-6 flex items-center gap-3">
        <Briefcase className="h-6 w-6 text-purple-400" />
        <h3 className="text-xl font-bold text-white">
          Experiência Profissional
        </h3>
      </div>

      <div className="space-y-6 border-l-2 border-purple-500/30 pl-5">
        {experiences.map((exp, index) => (
          <div key={`${exp.company}-${index}`} className="relative">
            <span className="absolute -left-6.75 top-1.5 h-3 w-3 rounded-full bg-purple-400 ring-4 ring-slate-900" />
            <span className="text-xs font-semibold uppercase tracking-wide text-purple-400">
              {exp.period}
            </span>
            <h4 className="mt-1 text-lg font-bold text-white">{exp.role}</h4>
            <p className="text-sm font-medium text-slate-400">{exp.company}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </AboutCard>
  );
}
