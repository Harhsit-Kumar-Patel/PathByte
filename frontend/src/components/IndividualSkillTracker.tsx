import { useState } from 'react'
import { CheckCircle, ChevronDown, ChevronRight, FileText, Target } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useProgress } from '@/context/ProgressContext'

interface IndividualSkillTrackerProps {
  roleId: string
  yearId: string
  skillName: string
  subSkills: string[]
  isAuthenticated?: boolean
}

export default function IndividualSkillTracker({
  roleId,
  yearId,
  skillName,
  subSkills,
  isAuthenticated = true
}: IndividualSkillTrackerProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showNotes, setShowNotes] = useState<{ [key: string]: boolean }>({})
  const [notes, setNotes] = useState<{ [key: string]: string }>({})
  
  const {
    markSubSkillComplete,
    getSubSkillProgress,
    getSubSkillNotes
  } = useProgress()

  // const skillProgress = getIndividualSkillProgress(roleId, yearId, skillName)
  const completedSubSkills = subSkills.filter(subSkill => 
    getSubSkillProgress(roleId, yearId, skillName, subSkill)
  ).length
  const progressPercentage = subSkills.length > 0 ? (completedSubSkills / subSkills.length) * 100 : 0

  const handleSubSkillToggle = (subSkillName: string, completed: boolean) => {
    if (!isAuthenticated) return
    
    const currentNotes = notes[subSkillName] || getSubSkillNotes(roleId, yearId, skillName, subSkillName) || ''
    markSubSkillComplete(roleId, yearId, skillName, subSkillName, completed, currentNotes)
  }

  const handleNotesChange = (subSkillName: string, newNotes: string) => {
    setNotes(prev => ({ ...prev, [subSkillName]: newNotes }))
  }

  const handleSaveNotes = (subSkillName: string) => {
    if (!isAuthenticated) return
    
    const currentCompleted = getSubSkillProgress(roleId, yearId, skillName, subSkillName)
    const currentNotes = notes[subSkillName] || getSubSkillNotes(roleId, yearId, skillName, subSkillName) || ''
    markSubSkillComplete(roleId, yearId, skillName, subSkillName, currentCompleted, currentNotes)
    setShowNotes(prev => ({ ...prev, [subSkillName]: false }))
  }

  const toggleNotes = (subSkillName: string) => {
    setShowNotes(prev => ({ ...prev, [subSkillName]: !prev[subSkillName] }))
    if (!showNotes[subSkillName]) {
      setNotes(prev => ({ 
        ...prev, 
        [subSkillName]: getSubSkillNotes(roleId, yearId, skillName, subSkillName) || '' 
      }))
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Skill Header */}
      <div 
        className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {isExpanded ? (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronRight className="h-5 w-5 text-gray-500" />
            )}
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900">{skillName}</h3>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Progress Stats */}
            <div className="text-sm text-gray-600">
              <span className="font-medium">{completedSubSkills}</span>
              <span className="text-gray-400">/{subSkills.length}</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            
            {/* Progress Percentage */}
            <div className="text-sm font-medium text-gray-700 w-12 text-right">
              {Math.round(progressPercentage)}%
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="p-4 space-y-3">
            {subSkills.map((subSkill, index) => {
              const isCompleted = getSubSkillProgress(roleId, yearId, skillName, subSkill)
              const hasNotes = getSubSkillNotes(roleId, yearId, skillName, subSkill)
              
              return (
                <div key={index} className="bg-white rounded-lg p-3 border border-gray-100">
                  <div className="flex items-center gap-3">
                    {/* Checkbox */}
                    <button
                      onClick={() => handleSubSkillToggle(subSkill, !isCompleted)}
                      disabled={!isAuthenticated}
                      className={cn(
                        "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200",
                        isCompleted 
                          ? "bg-green-500 border-green-500 text-white" 
                          : "border-gray-300 hover:border-blue-500",
                        !isAuthenticated && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      {isCompleted && <CheckCircle className="h-4 w-4" />}
                    </button>

                    {/* Sub-skill Name */}
                    <div className="flex-1">
                      <p className={cn(
                        "text-sm font-medium transition-colors",
                        isCompleted ? "text-green-700 line-through" : "text-gray-900"
                      )}>
                        {subSkill}
                      </p>
                    </div>

                    {/* Notes Button */}
                    <button
                      onClick={() => toggleNotes(subSkill)}
                      disabled={!isAuthenticated}
                      className={cn(
                        "p-1 rounded-md transition-colors",
                        hasNotes || showNotes[subSkill] 
                          ? "text-blue-600 bg-blue-50" 
                          : "text-gray-400 hover:text-gray-600 hover:bg-gray-100",
                        !isAuthenticated && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      <FileText className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Notes Section */}
                  {showNotes[subSkill] && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <textarea
                        value={notes[subSkill] || getSubSkillNotes(roleId, yearId, skillName, subSkill) || ''}
                        onChange={(e) => handleNotesChange(subSkill, e.target.value)}
                        placeholder="Add notes about your progress or learning experience..."
                        className="w-full p-2 text-sm border border-gray-200 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={2}
                        disabled={!isAuthenticated}
                      />
                      <div className="flex justify-end gap-2 mt-2">
                        <button
                          onClick={() => setShowNotes(prev => ({ ...prev, [subSkill]: false }))}
                          className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleSaveNotes(subSkill)}
                          disabled={!isAuthenticated}
                          className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Display existing notes */}
                  {hasNotes && !showNotes[subSkill] && (
                    <div className="mt-2 p-2 bg-blue-50 rounded-md">
                      <p className="text-sm text-blue-800">
                        {getSubSkillNotes(roleId, yearId, skillName, subSkill)}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
