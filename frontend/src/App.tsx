import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import { ProgressProvider } from './context/ProgressContext'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} />
          
          {/* Protected Routes with Layout */}
          <Route path="/onboarding" element={
            <ProtectedRoute>
              <Layout>
                <OnboardingPage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Layout>
                <DashboardPage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/career-assessment" element={
            <ProtectedRoute>
              <Layout>
                <CareerAssessmentPage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/career-guide" element={
            <ProtectedRoute>
              <Layout>
                <CareerGuidePage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/role-selection" element={
            <ProtectedRoute>
              <Layout>
                <RoleSelectionPage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/roadmap" element={
            <ProtectedRoute>
              <Layout>
                <RoadmapPage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/roadmap/:skill" element={
            <ProtectedRoute>
              <Layout>
                <SkillRoadmapPage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/community" element={
            <ProtectedRoute>
              <Layout>
                <CommunityPage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/market-insights" element={
            <ProtectedRoute>
              <Layout>
                <MarketInsightsPage />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Layout>
                <ProfilePage />
              </Layout>
            </ProtectedRoute>
          } />
        </Routes>
      </Suspense>
    </ProgressProvider>
  )
}

export default App