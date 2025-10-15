import { Routes, Route } from 'react-router-dom';
import Accueil from './Accueil.jsx';
import Projets from './Projets.jsx';
import Contact from './Contact.jsx';
import ProjectsDetails from './projectsDetails/projectDetails.jsx';

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
