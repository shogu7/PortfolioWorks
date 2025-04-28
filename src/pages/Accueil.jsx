import React from 'react';
import shoguLogo from '../ressources/shogu_logo.png';
import Projects from '../components/projects'
import './Accueil.css';

const Accueil = () => {
  return (
  <>
    <div className="header-container">
      <a href="https://github.com/shogu7" target="_blank">
        <img src={shoguLogo} className="logo" alt="Shogu's Logo" />
      </a>
      <div className="presentation-container">
        <h1 className="presentation">Lorem ipsum dolor sit amet.</h1>
        <p className="read-the-docs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  <Projects />
  </>
  );
}

export default Accueil;
