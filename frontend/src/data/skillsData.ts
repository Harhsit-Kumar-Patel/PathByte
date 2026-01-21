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
        freeResources: [
          {
            title: 'React Patterns Guide',
            url: 'https://www.patterns.dev/',
            description: 'A collection of React design patterns and best practices'
          },
          {
            title: 'WebAssembly Docs',
            url: 'https://developer.mozilla.org/en-US/docs/WebAssembly',
            description: 'Mozilla Developer Network documentation on WebAssembly'
          }
        ],
        paidResources: [
          {
            title: 'Advanced React Patterns',
            url: 'https://kentcdodds.com/',
            description: 'Advanced React patterns and best practices'
          },
          {
            title: 'Design Systems Course',
            url: 'https://www.designsystems.com/',
            description: 'Professional course on building and scaling design systems'
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
        freeResources: [
          {
            title: 'Google Web Vitals',
            url: 'https://web.dev/vitals/',
            description: 'Official Google guide on web performance and Core Web Vitals'
          },
          {
            title: 'V8 Engine Blog',
            url: 'https://v8.dev/',
            description: 'Technical deep-dives into the Chrome V8 JavaScript engine'
          }
        ],
        paidResources: [
          {
            title: 'Frontend Architecture for Design Systems',
            url: 'https://www.oreilly.com/',
            description: 'Advanced frontend architecture patterns'
          },
          {
            title: 'Staff Engineer Archetypes',
            url: 'https://staffeng.com/',
            description: 'Book and resources on the Staff Engineer career path'
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
          },
          {
            title: 'PostgreSQL Documentation',
            url: 'https://www.postgresql.org/docs/',
            description: 'Advanced relational database documentation'
          }
        ],
        paidResources: [
          {
            title: 'Microservices Architecture',
            url: 'https://www.udemy.com/',
            description: 'Building scalable microservices systems'
          },
          {
            title: 'AWS Certified Developer - Associate Course',
            url: 'https://www.acloudguru.com/',
            description: 'Preparation course for AWS developer certification'
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
        freeResources: [
          {
            title: 'Kubernetes Documentation',
            url: 'https://kubernetes.io/docs/',
            description: 'Official Kubernetes documentation for orchestration'
          },
          {
            title: 'Event-Driven Architecture Guide',
            url: 'https://microservices.io/patterns/data/event-driven-architecture.html',
            description: 'Patterns and principles for Event-Driven Architecture'
          }
        ],
        paidResources: [
          {
            title: 'System Design Interview',
            url: 'https://www.educative.io/',
            description: 'System design patterns and best practices'
          },
          {
            title: 'Advanced Distributed Systems Course',
            url: 'https://www.coursera.org/specializations/distributed-system-design',
            description: 'Specialization on designing modern distributed systems'
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
        freeResources: [
          {
            title: 'ThoughtWorks Technology Radar',
            url: 'https://www.thoughtworks.com/radar',
            description: 'A guide to the technologies, tools, and platforms shaping enterprise IT'
          },
          {
            title: 'Architecture Decision Records (ADR)',
            url: 'https://adr.github.io/',
            description: 'Documentation for recording architectural decisions'
          }
        ],
        paidResources: [
          {
            title: 'Enterprise Architecture Patterns',
            url: 'https://www.oreilly.com/',
            description: 'Advanced enterprise architecture strategies'
          },
          {
            title: 'Certified Technical Architect (CTA) Prep',
            url: 'https://www.salesforce.com/certifications/technical-architect/',
            description: 'Executive-level certification preparation'
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
        freeResources: [
          {
            title: 'OWASP Top 10',
            url: 'https://owasp.org/www-project-top-ten/',
            description: 'Guide to the most critical web application security risks'
          },
          {
            title: 'TypeScript Documentation',
            url: 'https://www.typescriptlang.org/docs/',
            description: 'Official documentation for advanced TypeScript features'
          }
        ],
        paidResources: [
          {
            title: 'Advanced React and Node Course',
            url: 'https://www.udemy.com/',
            description: 'Comprehensive course focusing on production-grade full-stack apps'
          },
          {
            title: 'Full-Stack Testing Masterclass',
            url: 'https://testingjavascript.com/',
            description: 'In-depth course on testing techniques for modern applications'
          }
        ],
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
        freeResources: [
          {
            title: 'System Design Primer',
            url: 'https://github.com/donnemartin/system-design-primer',
            description: 'Collection of resources for learning how to design scalable systems'
          },
          {
            title: 'Google Cloud Architecture Center',
            url: 'https://cloud.google.com/architecture',
            description: 'Reference architectures and best practices for cloud deployments'
          }
        ],
        paidResources: [
          {
            title: 'System Design Interview - An Insider\'s Guide',
            url: 'https://www.designgurus.org/course/grokking-the-system-design-interview',
            description: 'In-depth preparation for system design interviews'
          },
          {
            title: 'Cloud Architecture Certification Prep',
            url: 'https://acloudguru.com/cloud-certifications',
            description: 'Preparation for professional cloud architect certifications'
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
        freeResources: [
          {
            title: 'Martin Fowler\'s Blog',
            url: 'https://martinfowler.com/',
            description: 'Essays on software architecture, design patterns, and agile development'
          },
          {
            title: 'ThoughtWorks Tech Radar',
            url: 'https://www.thoughtworks.com/radar',
            description: 'A bi-annual report on the current trends in software development'
          }
        ],
        paidResources: [
          {
            title: 'Enterprise Architecture Patterns Book',
            url: 'https://www.oreilly.com/',
            description: 'Advanced patterns and strategies for large-scale application design'
          },
          {
            title: 'CTO/VP Engineering Executive Program',
            url: 'https://executive.mit.edu/programs/technology-strategy-digital-transformation',
            description: 'Executive education focused on technology strategy and leadership'
          }
        ],
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
        freeResources: [
          {
            title: 'Flutter Advanced Docs',
            url: 'https://docs.flutter.dev/perf/rendering',
            description: 'Advanced topics in Flutter performance and rendering'
          },
          {
            title: 'Android Developers Guide',
            url: 'https://developer.android.com/guide/background/workmanager',
            description: 'Guides on efficient background processing for Android'
          }
        ],
        paidResources: [
          {
            title: 'Advanced Mobile Performance Optimization',
            url: 'https://www.pluralsight.com/',
            description: 'Course on profiling and optimizing mobile application performance'
          },
          {
            title: 'Mobile CI/CD Masterclass',
            url: 'https://www.udemy.com/course/mobile-devops-cicd-jenkins-fastlane/',
            description: 'Course on setting up continuous integration and delivery for mobile apps'
          }
        ],
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
        freeResources: [
          {
            title: 'Awesome Mobile Architecture',
            url: 'https://github.com/futurice/android-best-practices/wiki/Architecture',
            description: 'Collection of best practices and patterns for mobile architecture'
          },
          {
            title: 'OWASP Mobile Security Testing Guide',
            url: 'https://owasp.org/www-project-mobile-security-testing-guide/',
            description: 'Guide for mobile application security testing and reverse engineering'
          }
        ],
        paidResources: [
          {
            title: 'Mobile Architecture Design Course',
            url: 'https://www.coursera.org/learn/mobile-application-development',
            description: 'Advanced course on designing scalable and maintainable mobile systems'
          },
          {
            title: 'Leading Mobile Engineering Teams',
            url: 'https://www.udemy.com/',
            description: 'Course on leadership and project management for mobile teams'
          }
        ],
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
        freeResources: [
          {
            title: 'Apple Human Interface Guidelines',
            url: 'https://developer.apple.com/design/human-interface-guidelines/',
            description: 'Deep dive into Apple\'s design philosophy for principal-level work'
          },
          {
            title: 'Google I/O & WWDC Videos',
            url: 'https://www.youtube.com/@GoogleDevelopers/playlists?view=50&sort=dd&shelf_id=1',
            description: 'Technical deep dives from annual developer conferences for future planning'
          }
        ],
        paidResources: [
          {
            title: 'Mobile Platform Engineering Program',
            url: 'https://oreilly.com/',
            description: 'Training and resources on building and managing mobile platforms at scale'
          },
          {
            title: 'Executive Program on Innovation Strategy',
            url: 'https://executive.mit.edu/',
            description: 'Program focused on driving innovation and strategy in technology'
          }
        ],
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
        freeResources: [
          {
            title: 'Deep Learning Book',
            url: 'https://www.deeplearningbook.org/',
            description: 'Free, comprehensive textbook on deep learning fundamentals'
          },
          {
            title: 'PyTorch Documentation',
            url: 'https://pytorch.org/docs/stable/index.html',
            description: 'Official documentation and tutorials for the PyTorch framework'
          }
        ],
        paidResources: [
          {
            title: 'Deep Learning Specialization',
            url: 'https://www.coursera.org/specializations/deep-learning',
            description: 'Five-course specialization by Andrew Ng on deep learning'
          },
          {
            title: 'MLOps: Machine Learning Operations Course',
            url: 'https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009t',
            description: 'Training program focused on deploying and managing ML in production'
          }
        ],
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
        freeResources: [
          {
            title: 'Google AI Research Blog',
            url: 'https://ai.googleblog.com/',
            description: 'Latest research and technical articles from Google AI'
          },
          {
            title: 'Advanced Statistics Textbooks',
            url: 'https://statweb.stanford.edu/~tibs/ElemStatLearn/',
            description: 'Free PDF for "The Elements of Statistical Learning"'
          }
        ],
        paidResources: [
          {
            title: 'Machine Learning Engineering for Production (MLOps)',
            url: 'https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops',
            description: 'Coursera specialization on building and managing production-ready ML systems'
          },
          {
            title: 'Advanced Business Analytics Course',
            url: 'https://hbr.org/topics/business-analytics',
            description: 'Program focusing on linking data science to business outcomes'
          }
        ],
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
        freeResources: [
          {
            title: 'arXiv.org - Machine Learning',
            url: 'https://arxiv.org/list/cs.LG/recent',
            description: 'Source for cutting-edge machine learning research papers'
          },
          {
            title: 'The Turing Way Guide',
            url: 'https://the-turing-way.netlify.app/welcome.html',
            description: 'Community-driven guide to reproducible, ethical, and collaborative data science'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program in AI & Data Strategy',
            url: 'https://executive.mit.edu/programs/artificial-intelligence-and-business-strategy',
            description: 'Program for senior leaders focusing on integrating AI into business strategy'
          },
          {
            title: 'Principal Data Scientist Career Guide',
            url: 'https://www.oreilly.com/',
            description: 'Advanced resources and books on data leadership and architecture'
          }
        ],
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
        freeResources: [
          {
            title: 'Kubernetes Documentation',
            url: 'https://kubernetes.io/docs/',
            description: 'Official documentation for Kubernetes orchestration'
          },
          {
            title: 'Prometheus Monitoring Docs',
            url: 'https://prometheus.io/docs/introduction/overview/',
            description: 'Documentation for the open-source monitoring system'
          }
        ],
        paidResources: [
          {
            title: 'Certified Kubernetes Administrator (CKA) Course',
            url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/',
            description: 'Preparation course for the industry-standard Kubernetes certification'
          },
          {
            title: 'Terraform and Infrastructure as Code Course',
            url: 'https://www.hashicorp.com/certification/terraform-associate',
            description: 'Training for HashiCorp Certified: Terraform Associate'
          }
        ],
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
        freeResources: [
          {
            title: 'AWS Well-Architected Framework',
            url: 'https://aws.amazon.com/architecture/well-architected/',
            description: 'Best practices for designing and operating reliable, secure, and efficient systems'
          },
          {
            title: 'The Site Reliability Engineering Workbook',
            url: 'https://sre.google/workbook/table-of-contents/',
            description: 'A practical guide to implementing SRE principles at scale'
          }
        ],
        paidResources: [
          {
            title: 'AWS Certified DevOps Engineer - Professional',
            url: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/',
            description: 'Professional-level course for advanced DevOps practices on AWS'
          },
          {
            title: 'Advanced Cloud Security Course',
            url: 'https://www.isc2.org/Certifications/CCSP',
            description: 'Training for the Certified Cloud Security Professional (CCSP) certification'
          }
        ],
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
        freeResources: [
          {
            title: 'CNCF Whitepapers',
            url: 'https://www.cncf.io/reports/cncf-cloud-native-survey-2023/',
            description: 'Reports and technical papers on cloud native and platform engineering'
          },
          {
            title: 'InfoQ Architecture & Design Articles',
            url: 'https://www.infoq.com/software-architecture-and-design/',
            description: 'Articles covering enterprise and distributed system architecture patterns'
          }
        ],
        paidResources: [
          {
            title: 'Advanced Platform Engineering Course',
            url: 'https://www.oreilly.com/',
            description: 'Specialized course on designing and building internal developer platforms'
          },
          {
            title: 'Executive IT Strategy & Leadership Program',
            url: 'https://executive.mit.edu/',
            description: 'Program focused on technical leadership and IT strategy'
          }
        ],
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
        freeResources: [
          {
            title: 'MLOps Community Resources',
            url: 'https://mlops.community/',
            description: 'Guides, articles, and talks on MLOps best practices'
          },
          {
            title: 'TensorFlow Extended (TFX) Docs',
            url: 'https://www.tensorflow.org/tfx',
            description: 'Google\'s framework for production ML pipelines'
          }
        ],
        paidResources: [
          {
            title: 'Machine Learning Engineering for Production (MLOps)',
            url: 'https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops',
            description: 'Specialization on building and managing production-ready ML systems'
          },
          {
            title: 'Advanced Cloud ML Platform Course',
            url: 'https://cloud.google.com/certification/cloud-machine-learning-engineer',
            description: 'Preparation for the Google Cloud Professional Machine Learning Engineer certification'
          }
        ],
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
        freeResources: [
          {
            title: 'Designing Data-Intensive Applications',
            url: 'https://dataintensive.net/',
            description: 'Book on distributed systems and data storage (free chapters/resources)'
          },
          {
            title: 'Kubeflow Documentation',
            url: 'https://www.kubeflow.org/',
            description: 'Platform for developing, deploying, and managing portable ML workloads on Kubernetes'
          }
        ],
        paidResources: [
          {
            title: 'Distributed Systems for ML Course',
            url: 'https://www.udemy.com/',
            description: 'Specialized course on building high-performance, distributed ML systems'
          },
          {
            title: 'Certified Machine Learning Architect',
            url: 'https://www.certifiedmlarchitect.com/',
            description: 'Advanced certification prep focusing on system architecture'
          }
        ],
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
        freeResources: [
          {
            title: 'ArXiv.org - Distributed Systems',
            url: 'https://arxiv.org/list/cs.DC/recent',
            description: 'Latest research on distributed computing relevant to large-scale ML'
          },
          {
            title: 'Google Research: ML Best Practices',
            url: 'https://research.google/pubs/',
            description: 'Technical papers on best practices in ML engineering from Google Research'
          }
        ],
        paidResources: [
          {
            title: 'AI Strategy and Executive Leadership Program',
            url: 'https://executive.mit.edu/',
            description: 'Program focused on leading AI transformation at the executive level'
          },
          {
            title: 'Staff Engineer/Principal Engineer Guide',
            url: 'https://staffeng.com/',
            description: 'Resources for achieving and excelling in expert-level technical leadership roles'
          }
        ],
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
        freeResources: [
          {
            title: 'Nielsen Norman Group Articles',
            url: 'https://www.nngroup.com/articles/',
            description: 'Expert articles on user experience research and usability'
          },
          {
            title: 'Google Material Design Guidelines',
            url: 'https://m3.material.io/',
            description: 'Comprehensive guide to building beautiful, usable products'
          }
        ],
        paidResources: [
          {
            title: 'Interaction Design Specialization',
            url: 'https://www.coursera.org/specializations/interaction-design',
            description: 'Specialization on designing effective user interactions'
          },
          {
            title: 'Advanced Prototyping with Figma Course',
            url: 'https://www.skillshare.com/',
            description: 'Course on advanced techniques in high-fidelity prototyping and animation'
          }
        ],
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
        freeResources: [
          {
            title: 'Design System Handbook',
            url: 'https://www.designsystemshub.com/handbook/',
            description: 'Guide on how to plan, build, and maintain design systems'
          },
          {
            title: 'Web Content Accessibility Guidelines (WCAG)',
            url: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
            description: 'Official accessibility standards documentation'
          }
        ],
        paidResources: [
          {
            title: 'Design Leadership Program',
            url: 'https://www.designlab.com/design-leadership/',
            description: 'Course focused on leading design teams and strategy'
          },
          {
            title: 'Advanced User Research Methods Course',
            url: 'https://www.udemy.com/course/advanced-user-experience-research/',
            description: 'In-depth training on mixed-methods and strategic research'
          }
        ],
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
        freeResources: [
          {
            title: 'Design Systems Community',
            url: 'https://design.systems.community/',
            description: 'Platform for advanced discussions on design systems and governance'
          },
          {
            title: 'Harvard Business Review - Design Articles',
            url: 'https://hbr.org/topic/design-thinking',
            description: 'Articles linking design to business strategy and organizational change'
          }
        ],
        paidResources: [
          {
            title: 'Strategic Design Thinking Certificate',
            url: 'https://www.edx.org/professional-certificate/rits-strategic-design-thinking',
            description: 'Program focused on applying design thinking to high-level business problems'
          },
          {
            title: 'Chief Design Officer Executive Course',
            url: 'https://www.mit.edu/executive-education/digital-business-strategy',
            description: 'Executive education for defining design and product vision at scale'
          }
        ],
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
        freeResources: [
          {
            title: 'OWASP Testing Guide',
            url: 'https://owasp.org/www-project-web-security-testing-guide/',
            description: 'Comprehensive guide for testing web application security'
          },
          {
            title: 'NIST Cybersecurity Framework',
            url: 'https://www.nist.gov/cyberframework',
            description: 'Framework for managing cybersecurity risk'
          }
        ],
        paidResources: [
          {
            title: 'CompTIA Security+ Certification Course',
            url: 'https://www.comptia.org/certifications/security',
            description: 'Vendor-neutral course for fundamental IT security'
          },
          {
            title: 'Certified Ethical Hacker (CEH) Training',
            url: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/',
            description: 'Training program on hacking techniques and preventative countermeasures'
          }
        ],
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
        freeResources: [
          {
            title: 'CIS Critical Security Controls',
            url: 'https://www.cisecurity.org/controls/v8',
            description: 'Prioritized set of actions to defend against common cyberattacks'
          },
          {
            title: 'Cloud Security Alliance (CSA) Guides',
            url: 'https://cloudsecurityalliance.org/',
            description: 'Resources and research on cloud computing security'
          }
        ],
        paidResources: [
          {
            title: 'Certified Information Systems Security Professional (CISSP)',
            url: 'https://www.isc2.org/Certifications/CISSP',
            description: 'Advanced certification for security practitioners and managers'
          },
          {
            title: 'Cloud Security Professional (CCSP) Course',
            url: 'https://www.isc2.org/Certifications/CCSP',
            description: 'Specialized course on cloud security architecture, design, and operations'
          }
        ],
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
        freeResources: [
          {
            title: 'Security Architecture Patterns',
            url: 'https://martinfowler.com/architecture/security.html',
            description: 'Architectural patterns for building secure software systems'
          },
          {
            title: 'Advanced Threat Analysis Papers',
            url: 'https://www.fireeye.com/blog/threat-research.html',
            description: 'Cutting-edge research and analysis of APTs and emerging threats'
          }
        ],
        paidResources: [
          {
            title: 'Certified Information Security Manager (CISM)',
            url: 'https://www.isaca.org/credentialing/cism',
            description: 'Executive-level certification for managing, designing, and overseeing enterprise information security'
          },
          {
            title: 'Chief Information Security Officer (CISO) Program',
            url: 'https://executive.mit.edu/',
            description: 'Executive education focused on security governance and strategic leadership'
          }
        ],
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
        freeResources: [
          {
            title: 'Unreal Engine Documentation',
            url: 'https://docs.unrealengine.com/',
            description: 'In-depth technical documentation for Unreal Engine'
          },
          {
            title: 'Game Programming Patterns',
            url: 'https://gameprogrammingpatterns.com/',
            description: 'Free online book of reusable patterns for game programming'
          }
        ],
        paidResources: [
          {
            title: 'Advanced C++ Game Development Course',
            url: 'https://www.udemy.com/course/game-development-advanced-c-and-cpp/',
            description: 'Course focusing on deep C++ programming for high-performance games'
          },
          {
            title: 'Multiplayer Game Development Masterclass',
            url: 'https://www.coursera.org/',
            description: 'Specialized course on network and server-side logic for multiplayer games'
          }
        ],
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
        freeResources: [
          {
            title: 'GDC Vault Free Talks',
            url: 'https://www.youtube.com/user/GDCvault',
            description: 'A selection of free technical talks from the Game Developers Conference'
          },
          {
            title: 'Advanced Graphics Papers',
            url: 'https://www.realtimerendering.com/resources.html',
            description: 'Collection of resources on advanced real-time rendering techniques'
          }
        ],
        paidResources: [
          {
            title: 'Game Architecture Design Course',
            url: 'https://www.pluralsight.com/courses/game-architecture-fundamentals',
            description: 'Course on designing scalable and maintainable game codebases'
          },
          {
            title: 'Advanced Shading and Rendering Course',
            url: 'https://www.edx.org/',
            description: 'University-level course on advanced graphics programming and algorithms'
          }
        ],
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
        freeResources: [
          {
            title: 'The Art of Game Design: A Book of Lenses',
            url: 'https://www.artofgamedesign.com/',
            description: 'Resources and insights from a foundational book on game design theory'
          },
          {
            title: 'SIGGRAPH Technical Papers',
            url: 'https://www.siggraph.org/learn/publications/',
            description: 'Access to the most cutting-edge research in computer graphics and interactive techniques'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program on Innovation in Entertainment Tech',
            url: 'https://executive.usc.edu/',
            description: 'Executive education focused on the business and strategy of entertainment technology'
          },
          {
            title: 'Game Studio Leadership & Finance Course',
            url: 'https://www.gamasutra.com/',
            description: 'Training on the management, finance, and strategy of running a game studio'
          }
        ],
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
        freeResources: [
          {
            title: 'Apache Kafka Documentation',
            url: 'https://kafka.apache.org/documentation/',
            description: 'Official documentation for the distributed streaming platform'
          },
          {
            title: 'Data Engineering Weekly',
            url: 'https://dataengineeringweekly.com/',
            description: 'A newsletter and resource hub for data engineering topics'
          }
        ],
        paidResources: [
          {
            title: 'Google Cloud Professional Data Engineer Course',
            url: 'https://cloud.google.com/certification/data-engineer',
            description: 'Preparation course for Google Cloud\'s professional data engineer certification'
          },
          {
            title: 'Data Pipelining with Apache Airflow',
            url: 'https://www.udemy.com/course/apache-airflow/',
            description: 'Comprehensive course on data pipeline orchestration with Airflow'
          }
        ],
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
        freeResources: [
          {
            title: 'Designing Data-Intensive Applications',
            url: 'https://dataintensive.net/',
            description: 'Book on distributed systems, data storage, and processing (free chapters/resources)'
          },
          {
            title: 'Data Governance & Quality Guides',
            url: 'https://www.dataversity.net/',
            description: 'Articles and resources on data governance, quality, and compliance'
          }
        ],
        paidResources: [
          {
            title: 'Data Architecture Certification Prep',
            url: 'https://www.theopengroup.org/certifications/certified-data-architect',
            description: 'Training for Certified Data Architect certifications'
          },
          {
            title: 'Advanced Data Modeling and Warehouse Design',
            url: 'https://www.oreilly.com/',
            description: 'Books and courses on advanced data modeling techniques (e.g., Data Vault, Dimensional)'
          }
        ],
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
        freeResources: [
          {
            title: 'The Data Engineering Handbook',
            url: 'https://www.dataengineeringhandbook.com/',
            description: 'Community-driven guide on the entire data engineering landscape at scale'
          },
          {
            title: 'InfoQ Data and Architecture Articles',
            url: 'https://www.infoq.com/software-architecture-and-design/',
            description: 'Articles covering high-level data strategy and system architecture'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program in Big Data and Data Science Strategy',
            url: 'https://executive.mit.edu/programs/big-data-and-data-science-strategy',
            description: 'Program for senior leaders focused on data-driven business strategy'
          },
          {
            title: 'Staff Engineer/Principal Engineer Guide',
            url: 'https://staffeng.com/',
            description: 'Resources for achieving and excelling in expert-level technical leadership roles'
          }
        ],
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
        freeResources: [
          {
            title: 'Kubernetes Documentation',
            url: 'https://kubernetes.io/docs/',
            description: 'Official documentation for Kubernetes orchestration'
          },
          {
            title: 'Serverless Framework Documentation',
            url: 'https://www.serverless.com/framework/docs/',
            description: 'Guide to building and deploying serverless applications'
          }
        ],
        paidResources: [
          {
            title: 'AWS Certified Solutions Architect - Associate Course',
            url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
            description: 'Preparation course for the fundamental cloud architect certification'
          },
          {
            title: 'Azure Administrator (AZ-104) Training',
            url: 'https://learn.microsoft.com/en-us/certifications/azure-administrator/',
            description: 'Official training for managing cloud resources in Azure'
          }
        ],
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
        freeResources: [
          {
            title: 'AWS Well-Architected Framework',
            url: 'https://aws.amazon.com/architecture/well-architected/',
            description: 'Best practices for designing and operating reliable, secure, and efficient systems'
          },
          {
            title: 'Cloud Security Alliance (CSA) Guides',
            url: 'https://cloudsecurityalliance.org/',
            description: 'Resources and research on cloud computing security, compliance, and governance'
          }
        ],
        paidResources: [
          {
            title: 'Google Cloud Professional Cloud Architect Course',
            url: 'https://cloud.google.com/certification/cloud-architect',
            description: 'Professional-level certification prep focusing on enterprise cloud architecture'
          },
          {
            title: 'Certified Cloud Security Professional (CCSP) Course',
            url: 'https://www.isc2.org/Certifications/CCSP',
            description: 'Specialized course on advanced cloud security architecture and operations'
          }
        ],
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
        freeResources: [
          {
            title: 'ThoughtWorks Technology Radar',
            url: 'https://www.thoughtworks.com/radar',
            description: 'Analysis of the current trends and technologies in cloud infrastructure'
          },
          {
            title: 'CNCF Whitepapers & Reports',
            url: 'https://www.cncf.io/reports/',
            description: 'Technical papers on cloud native and platform engineering'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program on Digital Transformation',
            url: 'https://executive.mit.edu/programs/digital-transformation',
            description: 'Executive education focused on leading large-scale technology transformation'
          },
          {
            title: 'Advanced Cloud Economics and FinOps Course',
            url: 'https://www.finops.org/framework/training/',
            description: 'Training on financial accountability for cloud spending and governance'
          }
        ],
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
        freeResources: [
          {
            title: 'JMeter User Manual',
            url: 'https://jmeter.apache.org/usermanual/index.html',
            description: 'Official user manual for Apache JMeter for performance testing'
          },
          {
            title: 'Cypress Documentation',
            url: 'https://docs.cypress.io/',
            description: 'Guides and tutorials for modern end-to-end testing with Cypress'
          }
        ],
        paidResources: [
          {
            title: 'Advanced Test Automation with Playwright',
            url: 'https://www.udemy.com/',
            description: 'Comprehensive course on building resilient test automation with Playwright'
          },
          {
            title: 'ISTQB Advanced Level - Test Automation Engineer',
            url: 'https://www.istqb.org/certifications/test-automation-engineer',
            description: 'Preparation course for advanced test automation certification'
          }
        ],
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
        freeResources: [
          {
            title: 'Test Automation University',
            url: 'https://testautomationu.applitools.com/',
            description: 'Free courses on various test automation and quality engineering topics'
          },
          {
            title: 'Test Architecture Patterns',
            url: 'https://martinfowler.com/articles/mocksArentStubs.html',
            description: 'Technical articles on design patterns for testing and quality'
          }
        ],
        paidResources: [
          {
            title: 'ISTQB Expert Level - Improving the Test Process',
            url: 'https://www.istqb.org/certifications/improving-the-test-process-expert-level',
            description: 'Expert-level course focused on quality process improvement'
          },
          {
            title: 'Leading Quality: Leadership for Software Testers',
            url: 'https://www.leadingquality.com/',
            description: 'Training focused on quality leadership and strategy'
          }
        ],
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
        freeResources: [
          {
            title: 'Agile Testing: A Practical Guide for Testers and Agile Teams',
            url: 'https://www.oreilly.com/',
            description: 'Resources and insights from a key book on quality in an Agile context'
          },
          {
            title: 'Black Box Software Testing Courses',
            url: 'https://www.satisfice.com/bbst-courses',
            description: 'Free resources from advanced testing courses'
          }
        ],
        paidResources: [
          {
            title: 'Software Quality and Reliability Executive Program',
            url: 'https://executive.mit.edu/',
            description: 'Executive course on system reliability and quality strategy'
          },
          {
            title: 'Staff Engineer/Principal Engineer Guide',
            url: 'https://staffeng.com/',
            description: 'Resources for achieving and excelling in expert-level technical leadership roles'
          }
        ],
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
        freeResources: [
          {
            title: 'OpenZeppelin Contracts',
            url: 'https://openzeppelin.com/contracts/',
            description: 'Secure smart contract library'
          },
          {
            title: 'ConsenSys Academy',
            url: 'https://consensys.net/academy/',
            description: 'Free blockchain education resources'
          }
        ],
        paidResources: [
          {
            title: 'DeFi and the Future of Finance',
            url: 'https://www.coursera.org/learn/defi',
            description: 'Coursera course on decentralized finance'
          }
        ],
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
        freeResources: [
          {
            title: 'Ethereum Research',
            url: 'https://ethresear.ch/',
            description: 'Ethereum research and development discussions'
          },
          {
            title: 'Vitalik Buterin\'s Blog',
            url: 'https://vitalik.ca/',
            description: 'Ethereum founder\'s technical writings on crypto-economics and protocol design'
          }
        ],
        paidResources: [
          {
            title: 'Advanced Blockchain Development',
            url: 'https://www.pluralsight.com/courses/advanced-blockchain-development',
            description: 'Advanced blockchain development course'
          },
          {
            title: 'Certified Blockchain Architect (CBA) Prep',
            url: 'https://www.blockchain-council.org/certifications/certified-blockchain-architect/',
            description: 'Training for advanced blockchain architecture certification'
          }
        ],
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
        freeResources: [
          {
            title: 'Ethereum Improvement Proposals (EIPs)',
            url: 'https://eips.ethereum.org/',
            description: 'Ethereum protocol improvement proposals and technical specifications'
          },
          {
            title: 'Web3 Foundation Research',
            url: 'https://research.web3.foundation/',
            description: 'Cutting-edge Web3 research and innovation'
          }
        ],
        paidResources: [
          {
            title: 'Blockchain Executive Program',
            url: 'https://www.mit.edu/executive-education/blockchain',
            description: 'MIT executive program on blockchain business and technology strategy'
          },
          {
            title: 'Cryptoeconomics and Protocol Design Course',
            url: 'https://www.coursera.org/',
            description: 'Advanced course on the economic incentives and design of decentralized protocols'
          }
        ],
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
        freeResources: [
          {
            title: 'Product School Blog',
            url: 'https://productschool.com/blog/',
            description: 'Articles and resources on product strategy, development, and growth'
          },
          {
            title: 'Mind the Product Newsletter',
            url: 'https://www.mindtheproduct.com/',
            description: 'Weekly newsletter with curated articles on all things product'
          }
        ],
        paidResources: [
          {
            title: 'Certified Scrum Product Owner (CSPO) Training',
            url: 'https://www.scrumalliance.org/certifications/product-owner-certifications/cspo',
            description: 'Official course for Scrum Product Owner certification'
          },
          {
            title: 'Product Analytics Course (e.g., Mixpanel/Amplitude)',
            url: 'https://www.product-analytics.com/',
            description: 'Training on leveraging product data for insights and decision-making'
          }
        ],
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
        freeResources: [
          {
            title: 'Silicon Valley Product Group (SVPG) Insights',
            url: 'https://www.svpg.com/insights/',
            description: 'Articles by Marty Cagan on how top technology companies build products'
          },
          {
            title: 'Inspired: How to Create Tech Products Customers Love (Book)',
            url: 'https://www.svpg.com/inspired-how-to-create-tech-products-customers-love/',
            description: 'Resources and content related to Marty Cagan\'s seminal book on product management'
          }
        ],
        paidResources: [
          {
            title: 'Advanced Product Management Certification (e.g., AIPMM)',
            url: 'https://www.aipmm.com/product-management-certifications',
            description: 'Advanced-level certification focusing on strategy and portfolio management'
          },
          {
            title: 'Technical Product Management Course',
            url: 'https://www.pragmaticinstitute.com/training/product-management/',
            description: 'Training focused on the technical depth required for senior product managers'
          }
        ],
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
        freeResources: [
          {
            title: 'Reforge Courses & Artifacts',
            url: 'https://www.reforge.com/',
            description: 'Advanced growth and retention loops knowledge base (some free content)'
          },
          {
            title: 'Scaling Product Teams Articles',
            url: 'https://www.kenshirriff.com/blog/',
            description: 'Technical and leadership articles on scaling product organizations'
          }
        ],
        paidResources: [
          {
            title: 'Chief Product Officer (CPO) Executive Program',
            url: 'https://www.insead.edu/executive-education/strategy-programmes/chief-product-officer',
            description: 'Executive education focused on defining product strategy at the C-level'
          },
          {
            title: 'Advanced Business Strategy Program',
            url: 'https://online.hbs.edu/courses/business-strategy/',
            description: 'Advanced strategic thinking and leadership course'
          }
        ],
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
        freeResources: [
          {
            title: 'Writerside Documentation',
            url: 'https://www.jetbrains.com/writerside/',
            description: 'Modern, feature-rich documentation tool from JetBrains'
          },
          {
            title: 'Information Architecture Basics',
            url: 'https://www.uxmatters.com/articles/ia-basics/',
            description: 'Guides on organizing and structuring content for documentation'
          }
        ],
        paidResources: [
          {
            title: 'Certified Professional Technical Communicator (CPTC) Prep',
            url: 'https://www.stc.org/certification/',
            description: 'Preparation course for the professional technical communication certification'
          },
          {
            title: 'DITA or XML Authoring Course',
            url: 'https://www.techwriter-training.com/',
            description: 'Specialized training on structured authoring and content management'
          }
        ],
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
        freeResources: [
          {
            title: 'Content Strategy for the Web (Book Resources)',
            url: 'https://abookapart.com/products/content-strategy-for-the-web',
            description: 'Resources related to Kristina Halvorson\'s foundational book on content strategy'
          },
          {
            title: 'Write the Docs Community Guides',
            url: 'https://www.writethedocs.org/guide/',
            description: 'Community guides on best practices for technical documentation'
          }
        ],
        paidResources: [
          {
            title: 'Advanced Content Strategy Course',
            url: 'https://www.northwestern.edu/continuingstudies/program-areas/integrated-marketing/content-strategy.html',
            description: 'University-level course focusing on enterprise content strategy'
          },
          {
            title: 'Managing Technical Documentation Teams',
            url: 'https://www.linkedin.com/learning/topics/technical-writing',
            description: 'Management-focused training for leading documentation teams and projects'
          }
        ],
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
        freeResources: [
          {
            title: 'The Knowledge Gap: The Tech Writer\'s Role in Bridging It',
            url: 'https://www.writethedocs.org/conf/portland/2023/videos/the-knowledge-gap.html',
            description: 'Conference talks and resources on the strategic role of technical content'
          },
          {
            title: 'AI/LLM Documentation Trends',
            url: 'https://openai.com/blog/technical-writing-best-practices',
            description: 'Articles on the impact of AI and LLMs on technical documentation workflows'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program on Digital Strategy',
            url: 'https://executive.mit.edu/',
            description: 'Executive education focused on content and knowledge as a strategic business asset'
          },
          {
            title: 'Content Operations (ContentOps) Certification',
            url: 'https://contentops.com/',
            description: 'Advanced training on operationalizing content strategy at scale'
          }
        ],
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
        freeResources: [
          {
            title: 'Stanford CS224N: NLP with Deep Learning',
            url: 'http://web.stanford.edu/class/cs224n/',
            description: 'Free course materials on Natural Language Processing'
          },
          {
            title: 'Deep Learning Book',
            url: 'https://www.deeplearningbook.org/',
            description: 'Free, comprehensive textbook on deep learning fundamentals'
          }
        ],
        paidResources: [
          {
            title: 'Advanced Deep Learning Specialization',
            url: 'https://www.coursera.org/specializations/deep-learning',
            description: 'Specialization on advanced deep learning models and applications'
          },
          {
            title: 'Reinforcement Learning Course',
            url: 'https://www.edx.org/course/reinforcement-learning',
            description: 'Advanced course on Reinforcement Learning principles and algorithms'
          }
        ],
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
        freeResources: [
          {
            title: 'Google AI Research Blog',
            url: 'https://ai.googleblog.com/',
            description: 'Latest research and technical articles on AI/ML innovations'
          },
          {
            title: 'AI Ethics and Governance Guides',
            url: 'https://www.weforum.org/platforms/artificial-intelligence-and-machine-learning/',
            description: 'Resources on responsible AI, governance, and ethical frameworks'
          }
        ],
        paidResources: [
          {
            title: 'AI Product Management Course',
            url: 'https://ai-product-management.com/',
            description: 'Training focused on leading AI-powered products and defining AI strategy'
          },
          {
            title: 'Advanced MLOps and Deployment Course',
            url: 'https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009t',
            description: 'In-depth program on building and maintaining production-grade ML systems'
          }
        ],
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
        freeResources: [
          {
            title: 'ArXiv.org - AI',
            url: 'https://arxiv.org/list/cs.AI/recent',
            description: 'Source for cutting-edge artificial intelligence research papers'
          },
          {
            title: 'DeepMind Technical Blog',
            url: 'https://deepmind.com/blog',
            description: 'Technical deep-dives into advanced AI systems and research breakthroughs'
          }
        ],
        paidResources: [
          {
            title: 'AI Executive Leadership Program',
            url: 'https://executive.mit.edu/programs/artificial-intelligence-and-business-strategy',
            description: 'Executive education focused on defining AI strategy and driving innovation at the organizational level'
          },
          {
            title: 'Advanced AI Architecture and System Design Course',
            url: 'https://www.oreilly.com/',
            description: 'Resources on designing and scaling highly complex AI systems'
          }
        ],
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
        freeResources: [
          {
            title: 'Pinecone Learning Center',
            url: 'https://www.pinecone.io/learn/',
            description: 'Resources on vector databases and RAG system implementation'
          },
          {
            title: 'Stanford CS329S: Machine Learning Systems Design',
            url: 'https://stanford-cs329s.github.io/syllabus.html',
            description: 'Course materials on designing and deploying ML systems (incl. Generative AI)'
          }
        ],
        paidResources: [
          {
            title: 'Generative AI with Transformers Course',
            url: 'https://www.coursera.org/specializations/generative-ai-with-transformers',
            description: 'Specialization on building and fine-tuning large language models'
          },
          {
            title: 'Advanced Prompt Engineering Course',
            url: 'https://www.deeplearning.ai/short-courses/',
            description: 'Short courses on advanced prompt engineering and LLM customization'
          }
        ],
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
        freeResources: [
          {
            title: 'ArXiv.org - Generative Models',
            url: 'https://arxiv.org/list/cs.LG/recent',
            description: 'Latest research papers on Diffusion Models, GANs, and Transformers'
          },
          {
            title: 'MLOps for LLMs Guides',
            url: 'https://www.datacamp.com/blog/mlops-for-llms-what-it-is-and-why-you-need-it',
            description: 'Articles on the specialized deployment, monitoring, and security for LLMs'
          }
        ],
        paidResources: [
          {
            title: 'Designing Large-Scale Generative AI Systems',
            url: 'https://www.oreilly.com/',
            description: 'Advanced course on the architecture and scaling of generative AI platforms'
          },
          {
            title: 'AI Ethics and Governance for Product Leaders',
            url: 'https://executive.mit.edu/',
            description: 'Training focusing on the ethical and strategic oversight of AI products'
          }
        ],
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
        freeResources: [
          {
            title: 'AI/ML Whitepapers from Google/Meta/OpenAI',
            url: 'https://openai.com/research',
            description: 'Deep dives into the fundamental research underlying state-of-the-art models'
          },
          {
            title: 'AI Alignment and Safety Research',
            url: 'https://alignmentforum.org/',
            description: 'Discussions and papers on the long-term safety and alignment of advanced AI'
          }
        ],
        paidResources: [
          {
            title: 'AI Executive Leadership Program',
            url: 'https://executive.mit.edu/',
            description: 'Executive education focused on defining AI strategy and leading technical vision'
          },
          {
            title: 'Venture Capital and AI Startup Strategy',
            url: 'https://online.stanford.edu/programs/stanford-executive-program-for-growing-companies',
            description: 'Program for driving business and innovation strategy in the AI sector'
          }
        ],
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
        freeResources: [
          {
            title: 'Stanford CS231N: Convolutional Neural Networks for Visual Recognition',
            url: 'http://cs231n.stanford.edu/',
            description: 'Free course materials on advanced CNNs and visual recognition'
          },
          {
            title: 'PyTorch/TensorFlow Model Hubs',
            url: 'https://pytorch.org/hub/',
            description: 'Access to state-of-the-art pre-trained CV models for fine-tuning'
          }
        ],
        paidResources: [
          {
            title: 'Advanced Computer Vision with Deep Learning',
            url: 'https://www.udemy.com/course/advanced-computer-vision-deep-learning/',
            description: 'Course covering object segmentation, tracking, and advanced architectures'
          },
          {
            title: 'Real-Time Computer Vision Systems Course',
            url: 'https://www.coursera.org/',
            description: 'Specialized course on optimizing CV models for real-time and embedded deployment'
          }
        ],
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
        freeResources: [
          {
            title: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) Papers',
            url: 'https://openaccess.thecvf.com/CVPR2024.py',
            description: 'Access to the latest research in the top CV conference'
          },
          {
            title: 'MLOps for Computer Vision Guides',
            url: 'https://www.v7labs.com/blog/mlops-for-computer-vision-a-complete-guide',
            description: 'Resources on deploying, monitoring, and maintaining CV models in production'
          }
        ],
        paidResources: [
          {
            title: 'Computer Vision System Architecture Course',
            url: 'https://www.oreilly.com/',
            description: 'Advanced training on designing scalable, distributed CV platforms'
          },
          {
            title: 'Applied Deep Learning in Autonomous Vehicles',
            url: 'https://www.udacity.com/course/self-driving-car-engineer-nanodegree--nd0013',
            description: 'Specialized program focused on CV applications in self-driving cars'
          }
        ],
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
        freeResources: [
          {
            title: 'The Handbook of Computer Vision and Applications (Book)',
            url: 'https://link.springer.com/book/10.1007/978-3-540-31120-7',
            description: 'Advanced and foundational concepts for expert-level knowledge'
          },
          {
            title: 'Industry Research Blogs (e.g., Meta AI, Google AI)',
            url: 'https://ai.meta.com/blog/',
            description: 'Technical insights from industry leaders driving CV innovation'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program on AI Strategy',
            url: 'https://executive.mit.edu/',
            description: 'Executive education focused on defining AI/CV strategy and technical vision'
          },
          {
            title: 'Staff Engineer/Principal Engineer Guide',
            url: 'https://staffeng.com/',
            description: 'Resources for achieving and excelling in expert-level technical leadership roles'
          }
        ],
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
        freeResources: [
          {
            title: 'Hugging Face Course',
            url: 'https://huggingface.co/course',
            description: 'Free course on transformers and advanced NLP'
          },
          {
            title: 'Stanford CS224N: NLP with Deep Learning',
            url: 'http://web.stanford.edu/class/cs224n/',
            description: 'Course materials on Natural Language Processing with Deep Learning'
          }
        ],
        paidResources: [
          {
            title: 'Advanced NLP Specialization (e.g., Coursera DeepLearning.AI)',
            url: 'https://www.coursera.org/specializations/natural-language-processing',
            description: 'Specialization on advanced NLP topics including sequence models and attention'
          },
          {
            title: 'Prompt Engineering and LLM Fine-tuning Course',
            url: 'https://www.deeplearning.ai/',
            description: 'Training on practical techniques for optimizing and customizing large language models'
          }
        ],
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
        freeResources: [
          {
            title: 'ArXiv.org - Natural Language Processing',
            url: 'https://arxiv.org/list/cs.CL/recent',
            description: 'Latest research papers on all sub-fields of NLP'
          },
          {
            title: 'NLP Architectures and System Design Guides',
            url: 'https://www.oreilly.com/',
            description: 'Technical articles and excerpts on designing production NLP systems'
          }
        ],
        paidResources: [
          {
            title: 'Advanced MLOps for NLP Systems Course',
            url: 'https://www.udacity.com/',
            description: 'Specialized course on deploying and monitoring large-scale NLP models'
          },
          {
            title: 'AI/NLP Product Management Course',
            url: 'https://ai-product-management.com/',
            description: 'Training focused on leading NLP product strategy and development'
          }
        ],
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
        freeResources: [
          {
            title: 'The Stanford Handbook of NLP (Online)',
            url: 'https://stanfordnlp.github.io/CoreNLP/index.html',
            description: 'Advanced technical reference for fundamental and modern NLP techniques'
          },
          {
            title: 'Technical Blogs of Leading AI Labs (e.g., Anthropic, OpenAI)',
            url: 'https://www.anthropic.com/news',
            description: 'Insights into the cutting-edge research and systems of top AI companies'
          }
        ],
        paidResources: [
          {
            title: 'AI Executive Leadership Program',
            url: 'https://executive.mit.edu/',
            description: 'Executive education focused on defining AI/NLP strategy and technical vision'
          },
          {
            title: 'Staff Engineer/Principal Engineer Guide',
            url: 'https://staffeng.com/',
            description: 'Resources for achieving and excelling in expert-level technical leadership roles'
          }
        ],
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
        freeResources: [
          {
            title: 'The Engineering Manager Handbook',
            url: 'https://www.leading-tech-manager.com/',
            description: 'Guides and resources for aspiring and current engineering managers'
          },
          {
            title: 'Agile Alliance Resources',
            url: 'https://www.agilealliance.org/resources/',
            description: 'Articles and guides on advanced Agile and Scrum practices'
          }
        ],
        paidResources: [
          {
            title: 'Certified ScrumMaster (CSM) Training',
            url: 'https://www.scrumalliance.org/certifications/practitioners/csm-certification',
            description: 'Official course for Scrum Master certification'
          },
          {
            title: 'Financial Management for Tech Managers Course',
            url: 'https://online.stanford.edu/programs/financial-management-program',
            description: 'Training focused on budgeting, forecasting, and financial decision-making in tech'
          }
        ],
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
        freeResources: [
          {
            title: 'High Output Management by Andy Grove (Resources)',
            url: 'https://www.oreilly.com/',
            description: 'Resources and insights from a foundational book on management and scaling'
          },
          {
            title: 'First Round Review Articles',
            url: 'https://firstround.com/review/',
            description: 'In-depth articles and advice from technology leaders on scaling and strategy'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program in Technology Management',
            url: 'https://executive.mit.edu/programs/technology-and-innovation-strategy',
            description: 'Program focusing on technology and innovation strategy for senior leaders'
          },
          {
            title: 'Advanced Organizational Change Management Certification',
            url: 'https://www.prosci.com/change-management/certification/advanced-certified',
            description: 'Training on leading complex organizational transformations'
          }
        ],
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
        freeResources: [
          {
            title: 'CTO / VP Engineering Peer Groups',
            url: 'https://www.cto.academy/',
            description: 'Resources and community for executive-level technical leaders'
          },
          {
            title: 'The Great CEO Toolkit',
            url: 'https://github.com/skylinesp/the-great-ceo-toolkit',
            description: 'Collection of resources on strategic planning, leadership, and governance'
          }
        ],
        paidResources: [
          {
            title: 'Chief Technology Officer (CTO) Program',
            url: 'https://executive.mit.edu/programs/chief-technology-officer',
            description: 'The highest-level executive education focused on technology strategy and leadership'
          },
          {
            title: 'Board-Level Communications and Governance Course',
            url: 'https://online.stanford.edu/programs/stanford-executive-program',
            description: 'Training on effective communication and governance for executive roles'
          }
        ],
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
        freeResources: [
          {
            title: 'The Site Reliability Engineering Workbook',
            url: 'https://sre.google/workbook/table-of-contents/',
            description: 'A practical guide to implementing SRE principles at scale'
          },
          {
            title: 'Chaos Engineering Tutorials (e.g., Gremlin)',
            url: 'https://www.gremlin.com/community/tutorials/',
            description: 'Guides and tutorials on practicing Chaos Engineering'
          }
        ],
        paidResources: [
          {
            title: 'Certified Kubernetes Administrator (CKA) Course',
            url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/',
            description: 'Preparation course for the industry-standard Kubernetes certification'
          },
          {
            title: 'Practical Observability Course (e.g., Honeycomb)',
            url: 'https://www.honeycomb.io/observability-for-beginners',
            description: 'Training on advanced observability practices and distributed tracing'
          }
        ],
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
        freeResources: [
          {
            title: 'AWS Well-Architected Framework',
            url: 'https://aws.amazon.com/architecture/well-architected/',
            description: 'Best practices for designing reliable and efficient systems on AWS'
          },
          {
            title: 'Incident Command System (ICS) Resources',
            url: 'https://www.fema.gov/emergency-managers/nims/incident-command-system',
            description: 'Standardized framework for incident management (from FEMA)'
          }
        ],
        paidResources: [
          {
            title: 'Certified Reliability Engineer (CRE) Prep',
            url: 'https://asq.org/cert/reliability-engineer',
            description: 'Training for the ASQ Certified Reliability Engineer certification'
          },
          {
            title: 'Advanced Distributed Systems Design Course',
            url: 'https://www.coursera.org/specializations/distributed-system-design',
            description: 'Specialization on designing complex, reliable distributed systems'
          }
        ],
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
        freeResources: [
          {
            title: 'InfoQ Architecture & Reliability Articles',
            url: 'https://www.infoq.com/software-architecture-and-design/',
            description: 'Articles covering high-level architecture and reliability patterns'
          },
          {
            title: 'CNCF Cloud Native Technical Papers',
            url: 'https://www.cncf.io/reports/',
            description: 'Resources on advanced cloud native technologies and platform strategy'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program on Digital Strategy and Operations',
            url: 'https://executive.mit.edu/programs/digital-business-strategy',
            description: 'Executive education focused on operations and reliability as a business driver'
          },
          {
            title: 'Staff Engineer/Principal Engineer Guide',
            url: 'https://staffeng.com/',
            description: 'Resources for achieving and excelling in expert-level technical leadership roles'
          }
        ],
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
        freeResources: [
          {
            title: 'First Round Review Articles',
            url: 'https://firstround.com/review/',
            description: 'In-depth articles from technology leaders on scaling and management'
          },
          {
            title: 'The Technology Strategy Guide',
            url: 'https://martinfowler.com/articles/technology-strategy.html',
            description: 'Technical and business principles for defining technology strategy'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program in Technology Management',
            url: 'https://executive.mit.edu/programs/technology-and-innovation-strategy',
            description: 'Program focusing on technology and innovation strategy for senior leaders'
          },
          {
            title: 'Advanced Organizational Change Management Certification',
            url: 'https://www.prosci.com/change-management/certification/advanced-certified',
            description: 'Training on leading complex organizational transformations'
          }
        ],
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
        freeResources: [
          {
            title: 'Harvard Business Review - Strategy Articles',
            url: 'https://hbr.org/topic/strategy',
            description: 'Executive-level articles on business strategy, competition, and growth'
          },
          {
            title: 'The Great CEO Toolkit',
            url: 'https://github.com/skylinesp/the-great-ceo-toolkit',
            description: 'Collection of resources on strategic planning, leadership, and governance'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program in Digital Business Strategy',
            url: 'https://online.hbs.edu/courses/digital-business-strategy/',
            description: 'Advanced strategic thinking course from a top business school'
          },
          {
            title: 'Board Communication and Executive Presence Course',
            url: 'https://www.executiveeducation.wharton.upenn.edu/executive-presence-and-influence/',
            description: 'Training focused on high-stakes communication and influencing stakeholders'
          }
        ],
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
        freeResources: [
          {
            title: 'MIT Sloan Management Review',
            url: 'https://sloanreview.mit.edu/',
            description: 'Executive-level research and articles on technology, leadership, and management'
          },
          {
            title: 'The 7 Powers: The Foundations of Business Strategy (Book Resources)',
            url: 'https://www.hamiltonhelmer.com/7powers',
            description: 'Resources related to a foundational book on strategic power and competitive advantage'
          }
        ],
        paidResources: [
          {
            title: 'Chief Technology Officer (CTO) Program',
            url: 'https://executive.mit.edu/programs/chief-technology-officer',
            description: 'The highest-level executive education focused on technology strategy and leadership'
          },
          {
            title: 'Advanced Organizational Development Course',
            url: 'https://www.cornell.edu/management/organizational-development/',
            description: 'Training on organizational design, culture change, and scaling leadership'
          }
        ],
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
        freeResources: [
          {
            title: 'The Linux Kernel Documentation',
            url: 'https://www.kernel.org/doc/html/latest/',
            description: 'Official documentation for the Linux kernel'
          },
          {
            title: 'Advanced C++ Concepts',
            url: 'https://isocpp.org/',
            description: 'Resources for modern and advanced C++ programming'
          }
        ],
        paidResources: [
          {
            title: 'Operating Systems: Three Easy Pieces (Book)',
            url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/',
            description: 'Book on operating systems design (some parts available online)'
          },
          {
            title: 'Advanced Concurrent and Parallel Programming Course',
            url: 'https://www.coursera.org/',
            description: 'Specialized course on multi-threading, concurrency, and parallelism'
          }
        ],
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
        freeResources: [
          {
            title: 'Designing Data-Intensive Applications',
            url: 'https://dataintensive.net/',
            description: 'Book on distributed systems and data storage (free chapters/resources)'
          },
          {
            title: 'InfoQ Architecture & Design Articles',
            url: 'https://www.infoq.com/software-architecture-and-design/',
            description: 'Articles covering low-level system design and architecture'
          }
        ],
        paidResources: [
          {
            title: 'Advanced Low-Latency Systems Course',
            url: 'https://www.udemy.com/',
            description: 'Training focused on extreme performance optimization for systems software'
          },
          {
            title: 'Certified Systems Architect (CSA) Prep',
            url: 'https://www.systemsarchitecture.org/',
            description: 'Advanced certification prep focusing on complex systems architecture'
          }
        ],
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
        freeResources: [
          {
            title: 'ArXiv.org - Systems',
            url: 'https://arxiv.org/list/cs.OS/recent',
            description: 'Latest research papers on operating systems and distributed systems'
          },
          {
            title: 'ACM Queue Articles',
            url: 'https://queue.acm.org/',
            description: 'Technical articles on advanced computing and systems topics written by experts'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program on Advanced Computing',
            url: 'https://executive.mit.edu/',
            description: 'Executive education focused on the strategic implications of advanced computing systems'
          },
          {
            title: 'Staff Engineer/Principal Engineer Guide',
            url: 'https://staffeng.com/',
            description: 'Resources for achieving and excelling in expert-level technical leadership roles'
          }
        ],
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
        freeResources: [
          {
            title: 'Juniper Networks Documentation',
            url: 'https://www.juniper.net/documentation/',
            description: 'Technical documentation for advanced routing and switching'
          },
          {
            title: 'Cisco DevNet Resources',
            url: 'https://developer.cisco.com/',
            description: 'Resources on network automation and programmability'
          }
        ],
        paidResources: [
          {
            title: 'Cisco Certified Network Professional (CCNP) Course',
            url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional.html',
            description: 'Advanced professional certification training in enterprise networking'
          },
          {
            title: 'Cloud Networking Specialist Certification (e.g., AWS, Azure)',
            url: 'https://aws.amazon.com/certification/certified-advanced-networking-specialty/',
            description: 'Training for cloud networking specialization certifications'
          }
        ],
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
        freeResources: [
          {
            title: 'Network Functions Virtualization (NFV) Guides',
            url: 'https://www.etsi.org/technologies/nfv',
            description: 'Technical standards and documentation on NFV and SDN architectures'
          },
          {
            title: 'The Network Architecture Guide',
            url: 'https://www.oreilly.com/',
            description: 'Technical articles on designing high-availability and performant networks'
          }
        ],
        paidResources: [
          {
            title: 'Cisco Certified Internetwork Expert (CCIE) Prep',
            url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/expert.html',
            description: 'Expert-level training for the top-tier CCIE certification'
          },
          {
            title: 'Network Security Architecture Course',
            url: 'https://www.isc2.org/Certifications/CCSP',
            description: 'Specialized course on designing and implementing secure network architectures'
          }
        ],
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
        freeResources: [
          {
            title: 'IETF RFCs (Request for Comments)',
            url: 'https://www.rfc-editor.org/',
            description: 'Official documents defining Internet standards and protocols'
          },
          {
            title: 'IEEE Communications Society Technical Papers',
            url: 'https://www.comsoc.org/',
            description: 'Research and technical articles on the future of communications and networking'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program on Digital Transformation and Networks',
            url: 'https://executive.mit.edu/',
            description: 'Executive education focused on defining and leading network strategy for the organization'
          },
          {
            title: 'Advanced Vendor Negotiation and Partnership Course',
            url: 'https://www.udemy.com/',
            description: 'Training focused on strategic vendor management and large-scale procurement'
          }
        ],
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
        freeResources: [
          {
            title: 'PostgreSQL Documentation (Advanced)',
            url: 'https://www.postgresql.org/docs/',
            description: 'In-depth documentation for administration and optimization'
          },
          {
            title: 'Database Performance Tuning Guides',
            url: 'https://www.percona.com/blog/',
            description: 'Articles and guides on deep database performance tuning and scaling'
          }
        ],
        paidResources: [
          {
            title: 'Oracle Certified Professional (OCP) Course',
            url: 'https://education.oracle.com/oracle-database-administration-training/database-administration/pFamily_85',
            description: 'Advanced training for Oracle Database certification'
          },
          {
            title: 'Microsoft Azure Database Administrator (DP-300) Training',
            url: 'https://learn.microsoft.com/en-us/certifications/azure-database-administrator-associate/',
            description: 'Official training for cloud database administration on Azure'
          }
        ],
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
        freeResources: [
          {
            title: 'Designing Data-Intensive Applications',
            url: 'https://dataintensive.net/',
            description: 'Book on distributed systems, data storage, and processing (free chapters/resources)'
          },
          {
            title: 'Database Architecture Articles',
            url: 'https://martinfowler.com/tags/data%20architecture.html',
            description: 'Technical articles on database architectural patterns and distributed transactions'
          }
        ],
        paidResources: [
          {
            title: 'Certified Data Management Professional (CDMP) - Specialist',
            url: 'https://www.dama.org/certification/cdmp',
            description: 'Advanced certification in data management and governance'
          },
          {
            title: 'Database Security and Compliance Course',
            url: 'https://www.udemy.com/',
            description: 'Specialized training on advanced database security, encryption, and regulatory compliance'
          }
        ],
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
        freeResources: [
          {
            title: 'AWS Database Blog',
            url: 'https://aws.amazon.com/blogs/database/',
            description: 'Technical deep-dives into cloud database strategy and emerging technologies (e.g., serverless, NewSQL)'
          },
          {
            title: 'InfoQ Architecture & Reliability Articles',
            url: 'https://www.infoq.com/software-architecture-and-design/',
            description: 'Articles covering high-level data strategy and system architecture'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program on Data and Analytics Strategy',
            url: 'https://executive.mit.edu/',
            description: 'Executive education focused on defining and leading data strategy for the organization'
          },
          {
            title: 'Staff Engineer/Principal Engineer Guide',
            url: 'https://staffeng.com/',
            description: 'Resources for achieving and excelling in expert-level technical leadership roles'
          }
        ],
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
        freeResources: [
          {
            title: 'FreeRTOS Documentation',
            url: 'https://www.freertos.org/Documentation/RTOS_book.html',
            description: 'Official book and documentation for the FreeRTOS kernel'
          },
          {
            title: 'Zephyr RTOS Guides',
            url: 'https://docs.zephyrproject.org/latest/index.html',
            description: 'Comprehensive guides for the Zephyr Real-Time Operating System'
          }
        ],
        paidResources: [
          {
            title: 'Advanced Embedded C++ Course',
            url: 'https://www.udemy.com/course/advanced-embedded-c-and-cpp/',
            description: 'Specialized training on advanced C++ features for constrained embedded environments'
          },
          {
            title: 'Embedded Linux and Device Driver Development Course',
            url: 'https://www.udemy.com/course/linux-device-driver-development/',
            description: 'Training on kernel-level programming and driver development for Linux embedded systems'
          }
        ],
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
        freeResources: [
          {
            title: 'The Embedded Systems Handbook',
            url: 'https://www.oreilly.com/',
            description: 'Resources and content from the comprehensive handbook on embedded systems design'
          },
          {
            title: 'ARM Architecture Reference Manuals',
            url: 'https://developer.arm.com/documentation/default/',
            description: 'Technical documentation for the ARM processor architecture'
          }
        ],
        paidResources: [
          {
            title: 'Certified Functional Safety Engineer (CFSE) Prep',
            url: 'https://www.exida.com/certifications/cfse-certification',
            description: 'Advanced certification training on safety-critical embedded systems'
          },
          {
            title: 'Embedded Software Architecture Course',
            url: 'https://www.embeddedartistry.com/community/courses/embedded-software-architect/',
            description: 'Training focused on designing robust and scalable embedded software architectures'
          }
        ],
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
        freeResources: [
          {
            title: 'IEEE Embedded Systems Technical Committee',
            url: 'https://embedded.computer.org/',
            description: 'Research and technical articles on the future of embedded systems and IoT'
          },
          {
            title: 'ACM Transactions on Embedded Computing Systems (TECS)',
            url: 'https://dl.acm.org/journal/tecs',
            description: 'Access to high-quality, peer-reviewed research papers on embedded computing'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program on IoT and Digital Transformation',
            url: 'https://executive.mit.edu/programs/internet-of-things-and-business-strategy',
            description: 'Executive education focused on the strategy and innovation of connected devices and embedded systems'
          },
          {
            title: 'Advanced Hardware/Software Co-Design Course',
            url: 'https://www.edx.org/',
            description: 'Training focused on the strategic intersection of hardware and software development'
          }
        ],
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
        freeResources: [
          {
            title: 'D3.js Documentation',
            url: 'https://d3js.org/',
            description: 'Official documentation and examples for D3.js (Data-Driven Documents)'
          },
          {
            title: 'Data Visualization Best Practices (e.g., Edward Tufte)',
            url: 'https://www.edwardtufte.com/tufte/books_vdqi',
            description: 'Resources and insights on principles of visual design and integrity'
          }
        ],
        paidResources: [
          {
            title: 'Interactive Data Visualization with D3.js Course',
            url: 'https://www.coursera.org/learn/interactive-data-visualization',
            description: 'Course focused on building custom, complex web visualizations'
          },
          {
            title: 'Tableau/Power BI Certified Professional Training',
            url: 'https://www.tableau.com/learn/certification',
            description: 'Advanced training for professional certification in a major visualization tool'
          }
        ],
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
        freeResources: [
          {
            title: 'Information Visualization: Perception for Design (Book Resources)',
            url: 'https://www.elsevier.com/books/information-visualization/ware/978-0-12-381464-7',
            description: 'Resources related to the book on human perception and visualization design'
          },
          {
            title: 'Interactive Data Visualization Papers',
            url: 'https://ieeexplore.ieee.org/Xplore/home.jsp',
            description: 'Research papers on the state-of-the-art in interactive visualization'
          }
        ],
        paidResources: [
          {
            title: 'Data Storytelling and Executive Communication Course',
            url: 'https://www.duarte.com/presentation-training/',
            description: 'Training focused on creating compelling, strategic data presentations for leadership'
          },
          {
            title: 'Visualization Architecture and Platform Design Course',
            url: 'https://www.oreilly.com/',
            description: 'Advanced training on scaling visualization platforms across an enterprise'
          }
        ],
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
        freeResources: [
          {
            title: 'Tamara Munzner\'s Visualization Analysis and Design (Book Resources)',
            url: 'http://www.cs.ubc.ca/~tmm/vadbook/',
            description: 'Resources related to a foundational book on visualization theory and design'
          },
          {
            title: 'IEEE VIS Conference Papers',
            url: 'https://ieeevis.org/',
            description: 'Access to the most cutting-edge research in visualization science'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program on Data and Analytics Strategy',
            url: 'https://executive.mit.edu/',
            description: 'Executive education focused on defining and leading data and visualization strategy'
          },
          {
            title: 'Staff Engineer/Principal Engineer Guide',
            url: 'https://staffeng.com/',
            description: 'Resources for achieving and excelling in expert-level technical leadership roles'
          }
        ],
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
        freeResources: [
          {
            title: 'Qiskit Documentation (Advanced)',
            url: 'https://qiskit.org/documentation/tutorials/index.html',
            description: 'Advanced tutorials on quantum circuits, algorithms, and applications'
          },
          {
            title: 'Microsoft Quantum Development Kit (QDK) Documentation',
            url: 'https://learn.microsoft.com/en-us/azure/quantum/user-guides/',
            description: 'Guides and tutorials for the Q# language and quantum services'
          }
        ],
        paidResources: [
          {
            title: 'Quantum Machine Learning Course (e.g., MIT, Caltech)',
            url: 'https://www.edx.org/course/quantum-machine-learning',
            description: 'Advanced course on integrating quantum computing with machine learning'
          },
          {
            title: 'Quantum Computing Fundamentals Professional Certificate',
            url: 'https://www.coursera.org/professional-certificates/quantum-computing-fundamentals',
            description: 'Specialized training for applying quantum principles to algorithms'
          }
        ],
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
        freeResources: [
          {
            title: 'ArXiv.org - Quantum Physics',
            url: 'https://arxiv.org/list/quant-ph/recent',
            description: 'Latest research papers on quantum physics and quantum computing'
          },
          {
            title: 'Quantum Algorithm Zoo',
            url: 'https://quantumalgorithmzoo.org/',
            description: 'A comprehensive list of quantum algorithms and their applications'
          }
        ],
        paidResources: [
          {
            title: 'Advanced Quantum Computing Systems Engineering Course',
            url: 'https://www.oreilly.com/',
            description: 'Training focused on the engineering challenges and architecture of quantum systems'
          },
          {
            title: 'Certified Quantum Computing Analyst (CQCA)',
            url: 'https://www.quantum-council.org/certifications/',
            description: 'Advanced certification prep focusing on quantum business applications and strategy'
          }
        ],
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
        freeResources: [
          {
            title: 'National Quantum Initiative (NQI) Resources',
            url: 'https://www.quantum.gov/',
            description: 'Information on US national strategy and research in quantum computing'
          },
          {
            title: 'IBM Quantum Papers',
            url: 'https://research.ibm.com/quantum/publications',
            description: 'Access to IBM\'s technical and research papers on quantum hardware and software'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program on Quantum Technology Strategy',
            url: 'https://executive.mit.edu/',
            description: 'Executive education focused on defining and leading quantum technology strategy'
          },
          {
            title: 'Advanced Scientific Leadership and Research Management Course',
            url: 'https://www.edx.org/',
            description: 'Training focused on leading deep-tech research teams and innovation'
          }
        ],
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
        freeResources: [
          {
            title: 'FinTech Revolution Course (e.g., Coursera)',
            url: 'https://www.coursera.org/learn/fintech-revolution',
            description: 'Free course covering the landscape of financial technology'
          },
          {
            title: 'Open Banking API Documentation',
            url: 'https://openbankinguk.org/customer-experience/api-documentation/',
            description: 'Technical standards and documentation for open banking APIs'
          }
        ],
        paidResources: [
          {
            title: 'Certified Fraud Examiner (CFE) Training',
            url: 'https://www.acfe.com/certifications/certified-fraud-examiner',
            description: 'Training focused on fraud detection, deterrence, and investigation'
          },
          {
            title: 'Risk Management in FinTech Course',
            url: 'https://www.edx.org/',
            description: 'Advanced course on financial risk, compliance, and regulatory frameworks'
          }
        ],
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
        freeResources: [
          {
            title: 'Federal Reserve Financial Services Research',
            url: 'https://www.frbservices.org/resources/financial-services-research',
            description: 'Publications and research on payment systems and financial innovation'
          },
          {
            title: 'FinTech Architecture Guides',
            url: 'https://martinfowler.com/tags/fintech.html',
            description: 'Technical articles on designing secure and scalable financial systems'
          }
        ],
        paidResources: [
          {
            title: 'Certified FinTech Professional (CFP) Training',
            url: 'https://www.fintechprofessionals.org/',
            description: 'Advanced certification focusing on the FinTech ecosystem and strategy'
          },
          {
            title: 'Advanced Financial Modeling Course',
            url: 'https://www.wallstreetprep.com/',
            description: 'Training on complex financial modeling, valuation, and analysis'
          }
        ],
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
        freeResources: [
          {
            title: 'BIS (Bank for International Settlements) Papers',
            url: 'https://www.bis.org/publ/index.htm',
            description: 'Research and papers on central banking, financial markets, and technology'
          },
          {
            title: 'FinTech Innovation Articles (e.g., TechCrunch, CB Insights)',
            url: 'https://www.cbinsights.com/research/category/fintech/',
            description: 'Analysis and insights on emerging FinTech trends and market strategy'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program in FinTech and Future of Finance',
            url: 'https://executive.mit.edu/programs/fintech-and-future-of-finance',
            description: 'Executive education focused on defining and leading FinTech strategy and innovation'
          },
          {
            title: 'Advanced Regulatory Compliance and Governance Course',
            url: 'https://www.edx.org/',
            description: 'Training focused on high-level regulatory strategy and compliance for global financial systems'
          }
        ],
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
        freeResources: [
          {
            title: 'LLVM Documentation',
            url: 'https://llvm.org/docs/',
            description: 'Official documentation for the LLVM compiler infrastructure'
          },
          {
            title: 'Modern Compiler Implementation in Java/C/ML (Book Resources)',
            url: 'https://www.cambridge.org/core/books/modern-compiler-implementation/C3E1B93026ED7761001E8585D963F465',
            description: 'Resources related to Andrew Appel\'s advanced compiler books'
          }
        ],
        paidResources: [
          {
            title: 'Advanced Compiler Design and Optimization Course',
            url: 'https://www.edx.org/course/compilers-algorithms-and-techniques',
            description: 'University-level course on advanced compilation techniques and optimization'
          },
          {
            title: 'JIT Compilers and Virtual Machines Course',
            url: 'https://www.udemy.com/',
            description: 'Specialized training on Just-In-Time compilation and runtime systems'
          }
        ],
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
        freeResources: [
          {
            title: 'ACM SIGPLAN Notices',
            url: 'https://www.sigplan.org/notices/',
            description: 'Research papers and articles on programming languages and compilers'
          },
          {
            title: 'Compiler Design and Architecture Articles',
            url: 'https://martinfowler.com/tags/compiler.html',
            description: 'Technical articles on the architecture of compiler systems'
          }
        ],
        paidResources: [
          {
            title: 'Advanced Parallel and Distributed Compilation Course',
            url: 'https://www.coursera.org/',
            description: 'Training focused on compiler techniques for parallel hardware and distributed systems'
          },
          {
            title: 'Technical Leadership and Project Management for Compiler Teams',
            url: 'https://www.udemy.com/',
            description: 'Course focused on leading highly specialized technical engineering teams'
          }
        ],
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
        freeResources: [
          {
            title: 'ArXiv.org - Programming Languages',
            url: 'https://arxiv.org/list/cs.PL/recent',
            description: 'Latest research papers on programming languages and compiler theory'
          },
          {
            title: 'Google and Intel Research Papers on Compiler Optimization',
            url: 'https://research.google/pubs/',
            description: 'Technical publications on cutting-edge hardware-specific compiler optimizations'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program on Advanced Computing Systems',
            url: 'https://executive.mit.edu/',
            description: 'Executive education focused on the strategic importance of programming language and compiler design'
          },
          {
            title: 'Staff Engineer/Principal Engineer Guide',
            url: 'https://staffeng.com/',
            description: 'Resources for achieving and excelling in expert-level technical leadership roles'
          }
        ],
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
        freeResources: [
          {
            title: 'Datadog MLOps Guides',
            url: 'https://www.datadoghq.com/blog/tag/aiops/',
            description: 'Technical articles on applying ML to observability and IT operations'
          },
          {
            title: 'Time Series Analysis Documentation (e.g., Prophet, ARIMA)',
            url: 'https://facebook.github.io/prophet/',
            description: 'Guides and tutorials for time series forecasting and anomaly detection'
          }
        ],
        paidResources: [
          {
            title: 'Advanced Machine Learning for IT Operations Course',
            url: 'https://www.coursera.org/specializations/ai-for-operations',
            description: 'Specialized training on building ML models for operational intelligence'
          },
          {
            title: 'Splunk Certified Architect Course',
            url: 'https://www.splunk.com/en_us/training/certification.html',
            description: 'Advanced training on designing and managing Splunk-based monitoring and analytics systems'
          }
        ],
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
        freeResources: [
          {
            title: 'The Site Reliability Engineering Workbook',
            url: 'https://sre.google/workbook/table-of-contents/',
            description: 'A practical guide to implementing SRE principles (essential for AIOps leaders)'
          },
          {
            title: 'DevOps and AIOps Architecture Guides',
            url: 'https://martinfowler.com/tags/devops.html',
            description: 'Technical articles on advanced operational architectures'
          }
        ],
        paidResources: [
          {
            title: 'Certified Analytics Professional (CAP) Prep',
            url: 'https://www.informs.org/certification/cap',
            description: 'Advanced certification focusing on applying analytics to business problems'
          },
          {
            title: 'AIOps Implementation and Strategy Course',
            url: 'https://www.udemy.com/',
            description: 'Training focused on the strategic planning and large-scale implementation of AIOps platforms'
          }
        ],
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
        freeResources: [
          {
            title: 'ArXiv.org - Machine Learning for Systems',
            url: 'https://arxiv.org/list/cs.LG/recent',
            description: 'Research papers on advanced ML applied to systems and operations'
          },
          {
            title: 'Gartner Research on AIOps Platforms',
            url: 'https://www.gartner.com/en/information-technology/topics/aiops',
            description: 'Analyst reports and industry trend analysis for executive planning'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program on Digital Strategy and Operations',
            url: 'https://executive.mit.edu/programs/digital-business-strategy',
            description: 'Executive education focused on operations, reliability, and technology strategy'
          },
          {
            title: 'Staff Engineer/Principal Engineer Guide',
            url: 'https://staffeng.com/',
            description: 'Resources for achieving and excelling in expert-level technical leadership roles'
          }
        ],
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
        freeResources: [
          {
            title: 'Health Level Seven International (HL7) Guides',
            url: 'https://www.hl7.org/implement/standards/product_brief.cfm?product_id=535',
            description: 'Advanced guides on implementing healthcare standards'
          },
          {
            title: 'HIPAA and HITECH Act Resources',
            url: 'https://www.hhs.gov/hipaa/for-professionals/index.html',
            description: 'Official resources for understanding healthcare privacy and security regulations'
          }
        ],
        paidResources: [
          {
            title: 'Certified Health Information Systems Security Professional (CHISSP) Training',
            url: 'https://www.hia.org/chissp-certification/',
            description: 'Training focused on security in healthcare IT systems'
          },
          {
            title: 'Medical Imaging and AI Course (e.g., Coursera)',
            url: 'https://www.coursera.org/specializations/introduction-to-digital-image-processing',
            description: 'Specialized course on processing and applying AI to medical image data'
          }
        ],
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
        freeResources: [
          {
            title: 'ONC Health IT Playbook',
            url: 'https://www.healthit.gov/playbook/',
            description: 'Guides and resources for implementing and optimizing health IT systems'
          },
          {
            title: 'Interoperability Standards Advisory (ISA)',
            url: 'https://www.healthit.gov/isa/',
            description: 'Guidance on the current state of health IT interoperability standards'
          }
        ],
        paidResources: [
          {
            title: 'Certified Professional in Health Information and Management Systems (CPHIMS)',
            url: 'https://www.himss.org/certification/cphims',
            description: 'Advanced certification for health IT professionals'
          },
          {
            title: 'Healthcare Architecture and System Design Course',
            url: 'https://www.oreilly.com/',
            description: 'Training focused on designing secure, compliant, and scalable healthcare platforms'
          }
        ],
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
        freeResources: [
          {
            title: 'Cochrane Reviews',
            url: 'https://www.cochranelibrary.com/cochrane-database-of-systematic-reviews/index.html',
            description: 'Systematic reviews of research to inform evidence-based healthcare technology decisions'
          },
          {
            title: 'The Future of Health IT Strategy Reports',
            url: 'https://www.himss.org/resources-and-tools/himss-reports',
            description: 'Industry reports and strategic planning guides from HIMSS'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program in Health Information Technology',
            url: 'https://executive.mit.edu/',
            description: 'Executive education focused on defining and leading healthcare technology strategy'
          },
          {
            title: 'Advanced Healthcare Compliance and Regulatory Strategy Course',
            url: 'https://online.stanford.edu/programs/health-information-management-graduate-certificate',
            description: 'Training focused on high-level strategy for global healthcare regulations'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  gaming: {
    title: 'Gaming Technology Engineer',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    description: 'Develop technology solutions for gaming and entertainment platforms',
    demand: 'High',
    salary: 'High',
    companies: ['Epic Games', 'Unity', 'Electronic Arts', 'Activision', 'Nintendo'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn gaming technology fundamentals',
        skills: [
          'Game Engines (Unity/Unreal)',
          'Graphics Programming',
          'Game Physics',
          'Audio Systems',
          'Networking for Games',
          'Programming (C#/C++)',
          '3D Mathematics',
          'Performance Optimization',
          'Version Control',
          'Game Design'
        ],
        projects: [
          'Simple Game',
          'Graphics Demo',
          'Physics Simulation',
          'Audio System',
          'Multiplayer Prototype'
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
        goal: 'Master advanced gaming technology',
        skills: [
          'Advanced Graphics',
          'Game AI',
          'Multiplayer Systems',
          'VR/AR Development',
          'Mobile Gaming',
          'Team Collaboration',
          'Project Management',
          'Performance Profiling',
          'Platform Integration',
          'User Experience'
        ],
        projects: [
          'Advanced Game',
          'VR/AR Application',
          'Mobile Game',
          'Multiplayer System',
          'AI Implementation'
        ],
        freeResources: [
          {
            title: 'Unreal Engine Documentation',
            url: 'https://docs.unrealengine.com/',
            description: 'In-depth technical documentation for Unreal Engine'
          },
          {
            title: 'Game Programming Patterns',
            url: 'https://gameprogrammingpatterns.com/',
            description: 'Free online book of reusable patterns for game programming'
          }
        ],
        paidResources: [
          {
            title: 'Advanced C++ Game Development Course',
            url: 'https://www.udemy.com/course/game-development-advanced-c-and-cpp/',
            description: 'Course focusing on deep C++ programming for high-performance games'
          },
          {
            title: 'Multiplayer Game Development Masterclass',
            url: 'https://www.coursera.org/',
            description: 'Specialized course on network and server-side logic for multiplayer games'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead gaming technology initiatives',
        skills: [
          'Gaming Strategy & Planning',
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
          'Gaming Strategy Implementation',
          'Team Leadership Program',
          'Technical Leadership',
          'Business Strategy Implementation',
          'Industry Innovation'
        ],
        freeResources: [
          {
            title: 'GDC Vault Free Talks',
            url: 'https://www.youtube.com/user/GDCvault',
            description: 'A selection of free technical talks from the Game Developers Conference'
          },
          {
            title: 'Advanced Graphics Papers',
            url: 'https://www.realtimerendering.com/resources.html',
            description: 'Collection of resources on advanced real-time rendering techniques'
          }
        ],
        paidResources: [
          {
            title: 'Game Architecture Design Course',
            url: 'https://www.pluralsight.com/courses/game-architecture-fundamentals',
            description: 'Course on designing scalable and maintainable game codebases'
          },
          {
            title: 'Advanced Shading and Rendering Course',
            url: 'https://www.edx.org/',
            description: 'University-level course on advanced graphics programming and algorithms'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive gaming technology strategy and innovation',
        skills: [
          'Gaming Strategy & Vision',
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
          'Gaming Strategy Implementation',
          'Advanced Gaming Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [
          {
            title: 'SIGGRAPH Technical Papers',
            url: 'https://www.siggraph.org/learn/publications/',
            description: 'Access to the most cutting-edge research in computer graphics and interactive techniques'
          },
          {
            title: 'Industry Technology Standards and Console Specs',
            url: 'https://developer.sony.com/develop/playstation',
            description: 'Technical deep-dives into console and platform requirements for advanced strategy'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program on Innovation in Entertainment Tech',
            url: 'https://executive.usc.edu/',
            description: 'Executive education focused on the business and strategy of entertainment technology'
          },
          {
            title: 'Advanced Game Studio Leadership & Finance Course',
            url: 'https://www.gamasutra.com/',
            description: 'Training on the management, finance, and strategy of running a game studio'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },
  edutech: {
    title: 'EdTech Engineer',
    icon: Code,
    color: 'from-blue-500 to-indigo-500',
    description: 'Develop technology solutions for education and learning platforms',
    demand: 'Very High',
    salary: 'High',
    companies: ['Coursera', 'Khan Academy', 'Udemy', 'Google Education', 'Microsoft Education'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn EdTech fundamentals',
        skills: [
          'Learning Management Systems',
          'Educational Content Creation',
          'Student Assessment Tools',
          'Learning Analytics',
          'Accessibility Standards',
          'Programming (Python/JavaScript)',
          'Database Design',
          'User Experience',
          'Version Control',
          'Pedagogical Knowledge'
        ],
        projects: [
          'Learning Platform',
          'Assessment Tool',
          'Content Management System',
          'Analytics Dashboard',
          'Accessibility Feature'
        ],
        freeResources: [
          {
            title: 'Khan Academy',
            url: 'https://www.khanacademy.org/',
            description: 'Free educational platform and resources'
          }
        ],
        paidResources: [],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master advanced EdTech development',
        skills: [
          'Advanced Learning Systems',
          'Personalized Learning',
          'Adaptive Learning',
          'Gamification',
          'Virtual Classrooms',
          'Team Collaboration',
          'Project Management',
          'Data Privacy',
          'Scalability',
          'User Engagement'
        ],
        projects: [
          'Personalized Learning System',
          'Adaptive Learning Platform',
          'Gamified Learning App',
          'Virtual Classroom',
          'Engagement Analytics'
        ],
        freeResources: [
          {
            title: 'ADL SCORM and xAPI Standards',
            url: 'https://adlnet.gov/adl-research-design/xapi/',
            description: 'Documentation for advanced learning and tracking standards'
          },
          {
            title: 'Learning Analytics Review',
            url: 'https://www.learntechlib.org/la/',
            description: 'Journals and papers on applied learning analytics techniques'
          }
        ],
        paidResources: [
          {
            title: 'Advanced Learning Analytics Course (e.g., Columbia University)',
            url: 'https://www.edx.org/course/learning-analytics',
            description: 'University-level course on implementing and interpreting learning data'
          },
          {
            title: 'Gamification Design and Implementation Course',
            url: 'https://www.coursera.org/specializations/gamification',
            description: 'Specialized training on applying game design principles to learning'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead EdTech initiatives and teams',
        skills: [
          'EdTech Strategy & Planning',
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
          'EdTech Strategy Implementation',
          'Team Leadership Program',
          'Technical Leadership',
          'Business Strategy Implementation',
          'Industry Innovation'
        ],
        freeResources: [
          {
            title: 'UNESCO Technology in Education Reports',
            url: 'https://www.unesco.org/en/education/tech',
            description: 'Global reports and recommendations on technology\'s role in education policy'
          },
          {
            title: 'Advanced LMS Architecture Guides',
            url: 'https://www.edtechmagazine.com/',
            description: 'Articles on scaling and integrating complex Learning Management Systems'
          }
        ],
        paidResources: [
          {
            title: 'Advanced EdTech Leadership Program (e.g., ISTE)',
            url: 'https://www.iste.org/professional-development',
            description: 'Leadership training focused on driving technology initiatives in education'
          },
          {
            title: 'Data Privacy and FERPA/GDPR Compliance Course',
            url: 'https://www.edx.org/course/data-privacy-and-governance',
            description: 'Specialized training on legal and ethical considerations in educational data'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Principal/Staff Level)',
        goal: 'Drive EdTech strategy and innovation',
        skills: [
          'EdTech Strategy & Vision',
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
          'EdTech Strategy Implementation',
          'Advanced EdTech Technology',
          'Technical Leadership',
          'Industry Innovation',
          'Mentoring Program'
        ],
        freeResources: [
          {
            title: 'Journal of Learning Analytics',
            url: 'https://learning-analytics.info/',
            description: 'Access to peer-reviewed research on advanced analytics in learning'
          },
          {
            title: 'Digital Learning Innovation Reports',
            url: 'https://www.onlinelearningsurvey.com/',
            description: 'Annual reports and research on the state and future of online learning'
          }
        ],
        paidResources: [
          {
            title: 'Executive Program on Digital Strategy and Innovation',
            url: 'https://executive.mit.edu/',
            description: 'Executive education focused on defining and leading digital strategy and innovation'
          },
          {
            title: 'Advanced Pedagogical Technology Strategy Course',
            url: 'https://online.stanford.edu/programs/advanced-digital-learning-and-instruction-certificate',
            description: 'Training focused on the strategic intersection of education theory and technology'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      }
    }
  },

  web3developer: {
    title: 'Web3 Developer',
    icon: Code,
    color: 'from-orange-500 to-yellow-500',
    description: 'Build decentralized applications and smart contracts on blockchain networks',
    demand: 'High',
    salary: 'Very High',
    companies: ['Ethereum Foundation', 'ConsenSys', 'Chainlink', 'Polygon', 'Solana Labs', 'OpenSea', 'Uniswap Labs', 'Aave', 'Compound'],
    certifications: [],
    youtubePlaylists: [],
    roadmap: {
      '0-1': {
        title: 'Year 0–1 (Beginner – Entry Level)',
        goal: 'Learn blockchain fundamentals and basic smart contract development',
        skills: [
          'Blockchain Fundamentals',
          'Cryptocurrency Basics',
          'Ethereum Network',
          'Solidity Programming',
          'Smart Contract Basics',
          'Web3.js Library',
          'MetaMask Integration',
          'Truffle Framework',
          'Hardhat Development',
          'Git Version Control'
        ],
        projects: [
          'Hello World Smart Contract',
          'Simple Token Contract',
          'Basic DApp Frontend',
          'Wallet Connection App',
          'Token Transfer DApp'
        ],
        freeResources: [
          {
            title: 'Ethereum.org Developer Resources',
            url: 'https://ethereum.org/developers/',
            description: 'Official Ethereum development documentation'
          },
          {
            title: 'Solidity Documentation',
            url: 'https://docs.soliditylang.org/',
            description: 'Complete Solidity programming language reference'
          },
          {
            title: 'Web3.js Documentation',
            url: 'https://web3js.readthedocs.io/',
            description: 'JavaScript library for Ethereum interaction'
          }
        ],
        paidResources: [
          {
            title: 'Ethereum and Solidity: The Complete Developer\'s Guide',
            url: 'https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/',
            description: 'Comprehensive Udemy course on Ethereum development'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      },
      '1-3': {
        title: 'Year 1–3 (Intermediate – Mid Level)',
        goal: 'Master advanced smart contract development and DeFi protocols',
        skills: [
          'Advanced Solidity Patterns',
          'DeFi Protocol Development',
          'NFT Standards (ERC-721, ERC-1155)',
          'Token Standards (ERC-20, ERC-777)',
          'Smart Contract Security',
          'Gas Optimization',
          'Layer 2 Solutions',
          'IPFS Integration',
          'Oracle Integration',
          'Multi-signature Wallets'
        ],
        projects: [
          'DeFi Lending Protocol',
          'NFT Marketplace',
          'DAO Governance System',
          'Cross-chain Bridge',
          'Yield Farming DApp'
        ],
        freeResources: [
          {
            title: 'OpenZeppelin Contracts',
            url: 'https://openzeppelin.com/contracts/',
            description: 'Secure smart contract library'
          },
          {
            title: 'ConsenSys Academy',
            url: 'https://consensys.net/academy/',
            description: 'Free blockchain education resources'
          }
        ],
        paidResources: [
          {
            title: 'DeFi and the Future of Finance',
            url: 'https://www.coursera.org/learn/defi',
            description: 'Coursera course on decentralized finance'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      },
      '3-5': {
        title: 'Year 3–5 (Advanced – Senior Level)',
        goal: 'Lead complex Web3 projects and architect decentralized systems',
        skills: [
          'Cross-chain Development',
          'Layer 2 Scaling Solutions',
          'Zero-Knowledge Proofs',
          'MEV (Maximal Extractable Value)',
          'Advanced Cryptography',
          'Consensus Mechanisms',
          'Smart Contract Auditing',
          'Protocol Design',
          'Tokenomics Design',
          'Governance Mechanisms'
        ],
        projects: [
          'Multi-chain DeFi Protocol',
          'Privacy-focused DApp',
          'Custom Blockchain Network',
          'Advanced DAO System',
          'Web3 Infrastructure Tool'
        ],
        freeResources: [
          {
            title: 'Ethereum Research',
            url: 'https://ethresear.ch/',
            description: 'Ethereum research and development discussions'
          },
          {
            title: 'Vitalik Buterin\'s Blog',
            url: 'https://vitalik.ca/',
            description: 'Ethereum founder\'s technical writings'
          }
        ],
        paidResources: [
          {
            title: 'Advanced Blockchain Development',
            url: 'https://www.pluralsight.com/courses/advanced-blockchain-development',
            description: 'Advanced blockchain development course'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      },
      '5+': {
        title: 'Year 5+ (Expert – Lead/Principal Level)',
        goal: 'Shape the future of Web3 and lead industry innovation',
        skills: [
          'Protocol Architecture',
          'Cryptoeconomic Design',
          'Advanced ZK Proofs',
          'Quantum-resistant Cryptography',
          'Regulatory Compliance',
          'Ecosystem Development',
          'Research and Innovation',
          'Technical Leadership',
          'Industry Standards',
          'Mentoring and Education'
        ],
        projects: [
          'Next-generation Blockchain',
          'Revolutionary DeFi Protocol',
          'Web3 Infrastructure Platform',
          'Industry Standard Framework',
          'Open Source Ecosystem'
        ],
        freeResources: [
          {
            title: 'Ethereum Improvement Proposals',
            url: 'https://eips.ethereum.org/',
            description: 'Ethereum protocol improvement proposals'
          },
          {
            title: 'Web3 Foundation Research',
            url: 'https://research.web3.foundation/',
            description: 'Cutting-edge Web3 research'
          }
        ],
        paidResources: [
          {
            title: 'Blockchain Executive Program',
            url: 'https://www.mit.edu/executive-education/blockchain',
            description: 'MIT executive program on blockchain'
          }
        ],
        certifications: [],
        youtubePlaylists: []
      }
    }
  }
}