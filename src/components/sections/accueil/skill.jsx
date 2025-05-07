import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaPhp, FaGitAlt, FaLinux } from 'react-icons/fa';
import { GiDatabase } from 'react-icons/gi'
import './skill.css';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'MySQL', icon: <GiDatabase /> },
    { name: 'Ubuntu', icon: <FaLinux /> },
    { name: 'Git', icon: <FaGitAlt /> },
  ];


  return (
    <section className="skills-section">
      <h2>Technologies</h2>
      <h1 className="desc-tech">Découvrez les langages et technologies que j’utilise régulièrement ou avec lesquels j’ai acquis une première expérience à travers mes projets.</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;