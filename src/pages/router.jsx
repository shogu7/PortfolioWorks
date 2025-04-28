import { Routes, Route } from 'react-router-dom';
import Accueil from './Accueil.jsx';
import Projets from './Projets.jsx';

function Router() {
  return (
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
  );
}

export default Router;
