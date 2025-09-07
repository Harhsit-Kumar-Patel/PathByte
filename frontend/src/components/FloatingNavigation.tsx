import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { 
  Search, 
  User, 
  Bell, 
  Settings, 
  LogOut,
  Rocket,
  Menu,
  X,
  Home,
  Target,
  Users,
  TrendingUp,
  BookOpen,
  Award
} from 'lucide-react'
import { cn } from '@/utils/cn'

interface FloatingNavigationProps {
  user?: {
    name: string
    email: string
    avatar?: string
  }
  onLogout?: () => void
}

export default function FloatingNavigation({ user, onLogout }: FloatingNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Assessment', href: '/assessment', icon: Target },
    { name: 'Roadmaps', href: '/roadmaps', icon: BookOpen },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Progress', href: '/progress', icon: TrendingUp },
    { name: 'Achievements', href: '/achievements', icon: Award },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <>
      {/* Floating Navigation */}
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-glass-dark backdrop-blur-xl border-b border-white/10 shadow-floating' 
          : 'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-futuristic font-bold text-gradient group-hover:text-neon transition-colors duration-300">
                PathByte
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300',
                      isActive
                        ? 'bg-primary-500/20 text-primary-300'
                        : 'text-neutral-300 hover:text-white hover:bg-white/5'
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </div>

            {/* Search & User Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                >
                  <Search className="w-5 h-5" />
                </button>
                
                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-glass-dark backdrop-blur-xl rounded-2xl border border-white/10 shadow-floating p-4">
                    <form onSubmit={handleSearch} className="space-y-4">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <input
                          type="text"
                          placeholder="Search courses, skills, jobs..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500/50 focus:bg-white/10 transition-all duration-300"
                          autoFocus
                        />
                      </div>
                      <div className="text-xs text-neutral-400">
                        Press Enter to search
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* Notifications */}
              <button className="p-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full"></span>
              </button>

              {/* User Menu */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full border-2 border-primary-500/50"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <span className="hidden sm:block text-white font-medium">{user.name}</span>
                  </button>

                  {/* User Dropdown */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-64 bg-glass-dark backdrop-blur-xl rounded-2xl border border-white/10 shadow-floating p-2">
                      <div className="p-3 border-b border-white/10">
                        <div className="font-medium text-white">{user.name}</div>
                        <div className="text-sm text-neutral-400">{user.email}</div>
                      </div>
                      <div className="py-2">
                        <Link
                          to="/profile"
                          className="flex items-center space-x-3 px-3 py-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                        >
                          <User className="w-4 h-4" />
                          <span>Profile</span>
                        </Link>
                        <Link
                          to="/settings"
                          className="flex items-center space-x-3 px-3 py-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                        >
                          <Settings className="w-4 h-4" />
                          <span>Settings</span>
                        </Link>
                        <button
                          onClick={onLogout}
                          className="w-full flex items-center space-x-3 px-3 py-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/login"
                    className="text-neutral-300 hover:text-white transition-colors duration-300"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="capsule bg-gradient-to-r from-primary-500 to-secondary-500 px-4 py-2 text-white font-medium hover:shadow-neon transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-glass-dark backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-300',
                      isActive
                        ? 'bg-primary-500/20 text-primary-300'
                        : 'text-neutral-300 hover:text-white hover:bg-white/5'
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Backdrop for search */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsSearchOpen(false)}
        />
      )}

      {/* Backdrop for user menu */}
      {isUserMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsUserMenuOpen(false)}
        />
      )}
    </>
  )
}
