import AuthManager from './auth-manager'
import { API_BASE_URL } from './constants'
import { HttpClient } from './http-client'
import {
  LoginResult,
  ApiErrorShape,
  TokenResponse,
  RegisterResponse,
} from './types'

class ApiClient {
  private authManager: AuthManager
  private httpClient: HttpClient

  constructor() {
    this.authManager = new AuthManager()
    this.httpClient = new HttpClient(API_BASE_URL, this.authManager)
  }

  get isAuthenticated(): boolean {
    return this.authManager.isAuthenticated
  }

  logout(): void {
    this.authManager.logout()
  }

  async register(formData: FormData): Promise<RegisterResponse> {
    return this.httpClient.request<RegisterResponse>('register', {
      method: 'POST',
      body: formData,
      includeAuth: false,
    })
  }

  async login(trackingNumber: string): Promise<LoginResult> {
    const formData = new FormData()
    formData.append('tracking_number', trackingNumber)

    try {
      const result = await this.httpClient.request<TokenResponse>('login', {
        method: 'POST',
        body: formData,
        includeAuth: false,
      })

      this.authManager.token = result.token
      return { success: true }
    } catch (err) {
      return { success: false, error: err as ApiErrorShape }
    }
  }

  async getTracking<T = any>(): Promise<T> {
    return this.httpClient.request<T>('tracking')
  }
}

const apiClient = new ApiClient()
export default apiClient
