import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PageTransition as PageTransitionUtil } from '../../utils/scrollAnimations'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayLocation, setDisplayLocation] = useState(location)

  useEffect(() => {
    if (location !== displayLocation) {
      setIsAnimating(true)
      
      // Use our modern page transition utility
      PageTransitionUtil.transitionOut().then(() => {
        setDisplayLocation(location)
        return PageTransitionUtil.transitionIn()
      }).then(() => {
        setIsAnimating(false)
      })
    }
  }, [location, displayLocation])

  return (
    <div className="relative">
      <div
        className={`page-transition ${
          isAnimating
            ? 'opacity-0 transform translate-y-4 scale-98'
            : 'opacity-100 transform translate-y-0 scale-100'
        }`}
        style={{
          willChange: 'transform, opacity',
          transition: 'all var(--timing-slow) var(--ease-out-expo)'
        }}
      >
        {children}
      </div>
    </div>
  )
}

// Enhanced page transition with different animations based on route
export function EnhancedPageTransition({ children }: PageTransitionProps) {
  const location = useLocation()
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayLocation, setDisplayLocation] = useState(location)
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right' | 'up' | 'down'>('right')

  useEffect(() => {
    if (location !== displayLocation) {
      // Determine animation direction based on route hierarchy
      const routeHierarchy = ['/', '/onboarding', '/login', '/dashboard', '/roadmap', '/market-insights', '/community', '/profile']
      const currentIndex = routeHierarchy.indexOf(displayLocation.pathname)
      const nextIndex = routeHierarchy.indexOf(location.pathname)
      
      if (nextIndex > currentIndex) {
        setAnimationDirection('right')
      } else if (nextIndex < currentIndex) {
        setAnimationDirection('left')
      } else {
        setAnimationDirection('up')
      }

      setIsAnimating(true)
      const timer = setTimeout(() => {
        setDisplayLocation(location)
        setIsAnimating(false)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [location, displayLocation])

  const getAnimationClasses = () => {
    if (!isAnimating) {
      return 'opacity-100 transform translate-x-0 translate-y-0 scale-100'
    }

    switch (animationDirection) {
      case 'left':
        return 'opacity-0 transform -translate-x-12 translate-y-2 scale-95'
      case 'right':
        return 'opacity-0 transform translate-x-12 translate-y-2 scale-95'
      case 'up':
        return 'opacity-0 transform translate-y-6 scale-95'
      case 'down':
        return 'opacity-0 transform -translate-y-6 scale-95'
      default:
        return 'opacity-0 transform translate-x-6 scale-95'
    }
  }

  return (
    <div className="relative min-h-screen">
      <div
        className={`page-transition-slide ${getAnimationClasses()}`}
        style={{
          willChange: 'transform, opacity',
          transition: 'all var(--timing-slow) var(--ease-out-expo)'
        }}
      >
        {children}
      </div>
    </div>
  )
}

// Staggered animation for page content
export function StaggeredPageTransition({ children }: PageTransitionProps) {
  const location = useLocation()
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayLocation, setDisplayLocation] = useState(location)

  useEffect(() => {
    if (location !== displayLocation) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setDisplayLocation(location)
        setIsAnimating(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [location, displayLocation])

  return (
    <div className="relative">
      <div
        className={`page-transition-scale ${
          isAnimating
            ? 'opacity-0 transform translate-y-8 scale-95'
            : 'opacity-100 transform translate-y-0 scale-100'
        }`}
        style={{
          willChange: 'transform, opacity',
          transition: 'all var(--timing-slower) var(--ease-out-expo)'
        }}
      >
        <div className="animate-slide-up">
          {children}
        </div>
      </div>
    </div>
  )
}
