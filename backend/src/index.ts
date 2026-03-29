import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'

import { errorHandler } from './middleware/errorHandler'
import { notFound } from './middleware/notFound'
import { logger } from './utils/logger'
import { testConnection, initializeDatabase } from './config/database'

// Import routes
import authRoutes from './routes/auth'
import userRoutes from './routes/users'
import roadmapRoutes from './routes/roadmaps'
import progressRoutes from './routes/progress'
import roadmapProgressRoutes from './routes/roadmapProgress'

// Load environment variables
dotenv.config()

console.log('🔧 Environment loaded')
console.log('🔧 Process starting...')

const app = express()
console.log('🔧 Express app created')

// Trust proxy for Railway deployment
app.set('trust proxy', 1)
console.log('🔧 Trust proxy configured for Railway')

// Railway provides PORT environment variable
const PORT = parseInt(process.env.PORT || '5000', 10)

// Log the port being used
console.log('🚀 Starting server on port:', PORT)
console.log('🌐 Environment variables:', {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL ? 'Set' : 'Not set'
})

const configuredOrigins = (process.env['CORS_ORIGIN'] || process.env['FRONTEND_URL'] || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

const defaultDevelopmentOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:5173',
  'http://127.0.0.1:5173'
]

const allowedOrigins = configuredOrigins.length > 0
  ? configuredOrigins
  : (process.env['NODE_ENV'] === 'production' ? [] : defaultDevelopmentOrigins)

// Security middleware
app.use(helmet())

// CORS configuration
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true)
      return
    }

    if (allowedOrigins.includes(origin)) {
      callback(null, true)
      return
    }

    callback(new Error('Origin not allowed by CORS'))
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

const limiter = rateLimit({
  windowMs: parseInt(process.env['RATE_LIMIT_WINDOW_MS'] || '900000', 10),
  max: parseInt(process.env['RATE_LIMIT_MAX_REQUESTS'] || '100', 10),
  message: 'Too many requests from this IP, please try again later.'
})
app.use('/api/', limiter)

// Body parsing middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Compression middleware
app.use(compression())

// Logging middleware
app.use(morgan('combined', {
  stream: {
    write: (message: string) => logger.info(message.trim())
  }
}))

// Simple test endpoint
app.get('/test', (_, res) => {
  console.log('🧪 Test endpoint hit')
  res.status(200).json({ message: 'Test endpoint working!' })
})

// Health check endpoint
app.get('/health', (_, res) => {
  console.log('🏥 Health check requested')
  // Set CORS headers explicitly for the health endpoint
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env['NODE_ENV'] || 'development',
    port: PORT,
    message: 'PathByte Backend is running successfully!'
  })
})

// API routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/roadmaps', roadmapRoutes)
app.use('/api/progress', progressRoutes)
app.use('/api/roadmap-progress', roadmapProgressRoutes)

// 404 handler
app.use(notFound)

// Error handling middleware
app.use(errorHandler)

// Start server
console.log('🔧 About to start server...')
app.listen(PORT, '0.0.0.0', async () => {
  console.log(`🚀 PathByte API server running on port ${PORT}`)
  console.log(`📊 Environment: ${process.env['NODE_ENV'] || 'development'}`)
  console.log(`🔗 Health check: http://0.0.0.0:${PORT}/health`)
  console.log(`🌐 Railway PORT: ${process.env.PORT}`)
  
  logger.info(`🚀 PathByte API server running on port ${PORT}`)
  logger.info(`📊 Environment: ${process.env['NODE_ENV'] || 'development'}`)
  logger.info(`🔗 Health check: http://0.0.0.0:${PORT}/health`)
  logger.info(`🌐 Railway PORT: ${process.env.PORT}`)
  
  console.log('🔧 Server started successfully, about to initialize database...')
  
  // Initialize database
  try {
    console.log('🔧 Testing database connection...')
    await testConnection()
    console.log('🔧 Database connection successful, running migrations...')
    await initializeDatabase()
    console.log('🔧 Database initialization complete!')
  } catch (error) {
    console.error('❌ Database initialization failed:', error)
    logger.error('Failed to initialize database:', error)
    logger.warn('Continuing without database - some features may not work')
    // Don't exit - let the server start and handle database errors gracefully
  }
  
  console.log('🔧 Server fully initialized and ready!')
})

// Add error handling for server startup
app.on('error', (error) => {
  console.error('❌ Server error:', error)
  logger.error('❌ Server error:', error)
})

process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error)
  logger.error('❌ Uncaught Exception:', error)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason)
  logger.error('❌ Unhandled Rejection at:', promise, 'reason:', reason)
})

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully')
  process.exit(0)
})

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully')
  process.exit(0)
})

export default app
