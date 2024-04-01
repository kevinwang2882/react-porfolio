import Header from './components/Header'
import Resume from './components/Resume'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Project from './components/Project'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import React from 'react';
import Home from './components/Home'

function App() {
  return (
   
      <div className="App">
      
        <Header />
       
        <Routes className="main-container">
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<Resume />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
       
       
      </div>
   
  );
}

export default App
