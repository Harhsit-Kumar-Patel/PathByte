import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  Brain,
  Compass,
  Rocket,
  Shield,
  Sparkles,
  Trophy,
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { useProgress } from '@/context/ProgressContext'
import { ProgressBar } from '@/components/ui/ProgressComponents'
import { getRoleLabel, normalizeRoleKey } from '@/data/roleCatalog'

const roleVisuals: Record<string, { route: string; label: string; icon: typeof Brain }> = {
  frontend: { route: 'frontend', label: 'Frontend Developer', icon: Compass },
  backend: { route: 'backend', label: 'Backend Developer', icon: Rocket },
  fullstack: { route: 'fullstack', label: 'Full-Stack Developer', icon: Rocket },
  mobile: { route: 'mobile', label: 'Mobile Developer', icon: Rocket },
  game: { route: 'game', label: 'Game Developer', icon: Trophy },
  datascientist: { route: 'datascientist', label: 'Data Scientist', icon: Brain },
  dataengineer: { route: 'dataengineer', label: 'Data Engineer', icon: Brain },
  mle: { route: 'mle', label: 'ML Engineer', icon: Brain },
  aispecialist: { route: 'aispecialist', label: 'AI Specialist', icon: Brain },
  cloudengineer: { route: 'cloudengineer', label: 'Cloud Engineer', icon: Rocket },
  devops: { route: 'devops', label: 'DevOps Engineer', icon: Rocket },
  sre: { route: 'sre', label: 'SRE', icon: Shield },
  uidesigner: { route: 'uidesigner', label: 'UI/UX Designer', icon: Compass },
  cybersecurity: { route: 'cybersecurity', label: 'Cybersecurity Engineer', icon: Shield },
}

