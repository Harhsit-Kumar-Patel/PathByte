import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Code,
  ExternalLink,
  BookOpen,
  BarChart3,
  Brain,
  Users,
  ArrowLeft,
  Search
} from 'lucide-react'
import { cn } from '@/utils/cn'
import { useAuth } from '@/context/AuthContext'
import { skillsData } from '@/data/skillsData'

export default function RoleSelectionPage() {
  const navigate = useNavigate()
  const { user, updateProfile, refreshUser } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('demand')

  const roleOptions = [
    { 
      key: 'frontend', 
      label: 'Frontend Developer', 
      icon: Code,
      description: 'Build beautiful, responsive user interfaces',
      color: 'from-green-500 to-emerald-500',
      category: 'web'
    },
    { 
      key: 'backend', 
      label: 'Backend Developer', 
      icon: Code,
      description: 'Create robust server-side applications and APIs',
      color: 'from-blue-500 to-indigo-500',
      category: 'web'
    },
    { 
      key: 'fullstack', 
      label: 'Full Stack Developer', 
      icon: Code,
      description: 'Master both frontend and backend development',
      color: 'from-purple-500 to-pink-500',
      category: 'web'
    },
    { 
      key: 'mobile', 
      label: 'Mobile Developer', 
      icon: Code,
      description: 'Build native and cross-platform mobile apps',
      color: 'from-orange-500 to-red-500',
      category: 'mobile'
    },
    { 
      key: 'game', 
      label: 'Game Developer', 
      icon: Code,
      description: 'Create engaging games and interactive experiences',
      color: 'from-red-500 to-pink-500',
      category: 'gaming'
    },
    { 
      key: 'datascientist', 
      label: 'Data Scientist', 
      icon: BarChart3,
      description: 'Extract insights and build predictive models from data',
      color: 'from-cyan-500 to-blue-500',
      category: 'data'
    },
    { 
      key: 'dataengineer', 
      label: 'Data Engineer', 
      icon: Code,
      description: 'Build and maintain data pipelines and infrastructure',
      color: 'from-teal-500 to-green-500',
      category: 'data'
    },
    { 
      key: 'mle', 
      label: 'ML Engineer', 
      icon: Brain,
      description: 'Deploy and scale machine learning systems',
      color: 'from-indigo-500 to-purple-500',
      category: 'ai'
    },
    { 
      key: 'aispecialist', 
      label: 'AI Specialist', 
      icon: Brain,
      description: 'Develop cutting-edge artificial intelligence solutions',
      color: 'from-purple-500 to-indigo-500',
      category: 'ai'
    },
    { 
      key: 'generativeai', 
      label: 'Generative AI Engineer', 
      icon: Brain,
      description: 'Build AI systems that create content and solutions',
      color: 'from-violet-500 to-purple-500',
      category: 'ai'
    },
    { 
      key: 'computervision', 
      label: 'Computer Vision Engineer', 
      icon: Brain,
      description: 'Develop AI systems that can interpret visual information',
      color: 'from-green-500 to-emerald-500',
      category: 'ai'
    },
    { 
      key: 'nlpengineer', 
      label: 'NLP Engineer', 
      icon: Brain,
      description: 'Build natural language processing systems and chatbots',
      color: 'from-purple-500 to-pink-500',
      category: 'ai'
    },
    { 
      key: 'devops', 
      label: 'DevOps Engineer', 
      icon: Code,
      description: 'Automate deployment and manage infrastructure',
      color: 'from-orange-500 to-red-500',
      category: 'infrastructure'
    },
    { 
      key: 'cloudengineer', 
      label: 'Cloud Engineer', 
      icon: Code,
      description: 'Design and manage cloud infrastructure',
      color: 'from-sky-500 to-blue-500',
      category: 'infrastructure'
    },
    { 
      key: 'sre', 
      label: 'Site Reliability Engineer', 
      icon: Code,
      description: 'Ensure system reliability and performance at scale',
      color: 'from-green-500 to-teal-500',
      category: 'infrastructure'
    },
    { 
      key: 'cybersecurity', 
      label: 'Cybersecurity Engineer', 
      icon: Code,
      description: 'Protect systems and data from security threats',
      color: 'from-red-500 to-pink-500',
      category: 'security'
    },
    { 
      key: 'qaengineer', 
      label: 'QA Engineer', 
      icon: Code,
      description: 'Ensure software quality through testing',
      color: 'from-orange-500 to-red-500',
      category: 'testing'
    },
    { 
      key: 'uidesigner', 
      label: 'UI/UX Designer', 
      icon: Code,
      description: 'Design intuitive and beautiful user experiences',
      color: 'from-pink-500 to-purple-500',
      category: 'design'
    },
    { 
      key: 'productmanager', 
      label: 'Product Manager', 
      icon: Users,
      description: 'Lead product strategy and development',
      color: 'from-blue-500 to-indigo-500',
      category: 'management'
    },
    { 
      key: 'techmanager', 
      label: 'Tech Manager', 
      icon: Users,
      description: 'Lead and manage technical teams and projects',
      color: 'from-teal-500 to-cyan-500',
      category: 'management'
    },
    { 
      key: 'cto', 
      label: 'Chief Technology Officer', 
      icon: Users,
      description: 'Oversee all technical aspects of a company',
      color: 'from-indigo-500 to-purple-500',
      category: 'management'
    },
    { 
      key: 'blockchain', 
      label: 'Blockchain Developer', 
      icon: Code,
      description: 'Build decentralized applications and smart contracts',
      color: 'from-yellow-500 to-orange-500',
      category: 'blockchain'
    },
    { 
      key: 'web3developer', 
      label: 'Web3 Developer', 
      icon: Code,
      description: 'Build decentralized applications and smart contracts on blockchain networks',
      color: 'from-orange-500 to-yellow-500',
      category: 'blockchain'
    },
    { 
      key: 'systemprogrammer', 
      label: 'System Programmer', 
      icon: Code,
      description: 'Develop low-level system software and drivers',
      color: 'from-gray-500 to-slate-500',
      category: 'systems'
    },
    { 
      key: 'compilerengineer', 
      label: 'Compiler Engineer', 
      icon: Code,
      description: 'Design and implement programming language compilers',
      color: 'from-indigo-500 to-blue-500',
      category: 'systems'
    },
    { 
      key: 'networkengineer', 
      label: 'Network Engineer', 
      icon: Code,
      description: 'Design and maintain network infrastructure',
      color: 'from-cyan-500 to-blue-500',
      category: 'infrastructure'
    },
    { 
      key: 'embeddedengineer', 
      label: 'Embedded Systems Engineer', 
      icon: Code,
      description: 'Develop software for hardware devices and IoT systems',
      color: 'from-indigo-500 to-purple-500',
      category: 'systems'
    },
    { 
      key: 'databaseadmin', 
      label: 'Database Administrator', 
      icon: Code,
      description: 'Manage and optimize database systems and performance',
      color: 'from-green-500 to-emerald-500',
      category: 'data'
    },
    { 
      key: 'datavisualization', 
      label: 'Data Visualization Engineer', 
      icon: BarChart3,
      description: 'Create interactive charts and data dashboards',
      color: 'from-blue-500 to-cyan-500',
      category: 'data'
    },
    { 
      key: 'aiops', 
      label: 'AI Operations Engineer', 
      icon: Code,
      description: 'Manage and optimize AI infrastructure and operations',
      color: 'from-green-500 to-emerald-500',
      category: 'ai'
    },
    { 
      key: 'quantumcomputing', 
      label: 'Quantum Computing Engineer', 
      icon: Brain,
      description: 'Research and develop quantum algorithms and hardware',
      color: 'from-purple-500 to-pink-500',
      category: 'ai'
    },
    { 
      key: 'technicalwriter', 
      label: 'Technical Writer', 
      icon: BookOpen,
      description: 'Create clear documentation and technical content',
      color: 'from-indigo-500 to-purple-500',
      category: 'documentation'
    },
    { 
      key: 'fintech', 
      label: 'Fintech Engineer', 
      icon: Code,
      description: 'Build financial applications and infrastructure',
      color: 'from-blue-500 to-indigo-500',
      category: 'finance'
    },
    { 
      key: 'healthcare', 
      label: 'Healthcare Data Engineer', 
      icon: Code,
      description: 'Design and maintain data pipelines for healthcare applications',
      color: 'from-green-500 to-emerald-500',
      category: 'healthcare'
    },
    { 
      key: 'gaming', 
      label: 'Gaming Engineer', 
      icon: Code,
      description: 'Build and optimize game engines and platforms',
      color: 'from-purple-500 to-pink-500',
      category: 'gaming'
    },
    { 
      key: 'edutech', 
      label: 'Edutech Engineer', 
      icon: BookOpen,
      description: 'Develop educational applications and platforms',
      color: 'from-purple-500 to-pink-500',
      category: 'education'
    }
  ]

  const categories = [
    { key: 'all', label: 'All Roles', count: roleOptions.length },
    { key: 'web', label: 'Web Development', count: roleOptions.filter(r => r.category === 'web').length },
    { key: 'ai', label: 'AI & Machine Learning', count: roleOptions.filter(r => r.category === 'ai').length },
    { key: 'data', label: 'Data & Analytics', count: roleOptions.filter(r => r.category === 'data').length },
    { key: 'mobile', label: 'Mobile Development', count: roleOptions.filter(r => r.category === 'mobile').length },
    { key: 'infrastructure', label: 'Infrastructure', count: roleOptions.filter(r => r.category === 'infrastructure').length },
    { key: 'security', label: 'Security', count: roleOptions.filter(r => r.category === 'security').length },
    { key: 'management', label: 'Management', count: roleOptions.filter(r => r.category === 'management').length },
    { key: 'blockchain', label: 'Blockchain', count: roleOptions.filter(r => r.category === 'blockchain').length },
    { key: 'systems', label: 'Systems', count: roleOptions.filter(r => r.category === 'systems').length },
    { key: 'design', label: 'Design', count: roleOptions.filter(r => r.category === 'design').length },
    { key: 'testing', label: 'Testing', count: roleOptions.filter(r => r.category === 'testing').length },
    { key: 'documentation', label: 'Documentation', count: roleOptions.filter(r => r.category === 'documentation').length },
    { key: 'finance', label: 'Finance', count: roleOptions.filter(r => r.category === 'finance').length },
    { key: 'healthcare', label: 'Healthcare', count: roleOptions.filter(r => r.category === 'healthcare').length },
    { key: 'gaming', label: 'Gaming', count: roleOptions.filter(r => r.category === 'gaming').length },
    { key: 'education', label: 'Education', count: roleOptions.filter(r => r.category === 'education').length }
  ]

  const filteredRoles = roleOptions.filter(role => {
    const matchesSearch = role.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         role.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || role.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedRoles = [...filteredRoles].sort((a, b) => {
    const roleA = (skillsData as any)[a.key]
    const roleB = (skillsData as any)[b.key]
    
    if (sortBy === 'demand') {
      const demandOrder = { 'Very High': 4, 'High': 3, 'Medium': 2, 'Low': 1 }
      return (demandOrder[roleB?.demand as keyof typeof demandOrder] || 0) - 
             (demandOrder[roleA?.demand as keyof typeof demandOrder] || 0)
    } else if (sortBy === 'salary') {
      const salaryOrder = { 'Very High': 4, 'High': 3, 'Medium': 2, 'Low': 1 }
      return (salaryOrder[roleB?.salary as keyof typeof salaryOrder] || 0) - 
             (salaryOrder[roleA?.salary as keyof typeof salaryOrder] || 0)
    }
    return 0
  })

  const handleRoleSelect = async (roleKey: string) => {
    try {
      // Update user's target role in the database
      await updateProfile({ targetRole: roleKey })
      // Force refresh user data to ensure all components update
      await refreshUser()
      // Navigate to roadmap
      navigate(`/roadmap?role=${roleKey}`)
    } catch (error) {
      console.error('Failed to update target role:', error)
      // Still navigate even if update fails
      navigate(`/roadmap?role=${roleKey}`)
    }
  }

  const getCurrentUserRole = () => {
    return roleOptions.find(role => role.key === user?.targetRole)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/roadmap')}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Roadmap</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              {user?.targetRole && (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>Current Role:</span>
                  <span className="font-medium text-gray-900">
                    {getCurrentUserRole()?.label}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Career Path
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore all available tech roles and their learning roadmaps. 
            Select any role to view its complete roadmap and start your journey.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search roles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.key} value={category.key}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="demand">Sort by Demand</option>
                <option value="salary">Sort by Salary</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedRoles.length} of {roleOptions.length} roles
          </p>
        </div>

        {/* Role Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedRoles.map((role) => {
            const roleData = (skillsData as any)[role.key]
            const isCurrentRole = role.key === user?.targetRole
            
            return (
              <div
                key={role.key}
                className={cn(
                  "bg-white rounded-lg shadow-sm border-2 transition-all duration-200 hover:shadow-md cursor-pointer",
                  isCurrentRole 
                    ? "border-blue-500 ring-2 ring-blue-100" 
                    : "border-gray-200 hover:border-gray-300"
                )}
                onClick={() => handleRoleSelect(role.key)}
              >
                <div className="p-6">
                  {/* Role Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={cn(
                        "p-2 rounded-lg bg-gradient-to-r",
                        role.color
                      )}>
                        <role.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {role.label}
                        </h3>
                        {isCurrentRole && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Current Role
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {role.description}
                  </p>

                  {/* Stats */}
                  {roleData && (
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Demand:</span>
                        <span className={cn(
                          "font-medium",
                          roleData.demand === 'Very High' ? 'text-green-600' :
                          roleData.demand === 'High' ? 'text-blue-600' :
                          roleData.demand === 'Medium' ? 'text-yellow-600' : 'text-gray-600'
                        )}>
                          {roleData.demand}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Salary:</span>
                        <span className={cn(
                          "font-medium",
                          roleData.salary === 'Very High' ? 'text-green-600' :
                          roleData.salary === 'High' ? 'text-blue-600' :
                          roleData.salary === 'Medium' ? 'text-yellow-600' : 'text-gray-600'
                        )}>
                          {roleData.salary}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Companies */}
                  {roleData?.companies && (
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Top Companies:</p>
                      <div className="flex flex-wrap gap-1">
                        {roleData.companies.slice(0, 3).map((company: string, index: number) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700"
                          >
                            {company}
                          </span>
                        ))}
                        {roleData.companies.length > 3 && (
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700">
                            +{roleData.companies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {roleData?.roadmap ? Object.keys(roleData.roadmap).length : 0} learning phases
                    </span>
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm">
                      <span>View Roadmap</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {sortedRoles.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
              <Search className="h-full w-full" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No roles found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
