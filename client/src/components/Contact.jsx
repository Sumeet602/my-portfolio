import { useState, useRef, useEffect } from 'react';
import './Contact.css';

import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.target);
    formData.append("access_key", "aa649ea0-f3dc-4524-9ccd-1e179e85dc2d");
    formData.append("subject", `New Portfolio Contact from ${form.name}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
    
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section className="section contact" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">Have a project in mind? Let's discuss how I can help</p>
        </div>

        <div className={`contact__grid ${isVisible ? 'contact__grid--visible' : ''}`}>
          <div className="contact__info">
            <div className="contact__info-card glass-card">
              <div className="contact__info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <h4 className="contact__info-label">Email</h4>
                <p className="contact__info-value">goswami.sumeet2004@gmail.com</p>
              </div>
            </div>

            <div className="contact__info-card glass-card">
              <div className="contact__info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4 className="contact__info-label">Location</h4>
                <p className="contact__info-value">San Francisco, CA</p>
              </div>
            </div>

            <div className="contact__info-card glass-card">
              <div className="contact__info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div>
                <h4 className="contact__info-label">Availability</h4>
                <p className="contact__info-value">Open for freelance</p>
              </div>
            </div>
          </div>

          <form className="contact__form glass-card" onSubmit={handleSubmit} id="contact-form">
            <div className="contact__field">
              <label htmlFor="contact-name">Your Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email">Your Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary contact__submit"
              disabled={status === 'sending'}
              id="contact-submit"
            >
              {status === 'sending' ? (
                <>
                  <span className="contact__spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="contact__status contact__status--success">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="contact__status contact__status--error">
                ❌ Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
