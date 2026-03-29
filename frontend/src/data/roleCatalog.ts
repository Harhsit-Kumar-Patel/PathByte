export interface RoleCatalogEntry {
  key: string
  label: string
}

export const roleCatalog: RoleCatalogEntry[] = [
  { key: 'frontend', label: 'Frontend Developer' },
  { key: 'backend', label: 'Backend Developer' },
  { key: 'fullstack', label: 'Full Stack Developer' },
  { key: 'mobile', label: 'Mobile Developer' },
  { key: 'game', label: 'Game Developer' },
  { key: 'datascientist', label: 'Data Scientist' },
  { key: 'dataengineer', label: 'Data Engineer' },
  { key: 'mle', label: 'ML Engineer' },
  { key: 'aispecialist', label: 'AI Specialist' },
  { key: 'generativeai', label: 'Generative AI Engineer' },
  { key: 'computervision', label: 'Computer Vision Engineer' },
  { key: 'nlpengineer', label: 'NLP Engineer' },
  { key: 'devops', label: 'DevOps Engineer' },
  { key: 'cloudengineer', label: 'Cloud Engineer' },
  { key: 'sre', label: 'Site Reliability Engineer' },
  { key: 'cybersecurity', label: 'Cybersecurity Engineer' },
  { key: 'qaengineer', label: 'QA Engineer' },
  { key: 'uidesigner', label: 'UI/UX Designer' },
  { key: 'productmanager', label: 'Product Manager' },
  { key: 'techmanager', label: 'Tech Manager' },
  { key: 'cto', label: 'Chief Technology Officer' },
  { key: 'blockchain', label: 'Blockchain Developer' },
  { key: 'web3developer', label: 'Web3 Developer' },
  { key: 'systemprogrammer', label: 'Systems Programmer' },
  { key: 'compilerengineer', label: 'Compiler Engineer' },
  { key: 'networkengineer', label: 'Network Engineer' },
  { key: 'embeddedengineer', label: 'Embedded Systems Engineer' },
  { key: 'databaseadmin', label: 'Database Administrator' },
  { key: 'datavisualization', label: 'Data Visualization Engineer' },
  { key: 'aiops', label: 'AI Operations Engineer' },
  { key: 'quantumcomputing', label: 'Quantum Computing Engineer' },
  { key: 'technicalwriter', label: 'Technical Writer' },
  { key: 'fintech', label: 'Fintech Engineer' },
  { key: 'healthcare', label: 'Healthcare Data Engineer' },
  { key: 'gaming', label: 'Gaming Engineer' },
  { key: 'edutech', label: 'Edutech Engineer' }
]

const aliasMap: Record<string, string> = {
  'full-stack developer': 'fullstack',
  'mobile app developer': 'mobile',
  'machine learning engineer': 'mle',
  'site reliability engineer': 'sre',
  'ai operations engineer': 'aiops',
  'systems programmer': 'systemprogrammer',
  'embedded systems engineer': 'embeddedengineer'
}

export const normalizeRoleKey = (value?: string) => {
  const normalized = value?.trim().toLowerCase() || ''

  if (!normalized) return ''

  const directMatch = roleCatalog.find((role) => role.key === normalized)
  if (directMatch) return directMatch.key

  const aliasMatch = aliasMap[normalized]
  if (aliasMatch) return aliasMatch

  const collapsed = normalized.replace(/[^a-z]/g, '')
  const catalogMatch = roleCatalog.find((role) => role.key === collapsed || role.label.toLowerCase().replace(/[^a-z]/g, '') === collapsed)

  return catalogMatch?.key || collapsed
}

export const getRoleLabel = (value?: string) => {
  const normalizedKey = normalizeRoleKey(value)
  return roleCatalog.find((role) => role.key === normalizedKey)?.label || value || 'Unknown role'
}
