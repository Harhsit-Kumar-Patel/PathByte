export type RoadmapYearKey = '0-1' | '1-3' | '3-5' | '5+'

export interface RoadmapLearningResource {
  title: string
  url: string
  description: string
  stages: RoadmapYearKey[]
}

interface RoadmapResourceProfile {
  free: RoadmapLearningResource[]
  paid: RoadmapLearningResource[]
}

export const roleResourceProfileAliases: Record<string, string> = {
  frontend: 'frontend',
  fullstack: 'web',
  backend: 'backend',
  mobile: 'mobile',
  datascientist: 'data',
  dataengineer: 'data',
  datavisualization: 'visualization',
  mle: 'ai',
  aispecialist: 'ai',
  generativeai: 'genai',
  computervision: 'ai',
  nlpengineer: 'ai',
  quantumcomputing: 'ai',
  devops: 'cloudops',
  cloudengineer: 'cloudops',
  sre: 'cloudops',
  aiops: 'cloudops',
  uidesigner: 'design',
  productmanager: 'product',
  cybersecurity: 'security',
  qaengineer: 'qa',
  game: 'game',
  gaming: 'game',
  blockchain: 'blockchain',
  web3developer: 'blockchain',
  technicalwriter: 'writing',
  techmanager: 'leadership',
  cto: 'leadership',
  systemprogrammer: 'systems',
  compilerengineer: 'systems',
  embeddedengineer: 'systems',
  networkengineer: 'network',
  databaseadmin: 'database',
  fintech: 'fintech',
  healthcare: 'healthcare',
  edutech: 'edutech'
}

