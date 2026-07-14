import { useState, useEffect, useRef } from 'react';
import './Skills.css';

export default function Skills({ skills }) {
  const [filter, setFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const categories = ['All', 'Frontend', 'Backend', 'Tools'];

  const filtered = filter === 'All' ? skills : skills.filter(s => s.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section skills" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">Technologies I work with to bring ideas to life</p>
        </div>

        <div className="skills__filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`skills__filter ${filter === cat ? 'skills__filter--active' : ''}`}
              onClick={() => setFilter(cat)}
              id={`filter-skill-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills__grid">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className={`skills__card glass-card ${isVisible ? 'skills__card--visible' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="skills__card-header">
                <span className="skills__icon">{skill.icon}</span>
                <div>
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__category">{skill.category}</span>
                </div>
                <span className="skills__percentage">{skill.proficiency}%</span>
              </div>
              <div className="skills__bar-track">
                <div
                  className="skills__bar-fill"
                  style={{
                    width: isVisible ? `${skill.proficiency}%` : '0%',
                    transitionDelay: `${i * 0.08 + 0.3}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
