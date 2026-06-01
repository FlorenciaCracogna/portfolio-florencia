import { SiGmail, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const LINKS = [
  {
    icon: SiGmail,
    label: "cra.florenciacracogna@gmail.com",
    href: "mailto:cra.florenciacracogna@gmail.com",
    color: "#EA4335",
  },
  {
    icon: FaLinkedin,
    label: "linkedin.com/in/florencia-cracogna",
    href: "https://linkedin.com/in/florencia-cracogna",
    color: "#0A66C2",
  },
  {
    icon: SiGithub,
    label: "github.com/florenciacracogna",
    href: "https://github.com/florenciacracogna",
    color: "#181717",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-header">
        <span className="section-number">04</span>
        <h2 className="section-title">Contacto</h2>
      </div>
      <div className="contact-inner">
        <p className="contact-text">
          Hablemos de tu próximo <em>proyecto</em>
        </p>
        <div className="contact-links">
          {LINKS.map(({ icon: Icon, label, href, color }) => (
            <a
              key={href}
              className="contact-item"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon">
                <Icon size={17} color={color} />
              </div>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
