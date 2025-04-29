import Router from './pages/router';
import Warning from './components/warning.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx'
import { BrowserRouter } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Warning />
        <Navbar />
        <main>
          <Router />
        </main>
        <Footer />
    </BrowserRouter>
  );
}

export default App;