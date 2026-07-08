import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
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

function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const geschaeft = useCountUp(600, 1800, visible);
  const stunden = useCountUp(1000, 1800, visible);
  const privat = useCountUp(1000, 1800, visible);
  const jahre = useCountUp(35, 1400, visible);

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
  {
    icon: Zap,
    title: "Business Process Automation",
    desc: "Verwandeln Sie Ihre Geschäftsabläufe mit effizienter Automation und steigern Sie die Produktivität Ihres Unternehmens.",
  },
  {
    icon: Shield,
    title: "IT Cyber Security",
    desc: "Umfassender Schutz Ihrer Systeme gegen aktuelle Bedrohungen — von Endpoint bis Cloud.",
  },
  {
    icon: Cpu,
    title: "Infrastruktur-Analyse",
    desc: "Wir schaffen Übersicht in gewachsener IT und dokumentieren Ihre Systeme lückenlos.",
  },
  {
    icon: Rocket,
    title: "Digitalisierungs-Strategie",
    desc: "Gemeinsam definieren wir Ihre digitale Roadmap für nachhaltiges Wachstum.",
  },
  {
    icon: Wrench,
    title: "IT-Roll-out",
    desc: "Hardware-Beschaffung, Installation und Rollout durch qualifiziertes Personal.",
  },
  {
    icon: Cloud,
    title: "IT-Umzug",
    desc: "Sicherer Ab- und Aufbau Ihrer IT-Systeme bei Standortwechseln.",
  },
];

const audiences = [
  {
    icon: Building2,
    label: "Geschäftskunden",
    title: "IT Support für Geschäftskunden",
    text: "Geben Sie Ihren Mitarbeitern Werkzeuge an die Hand, die Produktivität und Unternehmensbindung fördern. Cloud oder nicht Cloud — wir beraten Sie.",
  },
  {
    icon: Rocket,
    label: "StartUps",
    title: "IT Support für Neugründungen",
    text: "Innovatives Geschäftsmodell und richtig durchstarten? Entdecken Sie unsere Programme mit flexiblem Mitwachsen.",
  },
  {
    icon: HomeIcon,
    label: "Privatkunden",
    title: "Computerhilfe für Privatkunden",
    text: "Ihr Computer lässt sich nicht mehr starten und Sie brauchen jetzt professionelle Hilfe vor Ort? Wir beheben Probleme nach Dringlichkeit.",
  },
];

const testimonials = [
  { name: "Steiger Jürg", city: "Zug", text: "Sehr kompetente, schnelle und vertrauensvolle Bearbeitung und zuverlässiger Kontakt. Jederzeit wieder — empfehle ich uneingeschränkt weiter, danke!" },
  { name: "Kohler Petra", city: "Luzern", text: "Kompetente und unkomplizierte Hilfe! Sehr sympathischer und hilfsbereiter Mensch, der mein MacBook Pro repariert hat. Sehr empfehlenswert!" },
  { name: "Sigurdardottir Vilborg", city: "Zürich", text: "Hat das Grafik-Chip Problem meines MacBook Pro sehr schnell gelöst. Kommunikation problemlos, detailliert und sehr freundlich. Sehr zufrieden." },
  { name: "Jacobs Hanne", city: "Bern", text: "Sehr zuverlässig und persönlich. Hat mein MacBook schnell repariert und stand mir auch danach für Fragen zur Verfügung. Klasse!" },
];

const brands = ["PwC", "Unilever", "Audi", "Vinosol", "Adesso", "Microsoft", "Synology", "3CX"];

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

        <div className="container-x relative pt-24 pb-32 lg:pt-32 lg:pb-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-brand-glow" />
              Ihr IT-Zukunftspartner seit 1989
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight animate-fade-in">
              KMU Informatik <br />
              Support:{" "}
              <span className="text-gradient-brand">Wir bieten Lösungen.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
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

        {/* Audience cards floating over hero base */}
        <div className="container-x relative -mb-24 pb-8">
          <div className="grid md:grid-cols-3 gap-4">
            {audiences.map((a, i) => (
              <div
                key={a.label}
                className="group relative bg-background text-foreground rounded-xl p-6 border border-border hover-lift"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-11 h-11 rounded-md bg-brand/10 text-brand flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                  <a.icon className="w-5 h-5" />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-brand font-bold">{a.label}</div>
                <h3 className="mt-1 font-display text-xl font-bold">{a.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.text}</p>
                <Link
                  to="/it-services"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:gap-2 transition-all"
                >
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-24" />

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

      {/* PROJECTS / CLOUD */}
      <section className="py-24 bg-muted/40">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src={cloudImg}
              alt="Cloud Netzwerk"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-2xl shadow-2xl w-full h-auto animate-float"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-brand font-bold text-xs uppercase tracking-widest">Aktuelle Projekte</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black leading-tight">
              Vertrauen von Marktführern.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Von 3CX Telefonanlagen für PwC über Überwachungskameras bei Premium Automobiles bis
              zur Synology Surveillance Station bei Unilever — wir realisieren komplexe Projekte
              termingerecht.
            </p>
            <div className="mt-8 space-y-3">
              {[
                { c: "PwC", p: "3CX Telefonanlage" },
                { c: "Premium Automobiles", p: "Überwachungskamera" },
                { c: "Unilever", p: "Synology Surveillance Station" },
              ].map((x) => (
                <div key={x.c} className="flex items-center justify-between p-4 bg-background border border-border rounded-lg hover:border-brand transition-colors">
                  <div>
                    <div className="font-bold">{x.c}</div>
                    <div className="text-xs text-muted-foreground">{x.p}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      {/* CYBER SECURITY highlight */}
      <section className="py-24">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-brand font-bold text-xs uppercase tracking-widest">Cyber Security</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black leading-tight">
              Schützen Sie was <span className="text-gradient-brand">wirklich zählt.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Im April 2011 belief sich der Folgeschaden des Raubes von 77 Millionen Nutzerkonten
              beim Elektronikkonzern Sony auf mehrere Milliarden Euro. Wir sorgen dafür, dass Ihre
              Daten sicher bleiben.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Endpoint Protection & EDR",
                "Firewall & Netzwerk-Segmentierung",
                "Backup & Disaster Recovery",
                "Mitarbeiter-Schulungen & Awareness",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={cyberImg}
            alt="Cyber Security"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-2xl shadow-2xl w-full h-auto"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-ink text-ink-foreground relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-brand-glow font-bold text-xs uppercase tracking-widest">Kundenfeedbacks</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">
              Was unsere Kunden sagen.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-xl p-7 backdrop-blur hover:border-brand transition-colors">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                  ))}
                </div>
                <p className="text-white/85 leading-relaxed">"{t.text}"</p>
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand text-brand-foreground flex items-center justify-center font-bold">
                    {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-white/60">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
