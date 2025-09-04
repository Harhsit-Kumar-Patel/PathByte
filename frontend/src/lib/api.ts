import axios from 'axios'

// Set the API base URL to point to the backend server (without /api suffix)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
  timeout: 10000, // 10 second timeout
  headers: {
    'Content-Type': 'application/json',
  }
})

// Request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('pb_token')
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error)
    if (error.code === 'ECONNREFUSED') {
      console.error('Cannot connect to backend server. Please ensure it is running on http://localhost:5000')
    }
    return Promise.reject(error)
  }
)

export default api


