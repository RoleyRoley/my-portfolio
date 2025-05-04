// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechCarousel from './components/TechCarousel';
import './index.css'; 





function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <TechCarousel />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
