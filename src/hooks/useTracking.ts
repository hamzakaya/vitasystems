import { useState } from 'react'
import api from '../api'

export default function useTracking(): TrackingHook {
  const [state, setState] = useState<TrackingState>({
    isLoading: false,
    isAuthenticated: api.isAuthenticated,
    trackingData: null,
    error: null,
  })

  function updateState(nextState: Partial<TrackingState>) {
    setState((prev) => ({ ...prev, ...nextState }))
  }

  // Login with tracking number
  async function login(trackingNumber: string): Promise<boolean> {
    updateState({ isLoading: true, error: null })

    if (!trackingNumber.trim()) {
      updateState({ error: 'Lütfen takip kodunu giriniz' })
      return false
    }

    const request = await api.login(trackingNumber)

    if (!request.success) {
      updateState({ error: request.error?.message })
      return false
    }

    updateState({ isAuthenticated: true })
    return true
  }

  // Logout
  async function logout(): Promise<void> {
    updateState({ isLoading: true })

    try {
      await api.logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setState({
        isLoading: false,
        isAuthenticated: false,
        trackingData: null,
        error: null,
      })
    }
  }

  // Fetch tracking data
  async function fetchTrackingData(): Promise<void> {
    if (!api.isAuthenticated) {
      updateState({
        isAuthenticated: false,
        error: 'Authentication required',
      })
      return
    }

    updateState({ isLoading: true, error: null })

    try {
      const data = await api.getTracking()
      updateState({ trackingData: data })
    } catch (error) {
      console.error('Tracking data fetch error:', error)

      setState((prev) => ({
        ...prev,
        error:
          error instanceof Error ? error.message : 'Takip bilgileri alınamadı.',
        isAuthenticated:
          error instanceof Error &&
          error.message.includes('Authentication expired')
            ? false
            : prev.isAuthenticated,
        isLoading: false,
      }))
    } finally {
      updateState({ isLoading: false })
    }
  }

  return {
    ...state,
    login,
    logout,
    fetchTrackingData,
  }
}

interface TrackingState {
  isLoading: boolean
  isAuthenticated: boolean
  trackingData?: {
    id: number
    name: string
    email: string
    phone: string
    company: string
    services: string[]
    budget: string
    tracking_number: string
    status: string
    created_at: string
    updated_at: string
  } | null
  error: string | null
}

interface TrackingHook extends TrackingState {
  login: (trackingNumber: string) => Promise<boolean>
  logout: () => Promise<void>
  fetchTrackingData: () => Promise<void>
}
