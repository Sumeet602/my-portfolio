import { useState, useEffect, useRef } from 'react';
import './Projects.css';

const API_BASE = 'http://localhost:5000';

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const categories = ['All', 'Web', 'Mobile', 'Other'];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section projects" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A showcase of my recent work and side projects</p>
        </div>

        <div className="projects__filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`skills__filter ${filter === cat ? 'skills__filter--active' : ''}`}
              onClick={() => setFilter(cat)}
              id={`filter-project-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`projects__card glass-card ${isVisible ? 'projects__card--visible' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="projects__image">
                <img src={`${API_BASE}${project.image}`} alt={project.title} loading="lazy" />
                <div className="projects__image-overlay">
                  <a href={project.liveUrl} className="projects__link" target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                  <a href={project.githubUrl} className="projects__link" target="_blank" rel="noopener noreferrer" aria-label="View source code">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
                {project.featured && <span className="projects__badge">Featured</span>}
              </div>
              <div className="projects__info">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__desc">{project.description}</p>
                <div className="projects__tags">
                  {project.technologies.map(tech => (
                    <span key={tech} className="projects__tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
