import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Briefcase, Clock3, Eye, EyeOff, MapPin, Sparkles, User } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { cn } from '@/utils/cn'

const steps = [
  { number: 1, title: 'Identity', icon: User },
  { number: 2, title: 'Location', icon: MapPin },
  { number: 3, title: 'Career', icon: Briefcase },
  { number: 4, title: 'Preferences', icon: Clock3 },
]

const benefits = [
  'Get a profile that feeds directly into your roadmap recommendations.',
  'Capture your target role and experience from the start.',
  'Enter a workspace that matches the new modern PathByte design.',
]

export default function OnboardingPage() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    locationCity: '',
    locationState: '',
    locationCountry: '',
    experienceLevel: '',
    targetRole: '',
    timeCommitment: '',
    budget: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        locationCity: formData.locationCity,
        locationState: formData.locationState,
        locationCountry: formData.locationCountry,
        experienceLevel: formData.experienceLevel,
        targetRole: formData.targetRole,
      })

      navigate('/dashboard')
    } catch (err: any) {
      let errorMessage = 'Registration failed. Please try again.'

      if (err.response?.data?.error) {
        errorMessage = err.response.data.error
      } else if (err.message) {
        errorMessage = err.message
      }

      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="hero-orb left-[-5rem] top-10 h-56 w-56 bg-sky-300/40" />
      <div className="hero-orb right-[-6rem] top-28 h-80 w-80 bg-blue-300/25" style={{ animationDelay: '2s' }} />

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <section className="hidden lg:block">
          <div className="max-w-xl">
            <div className="section-kicker">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              Registration, redesigned
            </div>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950">
              Create your account in a flow that feels <span className="gradient-text">clear and modern.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              This sign-up experience now mirrors the new login design so switching between entry points feels consistent, polished, and easier to trust.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((item, index) => (
                <div key={item} className="card-modern flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-2xl">
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

            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Create your account</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tell us enough to personalise your roadmap from day one.
                </p>
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600">
                Step {currentStep} of {steps.length}
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-4">
              {steps.map((step) => {
                const Icon = step.icon
                const active = currentStep === step.number
                const complete = currentStep > step.number

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setCurrentStep(step.number)}
                    className={cn(
                      'rounded-[1.25rem] border px-4 py-3 text-left transition-all duration-300',
                      active
                        ? 'border-blue-200 bg-blue-50 shadow-[0_14px_30px_rgba(20,93,255,0.10)]'
                        : 'border-slate-200 bg-white hover:border-slate-300',
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={cn(
                          'flex h-9 w-9 items-center justify-center rounded-2xl',
                          active || complete ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-500',
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-400">0{step.number}</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-slate-900">{step.title}</p>
                  </button>
                )
              })}
            </div>

            {error && (
              <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8">
              {currentStep === 1 && (
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">First name</label>
                    <input name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">Last name</label>
                    <input name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-slate-800">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-slate-800">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        placeholder="Create a secure password"
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
                </div>
              )}

              {currentStep === 2 && (
                <div className="grid gap-5 md:grid-cols-3">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">City</label>
                    <input name="locationCity" value={formData.locationCity} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">State</label>
                    <input name="locationState" value={formData.locationState} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">Country</label>
                    <input name="locationCountry" value={formData.locationCountry} onChange={handleInputChange} required />
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">Experience level</label>
                    <select name="experienceLevel" value={formData.experienceLevel} onChange={handleInputChange} required>
                      <option value="">Select your experience level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3-5 years)</option>
                      <option value="expert">Expert (5+ years)</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">Target role</label>
                    <select name="targetRole" value={formData.targetRole} onChange={handleInputChange} required>
                      <option value="">Select your target role</option>
                      <optgroup label="Software Development">
                        <option value="frontend">Frontend Developer</option>
                        <option value="backend">Backend Developer</option>
                        <option value="fullstack">Full-Stack Developer</option>
                        <option value="mobile">Mobile App Developer</option>
                        <option value="game">Game Developer</option>
                        <option value="embeddedengineer">Embedded Systems Engineer</option>
                        <option value="systemprogrammer">Systems Programmer</option>
                        <option value="compilerengineer">Compiler Engineer</option>
                      </optgroup>
                      <optgroup label="Data & AI">
                        <option value="datascientist">Data Scientist</option>
                        <option value="dataengineer">Data Engineer</option>
                        <option value="mle">Machine Learning Engineer</option>
                        <option value="aispecialist">AI Specialist</option>
                        <option value="datavisualization">Data Visualization Engineer</option>
                        <option value="nlpengineer">NLP Engineer</option>
                        <option value="computervision">Computer Vision Engineer</option>
                      </optgroup>
                      <optgroup label="Infrastructure & Operations">
                        <option value="devops">DevOps Engineer</option>
                        <option value="cloudengineer">Cloud Engineer</option>
                        <option value="sre">Site Reliability Engineer</option>
                        <option value="networkengineer">Network Engineer</option>
                        <option value="databaseadmin">Database Administrator</option>
                        <option value="cybersecurity">Cybersecurity Engineer</option>
                      </optgroup>
                      <optgroup label="Emerging Tech">
                        <option value="blockchain">Blockchain Developer</option>
                        <option value="web3developer">Web3 Developer</option>
                        <option value="aiops">AI Operations Engineer</option>
                        <option value="quantumcomputing">Quantum Computing Engineer</option>
                        <option value="generativeai">Generative AI Engineer</option>
                      </optgroup>
                      <optgroup label="Specialized & Related Roles">
                        <option value="uidesigner">UI/UX Designer</option>
                        <option value="productmanager">Product Manager</option>
                        <option value="qaengineer">QA Engineer</option>
                        <option value="technicalwriter">Technical Writer</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">Weekly time commitment</label>
                    <select name="timeCommitment" value={formData.timeCommitment} onChange={handleInputChange}>
                      <option value="">Select your time commitment</option>
                      <option value="minimal">Minimal (1-2 hours/week)</option>
                      <option value="moderate">Moderate (3-5 hours/week)</option>
                      <option value="dedicated">Dedicated (6-10 hours/week)</option>
                      <option value="intensive">Intensive (10+ hours/week)</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">Budget preference</label>
                    <select name="budget" value={formData.budget} onChange={handleInputChange}>
                      <option value="">Select your budget preference</option>
                      <option value="free">Free resources only</option>
                      <option value="low">Low cost ($0-50/month)</option>
                      <option value="medium">Medium cost ($50-200/month)</option>
                      <option value="high">High cost ($200+/month)</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-slate-900">What happens next</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Once your account is created, we’ll take these details and drop you straight into the redesigned dashboard and roadmap flow.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-500">
                  Already registered?{' '}
                  <Link to="/login" className="font-semibold text-slate-900">
                    Sign in
                  </Link>
                </p>

                <div className="flex gap-3">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep((step) => step - 1)}
                      className="btn-modern rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800"
                      disabled={loading}
                    >
                      Previous
                    </button>
                  )}

                  {currentStep < steps.length ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep((step) => step + 1)}
                      className="btn-modern rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
                      disabled={loading}
                    >
                      Next
                      <ArrowRight className="ml-2 inline h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn-modern rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
                      disabled={loading}
                    >
                      {loading ? 'Creating account...' : 'Create account'}
                      {!loading && <ArrowRight className="ml-2 inline h-4 w-4" />}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
