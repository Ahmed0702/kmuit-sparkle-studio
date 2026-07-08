import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/it-services", label: "IT-Services" },
  { to: "/branchenloesung", label: "Branchenlösung" },
  { to: "/partner", label: "Partner" },
  { to: "/jobs", label: "Jobs" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-18 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-10 h-10 bg-ink rounded-md flex items-center justify-center transition-transform group-hover:rotate-3">
              <span className="font-display font-bold text-ink-foreground text-sm tracking-tighter">
                KM
              </span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-brand rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-lg tracking-tight">KMUIT</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Informatik Support
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              activeProps={{ className: "!text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-brand rounded-full" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+41582552717"
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-brand transition-colors"
          >
            <Phone className="w-4 h-4 text-brand" />
            058 255 27 17
          </a>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-5 py-2.5 rounded-md text-sm font-semibold shadow-brand hover:opacity-90 transition-all hover:translate-y-[-1px]"
          >
            Online-Terminbuchung
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-base font-medium hover:bg-muted"
                activeProps={{ className: "!bg-muted !text-brand" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 bg-brand text-brand-foreground px-4 py-3 rounded-md text-center font-semibold"
            >
              Online-Terminbuchung
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
