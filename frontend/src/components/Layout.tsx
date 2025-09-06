import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { 
  Menu, 
  X, 
  LogOut, 
  Settings, 
  ChevronDown,
  Home,
  Map,
  Brain,
  Rocket,
  BarChart3,
  User,
  Sparkles,
  Search
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const navigation = [
  { name: 'Home', href: '/', icon: Home, color: 'from-blue-500 to-cyan-500' },
  { name: 'Career Guide', href: '/career-guide', icon: Map, color: 'from-purple-500 to-pink-500' },
  { name: 'Career Assessment', href: '/career-assessment', icon: Brain, color: 'from-emerald-500 to-teal-500' },
  { name: 'Roadmap', href: '/roadmap', icon: Rocket, color: 'from-orange-500 to-red-500' },
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3, color: 'from-indigo-500 to-blue-500' },
  { name: 'Profile', href: '/profile', icon: User, color: 'from-violet-500 to-purple-500' }
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  // Close sidebar when route changes
  useEffect(() => {
    setSidebarOpen(false)
  }, [location])

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ease-in-out ${
        sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
        
        {/* Sidebar */}
        <div className={`absolute left-0 top-0 h-full w-72 sm:w-80 max-w-[90vw] bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-out transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 border-b border-slate-200/50">
              <Link 
                to="/" 
                className="flex items-center space-x-2 sm:space-x-3 group transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-soft">
                    <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-600 rounded-2xl opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">PathByte</span>
                  <span className="text-xs text-slate-600 font-medium hidden sm:block">AI Career Platform</span>
                </div>
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all duration-300 hover:scale-110"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 sm:px-6 py-6 sm:py-8 space-y-2 sm:space-y-3">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center px-3 sm:px-4 py-3 sm:py-4 text-sm font-medium rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                      isActive
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg shadow-${item.color.split('-')[1]}/25`
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:shadow-md'
                    }`}
                  >
                    <div className={`mr-3 sm:mr-4 p-2 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : `bg-gradient-to-br ${item.color} text-white opacity-80 group-hover:opacity-100`
                    }`}>
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span className="truncate">{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse flex-shrink-0"></div>
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* User section */}
            {user && (
              <div className="border-t border-slate-200/50 p-4 sm:p-6">
                <div className="flex items-center space-x-3 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-300">
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-semibold text-sm sm:text-lg hover:scale-110 transition-transform duration-300 shadow-lg">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-2xl opacity-20 blur-sm"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-900 truncate">{user.email}</p>
                    <p className="text-xs text-slate-600 hidden sm:block">Premium Member</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="mt-4 w-full flex items-center justify-center px-4 py-3 text-sm font-medium text-red-700 bg-red-50 rounded-xl hover:bg-red-100 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-red-300"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-80 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white/95 backdrop-blur-xl px-8 pb-6 border-r border-slate-200/50 shadow-2xl">
          {/* Logo */}
          <div className="flex h-24 shrink-0 items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-4 group transition-all duration-300"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-xl">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                                 <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">PathByte</span>
                 <span className="text-sm text-slate-600 font-medium">AI Career Platform</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-1 flex-col space-y-3 stagger-animation">
            {navigation.map((item, index) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                                     className={`group flex items-center px-5 py-4 text-sm font-medium rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up ${
                     isActive
                       ? `bg-gradient-to-r ${item.color} text-white shadow-xl shadow-${item.color.split('-')[1]}/25`
                       : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                   }`}
                   style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`mr-4 p-2.5 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : `bg-gradient-to-br ${item.color} text-white opacity-80 group-hover:opacity-100`
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  {item.name}
                  {isActive && (
                    <div className="ml-auto w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* User section */}
          {user && (
            <div className="border-t border-slate-200/50 pt-6">
              <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-lg font-semibold hover:scale-110 transition-transform duration-300 shadow-lg">
                    {user.email?.charAt(0).toUpperCase()}
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-2xl opacity-20 blur-sm"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">{user.email}</p>
                  <p className="text-xs text-slate-600">Premium Member</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-slate-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-300 hover:scale-110"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-80">
        {/* Top bar */}
        <div className="sticky top-0 z-40 flex h-16 sm:h-20 shrink-0 items-center gap-x-2 sm:gap-x-4 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl px-4 sm:px-6 shadow-sm">
          {/* Mobile menu button */}
          <button
            type="button"
            className="-m-2.5 p-2.5 text-slate-700 lg:hidden hover:bg-slate-100 rounded-xl transition-all duration-300 hover:scale-105"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Separator */}
          <div className="h-6 sm:h-8 w-px bg-slate-200 lg:hidden" />

          {/* Search bar */}
          <div className="flex-1 max-w-sm sm:max-w-md lg:max-w-lg">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search skills, careers..."
                className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center justify-end gap-x-2 sm:gap-x-4">
            {/* User dropdown */}
            {user && (
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center space-x-2 sm:space-x-3 p-2 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 group"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                >
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-xs sm:text-sm font-semibold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-xl sm:rounded-2xl opacity-20 blur-sm"></div>
                  </div>
                  <span className="hidden md:block text-sm font-medium text-slate-900 group-hover:text-blue-700 transition-colors duration-300 truncate max-w-32">
                    {user.email}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-300 hidden sm:block ${
                    userDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 sm:w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 py-3 animate-fade-in-up z-50">
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="text-sm font-semibold text-slate-900 truncate">{user.email}</p>
                      <p className="text-xs text-slate-500 mt-1">Premium Member</p>
                    </div>
                    <div className="py-2">
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-3 text-sm text-slate-800 hover:bg-slate-50 hover:text-blue-700 transition-all duration-300 hover:translate-x-1"
                        onClick={() => setUserDropdownOpen(false)}
                      >
                        <Settings className="h-4 w-4 mr-3" />
                        Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-all duration-300 hover:translate-x-1"
                      >
                        <LogOut className="h-4 w-4 mr-3" />
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Page content */}
        <main className="py-4 sm:py-6 lg:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
