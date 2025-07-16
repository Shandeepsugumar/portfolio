import './App.css';
import React, { useState } from "react";
import Home from './pages/Home.jsx';
import {Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <NavBar />
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
