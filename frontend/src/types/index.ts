// User and Authentication Types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  location: Location
  experience: ExperienceLevel
  goals: CareerGoal[]
  currentSkills: Skill[]
  targetRole: string
  subscription: SubscriptionTier
  createdAt: Date
  updatedAt: Date
}

export interface Location {
  city: string
  state: string
  country: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'

export interface CareerGoal {
  id: string
  title: string
  description: string
  targetDate: Date
  priority: 'low' | 'medium' | 'high'
  status: 'pending' | 'in-progress' | 'completed'
}

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  proficiency: number // 0-100
  isTargetSkill: boolean
  marketDemand: number // 0-100
  averageSalary: number
  learningTime: number // in hours
}

export type SkillCategory = 
  | 'frontend' 
  | 'backend' 
  | 'database' 
  | 'devops' 
  | 'mobile' 
  | 'ai-ml' 
  | 'cybersecurity' 
  | 'cloud' 
  | 'testing' 
  | 'tools'

export type SubscriptionTier = 'free' | 'premium' | 'pro'

// Job Market Types
export interface JobMarket {
  location: Location
  totalJobs: number
  averageSalary: number
  trendingSkills: TrendingSkill[]
  topCompanies: Company[]
  jobGrowth: JobGrowthData
  lastUpdated: Date
}

export interface TrendingSkill {
  skill: Skill
  demandGrowth: number // percentage
  salaryIncrease: number // percentage
  jobCount: number
}

export interface Company {
  id: string
  name: string
  logo?: string
  industry: string
  size: string
  techStack: string[]
  averageSalary: number
  jobCount: number
  rating: number
}

export interface JobGrowthData {
  monthlyGrowth: number
  quarterlyGrowth: number
  yearlyGrowth: number
  projectedGrowth: number
}

// Roadmap Types
export interface LearningRoadmap {
  id: string
  userId: string
  title: string
  description: string
  targetRole: string
  estimatedDuration: number // in weeks
  milestones: Milestone[]
  skills: RoadmapSkill[]
  progress: number // 0-100
  status: 'draft' | 'active' | 'completed' | 'paused'
  createdAt: Date
  updatedAt: Date
}

export interface Milestone {
  id: string
  title: string
  description: string
  skills: string[] // skill IDs
  estimatedTime: number // in hours
  resources: LearningResource[]
  isCompleted: boolean
  completedAt?: Date
  order: number
}

export interface RoadmapSkill {
  skill: Skill
  priority: 'low' | 'medium' | 'high' | 'critical'
  learningOrder: number
  prerequisites: string[] // skill IDs
  estimatedTime: number // in hours
  resources: LearningResource[]
}

export interface LearningResource {
  id: string
  title: string
  type: 'course' | 'tutorial' | 'documentation' | 'project' | 'book' | 'video'
  url: string
  provider: string
  duration?: number // in minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  rating: number
  cost: number
  isFree: boolean
}

// Community Types
export interface CommunityMember {
  user: User
  currentRoadmap?: LearningRoadmap
  skills: Skill[]
  location: Location
  experience: ExperienceLevel
  isOnline: boolean
  lastActive: Date
}

export interface StudyGroup {
  id: string
  name: string
  description: string
  members: CommunityMember[]
  focusArea: SkillCategory
  meetingSchedule: MeetingSchedule[]
  maxMembers: number
  isPublic: boolean
  createdAt: Date
}

export interface MeetingSchedule {
  day: string
  time: string
  timezone: string
  frequency: 'weekly' | 'bi-weekly' | 'monthly'
}

// Progress Tracking Types
export interface ProgressEntry {
  id: string
  userId: string
  skillId: string
  proficiency: number
  timeSpent: number // in minutes
  notes: string
  date: Date
}

export interface LearningStreak {
  userId: string
  currentStreak: number
  longestStreak: number
  lastLearningDate: Date
  totalLearningDays: number
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form Types
export interface OnboardingForm {
  firstName: string
  lastName: string
  email: string
  location: {
    city: string
    state: string
    country: string
  }
  experience: ExperienceLevel
  currentSkills: string[]
  targetRole: string
  learningGoals: string[]
  timeCommitment: '5-10' | '10-20' | '20-30' | '30+'
  budget: 'free' | 'low' | 'medium' | 'high'
}
