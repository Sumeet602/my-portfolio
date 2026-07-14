import { useEffect, useRef, useState } from 'react';
import './Experience.css';

export default function Experience({ experience }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <section className="section experience" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">Where I've worked and what I've accomplished</p>
        </div>

        <div className="timeline">
          <div className="timeline__line"></div>
          {experience.map((exp, i) => (
            <div
              key={exp.id}
              className={`timeline__item ${isVisible ? 'timeline__item--visible' : ''} ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="timeline__dot">
                <div className="timeline__dot-inner"></div>
              </div>
              <div className="timeline__card glass-card">
                <div className="timeline__duration">{exp.duration}</div>
                <h3 className="timeline__role">{exp.role}</h3>
                <div className="timeline__company">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  {exp.company}
                </div>
                <p className="timeline__desc">{exp.description}</p>
                <ul className="timeline__highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-start)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
