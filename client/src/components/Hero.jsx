import { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero({ profile }) {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const taglines = profile?.taglines || ['Developer'];

  useEffect(() => {
    const current = taglines[currentTagline];
    let timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTagline, taglines]);

  return (
    <section className="hero" id="hero">
      {/* Animated Background */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
        <div className="hero__grid"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__badge animate-fade-in-up">
          <span className="hero__badge-dot"></span>
          Available for Freelance
        </div>

        <h1 className="hero__title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Hi, I'm{' '}
          <span className="gradient-text">{profile?.name || 'Alex Johnson'}</span>
        </h1>

        <div className="hero__typewriter animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="hero__typewriter-text">{displayText}</span>
          <span className="hero__typewriter-cursor">|</span>
        </div>

        <p className="hero__subtitle animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          I craft beautiful, performant, and accessible web experiences
          <br />that users love and businesses depend on.
        </p>

        <div className="hero__actions animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="#contact" className="btn btn-primary" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Get In Touch
          </a>
          <a href={profile?.resumeUrl || '#'} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
        </div>

        <div className="hero__scroll-indicator animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="hero__mouse">
            <div className="hero__mouse-wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </div>
    </section>
  );
}
