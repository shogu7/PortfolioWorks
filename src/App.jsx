import Router from './pages/router';
import Warning from './components/ui/Warning/warning.jsx';
import Navbar from './components/layout/Navbar/navbar.jsx';
import Footer from './components/layout/Footer/footer.jsx'
import ParticlesBackground from './components/effects/particlesbackground.jsx';
import { BrowserRouter } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <div className="App">
    <ParticlesBackground />
        <Warning />
        <Navbar />
        <main>
          <Router />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;