import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  User, 
  Mail, 
  Calendar, 
  Briefcase, 
  Target, 
  Trophy,
  Clock,
  BookOpen,
  TrendingUp,
  Award,
  CheckCircle,
  Edit,
  ArrowRight,
  BarChart3,
  Activity,
  Shield
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { useProgress } from '@/context/ProgressContext'
import { ProgressBar, ProgressRing } from '@/components/ui/ProgressComponents'
import { cn } from '@/utils/cn'

export default function DashboardPage() {
  const { user } = useAuth()
  const { getYearProgress, getItemProgress, getRoleProgress } = useProgress()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phone: '',
    location: '',
    bio: '',
    targetRole: user?.targetRole || 'frontend'
  })

  // Real data based on user's actual progress
  const userStats = {
    totalHours: calculateTotalHours(),
    completedLessons: calculateCompletedLessons(),
    currentStreak: calculateCurrentStreak(),
    progressPercentage: calculateOverallProgress(),
    skillLevel: determineSkillLevel(),
    nextMilestone: getNextMilestone()
  }

  const recentActivity = getRecentActivity()
  const upcomingGoals = getUpcomingGoals()

  function calculateTotalHours() {
    // Calculate based on actual completed items
    let total = 0
    const roles = ['frontend', 'backend', 'fullstack']
    const years = ['0-1', '1-3', '3-5', '5+']
    
    roles.forEach(role => {
      years.forEach(year => {
        // Get progress for each item type - we need to check all items
        let skillsCompleted = 0
        let projectsCompleted = 0
        let resourcesCompleted = 0
        let paidResourcesCompleted = 0
        
        // Check skills (assuming max 20 skills per year)
        for (let i = 0; i < 20; i++) {
          if (getItemProgress(role, year, 'skills', i)) {
            skillsCompleted++
          }
        }
        
        // Check projects (assuming max 10 projects per year)
        for (let i = 0; i < 10; i++) {
          if (getItemProgress(role, year, 'projects', i)) {
            projectsCompleted++
          }
        }
        
        // Check free resources (assuming max 15 resources per year)
        for (let i = 0; i < 15; i++) {
          if (getItemProgress(role, year, 'freeResources', i)) {
            resourcesCompleted++
          }
        }
        
        // Check paid resources (assuming max 8 paid resources per year)
        for (let i = 0; i < 8; i++) {
          if (getItemProgress(role, year, 'paidResources', i)) {
            paidResourcesCompleted++
          }
        }
        
        total += skillsCompleted * 2 // 2 hours per skill
        total += projectsCompleted * 8 // 8 hours per project
        total += resourcesCompleted * 1 // 1 hour per resource
        total += paidResourcesCompleted * 3 // 3 hours per paid resource
      })
    })
    
    return total
  }

  function calculateCompletedLessons() {
    let total = 0
    const roles = ['frontend', 'backend', 'fullstack']
    const years = ['0-1', '1-3', '3-5', '5+']
    
    roles.forEach(role => {
      years.forEach(year => {
        // Get progress for each item type - we need to check all items
        let skillsCompleted = 0
        let projectsCompleted = 0
        let resourcesCompleted = 0
        let paidResourcesCompleted = 0
        
        // Check skills (assuming max 20 skills per year)
        for (let i = 0; i < 20; i++) {
          if (getItemProgress(role, year, 'skills', i)) {
            skillsCompleted++
          }
        }
        
        // Check projects (assuming max 10 projects per year)
        for (let i = 0; i < 10; i++) {
          if (getItemProgress(role, year, 'projects', i)) {
            projectsCompleted++
          }
        }
        
        // Check free resources (assuming max 15 resources per year)
        for (let i = 0; i < 15; i++) {
          if (getItemProgress(role, year, 'freeResources', i)) {
            resourcesCompleted++
          }
        }
        
        // Check paid resources (assuming max 8 paid resources per year)
        for (let i = 0; i < 8; i++) {
          if (getItemProgress(role, year, 'paidResources', i)) {
            paidResourcesCompleted++
          }
        }
        
        total += skillsCompleted
        total += projectsCompleted
        total += resourcesCompleted
        total += paidResourcesCompleted
      })
    })
    
    return total
  }

  function calculateCurrentStreak() {
    // This would integrate with a real streak tracking system
    // For now, return a realistic calculation based on recent activity
    const today = new Date()
    const lastActivity = new Date(localStorage.getItem('lastActivity') || today)
    const diffTime = Math.abs(today.getTime() - lastActivity.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays <= 1) {
      return parseInt(localStorage.getItem('currentStreak') || '1')
    } else if (diffDays > 7) {
      localStorage.setItem('currentStreak', '0')
      return 0
    } else {
      return parseInt(localStorage.getItem('currentStreak') || '0')
    }
  }

  function calculateOverallProgress() {
    let totalProgress = 0
    let totalItems = 0
    const roles = ['frontend', 'backend', 'fullstack']
    const years = ['0-1', '1-3', '3-5', '5+']
    
    roles.forEach(role => {
      years.forEach(year => {
        const progress = getYearProgress(role, year)
        totalProgress += progress
        totalItems++
      })
    })
    
    return totalItems > 0 ? Math.round(totalProgress / totalItems) : 0
  }

  function determineSkillLevel() {
    const progress = calculateOverallProgress()
    if (progress >= 80) return 'Expert'
    if (progress >= 60) return 'Advanced'
    if (progress >= 40) return 'Intermediate'
    if (progress >= 20) return 'Beginner'
    return 'Novice'
  }

  function getNextMilestone() {
    const progress = calculateOverallProgress()
    if (progress < 25) return 'Complete your first 5 skills'
    if (progress < 50) return 'Finish your first project'
    if (progress < 75) return 'Complete 50% of your roadmap'
    if (progress < 90) return 'Master advanced concepts'
    return 'You\'re almost there! Complete remaining items'
  }

  function getRecentActivity() {
    // Get real activity from user's progress
    const activities: Array<{
      id: string
      type: string
      description: string
      time: string
      title: string
      status: string
    }> = []
    
    const roles = ['frontend', 'backend', 'fullstack']
    const years = ['0-1', '1-3', '3-5', '5+']
    
    roles.forEach(role => {
      years.forEach(year => {
        // Check skills (assuming max 20 skills per year)
        for (let i = 0; i < 20; i++) {
          if (getItemProgress(role, year, 'skills', i)) {
            activities.push({
              id: `${role}-${year}-skill-${i}`,
              type: 'skill',
              description: `Completed skill in ${role} ${year}`,
              time: 'Recently',
              title: 'Skill Completed',
              status: 'completed'
            })
          }
        }
        
        // Check projects (assuming max 10 projects per year)
        for (let i = 0; i < 10; i++) {
          if (getItemProgress(role, year, 'projects', i)) {
            activities.push({
              id: `${role}-${year}-project-${i}`,
              type: 'project',
              description: `Completed project in ${role} ${year}`,
              time: 'Recently',
              title: 'Project Completed',
              status: 'completed'
            })
          }
        }
      })
    })
    
    return activities.slice(0, 5) // Return last 5 activities
  }

  function getUpcomingGoals() {
    // Generate realistic goals based on user's current progress
    const goals = []
    const progress = calculateOverallProgress()
    
    if (progress < 25) {
      goals.push({
        id: 1,
        title: 'Complete Basic Skills',
        description: 'Finish your first 5 fundamental skills',
        targetDate: 'Next week',
        progress: progress
      })
    }
    
    if (progress < 50) {
      goals.push({
        id: 2,
        title: 'Build First Project',
        description: 'Create a complete project to apply your skills',
        targetDate: 'Next month',
        progress: progress
      })
    }
    
    if (progress < 75) {
      goals.push({
        id: 3,
        title: 'Advanced Concepts',
        description: 'Master intermediate to advanced topics',
        targetDate: 'Next quarter',
        progress: progress
      })
    }
    
    return goals
  }

  const handleSave = async () => {
    try {
      // Here you would actually save to your backend
      // For now, we'll just update local state
      setIsEditing(false)
      // In a real app: await updateUserProfile(editData)
    } catch (error) {
      console.error('Failed to update profile:', error)
    }
  }

  const handleCancel = () => {
    setEditData({
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      phone: '',
      location: '',
      bio: '',
      targetRole: user?.targetRole || 'frontend'
    })
    setIsEditing(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditData(prev => ({ ...prev, [name]: value }))
  }

  const getActivityIcon = (type: string) => {
    const icons = {
      lesson: BookOpen,
      quiz: CheckCircle,
      project: Target,
      assessment: Award,
      skill: BookOpen,
      default: BookOpen
    }
    const IconComponent = icons[type as keyof typeof icons] || icons.default
    return <IconComponent className="h-4 w-4" />
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please log in to view your dashboard</h1>
          <p className="text-gray-600">You need to be authenticated to access this page.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.firstName}! 👋</h1>
          <p className="text-gray-600 mt-2">Here's what's happening with your learning journey</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="btn-secondary flex items-center gap-2"
          >
            <Edit className="h-4 w-4" />
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
      </div>

      {/* Roadmap Integration */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Your Learning Roadmap
          </h2>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Target Role</p>
                  <p className="font-semibold text-gray-900">{user?.targetRole || 'Not set'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Experience Level</p>
                  <p className="font-semibold text-gray-900">
                    {user?.experienceLevel ? 
                      user.experienceLevel.charAt(0).toUpperCase() + user.experienceLevel.slice(1) : 
                      'Not set'
                    }
                  </p>
                </div>
              </div>
            </div>

            {user?.targetRole && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Ready to follow your roadmap?</h3>
                    <p className="text-blue-700 text-sm">
                      Get detailed learning paths, resources, and milestone projects for your {user.targetRole} journey
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const role = user.targetRole?.toLowerCase().includes('frontend') ? 'frontend' : 
                                 user.targetRole?.toLowerCase().includes('backend') ? 'backend' : 
                                 user.targetRole?.toLowerCase().includes('full') || user.targetRole?.toLowerCase().includes('stack') ? 'fullstack' : 
                                 user.targetRole?.toLowerCase().includes('mobile') || user.targetRole?.toLowerCase().includes('app') ? 'mobile' : 
                                 user.targetRole?.toLowerCase().includes('game') ? 'game' : 
                                 user.targetRole?.toLowerCase().includes('data') || user.targetRole?.toLowerCase().includes('scientist') ? 'datascientist' : 
                                 user.targetRole?.toLowerCase().includes('ml') || user.targetRole?.toLowerCase().includes('learning') ? 'mle' : 
                                 user.targetRole?.toLowerCase().includes('ai') || user.targetRole?.toLowerCase().includes('specialist') ? 'aispecialist' : 
                                 user.targetRole?.toLowerCase().includes('cloud') ? 'cloudengineer' : 
                                 user.targetRole?.toLowerCase().includes('devops') ? 'devops' : 
                                 user.targetRole?.toLowerCase().includes('sre') || user.targetRole?.toLowerCase().includes('reliability') ? 'sre' : 
                                 user.targetRole?.toLowerCase().includes('ui') || user.targetRole?.toLowerCase().includes('ux') || user.targetRole?.toLowerCase().includes('designer') ? 'uidesigner' : 
                                 user.targetRole?.toLowerCase().includes('cyber') || user.targetRole?.toLowerCase().includes('security') ? 'cybersecurity' : 'frontend'
                      navigate(`/roadmap?role=${role}`)
                    }}
                    className="btn-primary flex items-center gap-2 whitespace-nowrap"
                  >
                    <Briefcase className="h-4 w-4" />
                    View Roadmap
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Learning Progress Tracker */}
            {user?.targetRole && (() => {
              const role = user.targetRole?.toLowerCase().includes('frontend') ? 'frontend' : 
                         user.targetRole?.toLowerCase().includes('backend') ? 'backend' : 
                         user.targetRole?.toLowerCase().includes('full') || user.targetRole?.toLowerCase().includes('stack') ? 'fullstack' : 
                         user.targetRole?.toLowerCase().includes('mobile') || user.targetRole?.toLowerCase().includes('app') ? 'mobile' : 
                         user.targetRole?.toLowerCase().includes('game') ? 'game' : 
                         user.targetRole?.toLowerCase().includes('data') || user.targetRole?.toLowerCase().includes('scientist') ? 'datascientist' : 
                         user.targetRole?.toLowerCase().includes('ml') || user.targetRole?.toLowerCase().includes('learning') ? 'mle' : 
                         user.targetRole?.toLowerCase().includes('ai') || user.targetRole?.toLowerCase().includes('specialist') ? 'aispecialist' : 
                         user.targetRole?.toLowerCase().includes('cloud') ? 'cloudengineer' : 
                         user.targetRole?.toLowerCase().includes('devops') ? 'devops' : 
                         user.targetRole?.toLowerCase().includes('sre') || user.targetRole?.toLowerCase().includes('reliability') ? 'sre' : 
                         user.targetRole?.toLowerCase().includes('ui') || user.targetRole?.toLowerCase().includes('ux') || user.targetRole?.toLowerCase().includes('designer') ? 'uidesigner' : 
                         user.targetRole?.toLowerCase().includes('cyber') || user.targetRole?.toLowerCase().includes('security') ? 'cybersecurity' : 'frontend'
              
              const roleProgress = getRoleProgress(role)
              const yearProgress = getYearProgress(role, '0-1')
              
              return (
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-emerald-900">Your Learning Progress</h3>
                    <div className="flex items-center gap-2 text-sm text-emerald-700">
                      <BarChart3 className="h-4 w-4" />
                      <span>Track your journey</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Overall Progress Ring */}
                    <div className="flex flex-col items-center">
                      <ProgressRing 
                        progress={roleProgress?.overallProgress || 0} 
                        size={100}
                        color="#10b981"
                      />
                      <div className="text-center mt-3">
                        <p className="text-sm font-medium text-emerald-900">Overall Progress</p>
                        <p className="text-xs text-emerald-700">Across all levels</p>
                      </div>
                    </div>
                    
                    {/* Current Year Progress */}
                    <div className="flex flex-col justify-center">
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-emerald-900">Current Level</span>
                          <span className="text-sm text-emerald-700">{Math.round(yearProgress)}%</span>
                        </div>
                        <ProgressBar progress={yearProgress} color="emerald" />
                      </div>
                      <p className="text-xs text-emerald-600">Year 0-1 (Beginner)</p>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Target className="h-4 w-4 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-xs text-emerald-600">Skills Mastered</p>
                          <p className="text-sm font-medium text-emerald-900">
                            {roleProgress ? 
                              Object.values(roleProgress.yearProgress).reduce((total, year) => 
                                total + (year.skills?.filter(Boolean).length || 0), 0
                              ) : 0
                            } skills
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Trophy className="h-4 w-4 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-xs text-emerald-600">Projects Done</p>
                          <p className="text-sm font-medium text-emerald-900">
                            {roleProgress ? 
                              Object.values(roleProgress.yearProgress).reduce((total, year) => 
                                total + (year.projects?.filter(Boolean).length || 0), 0
                              ) : 0
                            } projects
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-emerald-200">
                    <button
                      onClick={() => navigate(`/roadmap?role=${role}`)}
                      className="text-sm text-emerald-700 hover:text-emerald-800 font-medium flex items-center gap-1"
                    >
                      Continue learning <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              )
            })()}

            {!user?.targetRole && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Set your target role to get started</h3>
                    <p className="text-amber-700 text-sm">
                      Choose your career goal to unlock personalized learning roadmaps and resources
                    </p>
                  </div>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="btn-secondary flex items-center gap-2 whitespace-nowrap"
                  >
                    <Edit className="h-4 w-4" />
                    Set Goal
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Hours</p>
              <p className="text-2xl font-bold text-gray-900">{userStats.totalHours}</p>
              {userStats.totalHours === 0 && (
                <p className="text-xs text-gray-500 mt-1">Start learning today!</p>
              )}
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Lessons Completed</p>
              <p className="text-2xl font-bold text-gray-900">{userStats.completedLessons}</p>
              {userStats.completedLessons === 0 && (
                <p className="text-xs text-gray-500 mt-1">Your first lesson awaits!</p>
              )}
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Current Streak</p>
              <p className="text-2xl font-bold text-gray-900">{userStats.currentStreak} days</p>
              {userStats.currentStreak === 0 && (
                <p className="text-xs text-gray-500 mt-1">Build your streak!</p>
              )}
            </div>
            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Progress</p>
              <p className="text-2xl font-bold text-gray-900">{userStats.progressPercentage}%</p>
              {userStats.progressPercentage === 0 && (
                <p className="text-xs text-gray-500 mt-1">Ready to begin!</p>
              )}
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Activity className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-4">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Information
              </h2>
            </div>
            
            <div className="p-6">
              {isEditing ? (
                                    <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={editData.firstName}
                        onChange={handleInputChange}
                        className="input-field w-full"
                        required
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={editData.lastName}
                        onChange={handleInputChange}
                        className="input-field w-full"
                        required
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={user?.email}
                        className="input-field w-full bg-gray-50"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={editData.phone}
                        onChange={handleInputChange}
                        className="input-field w-full"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={editData.location}
                        onChange={handleInputChange}
                        className="input-field w-full"
                        placeholder="City, State, Country"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        name="bio"
                        value={editData.bio}
                        onChange={handleInputChange}
                        className="input-field w-full"
                        rows={3}
                        placeholder="Tell us about yourself..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Target Role *
                      </label>
                      <select
                        name="targetRole"
                        value={editData.targetRole}
                        onChange={handleInputChange}
                        className="input-field w-full"
                        required
                      >
                        {/* Software Development */}
                        <optgroup label="Software Development">
                          <option value="frontend">Frontend Developer (HTML, CSS, JavaScript, React)</option>
                          <option value="backend">Backend Developer (Node.js, Python, Java, Databases)</option>
                          <option value="fullstack">Full-Stack Developer (Expertise in both Frontend and Backend)</option>
                          <option value="mobile">Mobile App Developer (iOS, Android, React Native, Flutter)</option>
                          <option value="game">Game Developer (Unity, Unreal Engine)</option>
                          <option value="embeddedengineer">Embedded Systems Engineer (IoT, Hardware Integration)</option>
                          <option value="systemprogrammer">Systems Programmer (Low-level Software, Drivers)</option>
                          <option value="compilerengineer">Compiler Engineer (Programming Language Design)</option>
                        </optgroup>
                        
                        {/* Data & AI */}
                        <optgroup label="Data & AI">
                          <option value="datascientist">Data Scientist (Statistical analysis, Machine Learning)</option>
                          <option value="dataengineer">Data Engineer (Data pipelines, Data infrastructure)</option>
                          <option value="mle">Machine Learning Engineer (Deploying AI models into applications)</option>
                          <option value="aispecialist">AI Specialist (AI research and development)</option>
                          <option value="datavisualization">Data Visualization Engineer (Charts, Dashboards)</option>
                          <option value="nlpengineer">NLP Engineer (Natural Language Processing, Chatbots)</option>
                          <option value="computervision">Computer Vision Engineer (Image Recognition, AI Vision)</option>
                        </optgroup>
                        
                        {/* Infrastructure & Operations */}
                        <optgroup label="Infrastructure & Operations">
                          <option value="devops">DevOps Engineer (Automation, CI/CD, Development + Operations)</option>
                          <option value="cloudengineer">Cloud Engineer (AWS, Azure, Google Cloud)</option>
                          <option value="sre">Site Reliability Engineer (SRE) (System reliability, performance)</option>
                          <option value="networkengineer">Network Engineer (Network Infrastructure, Security)</option>
                          <option value="databaseadmin">Database Administrator (Database Management, Performance)</option>
                          <option value="cybersecurity">Cybersecurity Engineer (System security and threat protection)</option>
                        </optgroup>
                        
                        {/* Emerging Tech */}
                        <optgroup label="Emerging Tech">
                          <option value="blockchain">Blockchain Developer (Smart Contracts, DeFi, Web3)</option>
                          <option value="web3">Web3 Developer (Decentralized Applications)</option>
                          <option value="aiops">AI Operations Engineer (MLOps, AI Infrastructure)</option>
                          <option value="quantumcomputing">Quantum Computing Engineer (Quantum Algorithms, Research)</option>
                          <option value="generativeai">Generative AI Engineer (LLMs, AI Generation)</option>
                        </optgroup>
                        
                        {/* Industry-Specific */}
                        <optgroup label="Industry-Specific">
                          <option value="fintech">Fintech Engineer (Financial Applications, Blockchain)</option>
                          <option value="healthcare">Healthcare Data Engineer (Healthcare Data, Compliance)</option>
                          <option value="edutech">Edutech Engineer (Educational Platforms, Learning Tech)</option>
                          <option value="gaming">Gaming Engineer (Game Engines, 3D Graphics)</option>
                        </optgroup>
                        
                        {/* Specialized & Related Roles */}
                        <optgroup label="Specialized & Related Roles">
                          <option value="uidesigner">UI/UX Designer (User experience and interface design)</option>
                          <option value="productmanager">Product Manager (Product Strategy, Team Leadership)</option>
                          <option value="qaengineer">QA Engineer (Testing, Quality Assurance, Automation)</option>
                          <option value="technicalwriter">Technical Writer (Documentation, User Guides)</option>
                        </optgroup>
                        
                        {/* Tech Management */}
                        <optgroup label="Tech Management">
                          <option value="techmanager">Tech Manager (Team Leadership, Project Management)</option>
                          <option value="cto">Chief Technology Officer (CTO) (Technical Strategy, Innovation)</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                  


                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="btn-secondary"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSave}
                      className="btn-primary"
                    >
                      Save Changes
                    </button>
                  </div>

                  {/* Update Message */}
                  {/* updateMessage is not defined, so this block will be removed */}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <User className="h-5 w-5 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Full Name</p>
                          <p className="font-semibold text-gray-900">{user.firstName} {user.lastName}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Mail className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Email</p>
                          <p className="font-semibold text-gray-900">{user.email}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Target className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Target Role</p>
                          <p className="font-semibold text-gray-900">{user.targetRole || 'Not specified'}</p>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Recent Activity
              </h2>
            </div>
            
            <div className="p-6">
              {recentActivity.length === 0 ? (
                <div className="text-center py-8">
                  <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No activity yet</h3>
                  <p className="text-gray-600 mb-4">Start your learning journey to see your progress here</p>
                  <button
                    onClick={() => navigate('/roadmap')}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <BookOpen className="h-4 w-4" />
                    Start Learning
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="h-8 w-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                      <span className={cn(
                        "inline-flex px-2 py-1 text-xs font-medium rounded-full",
                        activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                        activity.status === 'passed' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      )}>
                        {activity.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progress Overview */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-4">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Progress Overview
              </h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Current Level</span>
                    <span className="font-medium text-gray-900">{userStats.skillLevel}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-300 bg-blue-500"
                      style={{ width: `${userStats.progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <p className="text-sm font-medium text-gray-600 mb-2">Next Milestone</p>
                  <p className="text-sm text-gray-900">{userStats.nextMilestone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Goals */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <Target className="h-5 w-5" />
                Upcoming Goals
              </h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {upcomingGoals.map((goal) => (
                  <div key={goal.id} className="p-3 rounded-lg border border-gray-100">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-medium text-gray-900 text-sm">{goal.title}</p>
                      <p className="text-xs text-gray-500">{goal.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      Due: {goal.targetDate}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button
                  onClick={() => window.location.href = `/roadmap/${user?.targetRole || 'frontend'}`}
                  className="w-full btn-secondary text-sm py-2"
                >
                  View Full Roadmap
                </button>
              </div>
            </div>
          </div>

          {/* Account Security */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Account Security
              </h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email Verified</p>
                    <p className="text-xs text-gray-500">Your email is confirmed</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Password</p>
                    <p className="text-xs text-gray-500">Last changed recently</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Last Login</p>
                    <p className="text-xs text-gray-500">Just now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
