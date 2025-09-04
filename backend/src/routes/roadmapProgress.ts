import express from 'express'
import { db } from '../config/database'
import { authenticateToken } from '../middleware/auth'
import { logger } from '../utils/logger'

const router = express.Router()

// Get all roadmap progress for authenticated user
router.get('/', authenticateToken, async (req, res): Promise<any> => {
  try {
    const userId = req.user?.id
    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      })
    }

    // Get all roadmap progress for the user
    const roadmapProgress = await db('roadmap_progress')
      .where('user_id', userId)
      .select('*')

    // Get all item progress for each roadmap
    const progressWithItems = await Promise.all(
      roadmapProgress.map(async (roadmap) => {
        const items = await db('roadmap_item_progress')
          .where('roadmap_progress_id', roadmap.id)
          .select('*')
        
        // Group items by type and create boolean arrays
        const groupedItems = items.reduce((acc, item) => {
          if (!acc[item.item_type]) {
            acc[item.item_type] = []
          }
          // Ensure array is large enough
          while (acc[item.item_type].length <= item.item_index) {
            acc[item.item_type].push(false)
          }
          acc[item.item_type][item.item_index] = item.completed
          return acc
        }, {} as any)

        return {
          roleId: roadmap.role_id,
          yearId: roadmap.year_id,
          completionPercentage: roadmap.completion_percentage,
          lastUpdated: roadmap.last_updated,
          items: groupedItems
        }
      })
    )

    // Transform to match frontend format
    const roleProgress = progressWithItems.reduce((acc, progress) => {
      const roleId = progress.roleId
      if (!acc[roleId]) {
        acc[roleId] = {
          roleId,
          yearProgress: {},
          overallProgress: 0
        }
      }
      
      acc[roleId].yearProgress[progress.yearId] = {
        skills: progress.items.skills || [],
        projects: progress.items.projects || [],
        freeResources: progress.items.freeResources || [],
        paidResources: progress.items.paidResources || [],
        individualSkills: {},
        completionPercentage: progress.completionPercentage,
        lastUpdated: progress.lastUpdated
      }
      
      return acc
    }, {} as any)

    // Calculate overall progress for each role
    Object.values(roleProgress).forEach((role: any) => {
      const years = Object.values(role.yearProgress) as any[]
      const totalProgress = years.reduce((sum, year) => sum + year.completionPercentage, 0)
      role.overallProgress = years.length > 0 ? totalProgress / years.length : 0
    })

    res.json({
      success: true,
      data: Object.values(roleProgress)
    })
  } catch (error) {
    logger.error('Error fetching roadmap progress:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to fetch roadmap progress'
    })
  }
})

// Get roadmap progress for specific role and year
router.get('/:roleId/:yearId', authenticateToken, async (req, res): Promise<any> => {
  try {
    const userId = req.user?.id
    const { roleId, yearId } = req.params
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      })
    }

    const roadmapProgress = await db('roadmap_progress')
      .where({
        user_id: userId,
        role_id: roleId,
        year_id: yearId
      })
      .first()

    if (!roadmapProgress) {
      return res.json({
        success: true,
        data: {
          roleId,
          yearId,
          completionPercentage: 0,
          items: {
            skills: [],
            projects: [],
            freeResources: [],
            paidResources: []
          }
        }
      })
    }

    const items = await db('roadmap_item_progress')
      .where('roadmap_progress_id', roadmapProgress.id)
      .select('*')

    // Group items by type and create boolean arrays
    const groupedItems = items.reduce((acc, item) => {
      if (!acc[item.item_type]) {
        acc[item.item_type] = []
      }
      // Ensure array is large enough
      while (acc[item.item_type].length <= item.item_index) {
        acc[item.item_type].push(false)
      }
      acc[item.item_type][item.item_index] = item.completed
      return acc
    }, {} as any)

    res.json({
      success: true,
      data: {
        roleId,
        yearId,
        completionPercentage: roadmapProgress.completion_percentage,
        items: groupedItems
      }
    })
  } catch (error) {
    logger.error('Error fetching roadmap progress:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to fetch roadmap progress'
    })
  }
})

// Update roadmap item progress
router.put('/:roleId/:yearId/:itemType/:itemIndex', authenticateToken, async (req, res): Promise<any> => {
  try {
    const userId = req.user?.id
    const { roleId, yearId, itemType, itemIndex } = req.params
    const { completed, notes } = req.body
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      })
    }

    // Validate item type
    const validTypes = ['skills', 'projects', 'freeResources', 'paidResources']
    if (!itemType || !validTypes.includes(itemType)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid item type'
      })
    }

    const trx = await db.transaction()
    
    try {
      // Get or create roadmap progress
      let roadmapProgress = await trx('roadmap_progress')
        .where({
          user_id: userId,
          role_id: roleId,
          year_id: yearId
        })
        .first()
      
      if (!roadmapProgress) {
        const [newRoadmap] = await trx('roadmap_progress')
          .insert({
            user_id: userId,
            role_id: roleId,
            year_id: yearId,
            completion_percentage: 0
          })
          .returning('*')
        roadmapProgress = newRoadmap
      }
      
      // Update or create item progress
      const existingItem = await trx('roadmap_item_progress')
        .where({
          roadmap_progress_id: roadmapProgress.id,
          item_type: itemType,
          item_index: parseInt(itemIndex || '0')
        })
        .first()
      
      if (existingItem) {
        await trx('roadmap_item_progress')
          .where('id', existingItem.id)
          .update({
            completed,
            completed_at: completed ? new Date() : null,
            notes: notes || existingItem.notes,
            updated_at: new Date()
          })
      } else {
        await trx('roadmap_item_progress')
          .insert({
            roadmap_progress_id: roadmapProgress.id,
            item_type: itemType,
            item_index: parseInt(itemIndex || '0'),
            completed,
            completed_at: completed ? new Date() : null,
            notes
          })
      }
      
      await trx.commit()
      
      res.json({
        success: true,
        message: 'Roadmap item progress updated'
      })
    } catch (error) {
      await trx.rollback()
      throw error
    }
  } catch (error) {
    logger.error('Error updating roadmap item progress:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to update roadmap item progress'
    })
  }
})

// Reset roadmap progress for a role
router.delete('/:roleId', authenticateToken, async (req, res): Promise<any> => {
  try {
    const userId = req.user?.id
    const { roleId } = req.params
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        error: 'User not authenticated'
      })
    }

    // Get all roadmap progress for this role
    const roadmapProgress = await db('roadmap_progress')
      .where({
        user_id: userId,
        role_id: roleId
      })
      .select('id')
    
    // Delete all item progress first (due to foreign key constraint)
    for (const roadmap of roadmapProgress) {
      await db('roadmap_item_progress')
        .where('roadmap_progress_id', roadmap.id)
        .del()
    }
    
    // Delete roadmap progress
    await db('roadmap_progress')
      .where({
        user_id: userId,
        role_id: roleId
      })
      .del()
    
    res.json({
      success: true,
      message: 'Roadmap progress reset successfully'
    })
  } catch (error) {
    logger.error('Error resetting roadmap progress:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to reset roadmap progress'
    })
  }
})

export default router
