import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { api } from '@/lib/api'
import { useAuth } from './AuthContext'
import { skillsData } from '@/data/skillsData'

export interface ProgressItem {
  id: string
  type: 'skill' | 'project' | 'resource'
  roleId: string
  yearId: string
  itemIndex: number
  completed: boolean
  completedAt?: Date
  notes?: string
}

export interface IndividualSkillProgress {
  skillName: string
  subSkills: {
    [subSkillName: string]: {
      completed: boolean
      completedAt?: Date
      notes?: string
    }
  }
  overallProgress: number // 0-100
  lastUpdated: Date
}

export interface RoleProgress {
  roleId: string
  yearProgress: {
    [yearId: string]: {
      skills: boolean[]
      projects: boolean[]
      freeResources: boolean[]
      paidResources: boolean[]
      individualSkills: {
        [skillName: string]: IndividualSkillProgress
      }
      completionPercentage: number
      lastUpdated: Date
    }
  }
  overallProgress: number
}

interface ProgressContextType {
  userProgress: RoleProgress[]
  loading: boolean
  markItemComplete: (roleId: string, yearId: string, type: 'skills' | 'projects' | 'freeResources' | 'paidResources', index: number, completed: boolean) => Promise<void>
  getItemProgress: (roleId: string, yearId: string, type: 'skills' | 'projects' | 'freeResources' | 'paidResources', index: number) => boolean
  getRoleProgress: (roleId: string) => RoleProgress | undefined
  getYearProgress: (roleId: string, yearId: string) => number
  resetProgress: (roleId: string) => void
  exportProgress: () => string
  importProgress: (data: string) => void
  // Individual skill tracking methods
  markSubSkillComplete: (roleId: string, yearId: string, skillName: string, subSkillName: string, completed: boolean, notes?: string) => void
  getSubSkillProgress: (roleId: string, yearId: string, skillName: string, subSkillName: string) => boolean
  getIndividualSkillProgress: (roleId: string, yearId: string, skillName: string) => IndividualSkillProgress | undefined
  getSubSkillNotes: (roleId: string, yearId: string, skillName: string, subSkillName: string) => string | undefined
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

export function useProgress() {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}

// Helper function to get actual item counts from skillsData
const getActualItemCounts = (roleId: string, yearId: string) => {
  const skillData = skillsData[roleId]
  if (!skillData?.roadmap[yearId]) {
    return { skills: 0, projects: 0, freeResources: 0, paidResources: 0 }
  }
  
  const yearData = skillData.roadmap[yearId]
  return {
    skills: yearData.skills?.length || 0,
    projects: yearData.projects?.length || 0,
    freeResources: yearData.freeResources?.length || 0,
    paidResources: yearData.paidResources?.length || 0
  }
}

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [userProgress, setUserProgress] = useState<RoleProgress[]>([])
  const [loading, setLoading] = useState(true)
  const { user, token } = useAuth()

