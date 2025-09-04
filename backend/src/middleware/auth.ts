import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { db } from '../config/database'
import { logger } from '../utils/logger'

// Extend Request interface to include user
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string
        email: string
      }
    }
  }
}

export const authenticateToken = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1] // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'Access token required'
      })
    }

    // Verify token
    const decoded = jwt.verify(token, process.env['JWT_SECRET'] || 'your-secret-key') as any
    
    if (!decoded.userId) {
      return res.status(401).json({
        success: false,
        error: 'Invalid token format'
      })
    }

    // Check if user exists and is active
    const user = await db('users')
      .where('id', decoded.userId)
      .where('is_active', true)
      .first()

    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'User not found or inactive'
      })
    }

    // Add user info to request
    req.user = {
      id: user.id,
      email: user.email
    }

    next()
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        success: false,
        error: 'Invalid or expired token'
      })
    }

    logger.error('Authentication middleware error:', error)
    return res.status(500).json({
      success: false,
      error: 'Authentication failed'
    })
  }
}
