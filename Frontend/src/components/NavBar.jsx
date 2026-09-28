import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./navbar.css";

function NavBar({ theme = 'light', onToggleTheme = () => {} }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-30% 0px -70% 0px', threshold: 0 });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => observer.observe(sec));

    return () => sections.forEach(sec => observer.unobserve(sec));
  }, []);

  // Custom smooth scroll with highlight
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false); // Close menu on link click (mobile)
  };

  return (
    <nav className="navbar" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="navbar-brand">
        {/* Brand icon */}
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.79A9 9 0 0 1 12.79 3a7 7 0 1 0 8.21 9.79z" fill={theme === 'light' ? '#e65100' : '#ffd54f'}/>
        </svg>
        <span style={{fontWeight: 700, fontSize: '2rem', color: theme === 'light' ? '#e65100' : '#ffd54f', letterSpacing: '2px', fontFamily: 'Montserrat, Inter, Segoe UI, Arial, sans-serif'}}>MyPortfolio</span>
      </div>
      <button
        className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="navbar-mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="navbar-links">
        {['home', 'about', 'skills', 'projects', 'certificates', 'contact'].map(id => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-link${activeSection === id ? ' active' : ''}`}
            onClick={e => handleNavClick(e, id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <button
          className="theme-toggle-btn"
          type="button"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          onClick={onToggleTheme}
          title={theme === 'light' ? 'Dark mode' : 'Light mode'}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
      <div
        id="navbar-mobile-menu"
        className={`navbar-mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {['home', 'about', 'skills', 'projects', 'certificates', 'contact'].map(id => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-link${activeSection === id ? ' active' : ''}`}
            onClick={e => handleNavClick(e, id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <button
          className="theme-toggle-btn mobile"
          type="button"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          onClick={() => { onToggleTheme(); setMenuOpen(false); }}
          title={theme === 'light' ? 'Dark mode' : 'Light mode'}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;