import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  BarChart3,
  BookOpen,
  Brain,
  ChevronDown,
  Compass,
  LogOut,
  Menu,
  Rocket,
  Settings,
  Sparkles,
  User,
  Users,
  X,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3, subtitle: 'Track momentum' },
  { name: 'Roadmaps', href: '/roadmap', icon: Rocket, subtitle: 'Build your next move' },
  { name: 'Career Guide', href: '/career-guide', icon: Compass, subtitle: 'Explore paths' },
  { name: 'Assessment', href: '/career-assessment', icon: Brain, subtitle: 'Find your fit' },
  { name: 'Community', href: '/community', icon: Users, subtitle: 'Learn together' },
  { name: 'Profile', href: '/profile', icon: User, subtitle: 'Preferences and progress' },
]

const publicNav = [
  { name: 'Home', href: '/' },
  { name: 'Career Guide', href: '/career-guide' },
  { name: 'Assessment', href: '/career-assessment' },
]

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': { title: 'PathByte', description: 'A calmer way to plan your tech growth.' },
  '/career-guide': { title: 'Career Guide', description: 'Browse roles, skill paths, and direction.' },
  '/career-assessment': { title: 'Career Assessment', description: 'Discover a role that matches your strengths.' },
  '/login': { title: 'Welcome Back', description: 'Access your roadmap, progress, and learning hub.' },
  '/onboarding': { title: 'Get Started', description: 'Create your account and shape your path.' },
  '/dashboard': { title: 'Dashboard', description: 'See progress, milestones, and what to do next.' },
  '/roadmap': { title: 'Roadmap', description: 'Follow a structured learning plan with confidence.' },
  '/community': { title: 'Community', description: 'Stay connected with builders on the same journey.' },
  '/market-insights': { title: 'Market Insights', description: 'Understand what skills matter right now.' },
  '/profile': { title: 'Profile', description: 'Manage your account, goals, and exported progress.' },
  '/roles': { title: 'Role Selection', description: 'Choose the track you want to commit to next.' },
}

function getPageMeta(pathname: string) {
  const directMatch = pageMeta[pathname]
  if (directMatch) {
    return directMatch
  }

  if (pathname.startsWith('/roadmap/')) {
    return {
      title: 'Skill Roadmap',
      description: 'A more detailed view of the path you selected.',
    }
  }

  return {
    title: 'PathByte',
    description: 'Modern career planning for ambitious builders.',
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const isPublicRoute = useMemo(
    () =>
      ['/', '/login', '/onboarding', '/career-guide', '/career-assessment'].includes(location.pathname),
    [location.pathname],
  )
  const meta = useMemo(() => getPageMeta(location.pathname), [location.pathname])

  useEffect(() => {
    setSidebarOpen(false)
    setUserDropdownOpen(false)
  }, [location.pathname])

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  if (isPublicRoute) {
    return (
      <div className="app-shell">
        <header className="sticky top-0 z-40 border-b border-white/60 bg-white/72 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="interactive-outline surface-panel flex h-12 w-12 items-center justify-center rounded-2xl">
                <Sparkles className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-base font-semibold tracking-tight text-slate-950">PathByte</div>
                <div className="text-xs text-slate-500">Guided tech career design</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {publicNav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.href ? 'text-slate-950' : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {user ? (
                <Link
                  to="/dashboard"
                  className="btn-modern rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900"
                >
                  Open Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="hidden rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950 sm:inline-flex"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/onboarding"
                    className="btn-modern rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white"
                  >
                    Start now
                  </Link>
                </>
              )}
            </div>
          </div>
        </header>

        <main>{children}</main>
      </div>
    )
  }

  return (
    <div className="app-shell lg:flex">
      <div
        className={`fixed inset-0 z-50 bg-slate-950/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          sidebarOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside
        className={`app-sidebar surface-panel-strong fixed inset-y-0 left-0 z-50 flex flex-col rounded-r-[2rem] p-4 transition-transform duration-500 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-[105%]'
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between px-2 pb-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="interactive-outline surface-panel flex h-12 w-12 items-center justify-center rounded-2xl">
              <Sparkles className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="text-base font-semibold tracking-tight text-slate-950">PathByte</div>
              <div className="text-xs text-slate-500">Learning command center</div>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="rounded-2xl p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-950 px-5 py-5 text-white shadow-[0_24px_60px_rgba(15,23,42,0.35)]">
          <div className="section-kicker border-white/10 bg-white/10 text-slate-100">
            <Sparkles className="h-3.5 w-3.5" />
            Daily focus
          </div>
          <h2 className="mt-4 text-xl font-semibold leading-tight">Build one meaningful step at a time.</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Clear structure, visible momentum, and smoother context switching across your learning flow.
          </p>
        </div>

        <nav className="mt-6 flex-1 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon
            const active =
              location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href))

            return (
              <Link
                key={item.href}
                to={item.href}
                className={`group flex items-center gap-3 rounded-[1.4rem] border px-4 py-3.5 transition-all duration-300 ${
                  active
                    ? 'border-blue-200 bg-blue-50 text-slate-950 shadow-[0_18px_32px_rgba(20,93,255,0.10)]'
                    : 'border-transparent text-slate-600 hover:border-slate-200 hover:bg-white hover:text-slate-950'
                }`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-colors ${
                    active ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-950 group-hover:text-white'
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold">{item.name}</div>
                  <div className="truncate text-xs text-slate-500">{item.subtitle}</div>
                </div>
              </Link>
            )
          })}
        </nav>

        {user && (
          <div className="surface-panel rounded-[1.6rem] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                {user.email?.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-slate-950">{user.email}</div>
                <div className="text-xs text-slate-500">Profile synced</div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-700"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
        )}
      </aside>

      <div className="min-h-screen flex-1 lg:pl-[calc(var(--shell-sidebar)+1rem)]">
        <header className="sticky top-0 z-40 border-b border-white/60 bg-white/72 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="surface-panel flex h-11 w-11 items-center justify-center rounded-2xl text-slate-700 lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>

              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Workspace</div>
                <h1 className="text-xl font-semibold tracking-tight text-slate-950">{meta.title}</h1>
                <p className="hidden text-sm text-slate-500 sm:block">{meta.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/career-guide"
                className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950 md:inline-flex"
              >
                <BookOpen className="h-4 w-4" />
                Explore roles
              </Link>

              {user && (
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setUserDropdownOpen((prev) => !prev)}
                    className="surface-panel flex items-center gap-3 rounded-full px-3 py-2"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                    <div className="hidden text-left md:block">
                      <div className="max-w-40 truncate text-sm font-semibold text-slate-950">{user.email}</div>
                      <div className="text-xs text-slate-500">Active learner</div>
                    </div>
                    <ChevronDown
                      className={`hidden h-4 w-4 text-slate-500 transition-transform md:block ${
                        userDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {userDropdownOpen && (
                    <div className="surface-panel-strong absolute right-0 top-[calc(100%+0.75rem)] z-50 w-64 rounded-[1.4rem] p-2">
                      <Link
                        to="/profile"
                        className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-950"
                      >
                        <Settings className="h-4 w-4" />
                        Account settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="page-shell mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  )
}
