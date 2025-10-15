import React from "react";
import { Link } from "react-router-dom";
import "./back_button.css";

function BackFooter() {
  return (
    <footer className="back-footer">
      <Link to="/projets" className="back-button">
        ← Retour
      </Link>
    </footer>
  );
}

export default BackFooter;
// return a button that takes the user back to the /projets page.