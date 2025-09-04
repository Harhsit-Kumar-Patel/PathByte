import express from 'express'

import { logger } from '../utils/logger'

const router = express.Router()

// Get available roadmaps
router.get('/', async (_req, res): Promise<any> => {
  try {
    // Return static roadmap data for now
    // In the future, this could be stored in the database
    const roadmaps = [
      {
        id: 'frontend',
        name: 'Frontend Developer',
        description: 'Learn modern frontend development with React, TypeScript, and more',
        difficulty: 'Beginner to Advanced',
        duration: '6-12 months',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js']
      },
      {
        id: 'backend',
        name: 'Backend Developer',
        description: 'Master server-side development with Node.js, databases, and APIs',
        difficulty: 'Intermediate to Advanced',
        duration: '8-12 months',
        skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS']
      },
      {
        id: 'fullstack',
        name: 'Full Stack Developer',
        description: 'Become proficient in both frontend and backend development',
        difficulty: 'Intermediate to Advanced',
        duration: '12-18 months',
        skills: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'CI/CD']
      },
      {
        id: 'mobile',
        name: 'Mobile Developer',
        description: 'Build native and cross-platform mobile applications',
        difficulty: 'Beginner to Advanced',
        duration: '6-10 months',
        skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
      },
      {
        id: 'datascientist',
        name: 'Data Scientist',
        description: 'Analyze data and build machine learning models',
        difficulty: 'Advanced',
        duration: '12-18 months',
        skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistics', 'TensorFlow']
      }
    ]

    res.json({
      success: true,
      data: roadmaps
    })
  } catch (error) {
    logger.error('Error fetching roadmaps:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to fetch roadmaps'
    })
  }
})

// Get specific roadmap details
router.get('/:roadmapId', async (req, res): Promise<any> => {
  try {
    const { roadmapId } = req.params
    
    // For now, return a basic roadmap structure
    // In the future, this could be stored in the database
    const roadmap = {
      id: roadmapId,
      name: `${roadmapId.charAt(0).toUpperCase() + roadmapId.slice(1)} Developer`,
      description: `Comprehensive roadmap for ${roadmapId} development`,
      years: {
        '0-1': {
          title: 'Foundation Year',
          goal: 'Build fundamental skills and understanding',
          skills: ['Basic concepts', 'Core technologies', 'Best practices'],
          projects: ['Hello World project', 'Basic application'],
          freeResources: [
            { title: 'Official Documentation', description: 'Start with official docs' },
            { title: 'Free Online Course', description: 'Comprehensive beginner course' }
          ],
          paidResources: [
            { title: 'Premium Course', description: 'Advanced concepts and projects' }
          ]
        },
        '1-3': {
          title: 'Intermediate Development',
          goal: 'Build real-world applications and gain experience',
          skills: ['Advanced concepts', 'Frameworks', 'Testing'],
          projects: ['Portfolio project', 'Real-world application'],
          freeResources: [
            { title: 'Community Tutorials', description: 'Learn from the community' }
          ],
          paidResources: [
            { title: 'Professional Course', description: 'Industry-level training' }
          ]
        }
      }
    }

    res.json({
      success: true,
      data: roadmap
    })
  } catch (error) {
    logger.error('Error fetching roadmap details:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to fetch roadmap details'
    })
  }
})

export default router
