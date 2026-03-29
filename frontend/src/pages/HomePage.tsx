import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  Brain,
  Compass,
  LineChart,
  Map,
  Rocket,
  Sparkles,
  Target,
} from 'lucide-react'

const heroStats = [
  { label: 'Core flows', value: '3', description: 'Assess, compare, roadmap' },
  { label: 'Role paths', value: '35+', description: 'Across software, AI, infra, and product' },
  { label: 'Learning view', value: '1', description: 'One workspace for movement and progress' },
]

const pathwayCards = [
  {
    icon: Brain,
    title: 'Start with clarity',
    description: 'Use the assessment to identify which paths match your strengths and working style.',
    to: '/career-assessment',
    cta: 'Take assessment',
  },
  {
    icon: Compass,
    title: 'Compare directions',
    description: 'Explore different roles side by side so you can make a decision with real structure.',
    to: '/career-guide',
    cta: 'View guide',
  },
  {
    icon: Rocket,
    title: 'Commit to a roadmap',
    description: 'Step into a progression-based plan with skills, projects, and learning resources.',
    to: '/roadmap',
    cta: 'Open roadmap',
  },
]

const principles = [
  {
    icon: Map,
    title: 'Career planning without guesswork',
    description: 'The product is designed to reduce confusion between “what should I do?” and “what should I do next?”',
  },
  {
    icon: BarChart3,
    title: 'Progress that stays visible',
    description: 'Track momentum across roadmap stages instead of losing context between pages and tools.',
  },
  {
    icon: LineChart,
    title: 'A calmer learning system',
    description: 'Move through discovery, planning, and execution in a layout that stays consistent and easy to scan.',
  },
]

const journey = [
  {
    step: '01',
    title: 'Assess where you fit',
    body: 'Answer guided questions to surface roles that align with how you think, build, and solve problems.',
  },
  {
    step: '02',
    title: 'Select a path',
    body: 'Use the guide to compare responsibilities, tools, and growth trajectories before committing.',
  },
  {
    step: '03',
    title: 'Build through milestones',
    body: 'Follow a roadmap that turns a broad career goal into concrete skills, projects, and resources.',
  },
]

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-12">
        <div className="hero-orb left-[-6rem] top-16 h-56 w-56 bg-sky-300/38" />
        <div className="hero-orb right-[-5rem] top-24 h-72 w-72 bg-blue-300/28" style={{ animationDelay: '1.8s' }} />

        <div className="mx-auto max-w-7xl">
          <div className="surface-panel-strong rounded-[2.6rem] px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
              <div className="flex flex-col justify-between">
                <div className="max-w-3xl">
                  <div className="section-kicker">
                    <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                    Structured career design for ambitious tech learners
                  </div>

                  <h1 className="mt-6 max-w-[12ch] text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                    Plan the next chapter of your tech career with more signal.
                  </h1>

                  <p className="mt-6 max-w-[34rem] text-lg leading-8 text-slate-600 sm:text-xl">
                    PathByte is built around one idea: career growth gets easier when discovery, comparison, and execution live inside the same product system.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      to="/onboarding"
                      className="btn-modern inline-flex min-w-[12rem] items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white"
                    >
                      Start your path
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      to="/career-guide"
                      className="btn-modern inline-flex min-w-[12rem] items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800"
                    >
                      Explore roles
                    </Link>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {heroStats.map((item) => (
                    <div key={item.label} className="card-modern p-5">
                      <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{item.value}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                {pathwayCards.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.title}
                      to={item.to}
                      className="card-modern group grid gap-4 p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center"
                      style={{ transform: `translateX(${index % 2 === 0 ? '0px' : '12px'})` }}
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                      </div>
                      <div className="inline-flex items-center text-sm font-semibold text-slate-900">
                        {item.cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-xl">
              <div className="section-kicker">
                <Target className="h-3.5 w-3.5 text-cyan-600" />
                Product principles
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                A homepage built around meaningful product information, not filler.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The interface should tell a coherent story: what the product helps with, how the flow works, and where the user should go next.
              </p>
            </div>

            <div className="grid gap-5">
              {principles.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="card-modern grid gap-4 p-6 sm:grid-cols-[auto_1fr] sm:items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="surface-panel-strong rounded-[2.3rem] px-6 py-8 sm:px-8 sm:py-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="section-kicker">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                How the flow works
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                The product is strongest when the next step feels obvious.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                PathByte turns a broad goal into a navigable sequence, so users can move from uncertainty to execution without losing context.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {journey.map((item) => (
                <div key={item.step} className="card-modern h-full p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{item.step}</div>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="surface-panel-strong rounded-[2.3rem] px-6 py-8 sm:px-10 sm:py-10 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="section-kicker">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                Ready when you are
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Start with career clarity, then move into a roadmap you can actually follow.
              </h2>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-0">
              <Link
                to="/career-assessment"
                className="btn-modern inline-flex min-w-[12rem] items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white"
              >
                Take the assessment
              </Link>
              <Link
                to="/login"
                className="btn-modern inline-flex min-w-[12rem] items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
