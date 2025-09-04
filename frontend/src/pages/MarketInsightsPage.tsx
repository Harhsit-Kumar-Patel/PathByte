import { useState } from 'react'
import { 
  TrendingUp, 
  DollarSign, 
  Globe, 
  MapPin, 
  BarChart3,
  Target,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

interface MarketData {
  role: string
  indianSalary: {
    entry: number
    mid: number
    senior: number
  }
  internationalSalary: {
    entry: number
    mid: number
    senior: number
  }
  demand: 'High' | 'Medium' | 'Low'
  growth: number
  topSkills: string[]
  companies: string[]
}

interface JobTrend {
  month: string
  indianJobs: number
  internationalJobs: number
  growth: number
}

interface SkillDemand {
  skill: string
  indianDemand: number
  internationalDemand: number
  trend: 'rising' | 'stable' | 'declining'
}

// Removed mock market data - will be populated with real market data from backend
const marketData: MarketData[] = []

// Removed mock job trends - will be populated with real data from backend
const jobTrends: JobTrend[] = []

// Removed mock skill demand data - will be populated with real data from backend
const skillDemand: SkillDemand[] = []

// Removed mock Indian market insights - will be populated with real data from backend
const indianMarketInsights: any[] = []

// Removed mock international market insights - will be populated with real data from backend
const internationalMarketInsights: any[] = []

export default function MarketInsightsPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'salaries' | 'trends' | 'skills' | 'insights'>('overview')
  const [selectedRole, setSelectedRole] = useState<string>('Frontend Developer')
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR')

  const formatSalary = (amount: number, curr: 'INR' | 'USD') => {
    if (curr === 'INR') {
      return `₹${(amount / 100000).toFixed(1)}L`
    }
    return `$${(amount / 1000).toFixed(0)}K`
  }

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'High': return 'text-green-600 bg-green-100'
      case 'Medium': return 'text-yellow-600 bg-yellow-100'
      case 'Low': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getTrendIcon = (trend: 'rising' | 'stable' | 'declining') => {
    switch (trend) {
      case 'rising': return <ArrowUpRight className="h-4 w-4 text-green-500" />
      case 'stable': return <BarChart3 className="h-4 w-4 text-blue-500" />
      case 'declining': return <ArrowDownRight className="h-4 w-4 text-red-500" />
    }
  }

  const selectedRoleData = marketData.find(role => role.role === selectedRole)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Market Insights
          </h1>
                     <p className="text-xl text-gray-700 max-w-3xl mx-auto">
             Comprehensive analysis of job market trends, salary insights, and skill demand across Indian and international markets
           </p>
        </div>

        {/* Currency Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setCurrency('INR')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currency === 'INR'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Indian Market (INR)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currency === 'USD'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              International Market (USD)
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Market Overview', icon: BarChart3 },
              { id: 'salaries', label: 'Salary Insights', icon: DollarSign },
              { id: 'trends', label: 'Job Trends', icon: TrendingUp },
              { id: 'skills', label: 'Skill Demand', icon: Target },
              { id: 'insights', label: 'Market Analysis', icon: Globe }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* Market Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Indian Market Overview */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Indian Market</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm text-gray-600">Total Tech Jobs</span>
                    <span className="font-semibold text-orange-600">2.5M+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm text-gray-600">Average Growth</span>
                    <span className="font-semibold text-orange-600">+25%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm text-gray-600">Top Cities</span>
                    <span className="font-semibold text-orange-600">Bangalore, Mumbai, Delhi</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-100 rounded-lg">
                  <h4 className="font-medium text-orange-900 mb-2">Key Highlights</h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Rapid digital transformation across industries</li>
                    <li>• Strong startup ecosystem growth</li>
                    <li>• Increasing remote work opportunities</li>
                    <li>• High demand for emerging tech skills</li>
                  </ul>
                </div>
              </div>

              {/* International Market Overview */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">International Market</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-600">Global Tech Jobs</span>
                    <span className="font-semibold text-blue-600">15M+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-600">Average Growth</span>
                    <span className="font-semibold text-blue-600">+18%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-600">Top Markets</span>
                    <span className="font-semibold text-blue-600">US, UK, Germany, Canada</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Key Highlights</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• AI/ML revolution driving job creation</li>
                    <li>• Remote-first work policies</li>
                    <li>• Focus on sustainable technology</li>
                    <li>• High cybersecurity demand</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Salary Insights Tab */}
          {activeTab === 'salaries' && (
            <div className="space-y-6">
              {/* Role Selection */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Role for Salary Analysis</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {marketData.map((role) => (
                    <button
                      key={role.role}
                      onClick={() => setSelectedRole(role.role)}
                      className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                        selectedRole === role.role
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {role.role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Salary Comparison */}
              {selectedRoleData && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Indian Salaries */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <MapPin className="h-6 w-6 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Indian Market Salaries</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Entry Level (0-2 years)</span>
                          <span className="font-semibold text-orange-600">
                            {formatSalary(selectedRoleData.indianSalary.entry, 'INR')}
                          </span>
                        </div>
                        <div className="w-full bg-orange-200 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{ width: '33%' }}></div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Mid Level (3-5 years)</span>
                          <span className="font-semibold text-orange-600">
                            {formatSalary(selectedRoleData.indianSalary.mid, 'INR')}
                          </span>
                        </div>
                        <div className="w-full bg-orange-200 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{ width: '66%' }}></div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Senior Level (6+ years)</span>
                          <span className="font-semibold text-orange-600">
                            {formatSalary(selectedRoleData.indianSalary.senior, 'INR')}
                          </span>
                        </div>
                        <div className="w-full bg-orange-200 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* International Salaries */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Globe className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">International Market Salaries</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Entry Level (0-2 years)</span>
                          <span className="font-semibold text-blue-600">
                            {formatSalary(selectedRoleData.internationalSalary.entry, 'USD')}
                          </span>
                        </div>
                        <div className="w-full bg-blue-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '33%' }}></div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Mid Level (3-5 years)</span>
                          <span className="font-semibold text-blue-600">
                            {formatSalary(selectedRoleData.internationalSalary.mid, 'USD')}
                          </span>
                        </div>
                        <div className="w-full bg-blue-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '66%' }}></div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Senior Level (6+ years)</span>
                          <span className="font-semibold text-blue-600">
                            {formatSalary(selectedRoleData.internationalSalary.senior, 'USD')}
                          </span>
                        </div>
                        <div className="w-full bg-blue-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Role Details */}
              {selectedRoleData && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Market Demand</h4>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDemandColor(selectedRoleData.demand)}`}>
                        {selectedRoleData.demand} Demand
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Growth Rate</h4>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-5 w-5 text-green-500" />
                        <span className="text-green-600 font-medium">+{selectedRoleData.growth}%</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Top Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedRoleData.topSkills.slice(0, 3).map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Job Trends Tab */}
          {activeTab === 'trends' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Job Market Trends (2024)</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Indian Job Trends */}
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-orange-600" />
                      <span>Indian Market</span>
                    </h4>
                    <div className="space-y-3">
                      {jobTrends.map((trend) => (
                        <div key={trend.month} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                          <span className="text-sm text-gray-600">{trend.month}</span>
                          <div className="flex items-center space-x-4">
                            <span className="font-medium text-orange-600">{trend.indianJobs.toLocaleString()}</span>
                            <div className="flex items-center space-x-1 text-green-600">
                              <ArrowUpRight className="h-4 w-4" />
                              <span className="text-sm">+{trend.growth}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* International Job Trends */}
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center space-x-2">
                      <Globe className="h-5 w-5 text-blue-600" />
                      <span>International Market</span>
                    </h4>
                    <div className="space-y-3">
                      {jobTrends.map((trend) => (
                        <div key={trend.month} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="text-sm text-gray-600">{trend.month}</span>
                          <div className="flex items-center space-x-4">
                            <span className="font-medium text-blue-600">{trend.internationalJobs.toLocaleString()}</span>
                            <div className="flex items-center space-x-1 text-green-600">
                              <ArrowUpRight className="h-4 w-4" />
                              <span className="text-sm">+{trend.growth}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Skill Demand Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Skill Demand Analysis</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Indian Skill Demand */}
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-orange-600" />
                      <span>Indian Market Demand</span>
                    </h4>
                    <div className="space-y-3">
                      {skillDemand.map((skill) => (
                        <div key={skill.skill} className="p-3 bg-orange-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900">{skill.skill}</span>
                            <div className="flex items-center space-x-2">
                              {getTrendIcon(skill.trend)}
                              <span className="text-sm text-gray-600">{skill.indianDemand}%</span>
                            </div>
                          </div>
                          <div className="w-full bg-orange-200 rounded-full h-2">
                            <div 
                              className="bg-orange-500 h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${skill.indianDemand}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* International Skill Demand */}
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center space-x-2">
                      <Globe className="h-5 w-5 text-blue-600" />
                      <span>International Market Demand</span>
                    </h4>
                    <div className="space-y-3">
                      {skillDemand.map((skill) => (
                        <div key={skill.skill} className="p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900">{skill.skill}</span>
                            <div className="flex items-center space-x-2">
                              {getTrendIcon(skill.trend)}
                              <span className="text-sm text-gray-600">{skill.internationalDemand}%</span>
                            </div>
                          </div>
                          <div className="w-full bg-blue-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${skill.internationalDemand}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Market Analysis Tab */}
          {activeTab === 'insights' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Indian Market Insights */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                    <MapPin className="h-6 w-6 text-orange-600" />
                    <span>Indian Market Insights</span>
                  </h3>
                  
                  <div className="space-y-4">
                    {indianMarketInsights.map((insight, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{insight.title}</h4>
                          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                            insight.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {insight.impact} Impact
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
                        <div className="flex items-center space-x-1 text-green-600">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="text-sm font-medium">Positive Trend</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* International Market Insights */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                    <Globe className="h-6 w-6 text-blue-600" />
                    <span>International Market Insights</span>
                  </h3>
                  
                  <div className="space-y-4">
                    {internationalMarketInsights.map((insight, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{insight.title}</h4>
                          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                            insight.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {insight.impact} Impact
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{insight.description}</p>
                        <div className="flex items-center space-x-1 text-green-600">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="text-sm font-medium">Positive Trend</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Market Comparison */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Market Comparison Summary</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                    <h4 className="font-medium text-orange-900 mb-2">Indian Market</h4>
                    <div className="text-2xl font-bold text-orange-600 mb-2">+25%</div>
                    <p className="text-sm text-orange-700">Average growth rate</p>
                    <p className="text-xs text-orange-600 mt-2">Strong domestic demand</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">International Market</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-2">+18%</div>
                    <p className="text-sm text-blue-700">Average growth rate</p>
                    <p className="text-xs text-blue-600 mt-2">Global opportunities</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Overall Trend</h4>
                    <div className="text-2xl font-bold text-green-600 mb-2">+22%</div>
                    <p className="text-sm text-green-700">Combined growth rate</p>
                    <p className="text-xs text-green-600 mt-2">Positive outlook</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Data is updated monthly. Last updated: June 2024
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Sources: LinkedIn Jobs, Glassdoor, Naukri.com, Indeed, and industry reports
          </p>
        </div>
      </div>
    </div>
  )
}
