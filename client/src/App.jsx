import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import data statically
import { profile, skills, projects, experience, testimonials } from './data';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for the nice spinner effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader__spinner"></div>
        <p>Loading portfolio...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Testimonials testimonials={testimonials} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
