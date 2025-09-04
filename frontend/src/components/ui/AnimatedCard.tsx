import React, { useState, useEffect } from 'react'
import { cn } from '@/utils/cn'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'glass' | 'gradient' | 'neon' | 'floating'
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'bounce-in' | 'fade-in-up'
  delay?: number
  hover?: 'lift' | 'glow' | 'scale' | 'rotate' | 'bounce'
  interactive?: boolean
  onClick?: () => void
}

export default function AnimatedCard({
  children,
  className,
  variant = 'default',
  animation = 'fade-in',
  delay = 0,
  hover = 'lift',
  interactive = false,
  onClick
}: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  const variantClasses = {
    default: 'bg-white/80 backdrop-blur-md border border-gray-200/50',
    glass: 'bg-white/60 backdrop-blur-lg border border-white/30',
    gradient: 'bg-gradient-to-br from-white/80 to-primary-50/30 backdrop-blur-md border border-primary-200/30',
    neon: 'bg-white/90 backdrop-blur-sm border border-primary-300/50 shadow-neon',
    floating: 'bg-white/70 backdrop-blur-lg border border-white/40 shadow-soft'
  }

  const animationClasses = {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-fade-in-up',
    'slide-in-left': 'animate-fade-in-left',
    'slide-in-right': 'animate-fade-in-right',
    'scale-in': 'animate-scale-in',
    'bounce-in': 'animate-bounce-in',
    'fade-in-up': 'animate-fade-in-up'
  }

  const hoverClasses = {
    lift: 'hover:transform hover:-translate-y-2 hover:shadow-xl',
    glow: 'hover:shadow-glow',
    scale: 'hover:transform hover:scale-105',
    rotate: 'hover:transform hover:rotate-1',
    bounce: 'hover:animate-bounce-gentle'
  }

  return (
    <div
      className={cn(
        'rounded-2xl p-6 shadow-soft transition-all duration-500',
        variantClasses[variant],
        animationClasses[animation],
        hoverClasses[hover],
        interactive && 'cursor-pointer',
        className
      )}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        animationDelay: `${delay}ms`
      }}

      onClick={onClick}
    >
      {children}
    </div>
  )
}

// Specialized card variants
export function FloatingCard({ children, className, delay = 0 }: Omit<AnimatedCardProps, 'variant' | 'animation' | 'hover'>) {
  return (
    <AnimatedCard
      variant="floating"
      animation="fade-in-up"
      hover="lift"
      delay={delay}
      className={cn('animate-float', className)}
    >
      {children}
    </AnimatedCard>
  )
}

export function GlowingCard({ children, className, delay = 0 }: Omit<AnimatedCardProps, 'variant' | 'animation' | 'hover'>) {
  return (
    <AnimatedCard
      variant="neon"
      animation="scale-in"
      hover="glow"
      delay={delay}
      className={cn('animate-pulse-slow', className)}
    >
      {children}
    </AnimatedCard>
  )
}

export function BouncingCard({ children, className, delay = 0 }: Omit<AnimatedCardProps, 'variant' | 'animation' | 'hover'>) {
  return (
    <AnimatedCard
      variant="default"
      animation="bounce-in"
      hover="bounce"
      delay={delay}
      className={cn('animate-bounce-gentle', className)}
    >
      {children}
    </AnimatedCard>
  )
}

// Interactive card with hover effects
export function InteractiveCard({ children, className, delay = 0 }: Omit<AnimatedCardProps, 'variant' | 'animation' | 'hover'>) {
  return (
    <AnimatedCard
      variant="glass"
      animation="fade-in-up"
      hover="scale"
      delay={delay}
      interactive
      className={cn('group', className)}
    >
      <div className="transition-all duration-300 group-hover:scale-105">
        {children}
      </div>
    </AnimatedCard>
  )
}

// Gradient card with animated background
export function GradientCard({ children, className, delay = 0 }: Omit<AnimatedCardProps, 'variant' | 'animation' | 'hover'>) {
  return (
    <AnimatedCard
      variant="gradient"
      animation="slide-in-left"
      hover="glow"
      delay={delay}
      className={cn('bg-gradient-to-br from-primary-50 via-white to-accent-50', className)}
    >
      {children}
    </AnimatedCard>
  )
}

// Card with progress indicator
export function ProgressCard({ 
  children, 
  progress = 0, 
  className, 
  delay = 0 
}: AnimatedCardProps & { progress?: number }) {
  return (
    <AnimatedCard
      variant="default"
      animation="fade-in-up"
      hover="lift"
      delay={delay}
      className={cn('relative overflow-hidden', className)}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-1000 ease-out"
           style={{ width: `${progress}%` }} />
      
      {children}
    </AnimatedCard>
  )
}

// Card with icon and title
export function IconCard({ 
  icon: Icon, 
  title, 
  description, 
  className, 
  delay = 0,
  color = 'primary'
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  className?: string
  delay?: number
  color?: 'primary' | 'accent' | 'success' | 'warning'
}) {
  const colorClasses = {
    primary: 'text-primary-600 bg-primary-100',
    accent: 'text-accent-600 bg-accent-100',
    success: 'text-emerald-600 bg-emerald-100',
    warning: 'text-amber-600 bg-amber-100'
  }

  return (
    <AnimatedCard
      variant="default"
      animation="fade-in-up"
      hover="scale"
      delay={delay}
      className={cn('text-center group', className)}
    >
      <div className={cn(
        'mx-auto h-16 w-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3',
        colorClasses[color]
      )}>
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </AnimatedCard>
  )
}
