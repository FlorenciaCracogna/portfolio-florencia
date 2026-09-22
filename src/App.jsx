import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

const PROJECTS = [
  {
    badge: "Proyecto Final · Henry",
    title: "Estudio Viacore",
    desc: "Plataforma de capacitaciones corporativas con módulos de trainings, meetings y pagos. Incluye autenticación JWT + Google OAuth, roles Admin/User, chat en tiempo real con WebSockets, notificaciones CRON y pasarela de pagos con MercadoPago.",
    tags: [
      "NestJS",
      "Next.js",
      "TypeORM",
      "PostgreSQL",
      "MercadoPago",
      "WebSockets",
      "Google OAuth",
      "Railway",
      "Vercel",
    ],
    links: [
      { label: "🌐 Demo", href: "https://estudio-via3-frontend.vercel.app/" },
      {
        label: "⌨️ Frontend",
        href: "https://github.com/FlorenciaCracogna/Viacore-frontend",
      },
      {
        label: "⌨️ Backend",
        href: "https://github.com/FlorenciaCracogna/Viacore-backend",
      },
    ],
  },
  {
    badge: "Proyecto Freelance · En desarrollo",
    title: "Estudio Vía3",
    desc: "Sitio institucional para un estudio de aprendizaje organizacional, con contenido autogestionable desde Sanity CMS. Incluye actualización de contenido en tiempo real con Live Content API y webhooks de revalidación, carruseles animados con requestAnimationFrame, modales accesibles, formulario de contacto con envío de emails vía Resend e imágenes optimizadas con Cloudinary.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Sanity CMS",
      "Resend",
      "Cloudinary",
    ],
    links: [
      {
        label: "⌨️ Repo",
        href: "https://github.com/FlorenciaCracogna/estudio-via3",
      },
    ],
  },
  {
    badge: "Proyecto Individual · M4",
    title: "Ecommerce Backend",
    desc: "API REST para un ecommerce tecnológico con gestión de usuarios, productos, categorías y órdenes. Implementa autenticación JWT, encriptación de contraseñas, control de roles, soft delete y documentación interactiva con Swagger.",
    tags: [
      "NestJS",
      "TypeScript",
      "TypeORM",
      "PostgreSQL",
      "JWT",
      "Swagger",
      "Docker",
    ],
    links: [
      {
        label: "⌨️ Repo",
        href: "https://github.com/FlorenciaCracogna/Ecommerce-backend-M4",
      },
    ],
  },
  {
    badge: "Proyecto Personal · Emprendimiento",
    title: "FlorEntreVelas — Catálogo web",
    desc: "Catálogo online para mi emprendimiento de velas artesanales. Organiza los productos por categoría, carga imágenes y videos desde Cloudinary y conecta cada producto con WhatsApp para consultas directas. Tiene identidad visual propia y deploy continuo en Vercel.",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "Cloudinary", "Vercel"],
    links: [
      {
        label: "🌐 Demo",
        href: "https://florentrevelas-catalogo.vercel.app/",
      },
      {
        label: "⌨️ Repo",
        href: "https://github.com/FlorenciaCracogna/Florentrevelas-catalogo",
      },
    ],
  },
];

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />

      {/* Overlay — fuera del nav para cubrir todo el body */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "transparent",
          }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-label">Fullstack Developer · Backend Focus</div>
          <h1 className="hero-name">
            Hola, soy
            <br />
            <em>Florencia</em>
          </h1>
          <p className="hero-desc">
            <strong>Contadora Pública y Fullstack Developer</strong> con foco en
            Backend. Construyo APIs REST robustas con Node.js, NestJS y
            TypeScript. Mi formación financiera me permite entender el negocio
            detrás del código.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              Ver proyectos
            </a>
            <a
              className="btn btn-outline"
              href="/Florencia_Cracogna_CV.pdf"
              download
            >
              Descargar CV
            </a>
            <a
              className="btn btn-outline"
              href="https://linkedin.com/in/florencia-cracogna"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-outline"
              href="https://github.com/florenciacracogna"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-photo-deco" />
          <div className="hero-photo-frame">
            <img src="/Imagen CV.jpeg" alt="Florencia Cracogna" />
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* SOBRE MÍ */}
      <section id="about" className="section">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">Sobre mí</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Soy Contadora Pública con más de 5 años en análisis financiero,
              gestión de datos y sistemas ERP. Ese camino me llevó a descubrir
              la programación como herramienta para resolver problemas reales —
              y me enamoré del proceso.
            </p>
            <p>
              Egresada del bootcamp Henry con especialización Backend, hoy
              construyo proyectos donde el código y el negocio hablan el mismo
              idioma, incluyendo trabajos freelance para clientes reales. 
              Me interesa especialmente el desarrollo de APIs,
              arquitectura de sistemas y proyectos con lógica financiera o de
              gestión empresarial.
            </p>
            <div className="about-highlight">
              💡 Mi diferencial: entiendo qué necesita el cliente del sistema
              porque antes <em>fui</em> ese cliente.
            </div>
          </div>
          <div className="about-text">
            <p>
              Trabajo con metodología ágil (SCRUM), colaboración en equipo vía
              GitHub y siempre con foco en código limpio, bien documentado y
              mantenible.
            </p>
            <p>
              Ubicada en <strong>Resistencia, Chaco</strong> y disponible para
              trabajo remoto.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <Stack />

      <hr className="divider" />

      {/* PROYECTOS */}
      <section id="projects" className="section">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">Proyectos</h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.title} className="project-card">
              <div className="project-info">
                <span className="project-badge">{p.badge}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    className="project-link"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      <Contact />

      <footer className="footer">
        <p>Diseñado y desarrollado por Florencia Cracogna · 2026</p>
      </footer>

      <ScrollToTop />
    </>
  );
}
