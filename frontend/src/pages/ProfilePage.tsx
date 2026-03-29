import React, { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useProgress } from '@/context/ProgressContext'
import {
  Brain,
  Calendar,
  Cloud,
  Code,
  Download,
  Edit3,
  Globe,
  Mail,
  MapPin,
  Palette,
  Save,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  Trash2,
  Upload,
  User,
  X,
} from 'lucide-react'
import { ProgressBar } from '@/components/ui/ProgressComponents'
import { getRoleLabel, normalizeRoleKey, roleCatalog } from '@/data/roleCatalog'

type ProfileFormState = {
  firstName: string
  lastName: string
  email: string
  locationCity: string
  locationState: string
  targetRole: string
  experienceLevel: string
}

const createEditForm = (user: ReturnType<typeof useAuth>['user']): ProfileFormState => ({
  firstName: user?.firstName || '',
  lastName: user?.lastName || '',
  email: user?.email || '',
  locationCity: user?.locationCity || '',
  locationState: user?.locationState || '',
  targetRole: normalizeRoleKey(user?.targetRole),
  experienceLevel: user?.experienceLevel || '',
})

const roleOptions = roleCatalog

const experienceLabels: Record<string, string> = {
  beginner: 'Beginner (0-1 years)',
  intermediate: 'Intermediate (1-3 years)',
  advanced: 'Advanced (3-5 years)',
  expert: 'Expert (5+ years)',
}

