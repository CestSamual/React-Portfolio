import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectGallery from './Pages/ProjectGallery/';
import Home from './Pages/Home/';
import Contact from './Pages/Contact/';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  

  return (
    <Router>
      <div>
        <Header />
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
