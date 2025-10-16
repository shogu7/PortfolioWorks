import React from "react";
import { Link } from "react-router-dom";
import "./redirect_project.css";

function RedirectProject() {
  return (
    <div className="redirect-container">
      <div className="redirect-card">
        <p className="lead">Pour voir tous les projets ⬇️.</p>

        <Link to="/projets" className="redirect-button">
          Voir tous les projets
          <span className="arrow" aria-hidden="true"></span>
        </Link>
      </div>
    </div>
  );
}

export default RedirectProject;
