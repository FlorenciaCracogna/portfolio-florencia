import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiJsonwebtokens,
  SiSwagger,
  SiSocketdotio,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiTypeorm,
  SiDocker,
  SiGithub,
  SiVercel,
  SiCloudinary,
  SiSanity,
  SiAnthropic,
} from "react-icons/si";

const STACK_GROUPS = [
  {
    title: "Backend",
    items: [
      { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { icon: SiNestjs, name: "NestJS", color: "#E0234E" },
      { icon: SiExpress, name: "Express", color: "#000000" },
      { icon: SiJsonwebtokens, name: "JWT / Auth", color: "#000000" },
      { icon: SiSocketdotio, name: "Socket.io", color: "#010101" },
      { icon: SiSwagger, name: "Swagger", color: "#85EA2D" },
    ],
  },
  {
    title: "Lenguajes",
    items: [
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    ],
  },
  {
    title: "Bases de datos",
    items: [
      { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
      { icon: SiTypeorm, name: "TypeORM", color: "#FE0902" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    ],
  },
  {
    title: "Herramientas y deploy",
    items: [
      { icon: SiGithub, name: "Git / GitHub", color: "#181717" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" },
      { icon: SiVercel, name: "Vercel", color: "#000000" },
      { icon: SiSanity, name: "Sanity CMS", color: "#F03E2F" },
      { icon: SiCloudinary, name: "Cloudinary", color: "#3448C5" },
      { icon: SiAnthropic, name: "Claude Code", color: "#D97757" },
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="section-header">
        <span className="section-number">02</span>
        <h2 className="section-title">Stack tecnológico</h2>
      </div>

      <div className="stack-groups">
        {STACK_GROUPS.map((group) => (
          <div key={group.title} className="stack-group">
            <h3 className="stack-group-title">{group.title}</h3>
            <div className="stack-grid">
              {group.items.map(({ icon: Icon, name, color }) => (
                <div key={name} className="stack-tag">
                  <Icon size={28} color={color} />
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}