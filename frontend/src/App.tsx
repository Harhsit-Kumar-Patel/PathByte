import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import { ProgressProvider } from './context/ProgressContext'
const LoginPage = lazy(() => import('./pages/LoginPage'))
import LoadingSpinner from './components/ui/LoadingSpinner'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const OnboardingPage = lazy(() => import('./pages/OnboardingPage'))
const DashboardPage = lazy(() => import('./pages/DashboardPage'))
const RoadmapPage = lazy(() => import('./pages/RoadmapPage'))
const SkillRoadmapPage = lazy(() => import('./pages/SkillRoadmapPage'))
const MarketInsightsPage = lazy(() => import('./pages/MarketInsightsPage'))
const CommunityPage = lazy(() => import('./pages/CommunityPage'))
const ProfilePage = lazy(() => import('./pages/ProfilePage'))
const CareerGuidePage = lazy(() => import('./pages/CareerGuidePage'))
const CareerAssessmentPage = lazy(() => import('./pages/CareerAssessmentPage'))

const RoleSelectionPage = lazy(() => import('./pages/RoleSelectionPage'))

function App() {
  return (
    <ProgressProvider>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="/roadmap" element={<ProtectedRoute><RoadmapPage /></ProtectedRoute>} />
            <Route path="/roadmap/:skill" element={<SkillRoadmapPage />} />
            <Route path="/roles" element={<ProtectedRoute><RoleSelectionPage /></ProtectedRoute>} />
            <Route path="/career-guide" element={<CareerGuidePage />} />
            <Route path="/career-assessment" element={<CareerAssessmentPage />} />

            <Route path="/market-insights" element={<ProtectedRoute><MarketInsightsPage /></ProtectedRoute>} />
            <Route path="/community" element={<ProtectedRoute><CommunityPage /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          </Routes>
        </Suspense>
      </Layout>
    </ProgressProvider>
  )
}

export default App
