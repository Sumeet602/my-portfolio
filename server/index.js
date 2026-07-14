const express = require('express');
const cors = require('cors');
const { profile, skills, projects, experience, testimonials } = require('./data/mockData');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// --- API Routes ---

// Profile / About
app.get('/api/profile', (req, res) => {
  res.json(profile);
});

// Skills
app.get('/api/skills', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'All') {
    return res.json(skills.filter(s => s.category === category));
  }
  res.json(skills);
});

// Projects
app.get('/api/projects', (req, res) => {
  const { category } = req.query;
  if (category && category !== 'All') {
    return res.json(projects.filter(p => p.category === category));
  }
  res.json(projects);
});

// Experience
app.get('/api/experience', (req, res) => {
  res.json(experience);
});

// Testimonials
app.get('/api/testimonials', (req, res) => {
  res.json(testimonials);
});

// Contact form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Log to console (replace with DB/email later)
  console.log('\n📬 New Contact Form Submission:');
  console.log(`   Name:    ${name}`);
  console.log(`   Email:   ${email}`);
  console.log(`   Message: ${message}\n`);

  res.json({ success: true, message: 'Thank you! Your message has been received.' });
});

// Placeholder image generator (simple SVG)
app.get('/api/placeholder/:name', (req, res) => {
  const colors = {
    visionchef: ['#10b981', '#06b6d4'],
    finwatch: ['#3b82f6', '#8b5cf6'],
    trading: ['#f59e0b', '#ef4444'],
    aura: ['#ec4899', '#8b5cf6'],
    lamaison: ['#f59e0b', '#f97316'],
    grocery: ['#10b981', '#34d399'],
  };
  const [c1, c2] = colors[req.params.name] || ['#6366f1', '#a855f7'];
  const label = req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1);

  const svg = `
    <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${c1}"/>
          <stop offset="100%" style="stop-color:${c2}"/>
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#g)" rx="12"/>
      <text x="300" y="190" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="28" font-weight="bold" opacity="0.9">${label}</text>
      <text x="300" y="225" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="16" opacity="0.6">Project Preview</text>
    </svg>
  `.trim();

  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio API server running at http://localhost:${PORT}\n`);
});
