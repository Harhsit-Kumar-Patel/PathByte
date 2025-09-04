import { TrendingUp, CheckCircle, Clock, BookOpen } from 'lucide-react'
import { useProgress } from '@/context/ProgressContext'

interface SkillProgressOverviewProps {
  roleId: string
  yearId: string
  detailedSkills: { [skillName: string]: string[] }
}

export default function SkillProgressOverview({
  roleId,
  yearId,
  detailedSkills
}: SkillProgressOverviewProps) {
  const { getIndividualSkillProgress } = useProgress()

  // Calculate overall statistics
  const skillStats = Object.entries(detailedSkills).map(([skillName, subSkills]) => {
    const progress = getIndividualSkillProgress(roleId, yearId, skillName)
    const completedSubSkills = progress?.subSkills ? 
      Object.values(progress.subSkills).filter(subSkill => subSkill.completed).length : 0
    const totalSubSkills = subSkills.length
    const progressPercentage = totalSubSkills > 0 ? (completedSubSkills / totalSubSkills) * 100 : 0

    return {
      skillName,
      completedSubSkills,
      totalSubSkills,
      progressPercentage,
      lastUpdated: progress?.lastUpdated
    }
  })

  const totalSubSkills = skillStats.reduce((sum, skill) => sum + skill.totalSubSkills, 0)
  const totalCompletedSubSkills = skillStats.reduce((sum, skill) => sum + skill.completedSubSkills, 0)
  const overallProgress = totalSubSkills > 0 ? (totalCompletedSubSkills / totalSubSkills) * 100 : 0

  const completedSkills = skillStats.filter(skill => skill.progressPercentage === 100).length
  const inProgressSkills = skillStats.filter(skill => skill.progressPercentage > 0 && skill.progressPercentage < 100).length
  const notStartedSkills = skillStats.filter(skill => skill.progressPercentage === 0).length

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-6 w-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">Skill Progress Overview</h3>
      </div>

      {/* Overall Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Progress</span>
          <span className="text-sm font-medium text-gray-900">
            {totalCompletedSubSkills}/{totalSubSkills} sub-skills
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
        <div className="text-right mt-1">
          <span className="text-lg font-bold text-gray-900">{Math.round(overallProgress)}%</span>
        </div>
      </div>

      {/* Skill Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-green-800">Completed</span>
          </div>
          <div className="text-2xl font-bold text-green-900">{completedSkills}</div>
          <div className="text-xs text-green-700">skills mastered</div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">In Progress</span>
          </div>
          <div className="text-2xl font-bold text-blue-900">{inProgressSkills}</div>
          <div className="text-xs text-blue-700">skills learning</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-800">Not Started</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{notStartedSkills}</div>
          <div className="text-xs text-gray-700">skills pending</div>
        </div>
      </div>

      {/* Individual Skill Progress */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Individual Skill Progress</h4>
        {skillStats.map((skill) => (
          <div key={skill.skillName} className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900">{skill.skillName}</span>
                <span className="text-xs text-gray-500">
                  {skill.completedSubSkills}/{skill.totalSubSkills}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    skill.progressPercentage === 100 
                      ? 'bg-green-500' 
                      : skill.progressPercentage > 0 
                        ? 'bg-blue-500' 
                        : 'bg-gray-300'
                  }`}
                  style={{ width: `${skill.progressPercentage}%` }}
                />
              </div>
            </div>
            <div className="text-sm font-medium text-gray-700 w-12 text-right">
              {Math.round(skill.progressPercentage)}%
            </div>
          </div>
        ))}
      </div>

      {/* Last Updated */}
      {skillStats.some(skill => skill.lastUpdated) && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Last updated: {new Date(Math.max(...skillStats.filter(s => s.lastUpdated).map(s => new Date(s.lastUpdated!).getTime()))).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  )
}
