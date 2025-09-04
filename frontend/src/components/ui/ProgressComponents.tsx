import React from 'react'
import { CheckCircle, Circle, Trophy, Clock } from 'lucide-react'
import { cn } from '@/utils/cn'

interface ProgressCheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
  description?: string
  disabled?: boolean
}

export function ProgressCheckbox({ 
  checked, 
  onChange, 
  label, 
  description, 
  disabled = false 
}: ProgressCheckboxProps) {
  const iconColor = checked ? 'text-emerald-500' : 'text-gray-300'
  const Icon = checked ? CheckCircle : Circle

  return (
    <div 
      className={cn(
        'flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 cursor-pointer hover:bg-gray-50',
        checked ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-gray-200',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      onClick={() => !disabled && onChange(!checked)}
    >
      <Icon className={cn('h-5 w-5 mt-0.5 flex-shrink-0', iconColor)} />
      <div className="flex-1 min-w-0">
        <div className={cn(
          'font-medium transition-colors duration-200',
          checked ? 'text-emerald-900 line-through' : 'text-gray-900'
        )}>
          {label}
        </div>
        {description && (
          <div className={cn(
            'text-sm mt-1 transition-colors duration-200',
            checked ? 'text-emerald-700' : 'text-gray-600'
          )}>
            {description}
          </div>
        )}
      </div>
      {checked && (
        <div className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
          <Trophy className="h-3 w-3" />
          Done
        </div>
      )}
    </div>
  )
}

interface ProgressBarProps {
  progress: number
  label?: string
  size?: 'sm' | 'md' | 'lg'
  showPercentage?: boolean
  color?: 'primary' | 'emerald' | 'blue' | 'purple'
  animated?: boolean
}

export function ProgressBar({ 
  progress, 
  label, 
  size = 'md', 
  showPercentage = true, 
  color = 'emerald',
  animated = true 
}: ProgressBarProps) {
  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  }

  const colorClasses = {
    primary: 'bg-primary-500',
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500'
  }

  const bgColorClasses = {
    primary: 'bg-primary-100',
    emerald: 'bg-emerald-100',
    blue: 'bg-blue-100',
    purple: 'bg-purple-100'
  }

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
          {showPercentage && (
            <span className="text-sm font-medium text-gray-900">{Math.round(progress)}%</span>
          )}
        </div>
      )}
      <div className={cn('w-full rounded-full overflow-hidden', bgColorClasses[color], sizeClasses[size])}>
        <div 
          className={cn(
            'h-full rounded-full transition-all duration-700 ease-out',
            colorClasses[color],
            animated && 'transform-gpu'
          )}
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  )
}

interface ProgressStatsProps {
  totalItems: number
  completedItems: number
  title?: string
  icon?: React.ComponentType<{ className?: string }>
}

export function ProgressStats({ totalItems, completedItems, title, icon: Icon }: ProgressStatsProps) {
  const percentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-5 w-5 text-gray-600" />}
          <h3 className="font-medium text-gray-900">{title || 'Progress'}</h3>
        </div>
        <div className="text-2xl font-bold text-gray-900">
          {completedItems}<span className="text-sm text-gray-500">/{totalItems}</span>
        </div>
      </div>
      <ProgressBar progress={percentage} showPercentage={true} />
    </div>
  )
}

interface ProgressRingProps {
  progress: number
  size?: number
  strokeWidth?: number
  color?: string
  children?: React.ReactNode
}

export function ProgressRing({ 
  progress, 
  size = 120, 
  strokeWidth = 8, 
  color = '#10b981', 
  children 
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children || (
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{Math.round(progress)}%</div>
            <div className="text-xs text-gray-500">Complete</div>
          </div>
        )}
      </div>
    </div>
  )
}

interface ProgressMilestoneProps {
  milestones: Array<{
    id: string
    title: string
    description?: string
    completed: boolean
    completedAt?: Date
  }>
  onMilestoneToggle?: (id: string, completed: boolean) => void
}

export function ProgressMilestone({ milestones, onMilestoneToggle }: ProgressMilestoneProps) {
  return (
    <div className="space-y-4">
      {milestones.map((milestone, index) => (
        <div key={milestone.id} className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            <div 
              className={cn(
                'w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-200',
                milestone.completed 
                  ? 'bg-emerald-500 border-emerald-500 text-white' 
                  : 'bg-white border-gray-300 text-gray-400 hover:border-emerald-300'
              )}
              onClick={() => onMilestoneToggle?.(milestone.id, !milestone.completed)}
            >
              {milestone.completed ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </div>
            {index < milestones.length - 1 && (
              <div className={cn(
                'w-0.5 h-8 mt-2',
                milestone.completed ? 'bg-emerald-300' : 'bg-gray-200'
              )} />
            )}
          </div>
          <div className="flex-1 min-w-0 pb-8">
            <h3 className={cn(
              'font-medium transition-colors duration-200',
              milestone.completed ? 'text-emerald-900 line-through' : 'text-gray-900'
            )}>
              {milestone.title}
            </h3>
            {milestone.description && (
              <p className={cn(
                'text-sm mt-1 transition-colors duration-200',
                milestone.completed ? 'text-emerald-700' : 'text-gray-600'
              )}>
                {milestone.description}
              </p>
            )}
            {milestone.completed && milestone.completedAt && (
              <div className="flex items-center gap-1 text-xs text-emerald-600 mt-2">
                <Clock className="h-3 w-3" />
                Completed {milestone.completedAt.toLocaleDateString()}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default {
  ProgressCheckbox,
  ProgressBar,
  ProgressStats,
  ProgressRing,
  ProgressMilestone
}
