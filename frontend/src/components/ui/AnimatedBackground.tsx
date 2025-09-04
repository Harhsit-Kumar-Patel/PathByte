import React, { useEffect, useRef } from 'react'
import { cn } from '@/utils/cn'

interface AnimatedBackgroundProps {
  variant?: 'particles' | 'gradient' | 'floating' | 'mesh' | 'stars'
  className?: string
  children?: React.ReactNode
  intensity?: 'low' | 'medium' | 'high'
}

export default function AnimatedBackground({ 
  variant = 'particles', 
  className, 
  children,
  intensity = 'medium'
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (variant === 'particles' && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const particles: Array<{
        x: number
        y: number
        vx: number
        vy: number
        size: number
        opacity: number
        color: string
      }> = []

      const intensityMultiplier = {
        low: 0.5,
        medium: 1,
        high: 2
      }[intensity]

      const particleCount = Math.floor(50 * intensityMultiplier)

      // Initialize particles
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
        })
      }

      function animate() {
        if (!ctx) return
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particles.forEach(particle => {
          // Update position
          particle.x += particle.vx
          particle.y += particle.vy

          // Wrap around edges
          if (particle.x < 0) particle.x = canvas.width
          if (particle.x > canvas.width) particle.x = 0
          if (particle.y < 0) particle.y = canvas.height
          if (particle.y > canvas.height) particle.y = 0

          // Draw particle
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = particle.color
          ctx.globalAlpha = particle.opacity
          ctx.fill()

          // Draw connections
          particles.forEach(otherParticle => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            )
            
            if (distance < 100) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = particle.color
              ctx.globalAlpha = (100 - distance) / 100 * 0.1
              ctx.lineWidth = 1
              ctx.stroke()
            }
          })
        })

        requestAnimationFrame(animate)
      }

      animate()

      const handleResize = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [variant, intensity])

  const renderBackground = () => {
    switch (variant) {
      case 'particles':
        return (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
          />
        )
      
      case 'gradient':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 animate-gradient-xy" />
        )
      
      case 'floating':
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-200 to-accent-200 rounded-full opacity-20 animate-float" />
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-accent-200 to-emerald-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-emerald-200 to-amber-200 rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-amber-200 to-primary-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '3s' }} />
          </div>
        )
      
      case 'mesh':
        return (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse-slow" />
        )
      
      case 'stars':
        return (
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {renderBackground()}
      {children}
    </div>
  )
}

// Specialized background components
export function ParticleBackground({ className, children, intensity }: Omit<AnimatedBackgroundProps, 'variant'>) {
  return (
    <AnimatedBackground variant="particles" className={className} intensity={intensity}>
      {children}
    </AnimatedBackground>
  )
}

export function GradientBackground({ className, children }: Omit<AnimatedBackgroundProps, 'variant' | 'intensity'>) {
  return (
    <AnimatedBackground variant="gradient" className={className}>
      {children}
    </AnimatedBackground>
  )
}

export function FloatingBackground({ className, children }: Omit<AnimatedBackgroundProps, 'variant' | 'intensity'>) {
  return (
    <AnimatedBackground variant="floating" className={className}>
      {children}
    </AnimatedBackground>
  )
}

export function StarBackground({ className, children }: Omit<AnimatedBackgroundProps, 'variant' | 'intensity'>) {
  return (
    <AnimatedBackground variant="stars" className={className}>
      {children}
    </AnimatedBackground>
  )
}

// Animated gradient text background
export function AnimatedGradientText({ 
  children, 
  className,
  colors = ['from-primary-500', 'via-accent-500', 'to-emerald-500']
}: {
  children: React.ReactNode
  className?: string
  colors?: string[]
}) {
  return (
    <div className={cn(
      'bg-gradient-to-r bg-clip-text text-transparent',
      colors.join(' '),
      'animate-gradient-x',
      className
    )}>
      {children}
    </div>
  )
}

// Floating elements with different animations
export function FloatingElement({ 
  children, 
  className,
  animation = 'float',
  delay = 0
}: {
  children: React.ReactNode
  className?: string
  animation?: 'float' | 'bounce-gentle' | 'bounce-subtle' | 'wiggle'
  delay?: number
}) {
  return (
    <div 
      className={cn(
        'absolute',
        `animate-${animation}`,
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

// Animated border with gradient
export function AnimatedBorder({ 
  children, 
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('relative', className)}>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-white rounded-xl p-[2px]">
        <div className="bg-white rounded-xl p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
