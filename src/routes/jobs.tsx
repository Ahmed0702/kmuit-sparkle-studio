import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Clock, Briefcase, Coffee, Heart, GraduationCap, Rocket } from "lucide-react";
import teamImg from "@/assets/team.jpg";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "Jobs & Karriere — KMU Informatik Support | Offene Stellen in der Schweiz" },
      { name: "description", content: "Werde Teil unseres Teams: System Engineer, IT Support Techniker, Cloud Architect. Standorte Zug, Luzern, Zürich, Bern." },
      { property: "og:title", content: "Jobs & Karriere — KMU Informatik Support" },
      { property: "og:description", content: "Offene Stellen bei KMUIT — gestalten Sie mit uns die digitale Zukunft der Schweiz." },
    ],
  }),
  component: JobsPage,
});

const jobs = [
  { title: "System Engineer (m/w/d)", location: "Zug", type: "100%", team: "Managed Services" },
  { title: "IT Support Techniker (m/w/d)", location: "Luzern", type: "80–100%", team: "Service Desk" },
  { title: "Cloud Architect Azure/M365", location: "Zürich", type: "100%", team: "Cloud" },
  { title: "Cybersecurity Analyst", location: "Bern", type: "100%", team: "Security" },
  { title: "Lernende Informatiker EFZ", location: "Zug", type: "Ausbildung", team: "Alle Teams" },
  { title: "Projektleiter IT-Infrastruktur", location: "Zug / remote", type: "100%", team: "Projects" },
];

const perks = [
  { icon: Coffee, title: "Flexible Arbeit", desc: "Hybrides Modell — Büro, Kundenstandort oder Home Office." },
  { icon: GraduationCap, title: "Zertifizierungen", desc: "Wir bezahlen Ihre Microsoft-, Fortinet- und AWS-Zertifikate." },
  { icon: Heart, title: "Persönliche Kultur", desc: "Flache Hierarchien, direkte Kommunikation, echter Zusammenhalt." },
  { icon: Rocket, title: "Verantwortung", desc: "Sie treffen Entscheidungen — vom ersten Tag an." },
];

function JobsPage() {
  return (
    <div>
      <section className="relative bg-ink text-ink-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-brand-glow text-xs font-bold uppercase tracking-widest">Karriere</div>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-black leading-[0.95]">
              Bauen Sie mit an der <span className="text-gradient-brand">digitalen Schweiz.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75">
              Wir sind seit 1989 dabei — und suchen laufend Menschen, die Technologie lieben und
              Kunden begeistern wollen.
            </p>
          </div>
          <img src={teamImg} width={1400} height={900} loading="lazy" alt="Team" className="rounded-2xl shadow-2xl" />
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="mb-10">
            <div className="text-brand font-bold text-xs uppercase tracking-widest">Offene Stellen</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">
              Aktuell ausgeschriebene Positionen.
            </h2>
          </div>
          <div className="border border-border rounded-2xl overflow-hidden divide-y divide-border">
            {jobs.map((j) => (
              <Link
                to="/kontakt"
                key={j.title}
                className="group flex flex-col md:flex-row md:items-center gap-4 p-6 md:p-7 hover:bg-muted/40 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest font-bold">
                    <Briefcase className="w-3.5 h-3.5" /> {j.team}
                  </div>
                  <div className="mt-1 font-display text-xl md:text-2xl font-bold group-hover:text-brand transition-colors">
                    {j.title}
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{j.location}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{j.type}</span>
                </div>
                <div className="w-10 h-10 rounded-md bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-brand-foreground group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-brand font-bold text-xs uppercase tracking-widest">Warum KMUIT</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">
              Was Sie bei uns <span className="text-gradient-brand">erwartet.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((p) => (
              <div key={p.title} className="bg-background border border-border rounded-xl p-6 hover-lift">
                <div className="w-11 h-11 rounded-md bg-ink text-ink-foreground flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5" />
                </div>
                <div className="font-bold text-lg">{p.title}</div>
                <div className="text-sm text-muted-foreground mt-2">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="relative overflow-hidden bg-ink text-ink-foreground rounded-3xl p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-hero opacity-70" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display text-3xl md:text-5xl font-black">
                Keine passende Stelle? <span className="text-gradient-brand">Bewerben Sie sich initiativ.</span>
              </h2>
              <p className="mt-4 text-white/70">
                Talent findet bei uns immer einen Platz — schreiben Sie uns.
              </p>
              <Link to="/kontakt" className="mt-8 inline-flex items-center gap-2 bg-brand text-brand-foreground px-7 py-4 rounded-md font-semibold shadow-brand hover:translate-y-[-2px] transition-transform">
                Initiativbewerbung <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
