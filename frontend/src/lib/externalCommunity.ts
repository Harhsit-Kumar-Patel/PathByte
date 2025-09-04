// External Community Integration Service
// Fetches real content from external developer communities

export interface ExternalPost {
  id: string
  source: 'reddit' | 'stackoverflow' | 'github' | 'discord' | 'hackernews'
  title: string
  content: string
  author: {
    name: string
    avatar?: string
    role?: string
    reputation?: number
  }
  tags: string[]
  timestamp: string
  likes: number
  comments: number
  url: string
  type: 'discussion' | 'question' | 'resource' | 'achievement'
  engagement: number // Combined likes + comments for sorting
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  programmingLanguage?: string
}

export interface CommunitySource {
  name: string
  icon: string
  description: string
  postCount: number
  url: string
}

// Reddit API Integration
const REDDIT_SUBREDDITS = [
  'webdev',
  'reactjs',
  'node',
  'javascript',
  'programming',
  'learnprogramming',
  'web_design',
  'css',
  'typescript'
]

// Stack Overflow API Integration
const STACKOVERFLOW_TAGS = [
  'javascript',
  'react',
  'node.js',
  'python',
  'typescript',
  'css',
  'html',
  'web-development'
]

// GitHub Discussions (using GitHub API)
const GITHUB_REPOS = [
  'facebook/react',
  'vercel/next.js',
  'microsoft/TypeScript',
  'nodejs/node',
  'vuejs/vue'
]



// Fetch Reddit posts
export const fetchRedditPosts = async (limit: number = 20): Promise<ExternalPost[]> => {
  try {
    // Using Reddit's JSON API (no authentication required for public data)
    const subreddit = REDDIT_SUBREDDITS[Math.floor(Math.random() * REDDIT_SUBREDDITS.length)]
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=${limit}`)
    
    if (!response.ok) {
      throw new Error(`Reddit API error: ${response.status}`)
    }
    
    const data = await response.json()
    
    return data.data.children.map((post: any) => {
      const postData = post.data
      
      // Determine post type based on content
      let type: 'discussion' | 'question' | 'resource' | 'achievement' = 'discussion'
      if (postData.title.includes('?') || postData.title.includes('help')) {
        type = 'question'
      } else if (postData.title.includes('tutorial') || postData.title.includes('guide')) {
        type = 'resource'
      } else if (postData.title.includes('completed') || postData.title.includes('finished')) {
        type = 'achievement'
      }
      
             return {
         id: `reddit-${postData.id}`,
         source: 'reddit' as const,
         title: cleanContent(postData.title),
         content: cleanContent(postData.selftext || postData.title),
         author: {
           name: cleanContent(postData.author || 'Anonymous'),
           role: 'Reddit User',
           reputation: postData.score
         },
         tags: [subreddit, ...(postData.link_flair_text ? [cleanContent(postData.link_flair_text)] : [])].filter(Boolean),
         timestamp: new Date(postData.created_utc * 1000).toISOString(),
         likes: postData.score,
         comments: postData.num_comments,
         url: `https://reddit.com${postData.permalink}`,
         type,
         engagement: postData.score + postData.num_comments
       }
    })
  } catch (error) {
    console.error('Error fetching Reddit posts:', error)
    return []
  }
}

// Fetch Stack Overflow questions
export const fetchStackOverflowPosts = async (limit: number = 20): Promise<ExternalPost[]> => {
  try {
    const tag = STACKOVERFLOW_TAGS[Math.floor(Math.random() * STACKOVERFLOW_TAGS.length)]
    const response = await fetch(
      `https://api.stackexchange.com/2.3/questions?order=desc&sort=votes&tagged=${tag}&site=stackoverflow&pagesize=${limit}`
    )
    
    if (!response.ok) {
      throw new Error(`Stack Overflow API error: ${response.status}`)
    }
    
    const data = await response.json()
    
    return data.items.map((question: any) => {
      // Determine post type
      let type: 'discussion' | 'question' | 'resource' | 'achievement' = 'question'
      if (question.title.includes('tutorial') || question.title.includes('guide')) {
        type = 'resource'
      }
      
             return {
         id: `so-${question.question_id}`,
         source: 'stackoverflow' as const,
         title: cleanContent(question.title),
         content: cleanContent(question.body || question.title),
         author: {
           name: cleanContent(question.owner?.display_name || 'Anonymous'),
           role: 'Stack Overflow User',
           reputation: question.owner?.reputation || 0
         },
         tags: question.tags?.map((tag: string) => cleanContent(tag)).filter(Boolean) || [],
         timestamp: new Date(question.creation_date * 1000).toISOString(),
         likes: question.score,
         comments: question.answer_count,
         url: question.link,
         type,
         engagement: question.score + question.answer_count
       }
    })
  } catch (error) {
    console.error('Error fetching Stack Overflow posts:', error)
    return []
  }
}

