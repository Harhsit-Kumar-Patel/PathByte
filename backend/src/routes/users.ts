import express from 'express'
import { db } from '../config/database'
import { authenticateToken } from '../middleware/auth'
import { logger } from '../utils/logger'

const router = express.Router()

// Get all users (admin only - for future use)
router.get('/', authenticateToken, async (_req, res): Promise<any> => {
  try {
    // For now, just return a simple response
    // In the future, this could be used for admin functionality
    res.json({
      success: true,
      message: 'Users endpoint - Admin functionality coming soon',
      data: []
    })
  } catch (error) {
    logger.error('Error fetching users:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to fetch users'
    })
  }
})

// Get user statistics
router.get('/stats', authenticateToken, async (req, res): Promise<any> => {
  try {
    const userId = req.user?.id
    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      })
    }

    // Get user's roadmap progress count
    const roadmapCount = await db('roadmap_progress')
      .where('user_id', userId)
      .count('* as count')
      .first()

    // Get user's individual skill progress count
    const skillCount = await db('individual_skill_progress')
      .where('user_id', userId)
      .count('* as count')
      .first()

    res.json({
      success: true,
      data: {
        roadmapProgressCount: parseInt(roadmapCount?.['count'] as string) || 0,
        skillProgressCount: parseInt(skillCount?.['count'] as string) || 0
      }
    })
  } catch (error) {
    logger.error('Error fetching user stats:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to fetch user statistics'
    })
  }
})

export default router
