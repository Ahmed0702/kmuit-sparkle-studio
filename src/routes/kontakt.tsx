import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — KMU Informatik Support | Rückruf anfordern" },
      { name: "description", content: "Kontaktieren Sie KMU Informatik Support in Zug, Luzern, Zürich und Bern. Telefon 058 255 27 17 oder Rückruf-Formular." },
      { property: "og:title", content: "Kontakt — KMU Informatik Support" },
      { property: "og:description", content: "Sprechen wir über Ihr IT-Projekt. Rufen Sie an oder fordern Sie einen Rückruf an." },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="relative bg-ink text-ink-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className="container-x relative">
          <div className="text-brand-glow text-xs font-bold uppercase tracking-widest">Kontakt</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-black leading-[0.95]">
            Sprechen wir <span className="text-gradient-brand">über Ihr Projekt.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Fordern Sie hier einen Rückruf an — oder rufen Sie uns direkt an. Wir melden uns
            innerhalb weniger Stunden.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, label: "Telefon", value: "058 255 27 17", href: "tel:+41582552717" },
              { icon: Mail, label: "E-Mail", value: "kontakt@kmuit.com", href: "mailto:kontakt@kmuit.com" },
              { icon: Clock, label: "Öffnungszeiten", value: "Mo–Fr: 08:00 – 18:30" },
              { icon: MapPin, label: "Standorte", value: "Zug · Luzern · Zürich · Bern" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href ?? "#"}
                className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover-lift group"
              >
                <div className="w-11 h-11 rounded-md bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{c.label}</div>
                  <div className="font-bold text-lg mt-0.5">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-elegant">
              {sent ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 mx-auto rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">Danke für Ihre Anfrage!</h3>
                  <p className="mt-3 text-muted-foreground">
                    Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="space-y-5"
                >
                  <div>
                    <h2 className="font-display text-2xl font-bold">Rückruf anfordern</h2>
                    <p className="mt-1 text-sm text-muted-foreground">Alle Felder mit * sind Pflichtfelder.</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="Vorname *" name="firstname" />
                    <Field label="Nachname *" name="lastname" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="E-Mail *" name="email" type="email" />
                    <Field label="Telefon *" name="phone" type="tel" />
                  </div>
                  <Field label="Firma" name="company" />
                  <div>
                    <label className="text-sm font-semibold block mb-2">Ich bin *</label>
                    <div className="grid sm:grid-cols-3 gap-2">
                      {["Geschäftskunde", "StartUp / Neugründer", "Privatkunde"].map((r) => (
                        <label key={r} className="relative">
                          <input type="radio" name="role" defaultChecked={r === "Geschäftskunde"} className="peer sr-only" />
                          <div className="cursor-pointer text-sm text-center p-3 rounded-md border border-border peer-checked:border-brand peer-checked:bg-brand/5 peer-checked:text-brand font-medium transition-all">
                            {r}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold block mb-2">Ihre Nachricht *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all"
                      placeholder="Beschreiben Sie kurz Ihr Anliegen…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-6 py-4 rounded-md font-semibold shadow-brand hover:translate-y-[-2px] transition-transform"
                  >
                    Anfrage senden <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-semibold block mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={label.includes("*")}
        className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-all"
      />
    </div>
  );
}
