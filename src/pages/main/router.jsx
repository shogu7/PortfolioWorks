import { Routes, Route } from 'react-router-dom';
import Accueil from './Accueil.jsx';
import Projets from '../projects/Projets.jsx';
import Contact from '../other/Contact.jsx';
import ProjectsDetails from '../projects/projectDetails.jsx';

function Router() {
  return (
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projets/:title" element={<ProjectsDetails />} />
      </Routes>
  );
}

export default Router;
