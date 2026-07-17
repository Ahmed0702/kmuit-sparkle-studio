import { createFileRoute } from "@tanstack/react-router";
import { Rocket, Compass, Target, Users, TrendingUp, Lightbulb, Map, RefreshCw } from "lucide-react";
import { ServiceDetail } from "@/components/ServiceDetail";

export const Route = createFileRoute("/it-services/digitalisierungs-strategie")({
  head: () => ({
    meta: [
      { title: "Digitalisierungs-Strategie — KMU Informatik Support" },
      { name: "description", content: "Von Ist-Analyse bis Roadmap: Wir entwickeln Ihre digitale Strategie und begleiten die Umsetzung." },
      { property: "og:title", content: "Digitalisierungs-Strategie — KMUIT" },
      { property: "og:description", content: "Roadmap statt Buzzwords — Digitalisierung, die messbar wirkt." },
    ],
  }),
  component: () => (
    <ServiceDetail
      accent="amber"
      Icon={Rocket}
      eyebrow="Digitalisierungs-Strategie"
      title="Roadmap statt"
      titleAccent="Buzzword-Bingo."
      lead="Digitalisierung ist kein Selbstzweck. Wir starten bei Ihren Zielen, priorisieren nach Business-Impact und liefern eine Roadmap, die Ihr Team umsetzen kann — nicht nur bunte Folien."
      cta="Strategie-Workshop"
      heroStats={[
        { value: "36M", label: "Roadmap-Horizont" },
        { value: "1×", label: "Workshop" },
        { value: "∞", label: "Klarheit" },
      ]}
      benefits={[
        { icon: Compass, title: "Klare Richtung", text: "Definierte Vision, messbare Ziele — jeder im Team weiss, worauf es einzahlt." },
        { icon: Target, title: "Priorisierte Initiativen", text: "Wir bewerten Ideen nach Nutzen und Aufwand und starten mit den Quick Wins." },
        { icon: Users, title: "Change Management", text: "Technologie scheitert am Menschen — wir denken Kommunikation und Adoption von Anfang an mit." },
        { icon: TrendingUp, title: "Messbarer Fortschritt", text: "KPIs und Dashboards machen den Nutzen der Digitalisierung sichtbar — für Sie und Ihr Team." },
      ]}
      process={[
        { title: "Ist-Analyse", text: "Wir verstehen Ihr Geschäftsmodell, Ihre Prozesse und Ihren digitalen Reifegrad." },
        { title: "Vision", text: "Im Workshop mit Führungsteam definieren wir das Zielbild in 3 Jahren." },
        { title: "Roadmap", text: "Wir zerlegen die Vision in priorisierte Initiativen mit Aufwand & Business Case." },
        { title: "Begleitung", text: "Auf Wunsch begleiten wir die Umsetzung als Sparringpartner oder Projekt-Lead." },
      ]}
      stack={["Design Thinking", "OKR", "Kanban", "Miro / Mural", "Business Model Canvas", "Confluence", "Jira", "Notion"]}
      faq={[
        { q: "Sind wir zu klein für eine Strategie?", a: "Im Gegenteil. Je kleiner das Unternehmen, desto teurer sind falsche Investitionen. Eine klare Strategie schützt Ihr Budget." },
        { q: "Wie viel Zeit müssen wir investieren?", a: "Kernworkshop 1–2 Tage mit dem Führungsteam, danach ~4 Stunden pro Woche für 4–6 Wochen." },
        { q: "Was ist der Unterschied zur IT-Beratung?", a: "Strategie startet beim Geschäftsziel, IT-Beratung bei der Technologie. Wir denken beide Seiten zusammen." },
        { q: "Wird das eine 100-seitige Präsentation?", a: "Nein. Ein präzises Zielbild, eine visuelle Roadmap und ein umsetzbarer Backlog." },
      ]}
    />
  ),
});
