import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useTracking from '../../../hooks/useTracking'
import Header from '../../Header'
import { ChatIcon } from './icons'
import { ErrorMessage } from './error-message'
import { TrackingInput } from './tracking-input'
import { Button } from './button'

export default function TrackingLogin() {
  const [trackingCode, setTrackingCode] = useState<string>('')
  const { login, isAuthenticated, error } = useTracking()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/tracking/status')
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.preventDefault()
    const success = await login(trackingCode)

    if (success) {
      navigate('/tracking/status')
    }
  }

  return (
    <>
      <Header currentStep={7} />

      <div className="bg-white rounded-3xl shadow-sm w-full max-w-2xl mx-auto overflow-hidden transition-all duration-300 pt-8">
        <div className="px-12 pb-6 transition-all duration-500 ease-in-out min-h-96">
          <div className="animate-fadeIn text-center">
            <ChatIcon />

            <h2 className="text-xl font-semibold text-indigo-950 mb-4">
              Proje Takip Numarasını Giriniz
            </h2>

            <p className="text-gray-500 mb-8">
              Projenizin teklif sürecini sorgulamak için takip kodunu giriniz.
            </p>

            <ErrorMessage error={error} />
            <TrackingInput value={trackingCode} onChange={setTrackingCode} />
            <Button onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  )
}
