import { useState } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import './footer.css'

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", icon: <Github />, url: "https://github.com/shogu7" },
    { name: "LinkedIn", icon: <Linkedin />, url: "https://www.linkedin.com/in/hugo-bessaa-6a5ba62a0/" },
    { name: "Twitter", icon: <Twitter />, url: "#" },
    { name: "Email", icon: <Mail />, url: "hugobessaa7@gmail.com" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
   
        <div className="footer-inner">
          <div className="footer-section">
            <div className="social-links">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  className="social-icon"
                  onMouseEnter={() => setHoveredIcon(social.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  aria-label={social.name}
                >
                  <div className="icon-container">
                    <div className={`icon-backdrop ${hoveredIcon === social.name ? 'active' : ''}`}></div>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-section links">
            <a href="#" className="footer-link">Mentions légales</a>
            <span className="divider">•</span>
            <a href="mailto:hugobessaa7@gmail.com" className="footer-link">hugobessaa7@gmail.com</a>
          </div>
          
          <div className="footer-section copyright">
            <p>© {year} Shogu's Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}