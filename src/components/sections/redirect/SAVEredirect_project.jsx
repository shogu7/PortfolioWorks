import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./redirect_project.css";

function RedirectProject({
  to = "/projets",
  delay = 5000, 
  replace = true,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate(to, { replace }), delay);
    return () => clearTimeout(timer);
  }, [navigate, to, delay, replace]);

  return (
    <div className="redirect-container" aria-live="polite">
      <div className="spinner" role="img" aria-label="Chargement" />
      <div className="redirect-text">
        <p className="title">Redirection vers la page Projets…</p>
        <p className="subtitle">Chargement en cours — vous serez redirigé automatiquement.</p>
        <p className="fallback">Si rien ne se passe, <a href={to}>cliquez ici</a>.</p>
      </div>
    </div>
  );
}

export default RedirectProject;
