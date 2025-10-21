import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Eye, EyeOff, Lock, Mail, ArrowRight, User, Sparkles, LogIn, UserPlus } from 'lucide-react';
import { LoadingButton } from '@/components/ui/LoadingSpinner'; // Assuming LoadingButton exists
import { cn } from '@/utils/cn'; // Assuming cn utility exists
import { motion, AnimatePresence } from 'framer-motion'; // For animations

// Feature interface for clarity
interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string; // Added color for icon background
}

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err?.response?.data?.error || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetMessage(null);
    setResetLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Password reset requested for:', resetEmail);
      setResetMessage('If an account exists for this email, a reset link has been sent.');
    } catch (err: any) {
      setResetMessage('Failed to send reset link. Please try again.');
    } finally {
      setResetLoading(false);
    }
  };

  const features: Feature[] = [
    { icon: Sparkles, title: 'AI-Powered Guidance', description: 'Personalized career roadmaps', color: 'bg-indigo-100 text-indigo-600' },
    { icon: UserPlus, title: 'Skill Tracking', description: 'Monitor your learning progress', color: 'bg-purple-100 text-purple-600' },
    { icon: ArrowRight, title: 'Clear Next Steps', description: 'Always know what to learn next', color: 'bg-blue-100 text-blue-600' }
  ];

  return (
    <div className="min-h-screen flex bg-white"> {/* Simple white background */}
      {/* Left Side - Branding & Info */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 relative overflow-hidden">
         {/* Subtle Geometric Pattern or Illustration (using gradients as placeholder) */}
         <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-200 to-transparent rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>
         </div>

        <div className="relative z-10">
          {/* Logo */}
           <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3 mb-24" // Increased bottom margin
          >
             <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
               <Sparkles className="h-6 w-6 text-white" />
             </div>
             <div>
               <h1 className="text-2xl font-bold text-gray-800">PathByte</h1>
               <p className="text-sm text-gray-600">Your AI Career Co-Pilot</p>
             </div>
           </motion.div>

           {/* Features Section */}
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.2, staggerChildren: 0.15 }} // Add stagger effect
             className="space-y-8 max-w-md"
           >
             <h2 className="text-3xl font-bold text-gray-800 leading-tight">
               Navigate Your Tech Career with Confidence
             </h2>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start space-x-4"
                  >
                     <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-sm", feature.color)}>
                       <Icon className="h-5 w-5" />
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                       <p className="text-gray-600 text-sm">{feature.description}</p>
                     </div>
                  </motion.div>
                )
              })}
           </motion.div>
        </div>

        {/* Footer Info */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative z-10 text-xs text-gray-500 space-x-4" // Smaller text
        >
          <span>© {new Date().getFullYear()} PathByte. All rights reserved.</span>
          <Link to="/privacy" className="hover:text-indigo-600 transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-indigo-600 transition-colors">Terms</Link>
        </motion.div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-16 bg-white"> {/* Ensure white background */}
        <motion.div
            initial={{ opacity: 0, y: 20 }} // Slide up effect
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-sm" // Slightly smaller max-width
        >
          {/* Mobile Logo */}
           <div className="text-center lg:hidden mb-8">
             <div className="flex items-center justify-center space-x-3">
               <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                 <Sparkles className="h-5 w-5 text-white" />
               </div>
               <div>
                 <h1 className="text-xl font-bold text-gray-800">PathByte</h1>
               </div>
             </div>
           </div>

          {/* Form */}
          <div className="bg-white rounded-lg p-0"> {/* Removed card styles here */}
            <div className="text-left mb-8"> {/* Left aligned text */}
              <h2 className="text-3xl font-bold text-gray-900 mb-1">Sign In</h2>
              <p className="text-gray-500">Enter your credentials to access your account.</p>
            </div>

            {error && (
               <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-md text-sm text-red-700 flex items-center gap-2"
              >
                 <User className="h-4 w-4 flex-shrink-0"/> {/* Example icon */}
                 {error}
               </motion.div>
             )}
            
            <form onSubmit={onSubmit} className="space-y-5"> {/* Adjusted spacing */}
              {/* Email Input */}
              <div className="relative">
                 <label htmlFor="email" className="sr-only">Email Address</label>
                 <Mail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                 <input
                  id="email"
                  type="email"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all duration-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email Address"
                  autoComplete="email"
                />
              </div>
            
              {/* Password Input */}
               <div className="relative">
                 <label htmlFor="password" className="sr-only">Password</label>
                 <Lock className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                 <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all duration-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button
                   type="button"
                   onClick={() => setShowPassword(!showPassword)}
                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                   aria-label={showPassword ? "Hide password" : "Show password"}
                >
                   {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                 </button>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-colors duration-200 bg-white focus:ring-offset-0"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="ml-2 text-gray-600 group-hover:text-gray-800 transition-colors duration-200">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => setShowPasswordReset(true)}
                  className="text-indigo-600 hover:text-indigo-700 hover:underline transition-colors duration-200 font-medium focus:outline-none focus:underline"
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }} // Subtle hover effect
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full group relative px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-md hover:shadow-lg transition-all duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                disabled={loading}
              >
                {loading ? (
                   <LoadingButton loading={loading} className="text-white">Signing in...</LoadingButton>
                 ) : (
                   <span className="flex items-center justify-center">
                     Sign In
                     <LogIn className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-200" />
                   </span>
                 )}
               </motion.button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-center text-sm text-gray-500"> {/* Slightly lighter text */}
                Don't have an account?{' '}
                <Link
                  to="/onboarding"
                  className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline transition-colors duration-200 group inline-flex items-center focus:outline-none focus:underline"
                >
                  Sign Up
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Password Reset Modal (remains largely the same, minor style tweaks) */}
      <AnimatePresence>
        {showPasswordReset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-8 max-w-md w-full shadow-xl" // Slightly adjusted rounding/padding
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Reset Password</h2>
                <p className="text-gray-600 text-sm">Enter your email to receive a password reset link.</p>
              </div>
            
              <form onSubmit={handlePasswordReset} className="space-y-4">
                 <div className="relative">
                    <label htmlFor="reset-email" className="sr-only">Email Address</label>
                    <Mail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    <input
                     id="reset-email"
                     type="email"
                     className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all duration-200"
                     value={resetEmail}
                     onChange={(e) => setResetEmail(e.target.value)}
                     required
                     placeholder="Email Address"
                   />
                 </div>
                
                 {resetMessage && (
                   <div className={cn(
                    "p-3 rounded-md text-sm text-center border", // Use rounded-md
                    resetMessage.includes('sent') ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200' 
                   )}>
                     {resetMessage}
                   </div>
                 )}

                 <div className="flex space-x-3 pt-4">
                   <motion.button
                     whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                     type="button"
                     onClick={() => setShowPasswordReset(false)}
                     className="flex-1 px-4 py-2.5 bg-white border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 text-sm" // Adjusted padding/size
                   >
                     Cancel
                   </motion.button>
                  <motion.button
                     whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                     type="submit"
                     className="flex-1 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-md hover:shadow-md transition-all duration-300 shadow disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 text-sm" // Adjusted padding/size
                     disabled={resetLoading}
                   >
                     {resetLoading ? (
                       <LoadingButton loading={resetLoading} size="small" className="text-white">Sending...</LoadingButton>
                     ) : 'Send Reset Link'}
                   </motion.button>
                 </div>
               </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Placeholder LoadingButton ---
// Ensure this matches your actual component
const _LoadingButton = ({ loading, children, className = '', size = 'default' }: {loading: boolean, children: React.ReactNode, className?: string, size?: string}) => (
  <span className={cn("inline-flex items-center justify-center", className)}>
    {loading && <svg className={cn("animate-spin -ml-1 mr-2", size === 'small' ? 'h-4 w-4' : 'h-5 w-5')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
    {children}
  </span>
);