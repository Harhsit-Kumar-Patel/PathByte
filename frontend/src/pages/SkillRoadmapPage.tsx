import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, BookOpen, Calendar, DollarSign, Lock, LogIn } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useAuth } from '@/context/AuthContext'
import { useProgress } from '@/context/ProgressContext'
import { ProgressBar, ProgressCheckbox } from '@/components/ui/ProgressComponents'
import { skillsData } from '@/data/skillsData'

export default function SkillRoadmapPageNew() {
  const { skill } = useParams()
  const navigate = useNavigate()
  const [activeYear, setActiveYear] = useState('0-1')
  const [currency, setCurrency] = useState<'USD' | 'INR'>('INR')
  const { user } = useAuth()
  const { markItemComplete, getItemProgress, getYearProgress } = useProgress()

  const isAuthenticated = !!user
  const skillData = skillsData[skill || '']

  if (!skillData) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="surface-panel-strong rounded-[2rem] px-8 py-10 text-center">
          <h1 className="text-2xl font-semibold text-slate-950">Skill roadmap not found</h1>
          <p className="mt-3 text-sm text-slate-600">The requested roadmap could not be found.</p>
          <button
            onClick={() => navigate('/career-guide')}
            className="btn-modern mt-6 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
          >
            Back to Career Guide
          </button>
        </div>
      </div>
    )
  }

  const years = ['0-1', '1-3', '3-5', '5+']
  const IconComponent = skillData.icon
  const activeRoadmap = skillData.roadmap[activeYear]

  const formatPrice = (price?: string) => {
    if (!price) return 'Paid'
    if (currency === 'USD') return price

    const match = price.match(/\$?(\d+(?:\.\d+)?)\s*(.*)?/)
    if (!match) return price

    const [, numeric, suffix = ''] = match
    const inrValue = Math.round(parseFloat(numeric) * 83 * 0.75)
    return `₹${inrValue}${suffix}`
  }

  return (
    <div className="overflow-hidden px-4 pb-16 pt-4 sm:px-6 lg:px-8">
      <div className="hero-orb left-[-5rem] top-10 h-56 w-56 bg-sky-300/34" />
      <div className="hero-orb right-[-4rem] top-24 h-72 w-72 bg-blue-300/24" style={{ animationDelay: '2s' }} />

      <div className="mx-auto max-w-7xl space-y-8">
        <section className="surface-panel-strong rounded-[2.4rem] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <button
            onClick={() => navigate('/career-guide')}
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Career Guide
          </button>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="section-kicker">
                <BookOpen className="h-3.5 w-3.5 text-blue-600" />
                Role-specific roadmap
              </div>
              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-slate-950 text-white shadow-soft-xl">
                  <IconComponent className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{skillData.title}</h1>
                  <p className="mt-2 max-w-3xl text-lg leading-8 text-slate-600">{skillData.description}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
              <div className="card-modern p-5 text-center">
                <p className="text-sm font-semibold text-slate-500">Demand</p>
                <p className="mt-2 text-xl font-semibold text-slate-950">{skillData.demand}</p>
              </div>
              <div className="card-modern p-5 text-center">
                <p className="text-sm font-semibold text-slate-500">Salary</p>
                <p className="mt-2 text-xl font-semibold text-slate-950">{skillData.salary}</p>
              </div>
              <div className="card-modern p-5 text-center">
                <p className="text-sm font-semibold text-slate-500">Companies</p>
                <p className="mt-2 text-xl font-semibold text-slate-950">{skillData.companies.length}</p>
              </div>
            </div>
          </div>
        </section>

        {!isAuthenticated && (
          <section className="glass rounded-[2rem] border border-blue-100 px-6 py-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-950">Track your progress across every roadmap section</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Sign in to save completed skills, projects, and resources as you move through each year band.
                  </p>
                </div>
              </div>
              <Link
                to="/login"
                className="btn-modern inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Sign in
              </Link>
            </div>
          </section>
        )}

        <section className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="surface-panel rounded-[2rem] p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-950">Choose your experience band</h2>
                <p className="mt-1 text-sm text-slate-600">Each stage keeps the same page structure so comparing years feels natural.</p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1">
                <button
                  onClick={() => setCurrency('INR')}
                  className={cn('rounded-full px-4 py-2 text-sm font-semibold', currency === 'INR' ? 'bg-slate-950 text-white' : 'text-slate-600')}
                >
                  INR
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={cn('rounded-full px-4 py-2 text-sm font-semibold', currency === 'USD' ? 'bg-slate-950 text-white' : 'text-slate-600')}
                >
                  USD
                </button>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={cn(
                    'rounded-[1.4rem] border px-4 py-4 text-left transition-all duration-300',
                    activeYear === year ? 'border-blue-200 bg-blue-50 shadow-[0_16px_30px_rgba(20,93,255,0.10)]' : 'border-slate-200 bg-white hover:border-slate-300',
                  )}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Stage</span>
                  <p className="mt-2 text-lg font-semibold text-slate-950">{year} years</p>
                  <p className="mt-1 text-sm text-slate-600">{skillData.roadmap[year]?.title}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="card-modern p-5">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-slate-500" />
              <div>
                <p className="text-sm font-semibold text-slate-950">{activeRoadmap?.title}</p>
                <p className="text-sm text-slate-600">{activeRoadmap?.goal}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="surface-panel-strong rounded-[2rem] p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-950">Year overview</h3>
              <p className="mt-1 text-sm text-slate-600">One anchor metric keeps the roadmap easy to scan before you dive into the detail blocks below.</p>
            </div>
            <div className="text-sm font-semibold text-slate-600">{isAuthenticated ? `${Math.round(getYearProgress(skill || '', activeYear))}% complete` : 'Tracking available after sign in'}</div>
          </div>
          <ProgressBar progress={isAuthenticated ? getYearProgress(skill || '', activeYear) : 0} color="blue" size="lg" />
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="surface-panel rounded-[1.8rem] p-6">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-950">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Skills to learn
              </h3>
              <div className="space-y-3">
                {activeRoadmap?.skills.map((item: string, index: number) => (
                  <ProgressCheckbox
                    key={index}
                    checked={isAuthenticated ? getItemProgress(skill || '', activeYear, 'skills', index) : false}
                    onChange={(checked) => isAuthenticated && markItemComplete(skill || '', activeYear, 'skills', index, checked)}
                    label={item}
                    disabled={!isAuthenticated}
                  />
                ))}
              </div>
            </div>

            <div className="surface-panel rounded-[1.8rem] p-6">
              <h3 className="mb-4 text-xl font-semibold text-slate-950">Practice projects</h3>
              <div className="space-y-3">
                {activeRoadmap?.projects.map((project: string, index: number) => (
                  <ProgressCheckbox
                    key={index}
                    checked={isAuthenticated ? getItemProgress(skill || '', activeYear, 'projects', index) : false}
                    onChange={(checked) => isAuthenticated && markItemComplete(skill || '', activeYear, 'projects', index, checked)}
                    label={project}
                    disabled={!isAuthenticated}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="surface-panel rounded-[1.8rem] p-6">
              <h3 className="mb-4 text-xl font-semibold text-slate-950">Free resources</h3>
              <div className="space-y-4">
                {activeRoadmap?.freeResources.map((resource, index: number) => (
                  <div key={index} className="rounded-[1.25rem] border border-emerald-200 bg-emerald-50 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-950">{resource.title}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-600">{resource.description}</p>
                        {resource.url && resource.url !== '#' && (
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center text-xs font-semibold text-emerald-700"
                          >
                            Open resource
                            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                      <ProgressCheckbox
                        checked={isAuthenticated ? getItemProgress(skill || '', activeYear, 'freeResources', index) : false}
                        onChange={(checked) => isAuthenticated && markItemComplete(skill || '', activeYear, 'freeResources', index, checked)}
                        label=""
                        disabled={!isAuthenticated}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-panel rounded-[1.8rem] p-6">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-950">
                <DollarSign className="h-5 w-5 text-orange-600" />
                Paid resources
              </h3>
              <div className="space-y-4">
                {activeRoadmap?.paidResources.map((resource, index: number) => (
                  <div key={index} className="rounded-[1.25rem] border border-orange-200 bg-orange-50 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-950">{resource.title}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-600">{resource.description}</p>
                        <p className="mt-2 text-xs font-semibold text-orange-700">{formatPrice((resource as any).price)}</p>
                        {resource.url && resource.url !== '#' && (
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center text-xs font-semibold text-orange-700"
                          >
                            Open resource
                            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                      <ProgressCheckbox
                        checked={isAuthenticated ? getItemProgress(skill || '', activeYear, 'paidResources', index) : false}
                        onChange={(checked) => isAuthenticated && markItemComplete(skill || '', activeYear, 'paidResources', index, checked)}
                        label=""
                        disabled={!isAuthenticated}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
