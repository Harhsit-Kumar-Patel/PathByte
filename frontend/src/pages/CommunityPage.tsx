import { useState, useEffect } from 'react'
import { 
  Search,
  MessageSquare, 
  BookOpen, 
  Trophy,
  RefreshCw,
  ExternalLink,
  Globe
} from 'lucide-react'
import ExternalCommunityPost from '@/components/ui/ExternalCommunityPost'
import { 
  ExternalPost, 
  fetchAllExternalPosts, 
  getCommunitySources,
  CommunitySource 
} from '@/lib/externalCommunity'

export default function CommunityPage() {
  const [posts, setPosts] = useState<ExternalPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<ExternalPost[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedSource, setSelectedSource] = useState<string>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'trending'>('trending')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [likedPosts, setLikedPosts] = useState<string[]>([])
  const [bookmarkedPosts, setBookmarkedPosts] = useState<string[]>([])
  const [sources, setSources] = useState<CommunitySource[]>([])
  const [autoRefresh, setAutoRefresh] = useState(false)
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date())

  // Load external community posts
  useEffect(() => {
    loadExternalPosts()
  }, [])

  // Auto-refresh functionality
  useEffect(() => {
    if (!autoRefresh) return

    const interval = setInterval(() => {
      loadExternalPosts()
    }, 60000) // Refresh every minute

    return () => clearInterval(interval)
  }, [autoRefresh])

  const loadExternalPosts = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const externalPosts = await fetchAllExternalPosts(50) // Increased limit for more variety
      setPosts(externalPosts)
      setFilteredPosts(externalPosts)
      setLastRefresh(new Date())
      
      // Update source counts
      const updatedSources = getCommunitySources().map(source => ({
        ...source,
        postCount: externalPosts.filter(post => 
          source.name.toLowerCase().replace(/\s+/g, '').replace('.', '') === post.source ||
          (source.name === 'Stack Overflow' && post.source === 'stackoverflow') ||
          (source.name === 'Hacker News' && post.source === 'hackernews')
        ).length
      }))
      setSources(updatedSources)
    } catch (err) {
      setError('Failed to load community posts. Please try again.')
      console.error('Error loading external posts:', err)
    } finally {
      setLoading(false)
    }
  }

  // Filter and sort posts
  useEffect(() => {
    let filtered = posts

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(post => post.type === selectedType)
    }

    // Filter by source
    if (selectedSource !== 'all') {
      filtered = filtered.filter(post => post.source === selectedSource)
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(post => post.difficulty === selectedDifficulty)
    }

    // Filter by programming language
    if (selectedLanguage !== 'all') {
      filtered = filtered.filter(post => post.programmingLanguage === selectedLanguage)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (post.programmingLanguage && post.programmingLanguage.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.likes - a.likes
        case 'trending':
          return b.engagement - a.engagement
        case 'recent':
        default:
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      }
    })

    setFilteredPosts(filtered)
  }, [posts, searchTerm, selectedType, selectedSource, selectedDifficulty, selectedLanguage, sortBy])

  const handleLike = (postId: string) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    )
  }

  const handleBookmark = (postId: string) => {
    setBookmarkedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    )
  }

  const handleShare = (postId: string) => {
    const post = posts.find(p => p.id === postId)
    if (post) {
      navigator.clipboard.writeText(post.url)
      alert('Post link copied to clipboard!')
    }
  }

  const getSourceIcon = (sourceName: string) => {
    switch (sourceName.toLowerCase()) {
      case 'reddit': return '📱'
      case 'stack overflow': return '💬'
      case 'github': return '🐙'
      default: return '🌐'
    }
  }

  const getSourceColor = (sourceName: string) => {
    switch (sourceName.toLowerCase()) {
      case 'reddit': return 'bg-orange-500'
      case 'stack overflow': return 'bg-orange-500'
      case 'github': return 'bg-gray-500'
      default: return 'bg-blue-500'
    }
  }

  const postTypes = [
    { value: 'all', label: 'All Posts', icon: MessageSquare, count: posts.length },
    { value: 'discussion', label: 'Discussions', icon: MessageSquare, count: posts.filter(p => p.type === 'discussion').length },
    { value: 'question', label: 'Questions', icon: MessageSquare, count: posts.filter(p => p.type === 'question').length },
    { value: 'resource', label: 'Resources', icon: BookOpen, count: posts.filter(p => p.type === 'resource').length },
    { value: 'achievement', label: 'Achievements', icon: Trophy, count: posts.filter(p => p.type === 'achievement').length }
  ]

  const sourceFilters = [
    { value: 'all', label: 'All Sources', count: posts.length },
    { value: 'reddit', label: 'Reddit', count: posts.filter(p => p.source === 'reddit').length },
    { value: 'stackoverflow', label: 'Stack Overflow', count: posts.filter(p => p.source === 'stackoverflow').length },
    { value: 'github', label: 'GitHub', count: posts.filter(p => p.source === 'github').length },
    { value: 'hackernews', label: 'Hacker News', count: posts.filter(p => p.source === 'hackernews').length },

    { value: 'discord', label: 'Discord', count: posts.filter(p => p.source === 'discord').length }
  ]

  const difficultyFilters = [
    { value: 'all', label: 'All Levels', count: posts.length },
    { value: 'beginner', label: 'Beginner', count: posts.filter(p => p.difficulty === 'beginner').length },
    { value: 'intermediate', label: 'Intermediate', count: posts.filter(p => p.difficulty === 'intermediate').length },
    { value: 'advanced', label: 'Advanced', count: posts.filter(p => p.difficulty === 'advanced').length }
  ]

  const languageFilters = [
    { value: 'all', label: 'All Languages', count: posts.length },
    { value: 'javascript', label: 'JavaScript', count: posts.filter(p => p.programmingLanguage === 'javascript').length },
    { value: 'python', label: 'Python', count: posts.filter(p => p.programmingLanguage === 'python').length },
    { value: 'typescript', label: 'TypeScript', count: posts.filter(p => p.programmingLanguage === 'typescript').length },
    { value: 'react', label: 'React', count: posts.filter(p => p.programmingLanguage === 'react').length }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            External Developer Communities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover real discussions, questions, and resources from Reddit, Stack Overflow, and GitHub developer communities.
          </p>
        </div>

        {/* Community Sources Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8 stagger-animation">
          {sources.map((source, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-bounce-in">
              <div className={`w-10 h-10 ${getSourceColor(source.name)} rounded-lg flex items-center justify-center mx-auto mb-2 transition-transform hover:rotate-12`}>
                <span className="text-white text-lg">{getSourceIcon(source.name)}</span>
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1 transition-colors">{source.postCount}</div>
              <div className="text-xs text-gray-600 mb-1">{source.name}</div>
              <p className="text-xs text-gray-500 mb-2">{source.description}</p>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-primary-600 hover:text-primary-700 text-xs transition-all duration-200 hover:scale-110"
              >
                <ExternalLink className="h-3 w-3" />
                <span>Visit</span>
              </a>
            </div>
          ))}
        </div>

        {/* Refresh Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={loadExternalPosts}
                disabled={loading}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
              >
                <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
                <span>{loading ? 'Loading...' : 'Refresh Posts'}</span>
              </button>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="autoRefresh"
                  checked={autoRefresh}
                  onChange={(e) => setAutoRefresh(e.target.checked)}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="autoRefresh" className="text-sm text-gray-700">
                  Auto-refresh every minute
                </label>
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              Last updated: {lastRefresh.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search posts, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="trending">Most Trending</option>
              <option value="popular">Most Popular</option>
              <option value="recent">Most Recent</option>
            </select>
          </div>

          {/* Post Type Filters */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Post Types:</h4>
            <div className="flex flex-wrap gap-3">
              {postTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    selectedType === type.value
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <type.icon className="h-4 w-4" />
                  <span>{type.label}</span>
                  <span className="bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-xs">
                    {type.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Source Filters */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Sources:</h4>
            <div className="flex flex-wrap gap-2">
              {sourceFilters.map((source) => (
                <button
                  key={source.value}
                  onClick={() => setSelectedSource(source.value)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors text-sm ${
                    selectedSource === source.value
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Globe className="h-3 w-3" />
                  <span>{source.label}</span>
                  <span className="bg-white bg-opacity-20 px-1.5 py-0.5 rounded-full text-xs">
                    {source.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Filters */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Difficulty Level:</h4>
            <div className="flex flex-wrap gap-2">
              {difficultyFilters.map((difficulty) => (
                <button
                  key={difficulty.value}
                  onClick={() => setSelectedDifficulty(difficulty.value)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors text-sm ${
                    selectedDifficulty === difficulty.value
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{difficulty.value === 'beginner' ? '🟢' : difficulty.value === 'intermediate' ? '🟡' : difficulty.value === 'advanced' ? '🔴' : '⚪'}</span>
                  <span>{difficulty.label}</span>
                  <span className="bg-white bg-opacity-20 px-1.5 py-0.5 rounded-full text-xs">
                    {difficulty.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Programming Language Filters */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Programming Languages:</h4>
            <div className="flex flex-wrap gap-2">
              {languageFilters.map((language) => (
                <button
                  key={language.value}
                  onClick={() => setSelectedLanguage(language.value)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors text-sm ${
                    selectedLanguage === language.value
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{language.value === 'javascript' ? '🟨' : language.value === 'python' ? '🐍' : language.value === 'typescript' ? '🔷' : language.value === 'react' ? '⚛️' : '💻'}</span>
                  <span>{language.label}</span>
                  <span className="bg-white bg-opacity-20 px-1.5 py-0.5 rounded-full text-xs">
                    {language.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {loading ? (
            <div className="space-y-6">
              <div className="text-center py-8">
                <RefreshCw className="h-16 w-16 text-primary-500 animate-spin mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2 animate-pulse-gentle">Loading community posts...</h3>
                <p className="text-gray-600">Fetching the latest discussions from external communities.</p>
              </div>
              
              {/* Loading Skeleton */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-fade-in">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg animate-shimmer"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded animate-shimmer mb-2" style={{ width: '60%' }}></div>
                      <div className="h-3 bg-gray-200 rounded animate-shimmer" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-200 rounded animate-shimmer"></div>
                    <div className="h-4 bg-gray-200 rounded animate-shimmer" style={{ width: '80%' }}></div>
                    <div className="h-4 bg-gray-200 rounded animate-shimmer" style={{ width: '60%' }}></div>
                  </div>
                  <div className="flex space-x-2 mb-4">
                    <div className="h-6 bg-gray-200 rounded-full animate-shimmer" style={{ width: '80px' }}></div>
                    <div className="h-6 bg-gray-200 rounded-full animate-shimmer" style={{ width: '100px' }}></div>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-gray-200">
                    <div className="flex space-x-4">
                      <div className="h-8 bg-gray-200 rounded animate-shimmer" style={{ width: '60px' }}></div>
                      <div className="h-8 bg-gray-200 rounded animate-shimmer" style={{ width: '60px' }}></div>
                      <div className="h-8 bg-gray-200 rounded animate-shimmer" style={{ width: '60px' }}></div>
                    </div>
                    <div className="h-8 bg-gray-200 rounded animate-shimmer" style={{ width: '120px' }}></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl">⚠️</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Error loading posts</h3>
              <p className="text-gray-600 mb-4">{error}</p>
              <button
                onClick={loadExternalPosts}
                className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or refresh to load more posts.</p>
            </div>
          ) : (
            <>
              {/* Results Summary */}
              <div className="flex items-center justify-between">
                <p className="text-gray-600">
                  Showing <span className="font-semibold text-gray-900">{filteredPosts.length}</span> posts
                  {searchTerm && ` for "${searchTerm}"`}
                  {selectedType !== 'all' && ` of type "${selectedType}"`}
                  {selectedSource !== 'all' && ` from "${selectedSource}"`}
                  {selectedDifficulty !== 'all' && ` at "${selectedDifficulty}" level`}
                  {selectedLanguage !== 'all' && ` in "${selectedLanguage}"`}
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedType('all')
                    setSelectedSource('all')
                    setSelectedDifficulty('all')
                    setSelectedLanguage('all')
                  }}
                  className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>

              {/* External Community Posts */}
              <div className="space-y-6 stagger-animation">
                {filteredPosts.map((post, index) => (
                  <div key={post.id} className="animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ExternalCommunityPost
                      post={post}
                      onLike={handleLike}
                      onBookmark={handleBookmark}
                      onShare={handleShare}
                      isLiked={likedPosts.includes(post.id)}
                      isBookmarked={bookmarkedPosts.includes(post.id)}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p className="mb-2">
            Content is aggregated from external developer communities and updated regularly.
          </p>
          <p>
            All posts link to their original sources. Like and bookmark features are for your personal use only.
          </p>
        </div>
      </div>
    </div>
  )
}