export const learningResourceProfiles: Record<string, RoadmapResourceProfile> = {
  frontend: {
    free: [
      { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/', description: 'Core HTML, CSS, JavaScript, and browser API reference.', stages: ['0-1'] },
      { title: 'React Documentation', url: 'https://react.dev/', description: 'Official React learning path for modern component patterns.', stages: ['1-3'] },
      { title: 'web.dev Learn Performance', url: 'https://web.dev/learn/performance/', description: 'Practical performance guidance for production frontends.', stages: ['3-5'] },
      { title: 'WAI-ARIA Authoring Practices', url: 'https://www.w3.org/WAI/ARIA/apg/', description: 'Accessibility guidance for advanced design systems.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Frontend Masters Learning Paths', url: 'https://frontendmasters.com/learn/', description: 'Structured deep dives for frontend engineers.', stages: ['0-1', '1-3'] },
      { title: 'Epic React', url: 'https://epicreact.dev/', description: 'Advanced React patterns, testing, and performance.', stages: ['1-3', '3-5'] },
      { title: 'Design Systems with React and Storybook', url: 'https://www.udemy.com/course/design-systems-with-react-storybook-figma/', description: 'Build reusable UI systems and frontend architecture skills.', stages: ['3-5'] },
      { title: 'O Reilly Frontend Architecture', url: 'https://www.oreilly.com/topics/web-development', description: 'Architecture, scaling, and staff-level frontend topics.', stages: ['5+'] }
    ]
  },
  web: {
    free: [
      { title: 'Full Stack Open', url: 'https://fullstackopen.com/en/', description: 'Modern full-stack curriculum covering React, Node.js, APIs, and deployment.', stages: ['0-1'] },
      { title: 'Node.js Learn', url: 'https://nodejs.org/en/learn', description: 'Official Node.js guides for backend fundamentals and production topics.', stages: ['1-3'] },
      { title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer', description: 'Reference for scaling full-stack systems and distributed design.', stages: ['3-5'] },
      { title: 'Martin Fowler Architecture', url: 'https://martinfowler.com/architecture/', description: 'Architecture essays for senior and staff-level engineering decisions.', stages: ['5+'] }
    ],
    paid: [
      { title: 'The Web Developer Bootcamp', url: 'https://www.udemy.com/course/the-web-developer-bootcamp/', description: 'Broad full-stack foundation with projects and deployment.', stages: ['0-1'] },
      { title: 'Meta Full-Stack Developer Certificate', url: 'https://www.coursera.org/professional-certificates/meta-full-stack-developer', description: 'Structured intermediate path across frontend and backend.', stages: ['1-3'] },
      { title: 'Educative System Design for Developers', url: 'https://www.educative.io/path/scalability-system-design', description: 'Practical system design for mid-level to senior full-stack engineers.', stages: ['3-5'] },
      { title: 'O Reilly Software Architecture', url: 'https://www.oreilly.com/topics/software-architecture', description: 'Architecture and technical leadership content for senior engineers.', stages: ['5+'] }
    ]
  },
  backend: {
    free: [
      { title: 'Node.js Learn', url: 'https://nodejs.org/en/learn', description: 'Official Node.js learning resources for backend fundamentals.', stages: ['0-1'] },
      { title: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/', description: 'Reference for data modeling, queries, and operational best practices.', stages: ['1-3'] },
      { title: 'Microservices.io', url: 'https://microservices.io/', description: 'Patterns and tradeoffs for distributed backend systems.', stages: ['3-5'] },
      { title: 'Google SRE Workbook', url: 'https://sre.google/workbook/table-of-contents/', description: 'Production reliability and service ownership guidance.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Complete Node.js Developer Course', url: 'https://www.udemy.com/course/the-complete-nodejs-developer-course-2/', description: 'Hands-on backend fundamentals with APIs and testing.', stages: ['0-1'] },
      { title: 'Backend Engineering on Educative', url: 'https://www.educative.io/courses/backend-engineering', description: 'Intermediate backend patterns, APIs, and scaling topics.', stages: ['1-3'] },
      { title: 'Grokking the System Design Interview', url: 'https://www.educative.io/courses/grokking-the-system-design-interview', description: 'Distributed systems and architecture for senior backend engineers.', stages: ['3-5'] },
      { title: 'O Reilly Designing Data Intensive Applications', url: 'https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/', description: 'Deep systems design reference for principal-level backend work.', stages: ['5+'] }
    ]
  },
  mobile: {
    free: [
      { title: 'Flutter Codelabs', url: 'https://docs.flutter.dev/codelabs', description: 'Official guided projects for cross-platform mobile development.', stages: ['0-1'] },
      { title: 'Android Developers Training', url: 'https://developer.android.com/courses', description: 'Official Android training for app architecture and Jetpack.', stages: ['1-3'] },
      { title: 'Apple Developer Tutorials', url: 'https://developer.apple.com/tutorials/', description: 'Official SwiftUI and iOS development tutorials.', stages: ['3-5'] },
      { title: 'Firebase at Scale', url: 'https://firebase.google.com/docs', description: 'Backend, analytics, and reliability guidance for large mobile apps.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Flutter Bootcamp with Dart', url: 'https://www.udemy.com/course/flutter-bootcamp-with-dart/', description: 'Project-based Flutter foundation for new mobile developers.', stages: ['0-1'] },
      { title: 'Meta Android Developer Certificate', url: 'https://www.coursera.org/professional-certificates/meta-android-developer', description: 'Intermediate Android path with production app patterns.', stages: ['1-3'] },
      { title: 'iOS and Swift Expert Track', url: 'https://www.udemy.com/topic/ios-development/', description: 'Advanced Swift, app architecture, and testing topics.', stages: ['3-5'] },
      { title: 'Mobile System Design', url: 'https://www.oreilly.com/topics/mobile-development', description: 'Scaling mobile platforms, release trains, and reliability.', stages: ['5+'] }
    ]
  },
  data: {
    free: [
      { title: 'Kaggle Learn', url: 'https://www.kaggle.com/learn', description: 'Hands-on data analysis, SQL, ML, and feature engineering practice.', stages: ['0-1'] },
      { title: 'Google Machine Learning Crash Course', url: 'https://developers.google.com/machine-learning/crash-course', description: 'Applied ML foundations and modeling intuition.', stages: ['1-3'] },
      { title: 'dbt Learn', url: 'https://docs.getdbt.com/docs/introduction', description: 'Analytics engineering and transformation workflow guidance.', stages: ['3-5'] },
      { title: 'Apache Spark Documentation', url: 'https://spark.apache.org/docs/latest/', description: 'Large-scale data processing reference for senior data roles.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Google Data Analytics Certificate', url: 'https://www.coursera.org/professional-certificates/google-data-analytics', description: 'Solid foundation for analytics, SQL, and visualization.', stages: ['0-1'] },
      { title: 'IBM Data Science Professional Certificate', url: 'https://www.coursera.org/professional-certificates/ibm-data-science', description: 'Intermediate data science projects and tooling.', stages: ['1-3'] },
      { title: 'Data Engineering Zoomcamp', url: 'https://www.deeplearning.ai/short-courses/', description: 'Applied data engineering workflows and production pipelines.', stages: ['3-5'] },
      { title: 'O Reilly Data Engineering', url: 'https://www.oreilly.com/topics/data', description: 'Architecture, warehousing, and platform design for senior practitioners.', stages: ['5+'] }
    ]
  },
  ai: {
    free: [
      { title: 'Google Machine Learning Crash Course', url: 'https://developers.google.com/machine-learning/crash-course', description: 'Practical ML foundations and model intuition.', stages: ['0-1'] },
      { title: 'Hugging Face Course', url: 'https://huggingface.co/course', description: 'Transformers, fine-tuning, and applied NLP/LLM workflows.', stages: ['1-3'] },
      { title: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/', description: 'Production-ready deep learning and research workflows.', stages: ['3-5'] },
      { title: 'DeepMind x UCL Advanced Deep Learning Lectures', url: 'https://deepmind.google/discover/blog/advanced-deep-learning-lecture-series-2021/', description: 'Advanced deep learning and research-oriented material.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Deep Learning Specialization', url: 'https://www.coursera.org/specializations/deep-learning', description: 'Strong foundation in deep learning concepts and practice.', stages: ['0-1', '1-3'] },
      { title: 'Generative AI with Large Language Models', url: 'https://www.coursera.org/learn/generative-ai-with-llms', description: 'Intermediate path for shipping LLM-powered systems.', stages: ['1-3', '3-5'] },
      { title: 'Full Stack Deep Learning', url: 'https://fullstackdeeplearning.com/', description: 'Applied training for building production ML and AI systems.', stages: ['3-5'] },
      { title: 'MLOps Specialization', url: 'https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops', description: 'Senior-level path for deploying and operating ML systems.', stages: ['5+'] }
    ]
  },
  genai: {
    free: [
      { title: 'OpenAI Platform Docs', url: 'https://platform.openai.com/docs', description: 'Official guides for prompts, tools, and API-powered applications.', stages: ['0-1', '1-3'] },
      { title: 'Hugging Face Course', url: 'https://huggingface.co/course', description: 'Transformers, tokenization, and fine-tuning fundamentals.', stages: ['1-3'] },
      { title: 'LangChain Docs', url: 'https://python.langchain.com/docs/introduction/', description: 'Patterns for chaining, retrieval, and agentic workflows.', stages: ['3-5'] },
      { title: 'LlamaIndex Docs', url: 'https://docs.llamaindex.ai/', description: 'Advanced retrieval, indexing, and production RAG system design.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Generative AI with LLMs', url: 'https://www.coursera.org/learn/generative-ai-with-llms', description: 'Structured genAI course for practical application building.', stages: ['0-1', '1-3'] },
      { title: 'Building Systems with the ChatGPT API', url: 'https://www.deeplearning.ai/short-courses/', description: 'Applied prompting and orchestration patterns.', stages: ['1-3'] },
      { title: 'LangChain for LLM Application Development', url: 'https://www.deeplearning.ai/short-courses/', description: 'Intermediate orchestration and workflow design for LLM apps.', stages: ['3-5'] },
      { title: 'LLMOps and Production GenAI', url: 'https://www.oreilly.com/topics/artificial-intelligence', description: 'Senior-level guidance for evals, safety, observability, and scale.', stages: ['5+'] }
    ]
  },
  design: {
    free: [
      { title: 'Figma Learn', url: 'https://help.figma.com/hc/en-us/categories/360002051613', description: 'Official Figma tutorials for interface design workflows.', stages: ['0-1'] },
      { title: 'Laws of UX', url: 'https://lawsofux.com/', description: 'Readable UX principles for product and interaction design.', stages: ['1-3'] },
      { title: 'Material Design', url: 'https://m3.material.io/', description: 'Design systems, accessibility, and interaction guidance.', stages: ['3-5'] },
      { title: 'Nielsen Norman Group Articles', url: 'https://www.nngroup.com/articles/', description: 'Research-driven guidance for advanced design leadership.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Google UX Design Certificate', url: 'https://www.coursera.org/professional-certificates/google-ux-design', description: 'Beginner-friendly UX workflow and portfolio building.', stages: ['0-1'] },
      { title: 'Interaction Design Foundation Courses', url: 'https://www.interaction-design.org/courses', description: 'Intermediate research, IA, and accessibility coursework.', stages: ['1-3'] },
      { title: 'Design Systems with Figma', url: 'https://www.udemy.com/topic/figma/', description: 'Build scalable design systems and UI libraries.', stages: ['3-5'] },
      { title: 'NN g UX Certification', url: 'https://www.nngroup.com/ux-certification/', description: 'Advanced UX and design strategy training.', stages: ['5+'] }
    ]
  },
  security: {
    free: [
      { title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', description: 'Foundational application security knowledge and common attack patterns.', stages: ['0-1'] },
      { title: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security', description: 'Hands-on labs for web security testing and exploitation.', stages: ['1-3'] },
      { title: 'MITRE ATT and CK', url: 'https://attack.mitre.org/', description: 'Security operations and adversary behavior mapping.', stages: ['3-5'] },
      { title: 'CISA Cybersecurity Resources', url: 'https://www.cisa.gov/resources-tools/resources/cybersecurity-resources', description: 'Governance, resilience, and enterprise security references.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Google Cybersecurity Certificate', url: 'https://www.coursera.org/professional-certificates/google-cybersecurity', description: 'Strong entry path for security operations and fundamentals.', stages: ['0-1'] },
      { title: 'CompTIA Security Plus Prep', url: 'https://www.comptia.org/certifications/security', description: 'Core security knowledge and exam-aligned training.', stages: ['1-3'] },
      { title: 'Practical Ethical Hacking', url: 'https://www.udemy.com/course/practical-ethical-hacking/', description: 'Intermediate offensive security practice.', stages: ['3-5'] },
      { title: 'SANS Cybersecurity Courses', url: 'https://www.sans.org/cyber-security-courses/', description: 'Advanced blue-team, architecture, and leadership tracks.', stages: ['5+'] }
    ]
  },
  cloudops: {
    free: [
      { title: 'AWS Skill Builder', url: 'https://skillbuilder.aws/', description: 'Official AWS learning hub for cloud and DevOps foundations.', stages: ['0-1'] },
      { title: 'Google Cloud Skills Boost', url: 'https://www.cloudskillsboost.google/', description: 'Hands-on labs for cloud operations and platform engineering.', stages: ['1-3'] },
      { title: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/home/', description: 'Reference for container orchestration and cluster operations.', stages: ['3-5'] },
      { title: 'Google SRE Book', url: 'https://sre.google/sre-book/table-of-contents/', description: 'Reliability engineering practices for large-scale systems.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Docker and Kubernetes Complete Guide', url: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/', description: 'Containerization and orchestration fundamentals.', stages: ['0-1'] },
      { title: 'KodeKloud DevOps Learning Path', url: 'https://kodekloud.com/learning-path/devops/', description: 'Practical Linux, CI/CD, containers, and cloud workflows.', stages: ['1-3'] },
      { title: 'Certified Kubernetes Administrator Prep', url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/', description: 'Cluster operations and production orchestration skills.', stages: ['3-5'] },
      { title: 'Platform Engineering on O Reilly', url: 'https://www.oreilly.com/topics/devops', description: 'Senior-level cloud reliability, platform, and operations strategy.', stages: ['5+'] }
    ]
  },
  qa: {
    free: [
      { title: 'Cypress Learn', url: 'https://learn.cypress.io/', description: 'Modern UI test automation with hands-on lessons.', stages: ['0-1'] },
      { title: 'Playwright Docs', url: 'https://playwright.dev/docs/intro', description: 'End-to-end, API, and cross-browser testing workflows.', stages: ['1-3'] },
      { title: 'Martin Fowler Test Pyramid', url: 'https://martinfowler.com/articles/practical-test-pyramid.html', description: 'Test strategy and automation architecture guidance.', stages: ['3-5'] },
      { title: 'Google Testing Blog', url: 'https://testing.googleblog.com/', description: 'Advanced quality engineering and reliability perspectives.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Selenium WebDriver with Java', url: 'https://www.udemy.com/topic/selenium-webdriver/', description: 'Core browser automation and testing foundations.', stages: ['0-1'] },
      { title: 'Playwright Test Automation', url: 'https://www.udemy.com/topic/playwright/', description: 'Modern automation frameworks and CI integration.', stages: ['1-3'] },
      { title: 'API Testing and Contract Testing', url: 'https://www.educative.io/courses/api-testing-and-contract-testing', description: 'Intermediate to senior backend quality strategies.', stages: ['3-5'] },
      { title: 'Quality Engineering Leadership', url: 'https://www.oreilly.com/topics/software-testing', description: 'Test strategy, governance, and organizational quality systems.', stages: ['5+'] }
    ]
  },
  game: {
    free: [
      { title: 'Unity Learn', url: 'https://learn.unity.com/', description: 'Official Unity tutorials and beginner projects.', stages: ['0-1'] },
      { title: 'Unreal Engine Learning', url: 'https://dev.epicgames.com/community/unreal-engine/learning', description: 'Official Unreal pathways for gameplay systems and tools.', stages: ['1-3'] },
      { title: 'GDC YouTube Channel', url: 'https://www.youtube.com/@Gdconf', description: 'Design, rendering, production, and studio-scale engineering talks.', stages: ['3-5'] },
      { title: 'Game Programming Patterns', url: 'https://gameprogrammingpatterns.com/', description: 'Architectural patterns for advanced gameplay and engine work.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Complete C Sharp Unity Game Developer', url: 'https://www.udemy.com/course/unitycourse2/', description: 'Project-based entry path into Unity and gameplay programming.', stages: ['0-1'] },
      { title: 'Unreal Engine C Plus Plus Developer', url: 'https://www.udemy.com/topic/unreal-engine/', description: 'Intermediate systems, gameplay architecture, and tools.', stages: ['1-3'] },
      { title: 'Real Time Rendering', url: 'https://www.oreilly.com/library/view/real-time-rendering-fourth/9781351816144/', description: 'Graphics and rendering foundations for senior game engineers.', stages: ['3-5'] },
      { title: 'Game Engine Architecture', url: 'https://www.gameenginebook.com/', description: 'Deep engine and tooling reference for advanced engineers.', stages: ['5+'] }
    ]
  },
  blockchain: {
    free: [
      { title: 'Solidity Documentation', url: 'https://docs.soliditylang.org/', description: 'Official smart contract language reference.', stages: ['0-1'] },
      { title: 'Ethereum Developer Docs', url: 'https://ethereum.org/en/developers/docs/', description: 'Core Ethereum app development and protocol concepts.', stages: ['1-3'] },
      { title: 'Foundry Book', url: 'https://book.getfoundry.sh/', description: 'Testing, scripting, and production smart contract workflows.', stages: ['3-5'] },
      { title: 'Ethereum Research', url: 'https://ethresear.ch/', description: 'Advanced protocol, scaling, and cryptoeconomic research.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Ethereum and Solidity The Complete Developer Guide', url: 'https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/', description: 'Hands-on smart contract development foundation.', stages: ['0-1'] },
      { title: 'Blockchain Specialization', url: 'https://www.coursera.org/specializations/blockchain', description: 'Intermediate blockchain application and protocol concepts.', stages: ['1-3'] },
      { title: 'Advanced Smart Contract Security', url: 'https://www.udemy.com/topic/blockchain/', description: 'Intermediate to senior smart contract testing and auditing.', stages: ['3-5'] },
      { title: 'Token Engineering Academy', url: 'https://tokenengineering.net/academy/', description: 'Governance, tokenomics, and protocol design for advanced builders.', stages: ['5+'] }
    ]
  },
  product: {
    free: [
      { title: 'Atlassian Agile Coach', url: 'https://www.atlassian.com/agile', description: 'Product delivery, prioritization, and agile planning fundamentals.', stages: ['0-1'] },
      { title: 'Product School Resources', url: 'https://productschool.com/resources', description: 'Frameworks for discovery, roadmaps, and stakeholder alignment.', stages: ['1-3'] },
      { title: 'SVPG Articles', url: 'https://www.svpg.com/articles/', description: 'Product strategy and organizational product thinking.', stages: ['3-5'] },
      { title: 'Lenny Newsletter Podcast Library', url: 'https://www.lennysnewsletter.com/', description: 'Advanced product leadership and growth case studies.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Google Project Management Certificate', url: 'https://www.coursera.org/professional-certificates/google-project-management', description: 'Execution and delivery skills for early-career product roles.', stages: ['0-1'] },
      { title: 'Digital Product Management', url: 'https://www.coursera.org/specializations/uva-darden-digital-product-management', description: 'Discovery, roadmap, and product development fundamentals.', stages: ['1-3'] },
      { title: 'Product Strategy by Kellogg', url: 'https://www.coursera.org/learn/product-strategy', description: 'Strategic framing and portfolio-level product thinking.', stages: ['3-5'] },
      { title: 'Reforge Product Strategy', url: 'https://www.reforge.com/', description: 'Advanced growth, strategy, and leadership development.', stages: ['5+'] }
    ]
  },
  leadership: {
    free: [
      { title: 'CTO Academy Insights', url: 'https://cto.academy/blog/', description: 'Practical leadership articles for engineering managers and CTOs.', stages: ['0-1'] },
      { title: 'LeadDev Articles', url: 'https://leaddev.com/', description: 'People management, scaling teams, and technical leadership guidance.', stages: ['1-3'] },
      { title: 'StaffEng', url: 'https://staffeng.com/', description: 'Decision-making, influence, and cross-team execution for senior leaders.', stages: ['3-5'] },
      { title: 'Thoughtworks Technology Radar', url: 'https://www.thoughtworks.com/radar', description: 'Strategic technology decision support for executive leaders.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Management Skills for New Managers', url: 'https://www.coursera.org/learn/management-skills', description: 'Foundational people and delivery management training.', stages: ['0-1'] },
      { title: 'Engineering Management on Educative', url: 'https://www.educative.io/courses/engineering-management-essentials', description: 'Intermediate management, planning, and team systems.', stages: ['1-3'] },
      { title: 'Executive Leadership Certificate', url: 'https://www.coursera.org/courses?query=executive%20leadership', description: 'Strategic leadership and organizational design topics.', stages: ['3-5'] },
      { title: 'MIT Sloan Executive Education', url: 'https://executive.mit.edu/', description: 'High-level technology strategy and executive decision-making.', stages: ['5+'] }
    ]
  },
  systems: {
    free: [
      { title: 'OSDev Wiki', url: 'https://wiki.osdev.org/', description: 'Operating systems, bootloaders, and low-level systems fundamentals.', stages: ['0-1'] },
      { title: 'Beej Guide to Network Programming', url: 'https://beej.us/guide/bgnet/', description: 'Sockets, concurrency, and systems-level networking practice.', stages: ['1-3'] },
      { title: 'LLVM Documentation', url: 'https://llvm.org/docs/', description: 'Compiler infrastructure and code generation reference.', stages: ['3-5'] },
      { title: 'MIT Missing Semester', url: 'https://missing.csail.mit.edu/', description: 'Shell, tooling, debugging, and systems craftsmanship.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Operating Systems Three Easy Pieces', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/', description: 'Core systems concepts for entry-level engineers.', stages: ['0-1'] },
      { title: 'C Plus Plus Performance Engineering', url: 'https://www.udemy.com/topic/c-plus-plus/', description: 'Intermediate systems implementation and performance skills.', stages: ['1-3'] },
      { title: 'Computer Systems A Programmers Perspective', url: 'https://www.oreilly.com/library/view/computer-systems-a/9789332573901/', description: 'Deep systems knowledge for senior engineers.', stages: ['3-5'] },
      { title: 'Compiler Construction and Systems Architecture', url: 'https://www.oreilly.com/topics/programming', description: 'Advanced systems, toolchains, and platform design.', stages: ['5+'] }
    ]
  },
  network: {
    free: [
      { title: 'Cisco Skills for All', url: 'https://skillsforall.com/', description: 'Free networking and infrastructure learning from Cisco.', stages: ['0-1'] },
      { title: 'Juniper Learning Portal', url: 'https://learningportal.juniper.net/juniper/user_activity_info.aspx?id=11478', description: 'Routing, switching, and network design concepts.', stages: ['1-3'] },
      { title: 'Wireshark Docs', url: 'https://www.wireshark.org/docs/', description: 'Packet analysis and troubleshooting workflows.', stages: ['3-5'] },
      { title: 'Cloudflare Learning Center', url: 'https://www.cloudflare.com/learning/', description: 'Advanced networking, CDN, DNS, and internet-scale systems.', stages: ['5+'] }
    ],
    paid: [
      { title: 'CCNA Preparation', url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html', description: 'Routing, switching, and core networking fundamentals.', stages: ['0-1'] },
      { title: 'Network Automation with Python', url: 'https://www.udemy.com/topic/network-automation/', description: 'Intermediate automation and programmable networking.', stages: ['1-3'] },
      { title: 'Advanced Routing and Design', url: 'https://www.pluralsight.com/browse/it-ops/network-administration', description: 'Senior network design and resilience content.', stages: ['3-5'] },
      { title: 'Enterprise Network Architecture', url: 'https://www.oreilly.com/topics/networking-security', description: 'Architecture, governance, and scaling for senior engineers.', stages: ['5+'] }
    ]
  },
  database: {
    free: [
      { title: 'MongoDB University', url: 'https://learn.mongodb.com/', description: 'Official courses for document databases, indexing, and operations.', stages: ['0-1'] },
      { title: 'PostgreSQL Tutorial Docs', url: 'https://www.postgresql.org/docs/current/tutorial.html', description: 'Core relational database administration and performance concepts.', stages: ['1-3'] },
      { title: 'Redis University', url: 'https://university.redis.com/', description: 'Caching, persistence, and in-memory data systems.', stages: ['3-5'] },
      { title: 'High Scalability', url: 'http://highscalability.com/', description: 'Scaling databases and data platforms in production.', stages: ['5+'] }
    ],
    paid: [
      { title: 'SQL and Database Design', url: 'https://www.udemy.com/topic/database-design/', description: 'Beginner database design and SQL administration training.', stages: ['0-1'] },
      { title: 'MongoDB for DBAs', url: 'https://learn.mongodb.com/', description: 'Intermediate administration and performance tuning.', stages: ['1-3'] },
      { title: 'Oracle Database Administration', url: 'https://education.oracle.com/', description: 'Backup, recovery, and enterprise database operations.', stages: ['3-5'] },
      { title: 'Data Platform Architecture', url: 'https://www.oreilly.com/topics/data', description: 'Senior-level data architecture and reliability practices.', stages: ['5+'] }
    ]
  },
  writing: {
    free: [
      { title: 'Write the Docs Guide', url: 'https://www.writethedocs.org/guide/', description: 'Documentation principles, tooling, and community best practices.', stages: ['0-1'] },
      { title: 'Google Developer Documentation Style Guide', url: 'https://developers.google.com/style', description: 'Clear, practical guidance on technical writing quality.', stages: ['1-3'] },
      { title: 'Diataxis Framework', url: 'https://diataxis.fr/', description: 'Strong structure for guides, tutorials, references, and explanations.', stages: ['3-5'] },
      { title: 'Docs as Code', url: 'https://www.writethedocs.org/guide/docs-as-code/', description: 'Scalable documentation workflows, review systems, and governance.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Technical Writing One', url: 'https://developers.google.com/tech-writing', description: 'Foundational technical writing training from Google.', stages: ['0-1'] },
      { title: 'API Documentation Course', url: 'https://idratherbewriting.com/learnapidoc/', description: 'Intermediate API docs and developer experience training.', stages: ['1-3'] },
      { title: 'Advanced Information Architecture for Docs', url: 'https://www.udemy.com/topic/technical-writing/', description: 'Advanced structure and information design for large doc sets.', stages: ['3-5'] },
      { title: 'Content Strategy for Technical Leaders', url: 'https://www.oreilly.com/topics/content-strategy', description: 'Doc strategy, governance, and team-level content operations.', stages: ['5+'] }
    ]
  },
  visualization: {
    free: [
      { title: 'Tableau Learn', url: 'https://www.tableau.com/learn/training', description: 'Foundational charting and dashboard design from Tableau.', stages: ['0-1'] },
      { title: 'D3 in Depth', url: 'https://www.d3indepth.com/', description: 'Practical lessons on D3 for interactive visualizations.', stages: ['1-3'] },
      { title: 'Observable Plot Docs', url: 'https://observablehq.com/plot/', description: 'Modern exploratory and production visualization workflows.', stages: ['3-5'] },
      { title: 'Datawrapper Academy', url: 'https://academy.datawrapper.de/', description: 'Advanced visual communication and storytelling.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Data Visualization with Tableau', url: 'https://www.coursera.org/specializations/data-visualization', description: 'Beginner path for dashboarding and reporting.', stages: ['0-1'] },
      { title: 'D3 and Data Visualization', url: 'https://www.udemy.com/topic/d3-js/', description: 'Interactive web visualization techniques.', stages: ['1-3'] },
      { title: 'Storytelling with Data', url: 'https://www.storytellingwithdata.com/', description: 'Senior-level narrative and communication with analytics.', stages: ['3-5'] },
      { title: 'Visual Analytics on O Reilly', url: 'https://www.oreilly.com/topics/data-visualization', description: 'Advanced dashboards, data products, and visualization systems.', stages: ['5+'] }
    ]
  },
  fintech: {
    free: [
      { title: 'Stripe Docs', url: 'https://docs.stripe.com/', description: 'Hands-on payments, subscriptions, and fintech integration fundamentals.', stages: ['0-1'] },
      { title: 'CFPB Personal Financial Data Rights', url: 'https://www.consumerfinance.gov/rules-policy/final-rules/personal-financial-data-rights/', description: 'Open banking, consent, and data-sharing context for regulated fintech products.', stages: ['1-3'] },
      { title: 'PCI Security Standards Library', url: 'https://www.pcisecuritystandards.org/document_library', description: 'Payment security, compliance, and card-data handling guidance.', stages: ['3-5'] },
      { title: 'BIS Innovation Hub Topics', url: 'https://www.bis.org/about/bisih/topics.htm', description: 'Advanced central-bank and financial infrastructure research for senior fintech builders.', stages: ['5+'] }
    ],
    paid: [
      { title: 'FinTech and the Transformation in Financial Services', url: 'https://www.coursera.org/learn/fintech-transformation-financial-services', description: 'A stronger domain-specific foundation in payments, regulation, and modern financial services.', stages: ['0-1'] },
      { title: 'Digital Payments and Banking', url: 'https://www.udemy.com/topic/fintech/', description: 'Intermediate work on wallets, payment rails, underwriting, and fintech product design.', stages: ['1-3'] },
      { title: 'Financial Engineering and Risk Management', url: 'https://www.coursera.org/specializations/financialengineering', description: 'Risk, models, and operational finance systems for more advanced roles.', stages: ['3-5'] },
      { title: 'Fintech Strategy on O Reilly', url: 'https://www.oreilly.com/topics/fintech', description: 'Senior-level platform strategy, compliance tradeoffs, and ecosystem design.', stages: ['5+'] }
    ]
  },
  healthcare: {
    free: [
      { title: 'FHIR Specification', url: 'https://fhir.hl7.org/fhir/index.html', description: 'Core interoperability standard for healthcare APIs, records, and exchange formats.', stages: ['0-1'] },
      { title: 'OHDSI Education', url: 'https://www.ohdsi.org/education/', description: 'Healthcare analytics, clinical vocabularies, and observational data workflows.', stages: ['1-3'] },
      { title: 'HIPAA Journal Resources', url: 'https://www.hipaajournal.com/', description: 'Privacy, security, and compliance guidance for healthcare software teams.', stages: ['3-5'] },
      { title: 'WHO Digital Health', url: 'https://www.who.int/health-topics/digital-health', description: 'Broader systems, policy, and digital-health strategy context for senior roles.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Digital Transformation in Healthcare', url: 'https://www.coursera.org/learn/digital-transformation-in-healthcare', description: 'A practical entry into healthcare workflows, stakeholders, and digital-care delivery.', stages: ['0-1'] },
      { title: 'Healthcare Data and Analytics', url: 'https://www.coursera.org/courses?query=healthcare%20data', description: 'Intermediate focus on clinical data, analytics, and healthcare product development.', stages: ['1-3'] },
      { title: 'Healthcare IT and Security', url: 'https://www.udemy.com/topic/healthcare-it/', description: 'Operational systems, privacy constraints, and security-heavy healthcare environments.', stages: ['3-5'] },
      { title: 'Healthcare Platform Strategy on O Reilly', url: 'https://www.oreilly.com/topics/healthcare', description: 'Advanced governance, interoperability, and platform thinking for senior builders.', stages: ['5+'] }
    ]
  },
  edutech: {
    free: [
      { title: 'Moodle Developer Docs', url: 'https://moodledev.io/', description: 'Course delivery, plugins, and LMS architecture foundations.', stages: ['0-1'] },
      { title: 'Open edX Documentation', url: 'https://docs.edx.org/', description: 'Platform operations, authoring workflows, and learner experience patterns.', stages: ['1-3'] },
      { title: 'Open edX Researcher and Analytics Docs', url: 'https://docs.edx.org/', description: 'A better fit for learning analytics, experimentation, and student-engagement workflows.', stages: ['3-5'] },
      { title: 'UNESCO Digital Learning', url: 'https://www.unesco.org/en/education/digital-learning', description: 'Policy, scale, and ecosystem context for senior education technology leaders.', stages: ['5+'] }
    ],
    paid: [
      { title: 'Instructional Design Foundations', url: 'https://www.coursera.org/courses?query=instructional%20design', description: 'Early-career grounding in course structure, pedagogy, and learning objectives.', stages: ['0-1'] },
      { title: 'Learning Experience Design', url: 'https://www.udemy.com/topic/instructional-design/', description: 'Intermediate practice in learner journeys, engagement, and assessment design.', stages: ['1-3'] },
      { title: 'Learning Analytics and Product Design', url: 'https://www.coursera.org/courses?query=learning%20analytics', description: 'A stronger bridge between analytics, experimentation, and education product decisions.', stages: ['3-5'] },
      { title: 'Education Platform Strategy on O Reilly', url: 'https://www.oreilly.com/topics/education', description: 'Senior-level strategy for curriculum ecosystems, platforms, and institutional adoption.', stages: ['5+'] }
    ]
  }
}
