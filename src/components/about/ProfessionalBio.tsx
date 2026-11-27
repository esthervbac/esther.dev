import { Award, GraduationCap, Languages, User } from "lucide-react";
import { COURSES, EDUCATION, PROFILE_INFO } from "@/data/portfolioData";
import { AboutCard } from "./AboutCard";

interface ProfessionalBioProps {
  title?: string;
}

export function ProfessionalBio({
  title = "Minha Vida Profissional",
}: ProfessionalBioProps) {
  return (
    <AboutCard>
      <div className="mb-4 flex items-center gap-3 text-purple-300">
        <User className="h-6 w-6 text-purple-400" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      <p className="leading-relaxed text-slate-300">
        Desenvolvedora Full Stack e Front-end com{" "}
        <strong className="text-purple-300">
          mais de 4 anos de experiência
        </strong>{" "}
        na construção, evolução e sustentação de aplicações web escaláveis com{" "}
        <strong className="text-purple-300">
          React.js, TypeScript, JavaScript (ES6+) e Node.js
        </strong>
        . Tenho atuação prática em interfaces responsivas, integração com APIs
        REST, modelagem e otimização de dados em{" "}
        <strong className="text-purple-300">PostgreSQL e MongoDB</strong>, além
        de monitoramento e análise de logs em{" "}
        <strong className="text-purple-300">AWS</strong>. Foco em código limpo,
        performance, experiência do usuário e entregas contínuas em times ágeis.
      </p>

      <div className="mt-6 grid gap-6 border-t border-slate-800/80 pt-6 sm:grid-cols-2">
        <div className="space-y-5">
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-purple-400" />
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-purple-300">
                Formação Acadêmica
              </h4>
              {EDUCATION.map((edu, index) => (
                <div key={index} className="text-xs text-slate-300">
                  <p className="font-semibold text-white">{edu.course}</p>
                  <p className="text-slate-400">
                    {edu.institution} • {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Award className="mt-0.5 h-5 w-5 shrink-0 text-purple-400" />
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-purple-300">Curso</h4>
              {COURSES.map((item, index) => (
                <div key={index} className="text-xs text-slate-300">
                  <p className="font-semibold text-white">{item.course}</p>
                  <p className="text-slate-400">
                    {item.institution} • {item.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Languages className="mt-0.5 h-5 w-5 shrink-0 text-purple-400" />
          <div>
            <h4 className="text-sm font-semibold text-purple-300">Idiomas</h4>
            <p className="mt-1 text-xs font-medium text-slate-200">
              {PROFILE_INFO.language}
            </p>
          </div>
        </div>
      </div>
    </AboutCard>
  );
}
