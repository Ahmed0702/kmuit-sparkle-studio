import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-brand rounded-md flex items-center justify-center">
              <span className="font-display font-bold text-brand-foreground text-sm">KM</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-lg">KMUIT</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Informatik Support
              </span>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Ihr zuverlässiger EDV Partner seit 1989. Wir bieten intelligente IT-Lösungen für
            KMU in Zug, Luzern, Zürich und Bern.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center hover:bg-brand hover:border-brand transition-colors"
                aria-label="Social"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              "Business Process Automation",
              "IT Cyber Security",
              "Infrastruktur-Analyse",
              "Digitalisierungs-Strategie",
              "IT-Roll-out",
              "IT-Umzug",
            ].map((s) => (
              <li key={s}>
                <Link to="/it-services" className="hover:text-brand-glow transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">
            Standorte
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Zug — Hauptsitz</li>
            <li>Luzern</li>
            <li>Zürich</li>
            <li>Bern</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">
            Kontakt
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <a href="tel:+41582552717" className="hover:text-brand-glow">058 255 27 17</a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <a href="mailto:kontakt@kmuit.com" className="hover:text-brand-glow">
                kontakt@kmuit.com
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              Mo–Fr: 08:00 – 18:30
            </li>
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              Zug, Schweiz
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} KMU Informatik Support. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Impressum</a>
            <a href="#" className="hover:text-white">Datenschutz</a>
            <a href="#" className="hover:text-white">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
