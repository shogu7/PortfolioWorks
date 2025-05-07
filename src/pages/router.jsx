import { Routes, Route } from 'react-router-dom';
import Accueil from './Accueil.jsx';
import Projets from './Projets.jsx';
import Contact from './contact.jsx';

function Router() {
  return (
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
  );
}

export default Router;
