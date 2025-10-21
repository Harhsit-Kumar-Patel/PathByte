import React from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'accent' | 'success' | 'white'
  text?: string
  variant?: 'spinner' | 'dots' | 'pulse' | 'bounce'
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'primary', 
  text,
  variant = 'spinner' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const colorClasses = {
    primary: 'text-primary-500',
    accent: 'text-accent-500',
    success: 'text-emerald-500',
    white: 'text-white'
  }

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-2">
            <div className={`w-2 h-2 bg-current rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
            <div className={`w-2 h-2 bg-current rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
            <div className={`w-2 h-2 bg-current rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
          </div>
        )
      
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} bg-current rounded-full animate-pulse-slow`}></div>
        )
      
      case 'bounce':
        return (
          <div className={`${sizeClasses[size]} bg-current rounded-full animate-bounce-gentle`}></div>
        )
      
      default:
        return (
          <div className={`${sizeClasses[size]} animate-spin`}>
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`${colorClasses[color]} animate-fade-in`}>
        {renderSpinner()}
      </div>
      {text && (
        <p className="text-sm text-gray-600 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {text}
        </p>
      )}
    </div>
  )
}

// Enhanced loading components for different use cases
export function LoadingDots({ size = 'md', color = 'primary' }: Omit<LoadingSpinnerProps, 'variant' | 'text'>) {
  return <LoadingSpinner size={size} color={color} variant="dots" />
}

export function LoadingPulse({ size = 'md', color = 'primary' }: Omit<LoadingSpinnerProps, 'variant' | 'text'>) {
  return <LoadingSpinner size={size} color={color} variant="pulse" />
}

export function LoadingBounce({ size = 'md', color = 'primary' }: Omit<LoadingSpinnerProps, 'variant' | 'text'>) {
  return <LoadingSpinner size={size} color={color} variant="bounce" />
}

// Full page loading overlay
export function LoadingOverlay({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <LoadingSpinner size="xl" color="primary" text={text} />
      </div>
    </div>
  )
}

// Inline loading with text
export function LoadingInline({ text = 'Loading...', color = 'primary' }: { text?: string; color?: 'primary' | 'accent' | 'success' | 'white' }) {
  return (
    <div className="inline-flex items-center space-x-2">
      <LoadingSpinner size="sm" color={color} variant="dots" />
      <span className="text-sm text-gray-600">{text}</span>
    </div>
  )
}

// Button loading state
export function LoadingButton({ children, loading, ...rest }: { 
  children: React.ReactNode; 
  loading: boolean;
  // These properties are added to accept props like className, onClick, etc.
  className?: string; 
  size?: 'sm' | 'md' | 'lg' | 'xl'; 
  [key: string]: any; 
}) {
  if (!loading) return <>{children}</>
  
  return (
    // FIX: Spread the rest props here to resolve TS6133
    <div className="inline-flex items-center space-x-2" {...rest}> 
      <LoadingSpinner size="sm" color="white" variant="dots" />
      <span>Loading...</span>
    </div>
  )
}