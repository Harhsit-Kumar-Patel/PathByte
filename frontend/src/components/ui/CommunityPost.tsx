import { useState } from 'react'
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  MoreHorizontal, 
  User, 
  Clock, 
  Tag,
  ThumbsUp,
  Bookmark
} from 'lucide-react'

interface Comment {
  id: string
  author: {
    name: string
    avatar: string
    role: string
  }
  content: string
  timestamp: string
  likes: number
}

interface CommunityPostProps {
  post: {
    id: string
    author: {
      name: string
      avatar: string
      role: string
      experience: string
    }
    content: string
    title: string
    tags: string[]
    timestamp: string
    likes: number
    comments: Comment[]
    type: 'discussion' | 'question' | 'resource' | 'achievement'
    isLiked: boolean
    isBookmarked: boolean
  }
  onLike: (postId: string) => void
  onComment: (postId: string, comment: string) => void
  onShare: (postId: string) => void
  onBookmark: (postId: string) => void
}

export default function CommunityPost({ 
  post, 
  onLike, 
  onComment, 
  onShare, 
  onBookmark 
}: CommunityPostProps) {
  const [showComments, setShowComments] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [showFullContent, setShowFullContent] = useState(false)

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

  const getTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
    return `${Math.floor(diffDays / 365)} years ago`
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      onComment(post.id, newComment.trim())
      setNewComment('')
    }
  }

  const shouldTruncate = post.content.length > 200

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6 hover:shadow-md transition-shadow">
      {/* Post Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
            <span className="text-primary-600 font-bold text-lg">
              {post.author.avatar || post.author.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(post.type)}`}>
                {getTypeIcon(post.type)} {post.type}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>{post.author.role}</span>
              <span>•</span>
              <span>{post.author.experience}</span>
              <span>•</span>
              <Clock className="h-3 w-3" />
              <span>{getTimeAgo(post.timestamp)}</span>
            </div>
          </div>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h4>
        <div className="text-gray-700 leading-relaxed">
          {shouldTruncate && !showFullContent ? (
            <>
              {post.content.substring(0, 200)}...
              <button
                onClick={() => setShowFullContent(true)}
                className="text-primary-600 hover:text-primary-700 font-medium ml-1"
              >
                Read more
              </button>
            </>
          ) : (
            <>
              {post.content}
              {shouldTruncate && (
                <button
                  onClick={() => setShowFullContent(false)}
                  className="text-primary-600 hover:text-primary-700 font-medium ml-1"
                >
                  Show less
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full flex items-center space-x-1"
            >
              <Tag className="h-3 w-3" />
              <span>{tag}</span>
            </span>
          ))}
        </div>
      )}

      {/* Post Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => onLike(post.id)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
              post.isLiked 
                ? 'text-red-600 bg-red-50' 
                : 'text-gray-500 hover:text-red-600 hover:bg-red-50'
            }`}
          >
            <Heart className={`h-5 w-5 ${post.isLiked ? 'fill-current' : ''}`} />
            <span className="font-medium">{post.likes}</span>
          </button>

          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center space-x-2 px-3 py-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">{post.comments.length}</span>
          </button>

          <button
            onClick={() => onShare(post.id)}
            className="flex items-center space-x-2 px-3 py-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
          >
            <Share2 className="h-5 w-5" />
            <span className="font-medium">Share</span>
          </button>

          <button
            onClick={() => onBookmark(post.id)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
              post.isBookmarked 
                ? 'text-primary-600 bg-primary-50' 
                : 'text-gray-500 hover:text-primary-600 hover:bg-primary-50'
            }`}
          >
            <Bookmark className={`h-5 w-5 ${post.isBookmarked ? 'fill-current' : ''}`} />
            <span className="font-medium">Save</span>
          </button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h5 className="font-semibold text-gray-900 mb-4">Comments ({post.comments.length})</h5>
          
          {/* Comment Form */}
          <form onSubmit={handleSubmitComment} className="mb-4">
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-primary-600" />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Comment
              </button>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {post.comments.map((comment) => (
              <div key={comment.id} className="flex space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-sm">
                    {comment.author.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-gray-900">{comment.author.name}</span>
                      <span className="text-sm text-gray-500">{getTimeAgo(comment.timestamp)}</span>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-primary-600 transition-colors">
                      <ThumbsUp className="h-3 w-3" />
                      <span>{comment.likes}</span>
                    </button>
                    <button className="hover:text-primary-600 transition-colors">Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
