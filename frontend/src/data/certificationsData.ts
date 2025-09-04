import { Certification, YouTubePlaylist } from './skillsData'

// Industry-leading certifications for different skill categories
export const industryCertifications: { [key: string]: Certification[] } = {
  frontend: [
    {
      name: 'Google UX Design Certificate',
      provider: 'Google',
      type: 'paid',
      duration: '6 months',
      difficulty: 'beginner',
      url: 'https://www.coursera.org/professional-certificates/google-ux-design',
      description: 'Learn the fundamentals of UX design and create user-centered designs',
      price: '$39/month',
      currency: 'USD'
    },
    {
      name: 'Meta Front-End Developer Certificate',
      provider: 'Meta',
      type: 'paid',
      duration: '7 months',
      difficulty: 'beginner',
      url: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
      description: 'Master React, JavaScript, and front-end development tools',
      price: '$39/month',
      currency: 'USD'
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      provider: 'Amazon Web Services',
      type: 'paid',
      duration: '3 months',
      difficulty: 'beginner',
      url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
      description: 'Understand AWS cloud concepts and services',
      price: '$100',
      currency: 'USD'
    },
    {
      name: 'Microsoft Azure Fundamentals',
      provider: 'Microsoft',
      type: 'free',
      duration: '2 months',
      difficulty: 'beginner',
      url: 'https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/',
      description: 'Learn cloud concepts and Azure services',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'freeCodeCamp Responsive Web Design',
      provider: 'freeCodeCamp',
      type: 'free',
      duration: '300 hours',
      difficulty: 'beginner',
      url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
      description: 'Learn HTML, CSS, and responsive design principles',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'Adobe Certified Expert (ACE)',
      provider: 'Adobe',
      type: 'paid',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://www.adobe.com/certification.html',
      description: 'Certification in Adobe Creative Suite for web design',
      price: '$180',
      currency: 'USD'
    }
  ],
  backend: [
    {
      name: 'AWS Certified Solutions Architect',
      provider: 'Amazon Web Services',
      type: 'paid',
      duration: '6 months',
      difficulty: 'intermediate',
      url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
      description: 'Design distributed systems on AWS platform',
      price: '$150',
      currency: 'USD'
    },
    {
      name: 'Google Cloud Professional Developer',
      provider: 'Google Cloud',
      type: 'paid',
      duration: '4 months',
      difficulty: 'intermediate',
      url: 'https://cloud.google.com/certification/cloud-developer',
      description: 'Build and deploy applications on Google Cloud',
      price: '$200',
      currency: 'USD'
    },
    {
      name: 'Microsoft Azure Developer Associate',
      provider: 'Microsoft',
      type: 'paid',
      duration: '4 months',
      difficulty: 'intermediate',
      url: 'https://docs.microsoft.com/en-us/learn/certifications/azure-developer/',
      description: 'Develop Azure solutions and services',
      price: '$165',
      currency: 'USD'
    },
    {
      name: 'MongoDB Certified Developer',
      provider: 'MongoDB',
      type: 'paid',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://university.mongodb.com/certification',
      description: 'Master MongoDB database development',
      price: '$150',
      currency: 'USD'
    },
    {
      name: 'Oracle Certified Professional Java Developer',
      provider: 'Oracle',
      type: 'paid',
      duration: '3 months',
      difficulty: 'advanced',
      url: 'https://education.oracle.com/oracle-certified-professional-java-se-developer/trackp_333',
      description: 'Advanced Java development certification',
      price: '$245',
      currency: 'USD'
    }
  ],
  fullstack: [
    {
      name: 'IBM Full Stack Software Developer',
      provider: 'IBM',
      type: 'paid',
      duration: '8 months',
      difficulty: 'intermediate',
      url: 'https://www.coursera.org/professional-certificates/ibm-fullstack-cloud-developer',
      description: 'Complete full-stack development with cloud technologies',
      price: '$39/month',
      currency: 'USD'
    },
    {
      name: 'Meta Full-Stack Developer Certificate',
      provider: 'Meta',
      type: 'paid',
      duration: '9 months',
      difficulty: 'intermediate',
      url: 'https://www.coursera.org/professional-certificates/meta-full-stack-developer',
      description: 'Master both frontend and backend development',
      price: '$39/month',
      currency: 'USD'
    },
    {
      name: 'AWS Certified Developer Associate',
      provider: 'Amazon Web Services',
      type: 'paid',
      duration: '4 months',
      difficulty: 'intermediate',
      url: 'https://aws.amazon.com/certification/certified-developer-associate/',
      description: 'Develop and maintain applications on AWS',
      price: '$150',
      currency: 'USD'
    }
  ],
  mobile: [
    {
      name: 'Google Associate Android Developer',
      provider: 'Google',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://developers.google.com/certification/associate-android-developer',
      description: 'Certified Android app development',
      price: '$149',
      currency: 'USD'
    },
    {
      name: 'Apple Certified iOS Developer',
      provider: 'Apple',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://developer.apple.com/certification/',
      description: 'Official iOS development certification',
      price: '$99',
      currency: 'USD'
    },
    {
      name: 'Flutter Development Bootcamp',
      provider: 'Google',
      type: 'free',
      duration: '2 months',
      difficulty: 'beginner',
      url: 'https://www.udacity.com/course/flutter-development-bootcamp-with-dart--ud905',
      description: 'Learn Flutter for cross-platform development',
      price: 'Free',
      currency: 'USD'
    }
  ],
  ai_ml: [
    {
      name: 'Google Machine Learning Engineer',
      provider: 'Google Cloud',
      type: 'paid',
      duration: '6 months',
      difficulty: 'advanced',
      url: 'https://cloud.google.com/certification/machine-learning-engineer',
      description: 'Design and implement ML solutions on Google Cloud',
      price: '$200',
      currency: 'USD'
    },
    {
      name: 'AWS Certified Machine Learning Specialty',
      provider: 'Amazon Web Services',
      type: 'paid',
      duration: '4 months',
      difficulty: 'advanced',
      url: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/',
      description: 'Build, train, and deploy ML models on AWS',
      price: '$300',
      currency: 'USD'
    },
    {
      name: 'Microsoft Azure AI Engineer Associate',
      provider: 'Microsoft',
      type: 'paid',
      duration: '4 months',
      difficulty: 'intermediate',
      url: 'https://docs.microsoft.com/en-us/learn/certifications/azure-ai-engineer/',
      description: 'Design and implement AI solutions on Azure',
      price: '$165',
      currency: 'USD'
    },
    {
      name: 'IBM AI Engineering Professional Certificate',
      provider: 'IBM',
      type: 'paid',
      duration: '8 months',
      difficulty: 'intermediate',
      url: 'https://www.coursera.org/professional-certificates/ai-engineer',
      description: 'Master AI and machine learning engineering',
      price: '$39/month',
      currency: 'USD'
    }
  ],
  cybersecurity: [
    {
      name: 'CompTIA Security+',
      provider: 'CompTIA',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://www.comptia.org/certifications/security',
      description: 'Entry-level cybersecurity certification',
      price: '$370',
      currency: 'USD'
    },
    {
      name: 'Certified Ethical Hacker (CEH)',
      provider: 'EC-Council',
      type: 'paid',
      duration: '4 months',
      difficulty: 'intermediate',
      url: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/',
      description: 'Ethical hacking and penetration testing',
      price: '$1,199',
      currency: 'USD'
    },
    {
      name: 'CISSP - Certified Information Systems Security Professional',
      provider: 'ISC2',
      type: 'paid',
      duration: '6 months',
      difficulty: 'advanced',
      url: 'https://www.isc2.org/Certifications/CISSP',
      description: 'Advanced cybersecurity management certification',
      price: '$749',
      currency: 'USD'
    }
  ],
  cloud: [
    {
      name: 'AWS Certified Solutions Architect Professional',
      provider: 'Amazon Web Services',
      type: 'paid',
      duration: '8 months',
      difficulty: 'advanced',
      url: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/',
      description: 'Advanced AWS architecture and design',
      price: '$300',
      currency: 'USD'
    },
    {
      name: 'Google Cloud Professional Architect',
      provider: 'Google Cloud',
      type: 'paid',
      duration: '6 months',
      difficulty: 'advanced',
      url: 'https://cloud.google.com/certification/cloud-architect',
      description: 'Design and manage Google Cloud solutions',
      price: '$200',
      currency: 'USD'
    },
    {
      name: 'Microsoft Azure Solutions Architect Expert',
      provider: 'Microsoft',
      type: 'paid',
      duration: '6 months',
      difficulty: 'advanced',
      url: 'https://docs.microsoft.com/en-us/learn/certifications/azure-solutions-architect/',
      description: 'Expert-level Azure architecture certification',
      price: '$165',
      currency: 'USD'
    }
  ],
  
  // Data Science & Analytics
  datascientist: [
    {
      name: 'IBM Data Science Professional Certificate',
      provider: 'IBM',
      type: 'paid',
      duration: '10 months',
      difficulty: 'intermediate',
      url: 'https://www.coursera.org/professional-certificates/ibm-data-science',
      description: 'Master data science tools and techniques including Python, SQL, and machine learning',
      price: '$39/month',
      currency: 'USD'
    },
    {
      name: 'Google Data Analytics Certificate',
      provider: 'Google',
      type: 'paid',
      duration: '6 months',
      difficulty: 'beginner',
      url: 'https://www.coursera.org/professional-certificates/google-data-analytics',
      description: 'Learn data analysis with Google Analytics, SQL, and visualization tools',
      price: '$39/month',
      currency: 'USD'
    },
    {
      name: 'Microsoft Certified: Azure Data Scientist Associate',
      provider: 'Microsoft',
      type: 'paid',
      duration: '4 months',
      difficulty: 'intermediate',
      url: 'https://docs.microsoft.com/en-us/learn/certifications/azure-data-scientist/',
      description: 'Design and implement machine learning solutions on Azure',
      price: '$165',
      currency: 'USD'
    },
    {
      name: 'Tableau Desktop Specialist',
      provider: 'Tableau',
      type: 'paid',
      duration: '2 months',
      difficulty: 'beginner',
      url: 'https://www.tableau.com/learn/certification/desktop-specialist',
      description: 'Master Tableau for data visualization and business intelligence',
      price: '$100',
      currency: 'USD'
    }
  ],
  
  dataengineer: [
    {
      name: 'Google Cloud Professional Data Engineer',
      provider: 'Google',
      type: 'paid',
      duration: '6 months',
      difficulty: 'intermediate',
      url: 'https://cloud.google.com/certification/data-engineer',
      description: 'Design and build data processing systems on Google Cloud',
      price: '$200',
      currency: 'USD'
    },
    {
      name: 'AWS Certified Data Analytics - Specialty',
      provider: 'Amazon Web Services',
      type: 'paid',
      duration: '5 months',
      difficulty: 'intermediate',
      url: 'https://aws.amazon.com/certification/certified-data-analytics-specialty/',
      description: 'Design and implement big data solutions on AWS',
      price: '$300',
      currency: 'USD'
    },
    {
      name: 'Databricks Certified Data Engineer Associate',
      provider: 'Databricks',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://www.databricks.com/learn/certification/data-engineer-associate',
      description: 'Master Apache Spark and data engineering on Databricks',
      price: '$200',
      currency: 'USD'
    },
    {
      name: 'Snowflake SnowPro Core Certification',
      provider: 'Snowflake',
      type: 'paid',
      duration: '2 months',
      difficulty: 'beginner',
      url: 'https://www.snowflake.com/certifications/',
      description: 'Learn Snowflake data warehousing and analytics platform',
      price: '$175',
      currency: 'USD'
    }
  ],
  
  mle: [
    {
      name: 'Google Cloud Professional Machine Learning Engineer',
      provider: 'Google',
      type: 'paid',
      duration: '6 months',
      difficulty: 'advanced',
      url: 'https://cloud.google.com/certification/machine-learning-engineer',
      description: 'Design, build, and productionize ML models on Google Cloud',
      price: '$200',
      currency: 'USD'
    },
    {
      name: 'AWS Certified Machine Learning - Specialty',
      provider: 'Amazon Web Services',
      type: 'paid',
      duration: '6 months',
      difficulty: 'advanced',
      url: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/',
      description: 'Build, train, tune, and deploy ML models on AWS',
      price: '$300',
      currency: 'USD'
    },
    {
      name: 'Microsoft Certified: Azure AI Engineer Associate',
      provider: 'Microsoft',
      type: 'paid',
      duration: '4 months',
      difficulty: 'intermediate',
      url: 'https://docs.microsoft.com/en-us/learn/certifications/azure-ai-engineer/',
      description: 'Design and implement AI solutions on Azure',
      price: '$165',
      currency: 'USD'
    },
    {
      name: 'TensorFlow Developer Certificate',
      provider: 'TensorFlow',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://www.tensorflow.org/certificate',
      description: 'Master TensorFlow for machine learning and deep learning',
      price: '$100',
      currency: 'USD'
    }
  ],
  
  aispecialist: [
    {
      name: 'IBM AI Engineering Professional Certificate',
      provider: 'IBM',
      type: 'paid',
      duration: '8 months',
      difficulty: 'intermediate',
      url: 'https://www.coursera.org/professional-certificates/ai-engineer',
      description: 'Master AI engineering with deep learning and neural networks',
      price: '$39/month',
      currency: 'USD'
    },
    {
      name: 'Stanford CS229 Machine Learning Course',
      provider: 'Stanford University',
      type: 'free',
      duration: '4 months',
      difficulty: 'advanced',
      url: 'https://cs229.stanford.edu/',
      description: 'Comprehensive machine learning course from Stanford',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'Deep Learning Specialization',
      provider: 'DeepLearning.AI',
      type: 'paid',
      duration: '5 months',
      difficulty: 'intermediate',
      url: 'https://www.coursera.org/specializations/deep-learning',
      description: 'Master deep learning with neural networks and CNNs',
      price: '$49/month',
      currency: 'USD'
    },
    {
      name: 'MIT Introduction to Machine Learning',
      provider: 'MIT',
      type: 'free',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/',
      description: 'Introduction to AI and machine learning from MIT',
      price: 'Free',
      currency: 'USD'
    }
  ],
  
  generativeai: [
    {
      name: 'Generative AI with Large Language Models',
      provider: 'DeepLearning.AI',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://www.coursera.org/learn/generative-ai-with-llms',
      description: 'Learn to build and deploy LLM-powered applications',
      price: '$49/month',
      currency: 'USD'
    },
    {
      name: 'OpenAI API Certification',
      provider: 'OpenAI',
      type: 'paid',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://platform.openai.com/docs',
      description: 'Master OpenAI API for building AI applications',
      price: '$200',
      currency: 'USD'
    },
    {
      name: 'Hugging Face Transformers Course',
      provider: 'Hugging Face',
      type: 'free',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://huggingface.co/course',
      description: 'Learn to use and fine-tune transformer models',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'LangChain Developer Certification',
      provider: 'LangChain',
      type: 'paid',
      duration: '1 month',
      difficulty: 'intermediate',
      url: 'https://python.langchain.com/',
      description: 'Build applications with LLMs using LangChain framework',
      price: '$150',
      currency: 'USD'
    }
  ],
  
  // DevOps & Infrastructure
  devops: [
    {
      name: 'AWS Certified DevOps Engineer - Professional',
      provider: 'Amazon Web Services',
      type: 'paid',
      duration: '6 months',
      difficulty: 'advanced',
      url: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/',
      description: 'Expert-level DevOps practices on AWS platform',
      price: '$300',
      currency: 'USD'
    },
    {
      name: 'Google Cloud Professional DevOps Engineer',
      provider: 'Google',
      type: 'paid',
      duration: '5 months',
      difficulty: 'advanced',
      url: 'https://cloud.google.com/certification/devops-engineer',
      description: 'Design and implement DevOps practices on Google Cloud',
      price: '$200',
      currency: 'USD'
    },
    {
      name: 'Microsoft Azure DevOps Engineer Expert',
      provider: 'Microsoft',
      type: 'paid',
      duration: '4 months',
      difficulty: 'advanced',
      url: 'https://docs.microsoft.com/en-us/learn/certifications/azure-devops/',
      description: 'Design and implement DevOps practices on Azure',
      price: '$165',
      currency: 'USD'
    },
    {
      name: 'Docker Certified Associate',
      provider: 'Docker',
      type: 'paid',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://training.mirantis.com/certification/dca-certification-exam/',
      description: 'Master containerization with Docker and Kubernetes',
      price: '$195',
      currency: 'USD'
    }
  ],
  
  sre: [
    {
      name: 'Google Site Reliability Engineering Certificate',
      provider: 'Google',
      type: 'paid',
      duration: '4 months',
      difficulty: 'advanced',
      url: 'https://cloud.google.com/certification/site-reliability-engineer',
      description: 'Learn SRE principles and practices from Google',
      price: '$200',
      currency: 'USD'
    },
    {
      name: 'AWS Certified SysOps Administrator - Associate',
      provider: 'Amazon Web Services',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://aws.amazon.com/certification/certified-sysops-admin-associate/',
      description: 'Deploy, manage, and operate systems on AWS',
      price: '$150',
      currency: 'USD'
    },
    {
      name: 'Prometheus Certified Associate',
      provider: 'Prometheus',
      type: 'paid',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://prometheus.io/docs/',
      description: 'Master monitoring and alerting with Prometheus',
      price: '$100',
      currency: 'USD'
    },
    {
      name: 'Grafana Certified Associate',
      provider: 'Grafana',
      type: 'paid',
      duration: '1 month',
      difficulty: 'beginner',
      url: 'https://grafana.com/training/',
      description: 'Learn visualization and monitoring with Grafana',
      price: '$75',
      currency: 'USD'
    }
  ],
  
  qaengineer: [
    {
      name: 'ISTQB Certified Tester Foundation Level',
      provider: 'ISTQB',
      type: 'paid',
      duration: '2 months',
      difficulty: 'beginner',
      url: 'https://www.istqb.org/certifications/certified-tester-foundation-level',
      description: 'Fundamental software testing principles and practices',
      price: '$250',
      currency: 'USD'
    },
    {
      name: 'Selenium WebDriver Certification',
      provider: 'Selenium',
      type: 'paid',
      duration: '1 month',
      difficulty: 'intermediate',
      url: 'https://www.selenium.dev/documentation/',
      description: 'Master automated testing with Selenium WebDriver',
      price: '$150',
      currency: 'USD'
    },
    {
      name: 'Cypress Test Automation Certification',
      provider: 'Cypress',
      type: 'paid',
      duration: '1 month',
      difficulty: 'intermediate',
      url: 'https://www.cypress.io/',
      description: 'Learn modern end-to-end testing with Cypress',
      price: '$100',
      currency: 'USD'
    },
    {
      name: 'Postman API Testing Certification',
      provider: 'Postman',
      type: 'free',
      duration: '2 weeks',
      difficulty: 'beginner',
      url: 'https://www.postman.com/certification/',
      description: 'Master API testing and automation with Postman',
      price: 'Free',
      currency: 'USD'
    }
  ],
  
  networkengineer: [
    {
      name: 'Cisco Certified Network Professional (CCNP)',
      provider: 'Cisco',
      type: 'paid',
      duration: '6 months',
      difficulty: 'advanced',
      url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-enterprise.html',
      description: 'Advanced networking skills and enterprise solutions',
      price: '$400',
      currency: 'USD'
    },
    {
      name: 'CompTIA Network+ Certification',
      provider: 'CompTIA',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://www.comptia.org/certifications/network',
      description: 'Fundamental networking concepts and troubleshooting',
      price: '$338',
      currency: 'USD'
    },
    {
      name: 'Juniper Networks Certified Professional (JNCIP)',
      provider: 'Juniper Networks',
      type: 'paid',
      duration: '4 months',
      difficulty: 'advanced',
      url: 'https://www.juniper.net/us/en/training/certification/',
      description: 'Advanced Juniper networking technologies',
      price: '$300',
      currency: 'USD'
    },
    {
      name: 'AWS Certified Advanced Networking - Specialty',
      provider: 'Amazon Web Services',
      type: 'paid',
      duration: '5 months',
      difficulty: 'advanced',
      url: 'https://aws.amazon.com/certification/certified-advanced-networking-specialty/',
      description: 'Design and implement AWS networking solutions',
      price: '$300',
      currency: 'USD'
    }
  ],
  
  embeddedengineer: [
    {
      name: 'ARM Cortex-M Programming Certification',
      provider: 'ARM',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://developer.arm.com/support/training',
      description: 'Master ARM Cortex-M microcontroller programming',
      price: '$200',
      currency: 'USD'
    },
    {
      name: 'Real-Time Operating Systems (RTOS) Certification',
      provider: 'FreeRTOS',
      type: 'free',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://www.freertos.org/',
      description: 'Learn real-time operating systems for embedded systems',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'Embedded Linux Development Certification',
      provider: 'Linux Foundation',
      type: 'paid',
      duration: '4 months',
      difficulty: 'advanced',
      url: 'https://training.linuxfoundation.org/certification/embedded-linux-development/',
      description: 'Develop embedded systems using Linux',
      price: '$250',
      currency: 'USD'
    },
    {
      name: 'IoT Development with Arduino Certification',
      provider: 'Arduino',
      type: 'paid',
      duration: '2 months',
      difficulty: 'beginner',
      url: 'https://www.arduino.cc/education/certification',
      description: 'Build IoT projects with Arduino platform',
      price: '$150',
      currency: 'USD'
    }
  ],
  
  // Specialized Tech
  blockchain: [
    {
      name: 'Certified Blockchain Developer (CBD)',
      provider: 'Blockchain Council',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://www.blockchain-council.org/certifications/certified-blockchain-developer/',
      description: 'Master blockchain development with Ethereum, Solidity, and smart contracts',
      price: '$299',
      currency: 'USD'
    },
    {
      name: 'Ethereum Developer Certification',
      provider: 'ConsenSys Academy',
      type: 'paid',
      duration: '4 months',
      difficulty: 'intermediate',
      url: 'https://consensys.net/academy/',
      description: 'Learn Ethereum development, DeFi, and Web3 applications',
      price: '$500',
      currency: 'USD'
    },
    {
      name: 'Hyperledger Fabric Developer Certification',
      provider: 'Linux Foundation',
      type: 'paid',
      duration: '3 months',
      difficulty: 'advanced',
      url: 'https://training.linuxfoundation.org/certification/hyperledger-fabric-developer/',
      description: 'Master enterprise blockchain development with Hyperledger Fabric',
      price: '$400',
      currency: 'USD'
    },
    {
      name: 'Blockchain Fundamentals Certificate',
      provider: 'IBM',
      type: 'free',
      duration: '2 months',
      difficulty: 'beginner',
      url: 'https://www.coursera.org/learn/ibm-blockchain-essentials',
      description: 'Learn blockchain basics and IBM Blockchain platform',
      price: 'Free',
      currency: 'USD'
    }
  ],
  
  web3: [
    {
      name: 'Web3 Developer Certification',
      provider: 'Alchemy University',
      type: 'free',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://university.alchemy.com/',
      description: 'Learn Web3 development with Ethereum, smart contracts, and dApps',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'DeFi Protocol Development',
      provider: 'Chainlink',
      type: 'paid',
      duration: '2 months',
      difficulty: 'advanced',
      url: 'https://chain.link/education',
      description: 'Master DeFi protocols, oracles, and decentralized applications',
      price: '$300',
      currency: 'USD'
    },
    {
      name: 'NFT Development Certification',
      provider: 'OpenSea',
      type: 'paid',
      duration: '1 month',
      difficulty: 'intermediate',
      url: 'https://opensea.io/learn',
      description: 'Learn to create and deploy NFT collections and marketplaces',
      price: '$200',
      currency: 'USD'
    },
    {
      name: 'Web3 Security Certification',
      provider: 'CertiK',
      type: 'paid',
      duration: '2 months',
      difficulty: 'advanced',
      url: 'https://www.certik.com/',
      description: 'Master Web3 security, smart contract auditing, and vulnerability assessment',
      price: '$400',
      currency: 'USD'
    }
  ],
  
  computervision: [
    {
      name: 'Computer Vision Specialization',
      provider: 'DeepLearning.AI',
      type: 'paid',
      duration: '4 months',
      difficulty: 'intermediate',
      url: 'https://www.coursera.org/specializations/computer-vision',
      description: 'Master computer vision with CNNs, object detection, and image processing',
      price: '$49/month',
      currency: 'USD'
    },
    {
      name: 'OpenCV Developer Certification',
      provider: 'OpenCV',
      type: 'paid',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://opencv.org/certification/',
      description: 'Learn computer vision with OpenCV library and Python',
      price: '$150',
      currency: 'USD'
    },
    {
      name: 'TensorFlow Computer Vision Certificate',
      provider: 'TensorFlow',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://www.tensorflow.org/certificate',
      description: 'Build computer vision models with TensorFlow and Keras',
      price: '$100',
      currency: 'USD'
    },
    {
      name: 'YOLO Object Detection Certification',
      provider: 'Ultralytics',
      type: 'free',
      duration: '1 month',
      difficulty: 'intermediate',
      url: 'https://ultralytics.com/',
      description: 'Master real-time object detection with YOLO models',
      price: 'Free',
      currency: 'USD'
    }
  ],
  
  nlpengineer: [
    {
      name: 'Natural Language Processing Specialization',
      provider: 'DeepLearning.AI',
      type: 'paid',
      duration: '4 months',
      difficulty: 'intermediate',
      url: 'https://www.coursera.org/specializations/natural-language-processing',
      description: 'Master NLP with transformers, BERT, and language models',
      price: '$49/month',
      currency: 'USD'
    },
    {
      name: 'Hugging Face NLP Certification',
      provider: 'Hugging Face',
      type: 'free',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://huggingface.co/course',
      description: 'Learn NLP with transformers and Hugging Face libraries',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'SpaCy NLP Developer Certification',
      provider: 'Explosion AI',
      type: 'paid',
      duration: '1 month',
      difficulty: 'intermediate',
      url: 'https://spacy.io/',
      description: 'Master industrial-strength NLP with SpaCy library',
      price: '$100',
      currency: 'USD'
    },
    {
      name: 'NLTK Natural Language Processing',
      provider: 'NLTK',
      type: 'free',
      duration: '2 months',
      difficulty: 'beginner',
      url: 'https://www.nltk.org/',
      description: 'Learn NLP fundamentals with NLTK and Python',
      price: 'Free',
      currency: 'USD'
    }
  ],
  
  datavisualization: [
    {
      name: 'Tableau Desktop Specialist',
      provider: 'Tableau',
      type: 'paid',
      duration: '2 months',
      difficulty: 'beginner',
      url: 'https://www.tableau.com/learn/certification/desktop-specialist',
      description: 'Master data visualization with Tableau Desktop',
      price: '$100',
      currency: 'USD'
    },
    {
      name: 'Power BI Data Analyst Associate',
      provider: 'Microsoft',
      type: 'paid',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://docs.microsoft.com/en-us/learn/certifications/power-bi-data-analyst-associate/',
      description: 'Create compelling data visualizations with Power BI',
      price: '$165',
      currency: 'USD'
    },
    {
      name: 'D3.js Data Visualization Certification',
      provider: 'D3.js',
      type: 'free',
      duration: '3 months',
      difficulty: 'advanced',
      url: 'https://d3js.org/',
      description: 'Master interactive data visualizations with D3.js',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'Python Data Visualization with Matplotlib',
      provider: 'Matplotlib',
      type: 'free',
      duration: '1 month',
      difficulty: 'intermediate',
      url: 'https://matplotlib.org/',
      description: 'Create publication-quality plots with Matplotlib and Seaborn',
      price: 'Free',
      currency: 'USD'
    }
  ],
  
  // Management & Leadership
  productmanager: [
    {
      name: 'Google Product Management Certificate',
      provider: 'Google',
      type: 'paid',
      duration: '6 months',
      difficulty: 'intermediate',
      url: 'https://www.coursera.org/professional-certificates/google-project-management',
      description: 'Master product management fundamentals and Google\'s approach to product development',
      price: '$39/month',
      currency: 'USD'
    },
    {
      name: 'Certified Scrum Product Owner (CSPO)',
      provider: 'Scrum Alliance',
      type: 'paid',
      duration: '2 days',
      difficulty: 'intermediate',
      url: 'https://www.scrumalliance.org/get-certified/product-owner-track/certified-scrum-product-owner',
      description: 'Learn agile product ownership and Scrum framework',
      price: '$1,295',
      currency: 'USD'
    },
    {
      name: 'Product Management Certificate',
      provider: 'Product School',
      type: 'paid',
      duration: '8 weeks',
      difficulty: 'intermediate',
      url: 'https://productschool.com/courses/product-management-certificate',
      description: 'Comprehensive product management training with real-world projects',
      price: '$4,199',
      currency: 'USD'
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      provider: 'Amazon Web Services',
      type: 'paid',
      duration: '1 month',
      difficulty: 'beginner',
      url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
      description: 'Understand cloud computing fundamentals for product managers',
      price: '$100',
      currency: 'USD'
    }
  ],
  
  techmanager: [
    {
      name: 'Google IT Support Certificate',
      provider: 'Google',
      type: 'paid',
      duration: '6 months',
      difficulty: 'beginner',
      url: 'https://www.coursera.org/professional-certificates/google-it-support',
      description: 'Learn IT fundamentals and technical management basics',
      price: '$39/month',
      currency: 'USD'
    },
    {
      name: 'Certified ScrumMaster (CSM)',
      provider: 'Scrum Alliance',
      type: 'paid',
      duration: '2 days',
      difficulty: 'intermediate',
      url: 'https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster',
      description: 'Master agile project management and team leadership',
      price: '$1,295',
      currency: 'USD'
    },
    {
      name: 'Project Management Professional (PMP)',
      provider: 'Project Management Institute',
      type: 'paid',
      duration: '3 months',
      difficulty: 'advanced',
      url: 'https://www.pmi.org/certifications/project-management-pmp',
      description: 'Gold standard for project management certification',
      price: '$405',
      currency: 'USD'
    },
    {
      name: 'ITIL 4 Foundation',
      provider: 'AXELOS',
      type: 'paid',
      duration: '2 weeks',
      difficulty: 'intermediate',
      url: 'https://www.axelos.com/certifications/itil-service-management/itil-4-foundation',
      description: 'Learn IT service management best practices',
      price: '$363',
      currency: 'USD'
    }
  ],
  
  cto: [
    {
      name: 'Executive MBA in Technology Management',
      provider: 'Wharton School',
      type: 'paid',
      duration: '2 years',
      difficulty: 'advanced',
      url: 'https://executive.wharton.upenn.edu/',
      description: 'Advanced leadership program for technology executives',
      price: '$210,000',
      currency: 'USD'
    },
    {
      name: 'MIT Sloan Executive Certificate',
      provider: 'MIT Sloan',
      type: 'paid',
      duration: '1 year',
      difficulty: 'advanced',
      url: 'https://executive.mit.edu/',
      description: 'Strategic technology leadership and innovation management',
      price: '$15,000',
      currency: 'USD'
    },
    {
      name: 'Stanford Executive Program',
      provider: 'Stanford Graduate School of Business',
      type: 'paid',
      duration: '6 weeks',
      difficulty: 'advanced',
      url: 'https://www.gsb.stanford.edu/exec-ed/programs/stanford-executive-program',
      description: 'Leadership development for senior technology executives',
      price: '$75,000',
      currency: 'USD'
    },
    {
      name: 'AWS Certified Solutions Architect - Professional',
      provider: 'Amazon Web Services',
      type: 'paid',
      duration: '6 months',
      difficulty: 'advanced',
      url: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/',
      description: 'Expert-level cloud architecture for technology leaders',
      price: '$300',
      currency: 'USD'
    }
  ],
  
  technicalwriter: [
    {
      name: 'Certified Professional Technical Communicator (CPTC)',
      provider: 'Society for Technical Communication',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://www.stc.org/certification/',
      description: 'Professional certification for technical writers and communicators',
      price: '$450',
      currency: 'USD'
    },
    {
      name: 'Google Technical Writing Certificate',
      provider: 'Google',
      type: 'free',
      duration: '2 months',
      difficulty: 'beginner',
      url: 'https://developers.google.com/tech-writing',
      description: 'Learn technical writing best practices from Google',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'API Documentation Certification',
      provider: 'Postman',
      type: 'free',
      duration: '1 month',
      difficulty: 'intermediate',
      url: 'https://learning.postman.com/docs/',
      description: 'Master API documentation and developer experience',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'GitBook Documentation Certification',
      provider: 'GitBook',
      type: 'paid',
      duration: '2 weeks',
      difficulty: 'beginner',
      url: 'https://www.gitbook.com/',
      description: 'Learn modern documentation tools and collaboration',
      price: '$50',
      currency: 'USD'
    }
  ],
  
  uidesigner: [
    {
      name: 'Google UX Design Certificate',
      provider: 'Google',
      type: 'paid',
      duration: '6 months',
      difficulty: 'beginner',
      url: 'https://www.coursera.org/professional-certificates/google-ux-design',
      description: 'Master user experience design and research',
      price: '$39/month',
      currency: 'USD'
    },
    {
      name: 'Adobe Certified Expert (ACE)',
      provider: 'Adobe',
      type: 'paid',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://www.adobe.com/certification.html',
      description: 'Master Adobe Creative Suite for UI/UX design',
      price: '$180',
      currency: 'USD'
    },
    {
      name: 'Figma Design Certification',
      provider: 'Figma',
      type: 'free',
      duration: '1 month',
      difficulty: 'beginner',
      url: 'https://www.figma.com/education/',
      description: 'Learn collaborative design with Figma',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'Interaction Design Foundation Certificate',
      provider: 'IDF',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://www.interaction-design.org/',
      description: 'Comprehensive UX/UI design education',
      price: '$16/month',
      currency: 'USD'
    }
  ],
  
  // Emerging Technologies
  aiops: [
    {
      name: 'AIOps Foundation Certification',
      provider: 'CloudOps Academy',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://cloudopsacademy.com/aiops-certification/',
      description: 'Master AI-powered IT operations and intelligent automation',
      price: '$299',
      currency: 'USD'
    },
    {
      name: 'Machine Learning Operations (MLOps) Certificate',
      provider: 'DeepLearning.AI',
      type: 'paid',
      duration: '4 months',
      difficulty: 'intermediate',
      url: 'https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops',
      description: 'Learn MLOps practices for production ML systems',
      price: '$49/month',
      currency: 'USD'
    },
    {
      name: 'Splunk AIOps Certification',
      provider: 'Splunk',
      type: 'paid',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://www.splunk.com/en_us/training/certification-track/aiops.html',
      description: 'Master AI-powered observability and incident response',
      price: '$200',
      currency: 'USD'
    },
    {
      name: 'DataRobot AIOps Specialist',
      provider: 'DataRobot',
      type: 'paid',
      duration: '1 month',
      difficulty: 'intermediate',
      url: 'https://www.datarobot.com/',
      description: 'Learn automated machine learning for IT operations',
      price: '$150',
      currency: 'USD'
    }
  ],
  
  quantumcomputing: [
    {
      name: 'IBM Quantum Developer Certification',
      provider: 'IBM',
      type: 'free',
      duration: '3 months',
      difficulty: 'advanced',
      url: 'https://www.ibm.com/quantum/learn',
      description: 'Learn quantum computing with IBM Qiskit framework',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'Google Quantum Computing Certificate',
      provider: 'Google',
      type: 'free',
      duration: '2 months',
      difficulty: 'advanced',
      url: 'https://quantum.google/',
      description: 'Master quantum algorithms and Google Cirq framework',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'Microsoft Quantum Development Kit Certification',
      provider: 'Microsoft',
      type: 'free',
      duration: '2 months',
      difficulty: 'advanced',
      url: 'https://azure.microsoft.com/en-us/resources/development-kit/quantum-computing/',
      description: 'Learn quantum programming with Q# and Azure Quantum',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'Quantum Computing Specialization',
      provider: 'University of Maryland',
      type: 'paid',
      duration: '4 months',
      difficulty: 'advanced',
      url: 'https://www.coursera.org/specializations/quantum-computing',
      description: 'Comprehensive quantum computing course from UMD',
      price: '$49/month',
      currency: 'USD'
    }
  ],
  
  fintech: [
    {
      name: 'FinTech Professional Certificate',
      provider: 'University of Pennsylvania',
      type: 'paid',
      duration: '6 months',
      difficulty: 'intermediate',
      url: 'https://www.coursera.org/specializations/fintech',
      description: 'Learn financial technology and digital banking',
      price: '$49/month',
      currency: 'USD'
    },
    {
      name: 'Blockchain for Business Certificate',
      provider: 'Linux Foundation',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://training.linuxfoundation.org/certification/blockchain-for-business/',
      description: 'Master blockchain applications in financial services',
      price: '$400',
      currency: 'USD'
    },
    {
      name: 'Digital Banking Certification',
      provider: 'American Bankers Association',
      type: 'paid',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://www.aba.com/training-events/certifications',
      description: 'Learn digital banking technologies and regulations',
      price: '$500',
      currency: 'USD'
    },
    {
      name: 'Cryptocurrency and DeFi Certificate',
      provider: 'Coinbase',
      type: 'free',
      duration: '1 month',
      difficulty: 'beginner',
      url: 'https://www.coinbase.com/learn',
      description: 'Understand cryptocurrency and decentralized finance',
      price: 'Free',
      currency: 'USD'
    }
  ],
  
  healthcare: [
    {
      name: 'Healthcare Data Analytics Certificate',
      provider: 'Johns Hopkins University',
      type: 'paid',
      duration: '4 months',
      difficulty: 'intermediate',
      url: 'https://www.coursera.org/specializations/healthcare-data-analytics',
      description: 'Learn healthcare data analysis and health informatics',
      price: '$49/month',
      currency: 'USD'
    },
    {
      name: 'Medical AI and Machine Learning',
      provider: 'Stanford University',
      type: 'paid',
      duration: '3 months',
      difficulty: 'advanced',
      url: 'https://www.coursera.org/learn/machine-learning-medicine',
      description: 'Apply AI and ML to medical diagnosis and treatment',
      price: '$49/month',
      currency: 'USD'
    },
    {
      name: 'Health Information Technology Certificate',
      provider: 'American Health Information Management Association',
      type: 'paid',
      duration: '6 months',
      difficulty: 'intermediate',
      url: 'https://www.ahima.org/certification/',
      description: 'Master health IT systems and electronic health records',
      price: '$300',
      currency: 'USD'
    },
    {
      name: 'Digital Health Innovation Certificate',
      provider: 'MIT',
      type: 'paid',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://executive.mit.edu/course-catalog/digital-health-innovation',
      description: 'Learn digital health technologies and telemedicine',
      price: '$2,500',
      currency: 'USD'
    }
  ],
  
  gaming: [
    {
      name: 'Unity Certified Developer',
      provider: 'Unity Technologies',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://certification.unity.com/',
      description: 'Master Unity game development and C# programming',
      price: '$150',
      currency: 'USD'
    },
    {
      name: 'Unreal Engine Developer Certification',
      provider: 'Epic Games',
      type: 'free',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://www.unrealengine.com/en-US/onlinelearning-courses',
      description: 'Learn Unreal Engine 5 and game development',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'Game Design Certificate',
      provider: 'California Institute of the Arts',
      type: 'paid',
      duration: '4 months',
      difficulty: 'intermediate',
      url: 'https://www.coursera.org/specializations/game-design',
      description: 'Learn game design principles and mechanics',
      price: '$49/month',
      currency: 'USD'
    },
    {
      name: 'Mobile Game Development Certificate',
      provider: 'Google',
      type: 'free',
      duration: '2 months',
      difficulty: 'beginner',
      url: 'https://developers.google.com/games',
      description: 'Build mobile games with Google Play Games Services',
      price: 'Free',
      currency: 'USD'
    }
  ],
  
  // Final Remaining Roles
  cloudengineer: [
    {
      name: 'AWS Certified Solutions Architect - Associate',
      provider: 'Amazon Web Services',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
      description: 'Design distributed systems on AWS platform',
      price: '$150',
      currency: 'USD'
    },
    {
      name: 'Google Cloud Professional Cloud Architect',
      provider: 'Google',
      type: 'paid',
      duration: '4 months',
      difficulty: 'intermediate',
      url: 'https://cloud.google.com/certification/cloud-architect',
      description: 'Design and manage Google Cloud solutions',
      price: '$200',
      currency: 'USD'
    },
    {
      name: 'Microsoft Azure Solutions Architect Expert',
      provider: 'Microsoft',
      type: 'paid',
      duration: '4 months',
      difficulty: 'advanced',
      url: 'https://docs.microsoft.com/en-us/learn/certifications/azure-solutions-architect/',
      description: 'Expert-level Azure architecture certification',
      price: '$165',
      currency: 'USD'
    },
    {
      name: 'Kubernetes Administrator (CKA)',
      provider: 'Cloud Native Computing Foundation',
      type: 'paid',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://www.cncf.io/certification/cka/',
      description: 'Master Kubernetes cluster administration',
      price: '$395',
      currency: 'USD'
    }
  ],
  
  systemprogrammer: [
    {
      name: 'Linux System Administration Certificate',
      provider: 'Red Hat',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://www.redhat.com/en/services/certification/rhcsa',
      description: 'Master Linux system administration and shell scripting',
      price: '$400',
      currency: 'USD'
    },
    {
      name: 'C Programming Language Certification',
      provider: 'C Programming Institute',
      type: 'paid',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://www.cprogramming.com/',
      description: 'Master C programming for system-level development',
      price: '$150',
      currency: 'USD'
    },
    {
      name: 'Assembly Language Programming',
      provider: 'Intel',
      type: 'free',
      duration: '1 month',
      difficulty: 'advanced',
      url: 'https://software.intel.com/content/www/us/en/develop/tools/software-development-tools.html',
      description: 'Learn x86-64 assembly language programming',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'Operating Systems Design Certificate',
      provider: 'MIT OpenCourseWare',
      type: 'free',
      duration: '3 months',
      difficulty: 'advanced',
      url: 'https://ocw.mit.edu/courses/6-828-operating-system-engineering-fall-2012/',
      description: 'Learn operating system design and implementation',
      price: 'Free',
      currency: 'USD'
    }
  ],
  
  compilerengineer: [
    {
      name: 'Compiler Design Certificate',
      provider: 'Stanford University',
      type: 'free',
      duration: '3 months',
      difficulty: 'advanced',
      url: 'https://www.coursera.org/learn/compilers',
      description: 'Learn compiler design and implementation',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'LLVM Framework Certification',
      provider: 'LLVM Foundation',
      type: 'free',
      duration: '2 months',
      difficulty: 'advanced',
      url: 'https://llvm.org/',
      description: 'Master LLVM compiler infrastructure',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'GCC Compiler Development',
      provider: 'GNU Project',
      type: 'free',
      duration: '2 months',
      difficulty: 'advanced',
      url: 'https://gcc.gnu.org/',
      description: 'Learn GCC compiler development and optimization',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'Programming Language Theory',
      provider: 'University of Washington',
      type: 'paid',
      duration: '4 months',
      difficulty: 'advanced',
      url: 'https://www.coursera.org/learn/programming-languages',
      description: 'Learn programming language design and semantics',
      price: '$49/month',
      currency: 'USD'
    }
  ],
  
  databaseadmin: [
    {
      name: 'Oracle Database Administrator Certified Associate',
      provider: 'Oracle',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://education.oracle.com/oracle-database-administrator-certified-associate/trackp_457',
      description: 'Master Oracle database administration',
      price: '$245',
      currency: 'USD'
    },
    {
      name: 'Microsoft SQL Server Database Administrator',
      provider: 'Microsoft',
      type: 'paid',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://docs.microsoft.com/en-us/learn/certifications/azure-database-administrator-associate/',
      description: 'Learn SQL Server and Azure SQL administration',
      price: '$165',
      currency: 'USD'
    },
    {
      name: 'MongoDB Database Administrator',
      provider: 'MongoDB',
      type: 'paid',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://university.mongodb.com/certification',
      description: 'Master MongoDB database administration',
      price: '$150',
      currency: 'USD'
    },
    {
      name: 'PostgreSQL Administration Certificate',
      provider: 'PostgreSQL',
      type: 'free',
      duration: '1 month',
      difficulty: 'intermediate',
      url: 'https://www.postgresql.org/docs/',
      description: 'Learn PostgreSQL database administration',
      price: 'Free',
      currency: 'USD'
    }
  ],
  
  edutech: [
    {
      name: 'Educational Technology Certificate',
      provider: 'MIT',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://executive.mit.edu/course-catalog/educational-technology',
      description: 'Learn educational technology and digital learning',
      price: '$2,500',
      currency: 'USD'
    },
    {
      name: 'Learning Management System Administration',
      provider: 'Moodle',
      type: 'free',
      duration: '2 months',
      difficulty: 'beginner',
      url: 'https://moodle.org/',
      description: 'Master Moodle LMS administration and customization',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'Canvas LMS Certification',
      provider: 'Instructure',
      type: 'paid',
      duration: '1 month',
      difficulty: 'beginner',
      url: 'https://community.canvaslms.com/t5/Canvas-Certification/ct-p/canvas-certification',
      description: 'Learn Canvas learning management system',
      price: '$100',
      currency: 'USD'
    },
    {
      name: 'EdTech Innovation Certificate',
      provider: 'Stanford Graduate School of Education',
      type: 'paid',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://ed.stanford.edu/',
      description: 'Learn educational technology innovation and design',
      price: '$1,500',
      currency: 'USD'
    }
  ],
  
  game: [
    {
      name: 'Game Development Certificate',
      provider: 'Unity Technologies',
      type: 'paid',
      duration: '3 months',
      difficulty: 'intermediate',
      url: 'https://certification.unity.com/',
      description: 'Master Unity game development and C# programming',
      price: '$150',
      currency: 'USD'
    },
    {
      name: 'Unreal Engine Game Development',
      provider: 'Epic Games',
      type: 'free',
      duration: '2 months',
      difficulty: 'intermediate',
      url: 'https://www.unrealengine.com/en-US/onlinelearning-courses',
      description: 'Learn Unreal Engine 5 and game development',
      price: 'Free',
      currency: 'USD'
    },
    {
      name: 'Game Design Certificate',
      provider: 'California Institute of the Arts',
      type: 'paid',
      duration: '4 months',
      difficulty: 'intermediate',
      url: 'https://www.coursera.org/specializations/game-design',
      description: 'Learn game design principles and mechanics',
      price: '$49/month',
      currency: 'USD'
    },
    {
      name: 'Mobile Game Development',
      provider: 'Google',
      type: 'free',
      duration: '2 months',
      difficulty: 'beginner',
      url: 'https://developers.google.com/games',
      description: 'Build mobile games with Google Play Games Services',
      price: 'Free',
      currency: 'USD'
    }
  ]
}