export default function ProfilePage() {
  const { user, updateProfile } = useAuth()
  const { userProgress, exportProgress, importProgress, resetProgress } = useProgress()
  const [isEditing, setIsEditing] = useState(false)
  const [showImportModal, setShowImportModal] = useState(false)
  const [importData, setImportData] = useState('')
  const [editForm, setEditForm] = useState<ProfileFormState>(createEditForm(user))

  useEffect(() => {
    setEditForm(createEditForm(user))
  }, [user])

  const handleSave = async () => {
    try {
      await updateProfile(editForm)
      setIsEditing(false)
    } catch (error) {
      console.error('Failed to update profile:', error)
    }
  }

  const handleCancel = () => {
    setEditForm(createEditForm(user))
    setIsEditing(false)
  }

  const handleExport = () => {
    const data = exportProgress()
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'pathbyte-progress.json'
    anchor.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = () => {
    try {
      importProgress(importData)
      setShowImportModal(false)
      setImportData('')
    } catch (error) {
      alert('Invalid progress data format')
    }
  }

  const getRoleIcon = (role: string) => {
    const icons: Record<string, React.ComponentType<{ className?: string }>> = {
      frontend: Code,
      backend: Server,
      fullstack: Globe,
      mobile: Smartphone,
      game: Palette,
      datascientist: Brain,
      dataengineer: Brain,
      mlengineer: Brain,
      mle: Brain,
      aispecialist: Brain,
      cloudengineer: Cloud,
      devops: Server,
      devopsengineer: Server,
      sre: Server,
      uidesigner: Palette,
      uiuxdesigner: Palette,
      cybersecurity: Shield,
      cybersecurityengineer: Shield,
    }

    return icons[normalizeRoleKey(role)] || User
  }

  const totalProgress = userProgress.length
    ? userProgress.reduce((sum, role) => sum + role.overallProgress, 0) / userProgress.length
    : 0

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

  const profileFacts = [
    { icon: Mail, label: 'Email', value: user?.email || 'Add your email address' },
    {
      icon: MapPin,
      label: 'Location',
      value:
        user?.locationCity && user?.locationState
          ? `${user.locationCity}, ${user.locationState}`
          : user?.locationCity || 'Add your location',
    },
    { icon: Target, label: 'Target role', value: user?.targetRole ? getRoleLabel(user.targetRole) : 'Set your focus area' },
    {
      icon: Calendar,
      label: 'Experience level',
      value: experienceLabels[user?.experienceLevel || ''] || 'Add your experience level',
    },
  ]

  const displayName = `${user?.firstName || ''} ${user?.lastName || ''}`.trim() || 'Your profile'
  const initials = `${user?.firstName?.[0] || ''}${user?.lastName?.[0] || ''}`.toUpperCase() || 'PB'
  const HeroIcon = getRoleIcon(normalizeRoleKey(user?.targetRole))

  return (
    <div className="page-shell overflow-hidden px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="hero-orb left-[-4rem] top-8 h-40 w-40 bg-sky-300/25" />
      <div className="hero-orb right-[-6rem] top-24 h-60 w-60 bg-blue-300/20" style={{ animationDelay: '1.5s' }} />

      <div className="mx-auto max-w-6xl space-y-6">
        <section className="surface-panel-strong rounded-[2.2rem] px-6 py-8 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="section-kicker">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                Profile
              </div>

              <div className="mt-6 flex items-center gap-5">
                <div className="relative flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-[1.8rem] bg-slate-950 text-xl font-semibold text-white">
                  {initials}
                  <div className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-2xl border border-white/70 bg-white text-slate-950 shadow-soft">
                    <HeroIcon className="h-4 w-4" />
                  </div>
                </div>

                <div>
                  <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{displayName}</h1>
                  <p className="mt-2 text-lg leading-8 text-slate-600">
                    Keep your account details and learning direction tidy in one place.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setIsEditing((current) => !current)}
                  className="btn-modern inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white"
                >
                  {isEditing ? <X className="mr-2 h-4 w-4" /> : <Edit3 className="mr-2 h-4 w-4" />}
                  {isEditing ? 'Close editor' : 'Edit profile'}
                </button>
                <button
                  onClick={handleExport}
                  className="btn-modern inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export progress
                </button>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-slate-200 bg-white/88 p-6 shadow-soft">
              <p className="text-sm font-semibold text-slate-500">Learning progress</p>
              <p className="mt-2 text-5xl font-semibold tracking-tight text-slate-950">{Math.round(totalProgress)}%</p>
              <div className="mt-5">
                <ProgressBar progress={totalProgress} color="blue" size="lg" />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Skills</p>
                  <p className="mt-2 text-sm font-medium text-slate-800">{totalSkillsCompleted}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Projects</p>
                  <p className="mt-2 text-sm font-medium text-slate-800">{totalProjectsCompleted}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Resources</p>
                  <p className="mt-2 text-sm font-medium text-slate-800">{totalResourcesCompleted}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-panel-strong rounded-[2rem] p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Details</h2>
            <div className="mt-6 space-y-4">
              {profileFacts.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="rounded-[1.4rem] border border-slate-200 bg-white/90 p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-700">{item.value}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="space-y-6">
            {isEditing ? (
              <div className="surface-panel-strong rounded-[2rem] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Edit profile</h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">First name</label>
                    <input
                      type="text"
                      value={editForm.firstName}
                      onChange={(event) => setEditForm({ ...editForm, firstName: event.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Last name</label>
                    <input
                      type="text"
                      value={editForm.lastName}
                      onChange={(event) => setEditForm({ ...editForm, lastName: event.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(event) => setEditForm({ ...editForm, email: event.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Target role</label>
                    <select
                      value={editForm.targetRole}
                      onChange={(event) => setEditForm({ ...editForm, targetRole: event.target.value })}
                    >
                      <option value="">Select a role</option>
                      {roleOptions.map((option) => (
                        <option key={option.key} value={option.key}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Experience level</label>
                    <select
                      value={editForm.experienceLevel}
                      onChange={(event) => setEditForm({ ...editForm, experienceLevel: event.target.value })}
                    >
                      <option value="">Select level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3-5 years)</option>
                      <option value="expert">Expert (5+ years)</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">City</label>
                    <input
                      type="text"
                      value={editForm.locationCity}
                      onChange={(event) => setEditForm({ ...editForm, locationCity: event.target.value })}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">State</label>
                    <input
                      type="text"
                      value={editForm.locationState}
                      onChange={(event) => setEditForm({ ...editForm, locationState: event.target.value })}
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={handleSave}
                    className="btn-modern inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Save changes
                  </button>
                  <button
                    onClick={handleCancel}
                    className="btn-modern inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="surface-panel-strong rounded-[2rem] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Roadmaps</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">A light summary of your active progress.</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {userProgress.length > 0 ? (
                    userProgress.map((role) => {
                      const Icon = getRoleIcon(role.roleId)
                      return (
                        <div key={role.roleId} className="rounded-[1.4rem] border border-slate-200 bg-white/90 p-4">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                                <Icon className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="font-medium capitalize text-slate-900">{role.roleId}</p>
                                <p className="text-sm text-slate-500">{Object.keys(role.yearProgress).length} stages tracked</p>
                              </div>
                            </div>
                            <div className="w-28">
                              <ProgressBar progress={role.overallProgress} color="blue" size="sm" />
                            </div>
                          </div>
                        </div>
                      )
                    })
                  ) : (
                    <div className="rounded-[1.4rem] border border-slate-200 bg-white/90 p-4">
                      <p className="font-medium text-slate-900">No roadmap activity yet</p>
                      <p className="mt-1 text-sm text-slate-500">Start a learning path and your progress summary will appear here.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="surface-panel-strong rounded-[2rem] p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">Progress tools</h2>
              <div className="mt-6 grid gap-3">
                <button
                  onClick={handleExport}
                  className="btn-modern inline-flex items-center justify-center rounded-[1.3rem] bg-slate-950 px-5 py-4 text-sm font-semibold text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export progress
                </button>
                <button
                  onClick={() => setShowImportModal(true)}
                  className="btn-modern inline-flex items-center justify-center rounded-[1.3rem] border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-800"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Import progress
                </button>
                {userProgress.length > 0 && (
                  <div className="grid gap-3">
                    {userProgress.map((role) => (
                      <button
                        key={role.roleId}
                        onClick={() => resetProgress(role.roleId)}
                        className="inline-flex items-center justify-between rounded-[1.3rem] border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700"
                      >
                        Reset {role.roleId}
                        <Trash2 className="h-4 w-4" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      {showImportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">
          <div className="surface-panel-strong w-full max-w-xl rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">Import progress</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Paste a previously exported PathByte progress JSON payload.
                </p>
              </div>
              <button
                onClick={() => setShowImportModal(false)}
                className="rounded-full border border-slate-200 bg-white p-2 text-slate-500 transition hover:text-slate-900"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6">
              <textarea
                value={importData}
                onChange={(event) => setImportData(event.target.value)}
                placeholder="Paste your progress data here..."
                className="min-h-[12rem]"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleImport}
                className="btn-modern inline-flex flex-1 items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
              >
                Import progress
              </button>
              <button
                onClick={() => setShowImportModal(false)}
                className="btn-modern inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
