import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type ServiceDetailProps = {
  eyebrow: string;
  title: ReactNode;
  titleAccent: string;
  lead: string;
  heroStats: { value: string; label: string }[];
  Icon: LucideIcon;
  benefits: { icon: LucideIcon; title: string; text: string }[];
  process: { title: string; text: string }[];
  stack: string[];
  faq: { q: string; a: string }[];
  cta: string;
  accent?: "brand" | "cyan" | "violet" | "amber" | "emerald" | "sky";
};

const ACCENTS: Record<NonNullable<ServiceDetailProps["accent"]>, { bg: string; text: string; ring: string; grad: string }> = {
  brand:   { bg: "bg-brand",             text: "text-brand",            ring: "ring-brand/40",            grad: "from-brand to-brand-glow" },
  cyan:    { bg: "bg-cyan-500",          text: "text-cyan-400",         ring: "ring-cyan-400/40",         grad: "from-cyan-400 to-sky-500" },
  violet:  { bg: "bg-violet-500",        text: "text-violet-400",       ring: "ring-violet-400/40",       grad: "from-violet-400 to-fuchsia-500" },
  amber:   { bg: "bg-amber-500",         text: "text-amber-400",        ring: "ring-amber-400/40",        grad: "from-amber-400 to-orange-500" },
  emerald: { bg: "bg-emerald-500",       text: "text-emerald-400",      ring: "ring-emerald-400/40",      grad: "from-emerald-400 to-teal-500" },
  sky:     { bg: "bg-sky-500",           text: "text-sky-400",          ring: "ring-sky-400/40",          grad: "from-sky-400 to-indigo-500" },
};

export function ServiceDetail(props: ServiceDetailProps) {
  const a = ACCENTS[props.accent ?? "brand"];
  const { Icon } = props;
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-ink text-ink-foreground overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className={`absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-25 bg-gradient-to-br ${a.grad}`} />
        <div className="container-x relative py-20 md:py-32">
          <Link to="/it-services" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">
            <ArrowRight className="w-3 h-3 rotate-180" /> IT-Services
          </Link>
          <div className="mt-8 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div>
              <div className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold ${a.text}`}>
                <Sparkles className="w-3.5 h-3.5" /> {props.eyebrow}
              </div>
              <h1 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95]">
                {props.title}<br />
                <span className={`bg-gradient-to-r ${a.grad} bg-clip-text text-transparent`}>{props.titleAccent}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">{props.lead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/kontakt" className={`inline-flex items-center gap-2 ${a.bg} text-white px-6 py-3 rounded-md font-semibold hover:translate-y-[-2px] transition-transform`}>
                  {props.cta} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/it-services" className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/5 px-6 py-3 rounded-md font-semibold transition-colors">
                  Alle Services
                </Link>
              </div>
            </div>
            <div className={`relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-8 ring-1 ${a.ring}`}>
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${a.grad} flex items-center justify-center shadow-2xl`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {props.heroStats.map((s) => (
                  <div key={s.label}>
                    <div className={`font-display text-2xl md:text-3xl font-black ${a.text}`}>{s.value}</div>
                    <div className="text-[11px] uppercase tracking-wider text-white/50 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className={`text-xs font-bold uppercase tracking-widest ${a.text}`}>Ihr Nutzen</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-black leading-tight">
              Konkrete Ergebnisse. <span className="text-muted-foreground">Keine Versprechen.</span>
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {props.benefits.map((b, i) => (
              <div key={b.title} className="group relative bg-card border border-border rounded-2xl p-6 hover-lift overflow-hidden">
                <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${a.grad} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity`} />
                <div className="relative">
                  <div className={`w-11 h-11 rounded-lg bg-ink text-ink-foreground flex items-center justify-center group-hover:${a.bg} transition-colors`}>
                    <b.icon className="w-5 h-5" />
                  </div>
                  <div className="mt-4 text-xs font-mono text-muted-foreground/60">0{i + 1}</div>
                  <h3 className="mt-1 font-display font-bold text-lg">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
        <div className="container-x relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className={`text-xs font-bold uppercase tracking-widest ${a.text}`}>Vorgehen</div>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-black leading-tight">
                Unser Prozess in {props.process.length} Schritten.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Transparent, strukturiert und mit klaren Meilensteinen — von der Analyse bis zum Betrieb.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            {props.process.map((p, i) => (
              <div key={p.title} className="relative">
                <div className={`w-12 h-12 rounded-full ${a.bg} text-white flex items-center justify-center font-display font-black text-lg shadow-lg`}>
                  {i + 1}
                </div>
                <h3 className="mt-5 font-display font-bold text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK + FAQ */}
      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-14">
          <div>
            <div className={`text-xs font-bold uppercase tracking-widest ${a.text}`}>Technologien</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-black leading-tight">
              Bewährte Tools. <br />Herstellerneutral.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Wir binden uns nicht an einen Anbieter — wir wählen die Lösung, die zu Ihrer Realität passt.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {props.stack.map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm">
                  <span className={`w-1.5 h-1.5 rounded-full ${a.bg}`} />
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className={`text-xs font-bold uppercase tracking-widest ${a.text}`}>FAQ</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-black leading-tight">Häufige Fragen.</h2>
            <div className="mt-8 divide-y divide-border border-y border-border">
              {props.faq.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 list-none">
                    <span className="font-display font-bold text-lg">{f.q}</span>
                    <span className={`shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center ${a.text} group-open:rotate-45 transition-transform`}>+</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-x">
          <div className="relative overflow-hidden bg-ink text-ink-foreground rounded-3xl p-10 md:p-16">
            <div className={`absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-30 bg-gradient-to-br ${a.grad}`} />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-black leading-tight">
                  Bereit für den nächsten Schritt?
                </h2>
                <p className="mt-4 text-white/70 max-w-md">
                  Kostenloses Erstgespräch. Unverbindliche Analyse. Klare Empfehlung — auch wenn wir nicht der richtige Partner sind.
                </p>
                <ul className="mt-6 space-y-2 text-sm">
                  {["Antwort innerhalb 24h", "Fixpreis-Angebote", "Schweizer Team"].map((x) => (
                    <li key={x} className="flex items-center gap-2 text-white/80"><Check className={`w-4 h-4 ${a.text}`} /> {x}</li>
                  ))}
                </ul>
              </div>
              <div className="md:justify-self-end">
                <Link to="/kontakt" className={`inline-flex items-center gap-2 ${a.bg} text-white px-7 py-4 rounded-md font-semibold shadow-2xl hover:translate-y-[-2px] transition-transform`}>
                  {props.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
