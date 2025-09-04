import knex, { Knex } from 'knex'
import knexConfig from '../knexfile'
import { logger } from '../utils/logger'

const environment = process.env.NODE_ENV || 'development'

// Support both individual credentials and DATABASE_URL
let config: Knex.Config
if (process.env.DATABASE_URL) {
  // Use DATABASE_URL (Render, Heroku, etc.)
  config = {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
} else {
  // Use individual credentials (Railway, etc.)
  config = knexConfig[environment]
  if (!config) {
    throw new Error(`Database configuration not found for environment: ${environment}`)
  }
}

export const db = knex(config)

// Test database connection
export const testConnection = async () => {
  try {
    await db.raw('SELECT 1')
    logger.info('✅ Database connection successful')
  } catch (error) {
    logger.error('❌ Database connection failed:', error)
    process.exit(1)
  }
}

// Initialize database tables
export const initializeDatabase = async () => {
  try {
    console.log('🔧 Starting database initialization...')
    
    // Check if tables exist
    const hasUsers = await db.schema.hasTable('users')
    console.log('🔧 Users table exists:', hasUsers)
    
    if (!hasUsers) {
      console.log('📊 Initializing database tables...')
      logger.info('📊 Initializing database tables...')
      
      // Run migrations
      console.log('🔧 Running migrations...')
      await db.migrate.latest()
      console.log('✅ Database migrations completed')
      logger.info('✅ Database migrations completed')
      
      // Run seeds if in development
      if (environment === 'development') {
        await db.seed.run()
        logger.info('✅ Database seeds completed')
      }
    } else {
      console.log('🔧 Users table already exists, skipping migrations')
    }
    
    console.log('✅ Database initialization completed')
    logger.info('✅ Database initialization completed')
  } catch (error) {
    console.error('❌ Database initialization failed:', error)
    logger.error('❌ Database initialization failed:', error)
    throw error
  }
}

// Graceful shutdown
export const closeDatabase = async () => {
  try {
    await db.destroy()
    logger.info('✅ Database connection closed')
  } catch (error) {
    logger.error('❌ Error closing database connection:', error)
  }
}
