import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Brain
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
      const unansweredQuestions = questions.filter(q => typeof answers[q.id] === 'undefined' || answers[q.id] === null)
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Assessment Complete!</h1>
            <p className="text-xl text-gray-600">Here are your personalized career recommendations</p>
          </div>

          <div className="space-y-6">
            {results.map((result, index) => {
              const roleData = roleInfo[result.role]
              const matchColor = result.percentage >= 80 ? 'text-green-600' : 
                                result.percentage >= 60 ? 'text-blue-600' : 'text-yellow-600'
              const bgColor = result.percentage >= 80 ? 'bg-green-50 border-green-200' : 
                             result.percentage >= 60 ? 'bg-blue-50 border-blue-200' : 'bg-yellow-50 border-yellow-200'
              
              return (
                <div
                  key={result.role}
                  className={`rounded-xl shadow-lg border-2 p-6 transition-all duration-200 hover:shadow-xl ${bgColor}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        #{index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {roleData?.title || result.role}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {roleData?.description || 'Tech career opportunity'}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-3xl font-bold ${matchColor}`}>{result.percentage}%</span>
                      </div>
                      <span className="text-gray-500 text-sm">compatibility</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                      Why this matches you:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {result.reasoning.map((reason, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => navigate(`/roadmap/${result.role}`)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      View Learning Roadmap
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => navigate('/career-guide')}
                      className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-medium transition-colors duration-200"
                    >
                      Compare Roles
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={restartAssessment}
              className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-medium transition-colors duration-200 mr-4"
            >
              Retake Assessment
            </button>
            <button
              onClick={() => navigate('/career-guide')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Explore All Careers
            </button>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Assessment</h1>
          <p className="text-xl text-gray-600">
            Discover your ideal tech career path through our comprehensive assessment
          </p>
          
          {/* Test buttons for debugging */}
          <div className="flex gap-2 justify-center mt-4">
            <button
              onClick={() => {
                const testAnswers = {
                  q1: 0, q2: 0, q3: 0, q4: 0, q5: 0,
                  q6: 0, q7: 0, q8: 0, q9: 0, q10: 0,
                  q11: 0, q12: 0, q13: 0, q14: 0, q15: 0
                }
                setAnswers(testAnswers)
              }}
              className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm"
            >
              Test: Set All Frontend Answers
            </button>
            
            <button
              onClick={() => {
                if (Object.keys(answers).length === 15) {
                  calculateResults()
                } else {
                  alert('Please answer all questions first or use the test button above')
                }
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm"
            >
              Test: Calculate Results
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-500 h-3 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {question.question}
            </h2>
            {question.description && (
              <p className="text-gray-600">{question.description}</p>
            )}
          </div>

          {/* Question Content */}
          <div className="space-y-4">
            {question.type === 'single' && question.options && (
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <label
                    key={index}
                    className={cn(
                      'flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200',
                      answers[question.id] === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
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
                    <div className={cn(
                      'w-4 h-4 rounded-full border-2 mr-3',
                      answers[question.id] === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    )}>
                      {answers[question.id] === index && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                      )}
                    </div>
                    <span className="text-gray-900">{option}</span>
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
                      'flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200',
                      answers[question.id]?.includes(option)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
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
                    <div className={cn(
                      'w-4 h-4 rounded border-2 mr-3 flex items-center justify-center',
                      answers[question.id]?.includes(option)
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    )}>
                      {answers[question.id]?.includes(option) && (
                        <CheckCircle className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="text-gray-900">{option}</span>
                  </label>
                ))}
              </div>
            )}

            {question.type === 'scale' && (
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{question.scaleLabels?.min}</span>
                  <span>{question.scaleLabels?.max}</span>
                </div>
                <div className="flex justify-between">
                  {Array.from({ length: question.scaleMax! - question.scaleMin! + 1 }, (_, i) => {
                    const value = question.scaleMin! + i
                    return (
                      <label key={value} className="flex flex-col items-center cursor-pointer">
                        <input
                          type="radio"
                          name={question.id}
                          value={value}
                          checked={answers[question.id] === value}
                          onChange={(e) => handleAnswer(question.id, parseInt(e.target.value))}
                          className="sr-only"
                        />
                        <div className={cn(
                          'w-8 h-8 rounded-full border-2 flex items-center justify-center mb-2',
                          answers[question.id] === value
                            ? 'border-blue-500 bg-blue-500 text-white'
                            : 'border-gray-300 text-gray-600'
                        )}>
                          {value}
                        </div>
                      </label>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={cn(
              'flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200',
              currentQuestion === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </button>
          
          <button
            onClick={nextQuestion}
            disabled={typeof answers[question.id] === 'undefined' || answers[question.id] === null}
            className={cn(
              'flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200',
              typeof answers[question.id] === 'undefined' || answers[question.id] === null
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            )}
          >
            {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
