import { ContactForm } from "../contact/ContactForm";
import { ContactInfo } from "../contact/ContactInfo";

export function Contact() {
  return (
    <section
      id="contato"
      className="scroll-mt-20 border-t border-slate-900 bg-slate-900/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-purple-400">
            Contato
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Bora tirar uma ideia do papel?
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
