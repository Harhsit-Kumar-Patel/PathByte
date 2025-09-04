import { useState, useEffect, useRef } from 'react'
import { Search, X, TrendingUp, Clock, ArrowRight } from 'lucide-react'

interface EnhancedSearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
  className?: string
}

const popularSearches = [
  'Frontend Developer',
  'Data Scientist',
  'DevOps Engineer',
  'Product Manager',
  'UX Designer',
  'Machine Learning Engineer'
]

const recentSearches = [
  'React Developer',
  'Python Developer',
  'Cloud Engineer',
  'Full Stack Developer'
]

export default function EnhancedSearchBar({ 
  onSearch, 
  placeholder = "Search for skills, roles, or learning paths...",
  className = ""
}: EnhancedSearchBarProps) {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Keyboard shortcut (Ctrl+K / Cmd+K) to focus the input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
        setIsFocused(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      setIsLoading(true)
      // Simulate search delay for better UX
      setTimeout(() => {
        onSearch(query.trim())
        setIsLoading(false)
        setShowSuggestions(false)
        setIsFocused(false)
      }, 300)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    setShowSuggestions(false)
    onSearch(suggestion)
  }

  const clearQuery = () => {
    setQuery('')
    inputRef.current?.focus()
  }

  return (
    <div className={`relative w-full max-w-2xl mx-auto ${className}`} ref={containerRef}>
      {/* Keyboard shortcut indicator */}
      <div className="absolute -top-2 right-0">
        <div className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-slate-500 bg-white/80 backdrop-blur-sm rounded-md border border-slate-200/50 shadow-sm transition-all duration-300 hover:scale-105">
          <span className="hidden sm:inline">Press</span>
          <kbd className="px-1.5 py-0.5 text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded transition-all duration-300 hover:bg-slate-200">
            {navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}K
          </kbd>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <div className={`relative transition-all duration-500 ease-out ${
          isFocused 
            ? 'scale-105 shadow-2xl' 
            : 'scale-100 shadow-lg'
        }`}>
          {/* Main search input with proper icon spacing */}
          <div className="relative flex items-center">
            {/* Search icon - positioned with proper spacing */}
            <div className="absolute left-4 z-10 flex items-center justify-center w-6 h-6 pointer-events-none">
              <Search className={`h-5 w-5 transition-all duration-300 ${
                isFocused ? 'text-blue-500 scale-110' : 'text-slate-400'
              }`} />
            </div>
            
            {/* Input field with explicit padding to prevent overlap */}
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => {
                setIsFocused(true)
                setShowSuggestions(true)
              }}
              onBlur={() => setIsFocused(false)}
              placeholder={placeholder}
              className="w-full py-4 pl-16 pr-24 text-lg rounded-2xl font-medium transition-all duration-300 border-2 border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 shadow-lg hover:shadow-xl focus:shadow-2xl"
              style={{
                paddingLeft: '4rem', /* 64px - ensures text starts after icon */
                paddingRight: '6rem'  /* 96px - ensures text doesn't overlap buttons */
              }}
            />
            
            {/* Clear button - positioned with proper spacing */}
            {query && (
              <button
                type="button"
                onClick={clearQuery}
                className="absolute right-24 top-1/2 transform -translate-y-1/2 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-all duration-300 hover:scale-110 z-10"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            
            {/* Search button - positioned with proper spacing */}
            <button
              type="submit"
              disabled={!query.trim() || isLoading}
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-xl font-medium transition-all duration-300 z-10 ${
                query.trim() && !isLoading
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-0.5'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Suggestions dropdown */}
        {showSuggestions && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm border-2 border-slate-200 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 animate-fade-in-up z-50">
            {/* Popular searches */}
            <div className="p-4 border-b border-slate-100">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-slate-700">Popular Searches</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {popularSearches.map((search, index) => (
                  <button
                    key={search}
                    type="button"
                    onClick={() => handleSuggestionClick(search)}
                    className="text-left p-2 rounded-lg text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:scale-105 hover:translate-x-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent searches */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">Recent Searches</span>
              </div>
              <div className="space-y-1">
                {recentSearches.map((search, index) => (
                  <button
                    key={search}
                    type="button"
                    onClick={() => handleSuggestionClick(search)}
                    className="w-full text-left p-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition-all duration-200 hover:scale-105 hover:translate-x-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </form>

      {/* Search tips */}
      <div className="mt-4 text-center">
        <p className="text-sm text-slate-500 transition-all duration-300 hover:text-slate-600">
          💡 Try searching for specific skills like "React", "Python", or "AWS"
        </p>
      </div>
    </div>
  )
}
