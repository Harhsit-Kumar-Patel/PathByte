import { useState } from 'react'
import { ExternalLink, Star, Clock, Award, Play, Search } from 'lucide-react'
import { cn } from '@/utils/cn'
import { Certification, YouTubePlaylist } from '@/data/skillsData'

interface CertificationResourcesProps {
  certifications: Certification[]
  youtubePlaylists: YouTubePlaylist[]
  currency?: 'USD' | 'INR'
}

export default function CertificationResources({
  certifications,
  youtubePlaylists,
  currency = 'USD'
}: CertificationResourcesProps) {
  const [activeTab, setActiveTab] = useState<'certifications' | 'youtube'>('certifications')
  const [certFilter, setCertFilter] = useState<'all' | 'free' | 'paid'>('all')
  const [youtubeFilter, setYoutubeFilter] = useState<'all' | 'Indian' | 'International'>('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Filter certifications
  const filteredCertifications = certifications.filter(cert => {
    const matchesFilter = certFilter === 'all' || cert.type === certFilter
    const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.provider.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  // Filter YouTube playlists
  const filteredYoutubePlaylists = youtubePlaylists.filter(playlist => {
    const matchesFilter = youtubeFilter === 'all' || playlist.targetAudience === youtubeFilter
    const matchesSearch = playlist.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         playlist.channel.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const getDisplayPrice = (price: string, certCurrency?: string) => {
    if (price === 'Free') return 'Free'
    if (currency === 'INR' && certCurrency === 'USD') {
      const usdPrice = parseFloat(price.replace('$', '').replace('/month', ''))
      const inrPrice = usdPrice * 83 // Approximate conversion rate
      return price.includes('/month') ? `₹${Math.round(inrPrice)}/month` : `₹${Math.round(inrPrice)}`
    }
    return price
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "h-4 w-4",
          i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
        )}
      />
    ))
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <Award className="h-6 w-6" />
            Learning Resources
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('certifications')}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                activeTab === 'certifications'
                  ? "bg-white text-blue-600"
                  : "text-blue-100 hover:text-white hover:bg-blue-400"
              )}
            >
              Certifications
            </button>
            <button
              onClick={() => setActiveTab('youtube')}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                activeTab === 'youtube'
                  ? "bg-white text-blue-600"
                  : "text-blue-100 hover:text-white hover:bg-blue-400"
              )}
            >
              YouTube Playlists
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {activeTab === 'certifications' && (
            <div className="flex gap-2">
              <button
                onClick={() => setCertFilter('all')}
                className={cn(
                  "px-3 py-2 text-sm rounded-lg transition-colors",
                  certFilter === 'all'
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                All
              </button>
              <button
                onClick={() => setCertFilter('free')}
                className={cn(
                  "px-3 py-2 text-sm rounded-lg transition-colors",
                  certFilter === 'free'
                    ? "bg-green-100 text-green-700"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                Free
              </button>
              <button
                onClick={() => setCertFilter('paid')}
                className={cn(
                  "px-3 py-2 text-sm rounded-lg transition-colors",
                  certFilter === 'paid'
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                Paid
              </button>
            </div>
          )}

          {activeTab === 'youtube' && (
            <div className="flex gap-2">
              <button
                onClick={() => setYoutubeFilter('all')}
                className={cn(
                  "px-3 py-2 text-sm rounded-lg transition-colors",
                  youtubeFilter === 'all'
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                All
              </button>
              <button
                onClick={() => setYoutubeFilter('Indian')}
                className={cn(
                  "px-3 py-2 text-sm rounded-lg transition-colors",
                  youtubeFilter === 'Indian'
                    ? "bg-orange-100 text-orange-700"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                Indian
              </button>
              <button
                onClick={() => setYoutubeFilter('International')}
                className={cn(
                  "px-3 py-2 text-sm rounded-lg transition-colors",
                  youtubeFilter === 'International'
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                International
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'certifications' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">
                Industry Certifications ({filteredCertifications.length})
              </h4>
            </div>
            
            {filteredCertifications.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No certifications found matching your criteria.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCertifications.map((cert, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900 mb-1">{cert.name}</h5>
                        <p className="text-sm text-gray-600 mb-2">{cert.provider}</p>
                        <p className="text-sm text-gray-700 mb-3">{cert.description}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <span className={cn(
                          "px-2 py-1 text-xs font-medium rounded-full",
                          cert.type === 'free' 
                            ? "bg-green-100 text-green-800" 
                            : "bg-blue-100 text-blue-800"
                        )}>
                          {cert.type === 'free' ? 'Free' : 'Paid'}
                        </span>
                        <span className={cn(
                          "px-2 py-1 text-xs font-medium rounded-full",
                          cert.difficulty === 'beginner' 
                            ? "bg-green-100 text-green-800"
                            : cert.difficulty === 'intermediate'
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        )}>
                          {cert.difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {cert.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        {getDisplayPrice(cert.price || 'Free', cert.currency)}
                      </div>
                    </div>
                    
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      View Course
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'youtube' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">
                YouTube Playlists ({filteredYoutubePlaylists.length})
              </h4>
            </div>
            
            {filteredYoutubePlaylists.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No YouTube playlists found matching your criteria.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredYoutubePlaylists.map((playlist, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900 mb-1">{playlist.title}</h5>
                        <p className="text-sm text-gray-600 mb-2">{playlist.channel}</p>
                        <p className="text-sm text-gray-700 mb-3">{playlist.description}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <span className={cn(
                          "px-2 py-1 text-xs font-medium rounded-full",
                          playlist.targetAudience === 'Indian' 
                            ? "bg-orange-100 text-orange-800" 
                            : "bg-blue-100 text-blue-800"
                        )}>
                          {playlist.targetAudience}
                        </span>
                        <span className={cn(
                          "px-2 py-1 text-xs font-medium rounded-full",
                          playlist.language === 'Hindi' 
                            ? "bg-green-100 text-green-800" 
                            : "bg-gray-100 text-gray-800"
                        )}>
                          {playlist.language}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Play className="h-4 w-4" />
                        {playlist.videos} videos
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {playlist.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        {renderStars(playlist.rating)}
                        <span className="ml-1">{playlist.rating}</span>
                      </div>
                    </div>
                    
                    <a
                      href={playlist.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Watch Playlist
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
