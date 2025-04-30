import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link to="/" className="navbar-logo-link">
              <span className={`logo-text logo-text-primary ${scrolled ? 'scrolled' : ''}`}>
                Shogu's
              </span>
              <span className={`logo-text logo-text-secondary ${scrolled ? 'scrolled' : ''}`}>
                Portfolio
              </span>
            </Link>
          </div>

          <div className="desktop-nav">
            <Link to="/" className="desktop-nav-item">
              Accueil
            </Link>
            <Link to="/projets" className="desktop-nav-item">
              Projets
            </Link>
            <a href="/#contact" className="desktop-nav-item">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}