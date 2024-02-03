import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectGallery from './Pages/ProjectGallery';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  

  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Project-Gallery" element={<ProjectGallery/>} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
