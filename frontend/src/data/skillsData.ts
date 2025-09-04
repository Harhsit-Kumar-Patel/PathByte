import { 
  Code, 
  Server
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
  }
}
