import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Shield,
  Cpu,
  Rocket,
  Wrench,
  Users,
  CheckCircle2,
  Star,
  Zap,
  Building2,
  Home as HomeIcon,
  Sparkles,
  Phone,
  Lock,
  ShieldCheck,
  Radar,
  Activity,
  Quote,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
} from "lucide-react";
import heroImg from "@/assets/hero-serverroom.jpg";
import itSupport from "@/assets/it-support.jpg";
import cloudImg from "@/assets/cloud-network.jpg";
import cyberImg from "@/assets/cybersecurity.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function useCountUp(target: number, duration = 1600, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

function useInView<T extends Element>(threshold = 0.3) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function StatsSection() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const geschaeft = useCountUp(600, 1800, inView);
  const stunden = useCountUp(1000, 1800, inView);
  const privat = useCountUp(1000, 1800, inView);
  const jahre = useCountUp(35, 1400, inView);

  const stats = [
    { v: `${geschaeft}+`, l: "Geschäftskunden weltweit" },
    { v: `${stunden}h`, l: "OnSite Support monatlich" },
    { v: `${privat}+`, l: "Betreute Privatkunden" },
    { v: `${jahre}+`, l: "Jahre Erfahrung" },
  ];

  return (
    <section ref={ref} className="bg-ink text-ink-foreground py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg animate-grid-pulse opacity-40" />
      <div className="container-x relative grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display text-5xl md:text-6xl font-black text-gradient-brand">
              {s.v}
            </div>
            <div className="mt-2 text-sm uppercase tracking-wider text-white/60">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const services = [
  { icon: Zap, title: "Business Process Automation", desc: "Verwandeln Sie Ihre Geschäftsabläufe mit effizienter Automation und steigern Sie die Produktivität Ihres Unternehmens." },
  { icon: Shield, title: "IT Cyber Security", desc: "Umfassender Schutz Ihrer Systeme gegen aktuelle Bedrohungen — von Endpoint bis Cloud." },
  { icon: Cpu, title: "Infrastruktur-Analyse", desc: "Wir schaffen Übersicht in gewachsener IT und dokumentieren Ihre Systeme lückenlos." },
  { icon: Rocket, title: "Digitalisierungs-Strategie", desc: "Gemeinsam definieren wir Ihre digitale Roadmap für nachhaltiges Wachstum." },
  { icon: Wrench, title: "IT-Roll-out", desc: "Hardware-Beschaffung, Installation und Rollout durch qualifiziertes Personal." },
  { icon: Cloud, title: "IT-Umzug", desc: "Sicherer Ab- und Aufbau Ihrer IT-Systeme bei Standortwechseln." },
];

const audiences = [
  {
    icon: Building2,
    label: "Geschäftskunden",
    title: "IT Support für Geschäftskunden",
    text: "Werkzeuge, die Produktivität und Unternehmensbindung fördern. Cloud oder nicht Cloud — wir beraten Sie.",
    features: ["Managed Cloud", "24/7 Helpdesk", "SLA-basiert"],
  },
  {
    icon: Rocket,
    label: "StartUps",
    title: "IT Support für Neugründungen",
    text: "Innovatives Geschäftsmodell und richtig durchstarten? Programme mit flexiblem Mitwachsen.",
    features: ["Skalierbar", "Fair-Preis", "Fast-Setup"],
  },
  {
    icon: HomeIcon,
    label: "Privatkunden",
    title: "Computerhilfe für Privatkunden",
    text: "Ihr Computer lässt sich nicht mehr starten? Wir beheben Probleme vor Ort nach Dringlichkeit.",
    features: ["Vor-Ort", "Same-Day", "Mac & PC"],
  },
];

const projects = [
  {
    client: "PwC",
    project: "3CX Telefonanlage",
    industry: "Beratung",
    metric: "500+ Endgeräte",
    color: "from-brand/30 to-transparent",
    highlights: ["VoIP Migration", "Zero-Downtime Rollout", "Multi-Location Setup"],
    desc: "Unternehmensweite Umstellung auf 3CX mit nahtloser Integration in bestehende CRM-Systeme und Mobile-First Ausrichtung.",
  },
  {
    client: "Premium Automobiles",
    project: "Überwachungskamera",
    industry: "Automotive",
    metric: "24 IP-Kameras",
    color: "from-blue-500/20 to-transparent",
    highlights: ["4K IP-Kameras", "KI-Bewegungserkennung", "Remote Access"],
    desc: "Komplette Videoüberwachungslösung mit intelligenter Analyse und zentraler Management-Konsole für Showroom und Werkstatt.",
  },
  {
    client: "Unilever",
    project: "Synology Surveillance Station",
    industry: "FMCG",
    metric: "12 Standorte",
    color: "from-emerald-500/20 to-transparent",
    highlights: ["Enterprise NAS", "RAID-6 Redundanz", "48h Retention"],
    desc: "Multi-Site Surveillance mit zentralisiertem Storage, verschlüsselter Datenübertragung und automatisiertem Backup-Konzept.",
  },
];

const testimonials = [
  { name: "Steiger Jürg", city: "Zug", role: "Geschäftsführer", text: "Sehr kompetente, schnelle und vertrauensvolle Bearbeitung und zuverlässiger Kontakt. Jederzeit wieder — empfehle ich uneingeschränkt weiter, danke!" },
  { name: "Kohler Petra", city: "Luzern", role: "Designerin", text: "Kompetente und unkomplizierte Hilfe! Sehr sympathischer und hilfsbereiter Mensch, der mein MacBook Pro repariert hat. Sehr empfehlenswert!" },
  { name: "Sigurdardottir Vilborg", city: "Zürich", role: "Fotografin", text: "Hat das Grafik-Chip Problem meines MacBook Pro sehr schnell gelöst. Kommunikation problemlos, detailliert und sehr freundlich. Sehr zufrieden." },
  { name: "Jacobs Hanne", city: "Bern", role: "Beraterin", text: "Sehr zuverlässig und persönlich. Hat mein MacBook schnell repariert und stand mir auch danach für Fragen zur Verfügung. Klasse!" },
];

const brands = ["PwC", "Unilever", "Audi", "Vinosol", "Adesso", "Microsoft", "Synology", "3CX"];

/* -------------------- SECTION 1: PROJECTS -------------------- */
function ProjectsShowcase() {
  const [active, setActive] = useState(0);
  const p = projects[active];

  return (
    <section className="py-24 bg-muted/40 relative overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-40" />
      <div className="container-x relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-widest">
              <span className="w-8 h-px bg-brand" /> Aktuelle Projekte
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black leading-tight max-w-2xl">
              Vertrauen von <span className="text-gradient-brand">Marktführern</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Komplexe Projekte, termingerecht realisiert — von 3CX Telefonanlagen bis
            Enterprise Videoüberwachung.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Client list — vertical tabs */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {projects.map((pr, i) => {
              const isActive = i === active;
              return (
                <button
                  key={pr.client}
                  onClick={() => setActive(i)}
                  className={`group text-left rounded-2xl border p-5 transition-all duration-300 ${
                    isActive
                      ? "bg-ink text-ink-foreground border-ink shadow-elegant"
                      : "bg-background border-border hover:border-brand hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? "text-brand-glow" : "text-brand"}`}>
                      0{i + 1} · {pr.industry}
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform ${isActive ? "text-brand-glow rotate-0" : "text-muted-foreground group-hover:rotate-45"}`}
                    />
                  </div>
                  <div className="mt-3 font-display text-xl font-bold">{pr.client}</div>
                  <div className={`text-sm mt-1 ${isActive ? "text-white/60" : "text-muted-foreground"}`}>
                    {pr.project}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div key={active} className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-border bg-background animate-fade-in">
            <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-70`} />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative p-6 sm:p-8 md:p-12 min-h-[420px] flex flex-col">
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand">
                    Case Study — {p.industry}
                  </div>
                  <div className="mt-2 font-display text-3xl md:text-4xl font-black">
                    {p.client}
                  </div>
                  <div className="mt-1 text-muted-foreground text-lg">{p.project}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Umfang</div>
                  <div className="font-display text-2xl font-black text-gradient-brand">{p.metric}</div>
                </div>
              </div>

              <p className="mt-8 text-muted-foreground text-base leading-relaxed max-w-2xl">
                {p.desc}
              </p>

              <div className="mt-auto pt-10 grid sm:grid-cols-3 gap-3">
                {p.highlights.map((h) => (
                  <div key={h} className="rounded-xl bg-background/80 backdrop-blur border border-border p-4">
                    <CheckCircle2 className="w-4 h-4 text-brand mb-2" />
                    <div className="text-sm font-semibold">{h}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  to="/partner"
                  className="inline-flex items-center gap-2 bg-ink text-ink-foreground px-5 py-3 rounded-md text-sm font-semibold hover:bg-brand transition-colors"
                >
                  Ähnliches Projekt starten <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ticker" />
                  Referenz verifiziert
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SECTION 2: CYBER SECURITY -------------------- */
function CyberSecuritySection() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const threats = useCountUp(2847, 2000, inView);
  const uptime = useCountUp(999, 1600, inView);

  const pillars = [
    { icon: ShieldCheck, title: "Endpoint Protection & EDR", desc: "Next-Gen Antivirus mit KI-basierter Bedrohungserkennung" },
    { icon: Radar, title: "Firewall & Segmentierung", desc: "Zero-Trust Architektur mit Micro-Segmentation" },
    { icon: Cloud, title: "Backup & Disaster Recovery", desc: "3-2-1 Strategie mit air-gapped Immutable Backups" },
    { icon: Users, title: "Awareness Trainings", desc: "Phishing-Simulationen & regelmässige Mitarbeiter-Schulungen" },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30" />
      <div className="container-x relative grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-brand/10 text-brand rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest">
            <Lock className="w-3.5 h-3.5" /> Cyber Security
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-black leading-tight">
            Schützen Sie was <span className="text-gradient-brand">wirklich zählt.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            Alle 39 Sekunden ein Cyberangriff — der Folgeschaden eines Datenlecks beträgt im Schnitt
            4,45 Millionen USD. Unsere mehrschichtige Verteidigung sichert Ihre Kronjuwelen.
          </p>

          {/* Live threat counter */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-background p-5 relative overflow-hidden">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-ticker" />
                Live · heute blockiert
              </div>
              <div className="mt-2 font-display text-3xl md:text-4xl font-black text-gradient-brand tabular-nums">
                {threats.toLocaleString("de-CH")}
              </div>
              <div className="text-xs text-muted-foreground mt-1">Bedrohungen abgewehrt</div>
              <Activity className="absolute -right-2 -bottom-2 w-16 h-16 text-brand/10" />
            </div>
            <div className="rounded-2xl border border-border bg-background p-5 relative overflow-hidden">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ticker" />
                SLA · letzte 12 Monate
              </div>
              <div className="mt-2 font-display text-3xl md:text-4xl font-black text-gradient-brand tabular-nums">
                {(uptime / 10).toFixed(1)}%
              </div>
              <div className="text-xs text-muted-foreground mt-1">Uptime Garantie</div>
              <ShieldCheck className="absolute -right-2 -bottom-2 w-16 h-16 text-brand/10" />
            </div>
          </div>

          {/* Pillars */}
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {pillars.map((p) => (
              <div key={p.title} className="group flex gap-3 p-3 rounded-xl hover:bg-muted/60 transition-colors">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-ink text-ink-foreground flex items-center justify-center group-hover:bg-brand transition-colors">
                  <p.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{p.title}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/it-services"
              className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-6 py-3 rounded-md text-sm font-semibold shadow-brand hover:translate-y-[-2px] transition-transform"
            >
              Security Audit anfordern <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/it-services"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md text-sm font-semibold hover:border-brand transition-colors"
            >
              Whitepaper laden
            </Link>
          </div>
        </div>

        {/* RIGHT: image with HUD overlay */}
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-brand/25 via-brand/5 to-transparent blur-3xl rounded-[3rem]" />
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant bg-ink">
            <img
              src={cyberImg}
              alt="Cyber Security"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full h-auto object-cover opacity-80"
            />
            {/* Scan line */}
            <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-brand/40 via-brand/10 to-transparent pointer-events-none animate-scan" />
            {/* HUD */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

            {/* Top badge */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur border border-white/10 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ticker" />
                <span className="text-[10px] uppercase tracking-widest text-white font-semibold">System · secured</span>
              </div>
              <div className="text-[10px] font-mono text-white/60 bg-black/60 backdrop-blur border border-white/10 rounded-full px-3 py-1.5">
                ISO 27001 · GDPR
              </div>
            </div>

            {/* Bottom stat card */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-brand/20 border border-brand/40 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-brand-glow" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-white/60">Aktueller Threat-Level</div>
                <div className="text-sm font-bold text-white">Niedrig · alle Systeme grün</div>
              </div>
              <div className="flex gap-1">
                <span className="w-1.5 h-6 rounded-full bg-emerald-400" />
                <span className="w-1.5 h-6 rounded-full bg-emerald-400" />
                <span className="w-1.5 h-6 rounded-full bg-emerald-400/50" />
                <span className="w-1.5 h-6 rounded-full bg-white/10" />
                <span className="w-1.5 h-6 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SECTION 3: TESTIMONIALS CAROUSEL -------------------- */
function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 5500);
    return () => clearInterval(t);
  }, [paused, total]);

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);
  const t = testimonials[idx];

  return (
    <section className="py-16 md:py-24 bg-ink text-ink-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-brand/20 blur-3xl" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left header */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 text-brand-glow font-bold text-xs uppercase tracking-widest">
              <span className="w-8 h-px bg-brand-glow" /> Kundenfeedbacks
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black leading-tight">
              Was unsere <br />
              <span className="text-gradient-brand">Kunden sagen.</span>
            </h2>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-glow text-brand-glow" />
                ))}
              </div>
              <div className="text-sm text-white/70">
                <span className="font-bold text-white">4.9/5</span> · über 200 Bewertungen
              </div>
            </div>

            <div className="mt-10 hidden lg:flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Vorheriges Feedback"
                className="w-11 h-11 rounded-full border border-white/15 hover:bg-white/10 hover:border-brand transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Nächstes Feedback"
                className="w-11 h-11 rounded-full border border-white/15 hover:bg-white/10 hover:border-brand transition-colors flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="text-xs text-white/50 font-mono ml-3 tabular-nums">
                {String(idx + 1).padStart(2, "0")} <span className="text-white/30">/ {String(total).padStart(2, "0")}</span>
              </div>
            </div>
          </div>

          {/* Right featured card + stack */}
          <div
            className="lg:col-span-8 relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div key={idx} className="relative bg-white/[0.04] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur animate-fade-in">
              <Quote className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 md:w-16 md:h-16 text-brand/20" />

              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                ))}
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-display font-medium">
                "{t.text}"
              </p>

              <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand to-brand-glow text-brand-foreground flex items-center justify-center font-bold text-lg shadow-brand">
                    {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-xs text-white/60">{t.role} · {t.city}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <PlayCircle className="w-4 h-4 text-brand-glow" />
                  Verifizierter Kunde
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-8 h-0.5 bg-white/10 overflow-hidden rounded-full">
                <div
                  key={`${idx}-${paused}`}
                  className="h-full bg-gradient-to-r from-brand to-brand-glow"
                  style={{
                    animation: paused ? "none" : "shimmer 5.5s linear forwards",
                    backgroundSize: "100% 100%",
                    width: "100%",
                    transformOrigin: "left",
                    transform: paused ? "scaleX(0)" : undefined,
                    animationName: paused ? undefined : "grow",
                  }}
                />
              </div>
            </div>

            {/* Dots + mobile nav */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Feedback ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-brand" : "w-1.5 bg-white/25 hover:bg-white/50"}`}
                  />
                ))}
              </div>
              <div className="flex lg:hidden items-center gap-2">
                <button onClick={prev} className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={next} className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
    </section>
  );
}

/* -------------------- SECTION 4: HERO AUDIENCE CARDS -------------------- */
function AudienceCards() {
  return (
    <div className="container-x relative pb-8 md:-mb-24">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {audiences.map((a, i) => (
          <div
            key={a.label}
            className="group relative bg-background text-foreground rounded-2xl p-7 border border-border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant hover:border-brand"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* Corner gradient */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-brand/10 rounded-full blur-3xl group-hover:bg-brand/25 transition-colors duration-500" />
            {/* Number */}
            <div className="absolute top-6 right-6 font-display text-5xl font-black text-brand/10 group-hover:text-brand/30 transition-colors">
              0{i + 1}
            </div>

            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-ink text-ink-foreground flex items-center justify-center mb-5 group-hover:bg-brand group-hover:rotate-6 transition-all duration-500">
                <a.icon className="w-5 h-5" />
              </div>
              <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-brand font-bold">
                <span className="w-4 h-px bg-brand" />
                {a.label}
              </div>
              <h3 className="mt-2 font-display text-xl font-bold leading-tight">{a.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.text}</p>

              {/* Feature chips */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {a.features.map((f) => (
                  <span key={f} className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-md bg-muted text-muted-foreground group-hover:bg-brand/10 group-hover:text-brand transition-colors">
                    {f}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                <Link
                  to="/it-services"
                  className="inline-flex items-center gap-1 text-sm font-bold text-foreground group-hover:text-brand transition-colors"
                >
                  Mehr erfahren
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                </Link>
                <a
                  href="tel:+41582552717"
                  aria-label="Anrufen"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-brand hover:text-brand-foreground hover:border-brand transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------- PAGE -------------------- */
function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-ink-foreground">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />

        <div className="container-x relative pt-16 pb-16 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-brand-glow" />
              Ihr IT-Zukunftspartner seit 1989
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.02] md:leading-[0.95] tracking-tight animate-fade-in">
              KMU Informatik <br />
              Support:{" "}
              <span className="text-gradient-brand">Wir bieten Lösungen.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
              Mit der passenden Cloud-Lösung und IT-Infrastruktur bleiben Unternehmen wettbewerbsfähig
              und innovativ. Beratung, Implementierung und 24/7 Support aus einer Hand.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-2 bg-brand text-brand-foreground px-7 py-4 rounded-md text-base font-semibold shadow-brand hover:translate-y-[-2px] transition-transform"
              >
                Online-Terminbuchung
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/it-services"
                className="inline-flex items-center gap-2 border border-white/25 backdrop-blur px-7 py-4 rounded-md text-base font-semibold hover:bg-white/10 transition-colors"
              >
                Unsere IT Services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-glow" /> Zug • Luzern • Zürich • Bern</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-glow" /> 24/7 verfügbar</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-glow" /> Persönliche Betreuung</span>
            </div>
          </div>
        </div>

        <AudienceCards />
      </section>

      <div className="hidden md:block h-24" />

      {/* MISSION */}
      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-brand font-bold text-xs uppercase tracking-widest">Über uns</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black leading-tight">
              Ihr zuverlässiger <span className="text-gradient-brand">EDV Partner</span> seit 1989.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Organisationen suchen ständig nach neuen Wegen, um Business-Prozesse, Flexibilität,
              Sicherheit und Produktivität zu verbessern. KMU Informatik Support unterstützt Sie als
              Trusted Advisor bei diesen täglichen Herausforderungen.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Von der Beratung und Umsetzung grosser Projekte bis hin zur Konfiguration einzelner
              PCs — wir kombinieren Dienstleistungen und Expertenwissen für Ihre spezifischen
              IT-Anforderungen.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Beratung", "Roll-Out", "Wartung", "24/7 Support"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-brand" />
                  {f}
                </div>
              ))}
            </div>
            <Link
              to="/it-services"
              className="mt-8 inline-flex items-center gap-2 bg-ink text-ink-foreground px-6 py-3 rounded-md font-semibold hover:bg-brand transition-colors"
            >
              Unsere IT Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand/20 to-transparent blur-2xl rounded-3xl" />
            <img
              src={itSupport}
              alt="IT Techniker bei der Arbeit"
              width={1400}
              height={900}
              loading="lazy"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl shadow-elegant p-4 flex items-center gap-3 max-w-[240px]">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-brand" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Projektleiter</div>
                <div className="font-bold text-sm">Thiru Siva</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* SERVICES */}
      <section className="py-24">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-brand font-bold text-xs uppercase tracking-widest">Services</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-black leading-tight max-w-2xl">
                IT Support Dienstleistungen — <span className="text-gradient-brand">als Paket.</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Einzelne Leistungen unseres Service Portfolios zum Festpreis und mit fest definiertem
              Umfang.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative bg-card border border-border rounded-xl p-7 hover-lift overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl group-hover:bg-brand/15 transition-colors" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-ink text-ink-foreground flex items-center justify-center mb-5 group-hover:bg-brand group-hover:rotate-6 transition-all">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-muted-foreground">0{i + 1}</div>
                  <h3 className="mt-1 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-5 h-px bg-border" />
                  <Link
                    to="/it-services"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-brand hover:gap-2 transition-all"
                  >
                    Mehr Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud reference visual (kept above projects for continuity) */}
      <section className="py-16">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={cloudImg}
              alt="Cloud Netzwerk"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-2xl shadow-2xl w-full h-auto animate-float"
            />
          </div>
          <div>
            <div className="text-brand font-bold text-xs uppercase tracking-widest">Cloud & Infrastruktur</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black leading-tight">
              Skalierbare Systeme — bereit für morgen.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Von der hybriden Cloud-Migration bis zum vollständig verwalteten Rechenzentrum:
              wir bauen Infrastrukturen, die mit Ihrem Business mitwachsen — sicher, performant, kosteneffizient.
            </p>
          </div>
        </div>
      </section>

      <ProjectsShowcase />

      {/* MARQUEE BRANDS */}
      <section className="py-14 bg-ink text-ink-foreground overflow-hidden border-y border-white/5">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...brands, ...brands, ...brands].map((b, i) => (
            <span key={i} className="font-display text-3xl md:text-4xl font-bold text-white/40 hover:text-brand transition-colors">
              {b}
            </span>
          ))}
        </div>
      </section>

      <CyberSecuritySection />

      <TestimonialsSection />

      {/* CTA */}
      <section className="py-24">
        <div className="container-x">
          <div className="relative overflow-hidden bg-ink text-ink-foreground rounded-3xl p-12 md:p-20">
            <div className="absolute inset-0 bg-hero opacity-70" />
            <div className="relative max-w-3xl">
              <h2 className="font-display text-4xl md:text-6xl font-black leading-tight">
                Wir helfen Ihnen bei sämtlichen <span className="text-gradient-brand">IT-Problemen.</span>
              </h2>
              <p className="mt-6 text-lg text-white/75 leading-relaxed">
                Wir erstellen individuelle Lösungen für Ihr Büro oder Zuhause und helfen Ihnen, die
                Geräte einzusetzen, die optimal mit Ihrer bestehenden EDV-Infrastruktur
                funktionieren.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-7 py-4 rounded-md font-semibold shadow-brand hover:translate-y-[-2px] transition-transform"
                >
                  Rückruf anfordern <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+41582552717"
                  className="inline-flex items-center gap-2 border border-white/25 backdrop-blur px-7 py-4 rounded-md font-semibold hover:bg-white/10"
                >
                  058 255 27 17
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
