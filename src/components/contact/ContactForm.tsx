"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "../ui/Button";

interface ContactFormProps {
  endpoint?: string;
  fallbackEmail?: string;
}

export function ContactForm({
  endpoint = "/api/contact",
  fallbackEmail = "esther.v.bacelar@gmail.com",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Falha ao enviar mensagem");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputStyles =
    "w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-purple-400 focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-purple-500/20 bg-slate-900/80 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Seu nome
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ex: Maria Silva"
            className={inputStyles}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Seu e-mail
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="voce@exemplo.com"
            className={inputStyles}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Assunto
        </label>
        <input
          id="contact-subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          placeholder="Proposta de projeto, oportunidade, dúvida..."
          className={inputStyles}
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Mensagem
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Escreva sua mensagem aqui..."
          className={`${inputStyles} resize-none`}
        />
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? (
          "Enviando..."
        ) : (
          <>
            Enviar mensagem <Send className="h-4 w-4" />
          </>
        )}
      </Button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-emerald-400">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          Mensagem enviada com sucesso! Em breve retorno o contato.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-rose-400">
          Ocorreu um erro ao enviar. Você também pode escrever direto para{" "}
          <a href={`mailto:${fallbackEmail}`} className="underline">
            {fallbackEmail}
          </a>
          .
        </p>
      )}
    </form>
  );
}
