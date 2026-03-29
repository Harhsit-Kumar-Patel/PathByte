import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="page-shell flex min-h-[70vh] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="surface-panel-strong max-w-2xl rounded-[2.2rem] p-8 text-center sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-slate-950 text-white">
          <Compass className="h-7 w-7" />
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The page you were looking for does not exist or may have moved. Head back to the dashboard or restart from home.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="btn-modern inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white"
          >
            Go home
          </Link>
          <Link
            to="/dashboard"
            className="btn-modern inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
