import { 
  Code, 
  Server,
  BarChart3,
  Brain
} from 'lucide-react'
import { industryCertifications, youtubePlaylists } from './certificationsData'

export interface Certification {
  name: string
  provider: string
  type: 'free' | 'paid'
  duration: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  url: string
  description: string
  price?: string
  currency?: 'USD' | 'INR'
}

export interface YouTubePlaylist {
  title: string
  channel: string
  videos: number
  duration: string
  language: 'English' | 'Hindi' | 'Mixed'
  targetAudience: 'Indian' | 'International' | 'Both'
  url: string
  description: string
  rating: number
}

export interface SkillData {
  title: string
  icon: any
  color: string
  description: string
  demand: string
  salary: string
  companies: string[]
  certifications: Certification[]
  youtubePlaylists: YouTubePlaylist[]
  detailedSkills?: { [key: string]: string[] }
  roadmap: {
    [key: string]: {
      title: string
      goal: string
      skills: string[]
      projects: string[]
      freeResources: { title: string; url: string; description: string }[]
      paidResources: { title: string; url: string; description: string }[]
      certifications: Certification[]
      youtubePlaylists: YouTubePlaylist[]
    }
  }
}

export const skillsData: { [key: string]: SkillData } = {
  frontend: {
    title: 'Frontend Developer',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    description: 'Build beautiful, responsive user interfaces and interactive web applications',
    demand: 'Very High',
    salary: 'High',
    companies: ['Google', 'Meta', 'Netflix', 'Airbnb', 'Shopify'],
    certifications: industryCertifications.frontend || [],
    youtubePlaylists: youtubePlaylists.frontend || [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Build strong foundations & get your first projects',
        skills: [
          'HTML5, CSS3, JavaScript (ES6+)',
          'Responsive Design & CSS Grid/Flexbox',
          'DOM Manipulation & Events',
          'Basic Git & Version Control',
          'Web Accessibility (WCAG)',
          'Browser Developer Tools',
          'CSS Preprocessors (Sass/SCSS)',
          'JavaScript Frameworks (React/Vue/Angular basics)',
          'Package Managers (npm/yarn)',
          'Build Tools (Webpack/Vite basics)'
        ],
        projects: [
          'Personal Portfolio Website',
          'Responsive Landing Page',
          'Todo List Application',
          'Weather App with API',
          'Calculator Application'
        ],
        freeResources: [
          {
            title: 'freeCodeCamp',
            url: 'https://www.freecodecamp.org/',
            description: 'Free coding bootcamp with comprehensive web development curriculum'
          },
          {
            title: 'MDN Web Docs',
            url: 'https://developer.mozilla.org/',
            description: 'Comprehensive documentation and tutorials for web technologies'
          },
          {
            title: 'W3Schools',
            url: 'https://www.w3schools.com/',
            description: 'Interactive tutorials for web development technologies'
          }
        ],
        paidResources: [
          {
            title: 'Frontend Masters',
            url: 'https://frontendmasters.com/',
            description: 'Advanced frontend development courses'
          }
        ],
        certifications: (industryCertifications.frontend || []).filter(cert => cert.difficulty === 'beginner'),
        youtubePlaylists: (youtubePlaylists.frontend || []).filter(playlist => 
          playlist.targetAudience === 'Indian' || playlist.targetAudience === 'Both'
        )
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master frameworks & build production-ready applications',
        skills: [
          'Advanced JavaScript (ES6+, Async/Await, Promises)',
          'React/Vue/Angular (State Management)',
          'TypeScript',
          'Testing (Jest, Cypress, React Testing Library)',
          'Performance Optimization',
          'Webpack/Vite Advanced Configuration',
          'CSS-in-JS (Styled Components, Emotion)',
          'Progressive Web Apps (PWA)',
          'GraphQL & REST APIs',
          'CI/CD & Deployment'
        ],
        projects: [
          'E-commerce Application',
          'Real-time Chat Application',
          'Dashboard with Data Visualization',
          'Mobile-First Web App',
          'Open Source Contribution'
        ],
        freeResources: [
          {
            title: 'React Documentation',
            url: 'https://react.dev/',
            description: 'Official React documentation and tutorials'
          }
        ],
        paidResources: [
          {
            title: 'React - The Complete Guide',
            url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
            description: 'Comprehensive React course with hooks and Redux'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead frontend architecture & mentor junior developers',
        skills: [
          'Advanced React Patterns & Performance',
          'Micro-frontends Architecture',
          'WebAssembly (WASM)',
          'Advanced CSS (Custom Properties, Grid, Flexbox)',
          'Design Systems & Component Libraries',
          'Accessibility (WCAG 2.1)',
          'SEO & Core Web Vitals',
          'Advanced Testing Strategies',
          'Team Leadership & Code Reviews',
          'Technical Writing & Documentation'
        ],
        projects: [
          'Design System Implementation',
          'Micro-frontend Architecture',
          'Performance Optimization Project',
          'Accessibility Audit & Implementation',
          'Technical Blog/Content Creation'
        ],
        freeResources: [],
        paidResources: [
          {
            title: 'Advanced React Patterns',
            url: 'https://kentcdodds.com/',
            description: 'Advanced React patterns and best practices'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive frontend strategy & innovation at scale',
        skills: [
          'Frontend Architecture & System Design',
          'Performance Engineering',
          'Cross-platform Development (React Native, Electron)',
          'Advanced Build Tools & Bundling',
          'Browser Internals & V8 Engine',
          'Web Standards & Specifications',
          'Team Management & Technical Leadership',
          'Product Strategy & User Experience',
          'Open Source Leadership',
          'Conference Speaking & Thought Leadership'
        ],
        projects: [
          'Large-scale Frontend Architecture',
          'Performance Monitoring System',
          'Developer Tooling & Libraries',
          'Technical Conference Talks',
          'Open Source Project Leadership'
        ],
        freeResources: [],
        paidResources: [
          {
            title: 'Frontend Architecture for Design Systems',
            url: 'https://www.oreilly.com/',
            description: 'Advanced frontend architecture patterns'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  backend: {
    title: 'Backend Developer',
    icon: Server,
    color: 'from-blue-500 to-cyan-500',
    description: 'Build robust server-side applications and APIs',
    demand: 'Very High',
    salary: 'High',
    companies: ['Amazon', 'Google', 'Microsoft', 'Netflix', 'Uber'],
    certifications: industryCertifications.backend || [],
    youtubePlaylists: youtubePlaylists.backend || [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn server-side fundamentals',
        skills: [
          'Programming Language (Node.js/Python/Java)',
          'HTTP & REST APIs',
          'Database Basics (SQL/NoSQL)',
          'Git & Version Control',
          'Basic Security Concepts',
          'API Design Principles',
          'Testing Fundamentals',
          'Deployment Basics',
          'Environment Management',
          'Basic DevOps Concepts'
        ],
        projects: [
          'REST API with CRUD Operations',
          'User Authentication System',
          'Blog API with Database',
          'File Upload Service',
          'Basic Chat Application'
        ],
        freeResources: [
          {
            title: 'Node.js Documentation',
            url: 'https://nodejs.org/docs/',
            description: 'Official Node.js documentation and guides'
          },
          {
            title: 'Express.js Guide',
            url: 'https://expressjs.com/',
            description: 'Web application framework for Node.js'
          }
        ],
        paidResources: [
          {
            title: 'Complete Node.js Developer Course',
            url: 'https://www.udemy.com/',
            description: 'Comprehensive Node.js development course'
          }
        ],
        certifications: (industryCertifications.backend || []).filter(cert => cert.difficulty === 'beginner'),
        youtubePlaylists: (youtubePlaylists.backend || []).filter(playlist => 
          playlist.targetAudience === 'Indian' || playlist.targetAudience === 'Both'
        )
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Build scalable production systems',
        skills: [
          'Advanced Database Design & Optimization',
          'Microservices Architecture',
          'Message Queues (Redis, RabbitMQ)',
          'Caching Strategies',
          'API Gateway & Load Balancing',
          'Containerization (Docker)',
          'Cloud Platforms (AWS/Azure/GCP)',
          'Monitoring & Logging',
          'Security Best Practices',
          'Performance Optimization'
        ],
        projects: [
          'Microservices E-commerce Platform',
          'Real-time Notification System',
          'Data Processing Pipeline',
          'API Gateway Implementation',
          'Distributed System Design'
        ],
        freeResources: [
          {
            title: 'Docker Documentation',
            url: 'https://docs.docker.com/',
            description: 'Containerization platform documentation'
          }
        ],
        paidResources: [
          {
            title: 'Microservices Architecture',
            url: 'https://www.udemy.com/',
            description: 'Building scalable microservices systems'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Architect enterprise systems',
        skills: [
          'System Design & Architecture',
          'Distributed Systems',
          'Event-driven Architecture',
          'Advanced Security (OAuth, JWT, Encryption)',
          'Database Sharding & Replication',
          'Kubernetes & Orchestration',
          'CI/CD Pipelines',
          'Performance Engineering',
          'Team Leadership',
          'Technical Documentation'
        ],
        projects: [
          'High-traffic API Design',
          'Event-driven Architecture',
          'Database Migration System',
          'Security Audit & Implementation',
          'Team Mentoring Program'
        ],
        freeResources: [],
        paidResources: [
          {
            title: 'System Design Interview',
            url: 'https://www.educative.io/',
            description: 'System design patterns and best practices'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive technical strategy and innovation',
        skills: [
          'Enterprise Architecture',
          'Technical Strategy & Planning',
          'Advanced Performance Engineering',
          'Security Architecture',
          'Team Management',
          'Cross-functional Collaboration',
          'Technical Standards & Governance',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership'
        ],
        projects: [
          'Enterprise Architecture Design',
          'Technical Strategy Implementation',
          'Performance Optimization at Scale',
          'Security Framework Development',
          'Technical Leadership Program'
        ],
        freeResources: [],
        paidResources: [
          {
            title: 'Enterprise Architecture Patterns',
            url: 'https://www.oreilly.com/',
            description: 'Advanced enterprise architecture strategies'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  fullstack: {
    title: 'Full Stack Developer',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    description: 'Master both frontend and backend development',
    demand: 'Very High',
    salary: 'Very High',
    companies: ['Google', 'Meta', 'Netflix', 'Airbnb', 'Shopify'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Build strong foundations in both frontend and backend',
        skills: [
          'HTML5, CSS3, JavaScript (ES6+)',
          'React/Vue/Angular basics',
          'Node.js/Python/Java basics',
          'Database basics (SQL/NoSQL)',
          'Git & Version Control',
          'REST API basics',
          'HTTP & Web protocols',
          'Basic deployment',
          'Testing fundamentals',
          'Development tools'
        ],
        projects: [
          'Full-stack Todo Application',
          'Blog with Admin Panel',
          'E-commerce Store (Basic)',
          'Weather App with Backend',
          'User Authentication System'
        ],
        freeResources: [
          {
            title: 'freeCodeCamp Full Stack',
            url: 'https://www.freecodecamp.org/',
            description: 'Complete full-stack development curriculum'
          }
        ],
        paidResources: [
          {
            title: 'The Complete Web Developer Course',
            url: 'https://www.udemy.com/',
            description: 'Comprehensive full-stack development course'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master both frontend and backend technologies',
        skills: [
          'Advanced JavaScript & TypeScript',
          'React/Vue/Angular (Advanced)',
          'Node.js/Python/Java (Advanced)',
          'Database design & optimization',
          'API design & development',
          'Authentication & Authorization',
          'Testing (Unit, Integration, E2E)',
          'Docker & Containerization',
          'Cloud platforms (AWS/Azure/GCP)',
          'CI/CD pipelines'
        ],
        projects: [
          'Microservices E-commerce Platform',
          'Real-time Chat Application',
          'Social Media Platform',
          'API Gateway Implementation',
          'Multi-tenant SaaS Application'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead full-stack architecture and development',
        skills: [
          'System Design & Architecture',
          'Microservices & Distributed Systems',
          'Advanced Database Design',
          'Performance Optimization',
          'Security Best Practices',
          'DevOps & Infrastructure',
          'Team Leadership',
          'Code Reviews & Mentoring',
          'Technical Documentation',
          'Project Management'
        ],
        projects: [
          'Large-scale Web Application',
          'Distributed System Design',
          'Performance Optimization Project',
          'Security Implementation',
          'Team Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive technical strategy and innovation',
        skills: [
          'Enterprise Architecture',
          'Technical Strategy & Planning',
          'Advanced Performance Engineering',
          'Security Architecture',
          'Team Management',
          'Cross-functional Collaboration',
          'Technical Standards & Governance',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership'
        ],
        projects: [
          'Enterprise Architecture Design',
          'Technical Strategy Implementation',
          'Performance Optimization at Scale',
          'Security Framework Development',
          'Technical Leadership Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  mobile: {
    title: 'Mobile Developer',
    icon: Code,
    color: 'from-orange-500 to-red-500',
    description: 'Build native and cross-platform mobile apps',
    demand: 'High',
    salary: 'High',
    companies: ['Google', 'Apple', 'Meta', 'Uber', 'Airbnb'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn mobile development fundamentals',
        skills: [
          'React Native / Flutter / Swift / Kotlin',
          'Mobile UI/UX Design',
          'Platform-specific APIs',
          'State Management',
          'Navigation & Routing',
          'HTTP & API Integration',
          'Local Storage & Databases',
          'Testing (Unit, Integration)',
          'App Store Deployment',
          'Version Control'
        ],
        projects: [
          'Todo Mobile App',
          'Weather App',
          'Social Media App (Basic)',
          'E-commerce App (Basic)',
          'Fitness Tracker App'
        ],
        freeResources: [
          {
            title: 'React Native Documentation',
            url: 'https://reactnative.dev/',
            description: 'Official React Native documentation'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master mobile development and build production apps',
        skills: [
          'Advanced Mobile Frameworks',
          'Native Module Development',
          'Performance Optimization',
          'Push Notifications',
          'Offline-first Architecture',
          'Advanced State Management',
          'Testing (E2E, Performance)',
          'CI/CD for Mobile',
          'App Store Optimization',
          'Cross-platform Development'
        ],
        projects: [
          'Real-time Chat Mobile App',
          'E-commerce Mobile Platform',
          'Social Media App (Advanced)',
          'Fitness Tracking App (Advanced)',
          'Cross-platform App'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead mobile development and architecture',
        skills: [
          'Mobile Architecture Patterns',
          'Advanced Performance Engineering',
          'Security & Privacy',
          'Team Leadership',
          'Code Reviews & Mentoring',
          'Technical Documentation',
          'Project Management',
          'App Store Strategy',
          'Cross-platform Strategy',
          'Mobile DevOps'
        ],
        projects: [
          'Large-scale Mobile App',
          'Mobile Architecture Design',
          'Performance Optimization',
          'Security Implementation',
          'Team Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive mobile strategy and innovation',
        skills: [
          'Mobile Strategy & Planning',
          'Advanced Architecture',
          'Performance Engineering',
          'Security Architecture',
          'Team Management',
          'Cross-functional Collaboration',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership'
        ],
        projects: [
          'Mobile Strategy Implementation',
          'Advanced Architecture Design',
          'Performance at Scale',
          'Security Framework',
          'Technical Leadership'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  datascientist: {
    title: 'Data Scientist',
    icon: BarChart3,
    color: 'from-cyan-500 to-blue-500',
    description: 'Extract insights and build predictive models from data',
    demand: 'Very High',
    salary: 'Very High',
    companies: ['Google', 'Meta', 'Netflix', 'Amazon', 'Microsoft'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn data science fundamentals',
        skills: [
          'Python / R Programming',
          'Statistics & Mathematics',
          'Data Manipulation (Pandas, NumPy)',
          'Data Visualization (Matplotlib, Seaborn)',
          'SQL & Database Basics',
          'Jupyter Notebooks',
          'Basic Machine Learning',
          'Data Cleaning & Preprocessing',
          'Exploratory Data Analysis',
          'Version Control'
        ],
        projects: [
          'Data Analysis Project',
          'Predictive Model (Basic)',
          'Data Visualization Dashboard',
          'Statistical Analysis Report',
          'Data Cleaning Pipeline'
        ],
        freeResources: [
          {
            title: 'Kaggle Learn',
            url: 'https://www.kaggle.com/learn',
            description: 'Free data science courses and competitions'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master machine learning and advanced analytics',
        skills: [
          'Advanced Machine Learning',
          'Deep Learning (TensorFlow, PyTorch)',
          'Feature Engineering',
          'Model Evaluation & Validation',
          'Big Data Tools (Spark, Hadoop)',
          'Cloud Platforms (AWS, GCP, Azure)',
          'MLOps & Model Deployment',
          'A/B Testing',
          'Statistical Modeling',
          'Data Pipeline Development'
        ],
        projects: [
          'End-to-end ML Pipeline',
          'Deep Learning Model',
          'Real-time Prediction System',
          'A/B Testing Framework',
          'Data Pipeline Project'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead data science initiatives and teams',
        skills: [
          'Advanced ML Algorithms',
          'MLOps & Production Systems',
          'Team Leadership',
          'Code Reviews & Mentoring',
          'Technical Documentation',
          'Project Management',
          'Business Strategy',
          'Stakeholder Communication',
          'Research & Innovation',
          'Technical Architecture'
        ],
        projects: [
          'ML Platform Development',
          'Advanced Analytics System',
          'Team Mentoring Program',
          'Research Project',
          'Technical Leadership'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive data science strategy and innovation',
        skills: [
          'Data Science Strategy',
          'Advanced Research',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Intelligence',
          'Technical Vision'
        ],
        projects: [
          'Data Strategy Implementation',
          'Advanced Research Project',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  devops: {
    title: 'DevOps Engineer',
    icon: Code,
    color: 'from-orange-500 to-red-500',
    description: 'Automate deployment and manage infrastructure',
    demand: 'Very High',
    salary: 'High',
    companies: ['Amazon', 'Google', 'Microsoft', 'Netflix', 'Uber'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn DevOps fundamentals',
        skills: [
          'Linux & Command Line',
          'Git & Version Control',
          'Docker & Containerization',
          'CI/CD Pipelines',
          'Cloud Platforms (AWS/Azure/GCP)',
          'Infrastructure as Code',
          'Monitoring & Logging',
          'Scripting (Bash, Python)',
          'Networking Basics',
          'Security Fundamentals'
        ],
        projects: [
          'Docker Container Setup',
          'CI/CD Pipeline',
          'Infrastructure as Code',
          'Monitoring Dashboard',
          'Automated Deployment'
        ],
        freeResources: [
          {
            title: 'Docker Documentation',
            url: 'https://docs.docker.com/',
            description: 'Official Docker documentation and tutorials'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master DevOps tools and practices',
        skills: [
          'Kubernetes & Orchestration',
          'Advanced Cloud Services',
          'Infrastructure Automation',
          'Security & Compliance',
          'Performance Optimization',
          'Disaster Recovery',
          'Cost Optimization',
          'Team Collaboration',
          'Advanced Monitoring',
          'Service Mesh'
        ],
        projects: [
          'Kubernetes Cluster Setup',
          'Multi-cloud Infrastructure',
          'Security Implementation',
          'Performance Optimization',
          'Disaster Recovery Plan'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead DevOps initiatives and teams',
        skills: [
          'DevOps Strategy & Planning',
          'Team Leadership',
          'Code Reviews & Mentoring',
          'Technical Documentation',
          'Project Management',
          'Architecture Design',
          'Security Architecture',
          'Performance Engineering',
          'Innovation & Research',
          'Technical Standards'
        ],
        projects: [
          'DevOps Platform Development',
          'Team Mentoring Program',
          'Architecture Design',
          'Security Framework',
          'Technical Leadership'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive DevOps strategy and innovation',
        skills: [
          'DevOps Strategy & Vision',
          'Advanced Architecture',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'DevOps Strategy Implementation',
          'Advanced Architecture',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  mle: {
    title: 'ML Engineer',
    icon: Brain,
    color: 'from-indigo-500 to-purple-500',
    description: 'Deploy and scale machine learning systems',
    demand: 'Very High',
    salary: 'Very High',
    companies: ['Google', 'Meta', 'Netflix', 'Amazon', 'Microsoft'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn ML engineering fundamentals',
        skills: [
          'Python Programming',
          'Machine Learning Basics',
          'Data Preprocessing',
          'Model Training & Evaluation',
          'ML Libraries (Scikit-learn, Pandas)',
          'Version Control (Git)',
          'Basic Statistics',
          'Data Visualization',
          'Jupyter Notebooks',
          'Cloud Basics'
        ],
        projects: [
          'ML Model Pipeline',
          'Data Preprocessing Script',
          'Model Evaluation Dashboard',
          'Basic ML API',
          'Data Visualization Project'
        ],
        freeResources: [
          {
            title: 'ML Engineering Course',
            url: 'https://www.coursera.org/',
            description: 'Free machine learning engineering course'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master ML production and deployment',
        skills: [
          'MLOps & Model Deployment',
          'Containerization (Docker)',
          'Cloud Platforms (AWS, GCP, Azure)',
          'Model Monitoring & Logging',
          'CI/CD for ML',
          'Feature Engineering',
          'Model Versioning',
          'A/B Testing',
          'Performance Optimization',
          'API Development'
        ],
        projects: [
          'ML Pipeline in Production',
          'Model Monitoring System',
          'ML API Service',
          'A/B Testing Framework',
          'Feature Store Implementation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead ML engineering initiatives',
        skills: [
          'Advanced MLOps',
          'Distributed ML Systems',
          'Team Leadership',
          'Architecture Design',
          'Performance Engineering',
          'Security & Compliance',
          'Technical Documentation',
          'Project Management',
          'Code Reviews & Mentoring',
          'Innovation & Research'
        ],
        projects: [
          'Large-scale ML Platform',
          'Distributed Training System',
          'ML Security Framework',
          'Team Mentoring Program',
          'Technical Leadership'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive ML engineering strategy',
        skills: [
          'ML Strategy & Vision',
          'Advanced Architecture',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'ML Strategy Implementation',
          'Advanced ML Platform',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  uidesigner: {
    title: 'UI/UX Designer',
    icon: Code,
    color: 'from-pink-500 to-purple-500',
    description: 'Design intuitive and beautiful user experiences',
    demand: 'High',
    salary: 'High',
    companies: ['Google', 'Apple', 'Meta', 'Airbnb', 'Figma'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn design fundamentals',
        skills: [
          'Design Principles',
          'Figma / Sketch / Adobe XD',
          'User Research Basics',
          'Wireframing & Prototyping',
          'Color Theory & Typography',
          'Design Systems',
          'Accessibility (WCAG)',
          'User Testing',
          'Design Thinking',
          'Visual Design'
        ],
        projects: [
          'Portfolio Website Design',
          'Mobile App Wireframes',
          'User Research Report',
          'Design System (Basic)',
          'Prototype Project'
        ],
        freeResources: [
          {
            title: 'Figma Academy',
            url: 'https://www.figma.com/',
            description: 'Free Figma design tutorials and resources'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master design tools and processes',
        skills: [
          'Advanced Prototyping',
          'User Research & Analytics',
          'Design Systems (Advanced)',
          'Interaction Design',
          'Motion Design',
          'Design Collaboration',
          'A/B Testing',
          'Design Handoff',
          'Frontend Basics',
          'Project Management'
        ],
        projects: [
          'Complete App Design',
          'Design System Implementation',
          'User Research Study',
          'A/B Testing Project',
          'Cross-platform Design'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead design initiatives and teams',
        skills: [
          'Design Strategy',
          'Team Leadership',
          'Design Operations',
          'Advanced User Research',
          'Design Systems Architecture',
          'Cross-functional Collaboration',
          'Technical Documentation',
          'Mentoring & Coaching',
          'Business Strategy',
          'Innovation & Research'
        ],
        projects: [
          'Design Strategy Implementation',
          'Team Mentoring Program',
          'Design Operations Setup',
          'Advanced Research Project',
          'Technical Leadership'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive design strategy and innovation',
        skills: [
          'Design Vision & Strategy',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Design Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Design Vision Implementation',
          'Advanced Design Strategy',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  cybersecurity: {
    title: 'Cybersecurity Engineer',
    icon: Code,
    color: 'from-red-500 to-pink-500',
    description: 'Protect systems and data from security threats',
    demand: 'Very High',
    salary: 'Very High',
    companies: ['Google', 'Microsoft', 'Amazon', 'CrowdStrike', 'Palo Alto Networks'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn cybersecurity fundamentals',
        skills: [
          'Network Security Basics',
          'Operating Systems Security',
          'Cryptography Fundamentals',
          'Security Tools (Nmap, Wireshark)',
          'Vulnerability Assessment',
          'Incident Response Basics',
          'Security Policies & Compliance',
          'Risk Assessment',
          'Security Awareness',
          'Basic Programming'
        ],
        projects: [
          'Security Assessment Report',
          'Vulnerability Scan Setup',
          'Security Policy Review',
          'Incident Response Plan',
          'Security Awareness Training'
        ],
        freeResources: [
          {
            title: 'Cybersecurity Fundamentals',
            url: 'https://www.coursera.org/',
            description: 'Free cybersecurity fundamentals course'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master security tools and practices',
        skills: [
          'Advanced Security Tools',
          'Penetration Testing',
          'Security Architecture',
          'Threat Intelligence',
          'Security Monitoring',
          'Incident Response',
          'Security Automation',
          'Compliance & Auditing',
          'Security Operations',
          'Cloud Security'
        ],
        projects: [
          'Penetration Testing Report',
          'Security Architecture Design',
          'Threat Intelligence System',
          'Security Monitoring Setup',
          'Incident Response Automation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead security initiatives and teams',
        skills: [
          'Security Strategy & Planning',
          'Team Leadership',
          'Advanced Threat Analysis',
          'Security Architecture Design',
          'Risk Management',
          'Compliance & Governance',
          'Technical Documentation',
          'Mentoring & Coaching',
          'Business Strategy',
          'Innovation & Research'
        ],
        projects: [
          'Security Strategy Implementation',
          'Team Mentoring Program',
          'Advanced Security Architecture',
          'Risk Management Framework',
          'Technical Leadership'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive security strategy and innovation',
        skills: [
          'Security Vision & Strategy',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Security Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Security Vision Implementation',
          'Advanced Security Strategy',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  game: {
    title: 'Game Developer',
    icon: Code,
    color: 'from-red-500 to-pink-500',
    description: 'Create engaging games and interactive experiences',
    demand: 'Medium',
    salary: 'Medium',
    companies: ['Epic Games', 'Unity', 'Electronic Arts', 'Activision', 'Nintendo'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn game development fundamentals',
        skills: [
          'Game Engines (Unity/Unreal/Godot)',
          'Programming (C#/C++/JavaScript)',
          'Game Design Principles',
          '2D/3D Graphics Basics',
          'Game Physics',
          'Audio Integration',
          'User Interface Design',
          'Version Control',
          'Game Testing',
          'Basic Animation'
        ],
        projects: [
          'Simple 2D Game',
          'Platformer Game',
          'Puzzle Game',
          'Arcade Game',
          'Mobile Game (Basic)'
        ],
        freeResources: [
          {
            title: 'Unity Learn',
            url: 'https://learn.unity.com/',
            description: 'Free Unity game development tutorials'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master game development tools and techniques',
        skills: [
          'Advanced Game Engines',
          '3D Modeling & Animation',
          'Game AI & Pathfinding',
          'Multiplayer Development',
          'Performance Optimization',
          'Game Analytics',
          'Monetization Strategies',
          'Platform Deployment',
          'Game Architecture',
          'Team Collaboration'
        ],
        projects: [
          '3D Adventure Game',
          'Multiplayer Game',
          'Mobile Game (Advanced)',
          'VR/AR Game',
          'Indie Game Release'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead game development projects and teams',
        skills: [
          'Game Architecture Design',
          'Team Leadership',
          'Project Management',
          'Advanced Graphics Programming',
          'Game Engine Development',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-platform Development'
        ],
        projects: [
          'AAA Game Project',
          'Game Engine Features',
          'Team Mentoring Program',
          'Technical Leadership',
          'Game Studio Setup'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive game development strategy and innovation',
        skills: [
          'Game Development Strategy',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Game Development Strategy',
          'Advanced Game Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  dataengineer: {
    title: 'Data Engineer',
    icon: Code,
    color: 'from-teal-500 to-green-500',
    description: 'Build and maintain data pipelines and infrastructure',
    demand: 'Very High',
    salary: 'High',
    companies: ['Google', 'Meta', 'Netflix', 'Amazon', 'Microsoft'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn data engineering fundamentals',
        skills: [
          'Python Programming',
          'SQL & Database Design',
          'Data Warehousing',
          'ETL/ELT Processes',
          'Big Data Tools (Hadoop, Spark)',
          'Cloud Platforms (AWS, GCP, Azure)',
          'Data Modeling',
          'Version Control',
          'Linux & Command Line',
          'Data Quality & Validation'
        ],
        projects: [
          'ETL Pipeline Project',
          'Data Warehouse Setup',
          'Data Quality Dashboard',
          'Cloud Data Pipeline',
          'Data Integration Project'
        ],
        freeResources: [
          {
            title: 'Apache Spark Documentation',
            url: 'https://spark.apache.org/docs/',
            description: 'Official Apache Spark documentation and tutorials'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master data engineering tools and practices',
        skills: [
          'Advanced Big Data Tools',
          'Stream Processing (Kafka, Flink)',
          'Data Lake Architecture',
          'Real-time Data Pipelines',
          'Data Orchestration (Airflow)',
          'Containerization (Docker)',
          'Infrastructure as Code',
          'Monitoring & Alerting',
          'Data Security & Privacy',
          'Performance Optimization'
        ],
        projects: [
          'Real-time Data Pipeline',
          'Data Lake Implementation',
          'Stream Processing System',
          'Data Orchestration Platform',
          'Multi-cloud Data Architecture'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead data engineering initiatives and teams',
        skills: [
          'Data Architecture Design',
          'Team Leadership',
          'Project Management',
          'Advanced Performance Engineering',
          'Data Governance',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration'
        ],
        projects: [
          'Enterprise Data Platform',
          'Data Governance Framework',
          'Team Mentoring Program',
          'Technical Leadership',
          'Data Strategy Implementation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive data engineering strategy and innovation',
        skills: [
          'Data Engineering Strategy',
          'Advanced Architecture',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Data Engineering Strategy',
          'Advanced Data Platform',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  cloudengineer: {
    title: 'Cloud Engineer',
    icon: Code,
    color: 'from-sky-500 to-blue-500',
    description: 'Design and manage cloud infrastructure',
    demand: 'Very High',
    salary: 'High',
    companies: ['Amazon', 'Google', 'Microsoft', 'Netflix', 'Uber'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn cloud computing fundamentals',
        skills: [
          'Cloud Platforms (AWS/Azure/GCP)',
          'Linux & Command Line',
          'Networking Basics',
          'Virtualization',
          'Containerization (Docker)',
          'Infrastructure as Code',
          'Monitoring & Logging',
          'Security Fundamentals',
          'Scripting (Python/Bash)',
          'Version Control'
        ],
        projects: [
          'Cloud Infrastructure Setup',
          'Container Deployment',
          'Monitoring Dashboard',
          'Infrastructure as Code',
          'Basic Security Implementation'
        ],
        freeResources: [
          {
            title: 'AWS Free Tier',
            url: 'https://aws.amazon.com/free/',
            description: 'Free AWS services for learning cloud computing'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master cloud services and architecture',
        skills: [
          'Advanced Cloud Services',
          'Kubernetes & Orchestration',
          'Serverless Architecture',
          'Multi-cloud Strategies',
          'Cost Optimization',
          'Disaster Recovery',
          'Security & Compliance',
          'Performance Optimization',
          'Automation & CI/CD',
          'Team Collaboration'
        ],
        projects: [
          'Multi-cloud Architecture',
          'Kubernetes Cluster Setup',
          'Serverless Application',
          'Cost Optimization Project',
          'Disaster Recovery Plan'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead cloud engineering initiatives and teams',
        skills: [
          'Cloud Architecture Design',
          'Team Leadership',
          'Project Management',
          'Advanced Security',
          'Cloud Strategy & Planning',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration'
        ],
        projects: [
          'Enterprise Cloud Platform',
          'Cloud Security Framework',
          'Team Mentoring Program',
          'Technical Leadership',
          'Cloud Strategy Implementation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive cloud strategy and innovation',
        skills: [
          'Cloud Strategy & Vision',
          'Advanced Architecture',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Cloud Strategy Implementation',
          'Advanced Cloud Architecture',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  qaengineer: {
    title: 'QA Engineer',
    icon: Code,
    color: 'from-orange-500 to-red-500',
    description: 'Ensure software quality through testing',
    demand: 'High',
    salary: 'Medium',
    companies: ['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn testing fundamentals',
        skills: [
          'Testing Principles & Methodologies',
          'Manual Testing',
          'Test Case Design',
          'Bug Tracking & Reporting',
          'Test Automation Basics',
          'Selenium WebDriver',
          'API Testing',
          'Database Testing',
          'Version Control',
          'Agile/Scrum Methodologies'
        ],
        projects: [
          'Test Case Documentation',
          'Automated Test Suite',
          'API Testing Project',
          'Bug Tracking System',
          'Test Report Dashboard'
        ],
        freeResources: [
          {
            title: 'Selenium Documentation',
            url: 'https://selenium-python.readthedocs.io/',
            description: 'Official Selenium Python documentation'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master test automation and advanced testing',
        skills: [
          'Advanced Test Automation',
          'Performance Testing',
          'Security Testing',
          'Mobile Testing',
          'CI/CD Integration',
          'Test Framework Design',
          'Code Quality Analysis',
          'Test Data Management',
          'Cross-browser Testing',
          'Team Collaboration'
        ],
        projects: [
          'Performance Test Suite',
          'Security Testing Framework',
          'Mobile Test Automation',
          'CI/CD Pipeline Integration',
          'Test Framework Development'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead QA initiatives and teams',
        skills: [
          'QA Strategy & Planning',
          'Team Leadership',
          'Project Management',
          'Test Architecture Design',
          'Quality Metrics & KPIs',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration'
        ],
        projects: [
          'QA Strategy Implementation',
          'Test Architecture Design',
          'Team Mentoring Program',
          'Technical Leadership',
          'Quality Framework Development'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive quality strategy and innovation',
        skills: [
          'Quality Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Quality Strategy Implementation',
          'Advanced Quality Framework',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  blockchain: {
    title: 'Blockchain Developer',
    icon: Code,
    color: 'from-yellow-500 to-orange-500',
    description: 'Build decentralized applications and smart contracts',
    demand: 'High',
    salary: 'Very High',
    companies: ['Coinbase', 'Ethereum Foundation', 'ConsenSys', 'Chainlink', 'Polygon'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn blockchain fundamentals',
        skills: [
          'Blockchain Basics',
          'Cryptocurrency Concepts',
          'Smart Contracts (Solidity)',
          'Web3 Development',
          'Ethereum Platform',
          'Decentralized Applications (DApps)',
          'Cryptography Basics',
          'Node.js & JavaScript',
          'Version Control',
          'Testing & Debugging'
        ],
        projects: [
          'Simple Smart Contract',
          'Basic DApp',
          'Token Contract',
          'NFT Project',
          'DeFi Application (Basic)'
        ],
        freeResources: [
          {
            title: 'Ethereum Documentation',
            url: 'https://ethereum.org/developers/',
            description: 'Official Ethereum development documentation'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master blockchain development tools and practices',
        skills: [
          'Advanced Smart Contracts',
          'Multiple Blockchain Platforms',
          'DeFi Protocols',
          'NFT Development',
          'Cross-chain Development',
          'Security Best Practices',
          'Gas Optimization',
          'Frontend Integration',
          'Testing Frameworks',
          'Team Collaboration'
        ],
        projects: [
          'Complex DeFi Protocol',
          'NFT Marketplace',
          'Cross-chain Bridge',
          'DAO Implementation',
          'Advanced DApp'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead blockchain development initiatives and teams',
        skills: [
          'Blockchain Architecture Design',
          'Team Leadership',
          'Project Management',
          'Advanced Security',
          'Protocol Development',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration'
        ],
        projects: [
          'Blockchain Protocol',
          'Enterprise Blockchain Solution',
          'Team Mentoring Program',
          'Technical Leadership',
          'Blockchain Strategy Implementation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive blockchain strategy and innovation',
        skills: [
          'Blockchain Strategy & Vision',
          'Advanced Architecture',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Blockchain Strategy Implementation',
          'Advanced Blockchain Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  productmanager: {
    title: 'Product Manager',
    icon: Code,
    color: 'from-indigo-500 to-purple-500',
    description: 'Lead product strategy and development',
    demand: 'Very High',
    salary: 'Very High',
    companies: ['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn product management fundamentals',
        skills: [
          'Product Strategy & Planning',
          'User Research & Analysis',
          'Market Research',
          'Data Analysis & Metrics',
          'Agile/Scrum Methodologies',
          'Stakeholder Management',
          'Communication Skills',
          'Project Management',
          'Business Analysis',
          'Technical Understanding'
        ],
        projects: [
          'Product Requirements Document',
          'User Persona Development',
          'Market Analysis Report',
          'Feature Prioritization',
          'Product Roadmap'
        ],
        freeResources: [
          {
            title: 'Product Management Resources',
            url: 'https://www.productplan.com/',
            description: 'Comprehensive product management guides and templates'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master product management tools and practices',
        skills: [
          'Advanced Analytics',
          'A/B Testing & Experimentation',
          'Cross-functional Leadership',
          'Product Launch Management',
          'Customer Success',
          'Competitive Analysis',
          'Financial Modeling',
          'Team Management',
          'Strategic Thinking',
          'Innovation & Creativity'
        ],
        projects: [
          'Product Launch Strategy',
          'A/B Testing Program',
          'Customer Success Initiative',
          'Competitive Analysis',
          'Product Innovation Project'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead product initiatives and teams',
        skills: [
          'Product Strategy & Vision',
          'Team Leadership',
          'Advanced Project Management',
          'Business Strategy',
          'Product Portfolio Management',
          'Technical Leadership',
          'Code Reviews & Mentoring',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication'
        ],
        projects: [
          'Product Strategy Implementation',
          'Team Leadership Program',
          'Product Portfolio Management',
          'Technical Leadership',
          'Business Strategy Implementation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive product strategy and innovation',
        skills: [
          'Product Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Product Strategy Implementation',
          'Advanced Product Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  technicalwriter: {
    title: 'Technical Writer',
    icon: Code,
    color: 'from-green-500 to-teal-500',
    description: 'Create clear technical documentation and content',
    demand: 'High',
    salary: 'Medium',
    companies: ['Google', 'Microsoft', 'Amazon', 'Meta', 'GitHub'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn technical writing fundamentals',
        skills: [
          'Technical Writing Principles',
          'Documentation Tools',
          'API Documentation',
          'User Guides & Manuals',
          'Content Management Systems',
          'Version Control',
          'Collaboration Tools',
          'Research & Analysis',
          'Communication Skills',
          'Basic Programming'
        ],
        projects: [
          'API Documentation',
          'User Manual',
          'Technical Guide',
          'Tutorial Series',
          'Knowledge Base'
        ],
        freeResources: [
          {
            title: 'Technical Writing Resources',
            url: 'https://developers.google.com/tech-writing',
            description: 'Google\'s technical writing course and resources'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master technical writing tools and practices',
        skills: [
          'Advanced Documentation Tools',
          'Content Strategy',
          'Information Architecture',
          'User Experience Writing',
          'Multimedia Content',
          'Translation & Localization',
          'Quality Assurance',
          'Team Collaboration',
          'Project Management',
          'Analytics & Metrics'
        ],
        projects: [
          'Content Strategy Implementation',
          'Multimedia Documentation',
          'Localization Project',
          'Quality Assurance Program',
          'Analytics Dashboard'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead technical writing initiatives and teams',
        skills: [
          'Content Strategy & Planning',
          'Team Leadership',
          'Project Management',
          'Advanced Information Architecture',
          'Technical Leadership',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication'
        ],
        projects: [
          'Content Strategy Implementation',
          'Team Leadership Program',
          'Technical Leadership',
          'Business Strategy Implementation',
          'Innovation Project'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive content strategy and innovation',
        skills: [
          'Content Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Content Strategy Implementation',
          'Advanced Content Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  aispecialist: {
    title: 'AI Specialist',
    icon: Brain,
    color: 'from-purple-500 to-indigo-500',
    description: 'Develop cutting-edge artificial intelligence solutions',
    demand: 'Very High',
    salary: 'Very High',
    companies: ['OpenAI', 'Google', 'Microsoft', 'Meta', 'Anthropic'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn AI fundamentals and basic implementations',
        skills: [
          'Python Programming',
          'Machine Learning Basics',
          'Neural Networks',
          'Deep Learning Frameworks (TensorFlow/PyTorch)',
          'Data Preprocessing',
          'Statistical Analysis',
          'Linear Algebra & Calculus',
          'Probability & Statistics',
          'Version Control',
          'Jupyter Notebooks'
        ],
        projects: [
          'Image Classification Model',
          'Text Sentiment Analysis',
          'Basic Chatbot',
          'Data Visualization Dashboard',
          'Simple Recommendation System'
        ],
        freeResources: [
          {
            title: 'Fast.ai',
            url: 'https://www.fast.ai/',
            description: 'Free practical deep learning course'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master advanced AI techniques and real-world applications',
        skills: [
          'Advanced Deep Learning',
          'Natural Language Processing',
          'Computer Vision',
          'Reinforcement Learning',
          'Model Optimization',
          'Cloud AI Services',
          'MLOps & Deployment',
          'A/B Testing',
          'Team Collaboration',
          'Research Skills'
        ],
        projects: [
          'Advanced NLP Model',
          'Computer Vision Application',
          'ML Pipeline System',
          'AI-powered Web App',
          'Research Paper Implementation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead AI initiatives and drive innovation',
        skills: [
          'AI Strategy & Planning',
          'Team Leadership',
          'Advanced Research',
          'Model Architecture Design',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication'
        ],
        projects: [
          'AI Product Development',
          'Research Publication',
          'Team Mentoring Program',
          'Technical Leadership',
          'AI Strategy Implementation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive AI strategy and industry innovation',
        skills: [
          'AI Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'AI Strategy Implementation',
          'Advanced AI Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  generativeai: {
    title: 'Generative AI Engineer',
    icon: Brain,
    color: 'from-pink-500 to-purple-500',
    description: 'Build and deploy generative AI models and applications',
    demand: 'Very High',
    salary: 'Very High',
    companies: ['OpenAI', 'Anthropic', 'Google', 'Microsoft', 'Stability AI'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn generative AI fundamentals',
        skills: [
          'Python Programming',
          'Deep Learning Basics',
          'Transformer Architecture',
          'Large Language Models',
          'Text Generation',
          'Image Generation',
          'API Integration',
          'Prompt Engineering',
          'Version Control',
          'Cloud Platforms'
        ],
        projects: [
          'Text Generation App',
          'Image Generation Tool',
          'Chatbot Implementation',
          'Content Creation System',
          'API Integration Project'
        ],
        freeResources: [
          {
            title: 'Hugging Face Course',
            url: 'https://huggingface.co/course',
            description: 'Free course on transformers and NLP'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master advanced generative AI techniques',
        skills: [
          'Advanced LLMs',
          'Fine-tuning Techniques',
          'Multimodal Models',
          'Vector Databases',
          'RAG Systems',
          'Model Optimization',
          'Deployment & Scaling',
          'Evaluation Metrics',
          'Team Collaboration',
          'Research Skills'
        ],
        projects: [
          'Custom LLM Fine-tuning',
          'Multimodal Application',
          'RAG System Implementation',
          'Production AI Service',
          'Research Experiment'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead generative AI initiatives and teams',
        skills: [
          'AI Strategy & Planning',
          'Team Leadership',
          'Advanced Research',
          'Model Architecture Design',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication'
        ],
        projects: [
          'Generative AI Product',
          'Research Publication',
          'Team Mentoring Program',
          'Technical Leadership',
          'AI Strategy Implementation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive generative AI strategy and innovation',
        skills: [
          'AI Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'AI Strategy Implementation',
          'Advanced AI Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  computervision: {
    title: 'Computer Vision Engineer',
    icon: Brain,
    color: 'from-cyan-500 to-blue-500',
    description: 'Build AI systems that can see and understand visual information',
    demand: 'High',
    salary: 'Very High',
    companies: ['Tesla', 'Waymo', 'OpenAI', 'Google', 'Meta'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn computer vision fundamentals',
        skills: [
          'Python Programming',
          'OpenCV',
          'Image Processing',
          'Convolutional Neural Networks',
          'Deep Learning Frameworks',
          'Data Augmentation',
          'Object Detection',
          'Image Classification',
          'Version Control',
          'Mathematical Foundations'
        ],
        projects: [
          'Image Classification Model',
          'Object Detection System',
          'Face Recognition App',
          'Image Filtering Tool',
          'Basic Computer Vision Pipeline'
        ],
        freeResources: [
          {
            title: 'OpenCV Documentation',
            url: 'https://opencv.org/',
            description: 'Comprehensive computer vision library documentation'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master advanced computer vision techniques',
        skills: [
          'Advanced CNN Architectures',
          'Object Detection & Segmentation',
          'Image Generation',
          'Video Analysis',
          '3D Computer Vision',
          'Real-time Processing',
          'Model Optimization',
          'Deployment & Scaling',
          'Team Collaboration',
          'Research Skills'
        ],
        projects: [
          'Real-time Object Detection',
          'Image Segmentation System',
          'Video Analysis Pipeline',
          '3D Vision Application',
          'Production CV Service'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead computer vision initiatives and teams',
        skills: [
          'CV Strategy & Planning',
          'Team Leadership',
          'Advanced Research',
          'Model Architecture Design',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication'
        ],
        projects: [
          'CV Product Development',
          'Research Publication',
          'Team Mentoring Program',
          'Technical Leadership',
          'CV Strategy Implementation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive computer vision strategy and innovation',
        skills: [
          'CV Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'CV Strategy Implementation',
          'Advanced CV Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  nlpengineer: {
    title: 'NLP Engineer',
    icon: Brain,
    color: 'from-green-500 to-teal-500',
    description: 'Build AI systems that understand and generate human language',
    demand: 'Very High',
    salary: 'Very High',
    companies: ['OpenAI', 'Google', 'Microsoft', 'Meta', 'Anthropic'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn NLP fundamentals and basic implementations',
        skills: [
          'Python Programming',
          'Text Processing',
          'Regular Expressions',
          'NLTK & spaCy',
          'Word Embeddings',
          'Text Classification',
          'Sentiment Analysis',
          'Named Entity Recognition',
          'Version Control',
          'Statistical Methods'
        ],
        projects: [
          'Text Classification Model',
          'Sentiment Analysis Tool',
          'Named Entity Recognition',
          'Text Summarization',
          'Basic Chatbot'
        ],
        freeResources: [
          {
            title: 'NLTK Book',
            url: 'https://www.nltk.org/book/',
            description: 'Free comprehensive NLP textbook'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master advanced NLP techniques and real-world applications',
        skills: [
          'Transformer Models',
          'Large Language Models',
          'Fine-tuning Techniques',
          'Text Generation',
          'Question Answering',
          'Machine Translation',
          'Model Optimization',
          'Deployment & Scaling',
          'Team Collaboration',
          'Research Skills'
        ],
        projects: [
          'Custom Language Model',
          'Question Answering System',
          'Machine Translation App',
          'Text Generation Service',
          'Production NLP Pipeline'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead NLP initiatives and drive innovation',
        skills: [
          'NLP Strategy & Planning',
          'Team Leadership',
          'Advanced Research',
          'Model Architecture Design',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication'
        ],
        projects: [
          'NLP Product Development',
          'Research Publication',
          'Team Mentoring Program',
          'Technical Leadership',
          'NLP Strategy Implementation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive NLP strategy and industry innovation',
        skills: [
          'NLP Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'NLP Strategy Implementation',
          'Advanced NLP Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  techmanager: {
    title: 'Tech Manager',
    icon: Code,
    color: 'from-indigo-500 to-purple-500',
    description: 'Lead technical teams and drive engineering excellence',
    demand: 'High',
    salary: 'Very High',
    companies: ['Google', 'Meta', 'Amazon', 'Microsoft', 'Netflix'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn technical management fundamentals',
        skills: [
          'Technical Leadership',
          'Team Management',
          'Project Management',
          'Communication Skills',
          'Agile/Scrum Methodologies',
          'Code Reviews',
          'Technical Documentation',
          'Stakeholder Management',
          'Performance Management',
          'Technical Decision Making'
        ],
        projects: [
          'Team Lead Project',
          'Process Improvement Initiative',
          'Technical Documentation',
          'Team Mentoring Program',
          'Cross-functional Collaboration'
        ],
        freeResources: [
          {
            title: 'Manager Tools',
            url: 'https://www.manager-tools.com/',
            description: 'Free management resources and podcasts'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master technical management practices',
        skills: [
          'Advanced Team Leadership',
          'Strategic Planning',
          'Budget Management',
          'Hiring & Recruitment',
          'Performance Reviews',
          'Conflict Resolution',
          'Technical Architecture',
          'Process Optimization',
          'Cross-team Collaboration',
          'Executive Communication'
        ],
        projects: [
          'Team Scaling Initiative',
          'Technical Strategy Implementation',
          'Hiring & Onboarding Program',
          'Process Standardization',
          'Cross-team Project'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead large technical organizations',
        skills: [
          'Organizational Leadership',
          'Strategic Vision',
          'Advanced Project Management',
          'Business Strategy',
          'Technical Innovation',
          'Change Management',
          'Executive Leadership',
          'Industry Knowledge',
          'Cross-functional Leadership',
          'Board Communication'
        ],
        projects: [
          'Organizational Transformation',
          'Strategic Initiative',
          'Technical Innovation Program',
          'Executive Leadership',
          'Industry Leadership'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive technical strategy and industry leadership',
        skills: [
          'Technical Strategy & Vision',
          'Advanced Leadership',
          'Organizational Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Technical Strategy Implementation',
          'Advanced Technical Leadership',
          'Industry Innovation',
          'Mentoring Program',
          'Technical Vision'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  sre: {
    title: 'Site Reliability Engineer',
    icon: Code,
    color: 'from-orange-500 to-red-500',
    description: 'Ensure system reliability and performance at scale',
    demand: 'Very High',
    salary: 'Very High',
    companies: ['Google', 'Netflix', 'Amazon', 'Microsoft', 'Uber'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn SRE fundamentals and monitoring',
        skills: [
          'Linux & Command Line',
          'Monitoring & Alerting',
          'Incident Response',
          'Automation & Scripting',
          'Cloud Platforms',
          'Containerization (Docker)',
          'Orchestration (Kubernetes)',
          'Infrastructure as Code',
          'Version Control',
          'Basic Programming'
        ],
        projects: [
          'Monitoring Dashboard Setup',
          'Automation Script',
          'Incident Response Plan',
          'Infrastructure as Code',
          'Basic Alerting System'
        ],
        freeResources: [
          {
            title: 'Google SRE Book',
            url: 'https://sre.google/sre-book/table-of-contents/',
            description: 'Free comprehensive SRE guide from Google'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master SRE practices and tools',
        skills: [
          'Advanced Monitoring',
          'Service Level Objectives',
          'Error Budgets',
          'Chaos Engineering',
          'Performance Optimization',
          'Capacity Planning',
          'Disaster Recovery',
          'Security & Compliance',
          'Team Collaboration',
          'Advanced Automation'
        ],
        projects: [
          'SLO Implementation',
          'Chaos Engineering Program',
          'Performance Optimization',
          'Disaster Recovery Plan',
          'Advanced Automation System'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead SRE initiatives and teams',
        skills: [
          'SRE Strategy & Planning',
          'Team Leadership',
          'Advanced Architecture',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication',
          'Industry Leadership'
        ],
        projects: [
          'SRE Strategy Implementation',
          'Team Leadership Program',
          'Technical Leadership',
          'Business Strategy Implementation',
          'Industry Innovation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive SRE strategy and industry innovation',
        skills: [
          'SRE Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'SRE Strategy Implementation',
          'Advanced SRE Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  cto: {
    title: 'Chief Technology Officer',
    icon: Code,
    color: 'from-purple-500 to-indigo-500',
    description: 'Lead technology strategy and innovation at the executive level',
    demand: 'High',
    salary: 'Very High',
    companies: ['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn technology leadership fundamentals',
        skills: [
          'Technical Leadership',
          'Strategic Thinking',
          'Business Acumen',
          'Communication Skills',
          'Project Management',
          'Team Management',
          'Technology Trends',
          'Financial Understanding',
          'Stakeholder Management',
          'Decision Making'
        ],
        projects: [
          'Technology Strategy Document',
          'Team Leadership Initiative',
          'Technical Decision Framework',
          'Business Case Development',
          'Stakeholder Communication'
        ],
        freeResources: [
          {
            title: 'CTO Resources',
            url: 'https://cto.academy/',
            description: 'Free resources for technology leaders'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master technology leadership practices',
        skills: [
          'Advanced Strategic Planning',
          'Organizational Leadership',
          'Technology Architecture',
          'Innovation Management',
          'Budget & Resource Management',
          'Hiring & Talent Development',
          'Partnership & Vendor Management',
          'Risk Management',
          'Executive Communication',
          'Industry Knowledge'
        ],
        projects: [
          'Technology Roadmap',
          'Organizational Transformation',
          'Innovation Program',
          'Talent Development Initiative',
          'Strategic Partnership'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead technology organizations',
        skills: [
          'Executive Leadership',
          'Strategic Vision',
          'Advanced Business Strategy',
          'Technology Innovation',
          'Change Management',
          'Board Communication',
          'Industry Leadership',
          'Cross-functional Leadership',
          'Global Perspective',
          'Crisis Management'
        ],
        projects: [
          'Technology Strategy Implementation',
          'Organizational Leadership',
          'Innovation Leadership',
          'Industry Leadership',
          'Crisis Management'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive technology strategy and industry innovation',
        skills: [
          'Technology Strategy & Vision',
          'Advanced Leadership',
          'Organizational Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Technology Strategy Implementation',
          'Advanced Technology Leadership',
          'Industry Innovation',
          'Mentoring Program',
          'Technical Vision'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  systemprogrammer: {
    title: 'Systems Programmer',
    icon: Code,
    color: 'from-gray-500 to-slate-500',
    description: 'Build low-level systems and infrastructure software',
    demand: 'Medium',
    salary: 'High',
    companies: ['Google', 'Microsoft', 'Amazon', 'Intel', 'NVIDIA'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn systems programming fundamentals',
        skills: [
          'C/C++ Programming',
          'Assembly Language',
          'Operating Systems',
          'Memory Management',
          'Process Management',
          'File Systems',
          'Network Programming',
          'Debugging Tools',
          'Version Control',
          'Build Systems'
        ],
        projects: [
          'Custom Shell Implementation',
          'Memory Allocator',
          'File System Utility',
          'Network Protocol Implementation',
          'Basic Operating System Component'
        ],
        freeResources: [
          {
            title: 'OS Dev Wiki',
            url: 'https://wiki.osdev.org/',
            description: 'Free operating system development resources'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master advanced systems programming',
        skills: [
          'Advanced C/C++',
          'Kernel Development',
          'Device Drivers',
          'Performance Optimization',
          'Concurrent Programming',
          'Distributed Systems',
          'Security Programming',
          'Hardware Interaction',
          'Team Collaboration',
          'Code Optimization'
        ],
        projects: [
          'Kernel Module',
          'Device Driver',
          'High-Performance Application',
          'Distributed System Component',
          'Security Tool'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead systems programming initiatives',
        skills: [
          'Systems Architecture',
          'Team Leadership',
          'Advanced Performance',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication',
          'Industry Knowledge'
        ],
        projects: [
          'Systems Architecture Design',
          'Team Leadership Program',
          'Technical Leadership',
          'Business Strategy Implementation',
          'Industry Innovation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive systems programming strategy and innovation',
        skills: [
          'Systems Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Systems Strategy Implementation',
          'Advanced Systems Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  networkengineer: {
    title: 'Network Engineer',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    description: 'Design and maintain network infrastructure and connectivity',
    demand: 'High',
    salary: 'High',
    companies: ['Cisco', 'Juniper', 'Amazon', 'Google', 'Microsoft'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn networking fundamentals',
        skills: [
          'TCP/IP Protocol Suite',
          'Network Topologies',
          'Routing & Switching',
          'Network Security',
          'Wireless Technologies',
          'Network Monitoring',
          'Troubleshooting',
          'Documentation',
          'Version Control',
          'Basic Programming'
        ],
        projects: [
          'Home Network Setup',
          'Network Monitoring Dashboard',
          'Security Policy Implementation',
          'Troubleshooting Guide',
          'Network Documentation'
        ],
        freeResources: [
          {
            title: 'Cisco Learning Network',
            url: 'https://learningnetwork.cisco.com/',
            description: 'Free networking resources and courses'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master advanced networking concepts',
        skills: [
          'Advanced Routing Protocols',
          'Network Design',
          'Cloud Networking',
          'SDN & NFV',
          'Network Automation',
          'Performance Optimization',
          'Security Implementation',
          'Team Collaboration',
          'Project Management',
          'Vendor Management'
        ],
        projects: [
          'Enterprise Network Design',
          'Cloud Network Migration',
          'SDN Implementation',
          'Network Automation Script',
          'Security Framework'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead network engineering initiatives',
        skills: [
          'Network Architecture',
          'Team Leadership',
          'Strategic Planning',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication',
          'Industry Knowledge'
        ],
        projects: [
          'Network Architecture Design',
          'Team Leadership Program',
          'Technical Leadership',
          'Business Strategy Implementation',
          'Industry Innovation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive network strategy and innovation',
        skills: [
          'Network Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Network Strategy Implementation',
          'Advanced Network Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  databaseadmin: {
    title: 'Database Administrator',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    description: 'Manage and optimize database systems and performance',
    demand: 'High',
    salary: 'High',
    companies: ['Oracle', 'Microsoft', 'Amazon', 'Google', 'MongoDB'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn database administration fundamentals',
        skills: [
          'SQL & Database Design',
          'Database Installation & Configuration',
          'Backup & Recovery',
          'Performance Monitoring',
          'Security & Access Control',
          'Database Maintenance',
          'Troubleshooting',
          'Documentation',
          'Version Control',
          'Basic Programming'
        ],
        projects: [
          'Database Setup & Configuration',
          'Backup & Recovery System',
          'Performance Monitoring Dashboard',
          'Security Implementation',
          'Database Documentation'
        ],
        freeResources: [
          {
            title: 'SQLBolt',
            url: 'https://sqlbolt.com/',
            description: 'Free interactive SQL tutorial'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master advanced database administration',
        skills: [
          'Advanced SQL & Optimization',
          'Database Clustering',
          'Cloud Database Services',
          'Automation & Scripting',
          'High Availability',
          'Disaster Recovery',
          'Security & Compliance',
          'Team Collaboration',
          'Project Management',
          'Vendor Management'
        ],
        projects: [
          'Database Clustering Setup',
          'Cloud Migration Project',
          'Automation Scripts',
          'High Availability Implementation',
          'Compliance Framework'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead database administration initiatives',
        skills: [
          'Database Architecture',
          'Team Leadership',
          'Strategic Planning',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication',
          'Industry Knowledge'
        ],
        projects: [
          'Database Architecture Design',
          'Team Leadership Program',
          'Technical Leadership',
          'Business Strategy Implementation',
          'Industry Innovation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive database strategy and innovation',
        skills: [
          'Database Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Database Strategy Implementation',
          'Advanced Database Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  embeddedengineer: {
    title: 'Embedded Systems Engineer',
    icon: Code,
    color: 'from-amber-500 to-orange-500',
    description: 'Develop software for embedded systems and IoT devices',
    demand: 'High',
    salary: 'High',
    companies: ['Intel', 'ARM', 'Qualcomm', 'NVIDIA', 'Tesla'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn embedded systems fundamentals',
        skills: [
          'C/C++ Programming',
          'Microcontrollers',
          'Real-time Systems',
          'Hardware Interfaces',
          'Debugging Tools',
          'Memory Management',
          'Interrupts & Timers',
          'Communication Protocols',
          'Version Control',
          'Basic Electronics'
        ],
        projects: [
          'LED Control System',
          'Sensor Interface',
          'Communication Protocol Implementation',
          'Real-time Task Scheduler',
          'Basic IoT Device'
        ],
        freeResources: [
          {
            title: 'Embedded Systems Course',
            url: 'https://www.edx.org/',
            description: 'Free embedded systems courses'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master advanced embedded systems development',
        skills: [
          'Advanced C/C++',
          'RTOS (FreeRTOS, Zephyr)',
          'Device Drivers',
          'Power Management',
          'Security Implementation',
          'Testing & Validation',
          'Team Collaboration',
          'Project Management',
          'Hardware Design',
          'Performance Optimization'
        ],
        projects: [
          'RTOS Application',
          'Device Driver Development',
          'Power Management System',
          'Security Framework',
          'Testing Suite'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead embedded systems initiatives',
        skills: [
          'Embedded Architecture',
          'Team Leadership',
          'Strategic Planning',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication',
          'Industry Knowledge'
        ],
        projects: [
          'Embedded Architecture Design',
          'Team Leadership Program',
          'Technical Leadership',
          'Business Strategy Implementation',
          'Industry Innovation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive embedded systems strategy and innovation',
        skills: [
          'Embedded Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Embedded Strategy Implementation',
          'Advanced Embedded Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  datavisualization: {
    title: 'Data Visualization Engineer',
    icon: BarChart3,
    color: 'from-pink-500 to-rose-500',
    description: 'Create compelling visual representations of data and insights',
    demand: 'High',
    salary: 'High',
    companies: ['Tableau', 'Microsoft', 'Google', 'Amazon', 'Salesforce'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn data visualization fundamentals',
        skills: [
          'Data Analysis',
          'Visualization Tools (Tableau, Power BI)',
          'Programming (Python/R)',
          'Design Principles',
          'Color Theory',
          'Chart Types & Best Practices',
          'Data Cleaning',
          'Statistical Concepts',
          'Version Control',
          'Storytelling'
        ],
        projects: [
          'Interactive Dashboard',
          'Data Story Project',
          'Chart Library',
          'Data Cleaning Pipeline',
          'Visualization Portfolio'
        ],
        freeResources: [
          {
            title: 'Tableau Public',
            url: 'https://public.tableau.com/',
            description: 'Free data visualization platform'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master advanced visualization techniques',
        skills: [
          'Advanced Programming',
          'Web Visualization (D3.js)',
          'Interactive Dashboards',
          'Real-time Visualization',
          'Big Data Visualization',
          'Mobile Visualization',
          'Accessibility',
          'Team Collaboration',
          'Project Management',
          'User Experience'
        ],
        projects: [
          'Real-time Dashboard',
          'Interactive Web Visualization',
          'Mobile Visualization App',
          'Big Data Visualization',
          'Accessibility Framework'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead data visualization initiatives',
        skills: [
          'Visualization Strategy',
          'Team Leadership',
          'Advanced Architecture',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication',
          'Industry Knowledge'
        ],
        projects: [
          'Visualization Strategy Implementation',
          'Team Leadership Program',
          'Technical Leadership',
          'Business Strategy Implementation',
          'Industry Innovation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive data visualization strategy and innovation',
        skills: [
          'Visualization Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Visualization Strategy Implementation',
          'Advanced Visualization Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  quantumcomputing: {
    title: 'Quantum Computing Engineer',
    icon: Brain,
    color: 'from-indigo-500 to-purple-500',
    description: 'Develop quantum algorithms and quantum computing systems',
    demand: 'Very High',
    salary: 'Very High',
    companies: ['IBM', 'Google', 'Microsoft', 'Rigetti', 'IonQ'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn quantum computing fundamentals',
        skills: [
          'Linear Algebra',
          'Quantum Mechanics Basics',
          'Quantum Gates',
          'Quantum Circuits',
          'Programming (Python)',
          'Quantum Algorithms',
          'Quantum Simulators',
          'Mathematical Foundations',
          'Version Control',
          'Research Skills'
        ],
        projects: [
          'Quantum Circuit Implementation',
          'Quantum Algorithm Simulation',
          'Quantum State Visualization',
          'Basic Quantum Application',
          'Research Paper Analysis'
        ],
        freeResources: [
          {
            title: 'IBM Quantum Experience',
            url: 'https://quantum-computing.ibm.com/',
            description: 'Free quantum computing platform'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master advanced quantum computing techniques',
        skills: [
          'Advanced Quantum Algorithms',
          'Quantum Error Correction',
          'Quantum Machine Learning',
          'Quantum Optimization',
          'Quantum Cryptography',
          'Hardware Implementation',
          'Team Collaboration',
          'Project Management',
          'Research & Development',
          'Industry Applications'
        ],
        projects: [
          'Quantum Algorithm Development',
          'Error Correction Implementation',
          'Quantum ML Model',
          'Optimization Problem Solving',
          'Hardware Integration'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead quantum computing initiatives',
        skills: [
          'Quantum Strategy & Planning',
          'Team Leadership',
          'Advanced Research',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication',
          'Industry Knowledge'
        ],
        projects: [
          'Quantum Strategy Implementation',
          'Team Leadership Program',
          'Technical Leadership',
          'Business Strategy Implementation',
          'Industry Innovation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive quantum computing strategy and innovation',
        skills: [
          'Quantum Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Quantum Strategy Implementation',
          'Advanced Quantum Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  fintech: {
    title: 'FinTech Engineer',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    description: 'Build financial technology solutions and digital banking systems',
    demand: 'Very High',
    salary: 'Very High',
    companies: ['Stripe', 'Square', 'PayPal', 'Goldman Sachs', 'JPMorgan'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn FinTech fundamentals',
        skills: [
          'Financial Systems',
          'Payment Processing',
          'Banking APIs',
          'Security & Compliance',
          'Blockchain Basics',
          'Programming (Python/Java)',
          'Database Design',
          'API Development',
          'Version Control',
          'Financial Regulations'
        ],
        projects: [
          'Payment Gateway Integration',
          'Banking API Client',
          'Security Implementation',
          'Financial Dashboard',
          'Compliance Framework'
        ],
        freeResources: [
          {
            title: 'Stripe Documentation',
            url: 'https://stripe.com/docs',
            description: 'Comprehensive payment processing documentation'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master FinTech development practices',
        skills: [
          'Advanced Payment Systems',
          'Cryptocurrency Integration',
          'Risk Management',
          'Fraud Detection',
          'Regulatory Compliance',
          'Microservices Architecture',
          'Team Collaboration',
          'Project Management',
          'Security Best Practices',
          'Financial Modeling'
        ],
        projects: [
          'Cryptocurrency Exchange',
          'Fraud Detection System',
          'Risk Management Platform',
          'Compliance Automation',
          'Financial Analytics'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead FinTech initiatives and teams',
        skills: [
          'FinTech Strategy & Planning',
          'Team Leadership',
          'Advanced Architecture',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication',
          'Industry Knowledge'
        ],
        projects: [
          'FinTech Strategy Implementation',
          'Team Leadership Program',
          'Technical Leadership',
          'Business Strategy Implementation',
          'Industry Innovation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive FinTech strategy and innovation',
        skills: [
          'FinTech Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'FinTech Strategy Implementation',
          'Advanced FinTech Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  compilerengineer: {
    title: 'Compiler Engineer',
    icon: Code,
    color: 'from-slate-500 to-gray-500',
    description: 'Design and implement programming language compilers and interpreters',
    demand: 'Medium',
    salary: 'Very High',
    companies: ['Google', 'Microsoft', 'Apple', 'Intel', 'NVIDIA'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn compiler fundamentals',
        skills: [
          'Programming Languages Theory',
          'Lexical Analysis',
          'Parsing Techniques',
          'Syntax Trees',
          'Semantic Analysis',
          'Code Generation',
          'Optimization Basics',
          'Assembly Language',
          'Version Control',
          'Mathematical Foundations'
        ],
        projects: [
          'Simple Interpreter',
          'Basic Parser',
          'Lexical Analyzer',
          'Code Generator',
          'Optimization Pass'
        ],
        freeResources: [
          {
            title: 'Crafting Interpreters',
            url: 'https://craftinginterpreters.com/',
            description: 'Free book on building interpreters'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master advanced compiler techniques',
        skills: [
          'Advanced Parsing',
          'Type Systems',
          'Code Optimization',
          'Register Allocation',
          'Memory Management',
          'JIT Compilation',
          'Parallel Compilation',
          'Team Collaboration',
          'Project Management',
          'Performance Analysis'
        ],
        projects: [
          'Advanced Compiler',
          'JIT Compiler',
          'Optimization Framework',
          'Parallel Compiler',
          'Performance Profiler'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead compiler engineering initiatives',
        skills: [
          'Compiler Architecture',
          'Team Leadership',
          'Advanced Research',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication',
          'Industry Knowledge'
        ],
        projects: [
          'Compiler Architecture Design',
          'Team Leadership Program',
          'Technical Leadership',
          'Business Strategy Implementation',
          'Industry Innovation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive compiler strategy and innovation',
        skills: [
          'Compiler Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Compiler Strategy Implementation',
          'Advanced Compiler Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  aiops: {
    title: 'AIOps Engineer',
    icon: Brain,
    color: 'from-cyan-500 to-blue-500',
    description: 'Apply AI and machine learning to IT operations and monitoring',
    demand: 'Very High',
    salary: 'Very High',
    companies: ['Google', 'Microsoft', 'Amazon', 'Splunk', 'Datadog'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn AIOps fundamentals',
        skills: [
          'IT Operations',
          'Machine Learning Basics',
          'Monitoring & Alerting',
          'Data Analysis',
          'Anomaly Detection',
          'Incident Response',
          'Automation & Scripting',
          'Cloud Platforms',
          'Version Control',
          'Statistical Analysis'
        ],
        projects: [
          'Anomaly Detection System',
          'Automated Alerting',
          'Incident Prediction Model',
          'Monitoring Dashboard',
          'Automation Script'
        ],
        freeResources: [
          {
            title: 'AIOps Resources',
            url: 'https://www.aiops.org/',
            description: 'Free AIOps learning resources'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master advanced AIOps techniques',
        skills: [
          'Advanced ML Models',
          'Time Series Analysis',
          'Root Cause Analysis',
          'Predictive Analytics',
          'Automated Remediation',
          'Performance Optimization',
          'Team Collaboration',
          'Project Management',
          'Security & Compliance',
          'Scalability'
        ],
        projects: [
          'Predictive Maintenance System',
          'Root Cause Analysis Tool',
          'Automated Remediation',
          'Performance Optimization',
          'Security Monitoring'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead AIOps initiatives and teams',
        skills: [
          'AIOps Strategy & Planning',
          'Team Leadership',
          'Advanced Architecture',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication',
          'Industry Knowledge'
        ],
        projects: [
          'AIOps Strategy Implementation',
          'Team Leadership Program',
          'Technical Leadership',
          'Business Strategy Implementation',
          'Industry Innovation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive AIOps strategy and innovation',
        skills: [
          'AIOps Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'AIOps Strategy Implementation',
          'Advanced AIOps Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  healthcare: {
    title: 'Healthcare Technology Engineer',
    icon: Code,
    color: 'from-red-500 to-pink-500',
    description: 'Develop technology solutions for healthcare and medical applications',
    demand: 'Very High',
    salary: 'High',
    companies: ['Epic', 'Cerner', 'Google Health', 'Microsoft Health', 'Amazon Health'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn healthcare technology fundamentals',
        skills: [
          'Healthcare Systems',
          'Medical Data Standards (HL7, FHIR)',
          'HIPAA Compliance',
          'Electronic Health Records',
          'Medical Imaging',
          'Programming (Python/Java)',
          'Database Design',
          'Security & Privacy',
          'Version Control',
          'Regulatory Knowledge'
        ],
        projects: [
          'EHR Integration',
          'Medical Data Dashboard',
          'HIPAA Compliance Tool',
          'Medical Imaging Viewer',
          'Patient Portal'
        ],
        freeResources: [
          {
            title: 'HL7 FHIR',
            url: 'https://www.hl7.org/fhir/',
            description: 'Free healthcare data standards documentation'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master healthcare technology development',
        skills: [
          'Advanced Medical Systems',
          'Telemedicine Platforms',
          'Medical AI & ML',
          'Interoperability',
          'Clinical Workflows',
          'Team Collaboration',
          'Project Management',
          'Quality Assurance',
          'Regulatory Compliance',
          'Patient Safety'
        ],
        projects: [
          'Telemedicine Platform',
          'Medical AI Application',
          'Interoperability Solution',
          'Clinical Workflow System',
          'Quality Assurance Framework'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead healthcare technology initiatives',
        skills: [
          'Healthcare Strategy & Planning',
          'Team Leadership',
          'Advanced Architecture',
          'Technical Documentation',
          'Code Reviews & Mentoring',
          'Business Strategy',
          'Innovation & Research',
          'Cross-functional Collaboration',
          'Executive Communication',
          'Industry Knowledge'
        ],
        projects: [
          'Healthcare Strategy Implementation',
          'Team Leadership Program',
          'Technical Leadership',
          'Business Strategy Implementation',
          'Industry Innovation'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive healthcare technology strategy and innovation',
        skills: [
          'Healthcare Strategy & Vision',
          'Advanced Leadership',
          'Team Management',
          'Cross-functional Leadership',
          'Technical Standards',
          'Innovation & Research',
          'Mentoring & Development',
          'Industry Leadership',
          'Business Strategy',
          'Technical Vision'
        ],
        projects: [
          'Healthcare Strategy Implementation',
          'Advanced Healthcare Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      }
    }
  }
}
