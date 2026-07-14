const profile = {
  name: "Sumeet Goswami",
  title: "AI/ML Engineer",
  taglines: [
    "Machine Learning Engineer",
    "Computer Vision Specialist",
    "Data Scientist",
    "AI Architect"
  ],
  bio: "I'm a passionate AI/ML Engineer with expertise in building intelligent systems, training robust machine learning models, and deploying AI solutions. I specialize in Computer Vision, predictive analytics, and algorithmic problem-solving. My goal is to leverage data to solve complex real-world challenges.",
  resumeUrl: "#",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Models Deployed", value: "15+" },
    { label: "Data Analyzed", value: "TB+" },
    { label: "GitHub Commits", value: "2K+" }
  ],
  socials: [
    { platform: "github", url: "https://github.com/Sumeet602", icon: "github" },
    { platform: "linkedin", url: "https://linkedin.com", icon: "linkedin" },
    { platform: "twitter", url: "https://twitter.com", icon: "twitter" },
    { platform: "email", url: "mailto:sumeet@example.com", icon: "mail" }
  ]
};

const skills = [
  { name: "Python", category: "Machine Learning", proficiency: 95, icon: "🐍" },
  { name: "TensorFlow", category: "Machine Learning", proficiency: 90, icon: "🧠" },
  { name: "PyTorch", category: "Machine Learning", proficiency: 85, icon: "🔥" },
  { name: "Scikit-Learn", category: "Machine Learning", proficiency: 92, icon: "🔬" },
  { name: "SQL", category: "Data Analytics", proficiency: 88, icon: "🛢️" },
  { name: "Pandas/NumPy", category: "Data Analytics", proficiency: 95, icon: "📊" },
  { name: "Tableau", category: "Data Analytics", proficiency: 80, icon: "📈" },
  { name: "Docker", category: "Deployment", proficiency: 85, icon: "🐳" },
  { name: "AWS/GCP", category: "Deployment", proficiency: 82, icon: "☁️" },
  { name: "FastAPI / Flask", category: "Deployment", proficiency: 88, icon: "⚡" },
  { name: "Git", category: "Tools", proficiency: 90, icon: "📦" },
  { name: "C++", category: "Tools", proficiency: 75, icon: "⚙️" },
  { name: "Jupyter", category: "Tools", proficiency: 95, icon: "📓" }
];

const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    title: "Algorithmic Trading Bot",
    description: "Automated trading and market data analysis system. Backtests trading strategies and executes trades using real-time API integrations and predictive ML algorithms.",
    image: "/api/placeholder/trading",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "Pandas", "WebSockets"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sumeet602/algorithmic-trading-bot",
    featured: true
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    role: "Machine Learning Engineer",
    company: "TechAI Solutions",
    duration: "Jan 2024 — Present",
    description: "Designing and deploying scalable machine learning models for computer vision and predictive analytics.",
    highlights: [
      "Developed a custom food-recognition pipeline improving accuracy by 25%",
      "Deployed models using Docker and FastAPI on AWS infrastructure",
      "Automated data preprocessing pipelines reducing manual work by 60%"
    ]
  },
  {
    id: 2,
    role: "Data Scientist",
    company: "DataCorp",
    duration: "Jun 2022 — Dec 2023",
    description: "Analyzed large-scale datasets to extract actionable business insights and build predictive models.",
    highlights: [
      "Built a churn prediction model with 89% accuracy using Scikit-Learn",
      "Created interactive Tableau dashboards for executive stakeholders",
      "Optimized SQL queries handling millions of rows, improving load times by 40%"
    ]
  },
  {
    id: 3,
    role: "AI Developer Intern",
    company: "StartUp Innovate",
    duration: "Jan 2022 — May 2022",
    description: "Assisted in the research and development of NLP and Computer Vision prototypes.",
    highlights: [
      "Trained custom image classification models using PyTorch",
      "Integrated generative AI APIs for content generation",
      "Collaborated with backend engineers to deploy models as RESTful services"
    ]
  }
];

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    role: "Lead Data Scientist",
    text: "Sumeet's deep understanding of algorithmic design and machine learning architectures is exceptional. They have a rare ability to translate complex data into highly accurate models and deploy them flawlessly.",
    avatar: "SM"
  },
  {
    id: 2,
    name: "David Chen",
    role: "CTO",
    text: "Working with Sumeet on the trading platform was incredible. Their predictive algorithms were robust and rigorously backtested. Sumeet is a brilliant engineer who thinks deeply about data.",
    avatar: "DC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    text: "Sumeet bridged the gap between our business needs and AI capabilities perfectly. The VisionChef implementation was a massive success thanks to their computer vision expertise.",
    avatar: "ER"
  }
];

export { profile, skills, projects, experience, testimonials };

