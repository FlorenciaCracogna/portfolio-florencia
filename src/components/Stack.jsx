import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiTypeorm,
  SiDocker,
  SiGithub,
  SiJsonwebtokens,
  SiSwagger,
} from "react-icons/si";

const STACK = [
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiNestjs, name: "NestJS", color: "#E0234E" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiTypeorm, name: "TypeORM", color: "#FE0902" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiGithub, name: "Git / GitHub", color: "#181717" },
  { icon: SiJsonwebtokens, name: "JWT / Auth", color: "#000000" },
  { icon: SiSwagger, name: "Swagger", color: "#85EA2D" },
];

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="section-header">
        <span className="section-number">02</span>
        <h2 className="section-title">Stack tecnológico</h2>
      </div>
      <div className="stack-grid">
        {STACK.map(({ icon: Icon, name, color }) => (
          <div key={name} className="stack-tag">
            <Icon size={28} color={color} />
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
