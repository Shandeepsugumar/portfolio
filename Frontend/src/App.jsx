import './App.css';
import React, { useEffect, useState } from "react";
import Home from './pages/Home.jsx';
import {Routes, Route, useLocation} from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import Lenis from '@studio-freight/lenis';
import { initScrollReveal } from './utils/scrollReveal.js';

function App() {
  const [theme, setTheme] = useState('dark');

  const location = useLocation();

  useEffect(() => {
    initScrollReveal();
  }, [location]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }

    return () => lenis.destroy();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  return (
    <div className={theme === 'light' ? 'theme-light' : 'theme-dark'}>
      <NavBar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
