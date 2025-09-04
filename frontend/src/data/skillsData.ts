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
  }
}
