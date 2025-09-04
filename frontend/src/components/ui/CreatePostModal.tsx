import { useState } from 'react'
import { X, Tag, Hash, Send, Image, Link, Code, MessageSquare, BookOpen, Trophy } from 'lucide-react'

interface CreatePostModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (post: {
    title: string
    content: string
    type: 'discussion' | 'question' | 'resource' | 'achievement'
    tags: string[]
  }) => void
}

export default function CreatePostModal({ isOpen, onClose, onSubmit }: CreatePostModalProps) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [type, setType] = useState<'discussion' | 'question' | 'resource' | 'achievement'>('discussion')
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState('')

  if (!isOpen) return null

  const postTypes = [
    {
      value: 'discussion',
      label: 'Discussion',
      icon: MessageSquare,
      description: 'Start a conversation about tech topics'
    },
    {
      value: 'question',
      label: 'Question',
      icon: MessageSquare,
      description: 'Ask for help or advice'
    },
    {
      value: 'resource',
      label: 'Resource',
      icon: BookOpen,
      description: 'Share useful tools, articles, or tutorials'
    },
    {
      value: 'achievement',
      label: 'Achievement',
      icon: Trophy,
      description: 'Celebrate your wins and milestones'
    }
  ]

  const popularTags = [
    'React', 'JavaScript', 'Python', 'Node.js', 'AWS', 'Docker', 
    'Machine Learning', 'Data Science', 'Web Development', 'Mobile Dev',
    'DevOps', 'UI/UX', 'Career Advice', 'Interview Prep', 'Learning'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim() && content.trim()) {
      onSubmit({
        title: title.trim(),
        content: content.trim(),
        type,
        tags
      })
      // Reset form
      setTitle('')
      setContent('')
      setType('discussion')
      setTags([])
      onClose()
    }
  }

  const addTag = (tag: string) => {
    const cleanTag = tag.trim().toLowerCase()
    if (cleanTag && !tags.includes(cleanTag) && tags.length < 5) {
      setTags([...tags, cleanTag])
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  const handleTagInput = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addTag(newTag)
      setNewTag('')
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Create a New Post</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <form onSubmit={handleSubmit} className="p-6">
            {/* Post Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Post Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {postTypes.map((postType) => {
                  const Icon = postType.icon
                  return (
                    <button
                      key={postType.value}
                      type="button"
                      onClick={() => setType(postType.value as any)}
                      className={`p-4 border-2 rounded-lg text-left transition-colors ${
                        type === postType.value
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="h-5 w-5 text-primary-600" />
                        <div>
                          <div className="font-medium text-gray-900">{postType.label}</div>
                          <div className="text-sm text-gray-500">{postType.description}</div>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Title */}
            <div className="mb-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What's your post about?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            {/* Content */}
            <div className="mb-6">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Content *
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Share your thoughts, questions, or resources..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Tags */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags (max 5)
              </label>
              
              {/* Tag Input */}
              <div className="flex space-x-2 mb-3">
                <div className="flex-1 relative">
                  <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyDown={handleTagInput}
                    placeholder="Add a tag..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => addTag(newTag)}
                  disabled={!newTag.trim() || tags.length >= 5}
                  className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Add
                </button>
              </div>

              {/* Current Tags */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full flex items-center space-x-2"
                    >
                      <Tag className="h-3 w-3" />
                      <span>{tag}</span>
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-1 text-primary-600 hover:text-primary-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}

              {/* Popular Tags */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Popular tags:</p>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => addTag(tag)}
                      disabled={tags.includes(tag.toLowerCase()) || tags.length >= 5}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <button type="button" className="flex items-center space-x-1 hover:text-primary-600 transition-colors">
                  <Image className="h-4 w-4" />
                  <span>Add Image</span>
                </button>
                <button type="button" className="flex items-center space-x-1 hover:text-primary-600 transition-colors">
                  <Link className="h-4 w-4" />
                  <span>Add Link</span>
                </button>
                <button type="button" className="flex items-center space-x-1 hover:text-primary-600 transition-colors">
                  <Code className="h-4 w-4" />
                  <span>Add Code</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!title.trim() || !content.trim()}
                  className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Post</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
