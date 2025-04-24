export interface TrackingData {
  name: string
  email: string
  phone: string
  company: string
  services: string[]
  budget: string
  created_at: string
}

export interface TrackingHook {
  isLoading: boolean
  isAuthenticated: boolean
  trackingData: TrackingData | null
  logout: () => Promise<void>
  fetchTrackingData: () => Promise<void>
}
