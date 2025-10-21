import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { ArrowRight, MapPin, Target, User, Clock, TestTube } from 'lucide-react'
import { cn } from '@/utils/cn'
import { api } from '@/lib/api'

export default function OnboardingPage() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [testingConnection, setTestingConnection] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    locationCity: '',
    locationState: '',
    locationCountry: '',
    experienceLevel: '',
    targetRole: '',
    timeCommitment: '',
    budget: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const testConnection = async () => {
    setTestingConnection(true)
    setConnectionStatus(null)
    setError(null)
    
    try {
      console.log('Testing connection to backend...')
      console.log('API base URL:', api.defaults.baseURL)
      
      // Test the health endpoint directly (not through the API wrapper)
      const response = await fetch('http://localhost:5000/health')
      if (response.ok) {
        const data = await response.json()
        console.log('Backend health check response:', data)
        setConnectionStatus('✅ Backend connection successful! Backend is running and accessible.')
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
    } catch (error: any) {
      console.error('Connection test failed:', error)
      let statusMessage = '❌ Connection failed'
      
      // The original code uses error.code for fetch errors, which is often undefined in browsers. 
      // I'll keep the structure but note that message matching is more reliable.
      if (error.code === 'ECONNREFUSED' || error.message.includes('Failed to fetch')) {
        statusMessage = '❌ Cannot connect to backend server. Please ensure it is running on http://localhost:5000'
      } else if (error.message?.includes('404')) {
        statusMessage = '❌ Backend is running but health endpoint not found'
      } else if (error.message?.includes('CORS')) {
        statusMessage = '❌ CORS error - backend may not be configured to allow frontend requests'
      } else if (error.message) {
        statusMessage = `❌ Connection error: ${error.message}`
      }
      
      setConnectionStatus(statusMessage)
    } finally {
      setTestingConnection(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    
    try {
      console.log('Submitting registration data:', formData)
      console.log('API base URL:', api.defaults.baseURL)
      
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        locationCity: formData.locationCity,
        locationState: formData.locationState,
        locationCountry: formData.locationCountry,
        experienceLevel: formData.experienceLevel,
        targetRole: formData.targetRole
      })
      
      console.log('Registration successful, navigating to dashboard')
      navigate('/dashboard')
    } catch (err: any) {
      console.error('Registration failed:', err)
      
      let errorMessage = 'Registration failed. Please try again.'
      
      if (err.response?.data?.error) {
        errorMessage = err.response.data.error
      } else if (err.message) {
        errorMessage = err.message
      } else if (err.code === 'NETWORK_ERROR' || err.code === 'ECONNREFUSED') {
        errorMessage = 'Network error. Cannot connect to server. Please ensure the backend is running.'
      }
      
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Location', icon: MapPin },
    { number: 3, title: 'Career Goals', icon: Target },
    { number: 4, title: 'Preferences', icon: Clock }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Create Your Learning Roadmap</h1>
          <p className="text-lg text-gray-600">Tell us about yourself to get personalized recommendations</p>
        </div>

        {/* Connection Test */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-blue-800">Backend Connection Test</h3>
              <p className="text-sm text-blue-600">Test if the backend server is accessible before proceeding</p>
            </div>
            <button
              onClick={testConnection}
              disabled={testingConnection}
              className="btn-secondary text-sm px-4 py-2 flex items-center gap-2"
            >
              <TestTube className="h-4 w-4" />
              {testingConnection ? 'Testing...' : 'Test Connection'}
            </button>
          </div>
          {connectionStatus && (
            <div className="mt-3 p-3 bg-white rounded-lg border border-blue-200">
              <p className="text-sm">{connectionStatus}</p>
            </div>
          )}
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-all duration-300",
                  currentStep >= step.number
                    ? "bg-primary-600 text-white"
                    : "bg-gray-200 text-gray-600"
                )}>
                  {currentStep > step.number ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={cn(
                    "w-16 h-0.5 transition-all duration-300",
                    currentStep > step.number ? "bg-primary-600" : "bg-gray-200"
                  )} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
              <strong>Error:</strong> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password *
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Location */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Location</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="locationCity"
                      value={formData.locationCity}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State/Province *
                    </label>
                    <input
                      type="text"
                      name="locationState"
                      value={formData.locationState}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      name="locationCountry"
                      value={formData.locationCountry}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Career Goals */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Career Goals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Level *
                    </label>
                    <select
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3-5 years)</option>
                      <option value="expert">Expert (5+ years)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Role *
                    </label>
                    <select
                      name="targetRole"
                      value={formData.targetRole}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    >
                      <option value="">Select your target role</option>
                      
                      {/* Software Development */}
                      <optgroup label="Software Development">
                        <option value="Frontend Developer">Frontend Developer (HTML, CSS, JavaScript, React)</option>
                        <option value="Backend Developer">Backend Developer (Node.js, Python, Java, Databases)</option>
                        <option value="Full-Stack Developer">Full-Stack Developer (Expertise in both Frontend and Backend)</option>
                        <option value="Mobile App Developer">Mobile App Developer (iOS, Android, React Native, Flutter)</option>
                        <option value="Game Developer">Game Developer (Unity, Unreal Engine)</option>
                        <option value="Embedded Systems Engineer">Embedded Systems Engineer (IoT, Hardware Integration)</option>
                        <option value="Systems Programmer">Systems Programmer (Low-level Software, Drivers)</option>
                        <option value="Compiler Engineer">Compiler Engineer (Programming Language Design)</option>
                      </optgroup>
                      
                      {/* Data & AI */}
                      <optgroup label="Data & AI">
                        <option value="Data Scientist">Data Scientist (Statistical analysis, Machine Learning)</option>
                        <option value="Data Engineer">Data Engineer (Data pipelines, Data infrastructure)</option>
                        <option value="Machine Learning Engineer">Machine Learning Engineer (Deploying AI models into applications)</option>
                        <option value="AI Specialist">AI Specialist (AI research and development)</option>
                        <option value="Data Visualization Engineer">Data Visualization Engineer (Charts, Dashboards)</option>
                        <option value="NLP Engineer">NLP Engineer (Natural Language Processing, Chatbots)</option>
                        <option value="Computer Vision Engineer">Computer Vision Engineer (Image Recognition, AI Vision)</option>
                      </optgroup>
                      
                      {/* Infrastructure & Operations */}
                      <optgroup label="Infrastructure & Operations">
                        <option value="DevOps Engineer">DevOps Engineer (Automation, CI/CD, Development + Operations)</option>
                        <option value="Cloud Engineer">Cloud Engineer (AWS, Azure, Google Cloud)</option>
                        <option value="Site Reliability Engineer">Site Reliability Engineer (SRE) (System reliability, performance)</option>
                        <option value="Network Engineer">Network Engineer (Network Infrastructure, Security)</option>
                        <option value="Database Administrator">Database Administrator (Database Management, Performance)</option>
                        <option value="Cybersecurity Engineer">Cybersecurity Engineer (System security and threat protection)</option>
                      </optgroup>
                      
                      {/* Emerging Tech */}
                      <optgroup label="Emerging Tech">
                        <option value="Blockchain Developer">Blockchain Developer (Smart Contracts, DeFi, Web3)</option>
                        <option value="Web3 Developer">Web3 Developer (Decentralized Applications)</option>
                        <option value="AI Operations Engineer">AI Operations Engineer (MLOps, AI Infrastructure)</option>
                        <option value="Quantum Computing Engineer">Quantum Computing Engineer (Quantum Algorithms, Research)</option>
                        <option value="Generative AI Engineer">Generative AI Engineer (LLMs, AI Generation)</option>
                      </optgroup>
                      
                      {/* Industry-Specific */}
                      <optgroup label="Industry-Specific">
                        <option value="Fintech Engineer">Fintech Engineer (Financial Applications, Blockchain)</option>
                        <option value="Healthcare Data Engineer">Healthcare Data Engineer (Healthcare Data, Compliance)</option>
                        <option value="Edutech Engineer">Edutech Engineer (Educational Platforms, Learning Tech)</option>
                        <option value="Gaming Engineer">Gaming Engineer (Game Engines, 3D Graphics)</option>
                      </optgroup>
                      
                      {/* Specialized & Related Roles */}
                      <optgroup label="Specialized & Related Roles">
                        <option value="UI/UX Designer">UI/UX Designer (User experience and interface design)</option>
                        <option value="Product Manager">Product Manager (Product Strategy, Team Leadership)</option>
                        <option value="QA Engineer">QA Engineer (Testing, Quality Assurance, Automation)</option>
                        <option value="Technical Writer">Technical Writer (Documentation, User Guides)</option>
                      </optgroup>
                      
                      {/* Tech Management */}
                      <optgroup label="Tech Management">
                        <option value="Tech Manager">Tech Manager (Team Leadership, Project Management)</option>
                        <option value="Chief Technology Officer">Chief Technology Officer (CTO) (Technical Strategy, Innovation)</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Preferences */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Learning Preferences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time Commitment
                    </label>
                    <select
                      name="timeCommitment"
                      value={formData.timeCommitment}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="">Select your time commitment</option>
                      <option value="minimal">Minimal (1-2 hours/week)</option>
                      <option value="moderate">Moderate (3-5 hours/week)</option>
                      <option value="dedicated">Dedicated (6-10 hours/week)</option>
                      <option value="intensive">Intensive (10+ hours/week)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Preference
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="">Select your budget preference</option>
                      <option value="free">Free resources only</option>
                      <option value="low">Low cost ($0-50/month)</option>
                      <option value="medium">Medium cost ($50-200/month)</option>
                      <option value="high">High cost ($200+/month)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="btn-secondary"
                  disabled={loading}
                >
                  Previous
                </button>
              )}
              
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="btn-primary ml-auto"
                  disabled={loading}
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn-primary ml-auto"
                  disabled={loading}
                >
                  {loading ? 'Creating Roadmap...' : 'Create My Roadmap'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Login Link Added Here */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Already have an account? {' '}
            <button 
              type="button" 
              onClick={() => navigate('/login')} 
              className="text-primary-600 hover:text-primary-800 font-medium transition-colors duration-200"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}