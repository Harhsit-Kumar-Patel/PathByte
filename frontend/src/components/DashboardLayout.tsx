import { Link } from 'react-router-dom'
import { 
  TrendingUp, 
  Target, 
  BookOpen, 
  Users, 
  Award,
  Calendar,
  Clock,
  ArrowRight,
  Zap,
  Brain
} from 'lucide-react'
import { cn } from '@/utils/cn'

interface DashboardLayoutProps {
  children: React.ReactNode
  user?: {
    name: string
    email: string
    avatar?: string
  }
}

export default function DashboardLayout({ children, user }: DashboardLayoutProps) {

  const quickActions = [
    { name: 'Take Assessment', icon: Brain, href: '/assessment', color: 'primary' },
    { name: 'Browse Roadmaps', icon: Target, href: '/roadmaps', color: 'secondary' },
    { name: 'Join Community', icon: Users, href: '/community', color: 'accent' },
    { name: 'View Progress', icon: TrendingUp, href: '/progress', color: 'success' },
  ]

  const recentActivity = [
    { action: 'Completed React Fundamentals', time: '2 hours ago', type: 'course' },
    { action: 'Earned JavaScript Badge', time: '1 day ago', type: 'achievement' },
    { action: 'Joined Frontend Developers Group', time: '2 days ago', type: 'community' },
    { action: 'Started Node.js Roadmap', time: '3 days ago', type: 'roadmap' },
  ]

  const upcomingEvents = [
    { title: 'Web Development Workshop', date: 'Tomorrow, 2:00 PM', type: 'workshop' },
    { title: 'Career Assessment Due', date: 'Friday, 11:59 PM', type: 'deadline' },
    { title: 'Community Meetup', date: 'Next Monday, 6:00 PM', type: 'event' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Dashboard Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                  <span className="text-gray-900">Welcome back,</span>
                  <br />
                  <span className="text-gradient">{user?.name || 'Explorer'}</span>
                  <span className="text-2xl">👋</span>
                </h1>
                <p className="text-gray-600 text-lg">
                  Here's what's happening with your learning journey
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="mt-6 lg:mt-0 grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="card p-4">
                  <div className="text-2xl font-bold text-gray-900">85%</div>
                  <div className="text-sm text-gray-600">Progress</div>
                </div>
                <div className="card p-4">
                  <div className="text-2xl font-bold text-gray-900">12</div>
                  <div className="text-sm text-gray-600">Skills</div>
                </div>
                <div className="card p-4">
                  <div className="text-2xl font-bold text-gray-900">5</div>
                  <div className="text-sm text-gray-600">Badges</div>
                </div>
                <div className="card p-4">
                  <div className="text-2xl font-bold text-gray-900">3</div>
                  <div className="text-sm text-gray-600">Roadmaps</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Your Learning Roadmap */}
              <div className="card-gradient p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">Your Learning Roadmap</h2>
                  </div>
                  <Link
                    to="/roadmap"
                    className="btn-primary flex items-center space-x-2"
                  >
                    <span>View Roadmap</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-primary-600" />
                    <div>
                      <div className="font-medium text-gray-900">Target Role</div>
                      <div className="text-sm text-gray-600">Frontend Developer</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-primary-600" />
                    <div>
                      <div className="font-medium text-gray-900">Experience Level</div>
                      <div className="text-sm text-gray-600">Beginner</div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Ready to follow your roadmap? Get detailed learning paths, resources, and milestone projects for your Frontend Developer journey.
                  </p>
                </div>
              </div>

              {/* Your Learning Progress */}
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Your Learning Progress</h2>
                  <button className="btn-secondary text-sm">
                    Track your journey
                  </button>
                </div>
                <div className="space-y-6">
                  {/* Overall Progress */}
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#8b5cf6"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.05)}`}
                          className="transition-all duration-1000"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-900">5%</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">Overall Progress Across all levels</div>
                  </div>

                  {/* Current Level Progress */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">Current Level</span>
                      <span className="text-sm text-gray-600">5%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '5%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Year 0-1 (Beginner)</div>
                  </div>

                  {/* Skills and Projects */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-primary-600" />
                      <div>
                        <div className="font-medium text-gray-900">Skills Mastered</div>
                        <div className="text-sm text-gray-600">1 skills</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-primary-600" />
                      <div>
                        <div className="font-medium text-gray-900">Projects Done</div>
                        <div className="text-sm text-gray-600">0 projects</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="card p-6">
                {children}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
                  <Zap className="w-5 h-5 text-primary-600" />
                </div>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <Link
                      key={index}
                      to={action.href}
                      className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                      <div className={cn(
                        'w-10 h-10 rounded-lg flex items-center justify-center',
                        action.color === 'primary' && 'bg-primary-100',
                        action.color === 'secondary' && 'bg-blue-100',
                        action.color === 'accent' && 'bg-green-100',
                        action.color === 'success' && 'bg-purple-100'
                      )}>
                        <action.icon className={cn(
                          'w-5 h-5',
                          action.color === 'primary' && 'text-primary-600',
                          action.color === 'secondary' && 'text-blue-600',
                          action.color === 'accent' && 'text-green-600',
                          action.color === 'success' && 'text-purple-600'
                        )} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                          {action.name}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                  <Clock className="w-5 h-5 text-primary-600" />
                </div>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                        {activity.type === 'course' && <BookOpen className="w-4 h-4 text-primary-600" />}
                        {activity.type === 'achievement' && <Award className="w-4 h-4 text-primary-600" />}
                        {activity.type === 'community' && <Users className="w-4 h-4 text-primary-600" />}
                        {activity.type === 'roadmap' && <Target className="w-4 h-4 text-primary-600" />}
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-900 font-medium">{activity.action}</div>
                        <div className="text-sm text-gray-600">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Upcoming</h2>
                  <Calendar className="w-5 h-5 text-primary-600" />
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="text-gray-900 font-medium mb-1">{event.title}</div>
                          <div className="text-sm text-gray-600">{event.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
