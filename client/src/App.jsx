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

const API_BASE = 'http://localhost:5000';

function App() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, skillsRes, projectsRes, expRes, testRes] = await Promise.all([
          fetch(`${API_BASE}/api/profile`),
          fetch(`${API_BASE}/api/skills`),
          fetch(`${API_BASE}/api/projects`),
          fetch(`${API_BASE}/api/experience`),
          fetch(`${API_BASE}/api/testimonials`),
        ]);

        setProfile(await profileRes.json());
        setSkills(await skillsRes.json());
        setProjects(await projectsRes.json());
        setExperience(await expRes.json());
        setTestimonials(await testRes.json());
      } catch (err) {
        console.error('Failed to fetch data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
