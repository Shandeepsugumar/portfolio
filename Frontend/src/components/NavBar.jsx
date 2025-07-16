import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* Yellow moon SVG icon */}
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.79A9 9 0 0 1 12.79 3a7 7 0 1 0 8.21 9.79z" fill="#ffd54f"/>
        </svg>
        <span style={{fontWeight: 700, fontSize: '2rem', color: '#ffd54f', letterSpacing: '2px', fontFamily: 'Montserrat, Inter, Segoe UI, Arial, sans-serif'}}>MyPortfolio</span>
      </div>
      <div className="navbar-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#certificates" className="nav-link">Certificates</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
}

export default NavBar;