import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './input.css';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Project from './components/Project';
import Reactjs from './components/Reactjs';
import Resume from './components/Resume';
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Reactjs />} />
          <Route path='/project' element={<div className='m-2'><Project /></div>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        
        </Routes>
          {/* <Skills /> */}
          <Resume />
      </BrowserRouter>
    </>
  );
}

export default App;
