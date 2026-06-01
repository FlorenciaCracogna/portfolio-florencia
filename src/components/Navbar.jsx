import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "Sobre mí" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar({ open, setOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = () => setOpen(false);

  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>
      <a href="#" className="nav-logo">
        Florencia Cracogna
      </a>

      <div className="nav-links">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>

      <button
        className={open ? "nav-burger open" : "nav-burger"}
        onClick={() => setOpen(!open)}
        aria-label="Menú"
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="nav-mobile">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={handleLink}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
