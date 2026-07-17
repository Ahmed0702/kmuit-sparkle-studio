import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Zap, Shield, Cpu, Rocket, Wrench, Cloud, Server, Database, Network, Users, Headphones,
} from "lucide-react";
import cloudImg from "@/assets/cloud-network.jpg";

export const Route = createFileRoute("/it-services/")({
  head: () => ({
    meta: [
      { title: "IT-Services — KMU Informatik Support | Cloud, Cybersecurity, Managed Services" },
      { name: "description", content: "Umfassende IT-Services: Business Process Automation, Cyber Security, Infrastruktur-Analyse, Digitalisierung, IT-Roll-out und IT-Umzug für KMU in der Schweiz." },
      { property: "og:title", content: "IT-Services — KMU Informatik Support" },
      { property: "og:description", content: "Ihr Full-Service IT-Partner: Cloud, Security, Automation, Support." },
    ],
  }),
  component: ServicesPage,
});

const bigServices = [
  { to: "/it-services/business-process-automation", icon: Zap, title: "Business Process Automation", desc: "Verwandeln Sie Ihre Geschäftsabläufe mit effizienter Automation und steigern Sie die Produktivität Ihres Unternehmens.", features: ["Workflow Automation", "RPA & KI Integration", "ERP Anbindung", "Reporting & KPIs"] },
  { to: "/it-services/cyber-security", icon: Shield, title: "IT Cyber Security", desc: "Umfassender Schutz Ihrer Systeme gegen aktuelle Bedrohungen — Endpoint, Netzwerk, Cloud und Awareness.", features: ["Endpoint Protection", "Firewall & VPN", "Backup & DR", "Awareness Trainings"] },
  { to: "/it-services/infrastruktur-analyse", icon: Cpu, title: "Infrastruktur-Analyse", desc: "Wir schaffen Übersicht in gewachsener IT und dokumentieren Ihre Systeme lückenlos für zukünftige Entscheidungen.", features: ["Bestandsaufnahme", "Dokumentation", "Schwachstellen-Analyse", "Handlungsempfehlungen"] },
  { to: "/it-services/digitalisierungs-strategie", icon: Rocket, title: "Digitalisierungs-Strategie", desc: "Gemeinsam definieren wir Ihre digitale Roadmap für nachhaltiges Wachstum und Wettbewerbsfähigkeit.", features: ["Ist/Soll Analyse", "Roadmap Definition", "Change Management", "Umsetzungsbegleitung"] },
  { to: "/it-services/it-roll-out", icon: Wrench, title: "IT-Roll-out", desc: "Hardware-Beschaffung, Installation und Rollout durch qualifiziertes Personal, ausreichend Arbeitskräfte und Logistik.", features: ["Hardware Beschaffung", "Vor-Ort Installation", "User Enrollment", "Alt-Geräte Entsorgung"] },
  { to: "/it-services/it-umzug", icon: Cloud, title: "IT-Umzug", desc: "Sicherer Ab- und Aufbau Ihrer IT-Systeme bei Standortwechseln — für Büros und Privatkunden.", features: ["Planung & Koordination", "Server Verlagerung", "Netzwerk Neuaufbau", "Downtime Minimierung"] },
] as const;

const cloudFeatures = [
  { icon: Server, title: "Managed Servers", text: "Windows, Linux, Hyper-V & VMware — betreut rund um die Uhr." },
  { icon: Database, title: "Backup & Recovery", text: "Automatische Backups mit Georedundanz in der Schweiz." },
  { icon: Network, title: "Netzwerk & VPN", text: "Sichere Standortvernetzung und Zero-Trust Zugang." },
  { icon: Headphones, title: "Service Desk", text: "Erreichbar per Ticket, Telefon und Chat — 24/7 auf Wunsch." },
];

function ServicesPage() {
  return (
    <div>
      <section className="relative bg-ink text-ink-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className="container-x relative">
          <div className="text-brand-glow text-xs font-bold uppercase tracking-widest">IT-Services</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-black leading-[0.95]">
            Umfassende IT-Betreuung <br />
            <span className="text-gradient-brand">von Beratung bis Wartung.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Auf Wunsch stehen unsere Spezialisten 24/7 im IT-Support für Sie bereit. Von der
            Beratung über das Roll-Out bis hin zur Wartung Ihrer IT.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-6">
            {bigServices.map((s, i) => (
              <div key={s.title} className="group relative bg-card border border-border rounded-2xl p-8 hover-lift">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-ink text-ink-foreground flex items-center justify-center group-hover:bg-brand group-hover:rotate-6 transition-all">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div className="font-display font-black text-4xl text-muted-foreground/20">0{i + 1}</div>
                </div>
                <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/kontakt" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all">
                  Angebot anfragen <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-brand font-bold text-xs uppercase tracking-widest">Cloud & Managed Services</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black leading-tight">
              Cloud oder nicht Cloud? <br />
              <span className="text-gradient-brand">Wir beraten neutral.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Mit der passenden Cloud-Lösung und IT-Infrastruktur bleiben Unternehmen wettbewerbsfähig
              und innovativ. Wir empfehlen was passt — nicht was gerade Trend ist.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {cloudFeatures.map((f) => (
                <div key={f.title} className="bg-background border border-border rounded-lg p-5 hover-lift">
                  <div className="w-10 h-10 rounded-md bg-brand/10 text-brand flex items-center justify-center mb-3">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div className="font-bold">{f.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{f.text}</div>
                </div>
              ))}
            </div>
          </div>
          <img src={cloudImg} width={1200} height={900} loading="lazy" alt="Cloud" className="rounded-2xl shadow-2xl" />
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="relative overflow-hidden bg-ink text-ink-foreground rounded-3xl p-12 md:p-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="absolute inset-0 bg-hero opacity-70" />
            <div className="relative">
              <Users className="w-10 h-10 text-brand-glow mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-black">
                Persönliche Beratung — kostenlos und unverbindlich.
              </h2>
            </div>
            <div className="relative flex md:justify-end">
              <Link to="/kontakt" className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-7 py-4 rounded-md font-semibold shadow-brand hover:translate-y-[-2px] transition-transform">
                Gespräch vereinbaren <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
