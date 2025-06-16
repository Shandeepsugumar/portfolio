import './App.css';
import Home from './pages/Home.jsx';
import {Routes, Route} from "react-router-dom";
import NavBar from './Components/NavBar.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
