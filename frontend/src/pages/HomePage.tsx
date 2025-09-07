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
  Sparkles
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
    <div className="min-h-screen bg-neutral-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-career-mesh animate-gradient-shift opacity-20" />
      <div className="fixed inset-0 bg-animated-liquid animate-liquid-morph opacity-10" />
      
      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-glass-dark backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-futuristic font-bold text-gradient">PathByte</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-neutral-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-neutral-300 hover:text-white transition-colors">How It Works</a>
              <a href="#community" className="text-neutral-300 hover:text-white transition-colors">Community</a>
              <a href="#pricing" className="text-neutral-300 hover:text-white transition-colors">Pricing</a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="capsule bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-2 text-white font-medium hover:shadow-neon transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">The Future of Career Development</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-futuristic font-bold mb-6 animate-fade-in-up">
              <span className="text-gradient">Build Your</span>
              <br />
              <span className="text-holographic">Tech Career</span>
              <br />
              <span className="text-neon">Future</span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl text-neutral-300 max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover your ideal tech role, master in-demand skills, and accelerate your career with AI-powered guidance and expert mentorship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/assessment"
                className="capsule bg-gradient-to-r from-primary-500 to-secondary-500 px-8 py-4 text-white font-semibold text-lg hover:shadow-neon-lg transition-all duration-300 flex items-center space-x-2 group"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="capsule bg-glass px-8 py-4 text-white font-semibold text-lg hover:bg-glass-dark transition-all duration-300 flex items-center space-x-2 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold text-gradient mb-1">{stat.number}</div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-secondary-400" />
              <span className="text-sm font-medium text-secondary-300">Powerful Features</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-futuristic font-bold mb-6">
              <span className="text-gradient">Everything You Need</span>
              <br />
              <span className="text-neon">To Succeed</span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools and resources you need to build a successful tech career.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-glass-dark backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-primary-500/50 transition-all duration-500 hover:shadow-neon-lg hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-gradient transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-glass px-4 py-2 rounded-full mb-6">
              <Target className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">Simple Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-futuristic font-bold mb-6">
              <span className="text-gradient">Your Journey</span>
              <br />
              <span className="text-neon">In 3 Steps</span>
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
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>

                {/* Content */}
                <div className="bg-glass-dark backdrop-blur-xl rounded-2xl p-8 border border-white/10 group-hover:border-primary-500/50 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-gradient transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
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
          <div className="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-3xl p-12 border border-primary-500/20">
            <h2 className="text-4xl sm:text-5xl font-futuristic font-bold mb-6">
              <span className="text-gradient">Ready to Transform</span>
              <br />
              <span className="text-neon">Your Career?</span>
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have already accelerated their tech careers with PathByte.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/assessment"
                className="capsule bg-gradient-to-r from-primary-500 to-secondary-500 px-8 py-4 text-white font-semibold text-lg hover:shadow-neon-lg transition-all duration-300 flex items-center space-x-2 group"
              >
                <span>Start Free Assessment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/community"
                className="capsule bg-glass px-8 py-4 text-white font-semibold text-lg hover:bg-glass-dark transition-all duration-300"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-futuristic font-bold text-gradient">PathByte</span>
            </div>
            <div className="text-neutral-400 text-sm">
              © 2024 PathByte. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}