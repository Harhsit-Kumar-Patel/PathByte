import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Brain,
  Check,
  Bot, 
  User,
  Sparkles // Using Sparkles as a refined Bot icon
} from 'lucide-react'
import { cn } from '@/utils/cn'
import { motion, AnimatePresence } from 'framer-motion' 
// import AnimatedBackground from '@/components/ui/AnimatedBackground' // Keep commented unless you have a light version

// Interfaces (Question, AssessmentResult) remain the same
interface Question {
  id: string
  type: 'single' | 'multiple' | 'scale' | 'text'
  question: string
  description?: string
  options?: string[]
  scaleMin?: number
  scaleMax?: number
  scaleLabels?: { min: string; max: string }
}

interface AssessmentResult {
  role: string
  score: number
  percentage: number
  reasoning: string[]
}


// Role mapping (roleInfo) remains the same
const roleInfo: { [key: string]: { title: string; description: string } } = {
  frontend: { title: 'Frontend Developer', description: 'Build beautiful user interfaces and web experiences' },
  backend: { title: 'Backend Developer', description: 'Create server-side logic and database systems' },
  fullstack: { title: 'Full-Stack Developer', description: 'Master both frontend and backend development' },
  mobile: { title: 'Mobile Developer', description: 'Build iOS and Android applications' },
  game: { title: 'Game Developer', description: 'Create engaging games and interactive experiences' },
  uidesigner: { title: 'UI/UX Designer', description: 'Design intuitive user interfaces and experiences' },
  datascientist: { title: 'Data Scientist', description: 'Extract insights from data using analytics and ML' },
  dataengineer: { title: 'Data Engineer', description: 'Build data pipelines and infrastructure' },
  datavisualization: { title: 'Data Visualization Engineer', description: 'Create compelling data visualizations' },
  mle: { title: 'Machine Learning Engineer', description: 'Build and deploy AI/ML systems' },
  nlpengineer: { title: 'NLP Engineer', description: 'Develop natural language processing systems' },
  computervision: { title: 'Computer Vision Engineer', description: 'Build AI systems that understand images' },
  generativeai: { title: 'Generative AI Engineer', description: 'Create AI that generates content and media' },
  aispecialist: { title: 'AI Specialist', description: 'Develop cutting-edge artificial intelligence solutions' },
  aiops: { title: 'AI Operations Engineer', description: 'Deploy and manage AI systems at scale' },
  cybersecurity: { title: 'Cybersecurity Specialist', description: 'Protect systems from security threats' },
  qaengineer: { title: 'QA Engineer', description: 'Ensure software quality through testing' },
  devops: { title: 'DevOps Engineer', description: 'Automate deployment and infrastructure' },
  cloudengineer: { title: 'Cloud Engineer', description: 'Build and manage cloud infrastructure' },
  sre: { title: 'Site Reliability Engineer', description: 'Ensure system reliability and performance' },
  productmanager: { title: 'Product Manager', description: 'Guide product strategy and development' },
  techmanager: { title: 'Tech Manager', description: 'Lead technical teams and projects' },
  cto: { title: 'Chief Technology Officer', description: 'Drive technical strategy and innovation' },
  blockchain: { title: 'Blockchain Developer', description: 'Build decentralized applications and systems' },
  fintech: { title: 'Fintech Engineer', description: 'Develop financial technology solutions' },
  healthcare: { title: 'Healthcare Data Engineer', description: 'Build healthcare data systems' },
  edutech: { title: 'Edutech Engineer', description: 'Create educational technology platforms' },
  gaming: { title: 'Gaming Engineer', description: 'Develop large-scale gaming systems' },
  quantumcomputing: { title: 'Quantum Computing Engineer', description: 'Work on quantum computing systems' },
  compilerengineer: { title: 'Compiler Engineer', description: 'Build programming language compilers' },
  systemprogrammer: { title: 'Systems Programmer', description: 'Develop low-level system software' },
  embeddedengineer: { title: 'Embedded Systems Engineer', description: 'Program hardware and IoT devices' },
  networkengineer: { title: 'Network Engineer', description: 'Design and maintain network infrastructure' },
  databaseadmin: { title: 'Database Administrator', description: 'Manage and optimize database systems' }
}


