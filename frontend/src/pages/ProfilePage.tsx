import React, { useState, useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useProgress } from '@/context/ProgressContext'
import { 
  User, 
  Mail, 
  MapPin, 
  Target, 
  Calendar,
  Edit3,
  Save,
  X,
  BarChart3,
  BookOpen,
  TrendingUp,
  Download,
  Upload,
  Trash2,
  Shield,
  Globe,
  Smartphone,
  Palette,
  Brain,
  Cloud,
  Server,
  Code
} from 'lucide-react'
import { cn } from '@/utils/cn'
import { ProgressBar, ProgressStats } from '@/components/ui/ProgressComponents'

export default function ProfilePage() {
  const { user, updateProfile } = useAuth()
  const { userProgress, exportProgress, importProgress, resetProgress } = useProgress()
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    locationCity: user?.locationCity || '',
    locationState: user?.locationState || '',
    targetRole: user?.targetRole || '',
    experienceLevel: user?.experienceLevel || ''
  })
  const [activeTab, setActiveTab] = useState('overview')
  const [showImportModal, setShowImportModal] = useState(false)
  const [importData, setImportData] = useState('')

  useEffect(() => {
    if (user) {
      setEditForm({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        locationCity: user.locationCity || '',
        locationState: user.locationState || '',
        targetRole: user.targetRole || '',
        experienceLevel: user.experienceLevel || ''
      })
    }
  }, [user])

  const handleSave = async () => {
    try {
      await updateProfile(editForm)
      setIsEditing(false)
    } catch (error) {
      console.error('Failed to update profile:', error)
    }
  }

  const handleCancel = () => {
    setEditForm({
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      locationCity: user?.locationCity || '',
      locationState: user?.locationState || '',
      targetRole: user?.targetRole || '',
      experienceLevel: user?.experienceLevel || ''
    })
    setIsEditing(false)
  }

  const handleImport = () => {
    try {
      importProgress(importData)
      setShowImportModal(false)
      setImportData('')
    } catch (error) {
      alert('Invalid progress data format')
    }
  }

  const handleExport = () => {
    const data = exportProgress()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'pathbyte-progress.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const getRoleIcon = (role: string) => {
    const icons: { [key: string]: any } = {
      frontend: Code,
      backend: Server,
      fullstack: Globe,
      mobile: Smartphone,
      game: Palette,
      datascientist: Brain,
      dataengineer: Brain,
      mle: Brain,
      aispecialist: Brain,
      cloudengineer: Cloud,
      devops: Server,
      sre: Server,
      uidesigner: Palette,
      cybersecurity: Shield
    }
    return icons[role] || Code
  }

  const getTotalProgress = () => {
    if (!userProgress.length) return 0
    const total = userProgress.reduce((sum, role) => sum + role.overallProgress, 0)
    return total / userProgress.length
  }

  const getTotalSkillsCompleted = () => {
    return userProgress.reduce((total, role) => {
      return total + Object.values(role.yearProgress).reduce((yearTotal, year) => {
        return yearTotal + (year.skills?.filter(Boolean).length || 0)
      }, 0)
    }, 0)
  }

  const getTotalProjectsCompleted = () => {
    return userProgress.reduce((total, role) => {
      return total + Object.values(role.yearProgress).reduce((yearTotal, year) => {
        return yearTotal + (year.projects?.filter(Boolean).length || 0)
      }, 0)
    }, 0)
  }

  const getTotalResourcesCompleted = () => {
    return userProgress.reduce((total, role) => {
      return total + Object.values(role.yearProgress).reduce((yearTotal, year) => {
        return yearTotal + (year.freeResources?.filter(Boolean).length || 0) + (year.paidResources?.filter(Boolean).length || 0)
      }, 0)
    }, 0)
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'progress', label: 'Progress', icon: TrendingUp }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-600">Manage your account and track your learning journey</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 bg-white/20 rounded-full flex items-center justify-center">
                <User className="h-10 w-10" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  {user?.firstName} {user?.lastName}
                </h2>
                <p className="text-white/90">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-white/20 hover:bg-white/30 transition-colors duration-200 p-2 rounded-lg"
            >
              {isEditing ? <X className="h-5 w-5" /> : <Edit3 className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="p-6">
          {isEditing ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  value={editForm.firstName}
                  onChange={(e) => setEditForm({ ...editForm, firstName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  value={editForm.lastName}
                  onChange={(e) => setEditForm({ ...editForm, lastName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Target Role</label>
                <select
                  value={editForm.targetRole}
                  onChange={(e) => setEditForm({ ...editForm, targetRole: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a role</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="Mobile Developer">Mobile Developer</option>
                  <option value="Game Developer">Game Developer</option>
                  <option value="Data Scientist">Data Scientist</option>
                  <option value="Data Engineer">Data Engineer</option>
                  <option value="ML Engineer">ML Engineer</option>
                  <option value="AI Specialist">AI Specialist</option>
                  <option value="Cloud Engineer">Cloud Engineer</option>
                  <option value="DevOps Engineer">DevOps Engineer</option>
                  <option value="SRE">SRE</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Cybersecurity Engineer">Cybersecurity Engineer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                <select
                  value={editForm.experienceLevel}
                  onChange={(e) => setEditForm({ ...editForm, experienceLevel: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3-5 years)</option>
                  <option value="expert">Expert (5+ years)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={editForm.locationCity}
                  onChange={(e) => setEditForm({ ...editForm, locationCity: e.target.value })}
                  placeholder="City"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <X className="h-4 w-4" />
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">{user?.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">
                    {user?.locationCity && user?.locationState 
                      ? `${user.locationCity}, ${user.locationState}` 
                      : 'Location not set'
                    }
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">
                    {user?.targetRole || 'Target role not set'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">
                    {user?.experienceLevel ? 
                      user.experienceLevel.charAt(0).toUpperCase() + user.experienceLevel.slice(1) : 
                      'Experience level not set'
                    }
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Learning Stats</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-700">Total Skills:</span>
                      <span className="font-medium text-blue-900">{getTotalSkillsCompleted()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Projects Done:</span>
                      <span className="font-medium text-blue-900">{getTotalProjectsCompleted()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-700">Resources:</span>
                      <span className="font-medium text-blue-900">{getTotalResourcesCompleted()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200',
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ProgressStats
                  totalItems={userProgress.reduce((total, role) => 
                    total + Object.values(role.yearProgress).reduce((yearTotal, year) => 
                      yearTotal + (year.skills?.length || 0), 0
                    ), 0
                  )}
                  completedItems={getTotalSkillsCompleted()}
                  title="Total Skills"
                  icon={Target}
                />
                <ProgressStats
                  totalItems={userProgress.reduce((total, role) => 
                    total + Object.values(role.yearProgress).reduce((yearTotal, year) => 
                      yearTotal + (year.projects?.length || 0), 0
                    ), 0
                  )}
                  completedItems={getTotalProjectsCompleted()}
                  title="Total Projects"
                  icon={BookOpen}
                />
                <ProgressStats
                  totalItems={userProgress.reduce((total, role) => 
                    total + Object.values(role.yearProgress).reduce((yearTotal, year) => 
                      yearTotal + (year.freeResources?.length || 0) + (year.paidResources?.length || 0), 0
                    ), 0
                  )}
                  completedItems={getTotalResourcesCompleted()}
                  title="Total Resources"
                  icon={BookOpen}
                />
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-emerald-900">Overall Learning Progress</h3>
                  <div className="text-2xl font-bold text-emerald-700">{Math.round(getTotalProgress())}%</div>
                </div>
                <ProgressBar progress={getTotalProgress()} color="emerald" size="lg" />
              </div>

              {userProgress.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Role Progress</h3>
                  {userProgress.map((role) => (
                    <div key={role.roleId} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {React.createElement(getRoleIcon(role.roleId), { className: "h-5 w-5 text-primary-600" })}
                          <span className="font-medium text-gray-900 capitalize">{role.roleId}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-600">{Math.round(role.overallProgress)}%</span>
                      </div>
                      <ProgressBar progress={role.overallProgress} color="primary" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Progress Tab */}
          {activeTab === 'progress' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Progress Management</h3>
                <div className="flex gap-2">
                  <button
                    onClick={handleExport}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Export Progress
                  </button>
                  <button
                    onClick={() => setShowImportModal(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Import Progress
                  </button>
                </div>
              </div>

              {userProgress.length > 0 ? (
                <div className="space-y-4">
                  {userProgress.map((role) => (
                    <div key={role.roleId} className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {React.createElement(getRoleIcon(role.roleId), { className: "h-6 w-6 text-primary-600" })}
                          <h4 className="text-lg font-semibold text-gray-900 capitalize">{role.roleId}</h4>
                        </div>
                        <button
                          onClick={() => resetProgress(role.roleId)}
                          className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1"
                        >
                          <Trash2 className="h-4 w-4" />
                          Reset
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {Object.entries(role.yearProgress).map(([yearId, yearData]) => (
                          <div key={yearId} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">{yearId}</span>
                              <span className="text-xs text-gray-500">{Math.round(yearData.completionPercentage)}%</span>
                            </div>
                            <ProgressBar progress={yearData.completionPercentage} size="sm" />
                            <div className="mt-2 text-xs text-gray-600">
                              <div>Skills: {yearData.skills?.filter(Boolean).length || 0}/{yearData.skills?.length || 0}</div>
                              <div>Projects: {yearData.projects?.filter(Boolean).length || 0}/{yearData.projects?.length || 0}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Progress Yet</h3>
                  <p className="text-gray-600">Start learning to see your progress here!</p>
                </div>
              )}
            </div>
          )}


        </div>
      </div>

      {/* Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Import Progress Data</h3>
            <textarea
              value={importData}
              onChange={(e) => setImportData(e.target.value)}
              placeholder="Paste your progress data here..."
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-4"
            />
            <div className="flex gap-2">
              <button
                onClick={handleImport}
                className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex-1"
              >
                Import
              </button>
              <button
                onClick={() => setShowImportModal(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
