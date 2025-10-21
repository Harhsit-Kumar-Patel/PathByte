import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { Eye, EyeOff, Lock, Mail, ArrowRight, User, Sparkles, Shield, Zap, Users } from 'lucide-react'
import { LoadingButton } from '@/components/ui/LoadingSpinner'

export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [showPasswordReset, setShowPasswordReset] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const [resetLoading, setResetLoading] = useState(false)
  const [resetMessage, setResetMessage] = useState<string | null>(null)

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

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setResetMessage(null)
    setResetLoading(true)
    try {
      // In a real app, you would send a reset link to the user's email
      // For demonstration, we'll just simulate success
      setResetMessage('Password reset link sent to your email (simulated).')
      // In a real app, you would redirect to a new page or show a success message
      // For now, we'll just close the modal
      setShowPasswordReset(false)
    } catch (err: any) {
      setResetMessage(err?.response?.data?.error || 'Failed to send reset link')
    } finally {
      setResetLoading(false)
    }
  }


  const features = [
    { icon: Zap, title: 'AI-Powered Learning', description: 'Personalized career guidance' },
    { icon: Shield, title: 'Industry-Validated', description: 'Proven career paths' },
    { icon: Users, title: 'Community Support', description: 'Connect with peers' }
  ]

  return (
    <div className="min-h-screen page-transition bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 flex">
      {/* Left Side - Features */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-200/30 rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-200/30 rounded-full animate-float blur-3xl" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full animate-pulse-gentle"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-16 py-12 text-slate-800">
          {/* Logo */}
          <div className="mb-16">
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-soft-xl">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-600 rounded-3xl opacity-20 blur-lg"></div>
              </div>
              <div>
                                 <h1 className="text-3xl font-bold">PathByte</h1>
                 <p className="text-slate-700 text-sm">AI Career Platform</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-8">
              Transform Your Career with
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                AI-Powered Learning
              </span>
            </h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-center space-x-4 group animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                      <p className="text-blue-200 text-sm">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

                         {/* Stats - Removed mock data, will be populated with real stats from backend */}
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md space-y-8 animate-fade-in-up">
          {/* Mobile Logo */}
          <div className="text-center lg:hidden">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-2xl opacity-20 blur-sm"></div>
              </div>
              <div>
                                 <h1 className="text-2xl font-bold text-white">PathByte</h1>
                 <p className="text-blue-100 text-sm">AI Career Platform</p>
              </div>
            </div>
          </div>

                     {/* Login Form */}
           <div className="bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-slate-300 shadow-2xl p-8">
                         <div className="text-center mb-8">
               <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h2>
               <p className="text-slate-600">Sign in to continue your journey</p>
             </div>

                         {error && (
               <div className="mb-6 p-4 bg-red-50 backdrop-blur-sm border-2 border-red-300 rounded-2xl text-sm text-red-700 animate-shake">
                 {error}
               </div>
             )}
            
            <form onSubmit={onSubmit} className="space-y-6">
                             <div className="space-y-2">
                 <label className="block text-sm font-medium text-slate-800 mb-2 flex items-center">
                   <Mail className="h-4 w-4 mr-2 text-slate-600" />
                   Email Address
                 </label>
                 <div className="relative">
                   <input 
                     type="email" 
                     className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-300" 
                     value={email} 
                     onChange={(e) => setEmail(e.target.value)} 
                     required 
                     placeholder="Enter your email"
                     autoComplete="email"
                   />
                 </div>
               </div>
              
                             <div className="space-y-2">
                 <label className="block text-sm font-medium text-slate-800 mb-2 flex items-center">
                   <Lock className="h-4 w-4 mr-2 text-slate-600" />
                   Password
                 </label>
                 <div className="relative">
                   <input 
                     type={showPassword ? 'text' : 'password'} 
                     className="w-full px-4 py-3 pr-12 bg-white border-2 border-slate-300 rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-300" 
                     value={password} 
                     onChange={(e) => setPassword(e.target.value)} 
                     required 
                     placeholder="Enter your password"
                     autoComplete="current-password"
                   />
                   <button
                     type="button"
                     onClick={() => setShowPassword(!showPassword)}
                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors duration-200 p-1 rounded"
                   >
                     {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                   </button>
                 </div>
               </div>

                             <div className="flex items-center justify-between">
                 <label className="flex items-center cursor-pointer group">
                   <input 
                     type="checkbox" 
                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded transition-colors duration-200 bg-white" 
                     checked={rememberMe}
                     onChange={(e) => setRememberMe(e.target.checked)}
                   />
                   <span className="ml-2 text-sm text-slate-700 group-hover:text-slate-900 transition-colors duration-200">Remember me</span>
                 </label>
                 <button 
                   type="button"
                   onClick={() => setShowPasswordReset(true)}
                   className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 font-medium"
                 >
                   Forgot password?
                 </button>
               </div>

              <button 
                type="submit" 
                className="w-full group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed" 
                disabled={loading}
              >
                {loading ? (
                  <LoadingButton loading={loading}>
                    Signing in...
                  </LoadingButton>
                ) : (
                  <span className="flex items-center justify-center">
                    Sign In
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                )}
              </button>
            </form>

                         <div className="mt-8 pt-6 border-t border-slate-300">
               <p className="text-center text-sm text-slate-600">
                 New to PathByte?{' '}
                 <Link 
                   to="/onboarding" 
                   className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors duration-200 group inline-flex items-center"
                 >
                   Create an account
                   <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                 </Link>
               </p>
             </div>
          </div>


                     {/* Additional features */}
           <div className="text-center">
             <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
               <Link to="/help" className="hover:text-slate-800 transition-colors duration-200 flex items-center">
                 <User className="h-4 w-4 mr-1" />
                 Help Center
               </Link>
               <Link to="/privacy" className="hover:text-slate-800 transition-colors duration-200">
                 Privacy Policy
               </Link>
               <Link to="/terms" className="hover:text-slate-800 transition-colors duration-200">
                 Terms of Service
               </Link>
             </div>
           </div>
        </div>

                 {/* Password Reset Form */}
         {showPasswordReset && (
           <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
             <div className="bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-slate-300 p-8 max-w-md w-full mx-4 shadow-2xl animate-fade-in-up">
               <div className="text-center mb-6">
                 <h2 className="text-2xl font-bold text-slate-900 mb-2">Reset Password</h2>
                 <p className="text-slate-600">Enter your email to reset your password</p>
               </div>
              
              <form onSubmit={handlePasswordReset} className="space-y-4">
                                 <div>
                   <label className="block text-sm font-medium text-slate-800 mb-2">
                     Email Address
                   </label>
                   <input
                     type="email"
                     name="resetEmail"
                     value={resetEmail}
                     onChange={(e) => setResetEmail(e.target.value)}
                     className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-300"
                     placeholder="Enter your email"
                     required
                   />
                 </div>
                
                                 <div className="flex space-x-3 pt-4">
                   <button
                     type="button"
                     onClick={() => setShowPasswordReset(false)}
                     className="flex-1 px-4 py-3 bg-white border-2 border-slate-300 rounded-2xl text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
                   >
                     Cancel
                   </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg"
                    disabled={resetLoading}
                  >
                    {resetLoading ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </div>
              </form>
              
                             {resetMessage && (
                 <div className={`mt-4 p-3 rounded-2xl text-sm backdrop-blur-sm ${
                   resetMessage.includes('sent') 
                     ? 'bg-green-50 text-green-700 border-2 border-green-300' 
                     : 'bg-red-50 text-red-700 border-2 border-red-300'
                 }`}>
                   {resetMessage}
                 </div>
               )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}