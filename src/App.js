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
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/company' element={<Company />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/newproject' element={<NewProject />}></Route>
            <Route path='/project/:id' element={<Project />}></Route>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