  // Load progress from database when user is authenticated
  const loadProgressFromDatabase = useCallback(async () => {
    if (!user || !token) {
      setLoading(false)
      return
    }

    try {
      const response = await api.get('/api/roadmap-progress', {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      if (response.data.success) {
        // Recalculate progress percentages to ensure accuracy
        const recalculatedProgress = response.data.data.map((role: any) => {
          const recalculatedYearProgress: any = {}
          
          Object.entries(role.yearProgress).forEach(([yearId, yearData]: [string, any]) => {
            // Recalculate completion percentage for this year
            const actualCounts = getActualItemCounts(role.roleId, yearId)
            const totalItems = actualCounts.skills + actualCounts.projects + actualCounts.freeResources + actualCounts.paidResources
            
            const completedItems = ['skills', 'projects', 'freeResources', 'paidResources'].reduce((total, t) => {
              const items = yearData[t] as boolean[]
              return total + (items?.filter(Boolean).length || 0)
            }, 0)
            
            const completionPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0
            
            recalculatedYearProgress[yearId] = {
              ...yearData,
              completionPercentage
            }
          })
          
          // Recalculate overall role progress
          const allYears = Object.values(recalculatedYearProgress) as any[]
          const overallProgress = allYears.reduce((sum, year) => sum + year.completionPercentage, 0) / allYears.length
          
          return {
            ...role,
            yearProgress: recalculatedYearProgress,
            overallProgress
          }
        })
        
        setUserProgress(recalculatedProgress)
      }
    } catch (error) {
      console.error('Failed to load progress from database:', error)
      // Fallback to localStorage if database fails
      const savedProgress = localStorage.getItem('pathbyte_progress')
      if (savedProgress) {
        try {
          const parsed = JSON.parse(savedProgress)
          setUserProgress(parsed)
        } catch (parseError) {
          console.error('Failed to load progress from localStorage:', parseError)
        }
      }
    } finally {
      setLoading(false)
    }
  }, [user, token])

  // Load progress when user changes
  useEffect(() => {
    loadProgressFromDatabase()
  }, [loadProgressFromDatabase])

  // Save progress to database whenever it changes (debounced)
  useEffect(() => {
    if (!user || !token || loading) return

    const timeoutId = setTimeout(async () => {
      try {
        // Save to database
        await api.put('/api/roadmap-progress', userProgress, {
          headers: { Authorization: `Bearer ${token}` }
        })
      } catch (error) {
        console.error('Failed to save progress to database:', error)
        // Fallback to localStorage
        localStorage.setItem('pathbyte_progress', JSON.stringify(userProgress))
      }
    }, 1000) // Debounce for 1 second

    return () => clearTimeout(timeoutId)
  }, [userProgress, user, token, loading])

  const markItemComplete = useCallback(async (roleId: string, yearId: string, type: 'skills' | 'projects' | 'freeResources' | 'paidResources', index: number, completed: boolean) => {
    // Update local state immediately for responsive UI
    setUserProgress(prev => {
      const roleIndex = prev.findIndex(r => r.roleId === roleId)
      let newProgress = [...prev]

      if (roleIndex === -1) {
        // Create new role progress
        const newRole: RoleProgress = {
          roleId,
          yearProgress: {
            [yearId]: {
              skills: [],
              projects: [],
              freeResources: [],
              paidResources: [],
              individualSkills: {},
              completionPercentage: 0,
              lastUpdated: new Date()
            }
          },
          overallProgress: 0
        }
        newProgress.push(newRole)
      }

      const currentRoleIndex = newProgress.findIndex(r => r.roleId === roleId)
      const currentRole = newProgress[currentRoleIndex]

      if (!currentRole.yearProgress[yearId]) {
        currentRole.yearProgress[yearId] = {
          skills: [],
          projects: [],
          freeResources: [],
          paidResources: [],
          individualSkills: {},
          completionPercentage: 0,
          lastUpdated: new Date()
        }
      }

      // Update the specific item
      const yearData = currentRole.yearProgress[yearId]
      if (!yearData[type]) {
        yearData[type] = []
      }

      // Ensure array is large enough
      while (yearData[type].length <= index) {
        yearData[type].push(false)
      }

      yearData[type][index] = completed
      yearData.lastUpdated = new Date()

      // Calculate completion percentage for this year using actual item counts
      const actualCounts = getActualItemCounts(roleId, yearId)
      
      const totalItems = actualCounts.skills + actualCounts.projects + actualCounts.freeResources + actualCounts.paidResources

      const completedItems = ['skills', 'projects', 'freeResources', 'paidResources'].reduce((total, t) => {
        const items = yearData[t as keyof typeof yearData] as boolean[]
        return total + (items?.filter(Boolean).length || 0)
      }, 0)

      yearData.completionPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0

      // Calculate overall role progress
      const allYears = Object.values(currentRole.yearProgress)
      const overallCompletion = allYears.reduce((sum, year) => sum + year.completionPercentage, 0) / allYears.length
      currentRole.overallProgress = overallCompletion

      return newProgress
    })

    // Save to database immediately
    if (user && token) {
      try {
        await api.put(`/api/roadmap-progress/${roleId}/${yearId}/${type}/${index}`, {
          completed
        }, {
          headers: { Authorization: `Bearer ${token}` }
        })
      } catch (error) {
        console.error('Failed to save item progress to database:', error)
      }
    }
  }, [user, token])

  const getItemProgress = (roleId: string, yearId: string, type: 'skills' | 'projects' | 'freeResources' | 'paidResources', index: number): boolean => {
    const roleProgress = userProgress.find(r => r.roleId === roleId)
    if (!roleProgress?.yearProgress[yearId]) return false
    
    const items = roleProgress.yearProgress[yearId][type]
    return items?.[index] || false
  }

  const getRoleProgress = (roleId: string): RoleProgress | undefined => {
    return userProgress.find(r => r.roleId === roleId)
  }

  const getYearProgress = (roleId: string, yearId: string): number => {
    const roleProgress = userProgress.find(r => r.roleId === roleId)
    return roleProgress?.yearProgress[yearId]?.completionPercentage || 0
  }

  const resetProgress = (roleId: string) => {
    setUserProgress(prev => prev.filter(r => r.roleId !== roleId))
  }

  const exportProgress = (): string => {
    return JSON.stringify(userProgress, null, 2)
  }

  const importProgress = (data: string) => {
    try {
      const parsed = JSON.parse(data)
      setUserProgress(parsed)
    } catch (error) {
      console.error('Failed to import progress:', error)
      throw new Error('Invalid progress data format')
    }
  }

  // Individual skill tracking methods
  const markSubSkillComplete = (roleId: string, yearId: string, skillName: string, subSkillName: string, completed: boolean, notes?: string) => {
    setUserProgress(prev => {
      const roleIndex = prev.findIndex(r => r.roleId === roleId)
      let newProgress = [...prev]

      if (roleIndex === -1) {
        // Create new role progress
        const newRole: RoleProgress = {
          roleId,
          yearProgress: {
            [yearId]: {
              skills: [],
              projects: [],
              freeResources: [],
              paidResources: [],
              individualSkills: {},
              completionPercentage: 0,
              lastUpdated: new Date()
            }
          },
          overallProgress: 0
        }
        newProgress.push(newRole)
      }

      const currentRoleIndex = newProgress.findIndex(r => r.roleId === roleId)
      const currentRole = newProgress[currentRoleIndex]

      if (!currentRole.yearProgress[yearId]) {
        currentRole.yearProgress[yearId] = {
          skills: [],
          projects: [],
          freeResources: [],
          paidResources: [],
          individualSkills: {},
          completionPercentage: 0,
          lastUpdated: new Date()
        }
      }

      const yearData = currentRole.yearProgress[yearId]

      // Initialize individual skill if it doesn't exist
      if (!yearData.individualSkills[skillName]) {
        yearData.individualSkills[skillName] = {
          skillName,
          subSkills: {},
          overallProgress: 0,
          lastUpdated: new Date()
        }
      }

      const skillProgress = yearData.individualSkills[skillName]

      // Update sub-skill
      skillProgress.subSkills[subSkillName] = {
        completed,
        completedAt: completed ? new Date() : undefined,
        notes: notes || skillProgress.subSkills[subSkillName]?.notes
      }

      // Calculate overall progress for this skill
      const subSkillNames = Object.keys(skillProgress.subSkills)
      const completedSubSkills = subSkillNames.filter(name => skillProgress.subSkills[name].completed).length
      skillProgress.overallProgress = subSkillNames.length > 0 ? (completedSubSkills / subSkillNames.length) * 100 : 0
      skillProgress.lastUpdated = new Date()

      yearData.lastUpdated = new Date()

      // Recalculate year completion percentage using actual item counts
      const actualCounts = getActualItemCounts(roleId, yearId)
      
      const totalItems = actualCounts.skills + actualCounts.projects + actualCounts.freeResources + actualCounts.paidResources

      const completedItems = ['skills', 'projects', 'freeResources', 'paidResources'].reduce((total, t) => {
        const items = yearData[t as keyof typeof yearData] as boolean[]
        return total + (items?.filter(Boolean).length || 0)
      }, 0)

      yearData.completionPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0

      // Calculate overall role progress
      const allYears = Object.values(currentRole.yearProgress)
      const overallCompletion = allYears.reduce((sum, year) => sum + year.completionPercentage, 0) / allYears.length
      currentRole.overallProgress = overallCompletion

      return newProgress
    })
  }

  const getSubSkillProgress = (roleId: string, yearId: string, skillName: string, subSkillName: string): boolean => {
    const roleProgress = userProgress.find(r => r.roleId === roleId)
    if (!roleProgress?.yearProgress[yearId]?.individualSkills[skillName]) return false
    
    return roleProgress.yearProgress[yearId].individualSkills[skillName].subSkills[subSkillName]?.completed || false
  }

  const getIndividualSkillProgress = (roleId: string, yearId: string, skillName: string): IndividualSkillProgress | undefined => {
    const roleProgress = userProgress.find(r => r.roleId === roleId)
    return roleProgress?.yearProgress[yearId]?.individualSkills[skillName]
  }

  const getSubSkillNotes = (roleId: string, yearId: string, skillName: string, subSkillName: string): string | undefined => {
    const roleProgress = userProgress.find(r => r.roleId === roleId)
    if (!roleProgress?.yearProgress[yearId]?.individualSkills[skillName]) return undefined
    
    return roleProgress.yearProgress[yearId].individualSkills[skillName].subSkills[subSkillName]?.notes
  }

  return (
    <ProgressContext.Provider value={{
      userProgress,
      loading,
      markItemComplete,
      getItemProgress,
      getRoleProgress,
      getYearProgress,
      resetProgress,
      exportProgress,
      importProgress,
      markSubSkillComplete,
      getSubSkillProgress,
      getIndividualSkillProgress,
      getSubSkillNotes
    }}>
      {children}
    </ProgressContext.Provider>
  )
}
