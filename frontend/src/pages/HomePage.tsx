import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  TrendingUp, 
  Zap,
  Shield,
  Rocket,
  Sparkles,
  Star,
  Users,
  Target,
  Play,
  BookOpen,
  Award,
  Globe,
  Clock,
  BarChart3
} from 'lucide-react'
import EnhancedSearchBar from '../components/ui/EnhancedSearchBar'

export default function HomePage() {
  const handleSearch = (query: string) => {
    console.log('Search query:', query)
    // Handle search functionality
  }

  // Removed mock stats - will be populated with real data from backend

  const features = [
    {
      icon: Rocket,
      title: 'AI-Powered Guidance',
      description: 'Get personalized learning recommendations based on your goals, experience, and market demand.',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Shield,
      title: 'Industry-Validated Paths',
      description: 'Learn from real-world experts and follow proven career trajectories that lead to success.',
      color: 'from-purple-500 to-pink-500',
      gradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: Zap,
      title: 'Accelerated Learning',
      description: 'Optimize your learning with our structured approach and focus on high-impact skills first.',
      color: 'from-emerald-500 to-teal-500',
      gradient: 'from-emerald-50 to-teal-50'
    },
    {
      icon: Target,
      title: 'Market-Driven Skills',
      description: 'Focus on skills that are in high demand and will accelerate your career growth.',
      color: 'from-orange-500 to-red-500',
      gradient: 'from-orange-50 to-red-50'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with peers, mentors, and industry professionals in our thriving community.',
      color: 'from-indigo-500 to-blue-500',
      gradient: 'from-indigo-50 to-blue-50'
    },
    {
      icon: Award,
      title: 'Certification Ready',
      description: 'Earn industry-recognized certifications and build a portfolio that stands out.',
      color: 'from-violet-500 to-purple-500',
      gradient: 'from-violet-50 to-purple-50'
    }
  ]

  // Removed mock testimonials - will be populated with real user testimonials from backend

  return (
    <div className="min-h-screen page-transition">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 py-12 sm:py-16 lg:py-24 px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-indigo-200/30 rounded-full animate-float blur-3xl"></div>
          <div className="absolute top-20 sm:top-40 right-4 sm:right-20 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-purple-200/30 rounded-full animate-float blur-3xl" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-blue-200/30 rounded-full animate-float blur-3xl" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full animate-pulse-gentle"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200/50 shadow-soft-xl animate-fade-in-down">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600" />
            <span className="text-xs sm:text-sm font-semibold text-slate-700">AI-Powered Career Guidance</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-600 rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <h1 className="mt-6 sm:mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-slate-900 animate-fade-in-up leading-tight">
            Your Path to
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Tech Success</span>
          </h1>

          {/* Description */}
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl lg:text-2xl text-slate-700 max-w-4xl mx-auto animate-fade-in-up leading-relaxed px-4" style={{ animationDelay: '0.2s' }}>
            Master in-demand tech skills with personalized learning paths, comprehensive roadmaps, and cutting-edge AI guidance designed for every career stage.
          </p>

          {/* Search Bar */}
          <div className="mt-8 sm:mt-12 animate-fade-in-up px-4" style={{ animationDelay: '0.4s' }}>
            <EnhancedSearchBar onSearch={handleSearch} />
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/career-assessment" 
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:scale-105 transition-all duration-300 shadow-soft-xl hover:shadow-indigo-500/25 text-center"
            >
              <span className="flex items-center justify-center">
                Find Your Ideal Career
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </Link>
            <Link 
              to="/career-guide" 
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-xl sm:rounded-2xl hover:bg-white/90 transition-all duration-300 border border-indigo-200/50 hover:scale-105 shadow-soft text-center"
            >
              <span className="flex items-center justify-center">
                Explore Career Paths
                <TrendingUp className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </Link>
            <Link 
              to="/style-demo" 
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-xl sm:rounded-2xl hover:bg-white/90 transition-all duration-300 border border-indigo-200/50 hover:scale-105 shadow-soft text-center"
            >
              <span className="flex items-center justify-center">
                View Style Demo
                <Sparkles className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </Link>
          </div>

          {/* Stats - Removed mock data, will be populated with real stats from backend */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 bg-gradient-to-br from-white via-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-indigo-200/50 shadow-soft mb-4 sm:mb-6">
              <Star className="h-4 w-4 text-amber-500" />
              <span className="text-sm font-semibold text-slate-700">Why Choose PathByte?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
              Everything You Need to
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Succeed</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed px-4">
              Our platform combines cutting-edge AI technology with proven learning methodologies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 stagger-animation">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className={`group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${feature.gradient} border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{feature.description}</p>
                  <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-full h-1 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
              How <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PathByte</span> Works
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto px-4">
              Get started in minutes with our simple, effective approach to career development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center group animate-fade-in-up">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Target className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg">1</div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Assess Your Goals</h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed px-4">Take our AI-powered assessment to understand your current skills and career aspirations.</p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-6 sm:mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg">2</div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Get Your Path</h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed px-4">Receive a personalized learning roadmap tailored to your goals and timeline.</p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative mb-6 sm:mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Rocket className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl sm:rounded-3xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg">3</div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">Learn & Grow</h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed px-4">Follow your path with interactive lessons, projects, and real-world applications.</p>
            </div>
          </div>
        </div>
      </section>

             {/* Testimonials Section - Removed mock data, will be populated with real user testimonials */}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-48 sm:w-96 h-48 sm:h-96 bg-white/10 rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-white/10 rounded-full animate-float blur-3xl" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 px-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 opacity-90 leading-relaxed px-4">
            Start your journey with our comprehensive, AI-powered educational platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Link 
              to="/onboarding" 
              className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-slate-900 font-semibold rounded-xl sm:rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25 flex items-center justify-center"
            >
              <Play className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
              Get Started Now
            </Link>
            <Link 
              to="/career-guide" 
              className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-white text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <Globe className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
              Explore Paths
            </Link>
          </div>
          
          {/* Additional info */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-white/80 px-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Start learning in minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span>Track your progress</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Join our community</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
