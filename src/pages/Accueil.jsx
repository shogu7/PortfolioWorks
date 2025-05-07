import React from 'react';
import shoguLogo from '../assets/icons/shogu_logo.png';
import Projects from '../components/sections/accueil/projects'
import ButtonCV from '../components/ui/Button/buttonCV'
import Skill from "../components/sections/accueil/skill"
import './Accueil.css';
import { useState, useEffect } from 'react';

export default function DynamicHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const glowInterval = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100);
    }, 50);
    
    return () => clearInterval(glowInterval);
  }, []);

  return (
  <>
  <div class="space-between"></div>
    <div className="header-container">
      <a href="https://github.com/shogu7" target="_blank">
        <img src={shoguLogo} className="logo" alt="Shogu's Logo" />
      </a>
      <div className={`presentation-container ${isVisible ? 'slide-in' : ''}`}>
        <h1 className="presentation">
        <span className="text-gradient">Shogu — Développeur polyvalent.</span>
        </h1>
        <p className="read-the-docs">
        J’aime créer des choses utiles, concrètes, et qui ont du sens pour moi. Peu importe le langage, tant que le projet m’inspire et me pousse à progresser.
        </p>
      <div className="button-space">
      <ButtonCV />
      </div>
      </div>
    </div>
    
  <div className="projects-space">
    <Projects />
  </div>
  <div className="skill-space">
  <Skill />
  </div>
  </>
  );
}
