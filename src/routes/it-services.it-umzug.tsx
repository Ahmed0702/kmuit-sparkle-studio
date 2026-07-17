import { createFileRoute } from "@tanstack/react-router";
import { Cloud, Boxes, Truck, Cable, Building2, ClipboardList, ShieldCheck, Timer } from "lucide-react";
import { ServiceDetail } from "@/components/ServiceDetail";

export const Route = createFileRoute("/it-services/it-umzug")({
  head: () => ({
    meta: [
      { title: "IT-Umzug — KMU Informatik Support" },
      { name: "description", content: "Sicherer Ab- und Aufbau Ihrer IT bei Standortwechseln. Server, Netzwerk, Arbeitsplätze — mit minimaler Downtime." },
      { property: "og:title", content: "IT-Umzug — KMUIT" },
      { property: "og:description", content: "Am Freitag ausgezogen, am Montag wieder produktiv." },
    ],
  }),
  component: () => (
    <ServiceDetail
      accent="sky"
      Icon={Cloud}
      eyebrow="IT-Umzug"
      title="Am Montag"
      titleAccent="wieder produktiv."
      lead="Ein Standortwechsel ist Chefsache — und die IT darf ihn nicht ausbremsen. Wir planen, verlagern und starten Ihre Systeme neu, sodass Ihr Team am ersten Arbeitstag im neuen Büro einfach loslegt."
      cta="Umzug anfragen"
      heroStats={[
        { value: "<1", label: "Tag Downtime" },
        { value: "100%", label: "Datenintegrität" },
        { value: "1×", label: "Ansprechpartner" },
      ]}
      benefits={[
        { icon: ClipboardList, title: "Minutiöse Planung", text: "Runbook mit Zeitplan, Verantwortlichkeiten und Rückfallszenario — nichts wird improvisiert." },
        { icon: Cable, title: "Netzwerk & Verkabelung", text: "Neuer Standort verkabelt, WLAN vermessen und optimiert — bevor Sie einziehen." },
        { icon: ShieldCheck, title: "Datensicherheit", text: "Verschlüsselter Transport, mehrfache Backups vor Demontage — Ihre Daten sind jederzeit geschützt." },
        { icon: Timer, title: "Minimale Downtime", text: "Kritische Systeme laufen provisorisch weiter, produktiver Betrieb am ersten Arbeitstag." },
      ]}
      process={[
        { title: "Site-Survey", text: "Begehung alt & neu, Aufnahme aller Systeme, Kabel und Anforderungen." },
        { title: "Vorbereitung", text: "Neuer Standort wird vorverkabelt, Netzwerk aktiviert, Backups gesichert." },
        { title: "Umzug", text: "Demontage, Transport, Neuaufbau — koordiniert mit Möbelspedition und Facility." },
        { title: "Go-Live", text: "Funktionstests aller Systeme, Support vor Ort am ersten Arbeitstag." },
      ]}
      stack={["AutoCAD Netzwerkpläne", "Fluke Networks", "Ubiquiti / Cisco", "Rack-Umzugsboxen", "Georedundantes Backup", "Fibre / Copper", "USV / Klimatisierung", "24h Support"]}
      faq={[
        { q: "Wann sollten wir Sie einbinden?", a: "Idealerweise 6–8 Wochen vor Umzugstermin. Bei kleineren Setups reichen 2–3 Wochen." },
        { q: "Was ist mit Servern und Telefonie?", a: "Beides Kernkompetenz — wir migrieren physische Server, virtualisieren oder wechseln in die Cloud, VoIP-Systeme werden neu registriert." },
        { q: "Können wir schrittweise umziehen?", a: "Ja, Site-to-Site VPN oder SD-WAN erlauben parallelen Betrieb an zwei Standorten." },
        { q: "Und wenn etwas schiefgeht?", a: "Runbook enthält Rückfallszenario und Backup-Recovery-Plan. Ein Techniker ist am Umzugstag durchgehend vor Ort." },
      ]}
    />
  ),
});
