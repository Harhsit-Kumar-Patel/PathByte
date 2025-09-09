import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Play, 
  Users, 
  Target, 
  Zap,
  Rocket,
  Brain,
  TrendingUp,
  Shield,
  Globe,
  Sparkles,
  Search
} from 'lucide-react'

export default function HomePage() {

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Career Assessment',
      description: 'Discover your ideal tech role through our advanced assessment that analyzes your skills, interests, and goals.',
      glow: 'neon-purple',
      bgGradient: 'liquid-primary'
    },
    {
      icon: Target,
      title: 'Personalized Learning Paths',
      description: 'Get custom roadmaps tailored to your career goals with step-by-step guidance and real-world projects.',
      glow: 'neon-green',
      bgGradient: 'liquid-secondary'
    },
    {
      icon: TrendingUp,
      title: 'Skill Progress Tracking',
      description: 'Monitor your growth with detailed analytics, certifications, and milestone achievements.',
      glow: 'neon-blue',
      bgGradient: 'neon-gradient'
    },
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Connect with industry professionals, mentors, and peers on your career journey.',
      glow: 'neon-pink',
      bgGradient: 'metallic-gradient'
    },
    {
      icon: Shield,
      title: 'Industry Insights',
      description: 'Stay ahead with real-time market trends, salary data, and emerging technologies.',
      glow: 'neon-cyan',
      bgGradient: 'holographic'
    },
    {
      icon: Globe,
      title: 'Global Opportunities',
      description: 'Access worldwide job opportunities and remote work possibilities in tech.',
      glow: 'neon-orange',
      bgGradient: 'animated-liquid'
    }
  ]

  const stats = [
    { number: '50K+', label: 'Active Learners', icon: Users },
    { number: '200+', label: 'Career Paths', icon: Target },
    { number: '95%', label: 'Success Rate', icon: TrendingUp },
    { number: '24/7', label: 'Support', icon: Shield }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">AI-Powered Career Guidance</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              <span className="text-gray-900">Your Path to</span>
              <br />
              <span className="text-gradient">Tech Success</span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Master in-demand tech skills with personalized learning paths, comprehensive roadmaps, and cutting-edge AI guidance designed for every career stage.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/career-assessment"
                className="btn-gradient px-8 py-4 text-white font-semibold text-lg flex items-center space-x-2 group"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="btn-secondary px-8 py-4 font-semibold text-lg flex items-center space-x-2 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for skills, roles, or learning paths..."
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 shadow-sm"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Powerful Features</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gray-900">Everything You Need</span>
              <br />
              <span className="text-gradient">To Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools and resources you need to build a successful tech career.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-gradient transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full mb-6">
              <Target className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">Simple Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gray-900">Your Journey</span>
              <br />
              <span className="text-gradient">In 3 Steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discover Your Path',
                description: 'Take our AI-powered assessment to identify your ideal tech career and skills gaps.',
                icon: Brain
              },
              {
                step: '02',
                title: 'Build Your Skills',
                description: 'Follow personalized learning paths with hands-on projects and real-world applications.',
                icon: Target
              },
              {
                step: '03',
                title: 'Launch Your Career',
                description: 'Connect with opportunities, showcase your skills, and land your dream tech job.',
                icon: Rocket
              }
            ].map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step Number */}
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>

                {/* Content */}
                <div className="card group-hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-gradient transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent transform translate-x-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-gradient p-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gray-900">Ready to Transform</span>
              <br />
              <span className="text-gradient">Your Career?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have already accelerated their tech careers with PathByte.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/career-assessment"
                className="btn-gradient px-8 py-4 text-white font-semibold text-lg flex items-center space-x-2 group"
              >
                <span>Start Free Assessment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/community"
                className="btn-secondary px-8 py-4 font-semibold text-lg"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">PathByte</span>
            </div>
            <div className="text-gray-500 text-sm">
              © 2024 PathByte. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}