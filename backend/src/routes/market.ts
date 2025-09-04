import express from 'express'
import { logger } from '../utils/logger'

const router = express.Router()

// Get market insights data
router.get('/insights', async (_req, res): Promise<any> => {
  try {
    // Return mock market data for now
    // In the future, this could be fetched from external APIs
    const marketData = {
      skillDemand: [
        { skill: 'React', demand: 'High', growth: '+15%', salary: '$85,000 - $120,000' },
        { skill: 'Node.js', demand: 'High', growth: '+12%', salary: '$80,000 - $115,000' },
        { skill: 'Python', demand: 'Very High', growth: '+18%', salary: '$75,000 - $110,000' },
        { skill: 'TypeScript', demand: 'High', growth: '+20%', salary: '$85,000 - $125,000' },
        { skill: 'AWS', demand: 'Very High', growth: '+25%', salary: '$90,000 - $130,000' },
        { skill: 'Docker', demand: 'High', growth: '+16%', salary: '$80,000 - $120,000' }
      ],
      jobTrends: [
        { role: 'Frontend Developer', openings: 12500, growth: '+8%', avgSalary: '$95,000' },
        { role: 'Backend Developer', openings: 9800, growth: '+12%', avgSalary: '$105,000' },
        { role: 'Full Stack Developer', openings: 15200, growth: '+15%', avgSalary: '$110,000' },
        { role: 'Data Scientist', openings: 6800, growth: '+22%', avgSalary: '$125,000' },
        { role: 'DevOps Engineer', openings: 4200, growth: '+18%', avgSalary: '$115,000' }
      ],
      topCompanies: [
        { name: 'Google', hiring: 'Very Active', focus: 'AI/ML, Cloud' },
        { name: 'Microsoft', hiring: 'Active', focus: 'Azure, Office 365' },
        { name: 'Amazon', hiring: 'Very Active', focus: 'AWS, E-commerce' },
        { name: 'Meta', hiring: 'Active', focus: 'Social Media, VR' },
        { name: 'Netflix', hiring: 'Moderate', focus: 'Streaming, Data' }
      ],
      salaryRanges: {
        entry: { min: 60000, max: 80000, avg: 70000 },
        mid: { min: 80000, max: 120000, avg: 100000 },
        senior: { min: 120000, max: 180000, avg: 150000 },
        lead: { min: 150000, max: 250000, avg: 200000 }
      }
    }

    res.json({
      success: true,
      data: marketData
    })
  } catch (error) {
    logger.error('Error fetching market insights:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to fetch market insights'
    })
  }
})

// Get job market data for specific role
router.get('/jobs/:role', async (req, res): Promise<any> => {
  try {
    const { role } = req.params
    
    // Return mock job data for the specific role
    const jobData = {
      role,
      totalOpenings: Math.floor(Math.random() * 10000) + 5000,
      avgSalary: Math.floor(Math.random() * 50000) + 80000,
      topSkills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'AWS'],
      topLocations: ['San Francisco', 'New York', 'Seattle', 'Austin', 'Remote'],
      growthRate: '+12%',
      companies: ['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix']
    }

    res.json({
      success: true,
      data: jobData
    })
  } catch (error) {
    logger.error('Error fetching job market data:', error)
    res.status(500).json({
      success: false,
      error: 'Failed to fetch job market data'
    })
  }
})

export default router
