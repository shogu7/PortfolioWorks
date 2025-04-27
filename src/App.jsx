import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil';
import Projets from './pages/Projets';
import Navbar from './components/navbar.jsx' 
import Warning from './components/warning.jsx'
import shoguLogo from './ressources/shogu_logo.png';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Warning />
      <Navbar /> {/* Ajout de la Navbar */}
      
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={shoguLogo} className="logo react" alt="Shogu's Logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Routes de ton application */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App