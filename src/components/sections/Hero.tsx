import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-24 sm:py-32 lg:py-36"
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span>Disponível para novos projetos & oportunidades</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Olá, eu sou a Esther.{" "}
            <span className="bg-linear-to-r from-purple-400 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
              Desenvolvedora Fullstack & Frontend.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
            Transformo ideias em aplicações web rápidas, responsivas e bem
            estruturadas — do design da interface em React e Next.js até a
            arquitetura de APIs e bancos de dados.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contato">
              <Button variant="primary">
                Vamos conversar <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#sobre">
              <Button variant="outline">Conhecer minha trajetória</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
