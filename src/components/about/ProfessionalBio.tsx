import { User } from "lucide-react";
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
        Sou desenvolvedora apaixonada por criar produtos digitais funcionais,
        intuitivos e escaláveis. Meu foco principal está no ecossistema{" "}
        <strong className="text-purple-300">React, Next.js e TypeScript</strong>
        , sempre priorizando código limpo, componentes reutilizáveis e uma
        experiência fluida tanto no desktop quanto em dispositivos móveis. Além
        do frontend, atuo no desenvolvimento backend com Node.js, Python e
        bancos de dados relacionais.
      </p>
    </AboutCard>
  );
}
