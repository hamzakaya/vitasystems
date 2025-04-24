export type TrackingError = string | null

export interface UseTrackingReturn {
  login: (code: string) => Promise<boolean>
  isAuthenticated: boolean
  error: TrackingError
}
