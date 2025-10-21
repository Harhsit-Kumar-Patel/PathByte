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
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { motion, AnimatePresence } from 'framer-motion' // <-- Make sure this is imported

// Navigation array remains the same
const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Career Guide', href: '/career-guide', icon: Map },
  { name: 'Career Assessment', href: '/career-assessment', icon: Brain },
  { name: 'Roadmap', href: '/roadmap', icon: Rocket },
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'Profile', href: '/profile', icon: User }
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [userDropdownOpen, setUserDropdownOpen] =useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  // Close menus when route changes
  useEffect(() => {
    setUserDropdownOpen(false)
    setMobileMenuOpen(false)
  }, [location])

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  // Helper component for navigation links
  const NavLink = ({ item }: { item: typeof navigation[0] }) => {
    const Icon = item.icon
    const isActive = location.pathname === item.href
    return (
      <Link
        key={item.name}
        to={item.href}
        className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
          isActive
            ? 'bg-indigo-600 text-white shadow-md'
            : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
        }`}
        aria-current={isActive ? 'page' : undefined}
      >
        <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
        <span className="truncate">{item.name}</span>
      </Link>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-50">
      {/* --- Top Navigation Bar --- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200/50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            
            {/* 1. Logo */}
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="flex items-center space-x-2 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-soft">
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
                  PathByte
                </span>
              </Link>
            </div>

            {/* 2. Desktop Navigation Links */}
            <nav className="hidden lg:flex lg:items-center lg:space-x-4 ml-10">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>

            {/* 3. Right Side (User + Mobile Menu Button) */}
            <div className="flex items-center gap-x-2 sm:gap-x-4 ml-auto">
              
              {/* User Dropdown */}
              {user && (
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center space-x-2 p-2 rounded-xl hover:bg-slate-100 transition-all duration-300 group"
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  >
                    <div className="relative">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white text-xs sm:text-sm font-semibold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {user.email?.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${
                      userDropdownOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* User Dropdown Menu */}
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

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="p-2.5 text-slate-700 lg:hidden hover:bg-slate-100 rounded-xl transition-all duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* --- Mobile Menu Dropdown --- */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg border-b border-t border-slate-200/50 animate-fade-in-up">
            <nav className="flex flex-col p-4 space-y-2">
              {navigation.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* --- Main Page Content (UPDATED) --- */}
      <main className="py-4 sm:py-6 lg:py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname} // This tells framer-motion the page has changed
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="px-4 sm:px-6 lg:px-8" // This was the div wrapper from before
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}