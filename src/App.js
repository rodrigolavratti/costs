import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './component/pages/Home';
import Company from './component/pages/Company';
import Contact from './component/pages/Contact';
import NewProject from './component/pages/NewProject';
import Projects from './component/pages/Projects';
import Project from './component/pages/Project';

import Container from './component/layout/Container';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/company' element={<Company />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/newproject' element={<NewProject />} />
            <Route path='/project/:id' element={<Project />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
