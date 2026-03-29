import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Eye, EyeOff, Lock, Mail, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

const featureList = [
  'Track your learning across roles, years, and resources.',
  'Move between pages with polished, low-noise transitions.',
  'Keep profile, roadmap, and progress in one place.',
]

export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await login(email, password)
      navigate('/dashboard')
    } catch (err: any) {
      setError(err?.response?.data?.error || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="hero-orb left-[-5rem] top-14 h-56 w-56 bg-sky-300/40" />
      <div className="hero-orb right-[-5rem] top-24 h-80 w-80 bg-blue-300/25" style={{ animationDelay: '2.2s' }} />

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <section className="hidden lg:block">
          <div className="max-w-xl">
            <div className="section-kicker">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              Refreshed PathByte experience
            </div>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950">
              Sign back in and pick up your <span className="gradient-text">next meaningful step.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The redesigned workspace is cleaner, more focused, and easier to move through, with subtle motion that helps each screen settle into place.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="card-modern p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Designed for flow</p>
                    <p className="text-sm text-slate-600">Cleaner sections, stronger contrast, and calmer navigation.</p>
                  </div>
                </div>
              </div>

              <div className="surface-panel rounded-[1.75rem] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Inside your workspace</p>
                <div className="mt-4 space-y-3">
                  {featureList.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/70 px-4 py-3">
                      <ShieldCheck className="mt-0.5 h-4 w-4 text-blue-600" />
                      <p className="text-sm leading-6 text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-md">
          <div className="surface-panel-strong rounded-[2rem] p-6 sm:p-8">
            <Link to="/" className="mb-8 inline-flex items-center gap-3">
              <div className="interactive-outline surface-panel flex h-12 w-12 items-center justify-center rounded-2xl">
                <Sparkles className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-base font-semibold text-slate-950">PathByte</div>
                <div className="text-xs text-slate-500">Learning command center</div>
              </div>
            </Link>

            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Welcome back</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Sign in to continue where your roadmap left off.</p>
            </div>

            {error && (
              <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <Mail className="h-4 w-4 text-slate-500" />
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <Lock className="h-4 w-4 text-slate-500" />
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Secure sign in</span>
                <Link to="/onboarding" className="link-modern font-semibold text-slate-700">
                  Need an account?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-modern inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? 'Signing in...' : 'Sign in'}
                {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
              </button>
            </form>

            <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
              New here?{' '}
              <Link to="/onboarding" className="font-semibold text-slate-900">
                Create your account
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
