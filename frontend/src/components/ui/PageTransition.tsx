import { ReactNode, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

interface PageTransitionProps {
  children: ReactNode
}

const transition = {
  duration: 0.52,
  ease: [0.16, 1, 0.3, 1] as const,
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 22,
    scale: 0.985,
    filter: 'blur(6px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition,
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.995,
    filter: 'blur(4px)',
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
}

function TransitionFrame({ children }: PageTransitionProps) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-[calc(100vh-9rem)] will-change-transform"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default function PageTransition({ children }: PageTransitionProps) {
  return <TransitionFrame>{children}</TransitionFrame>
}

export function EnhancedPageTransition({ children }: PageTransitionProps) {
  return <TransitionFrame>{children}</TransitionFrame>
}

export function StaggeredPageTransition({ children }: PageTransitionProps) {
  return <TransitionFrame>{children}</TransitionFrame>
}
