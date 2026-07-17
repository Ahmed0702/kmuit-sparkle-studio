import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Search, FileText, Layers, AlertTriangle, Route as RouteIcon, ClipboardCheck, Network } from "lucide-react";
import { ServiceDetail } from "@/components/ServiceDetail";

export const Route = createFileRoute("/it-services/infrastruktur-analyse")({
  head: () => ({
    meta: [
      { title: "Infrastruktur-Analyse — KMU Informatik Support" },
      { name: "description", content: "Vollständige Bestandsaufnahme, Dokumentation und Schwachstellen-Analyse Ihrer IT. Klarheit statt Bauchgefühl." },
      { property: "og:title", content: "Infrastruktur-Analyse — KMUIT" },
      { property: "og:description", content: "Übersicht schaffen in gewachsener IT — dokumentiert, bewertet, priorisiert." },
    ],
  }),
  component: () => (
    <ServiceDetail
      accent="violet"
      Icon={Cpu}
      eyebrow="Infrastruktur-Analyse"
      title="Endlich wissen,"
      titleAccent="was Sie haben."
      lead="Historisch gewachsene IT-Landschaften sind ein Blindflug. Wir dokumentieren jeden Server, jede Lizenz, jede Verbindung — und geben Ihnen eine ehrliche Standortbestimmung mit priorisierten Empfehlungen."
      cta="Analyse buchen"
      heroStats={[
        { value: "100%", label: "Dokumentiert" },
        { value: "PDF+Wiki", label: "Ergebnis" },
        { value: "10T", label: "Ø Aufwand" },
      ]}
      benefits={[
        { icon: FileText, title: "Lückenlose Doku", text: "Netzwerkplan, Systemliste, Lizenzübersicht — auffindbar, aktuell, mehrsprachig." },
        { icon: AlertTriangle, title: "Risiken erkannt", text: "Wir markieren End-of-Life-Systeme, Single-Points-of-Failure und Compliance-Lücken." },
        { icon: RouteIcon, title: "Klare Roadmap", text: "Priorisierte Massnahmenliste mit Zeitplan, Aufwand und Business-Impact." },
        { icon: ClipboardCheck, title: "Verhandlungsbasis", text: "Solide Doku macht Sie unabhängig von Einzelpersonen und stärkt Sie gegenüber Lieferanten." },
      ]}
      process={[
        { title: "Kickoff", text: "Wir sammeln Zugänge, definieren Scope und binden Ihre Ansprechpartner ein." },
        { title: "Discovery", text: "Automatisierte Scans plus Interviews erfassen Hardware, Software, Netzwerk & Cloud." },
        { title: "Bewertung", text: "Wir bewerten Alter, Risiko und Business-Kritikalität jedes Systems." },
        { title: "Report", text: "Sie erhalten Doku, Bewertung und Handlungsempfehlungen als PDF und im Wiki." },
      ]}
      stack={["Lansweeper", "Netbox", "Docusnap", "Nmap", "Wireshark", "Microsoft Purview", "Confluence", "Draw.io"]}
      faq={[
        { q: "Stört das den laufenden Betrieb?", a: "Nein. Discovery-Tools laufen passiv, Interviews planen wir um Ihre Arbeitszeiten." },
        { q: "Wem gehört die Doku am Ende?", a: "Ihnen — vollständig, in offenen Formaten, ohne Vendor-Lock-in." },
        { q: "Was, wenn wir keinen bestehenden IT-Partner haben?", a: "Perfekter Ausgangspunkt. Die Analyse ist unser häufigster Einstieg." },
        { q: "Wie oft sollte man das machen?", a: "Erstanalyse einmalig, danach jährliches Review — oder bei Übernahmen, Umzügen, Wachstum." },
      ]}
    />
  ),
});
