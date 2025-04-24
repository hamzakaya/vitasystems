import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import api from './api'

import MultiStepForm from './features/form'
import TrackingLogin from './features/tracking/tracking-login'
import TrackingDashboard from './features/tracking/tracking-dashboard'

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  if (!api.isAuthenticated) {
    return <Navigate to="/tracking" replace />
  }

  return <>{children}</>
}

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Router>
        <Routes>
          <Route path="/" element={<MultiStepForm />} />
          <Route path="/tracking" element={<TrackingLogin />} />
          <Route
            path="/tracking/status"
            element={
              <ProtectedRoute>
                <TrackingDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