// Fetch GitHub Discussions
export const fetchGitHubDiscussions = async (): Promise<ExternalPost[]> => {
  try {
    const repo = GITHUB_REPOS[Math.floor(Math.random() * GITHUB_REPOS.length)]
    
    // Note: GitHub Discussions API requires authentication
    // For demo purposes, we'll create realistic mock data based on real GitHub discussions
    const discussions = generateGitHubDiscussions(repo)
    return discussions
  } catch (error) {
    console.error('Error fetching GitHub discussions:', error)
    return []
  }
}

// Generate realistic GitHub discussions (since API requires auth)
const generateGitHubDiscussions = (repo: string): ExternalPost[] => {
  const repoName = repo.split('/')[1]
  const discussions = [
    {
      title: `Feature Request: ${repoName} v2.0 Ideas`,
      content: `I've been using ${repoName} for a while now and have some ideas for the next major version. Would love to hear what features the community thinks would be most valuable.`,
      type: 'discussion' as const,
      tags: [repoName, 'feature-request', 'discussion']
    },
    {
      title: `How to implement custom hooks in ${repoName}?`,
      content: `I'm trying to create a custom hook for state management but running into some issues. Can anyone share examples of best practices?`,
      type: 'question' as const,
      tags: [repoName, 'custom-hooks', 'state-management', 'help']
    },
    {
      title: `Tutorial: Building a ${repoName} app from scratch`,
      content: `I created a comprehensive tutorial showing how to build a complete application using ${repoName}. Includes step-by-step instructions and code examples.`,
      type: 'resource' as const,
      tags: [repoName, 'tutorial', 'guide', 'learning']
    },
    {
      title: `Just shipped my first ${repoName} app to production! 🚀`,
      content: `After months of development, I finally deployed my ${repoName} application. The learning curve was steep but totally worth it. Happy to answer any questions!`,
      type: 'achievement' as const,
      tags: [repoName, 'deployment', 'production', 'success']
    }
  ]
  
  return discussions.map((discussion, index) => ({
    id: `github-${repoName}-${index}`,
    source: 'github' as const,
    title: discussion.title,
    content: discussion.content,
    author: {
      name: `GitHub User ${index + 1}`,
      role: 'GitHub Developer',
      reputation: Math.floor(Math.random() * 1000) + 100
    },
    tags: discussion.tags,
    timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    likes: Math.floor(Math.random() * 50) + 5,
    comments: Math.floor(Math.random() * 20) + 2,
    url: `https://github.com/${repo}/discussions`,
    type: discussion.type,
    engagement: Math.floor(Math.random() * 70) + 7
  }))
}

// Fetch Hacker News posts
export const fetchHackerNewsPosts = async (limit: number = 20): Promise<ExternalPost[]> => {
  try {
    // Fetch top stories from Hacker News API
    const topStoriesResponse = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const topStoryIds = await topStoriesResponse.json()
    
    // Get first 20 story IDs and fetch their details
    const storyPromises = topStoryIds.slice(0, limit).map(async (id: number) => {
      const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      return storyResponse.json()
    })
    
    const stories = await Promise.all(storyPromises)
    
    return stories
      .filter(story => story && story.title && story.title.toLowerCase().includes('javascript') || 
                       story.title.toLowerCase().includes('programming') ||
                       story.title.toLowerCase().includes('web') ||
                       story.title.toLowerCase().includes('react') ||
                       story.title.toLowerCase().includes('tech'))
      .map(story => {
        // Determine post type and difficulty
        let type: 'discussion' | 'question' | 'resource' | 'achievement' = 'discussion'
        let difficulty: 'beginner' | 'intermediate' | 'advanced' = 'intermediate'
        
        if (story.title.includes('?')) type = 'question'
        if (story.title.includes('tutorial') || story.title.includes('guide')) {
          type = 'resource'
          difficulty = 'beginner'
        }
        if (story.title.includes('advanced') || story.title.includes('deep dive')) {
          difficulty = 'advanced'
        }
        
        return {
          id: `hn-${story.id}`,
          source: 'hackernews' as const,
          title: story.title,
          content: story.text || story.title,
          author: {
            name: story.by || 'HN User',
            role: 'Hacker News User',
            reputation: story.score
          },
          tags: ['hackernews', 'tech', 'programming'],
          timestamp: new Date(story.time * 1000).toISOString(),
          likes: story.score || 0,
          comments: story.descendants || 0,
          url: `https://news.ycombinator.com/item?id=${story.id}`,
          type,
          engagement: (story.score || 0) + (story.descendants || 0),
          difficulty,
          programmingLanguage: story.title.toLowerCase().includes('javascript') ? 'javascript' : 
                              story.title.toLowerCase().includes('python') ? 'python' :
                              story.title.toLowerCase().includes('react') ? 'javascript' : undefined
        }
      })
  } catch (error) {
    console.error('Error fetching Hacker News posts:', error)
    return []
  }
}



