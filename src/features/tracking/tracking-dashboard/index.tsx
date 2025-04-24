import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useTracking from '../../../hooks/useTracking'
import Header from '../../Header'
import { ProjectInfo, ProjectStatus, ProjectTracker } from './project'
import { Button } from './ui'

function ProjectSummary() {
  const {
    isLoading,
    trackingData,
    isAuthenticated,
    logout,
    fetchTrackingData,
  } = useTracking()

  const navigate = useNavigate()

  useEffect(() => {
    if (isLoading || trackingData) return
    if (isAuthenticated) fetchTrackingData()
    else navigate('/tracking')
  }, [isAuthenticated, isLoading, trackingData, fetchTrackingData, navigate])

  const handleLogout = async (): Promise<void> => {
    await logout()
    navigate('/')
  }

  if (!trackingData) return null

  return (
    <div>
      <Header currentStep={6}>
        <Button onClick={handleLogout}>Çıkış</Button>
      </Header>

      <div className="bg-white rounded-3xl shadow-sm w-full max-w-2xl mx-auto overflow-hidden transition-all duration-300 py-8 px-12">
        <div className="space-y-6 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-center text-gray-900">
              Proje Teklif Bilgileriniz
            </h1>
            <div className="h-px bg-gray-200 w-full my-4"></div>
          </div>

          <ProjectStatus />
        </div>

        <ProjectInfo trackingData={trackingData} />
        <ProjectTracker />
      </div>
    </div>
  )
}

export default ProjectSummary
