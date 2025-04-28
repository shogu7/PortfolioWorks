import Router from './pages/router';
import Warning from './components/warning.jsx';
import Navbar from './components/navbar.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Warning />
      <Navbar />
      <Router /> 
    </BrowserRouter>
    </>
  );
}

export default App;