import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

export default function Testimonials({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

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

  useEffect(() => {
    if (testimonials.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrent(prev => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [testimonials.length]);

  const goTo = (index) => {
    setCurrent(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
  };

  if (!testimonials.length) return null;

  return (
    <section className="section testimonials" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">Kind words from colleagues and clients I've worked with</p>
        </div>

        <div className={`testimonials__carousel ${isVisible ? 'testimonials__carousel--visible' : ''}`}>
          <div className="testimonials__quote-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#quoteGrad)" strokeWidth="1.5">
              <defs>
                <linearGradient id="quoteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-start)" />
                  <stop offset="100%" stopColor="var(--accent-end)" />
                </linearGradient>
              </defs>
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
            </svg>
          </div>

          <div className="testimonials__slider">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`testimonials__slide ${i === current ? 'testimonials__slide--active' : ''}`}
              >
                <p className="testimonials__text">{t.text}</p>
                <div className="testimonials__author">
                  <div className="testimonials__avatar">
                    <span>{t.avatar}</span>
                  </div>
                  <div>
                    <div className="testimonials__name">{t.name}</div>
                    <div className="testimonials__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                id={`testimonial-dot-${i}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
