import { useState } from 'react'
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  ExternalLink, 
  Clock, 
  Tag,
  Bookmark,
  TrendingUp
} from 'lucide-react'
import { ExternalPost, getTimeAgo, getSourceInfo, cleanContent } from '@/lib/externalCommunity'

interface ExternalCommunityPostProps {
  post: ExternalPost
  onLike: (postId: string) => void
  onBookmark: (postId: string) => void
  onShare: (postId: string) => void
  isLiked: boolean
  isBookmarked: boolean
}

export default function ExternalCommunityPost({ 
  post, 
  onLike, 
  onBookmark, 
  onShare,
  isLiked,
  isBookmarked
}: ExternalCommunityPostProps) {
  const [showFullContent, setShowFullContent] = useState(false)
  const sourceInfo = getSourceInfo(post.source)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'question': return '❓'
      case 'resource': return '📚'
      case 'achievement': return '🏆'
      default: return '💬'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'question': return 'bg-blue-100 text-blue-800'
      case 'resource': return 'bg-green-100 text-green-800'
      case 'achievement': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const shouldTruncate = post.content.length > 200



  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 mb-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
      {/* Post Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
            <span className="text-primary-600 font-bold text-lg">
              {post.author.avatar || post.author.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
              <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
              <div className="flex flex-wrap items-center gap-1">
                <span className={`px-2 py-1 text-xs font-medium rounded-full transition-colors ${getTypeColor(post.type)}`}>
                  {getTypeIcon(post.type)} {post.type}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full transition-colors ${sourceInfo.color}`}>
                  {sourceInfo.icon} {sourceInfo.name}
                </span>
                {post.difficulty && (
                  <span className={`px-2 py-1 text-xs font-medium rounded-full transition-colors ${
                    post.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                    post.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {post.difficulty === 'beginner' ? '🟢' : 
                     post.difficulty === 'intermediate' ? '🟡' : '🔴'} <span className="hidden sm:inline">{post.difficulty}</span>
                  </span>
                )}
                {post.programmingLanguage && (
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 transition-colors">
                    {post.programmingLanguage === 'javascript' ? '🟨' : 
                     post.programmingLanguage === 'python' ? '🐍' : 
                     post.programmingLanguage === 'typescript' ? '🔷' : '💻'} <span className="hidden sm:inline">{post.programmingLanguage}</span>
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>{post.author.role}</span>
              {post.author.reputation && (
                <>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <TrendingUp className="h-3 w-3" />
                    <span>{formatNumber(post.author.reputation)}</span>
                  </span>
                </>
              )}
              <span>•</span>
              <Clock className="h-3 w-3" />
              <span>{getTimeAgo(post.timestamp)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-900 mb-2 break-words">
          {cleanContent(post.title) || 'Untitled Post'}
        </h4>
        <div className="text-gray-700 leading-relaxed">
          {(() => {
            const cleanedContent = cleanContent(post.content)
            if (!cleanedContent) {
              return (
                <div className="text-gray-500 italic">
                  Content not available or could not be displayed properly.
                </div>
              )
            }
            
            if (shouldTruncate && !showFullContent) {
              return (
                <>
                  {cleanedContent.substring(0, 200)}...
                  <button
                    onClick={() => setShowFullContent(true)}
                    className="text-primary-600 hover:text-primary-700 font-medium ml-1"
                  >
                    Read more
                  </button>
                </>
              )
            } else {
              return (
                <>
                  {cleanedContent}
                  {shouldTruncate && (
                    <button
                      onClick={() => setShowFullContent(false)}
                      className="text-primary-700 font-medium ml-1"
                    >
                      Show less
                    </button>
                  )}
                </>
              )
            }
          })()}
        </div>
      </div>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags
            .filter(tag => tag && tag.trim() && tag.length < 50) // Filter out empty or extremely long tags
            .map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full flex items-center space-x-1 hover:bg-gray-200 transition-colors"
                title={tag} // Show full tag on hover if truncated
              >
                <Tag className="h-3 w-3 flex-shrink-0" />
                <span className="truncate max-w-32">{cleanContent(tag)}</span>
              </span>
            ))}
        </div>
      )}

      {/* Engagement Stats */}
      <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Heart className="h-4 w-4 text-red-500" />
            <span className="font-medium">{formatNumber(post.likes)} likes</span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-4 w-4 text-blue-500" />
            <span className="font-medium">{formatNumber(post.comments)} comments</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="font-medium">{formatNumber(post.engagement)} engagement</span>
          </div>
        </div>
      </div>

      {/* Post Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-gray-200 gap-4">
        <div className="flex items-center flex-wrap gap-2 sm:gap-4">
          <button
            onClick={() => onLike(post.id)}
            className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-lg transition-all duration-200 ${
              isLiked 
                ? 'text-red-600 bg-red-50 scale-105' 
                : 'text-gray-500 hover:text-red-600 hover:bg-red-50 hover:scale-105'
            }`}
          >
            <Heart className={`h-4 w-4 sm:h-5 sm:w-5 ${isLiked ? 'fill-current animate-pulse' : ''}`} />
            <span className="font-medium text-sm">{formatNumber(post.likes)}</span>
          </button>

          <div className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 text-gray-500">
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-medium text-sm">{formatNumber(post.comments)}</span>
          </div>

          <button
            onClick={() => onShare(post.id)}
            className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-medium text-sm hidden sm:inline">Share</span>
          </button>

          <button
            onClick={() => onBookmark(post.id)}
            className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-lg transition-all duration-200 ${
              isBookmarked 
                ? 'text-primary-600 bg-primary-50 scale-105' 
                : 'text-gray-500 hover:text-primary-600 hover:bg-primary-50 hover:scale-105'
            }`}
          >
            <Bookmark className={`h-4 w-4 sm:h-5 sm:w-5 ${isBookmarked ? 'fill-current animate-pulse' : ''}`} />
            <span className="font-medium text-sm hidden sm:inline">Save</span>
          </button>
        </div>

        {/* External Link */}
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 hover:scale-105 text-sm w-full sm:w-auto justify-center sm:justify-start"
        >
          <ExternalLink className="h-4 w-4" />
          <span>View on {sourceInfo.name}</span>
        </a>
      </div>

      {/* Source Attribution */}
      <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500 text-center">
        <span>Content sourced from </span>
        <a 
          href={`https://${post.source === 'reddit' ? 'reddit.com' : post.source === 'stackoverflow' ? 'stackoverflow.com' : 'github.com'}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          {sourceInfo.name}
        </a>
        <span> • Original post by {post.author.name}</span>
      </div>
    </div>
  )
}
