import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';

function App() {
  useEffect(() => {
    document.title = "Debabrath - Machine Learning & Data Science";
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <SEOHead />
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;