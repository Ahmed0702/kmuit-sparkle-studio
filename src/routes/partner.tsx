import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Handshake, Award, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner — KMU Informatik Support | Technologie-Partner & Referenzen" },
      { name: "description", content: "Unsere zertifizierten Technologie-Partner: Microsoft, Synology, 3CX, VMware und mehr. Referenzen von PwC, Unilever, Audi." },
      { property: "og:title", content: "Partner — KMU Informatik Support" },
      { property: "og:description", content: "Zertifizierte Partnerschaften und Referenzprojekte in der Schweiz." },
    ],
  }),
  component: PartnerPage,
});

const partners = [
  { name: "Microsoft", tier: "Gold Partner", desc: "Microsoft 365, Azure Cloud, Windows Server und Modern Workplace." },
  { name: "Synology", tier: "Solution Partner", desc: "NAS, Surveillance Station und Backup-Lösungen für KMU." },
  { name: "3CX", tier: "Advanced Certified Partner", desc: "Moderne Telefonanlagen — On-Premise oder in der Cloud." },
  { name: "VMware", tier: "Professional Partner", desc: "Virtualisierung und hyperkonvergente Infrastrukturen." },
  { name: "Fortinet", tier: "Select Partner", desc: "Next-Gen Firewalls, SD-WAN und Zero Trust Network Access." },
  { name: "Veeam", tier: "Silver ProPartner", desc: "Backup, Replication und Cloud Disaster Recovery." },
  { name: "Ubiquiti", tier: "Enterprise Wireless", desc: "Professionelles WLAN und Netzwerk-Infrastruktur." },
  { name: "HP / Lenovo", tier: "Business Partner", desc: "Workstations, Server und Managed Print Services." },
];

const references = [
  { c: "PwC", p: "3CX Telefonanlage — Einführung an mehreren Standorten." },
  { c: "Premium Automobiles", p: "Überwachungskamera-System mit zentralem Management." },
  { c: "Unilever", p: "Synology Surveillance Station & Business File Server." },
  { c: "Vinosol", p: "Komplette IT-Betreuung inkl. E-Commerce." },
];

function PartnerPage() {
  return (
    <div>
      <section className="relative bg-ink text-ink-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className="container-x relative">
          <div className="text-brand-glow text-xs font-bold uppercase tracking-widest">Partner</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-black leading-[0.95]">
            Zusammen mit den <span className="text-gradient-brand">Besten der Branche.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Wir arbeiten mit zertifizierten Technologie-Partnern zusammen, um Ihnen die
            zuverlässigsten und modernsten IT-Lösungen zu liefern.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {partners.map((p) => (
              <div key={p.name} className="group bg-card border border-border rounded-xl p-6 hover-lift">
                <div className="h-14 flex items-center">
                  <div className="font-display text-2xl font-black tracking-tight">{p.name}</div>
                </div>
                <div className="inline-block mt-2 px-2.5 py-1 bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-wider rounded">
                  {p.tier}
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-brand font-bold text-xs uppercase tracking-widest">Referenzen</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">
              Vertrauen aus <span className="text-gradient-brand">der Praxis.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {references.map((r) => (
              <div key={r.c} className="bg-background border border-border rounded-xl p-7 hover-lift flex gap-5 items-start">
                <div className="w-12 h-12 rounded-md bg-ink text-ink-foreground flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold">{r.c}</div>
                  <p className="mt-1 text-muted-foreground">{r.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="relative overflow-hidden bg-ink text-ink-foreground rounded-3xl p-12 md:p-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="absolute inset-0 bg-hero opacity-70" />
            <div className="relative">
              <div className="flex gap-4 mb-4">
                <Handshake className="w-10 h-10 text-brand-glow" />
                <TrendingUp className="w-10 h-10 text-brand-glow" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black">
                Werden Sie unser Partner.
              </h2>
              <p className="mt-3 text-white/70">
                Sie sind Hersteller, Softwareanbieter oder Reseller? Sprechen wir über eine
                gemeinsame Zukunft.
              </p>
            </div>
            <div className="relative flex md:justify-end">
              <Link to="/kontakt" className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-7 py-4 rounded-md font-semibold shadow-brand hover:translate-y-[-2px] transition-transform">
                Partnerschaft anfragen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
