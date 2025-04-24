export type ApiValidationErrors = Record<string, string[]>

export interface ApiErrorShape {
  message: string
  status: number
  errors?: ApiValidationErrors
  raw?: any
}

export interface ApiResponse<T> {
  data: T
  errors?: ApiValidationErrors
}

export interface TokenResponse {
  token: string
}

export interface RegisterResponse {
  tracking_number: string
}

export interface LoginResult {
  success: boolean
  error?: ApiErrorShape
}
