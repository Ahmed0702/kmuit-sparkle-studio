import { createFileRoute } from "@tanstack/react-router";
import { Wrench, PackageCheck, Truck, Cog, UserCheck, Recycle, ClipboardList, Shield } from "lucide-react";
import { ServiceDetail } from "@/components/ServiceDetail";

export const Route = createFileRoute("/it-services/it-roll-out")({
  head: () => ({
    meta: [
      { title: "IT-Roll-out — KMU Informatik Support" },
      { name: "description", content: "Hardware-Beschaffung, Vor-Ort-Installation, User-Enrollment und Entsorgung — schweizweit, aus einer Hand." },
      { property: "og:title", content: "IT-Roll-out — KMUIT" },
      { property: "og:description", content: "Von der Bestellung bis zum ersten Login — wir liefern schlüsselfertig." },
    ],
  }),
  component: () => (
    <ServiceDetail
      accent="emerald"
      Icon={Wrench}
      eyebrow="IT-Roll-out"
      title="Schlüsselfertig,"
      titleAccent="pünktlich, schweizweit."
      lead="Ob 5 oder 500 Geräte — wir beschaffen, konfigurieren und rollen aus. Ihre Mitarbeitenden melden sich am ersten Tag an und arbeiten. Ohne Chaos, ohne Downtime, mit sauberer Doku."
      cta="Roll-out planen"
      heroStats={[
        { value: "500+", label: "Geräte / Monat" },
        { value: "0", label: "Downtime" },
        { value: "26", label: "Kantone" },
      ]}
      benefits={[
        { icon: PackageCheck, title: "Beschaffung", text: "Herstellerneutral, mit Rahmenverträgen und schneller Lieferung — auch bei Engpässen." },
        { icon: Cog, title: "Zero-Touch Provisioning", text: "Autopilot / Intune / JAMF: Geräte konfigurieren sich beim ersten Boot selbst." },
        { icon: UserCheck, title: "User-Enrollment", text: "Wir übernehmen Onboarding vor Ort oder remote, inklusive Kurzeinführung." },
        { icon: Recycle, title: "Entsorgung & Recycling", text: "Datenlöschung nach DoD-Standard, zertifizierte Entsorgung, Wiederverwertung wo möglich." },
      ]}
      process={[
        { title: "Planung", text: "Bestandsaufnahme, Anforderungen, Zeitplan und Logistik-Konzept." },
        { title: "Staging", text: "Geräte werden in unserem Lager konfiguriert, getestet und beschriftet." },
        { title: "Rollout", text: "Vor-Ort-Installation, Migration alter Daten, Test aller Peripheriegeräte." },
        { title: "Hypercare", text: "Verstärkter Support in den ersten 2 Wochen — persönlich vor Ort oder remote." },
      ]}
      stack={["Microsoft Intune", "Windows Autopilot", "JAMF", "Apple Business Manager", "Dell / HP / Lenovo", "Apple Authorized", "Ubiquiti", "Ricoh"]}
      faq={[
        { q: "Können wir Geräte über Sie beziehen?", a: "Ja — wir kaufen für Sie ein und liefern zu Marktpreisen inklusive Konfiguration." },
        { q: "Was ist mit alten Geräten?", a: "Wir übernehmen Rücknahme, zertifizierte Datenlöschung und Recycling — auf Wunsch mit Restwert-Erstattung." },
        { q: "Windows und Mac gemischt?", a: "Selbstverständlich. Wir betreuen heterogene Umgebungen inkl. Linux und Chromebooks." },
        { q: "Ab welcher Grösse lohnt sich das?", a: "Ab ~10 Geräten wird Zero-Touch spannend, für Einzelgeräte bieten wir Express-Setup an." },
      ]}
    />
  ),
});
