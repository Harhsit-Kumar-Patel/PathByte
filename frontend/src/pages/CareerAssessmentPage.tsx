import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Brain,
  Sparkles,
  Target,
  RotateCcw,
  X,
} from 'lucide-react'
import { cn } from '@/utils/cn'

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

// Role mapping for display names and descriptions
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
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: any }>({})
  const [isComplete, setIsComplete] = useState(false)
  const [results, setResults] = useState<AssessmentResult[]>([])

  const questions: Question[] = [
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

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      // Check if all questions are answered
      const unansweredQuestions = questions.filter(q => answers[q.id] === undefined || answers[q.id] === null)
      if (unansweredQuestions.length > 0) {
        alert('Please answer all questions before getting results.')
        return
      }
      calculateResults()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const clearCurrentSelection = () => {
    setAnswers((prev) => {
      const nextAnswers = { ...prev }
      delete nextAnswers[question.id]
      return nextAnswers
    })
  }

  const calculateResults = () => {
    // Initialize scores for all roles
    const roleScores: { [key: string]: number } = {}
    const roleReasons: { [key: string]: string[] } = {}
    
    // Initialize all roles with 0 score
    Object.keys(roleInfo).forEach(role => {
      roleScores[role] = 0
      roleReasons[role] = []
    })

    // Question scoring logic based on the mapping you provided
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
    setCurrentQuestion(0)
    setAnswers({})
    setIsComplete(false)
    setResults([])
  }

  if (isComplete) {
    return (
      <div className="overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
        <div className="hero-orb left-[-5rem] top-14 h-56 w-56 bg-sky-300/30" />
        <div className="hero-orb right-[-4rem] top-24 h-72 w-72 bg-blue-300/22" style={{ animationDelay: '1.8s' }} />

        <div className="mx-auto max-w-5xl">
          <div className="surface-panel-strong rounded-[2.4rem] px-6 py-8 sm:px-8 sm:py-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="section-kicker">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                Assessment complete
              </div>
              <div className="mx-auto mt-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-soft-xl">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Your strongest career matches</h1>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                These recommendations are based on how you prefer to think, build, collaborate, and solve problems.
              </p>
            </div>

            <div className="mt-10 space-y-5">
              {results.map((result, index) => {
                const roleData = roleInfo[result.role]
                const matchTone =
                  result.percentage >= 80
                    ? 'border-emerald-200 bg-emerald-50'
                    : result.percentage >= 60
                      ? 'border-blue-200 bg-blue-50'
                      : 'border-amber-200 bg-amber-50'

                return (
                  <div key={result.role} className={`rounded-[1.8rem] border p-6 ${matchTone}`}>
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-lg font-semibold text-white">
                          #{index + 1}
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-slate-950">{roleData?.title || result.role}</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {roleData?.description || 'Tech career opportunity'}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-[1.4rem] bg-white px-5 py-4 text-center shadow-soft">
                        <div className="text-3xl font-semibold text-slate-950">{result.percentage}%</div>
                        <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">compatibility</div>
                      </div>
                    </div>

                    <div className="mt-6 rounded-[1.4rem] bg-white/80 p-5">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Why this matches
                      </h4>
                      <div className="mt-4 grid gap-3">
                        {result.reasoning.map((reason, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                            <span className="text-sm leading-6 text-slate-700">{reason}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-[minmax(0,1fr)_220px]">
                      <button
                        onClick={() => navigate(`/roadmap/${result.role}`)}
                        className="btn-modern inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white"
                      >
                        View learning roadmap
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                      <button
                        onClick={() => navigate('/career-guide')}
                        className="btn-modern inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800"
                      >
                        Compare roles
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={restartAssessment}
                className="btn-modern inline-flex min-w-[12rem] items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800"
              >
                Retake assessment
              </button>
              <button
                onClick={() => navigate('/career-guide')}
                className="btn-modern inline-flex min-w-[12rem] items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white"
              >
                Explore all careers
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const answeredCount = questions.filter((item) => answers[item.id] !== undefined && answers[item.id] !== null).length
  const progress = (answeredCount / questions.length) * 100

  return (
    <div className="overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="hero-orb left-[-5rem] top-14 h-56 w-56 bg-sky-300/30" />
      <div className="hero-orb right-[-4rem] top-24 h-72 w-72 bg-blue-300/22" style={{ animationDelay: '1.8s' }} />

      <div className="mx-auto max-w-4xl">
        <div className="surface-panel-strong rounded-[2.4rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="section-kicker">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              Guided role discovery
            </div>
            <div className="mx-auto mt-5 flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 text-white shadow-soft-xl">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Career assessment</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Discover which tech roles align best with your interests, problem-solving style, and preferred way of working.
            </p>
          </div>

          <div className="mt-8 rounded-[1.8rem] border border-slate-200 bg-white/80 p-5">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-950">Question {currentQuestion + 1} of {questions.length}</p>
                <p className="text-sm text-slate-500">{Math.round(progress)}% complete</p>
              </div>
              <div className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Assessment flow
              </div>
            </div>
            <div className="h-3 w-full rounded-full bg-slate-100">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-500">
                You can clear this answer or restart the full assessment at any time.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={clearCurrentSelection}
                  disabled={answers[question.id] === undefined || answers[question.id] === null}
                  className={cn(
                    'btn-modern inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold',
                    answers[question.id] === undefined || answers[question.id] === null
                      ? 'cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-400'
                      : 'border border-slate-200 bg-white text-slate-700',
                  )}
                >
                  <X className="mr-2 h-4 w-4" />
                  Clear selection
                </button>
                <button
                  onClick={restartAssessment}
                  className="btn-modern inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Restart assessment
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="mb-8">
              <div className="section-kicker">
                <Target className="h-3.5 w-3.5 text-blue-600" />
                Current prompt
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-slate-950 sm:text-3xl">
                {question.question}
              </h2>
              {question.description && (
                <p className="mt-3 text-slate-600">{question.description}</p>
              )}
            </div>

            <div className="space-y-4">
              {question.type === 'single' && question.options && (
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <label
                      key={index}
                      className={cn(
                        'flex items-start gap-4 rounded-[1.35rem] border p-4 transition-all duration-200 cursor-pointer',
                        answers[question.id] === index
                          ? 'border-blue-300 bg-blue-50 shadow-[0_12px_28px_rgba(20,93,255,0.08)]'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50',
                      )}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={index}
                        checked={answers[question.id] === index}
                        onChange={(e) => handleAnswer(question.id, parseInt(e.target.value))}
                        className="sr-only"
                      />
                      <div
                        className={cn(
                          'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2',
                          answers[question.id] === index ? 'border-blue-500 bg-blue-500' : 'border-slate-300 bg-white',
                        )}
                      >
                        {answers[question.id] === index && <div className="h-2.5 w-2.5 rounded-full bg-white" />}
                      </div>
                      <span className="text-sm leading-6 text-slate-900">{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {question.type === 'multiple' && question.options && (
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <label
                      key={index}
                      className={cn(
                        'flex items-start gap-4 rounded-[1.35rem] border p-4 transition-all duration-200 cursor-pointer',
                        answers[question.id]?.includes(option)
                          ? 'border-blue-300 bg-blue-50 shadow-[0_12px_28px_rgba(20,93,255,0.08)]'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50',
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={answers[question.id]?.includes(option) || false}
                        onChange={(e) => {
                          const currentAnswers = answers[question.id] || []
                          if (e.target.checked) {
                            handleAnswer(question.id, [...currentAnswers, option])
                          } else {
                            handleAnswer(question.id, currentAnswers.filter((a: string) => a !== option))
                          }
                        }}
                        className="sr-only"
                      />
                      <div
                        className={cn(
                          'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2',
                          answers[question.id]?.includes(option) ? 'border-blue-500 bg-blue-500' : 'border-slate-300 bg-white',
                        )}
                      >
                        {answers[question.id]?.includes(option) && <CheckCircle className="h-4 w-4 text-white" />}
                      </div>
                      <span className="text-sm leading-6 text-slate-900">{option}</span>
                    </label>
                  ))}
                </div>
              )}

              {question.type === 'scale' && (
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-slate-500">
                    <span>{question.scaleLabels?.min}</span>
                    <span>{question.scaleLabels?.max}</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    {Array.from({ length: question.scaleMax! - question.scaleMin! + 1 }, (_, i) => {
                      const value = question.scaleMin! + i
                      return (
                        <label key={value} className="flex flex-1 flex-col items-center cursor-pointer">
                          <input
                            type="radio"
                            name={question.id}
                            value={value}
                            checked={answers[question.id] === value}
                            onChange={(e) => handleAnswer(question.id, parseInt(e.target.value))}
                            className="sr-only"
                          />
                          <div
                            className={cn(
                              'flex h-10 w-10 items-center justify-center rounded-full border-2',
                              answers[question.id] === value
                                ? 'border-blue-500 bg-blue-500 text-white'
                                : 'border-slate-300 text-slate-600',
                            )}
                          >
                            {value}
                          </div>
                        </label>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-200 pt-6">
              <button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className={cn(
                  'btn-modern inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold',
                  currentQuestion === 0
                    ? 'cursor-not-allowed text-slate-300'
                    : 'border border-slate-200 bg-white text-slate-800',
                )}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </button>

              <button
                onClick={nextQuestion}
                disabled={answers[question.id] === undefined || answers[question.id] === null}
                className={cn(
                  'btn-modern inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold',
                  answers[question.id] === undefined || answers[question.id] === null
                    ? 'cursor-not-allowed bg-slate-200 text-slate-400'
                    : 'bg-slate-950 text-white',
                )}
              >
                {currentQuestion === questions.length - 1 ? 'Get results' : 'Next'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
