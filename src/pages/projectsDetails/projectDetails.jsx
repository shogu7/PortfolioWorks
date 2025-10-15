import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../../data/projectsData.json";
import "../../styles/projectDetails.css";
import BackButton from "../../components/ui/back_button/back_button";

function ProjectsDetails() {

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { title } = useParams();
  const raw = title || (() => {
    const parts = window.location.pathname.split("/").filter(Boolean);
    return parts[parts.length - 1] || "";
  })();

  const decoded = decodeURIComponent(raw);
  const normalized = decoded.toLowerCase();

  const project = projectsData.find(p => {
    const s = (p.slug || "").toString().toLowerCase();
    const t = (p.title || "").toString().toLowerCase();
    return s === normalized || t === normalized;
  });

  // Debugging logs
  console.log("Resolved param:", raw);
  console.log("Decoded:", decoded);
  console.log("All slugs:", projectsData.map(p => p.slug));
  console.log("All titles:", projectsData.map(p => p.title));
  console.log("Found project:", project);

  if (!project) {
    return (
      <div>
        <h2>Projet introuvable</h2>
        <p>Le projet demandé n'existe pas.</p>
        <Link to="/projets">Retour à la liste</Link>
      </div>
    );
  }

  return (
    <main>
      <header>
        <div className={`presentation-container ${isVisible ? 'slide-in' : ''}`}>
        <h1 className="presentation">{project.title}</h1>
        <p>{project.shortDescription}</p>
        </div>
      </header>

      <section>
        <img src={project.image} alt={project.title} style={{ maxWidth: "60%" }} />
        <h2 className="title">Description</h2>
        <p>{project.fullDescription}</p>
      </section>

      <section className="tech-lang-section">
        <h3 className="title">Technologies</h3>
        <ul className="tags">
          {(project.technologies || []).map(t => (
            <li key={t} className="tag" title={t}>
              {t}
            </li>
          ))}
        </ul>

        <h3 className="title">Langages</h3>
        <ul className="tags">
          {(project.languages || []).map(l => (
            <li key={l} className="tag" title={l}>
              {l}
            </li>
          ))}
        </ul>
      </section>

      <section>  
        {project.liveLink ? (<a href={project.liveLink} target="_blank" rel="noreferrer">Démo Live</a> ) : (<a className="no-result">Pas de démo disponible ;-;</a>)}

        {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" style={{ marginLeft: 12 }}>Github Page</a>}
      </section>
      <BackButton />
    </main>
  );
}

export default ProjectsDetails;