function formatExperienceLevel(value?: string) {
  if (!value) return 'Set your level'
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export default function DashboardPage() {
  const { user } = useAuth()
  const { userProgress } = useProgress()
  const navigate = useNavigate()

  const normalizedTargetRole = normalizeRoleKey(user?.targetRole) || 'frontend'
  const roleMeta = roleVisuals[normalizedTargetRole] || roleVisuals.frontend
  const RoleIcon = roleMeta.icon

  const dashboardData = useMemo(() => {
    const totalSkillsCompleted = userProgress.reduce((total, role) => (
      total +
      Object.values(role.yearProgress).reduce((yearTotal, year) => yearTotal + (year.skills?.filter(Boolean).length || 0), 0)
    ), 0)

    const totalProjectsCompleted = userProgress.reduce((total, role) => (
      total +
      Object.values(role.yearProgress).reduce((yearTotal, year) => yearTotal + (year.projects?.filter(Boolean).length || 0), 0)
    ), 0)

    const totalResourcesCompleted = userProgress.reduce((total, role) => (
      total +
      Object.values(role.yearProgress).reduce((yearTotal, year) => (
        yearTotal +
        (year.freeResources?.filter(Boolean).length || 0) +
        (year.paidResources?.filter(Boolean).length || 0)
      ), 0)
    ), 0)

    const overallProgress = userProgress.length
      ? Math.round(userProgress.reduce((sum, role) => sum + role.overallProgress, 0) / userProgress.length)
      : 0

    const focusedRoleProgress = userProgress.find((entry) => entry.roleId === normalizedTargetRole)
    const currentStageProgress = focusedRoleProgress?.yearProgress['0-1']?.completionPercentage || 0

    const recentActivity = userProgress.flatMap((role) => {
      const activities: Array<{ id: string; title: string; meta: string }> = []

      Object.entries(role.yearProgress).forEach(([yearId, yearData]) => {
        yearData.skills?.forEach((done, index) => {
          if (done) {
            activities.push({
              id: `${role.roleId}-${yearId}-skill-${index}`,
              title: 'Skill completed',
              meta: `${role.roleId} • ${yearId}`,
            })
          }
        })
        yearData.projects?.forEach((done, index) => {
          if (done) {
            activities.push({
              id: `${role.roleId}-${yearId}-project-${index}`,
              title: 'Project completed',
              meta: `${role.roleId} • ${yearId}`,
            })
          }
        })
      })

      return activities
    }).slice(0, 4)

    return {
      totalSkillsCompleted,
      totalProjectsCompleted,
      totalResourcesCompleted,
      overallProgress,
      currentStageProgress,
      focusedRoleProgress,
      recentActivity,
    }
  }, [normalizedTargetRole, userProgress])

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="surface-panel-strong rounded-[2rem] p-8 text-center">
          <h1 className="text-2xl font-semibold text-slate-950">Please log in to view your dashboard</h1>
          <p className="mt-3 text-slate-600">You need to be authenticated to access this page.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page-shell overflow-hidden px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="hero-orb left-[-4rem] top-10 h-40 w-40 bg-sky-300/25" />
      <div className="hero-orb right-[-6rem] top-20 h-60 w-60 bg-blue-300/20" style={{ animationDelay: '1.4s' }} />

      <div className="mx-auto max-w-6xl space-y-6">
        <section className="surface-panel-strong rounded-[2.2rem] px-6 py-8 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="section-kicker">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                Dashboard
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Welcome back, {user.firstName || 'builder'}.
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                A simpler view of where you are, what you’re focused on, and the next action that matters.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => navigate(`/roadmap?role=${roleMeta.route}`)}
                  className="btn-modern inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white"
                >
                  Continue roadmap
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <Link
                  to="/profile"
                  className="btn-modern inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800"
                >
                  Open profile
                </Link>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200 bg-white/88 p-6 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500">Overall progress</p>
                  <p className="mt-2 text-5xl font-semibold tracking-tight text-slate-950">
                    {dashboardData.overallProgress}%
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <RoleIcon className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-5">
                <ProgressBar progress={dashboardData.overallProgress} color="blue" size="lg" />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Role</p>
                  <p className="mt-2 text-sm font-medium text-slate-800">{getRoleLabel(user.targetRole) || roleMeta.label}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Experience</p>
                  <p className="mt-2 text-sm font-medium text-slate-800">{formatExperienceLevel(user.experienceLevel)}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Current stage</p>
                  <p className="mt-2 text-sm font-medium text-slate-800">{Math.round(dashboardData.currentStageProgress)}%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <div className="surface-panel rounded-[1.8rem] p-5">
            <p className="text-sm font-semibold text-slate-500">Skills completed</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{dashboardData.totalSkillsCompleted}</p>
          </div>
          <div className="surface-panel rounded-[1.8rem] p-5">
            <p className="text-sm font-semibold text-slate-500">Projects completed</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{dashboardData.totalProjectsCompleted}</p>
          </div>
          <div className="surface-panel rounded-[1.8rem] p-5">
            <p className="text-sm font-semibold text-slate-500">Resources finished</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{dashboardData.totalResourcesCompleted}</p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="surface-panel-strong rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Focused roadmap</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A quick snapshot of the path you are currently working through.
                </p>
              </div>
              <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                {Math.round(dashboardData.focusedRoleProgress?.overallProgress || 0)}%
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white/90 p-5">
              <p className="text-sm font-semibold text-slate-500">{roleMeta.label}</p>
              <div className="mt-4">
                <ProgressBar progress={dashboardData.currentStageProgress} color="blue" size="md" label="Current stage: 0-1 years" />
              </div>
            </div>
          </div>

          <div className="surface-panel-strong rounded-[2rem] p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Recent activity</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Your latest completed learning work.
            </p>

            <div className="mt-6 space-y-3">
              {dashboardData.recentActivity.length > 0 ? (
                dashboardData.recentActivity.map((item) => (
                  <div key={item.id} className="rounded-[1.4rem] border border-slate-200 bg-white/90 p-4">
                    <p className="font-medium text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.meta}</p>
                  </div>
                ))
              ) : (
                <div className="rounded-[1.4rem] border border-slate-200 bg-white/90 p-4">
                  <p className="font-medium text-slate-900">No completed activity yet</p>
                  <p className="mt-1 text-sm text-slate-500">This area will populate as you move through your roadmap.</p>
                </div>
              )}
            </div>

            {!user.targetRole && (
              <div className="mt-6 rounded-[1.4rem] border border-slate-200 bg-slate-50 p-4">
                <p className="font-medium text-slate-900">Set a target role for a more useful dashboard</p>
                <Link to="/profile" className="mt-3 inline-flex text-sm font-semibold text-slate-900">
                  Go to profile
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
