import { createFileRoute } from "@tanstack/react-router";
import { Shield, Lock, Eye, ShieldCheck, Bug, Fingerprint, ServerCog, GraduationCap } from "lucide-react";
import { ServiceDetail } from "@/components/ServiceDetail";

export const Route = createFileRoute("/it-services/cyber-security")({
  head: () => ({
    meta: [
      { title: "IT Cyber Security — KMU Informatik Support" },
      { name: "description", content: "Endpoint Protection, Firewall, Backup, Awareness Trainings und 24/7 Monitoring. Schutz für Schweizer KMU nach aktuellem Stand der Technik." },
      { property: "og:title", content: "Cyber Security — KMUIT" },
      { property: "og:description", content: "Schützen Sie was wirklich zählt — mit einem Partner, der bei einem Vorfall wirklich abhebt." },
    ],
  }),
  component: () => (
    <ServiceDetail
      accent="brand"
      Icon={Shield}
      eyebrow="IT Cyber Security"
      title="Schutz, der"
      titleAccent="nicht schläft."
      lead="Ransomware, Phishing, Zero-Days — Bedrohungen treffen KMU härter als je zuvor. Wir bauen mehrschichtige Verteidigung: Endpoint, Netzwerk, Cloud, Backup und Ihr wichtigster Faktor — die Menschen."
      cta="Sicherheits-Check starten"
      heroStats={[
        { value: "24/7", label: "Monitoring" },
        { value: "<15 min", label: "Reaktionszeit" },
        { value: "0", label: "Kompromisse" },
      ]}
      benefits={[
        { icon: Lock, title: "Endpoint Protection", text: "EDR-Lösungen mit Verhaltensanalyse blockieren auch unbekannte Angriffe in Echtzeit." },
        { icon: Eye, title: "24/7 SOC-Monitoring", text: "Unser Team beobachtet Ihre Logs rund um die Uhr — und greift ein, bevor Schaden entsteht." },
        { icon: ShieldCheck, title: "Backup & Recovery", text: "Immutable Backups mit Georedundanz. Wiederherstellung getestet — nicht nur versprochen." },
        { icon: GraduationCap, title: "Awareness Trainings", text: "90% aller Vorfälle beginnen mit einem Klick. Wir schulen Ihr Team praxisnah und regelmässig." },
      ]}
      process={[
        { title: "Assessment", text: "Vulnerability Scan, Pen-Test light und Interviews decken Ihre Angriffsfläche auf." },
        { title: "Härtung", text: "MFA, Segmentierung, Patching und Policies bringen Sie auf modernen Stand." },
        { title: "Monitoring", text: "Wir installieren EDR/SIEM-Agents und übernehmen 24/7 Beobachtung Ihrer Systeme." },
        { title: "Response", text: "Bei einem Vorfall aktivieren wir den Incident-Response-Plan und begleiten Sie durch die Krise." },
      ]}
      stack={["Microsoft Defender", "SentinelOne", "Sophos", "Fortinet", "Cisco Umbrella", "Veeam", "Acronis", "KnowBe4"]}
      faq={[
        { q: "Sind wir überhaupt gefährdet — wir sind doch klein?", a: "Gerade KMU sind heute Hauptziel: Angriffe sind automatisiert und schlecht gesicherte Firmen werden bevorzugt. 60% der betroffenen KMU verschwinden binnen 6 Monaten vom Markt." },
        { q: "Was ist der wichtigste erste Schritt?", a: "MFA, funktionierende Backups und Awareness. Diese drei Bausteine reduzieren Ihr Risiko drastisch." },
        { q: "Können wir das nicht selbst?", a: "Grundschutz ja. 24/7 SOC, Threat-Intel und Incident-Response nur mit spezialisiertem Team." },
        { q: "Was passiert bei einem echten Angriff?", a: "Wir isolieren betroffene Systeme, sichern Beweise, koordinieren mit Behörden/Versicherung und stellen Ihren Betrieb wieder her." },
      ]}
    />
  ),
});