export default function CareerAssessmentPage() {
  const navigate = useNavigate()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0) 
  const [answers, setAnswers] = useState<{ [key: string]: any }>({})
  const [isComplete, setIsComplete] = useState(false)
  const [results, setResults] = useState<AssessmentResult[]>([])
  const chatEndRef = useRef<HTMLDivElement>(null) 
  const [isBotTyping, setIsBotTyping] = useState(true); 

  const questions: Question[] = [
      // ... (Your questions array is perfect, no changes) ...
       {
      id: 'q1',
      type: 'single',
      question: 'What excites you the most?',
      options: [
        'Creating apps/websites people can see and use',
        'Making software run efficiently behind the scenes',
        'Finding patterns in data and solving problems with numbers',
        'Building AI systems or robots that can "think"',
        'Protecting systems from hackers',
        'Leading projects and guiding teams'
      ]
    },
    {
      id: 'q2',
      type: 'single',
      question: 'Which type of project would you enjoy most?',
      options: [
        'Designing a beautiful website for a new startup',
        'Building a server that handles millions of users',
        'Training an AI chatbot to answer customer questions',
        'Creating a finance app for payments',
        'Developing a mobile game',
        'Improving hospital data systems'
      ]
    },
    {
      id: 'q3',
      type: 'single',
      question: 'What\'s your preferred style of problem-solving?',
      options: [
        'Creative, visual solutions',
        'Logical and structured coding',
        'Research-heavy and experimental',
        'Security-oriented, finding flaws and fixing them',
        'Business-oriented, balancing user needs and tech'
      ]
    },
    {
      id: 'q4',
      type: 'single',
      question: 'Which tool would excite you more?',
      options: [
        'Figma or design tools',
        'Python or SQL for data analysis',
        'TensorFlow or PyTorch for AI',
        'Docker & Kubernetes for cloud apps',
        'Unity or Unreal Engine',
        'Security scanners & penetration testing tools'
      ]
    },
    {
      id: 'q5',
      type: 'single',
      question: 'What kind of apps would you love to build?',
      options: [
        'Social media / e-commerce websites',
        'Mobile apps like Uber or Instagram',
        'Games (PC, console, or VR)',
        'AI-powered assistants (chatbots, vision apps)',
        'Healthcare/education platforms',
        'Secure banking/crypto systems'
      ]
    },
    {
      id: 'q6',
      type: 'single',
      question: 'What kind of impact do you want your work to have?',
      options: [
        'Delight users with smooth interfaces',
        'Enable apps to handle millions of requests',
        'Turn raw data into insights',
        'Build the next breakthrough in AI',
        'Keep organizations safe from hackers',
        'Lead teams to deliver big tech projects'
      ]
    },
    {
      id: 'q7',
      type: 'single',
      question: 'Which of these subjects do you like more?',
      options: [
        'Art, graphics, storytelling',
        'Math, logic, problem-solving',
        'Physics, quantum science',
        'Business & leadership',
        'Security, ethical hacking'
      ]
    },
    {
      id: 'q8',
      type: 'single',
      question: 'How much do you enjoy working with data?',
      options: [
        'Love analyzing and finding insights',
        'Prefer organizing data pipelines',
        'Want to use data to power AI',
        'Don\'t care much about data, I like building apps'
      ]
    },
    {
      id: 'q9',
      type: 'single',
      question: 'Which environment appeals to you more?',
      options: [
        'Working with designers and marketers',
        'Collaborating with engineers on infrastructure',
        'Research labs and AI projects',
        'Security operation centers',
        'Leading boardroom meetings'
      ]
    },
    {
      id: 'q10',
      type: 'single',
      question: 'Do you enjoy low-level or high-level work?',
      options: [
        'Low-level (close to hardware, systems, compilers)',
        'High-level (apps, AI, data, websites)'
      ]
    },
    {
      id: 'q11',
      type: 'single',
      question: 'Do you want to specialize in a particular industry?',
      options: [
        'Healthcare',
        'Finance & crypto',
        'Education',
        'Entertainment & gaming',
        'Cutting-edge science',
        'No specific industry preference'
      ]
    },
    {
      id: 'q12',
      type: 'single',
      question: 'How do you feel about leadership?',
      options: [
        'I love managing and guiding people',
        'I prefer building and coding',
        'I enjoy both technical + management'
      ]
    },
    {
      id: 'q13',
      type: 'single',
      question: 'Which challenge sounds fun to you?',
      options: [
        'Designing a new app layout',
        'Scaling servers for 10M users',
        'Training AI to recognize faces',
        'Securing a banking system from hackers',
        'Writing a new programming language',
        'Leading a cross-functional team'
      ]
    },
    {
      id: 'q14',
      type: 'single',
      question: 'Do you want your work to be more…',
      options: [
        'Creative and user-facing',
        'Technical and backend-oriented',
        'Analytical and data-driven',
        'AI & futuristic',
        'Security-critical',
        'Leadership/business-driven'
      ]
    },
    {
      id: 'q15',
      type: 'single',
      question: 'What motivates you most?',
      options: [
        'Creativity & user happiness',
        'Technical problem-solving',
        'Discoveries in AI & research',
        'Protecting people & organizations',
        'Building industries & teams'
      ]
    }
  ]

  // Scroll effect
  useEffect(() => {
    const timer = setTimeout(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 100); 
    return () => clearTimeout(timer);
  }, [currentQuestionIndex, answers, isBotTyping]);

  // Typing simulation effect
  useEffect(() => {
    if (currentQuestionIndex >= 0 && answers[questions[currentQuestionIndex].id] === undefined && !isComplete) {
      setIsBotTyping(true);
      const timer = setTimeout(() => {
        setIsBotTyping(false);
      }, 600 + Math.random() * 400); 
      return () => clearTimeout(timer);
    } else {
      setIsBotTyping(false); 
    }
  }, [currentQuestionIndex, isComplete]); 

  const handleAnswer = (questionId: string, answer: any) => {
    if (questionId !== questions[currentQuestionIndex].id || isBotTyping || answers[questionId] !== undefined) return; 

    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))

    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    if (!isLastQuestion) {
        setIsBotTyping(true); // Start typing for next question immediately
    }

    setTimeout(() => {
      if (!isLastQuestion) {
        setCurrentQuestionIndex(prev => prev + 1)
      } else {
        calculateResults() 
      }
    }, isLastQuestion ? 400 : 800); 
  }

  // calculateResults, restartAssessment (no changes needed)
   const calculateResults = () => {
    // Initialize scores for all roles
    const roleScores: { [key: string]: number } = {}
    const roleReasons: { [key: string]: string[] } = {}
    
    // Initialize all roles with 0 score
    Object.keys(roleInfo).forEach(role => {
      roleScores[role] = 0
      roleReasons[role] = []
    })

    // Question scoring logic (no changes, this is good)
    const scoringRules = [
      // Q1: What excites you the most?
      {
        question: 'q1',
        rules: [
          { option: 0, roles: ['frontend', 'fullstack', 'mobile', 'game', 'uidesigner'], points: 3, reason: 'Interested in user-facing applications' },
          { option: 1, roles: ['backend', 'cloudengineer', 'devops', 'sre'], points: 3, reason: 'Enjoys backend systems and efficiency' },
          { option: 2, roles: ['datascientist', 'dataengineer', 'datavisualization'], points: 3, reason: 'Passionate about data and analytics' },
          { option: 3, roles: ['mle', 'nlpengineer', 'computervision', 'generativeai'], points: 3, reason: 'Excited by AI and intelligent systems' },
          { option: 4, roles: ['cybersecurity', 'qaengineer'], points: 3, reason: 'Security and protection focused' },
          { option: 5, roles: ['productmanager', 'techmanager', 'cto'], points: 3, reason: 'Leadership and project management oriented' }
        ]
      },
      // Q2: Which type of project would you enjoy most?
      {
        question: 'q2',
        rules: [
          { option: 0, roles: ['frontend', 'uidesigner'], points: 3, reason: 'Enjoys visual design and user interfaces' },
          { option: 1, roles: ['backend', 'cloudengineer'], points: 3, reason: 'Interested in scalable server systems' },
          { option: 2, roles: ['nlpengineer', 'aispecialist'], points: 3, reason: 'AI and conversational systems appeal' },
          { option: 3, roles: ['fintech', 'blockchain'], points: 3, reason: 'Financial technology interests' },
          { option: 4, roles: ['game', 'gaming', 'mobile'], points: 3, reason: 'Game development passion' },
          { option: 5, roles: ['healthcare', 'dataengineer'], points: 3, reason: 'Healthcare technology focus' }
        ]
      },
      // Q3: Problem-solving style
      {
        question: 'q3',
        rules: [
          { option: 0, roles: ['frontend', 'uidesigner', 'datavisualization', 'game'], points: 2, reason: 'Creative problem solver' },
          { option: 1, roles: ['backend', 'compilerengineer', 'databaseadmin', 'systemprogrammer'], points: 2, reason: 'Logical and structured approach' },
          { option: 2, roles: ['quantumcomputing', 'mle', 'aiops'], points: 2, reason: 'Research-oriented mindset' },
          { option: 3, roles: ['cybersecurity', 'sre', 'qaengineer'], points: 2, reason: 'Security-focused thinking' },
          { option: 4, roles: ['productmanager', 'cto'], points: 2, reason: 'Business-oriented approach' }
        ]
      },
      // Q4: Tool preferences
      {
        question: 'q4',
        rules: [
          { option: 0, roles: ['uidesigner', 'frontend'], points: 3, reason: 'Design tools proficiency' },
          { option: 1, roles: ['datascientist', 'dataengineer'], points: 3, reason: 'Data analysis tools interest' },
          { option: 2, roles: ['mle', 'computervision', 'generativeai'], points: 3, reason: 'AI/ML frameworks appeal' },
          { option: 3, roles: ['devops', 'cloudengineer', 'sre'], points: 3, reason: 'Cloud and container technologies' },
          { option: 4, roles: ['game', 'gaming'], points: 3, reason: 'Game development engines' },
          { option: 5, roles: ['cybersecurity'], points: 3, reason: 'Security testing tools' }
        ]
      },
      // Q5: App types
      {
        question: 'q5',
        rules: [
          { option: 0, roles: ['frontend', 'backend', 'fullstack'], points: 2, reason: 'Web development focus' },
          { option: 1, roles: ['mobile'], points: 3, reason: 'Mobile app development' },
          { option: 2, roles: ['game', 'gaming'], points: 3, reason: 'Game development passion' },
          { option: 3, roles: ['nlpengineer', 'computervision', 'generativeai'], points: 3, reason: 'AI-powered applications' },
          { option: 4, roles: ['healthcare', 'edutech'], points: 3, reason: 'Industry-specific applications' },
          { option: 5, roles: ['blockchain', 'fintech'], points: 3, reason: 'Financial and security systems' }
        ]
      },
      // Q6: Impact preferences
      {
        question: 'q6',
        rules: [
          { option: 0, roles: ['frontend', 'uidesigner'], points: 2, reason: 'User experience focused' },
          { option: 1, roles: ['backend', 'sre'], points: 2, reason: 'Scalability and performance minded' },
          { option: 2, roles: ['datascientist', 'datavisualization'], points: 2, reason: 'Data insights driven' },
          { option: 3, roles: ['mle', 'generativeai', 'aiops'], points: 2, reason: 'AI innovation focused' },
          { option: 4, roles: ['cybersecurity', 'qaengineer'], points: 2, reason: 'Security and protection oriented' },
          { option: 5, roles: ['techmanager', 'cto'], points: 2, reason: 'Team leadership oriented' }
        ]
      },
      // Q7: Subject preferences
      {
        question: 'q7',
        rules: [
          { option: 0, roles: ['uidesigner', 'game', 'frontend'], points: 2, reason: 'Creative and artistic inclination' },
          { option: 1, roles: ['datascientist', 'backend', 'compilerengineer'], points: 2, reason: 'Mathematical and logical thinking' },
          { option: 2, roles: ['quantumcomputing'], points: 3, reason: 'Quantum physics interest' },
          { option: 3, roles: ['productmanager', 'techmanager', 'cto'], points: 2, reason: 'Business leadership focus' },
          { option: 4, roles: ['cybersecurity', 'sre'], points: 2, reason: 'Security and ethical hacking' }
        ]
      },
      // Q8: Data work preference
      {
        question: 'q8',
        rules: [
          { option: 0, roles: ['datascientist', 'datavisualization'], points: 3, reason: 'Data analysis passion' },
          { option: 1, roles: ['dataengineer', 'databaseadmin'], points: 3, reason: 'Data infrastructure focus' },
          { option: 2, roles: ['mle', 'nlpengineer'], points: 3, reason: 'AI and data combination' },
          { option: 3, roles: ['frontend', 'backend', 'mobile', 'game'], points: 2, reason: 'Application building focus' }
        ]
      },
      // Q9: Work environment
      {
        question: 'q9',
        rules: [
          { option: 0, roles: ['uidesigner', 'frontend', 'productmanager'], points: 2, reason: 'Cross-functional collaboration' },
          { option: 1, roles: ['backend', 'devops', 'sre', 'cloudengineer'], points: 2, reason: 'Engineering team collaboration' },
          { option: 2, roles: ['mle', 'computervision', 'quantumcomputing'], points: 2, reason: 'Research environment preference' },
          { option: 3, roles: ['cybersecurity'], points: 2, reason: 'Security operations focus' },
          { option: 4, roles: ['cto', 'techmanager'], points: 2, reason: 'Executive leadership' }
        ]
      },
      // Q10: Work level preference
      {
        question: 'q10',
        rules: [
          { option: 0, roles: ['systemprogrammer', 'compilerengineer', 'embeddedengineer', 'networkengineer'], points: 3, reason: 'Low-level systems interest' },
          { option: 1, roles: ['frontend', 'backend', 'cloudengineer', 'datascientist', 'mle'], points: 2, reason: 'High-level application focus' }
        ]
      },
      // Q11: Industry specialization
      {
        question: 'q11',
        rules: [
          { option: 0, roles: ['healthcare'], points: 3, reason: 'Healthcare industry focus' },
          { option: 1, roles: ['blockchain', 'fintech'], points: 3, reason: 'Finance and crypto interest' },
          { option: 2, roles: ['edutech'], points: 3, reason: 'Education technology focus' },
          { option: 3, roles: ['game', 'gaming', 'uidesigner'], points: 2, reason: 'Entertainment industry' },
          { option: 4, roles: ['quantumcomputing', 'aiops'], points: 3, reason: 'Cutting-edge science' }
        ]
      },
      // Q12: Leadership preference
      {
        question: 'q12',
        rules: [
          { option: 0, roles: ['techmanager', 'cto', 'productmanager'], points: 3, reason: 'Management and leadership focus' },
          { option: 1, roles: ['frontend', 'backend', 'cloudengineer'], points: 2, reason: 'Individual contributor preference' },
          { option: 2, roles: ['sre', 'aiops', 'productmanager'], points: 2, reason: 'Technical leadership balance' }
        ]
      },
      // Q13: Challenge preference
      {
        question: 'q13',
        rules: [
          { option: 0, roles: ['uidesigner', 'frontend'], points: 2, reason: 'Design and layout focus' },
          { option: 1, roles: ['backend', 'cloudengineer'], points: 2, reason: 'Scalability challenges' },
          { option: 2, roles: ['computervision', 'generativeai'], points: 2, reason: 'AI training and development' },
          { option: 3, roles: ['cybersecurity', 'fintech'], points: 2, reason: 'Security system challenges' },
          { option: 4, roles: ['compilerengineer', 'systemprogrammer'], points: 2, reason: 'Language and system development' },
          { option: 5, roles: ['techmanager', 'cto'], points: 2, reason: 'Team leadership challenges' }
        ]
      },
      // Q14: Work orientation
      {
        question: 'q14',
        rules: [
          { option: 0, roles: ['frontend', 'uidesigner', 'game'], points: 2, reason: 'Creative and user-facing work' },
          { option: 1, roles: ['backend', 'sre', 'devops'], points: 2, reason: 'Technical backend focus' },
          { option: 2, roles: ['datascientist', 'dataengineer', 'datavisualization'], points: 2, reason: 'Data-driven approach' },
          { option: 3, roles: ['mle', 'generativeai', 'quantumcomputing'], points: 2, reason: 'AI and future technology' },
          { option: 4, roles: ['cybersecurity', 'qaengineer'], points: 2, reason: 'Security-critical systems' },
          { option: 5, roles: ['cto', 'productmanager'], points: 2, reason: 'Business and leadership' }
        ]
      },
      // Q15: Motivation
      {
        question: 'q15',
        rules: [
          { option: 0, roles: ['frontend', 'uidesigner', 'game'], points: 2, reason: 'User happiness and creativity motivated' },
          { option: 1, roles: ['backend', 'cloudengineer', 'compilerengineer', 'databaseadmin'], points: 2, reason: 'Technical problem-solving driven' },
          { option: 2, roles: ['mle', 'computervision', 'nlpengineer'], points: 2, reason: 'AI research and discovery motivated' },
          { option: 3, roles: ['cybersecurity', 'sre', 'qaengineer'], points: 2, reason: 'Protection and security motivated' },
          { option: 4, roles: ['techmanager', 'cto', 'productmanager'], points: 2, reason: 'Industry building and team leadership' }
        ]
      }
    ]


    // Apply scoring rules
    scoringRules.forEach(rule => {
      const answer = answers[rule.question]
      if (typeof answer === 'number') {
        const matchedRule = rule.rules.find(r => r.option === answer)
        if (matchedRule) {
          matchedRule.roles.forEach(role => {
            roleScores[role] += matchedRule.points
            if (!roleReasons[role].includes(matchedRule.reason)) {
              roleReasons[role].push(matchedRule.reason)
            }
          })
        }
      }
    })

    // Calculate percentages and create results
    const maxPossibleScore = scoringRules.length * 3 // Maximum points per question
    
    let results: AssessmentResult[] = Object.keys(roleScores)
      .map(role => ({
        role,
        score: roleScores[role],
        percentage: Math.round((roleScores[role] / maxPossibleScore) * 100),
        reasoning: roleReasons[role].slice(0, 3) // Top 3 reasons
      }))
      .filter(result => result.score > 0) // Only show roles with some score
      .sort((a, b) => b.score - a.score)
      .slice(0, 5) // Top 5 recommendations
    
    // Fallback: if no roles have scores, show some default recommendations
    if (results.length === 0) {
      // Find the top 3 roles with highest scores (even if 0)
      const topRoles = Object.keys(roleScores)
        .sort((a, b) => roleScores[b] - roleScores[a])
        .slice(0, 3)
      
      results = topRoles.map(role => ({
        role,
        score: roleScores[role] || 1,
        percentage: Math.max(10, Math.round((roleScores[role] || 1) / maxPossibleScore * 100)),
        reasoning: ['Based on your responses, this role might be a good starting point']
      }))
    }

    setResults(results)
    setIsComplete(true)
  }

  const restartAssessment = () => {
    setCurrentQuestionIndex(0)
    setAnswers({})
    setIsComplete(false)
    setResults([])
  }

  // Results Page (Using the refined version from previous step)
  if (isComplete) {
     return (
       <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 py-12"> {/* Light theme background */}
        {/* <AnimatedBackground /> */} {/* Optional: Add light theme background animation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
             <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4 shadow-lg ring-4 ring-white/50"
            >
              <CheckCircle className="h-8 w-8 text-white" />
            </motion.div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Assessment Complete!
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-700"
            >
              Here are your personalized career recommendations.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, staggerChildren: 0.1 }}
            className="space-y-6"
          >
            {results.map((result, index) => {
              const roleData = roleInfo[result.role]
              const matchColor = result.percentage >= 80 ? 'text-green-700' : 
                                result.percentage >= 60 ? 'text-blue-700' : 'text-yellow-700'
              const bgColor = result.percentage >= 80 ? 'bg-green-100/70 border-green-300' : 
                             result.percentage >= 60 ? 'bg-blue-100/70 border-blue-300' : 'bg-yellow-100/70 border-yellow-300'
              
              return (
                 <motion.div
                  key={result.role}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }} 
                  className={`rounded-xl backdrop-blur-sm shadow-xl border p-6 transition-all duration-300 ${bgColor}`} 
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                     <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0 ring-2 ring-white/30">
                         #{index + 1}
                       </div>
                       <div>
                         <h3 className="text-2xl font-semibold text-gray-900">
                           {roleData?.title || result.role}
                         </h3>
                         <p className="text-gray-700 text-base">
                           {roleData?.description || 'Tech career opportunity'}
                         </p>
                       </div>
                     </div>
                     <div className="text-left sm:text-right mt-4 sm:mt-0 flex-shrink-0">
                       <div className="flex items-center gap-2 mb-1">
                         <span className={`text-5xl font-bold ${matchColor}`}>{result.percentage}%</span>
                       </div>
                       <span className="text-gray-600 text-sm uppercase tracking-wider font-medium">Compatibility</span>
                     </div>
                   </div>
                   
                   <div className="mb-6 border-t border-gray-300/50 pt-4">
                     <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                       Why this matches you:
                     </h4>
                     <ul className="space-y-2">
                       {result.reasoning.map((reason, idx) => (
                         <li key={idx} className="flex items-start gap-3">
                           <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                           <span className="text-gray-700 text-sm">{reason}</span>
                         </li>
                       ))}
                     </ul>
                   </div>

                   <div className="flex flex-col sm:flex-row gap-3">
                     <motion.button
                      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                       onClick={() => navigate(`/roadmap/${result.role}`)}
                       className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                     >
                       View Learning Roadmap
                       <ArrowRight className="h-4 w-4" />
                     </motion.button>
                     <motion.button
                       whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                       onClick={() => navigate('/career-guide')}
                       className="flex-1 sm:flex-none bg-white px-6 py-3 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-800 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                     >
                       Compare Roles
                     </motion.button>
                   </div>
                 </motion.div>
              )
            })}
          </motion.div>

          <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.5 + results.length * 0.1 }}
             className="text-center mt-12" 
          >
             <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
               onClick={restartAssessment}
               className="px-6 py-3 bg-white border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-800 rounded-lg font-semibold transition-colors duration-200 mr-4 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
             >
               Retake Assessment
             </motion.button>
             <motion.button
               whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
               onClick={() => navigate('/career-guide')}
               className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
             >
               Explore All Careers
             </motion.button>
          </motion.div>
        </div>
      </div>
    )
  }

  // --- Assessment UI ---
  const progress = (currentQuestionIndex / questions.length) * 100;

  return (
    // --- Light theme background ---
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 flex flex-col pt-8 text-gray-900"> 
       {/* <AnimatedBackground /> */} {/* Optional: Light background animation */}

      {/* Header */}
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex-shrink-0 sticky top-0 z-10 pt-4 pb-2 bg-white/80 backdrop-blur-md border-b border-gray-200/50"> {/* Light sticky header */}
        <div className="flex items-center justify-between mb-3 text-sm font-medium text-gray-600">
           <span className="flex items-center gap-2 font-semibold text-gray-800"> {/* Darker text */}
             <Sparkles className="h-5 w-5 text-indigo-500" /> {/* Adjusted color */}
             Pathbyte Career Assistant
           </span>
           <span className="font-mono text-gray-700"> {/* Darker text */}
             {currentQuestionIndex + 1} / {questions.length}
           </span>
         </div>
         <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden"> {/* Light progress bar bg */}
           <motion.div 
             className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full"
             initial={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
             animate={{ width: `${progress}%` }}
             transition={{ duration: 0.5, ease: "easeInOut" }}
           />
         </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pb-24 relative pt-4"> 
        <div className="max-w-3xl mx-auto space-y-8"> 
          <AnimatePresence initial={false}>
            {questions.slice(0, currentQuestionIndex + 1).map((q, index) => {
              const currentAnswer = answers[q.id];
              const isCurrentActiveQuestion = index === currentQuestionIndex;
              const hasAnsweredThis = currentAnswer !== undefined;

              return (
                <motion.div 
                  key={q.id}
                  layout 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }} 
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} 
                  className="space-y-5" 
                >
                  {/* Bot Question Bubble */}
                  <div className="flex items-end gap-3 justify-start group">
                    <motion.div 
                      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 20 }}
                      className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-200"
                    >
                      <Sparkles className="w-5 h-5 text-white" />
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.4 }}
                      className="bg-white p-4 rounded-xl rounded-bl-sm shadow-xl border border-gray-200 max-w-[85%] sm:max-w-[75%]" // Light bubble
                    >
                       <p className="text-xs text-indigo-600 mb-1 font-semibold">Pathbyte Career Assistant</p> {/* Name */}
                       <p className="text-gray-800 font-medium text-base leading-relaxed">{q.question}</p> {/* Darker text */}
                       {q.description && <p className="text-sm text-gray-500 mt-2">{q.description}</p>}
                    </motion.div>
                  </div>

                  {/* User Answer Bubble */}
                  {hasAnsweredThis && ( 
                     <motion.div 
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.1 }}
                       className="flex justify-end items-end gap-3 group"
                      >
                       <motion.div 
                          initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.4 }}
                          className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 rounded-xl rounded-br-sm shadow-xl max-w-[85%] sm:max-w-[75%]"
                        >
                          <p className="text-xs text-blue-200 mb-0.5 font-semibold">User</p> {/* Name */}
                          <p className="font-medium text-base">{q.options?.[currentAnswer] || currentAnswer}</p> 
                       </motion.div>
                        <motion.div 
                          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 20 }}
                          className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-200"
                        >
                           <User className="w-5 h-5 text-white" />
                        </motion.div>
                     </motion.div>
                  )}

                  {/* Options/Typing for the current question */}
                  {isCurrentActiveQuestion && (
                    <>
                      {isBotTyping ? (
                        <TypingIndicator isLight={true} /> // Pass light prop
                      ) : (
                        q.type === 'single' && q.options && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, staggerChildren: 0.07 }} 
                            className="flex flex-wrap gap-3 justify-center pt-3 pb-2" 
                          >
                            {q.options.map((option, idx) => (
                              <motion.button
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                onClick={() => handleAnswer(q.id, idx)}
                                className={cn(
                                  "px-5 py-3 rounded-lg border text-base font-medium transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-offset-2",
                                  hasAnsweredThis && answers[q.id] === idx 
                                    ? "bg-blue-600 border-blue-600 text-white shadow-lg scale-105 cursor-default ring-blue-400" // Selected style
                                    : hasAnsweredThis 
                                    ? "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed opacity-70" // Disabled style
                                    : "bg-white border-gray-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 ring-blue-300" // Default style
                                )}
                                whileHover={!hasAnsweredThis ? { scale: 1.05, y: -2, transition: { duration: 0.15 } } : {}}
                                whileTap={!hasAnsweredThis ? { scale: 0.95 } : {}}
                                disabled={hasAnsweredThis} // Disable button after answer
                              >
                                {option}
                              </motion.button>
                            ))}
                          </motion.div>
                        )
                        // Add handlers for 'multiple', 'scale' if needed
                      )}
                    </>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
          <div ref={chatEndRef} className="h-1"/> 
        </div>
      </div>
       
       {/* Back Button - Light Theme */}
        {currentQuestionIndex > 0 && !isComplete && (
         <div className="fixed bottom-6 left-6 z-10">
           <motion.button
             whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
             onClick={() => setCurrentQuestionIndex(prev => prev - 1)} 
             className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md text-gray-700 hover:bg-white border border-gray-300 shadow-md text-sm font-medium transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300" // Light theme styles
           >
             <ArrowLeft className="h-4 w-4" />
             Back
           </motion.button>
         </div>
       )}
    </div>
  )
}

// Typing Indicator Component - Updated for Light/Dark
const TypingIndicator = ({ isLight = false }: { isLight?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="flex items-end gap-3 justify-start"
  >
    <motion.div 
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2",
        isLight ? "bg-gradient-to-br from-indigo-500 to-purple-600 border-white" : "bg-gradient-to-br from-indigo-500 to-purple-600 border-gray-700"
      )}
    >
      <Sparkles className="w-5 h-5 text-white" />
    </motion.div>
    <div className={cn(
      "p-4 rounded-xl rounded-bl-sm shadow-xl border inline-flex space-x-1.5",
      isLight ? "bg-white border-gray-200" : "bg-gray-700 border-gray-600"
    )}>
       <motion.div 
        className={cn("w-2.5 h-2.5 rounded-full", isLight ? "bg-indigo-400" : "bg-indigo-300")}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0 }}
      />
      <motion.div 
        className={cn("w-2.5 h-2.5 rounded-full", isLight ? "bg-indigo-400" : "bg-indigo-300")}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div 
        className={cn("w-2.5 h-2.5 rounded-full", isLight ? "bg-indigo-400" : "bg-indigo-300")}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
    </div>
  </motion.div>
);