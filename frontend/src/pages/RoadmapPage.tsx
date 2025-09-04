import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import {
  Code,
  TrendingUp,
  Star,
  Globe,
  ExternalLink,
  CheckCircle,
  Target,
  Trophy,
  BookOpen,
  Zap,
  BarChart3,
  Brain,
  Users,
  Settings,
  ArrowRight
} from 'lucide-react'
import { cn } from '@/utils/cn'
import { useProgress } from '@/context/ProgressContext'
import { useAuth } from '@/context/AuthContext'
import IndividualSkillTracker from '@/components/IndividualSkillTracker'
import SkillProgressOverview from '@/components/SkillProgressOverview'
import CertificationResources from '@/components/CertificationResources'
import { ProgressCheckbox, ProgressBar, ProgressStats } from '@/components/ui/ProgressComponents'
import { skillsData } from '@/data/skillsData'

export default function RoadmapPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [activeRole, setActiveRole] = useState('frontend')
  const [activeYear, setActiveYear] = useState('0-1')
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD')

  const { getItemProgress, markItemComplete, getYearProgress } = useProgress()

  const formatPrice = (price: string | undefined, currency: 'USD' | 'INR') => {
    if (!price) return 'Free'
    
    if (currency === 'INR') {
      // Extract numeric value and unit from price
      const match = price.match(/\$?(\d+(?:\.\d+)?)\s*(\S+)?/)
      if (!match) return price
      
      const [, numericValueStr, unit = ''] = match
      const numericValue = parseFloat(numericValueStr)
      
      let inrValue: number
      
      // Apply different conversion rates based on pricing model
      if (unit.includes('month') || unit.includes('/month')) {
        // Monthly subscriptions: 25-35% lower than direct conversion
        inrValue = numericValue * 83 * 0.7
      } else {
        // One-time purchases: 20-30% lower than direct conversion
        inrValue = numericValue * 83 * 0.75
      }
      
      // Format the price
      if (inrValue >= 1000) {
        return `₹${Math.round(inrValue / 1000)}K${unit}`
      } else {
        return `₹${Math.round(inrValue)}${unit}`
      }
    }
    
    return price
  }

  // Set initial role from URL query parameter or user's target role
  useEffect(() => {
    const roleFromUrl = searchParams.get('role')
    if (roleFromUrl && (skillsData as any)[roleFromUrl]) {
      setActiveRole(roleFromUrl)
    } else if (user?.targetRole) {
      // Map user's target role to our role keys
      const userRole = user.targetRole.toLowerCase()
      let mappedRole = 'frontend' // default fallback
      
      if (userRole.includes('frontend')) mappedRole = 'frontend'
      else if (userRole.includes('backend')) mappedRole = 'backend'
      else if (userRole.includes('full') || userRole.includes('stack')) mappedRole = 'fullstack'
      else if (userRole.includes('mobile') || userRole.includes('app')) mappedRole = 'mobile'
      else if (userRole.includes('game')) mappedRole = 'game'
      else if (userRole.includes('data') && userRole.includes('scientist')) mappedRole = 'datascientist'
      else if (userRole.includes('data') && userRole.includes('engineer')) mappedRole = 'dataengineer'
      else if (userRole.includes('ml') || userRole.includes('learning')) mappedRole = 'mle'
      else if (userRole.includes('ai') && userRole.includes('specialist')) mappedRole = 'aispecialist'
      else if (userRole.includes('generative')) mappedRole = 'generativeai'
      else if (userRole.includes('computer') && userRole.includes('vision')) mappedRole = 'computervision'
      else if (userRole.includes('nlp')) mappedRole = 'nlpengineer'
      else if (userRole.includes('devops')) mappedRole = 'devops'
      else if (userRole.includes('cloud')) mappedRole = 'cloudengineer'
      else if (userRole.includes('sre') || userRole.includes('reliability')) mappedRole = 'sre'
      else if (userRole.includes('cyber') || userRole.includes('security')) mappedRole = 'cybersecurity'
      else if (userRole.includes('qa') || userRole.includes('test')) mappedRole = 'qaengineer'
      else if (userRole.includes('ui') || userRole.includes('ux') || userRole.includes('designer')) mappedRole = 'uidesigner'
      else if (userRole.includes('product') && userRole.includes('manager')) mappedRole = 'productmanager'
      else if (userRole.includes('tech') && userRole.includes('manager')) mappedRole = 'techmanager'
      else if (userRole.includes('cto')) mappedRole = 'cto'
      else if (userRole.includes('blockchain')) mappedRole = 'blockchain'
      else if (userRole.includes('web3')) mappedRole = 'web3'
      else if (userRole.includes('system') && userRole.includes('programmer')) mappedRole = 'systemprogrammer'
      else if (userRole.includes('compiler')) mappedRole = 'compilerengineer'
      else if (userRole.includes('network')) mappedRole = 'networkengineer'
      else if (userRole.includes('embedded')) mappedRole = 'embeddedengineer'
      else if (userRole.includes('database') && userRole.includes('admin')) mappedRole = 'databaseadmin'
      else if (userRole.includes('data') && userRole.includes('visualization')) mappedRole = 'datavisualization'
      else if (userRole.includes('aiops')) mappedRole = 'aiops'
      else if (userRole.includes('quantum')) mappedRole = 'quantumcomputing'
      else if (userRole.includes('technical') && userRole.includes('writer')) mappedRole = 'technicalwriter'
      else if (userRole.includes('fintech')) mappedRole = 'fintech'
      else if (userRole.includes('healthcare')) mappedRole = 'healthcare'
      else if (userRole.includes('gaming')) mappedRole = 'gaming'
      else if (userRole.includes('edutech')) mappedRole = 'edutech'
      
      setActiveRole(mappedRole)
    }
  }, [searchParams, user?.targetRole])

  // Removed handleRoleSwitch as it's no longer needed with the new role selection approach

  const roleOptions = [
    { 
      key: 'frontend', 
      label: 'Frontend Developer', 
      icon: Code,
      description: 'Build beautiful, responsive user interfaces',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      key: 'backend', 
      label: 'Backend Developer', 
      icon: Code,
      description: 'Create robust server-side applications and APIs',
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      key: 'fullstack', 
      label: 'Full Stack Developer', 
      icon: Code,
      description: 'Master both frontend and backend development',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      key: 'mobile', 
      label: 'Mobile Developer', 
      icon: Code,
      description: 'Build native and cross-platform mobile apps',
      color: 'from-orange-500 to-red-500'
    },
    { 
      key: 'game', 
      label: 'Game Developer', 
      icon: Code,
      description: 'Create engaging games and interactive experiences',
      color: 'from-red-500 to-pink-500'
    },
    { 
      key: 'datascientist', 
      label: 'Data Scientist', 
      icon: BarChart3,
      description: 'Extract insights and build predictive models from data',
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      key: 'dataengineer', 
      label: 'Data Engineer', 
      icon: Code,
      description: 'Build and maintain data pipelines and infrastructure',
      color: 'from-teal-500 to-green-500'
    },
    { 
      key: 'mle', 
      label: 'ML Engineer', 
      icon: Brain,
      description: 'Deploy and scale machine learning systems',
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      key: 'aispecialist', 
      label: 'AI Specialist', 
      icon: Brain,
      description: 'Develop cutting-edge artificial intelligence solutions',
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      key: 'cloudengineer', 
      label: 'Cloud Engineer', 
      icon: Globe,
      description: 'Design and manage cloud infrastructure',
      color: 'from-sky-500 to-blue-500'
    },
    { 
      key: 'devops', 
      label: 'DevOps Engineer', 
      icon: Globe,
      description: 'Streamline development and deployment processes',
      color: 'from-green-500 to-teal-500'
    },
    { 
      key: 'sre', 
      label: 'Site Reliability Engineer', 
      icon: Globe,
      description: 'Ensure system reliability and performance',
      color: 'from-orange-500 to-yellow-500'
    },
    { 
      key: 'uidesigner', 
      label: 'UI Designer', 
      icon: Code,
      description: 'Design beautiful and intuitive user interfaces',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      key: 'cybersecurity', 
      label: 'Cybersecurity Specialist', 
      icon: Code,
      description: 'Protect systems and data from security threats',
      color: 'from-red-500 to-orange-500'
    },
    { 
      key: 'productmanager', 
      label: 'Product Manager', 
      icon: Users,
      description: 'Drive product strategy and development',
      color: 'from-blue-500 to-purple-500'
    },
    { 
      key: 'qaengineer', 
      label: 'QA Engineer', 
      icon: CheckCircle,
      description: 'Ensure software quality through testing',
      color: 'from-emerald-500 to-green-500'
    },
    { 
      key: 'technicalwriter', 
      label: 'Technical Writer', 
      icon: BookOpen,
      description: 'Create clear and comprehensive technical documentation',
      color: 'from-slate-500 to-gray-500'
    },
    { 
      key: 'embeddedengineer', 
      label: 'Embedded Engineer', 
      icon: Code,
      description: 'Develop software for embedded systems and IoT devices',
      color: 'from-amber-500 to-orange-500'
    },
    { 
      key: 'systemprogrammer', 
      label: 'System Programmer', 
      icon: Code,
      description: 'Develop low-level system software and operating systems',
      color: 'from-gray-500 to-slate-500'
    },
    { 
      key: 'compilerengineer', 
      label: 'Compiler Engineer', 
      icon: Code,
      description: 'Design and optimize programming language compilers',
      color: 'from-violet-500 to-purple-500'
    },
    { 
      key: 'datavisualization', 
      label: 'Data Visualization Engineer', 
      icon: BarChart3,
      description: 'Create compelling visual representations of data',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      key: 'nlpengineer', 
      label: 'NLP Engineer', 
      icon: Brain,
      description: 'Build natural language processing applications',
      color: 'from-green-500 to-blue-500'
    },
    { 
      key: 'computervision', 
      label: 'Computer Vision Engineer', 
      icon: Brain,
      description: 'Develop systems that can interpret and understand visual data',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      key: 'networkengineer', 
      label: 'Network Engineer', 
      icon: Globe,
      description: 'Design and maintain computer networks',
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      key: 'databaseadmin', 
      label: 'Database Administrator', 
      icon: Code,
      description: 'Manage and optimize database systems',
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      key: 'blockchain', 
      label: 'Blockchain Developer', 
      icon: Code,
      description: 'Build decentralized applications and smart contracts',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      key: 'web3', 
      label: 'Web3 Developer', 
      icon: Code,
      description: 'Create the next generation of decentralized web applications',
      color: 'from-orange-500 to-red-500'
    },
    { 
      key: 'aiops', 
      label: 'AIOps Engineer', 
      icon: Brain,
      description: 'Apply AI to IT operations and infrastructure management',
      color: 'from-cyan-500 to-teal-500'
    },
    { 
      key: 'quantumcomputing', 
      label: 'Quantum Computing Engineer', 
      icon: Brain,
      description: 'Develop quantum algorithms and quantum software',
      color: 'from-violet-500 to-indigo-500'
    },
    { 
      key: 'generativeai', 
      label: 'Generative AI Engineer', 
      icon: Brain,
      description: 'Create AI systems that generate content and creative solutions',
      color: 'from-pink-500 to-purple-500'
    },
    { 
      key: 'techmanager', 
      label: 'Tech Manager', 
      icon: Users,
      description: 'Lead and manage technical teams and projects',
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      key: 'cto', 
      label: 'Chief Technology Officer', 
      icon: Users,
      description: 'Oversee all technical aspects of a company',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const yearOptions = [
    { key: '0-1', label: '0-1 Years', icon: Code },
    { key: '1-3', label: '1-3 Years', icon: TrendingUp },
    { key: '3-5', label: '3-5 Years', icon: Globe },
    { key: '5+', label: '5+ Years', icon: Brain }
  ]

  const currentData = skillsData[activeRole]?.roadmap[activeYear]

  if (!currentData) {
    return <div className="text-center py-20 text-gray-600">Roadmap data not found for selected role and year.</div>
  }

  return (
    <div className="min-h-screen page-transition bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="mx-auto h-20 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl mb-6 transform hover:scale-105 transition-all duration-300 animate-bounce-gentle">
            {activeRole === 'frontend' ? (
              <Code className="h-10 w-10 text-white" />
            ) : activeRole === 'backend' ? (
              <Code className="h-10 w-10 text-white" />
            ) : activeRole === 'datascientist' ? (
              <BarChart3 className="h-10 w-10 text-white" />
            ) : activeRole === 'mle' || activeRole === 'aispecialist' ? (
              <Brain className="h-10 w-10 text-white" />
            ) : activeRole === 'productmanager' || activeRole === 'techmanager' || activeRole === 'cto' ? (
              <Users className="h-10 w-10 text-white" />
            ) : activeRole === 'qaengineer' ? (
              <CheckCircle className="h-10 w-10 text-white" />
            ) : activeRole === 'technicalwriter' ? (
              <BookOpen className="h-10 w-10 text-white" />
            ) : activeRole === 'cloudengineer' || activeRole === 'devops' || activeRole === 'sre' || activeRole === 'networkengineer' ? (
              <Globe className="h-10 w-10 text-white" />
            ) : (
              <Code className="h-10 w-10 text-white" />
            )}
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-slide-in">
            Career Roadmap
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your personalized learning journey to becoming a professional developer
          </p>
        </div>

        {/* Current Role Display */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 p-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800">Current Role</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600">Currency:</span>
              <button
                onClick={() => setCurrency('USD')}
                className={cn(
                  "px-3 py-1 rounded text-sm font-medium transition-colors",
                  currency === 'USD' ? "bg-blue-100 text-blue-800" : "text-gray-600 hover:text-blue-600"
                )}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency('INR')}
                className={cn(
                  "px-3 py-1 rounded text-sm font-medium transition-colors",
                  currency === 'INR' ? "bg-blue-100 text-blue-800" : "text-gray-600 hover:text-blue-600"
                )}
              >
                INR
              </button>
            </div>
          </div>
          
          {/* Current Role Card */}
          <div className="flex items-center justify-between p-4 rounded-xl border-2 border-primary-500 bg-primary-50 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary-500 flex items-center justify-center">
                {activeRole === 'frontend' ? (
                  <Code className="h-6 w-6 text-white" />
                ) : activeRole === 'backend' ? (
                  <Code className="h-6 w-6 text-white" />
                ) : activeRole === 'datascientist' ? (
                  <BarChart3 className="h-6 w-6 text-white" />
                ) : activeRole === 'mle' || activeRole === 'aispecialist' ? (
                  <Brain className="h-6 w-6 text-white" />
                ) : activeRole === 'productmanager' || activeRole === 'techmanager' || activeRole === 'cto' ? (
                  <Users className="h-6 w-6 text-white" />
                ) : activeRole === 'qaengineer' ? (
                  <CheckCircle className="h-6 w-6 text-white" />
                ) : activeRole === 'technicalwriter' ? (
                  <BookOpen className="h-6 w-6 text-white" />
                ) : activeRole === 'cloudengineer' || activeRole === 'devops' || activeRole === 'sre' || activeRole === 'networkengineer' ? (
                  <Globe className="h-6 w-6 text-white" />
                ) : (
                  <Code className="h-6 w-6 text-white" />
                )}
              </div>
              <div>
                <h4 className="font-semibold text-primary-700 text-lg">
                  {roleOptions.find(role => role.key === activeRole)?.label}
                </h4>
                <p className="text-sm text-primary-600">
                  {roleOptions.find(role => role.key === activeRole)?.description}
                </p>
                {user?.targetRole && (
                  <p className="text-xs text-gray-500 mt-1">
                    Your selected role: {user.targetRole}
                  </p>
                )}
              </div>
            </div>
            
            <button
              onClick={() => navigate('/roles')}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-primary-300 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors"
            >
              <Settings className="h-4 w-4" />
              <span>Change Job Role</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Year Selection */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 p-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Select Experience Level</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {yearOptions.map((year) => (
              <button
                key={year.key}
                onClick={() => setActiveYear(year.key)}
                className={cn(
                  "p-4 rounded-xl border-2 transition-all duration-300 text-center group",
                  activeYear === year.key
                    ? "border-primary-500 bg-primary-50 shadow-lg scale-105"
                    : "border-gray-200 bg-white hover:border-primary-300 hover:shadow-md hover:scale-102"
                )}
              >
                <div className="flex items-center justify-center mb-2">
                  <div className={cn(
                    "h-10 w-10 rounded-full flex items-center justify-center transition-colors",
                    activeYear === year.key ? "bg-primary-500" : "bg-gray-100 group-hover:bg-primary-100"
                  )}>
                    <year.icon className={cn(
                      "h-5 w-5 transition-colors",
                      activeYear === year.key ? "text-white" : "text-gray-600 group-hover:text-primary-600"
                    )} />
                  </div>
                </div>
                <span className={cn(
                  "font-medium text-sm transition-colors",
                  activeYear === year.key ? "text-primary-700" : "text-gray-900"
                )}>
                  {year.label}
                </span>
              </button>
            ))}
          </div>
        </div>



        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <ProgressStats
            totalItems={currentData?.skills?.length || 0}
            completedItems={currentData?.skills?.filter((_: any, index: number) => getItemProgress(activeRole, activeYear, 'skills', index)).length || 0}
            title="Skills Mastered"
            icon={Target}
          />
          <ProgressStats
            totalItems={currentData?.projects?.length || 0}
            completedItems={currentData?.projects?.filter((_: any, index: number) => getItemProgress(activeRole, activeYear, 'projects', index)).length || 0}
            title="Projects Completed"
            icon={Trophy}
          />
          <ProgressStats
            totalItems={(currentData?.freeResources?.length || 0) + (currentData?.paidResources?.length || 0)}
            completedItems={
              (currentData?.freeResources?.filter((_: any, index: number) => getItemProgress(activeRole, activeYear, 'freeResources', index)).length || 0) +
              (currentData?.paidResources?.filter((_: any, index: number) => getItemProgress(activeRole, activeYear, 'paidResources', index)).length || 0)
            }
            title="Resources Completed"
            icon={BookOpen}
          />
        </div>

        {/* Year Progress Overview */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 p-6 mb-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800">Overall Progress</h3>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <BarChart3 className="h-4 w-4" />
              {Math.round(getYearProgress(activeRole, activeYear))}% Complete
            </div>
          </div>
          <ProgressBar
            progress={getYearProgress(activeRole, activeYear)}
            color="emerald"
            size="lg"
            animated={true}
          />
        </div>

        {/* Individual Skill Progress Overview */}
        {skillsData[activeRole]?.detailedSkills && (
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <SkillProgressOverview
              roleId={activeRole}
              yearId={activeYear}
              detailedSkills={skillsData[activeRole]?.detailedSkills}
            />
          </div>
        )}

        {/* Certification Resources */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <CertificationResources
            certifications={skillsData[activeRole]?.certifications || []}
            youtubePlaylists={skillsData[activeRole]?.youtubePlaylists || []}
            currency={currency}
          />
        </div>

        {/* Main Content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          {/* Header with gradient */}
          <div className={cn('bg-gradient-to-r', skillsData[activeRole]?.color)}>
            <div className="px-8 py-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 bg-white/20 rounded-xl flex items-center justify-center">
                  {React.createElement(skillsData[activeRole]?.icon, { className: "h-8 w-8 text-white" })}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{currentData?.title}</h2>
                  <p className="text-white/90 text-lg">{currentData?.goal}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Skills & Topics */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary-600" />
                  Skills & Topics
                </h3>
                <div className="space-y-3">
                  {currentData?.skills?.map((skill: string, index: number) => (
                    <ProgressCheckbox
                      key={index}
                      checked={getItemProgress(activeRole, activeYear, 'skills', index)}
                      onChange={(checked) => markItemComplete(activeRole, activeYear, 'skills', index, checked)}
                      label={skill}
                    />
                  ))}
                </div>
              </div>

              {/* Individual Skill Tracking */}
              {skillsData[activeRole]?.detailedSkills && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary-600" />
                    Detailed Skill Tracking
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(skillsData[activeRole]?.detailedSkills || {}).map(([skillName, subSkills]) => (
                      <IndividualSkillTracker
                        key={skillName}
                        roleId={activeRole}
                        yearId={activeYear}
                        skillName={skillName}
                        subSkills={subSkills as string[]}
                        isAuthenticated={true}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Milestone Projects */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-600" />
                  Milestone Projects
                </h3>
                <div className="space-y-3">
                  {currentData?.projects?.map((project: string, index: number) => (
                    <ProgressCheckbox
                      key={index}
                      checked={getItemProgress(activeRole, activeYear, 'projects', index)}
                      onChange={(checked) => markItemComplete(activeRole, activeYear, 'projects', index, checked)}
                      label={project}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Free Resources */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  Free Resources
                </h3>
                <div className="space-y-4">
                  {currentData?.freeResources?.map((resource: any, index: number) => {
                    // Handle both string and object formats
                    const title = typeof resource === 'string' ? resource : resource.title || 'Resource';
                    const url = typeof resource === 'string' ? '#' : resource.url || '#';
                    const description = typeof resource === 'string' ? 'Learning resource for skill development' : resource.description || 'Learning resource for skill development';
                    
                    return (
                      <div key={index} className={cn(
                        "border rounded-lg p-4 transition-all duration-200",
                        getItemProgress(activeRole, activeYear, 'freeResources', index)
                          ? "bg-emerald-50 border-emerald-200"
                          : "bg-green-50 border-green-200"
                      )}>
                        <div className="flex items-center justify-between">
                          <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-900 hover:text-primary-600 transition-colors flex-1">
                            {title} <ExternalLink className="inline-block h-3 w-3 ml-1 text-gray-400" />
                          </a>
                          <ProgressCheckbox
                            checked={getItemProgress(activeRole, activeYear, 'freeResources', index)}
                            onChange={(checked) => markItemComplete(activeRole, activeYear, 'freeResources', index, checked)}
                            label=""
                            disabled={false}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Paid Resources */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-600" />
                  Paid Resources
                </h3>
                <div className="space-y-4">
                  {currentData?.paidResources?.map((resource: any, index: number) => {
                    // Handle both string and object formats
                    const title = typeof resource === 'string' ? resource : resource.title || 'Resource';
                    const url = typeof resource === 'string' ? '#' : resource.url || '#';
                    const description = typeof resource === 'string' ? 'Learning resource for skill development' : resource.description || 'Learning resource for skill development';
                    
                    return (
                      <div key={index} className={cn(
                        "border rounded-lg p-4 transition-all duration-200",
                        getItemProgress(activeRole, activeYear, 'paidResources', index)
                          ? "bg-emerald-50 border-emerald-200"
                          : "bg-orange-50 border-orange-200"
                      )}>
                        <div className="flex items-center justify-between">
                          <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-900 hover:text-primary-600 transition-colors flex-1">
                            {title} <ExternalLink className="inline-block h-3 w-3 ml-1 text-gray-400" />
                          </a>
                          <ProgressCheckbox
                            checked={getItemProgress(activeRole, activeYear, 'paidResources', index)}
                            onChange={(checked) => markItemComplete(activeRole, activeYear, 'paidResources', index, checked)}
                            label=""
                            disabled={false}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{description}</p>
                        {typeof resource === 'object' && resource.price && (
                          <p className="text-xs text-gray-700 font-semibold mt-1">Price: {formatPrice(resource.price, currency)}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
