import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react'
import { api } from '@/lib/api'

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  experienceLevel: string
  targetRole: string
  locationCity?: string
  locationState?: string
  locationCountry?: string
}

type AuthContextValue = {
  user: User | null
  token: string | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (data: Record<string, string>) => Promise<void>
  logout: () => void
  updateProfile: (data: Partial<User>) => Promise<void>
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  // Fetch user data from stored token
  const fetchUserData = useCallback(async (token: string) => {
    try {
      const res = await api.get('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
      return res.data.data
    } catch (error) {
      console.error('Failed to fetch user data:', error)
      return null
    }
  }, [])

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('pb_token')
      if (storedToken) {
        setToken(storedToken)
        // Fetch user data
        const userData = await fetchUserData(storedToken)
        if (userData) {
          setUser(userData)
        } else {
          // Token is invalid, remove it
          localStorage.removeItem('pb_token')
          setToken(null)
        }
      }
      setLoading(false)
    }

    initializeAuth()
  }, [fetchUserData])

  const login = useCallback(async (email: string, password: string) => {
    try {
      const res = await api.post('/api/auth/login', { email, password })
      const { token: t, user: u } = res.data.data
      localStorage.setItem('pb_token', t)
      setToken(t)
      setUser(u)
    } catch (error: any) {
      console.error('Login error:', error)
      throw error
    }
  }, [])

  const register = useCallback(async (data: Record<string, string>) => {
    try {
      console.log('Attempting registration with data:', data)
      console.log('API base URL:', api.defaults.baseURL)
      
      const res = await api.post('/api/auth/register', data)
      console.log('Registration response:', res.data)
      
      const { token: t, user: u } = res.data.data
      localStorage.setItem('pb_token', t)
      setToken(t)
      setUser(u)
    } catch (error: any) {
      console.error('Registration error:', error)
      console.error('Error response:', error.response?.data)
      console.error('Error status:', error.response?.status)
      throw error
    }
  }, [])

  const updateProfile = useCallback(async (data: Partial<User>) => {
    try {
      if (!token) throw new Error('No authentication token')
      
      const res = await api.put('/api/auth/profile', data, {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      const updatedUser = res.data.data
      setUser(updatedUser)
      
      // Update localStorage if needed
      if (res.data.token) {
        localStorage.setItem('pb_token', res.data.token)
        setToken(res.data.token)
      }
      
      return updatedUser
    } catch (error: any) {
      console.error('Profile update error:', error)
      throw error
    }
  }, [token])

  const refreshUser = useCallback(async () => {
    if (!token) return
    
    try {
      const userData = await fetchUserData(token)
      if (userData) {
        setUser(userData)
      }
    } catch (error) {
      console.error('Failed to refresh user data:', error)
    }
  }, [token, fetchUserData])

  const logout = useCallback(() => {
    localStorage.removeItem('pb_token')
    setToken(null)
    setUser(null)
  }, [])

  const value = useMemo<AuthContextValue>(() => ({ 
    user, 
    token, 
    loading, 
    login, 
    register, 
    logout, 
    updateProfile, 
    refreshUser 
  }), [user, token, loading, login, register, logout, updateProfile, refreshUser])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}


