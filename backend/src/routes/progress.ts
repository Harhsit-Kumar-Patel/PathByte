import express from 'express'
import { db } from '../config/database'

const router = express.Router()

// Get all progress for a user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params
    
    // Get individual skill progress
    const individualSkills = await db('individual_skill_progress')
      .where('user_id', userId)
      .select('*')
    
    // Get sub-skill progress for each individual skill
    const progressWithSubSkills = await Promise.all(
      individualSkills.map(async (skill) => {
        const subSkills = await db('sub_skill_progress')
          .where('individual_skill_progress_id', skill.id)
          .select('*')
        
        return {
          ...skill,
          subSkills
        }
      })
    )
    
    res.json({ individualSkills: progressWithSubSkills })
  } catch (error) {
    console.error('Error fetching progress:', error)
    res.status(500).json({ error: 'Failed to fetch progress' })
  }
})

// Get progress for a specific role and year
router.get('/:userId/:roleId/:yearId', async (req, res) => {
  try {
    const { userId, roleId, yearId } = req.params
    
    const individualSkills = await db('individual_skill_progress')
      .where({
        user_id: userId,
        role_id: roleId,
        year_id: yearId
      })
      .select('*')
    
    const progressWithSubSkills = await Promise.all(
      individualSkills.map(async (skill) => {
        const subSkills = await db('sub_skill_progress')
          .where('individual_skill_progress_id', skill.id)
          .select('*')
        
        return {
          ...skill,
          subSkills
        }
      })
    )
    
    res.json({ individualSkills: progressWithSubSkills })
  } catch (error) {
    console.error('Error fetching progress:', error)
    res.status(500).json({ error: 'Failed to fetch progress' })
  }
})

// Update sub-skill progress
router.put('/:userId/:roleId/:yearId/:skillName/:subSkillName', async (req, res) => {
  try {
    const { userId, roleId, yearId, skillName, subSkillName } = req.params
    const { completed, notes } = req.body
    
    // Start a transaction
    const trx = await db.transaction()
    
    try {
      // Get or create individual skill progress
      let individualSkill = await trx('individual_skill_progress')
        .where({
          user_id: userId,
          role_id: roleId,
          year_id: yearId,
          skill_name: skillName
        })
        .first()
      
      if (!individualSkill) {
        const [newSkill] = await trx('individual_skill_progress')
          .insert({
            user_id: userId,
            role_id: roleId,
            year_id: yearId,
            skill_name: skillName,
            overall_progress: 0
          })
          .returning('*')
        individualSkill = newSkill
      }
      
      // Update or create sub-skill progress
      const existingSubSkill = await trx('sub_skill_progress')
        .where({
          individual_skill_progress_id: individualSkill.id,
          sub_skill_name: subSkillName
        })
        .first()
      
      if (existingSubSkill) {
        await trx('sub_skill_progress')
          .where('id', existingSubSkill.id)
          .update({
            completed,
            completed_at: completed ? new Date() : null,
            notes: notes || existingSubSkill.notes,
            updated_at: new Date()
          })
      } else {
        await trx('sub_skill_progress')
          .insert({
            individual_skill_progress_id: individualSkill.id,
            sub_skill_name: subSkillName,
            completed,
            completed_at: completed ? new Date() : null,
            notes
          })
      }
      
      await trx.commit()
      
      res.json({ success: true, message: 'Sub-skill progress updated' })
    } catch (error) {
      await trx.rollback()
      throw error
    }
  } catch (error) {
    console.error('Error updating sub-skill progress:', error)
    res.status(500).json({ error: 'Failed to update sub-skill progress' })
  }
})

// Get sub-skill progress
router.get('/:userId/:roleId/:yearId/:skillName/:subSkillName', async (req, res) => {
  try {
    const { userId, roleId, yearId, skillName, subSkillName } = req.params
    
    const individualSkill = await db('individual_skill_progress')
      .where({
        user_id: userId,
        role_id: roleId,
        year_id: yearId,
        skill_name: skillName
      })
      .first()
    
    if (!individualSkill) {
      return res.json({ completed: false, notes: null })
    }
    
    const subSkill = await db('sub_skill_progress')
      .where({
        individual_skill_progress_id: individualSkill.id,
        sub_skill_name: subSkillName
      })
      .first()
    
    return res.json({
      completed: subSkill?.completed || false,
      notes: subSkill?.notes || null,
      completedAt: subSkill?.completed_at || null
    })
  } catch (error) {
    console.error('Error fetching sub-skill progress:', error)
    return res.status(500).json({ error: 'Failed to fetch sub-skill progress' })
  }
})

// Reset progress for a role
router.delete('/:userId/:roleId', async (req, res) => {
  try {
    const { userId, roleId } = req.params
    
    // Get all individual skill progress for this role
    const individualSkills = await db('individual_skill_progress')
      .where({
        user_id: userId,
        role_id: roleId
      })
      .select('id')
    
    // Delete all sub-skill progress first (due to foreign key constraint)
    for (const skill of individualSkills) {
      await db('sub_skill_progress')
        .where('individual_skill_progress_id', skill.id)
        .del()
    }
    
    // Delete individual skill progress
    await db('individual_skill_progress')
      .where({
        user_id: userId,
        role_id: roleId
      })
      .del()
    
    res.json({ success: true, message: 'Progress reset successfully' })
  } catch (error) {
    console.error('Error resetting progress:', error)
    res.status(500).json({ error: 'Failed to reset progress' })
  }
})

export default router
