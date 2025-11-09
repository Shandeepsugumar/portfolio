import './App.css';
import React, { useEffect, useState } from "react";
import Home from './pages/Home.jsx';
import {Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar.jsx';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  return (
    <>
      <div className={theme === 'light' ? 'theme-light' : 'theme-dark'}>
      <NavBar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </main>
      </div>
    </>
  )
}

export default App
