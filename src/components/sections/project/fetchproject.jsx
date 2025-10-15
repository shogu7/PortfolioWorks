import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './fetchproject.css';

const githubToken = import.meta.env.VITE_GIT_TOKEN;

// API Fetch GitHub Projects
export default function ProjectsPage() { 
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    searchTerm: '',
    activeTags: [],
    showPinnedOnly: false,
  });

  const [allTags, setAllTags] = useState([]);
  const githubUsername = 'shogu7';

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);

        const commonHeaders = {
          Authorization: `Bearer ${githubToken}`,
          Accept: 'application/vnd.github.v3+json'
        };

        const reposRes = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`,
          { headers: commonHeaders }
        );
        if (reposRes.status === 403) throw new Error('Rate limit API GitHub dépassé');
        if (!reposRes.ok) throw new Error('Échec fetch repos');
        const repos = await reposRes.json();

        const starredRes = await fetch(
          `https://api.github.com/users/${githubUsername}/starred`,
          { headers: commonHeaders }
        );
        const starred = starredRes.ok ? await starredRes.json() : [];
        const starredIds = new Set(starred.map((r) => r.id));

        const projectsData = await Promise.all(
          repos
            .filter((r) => !r.fork)
            .map(async (repo) => {
              const langRes = await fetch(repo.languages_url, { headers: commonHeaders });
              const languages = langRes.ok ? await langRes.json() : {};
              const languageTags = Object.keys(languages);

              let topics = [];
              if (repo.topics_url) {
                try {
                  const topicsRes = await fetch(
                    repo.topics_url.replace('{/topic}', ''),
                    { headers: commonHeaders }
                  );
                  if (topicsRes.ok) {
                    const data = await topicsRes.json();
                    topics = data.names || [];
                  }
                } catch {}
              }

              const tags = [...new Set([...languageTags, ...topics])];

              let demoUrl = repo.homepage || '';
              if (!demoUrl && repo.has_pages) {
                demoUrl = `https://${githubUsername}.github.io/${repo.name}`;
              }

              return {
                id: repo.id,
                title: repo.name,
                description: repo.description || `Repository ${repo.language || ''}`,
                tags,
                image: `https://opengraph.githubassets.com/1/${githubUsername}/${repo.name}`,
                githubUrl: repo.html_url,
                demoUrl,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                pinned: starredIds.has(repo.id) || repo.stargazers_count > 5,
                updatedAt: repo.updated_at,
                language: repo.language,
              };
            })
        );

        const uniqueTags = Array.from(
          new Set(projectsData.flatMap((p) => p.tags))
        ).sort();

        setProjects(projectsData);
        setAllTags(uniqueTags);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, [githubUsername]);

  const toggleTag = (tag) => {
    setFilters((prev) => ({
      ...prev,
      activeTags: prev.activeTags.includes(tag)
        ? prev.activeTags.filter((t) => t !== tag)
        : [...prev.activeTags, tag],
    }));
  };

  const togglePinnedOnly = () => {
    setFilters((prev) => ({
      ...prev,
      showPinnedOnly: !prev.showPinnedOnly,
    }));
  };

  const handleSearch = (e) => {
    setFilters((prev) => ({ ...prev, searchTerm: e.target.value }));
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      (project.description &&
        project.description
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase()));

    const matchesTags =
      filters.activeTags.length === 0 ||
      filters.activeTags.every((tag) => project.tags.includes(tag));

    const matchesPinned = !filters.showPinnedOnly || project.pinned;

    return matchesSearch && matchesTags && matchesPinned;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  // === RENDER PAGE ===
  return (
    <div className="projects-page">
      <div className="network-bg"></div>
      <div className="container">
        <div className="header">
          <h1>
            <span className="highlight">Mes</span> Projets
          </h1>
          <p>Explorez mes projets récents, achevés ou en développement.</p> {/* Découvrez les projets sur lesquels je travaille, finis ou en cours. */}
        </div>

        <div className="filters">
          <div className="top-row">
            <div className="search-input">
              <input
                type="text"
                placeholder="Rechercher des projets..."
                value={filters.searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="toggle-switch" onClick={togglePinnedOnly}>
              <div className={`switch ${filters.showPinnedOnly ? 'on' : ''}`}>
                <div className="thumb" />
              </div>
              <label>Projets épinglés uniquement</label>
            </div>
          </div>
          <div className="tags">
            <p>Filtrer par technologie :</p>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`tag-button ${
                  filters.activeTags.includes(tag) ? 'active' : ''
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="spinner">
            <div className="dot"></div>
          </div>
        )}

        {error && (
          <div className="error-box">
            <p>Erreur lors du chargement des projets</p>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`project-card ${project.pinned ? 'pinned' : ''}`}>
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} />
                  {project.pinned && <div className="badge">ÉPINGLÉ</div>}
                  {project.language && (
                    <div className="project-language">{project.language}</div>
                  )}
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.slice(0, 8).map((tag) => (
                      <span key={project.id + tag}>{tag}</span>
                    ))}
                    {project.tags.length > 8 && <span>+{project.tags.length - 8}</span>}
                  </div>
                  <div className="project-stats">
                    <div className="update-date">
                      Mis à jour: {formatDate(project.updatedAt)}
                    </div>
                  </div>
                  {/* buttons GitHub, Demo, More Info */}
                  <div className="action-buttons">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-github"
                    >
                      Voir sur GitHub
                    </a>
                     <Link to={`/projets/${project.title}`} className="btn btn-info">
                      Plus d'informations
                    </Link>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-demo"
                      >
                        Démo Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* if no results */}
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="no-results">
            <p>Aucun projet ne correspond à vos filtres.</p>
            <button
              onClick={() =>
                setFilters({ searchTerm: '', activeTags: [], showPinnedOnly: false })
              }
            >
              Effacer tous les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
}