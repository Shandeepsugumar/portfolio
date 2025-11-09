import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./navbar.css";

function NavBar({ theme = 'light', onToggleTheme = () => {} }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Custom smooth scroll with highlight
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      section.classList.add("section-highlight");
      setTimeout(() => {
        section.classList.remove("section-highlight");
      }, 800);
    }
    setMenuOpen(false); // Close menu on link click (mobile)
  };

  return (
    <nav className="navbar">
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
        <a href="#home" className="nav-link" onClick={e => handleNavClick(e, "home")}>Home</a>
        <a href="#about" className="nav-link" onClick={e => handleNavClick(e, "about")}>About</a>
        <a href="#skills" className="nav-link" onClick={e => handleNavClick(e, "skills")}>Skills</a>
        <a href="#projects" className="nav-link" onClick={e => handleNavClick(e, "projects")}>Projects</a>
        <a href="#certificates" className="nav-link" onClick={e => handleNavClick(e, "certificates")}>Certificates</a>
        <a href="#contact" className="nav-link" onClick={e => handleNavClick(e, "contact")}>Contact</a>
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
        <a href="#home" className="nav-link" onClick={e => handleNavClick(e, "home")}>Home</a>
        <a href="#about" className="nav-link" onClick={e => handleNavClick(e, "about")}>About</a>
        <a href="#skills" className="nav-link" onClick={e => handleNavClick(e, "skills")}>Skills</a>
        <a href="#projects" className="nav-link" onClick={e => handleNavClick(e, "projects")}>Projects</a>
        <a href="#certificates" className="nav-link" onClick={e => handleNavClick(e, "certificates")}>Certificates</a>
        <a href="#contact" className="nav-link" onClick={e => handleNavClick(e, "contact")}>Contact</a>
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