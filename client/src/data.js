const profile = {
  name: "Sumeet Goswami",
  title: "Data Analyst",
  taglines: [
    "Data Analyst",
    "Machine Learning Enthusiast",
    "Data Visualization",
    "SQL & Python"
  ],
  bio: "Data Analyst with a strong foundation in SQL, Python, Excel, and Power BI. Skilled in cleaning, analyzing, and visualizing data to generate insights and support data-driven decision-making. Interested in collaborating on meaningful analytical work in fast-paced environments.",
  resumeUrl: "/resume.pdf",
  stats: [
    { label: "CGPA", value: "7.02" },
    { label: "Projects", value: "6+" },
    { label: "Data Analyzed", value: "GB+" },
    { label: "GitHub Commits", value: "100+" }
  ],
  socials: [
    { platform: "github", url: "https://github.com/Sumeet602", icon: "github" },
    { platform: "linkedin", url: "https://linkedin.com/in/sumeet-goswami-54007531a", icon: "linkedin" },
    { platform: "twitter", url: "https://twitter.com", icon: "twitter" },
    { platform: "email", url: "mailto:goswami.sumeet2004@gmail.com", icon: "mail" }
  ]
};

const skills = [
  { name: "Python", category: "Programming", proficiency: 90, icon: "🐍" },
  { name: "SQL", category: "Programming", proficiency: 95, icon: "🛢️" },
  { name: "JavaScript / React", category: "Programming", proficiency: 80, icon: "⚛️" },
  { name: "NumPy / Pandas", category: "Libraries", proficiency: 95, icon: "📊" },
  { name: "Matplotlib / Seaborn", category: "Libraries", proficiency: 85, icon: "📈" },
  { name: "Scikit-Learn", category: "Libraries", proficiency: 85, icon: "🧠" },
  { name: "Power BI", category: "Tools", proficiency: 90, icon: "📉" },
  { name: "MS Excel", category: "Tools", proficiency: 95, icon: "📗" },
  { name: "Data Cleaning", category: "Analytics", proficiency: 95, icon: "🧹" },
  { name: "EDA", category: "Analytics", proficiency: 90, icon: "🔍" }
];

const projects = [
  {
    id: 1,
    title: "Predictive Diagnostic & Clustering Pipeline",
    description: "Aggregated base models into parallel and sequential ensemble frameworks (Random Forest/AdaBoost) to establish strict feature importance rankings; partitioned unlabeled data structures into optimized spatial groups using centroid and density-based clustering models (K-Means/DBSCAN).",
    image: "/api/placeholder/clustering",
    category: "AI/ML",
    technologies: ["Python", "Scikit-Learn", "NumPy", "Power BI"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sumeet602/predictive-diagnostic",
    featured: true
  },
  {
    id: 2,
    title: "VisionChef & MacroLens",
    description: "AI-powered food recognition and nutrition analysis app. Upload or capture a food photo and get instant ingredient detection, macro estimation (calories, carbs, fats, protein), a health score with clinical explanation, ingredient gap analysis, and 5 smart recipe suggestions.",
    image: "/api/placeholder/visionchef",
    category: "AI/ML",
    technologies: ["Python", "Streamlit", "Google Gemini", "Pillow", "Computer Vision"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sumeet602/visionchef",
    featured: true
  },
  {
    id: 3,
    title: "Finwatch Analytics",
    description: "Intelligent financial tracking and predictive analytics dashboard. Monitors stock trends and uses machine learning models to forecast market movements based on historical data.",
    image: "/api/placeholder/finwatch",
    category: "Data Analytics",
    technologies: ["Python", "Pandas", "Scikit-Learn", "REST APIs"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sumeet602/finwatch",
    featured: true
  },
  {
    id: 4,
    title: "Algorithmic Trading Bot",
    description: "Automated trading and market data analysis system. Backtests trading strategies and executes trades using real-time API integrations and predictive ML algorithms.",
    image: "/api/placeholder/trading",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "Pandas", "WebSockets"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sumeet602/algorithmic-trading-bot",
    featured: false
  },
  {
    id: 5,
    title: "Aura Dating Matchmaker",
    description: "Smart matchmaking platform leveraging data to connect users. Implemented an AI-driven recommendation algorithm based on user preferences and behavioral analytics.",
    image: "/api/placeholder/aura",
    category: "AI/ML",
    technologies: ["Node.js", "Python (API)", "PostgreSQL", "ML Algorithms"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sumeet602/aura-dating-app",
    featured: false
  },
  {
    id: 6,
    title: "La Maison Dorée Analytics",
    description: "Advanced restaurant management platform with real-time analytics. Tracks booking trends, predicts peak hours, and optimizes table turnover using historical reservation data.",
    image: "/api/placeholder/lamaison",
    category: "Data Analytics",
    technologies: ["Express", "MongoDB", "Data Visualization", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sumeet602/la-maison-doree",
    featured: false
  },
  {
    id: 7,
    title: "Smart Grocery Assistant",
    description: "AI-architected full-stack grocery application. Features intelligent product categorization and dynamic inventory predictions built by a multi-agent AI system.",
    image: "/api/placeholder/grocery",
    category: "AI/ML",
    technologies: ["Node.js", "AI Agents", "Data Modeling"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sumeet602/smart-grocery-app",
    featured: false
  }
];

const experience = [
  {
    id: 1,
    role: "Data Analyst Intern",
    company: "Retail Data Analytics Lifecycle",
    duration: "January 2026 — April 2026",
    description: "Demonstrated a complete, company-level data analytics lifecycle aimed at understanding customer shopping behavior for a leading retail company.",
    highlights: [
      "Uncovered patterns across demographics, sales channels, and promotional activities to optimize marketing strategies",
      "Designed and maintained production-ready Power BI dashboards tracking core business revenue drivers",
      "Tracked channel volumes and subscription conversions for cross-functional business units"
    ]
  },
  {
    id: 2,
    role: "B.Tech Computer Science Engineering",
    company: "Parul University (Vadodara, Gujarat)",
    duration: "2022 — 2026",
    description: "CGPA: 7.02 / 10",
    highlights: [
      "Focus on Machine Learning and Data Science",
      "Certifications: NPTEL Computer Network (2024), Introduction to IoT (2025)"
    ]
  }
];

const testimonials = [
  {
    id: 1,
    name: "Retail Analytics Manager",
    role: "Data Team Lead",
    text: "Sumeet's work on the Power BI dashboards directly improved our ability to track core revenue drivers and marketing campaign conversions.",
    avatar: "RA"
  }
];

export { profile, skills, projects, experience, testimonials };
