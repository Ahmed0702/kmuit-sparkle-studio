import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Stethoscope, Scale, Building, GraduationCap, Utensils, Factory, ShoppingBag, Hammer } from "lucide-react";

export const Route = createFileRoute("/branchenloesung")({
  head: () => ({
    meta: [
      { title: "Branchenlösungen — KMU Informatik Support | IT für Ihre Branche" },
      { name: "description", content: "Massgeschneiderte IT-Branchenlösungen für Ärzte, Anwälte, Treuhänder, Bildung, Gastronomie, Industrie, Retail und Baugewerbe in der Schweiz." },
      { property: "og:title", content: "Branchenlösungen — KMU Informatik Support" },
      { property: "og:description", content: "IT-Lösungen für Ihre Branche — von der Praxis bis zur Produktion." },
    ],
  }),
  component: BranchenPage,
});

const industries = [
  { icon: Stethoscope, name: "Gesundheitswesen", desc: "Datenschutzkonforme Praxis- und Klinik-IT. Elektronische Patientendossiers und HIN-konforme Kommunikation." },
  { icon: Scale, name: "Anwälte & Notare", desc: "Verschlüsselte Kommunikation, sichere Aktenverwaltung und normgerechte Archivierung nach GeBüV." },
  { icon: Building, name: "Treuhand & Finanzen", desc: "Abacus-, Bexio- und SAP-Integration mit Backup-Strategien für sensible Finanzdaten." },
  { icon: GraduationCap, name: "Bildung", desc: "Klassenraum-Management, Microsoft 365 Education und BYOD-Konzepte für Schulen und Weiterbildung." },
  { icon: Utensils, name: "Gastronomie & Hotellerie", desc: "Kassensysteme, PMS-Anbindung, Gäste-WiFi und digitale Speisekarten." },
  { icon: Factory, name: "Industrie & Produktion", desc: "OT/IT-Konvergenz, MES-Systeme und industrielle Netzwerksicherheit." },
  { icon: ShoppingBag, name: "Retail & E-Commerce", desc: "POS-Systeme, Shopware/Shopify-Anbindung und Omnichannel Fulfillment." },
  { icon: Hammer, name: "Bau & Handwerk", desc: "Mobile Zeiterfassung, Baustellen-WLAN und CAD/BIM-Umgebungen." },
];

function BranchenPage() {
  return (
    <div>
      <section className="relative bg-ink text-ink-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className="container-x relative">
          <div className="text-brand-glow text-xs font-bold uppercase tracking-widest">Branchenlösungen</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-black leading-[0.95] max-w-4xl">
            IT-Lösungen für <span className="text-gradient-brand">Ihre Branche.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Jede Branche hat ihre eigenen Regeln, Prozesse und Compliance-Anforderungen. Wir kennen
            sie und liefern passgenaue IT — von der Arztpraxis bis zur Fertigungshalle.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <div key={ind.name} className="group relative bg-card border border-border rounded-2xl p-6 hover-lift overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand/5 rounded-full blur-2xl group-hover:bg-brand/20 transition-colors" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-ink text-ink-foreground flex items-center justify-center mb-5 group-hover:bg-brand transition-colors">
                  <ind.icon className="w-5 h-5" />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                  0{i + 1} / 08
                </div>
                <h3 className="mt-1 font-display text-lg font-bold">{ind.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="container-x max-w-4xl text-center">
          <div className="text-brand font-bold text-xs uppercase tracking-widest">Ihre Branche fehlt?</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-black">
            Wir bauen Ihre Lösung <span className="text-gradient-brand">individuell auf.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Auch für Nischen und komplexe Setups finden wir den richtigen Weg. Sprechen wir darüber.
          </p>
          <Link to="/kontakt" className="mt-8 inline-flex items-center gap-2 bg-brand text-brand-foreground px-7 py-4 rounded-md font-semibold shadow-brand hover:translate-y-[-2px] transition-transform">
            Kostenloses Erstgespräch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
