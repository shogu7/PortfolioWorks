import React, { useState, useEffect } from 'react';
import './projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_TOKEN = import.meta.env.VITE_GIT_TOKEN;
  const username = 'shogu7';

  useEffect(() => {
    const fetchPinnedProjects = async () => {
      try {
        const query = `
          query {
            user(login: "${username}") {
              pinnedItems(first: 6) {
                edges {
                  node {
                    ... on Repository {
                      name
                      description
                      url
                      stargazerCount
                      forkCount
                      primaryLanguage { name color }
                    }
                  }
                }
              }
            }
          }
        `;
        const res = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query })
        });
        const json = await res.json();
        if (res.ok && json.data) {
          setProjects(json.data.user.pinnedItems.edges.map(e => e.node));
        } else {
          throw new Error(json.errors?.[0]?.message || 'Failed to fetch');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPinnedProjects();
  }, []);

  if (loading) {
    return (
      <div className="projects-container">
        <h2 className="projects-title">Mes Projects épinglés</h2>
        <div className="loading-animation">
          <div className="loading-circle"></div>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="projects-container">
        <h2 className="projects-title">Mes Projects épinglés</h2>
        <div className="error-message">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const displayProjects = [...projects, ...projects];

  return (
    <div className="projects-container">
      <h2 className="projects-title">Mes Projects épinglés</h2>
      <div className="carousel-container">
        <div className="carousel-track">
          {displayProjects.map((project, i) => (
            <div key={`${project.name}-${i}`} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description || 'No description available.'}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
