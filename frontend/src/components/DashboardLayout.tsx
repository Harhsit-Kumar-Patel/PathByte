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
  Brain,
  Rocket
} from 'lucide-react'
import { cn } from '@/utils/cn'
import FloatingNavigation from './FloatingNavigation'

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
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-career-mesh animate-gradient-shift opacity-10" />
      
      {/* Floating Navigation */}
      <FloatingNavigation user={user} />

      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Dashboard Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-futuristic font-bold mb-2">
                  <span className="text-gradient">Welcome back,</span>
                  <br />
                  <span className="text-neon">{user?.name || 'Explorer'}</span>
                </h1>
                <p className="text-neutral-300 text-lg">
                  Ready to continue your tech career journey?
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="mt-6 lg:mt-0 grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-glass-dark backdrop-blur-xl rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-gradient">85%</div>
                  <div className="text-sm text-neutral-400">Progress</div>
                </div>
                <div className="bg-glass-dark backdrop-blur-xl rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-gradient">12</div>
                  <div className="text-sm text-neutral-400">Skills</div>
                </div>
                <div className="bg-glass-dark backdrop-blur-xl rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-gradient">5</div>
                  <div className="text-sm text-neutral-400">Badges</div>
                </div>
                <div className="bg-glass-dark backdrop-blur-xl rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-gradient">3</div>
                  <div className="text-sm text-neutral-400">Roadmaps</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Actions */}
              <div className="bg-glass-dark backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Quick Actions</h2>
                  <Zap className="w-5 h-5 text-primary-400" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <Link
                      key={index}
                      to={action.href}
                      className="group bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={cn(
                          'w-10 h-10 rounded-lg flex items-center justify-center',
                          action.color === 'primary' && 'bg-primary-500/20',
                          action.color === 'secondary' && 'bg-secondary-500/20',
                          action.color === 'accent' && 'bg-accent-500/20',
                          action.color === 'success' && 'bg-success-500/20'
                        )}>
                          <action.icon className={cn(
                            'w-5 h-5',
                            action.color === 'primary' && 'text-primary-400',
                            action.color === 'secondary' && 'text-secondary-400',
                            action.color === 'accent' && 'text-accent-400',
                            action.color === 'success' && 'text-success-400'
                          )} />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-white group-hover:text-gradient transition-colors duration-300">
                            {action.name}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-primary-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-glass-dark backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
                  <Clock className="w-5 h-5 text-primary-400" />
                </div>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center">
                        {activity.type === 'course' && <BookOpen className="w-4 h-4 text-primary-400" />}
                        {activity.type === 'achievement' && <Award className="w-4 h-4 text-secondary-400" />}
                        {activity.type === 'community' && <Users className="w-4 h-4 text-accent-400" />}
                        {activity.type === 'roadmap' && <Target className="w-4 h-4 text-success-400" />}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">{activity.action}</div>
                        <div className="text-sm text-neutral-400">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-glass-dark backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                {children}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <div className="bg-glass-dark backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Upcoming</h2>
                  <Calendar className="w-5 h-5 text-primary-400" />
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="text-white font-medium mb-1">{event.title}</div>
                          <div className="text-sm text-neutral-400">{event.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Overview */}
              <div className="bg-glass-dark backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Progress</h2>
                  <TrendingUp className="w-5 h-5 text-primary-400" />
                </div>
                <div className="space-y-4">
                  {[
                    { skill: 'JavaScript', progress: 85, color: 'primary' },
                    { skill: 'React', progress: 70, color: 'secondary' },
                    { skill: 'Node.js', progress: 60, color: 'accent' },
                    { skill: 'TypeScript', progress: 45, color: 'success' },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">{item.skill}</span>
                        <span className="text-sm text-neutral-400">{item.progress}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className={cn(
                            'h-2 rounded-full transition-all duration-1000',
                            item.color === 'primary' && 'bg-gradient-to-r from-primary-500 to-primary-400',
                            item.color === 'secondary' && 'bg-gradient-to-r from-secondary-500 to-secondary-400',
                            item.color === 'accent' && 'bg-gradient-to-r from-accent-500 to-accent-400',
                            item.color === 'success' && 'bg-gradient-to-r from-success-500 to-success-400'
                          )}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-glass-dark backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">Achievements</h2>
                  <Award className="w-5 h-5 text-primary-400" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'First Steps', icon: Rocket, earned: true },
                    { name: 'Code Master', icon: Brain, earned: true },
                    { name: 'Community Star', icon: Users, earned: false },
                    { name: 'Speed Learner', icon: Zap, earned: false },
                  ].map((achievement, index) => (
                    <div key={index} className={cn(
                      'p-4 rounded-lg border text-center transition-all duration-300',
                      achievement.earned 
                        ? 'bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border-primary-500/50' 
                        : 'bg-white/5 border-white/10'
                    )}>
                      <div className={cn(
                        'w-8 h-8 mx-auto mb-2 rounded-lg flex items-center justify-center',
                        achievement.earned 
                          ? 'bg-gradient-to-br from-primary-500 to-secondary-500' 
                          : 'bg-white/10'
                      )}>
                        <achievement.icon className={cn(
                          'w-4 h-4',
                          achievement.earned ? 'text-white' : 'text-neutral-400'
                        )} />
                      </div>
                      <div className={cn(
                        'text-sm font-medium',
                        achievement.earned ? 'text-white' : 'text-neutral-400'
                      )}>
                        {achievement.name}
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
