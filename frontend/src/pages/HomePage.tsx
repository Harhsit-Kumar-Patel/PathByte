// frontend/src/pages/HomePage.tsx

import { Link } from 'react-router-dom'
import { useEffect } from 'react'
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
  BarChart3,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Instagram,
  ClipboardCheck,
  Map,
  MessageSquare,
  // Added icons for new quick links
  LayoutGrid,
  Briefcase,
  User,
  LogIn,
} from 'lucide-react'
import { initAllScrollAnimations } from '../utils/scrollAnimations'

export default function HomePage() {
  useEffect(() => {
    // Initialize scroll animations when component mounts
    initAllScrollAnimations()
  }, [])

  const features = [
    {
      icon: Rocket,
      title: 'AI-Powered Guidance',
      description:
        'Get personalized learning recommendations based on your goals, experience, and market demand.',
      color: 'from-cyan-500 to-blue-500',
      gradient: 'from-cyan-50 to-blue-50',
      glow: 'glow-cyan',
      bgGradient: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10',
    },
    {
      icon: Shield,
      title: 'Industry-Validated Paths',
      description:
        'Learn from real-world experts and follow proven career trajectories that lead to success.',
      color: 'from-purple-500 to-pink-500',
      gradient: 'from-purple-50 to-pink-50',
      glow: 'glow-purple',
      bgGradient: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
    },
    {
      icon: Zap,
      title: 'Accelerated Learning',
      description:
        'Optimize your learning with our structured approach and focus on high-impact skills first.',
      color: 'from-emerald-500 to-teal-500',
      gradient: 'from-emerald-50 to-teal-50',
      glow: 'glow-green',
      bgGradient: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10',
    },
    {
      icon: Target,
      title: 'Market-Driven Skills',
      description:
        'Focus on skills that are in high demand and will accelerate your career growth.',
      color: 'from-orange-500 to-red-500',
      gradient: 'from-orange-50 to-red-50',
      glow: 'glow-orange',
      bgGradient: 'bg-gradient-to-br from-orange-500/10 to-red-500/10',
    },
    {
      icon: Users,
      title: 'Community Support',
      description:
        'Connect with peers, mentors, and industry professionals in our thriving community.',
      color: 'from-indigo-500 to-blue-500',
      gradient: 'from-indigo-50 to-blue-50',
      glow: 'glow',
      bgGradient: 'bg-gradient-to-br from-indigo-500/10 to-blue-500/10',
    },
    {
      icon: Award,
      title: 'Certification Ready',
      description:
        'Earn industry-recognized certifications and build a portfolio that stands out.',
      color: 'from-violet-500 to-purple-500',
      gradient: 'from-violet-50 to-purple-50',
      glow: 'glow-purple',
      bgGradient: 'bg-gradient-to-br from-violet-500/10 to-purple-500/10',
    },
  ]

  // Expanded list of all quick links for the website
  const quickLinks = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: LayoutGrid,
      color: 'text-blue-500',
    },
    {
      name: 'My Roadmap',
      href: '/roadmap',
      icon: Map,
      color: 'text-purple-500',
    },
    {
      name: 'Career Roles',
      href: '/roles',
      icon: Briefcase,
      color: 'text-orange-500',
    },
    {
      name: 'Career Guide',
      href: '/career-guide',
      icon: BookOpen,
      color: 'text-indigo-500',
    },
    {
      name: 'Assessment',
      href: '/career-assessment',
      icon: ClipboardCheck,
      color: 'text-cyan-500',
    },
    {
      name: 'Market Insights',
      href: '/market-insights',
      icon: BarChart3,
      color: 'text-green-500',
    },
    {
      name: 'Community',
      href: '/community',
      icon: MessageSquare,
      color: 'text-emerald-500',
    },
    {
      name: 'My Profile',
      href: '/profile',
      icon: User,
      color: 'text-slate-500',
    },
    {
      name: 'Onboarding',
      href: '/onboarding',
      icon: Rocket,
      color: 'text-pink-500',
    },
    { name: 'Login', href: '/login', icon: LogIn, color: 'text-gray-500' },
  ]

  return (
    <div className="min-h-screen page-transition">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-purple-50 py-12 sm:py-16 lg:py-24 px-4"
        data-animate="fade"
        data-animate-delay="0"
      >
        {/* Modern Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full animate-float blur-3xl"></div>
          <div
            className="absolute top-20 sm:top-40 right-4 sm:right-20 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full animate-float blur-3xl"
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className="absolute bottom-10 sm:bottom-20 left-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full animate-float blur-3xl"
            style={{ animationDelay: '4s' }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-gradient-to-r from-indigo-400/15 to-purple-400/15 rounded-full animate-pulse-gentle"></div>

          {/* Modern mesh gradient overlay */}
          <div className="absolute inset-0 bg-mesh-1 opacity-30"></div>

          {/* Floating particles */}
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse"
            style={{ animationDelay: '3s' }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
            style={{ animationDelay: '5s' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Modern Badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-md rounded-full border border-cyan-200/50 shadow-glass animate-fade-in-down">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-slate-800">
              AI-Powered Career Guidance
            </span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>

          {/* Modern Main Heading */}
          <h1
            className="mt-6 sm:mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-slate-900 leading-tight"
            data-animate="slide-up"
            data-animate-delay="200"
          >
            Your Path to
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              {' '}
              Tech Success
            </span>
          </h1>

          {/* Description */}
          <p
            className="mt-6 sm:mt-8 text-lg sm:text-xl lg:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed px-4"
            data-animate="slide-up"
            data-animate-delay="400"
          >
            Master in-demand tech skills with personalized learning paths,
            comprehensive roadmaps, and cutting-edge AI guidance designed for
            every career stage.
          </p>

          {/* Modern CTA Buttons */}
          <div
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            data-animate="slide-up"
            data-animate-delay="600"
          >
            <Link
              to="/career-assessment"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-semibold rounded-xl sm:rounded-2xl text-center overflow-hidden btn-modern"
            >
              <span className="flex items-center justify-center relative z-10">
                Find Your Ideal Career
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/career-guide"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/95 backdrop-blur-md text-slate-800 font-semibold rounded-xl sm:rounded-2xl border-2 border-cyan-200/50 shadow-glass text-center btn-modern glass"
            >
              <span className="flex items-center justify-center">
                Explore Career Paths
                <TrendingUp className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </Link>
            {/* "View Style Demo" button removed as requested */}
          </div>
        </div>
      </section>

      {/* Modern Features Section */}
      <section
        className="py-12 sm:py-16 lg:py-24 px-4 bg-gradient-to-br from-white via-cyan-50 to-purple-50 relative overflow-hidden"
        data-animate="fade"
        data-animate-delay="0"
      >
        {/* Modern background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full animate-float blur-3xl"></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full animate-float blur-3xl"
            style={{ animationDelay: '3s' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full border border-cyan-200/50 shadow-glass mb-4 sm:mb-6">
              <Star className="h-4 w-4 text-amber-500 animate-pulse" />
              <span className="text-sm font-semibold text-slate-800">
                Why Choose PathByte?
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
              Everything You Need to
              <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                {' '}
                Succeed
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed px-4">
              Our platform combines cutting-edge AI technology with proven
              learning methodologies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-md border border-white/50 shadow-card ${feature.bgGradient} card-modern glass`}
                  data-animate="slide-up"
                  data-animate-delay={`${index * 200}`}
                >
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg ${feature.glow} icon-modern`}
                  >
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className={`w-full h-1 bg-gradient-to-r ${feature.color} rounded-full shadow-lg`}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modern How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-cyan-50 relative overflow-hidden">
        {/* Modern background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full animate-float blur-3xl"></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-full animate-float blur-3xl"
            style={{ animationDelay: '4s' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 px-4">
              How{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                PathByte
              </span>{' '}
              Works
            </h2>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto px-4">
              Get started in minutes with our simple, effective approach to
              career development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center group animate-fade-in-up">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Target className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                Assess Your Goals
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed px-4">
                Take our AI-powered assessment to understand your current skills
                and career aspirations.
              </p>
            </div>

            <div
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="relative mb-6 sm:mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                Get Your Path
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed px-4">
                Receive a personalized learning roadmap tailored to your goals
                and timeline.
              </p>
            </div>

            <div
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="relative mb-6 sm:mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Rocket className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl sm:rounded-3xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                Learn & Grow
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed px-4">
                Follow your path with interactive lessons, projects, and
                real-world applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Title and description removed as requested */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {quickLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="group flex flex-col items-center justify-center text-center p-4 sm:p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${link.color}`} />
                  <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-slate-800">
                    {link.name}
                  </h3>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
        {/* Modern background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-48 sm:w-96 h-48 sm:h-96 bg-white/10 rounded-full animate-float blur-3xl"></div>
          <div
            className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-white/10 rounded-full animate-float blur-3xl"
            style={{ animationDelay: '3s' }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-gradient-to-r from-white/5 to-white/10 rounded-full animate-pulse-gentle"></div>

          {/* Modern mesh gradient overlay */}
          <div className="absolute inset-0 bg-mesh-2 opacity-20"></div>

          {/* Floating particles */}
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute top-3/4 right-1/4 w-3 h-3 bg-white/60 rounded-full animate-pulse"
            style={{ animationDelay: '3s' }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/60 rounded-full animate-pulse"
            style={{ animationDelay: '5s' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 px-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 opacity-90 leading-relaxed px-4">
            Start your journey with our comprehensive, AI-powered educational
            platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Link
              to="/onboarding"
              className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-slate-900 font-semibold rounded-xl sm:rounded-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-white/25 flex items-center justify-center overflow-hidden"
            >
              <span className="flex items-center justify-center relative z-10">
                <Play className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                Get Started Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/career-guide"
              className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/80 text-white font-semibold rounded-xl sm:rounded-2xl hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm flex items-center justify-center"
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

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">PathByte</h3>
            <p className="text-slate-400">Your path to tech success.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/career-guide"
                  className="text-slate-400 hover:text-white"
                >
                  Career Paths
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="text-slate-400 hover:text-white"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-slate-400 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-slate-400 hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white">
                <Twitter />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <Github />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <Linkedin />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <Youtube />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} PathByte. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}