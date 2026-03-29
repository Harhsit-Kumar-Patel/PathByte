import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { 
  ArrowRight,
  Code, 
  Shield, 
  Globe, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Brain, 
  Cloud,
  Server,
  Search,
  BookOpen,
  Users,
  Award,
  Zap,
  Target,
  Building,
  Eye,
  Database
} from 'lucide-react'

export default function CareerGuidePage() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedExperience, setSelectedExperience] = useState('all')

  const categories = [
    { key: 'all', label: 'All Categories', icon: BookOpen, color: 'from-gray-500 to-gray-600' },
    { key: 'software', label: 'Software Development', icon: Code, color: 'from-blue-500 to-indigo-500' },
    { key: 'data', label: 'Data & AI', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { key: 'infra', label: 'Infrastructure & Operations', icon: Server, color: 'from-green-500 to-emerald-500' },
    { key: 'specialized', label: 'Specialized & Related', icon: Palette, color: 'from-orange-500 to-red-500' },
    { key: 'emerging', label: 'Emerging Tech', icon: Zap, color: 'from-yellow-500 to-amber-500' },
    { key: 'industry', label: 'Industry-Specific', icon: Building, color: 'from-indigo-500 to-purple-500' },
    { key: 'management', label: 'Tech Management', icon: Users, color: 'from-teal-500 to-cyan-500' }
  ]

  const experienceLevels = [
    { key: 'all', label: 'All Levels', icon: Target },
    { key: '0-1', label: '0-1 Years (Beginner)', icon: BookOpen, color: 'from-green-500 to-emerald-500' },
    { key: '1-3', label: '1-3 Years (Intermediate)', icon: TrendingUp, color: 'from-blue-500 to-indigo-500' },
    { key: '3-5', label: '3-5 Years (Advanced)', icon: Users, color: 'from-purple-500 to-pink-500' },
    { key: '5+', label: '5+ Years (Expert)', icon: Award, color: 'from-red-500 to-orange-500' }
  ]

  const allRoadmaps = [
    // Software Development
    {
      key: 'frontend',
      title: 'Frontend Developer',
      category: 'software',
      icon: Code,
      description: 'Build beautiful, responsive user interfaces',
      color: 'from-green-500 to-emerald-500',
      difficulty: 'beginner',
      demand: 'very-high',
      salary: 'high',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Responsive Design', 'UI/UX'],
      tools: ['VS Code', 'Chrome DevTools', 'Figma', 'Git'],
      companies: ['Google', 'Meta', 'Netflix', 'Airbnb', 'Shopify'],
      roadmap: {
        '0-1': { focus: 'HTML, CSS, JavaScript basics, first projects' },
        '1-3': { focus: 'React, state management, production apps' },
        '3-5': { focus: 'Performance, testing, team leadership' },
        '5+': { focus: 'Architecture, mentoring, technical strategy' }
      }
    },
    {
      key: 'backend',
      title: 'Backend Developer',
      category: 'software',
      icon: Shield,
      description: 'Build robust server-side applications and APIs',
      color: 'from-blue-500 to-indigo-500',
      difficulty: 'intermediate',
      demand: 'very-high',
      salary: 'very-high',
      skills: ['Node.js/Python/Java', 'Databases', 'APIs', 'Security', 'Performance'],
      tools: ['PostgreSQL', 'Redis', 'Docker', 'AWS/GCP', 'Postman'],
      companies: ['Amazon', 'Microsoft', 'Uber', 'Stripe', 'Twilio'],
      roadmap: {
        '0-1': { focus: 'Backend language, databases, basic APIs' },
        '1-3': { focus: 'Authentication, testing, deployment' },
        '3-5': { focus: 'Microservices, scaling, security' },
        '5+': { focus: 'Architecture, team leadership, strategy' }
      }
    },
    {
      key: 'fullstack',
      title: 'Full-Stack Developer',
      category: 'software',
      icon: Globe,
      description: 'Master both frontend and backend development',
      color: 'from-purple-500 to-pink-500',
      difficulty: 'intermediate',
      demand: 'very-high',
      salary: 'very-high',
      skills: ['Frontend + Backend', 'DevOps', 'Database Design', 'System Design'],
      tools: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      companies: ['Netflix', 'Spotify', 'Discord', 'Slack', 'GitHub'],
      roadmap: {
        '0-1': { focus: 'Frontend + backend basics, full apps' },
        '1-3': { focus: 'State management, APIs, deployment' },
        '3-5': { focus: 'Microservices, testing, performance' },
        '5+': { focus: 'Architecture, team leadership, strategy' }
      }
    },
    {
      key: 'mobile',
      title: 'Mobile App Developer',
      category: 'software',
      icon: Smartphone,
      description: 'Create native and cross-platform mobile apps',
      color: 'from-orange-500 to-red-500',
      difficulty: 'intermediate',
      demand: 'high',
      salary: 'high',
      skills: ['iOS/Android', 'React Native/Flutter', 'Mobile UI/UX', 'App Store'],
      tools: ['Xcode', 'Android Studio', 'Figma', 'Firebase', 'TestFlight'],
      companies: ['Apple', 'Google', 'Instagram', 'TikTok', 'Uber'],
      roadmap: {
        '0-1': { focus: 'Mobile basics, first apps, app store' },
        '1-3': { focus: 'Advanced UI, APIs, testing' },
        '3-5': { focus: 'Performance, architecture, team lead' },
        '5+': { focus: 'Platform strategy, team leadership' }
      }
    },
    {
      key: 'game',
      title: 'Game Developer',
      category: 'software',
      icon: Palette,
      description: 'Build interactive games with Unity or Unreal Engine',
      color: 'from-purple-500 to-indigo-500',
      difficulty: 'intermediate',
      demand: 'medium',
      salary: 'medium',
      skills: ['Unity/Unreal', 'C#/C++', 'Game Design', '3D Graphics', 'Physics'],
      tools: ['Unity', 'Unreal Engine', 'Blender', 'Git', 'Visual Studio'],
      companies: ['Epic Games', 'Unity Technologies', 'EA', 'Ubisoft', 'Nintendo'],
      roadmap: {
        '0-1': { focus: 'Game engine basics, simple games' },
        '1-3': { focus: '3D development, multiplayer, optimization' },
        '3-5': { focus: 'Advanced graphics, AI, team projects' },
        '5+': { focus: 'Studio leadership, AAA development' }
      }
    },

    // Data & AI
    {
      key: 'datascientist',
      title: 'Data Scientist',
      category: 'data',
      icon: TrendingUp,
      description: 'Analyze data and build predictive models',
      color: 'from-emerald-500 to-teal-500',
      difficulty: 'intermediate',
      demand: 'very-high',
      salary: 'very-high',
      skills: ['Python', 'Statistics', 'Machine Learning', 'Data Analysis', 'SQL'],
      tools: ['Pandas', 'NumPy', 'Scikit-learn', 'Jupyter', 'Tableau'],
      companies: ['Google', 'Meta', 'Netflix', 'Spotify', 'Airbnb'],
      roadmap: {
        '0-1': { focus: 'Python, statistics, basic ML, EDA' },
        '1-3': { focus: 'ML algorithms, feature engineering, deployment' },
        '3-5': { focus: 'Deep learning, big data, team leadership' },
        '5+': { focus: 'Research, strategy, team leadership' }
      }
    },
    {
      key: 'dataengineer',
      title: 'Data Engineer',
      category: 'data',
      icon: TrendingUp,
      description: 'Build and maintain data pipelines and infrastructure',
      color: 'from-blue-500 to-cyan-500',
      difficulty: 'intermediate',
      demand: 'very-high',
      salary: 'very-high',
      skills: ['Python', 'SQL', 'Big Data', 'ETL', 'Data Warehousing'],
      tools: ['Apache Spark', 'Airflow', 'Snowflake', 'Kafka', 'AWS'],
      companies: ['Netflix', 'Uber', 'Airbnb', 'Databricks', 'Snowflake'],
      roadmap: {
        '0-1': { focus: 'SQL, Python, basic ETL, databases' },
        '1-3': { focus: 'Big data tools, cloud platforms, monitoring' },
        '3-5': { focus: 'Scalable systems, real-time data, architecture' },
        '5+': { focus: 'Enterprise architecture, team leadership' }
      }
    },
    {
      key: 'mle',
      title: 'Machine Learning Engineer',
      category: 'data',
      icon: TrendingUp,
      description: 'Deploy and maintain ML models in production',
      color: 'from-purple-500 to-pink-500',
      difficulty: 'advanced',
      demand: 'very-high',
      salary: 'very-high',
      skills: ['ML/Deep Learning', 'MLOps', 'Software Engineering', 'Cloud', 'DevOps'],
      tools: ['TensorFlow', 'PyTorch', 'MLflow', 'Kubernetes', 'AWS SageMaker'],
      companies: ['Google', 'OpenAI', 'Anthropic', 'Netflix', 'Uber'],
      roadmap: {
        '0-1': { focus: 'ML basics, Python, basic deployment' },
        '1-3': { focus: 'Deep learning, MLOps, production systems' },
        '3-5': { focus: 'Scalable ML, team leadership, architecture' },
        '5+': { focus: 'ML strategy, research, team leadership' }
      }
    },
    {
      key: 'aispecialist',
      title: 'AI Specialist',
      category: 'data',
      icon: Brain,
      description: 'Research and innovate cutting-edge AI systems',
      color: 'from-violet-500 to-purple-500',
      difficulty: 'expert',
      demand: 'very-high',
      salary: 'very-high',
      skills: ['AI Research', 'Deep Learning', 'NLP/CV', 'Mathematics', 'Research'],
      tools: ['PyTorch', 'TensorFlow', 'Hugging Face', 'Papers', 'Research Tools'],
      companies: ['OpenAI', 'DeepMind', 'Anthropic', 'Google Research', 'Meta AI'],
      roadmap: {
        '0-1': { focus: 'AI fundamentals, mathematics, basic research' },
        '1-3': { focus: 'Specialized AI domains, research methods' },
        '3-5': { focus: 'Advanced AI, publications, team projects' },
        '5+': { focus: 'AI research leadership, innovation, strategy' }
      }
    },

    // Infrastructure & Operations
    {
      key: 'devops',
      title: 'DevOps Engineer',
      category: 'infra',
      icon: Server,
      description: 'Automate deployment, monitoring, and infrastructure',
      color: 'from-indigo-500 to-purple-500',
      difficulty: 'intermediate',
      demand: 'very-high',
      salary: 'high',
      skills: ['CI/CD', 'Docker', 'Kubernetes', 'Cloud', 'Automation'],
      tools: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'AWS/GCP'],
      companies: ['Netflix', 'Uber', 'Airbnb', 'Spotify', 'GitHub'],
      roadmap: {
        '0-1': { focus: 'Linux, networking, scripting, Git' },
        '1-3': { focus: 'CI/CD, containers, monitoring, cloud basics' },
        '3-5': { focus: 'Advanced K8s, security, scaling' },
        '5+': { focus: 'Enterprise strategy, team leadership' }
      }
    },
    {
      key: 'cloudengineer',
      title: 'Cloud Engineer',
      category: 'infra',
      icon: Cloud,
      description: 'Design, build, and manage cloud infrastructure',
      color: 'from-blue-500 to-cyan-500',
      difficulty: 'intermediate',
      demand: 'very-high',
      salary: 'high',
      skills: ['AWS/Azure/GCP', 'Infrastructure', 'Networking', 'Security', 'Cost Optimization'],
      tools: ['Terraform', 'CloudFormation', 'Kubernetes', 'Monitoring Tools'],
      companies: ['Amazon', 'Microsoft', 'Google', 'Netflix', 'Uber'],
      roadmap: {
        '0-1': { focus: 'Cloud basics, networking, basic services' },
        '1-3': { focus: 'Advanced services, automation, security' },
        '3-5': { focus: 'Multi-cloud, enterprise architecture' },
        '5+': { focus: 'Cloud strategy, team leadership' }
      }
    },
    {
      key: 'sre',
      title: 'Site Reliability Engineer',
      category: 'infra',
      icon: Shield,
      description: 'Ensure system reliability, scalability, and performance',
      color: 'from-purple-500 to-pink-500',
      difficulty: 'advanced',
      demand: 'high',
      salary: 'very-high',
      skills: ['Reliability', 'Performance', 'Monitoring', 'Incident Response', 'Automation'],
      tools: ['Prometheus', 'Grafana', 'Kubernetes', 'Chaos Engineering', 'SLOs'],
      companies: ['Google', 'Netflix', 'Uber', 'Airbnb', 'Spotify'],
      roadmap: {
        '0-1': { focus: 'Programming, Linux, networking, monitoring' },
        '1-3': { focus: 'SRE practices, automation, incident response' },
        '3-5': { focus: 'Advanced reliability, chaos engineering' },
        '5+': { focus: 'Reliability strategy, team leadership' }
      }
    },
    {
      key: 'cybersecurity',
      title: 'Cybersecurity Engineer',
      category: 'infra',
      icon: Shield,
      description: 'Secure systems, networks, and applications from threats',
      color: 'from-red-500 to-orange-500',
      difficulty: 'intermediate',
      demand: 'very-high',
      salary: 'high',
      skills: ['Security', 'Networking', 'Penetration Testing', 'Incident Response', 'Compliance'],
      tools: ['Kali Linux', 'Burp Suite', 'Wireshark', 'SIEM Tools', 'Security Frameworks'],
      companies: ['CrowdStrike', 'Palo Alto Networks', 'FireEye', 'Government', 'Financial'],
      roadmap: {
        '0-1': { focus: 'Networking, security basics, ethical hacking' },
        '1-3': { focus: 'Penetration testing, SIEM, incident response' },
        '3-5': { focus: 'Advanced security, compliance, team leadership' },
        '5+': { focus: 'Security strategy, compliance leadership' }
      }
    },

    // Specialized & Related
    {
      key: 'uidesigner',
      title: 'UI/UX Designer',
      category: 'specialized',
      icon: Palette,
      description: 'Create beautiful, user-friendly interfaces and experiences',
      color: 'from-pink-500 to-rose-500',
      difficulty: 'beginner',
      demand: 'high',
      salary: 'medium',
      skills: ['Design Principles', 'User Research', 'Prototyping', 'Accessibility', 'Collaboration'],
      tools: ['Figma', 'Adobe XD', 'Sketch', 'User Testing Tools', 'Design Systems'],
      companies: ['Apple', 'Google', 'Meta', 'Airbnb', 'Spotify'],
      roadmap: {
        '0-1': { focus: 'Design principles, UX basics, tools, first projects' },
        '1-3': { focus: 'Advanced tools, accessibility, usability testing' },
        '3-5': { focus: 'Design leadership, strategy, mentoring' },
        '5+': { focus: 'Design organization leadership, strategy' }
      }
    },
    {
      key: 'productmanager',
      title: 'Product Manager',
      category: 'specialized',
      icon: Target,
      description: 'Define product vision and lead cross-functional teams',
      color: 'from-blue-500 to-indigo-500',
      difficulty: 'intermediate',
      demand: 'very-high',
      salary: 'high',
      skills: ['Product Strategy', 'User Research', 'Data Analysis', 'Stakeholder Management', 'Agile'],
      tools: ['Jira', 'Figma', 'Analytics Tools', 'User Testing Tools', 'Roadmap Tools'],
      companies: ['Google', 'Meta', 'Amazon', 'Netflix', 'Spotify'],
      roadmap: {
        '0-1': { focus: 'Product basics, user research, agile methodologies' },
        '1-3': { focus: 'Advanced product strategy, data analysis, stakeholder management' },
        '3-5': { focus: 'Product leadership, strategy, mentoring' },
        '5+': { focus: 'Product organization leadership, strategy' }
      }
    },
    {
      key: 'qaengineer',
      title: 'QA Engineer',
      category: 'specialized',
      icon: Shield,
      description: 'Ensure software quality through testing and automation',
      color: 'from-green-500 to-emerald-500',
      difficulty: 'beginner',
      demand: 'high',
      salary: 'medium',
      skills: ['Testing', 'Automation', 'Quality Assurance', 'Bug Tracking', 'Test Planning'],
      tools: ['Selenium', 'Jest', 'Cypress', 'Jira', 'TestRail'],
      companies: ['Google', 'Microsoft', 'Amazon', 'Netflix', 'Spotify'],
      roadmap: {
        '0-1': { focus: 'Testing basics, manual testing, bug tracking' },
        '1-3': { focus: 'Automation, test planning, quality processes' },
        '3-5': { focus: 'QA leadership, strategy, mentoring' },
        '5+': { focus: 'QA organization leadership, strategy' }
      }
    },
    {
      key: 'technicalwriter',
      title: 'Technical Writer',
      category: 'specialized',
      icon: BookOpen,
      description: 'Create clear technical documentation and user guides',
      color: 'from-purple-500 to-pink-500',
      difficulty: 'beginner',
      demand: 'medium',
      salary: 'medium',
      skills: ['Technical Writing', 'Documentation', 'User Experience', 'Communication', 'Research'],
      tools: ['Markdown', 'GitBook', 'Confluence', 'Figma', 'User Testing Tools'],
      companies: ['Google', 'Microsoft', 'Amazon', 'Netflix', 'Spotify'],
      roadmap: {
        '0-1': { focus: 'Technical writing basics, documentation tools, user research' },
        '1-3': { focus: 'Advanced writing, user experience, content strategy' },
        '3-5': { focus: 'Technical writing leadership, strategy, mentoring' },
        '5+': { focus: 'Technical writing organization leadership, strategy' }
      }
    },
    {
      key: 'embeddedengineer',
      title: 'Embedded Systems Engineer',
      category: 'software',
      icon: Server,
      description: 'Develop software for hardware devices and IoT systems',
      color: 'from-indigo-500 to-purple-500',
      difficulty: 'advanced',
      demand: 'high',
      salary: 'high',
      skills: ['C/C++', 'Embedded Systems', 'IoT', 'Hardware Integration', 'Real-time Systems'],
      tools: ['Arduino', 'Raspberry Pi', 'STM32', 'Eclipse', 'GDB'],
      companies: ['Intel', 'ARM', 'Qualcomm', 'Texas Instruments', 'NXP'],
      roadmap: {
        '0-1': { focus: 'Embedded basics, C/C++, hardware integration' },
        '1-3': { focus: 'Advanced embedded systems, IoT, real-time programming' },
        '3-5': { focus: 'Embedded architecture, team leadership' },
        '5+': { focus: 'Embedded strategy, innovation, team leadership' }
      }
    },
    {
      key: 'systemprogrammer',
      title: 'Systems Programmer',
      category: 'software',
      icon: Server,
      description: 'Develop low-level system software and drivers',
      color: 'from-red-500 to-orange-500',
      difficulty: 'advanced',
      demand: 'high',
      salary: 'very-high',
      skills: ['C/C++', 'Assembly', 'Operating Systems', 'Drivers', 'Kernel Development'],
      tools: ['GCC', 'GDB', 'Valgrind', 'Linux Kernel', 'Windows Driver Kit'],
      companies: ['Microsoft', 'Linux Foundation', 'Red Hat', 'Canonical', 'Intel'],
      roadmap: {
        '0-1': { focus: 'Systems programming basics, C/C++, OS concepts' },
        '1-3': { focus: 'Driver development, kernel programming, debugging' },
        '3-5': { focus: 'System architecture, performance optimization' },
        '5+': { focus: 'Systems strategy, innovation, team leadership' }
      }
    },
    {
      key: 'compilerengineer',
      title: 'Compiler Engineer',
      category: 'software',
      icon: Code,
      description: 'Design and implement programming language compilers',
      color: 'from-purple-500 to-pink-500',
      difficulty: 'expert',
      demand: 'medium',
      salary: 'very-high',
      skills: ['Compiler Design', 'Programming Languages', 'Optimization', 'Computer Architecture', 'Research'],
      tools: ['LLVM', 'GCC', 'Clang', 'Research Tools', 'Performance Profilers'],
      companies: ['Google', 'Microsoft', 'Intel', 'ARM', 'NVIDIA'],
      roadmap: {
        '0-1': { focus: 'Compiler basics, language design, optimization' },
        '1-3': { focus: 'Advanced compiler techniques, research methods' },
        '3-5': { focus: 'Compiler research, publications, team projects' },
        '5+': { focus: 'Compiler research leadership, innovation, strategy' }
      }
    },
    {
      key: 'datavisualization',
      title: 'Data Visualization Engineer',
      category: 'data',
      icon: TrendingUp,
      description: 'Create interactive charts and data dashboards',
      color: 'from-blue-500 to-cyan-500',
      difficulty: 'intermediate',
      demand: 'high',
      salary: 'high',
      skills: ['Data Visualization', 'Frontend Development', 'Data Analysis', 'Design', 'User Experience'],
      tools: ['D3.js', 'Tableau', 'Power BI', 'React', 'Python'],
      companies: ['Google', 'Microsoft', 'Amazon', 'Tableau', 'Spotify'],
      roadmap: {
        '0-1': { focus: 'Visualization basics, D3.js, data analysis' },
        '1-3': { focus: 'Advanced visualization, interactive dashboards, user experience' },
        '3-5': { focus: 'Visualization leadership, strategy, mentoring' },
        '5+': { focus: 'Visualization organization leadership, strategy' }
      }
    },
    {
      key: 'nlpengineer',
      title: 'NLP Engineer',
      category: 'data',
      icon: Brain,
      description: 'Build natural language processing systems and chatbots',
      color: 'from-purple-500 to-pink-500',
      difficulty: 'advanced',
      demand: 'very-high',
      salary: 'very-high',
      skills: ['NLP', 'Machine Learning', 'Deep Learning', 'Linguistics', 'Text Processing'],
      tools: ['Hugging Face', 'SpaCy', 'NLTK', 'PyTorch', 'TensorFlow'],
      companies: ['OpenAI', 'Google', 'Meta', 'Microsoft', 'Amazon'],
      roadmap: {
        '0-1': { focus: 'NLP basics, text processing, basic models' },
        '1-3': { focus: 'Advanced NLP, deep learning, production systems' },
        '3-5': { focus: 'NLP research, team leadership, architecture' },
        '5+': { focus: 'NLP strategy, research leadership, innovation' }
      }
    },
    {
      key: 'computervision',
      title: 'Computer Vision Engineer',
      category: 'data',
      icon: Eye,
      description: 'Develop computer vision and image recognition systems',
      color: 'from-green-500 to-emerald-500',
      difficulty: 'advanced',
      demand: 'very-high',
      salary: 'very-high',
      skills: ['Computer Vision', 'Deep Learning', 'Image Processing', 'OpenCV', 'Neural Networks'],
      tools: ['OpenCV', 'PyTorch', 'TensorFlow', 'CUDA', 'Docker'],
      companies: ['Google', 'Meta', 'Microsoft', 'Amazon', 'Tesla'],
      roadmap: {
        '0-1': { focus: 'Computer vision basics, OpenCV, basic models' },
        '1-3': { focus: 'Advanced CV, deep learning, production systems' },
        '3-5': { focus: 'CV research, team leadership, architecture' },
        '5+': { focus: 'CV strategy, research leadership, innovation' }
      }
    },
    {
      key: 'networkengineer',
      title: 'Network Engineer',
      category: 'infra',
      icon: Server,
      description: 'Design and maintain network infrastructure and security',
      color: 'from-blue-500 to-indigo-500',
      difficulty: 'intermediate',
      demand: 'high',
      salary: 'high',
      skills: ['Networking', 'Security', 'Routing', 'Switching', 'Network Protocols'],
      tools: ['Cisco IOS', 'Wireshark', 'GNS3', 'Packet Tracer', 'Network Monitoring Tools'],
      companies: ['Cisco', 'Juniper', 'Aruba', 'Fortinet', 'Palo Alto Networks'],
      roadmap: {
        '0-1': { focus: 'Networking basics, routing, switching, security' },
        '1-3': { focus: 'Advanced networking, security, automation' },
        '3-5': { focus: 'Network architecture, team leadership' },
        '5+': { focus: 'Network strategy, innovation, team leadership' }
      }
    },
    {
      key: 'databaseadmin',
      title: 'Database Administrator',
      category: 'infra',
      icon: Database,
      description: 'Manage and optimize database systems and performance',
      color: 'from-green-500 to-emerald-500',
      difficulty: 'intermediate',
      demand: 'high',
      salary: 'high',
      skills: ['Database Management', 'SQL', 'Performance Tuning', 'Backup/Recovery', 'Security'],
      tools: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Redis'],
      companies: ['Oracle', 'Microsoft', 'Amazon', 'Google', 'Meta'],
      roadmap: {
        '0-1': { focus: 'Database basics, SQL, basic administration' },
        '1-3': { focus: 'Advanced database management, performance tuning, security' },
        '3-5': { focus: 'Database architecture, team leadership' },
        '5+': { focus: 'Database strategy, innovation, team leadership' }
      }
    },

    // Emerging Tech
    {
      key: 'blockchain',
      title: 'Blockchain Developer',
      category: 'emerging',
      icon: Zap,
      description: 'Build decentralized applications and smart contracts',
      color: 'from-purple-500 to-pink-500',
      difficulty: 'intermediate',
      demand: 'high',
      salary: 'high',
      skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js', 'Blockchain Security'],
      tools: ['Remix IDE', 'Truffle Suite', 'Ganache', 'Ethereum Testnet', 'OpenZeppelin'],
      companies: ['ConsenSys', 'Chainlink', 'Polygon', 'Ethereum Foundation', 'Hyperledger'],
      roadmap: {
        '0-1': { focus: 'Blockchain basics, Solidity, smart contracts' },
        '1-3': { focus: 'Ethereum, DeFi, NFTs, Web3.js' },
        '3-5': { focus: 'Advanced blockchain, scaling, security' },
        '5+': { focus: 'Blockchain research, innovation, strategy' }
      }
    },
    {
      key: 'web3',
      title: 'Web3 Developer',
      category: 'emerging',
      icon: Globe,
      description: 'Develop decentralized applications and web applications',
      color: 'from-blue-500 to-indigo-500',
      difficulty: 'intermediate',
      demand: 'high',
      salary: 'high',
      skills: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Smart Contracts'],
      tools: ['Remix IDE', 'Truffle Suite', 'Ganache', 'Ethereum Testnet', 'OpenZeppelin'],
      companies: ['ConsenSys', 'Chainlink', 'Polygon', 'Ethereum Foundation', 'Hyperledger'],
      roadmap: {
        '0-1': { focus: 'Web3 basics, Solidity, smart contracts' },
        '1-3': { focus: 'Ethereum, DeFi, NFTs, Web3.js' },
        '3-5': { focus: 'Advanced web3, scaling, security' },
        '5+': { focus: 'Web3 research, innovation, strategy' }
      }
    },
    {
      key: 'aiops',
      title: 'AI Operations Engineer',
      category: 'emerging',
      icon: Zap,
      description: 'Manage and optimize AI infrastructure and operations',
      color: 'from-green-500 to-emerald-500',
      difficulty: 'intermediate',
      demand: 'high',
      salary: 'high',
      skills: ['MLOps', 'DevOps', 'Cloud', 'Kubernetes', 'Monitoring'],
      tools: ['MLflow', 'Kubernetes', 'Prometheus', 'Grafana', 'Terraform'],
      companies: ['Google', 'Microsoft', 'Amazon', 'Databricks', 'Snowflake'],
      roadmap: {
        '0-1': { focus: 'AI Ops basics, MLOps, monitoring' },
        '1-3': { focus: 'Advanced AI Ops, scaling, security' },
        '3-5': { focus: 'AI Ops leadership, strategy' },
        '5+': { focus: 'AI Ops research, innovation' }
      }
    },
    {
      key: 'quantumcomputing',
      title: 'Quantum Computing Engineer',
      category: 'emerging',
      icon: Brain,
      description: 'Research and develop quantum algorithms and hardware',
      color: 'from-purple-500 to-pink-500',
      difficulty: 'advanced',
      demand: 'high',
      salary: 'very-high',
      skills: ['Quantum Algorithms', 'Quantum Hardware', 'Quantum Programming', 'Research'],
      tools: ['Qiskit', 'IBM Q Experience', 'Google Quantum AI', 'Research Tools'],
      companies: ['Google', 'IBM', 'Microsoft', 'D-Wave', 'Quantum Computing Inc.'],
      roadmap: {
        '0-1': { focus: 'Quantum basics, algorithms, hardware' },
        '1-3': { focus: 'Advanced quantum, research methods' },
        '3-5': { focus: 'Quantum research, publications' },
        '5+': { focus: 'Quantum research leadership, innovation' }
      }
    },
    {
      key: 'generativeai',
      title: 'Generative AI Engineer',
      category: 'emerging',
      icon: Brain,
      description: 'Build and optimize large language models and generative systems',
      color: 'from-purple-500 to-pink-500',
      difficulty: 'advanced',
      demand: 'very-high',
      salary: 'very-high',
      skills: ['LLM/Generative AI', 'Deep Learning', 'MLOps', 'Cloud', 'DevOps'],
      tools: ['Hugging Face', 'OpenAI API', 'TensorFlow', 'PyTorch', 'MLflow'],
      companies: ['OpenAI', 'Anthropic', 'Google', 'Meta', 'Microsoft'],
      roadmap: {
        '0-1': { focus: 'Generative AI basics, models, deployment' },
        '1-3': { focus: 'Advanced generative AI, MLOps, scaling' },
        '3-5': { focus: 'Generative AI research, strategy' },
        '5+': { focus: 'Generative AI leadership, innovation' }
      }
    },

    // Industry-Specific
    {
      key: 'fintech',
      title: 'Fintech Engineer',
      category: 'industry',
      icon: Building,
      description: 'Build financial applications and infrastructure',
      color: 'from-blue-500 to-indigo-500',
      difficulty: 'intermediate',
      demand: 'high',
      salary: 'high',
      skills: ['Blockchain', 'Cryptocurrency', 'Financial APIs', 'Security', 'Regulation'],
      tools: ['Solidity', 'Ethereum', 'Web3.js', 'API Development', 'Security Tools'],
      companies: ['Coinbase', 'Blockchain.com', 'Stripe', 'Square', 'Robinhood'],
      roadmap: {
        '0-1': { focus: 'Fintech basics, blockchain, security' },
        '1-3': { focus: 'Advanced fintech, regulation, compliance' },
        '3-5': { focus: 'Fintech research, innovation' },
        '5+': { focus: 'Fintech leadership, strategy' }
      }
    },
    {
      key: 'healthcare',
      title: 'Healthcare Data Engineer',
      category: 'industry',
      icon: Building,
      description: 'Design and maintain data pipelines for healthcare applications',
      color: 'from-green-500 to-emerald-500',
      difficulty: 'intermediate',
      demand: 'high',
      salary: 'high',
      skills: ['Big Data', 'ETL', 'Data Warehousing', 'Healthcare APIs', 'Regulation'],
      tools: ['Apache Spark', 'Airflow', 'Snowflake', 'FHIR', 'API Development'],
      companies: ['Google', 'Microsoft', 'Amazon', 'Cerner', 'Epic Systems'],
      roadmap: {
        '0-1': { focus: 'Healthcare data basics, ETL, security' },
        '1-3': { focus: 'Advanced healthcare data, regulation, compliance' },
        '3-5': { focus: 'Healthcare data research, innovation' },
        '5+': { focus: 'Healthcare data leadership, strategy' }
      }
    },
    {
      key: 'edutech',
      title: 'Edutech Engineer',
      category: 'industry',
      icon: Building,
      description: 'Develop educational applications and platforms',
      color: 'from-purple-500 to-pink-500',
      difficulty: 'intermediate',
      demand: 'high',
      salary: 'high',
      skills: ['Web3', 'Blockchain', 'Smart Contracts', 'Educational APIs', 'Regulation'],
      tools: ['Solidity', 'Ethereum', 'Web3.js', 'API Development', 'Security Tools'],
      companies: ['Khan Academy', 'Duolingo', 'Coursera', 'Udemy', 'Codecademy'],
      roadmap: {
        '0-1': { focus: 'Edutech basics, blockchain, security' },
        '1-3': { focus: 'Advanced edutech, regulation, compliance' },
        '3-5': { focus: 'Edutech research, innovation' },
        '5+': { focus: 'Edutech leadership, strategy' }
      }
    },
    {
      key: 'gaming',
      title: 'Gaming Engineer',
      category: 'industry',
      icon: Building,
      description: 'Build and optimize game engines and platforms',
      color: 'from-purple-500 to-pink-500',
      difficulty: 'intermediate',
      demand: 'high',
      salary: 'high',
      skills: ['Game Engine Development', '3D Graphics', 'Physics', 'Networking', 'Performance'],
      tools: ['Unity', 'Unreal Engine', 'DirectX', 'Networking Libraries', 'Performance Tools'],
      companies: ['Epic Games', 'Unity Technologies', 'EA', 'Ubisoft', 'Nintendo'],
      roadmap: {
        '0-1': { focus: 'Gaming basics, engine development' },
        '1-3': { focus: 'Advanced gaming, optimization, networking' },
        '3-5': { focus: 'Gaming research, innovation' },
        '5+': { focus: 'Gaming leadership, strategy' }
      }
    },

    // Tech Management
    {
      key: 'techmanager',
      title: 'Tech Manager',
      category: 'management',
      icon: Users,
      description: 'Lead and manage technical teams and projects',
      color: 'from-teal-500 to-cyan-500',
      difficulty: 'intermediate',
      demand: 'high',
      salary: 'high',
      skills: ['Team Leadership', 'Project Management', 'Technical Strategy', 'Communication', 'Budgeting'],
      tools: ['Jira', 'Trello', 'Asana', 'Slack', 'Zoom'],
      companies: ['Google', 'Microsoft', 'Amazon', 'Facebook', 'Apple'],
      roadmap: {
        '0-1': { focus: 'Management basics, team building' },
        '1-3': { focus: 'Advanced management, strategy, communication' },
        '3-5': { focus: 'Management research, innovation' },
        '5+': { focus: 'Management leadership, strategy' }
      }
    },
    {
      key: 'cto',
      title: 'Chief Technology Officer',
      category: 'management',
      icon: Users,
      description: 'Oversee all technical aspects of a company',
      color: 'from-indigo-500 to-purple-500',
      difficulty: 'advanced',
      demand: 'very-high',
      salary: 'very-high',
      skills: ['Technical Strategy', 'Team Leadership', 'Budgeting', 'Risk Management', 'Innovation'],
      tools: ['Jira', 'Trello', 'Asana', 'Slack', 'Zoom'],
      companies: ['Google', 'Microsoft', 'Amazon', 'Facebook', 'Apple'],
      roadmap: {
        '0-1': { focus: 'CTO basics, technical strategy' },
        '1-3': { focus: 'Advanced CTO, risk management, innovation' },
        '3-5': { focus: 'CTO research, innovation' },
        '5+': { focus: 'CTO leadership, strategy' }
      }
    }
  ]

  const filteredRoadmaps = allRoadmaps.filter(roadmap => {
    const matchesSearch = roadmap.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         roadmap.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         roadmap.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || roadmap.category === selectedCategory
    
    const matchesExperience = selectedExperience === 'all' || 
                             Object.keys(roadmap.roadmap).includes(selectedExperience)
    
    return matchesSearch && matchesCategory && matchesExperience
  })

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      beginner: 'bg-green-100 text-green-800',
      intermediate: 'bg-blue-100 text-blue-800',
      advanced: 'bg-purple-100 text-purple-800',
      expert: 'bg-red-100 text-red-800'
    }
    return colors[difficulty as keyof typeof colors] || colors.beginner
  }

  const getDemandColor = (demand: string) => {
    const colors = {
      'very-high': 'bg-red-100 text-red-800',
      high: 'bg-orange-100 text-orange-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-gray-100 text-gray-800'
    }
    return colors[demand as keyof typeof colors] || colors.medium
  }

  const getSalaryColor = (salary: string) => {
    const colors = {
      'very-high': 'bg-green-100 text-green-800',
      high: 'bg-blue-100 text-blue-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-gray-100 text-gray-800'
    }
    return colors[salary as keyof typeof colors] || colors.medium
  }

  const getCategoryLabel = (categoryKey: string) =>
    categories.find((category) => category.key === categoryKey)?.label || 'All Categories'

  const highDemandCount = allRoadmaps.filter((roadmap) => roadmap.demand === 'very-high' || roadmap.demand === 'high').length
  const highSalaryCount = allRoadmaps.filter((roadmap) => roadmap.salary === 'very-high' || roadmap.salary === 'high').length
  const beginnerCount = allRoadmaps.filter((roadmap) => roadmap.difficulty === 'beginner').length

  return (
    <div className="overflow-hidden">
      <section className="relative px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <div className="hero-orb left-[-5rem] top-8 h-56 w-56 bg-sky-300/35" />
        <div className="hero-orb right-[-4rem] top-10 h-72 w-72 bg-blue-300/25" style={{ animationDelay: '2s' }} />

        <div className="mx-auto max-w-7xl">
          <div className="surface-panel-strong rounded-[2.4rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="section-kicker">
                  <BookOpen className="h-3.5 w-3.5 text-blue-600" />
                  Career discovery hub
                </div>
                <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Explore tech roles through a guide with stronger <span className="gradient-text">hierarchy and clarity.</span>
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  Browse career paths, compare demand and difficulty, and jump into structured roadmaps that keep the visual rhythm consistent across the product.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="card-modern p-5">
                  <p className="text-sm font-semibold text-slate-500">Total paths</p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{allRoadmaps.length}</p>
                  <p className="mt-2 text-sm text-slate-600">Structured roles across software, AI, infra, design, and leadership.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="card-modern p-5">
                    <p className="text-sm font-semibold text-slate-500">High demand</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-950">{highDemandCount}</p>
                  </div>
                  <div className="card-modern p-5">
                    <p className="text-sm font-semibold text-slate-500">Beginner friendly</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-950">{beginnerCount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="surface-panel-strong rounded-[2rem] p-4 sm:p-5">
            <div className="grid gap-4 xl:grid-cols-[minmax(0,1.3fr)_220px_220px_160px_160px]">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search roles, skills, or tools"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-11"
                />
              </div>

              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((category) => (
                  <option key={category.key} value={category.key}>
                    {category.label}
                  </option>
                ))}
              </select>

              <select value={selectedExperience} onChange={(e) => setSelectedExperience(e.target.value)}>
                {experienceLevels.map((level) => (
                  <option key={level.key} value={level.key}>
                    {level.label}
                  </option>
                ))}
              </select>

              <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-3 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Demand</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">{highDemandCount}</p>
              </div>

              <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-3 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Results</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">{filteredRoadmaps.length}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Career paths</h2>
                <p className="mt-1 text-sm text-slate-600">Balanced cards with quick signals, key skills, and a direct route into the roadmap.</p>
              </div>
              <div className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 sm:block">
                {getCategoryLabel(selectedCategory)} · {selectedExperience === 'all' ? 'All levels' : selectedExperience}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredRoadmaps.map((roadmap) => (
                <article
                  key={roadmap.key}
                  className="card-modern group flex h-full flex-col overflow-hidden"
                >
                  <div className={cn('relative bg-gradient-to-br px-6 py-6', roadmap.color)}>
                    <div className="absolute right-4 top-4 rounded-full bg-white/16 px-3 py-1 text-xs font-semibold text-white">
                      {getCategoryLabel(roadmap.category)}
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/18 text-white">
                      <roadmap.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{roadmap.title}</h3>
                    <p className="mt-2 min-h-[3.5rem] text-sm leading-6 text-white/90">{roadmap.description}</p>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-2xl bg-slate-50 p-3 text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Level</p>
                        <span className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getDifficultyColor(roadmap.difficulty)}`}>
                          {roadmap.difficulty}
                        </span>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-3 text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Demand</p>
                        <span className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getDemandColor(roadmap.demand)}`}>
                          {roadmap.demand}
                        </span>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-3 text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Salary</p>
                        <span className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getSalaryColor(roadmap.salary)}`}>
                          {roadmap.salary}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-1 flex-col gap-5">
                      <div className="min-h-[5.5rem]">
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900">
                          <Zap className="h-4 w-4 text-blue-600" />
                          Core skills
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {roadmap.skills.slice(0, 4).map((skill, index) => (
                            <span key={index} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="min-h-[5.5rem]">
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900">
                          <Code className="h-4 w-4 text-emerald-600" />
                          Tools
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {roadmap.tools.slice(0, 4).map((tool, index) => (
                            <span key={index} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="min-h-[15rem] rounded-[1.4rem] border border-slate-200 bg-slate-50 p-4">
                        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
                          <Target className="h-4 w-4 text-slate-700" />
                          Roadmap preview
                        </div>
                        <div className="space-y-2">
                          {Object.entries(roadmap.roadmap).slice(0, 3).map(([year, data]) => (
                            <div key={year} className="grid grid-cols-[72px_minmax(0,1fr)] items-start gap-3 rounded-2xl bg-white px-3 py-2">
                              <span className="text-sm font-semibold text-slate-900">{year} yrs</span>
                              <span className="text-xs leading-5 text-slate-500">{data.focus}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-[minmax(0,1fr)_180px] gap-3">
                      <button
                        onClick={() => navigate(`/roadmap?role=${roadmap.key}`)}
                        className="btn-modern inline-flex flex-1 items-center justify-center rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
                      >
                        Open roadmap
                      </button>
                      <button
                        onClick={() => navigate(`/roadmap/${roadmap.key}`)}
                        className="btn-modern inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800"
                      >
                        Full page
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredRoadmaps.length === 0 && (
              <div className="surface-panel-strong rounded-[2rem] px-6 py-12 text-center">
                <BookOpen className="mx-auto h-12 w-12 text-slate-300" />
                <h3 className="mt-4 text-xl font-semibold text-slate-950">No roadmaps matched this view</h3>
                <p className="mt-2 text-sm text-slate-600">Try broadening your search or switching the category and experience filters.</p>
              </div>
            )}

            <div className="surface-panel-strong rounded-[2rem] px-6 py-8">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">Guide summary</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="card-modern p-5 text-center">
                  <p className="text-sm text-slate-500">Career paths</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">{allRoadmaps.length}</p>
                </div>
                <div className="card-modern p-5 text-center">
                  <p className="text-sm text-slate-500">High demand</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">{highDemandCount}</p>
                </div>
                <div className="card-modern p-5 text-center">
                  <p className="text-sm text-slate-500">High salary</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">{highSalaryCount}</p>
                </div>
                <div className="card-modern p-5 text-center">
                  <p className="text-sm text-slate-500">Beginner friendly</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">{beginnerCount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
