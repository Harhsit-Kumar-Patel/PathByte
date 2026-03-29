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
  const activeRoleMeta = roleOptions.find((role) => role.key === activeRole)
  const ActiveRoleIcon = skillsData[activeRole]?.icon || activeRoleMeta?.icon || Code
  const completedSkills = currentData?.skills?.filter((_: any, index: number) => getItemProgress(activeRole, activeYear, 'skills', index)).length || 0
  const completedProjects = currentData?.projects?.filter((_: any, index: number) => getItemProgress(activeRole, activeYear, 'projects', index)).length || 0
  const completedResources =
    (currentData?.freeResources?.filter((_: any, index: number) => getItemProgress(activeRole, activeYear, 'freeResources', index)).length || 0) +
    (currentData?.paidResources?.filter((_: any, index: number) => getItemProgress(activeRole, activeYear, 'paidResources', index)).length || 0)
  const yearProgress = getYearProgress(activeRole, activeYear)

  const normalizeResource = (resource: any) => ({
    title: typeof resource === 'string' ? resource : resource.title || 'Resource',
    url: typeof resource === 'string' ? '#' : resource.url || '#',
    description:
      typeof resource === 'string'
        ? 'Learning resource for skill development'
        : resource.description || 'Learning resource for skill development',
    price: typeof resource === 'object' ? resource.price : undefined,
  })

  if (!currentData) {
    return <div className="text-center py-20 text-gray-600">Roadmap data not found for selected role and year.</div>
  }

  return (
    <div className="overflow-hidden px-4 pb-16 pt-4 sm:px-6 lg:px-8">
      <div className="hero-orb left-[-5rem] top-14 h-56 w-56 bg-sky-300/30" />
      <div className="hero-orb right-[-4rem] top-24 h-72 w-72 bg-blue-300/24" style={{ animationDelay: '1.8s' }} />

      <div className="mx-auto max-w-7xl space-y-8">
        <section className="surface-panel-strong rounded-[2.4rem] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="section-kicker">
                <Target className="h-3.5 w-3.5 text-blue-600" />
                Full roadmap workspace
              </div>
              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-slate-950 text-white shadow-soft-xl">
                  <ActiveRoleIcon className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                    {activeRoleMeta?.label || 'Career Roadmap'}
                  </h1>
                  <p className="mt-2 max-w-3xl text-lg leading-8 text-slate-600">
                    {activeRoleMeta?.description || 'A structured path with clearer hierarchy, calmer spacing, and balanced sections across the page.'}
                  </p>
                </div>
              </div>
              {user?.targetRole && (
                <p className="mt-4 text-sm text-slate-500">Your selected role: {user.targetRole}</p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card-modern p-5">
                <p className="text-sm font-semibold text-slate-500">Current stage</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{activeYear} years</p>
                <p className="mt-2 text-sm text-slate-600">{currentData?.title}</p>
              </div>
              <div className="card-modern p-5">
                <p className="text-sm font-semibold text-slate-500">Progress</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{Math.round(yearProgress)}%</p>
                <p className="mt-2 text-sm text-slate-600">{currentData?.goal}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="surface-panel rounded-[2rem] p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-950">Experience band</h2>
                <p className="mt-1 text-sm text-slate-600">Switch across career stages without losing your place in the roadmap layout.</p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1">
                <button
                  onClick={() => setCurrency('USD')}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                    currency === 'USD' ? 'bg-slate-950 text-white' : 'text-slate-600 hover:text-slate-950',
                  )}
                >
                  USD
                </button>
                <button
                  onClick={() => setCurrency('INR')}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                    currency === 'INR' ? 'bg-slate-950 text-white' : 'text-slate-600 hover:text-slate-950',
                  )}
                >
                  INR
                </button>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {yearOptions.map((year) => (
                <button
                  key={year.key}
                  onClick={() => setActiveYear(year.key)}
                  className={cn(
                    'rounded-[1.4rem] border px-4 py-4 text-left transition-all duration-300',
                    activeYear === year.key
                      ? 'border-blue-200 bg-blue-50 shadow-[0_16px_30px_rgba(20,93,255,0.10)]'
                      : 'border-slate-200 bg-white hover:border-slate-300',
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className={cn('flex h-10 w-10 items-center justify-center rounded-2xl', activeYear === year.key ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-600')}>
                      <year.icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400">{year.key}</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-950">{year.label}</p>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate('/roles')}
            className="btn-modern inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800"
          >
            <Settings className="mr-2 h-4 w-4" />
            Change role
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <ProgressStats
            totalItems={currentData?.skills?.length || 0}
            completedItems={completedSkills}
            title="Skills Mastered"
            icon={Target}
          />
          <ProgressStats
            totalItems={currentData?.projects?.length || 0}
            completedItems={completedProjects}
            title="Projects Completed"
            icon={Trophy}
          />
          <ProgressStats
            totalItems={(currentData?.freeResources?.length || 0) + (currentData?.paidResources?.length || 0)}
            completedItems={completedResources}
            title="Resources Completed"
            icon={BookOpen}
          />
          <div className="card-modern p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">Overall progress</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">{Math.round(yearProgress)}%</p>
              </div>
              <BarChart3 className="h-6 w-6 text-slate-400" />
            </div>
          </div>
        </section>

        <section className="surface-panel-strong rounded-[2rem] p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-950">Progress overview</h3>
              <p className="mt-1 text-sm text-slate-600">A single progress bar anchors the page and keeps the main roadmap blocks aligned underneath it.</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
              <BarChart3 className="h-4 w-4" />
              {Math.round(yearProgress)}% complete
            </div>
          </div>
          <ProgressBar
            progress={yearProgress}
            color="emerald"
            size="lg"
            animated={true}
          />
        </section>

        {skillsData[activeRole]?.detailedSkills && (
          <section>
            <SkillProgressOverview
              roleId={activeRole}
              yearId={activeYear}
              detailedSkills={skillsData[activeRole]?.detailedSkills}
            />
          </section>
        )}

        <section>
          <CertificationResources
            certifications={currentData?.certifications || skillsData[activeRole]?.certifications || []}
            youtubePlaylists={currentData?.youtubePlaylists || skillsData[activeRole]?.youtubePlaylists || []}
            currency={currency}
          />
        </section>

        <section className="overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white shadow-medium">
          <div className={cn('bg-gradient-to-r px-8 py-7', skillsData[activeRole]?.color)}>
            <div className="grid gap-4 lg:grid-cols-[auto_1fr] lg:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-white/16 text-white">
                {React.createElement(ActiveRoleIcon, { className: "h-8 w-8" })}
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-white">{currentData?.title}</h2>
                  <p className="mt-1 text-base text-white/90">{currentData?.goal}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 p-6 lg:grid-cols-2 lg:p-8">
            <div className="space-y-8">
              <div className="surface-panel rounded-[1.8rem] p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-950">
                  <Target className="h-5 w-5 text-blue-600" />
                  Skills and topics
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

              {skillsData[activeRole]?.detailedSkills && (
                <div className="surface-panel rounded-[1.8rem] p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-950">
                    <Target className="h-5 w-5 text-blue-600" />
                    Detailed skill tracking
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

              <div className="surface-panel rounded-[1.8rem] p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-950">
                  <Star className="h-5 w-5 text-amber-600" />
                  Milestone projects
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

            <div className="space-y-8">
              <div className="surface-panel rounded-[1.8rem] p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-950">
                  <Globe className="h-5 w-5 text-emerald-600" />
                  Free resources
                </h3>
                <div className="space-y-4">
                  {currentData?.freeResources?.map((resource: any, index: number) => {
                    const normalized = normalizeResource(resource)
                    return (
                      <div key={index} className={cn(
                        "rounded-[1.25rem] border p-4 transition-all duration-200",
                        getItemProgress(activeRole, activeYear, 'freeResources', index)
                          ? "bg-emerald-50 border-emerald-200"
                          : "bg-green-50 border-green-200"
                      )}>
                        <div className="flex items-center justify-between">
                          <a href={normalized.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-900 hover:text-primary-600 transition-colors flex-1">
                            {normalized.title} <ExternalLink className="inline-block h-3 w-3 ml-1 text-gray-400" />
                          </a>
                          <ProgressCheckbox
                            checked={getItemProgress(activeRole, activeYear, 'freeResources', index)}
                            onChange={(checked) => markItemComplete(activeRole, activeYear, 'freeResources', index, checked)}
                            label=""
                            disabled={false}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{normalized.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="surface-panel rounded-[1.8rem] p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-950">
                  <Zap className="h-5 w-5 text-orange-600" />
                  Paid resources
                </h3>
                <div className="space-y-4">
                  {currentData?.paidResources?.map((resource: any, index: number) => {
                    const normalized = normalizeResource(resource)
                    return (
                      <div key={index} className={cn(
                        "rounded-[1.25rem] border p-4 transition-all duration-200",
                        getItemProgress(activeRole, activeYear, 'paidResources', index)
                          ? "bg-emerald-50 border-emerald-200"
                          : "bg-orange-50 border-orange-200"
                      )}>
                        <div className="flex items-center justify-between">
                          <a href={normalized.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-900 hover:text-primary-600 transition-colors flex-1">
                            {normalized.title} <ExternalLink className="inline-block h-3 w-3 ml-1 text-gray-400" />
                          </a>
                          <ProgressCheckbox
                            checked={getItemProgress(activeRole, activeYear, 'paidResources', index)}
                            onChange={(checked) => markItemComplete(activeRole, activeYear, 'paidResources', index, checked)}
                            label=""
                            disabled={false}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{normalized.description}</p>
                        {normalized.price && (
                          <p className="text-xs text-gray-700 font-semibold mt-1">Price: {formatPrice(normalized.price, currency)}</p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
