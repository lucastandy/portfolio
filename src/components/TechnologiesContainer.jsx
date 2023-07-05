import {DiPhp, DiPython, DiJsBadge, DiNodejsSmall, DiMysql, DiPostgresql} from "react-icons/di";
import '../styles/components/technologiescontainer.sass';
const technologies = [
    { id: "php", name: "PHP", text:"Ampla Experiência em desenvolvimento com PHP",icon: <DiPhp /> },
    { id: "python", name: "Python", text:"Experiência em análise de dados com Python", icon: <DiPython /> },
    { id: "js", name: "JavaScript", text:"Experiência em desenvolvimento com JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", text:"Experiência em backend com Node", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", text:"Experiência com o banco de dados MySql", icon: <DiMysql /> },
    { id: "postgres", name: "PostgreSql", text:"Experiência com o banco de dados PostgreSQL", icon: <DiPostgresql /> },
  ];
const TechnologiesContainer = () => {
    return <section className="technologies-container">
    <h2>Tecnologias</h2>
    <div className="technologies-grid">
      {technologies.map((tech) => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technology-info">
            <h3>{tech.name}</h3>
            <p>{tech.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
};

export default TechnologiesContainer