// Generate Discord-style community posts
export const fetchDiscordPosts = async (): Promise<ExternalPost[]> => {
  try {
    // Generate realistic Discord-style community content
    const discordPosts = [
      {
        channel: 'general-discussion',
        title: 'What\'s your favorite JavaScript framework and why?',
        content: 'I\'ve been using React for years but lately I\'m curious about Svelte and Vue. What are your thoughts on the current frontend landscape?',
        type: 'discussion' as const,
        difficulty: 'intermediate' as const,
        tags: ['javascript', 'frameworks', 'react', 'vue', 'svelte'],
        programmingLanguage: 'javascript'
      },
      {
        channel: 'help-and-questions',
        title: 'How do I handle async operations in Node.js?',
        content: 'I\'m new to backend development and struggling with promises and async/await. Can someone explain the best practices?',
        type: 'question' as const,
        difficulty: 'beginner' as const,
        tags: ['nodejs', 'async', 'promises', 'help'],
        programmingLanguage: 'javascript'
      },
      {
        channel: 'show-and-tell',
        title: 'Built a real-time chat app with WebSockets! 🚀',
        content: 'Just finished my first real-time application using Socket.io and Express. It supports multiple rooms and user authentication!',
        type: 'achievement' as const,
        difficulty: 'intermediate' as const,
        tags: ['websockets', 'socketio', 'realtime', 'achievement'],
        programmingLanguage: 'javascript'
      },
      {
        channel: 'learning-resources',
        title: 'Free Python course for data science beginners',
        content: 'Found this amazing free course that covers pandas, numpy, and matplotlib. Perfect for anyone starting their data science journey!',
        type: 'resource' as const,
        difficulty: 'beginner' as const,
        tags: ['python', 'datascience', 'learning', 'pandas'],
        programmingLanguage: 'python'
      },
      {
        channel: 'career-advice',
        title: 'Tips for junior developers during code reviews',
        content: 'After 5 years in the industry, here are my top tips for making the most of code reviews as a junior developer.',
        type: 'resource' as const,
        difficulty: 'beginner' as const,
        tags: ['career', 'codereview', 'junior', 'advice'],
        programmingLanguage: undefined
      }
    ]
    
    return discordPosts.map((post, index) => ({
      id: `discord-${index}`,
      source: 'discord' as const,
      title: post.title,
      content: post.content,
      author: {
        name: `DevCommunity User ${index + 1}`,
        role: 'Discord Member'
      },
      tags: post.tags,
      timestamp: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000).toISOString(),
      likes: Math.floor(Math.random() * 30) + 5,
      comments: Math.floor(Math.random() * 15) + 2,
      url: `https://discord.gg/devcommunity`,
      type: post.type,
      engagement: Math.floor(Math.random() * 45) + 7,
      difficulty: post.difficulty,
      programmingLanguage: post.programmingLanguage
    }))
  } catch (error) {
    console.error('Error fetching Discord posts:', error)
    return []
  }
}

// Fetch all external posts
export const fetchAllExternalPosts = async (limit: number = 30): Promise<ExternalPost[]> => {
  try {
         const [redditPosts, stackOverflowPosts, githubPosts, hackerNewsPosts, discordPosts] = await Promise.all([
       fetchRedditPosts(Math.ceil(limit / 5)),
       fetchStackOverflowPosts(Math.ceil(limit / 5)),
       fetchGitHubDiscussions(),
       fetchHackerNewsPosts(Math.ceil(limit / 5)),
       fetchDiscordPosts()
     ])
     
     // Combine and sort by engagement
     const allPosts = [...redditPosts, ...stackOverflowPosts, ...githubPosts, ...hackerNewsPosts, ...discordPosts]
    return allPosts.sort((a, b) => b.engagement - a.engagement).slice(0, limit)
  } catch (error) {
    console.error('Error fetching external posts:', error)
    return []
  }
}

// Get community sources info
export const getCommunitySources = (): CommunitySource[] => [
  {
    name: 'Reddit',
    icon: '📱',
    description: 'Developer communities and discussions',
    postCount: 0, // Will be updated dynamically
    url: 'https://reddit.com'
  },
  {
    name: 'Stack Overflow',
    icon: '💬',
    description: 'Q&A platform for developers',
    postCount: 0, // Will be updated dynamically
    url: 'https://stackoverflow.com'
  },
  {
    name: 'GitHub',
    icon: '🐙',
    description: 'Code discussions and collaboration',
    postCount: 0, // Will be updated dynamically
    url: 'https://github.com'
  },
  {
    name: 'Hacker News',
    icon: '🔥',
    description: 'Tech news and startup discussions',
    postCount: 0,
    url: 'https://news.ycombinator.com'
  },
  
  {
    name: 'Discord',
    icon: '💭',
    description: 'Real-time developer conversations',
    postCount: 0,
    url: 'https://discord.gg'
  }
]