// Top-rated YouTube playlists for different skill categories
export const youtubePlaylists: { [key: string]: YouTubePlaylist[] } = {
  frontend: [
    {
      title: 'Complete Web Development Course',
      channel: 'CodeWithHarry',
      videos: 200,
      duration: '50+ hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg',
      description: 'Complete web development course in Hindi covering HTML, CSS, JavaScript, and more',
      rating: 4.8
    },
    {
      title: 'JavaScript Tutorial for Beginners',
      channel: 'Programming with Mosh',
      videos: 50,
      duration: '15 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax',
      description: 'Comprehensive JavaScript tutorial for beginners',
      rating: 4.9
    },
    {
      title: 'React JS Tutorial',
      channel: 'Thapa Technical',
      videos: 80,
      duration: '20 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ',
      description: 'Complete React.js tutorial in Hindi with practical projects',
      rating: 4.7
    },
    {
      title: 'CSS Grid & Flexbox Tutorial',
      channel: 'Traversy Media',
      videos: 25,
      duration: '8 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU',
      description: 'Learn modern CSS layout techniques with Grid and Flexbox',
      rating: 4.8
    },
    {
      title: 'Frontend Development Roadmap',
      channel: 'Apna College',
      videos: 100,
      duration: '30 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n',
      description: 'Complete frontend development roadmap in Hindi',
      rating: 4.6
    },
    {
      title: 'HTML & CSS Tutorial',
      channel: 'Thapa Technical',
      videos: 60,
      duration: '15 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ',
      description: 'Complete HTML and CSS tutorial in Hindi with practical projects',
      rating: 4.7
    },
    {
      title: 'React Tutorial for Beginners',
      channel: 'Programming with Mosh',
      videos: 40,
      duration: '12 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax',
      description: 'Learn React from scratch with practical examples',
      rating: 4.8
    },
    {
      title: 'TypeScript Tutorial',
      channel: 'CodeWithHarry',
      videos: 30,
      duration: '8 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg',
      description: 'Complete TypeScript tutorial in Hindi',
      rating: 4.6
    }
  ],
  backend: [
    {
      title: 'Node.js Tutorial for Beginners',
      channel: 'Programming with Mosh',
      videos: 35,
      duration: '10 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax',
      description: 'Complete Node.js tutorial for backend development',
      rating: 4.8
    },
    {
      title: 'Python Django Tutorial',
      channel: 'CodeWithHarry',
      videos: 45,
      duration: '12 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg',
      description: 'Complete Django web framework tutorial in Hindi',
      rating: 4.7
    },
    {
      title: 'Java Spring Boot Tutorial',
      channel: 'Thapa Technical',
      videos: 50,
      duration: '15 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ',
      description: 'Spring Boot framework tutorial in Hindi',
      rating: 4.6
    },
    {
      title: 'Database Design Tutorial',
      channel: 'Traversy Media',
      videos: 20,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU',
      description: 'Learn database design and SQL fundamentals',
      rating: 4.7
    }
  ],
  fullstack: [
    {
      title: 'Full Stack Web Development',
      channel: 'CodeWithHarry',
      videos: 150,
      duration: '40 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg',
      description: 'Complete full-stack development course in Hindi',
      rating: 4.8
    },
    {
      title: 'MERN Stack Tutorial',
      channel: 'Programming with Mosh',
      videos: 60,
      duration: '18 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax',
      description: 'Build full-stack applications with MERN stack',
      rating: 4.9
    },
    {
      title: 'Full Stack Development Roadmap',
      channel: 'Apna College',
      videos: 120,
      duration: '35 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n',
      description: 'Complete full-stack development roadmap in Hindi',
      rating: 4.7
    }
  ],
  mobile: [
    {
      title: 'Flutter Development Course',
      channel: 'CodeWithHarry',
      videos: 80,
      duration: '25 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg',
      description: 'Complete Flutter development course in Hindi',
      rating: 4.7
    },
    {
      title: 'React Native Tutorial',
      channel: 'Programming with Mosh',
      videos: 40,
      duration: '12 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax',
      description: 'Build cross-platform mobile apps with React Native',
      rating: 4.8
    },
    {
      title: 'Android Development Tutorial',
      channel: 'Thapa Technical',
      videos: 60,
      duration: '18 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ',
      description: 'Complete Android development tutorial in Hindi',
      rating: 4.6
    }
  ],
  ai_ml: [
    {
      title: 'Machine Learning Course',
      channel: 'CodeWithHarry',
      videos: 100,
      duration: '30 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg',
      description: 'Complete machine learning course in Hindi',
      rating: 4.8
    },
    {
      title: 'Python for Data Science',
      channel: 'Programming with Mosh',
      videos: 50,
      duration: '15 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax',
      description: 'Learn Python for data science and machine learning',
      rating: 4.9
    },
    {
      title: 'Deep Learning Tutorial',
      channel: 'Thapa Technical',
      videos: 40,
      duration: '12 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ',
      description: 'Deep learning and neural networks tutorial in Hindi',
      rating: 4.7
    }
  ],
  cybersecurity: [
    {
      title: 'Ethical Hacking Course',
      channel: 'CodeWithHarry',
      videos: 80,
      duration: '25 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg',
      description: 'Complete ethical hacking course in Hindi',
      rating: 4.7
    },
    {
      title: 'Cybersecurity Fundamentals',
      channel: 'Programming with Mosh',
      videos: 30,
      duration: '10 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax',
      description: 'Learn cybersecurity fundamentals and best practices',
      rating: 4.8
    }
  ],
  cloud: [
    {
      title: 'AWS Tutorial for Beginners',
      channel: 'CodeWithHarry',
      videos: 60,
      duration: '20 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg',
      description: 'Complete AWS tutorial in Hindi',
      rating: 4.8
    },
    {
      title: 'Google Cloud Platform Tutorial',
      channel: 'Programming with Mosh',
      videos: 35,
      duration: '12 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax',
      description: 'Learn Google Cloud Platform services and features',
      rating: 4.7
    },
    {
      title: 'Azure Fundamentals',
      channel: 'Thapa Technical',
      videos: 25,
      duration: '8 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ',
      description: 'Microsoft Azure fundamentals tutorial in Hindi',
      rating: 4.6
    }
  ],
  
  // Data Science & Analytics YouTube Playlists
  datascientist: [
    {
      title: 'Data Science Full Course',
      channel: 'edureka!',
      videos: 45,
      duration: '12 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PL9ooVrP1hQOHY-BeYrKHDrHKsJO8nvF0k',
      description: 'Complete data science tutorial with Python, statistics, and machine learning',
      rating: 4.8
    },
    {
      title: 'Data Science in Hindi',
      channel: 'CodeWithHarry',
      videos: 30,
      duration: '8 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agK8pojo23OHiNz3Jm6VQCH',
      description: 'Data science complete course in Hindi for Indian students',
      rating: 4.7
    },
    {
      title: 'Python for Data Science',
      channel: 'freeCodeCamp.org',
      videos: 25,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLWKjhJtqVAbnqBxcdjVGgT3uQR10LBLB5',
      description: 'Learn Python programming for data science and analysis',
      rating: 4.9
    }
  ],
  
  dataengineer: [
    {
      title: 'Data Engineering Course',
      channel: 'DataTalks.Club',
      videos: 20,
      duration: '10 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PL3MmuxUbc_hJed7dXYoJw8DoCuVHhGEQb',
      description: 'Complete data engineering course with Apache Airflow, Spark, and Kafka',
      rating: 4.8
    },
    {
      title: 'Big Data Engineering',
      channel: 'TechWorld with Nana',
      videos: 15,
      duration: '7 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLy7NrYWoggjwVr5ef2A5W4kqO2n6ZJf4N',
      description: 'Learn big data technologies and data pipeline engineering',
      rating: 4.7
    },
    {
      title: 'Apache Spark Tutorial',
      channel: 'Great Learning',
      videos: 18,
      duration: '5 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLlgLmuG_KgbaXMKJp5Qj4S6nF2p6ZfG3p',
      description: 'Master Apache Spark for big data processing and analytics',
      rating: 4.6
    }
  ],
  
  mle: [
    {
      title: 'Machine Learning Engineering',
      channel: 'Made With ML',
      videos: 22,
      duration: '8 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PL7_hX8nTp7V5n7u1EmL8Lm2H3uy3K6oJz',
      description: 'ML engineering best practices, MLOps, and model deployment',
      rating: 4.8
    },
    {
      title: 'MLOps Complete Course',
      channel: 'MLOps Community',
      videos: 16,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PL3MmuxUbc_hIUISrluw_A7wDSmfOhErJK',
      description: 'Learn MLOps, model deployment, and production ML systems',
      rating: 4.7
    },
    {
      title: 'Machine Learning in Production',
      channel: 'Chip Huyen',
      videos: 12,
      duration: '4 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PL1T8fO7ArWleyIqOy37OVXsP4hFXymdOZ',
      description: 'Building and deploying ML models in production environments',
      rating: 4.9
    }
  ],
  
  aispecialist: [
    {
      title: 'Artificial Intelligence Full Course',
      channel: 'edureka!',
      videos: 50,
      duration: '15 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PL9ooVrP1hQOGHNaCT7_Fwe5A58j6XUquL',
      description: 'Complete AI course covering machine learning, deep learning, and neural networks',
      rating: 4.8
    },
    {
      title: 'Deep Learning Specialization',
      channel: 'DeepLearningAI',
      videos: 40,
      duration: '12 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0',
      description: 'Andrew Ng\'s deep learning specialization course',
      rating: 4.9
    },
    {
      title: 'AI and Machine Learning',
      channel: 'CodeWithHarry',
      videos: 35,
      duration: '10 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9ai6fAMHp-acBmJONT7Y4BSG',
      description: 'AI and machine learning course in Hindi for Indian students',
      rating: 4.7
    }
  ],
  
  generativeai: [
    {
      title: 'Generative AI Course',
      channel: 'DeepLearningAI',
      videos: 15,
      duration: '5 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLkDaE6sCZn6F6wUI9tvS_Gw1vaFAx6rd6',
      description: 'Learn about generative AI, LLMs, and building AI applications',
      rating: 4.8
    },
    {
      title: 'Large Language Models',
      channel: 'Andrej Karpathy',
      videos: 8,
      duration: '3 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ',
      description: 'Understanding and building large language models from scratch',
      rating: 4.9
    },
    {
      title: 'OpenAI API Tutorial',
      channel: 'TechWorld with Nana',
      videos: 12,
      duration: '4 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLy7NrYWoggjwVr5ef2A5W4kqO2n6ZJf4N',
      description: 'Build applications using OpenAI API and ChatGPT',
      rating: 4.7
    }
  ],
  
  // DevOps & Infrastructure YouTube Playlists
  devops: [
    {
      title: 'DevOps Full Course',
      channel: 'edureka!',
      videos: 40,
      duration: '10 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PL9ooVrP1hQOGHNaCT7_Fwe5A58j6XUquL',
      description: 'Complete DevOps tutorial with Docker, Kubernetes, Jenkins, and CI/CD',
      rating: 4.8
    },
    {
      title: 'DevOps in Hindi',
      channel: 'CodeWithHarry',
      videos: 25,
      duration: '7 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agK8pojo23OHiNz3Jm6VQCH',
      description: 'DevOps complete course in Hindi for Indian students',
      rating: 4.7
    },
    {
      title: 'Docker and Kubernetes Tutorial',
      channel: 'TechWorld with Nana',
      videos: 20,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLy7NrYWoggjwVr5ef2A5W4kqO2n6ZJf4N',
      description: 'Master containerization with Docker and orchestration with Kubernetes',
      rating: 4.9
    }
  ],
  
  sre: [
    {
      title: 'Site Reliability Engineering (SRE)',
      channel: 'Google Cloud Tech',
      videos: 15,
      duration: '5 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLIivdWyY5sqL3xfXz5UmJfs5zAKzVtuI1',
      description: 'Learn SRE principles and practices from Google engineers',
      rating: 4.9
    },
    {
      title: 'Monitoring and Observability',
      channel: 'Grafana',
      videos: 12,
      duration: '4 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLDGkOdUX1Ujo3wH4-4EUb0QU7NR2cjgY9',
      description: 'Master monitoring, alerting, and observability with Prometheus and Grafana',
      rating: 4.8
    },
    {
      title: 'Incident Response and Postmortems',
      channel: 'PagerDuty',
      videos: 8,
      duration: '3 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLDGkOdUX1Ujo3wH4-4EUb0QU7NR2cjgY9',
      description: 'Learn incident management and post-incident analysis',
      rating: 4.7
    }
  ],
  
  qaengineer: [
    {
      title: 'Software Testing Full Course',
      channel: 'edureka!',
      videos: 35,
      duration: '9 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PL9ooVrP1hQOGHNaCT7_Fwe5A58j6XUquL',
      description: 'Complete software testing tutorial with manual and automation testing',
      rating: 4.8
    },
    {
      title: 'Selenium WebDriver Tutorial',
      channel: 'Automation Step by Step',
      videos: 30,
      duration: '8 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLhW3qG5bs-L8oRay6qeS70vJYZ3SBQnFa',
      description: 'Master automated testing with Selenium WebDriver and Java',
      rating: 4.9
    },
    {
      title: 'API Testing with Postman',
      channel: 'Test Automation University',
      videos: 18,
      duration: '5 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLhW3qG5bs-L8oRay6qeS70vJYZ3SBQnFa',
      description: 'Learn API testing, automation, and Postman collections',
      rating: 4.7
    }
  ],
  
  networkengineer: [
    {
      title: 'Cisco CCNA Complete Course',
      channel: 'NetworkChuck',
      videos: 25,
      duration: '12 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLIivdWyY5sqL3xfXz5UmJfs5zAKzVtuI1',
      description: 'Complete CCNA preparation with hands-on labs and real-world scenarios',
      rating: 4.9
    },
    {
      title: 'Network Fundamentals',
      channel: 'Professor Messer',
      videos: 20,
      duration: '8 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLG49S3nxzAnkL2ulFS3132mOVKuzzBxA8',
      description: 'Learn networking fundamentals and CompTIA Network+ concepts',
      rating: 4.8
    },
    {
      title: 'AWS Networking Deep Dive',
      channel: 'AWS',
      videos: 15,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLhr1KZpdzukcOr_6j_zmSrvYnLUtl_cb1',
      description: 'Master AWS networking services and advanced networking concepts',
      rating: 4.7
    }
  ],
  
  embeddedengineer: [
    {
      title: 'Embedded Systems Programming',
      channel: 'Fastbit Embedded Brain Academy',
      videos: 30,
      duration: '10 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PL6PplMTH29SHgRPDufZhfMRoFwRAIrzOP',
      description: 'Learn embedded C programming and microcontroller development',
      rating: 4.8
    },
    {
      title: 'Arduino Projects and Tutorials',
      channel: 'Paul McWhorter',
      videos: 40,
      duration: '15 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLGs0VKk2DiYw-L-RibttcvK-WBZm8WLEP',
      description: 'Build IoT projects and learn Arduino programming from basics to advanced',
      rating: 4.9
    },
    {
      title: 'ARM Cortex-M Programming',
      channel: 'Embedded Systems Academy',
      videos: 20,
      duration: '7 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PL6PplMTH29SHgRPDufZhfMRoFwRAIrzOP',
      description: 'Master ARM Cortex-M microcontroller programming and RTOS',
      rating: 4.7
    }
  ],
  
  // Specialized Tech YouTube Playlists
  blockchain: [
    {
      title: 'Blockchain Development Full Course',
      channel: 'Dapp University',
      videos: 30,
      duration: '8 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn blockchain development with Ethereum, Solidity, and smart contracts',
      rating: 4.8
    },
    {
      title: 'Ethereum Development Tutorial',
      channel: 'Moralis Web3',
      videos: 25,
      duration: '7 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Master Ethereum development and Web3 applications',
      rating: 4.9
    },
    {
      title: 'Blockchain in Hindi',
      channel: 'CodeWithHarry',
      videos: 20,
      duration: '6 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agK8pojo23OHiNz3Jm6VQCH',
      description: 'Blockchain development course in Hindi for Indian students',
      rating: 4.7
    }
  ],
  
  web3: [
    {
      title: 'Web3 Development Course',
      channel: 'Alchemy',
      videos: 20,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn Web3 development with React, Next.js, and smart contracts',
      rating: 4.8
    },
    {
      title: 'DeFi Development Tutorial',
      channel: 'Chainlink',
      videos: 15,
      duration: '5 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Build DeFi protocols and decentralized applications',
      rating: 4.9
    },
    {
      title: 'NFT Development Guide',
      channel: 'HashLips',
      videos: 12,
      duration: '4 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Create and deploy NFT collections and marketplaces',
      rating: 4.7
    }
  ],
  
  computervision: [
    {
      title: 'Computer Vision Full Course',
      channel: 'edureka!',
      videos: 35,
      duration: '10 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PL9ooVrP1hQOGHNaCT7_Fwe5A58j6XUquL',
      description: 'Complete computer vision tutorial with OpenCV, TensorFlow, and deep learning',
      rating: 4.8
    },
    {
      title: 'OpenCV Python Tutorial',
      channel: 'ProgrammingKnowledge',
      videos: 40,
      duration: '12 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLhTjy8cBISEqkN-5Ku_kXG4QW33sxQo0t',
      description: 'Master computer vision with OpenCV and Python',
      rating: 4.9
    },
    {
      title: 'YOLO Object Detection Tutorial',
      channel: 'Nicholas Renotte',
      videos: 15,
      duration: '4 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLhTjy8cBISEqkN-5Ku_kXG4QW33sxQo0t',
      description: 'Learn real-time object detection with YOLO models',
      rating: 4.7
    }
  ],
  
  nlpengineer: [
    {
      title: 'Natural Language Processing Course',
      channel: 'edureka!',
      videos: 30,
      duration: '9 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PL9ooVrP1hQOGHNaCT7_Fwe5A58j6XUquL',
      description: 'Complete NLP tutorial with NLTK, spaCy, and transformers',
      rating: 4.8
    },
    {
      title: 'Hugging Face Transformers Tutorial',
      channel: 'Hugging Face',
      videos: 20,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLo2EIpIjpJMJdWe5w_5xonBfZk8qa2fGF',
      description: 'Learn NLP with transformers and Hugging Face libraries',
      rating: 4.9
    },
    {
      title: 'NLP with Python',
      channel: 'CodeWithHarry',
      videos: 25,
      duration: '7 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agK8pojo23OHiNz3Jm6VQCH',
      description: 'Natural language processing course in Hindi for Indian students',
      rating: 4.7
    }
  ],
  
  datavisualization: [
    {
      title: 'Data Visualization with Python',
      channel: 'Corey Schafer',
      videos: 20,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTvipOqomVEeZ1HRrcEvtZB_',
      description: 'Master data visualization with Matplotlib, Seaborn, and Plotly',
      rating: 4.9
    },
    {
      title: 'Tableau Tutorial for Beginners',
      channel: 'Tableau',
      videos: 25,
      duration: '8 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn Tableau from basics to advanced data visualization',
      rating: 4.8
    },
    {
      title: 'D3.js Data Visualization',
      channel: 'Curran Kelleher',
      videos: 30,
      duration: '10 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Create interactive data visualizations with D3.js',
      rating: 4.7
    }
  ],
  
  // Management & Leadership YouTube Playlists
  productmanager: [
    {
      title: 'Product Management Full Course',
      channel: 'Product School',
      videos: 25,
      duration: '8 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Complete product management tutorial with real-world case studies',
      rating: 4.8
    },
    {
      title: 'Product Management in Hindi',
      channel: 'CodeWithHarry',
      videos: 20,
      duration: '6 hours',
      language: 'Hindi',
      targetAudience: 'Indian',
      url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agK8pojo23OHiNz3Jm6VQCH',
      description: 'Product management course in Hindi for Indian students',
      rating: 4.7
    },
    {
      title: 'Agile Product Management',
      channel: 'Atlassian',
      videos: 15,
      duration: '4 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn agile methodologies and product ownership',
      rating: 4.9
    }
  ],
  
  techmanager: [
    {
      title: 'Technical Management Course',
      channel: 'Google Cloud Tech',
      videos: 20,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLIivdWyY5sqL3xfXz5UmJfs5zAKzVtuI1',
      description: 'Learn technical leadership and team management',
      rating: 4.8
    },
    {
      title: 'Project Management Tutorial',
      channel: 'Project Management Videos',
      videos: 30,
      duration: '10 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Master project management methodologies and tools',
      rating: 4.7
    },
    {
      title: 'Scrum Master Training',
      channel: 'Scrum Alliance',
      videos: 18,
      duration: '5 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn Scrum framework and agile leadership',
      rating: 4.9
    }
  ],
  
  cto: [
    {
      title: 'CTO Leadership Course',
      channel: 'Harvard Business Review',
      videos: 12,
      duration: '4 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Strategic technology leadership and executive management',
      rating: 4.9
    },
    {
      title: 'Technology Strategy',
      channel: 'MIT OpenCourseWare',
      videos: 15,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn technology strategy and innovation management',
      rating: 4.8
    },
    {
      title: 'Executive Leadership',
      channel: 'Stanford Graduate School of Business',
      videos: 10,
      duration: '3 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Advanced leadership skills for technology executives',
      rating: 4.7
    }
  ],
  
  technicalwriter: [
    {
      title: 'Technical Writing Course',
      channel: 'Google Developers',
      videos: 20,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn technical writing best practices from Google',
      rating: 4.8
    },
    {
      title: 'API Documentation Tutorial',
      channel: 'Postman',
      videos: 15,
      duration: '4 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Master API documentation and developer experience',
      rating: 4.9
    },
    {
      title: 'Documentation Best Practices',
      channel: 'GitBook',
      videos: 12,
      duration: '3 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn modern documentation tools and collaboration',
      rating: 4.7
    }
  ],
  
  uidesigner: [
    {
      title: 'UI/UX Design Full Course',
      channel: 'DesignCourse',
      videos: 40,
      duration: '12 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PL0eyrZgxdwhwBQwL7FglP43F4B2y1R9Bo',
      description: 'Complete UI/UX design tutorial with Figma and Adobe XD',
      rating: 4.8
    },
    {
      title: 'Figma Tutorial for Beginners',
      channel: 'Figma',
      videos: 25,
      duration: '8 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn collaborative design with Figma from basics to advanced',
      rating: 4.9
    },
    {
      title: 'Adobe XD Tutorial',
      channel: 'Adobe Creative Cloud',
      videos: 20,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Master Adobe XD for UI/UX design and prototyping',
      rating: 4.7
    }
  ],
  
  // Emerging Technologies YouTube Playlists
  aiops: [
    {
      title: 'AIOps Complete Course',
      channel: 'Splunk',
      videos: 20,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn AI-powered IT operations and intelligent automation',
      rating: 4.8
    },
    {
      title: 'MLOps Engineering Course',
      channel: 'Made With ML',
      videos: 25,
      duration: '8 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PL7_hX8nTp7V5n7u1EmL8Lm2H3uy3K6oJz',
      description: 'Master machine learning operations and production systems',
      rating: 4.9
    },
    {
      title: 'DataRobot AIOps Tutorial',
      channel: 'DataRobot',
      videos: 15,
      duration: '4 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn automated ML for IT operations and monitoring',
      rating: 4.7
    }
  ],
  
  quantumcomputing: [
    {
      title: 'Quantum Computing Full Course',
      channel: 'IBM Quantum',
      videos: 30,
      duration: '10 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Complete quantum computing tutorial with IBM Qiskit',
      rating: 4.9
    },
    {
      title: 'Google Quantum AI Course',
      channel: 'Google Quantum AI',
      videos: 20,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn quantum algorithms and Google Cirq framework',
      rating: 4.8
    },
    {
      title: 'Microsoft Quantum Development',
      channel: 'Microsoft Developer',
      videos: 18,
      duration: '5 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Master quantum programming with Q# and Azure Quantum',
      rating: 4.7
    }
  ],
  
  fintech: [
    {
      title: 'FinTech Development Course',
      channel: 'FinTech Academy',
      videos: 25,
      duration: '8 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn financial technology and digital banking solutions',
      rating: 4.8
    },
    {
      title: 'Blockchain in Finance',
      channel: 'Coinbase',
      videos: 20,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Master blockchain applications in financial services',
      rating: 4.9
    },
    {
      title: 'DeFi Development Tutorial',
      channel: 'Chainlink',
      videos: 15,
      duration: '5 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Build decentralized finance protocols and applications',
      rating: 4.7
    }
  ],
  
  healthcare: [
    {
      title: 'Healthcare Technology Course',
      channel: 'Johns Hopkins Medicine',
      videos: 22,
      duration: '7 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn healthcare data analytics and health informatics',
      rating: 4.8
    },
    {
      title: 'Medical AI and Machine Learning',
      channel: 'Stanford Medicine',
      videos: 18,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Apply AI and ML to medical diagnosis and treatment',
      rating: 4.9
    },
    {
      title: 'Digital Health Innovation',
      channel: 'MIT OpenCourseWare',
      videos: 15,
      duration: '4 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn digital health technologies and telemedicine',
      rating: 4.7
    }
  ],
  
  gaming: [
    {
      title: 'Unity Game Development Course',
      channel: 'Unity',
      videos: 40,
      duration: '12 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Complete Unity game development tutorial with C#',
      rating: 4.8
    },
    {
      title: 'Unreal Engine 5 Tutorial',
      channel: 'Epic Games',
      videos: 30,
      duration: '10 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn Unreal Engine 5 and advanced game development',
      rating: 4.9
    },
    {
      title: 'Game Design Principles',
      channel: 'Game Maker\'s Toolkit',
      videos: 25,
      duration: '8 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Master game design principles and mechanics',
      rating: 4.7
    }
  ],
  
  // Final Remaining Roles YouTube Playlists
  cloudengineer: [
    {
      title: 'AWS Cloud Architecture Course',
      channel: 'AWS',
      videos: 25,
      duration: '8 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLhr1KZpdzukcOr_6j_zmSrvYnLUtl_cb1',
      description: 'Learn AWS cloud architecture and solutions design',
      rating: 4.8
    },
    {
      title: 'Google Cloud Platform Tutorial',
      channel: 'Google Cloud Tech',
      videos: 30,
      duration: '10 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLIivdWyY5sqL3xfXz5UmJfs5zAKzVtuI1',
      description: 'Master Google Cloud Platform services and architecture',
      rating: 4.9
    },
    {
      title: 'Azure Cloud Solutions',
      channel: 'Microsoft Azure',
      videos: 20,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn Microsoft Azure cloud architecture and services',
      rating: 4.7
    }
  ],
  
  systemprogrammer: [
    {
      title: 'Linux System Programming',
      channel: 'The Linux Foundation',
      videos: 25,
      duration: '8 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn Linux system programming and administration',
      rating: 4.8
    },
    {
      title: 'C Programming for Systems',
      channel: 'ProgrammingKnowledge',
      videos: 30,
      duration: '10 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLhTjy8cBISEqkN-5Ku_kXG4QW33sxQo0t',
      description: 'Master C programming for system-level development',
      rating: 4.9
    },
    {
      title: 'Operating Systems Course',
      channel: 'MIT OpenCourseWare',
      videos: 20,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn operating system design and implementation',
      rating: 4.7
    }
  ],
  
  compilerengineer: [
    {
      title: 'Compiler Design Course',
      channel: 'Stanford University',
      videos: 20,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn compiler design and implementation',
      rating: 4.8
    },
    {
      title: 'LLVM Tutorial Series',
      channel: 'LLVM Foundation',
      videos: 15,
      duration: '5 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Master LLVM compiler infrastructure',
      rating: 4.9
    },
    {
      title: 'Programming Language Theory',
      channel: 'University of Washington',
      videos: 18,
      duration: '4 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn programming language design and semantics',
      rating: 4.7
    }
  ],
  
  databaseadmin: [
    {
      title: 'Oracle Database Administration',
      channel: 'Oracle',
      videos: 25,
      duration: '8 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Master Oracle database administration',
      rating: 4.8
    },
    {
      title: 'SQL Server Administration',
      channel: 'Microsoft SQL Server',
      videos: 20,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn SQL Server and Azure SQL administration',
      rating: 4.9
    },
    {
      title: 'MongoDB Administration',
      channel: 'MongoDB',
      videos: 15,
      duration: '4 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Master MongoDB database administration',
      rating: 4.7
    }
  ],
  
  edutech: [
    {
      title: 'Educational Technology Course',
      channel: 'MIT OpenCourseWare',
      videos: 20,
      duration: '6 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn educational technology and digital learning',
      rating: 4.8
    },
    {
      title: 'Moodle LMS Tutorial',
      channel: 'Moodle',
      videos: 15,
      duration: '4 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Master Moodle LMS administration and customization',
      rating: 4.9
    },
    {
      title: 'Canvas LMS Training',
      channel: 'Instructure',
      videos: 12,
      duration: '3 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn Canvas learning management system',
      rating: 4.7
    }
  ],
  
  game: [
    {
      title: 'Unity Game Development Tutorial',
      channel: 'Unity',
      videos: 40,
      duration: '12 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Complete Unity game development tutorial with C#',
      rating: 4.8
    },
    {
      title: 'Unreal Engine 5 Course',
      channel: 'Epic Games',
      videos: 30,
      duration: '10 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Learn Unreal Engine 5 and advanced game development',
      rating: 4.9
    },
    {
      title: 'Game Design Fundamentals',
      channel: 'Game Maker\'s Toolkit',
      videos: 25,
      duration: '8 hours',
      language: 'English',
      targetAudience: 'International',
      url: 'https://www.youtube.com/playlist?list=PLFPZ8ai7J-iQ0dU0m5nm0uy8_6e6WO0SK',
      description: 'Master game design principles and mechanics',
      rating: 4.7
    }
  ]
}
