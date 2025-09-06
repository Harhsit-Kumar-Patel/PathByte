import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Joi from 'joi'
import { v4 as uuidv4 } from 'uuid'
import { db } from '../config/database'
import { logger } from '../utils/logger'
import { authenticateToken } from '../middleware/auth'

const router = express.Router()

// Validation schemas
const registerSchema = Joi.object({
  firstName: Joi.string().min(2).max(100).required(),
  lastName: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  locationCity: Joi.string().required(),
  locationState: Joi.string().required(),
  locationCountry: Joi.string().required(),
  experienceLevel: Joi.string().valid('beginner', 'intermediate', 'advanced', 'expert').required(),
  targetRole: Joi.string().required()
})

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

// Register new user
router.post('/register', async (req, res) => {
  try {
    // Validate input
    const { error, value } = registerSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        success: false,
        error: error.details?.[0]?.message || 'Validation error'
      })
    }

    const {
      firstName,
      lastName,
      email,
      password,
      locationCity,
      locationState,
      locationCountry,
      experienceLevel,
      targetRole
    } = value

    // Check if user already exists
    const existingUser = await db('users').where('email', email).first()
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User with this email already exists'
      })
    }

    // Hash password
    const saltRounds = 12
    const passwordHash = await bcrypt.hash(password, saltRounds)

    // Create user
    const userId = uuidv4()
    const [user] = await db('users').insert({
      id: userId,
      first_name: firstName,
      last_name: lastName,
      email,
      password_hash: passwordHash,
      location_city: locationCity,
      location_state: locationState,
      location_country: locationCountry,
      experience_level: experienceLevel,
      target_role: targetRole
    }).returning(['id', 'email', 'first_name', 'last_name', 'experience_level', 'target_role'])

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env['JWT_SECRET'] || 'your-secret-key',
      { expiresIn: '7d' }
    )

    logger.info(`New user registered: ${email}`)

    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user,
        token
      }
    })

  } catch (error) {
    logger.error('Registration error:', error)
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
})

// Login user
router.post('/login', async (req, res) => {
  try {
    // Validate input
    const { error, value } = loginSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        success: false,
        error: error.details?.[0]?.message || 'Validation error'
      })
    }

    const { email, password } = value

    // Find user
    const user = await db('users')
      .where('email', email)
      .where('is_active', true)
      .first()

    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      })
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password_hash)
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      })
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env['JWT_SECRET'] || 'your-secret-key',
      { expiresIn: '7d' }
    )

    logger.info(`User logged in: ${email}`)

    return res.json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          experienceLevel: user.experience_level,
          targetRole: user.target_role,
          subscriptionTier: user.subscription_tier
        },
        token
      }
    })

  } catch (error) {
    logger.error('Login error:', error)
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
})


// Test database connection
router.get('/test-db', async (_, res) => {
  try {
    const result = await db.raw('SELECT 1 as test')
    res.json({
      success: true,
      message: 'Database connection successful',
      data: result.rows[0]
    })
  } catch (error) {
    logger.error('Database test error:', error)
    res.status(500).json({
      success: false,
      error: 'Database connection failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

// Test auth routes
router.get('/test-auth', (_, res) => {
  res.json({
    success: true,
    message: 'Auth routes are working!'
  })
})

// Create users table manually
router.get('/create-users-table', async (_, res) => {
  try {
    console.log('🔧 Creating users table manually...')
    
    // Check if table exists
    const hasUsers = await db.schema.hasTable('users')
    if (hasUsers) {
      return res.json({
        success: true,
        message: 'Users table already exists'
      })
    }
    
    // Create users table
    await db.schema.createTable('users', (table) => {
      table.string('id', 36).primary()
      table.string('email', 255).unique().notNullable()
      table.string('password_hash', 255).notNullable()
      table.string('first_name', 100).notNullable()
      table.string('last_name', 100).notNullable()
      table.text('avatar_url')
      table.string('location_city', 100).notNullable()
      table.string('location_state', 100).notNullable()
      table.string('location_country', 100).notNullable()
      table.string('experience_level', 20).notNullable()
      table.string('target_role', 100).notNullable()
      table.string('subscription_tier', 20).defaultTo('free')
      table.boolean('is_active').defaultTo(true)
      table.timestamp('created_at').defaultTo(db.fn.now())
      table.timestamp('updated_at').defaultTo(db.fn.now())
    })
    
    console.log('✅ Users table created successfully')
    
    return res.json({
      success: true,
      message: 'Users table created successfully'
    })
  } catch (error) {
    console.error('❌ Error creating users table:', error)
    logger.error('Error creating users table:', error)
    return res.status(500).json({
      success: false,
      error: 'Failed to create users table',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

// Get current user profile
router.get('/me', authenticateToken, async (req, res): Promise<any> => {
  try {
    const userId = req.user?.id
    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      })
    }

    const user = await db('users').where('id', userId).first()
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      })
    }

    // Transform the response to match frontend expectations
    const transformedUser = {
      id: user.id,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      experienceLevel: user.experience_level,
      targetRole: user.target_role,
      locationCity: user.location_city,
      locationState: user.location_state,
      locationCountry: user.location_country,
      createdAt: user.created_at,
      updatedAt: user.updated_at
    }

    res.json({
      success: true,
      data: transformedUser
    })
  } catch (error) {
    logger.error('Get user profile error:', error)
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
})

// Update user profile
router.put('/profile', authenticateToken, async (req, res): Promise<any> => {
  try {
    const userId = req.user?.id
    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      })
    }

    const { firstName, lastName, experienceLevel, targetRole, locationCity, locationState, locationCountry } = req.body

    logger.info(`Profile update request for user ${userId}:`, { firstName, lastName, experienceLevel, targetRole, locationCity, locationState, locationCountry })
    logger.info(`Full request body:`, req.body)

    // Validate required fields
    if (!firstName || !lastName || !experienceLevel || !targetRole) {
      return res.status(400).json({
        success: false,
        error: 'First name, last name, experience level, and target role are required'
      })
    }

    // Update user profile with correct column names
    const updateData: any = {
      first_name: firstName,
      last_name: lastName,
      experience_level: experienceLevel,
      target_role: targetRole,
      location_city: locationCity,
      location_state: locationState,
      location_country: locationCountry
    }

    logger.info(`Updating user ${userId} with data:`, updateData)

    const updatedUser = await db('users')
      .where('id', userId)
      .update(updateData)
      .returning(['id', 'email', 'first_name', 'last_name', 'experience_level', 'target_role', 'location_city', 'location_state', 'location_country', 'created_at'])

    if (updatedUser.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      })
    }

    logger.info(`Profile updated successfully for user ${userId}`)

    // Transform the response to match frontend expectations
    const transformedUser = {
      id: updatedUser[0].id,
      email: updatedUser[0].email,
      firstName: updatedUser[0].first_name,
      lastName: updatedUser[0].last_name,
      experienceLevel: updatedUser[0].experience_level,
      targetRole: updatedUser[0].target_role,
      locationCity: updatedUser[0].location_city,
      locationState: updatedUser[0].location_state,
      locationCountry: updatedUser[0].location_country,
      createdAt: updatedUser[0].created_at,
      updatedAt: new Date()
    }

    res.json({
      success: true,
      data: transformedUser
    })
  } catch (error) {
    logger.error('Update profile error:', error)
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
})

export default router