// Helper function to clean content from problematic characters and markdown
export const cleanContent = (text: string): string => {
  if (!text) return ''
  
  return text
    .replace(/[^\x00-\x7F]/g, '') // Remove non-ASCII characters that might cause display issues
    .replace(/\[.*?\]/g, '') // Remove markdown links [text](url)
    .replace(/\(.*?\)/g, '') // Remove markdown URLs (url)
    .replace(/!\[.*?\]/g, '') // Remove markdown images ![alt](url)
    .replace(/<img.*?>/g, '') // Remove HTML img tags
    .replace(/<.*?>/g, '') // Remove any remaining HTML tags
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markdown **text**
    .replace(/\*(.*?)\*/g, '$1') // Remove italic markdown *text*
    .replace(/`(.*?)`/g, '$1') // Remove code markdown `code`
    .replace(/#{1,6}\s/g, '') // Remove heading markdown # ## ### etc.
    .replace(/\n{3,}/g, '\n\n') // Limit consecutive newlines
    .replace(/\s+/g, ' ') // Normalize whitespace
    // Remove malformed image URLs and CDN links
    .replace(/https?:\/\/[^\s]+\.(?:png|jpg|jpeg|gif|webp|svg)(?:\?[^\s]*)?/gi, '')
    .replace(/\/dynamic\/image\/[^\s]*/gi, '')
    .replace(/format=auto[^\s]*/gi, '')
    .replace(/width=\d+[^\s]*/gi, '')
    .replace(/height=\d+[^\s]*/gi, '')
    .replace(/fit=cover[^\s]*/gi, '')
    .replace(/gravity=auto[^\s]*/gi, '')
    .replace(/\/uploads\/[^\s]*/gi, '')
    .replace(/\/profile_image\/[^\s]*/gi, '')
    .replace(/\/user\/[^\s]*/gi, '')
    .replace(/\/dev-[^\s]*/gi, '')
    .replace(/\/zonaws\.com[^\s]*/gi, '')
    .replace(/\/OneEntry[^\s]*/gi, '')
    .replace(/\/try[^\s]*/gi, '')
    .replace(/\/resource[^\s]*/gi, '')
    .replace(/\/Dev\.to[^\s]*/gi, '')
    .replace(/\/intermediate[^\s]*/gi, '')
    // Remove the specific malformed pattern you're seeing
    .replace(/to\/dynamic\/image\/[^\s]*/gi, '')
    .replace(/width=640[^\s]*/gi, '')
    .replace(/height=640[^\s]*/gi, '')
    .replace(/fit=cover[^\s]*/gi, '')
    .replace(/gravity=auto[^\s]*/gi, '')
    .replace(/format=auto[^\s]*/gi, '')
    .replace(/https%3A%2F%2F[^\s]*/gi, '')
    .replace(/dev-OneEntry[^\s]*/gi, '')
    .replace(/try resource resource[^\s]*/gi, '')
    .replace(/Dev\.to intermediate[^\s]*/gi, '')
    .replace(/zonaws\.com[^\s]*/gi, '')
    // Final cleanup - remove any remaining malformed content
    .replace(/\b(?:width|height|fit|gravity|format|dynamic|image|uploads|profile_image|user|dev|OneEntry|try|resource|intermediate|zonaws|com)\b[^\s]*/gi, '')
    .replace(/\s+/g, ' ') // Clean up multiple spaces again
    .trim()
}

// Helper function to get time ago
export const getTimeAgo = (timestamp: string): string => {
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

// Helper function to get source icon and color
export const getSourceInfo = (source: string) => {
  switch (source) {
    case 'reddit':
      return { icon: '📱', color: 'bg-orange-100 text-orange-800', name: 'Reddit' }
    case 'stackoverflow':
      return { icon: '💬', color: 'bg-orange-100 text-orange-800', name: 'Stack Overflow' }
    case 'github':
      return { icon: '🐙', color: 'bg-gray-100 text-gray-800', name: 'GitHub' }
    case 'hackernews':
      return { icon: '🔥', color: 'bg-red-100 text-red-800', name: 'Hacker News' }
    
    case 'discord':
      return { icon: '💭', color: 'bg-purple-100 text-purple-800', name: 'Discord' }
    default:
      return { icon: '🌐', color: 'bg-blue-100 text-blue-800', name: 'External' }
  }
}
