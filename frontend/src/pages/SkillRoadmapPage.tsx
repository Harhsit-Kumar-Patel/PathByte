import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, DollarSign, BookOpen, Lock, LogIn } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useProgress } from '@/context/ProgressContext'
import { useAuth } from '@/context/AuthContext'
import { ProgressCheckbox, ProgressBar } from '@/components/ui/ProgressComponents'
import { skillsData } from '@/data/skillsData'

export default function SkillRoadmapPageNew() {
  const { skill } = useParams()
  const navigate = useNavigate()
  const [activeYear, setActiveYear] = useState('0-1')
  const [currency, setCurrency] = useState<'USD' | 'INR'>('INR')
  const { user } = useAuth()
  const { markItemComplete, getItemProgress, getYearProgress } = useProgress()
  
  // Check if user is authenticated for progress features
  const isAuthenticated = !!user

  const skillData = skillsData[skill || '']

  if (!skillData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Skill Not Found</h1>
          <p className="text-gray-600 mb-6">The requested skill roadmap could not be found.</p>
          <button
            onClick={() => navigate('/career-guide')}
            className="btn-primary"
          >
            Back to Career Guide
          </button>
        </div>
      </div>
    )
  }

  const years = ['0-1', '1-3', '3-5', '5+']
  const IconComponent = skillData.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/career-guide')}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Career Guide
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl mb-6">
              <IconComponent className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {skillData.title} Roadmap
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
              {skillData.description}
            </p>
            
            {/* Skill Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">{skillData.demand}</div>
                <div className="text-sm text-gray-600">Demand</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{skillData.salary}</div>
                <div className="text-sm text-gray-600">Salary</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">{skillData.companies.length}</div>
                <div className="text-sm text-gray-600">Top Companies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Login Prompt for Non-Authenticated Users */}
        {!isAuthenticated && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">
                      Get the Full Learning Experience!
                    </h3>
                    <p className="text-blue-700 mt-1">
                      Sign up to track your progress, save completed skills, and get personalized recommendations.
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    <LogIn className="h-4 w-4" />
                    Sign Up Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Currency Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setCurrency('INR')}
              className={cn(
                'px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
                currency === 'INR' 
                  ? 'bg-blue-500 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              INR
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={cn(
                'px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
                currency === 'USD' 
                  ? 'bg-blue-500 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              USD
            </button>
          </div>
        </div>

        {/* Year Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2">
            <div className="flex space-x-1">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    activeYear === year
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  )}
                >
                  Year {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Skills to Learn
                </h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-3">
                  {skillData.roadmap[activeYear]?.skills.map((skill: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{skill}</p>
                      </div>
                      <ProgressCheckbox
                        checked={isAuthenticated ? getItemProgress(skill || '', activeYear, 'skills', index) : false}
                        onChange={(checked) => isAuthenticated && markItemComplete(skill || '', activeYear, 'skills', index, checked)}
                        label=""
                        disabled={!isAuthenticated}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mt-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4">
                <h2 className="text-xl font-semibold text-white">
                  Practice Projects
                </h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-3">
                  {skillData.roadmap[activeYear]?.projects.map((project: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-purple-600 font-semibold text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{project}</p>
                      </div>
                      <ProgressCheckbox
                        checked={isAuthenticated ? getItemProgress(skill || '', activeYear, 'projects', index) : false}
                        onChange={(checked) => isAuthenticated && markItemComplete(skill || '', activeYear, 'projects', index, checked)}
                        label=""
                        disabled={!isAuthenticated}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Year Overview */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Year {activeYear} Overview
                </h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {skillData.roadmap[activeYear]?.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {skillData.roadmap[activeYear]?.goal}
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <ProgressBar 
                      progress={isAuthenticated ? getYearProgress(skill || '', activeYear) : 0} 
                      color="blue" 
                      size="lg"
                    />
                    {!isAuthenticated && (
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        Sign up to track your progress
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Free Resources */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Free Resources
                </h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-3">
                  {skillData.roadmap[activeYear]?.freeResources.map((resource, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{resource.title}</p>
                        <p className="text-xs text-gray-500">{resource.description}</p>
                      </div>
                      <ProgressCheckbox
                        checked={isAuthenticated ? getItemProgress(skill || '', activeYear, 'freeResources', index) : false}
                        onChange={(checked) => isAuthenticated && markItemComplete(skill || '', activeYear, 'freeResources', index, checked)}
                        label=""
                        disabled={!isAuthenticated}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Paid Resources */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Paid Resources
                </h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-3">
                  {skillData.roadmap[activeYear]?.paidResources.map((resource, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-8 w-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="h-4 w-4 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{resource.title}</p>
                        <p className="text-xs text-gray-500">{resource.description}</p>
                      </div>
                      <ProgressCheckbox
                        checked={isAuthenticated ? getItemProgress(skill || '', activeYear, 'paidResources', index) : false}
                        onChange={(checked) => isAuthenticated && markItemComplete(skill || '', activeYear, 'paidResources', index, checked)}
                        label=""
                        disabled={!isAuthenticated}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
