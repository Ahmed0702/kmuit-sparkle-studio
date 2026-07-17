import { createFileRoute } from "@tanstack/react-router";
import { Zap, Workflow, Bot, LineChart, Plug, Gauge, Clock, Coins } from "lucide-react";
import { ServiceDetail } from "@/components/ServiceDetail";

export const Route = createFileRoute("/it-services/business-process-automation")({
  head: () => ({
    meta: [
      { title: "Business Process Automation — KMU Informatik Support" },
      { name: "description", content: "Automatisieren Sie repetitive Prozesse mit RPA, KI und Workflow-Engines. Weniger Fehler, mehr Zeit für Ihr Kerngeschäft." },
      { property: "og:title", content: "Business Process Automation — KMUIT" },
      { property: "og:description", content: "Prozesse automatisieren. Kosten senken. Wachstum ermöglichen." },
    ],
  }),
  component: () => (
    <ServiceDetail
      accent="cyan"
      Icon={Zap}
      eyebrow="Business Process Automation"
      title="Prozesse, die"
      titleAccent="von selbst laufen."
      lead="Wir verwandeln repetitive Arbeit in automatisierte Workflows. Ihre Mitarbeitenden gewinnen Zeit, Ihre Systeme sprechen endlich miteinander — und Sie sehen in Echtzeit, was im Unternehmen passiert."
      cta="Automation planen"
      heroStats={[
        { value: "60%", label: "Weniger Aufwand" },
        { value: "24/7", label: "Prozesse laufen" },
        { value: "3×", label: "Schneller ROI" },
      ]}
      benefits={[
        { icon: Clock, title: "Zeit zurückgewinnen", text: "Automatisierte Abläufe erledigen manuelle Aufgaben in Sekunden — Ihr Team konzentriert sich auf Wertschöpfung." },
        { icon: Coins, title: "Kosten senken", text: "Weniger Fehler, weniger Doppelerfassung, weniger Nacharbeit. Automation zahlt sich messbar aus." },
        { icon: Plug, title: "Systeme verbinden", text: "ERP, CRM, Buchhaltung, E-Mail, Shop — alles integriert, keine Insellösungen mehr." },
        { icon: LineChart, title: "Volle Transparenz", text: "Dashboards & KPIs zeigen Ihnen jederzeit den Zustand jedes Prozesses in Echtzeit." },
      ]}
      process={[
        { title: "Discovery", text: "Wir analysieren Ihre Ist-Prozesse und identifizieren die grössten Zeitfresser." },
        { title: "Design", text: "Gemeinsam entwerfen wir den optimalen Soll-Workflow und definieren Metriken." },
        { title: "Build", text: "Wir implementieren die Automation — schrittweise, testbar, mit klaren Meilensteinen." },
        { title: "Optimize", text: "Nach dem Go-Live monitoren wir Performance und feilen kontinuierlich am Ergebnis." },
      ]}
      stack={["Microsoft Power Automate", "Zapier", "Make.com", "n8n", "UiPath", "REST/GraphQL APIs", "Azure Logic Apps", "OpenAI / LLM"]}
      faq={[
        { q: "Wie schnell sehen wir Resultate?", a: "Erste Automationen produktiv nach 2–4 Wochen. Vollständige Programme laufen typischerweise über 3–6 Monate." },
        { q: "Müssen wir unsere Systeme wechseln?", a: "Nein. Wir automatisieren rund um Ihre bestehende Landschaft — mit APIs, Konnektoren oder RPA, wo nötig." },
        { q: "Was kostet ein Automationsprojekt?", a: "Ab CHF 3'500 für einen ersten produktiven Workflow. Wir arbeiten mit Fixpreisen pro Prozess." },
        { q: "Wie sicher sind die Daten?", a: "Alle Automationen laufen auf Ihrer Infrastruktur oder in Schweizer Rechenzentren, DSG- und DSGVO-konform." },
      ]}
    />
  ),
});
